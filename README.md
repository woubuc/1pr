# 1pr

I will be accepting up to one pull request per day on this project.

View the result at [thepracticaldev.github.io/1pr](https://thepracticaldev.github.io/1pr/).

[![Build Status](https://travis-ci.org/thepracticaldev/1pr.svg?branch=master)](https://travis-ci.org/thepracticaldev/1pr) [![Gitter](https://badges.gitter.im/thepracticaldev/1pr.svg)](https://gitter.im/thepracticaldev/1pr?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge)

## Project Journal

- [As one does at three o'clock in the morning, I started a funky side project.](https://dev.to/ben/as-one-does-at-three-oclock-in-the-morning-i-started-a-funky-side-project)
- [1pr Day 3: Added styles and a project contributor list](https://dev.to/ben/1pr-day-3-added-styles-and-a-project-contributor-list)
- [Having trouble integrating gitter into 1pr](https://dev.to/ben/having-trouble-integrating-gitter-into-1pr)

## How to contribute

- Fork the repository
- Add something awesome
- Create a pull request
- Hope you get picked

#### Gulp
The project contains a simple Gulp build script to minify all code. This is important to do because the more different files need to be loaded, the longer the page load will be.
Another reason for concatenating all Javascript is that there will be no issues with.

To use Gulp, you need to have [Node.js](https://nodejs.org) installed. Once it's installed, install the Gulp CLI globally with `npm install -g gulp-cli`. Then run `npm install` to install the dependencies.

_Note: because this gulpfile.js uses Gulp 4, the global `gulp` package will not work with it so you will need to uninstall it and reinstall `gulp-cli`.
Fortunately `gulp-cli` is backwards compatible with older gulpfiles._

Once all dependencies are installed, simply run `gulp` to start. This will do the following:

- Concatenate all Javascript in `scripts/` and `vendor/` and create a single minified output file in `build/app.min.js`
- Concatenate all CSS in `stylesheets/` and `vendor/` and create a single minified output file in `build/styles.min.css`
- Watch `scripts/`, `stylesheets/` and `vendor/` for changes and automatically re-build when you make changes
- Start a server on http://localhost:8080 which serves the site for easy local development (no need to start up a separate server)

If you only want those first two steps, you can run `gulp build` which will just build all the files and exit.

## Coding standards
When contributing, please try to follow the coding standards so we have nice looking code that's easy to follow for everyone.

### Editorconfig

Where possible, use an editor (or a plugin for your editor) that supports [editorconfig](http://editorconfig.org/).

The editorconfig file should set your editor to the following settings automatically:

- UTF-8 charset
- Unix-style line breaks
- End file with a new line
- No trailing whitespace before a line break
- Use tabs for indentation

Tab width is not defined in the editorconfig, so each deveveloper can set their editor's tab width to what they're most comfortable with.

### Furthermore

- Add comments to your code where necessary. The project should be accessible for devs of all experience and skill levels. Better to have too many comments, than none at all.
- Whitespace is not the enemy! A couple of empty lines between blocks of code can really improve readability.

### For Javascript specifically

- Use semicolons (even through they're not strictly necessary). It's good practice!
- Use `let` and `const` where applicable, to keep the scope of your variables specific. Don't know what scope is or what `let` does? Check out [this article](https://medium.com/@MentallyFriendly/es6-an-idiots-guide-to-let-and-const-70be9691c389).
- Use `lowerCamelCase` for variable names (not `snake_case`)
