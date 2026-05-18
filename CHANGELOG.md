# Changelog

本项目基于 [Shen-Yu/hexo-theme-ayer](https://github.com/Shen-Yu/hexo-theme-ayer) v1.9.6 fork 而来。
以下记录 Ayeria 相对于原版 Ayer 的主要变更。

## [1.9.10] - 2026-05-19

### 移动端侧边栏 Bug 修复

- **修复 Stylus 取反表达式编译失败**（`ayeria-layout.styl`）：`-$aside-width` 在 Stylus 0.62 解析器中存在歧义，编译后输出字面量 `-$aside-width`（无效 CSS）。移动端 `.sidebar.on { left: -$aside-width }` 因此失效，侧边栏永远停留在 `left: 0` 无法收起。改用 `0 - $aside-width` 减法表达式替代取反运算符，避免解析歧义。
- **修复移动端侧边栏背景色不一致**（`layout.styl`）：移动端 MQ 中将 `.sidebar` 背景覆写为不透明 `body-color`（`#403e3e`），与桌面端半透明遮罩 `rgba(0,0,0,.8)` 不一致。移除移动端冗余覆写，统一由基类规则控制。旧实现意图为全屏抽屉面板遮挡下层内容，但该行为不可配置且造成视觉割裂。

### 文档

- 新增 `sidebar-mobile-bug-analysis.md`：完整的 Bug 分析、历史溯源（Git 考古）、修复记录

---

## [1.9.9] - 2026-05-14

### 分享组件重构

- **纯原生 JS 替代 jQuery**：`share.js` 完整重写，移除对 jQuery `$.addClass / $.show / $.hide` 的依赖，改用原生 DOM API
- **下拉菜单过渡动画**：`.share-wrap` 由 `display:none` 切换改为 `opacity + pointer-events + transform` CSS 过渡，开合更流畅；新增 `open` class 控制状态
- **Light-dismiss**：点击 `.share-btn` 以外区域自动收起下拉菜单，体验与标准 dropdown 一致
- **默认 `pointer-events: none`**：分享面板在关闭状态下不拦截底层点击事件，修复"关于"页面社交链接被遮挡的问题
- **微信模态框过渡**：由 jQuery `fadeToggle` 改为 CSS `visibility + opacity` 过渡（`.visible` class），遮罩同步处理
- **二维码懒加载**：QR 码图片改为 `data-url` 延迟加载，仅在首次打开微信弹窗时赋值 `src`，减少不必要的网络请求
- **URL 编码修复**：QR 码 API 请求中对页面 URL 添加 `encodeURIComponent`，修复含中文路径时二维码生成失败的问题
- **关闭按钮重构**：`.wx-modal-close` 新增圆形背景悬浮效果，与打赏弹窗风格对齐；遮罩与关闭按钮均通过 `addEventListener` 绑定，替代旧的内联 `onclick`
- **`ayeria.js` 清理**：移除已废弃的 jQuery `.share-outer` click 监听（逻辑已迁入 `share.js`）

### 内容

- `random-sentences.txt`：补充诗句"人生南北多歧路，君向潇湘我向秦"

---

## [1.9.8] - 2026-04-24

### 样式系统重构

- **模块化样式**：将 `source/css/custom.styl` 中大量内联样式提取到各功能模块文件，`custom.styl` 恢复为仅供用户自定义的空白文件
- **新增 `typography.styl`**：独立的字体排版模块，统一规范正文、标题、导航栏、标签、存档等各元素的字体族分配（衬线 / 无衬线 / 等宽），支持主题级别字体覆盖
- **新增 `ayeria-layout.styl`**：将侧边栏宽度、文章宽度、鼠标指针等布局变量抽离为独立文件，通过 `_config.ayeria.yml` 配置项驱动，`head.ejs` 按需引入
- **重构代码高亮（`highlight.styl`）**：改用 CSS 自定义属性（Custom Properties）实现运行时亮 / 暗双模式切换，配色方案对齐 VS Code Light+ / Dark+，支持亮色行号与内联代码独立配色

### UI / 交互改进

- **搜索弹窗（`search.styl`）**：全面改用玻璃拟态（Glassmorphism）设计，暗黑模式下自动适配，支持毛玻璃背景与圆角卡片布局
- **打赏弹窗（`reward.styl`）**：重新设计为玻璃拟态卡片，每个渠道标签页现可读取配置中的 `color` 字段，动态更新弹窗主题色（CSS 变量 `--reward-accent`）；`modal.ejs` 和 `ayeria.js` 同步支持该机制
- **暗黑模式（`_darkmode.styl`）**：补充分享图标的暗黑模式样式
- **随机句子（`ayeria.styl`）**：补充 `.random-sentence` 样式规则，确保文字居中、字号与行高继承一致
- **点击特效画布（`ayeria.styl`）**：`.click-effect-canvas` 移至源码模块管理，设置 `pointer-events: none` 防止遮挡交互

### 构建 / 工程

- `rollup.config.js`：移除 `sourceMap: false` 显式配置，回归 Rollup 默认行为
- `hello.js` 启动横幅：改用模板字符串动态生成边框，ASCII 艺术字同步更新为 Ayeria 字样
- `.gitignore`：移除已不存在的 `build-css.cjs` 条目

---

## [1.9.7-0] - 2026-04-14

### 主题独立化

- 重命名为 Ayeria，所有代码引用、配置、文档同步更新
- 创建独立仓库 `hexo-theme-ayeria`，可通过 npm 或 Git 安装
- 添加主题内 `_config.yml` 默认配置，用户通过 `_config.ayeria.yml` 覆盖
- 重写 README 为通用安装/配置文档
- 创建 `.npmignore` 排除开发文件
- 创建 scaffold 示例（`_scaffolds/post.md`）

### 功能改进

- **打赏系统**：重构为数据驱动架构，支持多渠道、子渠道、品牌色、图标，通过配置即可扩展
- **随机句子**：支持本地 txt 文件或内置句子库，增加防重复队列机制
- **Giscus 评论**：新增 Giscus 评论系统支持（基于 GitHub Discussions）
- **分类树**：国际化修复，不再硬编码中文

### 代码优化

- `hello.js` 横幅改为动态读取站点标题和 URL
- `meta_generator` 过滤器更新为 `hexo-theme-ayeria`
- 迁出站点专属图片，主题不再包含个人资源
