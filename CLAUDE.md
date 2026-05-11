# hexo-theme-ayeria

Hexo 博客主题，基于 hexo-theme-ayer 深度定制的独立维护衍生版本，已发布至 npm。

## 技术栈

- **构建**：Rollup 2（`rollup.config.js`）
- **样式**：Stylus（`source-src/css/`）
- **模板**：EJS（`layout/`）
- **语言**：14 种，配置在 `languages/`
- **入口**：`source-src/main.js` → 编译输出到 `source/`

## 常用命令

```bash
# 安装依赖
npm install

# 开发模式（监听文件变化，自动重编译）
npm run dev

# 生产构建
npm run build

# Stylus 代码检查
npm test
```

## 目录约定

```
source-src/     源代码（JS + Stylus）
source/         编译输出
layout/         EJS 模板
languages/      i18n 翻译文件
scripts/        Hexo 辅助脚本（tag/filter/helper）
```

## 配置约定

- 主题默认配置在 `_config.yml`，定义所有可用配置项及默认值
- 用户在 Hexo 站点根目录创建 `_config.ayeria.yml` 覆盖配置项；**`_config.yml` 不直接修改**
- 自定义 CSS 放 `source/css/custom.styl`
- `_config.ayeria.yml` 只能覆盖配置项，功能或外观改动需修改主题源码
