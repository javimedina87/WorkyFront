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

//Redirect url - Receives message from app

/*chrome.runtime.onMessageExternal.addListener(
  function(message, sender, sendResponse) {
    queryInfo = new Object();
    queryInfo.active = true;
    chrome.tabs.query(queryInfo, function(result) {
      var activeTab = result[0].id;
      updateProperties = new Object();
      updateProperties.url = 'http://www.error.com/';
      chrome.tabs.update(activeTab, updateProperties, function() {
        console.log('Redirected!')
      });
    });
    return true;
  }
);*/


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


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log('onUpdated - Start');
  chrome.runtime.send


});

chrome.tabs.onReplaced.addListener(function(tabId, changeInfo, tab) {
  console.log('onReplaced new tab');
});


/*{ urls: ["*://!*.facebook.com/!*", "*://!*.facebook.net/!*"] }, ["blocking"]);*/
