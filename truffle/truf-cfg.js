module.exports = {
    networks: {
        development: {
            host: "ganache_cli",
            port: 8545,
            network_id: "*"
        }
    },
    mocha: {},
    compilers: {
        solc: {
            version: "0.8.10"
        }
    }
};