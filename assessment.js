var app=angular.module('ourApp', []);
app.controller('ourController', function($scope){
    $scope.playstore=[{
        image:'images/ckit.png',
        section:'outdoor',
        id:1,
        name:'cricketkit',
        description:'the complete cricket kit for the player',
        price:"10000",
     },
    {
     image:'images/vball.png',
    section:'outdoor',
    id:2,
    name:'volleyball',
    description:'hit me hard yar',
    price:800,
    },
    {
     image:'images/vbn.jpg',
     section:'outdoor',
     id:3,
     name:'volleyballnet',
     description:'synthetic fibered net which lasts long',
     price:500,   
    },
    {
        image:'images/basball.jpg',
        section:'outdoor',
        id:4,
        name:'basketball',
        description:'hard to dribble but good to get points',
        price:1000,
    },
    {
        image:'images/cricketbats.png',
        section:'outdoor',
        id:5,
        name:'cricketbats',
        description:'best bats for best players',
        price:1500, 
    },
    {
        image:'images/shuttlebat.jpg',
        section:'outdoor',
        id:6,
        name:'shuttlebat',
        description:'strings which are as powerfull as your nerves',
        price:700,
    },
    {
        image:'images/fscocks.jpg',
        section:'outdoor',
        id:7,
        name:'feathercocks',
        description:'fights with the air adn never ending partner',
        price:50,
    },
    {
        image:'images/ludo.webp',
        section:'indoor',
        id:8,
        name:'Ludo',
        description:'Unites everyone',
        price:50,
    },
    {
        image:'images/snake-ladder.jpg',
        section:'indoor',
        id:9,
        name:'snake-ladder',
        description:'have fun with your friends',
        price:500,
    },
    {
        image:'images/uno.jpg',
        section:'indoor',
        id:10,
        name:'uno cards',
        description:'have fun and take revenge on your friend',
        price:50,
    },
    {
        image:'images/darts.png',
        section:'indoor',
        id:11,
        name:'darts',
        description:'keeps your mind work faster',
        price:50,
    },
    {
        image:'images/chess.jpg',
        section:'indoor',
        id:12,
        name:'chess',
        description:'improves  your thinking power in critical situations',
        price:50,
    },
    {
        image:'images/caroms.jpg',
        section:'indoor',
        id:13,
        name:'caromboard',
        description:'improves your motor skills',
        price:50,
    },
    {
        image:'images/bussiness.jpg',
        section:'indoor',
        id:14,
        name:'bussiness',
        description:'keeps everyone busy ',
        price:50,
    },
    {
        image:'images/powerade.png',
        section:'drinks',
        id:15,
        name:'powerdrink',
        description:'cautious for your health',
        price:500,
    },
    {
        image:'images/ccnut.webp',
        section:'drinks',
        id:16,
        name:'cocconut water',
        description:'natural drinks',
        price:150,
    },
    {
        image:'images/gatorade.webp',
        section:'drinks',
        id:17,
        name:'gatoride',
        description:'powerfull drink for powerfull people',
        price:1000,
    },
    {
        image:'images/combopack.jfif',
        section:'drinks',
        id:18,
        name:'different drinks combo',
        description:'combopack of energy',
        price:2000,
    },
    {
        image:'images/bdy.png',
        section:'drinks',
        id:19,
        name:'Bodyarmor',
        description:'best drink for strength',
        price:1500,
    },
    {
        image:'images/proshake.jfif',
        section:'drinks',
        id:20,
        name:'proteinshek',
        description:'powerfull proteins help you work more',
        price:2000,
    },
    {
        image:'images/oceandrink.webp',
        section:'drinks',
        id:21,
        name:'oceandrink',
        description:'instant energy giver',
        price:900,
    },
  ]
  $scope.playList=[]
  $scope.message=''
  $scope.isvisible=false
  $scope.show=function(){
 $scope.isvisible= true;
  }
  $scope.play=function(game){
    if(game){
      $scope.playList.push({ image:game.image,section:game.section,id:game.id,name:game.name,description:game.description,price:game.price})
      $scope.games+=1;
    }
  }
  /*$scope.total=0;
  $scope.setTotal=function(bag){
    if(bag){
      $scope.total+=bag.price;
      //return total
      console.log($scope.total)
    }
  }*/
  $scope.smash=function(basket){
    if(basket){
      $scope.playList.splice($scope.playList.indexOf(basket),1);
      $scope.games-=1;
    }
  }
  
$scope.auk={$:undefined};
$scope.offData=false;
  $scope.in=function(){
    // $scope.offData=true;
    $scope.isvisible= true;
    $scope.auk="indoor";
  }
  $scope.out=function(){
   // $scope.offData=true;
   $scope.isvisible= true; 
   $scope.auk="outdoor";
  }
  $scope.drink=function(){
   // $scope.offData=true;
   $scope.isvisible= true; 
   $scope.auk="drinks";
  }
$scope.setFilter=function(){
    if($scope.items!==''){
        $scope.offData=true;
      //  $scope.isvisible= true;
        $scope.auk=$scope.items;
    }else{
        $scope.offData=false;
    }
}
  $scope.favourate=function(event){
    event.currentTarget.style.color=event.currentTarget.style.color == "green" ? 'black':'green';
  }
/*  $scope.bill="they paid know"
$scope.showUday=false;
$scope.bill=function(){
    if($scope.showUday==false){
        $scope.showUday=true;
        $scope.bill="no"
        $scope.btnstyle={"background-color":'green'
    }

    }else{
        $scope.showUday=false;
        $scope.bill="oo sahoo oo sahoo"
        $scope.btnstyle={"background-color":'blue'}
    }
}*/
$scope.bag=false;
$scope.shopping=function(){
    $scope.bag=true;
   
    
};
$scope.confirm=function(){
    $scope.bag=false;
};














});

/*app.filter('searchFor', function () {
  return function (arr, searchElement) {
    if (!searchElement) {
      return arr
    }
    var result = []
    searchElement = searchElement.toLowerCase()
    angular.forEach(arr, (thing) => {
      if (thing.section.toLowerCase().indexOf(searchElement) !== -1) {
        result.push(thing)
      }
    })
    return result
  }
})*/
