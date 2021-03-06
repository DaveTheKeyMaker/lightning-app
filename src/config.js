module.exports.RETRY_DELAY = 3000;
module.exports.NOTIFICATION_DELAY = 5000;

module.exports.LND_PORT = 10009;
module.exports.LND_PEER_PORT = 10019;
module.exports.MACAROONS_ENABLED = false;
module.exports.BTCD_MINING_ADDRESS = 'rfu4i1Mo2NF7TQsN9bMVLFSojSzcyQCEH5';

const prefixName = 'lightning';
module.exports.PREFIX_NAME = prefixName;
module.exports.PREFIX_URI = `${prefixName}:`;

module.exports.DEFAULT_ROUTE = 'Home';

module.exports.UNITS = {
  sat: { display: 'SAT', denominator: 1 },
  bit: { display: 'bits', denominator: 100 },
  btc: { display: 'BTC', denominator: 100000000 },
};
module.exports.FIATS = {
  usd: { display: 'US Dollar' },
  eur: { display: 'Euro' },
};
module.exports.DEFAULT_UNIT = 'btc';
module.exports.DEFAULT_FIAT = 'usd';
