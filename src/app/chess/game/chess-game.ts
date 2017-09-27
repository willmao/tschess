import { Injectable } from '@angular/core';
import Chessman from './chessman'
import ChessUtil from './chess-util'
import Point from '../ui/point'
import { ChessColor } from './chess-color.enum'
import ChessRule from './chess-rule'
import ArrayHelper from './array-helper'
import SearchObject from './search-object'
import SearchEngine from './search-engine'
import ChessMove from './chess-move'

const originalChessmen = [
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x11, 0x21, 0x51, 0x41, 0x01, 0x42, 0x52, 0x22, 0x12, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x31, 0x00, 0x00, 0x00, 0x00, 0x00, 0x32, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x61, 0x00, 0x62, 0x00, 0x63, 0x00, 0x64, 0x00, 0x65, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0xe1, 0x00, 0xe2, 0x00, 0xe3, 0x00, 0xe4, 0x00, 0xe5, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0xb1, 0x00, 0x00, 0x00, 0x00, 0x00, 0xb2, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x91, 0xa1, 0xd1, 0xc1, 0x81, 0xc2, 0xd2, 0xa2, 0x92, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
];


export enum GameStatus {
  Start,
  Selected,
  Thinking,
  GameOver
}

@Injectable()
export default class ChessGame {

  gameStatus: GameStatus;
  chessmen: Chessman[];
  moves: Array<number>;

  constructor() {
    this.init();
  }

  init = () => {
    this.chessmen = this.getOriginalChessmen();
    this.gameStatus = GameStatus.Start;
    this.moves = [];
  }

  revert = () => {
    if (this.gameStatus === GameStatus.Thinking || this.moves.length < 2) {
      return;
    }

    this.revertMove(this.moves.pop());
    this.revertMove(this.moves.pop());
    this.unSelectAllChessman();
  }

  unSelectAllChessman = () => {
    this.chessmen.forEach((chessman) => {
      chessman.checked = false;
    })
  }

  private getOriginalChessmen(): Chessman[] {
    let chessmen: Chessman[] = [];
    for (let i = 0, item: number; i < originalChessmen.length; i++) {
      item = originalChessmen[i];
      if (item === 0) {
        continue;
      }
      let [color, arm, no] = ChessUtil.decode(item);
      chessmen.push(new Chessman(color, arm, no, (i % 16), (i >> 4)));
    }
    return chessmen;
  }

  selectChessman(chessman: Chessman, isSelect = true): void {
    this.chessmen.forEach((item) => {
      item.checked = false;
    })
    chessman.checked = isSelect;
  }

  moveChessman(chessman: Chessman, point: Point): void {
    chessman.x = point.x;
    chessman.y = point.y;
  }

  killChessman(point: Point): void {
    const chessmen = this.chessmen;
    for (let i = 0; i < chessmen.length; i++) {
      const chessman = chessmen[i];
      if (chessman.x === point.x && chessman.y === point.y) {
        this.chessmen.splice(i, 1);
        break;
      }
    }
  }

  getChessmanByPoint(point: Point): Chessman {
    const chessmen = this.chessmen;
    for (let i = 0; i < chessmen.length; i++) {
      const chessman = chessmen[i];
      if (chessman.x === point.x && chessman.y === point.y) {
        return chessman;
      }
    }

    return null;
  }

  getSelectedChessman = () => {
    return this.chessmen.filter((chessman) => chessman.checked)[0];
  }

  applyMove = (move) => {
    const chessMove = new ChessMove(move)
    const selectChessman = this.getChessmanByPoint(chessMove.from);
    this.selectChessman(selectChessman);
    const killChessman = this.getChessmanByPoint(chessMove.to);
    if (killChessman) {
      this.killChessman(chessMove.to);
    }
    this.moveChessman(selectChessman, chessMove.to);
    this.moves.push(move);
  }

  revertMove = (move) => {
    const chessMove = new ChessMove(move);
    const selectChessman = this.getChessmanByPoint(chessMove.to);
    selectChessman.x = chessMove.from.x;
    selectChessman.y = chessMove.from.y;
    const killChessman = chessMove.killedMan;
    if (killChessman) {
      this.chessmen.push(killChessman);
    }
  }

  static getGamePoint = (point: Point): Point => {
    return {
      x: point.x + 3,
      y: point.y + 3
    }
  }

  static encodeMove = (selectedChessman: Chessman, target: Point, killChessman: Chessman) => {
    return ChessUtil.encodeMove(
      ChessUtil.encodePosition(selectedChessman.x, selectedChessman.y),
      ChessUtil.encodePosition(target.x, target.y),
      ChessUtil.encode(selectedChessman),
      ChessUtil.encode(killChessman)
    )
  }

  isValidMove = (move: number, color: number) => {
    const searchObj = new SearchObject(this, color);
    return ChessRule.isValidMove(searchObj, color, move);
  }

  clickPanel(point) {
    const target: Point = {
      x: point.x + 3,
      y: point.y + 3
    }
    const chessman = this.getChessmanByPoint(target);
    switch (this.gameStatus) {
      case GameStatus.Start:
        if (chessman !== null && chessman.color === ChessColor.Red) {
          this.selectChessman(chessman);
          this.gameStatus = GameStatus.Selected;
        }
        break;
      case GameStatus.Selected:
        // 选择其他棋子
        if (chessman != null && chessman.color === ChessColor.Red) {
          this.selectChessman(chessman);
        } else {
          // 移动棋子，判断走法是否合法，是否吃子
          const selectedChessman = this.getSelectedChessman();
          const move = ChessUtil.encodeMove(
            ChessUtil.encodePosition(selectedChessman.x, selectedChessman.y),
            ChessUtil.encodePosition(target.x, target.y),
            ChessUtil.encode(selectedChessman),
            ChessUtil.encode(chessman)
          )
          const searchObj = new SearchObject(this, 1);
          const isValidMove = ChessRule.isValidMove(searchObj, 1, move);
          if (isValidMove) {
            this.applyMove(move);
          }
          this.gameStatus = GameStatus.Thinking;
          this.selectChessman(selectedChessman, false);
          const bestMove = SearchEngine.findBestMove(this, 0);
          console.log(bestMove);
          setTimeout(() => {
            this.applyMove(bestMove);
            this.gameStatus = GameStatus.Start;
            // console.log(11111);
          }, 100);
        }
        break;
      case GameStatus.Thinking:
        break;
    }
  }
}
