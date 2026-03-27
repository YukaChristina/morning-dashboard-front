import { useState, useEffect } from 'react';

const FRED_KEY = import.meta.env.VITE_FRED_API_KEY;

const SERIES = [
  { id: 'PAYEMS', name: '雇用統計（NFP）', format: (v) => `${Number(v).toLocaleString()}千人` },
  { id: 'ADPWNUSNERSA', name: 'ADP雇用統計', format: (v) => `${Math.round(Number(v) / 1000).toLocaleString()}千人` },
  { id: 'CPIAUCSL', name: 'CPI（消費者物価指数）', format: (v) => Number(v).toFixed(2) },
  { id: 'RSAFS', name: '小売売上高', format: (v) => `$${Number(v).toLocaleString()}M` },
  { id: 'A191RL1Q225SBEA', name: 'GDP成長率', format: (v) => `${Number(v).toFixed(1)}%` },
  { id: 'DFEDTARU', name: 'FOMC（政策金利上限）', format: (v) => `${Number(v).toFixed(2)}%` },
];

async function fetchSeries(id) {
  const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${id}&api_key=${FRED_KEY}&file_type=json&sort_order=desc&limit=2`;
  const res = await fetch(url);
  const data = await res.json();
  return data.observations || [];
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('ja-JP', { month: 'numeric', day: 'numeric' });
}

export default function EconomicIndicators() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.allSettled(
      SERIES.map(async (s) => {
        const obs = await fetchSeries(s.id);
        const latest = obs[0];
        const prev = obs[1];
        return {
          name: s.name,
          date: latest?.date || '',
          actual: latest?.value && latest.value !== '.' ? s.format(latest.value) : null,
          previous: prev?.value && prev.value !== '.' ? s.format(prev.value) : null,
        };
      })
    ).then((results) => {
      setData(results.filter((r) => r.status === 'fulfilled').map((r) => r.value));
    });
  }, []);

  if (data.length === 0) return null;

  return (
    <section>
      <h2 className="text-lg font-semibold text-blue-100 mb-3">経済指標</h2>
      <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-700">
                <th className="text-left px-4 py-3 text-xs font-medium text-blue-400 w-28">最終更新</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-blue-400">指標名</th>
                <th className="text-right px-4 py-3 text-xs font-medium text-blue-400 w-28">前回</th>
                <th className="text-right px-4 py-3 text-xs font-medium text-blue-400 w-28">最新</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {data.map((ev, i) => (
                <tr key={i} className="hover:bg-slate-700">
                  <td className="px-4 py-3 text-slate-400 whitespace-nowrap">{formatDate(ev.date)}</td>
                  <td className="px-4 py-3 text-slate-200 font-medium">{ev.name}</td>
                  <td className="px-4 py-3 text-right text-slate-400">{ev.previous || '---'}</td>
                  <td className="px-4 py-3 text-right font-medium text-blue-100">
                    {ev.actual || <span className="text-slate-600">---</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
