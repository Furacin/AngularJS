(function() {
    var app = angular.module('store',[]);
    
    app.controller('StoreController', function() {
       this.products = gems; 
    });

    var gems = [ 
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'A good price dude',
            images: [
                {
                    full: './img/Dodecahedron.svg.png'    
                }
            ]
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'A good one',
            images: [
                {
                    full: './img/Dodecahedron.svg.png'    
                }
            ]
        }
    ];
})();

