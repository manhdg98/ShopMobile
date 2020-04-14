app.service('apiService', ApiService);

function ApiService($http, $window) {
    var defaultImage = "../../assests/images/2.png";
    var getProduct = function() {
        return $http.get('/api/products', {});
    }
    var getProductByGroup = function(id) {
        return $http.get('/api/products/:'+ id);
    }
    var addProduct = function(product) {
        return $http.post('/api/products', product);
    }
    var editProduct = function(product) {
        var id = product._id;
        return $http.put('/api/products/:'+id, product);
    }
    var deleteProduct = function(id) {
        return $http.delete('/api/products/:'+ id);
    }

    var getCategory = function() {
        return $http.get('/api/categories', {});
    }
    var getCategoryByGroup = function(id) {
        return $http.get('/api/categories/:'+ id);
    }
    var addCategory = function(category) {
        return $http.post('/api/categories', category);
    }
    var editCategory = function(category) {
        var id = category._id;
        return $http.put('/api/categories/:'+id, category);
    }
    var deleteCategory = function(id) {
        return $http.delete('/api/categories/:'+ id);
    }

    var getpostProduct = function() {
        return $http.get('/api/postproduct', {});
    }
    var getpostProductByGroup = function(id) {
        return $http.get('/api/postproduct/:'+ id);
    }
    var addpostProduct = function(product) {
        return $http.post('/api/postproduct', product);
    }
    var editpostProduct = function(product) {
        var id = product._id;
        return $http.put('/api/postproduct/:'+id, product);
    }
    var deletepostProduct = function(id) {
        return $http.delete('/api/postproduct/:'+ id);
    }

    var getUser = function() {
        return $http.get('/api/user', {});
    }
    var deleteUser = function(id) {
        return $http.delete('/api/user/:'+ id);
    }
    var getproductUsers = function() {
        return $http.get('/api/productUsers', {});
    }
    var addProductUser = function(product) {
        return $http.post('/api/productUsers/',product);
    }
    var deleteProductUser = function(id) {
        return $http.delete('/api/productUsers/:'+ id);
    }
    var getProductUserById = function(idUser) {
        console.log(idUser,"idUser");
        return $http.get('/api/productUsers/:'+ idUser);

    }
    var getProductUserById = function(idUser) {
        console.log(idUser,"idUser");
        return $http.get('/api/productUsers/:'+ idUser);

    }
    var uploadAvatar = function(avatar) {
        console.log(avatar,"avatar");
        return $http.post('/upload', avatar,{
            headers: {
                'Accept': '*/*',
                'Content-Type': undefined,
                "Authorization": 'halinh'
            }
        });
    }

    var getNutrition = function() {
        return $http.get('/api/nutrition', {
        });
    }
    var getNutritionForElder = function() {
        return $http.get('/api/nutrition-for-elder', {
        });
    }
   

    var listProducts = [];
    var product = {};

    return {
        uploadAvatar: uploadAvatar,
        getUser: getUser,
        listProducts: listProducts,
        product: product,
        addProduct:addProduct,
        addCategory: addCategory,
        defaultImage: defaultImage,
        getProduct: getProduct,
        getCategory: getCategory,
        getproductUsers:getproductUsers,
        addProductUser:addProductUser,
        
        editProduct: editProduct,
        editCategory: editCategory,
        
        deleteProduct:deleteProduct,
        deleteCategory:deleteCategory,
        deleteUser:deleteUser,
        deleteProductUser:deleteProductUser,
        
        getNutrition:getNutrition,
        getNutritionForElder:getNutritionForElder,
   
        getpostProduct:getpostProduct,
        addpostProduct:addpostProduct,
        deletepostProduct: deletepostProduct,
        editpostProduct: editpostProduct,
        getProductByGroup:getProductByGroup,
        getpostProductByGroup :getpostProductByGroup 

    }
}
