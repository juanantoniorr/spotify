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
      Authorization: 'Bearer BQAAcveNC_ynbVR7DzJfNdJCzfE28VZ4rKx2m2FI0gQnoap4okQhV0L24YrIrSnjDIYAC_7LzlfctrUwQVIZHLQ1ekFEfsDaDlUFeb4NFbsHA_p-LSZlFRgk_BcpL8zCO5o2Yeowd9lXc3CuA3gg41AlaCo'
          });
     // tslint:disable-next-line: whitespace
    return this.httpRequest.get('https://api.spotify.com/v1/browse/new-releases',{headers});

   }
}
