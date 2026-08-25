# DSH E-Ink Retro UI Theme

一个可直接由 DeepSeek Harness 加载的主题插件。它保留 DSH 原生的侧栏、对话、详情、工具调用与插件结构，通过官方 `ctx.theme.overrideTokens()` 统一 DSH 的语义令牌，再用严格限定作用域的 CSS 提供可选沉浸效果。

视觉语言来自黑白电子纸与经典 Macintosh，但不是复刻旧系统：纸白、墨黑、离散灰阶、反白选中、硬边框、3px 小圆角与按下位移；正文保持现代无衬线字体，代码才使用等宽字体。没有 TUI、终端面板、跑马灯或额外菜单栏。

## 三种覆盖模式

在 **设置 → E‑Ink Retro** 中切换：

- **平衡模式（默认）**：统一 DSH 壳层、弹层和控件；保留第三方插件的数据图表、状态告警、品牌色、宠物和内容颜色。
- **完全沉浸**：在平衡模式之上，把已适配的第三方数据标记、装饰皮肤和宠物按亮度映射为灰阶。
- **暂停主题**：释放令牌覆盖，显示当前 DSH 或第三方皮肤的原始外观。

切换到另一套第三方皮肤时，E‑Ink Retro 会自动让位；回到 DSH 默认浅色、深色或跟随系统后恢复。无论使用哪种模式，用户消息中的图片、附件、视频、Canvas 和 iframe 内容都不会被全局滤镜改色。

## 本地开发加载

```powershell
npm install
npm run check
dsh plugin --profile web add link:C:/path/to/dsh-theme-eink-retro
```

修改 `src/theme.css` 或 `src/client/` 后运行 `npm run build`，然后刷新 DSH 页面即可检视。插件卸载、暂停或热重载时会自动移除样式、令牌层和根属性，不污染其他主题。

## 兼容与调研

- [组件兼容检查清单](docs/component-compatibility.md)
- [DSH 主题生态与成熟写法调研](docs/theme-compatibility-research.md)
- [实机审计截图](docs/audit)

## 文件结构

- `src/client/tokens.ts`：平衡模式的官方 DSH 语义令牌映射。
- `src/theme.css`：设置界面与完全沉浸模式的限定作用域规则。
- `src/client/index.ts`：模式设置、令牌覆盖、第三方皮肤让位与生命周期清理。
- `src/host/index.ts`：标准 DSH 插件 host 入口。
- `cordis.patch.yml`：把插件插入 DSH profile。
- `tests/theme.test.mjs`：检查包结构、核心令牌覆盖与“无结构注入”边界。
