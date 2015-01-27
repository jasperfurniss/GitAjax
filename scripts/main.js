(function(){

"use strict";

var myGitHubAddress = "http://api.github.com/users/jasperfurniss/repos";
var githubUrl = myGitHubAddress + "?access_token=" + window.token;


var repoData = $.ajax({
url: "https://api.github.com/users/jasperfurniss/repos",
}).done(function(data){
console.log(data);
});

// var pull = function(locate){
// $.ajax({
//   url: "https://api.github.com/users/" + "username" + "/repos";
//   name: locate.name,
//   language: locate.language,
//   starcount: locate.stargazers_count,
//   forks: locate.forks
// });
//
// };


});















//
// var words = [{
//   name: 'cool'
// }, {
//   name: 'wow'
// }, {
//   name: 'dumb'
// }, {
//   name: 'thank'
// }];
//
// var foods = [{
//   name: 'apple',
//   color: 'red'
// }, {
//   name: 'pizza'
// }, {
//   name: 'pig ear sandwhich'
// }, {
//   name: 'sausage'
// }];
//
// var wordListItemTemplate = _.template($('.word-list-item-template').text());
//
// words.forEach(function(word) {
//   $('.word-list').append(wordListItemTemplate(word));
// });
//
//
// foods.forEach(function(food) {
//   $('.word-list').append(wordListItemTemplate(food));
// });
