chrome.runtime.sendMessage({message: "wake_up"});
chrome.tabs.create({url:'https://tweetdeck.twitter.com/'});
window.close();