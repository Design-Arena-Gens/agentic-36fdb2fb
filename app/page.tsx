'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Target, Users, CheckCircle, ArrowRight, MessageSquare, FileText, BarChart3, Zap, Shield, Award } from 'lucide-react';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI導入で<span className="text-yellow-400">競争優位</span>を確立
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              地方中小企業のための実践的AIコンサルティング<br />
              既存AIモデルを組み合わせて、あなたの課題を解決します
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                無料診断を受ける
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-all">
                導入事例を見る
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Psychology-Based Value Proposition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            なぜ今、AI導入が必要なのか？
          </h2>
          <p className="text-xl text-gray-600">
            心理学・経営学のエビデンスに基づく3つの真実
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="text-red-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              損失回避の法則
            </h3>
            <p className="text-gray-700 mb-4">
              <span className="font-bold">カーネマン&トヴェルスキーの研究:</span> 人は得をすることよりも損をすることを2.5倍強く恐れる
            </p>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
              <p className="text-sm text-gray-800 font-semibold">
                ⚠️ AI導入をしない競合他社に顧客を奪われるリスクは、<span className="text-red-600">年間売上の15-30%</span>に相当します
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              社会的証明の原理
            </h3>
            <p className="text-gray-700 mb-4">
              <span className="font-bold">ロバート・チャルディーニの研究:</span> 人は不確実な状況で他者の行動を模倣する
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <p className="text-sm text-gray-800 font-semibold">
                ✓ 日本企業の<span className="text-blue-600">67%</span>が既にAI導入を開始。遅れると「時代遅れの会社」というレッテルを貼られます
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Zap className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              希少性の原理
            </h3>
            <p className="text-gray-700 mb-4">
              <span className="font-bold">ウォーチェルの希少性研究:</span> 限られたリソースは価値が高く見える
            </p>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
              <p className="text-sm text-gray-800 font-semibold">
                🎯 地方中小企業向けAIコンサルタントは希少。<span className="text-green-600">今すぐ</span>始めれば先行者利益を獲得できます
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6-Step Sales Process */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              AI導入コンサルティングの6ステップ
            </h2>
            <p className="text-xl text-blue-200">
              心理学的アプローチで確実な成果を実現
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "無料AI診断",
                subtitle: "互恵性の原理",
                description: "チャルディーニの研究: 先に価値を提供されると、お返しをしたくなる心理",
                details: "現状の業務フローを分析し、AI導入で改善できる3つの具体的ポイントを提示します",
                icon: <FileText size={32} />,
                color: "bg-blue-500"
              },
              {
                step: 2,
                title: "損失の可視化",
                subtitle: "プロスペクト理論",
                description: "AI未導入による機会損失を具体的な数字で示す",
                details: "年間の人件費ロス、機会損失、競合との差を定量化。「このままでは年間500万円の損失」を実感させます",
                icon: <BarChart3 size={32} />,
                color: "bg-red-500"
              },
              {
                step: 3,
                title: "成功事例の共有",
                subtitle: "社会的証明",
                description: "バンデューラの観察学習理論: 同じ立場の人の成功を見ると、自分もできると感じる",
                details: "同業種・同規模企業の導入事例を提示。「あの会社ができたなら、うちもできる」という確信を",
                icon: <Award size={32} />,
                color: "bg-green-500"
              },
              {
                step: 4,
                title: "カスタマイズ提案",
                subtitle: "コミットメントと一貫性",
                description: "フットインザドア技法: 小さな合意から大きな決断へ",
                details: "既存AIモデル(GPT-4、Claude、Gemini等)を組み合わせた、貴社専用のAIソリューション設計図を提示",
                icon: <Target size={32} />,
                color: "bg-purple-500"
              },
              {
                step: 5,
                title: "リスク除去保証",
                subtitle: "認知的不協和の低減",
                description: "フェスティンガーの理論: 不安を取り除くことで決断を促す",
                details: "初月無料お試し、ROI保証、いつでも解約可能。「失敗しても損はない」という安心感を提供",
                icon: <Shield size={32} />,
                color: "bg-yellow-500"
              },
              {
                step: 6,
                title: "今すぐ始める理由",
                subtitle: "希少性と緊急性",
                description: "シャオの研究: 時間制限は決断を加速させる",
                details: "今月限定の特別料金、先着5社限定サポート。「今決めないと損をする」という心理的プレッシャー",
                icon: <Zap size={32} />,
                color: "bg-orange-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-white text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                    STEP {item.step}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-yellow-400 text-sm font-semibold mb-3">📖 {item.subtitle}</p>
                <p className="text-blue-200 text-sm mb-3 italic">{item.description}</p>
                <p className="text-white">{item.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            提供するAIコンサルティングサービス
          </h2>
          <p className="text-xl text-gray-600">
            月額20万円〜 | 既存AIモデルを最適に組み合わせ
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Brain className="text-blue-600" size={32} />
              基本コンサルティング
            </h3>
            <ul className="space-y-4">
              {[
                "業務プロセス分析とAI導入ポイントの特定",
                "既存AIモデル(GPT-4/Claude/Gemini等)の選定",
                "AIモデルの組み合わせ設計とプロンプト最適化",
                "社内導入トレーニング(月2回)",
                "効果測定とレポート提出",
                "専属コンサルタントによる月次ミーティング"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border-4 border-purple-400">
            <div className="bg-purple-600 text-white px-4 py-2 rounded-full inline-block mb-4 text-sm font-bold">
              最も選ばれています
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Target className="text-purple-600" size={32} />
              プレミアムコンサルティング
            </h3>
            <ul className="space-y-4">
              {[
                "基本コンサルティングの全内容",
                "複数AIモデルを統合した独自ワークフロー構築",
                "API連携とシステム統合支援",
                "24時間チャットサポート",
                "週次進捗ミーティング",
                "ROI保証(3ヶ月以内に効果が出なければ全額返金)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-2xl font-bold text-purple-600">
              月額 35万円〜
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies with Psychology */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              導入事例
            </h2>
            <p className="text-xl text-gray-600">
              同じような課題を抱えていた企業の成功ストーリー
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: "製造業（石川県）",
                employees: "従業員30名",
                challenge: "見積作成に1件3時間、月100件で300時間のロス",
                solution: "GPT-4 + Claude + 社内データベース連携",
                result: "作業時間80%削減、年間人件費480万円削減",
                testimonial: "「最初は半信半疑でしたが、今では手放せません」"
              },
              {
                industry: "小売業（長野県）",
                employees: "従業員45名",
                challenge: "顧客対応が属人的、新人教育に6ヶ月必要",
                solution: "Gemini + RAG + ナレッジベース構築",
                result: "新人の独り立ちが2週間に短縮、顧客満足度15%向上",
                testimonial: "「AIがベテラン社員の知識を全員に共有してくれる」"
              },
              {
                industry: "建設業（新潟県）",
                employees: "従業員25名",
                challenge: "工程管理の遅れでクレーム多発",
                solution: "Claude + Notion API + スケジュール自動最適化",
                result: "工期遅延ゼロ達成、利益率12%向上",
                testimonial: "「もっと早く導入すればよかった」"
              }
            ].map((caseStudy, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full inline-block text-sm font-bold mb-4">
                  {caseStudy.industry}
                </div>
                <p className="text-sm text-gray-600 mb-4">{caseStudy.employees}</p>
                <div className="mb-4">
                  <h4 className="font-bold text-red-600 mb-2">課題:</h4>
                  <p className="text-gray-700 text-sm">{caseStudy.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-blue-600 mb-2">導入したAI:</h4>
                  <p className="text-gray-700 text-sm">{caseStudy.solution}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-green-600 mb-2">成果:</h4>
                  <p className="text-gray-700 text-sm font-semibold">{caseStudy.result}</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-sm italic text-gray-700">{caseStudy.testimonial}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objection Handling */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            よくある不安とその解消
          </h2>
          <p className="text-xl text-gray-600">
            認知的不協和理論に基づく不安の解消
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              objection: "「うちは小さい会社だから、AIは必要ない」",
              psychology: "現状維持バイアス",
              response: "小規模だからこそ、1人あたりの生産性向上が経営を直接改善します。従業員30名の会社が1人1時間/日を削減すれば、年間6,600時間=人件費換算で約1,000万円の価値創出です。"
            },
            {
              objection: "「導入が難しそう、ITに詳しくない」",
              psychology: "自己効力感の欠如",
              response: "専門知識は一切不要です。既存のツール(Excel、メール、チャット)にAIを統合するだけ。当社が完全サポートし、平均2週間で運用開始できます。"
            },
            {
              objection: "「費用対効果が見えない」",
              psychology: "不確実性回避",
              response: "初月は無料診断で具体的なROIを計算します。多くの企業で初月から月間50〜100時間の削減を実現。月額20万円の投資で年間500万円以上のリターンが標準的です。"
            },
            {
              objection: "「社員が使いこなせるか不安」",
              psychology: "変化への抵抗",
              response: "スマホが使える方なら問題ありません。段階的な導入とトレーニングで、70代の経営者でも2週間でマスターした実績があります。"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                  <MessageSquare className="text-red-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.objection}</h3>
                  <p className="text-sm text-purple-600 font-semibold mb-3">
                    心理: {item.psychology}
                  </p>
                  <p className="text-gray-700 bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <span className="font-bold text-green-700">✓ 解決策: </span>
                    {item.response}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Urgency & CTA */}
      <section className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              今月限定の特別オファー
            </h2>
            <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl mb-8 max-w-3xl mx-auto">
              <div className="text-5xl font-bold text-red-600 mb-4">
                初月完全無料
              </div>
              <p className="text-2xl mb-6">
                + 導入支援費30万円相当を<span className="text-red-600 font-bold">無料提供</span>
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">0円</div>
                  <p className="text-sm text-gray-700">初月完全無料</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">30万円</div>
                  <p className="text-sm text-gray-700">導入支援費無料</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">5社</div>
                  <p className="text-sm text-gray-700">今月の限定枠</p>
                </div>
              </div>
              <p className="text-red-600 font-bold text-lg mb-4">
                ⏰ 残り枠: あと2社
              </p>
              <p className="text-sm text-gray-600">
                ※ 希少性の原理: 限られた枠は価値が高い。今決断しないと機会を失います
              </p>
            </div>

            <button className="bg-white text-red-600 px-12 py-6 rounded-full font-bold text-2xl hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 mb-6">
              今すぐ無料診断を申し込む
              <ArrowRight className="inline-block ml-2" size={28} />
            </button>

            <p className="text-white text-lg">
              📞 お電話でのお問い合わせ: 0120-XXX-XXX (平日9:00-18:00)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Building Footer */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">100+</div>
              <p className="text-gray-300">導入実績企業数</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">95%</div>
              <p className="text-gray-300">顧客満足度</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">500万円</div>
              <p className="text-gray-300">平均年間削減コスト</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p className="mb-4">
              本ランディングページは心理学・行動経済学の以下の理論に基づいて設計されています:
            </p>
            <p className="text-xs leading-relaxed">
              損失回避(Kahneman & Tversky)、社会的証明(Cialdini)、希少性(Worchel)、互恵性(Gouldner)、
              コミットメントと一貫性(Festinger)、認知的不協和の低減(Festinger)、
              観察学習(Bandura)、プロスペクト理論(Kahneman)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
