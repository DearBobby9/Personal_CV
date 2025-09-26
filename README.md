# 🎓 Difan's Resume - Personal CV Website

**Created by Difan Jia** | PhD Student at University of Texas at Dallas

一个专为 Difan Jia 设计的现代化个人简历网站，基于 Next.js、Tailwind CSS 和 shadcn/ui 构建，支持完美的打印和 PDF 导出功能。

## 📋 功能特性

- 🎨 现代化响应式设计
- 🖨️ 原生打印/PDF 导出支持
- 🌓 支持暗色模式
- 📱 完全响应式布局
- ⚡ 基于 Next.js 15 的快速性能
- 🎯 TypeScript 支持
- 🧩 模块化组件设计

## 🚀 快速开始

#---

**Created by Difan Jia** - PhD Student at UTD, specializing in HCI & Visualization

**提示**: 记住在打印时设置正确的页面参数，以获得最佳的 PDF 效果！

## 📄 许可证

MIT License - Created by Difan Jia

## 🙏 致谢

This resume website was created by Difan Jia using modern web technologies. Feel free to use this as a template for your own resume!- Node.js >= 18.18
- 包管理器：pnpm（推荐）/ yarn / npm

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <difans-resume-repo-url>
   cd difans-resume
   ```

2. **安装依赖**
   ```bash
   # 使用 pnpm（推荐）
   pnpm install
   
   # 或使用 yarn
   yarn install
   
   # 或使用 npm
   npm install
   ```

3. **启动开发服务器**
   ```bash
   # 使用 pnpm
   pnpm dev
   
   # 或使用 yarn
   yarn dev
   
   # 或使用 npm
   npm run dev
   ```

4. **访问网站**
   
   打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 📁 项目结构

```
difans-resume/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # 全局样式
│   │   ├── layout.tsx         # 根布局
│   │   └── page.tsx           # 主页面
│   ├── components/
│   │   ├── ui/                # shadcn/ui 组件
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   └── CV.tsx             # 主要的 CV 组件
│   └── lib/
│       └── utils.ts           # 工具函数
├── public/                     # 静态资源
├── components.json             # shadcn/ui 配置
├── tailwind.config.ts          # Tailwind 配置
└── tsconfig.json              # TypeScript 配置
```

## ✏️ 自定义内容

所有个人信息都存储在 `src/components/CV.tsx` 文件的 `data` 对象中：

```typescript
const data = {
  name: "你的姓名",
  tagline: "你的标签",
  roleTarget: "申请职位",
  contact: {
    email: "your@email.com",
    phone: "你的电话",
    location: "你的地址",
    links: [
      // 社交媒体链接
    ],
  },
  education: [
    // 教育经历
  ],
  experience: [
    // 工作经历
  ],
  projects: [
    // 项目经历
  ],
  skills: {
    // 技能清单
  },
  awards: [
    // 获奖经历
  ],
  languages: [
    // 语言能力
  ],
};
```

## 🖨️ 打印 PDF 指南

### 浏览器打印设置

1. 点击页面右上角的 "Print / PDF" 按钮
2. 在打印对话框中进行以下设置：
   - **边距**: None（无边距）
   - **背景图形**: On（开启）
   - **缩放**: 95-100%
   - **纸张**: A4 或 Letter

### 优化打印效果

- **分页处理**: 如果内容在卡片中间断页，可以调整缩放比例到 97-99%
- **背景保持**: 确保开启"背景图形"以保持设计样式
- **边距最小化**: 选择"无边距"获得最佳布局

## 🛠️ 开发指南

### 添加新的 UI 组件

```bash
# 添加 shadcn/ui 组件
npx shadcn@latest add [component-name]
```

### 添加新的图标

项目使用 [Lucide React](https://lucide.dev/) 图标库：

```typescript
import { NewIcon } from "lucide-react";
```

### 样式定制

- 全局样式: `src/app/globals.css`
- Tailwind 配置: `tailwind.config.ts`
- 组件样式: 使用 Tailwind CSS 类

## 📦 构建和部署

### 本地构建

```bash
# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start
```

### 部署选项

1. **Vercel（推荐）**
   ```bash
   # 安装 Vercel CLI
   npm i -g vercel
   
   # 部署
   vercel
   ```

2. **Netlify**
   - 连接 Git 仓库
   - 构建命令: `npm run build`
   - 发布目录: `.next`

3. **自定义服务器**
   - 使用 `npm run build` 构建
   - 使用 `npm start` 启动生产服务器

## 🔧 常见问题解决

### 找不到 @/components/ui/... 模块

**原因**: shadcn/ui 组件未生成或路径别名未配置

**解决方案**:
1. 确认 `src/components/ui/` 目录下有相应组件文件
2. 检查 `tsconfig.json` 中的路径别名配置：
   ```json
   {
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@/*": ["./src/*"]
       }
     }
   }
   ```

### window is not defined 错误

**原因**: 服务端渲染环境中使用了浏览器 API

**解决方案**: 代码中已包含保护，确保以下代码存在：
```typescript
if (typeof window !== 'undefined') {
  // 浏览器专用代码
}
```

### 图标显示异常

**原因**: 图标组件导入错误或版本不匹配

**解决方案**:
1. 检查控制台警告信息
2. 确认图标名称在 lucide-react 中存在
3. 代码会自动回退到 LinkIcon

### 开发服务器启动失败

**解决步骤**:
1. 确认 Node.js 版本 >= 18.18
2. 删除 `node_modules` 和 `package-lock.json`
3. 重新安装依赖
4. 检查端口 3000 是否被占用

## 🤝 备选方案 - Vite 版本

如果你更偏好轻量级的 Vite，可以按以下步骤创建：

```bash
# 创建 Vite 项目
pnpm create vite@latest cv-vite --template react-ts
cd cv-vite

# 安装依赖
pnpm add lucide-react class-variance-authority tailwind-merge @radix-ui/react-slot

# 初始化 shadcn/ui
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add card badge button

# 初始化 Tailwind
pnpm dlx tailwindcss init -p
```

然后配置相应的文件和别名。

## 📄 许可证

MIT License

## 🆘 获得帮助

如果遇到问题，请：

1. 检查本 README 的常见问题部分
2. 查看项目 Issues
3. 搜索相关的 Next.js、Tailwind CSS、shadcn/ui 文档

---

**提示**: 记住在打印时设置正确的页面参数，以获得最佳的 PDF 效果！

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
