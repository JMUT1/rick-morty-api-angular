import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/characters.interfaces';
import { ApiService } from 'src/app/shared/services/api.service';
import {take} from "rxjs/operators"

type RequestInfo = {
  next: any;
}
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

characters: Character[] = []

private pageNum = 1;
private query !:string;
info: RequestInfo = {
  next : null
}
private hideScrollHeight = 200;
private showScrollHeight =  500;


constructor(private characterService : ApiService) { }



  ngOnInit(): void {
    this.getDataFromService()
    console.log(this.characters);

  }

  private getDataFromService(): void{
    this.characterService
    .searchCharacters(this.query, this.pageNum)
    .pipe(take(1))
    .subscribe((res: any)=>{
      const {info , results} = res;
      this.characters = [...this.characters, ...results];
      this.info = info

    })
  }

}
