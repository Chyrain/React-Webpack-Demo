# Webpack-Demo

A webpack demo build for front-end engineering project.
一个使用webpack优化前端自动化构建的Demo.

> Demo创建了一个使用react和redux的简单项目，用于测试项目构建。

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
```