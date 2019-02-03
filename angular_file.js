var app = angular.module("myApp", []);

              app.directive("fileInput", function($parse){
                return{
                  link: function($scope, element, attrs){
                    element.on("change", function(event){
                      var files = event.target.files;
                      //console.log(files[0].name);
                      $parse(attrs.fileInput).assign($scope, element[0].files);
                      $scope.$apply();
                    });
                  }}
              });

              app.controller("departments", function($scope) {
                    $scope.myObj =
                    [
                      {
                        "id" : "section1",
                        "padding" : "28px",
                        "Name" : "The Programmers Wing",
                        "imgsrc" : "img/technical.png",
                        "desc1" : "This wing is completely dedicated to programming,makes students to participate in hackathons,coding events.",
                        "desc2" : "It shines programming skills through mentors dedicated and takes cares of students in every aspect,",
                        "desc3" : "",
                        "desc4" : "" 
                      },
                      {
                        "id" : "section2",
                        "padding" : "28px",
                        "Name" : "The Analytics Wing",
                        "imgsrc" : "img/doc.png",
                        "desc1" : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
                        "desc2" : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                        "desc3" : "",
                        "desc4" : ""
                      },
                      {
                        "id" : "section3",
                        "padding" : "28px",
                        "Name" : "The Cyber Security Wing",
                        "imgsrc" : "img/designing.png",
                         "desc1" : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
                        "desc2" : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                        "desc3" : "",
                        "desc4" : ""
                      },
                      {
                        "id" : "section4",
                        "padding" : "28px",
                        "Name" : " ",
                        "imgsrc" : "img/proj.jpg",
                         "desc1" : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
                        "desc2" : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                        "desc3" : "",
                        "desc4" : ""
                      },
                    ]
                  });

                app.controller("alumni", function($scope,$http) {
                      $scope.main=false;
                      $scope.add=false;
                      $scope.view=false;
                      $scope.reverseSort = false;
                      $scope.data = false;
                      $scope.contact = false;
                      $scope.truedat = true;

                      $http.get('view_Alumni.php')
                      .then(function(response) {
                      console.log(response.data);
                      $scope.Details = response.data;
                    })

                    $scope.viewprofile = function() {
                      $scope.view = !($scope.view);
                      $scope.main = !($scope.main);
                    }

                    $scope.addnew = function() {
                      $scope.add = !($scope.add);
                      $scope.main = !($scope.main);
                    }



                    $scope.addMember = function() {
                      var txt;
                      var pintext = prompt("Please enter ISA-PIN mentioned in description of Whatsapp Group:", "ISA-PIN");

                      if (pintext == "IsAwALE") {
                        console.log("1234");
   									 		$http({
   												method:'post',
   												url:'add_Alumni.php',
   												data: {'name':$scope.name,'mobile':$scope.mobile,'email':$scope.email,'job':$scope.job,'city':$scope.city,'year':$scope.year}
   											})
   											.success(function(data) {
   												console.log(data);
                          {

                             var form_data = new FormData();
                             angular.forEach($scope.files, function(file){
                                  form_data.append('file', file);
                             });
                             $http.post('upload.php', form_data,
                             {
                                transformRequest: angular.identity,
                                headers: {'Content-Type': undefined,'Process-Data': false}
                             })
                             .success(function(response) {
                                  alert(response);
                                  $http.get('delete.php')
                                  .then(function(response) {
                                    $http.get('view_Alumni.php')
             												.then(function(response) {
                 		 									 	console.log(response.data);
                 		 										$scope.Details = response.data;
             		 									 })
                                  })
                               });
                             }
   											})
                      }
                      else {
                        alert("You need to be a valid person to sign up for these services.")
                      }
                      $scope.name="";
                      $scope.mobile="";
                      $scope.email="";
                      $scope.job="";
                      $scope.city="";
                      $scope.year="";
 									 }

                   $scope.alumni_contact = function() {
                     var pintext = prompt("Please enter ISA-PIN mentioned in description of Whatsapp Group:", "ISA-PIN");
                     if (pintext == "IsAwALE") {
                       $scope.contact = true;
                     }
                     else {
                       alert("You need to be a valid person to sign up for these services.")
                     }
                   }

                     $scope.sortItem = function(xyz) {
   										if (xyz == $scope.sortby) {
   											$scope.reverseSort = !$scope.reverseSort;
   										}
   										$scope.sortby = xyz;
   									}

                    $scope.detailView = function(name,mobile,email,job,city,year,image) {
                      $scope.viewName = name;
                      $scope.viewMobile = mobile;
                      $scope.viewEmail = email;
                      $scope.viewJob = job;
                      $scope.viewCity = city;
                      $scope.viewYear = year;
                      $scope.viewImage = image;
                      $scope.view = !($scope.view);
                      $scope.data = !($scope.data);
                    }

                    $scope.antiDetails = function() {
                      $scope.view = !($scope.view);
                      $scope.data = !($scope.data);
                    }
                  })
