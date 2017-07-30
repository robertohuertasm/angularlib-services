# angularlib (services)

Example of how to create an angular module in order to be consumed as an npm package. (service example)

It will generate all the needed files for your npm to work according to the [Angular Package Format v4.0 spec](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview):

- UMD bundle
- FESM5
- FESM15
- typings
- metadata for AoT compatibility

It also supports testing, code coverage reporting and `tslint` with `codelyzer`.

## How to use this

Download/fork/clone this project. Then place the code of your new library inside the `src` folder and all your tests inside the `test` folder. Once your happy with your code, **build it, test it and publish it**. This project will make this easy for you. Just see the sections below for more information.

## Building your library

In order to build your library just do:

`npm run build`

A `dist` folder will be generated for you. This will be the folder that will be published to npm so make sure that `package.json` has the proper information and the correct dependencies.

Note that there's a specific `package.json` and `README.md` files in the source folder. These files will be exported into the final `dist` folder.

## Testing

Place your tests in the `test` folder. There, you will find a file named `test.ts` where you can put all your generic dependencies used by your tests (i.e. rxjs operators).

Whenever you test your code, a `coverage` folder will be created with all the coverage information.

If you want to check that your library works in a real `Angular` project before publishing it `npm` you can use `npm link`. If you don't know how to use it, [here](http://browsenpm.org/help#linkinganynpmpackagelocally) you will find a fantastic resource to learn about it.

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