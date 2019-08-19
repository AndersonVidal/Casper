const proxy = [
    {
        context: '/notice',
        target: 'http://localhost:3000',
        pathRewrite: { '^/notice': '' }
    }
];
module.exports = proxy;