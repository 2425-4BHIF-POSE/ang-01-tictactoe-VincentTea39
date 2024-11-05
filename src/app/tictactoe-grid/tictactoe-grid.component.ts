import { Component } from '@angular/core';
import {TictactoeFieldComponent} from './tictactoe-field/tictactoe-field.component';

@Component({
  selector: 'app-tictactoe-grid',
  standalone: true,
  imports: [
    TictactoeFieldComponent,
  ],
  templateUrl: './tictactoe-grid.component.html',
  styleUrl: './tictactoe-grid.component.scss'
})
export class TictactoeGridComponent {
  grid: number[][] = [];
  public CurrentPlayer: Player = Player.none;

  public switchTurns() {
    if (this.CurrentPlayer === Player.none
        || this.CurrentPlayer === Player.one) {
      this.CurrentPlayer = Player.two;
    } else {
      this.CurrentPlayer = Player.one;
    }
  }

  protected readonly Player = Player;
}

export enum Player {
  none,
  one,
  two
}
