// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('metro-config');
const path = require('path');
const defaultConfig = getDefaultConfig(__dirname);

const { writeRequires } = require('@storybook/react-native/scripts/loader');

module.exports = (async () => {
  writeRequires({
    configPath: path.resolve(__dirname, './.storybook'),
    unstable_useRequireContext: true,
  });

  return mergeConfig(defaultConfig, {
    resolver: {
      resolverMainFields: ['sbmodern', ...defaultConfig.resolver.resolverMainFields],
      //   unstable_enablePackageExports: true,
      disableHierarchicalLookup: true,
      unstable_enableSymlinks: true,
      //   sourceExts: ['mjs', ...defaultConfig.resolver.sourceExts],
    },
    transformer: {
      unstable_allowRequireContext: true,
    },
  });
})();
