(function() {
    var app = angular.module('store',[]);
    
    app.directive('productTitle',function() {
      return {
        restrict: 'E',
        templateUrl: './product-title.html'
      };
    });
    
    app.controller('StoreController', function() {
        this.products = gems; 
    });

    app.controller('PanelController', function() {
        this.tab = 1; 
        
        this.selectedTab = function(setTab) {
            this.tab  = setTab;
        }
        
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;   
        }
    });
    
    app.controller('ReviewController',function() {
       this.review = {};
        
        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
            
        };
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
            ],
            reviews: [
                {
                    stars:5,
                    body: "I love this product!",
                    author: "joe@thomas.com"
                },
                {
                    stars:1,
                    body: "This product sucks",
                    author: "tim@hater.com"
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

