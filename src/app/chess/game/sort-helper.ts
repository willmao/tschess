import GameEvaluator from './game-evaluator'
import ArrayHelper from './array-helper'

export default class SortHelper {
  static scores: Array<number> = ArrayHelper.reset(new Array<number>(1 << 10));

  static swapSort(moves: Array<number>) {
    for (let i = 0; i < moves.length; i++) {
      const move = moves[i];
      this.scores[i] = ((move & 0xff000000 ? GameEvaluator.armsStaticScore[(move >>> 28) & 0x07] : 0) << 8);
    }

    for (let i = 0; i < moves.length; i++) {
      for (let j = i + 1; j < moves.length; j++) {
        if (this.scores[i] < this.scores[j]) {
          let t = moves[i];
          moves[i] = moves[j];
          moves[j] = t;
          
          t = this.scores[i];
          this.scores[i] = this.scores[j];
          this.scores[j] = t;

          // moves[i] = moves[i] ^ moves[j];
          // moves[j] = moves[j] ^ moves[i];
          // moves[i] = moves[i] ^ moves[j];

          // this.scores[i] = this.scores[i] ^ this.scores[j];
          // this.scores[j] = this.scores[j] ^ this.scores[i];
          // this.scores[i] = this.scores[i] ^ this.scores[j];
        }
      }
    }
  }
}