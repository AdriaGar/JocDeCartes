import { Routes } from '@angular/router';
import {StartComponent} from "./start/start.component";
import {JocComponent} from "./joc/joc.component";

export const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'joc', component: JocComponent },
];
