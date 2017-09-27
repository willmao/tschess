import { Pipe, PipeTransform } from '@angular/core';
import { GameStatus } from '../game/chess-game'

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: GameStatus, args?: any): any {
    let statusInfo = '';
    switch (status) {
      case GameStatus.Start:
      case GameStatus.Selected:
        statusInfo = '玩家走棋';
        break;
      case GameStatus.Thinking:
        statusInfo = '电脑思考中...';
        break;
      case GameStatus.GameOver:
        statusInfo = '游戏结束';
        break;
    }
    return statusInfo;
  }
}
