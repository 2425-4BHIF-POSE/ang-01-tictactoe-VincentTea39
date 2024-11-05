import {Component, signal, Signal, WritableSignal} from '@angular/core';
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
  protected readonly Player = Player;
  protected readonly fieldCount: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  protected readonly board: WritableSignal<Player[]> = signal(Array(this.fieldCount.length).fill(Player.none))

  protected winnerMessage: string = "";
  protected currentPlayerMessage = "x";

  protected winner: Player = Player.none;

  protected CurrentPlayer: Player = Player.one;

  protected draw(index: number) {
    if (this.board()[index] === Player.none) {
      this.board()[index] = this.CurrentPlayer;
    } else {
      return;
    }

    if (this.checkWinner()) {
      this.winner = this.CurrentPlayer;
      this.winnerMessage = `Player ${this.winner} won!`;
    }

    this.switchTurns();
  }

  protected switchTurns() {
    if (this.CurrentPlayer === Player.one) {
      this.CurrentPlayer = Player.two;
      this.currentPlayerMessage = "o";
    } else {
      this.CurrentPlayer = Player.one;
      this.currentPlayerMessage = "x";
    }
  }

  protected restartGame() {
    this.CurrentPlayer = Player.one;
    this.currentPlayerMessage = "x";
    this.winnerMessage = "";
    this.board.set(Array(this.fieldCount.length).fill(Player.none));
  }

  protected checkWinner(): boolean {
    const size = 3; // size of the Tic-Tac-Toe board (3x3)

    // Check rows
    for (let row = 0; row < size; row++) {
      const start = row * size;
      if (
        this.board()[start] !== this.Player.none &&
        this.board()[start] === this.board()[start + 1] &&
        this.board()[start] === this.board()[start + 2]
      ) {
        return true;
      }
    }

    // Check columns
    for (let col = 0; col < size; col++) {
      if (
        this.board()[col] !== this.Player.none &&
        this.board()[col] === this.board()[col + size] &&
        this.board()[col] === this.board()[col + 2 * size]
      ) {
        return true;
      }
    }

    // Check diagonal (top-left to bottom-right)
    if (
      this.board()[0] !== this.Player.none &&
      this.board()[0] === this.board()[4] &&
      this.board()[0] === this.board()[8]
    ) {
      return true;
    }

    // Check diagonal (top-right to bottom-left)
    if (
      this.board()[2] !== this.Player.none &&
      this.board()[2] === this.board()[4] &&
      this.board()[2] === this.board()[6]
    ) {
      return true;
    }

    if (!this.board().includes(this.Player.none)) {
      this.winnerMessage = "It's a draw!";
    }

    return false; // No winner
  }
}

export enum Player {
  none,
  one,
  two
}
