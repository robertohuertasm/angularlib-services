export default {
  entry: 'build/my-services.js',
  dest: 'dist/my-services.js',
  format: 'es',
  exports: 'named',
  moduleName: 'my.services',
  sourceMap: false,
  globals: {
    '@angular/core': 'ng.core',
    '@angular/http': 'ng.http',
    'rxjs/Observable': 'Rx',
    'rxjs/operator/map': 'Rx.Observable.prototype'
  }
};