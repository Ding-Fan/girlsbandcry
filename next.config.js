/** @type {import('next').NextConfig} */
const { withTamagui } = require("@tamagui/next-plugin");
module.exports = function (name, { defaultConfig }) {
  let config = {
    ...defaultConfig,

    // ...your configuration
  };
  const tamaguiPlugin = withTamagui({
    config: "./tamagui.config.ts",
    components: ["tamagui"],
    outputCSS:
      process.env.NODE_ENV === "production" ? "./public/tamagui.css" : null,
    appDir: true,
  });
  return {
    ...config,

    ...tamaguiPlugin(config),
  };
};
