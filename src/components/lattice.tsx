"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient hero background: a real 2-D cryptographic lattice in neutral steel
 * that drifts smoothly (wrapping seamlessly, since a lattice repeats every
 * cell), with a subtle "traversal" walker hopping point to point along a
 * fading trail, and a soft accent glow that follows the cursor.
 */
export function Lattice() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rootEl = document.documentElement;
    const parent = canvas.parentElement;

    let W = 0,
      H = 0,
      DPR = 1;
    let col = { dot: "", line: "", cell: "", acc: "" };

    const colors = () => {
      const s = getComputedStyle(rootEl);
      col = {
        dot: s.getPropertyValue("--lat-dot").trim(),
        line: s.getPropertyValue("--lat-line").trim(),
        cell: s.getPropertyValue("--lat-cell").trim(),
        acc: s.getPropertyValue("--acc").trim(),
      };
    };
    const resize = () => {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      W = r.width;
      H = r.height;
      canvas.width = Math.round(W * DPR);
      canvas.height = Math.round(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    colors();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const mo = new MutationObserver(colors);
    mo.observe(rootEl, { attributes: true, attributeFilter: ["class"] });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // fixed, well-reduced basis
    const A1 = (-6 * Math.PI) / 180,
      A2 = (63 * Math.PI) / 180,
      S = 60;
    const b1x = Math.cos(A1) * S,
      b1y = Math.sin(A1) * S,
      b2x = Math.cos(A2) * S,
      b2y = Math.sin(A2) * S;
    const det = b1x * b2y - b2x * b1y;
    const inv00 = b2y / det,
      inv01 = -b2x / det,
      inv10 = -b1y / det,
      inv11 = b1x / det;
    const DA = (214 * Math.PI) / 180,
      SPD = 13;
    const dvx = Math.cos(DA) * SPD,
      dvy = Math.sin(DA) * SPD;
    const N = 13;

    let offx = 0,
      offy = 0,
      last = 0;
    const cur = { x: 0, y: 0, on: false };

    // traversal walker
    let wci = 0,
      wcj = 0,
      wni = 1,
      wnj = 0,
      wpp = 0,
      lastDir = 0;
    const trail: number[] = [];
    const pickNext = () => {
      const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];
      const opts: number[][] = [];
      for (let d = 0; d < 4; d++) {
        const ni = wci + dirs[d][0],
          nj = wcj + dirs[d][1];
        if (Math.abs(ni) > 6 || Math.abs(nj) > 6) continue;
        if (d === (lastDir ^ 1)) continue;
        opts.push([d, ni, nj]);
      }
      if (!opts.length) opts.push([lastDir, wci, wcj]);
      const p = opts[Math.floor(Math.random() * opts.length)];
      lastDir = p[0];
      wni = p[1];
      wnj = p[2];
    };
    pickNext();

    const onMove = (e: PointerEvent) => {
      if (!parent) return;
      const r = parent.getBoundingClientRect();
      cur.x = e.clientX - r.left;
      cur.y = e.clientY - r.top;
      cur.on = true;
    };
    const onLeave = () => {
      cur.on = false;
    };
    parent?.addEventListener("pointermove", onMove, { passive: true });
    parent?.addEventListener("pointerleave", onLeave);

    let raf = 0;
    const draw = (t: number) => {
      const dt = last ? Math.min((t - last) / 1000, 0.05) : 0;
      last = t;
      offx += dvx * dt;
      offy += dvy * dt;
      let u = inv00 * offx + inv01 * offy,
        v = inv10 * offx + inv11 * offy;
      u -= Math.round(u);
      v -= Math.round(v);
      offx = b1x * u + b2x * v;
      offy = b1y * u + b2y * v;

      const cx = W * 0.62,
        cy = H * 0.5,
        ox = cx + offx,
        oy = cy + offy;
      const fx = W * 0.6,
        fy = H * 0.48,
        fade = Math.max(W, H) * 0.74;
      const tx = cur.on ? cur.x : fx,
        tyv = cur.on ? cur.y : fy,
        Rs = 160;

      ctx.clearRect(0, 0, W, H);

      // grid lines
      ctx.strokeStyle = col.line;
      ctx.lineWidth = 1;
      for (let j = -N; j <= N; j++) {
        ctx.beginPath();
        for (let i = -N; i <= N; i++) {
          const x = ox + i * b1x + j * b2x,
            y = oy + i * b1y + j * b2y;
          i === -N ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      for (let i = -N; i <= N; i++) {
        ctx.beginPath();
        for (let j = -N; j <= N; j++) {
          const x = ox + i * b1x + j * b2x,
            y = oy + i * b1y + j * b2y;
          j === -N ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // neutral points
      for (let i = -N; i <= N; i++)
        for (let j = -N; j <= N; j++) {
          const px = ox + i * b1x + j * b2x,
            py = oy + i * b1y + j * b2y;
          const df = Math.hypot(px - fx, py - fy),
            a = Math.max(0, 1 - df / fade);
          if (a > 0.02) {
            ctx.globalAlpha = a;
            ctx.fillStyle = col.dot;
            ctx.beginPath();
            ctx.arc(px, py, 2.1, 0, 6.283);
            ctx.fill();
          }
        }
      ctx.globalAlpha = 1;

      // accent glow near cursor / focus
      for (let i = -N; i <= N; i++)
        for (let j = -N; j <= N; j++) {
          const qx = ox + i * b1x + j * b2x,
            qy = oy + i * b1y + j * b2y;
          const dc = Math.hypot(qx - tx, qy - tyv);
          if (dc > Rs) continue;
          ctx.globalAlpha = (1 - dc / Rs) * 0.72;
          ctx.fillStyle = col.acc;
          ctx.beginPath();
          ctx.arc(qx, qy, 2.3, 0, 6.283);
          ctx.fill();
        }
      ctx.globalAlpha = 1;

      // traversal walker + fading trail
      wpp += dt / 1.25;
      if (wpp >= 1) {
        wpp = 0;
        wci = wni;
        wcj = wnj;
        pickNext();
      }
      const e = wpp * wpp * (3 - 2 * wpp);
      const li = wci + (wni - wci) * e,
        lj = wcj + (wnj - wcj) * e;
      trail.push(li, lj);
      if (trail.length > 140) trail.splice(0, 2);
      ctx.strokeStyle = col.acc;
      ctx.lineWidth = 1.9;
      for (let k = 2; k < trail.length; k += 2) {
        const ax = ox + trail[k - 2] * b1x + trail[k - 1] * b2x,
          ay = oy + trail[k - 2] * b1y + trail[k - 1] * b2y;
        const bx = ox + trail[k] * b1x + trail[k + 1] * b2x,
          by = oy + trail[k] * b1y + trail[k + 1] * b2y;
        ctx.globalAlpha = (k / trail.length) * 0.45;
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      const wx = ox + li * b1x + lj * b2x,
        wy = oy + li * b1y + lj * b2y;
      ctx.save();
      ctx.shadowBlur = 9;
      ctx.shadowColor = col.acc;
      ctx.fillStyle = col.acc;
      ctx.globalAlpha = 0.95;
      ctx.beginPath();
      ctx.arc(wx, wy, 3.2, 0, 6.283);
      ctx.fill();
      ctx.restore();
      ctx.globalAlpha = 1;

      if (!reduce) raf = requestAnimationFrame(draw);
    };
    if (reduce) draw(0);
    else raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mo.disconnect();
      parent?.removeEventListener("pointermove", onMove);
      parent?.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}
