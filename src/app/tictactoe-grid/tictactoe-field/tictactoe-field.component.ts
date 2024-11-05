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
  public readonly player: InputSignal<Player> = input.required();
  public readonly fieldIndex: InputSignal<number> = input.required();
  protected onClick: OutputEmitterRef<number> = output();

  protected drawSymbol(): string {
    return this.player() === Player.one ? 'x' : this.player() === Player.two ? 'o' : ''
  }

  protected handleClick() {
    this.onClick.emit(this.fieldIndex());
  }
}
