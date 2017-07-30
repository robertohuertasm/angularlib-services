# angularlib (services)

Example of how to create an angular module in order to be consumed as an npm package. (service example)

It will generate all the needed files for your npm to work according to the [Angular Package Format v4.0 spec](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview):

- UMD bundle
- FESM5
- FESM15
- typings
- metadata for AoT compatibility

It also supports testing and `tslint` with `codelyzer`.

## How to use this

Download/fork/clone this project. Then place the code of your new library inside the `src` folder and all your tests inside the `test` folder. Once your happy with your code, build it, test it and publish it. See the sections below for more information.

## Building your library

In order to build your library just do:

`npm run build`

A `dist` folder will be generated for you. This will be the folder that will be published to npm so make sure that `package.json` has the proper information and the correct dependencies.

Note that there's a specific `package.json` and `README.md` files in the source folder. These files will be exported into the final `dist` folder.

## Testing

Place your tests in the `test` folder. There, you will find a file named `test.ts` where you can put all your generic dependencies used by your tests (i.e. rxjs operators).

## Publishing

`npm run publish` will do the job for you. Note that it won't take care of version bumping but it will run `tslint` and the `test` command before proceeding to publication.
