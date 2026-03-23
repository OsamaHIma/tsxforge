"use client";

import { useState } from "react";
import ColorPicker from "./color-picker";

export function ColorPickerBasicDemo() {
  const [color, setColor] = useState("#3b82f6");

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto p-4 border rounded-xl bg-muted/20">
      <div 
        className="w-full h-20 rounded-lg shadow-inner mb-2 border border-border" 
        style={{ backgroundColor: color }}
      />
      <ColorPicker
        label="Select a color"
        value={color}
        onChange={setColor}
      />
      <p className="text-xs font-mono text-muted-foreground mt-2">
        HEX: <span className="text-primary">{color.toUpperCase()}</span>
      </p>
    </div>
  );
}

export function ColorPickerDisabledDemo() {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto p-4 border rounded-xl bg-muted/20">
      <ColorPicker
        label="Disabled Picker"
        defaultValue="#ef4444"
        disabled={true}
      />
    </div>
  );
}
