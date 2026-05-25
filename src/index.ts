import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
// 导入 TSX 页面组件
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Layout } from './App'

const app = new Hono()

// 托管静态资源（CSS/图片）
app.use('/static/*', serveStatic({ root: './public' }))

// ------------------- 页面路由（TSX 服务端渲染） -------------------
// 首页
app.get('/', (c) => {
  return c.render(<Home />) // 直接渲染 TSX 组件！
})

// 关于页
app.get('/about', (c) => {
  return c.render(<About />)
})

// ------------------- API 接口 -------------------
app.get('/api/hello', (c) => {
  return c.json({ message: 'Bun + Hono + TSX 全栈！' })
})

// ------------------- 全局布局（TSX） -------------------
app.use('*', async (c, next) => {
  c.setRenderer((content) => {
    return c.html(<Layout title={c.req.path}>{content}</Layout>)
  })
  await next()
})

// 启动 Bun 服务
const server = Bun.serve({
  port: 3000,
  fetch: app.fetch,
})

console.log(`✅ TSX 全栈服务启动：http://localhost:${server.port}`)