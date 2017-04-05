import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import {home} from './pages/home/home';
import {about} from './pages/about/about';

const myApp = angular.module('app', [
  uiRouter,
  ngAnimate,
  home.name,
  about.name
]);

require('./directives')(myApp);
