function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('ja-JP', { month: 'numeric', day: 'numeric', weekday: 'short' });
}

export default function EconomicIndicators({ data }) {
  if (!data || data.length === 0) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <section>
      <h2 className="text-lg font-semibold text-blue-100 mb-3">経済指標</h2>
      <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-700">
                <th className="text-left px-4 py-3 text-xs font-medium text-blue-400 w-28">日付</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-blue-400">指標名</th>
                <th className="text-right px-4 py-3 text-xs font-medium text-blue-400 w-28">前回</th>
                <th className="text-right px-4 py-3 text-xs font-medium text-blue-400 w-28">予想</th>
                <th className="text-right px-4 py-3 text-xs font-medium text-blue-400 w-28">実績</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {data.map((ev, i) => {
                const evDate = new Date(ev.date);
                evDate.setHours(0, 0, 0, 0);
                const isPast = evDate < today;

                return (
                  <tr key={i} className={isPast ? 'opacity-40' : 'hover:bg-slate-700'}>
                    <td className="px-4 py-3 text-slate-400 whitespace-nowrap">{formatDate(ev.date)}</td>
                    <td className="px-4 py-3 text-slate-200 font-medium">{ev.name}</td>
                    <td className="px-4 py-3 text-right text-slate-400">{ev.previous || '---'}</td>
                    <td className="px-4 py-3 text-right text-slate-400">{ev.forecast || '---'}</td>
                    <td className="px-4 py-3 text-right font-medium text-blue-100">
                      {ev.actual || <span className="text-slate-600">---</span>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
