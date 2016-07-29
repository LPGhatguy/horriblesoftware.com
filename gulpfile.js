"use strict";

const gulp = require("gulp");
const gutil = require("gulp-util");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();

const postcss = require("gulp-postcss");

function log(text) {
	gutil.log(gutil.colors.green(text));
}

function buildStyles() {
	return gulp.src("css/main.css")
		.on("end", () => log("Building..."))
		.pipe(sourcemaps.init())
		.pipe(postcss([
			require("postcss-sassy-import")(),
			require("postcss-custom-properties")({preserve: true}),
			require("postcss-nested-props"),
			require("postcss-nested"),
			require("autoprefixer")(["last 2 versions", "not IE < 11", "not ie_mob < 11"])
		]))
		.pipe(rename("theme.css"))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("assets/"))
		.pipe(gulp.dest("_site/assets/"))
		.on("end", () => log("Done."));
}

gulp.task("default", buildStyles);

gulp.task("watch", () => {
	log("Watching files -- run jekyll serve");

	browserSync.init({
		proxy: "localhost:4000"
	});

	return gulp.watch("css/**/*.css", () => {
		return buildStyles()
			.pipe(browserSync.stream({
				match: "**/*.css"
			}));
	});
});