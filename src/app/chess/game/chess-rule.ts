import ArrayHelper from './array-helper'

const boardMask = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,

  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,

  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const kingMask = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

  0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,

  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const horseDelta = ArrayHelper.unzip([
  [0x0e, -0x01],
  [0x1f, 0x10],
  [0x21, 0x10],
  [0x12, 0x01],
  [-0x0e, 0x01],
  [-0x1f, -0x10],
  [-0x21, -0x10],
  [-0x12, -0x01],
], 0x22, 0x44);

const armsCount = [
  // king
  1,
  // rook
  2,
  // horse
  2,
  // cannon
  2,
  // guard
  2,
  // elephant
  2,
  // pawn
  5,
]

export default class ChessRule {

  static moves: Array<number> = ArrayHelper.reset(new Array<number>(1 << 10));

  static isValidAddress = (address: number): boolean => {
    return boardMask[address] > 0;
  }

  static moveDefHelp = (arm, deltaList: Array<number>, checkAddressFn: Function, checkMoveFn: Function) => {
    let def = [new Array<number>(256), new Array(256)];
    for (let color = 0; color < 2; color++) {
      for (let src = 0; src < 256; src++) {
        if (!ChessRule.isValidAddress(src) || checkAddressFn && !checkAddressFn(color, src))
          continue;

        def[color][src] = [];
        for (let i = 0; i < deltaList.length; i++) {
          let delta = deltaList[i];
          let dest = src + delta;
          if (!ChessRule.isValidAddress(dest) || checkAddressFn && !checkAddressFn(color, dest))
            continue;

          if (checkMoveFn && !checkMoveFn(color, src, dest))
            continue;

          let move = src | (dest << 8) | (((color << 7) | (arm << 4)) << 16);
          def[color][src].push(move);
        }
      }
    }
    return def;
  }

  static baseMoveDef = [
    // king
    ChessRule.moveDefHelp(0, [-0x01, 0x10, 0x01, -0x10],
      (color, address) => {
        return (color === (address >> 7)) && kingMask[address];
      }, null
    ),
    // rook
    ChessRule.moveDefHelp(1, [], null, null),
    // horse
    ChessRule.moveDefHelp(2, [0x0e, 0x1f, 0x21, 0x12, -0x0e, -0x1f, -0x21, -0x12], null, null),
    // cannon
    ChessRule.moveDefHelp(3, [], null, null),
    // bishop
    ChessRule.moveDefHelp(4, [0x0f, 0x11, -0x0f, -0x11],
      (color, address) => {
        return ArrayHelper.include([0x36, 0x38, 0x47, 0x56, 0x58], (address - color * 0x70));
      }, null
    ),
    // elephant
    ChessRule.moveDefHelp(5, [0x1e, 0x22, -0x1e, -0x22],
      (color, address) => {
        return ArrayHelper.include([0x35, 0x53, 0x75, 0x57, 0x79, 0x5b, 0x39], (address - color * 0x50));
      }, null
    ),
    // pawn
    ChessRule.moveDefHelp(6, [-0x01, 0x10, 0x01, -0x10],
      function (c, a) {
        return c != (a >> 7) || (a & 0x1) && (c ? a < 0x9f : a > 0x60);
      },
      function (c, s, d) {
        return (s & 0xf0) == (d & 0xf0) || (c == 0) == ((s & 0xf0) < (d & 0xf0));
      }
    )
  ];

  static findMovesRook = (game, color: number, offset: number, onlyKill: boolean) => {
    let pieces = game.pieces;
    let square = game.square;
    let moves = ChessRule.moves;
    for (let no = 1; no <= 2; no++) {
      let man = (color << 7) | (1 << 4) | no;
      let src = pieces[man];
      if (src === 0) continue;
      for (let shift = 0; shift < 4; shift++) {
        let delta = ((shift & 0x1) ? 1 : -1) * (1 << ((shift & 0x2) << 1));
        for (let dest = src; boardMask[(dest = dest + delta)];) {
          let killedMan = square[dest];
          if (killedMan > 0 && (killedMan >> 7) === color) break;
          if (killedMan || !onlyKill) {
            moves[offset++] = src | (dest << 8) | (man << 16) | (killedMan << 24);
          }

          if (killedMan > 0) break;
        }
      }
    }

    return offset;
  }

  static findMovesCannon = (game, color: number, offset: number, onlyKill: boolean) => {
    let pieces = game.pieces;
    let square = game.square;
    let moves = ChessRule.moves;
    for (let no = 1; no <= 2; no++) {
      let man = (color << 7) | (3 << 4) | no;
      let src = pieces[man];
      if (src === 0) continue;
      for (let shift = 0; shift < 4; shift++) {
        let delta = ((shift & 0x1) ? 1 : -1) * (1 << ((shift & 0x2) << 1));
        let mark = false;
        for (let dest = src; boardMask[(dest = dest + delta)];) {
          let killedMan = square[dest];
          if (mark) {
            if (killedMan > 0) {
              if ((killedMan >> 7) !== color) {
                moves[offset++] = src | (dest << 8) | (man << 16) | (killedMan << 24);
              }
              break;
            }
          } else if (killedMan > 0) {
            mark = true;
          } else if (!onlyKill) {
            moves[offset++] = src | (dest << 8) | (man << 16);
          }
        }
      }
    }

    return offset;
  }

  static findMovesBase = (game, color: number, offset: number, onlyKill: boolean) => {
    let pieces = game.pieces;
    let square = game.square;
    let moves = ChessRule.moves;
    for (let arm = 0; arm < 7; arm++) {
      for (let no = 1; no <= armsCount[arm]; no++) {
        let man = (color << 7) | (arm << 4) | no;
        let src = pieces[man];
        if (src === 0) continue;
        let ms = ChessRule.baseMoveDef[arm][color][src];
        if (!ms) continue;
        for (let i = 0; i < ms.length; i++) {
          let m = ms[i];
          let dest = (m & 0xff00) >> 8;
          let killedMan = square[dest];
          if (killedMan > 0 && (killedMan >> 7) == color) continue;
          if (arm === 2) {
            if (square[src + horseDelta[dest - src + 0x22]] !== 0) continue;
          } else if (arm === 5) {
            if (square[(src + dest) >> 1] !== 0) continue;
          }

          if (killedMan || !onlyKill) {
            moves[offset++] = m | (no << 16) | (killedMan << 24);
          }
        }
      }
    }

    return offset;
  }

  static findMovesKing = (game, color: number, offset: number, onlyKill: boolean) => {
    let pieces = game.pieces;
    let square = game.square;
    let moves = ChessRule.moves;
    let king1 = (color << 7) | (0 << 4) | 1, king2 = ((1 - color) << 7) | (0 << 4) | 1;
    let pking1 = pieces[king1], pking2 = pieces[king2];
    if (pking1 === 0 || pking2 === 0) return;
    if ((pking1 & 0x0f) === (pking2 & 0x0f)) {
      let delta = pking1 < pking2 ? 0x10 : -0x10;
      let found = false;
      for (let p = pking1; (p += delta) !== pking2;) {
        if (square[p] > 0) {
          found = true;
          break;
        }
      }

      if (!found) {
        moves[offset++] = pking1 | (pking2 << 8) | (king1 << 16) | (king2 << 24);
      }
    }

    return offset;
  }

  static findAllMoves = (game, color: number, offset: number, onlyKill: boolean) => {
    offset = ChessRule.findMovesRook(game, color, offset, onlyKill);
    offset = ChessRule.findMovesCannon(game, color, offset, onlyKill);
    offset = ChessRule.findMovesKing(game, color, offset, onlyKill);
    offset = ChessRule.findMovesBase(game, color, offset, onlyKill);
    return offset;
  }

  static isValidMove = (game, move) => {
    let chessman = (move & 0xff0000) >> 16;
    let count = ChessRule.findAllMoves(game, chessman >> 7, 0, false);
    for (let i = 0; i < count; i++) {
      if (ChessRule.moves[i] === move) return true;
    }
    return false;
  }
}