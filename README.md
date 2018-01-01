# Webpack-Demo

A react webpack SPA demo build for front-end engineering project.

一个使用webpack优化前端自动化构建的Demo.

> Demo has create a simple example using react and redux for test. You can change the project and edit `build_config/` as you like.

> Demo创建了一个使用react和redux的简单前端单页应用，用于测试项目构建。你可以根据自己的需求和喜好改变`build_config/`中的配置内容。

## init

Run this to init project.

```sh
npm run init
```

init includes iconfont build and dll build.

- build iconfont

Run this after you run `npm install`, and when you change fonts icon(svg) in `src/assets/fonts/`.

```sh
gulp font:icon
```

- build dll

Run this after you run `npm install`, and when you change lib.

```sh
npm run build:dll
```

- build dist

Run this when you finish development and need generate to a distribution directory.

```sh
npm run build:dist
```

## develop with hot loader

```sh
npm start # npm run start
```

## release production

```sh
npm run release # equals `npm run build:dll && npm run build:dist`
```


## Others

```sh
npm run server	# A server to test distribution
npm run clean 	# Clear dist/ directory
```