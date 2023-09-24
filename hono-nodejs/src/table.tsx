import { html } from 'hono/html'

interface SiteData {
    title: string
    description: string
    children?: any
  }
  const Layout = (props: SiteData) => html`
  <html>
  <head>
    <meta charset="UTF-8">
    <title>${props.title}</title>
    <meta name="description" content="${props.description}">
    <head prefix="og: http://ogp.me/ns#">
    <meta property="og:type" content="article">
    <!-- More elements slow down JSX, but not template literals. -->
    <meta property="og:title" content="${props.title}">
  </head>
  <body>
    ${props.children}
  </body>
  </html>
  `
  const Content = (props: { siteData: SiteData; name: string }) => (
    <Layout {...props.siteData}>
      <h1>Hello {props.name}</h1>
    </Layout>
  )

export default Content