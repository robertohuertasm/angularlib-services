const replace = require('replace-in-file');

replace.sync({
  files: [
    './build/out/**/*.js',
  ],
  from: [/\/index';/g, /\/index";/g],
  to: [`';`, `";`]
});

console.log('ngc paths fixed');
