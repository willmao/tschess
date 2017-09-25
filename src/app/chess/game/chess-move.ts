import Point from '../ui/point'
import Chessman from './chessman'
import ChessUtil from './chess-util'

export default class ChessMove {
  from: Point;
  to: Point;
  chessman: Chessman;
  killedMan: Chessman;
  move:number;

  constructor(move: number) {
    this.move = move;
    const [src, dest, chessman, killedMan] = ChessUtil.decodeMove(move);
    this.from = ChessUtil.decodePosition(src);
    this.to = ChessUtil.decodePosition(dest);
    this.chessman = new Chessman(chessman >> 7, (chessman & 0x70) >> 4, chessman & 0x0f, this.from.x, this.from.y);
    this.killedMan = killedMan ? new Chessman(killedMan >> 7, (killedMan & 0x70) >> 4, killedMan & 0x0f, this.to.x, this.to.y) : null;
  }

  toString() {
    return `${this.chessman.name}: ${this.from.x -3}-${this.from.y-3}${this.killedMan ? '吃' + this.killedMan.name : '到'}:${this.to.x-3},${this.to.y-3}`;
  }
}