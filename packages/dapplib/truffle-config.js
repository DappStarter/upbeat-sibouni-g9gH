require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift rifle pitch evil install infant equal genius'; 
let testAccounts = [
"0xf5c2283b1fddf927bf9213318d327e05c25b7ea4e512a85aee5bab0f262dfede",
"0x8678a268ffa3ead2b92e019e3e1c558fca1b3162e685ae1362fe0feed046ac4c",
"0x4aedabee965157815fde2c0af5c5d27c1cecdc43087426ab84184fd248f3634f",
"0x876f2451b271c43bb3d0a3a6289d634016db7be03300e7f092dfe2a07d76c399",
"0x2b0a25233ae890f22542cf38fe3ca05194f4ed8133927fec3c78ea83a2a66fba",
"0xe8b73c510d167a916e929c790cb84e046041bf06a7f91dabbeb99a23cb205036",
"0x47baa53b449b55acc7a257fb4682707479ccaccad12007a008c07d36e3ef0a2a",
"0xa6ae230393078651c8efaa6e20da325f75e8c4500657a113492c42a4db14ab50",
"0x398c8b75728133029aad74800eae947c65408ab29a8cc78c92ae19bc7d10614a",
"0xb18519d76052c0ad3a6a9d3636c12bda7954f3c7e97a7bdcd598addeb6bc0fff"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

