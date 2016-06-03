	
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


		app.controller('entryController',function($scope,$http,$rootScope){
			
			
			$http.get('js/product.json',function(){
			
			}).success(function(data){
//				console.log(JSON.stringify(data));
				$scope.cartProduct = [];
				$scope.allProduct = data;
				$scope.addproduct = function(product) {

					  if($scope.product== undefined || $scope.product.productId == null || ( $scope.product.productId > (data.length)) || ($scope.product.productId < 1 ) ) {
						  if ( ( $scope.product.productId > (data.length+1)) || ($scope.product.productId < 1 ) || ($scope.product.productId ==0)){
							  $scope.inValid = true;
							  $scope.empty = false; 
						   }
						  else if($scope.product.productId == (data[product]-1).productID){
					  	    $scope.empty = false;
							$scope.inValid = false;  
						  }
						  else{
					  	    $scope.empty = true;
							$scope.inValid = false;
						  }
						  $scope.product.shipingCost =null;
						  $scope.product.productQuantity = null;
						  $scope.product.productDetails =null;
						  $scope.product.productName =null;
						  $scope.product.totalCost = null;						  
						   
					  } else {
						  $scope.cartProduct=$scope.allProduct[(product.productId)-1];
						  console.log($scope.cartProduct);
						  $scope.product.shipingCost = $scope.cartProduct.properties.shipingCost;
						  $scope.product.productQuantity = 1;
						  $scope.product.productDetails = $scope.cartProduct.properties.productDetails;
						  $scope.product.productName = $scope.cartProduct.properties.productName;
						  $scope.product.totalCost = $scope.cartProduct.properties.shipingCost;
						  //alert(JSON.stringify($scope.cartProduct[0]));
						 
					  }
				}
				$scope.dataCollection = [];
				$scope.addData = function(){
						var productCollection = {};
						productCollection.Id=$scope.product.productId;
						productCollection.Name=$scope.product.productName;
						productCollection.Details=$scope.product.productDetails;
						productCollection.Quantity=$scope.product.quantity;
						productCollection.Cost=$scope.product.shipingCost;
						productCollection.finalCost=$scope.product.totalCost;
						$scope.dataCollection.push(productCollection);
						
						var total = 0;
							for (i = 0; i < $scope.dataCollection.length; i++) {  
    							total += Number($scope.dataCollection[i].finalCost);  
							}
						$scope.bill = total;	
					
						
				}
				$scope.changeQuantity = function(product) {

					$scope.product.totalCost = ($scope.product.shipingCost*$scope.product.productQuantity);		
				}
				
			}).error(function(){
				console.log("error data not found");
			});
			

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