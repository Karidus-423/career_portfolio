module.exports = {
    reactStrictMode: true,

    webpack: (config) => {
        config.resolve.alias.canvas = false;

        return config;
    }
}

