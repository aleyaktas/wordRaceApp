module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    [
      'react-native-reanimated/plugin',
      {
        globals: ['_scanFaces', '_labelImage'],
      },
    ],
  ],
};
