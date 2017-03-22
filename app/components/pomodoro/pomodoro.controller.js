'use strict';

angular.module('workyFrontApp')
  .controller('PomodoroController', function () {
    var vm = this;

    var hasExtension = false;
    var id = '123123123';
    var requiredVersion = '9992344234';


/*    vm.sendMessageToExtension = function () {
      chrome.runtime.sendMessage(id, {action: "id", value : id}, function(response) {
        if(response && (response.id == id)) //extension installed
        {
          console.log(response);
        }
        else //extension not installed
        {
          console.log("Please consider installig extension");
        }

      });
    }*/

    function handleResponse(message) {
      console.log('Message from the background script:');
    }

    function handleError(error) {
      console.log('handleError:');
    }

    function notifyBackgroundPage(e) {
      var sending = chrome.runtime.sendMessage({
        greeting: "Greeting from the content script"
      });
      sending.then(handleResponse, handleError);
    }

    window.addEventListener("click", notifyBackgroundPage);




  });
