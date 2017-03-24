'use strict';

angular.module('workyFrontApp')
  .controller('PomodoroController', function ($q) {

    var vm = this;
    var extensionId = "naamghdpjgcdlonhgaadkdfenbohjbcj";
    vm.showTabs = false;

    function getAllOpenTabs() {
      chrome.runtime.sendMessage(extensionId, ({tabsRequested: true}), function(response) {
        vm.urlOpenTabList = response;
        console.log('getAllOpenTabs: ' + response);
      });
    }
    getAllOpenTabs();

    vm.toggleOpenTabs = function() {
        vm.showTabs = !vm.showTabs;
    }

  });
