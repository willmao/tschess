import { Component, OnInit, EventEmitter, } from '@angular/core';
import { UiService } from '../services/ui.service'
import ChessUIConf from '../ui/chess-uiconf'
import SVGLine from '../ui/svg-line'
import Chessman from '../game/chessman'
import ChessGame from '../game/chess-game'
import { ChessColor } from '../game/chess-color.enum'
import { GameStatus } from '../game/chess-game'
import SearchEngine from '../game/search-engine'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  providers: [UiService, ChessUIConf, ChessGame, SearchEngine]
})
export class PanelComponent implements OnInit {
  constructor(private uiService: UiService, chessGame: ChessGame) {
    this.uiConf = uiService.getUiConf();
    this.chessGame = chessGame;

    this.thinking = new EventEmitter<any>(false);
    this.thinking.subscribe(this.findBestMove);
    this.thinkDuration = 10;
    this.showTimeLeft = false;
  }
  baseLines: SVGLine[];
  chessGame: ChessGame;
  panelConf: any;
  uiConf: ChessUIConf;
  thinking: EventEmitter<any>;
  thinkDuration:number;
  showTimeLeft:boolean;
  timeLeft: number;
  thinkTimer: any;

  clickPanel(event) {
    const originalPoint = this.uiService.getOriginalPoint(this.panelConf.zoomTimes, event.offsetX, event.offsetY);
    this.uiService.isInsidePanel(originalPoint.x, originalPoint.y);
    if (
      !this.uiService.isInsidePanel(originalPoint.x, originalPoint.y) ||
      !this.uiService.isValidPoint(originalPoint.x, originalPoint.y)
    ) return;
    const panelPoint = this.uiService.getValidPoint(originalPoint.x, originalPoint.y);
    // this.chessGame.clickPanel(panelPoint);
    const gamePoint = ChessGame.getGamePoint(panelPoint);
    const chessman = this.chessGame.getChessmanByPoint(gamePoint);
    switch (this.chessGame.gameStatus) {
      case GameStatus.Start:
        if (chessman !== null && chessman.color === ChessColor.Red) {
          this.chessGame.selectChessman(chessman);
          this.chessGame.gameStatus = GameStatus.Selected;
        }
        break;
      case GameStatus.Selected:
        // 切换棋子
        if (chessman != null && chessman.color === ChessColor.Red) {
          this.chessGame.selectChessman(chessman);
        } else {
          // 走棋
          const selectChessman = this.chessGame.getSelectedChessman();
          const move = ChessGame.encodeMove(selectChessman, gamePoint, chessman);
          if (this.chessGame.isValidMove(move, 1)) {
            this.chessGame.applyMove(move);
            this.thinking.emit(this.chessGame);
            this.chessGame.gameStatus = GameStatus.Thinking;
            this.showTimeLeft = true;
            this.timeLeft = this.thinkDuration;
            this.thinkTimer = setInterval(() => {
              if (!this.timeLeft) {
                this.showTimeLeft = false;
                return clearInterval(this.thinkTimer);
              }
              this.timeLeft--;
            }, 3000);
          }
        }
        break;
    }
  }
  
  findBestMove = (chessGame: ChessGame) => {
    setTimeout(() => {
      const bestMove = SearchEngine.findBestMove(chessGame, 0);
      if (bestMove) {
        chessGame.applyMove(bestMove);
        chessGame.gameStatus = GameStatus.Start;
        this.showTimeLeft = false;
      }
    }, 5);
  }

  resetGame = () => {
    this.chessGame.init();
  }

  revert = () => {
    this.chessGame.revert();
  }

  get chessmen () {
    return this.chessGame.chessmen;
  }

  ngOnInit() {
    this.baseLines = this.uiService.getBaseLines();
    this.panelConf = this.uiService.getChessPanelConf();
  }
}
