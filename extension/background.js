chrome.runtime.onMessageExternal.addListener(
  function(message, sender, sendResponse) {
    console.log('onMessageExternal');
    chrome.tabs.query({currentWindow:true}, function(tabs) {
      var urlOpenTabList = [];
      tabs.forEach(function(tab) {
        urlOpenTabList.push(tab.url);
      });
      sendResponse({"data":urlOpenTabList});
    });
    return true;
  }
);

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    //Set url error from my project to being redirected
    var workyFrontError = "http://localhost:9000/#!/error";

    //List of blocked tabs from pomodoro.controller
    var blackTabList = "http://www.facebook.com/";

    if(details.url == blackTabList){
      return {redirectUrl:workyFrontError};
    }else{
      return {cancel:false};
    }



  },
  { urls: ["<all_urls>"] }, ["blocking"]);




/*{ urls: ["*://!*.facebook.com/!*", "*://!*.facebook.net/!*"] }, ["blocking"]);*/
