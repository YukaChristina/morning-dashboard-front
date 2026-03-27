const glossary = [
  {
    name: "日経平均株価",
    en: "Nikkei 225",
    category: "指数",
    definition: "東京証券取引所に上場する225銘柄の株価を平均した指数。日本の株式市場全体の動きを示す代表的な指標。朝のニュースでよく耳にする「日経平均」はこれ。"
  },
  {
    name: "NYダウ",
    en: "Dow Jones Industrial Average",
    category: "指数",
    definition: "米国を代表する30社の株価を平均した指数。アップル・マイクロソフト・ゴールドマンサックスなど超大手企業で構成。米国経済の象徴的な指標。"
  },
  {
    name: "ナスダック",
    en: "NASDAQ Composite",
    category: "指数",
    definition: "米国のナスダック市場に上場する全銘柄（約3,000社）の指数。GAFAMなどテクノロジー企業が多く、IT業界の動向を読む指標として使われる。"
  },
  {
    name: "S&P500",
    en: "S&P 500",
    category: "指数",
    definition: "米国の代表的な500社で構成される株価指数。NYダウより銘柄数が多く、米国経済全体をより広くカバー。世界で最も参照される株価指数のひとつ。"
  },
  {
    name: "VIX",
    en: "Volatility Index",
    category: "指数",
    definition: "「恐怖指数」とも呼ばれる。市場参加者が今後の相場の変動をどれだけ予測しているかを示す数値。20以下は落ち着いた相場、30以上は不安定・恐慌状態のサイン。"
  },
  {
    name: "米10年国債利回り",
    en: "US 10-Year Treasury Yield",
    category: "指数",
    definition: "米国政府が発行する10年満期の国債の利回り（年利）。世界の金融市場の基準金利として機能し、住宅ローンや株式の評価にも影響を与える。利回り上昇→株安になりやすい。"
  },
  {
    name: "ドル円",
    en: "USD/JPY",
    category: "為替",
    definition: "米ドルと日本円の交換レート。「150円」なら1ドルを150円で交換できることを意味する。円安（数字が大きい）は輸出企業に有利、輸入品は割高になる。"
  },
  {
    name: "ゴールド",
    en: "Gold",
    category: "コモディティ",
    definition: "金（きん）の価格。株式市場が不安定なとき、安全資産として買われる傾向がある。インフレ対策や有事の避難先として世界中の投資家に注目される。"
  },
  {
    name: "原油（WTI）",
    en: "WTI Crude Oil",
    category: "コモディティ",
    definition: "WTI（ウェスト・テキサス・インターミディエイト）は米国産の原油の代表的な価格指標。1バレル（約159リットル）あたりの価格で表示。ガソリン・電気代・物流コストに直結する。"
  },
  {
    name: "雇用統計",
    en: "Non-Farm Payrolls (NFP)",
    category: "経済指標",
    definition: "毎月第1金曜日に米国政府が発表。農業以外の分野で新たに増えた雇用者数を示す。市場が最も注目する経済指標のひとつで、発表時に相場が大きく動くことがある。"
  },
  {
    name: "CPI",
    en: "Consumer Price Index",
    category: "経済指標",
    definition: "消費者物価指数。食料・住居・交通など日常的な商品・サービスの価格変動を示す。インフレを測る最重要指標で、FRBの金融政策判断に直結する。"
  },
  {
    name: "GDP",
    en: "Gross Domestic Product",
    category: "経済指標",
    definition: "国内総生産。一定期間内に国内で生産されたモノとサービスの総額。経済の規模と成長率を示す最も基本的な指標。前期比・前年比でプラスなら経済成長、マイナスなら景気後退。"
  },
  {
    name: "ISM製造業景況指数",
    en: "ISM Manufacturing PMI",
    category: "経済指標",
    definition: "米国の製造業の景況感を示す指数。50が拡大・縮小の境界線で、50以上なら製造業が拡大中、50以下なら縮小中。毎月第1営業日に発表される。"
  },
  {
    name: "ISM非製造業景況指数",
    en: "ISM Services PMI",
    category: "経済指標",
    definition: "米国のサービス業（小売・飲食・金融など）の景況感指数。米国経済の約80%はサービス業のため、製造業より実体経済への影響が大きいとも言われる。"
  },
  {
    name: "ADP雇用統計",
    en: "ADP Employment Report",
    category: "経済指標",
    definition: "給与計算会社ADPが毎月第1水曜日に発表する民間雇用者数のレポート。政府発表の雇用統計（NFP）の2日前に出るため「先行指標」として注目される。"
  },
  {
    name: "小売売上高",
    en: "Retail Sales",
    category: "経済指標",
    definition: "米国の小売業（店舗・オンライン）での売上総額。消費者がどれだけお金を使っているかを示し、個人消費の強さを測る指標。GDPの約7割を個人消費が占めるため重要。"
  },
  {
    name: "FOMC",
    en: "Federal Open Market Committee",
    category: "金融政策",
    definition: "米国の中央銀行（FRB）の金融政策を決める委員会。年8回開催され、政策金利（フェデラルファンド金利）の引き上げ・据え置き・引き下げを決定する。世界の金融市場に最も影響を与える会議。"
  },
];

export default glossary;
