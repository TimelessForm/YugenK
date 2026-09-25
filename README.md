# YugenK — Supercar Drawings Portfolio

Young artist YugenK のギャラリー型ポートフォリオサイト。  
スーパーカーの鉛筆・インク・色鉛筆画を掲載。海外での対面シェア・Instagram フォロー・コミッション受注を主目的とした完全モバイルファースト設計。

---

## 🎨 デザインシステム

### カラーパレット（CSS カスタムプロパティ）
| 変数 | 値 | 用途 |
|------|-----|------|
| `--paper` | `#FAF8F4` | ベース背景（やわらかい紙白） |
| `--surface` | `#FFFFFF` | カード・ライトボックス背景 |
| `--ink` | `#14161A` | 見出し・本文 |
| `--ink-sub` | `#6B6F76` | 補助テキスト |
| `--line` | `#E3DFD8` | 罫線・境界 |
| `--accent` | `#C0531A` | アクセント（バーントオレンジ）|
| `--dark` | `#14161A` | 反転セクション背景 |

### フォント
- **英字見出し**: Archivo 700/800
- **英字本文**: Inter 400/500
- **日本語**: Noto Sans JP 300/400/500
- **引用**: Instrument Serif italic（限定使用）

---

## 🗂 ファイル構成

```
index.html          メインページ（全セクション）
css/style.css       スタイルシート（デザイントークン・レイアウト・アニメーション）
js/main.js          メイン JavaScript
images/
  drawing_porsche_mission_r_new.jpg   ヒーロー画像・Work 01
  drawing_lamborghini_veneno.jpg      Work 02
  porsche_center_staff.jpg            Work 03 / Recognition
  drawing_lamborghini.jpg             Work 04
  boy_porsche_taycan.jpg              Recognition / The Artist
  classic_car_gallery2.jpg            Recognition
  ogp.jpg                             OGP メタ画像
  drawing_porsche_mission_r.jpg       旧作品（バックアップ）
  drawing_porsche_mission_r2.jpg      旧作品（バックアップ）
  drawing_porsche_mission_r_front.jpg 旧作品（バックアップ）
  porsche_dealership.jpg              旧写真（バックアップ）
  classic_car_gallery.jpg             旧写真（バックアップ）
```

---

## 📄 セクション構成

| # | ID | タイトル | 内容 |
|---|----|---------|------|
| 1 | `#hero` | HERO | フルブリード作品画像・白テキスト・2つのCTAボタン |
| 2 | `#works` | WORKS | マソンリー2列グリッド（作品カード・スペック・ライトボックス） |
| 3 | `#recognition` | RECOGNITION | 実績バー・統計カウンター・写真グリッド |
| 4 | `#artist` | THE ARTIST | 一人称ステートメント・バイオ・保護者管理の明示 |
| 5 | `#support` | SUPPORT | 3つの支援カード（Follow / Commission / Prints）|
| 6 | `#connect` | CONNECT | QRコード・Instagram DM・メールボタン |

---

## ⚙️ JavaScript 機能（js/main.js）

### 1. 言語切り替え
- `data-i18n` 属性で EN/JA 文字列を切り替え
- `data-lang-show="en|ja"` で ブロックを show/hide
- `localStorage` に選択を保存
- ブラウザ言語が `ja` の場合、初期表示を日本語に自動設定

### 2. スクロールナビ
- `window.scrollY > 10` で `#site-nav` に `.scrolled` クラスを付与
- スクロール時に背景が `backdrop-filter: blur` で不透明化

### 3. ギャラリーフィルター
- `.filter-btn[data-filter]` クリックで `.work-card[data-category]` を show/hide
- フィルター切替時にスタッガード fade-in アニメーション

### 4. ライトボックス
- `.work-zoom` または作品画像クリックで開く
- `data-title`, `data-media`, `data-size`, `data-year`, `data-age`, `data-ep-en/ja` をカードから読み取って表示
- キーボード（Esc・← →）+ タッチスワイプ対応
- 現在の言語でエピソードテキストを切り替え

### 5. カウンターアニメーション
- `.stat-num[data-target]` が画面に入ったとき IntersectionObserver で発火
- `requestAnimationFrame` + イーズアウトキュービックで 0→target にアニメーション

### 6. QRコード生成
- `qrcode@1.5.3`（jsDelivr CDN）
- `https://www.instagram.com/yugenk_art/` をエンコード
- サイズ 220×220px、ダーク `#14161A`

### 7. スクロールリビール
- `.fade-up` クラス要素を IntersectionObserver で監視
- viewport に入ったとき `.visible` を付与（opacity + translateY）
- `prefers-reduced-motion` 対応（CSS で transition 無効化）

### 8. 著作年
- `#year` に `new Date().getFullYear()` を挿入

---

## 🔗 外部リンク・SNS

| 項目 | 値 |
|------|-----|
| Instagram | https://www.instagram.com/yugenk_art/ |
| アカウント名 | @yugenk_art |
| メール | contact@yugenk-art.com |

---

## 📱 モバイルファースト仕様

- ヒーローで作品画像 + Instagram ボタンが同時に見える設計
- ボタン最小タップ領域: **48px**
- マソンリーグリッド: 2列（≥601px）/ 1列（≤600px）
- QRコード: 220×220px（対面でスキャン想定）
- ナビ: 900px 以下でリンク非表示（ロゴ + Instagram アイコンのみ）

---

## 🛠 CDN ライブラリ

| ライブラリ | バージョン | 用途 |
|-----------|----------|------|
| Google Fonts | — | Archivo, Inter, Noto Sans JP, Instrument Serif |
| Font Awesome | 6.4.0 | アイコン |
| qrcode | 1.5.3 | QR コード生成 |

---

## ✅ 実装済み機能

- [x] ギャラリー型リデザイン（editorial / luxury automotive トーン）
- [x] EN/JA 言語切り替え（localStorage 保存・ブラウザ言語自動検知）
- [x] 全画面ヒーロー（作品画像・ダークオーバーレイ・白テキスト）
- [x] マソンリー2列ワークスグリッド（スペック常時表示・制作時年齢をアクセント色で強調）
- [x] ライトボックス（画像拡大・スペック・エピソード・キーボード・スワイプ対応）
- [x] ギャラリーフィルター（All / Pencil / Color / Moments）
- [x] RECOGNITION セクション（実績バー・カウンターアニメーション・写真グリッド）
- [x] THE ARTIST（一人称ステートメント・保護者管理の明示）
- [x] SUPPORT（3カード: Follow / Commission / Prints）
- [x] CONNECT（QRコード220px・Instagram DM・メール、タップ領域64px）
- [x] スクロールベースの固定ナビ（blur効果）
- [x] フェードアップスクロールリビール
- [x] OGP / Twitter Card メタタグ
- [x] prefers-reduced-motion 対応
- [x] 全 Instagram リンクを `https://www.instagram.com/yugenk_art/` に統一
- [x] カウンターバグ修正（0 表示 → IntersectionObserver で確実に発火）

---

## 🚧 今後の推奨ステップ

1. **作品画像の追加**: プレースホルダーカード（Work 05/06）を実際の画像に差し替え
2. **OGP URL の更新**: `index.html` 内 `<meta property="og:url">` に実際のドメインを設定
3. **メールアドレスの確認**: `contact@yugenk-art.com` が実際に機能するか確認
4. **Prints ページ**: 将来的なプリント販売ページへのリンク先作成
5. **画像の WebP 変換**: 低速回線での表示高速化のため WebP フォーマットへの変換を検討
6. **作品点数の拡充**: 12点以上を目標に新作が完成次第追加
7. **制作過程ブロック**: 1作品について下書き→中間→完成の3枚並べブロックの追加
