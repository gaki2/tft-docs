const path = require("path");

// webpack 코드 https://github.com/atomicpages/docusaurus-plugin-module-alias/blob/main/src/index.ts
// 패키지 설치 및 vitest 설정법 https://stackoverflow.com/questions/74876229/how-to-tweak-docusaurus-webpack-config-for-some-react-component
module.exports = function (context, options) {
  return {
    name: "custom-loaders",
    configureWebpack(config, isServer) {
      if (config.mode === "development") {
        console.log("development webpack vitest 실행");
        return {
          resolve: {
            alias: {
              react: path.resolve("./node_modules/react"),
              "styled-components": path.resolve(
                "./node_modules/styled-components"
              ),
            },
          },
        };
      }
    },
  };
};
