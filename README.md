angular-rating-yo
========================
# Description

This directive allows you to enhance your rating feature in the application with behaviour from the [jquery.rateyo](http://prrashi.github.io/rateYo/) library.

# Requirements

- [AngularJS](http://angularjs.org/)
- [JQuery](http://jquery.com/)
- [RateYo](http://prrashi.github.io/rateYo/)

## Setup

1. Install **Grunt** and **Bower**
  `$ npm install -g grunt-cli bower`
2. Install development dependencies
  `$ npm install`
3. Install components
  `$ bower install`
4. ???
5. Profit!
# Usage

We use [bower](https://github.com/bower/bower) for dependency management. Install angular-rating-yo into your project by running the command

`$ bower install angular-rating-yo`

If you use a `bower.json` file in your project, you can have Bower save ui-select2 as a dependency by passing the `--save` flag with the above command.

This will copy the angular-rating-yo files into your `bower_components` folder, along with its dependencies. Load the script files in your application:
```html
<link rel="stylesheet" href="bower_components/jquery-rateyo/src/jquery.rateyo.css">
<script type="text/javascript" src="bower_components/jquery/jquery.js"></script>
<script type="text/javascript" src="bower_components/jquery-rateyo/src/jquery.rateyo.js"></script>
<script type="text/javascript" src="bower_components/angular/angular.js"></script>
<script type="text/javascript" src="bower_components/angular-rating-yo/src/angular-rating-yo.js"></script>
```

(Note that `jquery` must be loaded before `angular` so that it doesn't use `jqLite` internally)


Add the rateYo module as a dependency to your application module:

```javascript
var myAppModule = angular.module('MyApp', ['rateYo']);
```

Apply the directive to your rating elements:

```html
<rate-yo on-set="set" on-change="change" ng-model="rating" read-only="options.readOnly" options="options"></rate-yo>
```

## Options

All the rateYo options can be passed through the directive. You can read more about the supported list of options and what they do on the [rateYo Documentation Page](http://prrashi.github.io/rateYo/)

```javascript
myAppModule.controller('MyController', function($scope) {
     $scope.options = {
            ratedFill: '#f00',
            readOnly: false,
            halfStar: false,
            fullStar: false
        };
});
```

```html
<rate-yo on-set="set" on-change="change" ng-model="rating" read-only="options.readOnly" options="options"></rate-yo>
```

Some times it may make sense to specify the options in the template file.

```html
<rate-yo on-set="set" on-change="change" ng-model="rating" read-only="options.readOnly" options="{ratedFill: '#f00'}"></rate-yo>
```
