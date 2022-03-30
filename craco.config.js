const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': "#6b6b6b",
            "@divider-color": "#dadada",
          },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};