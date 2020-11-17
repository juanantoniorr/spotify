import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpRequest: HttpClient) {
    

    console.log('Servicio listo');
   }
   // tslint:disable-next-line: typedef
   getNewReleases(){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAXBAZ77HI8BQwJsvYor-0m9eZEoM1CL7xJXg-MStaPKIzOBiCQnaYe4Y4Y6TF1Q0jVtCM8sBDVBW2WgaZRknAOoJ3hKdOhjZX58K804Qs5S-TjZVws6R-ifzBmKmS8Y61AJHdBACtNeWO9ISSogN7ShfQ'
          });
     // tslint:disable-next-line: whitespace
    this.httpRequest.get('https://api.spotify.com/v1/browse/new-releases',{headers}).subscribe(datos => {
       console.log(datos);
     });

   }
}
