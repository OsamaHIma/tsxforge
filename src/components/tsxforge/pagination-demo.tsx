"use client";

import { useState } from "react";
import Pagination from "./pagination";
import { Button } from "./button";

export function PaginationBasicDemo() {
  const [page, setPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="flex flex-col items-center gap-6 w-full py-4 border rounded-xl bg-muted/20">
      <div className="text-sm font-medium text-muted-foreground">
        Current Page: <span className="text-primary">{page}</span> / {totalPages}
      </div>
      <Pagination 
        currentPage={page} 
        totalPages={totalPages} 
        onChange={setPage} 
      />
    </div>
  );
}

export function PaginationEllipsisDemo() {
  const [page, setPage] = useState(1);
  const totalPages = 50;

  return (
    <div className="flex flex-col items-center gap-6 w-full py-4 border rounded-xl bg-muted/20">
      <div className="text-sm font-medium text-muted-foreground">
        Many pages example (50 total)
      </div>
      <Pagination 
        currentPage={page} 
        totalPages={totalPages} 
        onChange={setPage} 
      />
    </div>
  );
}

export function PaginationConfigurableDemo() {
  const [page, setPage] = useState(1);
  const [itemsToDisplay, setItemsToDisplay] = useState(5);
  const totalPages = 20;

  return (
    <div className="flex flex-col items-center gap-6 w-full py-4 border rounded-xl bg-muted/20">
      <div className="flex gap-4 items-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Items to display:
        </span>
        <div className="flex gap-2">
          {[3, 5, 7, 9].map((num) => (
            <Button
              key={num}
              variant={itemsToDisplay === num ? "default" : "outline"}
              size="sm"
              onClick={() => setItemsToDisplay(num)}
              className="h-8 w-8 p-0"
            >
              {num}
            </Button>
          ))}
        </div>
      </div>
      <Pagination 
        currentPage={page} 
        totalPages={totalPages} 
        paginationItemsToDisplay={itemsToDisplay}
        onChange={setPage} 
      />
    </div>
  );
}
