System.register(['./configs/routes.js', './app.run.js', './controllers/main.controller.js', './controllers/playlists.controller.js', './controllers/playlist.controller.js'], function (_export) {
  'use strict';
  var Routes, AppRun, MainCtrl, PlaylistsCtrl, PlaylistCtrl;
  return {
    setters: [function (_configsRoutesJs) {
      Routes = _configsRoutesJs.Routes;
    }, function (_appRunJs) {
      AppRun = _appRunJs.AppRun;
    }, function (_controllersMainControllerJs) {
      MainCtrl = _controllersMainControllerJs.MainCtrl;
    }, function (_controllersPlaylistsControllerJs) {
      PlaylistsCtrl = _controllersPlaylistsControllerJs.PlaylistsCtrl;
    }, function (_controllersPlaylistControllerJs) {
      PlaylistCtrl = _controllersPlaylistControllerJs.PlaylistCtrl;
    }],
    execute: function () {

      angular.module('starter', ['ionic']).run(AppRun).config(Routes).controller('MainCtrl', MainCtrl).controller('PlaylistsCtrl', PlaylistsCtrl).controller('PlaylistCtrl', PlaylistCtrl);

      angular.element(document).ready(function () {
        angular.bootstrap(document, ['starter']);
      });
    }
  };
});