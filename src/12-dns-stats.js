/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arrayDomains = domains.map((domain) => domain.split('.').reverse());
  const obj = {};
  for (let i = 0; i < arrayDomains.length; i++) {
    for (let j = 0; j < arrayDomains[i].length; j++) {
      if (!obj[`.${arrayDomains[i][j]}`]) {
        const nameDomain = `.${arrayDomains[i].slice(0, j + 1).join('.')}`;
        const filterArray = arrayDomains.filter((array) => `.${array.join('.')}`.indexOf(nameDomain) !== -1);
        obj[nameDomain] = filterArray.length;
      }
    }
  }
  return obj;
}

module.exports = getDNSStats;
