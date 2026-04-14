# hexo-theme-ayeria

[![npm version](https://img.shields.io/npm/v/hexo-theme-ayeria.svg)](https://www.npmjs.com/package/hexo-theme-ayeria)
[![npm downloads](https://img.shields.io/npm/dm/hexo-theme-ayeria.svg)](https://www.npmjs.com/package/hexo-theme-ayeria)

> **中文文档：** [README（简体中文）](README.md)

A clean and elegant Hexo blog theme, heavily customized from [Ayer](https://github.com/Shen-Yu/hexo-theme-ayer).

**Ayeria** — a fork maintained independently; the name comes from *Ayer* (Malay “water”, Spanish “yesterday”). Original author: [Eric-Shen](https://github.com/Shen-Yu).

## Features

- Full-screen cover + typed.js typing animation
- One-click dark mode
- Local search (XML index + client-side full-text search)
- Four comment systems (Valine / Gitalk / Twikoo / Giscus)
- Math (MathJax / KaTeX) + Mermaid diagrams
- Tip / reward (data-driven: multiple channels, sub-channels, brand colors, icons)
- Post TOC, word count, copy code, image zoom, copyright notice
- Random quotes (local `.txt` or built-in pool, de-duplication queue)
- Broadcast bar (custom text / Hitokoto API)
- Visit analytics (Busuanzi / CNZZ / Google Analytics / Baidu)
- NetEase Cloud Music embed
- Mouse effects (custom cursor, click hearts / burst / particles)
- Canvas animated background
- Password lock screen (SweetAlert2)
- Ad slots, ICP / public security filing info
- 14 languages
- Custom CSS (`source/css/custom.styl`)
- Rollup build pipeline

## Installation

### Option A: npm (Hexo >= 5.0)

```bash
npm i hexo-theme-ayeria -S
```

### Option B: Git

```bash
git clone https://github.com/KaleidScoper/hexo-theme-ayeria.git themes/ayeria
```

Enable the theme in your site root `_config.yml`:

```yml
theme: ayeria
```

## Configuration

The theme ships with `themes/ayeria/_config.yml`. **Do not edit that file directly.** Instead, create `_config.ayeria.yml` in the site root and only set the options you want to override. Hexo 5+ merges it with the theme defaults automatically.

Below is a full list of configurable options.

### Sidebar menu

```yml
menu:
  Home: /
  Archives: /archives
  Categories: /categories
  Tags: /tags
  Friends: /friends
  About: /about
```

Create pages with `hexo new page <name>` first (see [Creating pages](#creating-pages)).

### Cover

Full-screen background cover; optional logo overlay. A sample cover is included at `source/images/cover2.webp`.

```yml
cover:
  enable: true
  path: /images/cover.jpg    # Background path (place under theme or site source/images/)
  logo: false                # Cover logo image path, or false to disable
```

### Typing animation

Typed text on the cover using [typed.js](https://github.com/mattboldt/typed.js).

```yml
subtitle:
  enable: true
  text: First line
  text2: Second line          # can be empty
  text3: Third line           # up to three lines
  startDelay: 1000
  typeSpeed: 200
  loop: true
  backSpeed: 100
  showCursor: true
```

### Favicon and logo

```yml
favicon: /favicon.svg        # Browser tab icon
logo: /favicon.svg           # Sidebar top logo
```

Put your favicon under the site `source/` or theme `source/` directory.

### Progress bar

Top loading bar (Pace.js from CDN).

```yml
progressBar: true
```

### Broadcast bar

```yml
broadcast:
  enable: true
  type: 2                    # 1: custom text; 2: Hitokoto API (hitokoto.cn)
  text: Your message here     # used when type is 1
```

### Random sentences

Footer random lines; supports a local text file (`source/data/random-sentences.txt`) or the built-in pool, with a de-duplication queue.

```yml
random_sentences:
  enable: true
  use_local_file: true       # true: read source/data/random-sentences.txt; false: built-in pool
  queue_size: 5              # queue size; suggest ~1/4–1/3 of total lines
```

Local file format: one sentence per line; lines starting with `#` are comments; double spaces become line breaks; empty lines are ignored.

### Post features

```yml
excerpt_link: Read more...    # “read more” label (use <!--more--> in posts for break)
excerpt_all: false            # true: home shows archive only, no body

copy_btn: true                # Copy button for code blocks
share_enable: true            # Share buttons
share_china: true             # China-focused social platforms
share_text: Share

toc: true                     # TOC (per-post: front-matter no_toc: true)
image_viewer: true            # Click to zoom images
```

### Pagination labels

```yml
nav_text:
  page_prev: Previous page
  page_next: Next page
  post_prev: Previous post
  post_next: Next post
```

### Word count

Install: `npm i hexo-wordcount -S`

```yml
word_count:
  enable: true
  only_article_visit: true    # show on post pages only (not on index)
```

Per post: `no_word_count: true` to disable.

### Tips / rewards

```yml
reward_type: 1                # 0: off; 1: only when reward:true in front-matter; 2: all posts
reward_wording: "If this post helped you, you can buy me a tea"

reward:
  button_text: "Tip"          # empty = language pack default
  channels:
    - name: "Alipay"
      icon: "ri-alipay-line"         # RemixIcon class
      color: "#1677FF"               # brand color
      qrcode: "/images/reward/alipay.jpg"
      description: "Scan with Alipay"

    - name: "WeChat Pay"
      icon: "ri-wechat-pay-line"
      color: "#07C160"
      qrcode: "/images/reward/wechat.jpg"
      description: "Scan with WeChat"

    - name: "USDT"                   # sub-channels supported
      icon: "ri-coin-line"
      color: "#50AF95"
      description: "Pick a network, then scan"
      children:
        - name: "TRC-20"
          badge: "Recommended"
          qrcode: "/images/reward/USDT-TRC20.webp"
          description: "Tron · lowest fees"
        - name: "ERC-20"
          qrcode: "/images/reward/USDT-ERC20.webp"
          description: "Ethereum mainnet"
```

Put QR images under `source/images/reward/`. Per post: `no_reward: true` to force off.

### Copyright notice

```yml
copyright_type: 0             # 0: off; 1: only when copyright:true; 2: all posts
```

### Search

Install: `npm i hexo-generator-searchdb -S`

In site `_config.yml`:

```yml
search:
  path: search.xml
  field: post
  format: html
```

Then enable in the theme:

```yml
search: true
```

### RSS

Install: `npm i hexo-generator-feed -S`

Configure feed in site `_config.yml`, then in the theme:

```yml
rss: /atom.xml               # empty = hide RSS in sidebar
```

### Dark mode

```yml
darkmode: true                # show dark-mode toggle in sidebar
```

### Visual effects

```yml
canvas_bg: 0                  # 0 off, 1 animated lines (follows mouse)

mouse:
  enable: false
  path: /images/mouse.cur     # custom cursor file

click_effect: 0               # 0 off, 1 hearts, 2 burst, 3 particles
```

### Layout width

```yml
layout:
  article_width: 80rem
  sidebar_width: 8rem
```

### GitHub ribbon

Fork-me image on the cover top-right. Replace images under `source/images/` to customize.

```yml
github:
  enable: false
  url: https://github.com/your-username/your-repo
```

### Music player

NetEase Cloud Music embed.

```yml
music:
  enable: false
  type: 1                    # 1 small, 2 large
  id: 22707008                # NetEase track / playlist ID
  autoPlay: true
```

### Analytics

```yml
busuanzi:
  enable: true                # Busuanzi page views

cnzz:
  enable: false
  url:                        # CNZZ script src URL

google_analytics: ""          # GA measurement ID
baidu_analytics: ""           # Baidu Tongji ID
```

### Math

Choose MathJax **or** KaTeX. For KaTeX, switch renderer:

```bash
npm un hexo-renderer-marked -S && npm i hexo-renderer-markdown-it-katex -S
```

```yml
mathjax: false

katex:
  enable: false
  allpost: true               # false: only posts with math:true
  copy_tex: false
```

### Mermaid

```yml
mermaid:
  enable: false
  cdn: https://cdn.staticfile.org/mermaid/8.14.0/mermaid.min.js
  theme: forest
```

### Site info

```yml
since: 2019                   # founding year; if before current year shows as "2019-2026"

icp:
  enable: false
  url: "https://beian.miit.gov.cn/"
  text: "浙ICP备88888888"

gongan:
  enable: false
  img: /images/beian.png
  url: ""
  text: ""
```

### Friends links

```yml
friends_link:
  Site name:
    url: https://example.com
    img: /images/logo.png     # optional
```

Put friend logos under `source/images/`.

### Comments

Enable **one** of the four; keep the others `enable: false`.

#### Valine

Create a [LeanCloud](https://console.leancloud.app) app first.

```yml
leancloud:
  enable: true
  app_id: # LeanCloud App ID
  app_key: # LeanCloud App Key

valine:
  enable: true
  avatar: monsterid
  placeholder: Leave a comment~
```

#### Gitalk

```yml
gitalk:
  enable: true
  clientID: # GitHub OAuth App Client ID
  clientSecret: # Client Secret
  repo: # repo name storing issues
  owner: # GitHub username (owner)
  admin: # admin GitHub username(s)
```

#### Twikoo

```yml
twikoo:
  enable: true
  envId: # environment ID
```

#### Giscus (recommended)

GitHub Discussions–based; no OAuth secret. Get values from [giscus.app](https://giscus.app/).

```yml
giscus:
  enable: true
  repo: owner/repo            # repo with Discussions enabled
  repo_id:                     # from giscus.app
  category: Announcements
  category_id:                 # from giscus.app
  mapping: pathname
  reactions_enabled: 1
  emit_metadata: 0
  input_position: top
  lang: en
```

### Ad slots

You can add `ad_2`, `ad_3`, etc. Avoid “ad” in image URLs where possible so blockers ignore them less.

```yml
ads:
ad_1:
  title: Ad title
  img: /images/banner.jpg
  url: https://example.com
  width: 300
```

### Password lock

SweetAlert2 password gate.

```yml
lock:
  enable: false
  password: 123456
```

### Custom CSS

Use `source/css/custom.styl` for overrides; editing it won’t complicate theme upgrades.

## Creating pages

Create these pages manually:

### Categories

```bash
hexo new page categories
```

Edit `source/categories/index.md`:

```md
---
title: categories
type: categories
layout: "categories"
---
```

### Tags

```bash
hexo new page tags
```

Edit `source/tags/index.md`:

```md
---
title: tags
type: tags
layout: "tags"
---
```

### Friends page

```bash
hexo new page friends
```

Edit `source/friends/index.md`:

```md
---
title: friends
type: friends
layout: "friends"
---
```

Then set `friends_link` in `_config.ayeria.yml`.

## Front-matter

Besides built-in Hexo fields, this theme supports:

| Field | Type | Description |
|------|------|-------------|
| `reward` | boolean | Show reward block (`reward_type: 1`) |
| `no_reward` | boolean | Force reward off |
| `copyright` | boolean | Show copyright (`copyright_type: 1`) |
| `no_toc` | boolean | Disable TOC for this post |
| `no_word_count` | boolean | Disable word count |
| `math` | boolean | Enable math (KaTeX when `allpost: false`) |
| `albums` | array | Gallery mode: `[["image URL", "caption"], ...]` |

You can preset fields in `scaffolds/post.md`:

```md
---
title: {{ title }}
date: {{ date }}
categories:
tags:
reward: false
copyright: true
---
```

## Languages

14 languages under `languages/`:

zh-CN, zh-TW, en, ja, ko, es, de, fr, ru, vi, nl, no, pt

In site `_config.yml`:

```yml
language: en
```

## Development

Rollup builds CSS/JS. Source: `source-src/`, output: `source/dist/`.

```bash
cd themes/ayeria
npm install
npm run dev    # watch mode
npm run build  # production build
```

## License

[SATA License](LICENSE) — MIT-based, plus asking users to star the original project and thank the original author.

Thanks to [Eric-Shen](https://github.com/Shen-Yu) for the excellent Ayer base theme.
