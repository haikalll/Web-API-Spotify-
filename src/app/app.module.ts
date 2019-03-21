import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { appRouterProviders } from './app.routes';
import { SearchComponent } from './components/search/search.component';
import { SpotifyService } from './services/spotify.service';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
//import { HTTP_PROVIDERS } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, appRouterProviders, HttpModule ],
  declarations: [ AppComponent, HelloComponent, NavBarComponent, AboutComponent, SearchComponent, ArtistComponent, AlbumComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ SpotifyService ]
})
export class AppModule { }
