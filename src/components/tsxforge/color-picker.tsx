"use client";
import ColorPickerPackage from "react-color";
const { ChromePicker } = ColorPickerPackage;
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/tsxforge/button";
import { Label } from "@/components/ui/label";

interface ColorPickerProps {
  color?: string;
  onChange: (color: string) => void;
  label?: string;
  id?: string;
  className?: string;
}

export function ColorPicker({
  color,
  onChange,
  label,
  id,
  className,
}: ColorPickerProps) {
  const handleColorChange = (newColor: any) => {
    onChange(newColor.hex);
  };

  return (
    <div className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full h-13 justify-start text-start font-normal"
            startContent={
              <div
                className="size-5 rounded-full border"
                style={{
                  backgroundColor: color,
                }}
              />
            }
          >
            {color || "#000000"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <ChromePicker
            color={color || "#000000"}
            onChange={handleColorChange}
            disableAlpha
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default ColorPicker;
