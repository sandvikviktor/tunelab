angular.module('tunelab', ['ngRoute'])

.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "views/home.html"
    })
    .when("/signin", { 
        templateUrl: "views/login.html"
    })
    .when("/forgotpw", { 
        templateUrl: "views/forgotpw.html"
    })
    .when("/registrate", { 
        templateUrl: "views/registrate.html"
    })
})

// People Said - Controller
.controller('peopleController', function($scope) {
    $scope.people = [
        { image: "../image/people1.jpg", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam sit odit dolore mollitia!" },
        { image: "../image/people2.jpg", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam sit odit dolore mollitia!" },
        { image: "../image/people3.jpg", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam sit odit dolore mollitia!" },
    ]
})

// Top Chart - Controller
.controller('topchartController', function($scope) {
    $scope.topchart = [
        { id: 'trackOne', number: 1, artist: 'Lorem', time: 4 +':'+ 12, title: 'Record One' },
        { id: 'trackTwo', number: 2, artist: 'Lorem', time: 5 +':'+ 43, title: 'Record Two' },
        { id: 'trackThree', number: 3, artist: 'Lorem', time: 3 +':'+ 24, title: 'Record Three' },
        { id: 'trackFour', number: 4, artist: 'Lorem', time: 3 +':'+ 36, title: 'Record Four' },
        { id: 'trackFive', number: 5, artist: 'Lorem', time: 5 +':'+ 22, title: 'Record Five' },
        { id: 'trackSix', number: 6, artist: 'Lorem', time: 4 +':'+ 16, title: 'Record Six' },
    ]
})

// Navbar Section
.directive("navbar", function() {
    return {
        template: '<nav id="top-nav" class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center"> <div class="w-90 d-flex justify-content-between"> <a class="navbar-brand" href="#home"><img src="image/logotype.svg"></a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav ml-auto"> <li class="nav-item"> <a class="nav-link" href="#why-tunelab">Why Tunelab?</a></li><li class="nav-item"><a class="nav-link" href="#top-chart-content">Top Chart</a></li><li class="nav-item"><a class="nav-link" href="#repost-service">Repost Service</a></li><li class="nav-item"><a class="nav-link" href="#demo-drop">Demo Drop</a></li><li class="nav-item"><a class="nav-link" href="#!signin">Sign In</a></li></ul></div></div></nav>'
    }
})

// .directive('header', function() {
//     return {
//         template: '<header id="main-content" class="d-flex align-items-center position-relative h-100 w-100"> <div id="main-left" class="mr-5 ml-5"> <div class="main-text"> <h1 id="main-title">Get your music <span class="text-green">heard</span></h1> <div id="line"></div><p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab delectus ipsa impedit vel accusamus sed.</p><button id="btnReg">Create your account</button> </div></div><div id="main-right" class=""> <img src="image/Group 109.png" id="main-bg"> </div></header>'
//     }
// })

// .directive('whytunelab', function() {
//     return {
//         template: '<div id="why-tunelab" class="w-100 position-relative d-flex"> <img src="image/headphones.png" id="why-img"> <section id="why-text" class="d-flex justify-content-center"> <div> <h2 id="why-title">Tunelabs main focus is about helping talented producers to get the <span class="text-green">attention</span> they deserve.</h2> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt nam, reiciendis placeat deleniti.</p></div></section> </div>'
//     }
// })

// .directive('peoplesaid', function() {
//     return {
//         template: '<div id="people-said" class="w-100 position-relative d-flex justify-content-end"> <img src="image/testimonials.png" id="people-img"> <div ng-controller="peopleController" id="people-content" class="d-flex"> <div ng-repeat="item in people" class="d-flex"> <span> <img ng-src="image/{{item.image}}"> </span> <div class="people-text ml-4 mt-3"> <h5>{{item.title}}</h5> <div class="d-flex"> <i class="fas fa-quote-left"></i> <p>{{item.text}}</p></div></div></div></div></div>'
//     }
// })

// .directive('topchart', function() {
//     return {
//         template: '<div ng-controller="topchartController" id="top-chart" class="w-100 position-relative"> <div id="top-chart-content" class="vh-100"> <div ng-repeat="track in topchart" class="m-auto ng-tracks col-12 col-md-6 col-lg-4"> <div id="{{track.id}}" class="track d-flex position-relative"> <div class="track-number d-flex justify-content-center align-items-center"> <h4>{{track.number}}</h4> </div><div class="cover d-flex justify-content-center align-items-center"> <img src="image/logotype.svg"> <p>{{track.artist}}-{{track.title}}</p></div><div class="music-player d-flex align-items-center"> <div class="col-2 d-flex align-items-center justify-content-center position-relative"><i class="fas fa-play"></i></div><span class="col-5 m-auto">{{track.title}}</span> <span class="col-3 m-auto">{{track.time}}</span> <div class="col-2 text-end m-auto"><i class="fab fa-soundcloud fa-2x"></i></div></div><img class="vinyl" src="image/vinyl.png"> </div></div></div></div>'
//     }
// })

// .directive('repostservice', function() {
//     return {
//         template: '<div id="repost-service" class="vh-100 w-100 position-relative"> <div id="fade"></div><div id="repost-content"> <div id="repost-container" class="vh-100 w-100 d-flex justify-content-center align-items-center position-relative"> <div id="repost-text" class="col-4 mt-5 mr-3 d-flex"> <h2 id="repost-title">Do you think your next release has what it takes but needs some <span class="text-green">extra promotion?</span></h2> <p class="mt-2">Choose how many followers you want to reach out to and dont forget to create your account for special promotion offers.</p><div class="mt-3"> <span>Have any question?</span><br><span>Contact us <a href="#">here!</a></span> </div></div><div id="repost-promo" class="col-3 mt-5 ml-3 d-flex justify-content-center align-items-center pt-5"> <div class="w-100 d-flex justify-content-between"> <span id="pricePrev" class="m-auto pt-3"><i class="fas fa-chevron-left fa-2x"></i></span> <h3>100k</h3> <span id="priceNext" class="m-auto pt-3"><i class="fas fa-chevron-right fa-2x"></i></span> </div><p id="price" class="mb-5">4.9 €</p><button class="btn btnBlue">Proceed to Checkout</button> </div></div></div></div>'
//     }
// })

// .directive('partners', function() {
//     return {
//         template: '<div id="partners" class="d-flex w-100 justify-content-center align-items-center"> <span>PA</span> <span>RT</span> <span>NE</span> <span>RS</span> </div>'
//     }
// })

// .directive('demodrop', function() {
//     return {
//         template: '<div id="demo-drop" class="vh-100 w-100 position-relative"> <img id="demo-gray" src="image/demogray.png"> <img id="demo-dropimg" src="image/demodropimg.png"> <img id="demo-black" src="image/demoblack.png"> <div id="demo-text" class="h-100 d-flex justify-content-center position-relative pt-5"> <div id="demo-title"> <h3>Submit your track for a chance to be a part of our Soundcloud channel and <span class="text-green">climb the top chart list</span></h3> </div><p class="mt-3">If our team thinks your track has what it takes, you\'ll be getting free promotion and we guarantee a clear increment of plays and feedback for your music!</p><form id="demo-form" class="mt-4"> <div class="form-group col-md-12 pt-2"> <label for="inputDemo">Private Soundcloud URL:</label> <input type="text" class="form-control bg-transparent col-5" id="inputDemo" autocomplete="off"> </div><div class="form-group col-md-12"> <label for="inputEmailDemo">Email Adress:</label> <input type="email" class="form-control bg-transparent col-5" id="inputEmailDemo" autocomplete="off"> </div><button id="btnDemo" class="btn btnBlack mt-3" type="submit">Submit</button> <p class="mt-4">We give feedback on every demo submission!</p></form> </div></div>'
//     }
// })