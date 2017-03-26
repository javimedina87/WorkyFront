'use strict';

angular.module('workyFrontApp')
  .controller('PomodoroController', function ($scope) {

    var vm = this;
    var extensionId = "naamghdpjgcdlonhgaadkdfenbohjbcj";
    vm.urlOpenTabList2 = [];

    //Send message to extension to get the current open tabs
    vm.getCurrentOpenTabs = function() {
      chrome.runtime.sendMessage(extensionId, ({tabsRequested: true}), function(response) {
        vm.urlOpenTabList = response.data;
        console.log('getCurrentOpenTabs: ' + response);
        //TODO check this apply, tabs should be shown without doing $apply
        $scope.$apply();
      });
    }
    vm.getCurrentOpenTabs();

    vm.addNewWebsiteToBlockList = function () {
      vm.urlOpenTabList.push(vm.newWebsiteToBlock);
      console.log('new tab to block -> ' + vm.newWebsiteToBlock);
      vm.newWebsiteToBlock = null;
    }

  });
