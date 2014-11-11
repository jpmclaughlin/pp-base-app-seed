# Base Settings App from Angular Seed


## Overview

This version of the Angular JS application was forked from the angular-seed.  It displays data based on user input.  As the user progresses through various inputs, the choices change.  Ultimately a table of data is displayed.


## Prerequisites

### Git

* A good place to learn about setting up git is [here][git-github]
* Git [home][git-home] (download, documentation)

### Node.js and Tools

* Get [Node.js][node-download].
* Install the tool dependencies (`npm install`)


## Workings of the application

* The application filesystem layout structure is based on the [angular-seed] project.
* There is no dynamic backend (no application server) for this application. Instead we fake an application server by fetching static json files.


## Development environment

The following describes how you can develop, test, and deploy this application.

### Installing dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `bower_components` - contains the angular framework files

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
grunt serve
```

Now browse to the app at `http://localhost:8000/app/index.html`.


## Deploying/Pushing the Application Files

I've added a Grunt command to push the application files to the test location on the network.  To deploy, simply call:
```
grunt push
```


## Updating Angular

Previously we recommended that you merge in changes to angular-seed into your own fork of the project.
Now that the angular framework library code and tools are acquired through package managers (npm and
bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
