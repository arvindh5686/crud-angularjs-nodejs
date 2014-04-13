/* Controllers */

var controllers = angular.module('EmployeeAppControllers', [])
  
 var index = -1;

controllers.controller('EmployeeListCtrl', ['$scope', '$http', function($scope, $http) {
  			$http.get('resources/data.json').success(function(data){
  			$scope.employees = data;
  		});

	  	$scope.select = function(i) {
		    $scope.index = index
		    index = i
		    $scope.selectedId = $scope.employees[index].id
  		}

  }]); 

controllers.controller('CreateEmployeeCtrl', ['$scope', '$http', '$location', 'EmployeeService', function($scope, $http, $location, EmployeeService) {
  			$scope.action = 'Add';
		  	$scope.save = function() {
		    	EmployeeService.save($scope.employee, function() {
		      	$location.path('/')
		    });
  		};  
  }]); 

controllers.controller('EditEmployeeCtrl', ['$scope', '$http', '$location', '$routeParams', 'EmployeeService', function($scope, $http, $location, $routeParams, EmployeeService) {
  			$scope.action = 'Edit';
  			var id = $routeParams.id;

  			$http.get('resources/data.json').success(function(data){
  				$scope.employee = data[0];
  			});

		  	$scope.save = function() {
		    	EmployeeService.save($scope.employee, function() {
		      	$location.path('/')
		    });
  		};  
  }]); 
