# DSH 主题兼容性研究：官方主题接口、社区实现与双模式架构

> 研究日期：2026-08-25  
> 研究范围：DeepSeek Harness（DSH）Web 主题系统、插件加载与设置接口，以及公开社区主题的源码实现。  
> 证据规则：DSH 行为以官方仓库的文档和源码为准；社区项目只用于比较实现策略，不视为官方规范。市场热度是会变化的快照，不作为技术正确性的替代品。

## 结论先行

本仓库不应继续把“主题”理解为一张全局 CSS 皮肤。更稳妥的结构是两层：

1. **平衡模式（默认）**：只通过官方 `ctx.theme.overrideTokens()` 覆盖 `--dsw-alias-*` 与经过验证的 `--dsw-specific-*` 语义 token；每个 token 同时提供 `light` / `dark`；保留 DSH 的 `light` / `dark` / `system` 外观偏好、状态颜色含义、焦点、代码高亮和第三方插件内容色。DSH 官方明确规定主题状态由 `ThemeRuntime` 管理，功能组件只消费语义 alias，不应自建全局主题或在组件 CSS 中写主题分支。[官方 ui-theme 说明](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/README.md) · [官方 Web styling 规范](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/web-styling.md)
2. **完全沉浸模式（可选）**：在平衡模式 token 层之上，增加一个有根属性作用域、可回收的 CSS/装饰层，只负责 E-Ink 的硬边、低圆角、点阵纹理、装饰资产和少量稳定结构适配。所有第三方插件专用选择器放进独立兼容适配器，不与核心 token 混在一起。社区沉浸式皮肤证明“一属性 + 一 style + 完整析构”可行，但其大量结构选择器也说明它天然比 token 层更易受 DSH DOM 更新影响。[naniwet/dsh-themes 客户端源码](https://github.com/naniwet/dsh-themes/blob/main/client.js)
3. **当前实现应被视为“沉浸模式原型”，不是兼容性最好的主题基线**：它直接创建全局 `<style>`、在 `html` 上挂属性、以 `!important` 覆盖官方 token，同时覆盖表单/ARIA 角色/面板/图片 URL 和 `--aion-*`。这能产生强烈外观，但绕过了官方主题层的组合、切换、检查和 disposer 语义。[当前客户端入口](../src/client/index.ts) · [当前主题样式](../src/theme.css) · [官方 ThemeRuntime 源码](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/src/client/index.ts)

## 1. DSH 官方主题系统的真实边界

### 1.1 ThemeRuntime 管状态，ui-layout 管 DOM

`@deepseek-ai/dsh-client-ui-theme` 是 `--dsw-*` token 样式表之上的运行时。它拥有 `light`、`dark`、`system` 偏好，使用 `prefers-color-scheme` 解析 `system`，并在 `theme/change` 上发布不可变 `ThemeSnapshot`；它本身不操作 DOM。`ui-layout` 的 presenter 才把结果写成 `html { color-scheme }`、`body[data-ds-dark-theme]` 和 `body` 内联 alias token。[官方 ui-theme README](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/README.md) · [官方 ui-layout README](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-layout/README.md)

这意味着：

- 插件不应自行把 `color-scheme` 固定成 light 或 dark；它应让 host 的 Appearance 继续决定活动色系。[ThemeDefinition 与 ThemeSnapshot 源码](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/src/client/index.ts)
- 主题 token 写在 `body` 内联变量后，普通 DSH 子树、挂到 `body` 的 portal、设置弹层和菜单都可自然继承；这是第三方 UI 兼容的关键。[ui-theme README](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/README.md)
- 原生表单控件的明暗外观由 presenter 写入 `html` 的 `color-scheme` 协调；主题不应另造相反的全局色系。[ui-layout README](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-layout/README.md)

### 1.2 两种官方扩展方式

官方源码提供两种不同语义：

- `theme.register({ id, colorScheme, tokens })`：注册一个可被选择的具体主题。`system` 只是偏好，不是可注册 id；重复 id 会报错；返回 disposer。适合“11 套独立主题”一类主题包。[ThemeRuntime.register 源码](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/src/client/index.ts)
- `theme.overrideTokens(source, overrides)`：给当前活动主题叠加一层局部覆盖，不改变主题注册表。后注册层按 token 胜出；相同 `source` 再调用会替换整层并置顶；返回只移除本层的 disposer。适合本仓库这种“无论用户选 light / dark / system，都施加 E-Ink 视觉”的插件。[ThemeRuntime.overrideTokens 源码](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/src/client/index.ts)

本仓库应选 `overrideTokens` 作为核心，因为用户需要的是 E-Ink 风格层，而不是额外出现两个互斥主题 id。若以后要同时提供多个风格包，再考虑 `register()`。

### 1.3 每个覆盖值必须同时给出 light / dark

`ThemeTokenOverrides` 的每一项必须是 `{ light: string, dark: string }`。官方源码说明两个模式都强制提供，即使值不变也要重复；裸字符串会在运行时报教学错误。这是为了避免用户切换到另一色系时出现不可读组合。[ThemeTokenModes 与校验契约](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/src/client/index.ts)

建议的生命周期形状：

```ts
ctx.effect(() => {
  const disposeTokens = ctx.theme.overrideTokens(PACKAGE_ID, overrides)
  return disposeTokens
}, "dsh-theme-eink-retro: theme tokens")
```

实时更新设置时，要先创建新层，再释放旧 disposer，或明确保存最新 disposer；`oil-oil/dsh-theme` 的源码采用这一形状，并监听 `theme/change` 同步 Host 外观状态。[oil-oil/dsh-theme 客户端源码](https://github.com/oil-oil/dsh-theme/blob/main/src/client/index.tsx)

### 1.4 官方内置主题为何看起来“没有 token”

内置 `light` 和 `dark` 的 `ThemeDefinition.tokens` 是空对象，因为真实值由五张官方全局样式表拥有：`base.css`、`design-platform.css`、`scrollbar.css`、`gradient-shadow-text.css`、`shiki.css`。内置主题只选择基础色板，第三方主题再叠加 alias。[官方 ui-theme README](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/README.md) · [ThemeRuntime 内置定义源码](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/src/client/index.ts)

因此不能只看 `BUILTIN_THEMES` 的空 token 就推断“官方没有主题 API”；相反，真正的内置实现是：

- `design-platform.css` 在 `body` 声明浅色语义 alias；
- 在 `body[data-ds-dark-theme]` 重写暗色 alias；
- `shiki.css` 负责代码语法色；
- `scrollbar.css` 是滚动条 token 的唯一消费者，并允许弹层重绑定 l2 滚动条色。[官方 design-platform.css](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/src/styles/design-platform.css) · [官方 ui-theme README](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/README.md)

### 1.5 什么 token 可覆盖

官方公开检查目录最少列出：应用背景、layer 1/2、overlay、border l1/l2、brand、主/次文字、error/success/warn、sidebar fill。`design-platform.css` 还定义了更完整的 alias/specific 角色：遮罩、按钮、交互态、Markdown、滚动条、toast、tooltip、bubble、input、menu、selector、sidebar、tip 等。[ThemeRuntime inspect token 源码](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/src/client/index.ts) · [design-platform.css](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/src/styles/design-platform.css)

稳定性分层应是：

| 层级 | 内容 | 本仓库策略 |
|---|---|---|
| A：官方主题契约 | `ctx.theme`、`theme/change`、`--dsw-alias-*`、官方 `--dsw-specific-*` | 平衡模式核心；必须完整清理 |
| B：官方呈现状态 | `body[data-ds-dark-theme]`、`html color-scheme` | 只读取/跟随，不自行固定 |
| C：结构语义 | ARIA role、明确的 `data-*`、公开 slot | 沉浸模式少量使用；逐版验证 |
| D：实现细节 | 哈希 class、DOM 层级、URL 子串、`:has()` 祖先筛选、第三方私有 token | 隔离到兼容适配器，默认关闭或可单独禁用 |

上述 A/B 来自官方公开实现；C/D 的风险判断是基于官方 Styling 规范要求功能组件通过语义 token/CSS Modules 消费样式，而不是把组件 DOM 结构定义为主题 API。[Web styling 规范](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/web-styling.md)

## 2. 插件与设置 API：主题如何正确进入 DSH

### 2.1 manifest 与服务注入不是同一件事

DSH 客户端包的 `dsh.client.platform` 应为 `web`，并提供 `./client` export。manifest 里的 `dsh.client.inject` 是包名级信息边，用于预检和 HMR 差异；它不决定 Cordis 激活顺序。真正等待 `theme` 服务的是客户端导出的 `inject = ["theme"]`。官方明确区分 Cordis service inject、模块 external 和 `dsh.client.inject`。[官方客户端包规则](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/AGENTS.md)

对本仓库的含义：

- `package.json` 目前只列 `@deepseek-ai/dsh-client-runtime`，而客户端 `inject` 是空数组；这与“直接注入 CSS”相符，却没有声明它真实需要的 `theme` 服务。[当前 package.json](../package.json) · [当前客户端入口](../src/client/index.ts)
- 改造时应让源码 `inject` 至少包含 `theme`；若提供设置 UI，还需 `slots`、`locale`，以及选择持久化方案对应的 `settingsScope`。社区成熟实现的声明分别是 `['slots','locale','theme']` 和 `['theme','settingsScope','slots','locale']`。[oil-oil 客户端源码](https://github.com/oil-oil/dsh-theme/blob/main/src/client/index.tsx) · [orxz 主题选择器源码](https://github.com/orxz/deepseek-harness-themes/blob/main/packages/ui/src/client.ts)

### 2.2 设置 UI 必须走 slots

官方客户端架构规定插件只通过 `ctx.slots.register(...)` 组合 UI，跨包呈现不得直接 import 另一个插件的实现。设置贡献应先 `ctx.slots.inject(name, () => ctx.slots.register(...))`，因为 apply 顺序无保证。[官方客户端 slot 规则](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/AGENTS.md)

社区源码展示了两个合适位置：

- `settings.general.item`：适合一个“E-Ink 模式”行，紧邻官方 Appearance；`orxz` 用 id `themes`、order 11，正好在官方 Appearance（order 10）之后。[orxz picker 源码](https://github.com/orxz/deepseek-harness-themes/blob/main/packages/ui/src/client.ts) · [官方 ThemeRuntime 设置注册源码](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/src/client/index.ts)
- `settings.section`：适合较多调色、字体和高级选项；`oil-oil` 用 id `dsh-theme`、order 5 注册完整 Theme Studio。[oil-oil 客户端源码](https://github.com/oil-oil/dsh-theme/blob/main/src/client/index.tsx)

本仓库建议默认只提供一个 General 行：`平衡 / 完全沉浸`。第三方插件适配和效果强度放进可展开高级区域，避免主题设置本身变成复杂工作台。

### 2.3 持久化边界

官方内置 `light/dark/system` 在本机 loopback 浏览器通过 Host settings API 持久化到 `$DSH_HOME/settings.yaml`；远程浏览器无法使用特权设置 API，偏好只在进程内。第三方注册的 theme id 不进入内置 schema。[官方 ui-theme README](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/README.md)

社区有两种经过源码验证的做法：

- 浏览器本地：`oil-oil` 把主题工作室配置写入浏览器存储；简单、即时，但不跨 origin/浏览器。[oil-oil persistence 源码](https://github.com/oil-oil/dsh-theme/blob/main/src/client/persistence.ts)
- 自有 namespace：`orxz` 用 `settingsScope.bind({ namespace })` 持久化第三方选择，并监听 `theme/change`；这要求组合中真实存在对应设置能力，且仍要理解 remote browser 边界。[orxz picker 源码](https://github.com/orxz/deepseek-harness-themes/blob/main/packages/ui/src/client.ts)

建议：v1 用带 schema version 的 `localStorage` 保存 `mode` 和兼容开关，不接管官方 Appearance；若未来要跨设备/跨浏览器同步，再增加 Host 半区和自有 settings/RPC，而不是把第三方字段塞进 `ui-theme.preference`。

### 2.4 安装与配置叠加

官方插件发布通过 `dsh.bundle.patch` 把插件行加入 profile，`dsh plugin add` 安装；`dsh --profile web --dump-config` 可检查最终组合。profile patch 的后层会赢，配置行的 `config` 是整体替换而非逐键深合并，社区沉浸式主题也特别提醒必须保留整块配置。[官方发布文档](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/develop/basic/publish.md) · [naniwet/dsh-themes README](https://github.com/naniwet/dsh-themes)

## 3. 社区主题源码横向比较

DSH 官方仓库当前公开的分发路径是 bundle/profile 与 `dsh plugin add`，没有官方 Marketplace 或 Workshop；网上的 DSH Market、Marketplace、插件工坊均是第三方发现目录，不代表 DeepSeek 官方背书。当前社区市场页面把 Themes & Appearance 单列，并显示主题项目数量与 GitHub 热度；本研究从中选择“纯 token”“完整主题注册”“混合首屏注入”“强沉浸式”四种代表，而不是按星数简单排名。[官方发布文档](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/develop/basic/publish.md) · [社区主题目录快照](https://dshmarketplace.dev/?category=theme) · [社区 dsh-market 源码](https://github.com/dsh-market/dsh-market)

### 3.1 对比表

| 项目 | 核心作用域 | token 覆盖 | 设置与持久化 | 深浅模式 | 第三方兼容特点 | 可借鉴 / 不应照搬 |
|---|---|---|---|---|---|---|
| [oil-oil/dsh-theme](https://github.com/oil-oil/dsh-theme) | 官方 `ctx.theme`；自身设置页 CSS | `overrideTokens`；背景/层级/边框/文字/交互/sidebar/bubble/Markdown/字体 | `settings.section`；版本化浏览器存储 | 每个 token 都构造 `{light,dark}`；监听 `theme/change` | 让使用 DSH alias 的第三方 UI 自动继承；几乎不碰 Host DOM | **平衡模式首选范本**；其主题工作室选项对本仓库可精简 |
| [orxz/deepseek-harness-themes](https://github.com/orxz/deepseek-harness-themes) | 官方注册表 + General picker | 11 个 `ThemeDefinition`，带 required/recommended token 合约与覆盖测试 | 自有 settings namespace；`settings.general.item` order 11 | 每个主题明确 `colorScheme`；第三方选择自管 | token 面广，代码/terminal/tool UI 更容易一致 | **完整 token 清单范本**；本仓库无需把 E-Ink 拆成额外 theme id |
| [BeiZi6/dsh-theme-plugin](https://github.com/BeiZi6/dsh-theme-plugin) | 客户端 token + Host `tapIndex` 头部 style | 由背景/前景/强调推导 70+ token | `settings.section`；localStorage | `html body` / `body[data-ds-dark-theme]` 两套，客户端也传 light/dark | 早期首屏少闪烁；保留 status 语义色 | **混合方案参考**；双份派生逻辑和高特异性 head CSS 增加维护成本 |
| [naniwet/dsh-themes](https://github.com/naniwet/dsh-themes) | `body[data-dsh-theme]` + 单一 style + 装饰层 | 部分语义 token，同时大量组件/结构样式 | General picker；localStorage | 独立浅/暗 palette 与图片 | 主题关闭时完整移除 attribute/style/meta/装饰；支持 reduced motion | **沉浸模式生命周期范本**；大量 DOM/类选择器不可进入默认核心 |
| [RevolutionLA/dsh-dream-skin](https://github.com/RevolutionLA/dsh-dream-skin) | 官方主题注册 + token + 壁纸层 | 注册多主题，另叠加透明表面 token | General 设置；主题包导入/导出与自定义 | 每套主题声明 `colorScheme` | 较高使用热度的“原生 token + 壁纸”路线 | 证明沉浸感不必靠全局改每个组件；功能规模远超本仓库需求 |

### 3.2 `oil-oil/dsh-theme`：纯 override 的强基线

其客户端源码明确注入 `slots`、`locale`、`theme`，调用 `ctx.theme.overrideTokens('dsh-theme', buildThemeTokenOverrides(...))`，保存 disposer，并在主题设置改变时替换旧覆盖；同时监听 `theme/change` 同步当前 preference 和活动 `colorScheme`。[客户端源码](https://github.com/oil-oil/dsh-theme/blob/main/src/client/index.tsx)

其 token builder 统一用 `pair()` 生成 light/dark，对 background、layer 1/2/3、overlay、border、brand、label、interaction、sidebar、bubble、Markdown 与字体做覆盖；只有 Host 缺少语义 token 的 TurnStatus 被集中标记为静态 scale 例外，而不是在各组件里零散覆盖。[token builder 源码](https://github.com/oil-oil/dsh-theme/blob/main/src/client/theme-tokens.ts)

可直接借鉴：token 生成函数纯化、同一 source、disposer、设置版本化、theme/change 同步。不能照搬：其开放任意颜色和字体的 Theme Studio 会削弱本仓库“经过验证的一套 E-Ink 视觉”定位。

### 3.3 `orxz/deepseek-harness-themes`：完整性测试范本

该项目把 11 个主题和 `REQUIRED_TOKENS` 放进 core，UI 包只负责注册与选择。规范把背景/层、文字、品牌与状态、边框、交互、Markdown code、滚动条、tooltip/bubble/sidebar 列为 required/recommended 范围，避免“只改主背景，弹层或代码仍是原主题”的半主题状态。[主题规范](https://github.com/orxz/deepseek-harness-themes/blob/main/docs/theme-spec.md) · [core token 契约源码](https://github.com/orxz/deepseek-harness-themes/blob/main/packages/core/src/tokens.ts)

UI 源码用 `ctx.effect(() => registerThemes(...))` 获取统一 disposer，绑定自有 settings namespace，监听 `theme/change`，并将 picker 放在 `settings.general.item` order 11。[picker 源码](https://github.com/orxz/deepseek-harness-themes/blob/main/packages/ui/src/client.ts)

可直接借鉴：建立本仓库自己的“token coverage 测试”，从官方 `design-platform.css` 角色清单生成或人工维护，不把遗漏交给视觉验收偶然发现。

### 3.4 `BeiZi6/dsh-theme-plugin`：混合模式的收益与代价

Host 源码通过 `webServer.tapIndex` 在 `</head>` 前注入 `<style>`，用 `html body` 与 `html body[data-ds-dark-theme]` 提高特异性；客户端再通过 `ctx.theme.overrideTokens()` 即时更新并把选择存到 localStorage。[Host 源码](https://github.com/BeiZi6/dsh-theme-plugin/blob/main/index.js) · [客户端源码](https://github.com/BeiZi6/dsh-theme-plugin/blob/main/client.js)

收益是首屏在客户端插件完全激活前已有主题，减少闪烁。代价是同一颜色派生逻辑在 Host 与 Client 两份维护，而且 head CSS 和 presenter 的 body 内联 token 形成两套级联来源。除非真实测试证明首屏闪烁不可接受，本仓库不应在 v1 引入 Host 注入；官方 ui-theme 自身已有同步 bootstrap 处理内置外观偏好。[官方 ui-theme README](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/README.md)

### 3.5 `naniwet/dsh-themes`：沉浸层的正确生命周期与脆弱面

源码将所有规则约束在 `body[data-dsh-theme]`，拥有一个 `<style>`、一个装饰层和一个 `meta theme-color`；`ctx.effect` disposer 会移除 style、meta、装饰元素和作用域属性。动效在 `prefers-reduced-motion` 下关闭。[客户端源码](https://github.com/naniwet/dsh-themes/blob/main/client.js)

它同时替换背景、sidebar 艺术、wordmark、图标、empty logo、favicon，并重绘 composer、消息、tool rows、卡片、dialog、scrollbar、focus、selection。沉浸效果明显，但组件类/结构选择器属于 DSH 实现细节；本仓库应只学习“单作用域、单资源所有者、完整析构”，不应把这类选择器混进平衡层。[项目 README](https://github.com/naniwet/dsh-themes)

## 4. 本仓库建议架构

### 4.1 分层模型

```text
Host Appearance: light / dark / system
                 │
                 ▼
官方 ThemeRuntime + ThemePresenter
                 │
                 ▼
Layer 1：E-Ink semantic tokens（平衡、始终存在）
                 │
        用户选择 immersive？
          ┌──────┴──────┐
          否             是
          │              ▼
          │    Layer 2：沉浸式 scoped CSS
          │              │
          │              ▼
          │    Layer 3：按插件启用的 compat adapters
          └──────────────┘
```

Layer 1 由官方 `overrideTokens` 管理，Layer 2/3 由独立 `ctx.effect` 和 DOM disposer 管理。这样关闭沉浸层时不影响 E-Ink 调色板，卸载插件时两类资源都可恢复。[ThemeRuntime override disposer](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/src/client/index.ts) · [社区 scoped disposer 范例](https://github.com/naniwet/dsh-themes/blob/main/client.js)

### 4.2 平衡模式（默认）

职责：

- 只输出官方语义 token 对；不创建主题 DOM 选择器，不覆盖第三方私有 token。[官方 Web styling 规范](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/web-styling.md)
- 明暗配色来自 `docs/eink-visual-research.md`，每项形成 `{light,dark}`。
- 保留 error / success / warn 的类别可辨认性。可降低饱和度，但不能把三者压成近似灰；官方把它们定义为独立语义 token，社区成熟主题也保留 stock meaning。[官方 design-platform.css](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/src/styles/design-platform.css) · [BeiZi6 README](https://github.com/BeiZi6/dsh-theme-plugin)
- 不改 DSH 布局、DOM 顺序、固定定位和尺寸。
- 代码区背景、行内代码、Shiki 语法、diff/terminal 的可读性单独验收；不能为了“全灰”让语法角色或增删行失去区分。官方将 shiki 作为独立主题样式表，并要求 terminal/diff 保持组件契约。[ui-theme README](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/README.md) · [Web styling 规范](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/web-styling.md)
- 第三方插件只要消费 `--dsw-alias-*` 就自动继承；硬编码颜色、canvas、Shadow DOM、iframe 不强行改色。

推荐 token 覆盖域：

| 域 | 至少覆盖 |
|---|---|
| 应用与表面 | `bg-base`、`bg-layer-1/2/3`、`bg-overlay`、`bg-module-platform` |
| 遮罩与加载 | `bg-mask-*`、`bg-skeleton`，保持叠层和照片遮罩差异 |
| 文字 | `label-primary/secondary/tertiary/caption/dimmed` 及 inverted/foreground |
| 边框 | `border-l1/l2/l3/l4`、暗色薄边、inverted |
| 品牌与按钮 | brand、primary/info/ghost/floating/elevated、hover/active/dimmed |
| 交互 | hover、hover-solid、hover-accent、active、danger hover |
| 语义状态 | business、error、success、warn 的 primary/secondary/tertiary/label |
| 内容 | citation、inline code、code block/banner、selected/unselected、tag、placeholder |
| 浮层反馈 | toast、tooltip、menu、selector、input、tip |
| 对话与导航 | bubble/highlight、sidebar fill/active/hover/accent |
| 滚动条 | l1/l2 thumb 与 hover；遵守官方 container rebind 机制 |

这份覆盖域来自官方 `design-platform.css` 的实际声明，不是社区自行发明的 token 表。[官方 design-platform.css](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/src/styles/design-platform.css)

### 4.3 完全沉浸模式（显式开启）

只承担 token 无法表达的部分：

- 低圆角/直角、1px 硬边、无模糊阴影；
- 选中态反白或网点；
- 面板分隔的纸张层次；
- 局部 E-Ink 网点与残影纹理；
- 可选的装饰图标/空状态处理；
- 精确白名单内的第三方 shell 适配。

实现约束：

1. 用一个属性，如 `html[data-eink-mode="immersive"]`，所有规则用低特异性 `:where(...)` 作用域；不要依赖 `!important` 作为主要竞争策略。
2. 一个 `<style>` 所有者或一个由 bundler 所有的动态样式资源；disposer 移除属性、style、装饰层和监听器。[naniwet 客户端完整析构](https://github.com/naniwet/dsh-themes/blob/main/client.js)
3. 不使用全局 `* { filter: grayscale(...) }`，不处理用户图片、附件、预览、图表和状态图标；这类内容承载信息，不是装饰。
4. 只用稳定语义/ARIA/data selector 覆盖通用控件；哈希 class、DOM 层级与 URL 子串只能进 `compat/`，每个适配器记录目标插件与验证版本。社区背景插件明确承认哈希 class 更新后会断裂，这正是应隔离而不是扩大使用的证据。[dsh-plugin-background-image 已知限制](https://github.com/Voyage-He/dsh-plugin-background-image/blob/main/README.md)
5. 保留 `:focus-visible`，并尊重 `prefers-reduced-motion`。官方 styling 规则明确要求焦点和 reduced-motion 行为；沉浸皮肤源码也这样处理。[官方 Web styling](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/web-styling.md) · [naniwet 客户端源码](https://github.com/naniwet/dsh-themes/blob/main/client.js)
6. 任何背景图片/装饰资源由 Host 静态路由服务或打包为浏览器资产，不向浏览器暴露本机文件路径。[naniwet 资源路由实现](https://github.com/naniwet/dsh-themes/blob/main/theme-route.js) · [YangAtC 背景主题说明](https://github.com/YangAtC/dsh-theme)

### 4.4 设置模型

建议最小设置：

| 设置 | 默认 | 说明 |
|---|---|---|
| E-Ink 风格 | 开 | token layer 总开关；关闭即释放 override disposer |
| 显示模式 | 平衡 | `平衡` / `完全沉浸` |
| 第三方内容颜色 | 保留 | `保留` / `柔化`；不提供默认全灰 |
| 纸张纹理 | 轻微 | 仅沉浸模式；`关` / `轻微` / `明显` |
| 第三方适配 | 自动安全项 | 每个插件独立开关；未知插件不猜测 |

Appearance 的 `light / dark / system` 保持 Host 所有，不在本插件复制一套外观选择器。[官方 ThemeRuntime 所有权](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/README.md)

## 5. 组件兼容清单

### 5.1 DSH 核心与官方 UI

| 组件面 | 平衡模式预期 | 沉浸模式额外处理 | 验收重点 |
|---|---|---|---|
| `html/body` 与 theme presenter | 跟随 Host `color-scheme` 和 dark attribute | 只挂独立 mode 属性 | system 切换；卸载恢复；meta theme-color |
| AppFrame：sidebar / conversation / details | 通过 background/sidebar/border token | 可加 1px 面板硬边；不改尺寸与布局 | 三栏、折叠、窄屏、空态 |
| settings section / general item | 自动继承 aliases | 控件低圆角、硬边 | 本插件设置与其他插件设置同时存在 |
| dialog / popover / menu / tooltip / toast | overlay/menu/tooltip/toast token | 可去 blur/软阴影 | portal 在 body 下仍命中；层级不透明度 |
| button / input / select / textarea / contenteditable | button/input/interaction token | 只处理 radius/border；不统一所有 role 尺寸 | hover、active、disabled、focus-visible、IME |
| Markdown prose | label/markdown token | blockquote/hr/table 硬边 | 链接、引用、表格、长文层次 |
| inline code / code block / Shiki | markdown 与 shiki 角色 | 只改容器边界 | 语法可辨、复制、横向滚动 |
| diff / terminal / tool call | 保留语义色和列宽 | 容器硬边，内容色保留 | add/delete、ANSI、长行不换行 |
| user bubble / citation / tag | bubble 与 markdown token | 可加网点选中态 | 用户/助手、引用 hover、可读性 |
| scrollbar | 官方 l1/l2 token | 可改为窄硬边，但不重复实现两套浏览器路径 | 主面、侧栏、弹层、hover |
| mask / skeleton / photo overlay | mask/skeleton token | 不给照片本体 grayscale | modal、drop、预览、加载 |
| keyboard focus / motion | 保留官方行为 | 增强 focus ring；reduced motion 关闭纹理动画 | 键盘全流程、系统减弱动态 |

AppFrame 的主要 slot/区域由官方 ui-layout 定义，主题不应通过 DOM 重排去“适配”。[官方 ui-layout README](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-layout/README.md) · [官方 slot/组件规则](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/AGENTS.md)

### 5.2 第三方插件与不可穿透边界

| 类型 | 默认策略 | 原因 / 适配方式 |
|---|---|---|
| 使用 `--dsw-alias-*` 的插件 | 自动继承平衡模式 | 这是官方跨组件视觉契约。[Web styling](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/web-styling.md) |
| 自有 CSS 但使用 ARIA/data 语义 | 仅在沉浸模式做低风险几何适配 | 颜色仍优先由 token；不要用 `!important` 大面积接管 |
| 硬编码颜色的 DOM/SVG | 默认保留；按插件白名单柔化 | 强制全灰可能破坏状态/图表意义 |
| canvas/WebGL | 默认保留 | 父级 CSS token/颜色无法可靠改内部像素；需插件自身 API |
| Shadow DOM | 默认保留 | 外层 CSS 不能穿透；只有公开 custom properties/parts 可适配 |
| iframe | 默认保留 | 不同文档/可能跨源；需 iframe 内部主题支持 |
| Portal 到 `body` | token 自动继承；沉浸 selector 不能只写 root 后代 | 官方 presenter 把 token 放在 body，正为全局呈现服务。[ui-theme README](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/README.md) |
| 用户图片、附件、截图、媒体 | 永远保留原色 | 内容真实性和可读性优先；纸张感来自外围容器 |

### 5.3 当前仓库已写的第三方适配评估

| 当前写法 | 风险 | 建议归属 |
|---|---|---|
| `.lc-root` 及图表类别全面灰化 | 中高：图表颜色常承载分类 | 沉浸 `compat/dsh-context.css`，默认“保留内容色” |
| 全局 `--aion-*` 覆盖 | 高：不是 DSH 官方 `--dsw-*` 契约，命名/语义由第三方所有 | 移出平衡层；确认 Aion 插件公开契约后建立专用 adapter |
| `img[src*="/api/skin-center/"]` / `/pet/` spritesheet grayscale | 中：URL 是实现细节，但对象偏装饰 | 沉浸专用 adapter，可单独关闭 |
| `body:has(...) > div:first-child` | 极高：祖先与第一个子节点范围过大，可能误伤整个 shell | 删除或换成插件明确根标记；不可进入兼容默认项 |
| `[data-pane]` 面板 | 中：比哈希 class 稳定，但并非官方主题 token API | 仅沉浸层面板硬边；颜色回到 token |
| 全局 `button/input/.../[role=*]` 圆角 | 中高：会改第三方组件自身几何契约 | 沉浸层拆成表单、菜单、dialog 白名单；避免所有 `[role=button]` |

以上是对[当前 theme.css](../src/theme.css)的静态审计；稳定性判断以官方“功能 CSS 使用语义 alias、组件样式由 CSS Modules 所有”的规则为基准。[官方 Web styling](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/web-styling.md)

## 6. 建议的仓库模块边界（设计稿，不是本次代码变更）

```text
src/client/
  index.ts                 # 注入 theme / slots / locale；协调生命周期
  tokens.ts                # 官方 semantic token light/dark 对
  settings.ts              # 版本化设置与默认值
  mode.ts                  # balanced / immersive 状态
  immersive/
    index.ts               # 单一 attribute/style disposer
    shell.css              # E-Ink 几何与纸张细节
    content.css            # Markdown/代码容器，不改内容色
  compat/
    registry.ts            # adapter 清单、版本与开关
    dsh-context.css        # 可选
    aion.css               # 仅在确认公开 token 后存在
    skin-center.css        # 可选装饰处理
  ui/
    AppearanceRow.tsx      # settings.general.item
    styles.module.css      # 仅插件自有 UI
```

官方要求跨包 UI 通过 slots/services、组件样式用 CSS Modules、`ctx` 只存在于 apply 世界；这个边界与官方客户端包纪律一致。[官方客户端包规则](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/AGENTS.md)

关键资源分别有独立 disposer：

- `disposeThemeTokens`
- `disposeImmersiveStyle`
- `disposeSettingsSlot`
- `disposeThemeChangeListener`
- `disposeCompatAdapters[]`

任何一个开关变化只替换对应资源，不重建整个插件。官方 `ctx.effect` 与 `ThemeRuntime` 返回 disposer 的设计就是为了支持这一可逆组合。[ThemeRuntime 源码](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/src/client/index.ts)

## 7. 兼容验收与回归矩阵

### 7.1 必测状态

- Host Appearance：light、dark、system（启动时浅/暗各一次，运行中 OS 切换一次）。
- 插件模式：关闭、平衡、完全沉浸。
- 生命周期：首次加载、热重载、同 source 重设 token、插件卸载、重新安装。
- 视口：宽屏三栏、窄屏、侧栏折叠、details 打开/关闭。
- 内容：空会话、长 Markdown、表格、引用、inline code、Shiki code、diff、terminal、tool calls、图片/附件。
- 浮层：settings、dialog、menu、popover、tooltip、toast、command surface。
- 交互：hover、active、disabled、selected、error/success/warn、focus-visible、键盘导航、IME。
- 可访问性：`prefers-reduced-motion`、Windows forced colors（至少确认主题不隐藏焦点/控件）、200% zoom。
- 第三方：至少一个纯 token 插件、一个硬编码色插件、一个 portal 插件、dsh-context/Aion/skin-center/pet（若已安装）。

官方规范明确要求可见 UI 改动跑真实 Web 组合测试，并且测试用户可见行为而不是 class name；虽然本仓库不是官方 monorepo，验收原则仍适用。[官方客户端测试规则](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/AGENTS.md)

### 7.2 可自动化断言

1. 每个平衡层 token 值都含 `light` 和 `dark`；无裸字符串。
2. token 列表只包含允许的 `--dsw-alias-*` / 审核过的 `--dsw-specific-*`；静态 `--dsw-static-*` 例外必须有注释和上游缺口链接。
3. 平衡模式 style sheet 不出现第三方 token、URL 子串、`:has()`、哈希 class、全局 `*` 过滤。
4. 切换模式后 `ThemeSnapshot.revision` 变化，关闭后覆盖层恢复。
5. disposer 后无本插件 attribute/style/listener/overlay 残留。
6. 状态色三类在浅/暗模式都能区分；主文字、次文字、边框、选中态达到项目设定对比度。
7. user image / attachment / canvas 不受 `filter: grayscale`。
8. portal 菜单和 dialog 的 token 值与当前模式一致。

`orxz` 已经把 required/recommended token coverage 固化为源码契约，说明“主题完整性测试”是可行而且比截图肉眼检查更可靠的社区实践。[orxz token contract](https://github.com/orxz/deepseek-harness-themes/blob/main/packages/core/src/tokens.ts)

## 8. 当前仓库的优先级建议

### P0：兼容基线

1. 以 `ctx.theme.overrideTokens()` 接管所有官方语义颜色；源码 inject `theme`；disposer 归 `ctx.effect`。
2. 将平衡 token 与沉浸 CSS 拆开，平衡模式默认开启。
3. 恢复 error/success/warn 的类别区别，停止全局把信息色压成同一灰。
4. 把 `--aion-*`、`.lc-root`、skin/pet URL 与 `body:has()` 从核心层隔离。

这些优先级直接来自官方主题所有权、强制 light/dark 对、可组合 override 层和功能组件只消费 alias 的契约。[ui-theme README](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/README.md) · [ThemeRuntime 源码](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/src/client/index.ts) · [Web styling](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/web-styling.md)

### P1：用户可控与完整性

1. General 设置增加 `平衡 / 完全沉浸`。
2. 建立 token coverage 单元测试和 disposer 测试。
3. 为官方核心组件跑浅/暗/浮层/代码/状态回归。
4. 适配器逐个启用，不把“已安装某插件”推断为“允许改其内容色”。

### P2：沉浸增强

1. 将硬边、低圆角、选中网点、纸张纹理做成 scoped CSS。
2. 若真实测试出现首屏闪烁，再评估 Host `tapIndex`，并确保颜色派生只有一个源文件生成两端产物；不要手工复制两份实现。[BeiZi6 Host/Client 实现](https://github.com/BeiZi6/dsh-theme-plugin/blob/main/index.js)
3. 只有第三方插件提供公开 token/part/API 时，才把 adapter 提升为默认安全项。

## 9. 不应采用的做法

- 不把 `html/body/root` 全部强制 `color-scheme: light`；会与 Host Appearance 和暗色 presenter 冲突。[ui-theme README](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/README.md)
- 不以 `!important` + 更长选择器代替官方 inline token override；主题层已提供明确叠加和回收语义。[ThemeRuntime overrideTokens](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/src/client/index.ts)
- 不直接重写官方静态 palette `--dsw-static-*`，除非上游确实缺少语义 alias，而且例外集中、可测试。官方规范要求功能使用 alias，官方也说明新增色先进入 static step 再加 semantic alias。[Web styling](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/web-styling.md) · [ui-theme 已知限制](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/README.md)
- 不用全局 grayscale 处理图表、图片、附件、syntax、diff 和状态色。
- 不用 `body:has(...) > div:first-child` 这类“从一个装饰图反推整个 shell”的规则。
- 不把哈希 class 当稳定兼容接口；社区插件已公开记录过升级断裂风险。[背景插件限制](https://github.com/Voyage-He/dsh-plugin-background-image/blob/main/README.md)
- 不复制官方 Appearance 设置或写入其内置 schema；第三方模式有自己的 namespace/storage。[ui-theme 持久化边界](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/README.md)
- 不把社区 Discussion 中提出的 provider slot 当成已发布 API；#3916 是扩展点提议/讨论，当前可用的稳定依据仍是 `ctx.theme`、settings slots 和源码契约。[官方仓库 Discussion #3916](https://github.com/deepseek-ai/deepseek-harness/discussions/3916)

## 最终建议

本仓库的产品定位应是：**“默认安全地把 DSH 的官方语义界面变成 E-Ink；用户主动开启后，再把壳层做成复古掌机/经典 Macintosh 式沉浸外观。”**

技术上，平衡模式决定兼容性，沉浸模式决定性格。两者必须是可组合、可单独关闭、可完整回收的资源，而不是同一张越来越长的全局 CSS。官方 `ThemeRuntime` 已经提供了平衡层所需的全部生命周期与 light/dark 组合能力；社区源码也表明，强沉浸体验可以存在，但应被明确隔离并承认其结构耦合成本。[官方 ThemeRuntime](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/src/client/index.ts) · [oil-oil token-only 实现](https://github.com/oil-oil/dsh-theme/blob/main/src/client/index.tsx) · [naniwet scoped skin 实现](https://github.com/naniwet/dsh-themes/blob/main/client.js)
