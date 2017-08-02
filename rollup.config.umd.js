import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const globals = {
  '@angular/core': 'ng.core',
  '@angular/http': 'ng.http',
  'rxjs/Observable': 'Rx',
  'rxjs/add/operator/map': 'Rx.Observable.prototype'
};

export default {
  entry: 'build/angularlib-services.js',
  dest: 'dist/bundles/angularlib-services.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'angularlib.services',
  sourceMap: false,
  plugins: [resolve(), commonjs()],
  globals: globals,
  external: Object.keys(globals),
};
