	
        app.controller('loginController',function($scope,$http,$location){

			$scope.login = function(){
				$http.get('js/data.json',function(){
	
				}).success(function(data){
//					console.log(data[0].username);
//					
//					console.log(myData);
				for(var i=0;i < data.length;i++){	
					
					if((data[i].username == $scope.username) && (data[i].password == $scope.password) ){
						//alert('logged');
						$location.path('/dataEntry');
						return true;
					}
					
//						$location.path('/');							
					
				}
						alert('not logged');
						return false;
					
				}).error(function(err){
					alert('not logged::'+err)
					$location.path('/');
				});
			}

            
        });

        app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
		$routeProvider
			.when('/',
				{
				controller:'loginController',
				templateUrl:'view/signin.html'
				})
			.when('/dataEntry',
				{
				controller:'entryController',
				templateUrl:'view/dataentry.html'
				})
            .when('/billScreen',
                {
                controller:'billScreenController',
                templateUrl:'view/billscreen.html'
                })
			.otherwise({redirectTO:'/'});
			 
//		$locationProvider.html5Mode(true); //Remove the '#' from URL.
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
			
	   }]);