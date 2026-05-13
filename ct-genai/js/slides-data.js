const slideBlueprints = [
  {
    id: 'intro',
    label: '導入・試験概要',
    recommended: 4,
    source: 'JSTQB Foundation Seminar 2023',
    topics: [
      {
        title: 'ISTQB/JSTQBの位置づけ',
        bullets: [
          'ISTQBは国際資格認証、JSTQBは日本国内の加盟組織として運用',
          '資格は国際相互認証され、共通語彙での品質活動に貢献',
          'CTFL2023はCBT前提で学習目標と実務適用を重視'
        ]
      },
      {
        title: 'CTFL2023の学習方針',
        bullets: [
          '章構成は維持しつつ、アジャイル・協調開発要素が強化',
          'LO単位で出題されるため、章内のKレベル差を意識する',
          '本番対策では「用語理解 + 適用判断」の両輪で学習する'
        ]
      }
    ],
    drills: [
      'BO(ビジネス成果)が実務にどうつながるか1分で説明する',
      'CBT試験で時間切れしないための戦略を3つ挙げる'
    ]
  },
  {
    id: 'ch1',
    label: '第1章 テストの基礎',
    recommended: 10,
    source: 'CTFL2023 Chapter 1',
    topics: [
      { title: 'テストの目的と価値', bullets: ['欠陥検出だけでなく、品質情報による意思決定支援が目的', '早期テストで手戻りコストを抑える', 'ステークホルダーごとに期待価値を整理する'] },
      { title: 'テストとデバッグの違い', bullets: ['テストは欠陥の存在を示す活動', 'デバッグは原因特定と修正の活動', '責任主体とアウトプットが異なる'] },
      { title: '7つのテスト原則', bullets: ['テストは欠陥があることしか示せない', '徹底テストは不可能、リスクベースで優先づけ', '欠陥の偏在や殺虫剤のパラドックスを理解する'] },
      { title: 'テスト活動とSDLC整合', bullets: ['計画・分析・設計・実装・実行・完了を段階管理', '各活動の入力/出力成果物を明確化', '完了基準と報告指標を事前合意する'] }
    ],
    drills: ['7原則を実務で1つずつ例示する', '欠陥偏在を前提に回帰テスト対象を選定する']
  },
  {
    id: 'ch2',
    label: '第2章 SDLC全体を通したテスト',
    recommended: 12,
    source: 'CTFL2023 Chapter 2',
    topics: [
      { title: 'テストレベルの目的', bullets: ['コンポーネント・統合・システム・受入で目的が異なる', '成果物とリスクの粒度をレベルごとに定義', '欠陥の見つかる場所を想定して前倒し配置'] },
      { title: 'テストタイプの組み合わせ', bullets: ['機能・非機能・ホワイトボックス・変更関連を組み合わせる', '性能・セキュリティは後回しにしない', '品質特性とビジネスリスクを紐づける'] },
      { title: '保守テストと影響分析', bullets: ['修正/変更時は確認テスト + 回帰テストを設計', '影響分析でスコープ最適化', '変更起点のテスト優先順位ルールを持つ'] },
      { title: 'アジャイルでのテスト', bullets: ['チーム全体アプローチでQAを孤立させない', '受入基準・例示駆動で曖昧さを減らす', 'CI/CD内で自動テストを継続実行する'] }
    ],
    drills: ['ある機能改修に対して4テストレベルの観点を列挙', '非機能要件をユーザーストーリーから抽出']
  },
  {
    id: 'ch3',
    label: '第3章 静的テスト',
    recommended: 10,
    source: 'CTFL2023 Chapter 3',
    topics: [
      { title: '静的テストの価値', bullets: ['実行前に欠陥予防と早期検出ができる', 'レビューは知識共有と合意形成にも効く', '品質を作り込む文化を作る'] },
      { title: 'レビュータイプ', bullets: ['非公式レビュー・ウォークスルー・テクニカルレビュー・インスペクション', '形式度と役割定義が異なる', '目的に応じて使い分ける'] },
      { title: 'レビュー成功要因', bullets: ['明確な入退場基準', 'チェックリストと準備時間の確保', 'ファシリテーションと心理的安全性'] }
    ],
    drills: ['要件レビューの観点チェックリストを5項目作る', 'レビュー会議のアンチパターンを3つ挙げる']
  },
  {
    id: 'ch4',
    label: '第4章 テスト分析と設計',
    recommended: 16,
    source: 'CTFL2023 Chapter 4',
    topics: [
      { title: 'ブラックボックス技法', bullets: ['同値分割・境界値分析・デシジョンテーブル・状態遷移', '仕様から論理的にテスト条件を導出', '組み合わせ爆発に対し優先度を決める'] },
      { title: 'ホワイトボックス技法', bullets: ['ステートメント/分岐カバレッジで構造を可視化', '未実行経路を特定し、死活コードを発見', 'カバレッジ値の誤解を避ける'] },
      { title: '経験ベース技法', bullets: ['エラープローン推定・探索的テスト・チェックリスト', 'ドメイン知識と過去不具合を活用', '時間枠を決めて学習しながら実施'] },
      { title: '協調的テスト設計', bullets: ['例示による仕様明確化', '受入基準とテストケースの同期', '開発者・PO・テスターで早期に不一致解消'] },
      { title: 'テストケースとデータのトレーサビリティ', bullets: ['要求-条件-ケース-結果を追跡可能にする', '変更時の影響分析を高速化', '監査や説明責任にも有効'] }
    ],
    drills: ['同値分割と境界値分析を同一機能へ適用して比較', 'デシジョンテーブルを最小ケースへ圧縮']
  },
  {
    id: 'ch5',
    label: '第5章 テスト活動のマネジメント',
    recommended: 12,
    source: 'CTFL2023 Chapter 5',
    topics: [
      { title: 'リスクベースドテスト', bullets: ['製品リスクを確率×影響で評価', '高リスク領域へテスト資源を集中', '残余リスクを報告して意思決定を支援'] },
      { title: '見積りと計画', bullets: ['作業分解 + 過去実績 + バッファ設計', '依存関係を可視化して遅延を予防', '計画は固定ではなく更新可能にする'] },
      { title: 'モニタリングとコントロール', bullets: ['進捗指標と品質指標を分けて追跡', '逸脱時のエスカレーション基準を定義', '完了基準を満たすまで改善を回す'] },
      { title: '欠陥管理と報告', bullets: ['再現条件・期待結果・実結果を明確化', '優先度と重大度を一貫して分類', '意思決定者向けに短く正確に報告'] }
    ],
    drills: ['高リスク機能向けのテスト戦略を1ページで作る', '欠陥レポートを改善前後で比較する']
  },
  {
    id: 'ch6',
    label: '第6章 テストツール',
    recommended: 8,
    source: 'CTFL2023 Chapter 6',
    topics: [
      { title: 'ツール分類と目的', bullets: ['管理・静的解析・設計支援・実行支援・CI連携などに分類', 'ツール導入は目的起点で判断', '導入コストと運用負荷を同時評価'] },
      { title: '導入リスクと成功条件', bullets: ['過度な期待、教育不足、プロセス不整合が失敗要因', 'PoCで適合性を検証し段階導入', '運用責任者と保守体制を明確化'] }
    ],
    drills: ['既存プロセスに対するツール適合チェックを行う', '導入前後で測るべき効果指標を定義する']
  },
  {
    id: 'summary',
    label: '総まとめ・直前対策',
    recommended: 6,
    source: 'CTFL2023 Exam Prep',
    topics: [
      { title: '章横断の重要接続', bullets: ['第1章の原則が第4章設計技法の判断軸になる', '第2章の文脈理解が第5章マネジメント精度を左右', '第3章レビュー文化が全章の品質底上げにつながる'] },
      { title: '本番前チェック', bullets: ['用語定義を短文で説明できるか', 'K2/K3の適用問題で根拠を言語化できるか', '時間配分と見直し順序を固定する'] }
    ],
    drills: ['章ごとの弱点を3つに絞り24時間で再学習', '模擬問題を解いて誤答理由を分類する']
  }
];

function buildSlidesFromBlueprint(bp) {
  const slides = [];

  slides.push({
    type: 'cover',
    title: bp.label,
    subtitle: `推奨 ${bp.recommended} 枚 | Source: ${bp.source}`,
    bullets: [
      'このデッキは章の学習目標を短時間で再現できるように構成',
      '各スライドの要点を「説明できる」状態を目標にする',
      '最後の演習スライドで定着確認を行う'
    ],
    tags: ['Overview', 'Study Plan']
  });

  slides.push({
    type: 'goal',
    title: '学習ゴール',
    subtitle: 'この章で到達すべき状態',
    bullets: [
      '章の主要概念を定義し、他章との関連を説明できる',
      '典型問題に対して適切なテスト判断ができる',
      '試験で問われるKレベルに合わせて回答できる'
    ],
    tags: ['LO', 'K-level']
  });

  bp.topics.forEach((topic, index) => {
    slides.push({
      type: 'topic',
      title: topic.title,
      subtitle: `Topic ${index + 1}`,
      bullets: topic.bullets,
      tags: ['Core', 'Exam Focus']
    });
  });

  let drillIndex = 0;
  while (slides.length < bp.recommended - 1) {
    const prompt = bp.drills[drillIndex % bp.drills.length];
    slides.push({
      type: 'drill',
      title: `演習スライド ${drillIndex + 1}`,
      subtitle: '知識を適用して答える',
      bullets: [
        prompt,
        '回答時は根拠となる用語と判断軸を明示する',
        '誤答した場合は該当章へ戻って復習する'
      ],
      tags: ['Practice', 'K2/K3']
    });
    drillIndex += 1;
  }

  slides.push({
    type: 'summary',
    title: '章まとめ',
    subtitle: '試験直前に再確認する3点',
    bullets: [
      '重要用語を短く説明できる',
      '代表的な判断パターンを例で示せる',
      '誤答しやすい観点を1つ言語化できる'
    ],
    tags: ['Recap', 'Final Check']
  });

  return slides.slice(0, bp.recommended);
}

const slideDeckData = slideBlueprints.map(bp => ({
  ...bp,
  slides: buildSlidesFromBlueprint(bp)
}));
