import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../app/components/pages/home/home.component"
import {CharacterListComponent} from "../app/components/pages/characters/character-list/character-list.component"
import {CharacterDetailsComponent} from "../app/components/pages/characters/character-details/character-details.component"

const routes: Routes = [

  {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full' },


  { path: 'home',component: HomeComponent },

  { path: 'character-list', component: CharacterListComponent},

  { path: 'character-details/:id', component:  CharacterDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
