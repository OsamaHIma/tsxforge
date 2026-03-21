"use client";

import * as React from "react";
import * as ColorPickerLib from "react-color";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/tsxforge/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// Safer extraction for ChromePicker
const ChromePicker = (ColorPickerLib as any).ChromePicker ?? ColorPickerLib;

// Types
export interface ColorPickerProps {
  value?: string; // controlled
  defaultValue?: string; // uncontrolled
  onChange?: (color: string) => void;
  label?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
}

export const ColorPicker = React.forwardRef<HTMLButtonElement, ColorPickerProps>(
  (
    {
      value,
      defaultValue = "#000000",
      onChange,
      label,
      id,
      className,
      disabled,
    },
    ref
  ) => {
    const isControlled = value !== undefined;
    const [internalColor, setInternalColor] = React.useState(defaultValue);

    const color = isControlled ? value : internalColor;

    const handleChange = (newColor: any) => {
      const hex = newColor?.hex ?? "#000000";

      if (!isControlled) {
        setInternalColor(hex);
      }

      onChange?.(hex);
    };

    return (
      <div className={cn("space-y-3", className)}>
        {label && (
          <Label htmlFor={id} className="text-sm font-medium">
            {label}
          </Label>
        )}

        <Popover>
          <PopoverTrigger asChild>
            <Button
              ref={ref}
              id={id}
              type="button"
              variant="outline"
              disabled={disabled}
              className={cn(
                "w-full justify-start gap-2 font-normal",
                "h-11"
              )}
            >
              <span
                className="h-5 w-5 rounded-md border"
                style={{ backgroundColor: color }}
              />
              <span className="text-muted-foreground">{color}</span>
            </Button>
          </PopoverTrigger>

          <PopoverContent
            align="start"
            className="w-auto p-0 border-none"
          >
            <ChromePicker
              color={color}
              onChange={handleChange}
              className="w-auto p-3 rounded-lg! shadow-md bg-popover!  text-popover-foreground!"
              disableAlpha
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  }
);

ColorPicker.displayName = "ColorPicker";

export default ColorPicker;
