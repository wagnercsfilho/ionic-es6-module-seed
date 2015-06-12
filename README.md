# ECMAScript 6 via babeljs and systemjs 
This is a demo project to showcase/proof of concept using ES6 in Ionic app, and how such a project can be setup. 


[Gulp](http://gulpjs.com/) is used as the build tool, and the ES6 transpiler chosen was [BabelJS](http://babeljs.io/).

Technically, the ES6 is transpiled using [SystemJS](https://github.com/systemjs/systemjs).

## ES6 Controllers
'''
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
'''

## Installation
To install all dependencies:
```
npm install
```

See gulpfile.js for other tasks.


## License
MIT

