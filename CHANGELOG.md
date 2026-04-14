# Changelog

本项目基于 [Shen-Yu/hexo-theme-ayer](https://github.com/Shen-Yu/hexo-theme-ayer) v1.9.6 fork 而来。
以下记录 Ayeria 相对于原版 Ayer 的主要变更。

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
