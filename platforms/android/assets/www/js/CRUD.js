var addSuccess = function() {
  document.getElementById('app').innerHTML +="<br>adding a user successfully ";
}
var addFailure = function() {
   document.getElementById('app').innerHTML +="<br>add a user failed ";
}
var updateSuccess = function() {
   document.getElementById('app').innerHTML +="<br>update a user successfully ";
}
var updateFailure = function() {
   document.getElementById('app').innerHTML +="<br>update a user failed ";
}
var getSuccess = function(msg) {
   document.getElementById('app').innerHTML +="<br>get a user successfully and the username is :"+msg+" ";
}
var getFailure = function() {
   document.getElementById('app').innerHTML +="<br>get a user failed ";
}
var getAllSuccess = function(all) {
   document.getElementById('app').innerHTML +="<br>get all user successfully, the list:";
   for(var a in all){
      document.getElementById('app').innerHTML +="<div>"+ a +","+ all[a]+"</div>";
   }
}
var getAllFailure = function() {
   document.getElementById('app').innerHTML +="<br>get all user failed ";
}
var deleteSuccess = function() {
   document.getElementById('app').innerHTML +="<br>delete a user successfully ";
}
var deleteFailure = function() {
   document.getElementById('app').innerHTML +="<br>delete a user failed ";
}
