import angular from 'angular';
import uiRouter from 'angular-ui-router';

const myApp = angular.module('app', ['ui.router']);

require('./directives')(myApp);

myApp.config(function($stateProvider) {
  const homeState = {
    name: 'home',
    url: '/home',
    templateUrl: 'pages/home/index.html'
  }

  const aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the Angular 1 hello world app!</h3>'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(aboutState);
});
