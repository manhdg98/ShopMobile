app.controller('Admin-productUserCtrl', function($scope, $http, shareData, apiService, AuthService, $cookies, DialogService) {
    let self = this;
    self.productUsers = [];
    this.onExportDoc = function(){
        $scope.$broadcast('export-doc', [5]);
    }
    this.onExportExcel = function(){
        $scope.$broadcast('export-excel', [5]);
    }
    angular.element(document).ready(function() {
        $(document).ready(function() {
            $('#productUserCtrl').DataTable({
                  "serverSide": false
            });
        });
    })
    self.idUser = JSON.parse($cookies.get('currentUser'))._id;
    this.init = function() {
            apiService.getproductUsers()
                .then(function(response) {
                    self.productUsers = response.data;
                })
                .catch(function(data) {
                    console.log(data, "loi getProductUserById");
                })
    }
    this.deleteproductUsers = function(product) {
        if (confirm('Chắc chắn xóa?'))
            apiService.deleteProductUser(product._id)
            .then(function(data) {
                $.notify({
                    icon: 'fa fa-check',
                    message: 'Delete success !!!!'
                }, {
                    delay: 2,
                    timer: 300
                });
                self.init();
            })
    }

    this.init()
});
