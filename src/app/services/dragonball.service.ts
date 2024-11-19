import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceDragonball, Personaje } from '../common/interface-dragonball';

@Injectable({
  providedIn: 'root'
})

export class DragonballService {

  private readonly http: HttpClient = inject(HttpClient);
  private readonly URL = 'https://dragonball-api.com/api/characters';

  constructor() { }

  getPersonajes(currentPage: number): Observable<InterfaceDragonball> {
    return this.http.get<InterfaceDragonball> (
      this.URL + '?page=' + currentPage + '&limit=16'
    );
  }

  getPersonaje(id: number): Observable<Personaje> {
    return this.http.get<Personaje>(this.URL + '/' + id);
  }
}
