"use client";
import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/homepage-data";

/** The reference ribbon, displaced on the GPU rather than by a full-page CSS filter. */
export function Ribbon() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
    });
    if (!gl) return;
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };
    const vertex = compile(
      gl.VERTEX_SHADER,
      "attribute vec2 a;varying vec2 uv;void main(){uv=vec2((a.x+1.)*.5,1.-(a.y+1.)*.5);gl_Position=vec4(a,0.,1.);}",
    );
    const fragment = compile(
      gl.FRAGMENT_SHADER,
      "precision mediump float;varying vec2 uv;uniform sampler2D image;uniform float time;void main(){vec2 p=uv;float s=sin(time*.23+p.y*4.);p.x+=s*.023*sin(p.y*3.14159);p.y+=sin(time*.17+p.x*5.)*.012;gl_FragColor=texture2D(image,clamp(p,0.,1.));}",
    );
    const program = gl.createProgram()!;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const location = gl.getAttribLocation(program, "a");
    gl.enableVertexAttribArray(location);
    gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0);
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    const image = new Image();
    let frame = 0;
    let disposed = false;
    let visible = true;
    const time = gl.getUniformLocation(program, "time");
    const resize = () => {
      const dpr = Math.min(devicePixelRatio, 1.5);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    const draw = (ms: number) => {
      if (disposed) return;
      if (visible && !document.hidden) {
        gl.uniform1f(time, ms / 1000);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
      frame = requestAnimationFrame(draw);
    };
    image.onload = () => {
      if (disposed) return;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        image,
      );
      resize();
      setReady(true);
      frame = requestAnimationFrame(draw);
    };
    image.src = asset("stripe-wave.webp");
    const observer = new IntersectionObserver((e) => {
      visible = e[0].isIntersecting;
    });
    observer.observe(canvas);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => {
      disposed = true;
      image.onload = null;
      cancelAnimationFrame(frame);
      observer.disconnect();
      ro.disconnect();
      gl.deleteTexture(texture);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);
  return (
    <div className="ribbon" aria-hidden="true">
      <img
        className={ready ? "ribbon-fallback hidden" : ""}
        src={asset("stripe-wave.webp")}
        alt=""
      />
      <canvas className={ready ? "ready" : ""} ref={ref} />
    </div>
  );
}

type Point = { x: number; y: number; z: number };
function shape(index: number, i: number, n: number, time: number): Point {
  const f = i / n;
  const angle = i * 2.399963229728653;
  if (index === 0) {
    const y = 1 - 2 * f;
    const r = Math.sqrt(1 - y * y);
    return { x: Math.cos(angle) * r, y: y, z: Math.sin(angle) * r };
  }
  if (index === 1) {
    const a = f * Math.PI * 10;
    const r = 0.35 + f * 0.65;
    return { x: Math.cos(a) * r, y: Math.sin(a) * r, z: (f - 0.5) * 1.5 };
  }
  if (index === 2) {
    const a = f * Math.PI * 2;
    return {
      x: Math.cos(a),
      y: Math.sin(a) * 0.35 + 0.22 * Math.sin(a * 3),
      z: Math.sin(a) * 0.8,
    };
  }
  const row = i % 32;
  const u = (Math.floor(i / 32) / Math.floor(n / 32)) * 2 - 1;
  const v = (row / 31) * 2 - 1;
  return {
    x: u * 1.3,
    y: Math.sin(u * 3.3 + time * 0.16) * 0.38 + v * 0.28,
    z: v * 0.8,
  };
}
export function ParticleSculpture({
  active = 0,
  theme = "daytime",
  compact = false,
}: {
  active?: number;
  theme?: string;
  compact?: boolean;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const activeRef = useRef(active);
  const themeRef = useRef(theme);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);
  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    let width = 0,
      height = 0,
      frame = 0,
      last = 0,
      visible = false;
    let rotation = 0.2;
    const count = compact ? 680 : 1120;
    const points = Array.from({ length: count }, (_, i) =>
      shape(0, i, count, 0),
    );
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let pointer = { x: 0, y: 0 };
    const move = (e: PointerEvent) => {
      const b = canvas.getBoundingClientRect();
      pointer = {
        x: (e.clientX - b.left) / b.width - 0.5,
        y: (e.clientY - b.top) / b.height - 0.5,
      };
    };
    canvas.addEventListener("pointermove", move);
    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const dpr = Math.min(devicePixelRatio, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const draw = (ms: number) => {
      frame = requestAnimationFrame(draw);
      if (!visible || document.hidden || ms - last < 33) return;
      last = ms;
      ctx.clearRect(0, 0, width, height);
      const time = reduced ? 0 : ms / 1000;
      rotation += reduced ? 0 : 0.0018;
      const scale = Math.min(width * 0.34, height * 0.62);
      const cy = compact ? height * 0.59 : height * 0.83;
      const dark = themeRef.current === "night";
      const hue =
        themeRef.current === "sunset"
          ? 292
          : themeRef.current === "dusk"
            ? 270
            : themeRef.current === "sunrise"
              ? 322
              : themeRef.current === "pre-dawn"
                ? 267
                : 225;
      for (let i = 0; i < count; i++) {
        const target = shape(activeRef.current, i, count, time);
        const p = points[i];
        const interpolation = reduced ? 1 : 0.055;
        p.x += (target.x - p.x) * interpolation;
        p.y += (target.y - p.y) * interpolation;
        p.z += (target.z - p.z) * interpolation;
        const a = rotation + pointer.x * 0.16;
        const x = p.x * Math.cos(a) - p.z * Math.sin(a);
        const z = p.x * Math.sin(a) + p.z * Math.cos(a);
        const y = p.y + pointer.y * 0.05;
        const perspective = 2.8 / (2.8 + z * 0.25);
        const sx = width * 0.5 + x * scale * perspective;
        const sy = cy + y * scale * 0.82 * perspective;
        const opacity = 0.2 + (z + 1) * 0.22;
        ctx.strokeStyle = `hsla(${hue + (i % 25)},${dark ? 90 : 64}%,${dark ? 77 : 53}%,${opacity * 0.7})`;
        ctx.fillStyle = `hsla(${hue + (i % 30)},75%,${dark ? 84 : 51}%,${opacity + 0.15})`;
        if (i % 3 === 0) {
          ctx.beginPath();
          if (activeRef.current === 2) {
            ctx.moveTo(sx, sy + scale * 0.48);
            ctx.lineTo(sx, sy);
          } else if (activeRef.current === 3) {
            ctx.moveTo(width * 0.5 + x * scale * 0.55, cy + y * scale * 0.5);
            ctx.lineTo(sx, sy);
          } else {
            ctx.moveTo(width * 0.5 + x * scale * 0.12, cy + y * scale * 0.12);
            ctx.lineTo(sx, sy);
          }
          ctx.lineWidth = 0.45;
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(sx, sy, compact ? 0.65 : 0.8, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    const io = new IntersectionObserver(
      (e) => {
        visible = e[0].isIntersecting;
      },
      { rootMargin: "100px" },
    );
    io.observe(canvas);
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener("pointermove", move);
    };
  }, [compact]);
  return <canvas ref={ref} className="particle-canvas" aria-hidden="true" />;
}

export function DeveloperWave() {
  const ref = useRef<SVGSVGElement>(null);
  return (
    <div className="developer-wave">
      <svg
        ref={ref}
        viewBox="0 0 1200 340"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="dev-gradient">
            <stop stopColor="#fbac8e" />
            <stop offset=".45" stopColor="#d852e9" />
            <stop offset="1" stopColor="#6634f8" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 52 }, (_, i) => {
          const y = 100 + i * 2.5;
          return (
            <path
              className="dev-wave-strand"
              key={i}
              d={`M-30 ${230 - i * 1.4} C230 ${90 + i * 4}, 330 ${330 - i * 4}, 600 ${185 - i * 1.3} S930 ${y - 100}, 1250 ${y - 140}`}
              stroke="url(#dev-gradient)"
              fill="none"
              strokeWidth="1"
              style={{ animationDelay: `${i * -0.08}s` }}
            />
          );
        })}
      </svg>
    </div>
  );
}

export function WorldGraphic() {
  return (
    <div className="world-graphic" aria-hidden="true">
      <div className="world-sphere">
        {Array.from({ length: 14 }, (_, i) => (
          <span
            key={i}
            style={{ transform: `rotateY(${i * 13}deg) rotateZ(-15deg)` }}
          />
        ))}
        <i />
        <i />
        <i />
      </div>
      <span className="world-dot dot-one" />
      <span className="world-dot dot-two" />
      <span className="world-dot dot-three" />
    </div>
  );
}
