import { useState, useRef, useEffect } from 'react';
import glossary from '../data/glossary.js';

// 部分一致も含めて用語を検索
function findTerm(term) {
  if (!term) return null;
  // 完全一致
  const exact = glossary.find((g) => g.name === term);
  if (exact) return exact;
  // 部分一致（"雇用統計（NFP）" → "雇用統計" など）
  return glossary.find((g) => term.includes(g.name) || g.name.includes(term)) || null;
}

export default function Tooltip({ term, children }) {
  const [visible, setVisible] = useState(false);
  const [flipLeft, setFlipLeft] = useState(false);
  const containerRef = useRef(null);
  const tooltipRef = useRef(null);

  const entry = findTerm(term);
  if (!entry) return <>{children}</>;

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const toggle = () => setVisible((v) => !v);

  useEffect(() => {
    if (visible && tooltipRef.current) {
      const rect = tooltipRef.current.getBoundingClientRect();
      setFlipLeft(rect.right > window.innerWidth - 16);
    }
  }, [visible]);

  // スマホ以外でのタップ誤作動を防ぐ
  const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

  return (
    <span
      ref={containerRef}
      className="relative inline-block border-b border-dashed border-gray-400 cursor-help"
      onMouseEnter={() => !isTouchDevice() && show()}
      onMouseLeave={() => !isTouchDevice() && hide()}
      onClick={() => isTouchDevice() && toggle()}
    >
      {children}
      {visible && (
        <span
          ref={tooltipRef}
          className={`absolute z-50 bg-white border border-gray-200 rounded-lg p-3 shadow-md w-64 text-sm bottom-full mb-2 ${flipLeft ? 'right-0' : 'left-0'}`}
          style={{ animation: 'tooltipFadeIn 0.15s ease' }}
          onClick={(e) => e.stopPropagation()}
        >
          <span className="block">
            <span className="font-medium text-gray-900">{entry.name}</span>
            <span className="text-xs text-gray-400 ml-1">{entry.en}</span>
          </span>
          <span className="block text-gray-600 mt-1 leading-relaxed text-xs">{entry.definition}</span>
        </span>
      )}
    </span>
  );
}
