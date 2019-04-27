# Node.js_img-min-201904
プロジェクト内の特定場所に配置された画像ファイル（jpg/gif/png/svg）に対して圧縮処理（最適化）を行う
<br><br><br>



## このサンプル制作時の環境
◆ Mac
* macOS Mojave（バージョン 10.14.4）
* Node.js – v6.11.3
* npm – v3.10.10
* gulp – v3.9.1（グローバル環境）
* mozjpeg – v4.1.1（グローバル環境 – 必要な場合コレも要インストール）
<br>

◆ Win
* Windows10 Pro、64bit
* Node.js – v10.13.0
* npm – v6.7.0
* gulp – v3.9.1（グローバル環境）
* optimizilla-cli – v3.3.0（グローバル環境 – 必要な場合コレも要インストール）
<br><br><br>



## 事前に用意するもの
* Node.js
* gulp.js（-g/グローバルインストール）
<br><br><br>



## 開発手順（mac:tarminal、win:cmd）
1. 本プロジェクトのダウンロード
2. ダウンロードしたプロジェクト内にCUI環境で移動（mac:tarminal、win:cmd）
3. npm install （package.jsonにあるモジュールがインストールされる）
4. gulp （gulpfile.jsのdefaultコマンドが実行される、自動処理状態解除はcontrol(⌃) + C（Mac）・Ctrl + Cを2回（Win））
<br><br><br>



## npm installでインストールされるモジュール
* gulp – v3.9.1
* gulp-changed – v3.2.0
* gulp-imagemin – v3.4.0
* gulp-svgmin – v2.1.0
* gulp-watch – v5.0.1
* imagemin-gifsicle – v6.0.1
* imagemin-jpeg-recompress – v5.1.0
* imagemin-mozjpeg – v6.0.0
* imagemin-pngquant – v5.1.
<br><br><br>



## gulpで実行されること
* src/images ＞ public/images へ圧縮処理後の画像ファイル出力（対象となる画像種類は jpg/gif/png/svg）
<br><br><br>



## 参考リンク
* [【追記あり】Gulpを利用して画像をロスレス圧縮する - takedajs ログ](http://takedajs.hatenablog.jp/entry/2016/08/01/231609)
* [gulp-imageminとpngquantを使って画像圧縮を効率化する | 技術コラム | つみきブログ](http://blog.tsumikiinc.com/article/20150226_gulp-imagemin.html)
* [Gulpでpngquantを使ってPNGの減色＆軽量化 - Qiita](http://qiita.com/sygnas/items/f6700c75df71b8888d80)
* [絶対つまずかないGulp入門。インストールからSassのコンパイルまで - ICS MEDIA](https://ics.media/entry/3290/3)
<br><br><br>



## 知っておくと便利なnpmコマンド一覧
* `npm root -g` … グローバルのルート（node_modules）を調べる
* `npm root` … プロジェクトのルート（node_modules）を調べる
* `npm ls -g --depth=0` … グローバルにインストールされているパッケージを確認
* `npm ls --depth=0` … プロジェクトにインストールされているパッケージを確認
* `npm init -y` … package.jsonをプロジェクトに生成（オプション「-y」が全てyes回答のショートカット）
* `npm install xxxxx --save` … プロジェクトにパッケージをインストールし、情報を「package.json」に書き込む（dependencies）
* `npm i xxxxx -s` … 上記のショートカットバージョン
* `npm install xxxxx --save-dev` … プロジェクトにパッケージをインストールし、情報を「package.json」に書き込む（devDependencies-開発用）
* `npm i xxxxx -D` … 上記のショートカットバージョン
* `npm -v` … npmのバージョンを表示
* `npm run` … package.json - scriptに記載した一覧が見れる
* `npm show` … package.jsonを表示
* `npm remove -g xxxxx` … グローバルのパッケージをアンインストール
* `npm remove xxxxx` … プロジェクトのパッケージをアンインストール
