import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  //styleUrls: [ './app.component.css' ]
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: object;
  albums: object[];
  artistData: object[];
  albumIds: object[];

  constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this._route.params
      .map(params => params['name'])
      .subscribe((name) => {

        this._spotifyService.getArtist(name)
          .subscribe(
            artist => {
              this.artist = artist;
            })

        this._spotifyService.searchMusic(name)
          .subscribe(res => {

            this.artistData = res.json().data;

            console.log(this.artistData);

            this.getAlbums(this.artistData)

            //if(this.albums != null){
            //artists.items){
            //console.log(this.albums);
            //}

            //artists.items
          })


      })
  }

  getAlbums(artistData: object[]) {
    this.albums = []
    this.albumIds = []

    if (artistData != null) {
      console.log(this.artistData);

      artistData.forEach((artistData) => {
      })
    }
  }
}