import { Chessman } from './chessman'

export class ChessUtil {
  static encode(chessman: Chessman): number {
    return chessman.color << 7 | chessman.arm << 4 | chessman.no;
  }

  static decode(code: number) {
    return [code >> 7, (code & 0x70) >> 4, code & 0x0f];
  }
}