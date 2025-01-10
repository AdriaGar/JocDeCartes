import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-jugador',
  standalone: true,
  imports: [],
  templateUrl: './jugador.component.html',
  styleUrl: './jugador.component.css'
})
export class JugadorComponent implements OnInit{

  @Input() name: any;
  @Input() posicio: any;
  @Input() score: any;

  constructor() {}

  ngOnInit() {
  }

}
