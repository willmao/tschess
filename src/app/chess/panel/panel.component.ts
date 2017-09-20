import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui/ui.service'
import ChessUIConf from '../ui/chess-uiconf'
import SVGLine from '../ui/svg-line'
import Chessman from '../game/chessman'
import { ChessGame } from '../game/chess-game'
import { ChessColor } from '../game/chess-color.enum'

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

  clickPanel(event) {
    const originalPoint = this.uiService.getOriginalPoint(this.panelConf.zoomTimes, event.offsetX, event.offsetY);
    this.uiService.isInsidePanel(originalPoint.x, originalPoint.y);
    if (
      !this.uiService.isInsidePanel(originalPoint.x, originalPoint.y) ||
      !this.uiService.isValidPoint(originalPoint.x, originalPoint.y)
    ) return;
    const targetPoint = this.uiService.getValidPoint(originalPoint.x, originalPoint.y);
    this.chessGame.clickPanel(targetPoint);
  }

  ngOnInit() {
    this.baseLines = this.uiService.getBaseLines();
    this.chessmen = this.chessGame.chessmen;
    this.panelConf = this.uiService.getChessPanelConf();
  }
}
