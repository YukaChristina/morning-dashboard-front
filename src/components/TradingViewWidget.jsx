import { useEffect, useRef } from 'react';

export default function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    // すでにスクリプトが追加されていれば再追加しない
    if (container.current.querySelector('script')) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: 'TVC:NI225',
      interval: 'D',
      timezone: 'Asia/Tokyo',
      theme: 'light',
      style: '1',
      locale: 'ja',
      allow_symbol_change: false,
    });
    container.current.appendChild(script);
  }, []);

  return (
    <section>
      <div className="flex items-center gap-4 mb-3">
        <h2 className="text-lg font-semibold text-blue-100">チャート</h2>
        <a href="https://jp.tradingview.com/chart/plJaRnwM/?source=promo_go_pro_button" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:text-blue-300 hover:underline">TradingViewで開く</a>
      </div>
      <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-sm overflow-hidden">
        <div
          ref={container}
          className="tradingview-widget-container"
          style={{ height: '4050px', width: '100%' }}
        >
          <div
            className="tradingview-widget-container__widget"
            style={{ height: '100%', width: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}
