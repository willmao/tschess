import { ChessGame } from './chess-game'
import Chessman from './chessman'
import ArrayHelper from './array-helper'
import ChessUtil from './chess-util'
import GameEvaluator from './game-evaluator'

export default class SearchObject {
  pieces: Array<number>;
  square: Array<number>;
  moveHistory: Array<number>;
  bestMove:number;
  currentScore:number;

  constructor(game: ChessGame, color: number) {
    this.pieces = this.getPieces(game.chessmen);
    this.square = this.getSquare(game.chessmen);
    this.bestMove = -1;
    // TO check
    this.currentScore = GameEvaluator.evaluate(this, color);
    // console.log(this.currentScore);
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
}