/*chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  console.log(tabs[0]);
});*/


/* Create a new window to Google.com */

/*
chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({url: 'http://google.com'}, callback);

  function callback(data) {
    console.log(data);
  }
});
*/


/*chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
        if (request) {
            if (request.message) {
                if (request.message == "version") {
                    sendResponse({version: 1});
                }
            }
        }
        return true;
    }
);*/


chrome.runtime.onMessageExternal.addListener(function(msg, sender, sendResponse) {
  if ((msg.action == "id") && (msg.value == id))
  {
    sendResponse({id : id});
  }
});


/*function handleMessage(request, sender, sendResponse) {
  console.log("Message from the content script: " +
    request.greeting);
  sendResponse({response: "Response from background script"});
}

chrome.runtime.onMessageExternal.addListener(handleMessage);*/



