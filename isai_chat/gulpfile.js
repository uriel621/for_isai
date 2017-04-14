var gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task("browserSync", function(){
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task("watch", ["browserSync"], function(){
    gulp.watch("src/index.html", browserSync.reload);
    gulp.watch("src/css/*.css", browserSync.reload);
    gulp.watch("src/js/*.js", browserSync.reload);
})