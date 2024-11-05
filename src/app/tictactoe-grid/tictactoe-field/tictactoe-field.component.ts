import {Component, input, InputSignal, signal, WritableSignal} from '@angular/core';
import {Player} from '../tictactoe-grid.component';

@Component({
  selector: 'app-tictactoe-field',
  standalone: true,
  imports: [],
  templateUrl: './tictactoe-field.component.html',
  styleUrl: './tictactoe-field.component.scss'
})

export class TictactoeFieldComponent {
  player: WritableSignal<String> = signal('');
  currentPlayer: InputSignal<Player> = input.required();
  handleClick() {
    if (this.currentPlayer() === Player.one
    || this.currentPlayer() === Player.none) {
      this.player.update(() => 'x');
    }
    else {
      this.player.update(() => 'o');
    }
  }
}
