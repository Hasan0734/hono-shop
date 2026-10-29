import  { raw } from "hono/html";
import type { Child } from "hono/jsx";

type LayoutProps = {
  title: string;
  children: Child;
};

export const Layout = ({ title, children }: LayoutProps) => (
  <>
    {raw(`<!doctype html>`)}
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/public/styles.css" />
      </head>
      <body>
        <header class={"site-header"}>
          <a href="/" class={"logo"}>
            Hono Shop
          </a>
        </header>
        <main class={"container"}>{children}</main>
      </body>
    </html>
  </>
);
