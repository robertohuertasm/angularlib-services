export default {
  entry: 'build/my-services.js',
  dest: 'dist/bundles/my-services.umd.js',
  format: 'umd',
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