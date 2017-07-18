export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/angular-service-module.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'angular.service.module',
  sourceMap: false,
  globals: {
    '@angular/core': 'ng.core',
    '@angular/http': 'ng.http',
    'rxjs/Observable': 'Rx',
    'rxjs/operator/map': 'Rx.Observable.prototype'
  }
};