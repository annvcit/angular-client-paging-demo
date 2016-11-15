(function(){
    'use strict';
    
    angular
        .module('angular.paging')
        .service('PagingService', PagingService);

    PagingService.$inject = ['$q'];
    
    function PagingService($q) {
        
        this.getProducts = getProducts;

        /////////////


        function getProducts() {
            return $q.when({
                data: [
                    {id: 0, productName: 'Sua chua', price: 10000},
                    {id: 1, productName: 'Cocacola', price: 15000},
                    {id: 2, productName: 'Chocopie', price: 45000},
                    {id: 3, productName: 'Bo huc', price: 11000},
                    {id: 4, productName: 'Kem danh rang Ps', price: 80000},
                    {id: 5, productName: 'Nuoc lavi', price: 40000},
                    {id: 6, productName: 'Thuoc con meo', price: 18500},
                    {id: 7, productName: 'ban chai danh rang', price: 7000},
                    {id: 8, productName: 'ly giay uong nuoc', price: 22500},
                    {id: 9, productName: 'o cam dien', price: 43000},
                    {id: 10, productName: 'lan nach', price: 48000},
                    {id: 11, productName: 'dau goi clear', price: 49000},
                    {id: 12, productName: 'lifeboy', price: 9000},
                    {id: 13, productName: 'com chay', price: 25000},
                    {id: 14, productName: 'chuoi chien', price: 6000},
                    {id: 15, productName: 'banh tran tron', price: 10000}
                ]
            });
        }

    }
})();