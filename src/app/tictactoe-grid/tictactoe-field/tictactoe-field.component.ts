import {Component, input, InputSignal, output, OutputEmitterRef, signal, WritableSignal} from '@angular/core';
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
  playerOutput: WritableSignal<string> = signal("");
  fieldIndex: InputSignal<number> = input.required();
  onClick: OutputEmitterRef<number> = output();

  protected handleClick() {
    if (this.player() === Player.one || this.player() === Player.none) {
      this.playerOutput.set("x");
    }
    else if (this.player() === Player.two) {
      this.playerOutput.set("o");
    }
    this.onClick.emit(this.fieldIndex());
  }
}
