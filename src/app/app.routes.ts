import { Routes } from '@angular/router';
import {StartComponent} from "./start/start.component";
import {JocComponent} from "./joc/joc.component";
import {EndGameComponent} from "./end-game/end-game.component";

export const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'joc', component: JocComponent },
  { path: 'endgame', component: EndGameComponent },
];
