import { html } from "hono/html";
import { HtmlEscapedString } from "hono/utils/html";

export type BaseHTMLProps = {
  children: HtmlEscapedString | string;
};

export type BaseHTMLComponent = (props: BaseHTMLProps) => HtmlEscapedString;

const BaseHTML: BaseHTMLComponent = ({ children }) => html`
  <html>
    <head>
      <link
        href="https://cdn.jsdelivr.net/npm/daisyui@3.6.4/dist/full.css"
        rel="stylesheet"
        type="text/css"
      />
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
      ${children}
    </body>
  </html>
`;

export default BaseHTML;
