# DSH E-Ink Retro UI Theme

一个可直接由 DeepSeek Harness 加载的主题插件。它保留 DSH 原生的侧栏、对话、详情、工具调用与插件结构，只覆盖官方设计令牌和现有控件表面。

视觉语言来自电子纸与经典 Macintosh，但不是复刻旧系统：暖灰纸面、清晰墨线、3px 小圆角、按下位移、灰绿有限强调色；正文保持现代无衬线字体，代码才使用等宽字体。没有 TUI、终端面板、跑马灯或额外菜单栏。

## 本地开发加载

```powershell
npm install
npm run check
dsh plugin --profile web add link:C:/path/to/dsh-theme-eink-retro
```

修改 `src/theme.css` 后运行 `npm run build`，然后刷新 DSH 页面即可检视。插件卸载或停用时会自动移除样式和根属性，不污染其他主题。

## 文件结构

- `src/theme.css`：全部设计令牌与现有元素表面规则。
- `src/client/index.ts`：原子加载、清理主题样式。
- `src/host/index.ts`：标准 DSH 插件 host 入口。
- `cordis.patch.yml`：把插件插入 DSH profile。
- `tests/theme.test.mjs`：检查包结构、核心令牌覆盖与“无结构注入”边界。
