
var keys = require("spotify-keys.js");
var keys2 = reqiuire("twitter-keys.js");
var option = process.argv[2];
var query = process.argv[3];


function runliri(){

  if (option === "my-tweets") {
    var Twitter = require('twitter');
    var client = new Twitter ({
    consumer_key: twitter.consumer_key,
    consumer_secret: twitter.consumer_secret,
    access_token_key: twitter_token_key ,
    access_token_secret: access_token_secret,
    });

 if (option === "spotify-this-song") {
  if (query === undefined) {
    query = "The Sign of Ace of Base";
    }
    var Spotify = require('Spotify');
    var client = new Spotify ({
     id: spotifyIDs.client_id,
     secret: spotifyIDs.client_secret,
    });
    spotify.search({type: "track", query:query}, function (err,data) {
      if (err) {
        return console.log("Error");
      }
      console.log("Artists: " + data.tracks.items[0].artist[0].name + 
                  "/nSong Name:" + data.trim + data.tracks.items[0].preview_url + 
                  "/nAlbum: " + data.tracks.item[0].album.name);
      });

    if (option === "movie-this") {
      var request = require('request');
      if (query === undefined);
        query = "Mr. Nobody";
      }
      var queryUrl = "http://www.omdbapi.com/?t=" + query + "&y=&plot=short&apikey=40e9cece";
        request(queryURL, function(error, response, body) {
        var movie = JSON.parse(body);
        console.log("Title " + movie.Title + 
                    "/nYears " + movie.Year + 
                    "/nIMDB Rating: " + movie.imdb_rating +
                    "/nRotten Tomates Rating: " + movie.tomatoes_rotten + 
                    "/nCountry Produced: " + movie.Country + 
                    "/nLanguage: " + movie.Language + 
                    "/nPlot: " + movie.Plot + 
                    "/nActors: " + movie.Actors)
    });
      }
    }


 if (option==="do-what-it-says") {
  var fs = require("fs");
  fs.readFile("random.txt","utf8", function(err,data) {
    if (err) console.log("Error Message");
  })
 }
}


