	
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


//        app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

        app.config(['$routeProvider',function($routeProvider){
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
//		$locationProvider.html5Mode({
//		  enabled: true,
//		  requireBase: false
//		});
			
	   }]);


		app.controller('entryController',function($scope,$http){
			
			
			$http.get('js/product.json',function(){
			
			}).success(function(data){
//				console.log(JSON.stringify(data));
				
				$scope.addproduct = function(){	
						var j = $scope.product.productId;
						if(data[j-1].productID == j){
							$scope.product = data[j-1].properties;
							$scope.product.productId = data[(j-1)].productID;
							$scope.product.productQuantity = 1;
							$scope.product.totalCost = $scope.product.shipingCost;
						}
						else{
							
							alert("hi");
						}	
				}

				$scope.changeQuantity = function(product) {

					$scope.product.totalCost = ($scope.product.shipingCost*$scope.product.productQuantity);		
				}
				
			}).error(function(){
				console.log("error data not found");
			});
			

		});


		app.directive('mainArea', function() {
			return {
				scope:{},
				restrict: "C",
				template: "<div class='col-md-offset-9 col-md-3'>"+
					"<button type='button' ng-click='appendr()' class='btn btn-primary'>" +
					"Add New Product" + "</button>" +
				"</div>",
				link: function($scope,$element,$attrs) {
					$scope.appendr = function() {
						var p = angular.element(document.querySelector( 'tbody.productdatails' ));
						p.append('<tr ng-bind="productDetail"></tr>');
					}
				}
			}
		});
//		app.directive('x',function(){
//			return{
//				scope:{},
//				restrict:'E',
//				template:'<h1>hello</h1>',
//				link:function($scope,$element,$attrs){
//					$element.addClass("box")
//				}
//			}
//		});
function login(){
	var useid = document.getElementById(username);
}
function register(){
	var useid = document.getElementById(username);
}
function remember(){
	var username = document.getElementById('username').value;
	var userpassword = document.getElementById('password').value;
	if(localStorage){
		localStorage.setItem('username',username);
		localStorage.setItem('userpasword',userpassword)
	}
	else{
		alert("localStorage is not supported");
	}
	
}