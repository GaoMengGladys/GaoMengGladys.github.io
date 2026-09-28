# Meng Gao · 学术主页第二版

这一版参考了 [Chenming Shang 的主页](https://helloscm.github.io/) 和 [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) 的视觉布局：顶部导航、左侧圆形头像与联系方式、右侧学术内容、带会议标签的论文配图。

个人经历以你在 2026-09-28 提供的简历为依据，并参考[原主页仓库](https://github.com/GaoMengGladys/GaoMengGladys.github.io)。按你的后续选择，AnyCap 与 LongAudioSpan 的题目和作者列表已同步到当前 arXiv 摘要页，论文发表状态仍以简历为准。页面保留了 2 篇 Publications、8 篇 Preprints & Manuscripts、1 篇 Technical Report，以及个人介绍、教育、实习和获奖信息。

按你的偏好，论文只展示题目、作者、发表状态、配图和链接；实习只展示机构、职位、时间和导师。论文贡献、具体工作、课程、技能及其他完整履历请见 `CV.pdf`。此次核对确认，现有 `CV.pdf` 已包含你提供的简历内容，因此没有重新排版或替换 PDF。学术主页新增了简历中的 Merit Student & Outstanding Student Leader，并补全复旦奖学金等级。

IIGroup 的名称已核对[课题组官网](https://iigroup.github.io/)及[成员页](https://iigroup.github.io/members/)，官方写法为 **Intelligent Interaction Group (IIGROUP)**，网站链接已更新为当前官网。详细来源和论文版本差异记录在 [内容核对记录](CONTENT-REVIEW.md) 中；这份记录是维护说明，不会出现在主页正文中。

这是一个独立的 HTML / CSS / JavaScript 静态页面，没有 npm、Ruby 或 Jekyll 依赖。正文直接写在 HTML 中；关闭 JavaScript 也可以阅读全部内容和使用链接。

## 先看效果

- 在本机下载并解压整个目录后，用浏览器打开 `index.html`。
- 打开 `original.html` 可以查看未改动的原版，图片和 CV 都保留在目录中。
- `preview/desktop.png` 和 `preview/mobile.png` 是实际浏览器截图。
- 若在远程机器上工作，可以在目录中运行：

  ```bash
  python3 -m http.server 8000 --bind 127.0.0.1
  ```

  本机访问 `http://127.0.0.1:8000`。若运行在远程服务器上，先把服务器的 8000 端口转发到本机，再访问这个地址。

## 和现有主页同时保留

在原仓库中新增一个 `academic-v2/` 目录，把以下文件放进去：

```text
academic-v2/
├── index.html
├── assets/
├── picture/
├── CV.pdf
└── original.html       # 可选，原版对照页面
```

沿用原仓库当前的 GitHub Pages 发布配置。部署完成后，新版本地址将是：

```text
https://gaomenggladys.github.io/academic-v2/
```

原来的根目录主页继续保留。上面的地址是部署后的预期地址；此次制作仅生成本地文件，没有推送 GitHub 或发布网站。无需把 `preview/` 截图一起上传。

如果以后决定把这一版作为主站，可用本目录的 `index.html`、`assets/`、`picture/` 和 `CV.pdf` 替换仓库根目录下对应文件；建议先把旧 `index.html` 另存为 `original.html`。若使用全新的 GitHub Pages 仓库，复制 `.nojekyll`，并在 Settings → Pages 选择对应发布分支和根目录。

## 如何修改

| 内容 | 文件与位置 |
| --- | --- |
| 姓名、邮箱、LinkedIn、GitHub、个人介绍 | `index.html` 中的 `Profile` 和 `ABOUT` 区域 |
| 论文、作者、链接、发表状态 | `index.html` 中的 `PUBLICATIONS` 区域，每个 `<article class="paper">` 对应一项 |
| 教育、实习、获奖 | `index.html` 中的 `EDUCATION`、`EXPERIENCE`、`AWARDS` 区域 |
| 蓝色主色、文字颜色、页面宽度 | `assets/style.css` 顶部的 `:root` 变量 |
| 字号、头像大小、列宽和手机布局 | `assets/style.css` |
| 手机导航、滚动高亮、返回顶部 | `assets/main.js` |
| 简历 | 替换 `CV.pdf` |
| 头像 | 替换 `assets/photo.webp`；原图保存在 `picture/photo.jpg` |
| 论文图 | 页面缩略图放在 `assets/`；点击后的原图放在 `picture/` |

新增论文时，复制同类 `<article>`，并同步修改标题的 `id`、该 article 的 `aria-labelledby`、作者、状态、链接和配图。没有公开链接的手稿保留文字状态即可。

照片和配图已生成轻量 WebP 版本，原始图片完整保留在 `picture/`。页面没有外部字体、图标库、统计代码或第三方脚本请求。没有填入原主页未提供的 Google Scholar ID、引用量或新闻条目。

## 设计来源

HTML、CSS 和交互脚本为这一版重新编写，借鉴上述主页的布局风格；页脚保留设计来源链接。没有复制师兄的个人资料、论文或照片。原主页中的照片、简历、论文图和机构标志仍属于各自权利人。
