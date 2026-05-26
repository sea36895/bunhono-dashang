
export function Home() { return (
    <div class="container">
      <h1>🚀 Bun + Hono + TSX 全栈网站</h1>
      
      <div class="card">
        <h2>✅ 核心特性</h2>
        <ul>
          <li>Bun 原生支持 .tsx / .jsx</li>
          <li>Hono 服务端直出 HTML</li>
          <li>组件化开发</li>
          <li>纯 Bun 运行，无打包工具</li>
        </ul>
      </div>

      {/* 前端交互：调用 API */}
      <div class="card">
        <h3>📡 后端接口数据</h3>
        <div id="api-data"></div>
      </div>

      <script>
        // 浏览器端 JS，调用后端 API
        fetch('/api/hello')
          .then(res => res.json())
          .then(data => {
            document.getElementById('api-data').innerText = data.message
          })
      </script>
    </div>

)}