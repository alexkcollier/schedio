module.exports = (api) => {
  api.cache(true)

  return {
    presets: ['@vue/cli-plugin-babel/preset'],
    plugins: ['@babel/plugin-transform-runtime'],
  };
}
