import {Component, input, InputSignal, output, OutputEmitterRef} from '@angular/core';
import {Player} from '../tictactoe-grid.component';

@Component({
  selector: 'app-tictactoe-field',
  standalone: true,
  imports: [],
  templateUrl: './tictactoe-field.component.html',
  styleUrl: './tictactoe-field.component.scss'
})

export class TictactoeFieldComponent {
  player: InputSignal<Player> = input.required();
  playerOutput: string = "";
  fieldIndex: InputSignal<number> = input.required();
  onClick: OutputEmitterRef<number> = output();

  protected handleClick() {
    if (this.player() === Player.one || this.player() === Player.none) {
      this.playerOutput = "x";
    }
    else if (this.player() === Player.two) {
      this.playerOutput = "o";
    }
    this.onClick.emit(this.fieldIndex());
  }
}
