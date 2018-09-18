import CryptoJS from 'crypto-js';

export function createHash(password, _salt = null) {
    var salt =  _salt ? _salt : CryptoJS.lib.WordArray.random(128/8);
    var iterations = 1000;
    return [CryptoJS.PBKDF2(password, salt.toString(), { keySize: 512/32, iterations: iterations }), salt.toString()];
}

export function getHash(password, salt) {
    var iterations = 1000;
    return CryptoJS.PBKDF2(password, salt, { keySize: 512/32, iterations: iterations });
}