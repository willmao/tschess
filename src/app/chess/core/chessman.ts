import { ChessKind } from './chess-kind.enum'
import { ChessColor } from './chess-color.enum'
import { ChessChineseNames } from './chess-chinese-names.enum'

export class Chessman {
  color: ChessColor;
  arm: ChessKind;
  no: number;
  x: number;
  y: number;
  name: string;
  id:string;
  checked: boolean;

  constructor(color: number, arm: number, no: number, x: number, y: number) {
    this.color = color;
    this.arm = arm;
    this.no = no;
    this.x = x;
    this.y = y;
    this.name = ChessChineseNames[arm];
    this.checked = false;
    this.id = `${this.color.toString().toLowerCase()}_${this.name}_${this.no}`;
  }
}
