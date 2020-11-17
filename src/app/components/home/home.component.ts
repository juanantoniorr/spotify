import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
 paises: any[] = [];

  constructor(private http: HttpClient, spotifyService: SpotifyService) {
    console.log(spotifyService.getNewReleases());

   }

  ngOnInit(): void {
  }

}
