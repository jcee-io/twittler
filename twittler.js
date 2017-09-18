var date = new Date();
date = date.toLocaleTimeString()
//date = date.split(' ');
//date = date[1] + ' ' + date[2];
var realNames = {
  'douglascalhoun' : 'Douglas Calhoun',
  'mracus'         : 'Max R Acus',
  'shawndrost'     : 'Mister Shawn',
  'sharksforcheap' : 'ZOOKEEPER WILLIS'
};
var userTweets = {
  'douglascalhoun' : [],
  'mracus'         : [],
  'shawndrost': [],
  'sharksforcheap' : []
}

var orderedTweets = '';
function userTimeline(){

}

function ifClick(){
  alert('hello world');
}


//////////////////////////////// Data Generator /////////////////////////////////
      $(document).ready(function(){
        var $body = $('body');
        //$body.html('');

        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div class="tweet jumbotron container"></div>');
          $tweet.html(
            '<div class="username ' + tweet.user 
            + '"><strong><a href="#" onclick="ifClick()" style="color: black;">'
            + realNames[tweet.user] 
            +'</a></strong> @' + tweet.user 
            +'<img class="verified" src="verified.png">'+ ' - ' 
            + date
            + '</div>' 
            + tweet.message);
          $tweet.appendTo($body);
          userTweets[tweet.user].push($tweet);
          index -= 1;
        }

      });

console.log(userTweets)