'use strict';
import { Routes } from './configs/routes.js';
import { AppRun } from './app.run.js';
import { MainCtrl } from './controllers/main.controller.js';
import { PlaylistsCtrl } from './controllers/playlists.controller.js';
import { PlaylistCtrl } from './controllers/playlist.controller.js';

angular.module('starter', ['ionic'])

.run(AppRun)
.config(Routes)
.controller('MainCtrl', MainCtrl)
.controller('PlaylistsCtrl', PlaylistsCtrl)
.controller('PlaylistCtrl', PlaylistCtrl);

angular.element(document).ready(function () {
  angular.bootstrap(document, ['starter']);
});