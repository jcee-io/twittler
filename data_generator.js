var date = new Date();
var isHome = true;
var user;
var pendingCounter = 0;
//date = date.split(' ');
//date = date[1] + ' ' + date[2];
var realNames = {
  'douglascalhoun' : 'Douglas Calhoun',
  'mracus'         : 'Max R Acus',
  'realDonaldTrump': 'Donald Trump',
  'sharksforcheap' : 'ZOOKEEPER WILLIS',
  'artisticnuno'   : 'Nuno Neves',
  'keyboardg0dandino' : 'Andy Nguyen'
};

var userTweets = {
  'douglascalhoun' : [],
  'mracus'         : [],
  'realDonaldTrump': [],
  'sharksforcheap' : [],
  'artisticnuno'   : [],
  'keyboardg0dandino' : []
}

var tweetHistory = [];

function random(num){
  return Math.floor(Math.random() * num);
}

function goHome(){
  $('.tweet').remove();
  $('#showlink').remove();
  $('#pendingTweets').html(0);

  var cache = tweetHistory.slice(0);

  pendingCounter = 0;
  isHome = true;
  user = false;
  maxLength = tweetHistory.length < 5 ? tweetHistory.length : 5;

  for(var i = 0; i < maxLength; i++){
    tweetHistory[i].appendTo($('#tweetbox'));
  }

  if(maxLength >= 5) {
    $('<button onclick="showAll()" id="showlink">Click here to see all tweets</button>').appendTo($('#tweetbox'));
  }
}


//removes all of the tweets and refreshes it with the specified users tweets
function getVal(obj){
  $('.tweet').remove();
  $('#showlink').remove();
  isHome = false;
  user = obj.value;
  maxLength = userTweets[user].length < 5 ? userTweets[user].length : 5;

  for(var i = 0; i < maxLength; i++){
    userTweets[user][i].appendTo($('#tweetbox'));
  }

  if(maxLength >= 5) {
    $('<button onclick="showAll()" id="showlink">Click here to see all tweets</button>').appendTo($('#tweetbox'));
  }

} 

function showAll(){
  
  var handle = user !== false ? userTweets[user] : tweetHistory;

  for(var i = 5; i < handle.length; i++){
    handle[i].appendTo($('#tweetbox'));
  }
  $('#showlink').remove();
}

//////////////////////////////// Data Generator /////////////////////////////////
/*
      <div class="tweet jumbotron container">
        <div class="username tweet.user">
          <strong>
            <button value="tweet.user" onclick="getVal(this)">USER NAME</button>
          </strong>
          @username 
          <img class="verified" src="verified.png">
          TIMESTAMP
        </div>
        tweet.message <br><br>
        <span class="icon-bubbles"> comments </span>
        <span class="icon-loop"></span>
        <span class="icon-heart"></span>
        <span class="icon-envelope-letter"></span>
      </div>
*/    
      

      function appendTweet(tweet){
          var date = new Date();
          
          var $tweet = $('<div class="tweet jumbotron container"></div>');
          $tweet.html(
            '<div class="username ' + tweet.user 
            + '"><strong><button value="'+ tweet.user + '"onclick="getVal(this)">'
            + realNames[tweet.user] 
            +'</button></strong> @' + tweet.user 
            +'<img class="verified" src="verified.png" hidden>'+ ' - ' 
            + date.toLocaleTimeString()
            + '</div>' 
            + tweet.message + '<br><br>'
            + '<span class="icon-bubbles">  comments </span>'
            + '<span class="icon-loop"> retweets </span>'
            + '<span class="icon-heart"> likes </span>'
            + '<span class="icon-envelope-letter"> message </span>'
            );

          if(isHome){
            if(tweetHistory.length <= 10){
              $tweet.prependTo($('#tweetbox'));
            } else {
              pendingCounter++
              $('#pendingTweets').html(pendingCounter);              
            }
          }
          
          userTweets[tweet.user].unshift($tweet);
          tweetHistory.unshift($tweet);
          $('.realDonaldTrump').find('.verified').removeAttr('hidden');
      }




      $(document).ready(function(){
        var $body = $('body');
        //$body.html('');

        var index = streams.home.length - 2;
        while(index >= 0){
          var tweet = streams.home[index];

          appendTweet(tweet);
          index -= 1;
        }

      });


///////////////////////////////DATA GENERATOR PORTION OF THE JS FILE////////////////////////////////////////////


/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// set up data structures
window.streams = {};
streams.home = [];
streams.users = {};
streams.users.realDonaldTrump = [];
streams.users.sharksforcheap = [];
streams.users.mracus = [];
streams.users.douglascalhoun = [];
streams.users.artisticnuno = [];
streams.users.keyboardg0dandino = [];
window.users = Object.keys(streams.users);

// utility function for adding tweets to our data structures
var addTweet = function(newTweet){
  var username = newTweet.user;
  streams.users[username].push(newTweet);
  streams.home.push(newTweet);
  appendTweet(newTweet);
};

// utility function
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random tweet generator
var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
var verbs = ['downloaded', 'interfaced', 'deployed', 'developed', 'built', 'invented', 'experienced', 'navigated', 'aided', 'enjoyed', 'engineered', 'installed', 'debugged', 'delegated', 'automated', 'formulated', 'systematized', 'overhauled', 'computed'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind','covfefe','tremendous','FAKE NEWS','bigly'];
var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '#MAGA', '#GOP', '', ''];

var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// generate random tweets on a random schedule
var generateRandomTweet = function(){
  var tweet = {};
  tweet.user = randomElement(users);
  tweet.message = randomMessage();
  tweet.created_at = new Date();
  addTweet(tweet);
};


var scheduleNextTweet = function(){
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math.random() * 5000);
};
scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message){
  if(!visitor){
    throw new Error('set the global visitor property!');
  }
  var tweet = {};
  tweet.user = visitor;
  tweet.message = message;
  addTweet(tweet);
};
