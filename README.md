# UX Prototype Tooling

A repo to create simple [mustache](https://github.com/janl/mustache.js) templates for UX prototyping. 
This includes the styles taken from [Gov UK Template](https://github.com/alphagov/govuk_template) and sass from [Gov UK frontend toolkit](https://github.com/alphagov/govuk_frontend_toolkit)

## Table of contents
1. [Requirements](#requirements)
2. [Setup](#setup)
3. [Run](#run)
4. [Prototyping](#prototyping)

<a name="requirements">
## Requirements
This repo requires you to have NodeJS, Ruby, Sass, and Compass >=1.0.1 installed.

### NodeJs & NPM
- Install [NodeJs](https://github.com/creationix/nvm)
- Once installed run `$ nvm install v0.10.26`

### Ruby
- Install ruby using [RVM](https://rvm.io/rvm/install)
- Test ruby has installed by `$ ruby -v` you should see something like `$ ruby 2.2.1p85 (2015-02-26 revision 49769) [x86_64-darwin14]`

### Compass & Sass
- When you've confirmed you have Ruby installed, run gem update --system && gem install compass to install Compass and Sass

<a name="setup">
## Setup

- `$ cd ux-prototype-tooling`
- `$ npm install`

<a name="run">
## Run

- Run `$ npm start`
- A window will automatically open on `http://localhost:9001` here you can browse your templates

<a name="prototyping">
## Prototyping

### Pages
Pages can be found in `build/templates/pages/` in here you can create your page. Name it `<pageName>.mustache` any data you wish to be associated with 
that page can be added to `<pageName>.json`. You will see an example for `form.mustache` & `form.json`

### Partials
You can create partials in `build/templates/partials/` and then include this within your pages. There are a number of examples found in the partials folder.

### Custom Styles
You have the ability to add custom styles to be used in your prototyping. These can be added in `build/stylesheets/main.scss/`