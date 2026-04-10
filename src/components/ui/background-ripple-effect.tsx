"use client";
import React, { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = ({
  rows = 20,
  cols = 30,
  cellSize = 50,
}: {
  rows?: number;
  cols?: number;
  cellSize?: number;
}) => {
  const [clickedCell, setClickedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);

  return (
    <div className="relative bg-transparent w-full h-full flex items-center justify-center">
      <DivGrid
        rows={rows}
        cols={cols}
        cellSize={cellSize}
        clickedCell={clickedCell}
        onCellClick={(row, col) => setClickedCell({ row, col })}
      />
    </div>
  );
};

const DivGrid = ({
  rows,
  cols,
  cellSize,
  clickedCell,
  onCellClick,
}: {
  rows: number;
  cols: number;
  cellSize: number;
  clickedCell: { row: number; col: number } | null;
  onCellClick: (row: number, col: number) => void;
}) => {
  const cells = useMemo(
    () => Array.from({ length: rows * cols }),
    [rows, cols],
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        width: "max-content",
      }}
      className="relative z-100 pointer-events-auto"
    >
      {cells.map((_, idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        return (
          <div
            key={idx}
            onClick={() => onCellClick(rowIdx, colIdx)}
            style={{ width: cellSize, height: cellSize }}
            className={cn(
              "cell relative border-[0.5px] transition-all duration-700 ease-out",
              "border-neutral-600/10 dark:border-neutral-900/90",
              "hover:bg-blue-500/10 dark:hover:bg-blue-500/20",
              "dark:shadow-[0px_0px_40px_1px_var(--cell-shadow-color)_inset]",

              clickedCell && "animate-cell-ripple",
            )}
          />
        );
      })}
    </div>
  );
};
