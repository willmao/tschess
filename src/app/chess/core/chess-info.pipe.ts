import { Pipe, PipeTransform } from '@angular/core';
import { Chessman } from './chessman'
import { ChessUIConf} from './chess-uiconf'

@Pipe({
  name: 'chessInfo'
})
export class ChessInfoPipe implements PipeTransform {

  transform(chessmem: Chessman[], conf: ChessUIConf) {
    return (chessmem || []).map((chessman: Chessman) => {
      chessman.x = chessman.x * conf.width + conf.marginX;
      chessman.y = chessman.y * conf.width + conf.marginY;
      return chessman;
    });
  }
}
