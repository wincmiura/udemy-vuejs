module.exports = {
    devServer: {
        disableHostCheck: true,
        port: 4001,
        public: '127.0.0.1:4001',
        watchOptions: {
            poll: true
          },
    },
}