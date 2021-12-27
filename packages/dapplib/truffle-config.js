require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain horn hunt drive foam skirt'; 
let testAccounts = [
"0x453118a8c635a5c0d3dbdaf4c95192f77d4b02501418fa9b609bb5a26a1c1357",
"0x70bc63cd5bd6bc3798326585a0de85ce01e34edd9df8f73a67bce005df59f61d",
"0xac8f6fde7e8748061e1c94e8d377ac2b69e86efce3953c175576b6392a3ff44f",
"0xe99c84cb392b8bab30c1f3439bce62a7940a1551fc21857900d5311cc1070f21",
"0xeff5da7bd168053067dc7038ef5bc9da9666480960a90122fc4744b52ba3e02e",
"0x347e848d74abe6cf7d980ef089bf4693e6c4b7a3fdbb99a420828c62048dcb91",
"0xbb8d15240b0094194960de0a6b18ac00ec9ef5bdd498096dfeab0b8422878643",
"0x6e70d28ea9affe5b4282777259e24dc92fbc0ae2224d1c2098b659bf644f78de",
"0x98d8db57a33ef946e07efca4d57cde7965c9bd4c4351df7f3b453f03492578b3",
"0x5a626d989985835c92b451c1b2d043082ecf4b84d5a5aa8758e0001731388897"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

