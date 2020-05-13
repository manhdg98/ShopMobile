app.controller('Admin-revenueCtrl', function($scope, $http, shareData, apiService, AuthService, $cookies, DialogService) {
    let self = this;
    $scope.productUsersMonth1 = [];
    $scope.productUsersMonth2 = [];
    $scope.productUsersMonth3 = [];
    $scope.productUsersMonth4 = [];
    $scope.productUsersMonth5 = [];
    $scope.productUsersMonth6 = [];
    $scope.productUsersMonth7 = [];
    $scope.productUsersMonth8 = [];
    $scope.productUsersMonth9 = [];
    $scope.productUsersMonth10 = [];
    $scope.productUsersMonth11 = [];
    $scope.productUsersMonth12 = [];
    self.user = [];
    this.onExportDoc = function(){
        $scope.$broadcast('export-doc', [5]);
    }
    this.onExportExcel = function(){
        $scope.$broadcast('export-excel', [5]);
    }
    angular.element(document).ready(function() {
        $(document).ready(function() {
            $('#revenueCtrl').DataTable({
                  "serverSide": false
            });
        });
    })

 
      
        apiService.getOrderByMonth(1)
        .then(function(response) {
            $scope.productUsersMonth1 = response.data;
            $scope.productUsersMonth1.totalproduct = 0;
            $scope.productUsersMonth1.totalRevenue = 0;
            $scope.productUsersMonth1.forEach(function(order){
                order.product.forEach(function(prod){
                    $scope.productUsersMonth1.month = 1;
                    $scope.productUsersMonth1.totalproduct += Number(prod.amount); 
                    $scope.productUsersMonth1.totalRevenue += Number(prod.amount) * Number(prod.price); 
                })
            })
        })
        .catch(function(data) {
            console.log(data, "loi getProductUserById");
        })  
        
        
        apiService.getOrderByMonth(2)
        .then(function(response) {
            $scope.productUsersMonth2 = response.data;
            $scope.productUsersMonth2.totalproduct = 0;
            $scope.productUsersMonth2.totalRevenue = 0;
            $scope.productUsersMonth2.forEach(function(order){
                order.product.forEach(function(prod){
                    $scope.productUsersMonth2.month = 2;
                    $scope.productUsersMonth2.totalproduct += Number(prod.amount); 
                    $scope.productUsersMonth2.totalRevenue += Number(prod.amount) * Number(prod.price); 
                })
            })
        
        })
        .catch(function(data) {
            console.log(data, "loi getProductUserById");
        })  

        apiService.getOrderByMonth(3)
        .then(function(response) {
            $scope.productUsersMonth3 = response.data;
            $scope.productUsersMonth3.totalproduct = 0;
            $scope.productUsersMonth3.totalRevenue = 0;
            $scope.productUsersMonth3.forEach(function(order){
                order.product.forEach(function(prod){
                    $scope.productUsersMonth3.month = 3;
                    $scope.productUsersMonth3.totalproduct += Number(prod.amount); 
                    $scope.productUsersMonth3.totalRevenue += Number(prod.amount) * Number(prod.price); 
                })
            })
    
        })
        .catch(function(data) {
            console.log(data, "loi getProductUserById");
        })  

        apiService.getOrderByMonth(4)
        .then(function(response) {
            $scope.productUsersMonth4 = response.data;
            $scope.productUsersMonth4.totalproduct = 0;
            $scope.productUsersMonth4.totalRevenue = 0;
            $scope.productUsersMonth4.forEach(function(order){
                order.product.forEach(function(prod){
                    $scope.productUsersMonth4.month = 4;
                    $scope.productUsersMonth4.totalproduct += Number(prod.amount); 
                    $scope.productUsersMonth4.totalRevenue += Number(prod.amount) * Number(prod.price); 
                })
            })
        })
        .catch(function(data) {
            console.log(data, "loi getProductUserById");
        })  

        apiService.getOrderByMonth(5)
        .then(function(response) {
            $scope.productUsersMonth5 = response.data;
            $scope.productUsersMonth5.totalproduct = 0;
            $scope.productUsersMonth5.totalRevenue = 0;
            $scope.productUsersMonth5.forEach(function(order){
                order.product.forEach(function(prod){
                    $scope.productUsersMonth5.month = 5;
                    $scope.productUsersMonth5.totalproduct += Number(prod.amount); 
                    $scope.productUsersMonth5.totalRevenue += Number(prod.amount) * Number(prod.price); 
                })
            })
            console.log($scope.productUsersMonth5);
        })
        .catch(function(data) {
            console.log(data, "loi getProductUserById");
        })  

        apiService.getOrderByMonth(6)
        .then(function(response) {
            $scope.productUsersMonth6 = response.data;
            $scope.productUsersMonth6.totalproduct = 0;
            $scope.productUsersMonth6.totalRevenue = 0;
            $scope.productUsersMonth6.forEach(function(order){
                order.product.forEach(function(prod){
                    $scope.productUsersMonth6.month = 6;
                    $scope.productUsersMonth6.totalproduct += Number(prod.amount); 
                    $scope.productUsersMonth6.totalRevenue += Number(prod.amount) * Number(prod.price); 
                })
            })
        })
        .catch(function(data) {
            console.log(data, "loi getProductUserById");
        })  

        apiService.getOrderByMonth(7)
        .then(function(response) {
            $scope.productUsersMonth7 = response.data;
            $scope.productUsersMonth7.totalproduct = 0;
            $scope.productUsersMonth7.totalRevenue = 0;
            $scope.productUsersMonth7.forEach(function(order){
                order.product.forEach(function(prod){
                    $scope.productUsersMonth7.month = 7;
                    $scope.productUsersMonth7.totalproduct += Number(prod.amount); 
                    $scope.productUsersMonth7.totalRevenue += Number(prod.amount) * Number(prod.price); 
                })
            })
        })
        .catch(function(data) {
            console.log(data, "loi getProductUserById");
        })  

        apiService.getOrderByMonth(8)
        .then(function(response) {
            $scope.productUsersMonth8 = response.data;
            $scope.productUsersMonth8.totalproduct = 0;
            $scope.productUsersMonth8.totalRevenue = 0;
            $scope.productUsersMonth8.forEach(function(order){
                order.product.forEach(function(prod){
                    $scope.productUsersMonth8.month = 5;
                    $scope.productUsersMonth8.totalproduct += Number(prod.amount); 
                    $scope.productUsersMonth8.totalRevenue += Number(prod.amount) * Number(prod.price); 
                })
            })
        })
        .catch(function(data) {
            console.log(data, "loi getProductUserById");
        })  

        apiService.getOrderByMonth(9)
        .then(function(response) {
            $scope.productUsersMonth9 = response.data;
            $scope.productUsersMonth9.totalproduct = 0;
            $scope.productUsersMonth9.totalRevenue = 0;
            $scope.productUsersMonth9.forEach(function(order){
                order.product.forEach(function(prod){
                    $scope.productUsersMonth9.month = 9;
                    $scope.productUsersMonth9.totalproduct += Number(prod.amount); 
                    $scope.productUsersMonth9.totalRevenue += Number(prod.amount) * Number(prod.price); 
                })
            })
        })
        .catch(function(data) {
            console.log(data, "loi getProductUserById");
        })  

        apiService.getOrderByMonth(10)
        .then(function(response) {
            $scope.productUsersMonth10 = response.data;
            $scope.productUsersMonth10.totalproduct = 0;
            $scope.productUsersMonth10.totalRevenue = 0;
            $scope.productUsersMonth10.forEach(function(order){
                order.product.forEach(function(prod){
                    $scope.productUsersMonth10.month = 10;
                    $scope.productUsersMonth10.totalproduct += Number(prod.amount); 
                    $scope.productUsersMonth10.totalRevenue += Number(prod.amount) * Number(prod.price); 
                })
            })
        })
        .catch(function(data) {
            console.log(data, "loi getProductUserById");
        })  

        apiService.getOrderByMonth(11)
        .then(function(response) {
            $scope.productUsersMonth11 = response.data;
            $scope.productUsersMonth11.totalproduct = 0;
            $scope.productUsersMonth11.totalRevenue = 0;
            $scope.productUsersMonth11.forEach(function(order){
                order.product.forEach(function(prod){
                    $scope.productUsersMonth11.month = 11;
                    $scope.productUsersMonth11.totalproduct += Number(prod.amount); 
                    $scope.productUsersMonth11.totalRevenue += Number(prod.amount) * Number(prod.price); 
                })
            })
        })
        .catch(function(data) {
            console.log(data, "loi getProductUserById");
        })  

        apiService.getOrderByMonth(12)
        .then(function(response) {
            $scope.productUsersMonth12 = response.data;
            $scope.productUsersMonth12.totalproduct = 0;
            $scope.productUsersMonth12.totalRevenue = 0;
            $scope.productUsersMonth12.forEach(function(order){
                order.product.forEach(function(prod){
                    $scope.productUsersMonth12.month = 12;
                    $scope.productUsersMonth12.totalproduct += Number(prod.amount); 
                    $scope.productUsersMonth12.totalRevenue += Number(prod.amount) * Number(prod.price); 
                })
            })
        })
        .catch(function(data) {
            console.log(data, "loi getProductUserById");
        })  
    

        
});
