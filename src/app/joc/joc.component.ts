import {Component, OnInit} from '@angular/core';
import {Joc} from "../../models/joc";
import {JugadorComponent} from "../jugador/jugador.component";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-joc',
  standalone: true,
  imports: [
    JugadorComponent,
    NgStyle,
    NgForOf,
    NgIf
  ],
  templateUrl: './joc.component.html',
  styleUrl: './joc.component.css'
})
export class JocComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string | undefined | any = '';
  game: Joc | undefined;
  jugadorActivo :number = 0

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Joc();
    console.log(this.game)
  }

  takeCard() {
    if(!this.pickCardAnimation){
      this.currentCard = this.game?.stack.pop();

      var numeroCarta = this.currentCard.split('_')[1]
      this.game!.score[this.jugadorActivo] += parseInt(numeroCarta)
      console.log(numeroCarta)
      console.log(this.jugadorActivo)

      if(this.game!.score[this.jugadorActivo] > 21) {
        this.pasarJugador()
      }

      this.pickCardAnimation = true;

      setTimeout(()=> {
        this.game?.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }

  pasarJugador() {
    this.jugadorActivo += 1
    console.log(this.jugadorActivo)
    if (this.jugadorActivo == 3){
      this.endGame()
    }
  }

  endGame() {
    console.log("Juego acavado")
    this.router.navigateByUrl('/endgame')
  }


}
