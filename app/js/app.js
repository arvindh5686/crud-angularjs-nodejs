// Declare app level module which depends on filters, and services
var empApp = angular.module('EmployeeApp', [
  'ngRoute',
  'EmployeeAppControllers',
  'ngResource'
])

empApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/list', {templateUrl: 'partials/list.html', controller: 'EmployeeListCtrl'})
  .when('/new', {templateUrl: 'partials/new.html', controller: 'CreateEmployeeCtrl'})
  .when('/edit/:id', {templateUrl: 'partials/new.html', controller: 'EditEmployeeCtrl'})
  .otherwise({redirectTo: '/list'});
}]);

empApp.factory('EmployeeService', ['$resource', function($resource) {
  return $resource('/api/employees/:id', {id: '@id'}, {post: {method: 'POST'}})
}]);

empApp.directive('formfield', function() {
  return {
    restrict: 'E', //could be E, A, C (class), M (comment)
    scope: {
      prop: '@',
      data: '=ngModel'
    },
    templateUrl: '/partials/formfield.html'
  }
})

