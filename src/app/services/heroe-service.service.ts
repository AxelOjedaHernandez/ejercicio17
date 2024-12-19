import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroes } from '../data/heroes-entity';
import { Heroe } from '../data/heroe-entity';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  urlAPI = "https://adl-wcbdf-eje-10-superheroes.onrender.com/api/v1/heroes" //aqui va la url de la api de heroes

  //inyectamos el cliente http para conectarnos
  constructor(private httpCliente: HttpClient) { }

  //get
  getAllHeroes(): Observable<Heroes>{
    return this.httpCliente.get<Heroes>(this.urlAPI)
  }

  //get by id
  getHeroe(id: number): Observable<Heroe>{
    return this.httpCliente.get<Heroe>(this.urlAPI+"/"+id)
  }

  //post
  postHeroe(heroe: Heroe): Observable<Heroe>{
    return this.httpCliente.post<Heroe>(this.urlAPI, heroe)
  }

  //put
  putHeroe(id: number, heroe: Heroe): Observable<Heroe>{
    return this.httpCliente.put<Heroe>(this.urlAPI+"/"+id, heroe)
  }

  //delete
  deleteHeroe(id: number): Observable<Heroe>{
    return this.httpCliente.delete<Heroe>(this.urlAPI+"/"+id)
  }
}
