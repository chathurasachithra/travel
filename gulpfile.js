var gulp = require("gulp"),
    elixir = require('laravel-elixir');

elixir.config.css.sass.folder = "";

var Task = elixir.Task;


/*
 |--------------------------------------------------------------------------
 | Gulp Task for PHPCS (Style Validate)
 |--------------------------------------------------------------------------
 */
//gulp.task('phpcs', shell.task('"vendor/bin/phpcs"'));

/*
 |--------------------------------------------------------------------------
 | Gulp Task for PHPCFB (Fix issues)
 |--------------------------------------------------------------------------
 */
//gulp.task('phpcbf', shell.task('"vendor/bin/phpcbf"'));


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
elixir(function (mix) {

    /*
     |--------------------------------------------------------------------------
     |Frontend Asset Management
     |--------------------------------------------------------------------------
     */

    mix.sass([
        "sass/app.scss"
    ], "public/css/custom/app.css")


        //vendor css
        .styles([
            "../vendor/**/*.css"
        ], 'public/css/custom/vendor.css')

        //vendor js
        .scripts([
            "../js/ng-plugins/**/*.js"
        ], 'public/js/custom/vendor.js')

        //application js
        .scripts([
            "../js/app/**/*.js"
        ], 'public/js/custom/app.js');
});



