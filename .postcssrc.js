/*
    px to rem自动转转换
    npm install postcss-pxtorem postcss-import postcss-url --save-dev
    https://github.com/michael-ciniawsky/postcss-load-config
*/
module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-url': {},
        'postcss-pxtorem': {
            rootValue: 16,
            propList: ['*'],
        },
        // to edit target browsers: use "browserslist" field in package.json
        autoprefixer: {},
    },
};
