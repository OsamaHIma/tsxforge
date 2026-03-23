"use client";

import { useState } from "react";
import { DateTimePicker } from "./datetime-picker";
import { Button } from "./button";

export function DateTimePickerBasicDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto p-4 border rounded-xl bg-muted/20">
      <DateTimePicker
        value={date}
        onChange={setDate}
        placeholder="Pick a date & time"
      />
      {date && (
        <p className="text-xs text-muted-foreground mt-2">
          Selected: <span className="text-primary font-mono">{date.toLocaleString()}</span>
        </p>
      )}
    </div>
  );
}

export function DateTimePickerCyclesDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [hourCycle, setHourCycle] = useState<12 | 24>(12);

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto p-4 border rounded-xl bg-muted/20">
      <div className="flex gap-2">
        <Button
          variant={hourCycle === 12 ? "default" : "outline"}
          size="sm"
          onClick={() => setHourCycle(12)}
        >
          12h Cycle
        </Button>
        <Button
          variant={hourCycle === 24 ? "default" : "outline"}
          size="sm"
          onClick={() => setHourCycle(24)}
        >
          24h Cycle
        </Button>
      </div>
      <DateTimePicker
        value={date}
        onChange={setDate}
        hourCycle={hourCycle}
      />
    </div>
  );
}

export function DateTimePickerGranularityDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [granularity, setGranularity] = useState<"day" | "hour" | "minute" | "second">("minute");

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto p-4 border rounded-xl bg-muted/20">
      <div className="flex flex-wrap justify-center gap-2">
        {(["day", "hour", "minute", "second"] as const).map((g) => (
          <Button
            key={g}
            variant={granularity === g ? "default" : "outline"}
            size="sm"
            onClick={() => setGranularity(g)}
            className="capitalize"
          >
            {g}
          </Button>
        ))}
      </div>
      <DateTimePicker
        value={date}
        onChange={setDate}
        granularity={granularity}
      />
    </div>
  );
}
