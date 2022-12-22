import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../characters.interfaces';
import {environment} from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  searchCaracterts(query= "", page = 1){
    const filter = `${environment.baseUrlAPi}/?name=${query}&page=${page}`
    return this.http.get<Character[]>(filter)
  }

  getDetail(id: number){
    const detailCharacter = `${environment.baseUrlAPi}/${id}`
    this.http.get<Character[]>(detailCharacter)
  }
}
