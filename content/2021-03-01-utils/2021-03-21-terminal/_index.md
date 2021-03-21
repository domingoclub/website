---
title: Terminal
---

We use the terminal every day to perform repetitive tasks more quickly. Here are the commands we use.

# Images

## Resize for web

Resizes all images contained in the current folder with a certain extension `*.jpg` to a certain width `-resize 1600` with a certain quality `-quality 75` in a folder named "web" `-path web`. The folder must be created before running the command.

```
mogrify -resize 1600 -quality 75 -path web *.jpg
```