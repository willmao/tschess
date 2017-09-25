import Chessman from './chessman'
import Point from '../ui/point'

export default class ChessUtil {
  static encode(chessman: Chessman): number {
    if (chessman === null) {
      return 0;
    }
    return chessman.color << 7 | chessman.arm << 4 | chessman.no;
  }

  static decode(code: number) {
    return [code >> 7, (code & 0x70) >> 4, code & 0x0f];
  }

  static encodePosition(x: number, y: number): number {
    return (y << 4) + x;
  }

  static decodePosition(position: number) {
    return {
      x: position & 0x0f,
      y: position >> 4
    }
  }

  static encodeMove(src, dest, chessman: number, killedMan: number): number {
    return src | (dest << 8) | (chessman << 16) | (killedMan << 24);
  }

  static decodeMove(move): Array<number> {
    return [move & 0xff, (move & 0xff00) >> 8, (move & 0xff0000) >> 16, move >>> 24];
  }
}