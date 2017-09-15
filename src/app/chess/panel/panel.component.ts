import { Component, OnInit } from '@angular/core';
import { UiService } from '../core/ui.service'
import { ChessUIConf } from '../core/chess-uiconf'
import { SVGLine } from '../core/svg-line'
import { Chessman } from '../core/chessman'
import { ChessGame } from '../core/chess-game'
import { ChessColor } from '../core/chess-color.enum'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  providers: [UiService, ChessUIConf]
})
export class PanelComponent implements OnInit {
  constructor(private uiService: UiService, private uiConf: ChessUIConf) { }
  baseLines: SVGLine[];
  chessmen: Chessman[];
  chessGame: ChessGame = new ChessGame();
  panelConf: any;

  select(chessman: Chessman) {
    for (let i = 0; i < this.chessmen.length; i++) {
      if (this.chessmen[i].id !== chessman.id) {
        this.chessmen[i].checked = false;
      }
    }

    chessman.checked = !chessman.checked;
  }

  selectChessman(chessman: Chessman) {
    if (chessman.color === ChessColor.Black) {
      return;
    }

    this.select(chessman);
  }

  ngOnInit() {
    this.baseLines = this.uiService.getBaseLines();
    this.chessmen = this.chessGame.getOriginalChessmen();
    this.panelConf = this.uiService.getChessPanelConf();
  }
}
