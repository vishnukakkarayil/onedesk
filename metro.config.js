// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('@react-native/metro-config').MetroConfig}
//  */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

module.exports = (async () => {
    const defaultConfig = await getDefaultConfig(__dirname);

    const { assetExts, sourceExts } = defaultConfig.resolver;

    const config = {
        transformer: {
            babelTransformerPath: require.resolve('react-native-svg-transformer'),
        },
        resolver: {
            assetExts: assetExts.filter(ext => ext !== 'svg'),
            sourceExts: [...new Set([...sourceExts, 'svg'])],
        },
    };

    return mergeConfig(defaultConfig, config);
})();

