import ChessRule from './chess-rule'
import SearchObject from './search-object'

export default class GameEvaluator {

  static INFINITY = 10000;
  static UNKNOWN = 10001;

  static armsStaticScore = [
    // king
    5000,
    // rook
    1000,
    // horse
    400,
    // cannon
    500,
    // guard
    100,
    // elephant
    200,
    // pawn
    100,
  ];

  static evaluate = (searchObject: SearchObject, color: number): number => {
    let score = 0, man: number, addr: number;
    const pieces = searchObject.pieces;
    for (let arm = 0; arm < 7; arm++) {
      for (let no = 1; no <= ChessRule.armsCount[arm]; no++) {
        let man = (color << 7) | (arm << 4) | no;
        let addr = pieces[man];
        if (addr) {
          score += GameEvaluator.armsStaticScore[arm];
        }

        man = ((1 - color) << 7) | (arm << 4) | no;
        addr = pieces[man];
        if (addr) {
          score -= GameEvaluator.armsStaticScore[arm];
        }
      }
    }

    return score;
  }
}