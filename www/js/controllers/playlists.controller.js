System.register([], function (_export) {
  'use strict';

  var PlaylistsCtrl;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      PlaylistsCtrl = (function () {
        function PlaylistsCtrl($state) {
          _classCallCheck(this, PlaylistsCtrl);

          var self = this;
          self.$state = $state;

          self.playlists = [{ title: 'Pagodee', id: 1 }, { title: 'Chill', id: 2 }, { title: 'Dubstep', id: 3 }, { title: 'Indie', id: 4 }, { title: 'Rap', id: 5 }, { title: 'Cowbell', id: 6 }];
        }

        _createClass(PlaylistsCtrl, [{
          key: 'openPlaylist',
          value: function openPlaylist(id) {
            var self = this;
            self.$state.go('app.single', { playlistId: id });
          }
        }]);

        return PlaylistsCtrl;
      })();

      _export('PlaylistsCtrl', PlaylistsCtrl);
    }
  };
});