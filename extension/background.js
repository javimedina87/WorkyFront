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
    var workyFrontError = "http://localhost:9000/#!/pomodoro";

    return {redirectUrl:workyFrontError};
  },
  { urls: ["*://*.facebook.com/*", "*://*.facebook.net/*"] }, ["blocking"]);
