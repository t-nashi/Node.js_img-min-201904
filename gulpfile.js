// モジュール読み込み
var gulp = require('gulp');								// gulpを呼び出す
var watch = require('gulp-watch');						// 追加ファイルも監視対象に追加する
var changed  = require('gulp-changed');					// 変更されたファイルだけを処理
var imagemin = require('gulp-imagemin');				// 画像最適化
var pngquant = require('imagemin-pngquant');			// png最適化
var mozjpeg  = require('imagemin-mozjpeg');				// jpg最適化
var jpegrec = require('imagemin-jpeg-recompress');		// jpg最適化 - macだと「imagemin-mozjpeg」がエラー起こすのでこっち使った方が良い
var imageminGif = require('imagemin-gifsicle');			// gif圧縮
var svgmin = require('gulp-svgmin');					// svg圧縮

// 処理前と処理後のディレクトリを定義
var paths = {
	srcDir : './src',						// 処理前
	dstDir : './public'						// 処理後
}

// 画像最適化
gulp.task('imagemin', function(){
	var srcGlob = paths.srcDir + '/images/**/*.+(jpg|gif)';
	var dstGlob = paths.dstDir + '/images/';

	// jpg・gif
	gulp.src(srcGlob)
		.pipe(changed(dstGlob))					// 処理前・処理後で違いのあるものをチェック
		.pipe(imagemin([
			// gif
			imageminGif({
				interlaced: false,				// 
				optimizationLevel: 3,			// 1 - 3
				colors: 100						// 2 - 256
			}),

			// jpg
			// imagemin.jpegtran({quality:85, progressive: true})	// mozjpegはmacでエラーが発生するためjpegtranを利用する（少し圧縮率が低い）
			// jpegrec({quality:'low', min:40, max:85})				// [macではこちらを有効にする] quality: low, midium, high, veryhigh
			mozjpeg({quality:85, progressive: true})				// [winではこちらを有効にする]
		]))
		.pipe(gulp.dest(dstGlob));

	// png （画像が暗くなる現象対策のためpngだけ切り出し）
	srcGlob = paths.srcDir + '/images/**/*.+(png)';
	gulp.src(srcGlob)
		.pipe(changed(dstGlob))					// 処理前・処理後で違いのあるものをチェック
		.pipe(imagemin(
			[pngquant({quality: '40-80', speed: 1})] //40-70
		))
		.pipe(imagemin()) // pngquantで圧縮した画像が暗くなる現象対策（余計なガンマ情報を削除）
		.pipe(gulp.dest(dstGlob));
});

// svg画像の圧縮タスク
// $ gulp svgmin
gulp.task('svgmin', function(){
	var srcGlob = paths.srcDir + '/images/**/*.+(svg)';
	var dstGlob = paths.dstDir + '/images/';
	gulp.src(srcGlob)
		.pipe(changed(dstGlob))
		.pipe(svgmin())
		.pipe(gulp.dest(dstGlob));
});

// 「gulp」で実行のタスク （ファイルの監視/js/sass、サーバー実行）
gulp.task('default',['imagemin','svgmin'], function() {
	// ファイルの監視をして変化があったらタスクを実行
	gulp.watch([paths.srcDir + '/images/**/*'],['imagemin','svgmin']);
	// 新規ファイルが追加されたとき
	return watch([paths.srcDir + '/images/**/*'], () => {
		return gulp.start(['imagemin','svgmin']);
	});
});
