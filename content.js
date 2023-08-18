chrome.runtime.sendMessage({message: "wake_up"});
if(location.href == "https://twitter.com/i/premium_sign_up"){
    if(confirm("TweetDeck(X Pro)へ移動しますか?")){
        location.href = "https://tweetdeck.twitter.com/";
    }
}

