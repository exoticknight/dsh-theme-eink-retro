# DSH「真正的 E-Ink UI」视觉研究

> 结论日期：2026-08-25  
> 范围：只研究视觉语言与可落地的设计 token，不修改主题代码。  
> 证据等级：E Ink、reMarkable、Amazon Kindle、BOOX、Apple 的官方资料为规范依据；Dribbble 仅作视觉案例，不作为技术或交互规范。

## 一句话结论

当前主题偏绿不是 E-Ink 的必然特征，而是主题把鼠尾草绿同时分配给了品牌色、主按钮、交互选中、侧栏强调、标签与一整组 Aion 色阶，导致绿色覆盖了本应由黑白反差和灰阶承担的层级。真正的电子纸视觉应以**中性偏暖的纸白、近黑墨色、离散灰阶、硬边框和反白选中**为骨架；颜色只用于少量注释或状态，不应成为整页环境色。

E Ink 官方把单色 Carta 描述为 16 级灰阶、接近纸书的对比度并可在阳光下阅读；Kaleido 3 仍以 16 级灰阶为底，只额外提供 4096 种柔和颜色，彩色分辨率也低于黑白分辨率。换言之，灰阶是底盘，颜色是附加信息通道，而不是绿色滤镜。[E Ink Carta 1000](https://www.eink.com/brand/detail/Carta1000) · [E Ink Kaleido 3](https://www.eink.com/brand/detail/Kaleido3?pubDate=20250501)

## 1. 对现有主题的诊断

只读检查 `src/theme.css` 后，偏绿的来源不是纸白本身，而是色彩角色分配：

- `--eink-sage: #65735e` 被复用为 brand、primary button、info、business、Aion primary/brand 等主路径颜色。
- `--eink-sage-soft: #d6ddd0` 被复用为 multi-select、active、tag、bubble highlight、sidebar active 等大面积或高频状态。
- 侧栏选中项同时使用浅绿底、绿斜线和绿底边，进一步把绿色放大成全局主题色。
- 深色模式的背景 `#1c1d1a`、面层 `#252621` / `#30312b` 和整套 sage 色阶均略偏绿，暗部面积越大，综合色偏越明显。

因此应先改“角色”，再改某个十六进制值：**中性灰负责界面结构；主操作与选中态默认用墨黑反白；红、黄、蓝、绿只留给语义状态或注释。** Apple 的 HIG 同样建议颜色要谨慎用于沟通，信息不能只靠颜色传递，且选中、文字、分隔线等应是独立的语义角色，而不是让一个品牌色包办所有状态。[Apple HIG：Color](https://developer.apple.com/design/human-interface-guidelines/color) · [Apple HIG：Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility/)

## 2. 一手资料共同指向的 E-Ink 视觉语言

### 2.1 反射纸张，而不是发光屏幕或彩色塑料

E Ink 官方 FAQ 说明黑白电子墨水的物理基础是白、黑带电粒子，显示依赖环境光反射；官方年度资料也将电子纸概括为反射式、双稳态、阳光下可读。Carta 的 16 灰阶用于平滑图像和细节，Kaleido 的文字仍依赖底层黑白电子墨水。视觉上应模拟“环境光照在纸和墨上”，不应模拟 OLED 的纯黑、霓虹高饱和色、发光描边或玻璃透明层。[E Ink FAQ](https://www.eink.com/tech/detail/FAQ) · [E Ink 2024 年度资料](https://www.eink.com/upload/2025_04_28/51_20250428155204i9ls2kL8C5.pdf) · [E Ink Kaleido](https://www.eink.com/brand/detail/Kaleido)

### 2.2 黑白优先，颜色少而有目的

reMarkable 2 的显示原理就是黑、白粒子互换；Paper Pro 才通过白、青、品红、黄粒子形成八种原生书写色，并明确表示颜色应帮助组织、强调和理解内容，而不是令人分心。reMarkable 官方产品界面也以纸面、黑字、少量工具控件和明确的深色主按钮为主，设备导航以简洁侧栏、文件列表/网格和黑白线性图标组织内容。[reMarkable：How we made Paper Pro](https://remarkable.com/blog/how-we-made-remarkable-paper-pro) · [reMarkable Paper Pro 功能页](https://remarkable.com/products/remarkable-paper/pro/details/features) · [reMarkable：Navigating on your reMarkable](https://support.remarkable.com/articles/Knowledge/Navigating-on-your-reMarkable) · [reMarkable Paper Pro 用户指南](https://image.email.remarkable.com/lib/fe3511737364047c771479/m/1/a8f8ef34-af14-4e9f-9b7f-b6ac6f1e98aa.pdf)

Kindle 官方将电子阅读器深色模式定义为对文字、图像和页面颜色进行反转，而不是更换为某个彩色暗色主题；Colorsoft 发布资料则把颜色用于封面、图片和高亮，并强调颜色不应分散阅读注意力。这支持 DSH 把深色模式做成同一套灰阶的反相版本，同时把彩色限制在内容与标注层。[Kindle E-Reader Dark Mode](https://digprjsurvey.amazon.com/csad/help/node/TZRTRCyYYbxMsMHDu8?theme=light) · [Amazon：Kindle Colorsoft 官方发布资料](https://press.aboutamazon.com/2024/10/amazon-launches-entirely-new-kindle-lineup-including-reimagined-kindle-scribe-and-first-ever-color-kindle)

### 2.3 清晰度和刷新速度存在真实取舍

BOOX 官方把 HD 模式定位为静态阅读、最清晰且残影最少，Speed / Smooth 模式则以部分画质换速度；残影来自墨粒未完全移动，是电子纸的正常技术现象，可通过完整刷新清理。其 Kaleido 3 产品还明确区分黑白 300ppi 与彩色 150ppi，并提醒普通电脑屏幕上的颜色不等同于实际电子纸观感。因此网页主题应把“清晰、静态、离散状态”作为默认，不应为追求所谓电子纸感而给所有内容永久叠一层脏污残影。[BOOX Refresh Modes](https://help.boox.com/hc/en-us/articles/10701257029780-Refresh-Modes) · [BOOX：Understanding E Ink Technology](https://help.boox.com/hc/en-us/articles/360027486972-Understanding-E-Ink-Technology-in-BOOX-Devices) · [BOOX Go Color 7](https://shop.boox.com/products/gocolor7)

### 2.4 经典 Macintosh 值得借的是 1-bit 纪律，不是复古装饰堆叠

Apple 的历史 QuickDraw 文档明确把基础绘图环境称为“黑白绘图环境”，核心是 bitmap 与 bit pattern；1-bit mask 也只允许黑/白两种结果。可借鉴的是整数像素、硬边、重复位图图案和以明暗反转表达状态，而不是大量仿古噪点、厚重投影或彩色做旧。[Inside Macintosh: Imaging with QuickDraw（目录）](https://developer.apple.com/library/archive/documentation/mac/pdf/Imaging_With_QuickDraw/Imaging_TOC.pdf) · [Apple：Bitmap Images and Image Masks](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/dq_images/dq_images.html)

现代 Apple HIG 则补足可用性底线：普通文字至少 4.5:1 对比度、大文字至少 3:1；状态不能只靠颜色；深浅模式都要分别核验。下方建议色板按此校验。[Apple HIG：Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility/)

## 3. DSH 可直接采用的精确色板

以下十六进制值是根据上述物理与界面约束制定的**网页实现建议**，不是厂商屏幕的实测色值。设备白点会受面板、前光和环境光影响，不能把任何一个 RGB 值宣称为“官方 E Ink 白”。

### 3.1 基础灰阶

E Ink 硬件有 16 级灰阶，但界面不需要同时占满 16 档；DSH 建议只暴露 8 个可辨的语义层级，剩余中间值仅供图片抖动或数据可视化。这样既保留电子纸的离散层次，也避免相邻灰阶在普通屏幕和低对比电子纸上糊成一片。[E Ink 7 英寸 Kaleido 3 规格：16 Gray Level](https://www.eink.com/product/detail/EC070KH2)

| Token | 色值 | 用途 |
|---|---:|---|
| `gray-0` | `#F3F1EA` | 纸面基色 |
| `gray-1` | `#E6E3DC` | 次级面、hover |
| `gray-2` | `#D6D2CA` | inset、disabled fill、代码块 |
| `gray-3` | `#B9B5AD` | 普通分隔线 |
| `gray-4` | `#98948C` | 强分隔线、禁用图标 |
| `gray-5` | `#6F6B64` | 三级文字；在纸白上约 `4.69:1` |
| `gray-6` | `#4D4A45` | 次级文字；在纸白上约 `7.80:1` |
| `gray-7` | `#1C1B19` | 主文字、主操作、反白底；在纸白上约 `15.23:1` |

灰阶统一保持轻微暖黄（R≈G，B 略低），禁止 G 通道单独抬高。也就是说，“暖纸”可以，鼠尾草纸不可以。

### 3.2 浅色模式

| 语义角色 | 色值 | 说明 |
|---|---:|---|
| `paper` | `#F3F1EA` | 全局页面；不要用纯白 |
| `paper-bright` | `#FAF9F4` | 弹窗、输入框、阅读主面；仅小面积提亮 |
| `paper-raised` | `#E6E3DC` | 侧栏、工具条、hover |
| `paper-inset` | `#D6D2CA` | 代码块、禁用或凹入区域 |
| `ink-primary` | `#1C1B19` | 正文、标题、主要图标 |
| `ink-secondary` | `#4D4A45` | 辅助说明 |
| `ink-tertiary` | `#6F6B64` | caption；不再更浅 |
| `rule` | `#B9B5AD` | 内容分隔，不承担控件边界 |
| `rule-strong` | `#98948C` | 输入框、按钮、表格外框 |
| `selection-bg` | `#1C1B19` | 当前项、主按钮、文字选区 |
| `selection-fg` | `#FAF9F4` | 反白文字 |
| `focus` | `#1C1B19` | 1px 实线，外偏移 2px |
| `shadow` | `rgba(28,27,25,.18)` | 最多 1–2px 硬偏移，无模糊 |

### 3.3 深色模式

深色模式应视为 Kindle 式反相阅读选项，而不是第二套绿黑品牌。真实电子纸以浅色纸面为默认，因此 DSH 也应保留浅色优先，深色由用户或宿主设置触发。[Kindle E-Reader Dark Mode](https://digprjsurvey.amazon.com/csad/help/node/TZRTRCyYYbxMsMHDu8?theme=light)

| 语义角色 | 色值 | 说明 |
|---|---:|---|
| `paper` | `#1C1B19` | 近黑墨面，不用 `#000000` |
| `paper-bright` | `#24221F` | 主内容面 |
| `paper-raised` | `#2F2D29` | 工具条、hover |
| `paper-inset` | `#161513` | 代码块、凹入区域 |
| `ink-primary` | `#F3F1EA` | 主文字；与背景约 `15.23:1` |
| `ink-secondary` | `#C9C5BC` | 辅助说明；约 `10.00:1` |
| `ink-tertiary` | `#9C9890` | caption；约 `5.99:1` |
| `rule` | `#5B5751` | 普通分隔线；只用于非关键结构 |
| `rule-strong` | `#7B766E` | 控件边界；与背景约 `3.82:1` |
| `selection-bg` | `#F3F1EA` | 当前项与主要选择反相 |
| `selection-fg` | `#1C1B19` | 反相文字 |
| `focus` | `#F3F1EA` | 1px 实线，外偏移 2px |
| `shadow` | `rgba(0,0,0,.45)` | 最多 1–2px 硬偏移，无模糊 |

### 3.4 可选彩色电子纸强调色

默认主线仍为黑白。仅当状态或内容确实需要颜色时启用下表，并同时配图标、文本或线型，不能仅用色相区分。单屏彩色覆盖建议不超过约 5%，任一大面板不得整体染色。Kaleido 3 的 4096 色和 reMarkable 的原生书写色证明彩色电子纸可以使用颜色，但其官方用途是图表、地图、图片、标注和高亮，不是给系统背景加综合色偏。[E Ink Kaleido 3](https://www.eink.com/brand/detail/Kaleido3?pubDate=20250501) · [reMarkable Paper Pro](https://remarkable.com/products/remarkable-paper/pro)

| 语义 | 浅色模式 | 深色模式 | 约束 |
|---|---:|---:|---|
| error / destructive | `#8E3F3F` | `#D08A82` | 必须同时有警示图标或文字 |
| warning / highlight | `#735E20` | `#C7AA62` | 不作大面积底色 |
| info / link | `#3E5F7A` | `#8BA7C0` | 链接仍需下划线或其他形态提示 |
| success | `#4E674D` | `#8DA284` | 绿色只允许出现在状态局部，禁止升格为 brand/primary |

## 4. 边框、选中态与交互层级

### 边框

- 普通内容分隔：`1px solid rule`；只分区，不给每张卡都套框。
- 可交互控件：`1px solid rule-strong`；默认无模糊阴影。
- 当前焦点：`1px solid ink` + `outline-offset: 2px`；不要用绿色光晕。
- 弹层：`1px solid rule-strong` + `2px 2px 0 shadow`；不使用玻璃模糊、半透明磨砂或多层柔光阴影。
- 强层级可用双线或内外 1px 黑/纸对比，但一屏不超过一个层级，避免仿古软件的边框噪声。

### 选中态

优先级从强到弱：

1. **当前页 / 主导航 / 主按钮**：墨黑实底 + 纸白文字，深色模式反相。
2. **列表多选 / 次级 active**：`gray-2` 底 + 1px 墨色边框 + 勾选图标。
3. **hover**：只切换为相邻一档灰，如 `gray-1`，不加彩色薄雾。
4. **disabled**：`gray-4` 图标或文字 + `gray-2` 底；仍保留标签和结构。

Apple HIG 要求交互状态本身也有足够的非文字对比，并明确建议不要只靠颜色传达状态；因此选中项要同时改变明度、边框或图标。[Apple：Sufficient Contrast evaluation criteria](https://developer.apple.com/help/app-store-connect/manage-app-accessibility/sufficient-contrast-evaluation-criteria) · [Apple HIG：Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility/)

## 5. 网点、抖动与残影策略

### 网点 / dithering

reMarkable 官方显微图直接展示了彩色高亮中的 dithering；经典 QuickDraw 也把 bit pattern 作为黑白绘图的基本工具。因此可使用规则网点表达“有限灰阶”，但必须是功能性的离散纹理，而不是全局滤镜。[reMarkable：How we made Paper Pro](https://remarkable.com/blog/how-we-made-remarkable-paper-pro) · [Inside Macintosh: Imaging with QuickDraw](https://developer.apple.com/library/archive/documentation/mac/pdf/Imaging_With_QuickDraw/Imaging_TOC.pdf)

- 只用于：空状态插图、图表填充、次级选中底、禁用填充、分区标题带。
- 不用于：正文、图标轮廓、输入内容、整页背景、滚动区域的大面积底纹。
- 建议只保留 25% / 50% / 75% 三档有序网点；优先 2×2 或 4×4 Bayer 式规则矩阵，像素对齐。
- 25%：每个 2×2 单元 1 个墨点；50%：棋盘格；75%：50% 基础上再补 1 个点。颜色只能取当前 `ink` 与 `paper`，不要用绿色线条伪装灰阶。
- 屏幕缩放时保持整数倍；避免 45° 细斜线在滚动中产生闪烁和摩尔纹。

### 残影 / ghosting

残影是需要通过完整刷新控制的物理副作用，不应变成永久视觉装饰。BOOX 官方说明，内容更新越多，完整刷新前积累的残影越多；HD 模式的目标就是更清晰、残影更少。[BOOX Display Settings](https://help.boox.com/hc/en-us/articles/8568934465684-Display-Settings) · [BOOX Refresh Modes](https://help.boox.com/hc/en-us/articles/10701257029780-Refresh-Modes)

- 默认：不加残影纹理，保持内容清洁。
- 若要模拟刷新：只在整页导航或大面板切换时出现一次 `80–120ms` 的黑白反相闪帧；局部按钮和输入不触发。
- 若要模拟旧帧：仅在过渡期间保留 `1px` 偏移、最高 `2%` 不透明度的轮廓副本，并在刷新结束后完全清除。
- `prefers-reduced-motion: reduce` 时关闭闪帧和旧帧。
- 禁止给文字永久加重影、模糊或随机噪声；这会降低可读性，也把电子纸的缺陷误当成品牌特征。

## 6. 明确应避免的事项

- 避免把 sage / olive / moss / military green 作为全局品牌色、主按钮、当前项和背景的共同色相。
- 避免绿色浅底覆盖侧栏、标签、选中行、气泡、工具条等多个大区域；这正是当前偏绿的主要原因。
- 避免纯白 `#FFFFFF` + 纯黑 `#000000` 的 OLED 式极端外观；使用纸白和墨黑，但仍满足对比度。
- 避免渐变、玻璃拟态、backdrop blur、彩色光晕、柔软大阴影、发光边缘。
- 避免全局颗粒、纸纤维图片、随机噪点和常驻残影；纸感主要来自色面、灰阶、硬边和排版节奏。
- 避免用低对比浅灰正文追求“褪色”；正文和关键图标必须清楚。
- 避免让颜色单独承担成功、错误、选中、焦点；同时提供形状、图标、文字或反白。
- 避免把真实电子纸的慢刷新照搬成所有交互都迟钝；视觉可瞬切，刷新闪帧只在大范围状态变化时少量使用。
- 避免把“经典 Macintosh”理解成到处斜线、厚投影和像素字体；其关键是黑白位图纪律、清楚的控件边界和状态反相。

## 7. 视觉案例（灵感，不是规范）

Dribbble 上的 E Ink Reader 系列展示了黑白应用列表、阅读/笔记菜单、日历与控制面板，可借鉴其大面积留白、黑白图标和少量边框；但它是设计师概念稿，没有硬件验证、可访问性承诺或厂商规范地位，不能用来决定灰阶、对比度或刷新行为。[MDesign：E Ink Reader 系列（Dribbble）](https://dribbble.com/himary)

Pinterest / Dribbble 一类灵感站只适合补充构图和气氛，不应反向覆盖 E Ink、设备厂商和 Apple 的一手结论。尤其是搜索结果中常见的绿色“monochrome dashboard”，那是视觉风格选择，不是 E-Ink 规范。

## 8. 建议的实施优先级（供后续改代码时使用）

1. 将所有 brand / primary / active / sidebar active 从 sage 改为灰阶或黑白反相。
2. 用上面的浅色、深色色板统一 `paper / ink / rule / selection` 语义角色。
3. 保留彩色状态 token，但限制作用域和面积，绿色不得再作为品牌色。
4. 将当前选中项的绿底 + 绿斜线改为反白或灰底 + 墨色边框/图标。
5. 最后才添加少量规则网点；先完成无纹理版本并检查可读性。
6. 分别核验浅色、深色文字对比、焦点轮廓和非颜色状态区分。

以上顺序可以最快消除“偏绿色”和“泛复古皮肤”的观感，把主题重新拉回电子纸本身。
