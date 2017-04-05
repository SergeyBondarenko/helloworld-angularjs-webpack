import template from './about.html';
import {AboutController as controller} from './about.controller';

export const aboutDirective = function () {
  return {
    template,
    controller,
    controllerAs: 'vm',
    scope: {},
    restrict: 'E',
    replace: true
  };
};
