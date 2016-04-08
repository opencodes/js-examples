# Development tools and package for Javascript

Since frontend development scaled up to a good size, its not easy to maintain it manually. So there are multiple tools and technology introduced to automate some of the process like version management for library, minification to minimize the file, concatenation to join multiple file and so on.


----------


Though there are plenty of tools to choose for different purpose, we are going to discuss the list of few popular tools and technology.

#### NPM

NPM makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you're sharing.

The npm command-line tool is bundled with Node.js. If you have it installed, then you already have npm too. If not, go download Node.js.

> To solve permission issue checkout [here](https://docs.npmjs.com/getting-started/fixing-npm-permissions)

In project we need to add *****package.json***** file.

****package.json:**** This file is used by npm to store metadata for projects published as npm modules. You will list grunt and the Grunt plugins your project needs as devDependencies in this file.

#### Grunt     


- Grunt and Grunt plugins are installed and managed via npm, the Node.js package manager.
- Before setting up Grunt ensure that your npm is up-to-date by running npm update -g npm (this might require ***sudo*** on certain systems).

###### Installing the CLI
In order to get started, you'll want to install Grunt's command line interface (CLI) globally. This will put the grunt command in your system path, allowing it to be run from any directory.

``
npm install -g grunt-cli
``

Note that installing grunt-cli does not install the Grunt task runner! 

A typical setup will involve adding two files to your project: package.json and the Gruntfile.



****Gruntfile:**** This file is named Gruntfile.js or Gruntfile.coffee and is used to configure or define tasks and load Grunt plugins. When this documentation mentions a Gruntfile it is talking about a file, which is either a Gruntfile.js

http://gruntjs.com/getting-started
