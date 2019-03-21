import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
  private searchUrl: string;
  private artistUrl: string;
  private albumUrl: string;
  private artistData: object[];
  private albums: object[];
  private albumIds: object[];

  constructor(private _http:Http){

  }

//type=' + type + '&market=from_token'
  searchMusic(str: string, type='artist'){
    this.searchUrl='https://deezerdevs-deezer.p.mashape.com/search?q=' + str ;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Mashape-Key', 'XqBYtMvfqYmshQlbl3CjATctz4f9p1QE64ejsnhrEPgjghzjVw');
    headers.append('Accept', 'text/plain');
        
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this._http.get(this.searchUrl, options)
            .map(res=>res.json());
  }

   getArtist(name: string){
    this.artistUrl='https://deezerdevs-deezer.p.mashape.com/artist/' + name ;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Mashape-Key', 'XqBYtMvfqYmshQlbl3CjATctz4f9p1QE64ejsnhrEPgjghzjVw');
    headers.append('Accept', 'text/plain');

    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this._http.get(this.artistUrl, options)
            .map(res=>res.json());
  }

  getAlbum(id: string){
    this.albumUrl="https://deezerdevs-deezer.p.mashape.com/album/" + id;

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Mashape-Key', 'XqBYtMvfqYmshQlbl3CjATctz4f9p1QE64ejsnhrEPgjghzjVw');
    headers.append('Accept', 'text/plain');

    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this._http.get(this.albumUrl, options)
            .map(res=>res.json());
  }

}