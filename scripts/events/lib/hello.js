"use strict";

module.exports = (hexo) => {
  const isZh = hexo.theme.i18n.languages[0].search(/zh-CN/i) !== -1;
  const title = hexo.config.title || 'My Blog';
  const url = hexo.config.url || '';

  const pad = (str, width) => {
    const gap = width - str.length;
    if (gap <= 0) return str;
    const left = Math.floor(gap / 2);
    return ' '.repeat(left) + str + ' '.repeat(gap - left);
  };

  const art = [
    '     _ __   _______ ____  ___    _',
    '    / \\\\ \\ / / ____|  _ \\|_ _|  / \\',
    '   / _ \\\\ V /|  _| | |_) || |  / _ \\',
    '  / ___ \\| | | |___|  _ < | | / ___ \\',
    ' /_/   \\_\\_| |_____|_| \\_\\___/_/   \\_\\'
  ];

  const W = 46;
  const line1 = pad(title, W);
  const line2 = isZh
    ? pad('Hexo 博客 · Ayeria 主题', W)
    : pad('Hexo Blog · Theme Ayeria', W);
  const line3 = pad(url, W);

  const border = '-'.repeat(W + 2);
  const empty = '|' + ' '.repeat(W) + '|';
  const artStr = art.map(l => '|' + pad(l, W) + '|').join('\n');

  hexo.log.info(`
${border}
${empty}
${artStr}
${empty}
|${line1}|
|${line2}|
|${line3}|
${empty}
${border}
`);
};
