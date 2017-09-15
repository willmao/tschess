import { Injectable } from '@angular/core';
import { ChessUIConf } from './chess-uiconf'
import { SVGLine } from './svg-line'

@Injectable()
export class UiService {
  constructor(private conf:ChessUIConf){}
  private horizontalLineNumber: number = 10;
  private verticalLineNumber: number = 9;
  private reticlePoints = [
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

  private kingLinePoints = [
      [3, 0, 5, 2],
      [5, 0, 3, 2],
      [3, 7, 5, 9],
      [5, 7, 3, 9]
  ];

  getBaseLines(): SVGLine[] {
      let conf: ChessUIConf = this.conf;
      let lines: SVGLine[] = [], x: number, y: number;
      let panelWidth: number = (this.verticalLineNumber - 1) * conf.width;
      for (let i = 0; i < this.horizontalLineNumber; i++) {
          let y = i * conf.width;
          lines.push({ x1: 0, x2: panelWidth, y1: y, y2: y });
      }

      let riverTop = 4 * conf.width;
      let riverBottom = 5 * conf.width;
      let panelHeight: number = (this.horizontalLineNumber - 1) * conf.width;
      for (let i = 0; i < this.verticalLineNumber; i++) {
          x = i * conf.width;
          lines.push({ x1: x, x2: x, y1: 0, y2: riverTop });
          lines.push({ x1: x, x2: x, y1: riverBottom, y2: panelHeight })
      }

      lines.push({ x1: 0, x2: 0, y1: riverTop, y2: riverBottom });
      lines.push({ x1: panelWidth, x2: panelWidth, y1: riverTop, y2: riverBottom });
      this.reticlePoints.forEach((point) => {
          let types: number[];
          switch (point[0]) {
              case 0: types = [1, 2]; break;
              case 8: types = [0, 3]; break;
              default: types = [0, 1, 2, 3]; break;
          }
          lines = lines.concat(this.getReticleLine(conf, point[0], point[1], types));
      });

      this.kingLinePoints.forEach((points) => {
          lines.push({ x1: points[0] * conf.width, y1: points[1] * conf.width, x2: points[2] * conf.width, y2: points[3] * conf.width });
      });
      return lines.map((line: SVGLine) => {
          return { x1: line.x1 + conf.marginX, x2: line.x2 + conf.marginX, y1: line.y1 + conf.marginY, y2: line.y2 + conf.marginY };
      });
  }

  private getReticleLine(conf: ChessUIConf, x: number, y: number, types: Array<number> = []): SVGLine[] {
      let lines: SVGLine[] = [], x1: number, x2: number, y1: number, y2: number;
      let positionX: number = x * conf.width, positionY: number = y * conf.width;
      types.forEach((type) => {
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
  }

  getChessPanelConf(){
      let conf = this.conf;
      let width:number = conf.marginX * 2 + conf.width * (this.verticalLineNumber -1);
      let height:number = conf.marginY * 2 + conf.width*(this.horizontalLineNumber-1);
      let viewBox = `0 0 ${width} ${height}`;
      let heightTimes = Math.floor( window.innerHeight/height);
      let widthTimes = Math.floor( window.innerWidth/width);
      let targetTimes = Math.min(heightTimes, widthTimes);
      return {
          width: width * targetTimes,
          height: height * targetTimes,
          viewBox: viewBox
      };
  }
}
