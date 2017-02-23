angular.module("converter", [])
	.controller("ConverterCtrl", ["$http", function ($http) {
        var self = this;
		var baseUrl = "http://api.fixer.io/latest";
		//para pegar a lista de moedas a base é EUR (preguiça de criar a lista)
		// to get list of all coin EUR is the base (is here because I dont wanna create a full list with all names)
		$http.get(baseUrl).then(function (response2) {
			self.currency = response2.data;
		}, function (err) {
			console.log(err);
		});

		//Para selecionar a base da moeda e fazer o calculo da conversão 
		//To select coin base and calculate the exchange
		self.result = function () {
			var changeBaseUrl = "http://api.fixer.io/latest?base=" + self.selectedCurrency;
			$http.get(changeBaseUrl).then(function (response) {
				console.log(response.data);
				self.currency2 = response.data.rates[self.selectedCurrency2] * self.number;
			}, function (err) {
				console.log(err);
			});
		};

		self.flipModel = function () {
			var model1 = self.selectedCurrency;
			self.selectedCurrency = self.selectedCurrency2;
			self.selectedCurrency2 = model1;
		};
	}]);
