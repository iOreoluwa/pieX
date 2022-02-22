const crypto = require("crypto");
// const secretKey = 'vOVH6s93249DRRIqCc7rdxs01lwHer545R';

const GENESIS_DATA = {
    timestamp: Date.now(),
    lastHash: crypto.randomBytes(20).toString('hex'),
    hash: crypto.randomBytes(20).toString('hex'),
    data: []
};

module.exports = {GENESIS_DATA};
