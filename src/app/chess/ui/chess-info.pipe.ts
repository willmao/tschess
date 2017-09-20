import { Pipe, PipeTransform } from '@angular/core';
import  Chessman  from '../game/chessman'
import ChessUIConf from './chess-uiconf'

@Pipe({
  name: 'chessInfo'
})
export class ChessInfoPipe implements PipeTransform {

  transform(chessmen: Chessman[], conf: ChessUIConf) {
    // chessmen.forEach((chessman: Chessman) => {
    //   chessman.px = chessman.x * conf.width + conf.marginX;
    //   chessman.py = chessman.y * conf.width + conf.marginY;
    // });

    return [].concat(chessmen);
  }
}
