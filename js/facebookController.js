deltaSocial.controller('facebookCtrl', function ($scope, $http){

	var facebookUrl = "http://ec2-52-34-116-224.us-west-2.compute.amazonaws.com/delta/facebook/"
	$http.get(facebookUrl).success(function (deltaData){
		
		$scope.posts = deltaData.data;
	
	})
})

$(document).ready(function(){

var id = $('#fbPosts');
setInterval(function(){
    var pos = id.scrollTop();
    id.scrollTop(pos + 1);
}, 100)

});