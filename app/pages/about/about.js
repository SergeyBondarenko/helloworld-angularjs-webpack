import {aboutDirective} from './about.directive';
import angular from 'angular';

export const about = angular.module('about', [])
.config(function ($stateProvider) {
  $stateProvider.state('about', {
    url: '/about',
    template: '<about></about>'
  });
})
.directive('about', aboutDirective);
