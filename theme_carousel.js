angular.module('app', ['ui.bootstrap']);
			function CarouselDemoCtrl($scope){
			  $scope.myInterval = 3000;
			  $scope.slides = [
			    {
			      image: '{block:IfHeaderImage}{image:Slider1}{/block:IfHeaderImage}'
			    },
			    {
			      video: 'https://www.youtube.com/embed/s-FqICYwMtk?list=PL07iUVTzkwzfsyp0MJL8cA9ZewGngbK8Y'
			    },
			    {
			      gif: 'http://66.media.tumblr.com/6cae4e398cedd2b6799be8553c9c0ced/tumblr_nj5q3fYreL1qav3uso2_540.gif'
			    },
			    {
			      image: '{block:IfHeaderImage}{image:Slider3}{/block:IfHeaderImage}'
			    },
			    {
			      image: '{block:IfHeaderImage}{image:Slider4}{/block:IfHeaderImage}'
			    }
			  ];
			}
