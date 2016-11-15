(function(){
    'use strict';
    
    angular
        .module('angular.paging')
        .controller('PagingController', PagingController);

    PagingController.$inject = ['PagingService'];
    
    function PagingController(PagingService) {
        var vm = this;

        // Init variables
        vm.table = {
            headers: ['#', 'ten san pham', 'gia'],
            products: []
        }
        vm.paging = {
            currentPage: 1,
            limit: 6,
            begin: 0,
            totalItems: vm.table.products.length
        };

        // Init methods
        vm.changePage = changePage;

        activate();

        ////////////////

        function activate() {
            PagingService.getProducts()
                .then(function(response) {
                    vm.table.products = response.data;
                    vm.paging.totalItems = vm.table.products.length;
                });
        }


        function changePage() {
            vm.paging.begin = (vm.paging.currentPage - 1) * vm.paging.limit;
        }


    }
})();