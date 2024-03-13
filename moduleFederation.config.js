const { dependencies } = require('./package.json');

module.exports = {
  name: 'gcloud',
  filename: 'remoteEntry.js',
  exposes: {},
  remotes: {
    gcrm: 'gcrm@http://localhost:3000/remoteEntry.js',
    gstore: 'gstore@http://localhost:5454/remoteEntry.js',
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      import: 'react',
      shareScope: 'default',
      requiredVersion: dependencies.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};