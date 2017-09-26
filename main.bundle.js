webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chess-panel-wrapper\">\n  <app-panel></app-panel>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chess_panel_panel_component__ = __webpack_require__("../../../../../src/app/chess/panel/panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chess_ui_chess_info_pipe__ = __webpack_require__("../../../../../src/app/chess/ui/chess-info.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__chess_panel_panel_component__["a" /* PanelComponent */],
            __WEBPACK_IMPORTED_MODULE_4__chess_ui_chess_info_pipe__["a" /* ChessInfoPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chess/game/array-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ArrayHelper = (function () {
    function ArrayHelper() {
    }
    return ArrayHelper;
}());
/* harmony default export */ __webpack_exports__["a"] = (ArrayHelper);
ArrayHelper.unzip = function (array, offset, length) {
    var a = new Array(length);
    for (var i = 0; i < array.length; i++) {
        a[offset + array[i][0]] = array[i][1];
    }
    return a;
};
ArrayHelper.reset = function (array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = 0;
    }
    return array;
};
ArrayHelper.include = function (array, value) {
    return array.indexOf(value) > -1;
};
//# sourceMappingURL=array-helper.js.map

/***/ }),

/***/ "../../../../../src/app/chess/game/chess-chinese-names.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChessChineseNames; });
var ChessChineseNames = [
    '将',
    '车',
    '马',
    '炮',
    '士',
    '象',
    '兵'
];
//# sourceMappingURL=chess-chinese-names.enum.js.map

/***/ }),

/***/ "../../../../../src/app/chess/game/chess-color.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChessColor; });
var ChessColor;
(function (ChessColor) {
    ChessColor[ChessColor["Black"] = 0] = "Black";
    ChessColor[ChessColor["Red"] = 1] = "Red";
})(ChessColor || (ChessColor = {}));
//# sourceMappingURL=chess-color.enum.js.map

/***/ }),

/***/ "../../../../../src/app/chess/game/chess-game.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GameStatus */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChessGame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chessman__ = __webpack_require__("../../../../../src/app/chess/game/chessman.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chess_util__ = __webpack_require__("../../../../../src/app/chess/game/chess-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chess_color_enum__ = __webpack_require__("../../../../../src/app/chess/game/chess-color.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chess_rule__ = __webpack_require__("../../../../../src/app/chess/game/chess-rule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__array_helper__ = __webpack_require__("../../../../../src/app/chess/game/array-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_object__ = __webpack_require__("../../../../../src/app/chess/game/search-object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_engine__ = __webpack_require__("../../../../../src/app/chess/game/search-engine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chess_move__ = __webpack_require__("../../../../../src/app/chess/game/chess-move.ts");








var originalChessmen = [
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
var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["Start"] = 0] = "Start";
    GameStatus[GameStatus["Selected"] = 1] = "Selected";
    GameStatus[GameStatus["Thinking"] = 2] = "Thinking";
    GameStatus[GameStatus["Done"] = 3] = "Done";
})(GameStatus || (GameStatus = {}));
var ChessGame = (function () {
    function ChessGame() {
        var _this = this;
        this.moves = __WEBPACK_IMPORTED_MODULE_4__array_helper__["a" /* default */].reset(new Array(1 << 10));
        this.getSelectedChessman = function () {
            return _this.chessmen.filter(function (chessman) { return chessman.checked; })[0];
        };
        this.applyMove = function (move) {
            var chessMove = new __WEBPACK_IMPORTED_MODULE_7__chess_move__["a" /* default */](move);
            // console.log(chessMove.toString());
            var selectChessman = _this.getChessmanByPoint(chessMove.from);
            var killChessman = _this.getChessmanByPoint(chessMove.to);
            if (killChessman) {
                _this.killChessman(chessMove.to);
            }
            _this.moveChessman(selectChessman, chessMove.to);
            _this.moves.push(move);
        };
        this.chessmen = this.getOriginalChessmen();
        this.gameStatus = GameStatus.Start;
    }
    ChessGame.prototype.getOriginalChessmen = function () {
        var chessmen = [];
        for (var i = 0, item = void 0; i < originalChessmen.length; i++) {
            item = originalChessmen[i];
            if (item === 0) {
                continue;
            }
            var _a = __WEBPACK_IMPORTED_MODULE_1__chess_util__["a" /* default */].decode(item), color = _a[0], arm = _a[1], no = _a[2];
            chessmen.push(new __WEBPACK_IMPORTED_MODULE_0__chessman__["a" /* default */](color, arm, no, (i % 16), (i >> 4)));
        }
        return chessmen;
    };
    ChessGame.prototype.selectChessman = function (chessman, isSelect) {
        if (isSelect === void 0) { isSelect = true; }
        this.chessmen.forEach(function (item) {
            item.checked = false;
        });
        chessman.checked = isSelect;
    };
    ChessGame.prototype.moveChessman = function (chessman, point) {
        chessman.x = point.x;
        chessman.y = point.y;
    };
    ChessGame.prototype.killChessman = function (point) {
        var chessmen = this.chessmen;
        for (var i = 0; i < chessmen.length; i++) {
            var chessman = chessmen[i];
            if (chessman.x === point.x && chessman.y === point.y) {
                this.chessmen.splice(i, 1);
                break;
            }
        }
    };
    ChessGame.prototype.getChessmanByPoint = function (point) {
        var chessmen = this.chessmen;
        for (var i = 0; i < chessmen.length; i++) {
            var chessman = chessmen[i];
            if (chessman.x === point.x && chessman.y === point.y) {
                return chessman;
            }
        }
        return null;
    };
    ChessGame.prototype.clickPanel = function (point) {
        var _this = this;
        var target = {
            x: point.x + 3,
            y: point.y + 3
        };
        var chessman = this.getChessmanByPoint(target);
        switch (this.gameStatus) {
            case GameStatus.Start:
                if (chessman !== null && chessman.color === __WEBPACK_IMPORTED_MODULE_2__chess_color_enum__["a" /* ChessColor */].Red) {
                    this.selectChessman(chessman);
                    this.gameStatus = GameStatus.Selected;
                }
                break;
            case GameStatus.Selected:
                // 选择其他棋子
                if (chessman != null && chessman.color === __WEBPACK_IMPORTED_MODULE_2__chess_color_enum__["a" /* ChessColor */].Red) {
                    this.selectChessman(chessman);
                }
                else {
                    // 移动棋子，判断走法是否合法，是否吃子
                    var selectedChessman = this.getSelectedChessman();
                    var move = __WEBPACK_IMPORTED_MODULE_1__chess_util__["a" /* default */].encodeMove(__WEBPACK_IMPORTED_MODULE_1__chess_util__["a" /* default */].encodePosition(selectedChessman.x, selectedChessman.y), __WEBPACK_IMPORTED_MODULE_1__chess_util__["a" /* default */].encodePosition(target.x, target.y), __WEBPACK_IMPORTED_MODULE_1__chess_util__["a" /* default */].encode(selectedChessman), __WEBPACK_IMPORTED_MODULE_1__chess_util__["a" /* default */].encode(chessman));
                    var searchObj = new __WEBPACK_IMPORTED_MODULE_5__search_object__["a" /* default */](this, 1);
                    var isValidMove = __WEBPACK_IMPORTED_MODULE_3__chess_rule__["a" /* default */].isValidMove(searchObj, 1, move);
                    if (isValidMove) {
                        this.applyMove(move);
                    }
                    this.gameStatus = GameStatus.Thinking;
                    this.selectChessman(selectedChessman, false);
                    var bestMove_1 = __WEBPACK_IMPORTED_MODULE_6__search_engine__["a" /* default */].findBestMove(this, 0);
                    console.log(bestMove_1);
                    setTimeout(function () {
                        _this.applyMove(bestMove_1);
                        _this.gameStatus = GameStatus.Start;
                        // console.log(11111);
                    }, 100);
                }
                break;
            case GameStatus.Thinking:
                break;
        }
    };
    return ChessGame;
}());

//# sourceMappingURL=chess-game.js.map

/***/ }),

/***/ "../../../../../src/app/chess/game/chess-move.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chessman__ = __webpack_require__("../../../../../src/app/chess/game/chessman.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chess_util__ = __webpack_require__("../../../../../src/app/chess/game/chess-util.ts");


var ChessMove = (function () {
    function ChessMove(move) {
        this.move = move;
        var _a = __WEBPACK_IMPORTED_MODULE_1__chess_util__["a" /* default */].decodeMove(move), src = _a[0], dest = _a[1], chessman = _a[2], killedMan = _a[3];
        this.from = __WEBPACK_IMPORTED_MODULE_1__chess_util__["a" /* default */].decodePosition(src);
        this.to = __WEBPACK_IMPORTED_MODULE_1__chess_util__["a" /* default */].decodePosition(dest);
        this.chessman = new __WEBPACK_IMPORTED_MODULE_0__chessman__["a" /* default */](chessman >> 7, (chessman & 0x70) >> 4, chessman & 0x0f, this.from.x, this.from.y);
        this.killedMan = killedMan ? new __WEBPACK_IMPORTED_MODULE_0__chessman__["a" /* default */](killedMan >> 7, (killedMan & 0x70) >> 4, killedMan & 0x0f, this.to.x, this.to.y) : null;
    }
    ChessMove.prototype.toString = function () {
        return this.chessman.name + ": " + (this.from.x - 3) + "-" + (this.from.y - 3) + (this.killedMan ? '吃' + this.killedMan.name : '到') + ":" + (this.to.x - 3) + "," + (this.to.y - 3);
    };
    return ChessMove;
}());
/* harmony default export */ __webpack_exports__["a"] = (ChessMove);
//# sourceMappingURL=chess-move.js.map

/***/ }),

/***/ "../../../../../src/app/chess/game/chess-rule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_helper__ = __webpack_require__("../../../../../src/app/chess/game/array-helper.ts");

var boardMask = [
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
var kingMask = [
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
var horseDelta = __WEBPACK_IMPORTED_MODULE_0__array_helper__["a" /* default */].unzip([
    [0x0e, -0x01],
    [0x1f, 0x10],
    [0x21, 0x10],
    [0x12, 0x01],
    [-0x0e, 0x01],
    [-0x1f, -0x10],
    [-0x21, -0x10],
    [-0x12, -0x01],
], 0x22, 0x44);
var ChessRule = (function () {
    function ChessRule() {
    }
    return ChessRule;
}());
/* harmony default export */ __webpack_exports__["a"] = (ChessRule);
ChessRule.armsCount = [
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
];
ChessRule.isValidAddress = function (address) {
    return boardMask[address] > 0;
};
ChessRule.moveDefHelp = function (arm, deltaList, checkAddressFn, checkMoveFn) {
    var def = [new Array(256), new Array(256)];
    for (var color = 0; color < 2; color++) {
        for (var src = 0; src < 256; src++) {
            if (!ChessRule.isValidAddress(src) || checkAddressFn && !checkAddressFn(color, src))
                continue;
            def[color][src] = [];
            for (var i = 0; i < deltaList.length; i++) {
                var delta = deltaList[i];
                var dest = src + delta;
                if (!ChessRule.isValidAddress(dest) || checkAddressFn && !checkAddressFn(color, dest))
                    continue;
                if (checkMoveFn && !checkMoveFn(color, src, dest))
                    continue;
                var move = src | (dest << 8) | (((color << 7) | (arm << 4)) << 16);
                def[color][src].push(move);
            }
        }
    }
    return def;
};
ChessRule.baseMoveDef = [
    // king
    ChessRule.moveDefHelp(0, [-0x01, 0x10, 0x01, -0x10], function (color, address) {
        return (color === (address >> 7)) && kingMask[address];
    }, null),
    // rook
    ChessRule.moveDefHelp(1, [], null, null),
    // horse
    ChessRule.moveDefHelp(2, [0x0e, 0x1f, 0x21, 0x12, -0x0e, -0x1f, -0x21, -0x12], null, null),
    // cannon
    ChessRule.moveDefHelp(3, [], null, null),
    // bishop
    ChessRule.moveDefHelp(4, [0x0f, 0x11, -0x0f, -0x11], function (color, address) {
        return __WEBPACK_IMPORTED_MODULE_0__array_helper__["a" /* default */].include([0x36, 0x38, 0x47, 0x56, 0x58], (address - color * 0x70));
    }, null),
    // elephant
    ChessRule.moveDefHelp(5, [0x1e, 0x22, -0x1e, -0x22], function (color, address) {
        return __WEBPACK_IMPORTED_MODULE_0__array_helper__["a" /* default */].include([0x35, 0x53, 0x75, 0x57, 0x79, 0x5b, 0x39], (address - color * 0x50));
    }, null),
    // pawn
    ChessRule.moveDefHelp(6, [-0x01, 0x10, 0x01, -0x10], function (c, a) {
        return c != (a >> 7) || (a & 0x1) && (c ? a < 0x9f : a > 0x60);
    }, function (c, s, d) {
        return (s & 0xf0) == (d & 0xf0) || (c == 0) == ((s & 0xf0) < (d & 0xf0));
    })
];
ChessRule.findMovesRook = function (searchObj, color, moves, onlyKill) {
    var pieces = searchObj.pieces;
    var square = searchObj.square;
    for (var no = 1; no <= 2; no++) {
        var man = (color << 7) | (1 << 4) | no;
        var src = pieces[man];
        if (src === 0)
            continue;
        for (var shift = 0; shift < 4; shift++) {
            var delta = ((shift & 0x1) ? 1 : -1) * (1 << ((shift & 0x2) << 1));
            for (var dest = src; boardMask[(dest = dest + delta)];) {
                var killedMan = square[dest];
                if (killedMan > 0 && (killedMan >> 7) === color)
                    break;
                if (killedMan || !onlyKill) {
                    moves.push(src | (dest << 8) | (man << 16) | (killedMan << 24));
                }
                if (killedMan > 0)
                    break;
            }
        }
    }
};
ChessRule.findMovesCannon = function (searchObj, color, moves, onlyKill) {
    var pieces = searchObj.pieces;
    var square = searchObj.square;
    for (var no = 1; no <= 2; no++) {
        var man = (color << 7) | (3 << 4) | no;
        var src = pieces[man];
        if (src === 0)
            continue;
        for (var shift = 0; shift < 4; shift++) {
            var delta = ((shift & 0x1) ? 1 : -1) * (1 << ((shift & 0x2) << 1));
            var mark = false;
            for (var dest = src; boardMask[(dest = dest + delta)];) {
                var killedMan = square[dest];
                if (mark) {
                    if (killedMan > 0) {
                        if ((killedMan >> 7) !== color) {
                            moves.push(src | (dest << 8) | (man << 16) | (killedMan << 24));
                        }
                        break;
                    }
                }
                else if (killedMan > 0) {
                    mark = true;
                }
                else if (!onlyKill) {
                    moves.push(src | (dest << 8) | (man << 16));
                }
            }
        }
    }
};
ChessRule.findMovesBase = function (searchObj, color, moves, onlyKill) {
    var pieces = searchObj.pieces;
    var square = searchObj.square;
    for (var arm = 0; arm < 7; arm++) {
        for (var no = 1; no <= ChessRule.armsCount[arm]; no++) {
            var man = (color << 7) | (arm << 4) | no;
            var src = pieces[man];
            if (src === 0)
                continue;
            var ms = ChessRule.baseMoveDef[arm][color][src];
            if (!ms)
                continue;
            for (var i = 0; i < ms.length; i++) {
                var m = ms[i];
                var dest = (m & 0xff00) >> 8;
                var killedMan = square[dest];
                if (killedMan > 0 && (killedMan >> 7) == color)
                    continue;
                if (arm === 2) {
                    if (square[src + horseDelta[dest - src + 0x22]] !== 0)
                        continue;
                }
                else if (arm === 5) {
                    if (square[(src + dest) >> 1] !== 0)
                        continue;
                }
                if (killedMan || !onlyKill) {
                    moves.push(m | (no << 16) | (killedMan << 24));
                }
            }
        }
    }
};
ChessRule.findMovesKing = function (searchObj, color, moves, onlyKill) {
    var pieces = searchObj.pieces;
    var square = searchObj.square;
    var king1 = (color << 7) | (0 << 4) | 1, king2 = ((1 - color) << 7) | (0 << 4) | 1;
    var pking1 = pieces[king1], pking2 = pieces[king2];
    if (pking1 === 0 || pking2 === 0)
        return;
    if ((pking1 & 0x0f) === (pking2 & 0x0f)) {
        var delta = pking1 < pking2 ? 0x10 : -0x10;
        var found = false;
        for (var p = pking1; (p += delta) !== pking2;) {
            if (square[p] > 0) {
                found = true;
                break;
            }
        }
        if (!found) {
            moves.push(pking1 | (pking2 << 8) | (king1 << 16) | (king2 << 24));
        }
    }
};
ChessRule.findAllMoves = function (searchObj, color, onlyKill) {
    var moves = new Array();
    ChessRule.findMovesRook(searchObj, color, moves, onlyKill);
    ChessRule.findMovesCannon(searchObj, color, moves, onlyKill);
    ChessRule.findMovesKing(searchObj, color, moves, onlyKill);
    ChessRule.findMovesBase(searchObj, color, moves, onlyKill);
    return moves;
};
ChessRule.isValidMove = function (searchObj, color, move) {
    var chessman = (move & 0xff0000) >> 16;
    var moves = ChessRule.findAllMoves(searchObj, color, false);
    for (var i = 0; i < moves.length; i++) {
        if (moves[i] === move)
            return true;
    }
    return false;
};
ChessRule.getDelta = function (src, dest) {
    if ((src & 0x0f) == (dest & 0x0f)) {
        if (src < dest) {
            return 0x10;
        }
        else if (src > dest) {
            return -0x10;
        }
        else {
            return 0;
        }
    }
    else if ((src & 0xf0) == (dest & 0xf0)) {
        if (src < dest) {
            return 0x01;
        }
        else if (src > dest) {
            return -0x01;
        }
        else {
            return 0;
        }
    }
    else {
        return 0;
    }
};
// static isRookKill = (searchObj: SearchObject, src: number, dest: number) => {
//   if (src == 0) return false;
//   var delta = ChessRule.getDelta(src, dest);
//   if (delta == 0) return false;
//   for (var p = src + delta; p != dest; p += delta) {
//     if (searchObj.square[p]) {
//       return false;
//     }
//   }
//   return true;
// }
// static isKingKill = (searchObj: SearchObject, src: number, dest: number) => {
//   return ChessRule.isRookKill(searchObj, src, dest);
// }
// static isCannonKill = (searchObject: SearchObject, src: number, dest: number) => {
//   if (src == 0) return false;
//   const delta = ChessRule.getDelta(src, dest);
//   if (delta == 0) return false;
//   let count = 0;
//   for (var p = src + delta; p != dest; p += delta) {
//     if (searchObject.square[p] > 0) {
//       count++;
//       if (count > 1) return false;
//     }
//   }
//   return count == 1;
// }
// static isHorseKill = (searchObj: SearchObject, src: number, dest: number) => {
//   if (src == 0) return false;
//   const delta = dest - src;
//   if (delta < -0x22 || delta > 0x22) return false;
//   const legDelta = horseDelta[delta + 0x22];
//   if (legDelta == undefined) return false;
//   return searchObj.square[src + legDelta] == 0;
// }
// static isPawnKill = (src: number, dest: number) => {
//   if (src == 0) return false;
//   return src - 0x01 == dest || src + 0x10 == dest || src - 0x01 == dest || src - 0x10 == dest;
// }
// static isCheckKing = (searchObj: SearchObject, color:number) => {
//   const c = color << 7, oc = (1 - color) << 7;
//   const kingAddr = searchObj.pieces[c | 0x01];
//   if (kingAddr === 0) return true;
//   return ChessRule.isKingKill(searchObj, searchObj.pieces[oc | 0x01], kingAddr) ||
//     ChessRule.isRookKill(searchObj, searchObj.pieces[oc | 0x11], kingAddr) ||
//     ChessRule.isRookKill(searchObj, searchObj.pieces[oc | 0x12], kingAddr) ||
//     ChessRule.isHorseKill(searchObj, searchObj.pieces[oc | 0x21], kingAddr) ||
//     ChessRule.isHorseKill(searchObj, searchObj.pieces[oc | 0x22], kingAddr) ||
//     ChessRule.isCannonKill(searchObj, searchObj.pieces[oc | 0x31], kingAddr) ||
//     ChessRule.isCannonKill(searchObj, searchObj.pieces[oc | 0x32], kingAddr) ||
//     ChessRule.isPawnKill(searchObj.pieces[oc | 0x61], kingAddr) ||
//     ChessRule.isPawnKill(searchObj.pieces[oc | 0x62], kingAddr) ||
//     ChessRule.isPawnKill(searchObj.pieces[oc | 0x63], kingAddr) ||
//     ChessRule.isPawnKill(searchObj.pieces[oc | 0x64], kingAddr) ||
//     ChessRule.isPawnKill(searchObj.pieces[oc | 0x65], kingAddr);
// }
ChessRule.isGameOver = function (searchObj) {
    return searchObj.pieces[0x01] == 0 || searchObj.pieces[0x81] == 0;
};
//# sourceMappingURL=chess-rule.js.map

/***/ }),

/***/ "../../../../../src/app/chess/game/chess-util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ChessUtil = (function () {
    function ChessUtil() {
    }
    ChessUtil.encode = function (chessman) {
        if (chessman === null) {
            return 0;
        }
        return chessman.color << 7 | chessman.arm << 4 | chessman.no;
    };
    ChessUtil.decode = function (code) {
        return [code >> 7, (code & 0x70) >> 4, code & 0x0f];
    };
    ChessUtil.encodePosition = function (x, y) {
        return (y << 4) + x;
    };
    ChessUtil.decodePosition = function (position) {
        return {
            x: position & 0x0f,
            y: position >> 4
        };
    };
    ChessUtil.encodeMove = function (src, dest, chessman, killedMan) {
        return src | (dest << 8) | (chessman << 16) | (killedMan << 24);
    };
    ChessUtil.decodeMove = function (move) {
        return [move & 0xff, (move & 0xff00) >> 8, (move & 0xff0000) >> 16, move >>> 24];
    };
    return ChessUtil;
}());
/* harmony default export */ __webpack_exports__["a"] = (ChessUtil);
//# sourceMappingURL=chess-util.js.map

/***/ }),

/***/ "../../../../../src/app/chess/game/chessman.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chess_chinese_names_enum__ = __webpack_require__("../../../../../src/app/chess/game/chess-chinese-names.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_chess_uiconf__ = __webpack_require__("../../../../../src/app/chess/ui/chess-uiconf.ts");


var Chessman = (function () {
    function Chessman(color, arm, no, x, y) {
        this.conf = new __WEBPACK_IMPORTED_MODULE_1__ui_chess_uiconf__["a" /* default */]();
        this.color = color;
        this.arm = arm;
        this.no = no;
        this.x = x;
        this.y = y;
        this.name = __WEBPACK_IMPORTED_MODULE_0__chess_chinese_names_enum__["a" /* ChessChineseNames */][arm];
        this.checked = false;
        this.id = this.color.toString().toLowerCase() + "_" + this.name + "_" + this.no;
    }
    Object.defineProperty(Chessman.prototype, "px", {
        get: function () {
            return (this.x - 3) * this.conf.width + this.conf.marginX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chessman.prototype, "py", {
        get: function () {
            return (this.y - 3) * this.conf.width + this.conf.marginY;
        },
        enumerable: true,
        configurable: true
    });
    return Chessman;
}());
/* harmony default export */ __webpack_exports__["a"] = (Chessman);
//# sourceMappingURL=chessman.js.map

/***/ }),

/***/ "../../../../../src/app/chess/game/game-evaluator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chess_rule__ = __webpack_require__("../../../../../src/app/chess/game/chess-rule.ts");

var GameEvaluator = (function () {
    function GameEvaluator() {
    }
    return GameEvaluator;
}());
/* harmony default export */ __webpack_exports__["a"] = (GameEvaluator);
GameEvaluator.INFINITY = 10000;
GameEvaluator.UNKNOWN = 10001;
GameEvaluator.armsStaticScore = [
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
GameEvaluator.evaluate = function (searchObject, color) {
    var score = 0, man, addr;
    var pieces = searchObject.pieces;
    for (var arm = 0; arm < 7; arm++) {
        for (var no = 1; no <= __WEBPACK_IMPORTED_MODULE_0__chess_rule__["a" /* default */].armsCount[arm]; no++) {
            var man_1 = (color << 7) | (arm << 4) | no;
            var addr_1 = pieces[man_1];
            if (addr_1) {
                score += GameEvaluator.armsStaticScore[arm];
            }
            man_1 = ((1 - color) << 7) | (arm << 4) | no;
            addr_1 = pieces[man_1];
            if (addr_1) {
                score -= GameEvaluator.armsStaticScore[arm];
            }
        }
    }
    return score;
};
//# sourceMappingURL=game-evaluator.js.map

/***/ }),

/***/ "../../../../../src/app/chess/game/search-engine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_object__ = __webpack_require__("../../../../../src/app/chess/game/search-object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chess_rule__ = __webpack_require__("../../../../../src/app/chess/game/chess-rule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_evaluator__ = __webpack_require__("../../../../../src/app/chess/game/game-evaluator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chess_move__ = __webpack_require__("../../../../../src/app/chess/game/chess-move.ts");




var SearchEngine = (function () {
    function SearchEngine() {
    }
    return SearchEngine;
}());
/* harmony default export */ __webpack_exports__["a"] = (SearchEngine);
SearchEngine.maxDepth = 5;
SearchEngine.createSearchObject = function (game, color) {
    return new __WEBPACK_IMPORTED_MODULE_0__search_object__["a" /* default */](game, color);
};
SearchEngine.findBestMove = function (game, color) {
    var searchObj = SearchEngine.createSearchObject(game, color);
    var alpha = SearchEngine.alphaBeta(searchObj, color, -1 * __WEBPACK_IMPORTED_MODULE_2__game_evaluator__["a" /* default */].INFINITY, __WEBPACK_IMPORTED_MODULE_2__game_evaluator__["a" /* default */].INFINITY, SearchEngine.maxDepth);
    return searchObj.bestMove;
};
SearchEngine.alphaBeta = function (searchObj, color, alpha, beta, depth) {
    var bestMove = 0;
    // 如果深度为0，返回局面评分
    if (depth === 0 || __WEBPACK_IMPORTED_MODULE_1__chess_rule__["a" /* default */].isGameOver(searchObj)) {
        return __WEBPACK_IMPORTED_MODULE_2__game_evaluator__["a" /* default */].evaluate(searchObj, color);
    }
    // 生成全部走法
    var moves = __WEBPACK_IMPORTED_MODULE_1__chess_rule__["a" /* default */].findAllMoves(searchObj, color, false);
    for (var i = 0; i < moves.length; i++) {
        var move = moves[i];
        var killedMan = (move >>> 24);
        // 可以直接吃掉对方将
        if (killedMan && ((killedMan & 0x70) >> 4) === 0 && depth === SearchEngine.maxDepth) {
            searchObj.bestMove = move;
            return __WEBPACK_IMPORTED_MODULE_2__game_evaluator__["a" /* default */].INFINITY + 1;
        }
        SearchEngine.applyMove(searchObj, color, move);
        var currentScore = searchObj.currentScore;
        // if (depth === SearchEngine.maxDepth) {
        //   console.log(move, chessMove.toString());
        // }
        // TODO:判断是否导致重复步骤
        // 判断是否被将军
        // 反转搜索颜色
        // 搜索对方最优走法
        var value = -1 * SearchEngine.alphaBeta(searchObj, 1 - color, -beta, -alpha, depth - 1);
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
                console.log("\u6700\u4F18\u8D70\u6CD5:" + new __WEBPACK_IMPORTED_MODULE_3__chess_move__["a" /* default */](bestMove).toString() + ",\u5C42\u6570:" + depth + ",\u8D70\u5B8C\u8BC4\u5206:" + currentScore + ",\u5BF9\u65B9\u6700\u4F18\u8BC4\u5206:" + value + ",\u5BF9\u65B9\u6700\u4F18\u8D70\u6CD5:" + new __WEBPACK_IMPORTED_MODULE_3__chess_move__["a" /* default */](searchObj.bestMove).toString());
            }
        }
    }
    searchObj.bestMove = bestMove;
    return alpha;
};
// 走一个走法
SearchEngine.applyMove = function (searchObject, color, move) {
    var from = (move & 0xff);
    var dest = ((move & 0xff00) >> 8);
    var chessman = ((move & 0xff0000) >> 16);
    var killedMan = (move >>> 24);
    if (killedMan) {
        var c = (killedMan >> 7);
        var arm = (killedMan & 0x70) >> 4;
        // set score
        if (c === color) {
            searchObject.currentScore -= __WEBPACK_IMPORTED_MODULE_2__game_evaluator__["a" /* default */].armsStaticScore[arm];
        }
        else {
            searchObject.currentScore += __WEBPACK_IMPORTED_MODULE_2__game_evaluator__["a" /* default */].armsStaticScore[arm];
        }
    }
    // 设置棋子新位置
    searchObject.square[from] = 0;
    searchObject.square[dest] = chessman;
    searchObject.pieces[chessman] = dest;
    searchObject.pieces[killedMan] = 0;
};
SearchEngine.revertMove = function (searchObject, color, move) {
    var from = (move & 0xff);
    var dest = ((move & 0xff00) >> 8);
    var chessman = ((move & 0xff0000) >> 16);
    var killedMan = (move >>> 24);
    if (killedMan) {
        var c = (killedMan >> 7);
        var arm = (killedMan & 0x70) >> 4;
        // set score
        if (c === color) {
            searchObject.currentScore += __WEBPACK_IMPORTED_MODULE_2__game_evaluator__["a" /* default */].armsStaticScore[arm];
        }
        else {
            searchObject.currentScore -= __WEBPACK_IMPORTED_MODULE_2__game_evaluator__["a" /* default */].armsStaticScore[arm];
        }
    }
    searchObject.square[from] = chessman;
    searchObject.square[dest] = killedMan;
    searchObject.pieces[chessman] = from;
    if (killedMan) {
        searchObject.pieces[killedMan] = dest;
    }
};
//# sourceMappingURL=search-engine.js.map

/***/ }),

/***/ "../../../../../src/app/chess/game/search-object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_helper__ = __webpack_require__("../../../../../src/app/chess/game/array-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chess_util__ = __webpack_require__("../../../../../src/app/chess/game/chess-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_evaluator__ = __webpack_require__("../../../../../src/app/chess/game/game-evaluator.ts");



var SearchObject = (function () {
    function SearchObject(game, color) {
        this.pieces = this.getPieces(game.chessmen);
        this.square = this.getSquare(game.chessmen);
        this.bestMove = -1;
        // TO check
        this.currentScore = __WEBPACK_IMPORTED_MODULE_2__game_evaluator__["a" /* default */].evaluate(this, color);
        // console.log(this.currentScore);
    }
    SearchObject.prototype.getInfo = function (chessmen, assignFn) {
        var array = __WEBPACK_IMPORTED_MODULE_0__array_helper__["a" /* default */].reset(new Array(1 << 8));
        for (var i = 0; i < chessmen.length; i++) {
            var chessman = chessmen[i];
            var code = __WEBPACK_IMPORTED_MODULE_1__chess_util__["a" /* default */].encode(chessman);
            var position = __WEBPACK_IMPORTED_MODULE_1__chess_util__["a" /* default */].encodePosition(chessman.x, chessman.y);
            assignFn(array, code, position);
        }
        return array;
    };
    SearchObject.prototype.getPieces = function (chessmen) {
        return this.getInfo(chessmen, function (array, code, position) {
            array[code] = position;
        });
    };
    SearchObject.prototype.getSquare = function (chessmen) {
        return this.getInfo(chessmen, function (array, code, position) {
            array[position] = code;
        });
    };
    return SearchObject;
}());
/* harmony default export */ __webpack_exports__["a"] = (SearchObject);
//# sourceMappingURL=search-object.js.map

/***/ }),

/***/ "../../../../../src/app/chess/panel/panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".base-line {\n  stroke: #8d4919;\n  stroke-width: 1px;\n}\n\n.chessman {\n  cursor: pointer;\n  background-color: transparent;\n}\n\n.chessman > circle {\n  fill: #e7c292;\n}\n\n.chessman.unselectabled {\n  -moz-user-select: -moz-none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.chessman text {\n  font-size: 12px;\n  stroke-width: 1px;\n  font-family: cursive;\n}\n\n.chessman.black text {\n  fill: black;\n}\n\n.chessman.red text {\n  fill: red;\n}\n\n.chessman circle.checked {\n  stroke-width: 1px;\n}\n\n.chessman.black circle.checked {\n  stroke: black;\n}\n\n.chessman.red circle.checked {\n  stroke: red;\n  stroke-width: 1px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chess/panel/panel.component.html":
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" shape-rendering=\"geometricPrecision\"\n  [attr.width]=\"panelConf.width\"\n  [attr.height]=\"panelConf.height\"\n  [attr.viewBox]=\"panelConf.viewBox\"\n  (click)=\"clickPanel($event)\">\n  <filter id=\"dropShadow\">\n    <feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"0.6\" />\n    <feOffset dx=\"0.5\" dy=\"0.5\" />\n    <feMerge>\n      <feMergeNode />\n      <feMergeNode in=\"SourceGraphic\" />\n    </feMerge>\n  </filter>\n  <g class=\"panel-base\">\n    <line class=\"base-line\" [attr.x1]=\"line.x1\" [attr.y1]=\"line.y1\" [attr.x2]=\"line.x2\" [attr.y2]=\"line.y2\" *ngFor=\"let line of baseLines\"></line>\n  </g>\n  <svg class=\"chessman unselectabled\" [class.red]=\"chessman.color===1\" [class.black]=\"chessman.color===0\"\n    *ngFor=\"let chessman of chessmen\">\n    <circle filter=\"url(#dropShadow)\" [class.checked]=\"chessman.checked\" [attr.cx]=\"chessman.px\" [attr.cy]=\"chessman.py\" [attr.r]=\"uiConf.radius\"></circle>\n    <text [attr.x]=\"chessman.px\" [attr.y]=\"chessman.py\" dx=\"-6\" dy=\"4\">{{chessman.name}}</text>\n  </svg>\n</svg>"

/***/ }),

/***/ "../../../../../src/app/chess/panel/panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_ui_service__ = __webpack_require__("../../../../../src/app/chess/ui/ui.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_chess_uiconf__ = __webpack_require__("../../../../../src/app/chess/ui/chess-uiconf.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_chess_game__ = __webpack_require__("../../../../../src/app/chess/game/chess-game.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PanelComponent = (function () {
    function PanelComponent(uiService, uiConf) {
        this.uiService = uiService;
        this.uiConf = uiConf;
        this.chessGame = new __WEBPACK_IMPORTED_MODULE_3__game_chess_game__["a" /* ChessGame */]();
    }
    PanelComponent.prototype.clickPanel = function (event) {
        var originalPoint = this.uiService.getOriginalPoint(this.panelConf.zoomTimes, event.offsetX, event.offsetY);
        this.uiService.isInsidePanel(originalPoint.x, originalPoint.y);
        if (!this.uiService.isInsidePanel(originalPoint.x, originalPoint.y) ||
            !this.uiService.isValidPoint(originalPoint.x, originalPoint.y))
            return;
        var targetPoint = this.uiService.getValidPoint(originalPoint.x, originalPoint.y);
        this.chessGame.clickPanel(targetPoint);
    };
    PanelComponent.prototype.ngOnInit = function () {
        this.baseLines = this.uiService.getBaseLines();
        this.chessmen = this.chessGame.chessmen;
        this.panelConf = this.uiService.getChessPanelConf();
    };
    return PanelComponent;
}());
PanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-panel',
        template: __webpack_require__("../../../../../src/app/chess/panel/panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chess/panel/panel.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__ui_ui_service__["a" /* UiService */], __WEBPACK_IMPORTED_MODULE_2__ui_chess_uiconf__["a" /* default */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ui_ui_service__["a" /* UiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ui_ui_service__["a" /* UiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ui_chess_uiconf__["a" /* default */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ui_chess_uiconf__["a" /* default */]) === "function" && _b || Object])
], PanelComponent);

var _a, _b;
//# sourceMappingURL=panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/chess/ui/chess-info.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChessInfoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChessInfoPipe = (function () {
    function ChessInfoPipe() {
    }
    ChessInfoPipe.prototype.transform = function (chessmen, conf) {
        // chessmen.forEach((chessman: Chessman) => {
        //   chessman.px = chessman.x * conf.width + conf.marginX;
        //   chessman.py = chessman.y * conf.width + conf.marginY;
        // });
        return [].concat(chessmen);
    };
    return ChessInfoPipe;
}());
ChessInfoPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'chessInfo'
    })
], ChessInfoPipe);

//# sourceMappingURL=chess-info.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/chess/ui/chess-uiconf.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChessUIConf = (function () {
    function ChessUIConf() {
        this.radius = 10;
        this.width = 30;
        this.reticle = 4;
        this.reticleMargin = 2;
        this.marginX = 30;
        this.marginY = 30;
    }
    return ChessUIConf;
}());
ChessUIConf = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], ChessUIConf);
/* harmony default export */ __webpack_exports__["a"] = (ChessUIConf);
//# sourceMappingURL=chess-uiconf.js.map

/***/ }),

/***/ "../../../../../src/app/chess/ui/ui.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chess_uiconf__ = __webpack_require__("../../../../../src/app/chess/ui/chess-uiconf.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiService = (function () {
    function UiService(conf) {
        this.conf = conf;
        this.horizontalLineNumber = 10;
        this.verticalLineNumber = 9;
        this.reticlePoints = [
            [1, 2],
            [7, 2],
            [0, 3],
            [2, 3],
            [4, 3],
            [6, 3],
            [8, 3],
            [0, 6],
            [2, 6],
            [4, 6],
            [6, 6],
            [8, 6],
            [1, 7],
            [7, 7]
        ];
        this.kingLinePoints = [
            [3, 0, 5, 2],
            [5, 0, 3, 2],
            [3, 7, 5, 9],
            [5, 7, 3, 9]
        ];
    }
    UiService.prototype.getBaseLines = function () {
        var _this = this;
        var conf = this.conf;
        var lines = [], x, y;
        var panelWidth = (this.verticalLineNumber - 1) * conf.width;
        for (var i = 0; i < this.horizontalLineNumber; i++) {
            var y_1 = i * conf.width;
            lines.push({ x1: 0, x2: panelWidth, y1: y_1, y2: y_1 });
        }
        var riverTop = 4 * conf.width;
        var riverBottom = 5 * conf.width;
        var panelHeight = (this.horizontalLineNumber - 1) * conf.width;
        for (var i = 0; i < this.verticalLineNumber; i++) {
            x = i * conf.width;
            lines.push({ x1: x, x2: x, y1: 0, y2: riverTop });
            lines.push({ x1: x, x2: x, y1: riverBottom, y2: panelHeight });
        }
        lines.push({ x1: 0, x2: 0, y1: riverTop, y2: riverBottom });
        lines.push({ x1: panelWidth, x2: panelWidth, y1: riverTop, y2: riverBottom });
        this.reticlePoints.forEach(function (point) {
            var types;
            switch (point[0]) {
                case 0:
                    types = [1, 2];
                    break;
                case 8:
                    types = [0, 3];
                    break;
                default:
                    types = [0, 1, 2, 3];
                    break;
            }
            lines = lines.concat(_this.getReticleLine(conf, point[0], point[1], types));
        });
        this.kingLinePoints.forEach(function (points) {
            lines.push({ x1: points[0] * conf.width, y1: points[1] * conf.width, x2: points[2] * conf.width, y2: points[3] * conf.width });
        });
        return lines.map(function (line) {
            return { x1: line.x1 + conf.marginX, x2: line.x2 + conf.marginX, y1: line.y1 + conf.marginY, y2: line.y2 + conf.marginY };
        });
    };
    UiService.prototype.getReticleLine = function (conf, x, y, types) {
        if (types === void 0) { types = []; }
        var lines = [], x1, x2, y1, y2;
        var positionX = x * conf.width, positionY = y * conf.width;
        types.forEach(function (type) {
            switch (type) {
                case 0:
                    x1 = positionX - conf.reticleMargin - conf.reticle;
                    x2 = x1 + conf.reticle;
                    y1 = positionY - conf.reticleMargin;
                    lines.push({ x1: x1, x2: x2, y1: y1, y2: y1 });
                    y2 = y1 - conf.reticle;
                    lines.push({ x1: x2, x2: x2, y1: y1, y2: y2 });
                    break;
                case 1:
                    x1 = positionX + conf.reticleMargin;
                    x2 = x1 + conf.reticle;
                    y1 = positionY - conf.reticleMargin;
                    lines.push({ x1: x1, x2: x2, y1: y1, y2: y1 });
                    y2 = positionY - conf.reticle - conf.reticleMargin;
                    lines.push({ x1: x1, x2: x1, y1: y1, y2: y2 });
                    break;
                case 2:
                    x1 = positionX + conf.reticleMargin;
                    x2 = x1 + conf.reticle;
                    y1 = positionY + conf.reticleMargin;
                    lines.push({ x1: x1, x2: x2, y1: y1, y2: y1 });
                    y2 = y1 + conf.reticle;
                    lines.push({ x1: x1, x2: x1, y1: y1, y2: y2 });
                    break;
                case 3:
                    x1 = positionX - conf.reticleMargin;
                    x2 = x1 - conf.reticle;
                    y1 = positionY + conf.reticleMargin;
                    lines.push({ x1: x1, x2: x2, y1: y1, y2: y1 });
                    y2 = y1 + conf.reticle;
                    lines.push({ x1: x1, x2: x1, y1: y1, y2: y2 });
                    break;
                default:
                    break;
            }
        });
        return lines;
    };
    UiService.prototype.getChessPanelConf = function () {
        var conf = this.conf;
        var width = conf.marginX * 2 + conf.width * (this.verticalLineNumber - 1);
        var height = conf.marginY * 2 + conf.width * (this.horizontalLineNumber - 1);
        var viewBox = "0 0 " + width + " " + height;
        var heightTimes = Math.floor(window.innerHeight / height);
        var widthTimes = Math.floor(window.innerWidth / width);
        var zoomTimes = Math.min(heightTimes, widthTimes);
        return {
            width: width * zoomTimes,
            height: height * zoomTimes,
            viewBox: viewBox,
            zoomTimes: zoomTimes
        };
    };
    UiService.prototype.getOriginalPoint = function (zoomTimes, clientX, clientY) {
        return {
            x: clientX / zoomTimes,
            y: clientY / zoomTimes
        };
    };
    UiService.prototype.isInsidePanel = function (x, y) {
        var conf = this.conf;
        var left = this.conf.marginX - conf.radius;
        var right = conf.marginX + (this.verticalLineNumber - 1) * conf.width + conf.radius;
        var top = conf.marginX - conf.radius;
        var bottom = conf.marginY + (this.horizontalLineNumber - 1) * conf.width + conf.radius;
        return x > left && x < right && y > top && y < bottom;
    };
    UiService.prototype.getDistance = function (target, value) {
        return Math.abs(target - value);
    };
    UiService.prototype.isValidPoint = function (x, y) {
        var conf = this.conf;
        var px = x / conf.width;
        var py = y / conf.width;
        var offset = conf.radius / conf.width;
        return this.getDistance(Math.ceil(px), px) < offset ||
            this.getDistance(Math.floor(px), px) < offset ||
            this.getDistance(Math.ceil(py), py) < offset ||
            this.getDistance(Math.floor(py), py) < offset;
    };
    UiService.prototype.getValidPoint = function (x, y) {
        var conf = this.conf;
        var px = x / conf.width;
        var py = y / conf.width;
        var offset = conf.radius / conf.width;
        var ceilDistanceX = this.getDistance(Math.ceil(px), px);
        var floorDistanceX = this.getDistance(Math.floor(px), px);
        var ceildDistanceY = this.getDistance(Math.ceil(py), py);
        var floorDistanceY = this.getDistance(Math.floor(py), py);
        return {
            x: ceilDistanceX < offset ? Math.ceil(px) - 1 : Math.floor(px) - 1,
            y: ceildDistanceY < offset ? Math.ceil(py) - 1 : Math.floor(py) - 1
        };
    };
    return UiService;
}());
UiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chess_uiconf__["a" /* default */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chess_uiconf__["a" /* default */]) === "function" && _a || Object])
], UiService);

var _a;
//# sourceMappingURL=ui.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map