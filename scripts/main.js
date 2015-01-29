(function() {

    var myGitHubAddress = "https://api.github.com/users/jasperfurniss";
    var githubUrl = myGitHubAddress + "?access_token=" + window.token;

    $(document).ready(function() {

      if(typeof token !== 'undefined'){
        $.ajaxSetup({
          headers: { 'Authorization': 'token ' + token }
        });
      }


/********************  _.UNDERSCORE TEMPLATES._ ********************/



                        /****** Header ******/


    var headerTemplate = _.template($('[data-template-name=heading]').text());
    var $heading = $('.heading');

    $.ajax(
      myGitHubAddress).done(function(header) {
      $heading.append(headerTemplate(header));

    });



                       /****** Side Bar ******/


    var sideTemplate = _.template($('[data-template-name=sidebar]').text());
    var $sidebar = $('.sidebar');

    $.ajax(
      myGitHubAddress).done(function(side) {
      $sidebar.append(sideTemplate(side));

      });



                      /****** Repo List ******/


    var repoTemplate = _.template($('[data-template-name=repo]').text());
    var $repositories = $('.repositories');

    $.ajax(
      myGitHubAddress + "/repos").done(function(repos) {
      _.each(repos, function(repo) {
        $repositories.append(repoTemplate(repo));
      });
      });
      });
      })();
