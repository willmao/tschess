import SearchObject from './search-object'
import { ChessGame } from './chess-game'
import ChessRule from './chess-rule'
import GameEvaluator from './game-evaluator'
import ChessMove from './chess-move'

export default class SearchEngine {

  static maxDepth = 5;

  static createSearchObject = (game: ChessGame, color: number): SearchObject => {
    return new SearchObject(game, color);
  }

  static findBestMove = (game: ChessGame, color: number) => {
    const searchObj = SearchEngine.createSearchObject(game, color);
    let alpha = SearchEngine.alphaBeta(searchObj, color, -1 * GameEvaluator.INFINITY, GameEvaluator.INFINITY, SearchEngine.maxDepth);
    return searchObj.bestMove;
  }

  static alphaBeta = (searchObj: SearchObject, color: number, alpha: number, beta: number, depth: number) => {
    let bestMove = 0;
    // 如果深度为0，返回局面评分
    if (depth === 0 || ChessRule.isGameOver(searchObj)) {
      return GameEvaluator.evaluate(searchObj, color);
    }

    // 生成全部走法
    const moves = ChessRule.findAllMoves(searchObj, color, false);
    for (let i = 0; i < moves.length; i++) {
      const move = moves[i];
      const killedMan = (move >>> 24);
      // 可以直接吃掉对方将
      if (killedMan && ((killedMan & 0x70) >> 4) === 0 && depth === SearchEngine.maxDepth) {
        searchObj.bestMove = move;
        return GameEvaluator.INFINITY + 1;
      }

      SearchEngine.applyMove(searchObj, color, move);
      const currentScore = searchObj.currentScore;
      // if (depth === SearchEngine.maxDepth) {
      //   console.log(move, chessMove.toString());
      // }
      // TODO:判断是否导致重复步骤

      // 判断是否被将军
      // 反转搜索颜色
      // 搜索对方最优走法
      const value = -1 * SearchEngine.alphaBeta(searchObj, 1 - color, -beta, -alpha, depth - 1);
      SearchEngine.revertMove(searchObj, color, move);

      if (value >= beta) {
        if (SearchEngine.maxDepth != depth) {
          return beta;
        }
      }

      if (value > alpha) {
        alpha = value;
        bestMove = move;
        if (depth === SearchEngine.maxDepth) {
          console.log(`最优走法:${new ChessMove(bestMove).toString()},层数:${depth},走完评分:${currentScore},对方最优评分:${value},对方最优走法:${new ChessMove(searchObj.bestMove).toString()}`);
        }
      }
    }

    searchObj.bestMove = bestMove;

    return alpha;
  }

  // 走一个走法
  static applyMove = (searchObject: SearchObject, color: number, move: number) => {
    const from = (move & 0xff);
    const dest = ((move & 0xff00) >> 8);
    const chessman = ((move & 0xff0000) >> 16);
    const killedMan = (move >>> 24);

    if (killedMan) {
      const c = (killedMan >> 7);
      const arm = (killedMan & 0x70) >> 4;
      // set score
      if (c === color) {
        searchObject.currentScore -= GameEvaluator.armsStaticScore[arm];
      } else {
        searchObject.currentScore += GameEvaluator.armsStaticScore[arm];
      }
    }

    // 设置棋子新位置
    searchObject.square[from] = 0;
    searchObject.square[dest] = chessman;
    searchObject.pieces[chessman] = dest;
    searchObject.pieces[killedMan] = 0;
  }

  static revertMove = (searchObject: SearchObject, color: number, move: number) => {
    const from = (move & 0xff);
    const dest = ((move & 0xff00) >> 8);
    const chessman = ((move & 0xff0000) >> 16);
    const killedMan = (move >>> 24);

    if (killedMan) {
      const c = (killedMan >> 7);
      const arm = (killedMan & 0x70) >> 4;
      // set score
      if (c === color) {
        searchObject.currentScore += GameEvaluator.armsStaticScore[arm];
      } else {
        searchObject.currentScore -= GameEvaluator.armsStaticScore[arm];
      }
    }

    searchObject.square[from] = chessman;
    searchObject.square[dest] = killedMan;
    searchObject.pieces[chessman] = from;
    if (killedMan) {
      searchObject.pieces[killedMan] = dest;
    }
  }
}