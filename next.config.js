const config = {
  env: {
    APP_TITLE: 'IberionCraft',
    APP_KEY: 'LUOR2X9Q44',
  },
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
        'postcss-flexbugs-fixes',
        [
          'postcss-preset-env',
          {
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
            features: {
              'custom-properties': false,
            },
          },
        ],
      ]
      : [
        // No transformations in development
      ],
};

const withImages = require('next-images');

module.exports = withImages(config);