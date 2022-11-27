import {Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {environment } from 'src/environments/environment';
import {Character} from '../components/interaces/characters.interfaces'
import { filter, retryWhen } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacters(query='', page=1){
    const filter = `${environment.baseUrlAPi}?name${query
    }&page=${page}`

    return this.http.get<Character[]>(filter)
  }

  getDetail(id:number){
    return this.http.get<Character>(`${environment.baseUrlAPi}${id}`)
  }
}
