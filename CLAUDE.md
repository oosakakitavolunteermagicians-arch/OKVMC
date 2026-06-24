# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ボランティアでマジックを行う任意団体「OKVMC」の未公開ホームページ。静的サイト（HTML / CSS / JavaScript のみ）。

## Development

ビルドツール・パッケージマネージャーは不使用。ファイルを直接編集してブラウザで確認する。

**ローカルプレビュー:** VS Code の Live Server 拡張機能を使用（ポート 5501）。

## Architecture

SPA 風のシングルページ構成。ページ遷移はサーバーリクエストなしに JavaScript で制御する。

- `index.html` — 全ページのコンテンツを含む単一 HTML ファイル
- `style.css` — 全スタイル定義
- `main.js` — ナビゲーションのページ切り替えロジック

### ページ切り替えの仕組み

各ページは `.page` クラスを持つ `<div>` で定義され、デフォルトは `display: none`。
`.nav-link` クリック時に `data-target` 属性で対象 `id` を特定し、`active` クラスを付け替えることで表示を切り替える。

### 画像ファイル構成

```
image/
  TopPage/   # トップページ用画像
  History/   # 活動実績ページ用画像（stage1〜3.jpg、準備中.png）
  Other/     # ロゴなどその他
```
