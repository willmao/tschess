export default class ArrayHelper {
  static unzip = (array: Array<Array<number>>, offset: number, length: number) => {
    const a = new Array<number>(length);
    for (let i = 0; i < array.length; i++) {
      a[offset + array[i][0]] = array[i][1];
    }
    return a;
  }

  static reset = (array: Array<number>) => {
    for (let i = 0; i < array.length; i++) {
      array[i] = 0;
    }
    return array;
  }

  static include = (array: Array<number>, value: number) => {
    return array.indexOf(value) > -1;
  }
}