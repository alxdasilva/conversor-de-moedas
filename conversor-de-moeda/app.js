angular.module("converter", [])
	.controller("ConverterCtrl", ["$http", "$scope", function ($http, $scope) {
		$scope.selected = "EUR";
		var baseUrl = "http://api.fixer.io/latest";
		//para pegar a lista de moedas a base é EUR (preguiça de criar a lista)
		// to get list of all coin EUR is the base (is here because I dont wanna create a full list with all names)
		$http.get(baseUrl).then(function (response2) {
			$scope.currency = response2.data;
		}, function (err) {
			console.log(err);
		});

		//Para selecionar a base da moeda e fazer o calculo da conversão 
		//To select coin base and calculate the exchange
		$scope.result = function () {
			var changeBaseUrl = "http://api.fixer.io/latest?base=" + $scope.selectedCurrency;
			$http.get(changeBaseUrl).then(function (response) {
				console.log(response.data);
				$scope.currency2 = response.data.rates[$scope.selectedCurrency2] * $scope.number;
			}, function (err) {
				console.log(err);
			});
		};

		$scope.flipModel = function () {
			var model1 = $scope.selectedCurrency;
			$scope.selectedCurrency = $scope.selectedCurrency2;
			$scope.selectedCurrency2 = model1;
		};
	}]);
