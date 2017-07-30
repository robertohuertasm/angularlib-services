# angularlib (services)

Example of how to create an angular module in order to be consumed as an npm package. (service example)

It will generate all the needed files for your npm to work according to the [Angular Package Format v4.0 spec](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview):

- UMD bundle
- FESM5
- FESM15
- typings
- metadata for AoT compatibility

It also supports testing, code coverage reporting and `tslint` with `codelyzer`.

**NOTE**: If you're working on an Angular Components/Directives/Pipes Library, please check [angularlib](https://github.com/robertohuertasm/angularlib).

## How to use this

Download/fork/clone this project. Then place the code of your new library inside the `src` folder and all your tests inside the `test` folder. Once your happy with your code, **build it, test it and publish it**. This project will make this easy for you. Just see the sections below for more information.

### Changing the name of your library

First thing that you may want to do is provide your own custom name to the library. If you don't do that, the library will be published with `angularlib` as a name.

In order to change the name you will have to change it in several files:

- `./src/package.json``: not only the name but `main`, `module`, `es2015` and `typings` properties.
- `./package.json`: look for the `minify` task and change the bundle name accordingly.
- All the `Rollup` files: check the `entry`, `dest` and `moduleName` properties.
- `./tsconfig.es5.json` & `./tsconfig.es2015.json`: check `flatModuleOutFile` and `flatModuleId` properties.

### Adding global dependencies

Your library must not have any dependency on `Angular`, `rxjs` or any other library that any `Angular` app that will end up hosting it will have already installed (mainly because they need it to run any `Angular` application).

That's why all these kind of dependencies must be added to the `peerDependencies` properties in the `./src/package.json` file and as `devDependencies` in `./package.json`.

Besides that, you must tell `Rollup` that these dependencies are going to be available when your library is consumed. That's why you have to check all the `rollup.config.*.js` files and add these dependencies to the `globals` variable.

In order to find the value of each property you'll have to look into its repository. For instance, for `@angular/core`, if we see [their rollup configuration code](https://github.com/angular/angular/blob/master/packages/core/rollup.config.js#L25) we can clearly see that the value is `ng.core`.

## Building your library

In order to build your library just do:

`npm run build`

A `dist` folder will be generated for you. This will be the folder that will be published to npm so make sure that `package.json` has the proper information and the correct dependencies.

Note that there's a specific `package.json` and `README.md` files in the source folder. These files will be exported into the final `dist` folder.

## Testing

Place your tests in the `test` folder. There, you will find a file named `test.ts` where you can put all your generic dependencies used by your tests (i.e. rxjs operators).

Whenever you test your code, a `coverage` folder will be created with all the coverage information.

If you want to check that your library works in a real `Angular` project before publishing it `npm` you can use `npm link`. If you don't know how to use it, [here](http://browsenpm.org/help#linkinganynpmpackagelocally) you will find a fantastic resource to learn about it.

**IMPORTANT**: In order to make your library work in your app while you're developing it (the library, I mean) you may find some issues with `node_modules` while using `npm link`. Read [this link](https://github.com/angular/angular-cli/wiki/stories-linked-library) if you want to understand the issue. 

The common error that you will get will be something similar to this:

```
Uncaught Error: Unexpected value 'MyModule' imported by the module 'AppModule'. Please add a @NgModule annotation.
    at syntaxError (compiler.es5.js:1690)
    at compiler.es5.js:15386
    at Array.forEach (<anonymous>)
    at CompileMetadataResolver.webpackJsonp.../../../compiler/@angular/compiler.es5.js.CompileMetadataResolver.getNgModuleMetadata (compiler.es5.js:15369)
    at JitCompiler.webpackJsonp.../../../compiler/@angular/compiler.es5.js.JitCompiler._loadModules (...)
```

Don't worry, you have to go to your **app's tsconfig.json file** and add this to your `compilerOptions`: 

```
"paths": {
    "@angular/*": ["../node_modules/@angular/*"],
    "rxjs/*": ["../node_modules/rxjs/*"]
  }
```

## Publishing

`npm run publish` will do the job for you. Note that it won't take care of version bumping but it will run `tslint` and the `test` command before proceeding to publication.

## Extras

If you use [Visual Studio Code](https://code.visualstudio.com/) and the amazing extension [VSCode Icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons) (;P) you can get icons for the `Rollup` and `tsconfig` files: `F1 > Icons: Apply Icons Customization`.


## Some resources about how to build an Angular library

- [Angular Package Format v4.0 spec](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview) 
- [Great talk](https://www.youtube.com/watch?v=unICbsPGFIA&list=WL&index=7) by Jason Aden (@jasonaden) in 2017 Ng-Conf.
- [Awesome article](http://2ality.com/2017/04/setting-up-multi-platform-packages.html) by Dr. Axel Raushmayer about building multi-platform npm packages.
- [angular-cli Github thread about supporting libraries](https://github.com/angular/angular-cli/issues/6510).
- @filipesilva's [quickstart](https://github.com/filipesilva/angular-quickstart-lib). Although this is still a WIP.

## What's next

My idea is to unify both [angularlib](https://github.com/robertohuertasm/angularlib) & [angularlib-services](https://github.com/robertohuertasm/angularlib-services) and provide some sort of `CLI` experience within the next weeks.