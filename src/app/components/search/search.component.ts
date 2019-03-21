import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  providers:    [ SpotifyService ]
  //styleUrls: [ './app.component.css' ]
})
export class SearchComponent  {
  
  searchStr: string;
  searchRes: object[];

  constructor(private _spotifyService:SpotifyService){

  }

  searchMusic(){
    this._spotifyService.searchMusic(this.searchStr)
      ._subscribe(res => {
        
        this.searchRes = res.json().data;

        //console.log(res.json());
        //artists.items
      })
 }
}