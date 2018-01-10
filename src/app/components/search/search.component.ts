import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";
import { Artist } from "../../../Artist";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStr:string;
  searchRes : Artist[];
  constructor(private _spotifyService:SpotifyService){}

  searchMusic(){
      this._spotifyService.getToken()
        .subscribe(res => {
            this._spotifyService.searchMusic(this.searchStr ,'artist' , res.access_token)
              .subscribe(res=> {
                this.searchRes = res.artists.items;
           })
        })
      
   }  

  ngOnInit() {
  }

}
