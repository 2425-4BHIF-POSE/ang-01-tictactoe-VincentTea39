import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TictactoeGridComponent} from './tictactoe-grid/tictactoe-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TictactoeGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TicTacToe';
}
