import { FONTS } from './fonts';

export class UIFontStyle {
  public constructor(
    public family: string = FONTS[0],
    public size: number = 13,
    public color: string = '#CCC'
  ) {}
}
