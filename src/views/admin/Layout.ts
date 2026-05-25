
export function Layout(props: { title: string; children: any }) {
  return (
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8" />
        <title>{props.title === '/' ? '首页' : '关于页'} | Bun TSX</title>
        <link rel="stylesheet" href="/static/style.css" />
      </head>
      <body>
        <nav>
          <a href="/">首页</a>
          <a href="/about">关于</a>
        </nav>
        <main>{props.children}</main>
      </body>
    </html>
  )
}