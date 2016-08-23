var gulp = require("gulp");
var tsc = require("gulp-typescript");

var SRC = "./src/*.ts";
var DEST = "./dist";

gulp.tast('build', function(){
    var result = gulp.src(SRC)
                     .pipe(tsc({
                         noImplicitAny: true,
                         out: "markUp.js"
                     }))
                     .pipe(gulp.dest(DEST));
});

gulp.tast('watch', ['build'], function(){
    gulp.watch(SRC, ['build']);
})