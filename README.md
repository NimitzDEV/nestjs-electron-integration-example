# nestjs-electron-ipc-transport example

## Description

This is a simple example showing how to properly use `nestjs-electron-ipc-transport` to integrate `NestJS` into `electron` application.

## Run example

```
yarn install
yarn dev
```

## Project structure

### Main process

Code located in `/src/main`, bridge API code will be written inside `src/main/bridge`, and then expose it to `window.AppBridge` through `contextBridge.exposeInMainWorld`, the bridge API mainly act as an event bus and API interface for application running in renderer process.

### Renderer process

Code located in `/src/renderer`, there is your regular front-end code, and `bridge.ts` will simply re-expose `window.AppBridge`, and provide API `interface` for type checking and code completion in typescript.
