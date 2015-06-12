export class PlaylistsCtrl{

  constructor($state){
    var self = this;
    self.$state = $state;

    self.playlists = [
      { title: 'Pagodee', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
    
  };

  openPlaylist(id){
    var self = this;
    self.$state.go('app.single', {playlistId: id})
  }

}