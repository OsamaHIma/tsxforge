declare module 'react-color' {
  import { ComponentType } from 'react';

  export interface ColorResult {
    hex: string;
    rgb: { r: number; g: number; b: number; a: number };
    hsl: { h: number; s: number; l: number; a: number };
  }

  export interface ChromePickerProps {
    color?: string | { h: number; s: number; l: number; a: number } | { r: number; g: number; b: number; a: number };
    onChange?: (color: ColorResult) => void;
    onChangeComplete?: (color: ColorResult) => void;
    disableAlpha?: boolean;
    className?: string;
  }

  export const ChromePicker: ComponentType<ChromePickerProps>;

  const ReactColor: {
    ChromePicker: ComponentType<ChromePickerProps>;
    [key: string]: any;
  };

  export default ReactColor;
}
