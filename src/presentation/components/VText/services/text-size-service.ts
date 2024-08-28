import { ITextConfig } from "../types/text-config";
import { TextSize } from "../types/text-size";

export class TexSizeService {
  getTextConfig(textSize: TextSize): ITextConfig {
    const textSizeRecord: Record<TextSize, ITextConfig> = {
      'default': {
        lineHeight: '2.4rem',
        size: '1.6rem'
      },
      'medium': {
        lineHeight: '1.3',
        size: '2rem',
      },
      'small': {
        size: '1.4rem',
        lineHeight: '1.5'
      }
    }

    return textSizeRecord[textSize];
  }
}