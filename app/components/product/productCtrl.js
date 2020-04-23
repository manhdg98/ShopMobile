app.controller('productCtrl', function($scope, $http, apiService, $stateParams) {
  var productId = $stateParams.id;


  angular.element(document).ready(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      start: function(slider) {
        $('body').removeClass('loading');
      }
    });
  });

  $scope.addShop = function(id) {
    console.log("aaaaaa");
    let pro = $scope.data.find(p => {
      return p._id == id;
    })
    apiService.listProducts.push(pro);
    $.notify({
      icon: 'fa fa-check',
      message: 'Đã thêm ' + pro.name + ' vào giỏ hàng'
    },{
       delay: 2,
       timer: 150
    });
    // console.log(apiService.listProducts);
    for (var i = 1; i < apiService.listProducts.length; i++) {
      for (var y = 0; y < i; y++) {
        if (apiService.listProducts[i]._id == apiService.listProducts[y]._id) {
          for (var k = i; k < apiService.listProducts.length; k++) {
            apiService.listProducts[k] = apiService.listProducts[k + 1]
            apiService.listProducts.length = apiService.listProducts.length - 1;
            i = i - 1;
          }
        }
      }
    }

  }

  apiService.getProductById(productId)
    .then(function(product) {
      $scope.data = product.data;
    });
});
