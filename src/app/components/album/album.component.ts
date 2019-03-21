import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  //styleUrls: [ './app.component.css' ]
})
export class AlbumComponent{
  
  album: object; 
  tracks: object[];

  constructor(private _spotifyService:SpotifyService, private _route:ActivatedRoute){

  }

  ngOnInit(){
  this._route.params
    .map(params => params['id'])
    .subscribe((id) => {

      this._spotifyService.getAlbum(id)
        ._subscribe(
          res => {
            console.log(res.json());
            this.album= res.json();
            }

          )}
    )}
}