import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/components/interaces/characters.interfaces';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

character: Character[] = []

private pageNum = 1
// private query : string;
private hideScrollHeight = 200;
private showScrollingHeight = 500;
  constructor() { }



  ngOnInit(): void {
  }

}
