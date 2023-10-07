# setId(c => c + 1);  修改值,新界面更新赋值;  要有新对象赋值不能改属性

# next/image 自带优化

# _app.tsx 定义全局布局  _document.tsx 服务器的初始响应 (13被根布局替代)

# Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。

# app router (next13);

Next.js 将等待内部数据获取generateMetadata完成，然后再将 UI 流式传输到客户端。

#  pages目录中的任何文件都被视为路径。(可能不安全)

# zustand middleware persist

# Hook 的名称必须永远以 use 开头

# 待研究
  template
  route
  middleware (不同于nuxt的路由中间件)


# 并行路由 @  + 拦截路由 + Modal
  并行路由存在, @test  page.tsx   当访问 下一级 目录 test/context 时候 刷新 404

 