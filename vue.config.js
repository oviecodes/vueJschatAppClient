const path = require('path');

module.exports = {
    devServer: {
        proxy: {
            '/': {
                target: `https://gentle-plateau-09414.herokuapp.com`
            }
        }
    }
};