"use client";

import { useState } from "react";
import { Image } from "./image";
import { Button } from "./button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  RefreshIcon,
  ImageNotFound01FreeIcons,
} from "@hugeicons/core-free-icons";

export function ImageBlurDemo() {
  const [key, setKey] = useState(0);

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="relative rounded-xl overflow-hidden shadow-lg border border-border h-60">
        <Image
          key={key}
          src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&t=${key}`}
          alt="Red Nike Shoe"
          showBlurEffect={true}
          className="w-full h-full object-cover"
        />
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setKey((prev) => prev + 1)}
        className="w-fit"
        startContent={<HugeiconsIcon icon={RefreshIcon} className="w-4 h-4" />}
      >
        Re-trigger Blur Effect
      </Button>
    </div>
  );
}

export function ImageErrorDemo() {
  const [isBroken, setIsBroken] = useState(true);

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="relative rounded-xl overflow-hidden shadow-lg border border-border h-60">
        <Image
          key={isBroken ? 1 : 0}
          src={
            isBroken
              ? "https://broken-image-link.com/404.jpg"
              : "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop"
          }
          alt="Red Nike Shoe"
          fallbackSrc="/image-break.png"
          className="w-full h-full object-cover"
        />
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsBroken(!isBroken)}
        className="w-fit"
        startContent={
          <HugeiconsIcon
            icon={isBroken ? RefreshIcon : ImageNotFound01FreeIcons}
            className="w-4 h-4"
          />
        }
      >
        {isBroken ? "Use Valid URL" : "Use Broken URL"}
      </Button>
    </div>
  );
}

export function ImagePlaceholderDemo() {
  const [key, setKey] = useState(0);

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="relative rounded-xl overflow-hidden shadow-lg border border-border h-60">
        <Image
          key={key}
          src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&delay=2000&t=${key}`}
          alt="Red Nike Shoe"
          showBlurEffect={true}
          placeholder={
            <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground animate-pulse">
              <HugeiconsIcon
                icon={RefreshIcon}
                className="w-8 h-8 animate-spin"
              />
              <span className="text-sm font-medium">Loading high-res...</span>
            </div>
          }
          className="w-full h-full object-cover"
        />
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setKey((prev) => prev + 1)}
        className="w-fit"
      >
        Reload with Placeholder
      </Button>
    </div>
  );
}
