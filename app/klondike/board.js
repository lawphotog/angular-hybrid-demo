(function () {
  "use strict";

  angular.module("klondike.board", ["ngRoute", "klondike.game"])
    .config(["$routeProvider", "$locationProvider", "$stateProvider", function ($routeProvider, $locationProvider, $stateProvider) {

      $locationProvider.hashPrefix('');

      $stateProvider
            .state("board", {
                url: "/board",
                views: {
                    '@': {
                        templateUrl: "klondike/board.html",
                        controller: "KlondikeController"
                    }
                }
            });
      
      // $routeProvider
      //   // .when("/board", {
      //   //   templateUrl: "klondike/board.html",
      //   //   controller: "KlondikeController"
      //   // })        
      //   .otherwise(function () {
      //       // redirectTo: "/board"
      //       var url = window.location.href;
      //       console.log('in otherwise: ' + url)
      //     }()
      //   );
    }])
    .controller("KlondikeController", ["$scope", "klondikeGame", "scoring", function KlondikeController($scope, klondikeGame, scoring) {
      klondikeGame.newGame();
      $scope.game = klondikeGame;
      $scope.scoring = scoring;
    }])
    .directive("sNoPile", function () {
      return {
        restrict: "E",
        template: "<div class=\"no-pile\"></div>"
      };
    })
    .directive("sTableau", function () {
      return {
        restrict: "E",
        templateUrl: "klondike/piles/tableau.html"
      };
    })
    .directive("sFoundation", function () {
      return {
        restrict: "E",
        templateUrl: "klondike/piles/foundation.html"
      };
    })
    .directive("sCard", function () {
      return {
        restrict: "A",
        templateUrl: "cards/card.html",
        scope: {
          card: "="
        }
      };
    })
    .directive("sRemainder", function () {
      return {
        restrict: "E",
        templateUrl: "klondike/piles/remainder.html"
      };
    })
    .directive("sWaste", function () {
      return {
        restrict: "E",
        templateUrl: "klondike/piles/waste.html"
      };
    });
})();
