import React from "react";

/**
 * Render a plain string with two lightweight inline markers:
 *   **bold**  -> <b>
 *   `mono`    -> <span class="mono">
 * Keeps copy in the data layer as strings while allowing a little emphasis.
 */
export function rich(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return <b key={i}>{p.slice(2, -2)}</b>;
    }
    if (p.startsWith("`") && p.endsWith("`")) {
      return (
        <span className="mono" key={i}>
          {p.slice(1, -1)}
        </span>
      );
    }
    return <React.Fragment key={i}>{p}</React.Fragment>;
  });
}
