# hexo-markdown-image

You can see the image in both any Markdown editor and the Hexo server.

```bash
npm install hexo-markdown-image
```

Suppose the `_posts` directory tree looks like this:

```
+---HelloWorld
|   +-- 1.png
|   +-- 2.png
|   +-- 3.png
+---HelloWorld.md
```

In the source code of the article, simply use `![](HelloWorld/1.png)` to insert images~

And the difference between this plugin and other image plugins is that it only replaces the image link of the current article, while keeping the other image links unchanged: `![](HelloWorld/1.png)` -> `![](1.png)`, `![](/image/hello.png)` unchanged.
