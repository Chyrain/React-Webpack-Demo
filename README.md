# Webpack-Demo

A webpack demo build for front-end engineering project.

一个使用webpack优化前端自动化构建的Demo.

> Demo has create a simple example using react and redux for test. You can change the project and edit `build_config/` as you like.

> Demo创建了一个使用react和redux的简单项目，用于测试项目构建。你可以根据自己的需求和喜好改变`build_config/`中的配置内容。

## install

```sh
npm install
```

## build font

Run this after you run `npm install`, and when you change fonts svg in `src/app/assets/fonts/`.

```sh
gulp font:hyfont
```

## build dll

Run this after you run `npm install`, and when you change lib.

```sh
npm run build:dll
```

## develop with hot loader

```sh
npm start
```

## build production

```sh
npm run build
# equals
npm run build:dll && npm run build:dist
# if dll not change, we dont need `npm run build:dll`, just use `npm run build:dist`
```


## Others

```sh
npm run server	# A server to test distribution
npm run clean 	# Clear dist/ directory
```