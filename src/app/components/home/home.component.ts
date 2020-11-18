import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
 nuevasCanciones: any[] = [];

  constructor(private http: HttpClient, spotifyService: SpotifyService) {
  spotifyService.getNewReleases().subscribe((data: any) => {
console.log(data.albums.items);
this.nuevasCanciones = data.albums.items;


  });

   }

  ngOnInit(): void {
  }

}
