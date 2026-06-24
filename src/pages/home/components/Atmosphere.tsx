import { useEffect, useRef } from 'react';

export default function Atmosphere() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursor.style.opacity = '1';
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      {/* Atmospheric Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] radial-gradient-bg"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] radial-gradient-bg"></div>
      </div>

      {/* Custom Cursor Effect */}
      <div
        ref={cursorRef}
        className="fixed w-[600px] h-[600px] pointer-events-none z-0 transition-opacity duration-1000 opacity-0 bg-[radial-gradient(circle_at_center,rgba(229,197,139,0.03)_0%,transparent_70%)] rounded-full -translate-x-1/2 -translate-y-1/2"
        id="cursor-glow"
      ></div>
    </>
  );
}
