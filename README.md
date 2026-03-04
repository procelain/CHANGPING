# 江苏昌品医疗科技股份有限公司 - 企业门户网站

![Vue.js](https://img.shields.io/badge/vue-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## 📖 项目简介

本项目是为 **江苏昌品医疗科技股份有限公司** 定制开发的企业官方门户网站。作为一家专注于环保护理系统与智慧医疗解决方案的高新技术企业，该网站旨在全方位展示公司的核心技术、产品系列、企业文化及成功案例，为客户提供便捷的信息获取与服务入口。

网站设计遵循“**科技、环保、人文**”的理念，采用现代化、响应式的 UI 布局，结合流畅的动效体验，完美呈现了昌品医疗在行业内的专业形象。

## ✨ 核心功能与亮点

*   **两大核心解决方案展示**：
    *   **1.0 环保护理系统**：详细展示智能护士站、治疗配液室、污洗清洁间等 11 个子系列的绿色疗愈空间方案。
    *   **2.0 智慧医疗护理系统**：深入介绍移动护理、电子白板、护理闭环管理等 9 大智慧物联系统的技术优势。
*   **沉浸式首页体验**：
    *   全屏高清轮播图，直观传达核心业务价值。
    *   动态数字大屏展示企业实力（年限、客户数、专利数、响应速度）。
    *   无限循环滚动的“专业制造能力”展示墙（车间设备、生产工区、厂区环境）。
    *   视差滚动视频预览，增强视觉冲击力。
*   **多维度信息架构**：
    *   **走进昌品**：企业简介、发展历程、荣誉资质、企业文化。
    *   **资讯中心**：公司新闻、行业动态，支持列表与详情页跳转。
    *   **联系我们**：集成在线留言表单、联系方式卡片及地理位置展示。
*   **响应式设计**：完美适配桌面端、平板及移动端设备，确保一致的浏览体验。

## 🛠️ 技术栈

本项目基于现代前端工程化标准构建：

*   **核心框架**: [Vue 3](https://vuejs.org/) (Composition API + `<script setup>`)
*   **构建工具**: [Vite](https://vitejs.dev/) (极速冷启动与热更新)
*   **开发语言**: [TypeScript](https://www.typescriptlang.org/) (强类型支持，提升代码健壮性)
*   **样式库**: [Tailwind CSS](https://tailwindcss.com/) (原子化 CSS，高效构建 UI)
*   **路由管理**: [Vue Router 4](https://router.vuejs.org/)
*   **动画与交互**:
    *   `framer-motion` / CSS Transitions
    *   `@vueuse/core` (使用 `useIntersectionObserver`, `useTransition`, `useDraggableScroll` 等组合式函数)
*   **图标库**: [Lucide Vue Next](https://lucide.dev/)

## 🚀 快速开始

### 环境要求

*   Node.js >= 16.0.0
*   npm >= 7.0.0

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:3000` 即可预览项目。

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录。

### 本地预览生产构建

```bash
npm run preview
```

## 📂 目录结构

```
suzhou-deping-portal/
├── public/              # 静态资源
├── src/
│   ├── assets/          # 图片、字体等资源
│   ├── components/      # 公共组件 (Navbar, Footer 等)
│   ├── router/          # 路由配置
│   ├── views/           # 页面视图 (Home, About, Product, Contact 等)
│   ├── App.vue          # 根组件
│   ├── main.ts          # 入口文件
│   └── style.css        # 全局样式 (Tailwind 指令)
├── index.html           # HTML 模板
├── package.json         # 项目依赖与脚本
├── tailwind.config.js   # Tailwind 配置
├── tsconfig.json        # TypeScript 配置
└── vite.config.ts       # Vite 配置
```

## 🤝 贡献指南

1.  Fork 本仓库
2.  创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3.  提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4.  推送到分支 (`git push origin feature/AmazingFeature`)
5.  开启一个 Pull Request

## 📄 许可证

本项目版权归 **江苏昌品医疗科技股份有限公司** 所有。
