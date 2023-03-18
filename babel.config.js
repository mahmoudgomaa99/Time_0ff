module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          src: './src',
          atoms: ['./src/components/atoms'],
          screens: ['./src/screens'],
          navigation: ['./src/navigation'],
          components: ['./src/components'],
          hooks: ['./src/hooks'],
          values: ['./src/values'],
          navigation: ['./src/navigation'],
          redux: ['./src/redux'],
        },
      },
    ],
    'jest-hoist',
  ],
};
