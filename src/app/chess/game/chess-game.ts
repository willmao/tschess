import Chessman from './chessman'
import ChessUtil from './chess-util';
import Point from '../ui/point'
import { ChessColor } from './chess-color.enum'
import ChessRule from './chess-rule'
import ArrayHelper from './array-helper'

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
  Done
}

export class ChessGame {

  gameStatus: GameStatus;
  chessmen: Chessman[];
  moves: Array<number> = ArrayHelper.reset(new Array<number>(1 << 10));
  pieces: Array<number>; // 存放棋子-位置信息
  square: Array<number>; // 存放位置-棋子信息

  constructor() {
    this.chessmen = this.getOriginalChessmen();
    this.gameStatus = GameStatus.Start;
    this.updateInfo(this.chessmen);
  }

  private updateInfo(chessmen: Chessman[]) {
    this.pieces = this.getPieces(this.chessmen);
    this.square = this.getSquare(this.chessmen);
  }

  private getInfo(chessmen: Chessman[], assignFn: Function): Array<number> {
    const array = ArrayHelper.reset(new Array<number>(1 << 8));
    for (let i = 0; i < chessmen.length; i++) {
      const chessman = chessmen[i];
      const code = ChessUtil.encode(chessman);
      const position = ChessUtil.encodePosition(chessman.x, chessman.y);
      assignFn(array, code, position);
    }
    return array;
  }

  private getPieces(chessmen: Chessman[]) {
    return this.getInfo(chessmen, (array: Array<number>, code: number, position: number) => {
      array[code] = position;
    });
  }

  private getSquare(chessmen: Chessman[]) {
    return this.getInfo(chessmen, (array: Array<number>, code: number, position: number) => {
      array[position] = code;
    });
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

  selectChessman(chessman: Chessman): void {
    this.chessmen.forEach((item) => {
      item.checked = false;
    })
    chessman.checked = true;
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

  clickPanel(point) {
    const target:Point = {
      x: point.x + 3,
      y: point.y +3
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
          const isValidMove = ChessRule.isValidMove(this, move);
          if (isValidMove) {
            this.moveChessman(selectedChessman, target);
            if (chessman !== null) {
              this.killChessman(target);
              console.log(this.chessmen);
            }
          }
          this.updateInfo(this.chessmen);
        }
        break;
      case GameStatus.Thinking:
        break;
    }
  }
}
