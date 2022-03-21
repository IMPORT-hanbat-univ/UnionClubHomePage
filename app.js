var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');



// 메인 홈페이지
var indexRouter = require('./routes/index');
// 총동아리연합회
var unionclubRouter = require('./routes/unionclub');
// 체육분과
var physicalRouter = require('./routes/physical');
// 전시교양분과
var performanceRouter = require('./routes/performance');
// 전시교양분과
var artRouter = require('./routes/art');
// 봉사분과
var volunteerRouter = require('./routes/volunteer');
// 종교분과
var religionRouter = require('./routes/religion');
// 서류/양식
var documentRouter = require('./routes/document');
// 동아리 활동보고
var reportRouter = require('./routes/report');
// 이달의 동아리
var bestClubRouter = require('./routes/bestClub');
// 동아리 캘린더
var calenderRouter = require('./routes/calender');
// 대표자 회의록
var meetingRouter = require('./routes/meeting');
// 게시글
var postRouter = require('./routes/post');
// 게시글 작성
var writeRouter = require('./routes/write');
// db 업로드
var addRouter = require('./routes/add');
// 게시글 삭제
var deleteRouter = require('./routes/delete');
// 게시글 수정
var editRouter = require('./routes/edit');
// 파일 업로드
var fileRouter = require('./routes/file');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser({limit: '5000mb'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/unionclub', unionclubRouter);
app.use('/physical', physicalRouter);
app.use('/performance', performanceRouter);
app.use('/art', artRouter);
app.use('/volunteer', volunteerRouter);
app.use('/religion', religionRouter);
app.use('/document', documentRouter);
app.use('/report', reportRouter);
app.use('/bestClub', bestClubRouter);
app.use('/calender', calenderRouter);
app.use('/meeting', meetingRouter);
app.use('/post', postRouter);
app.use('/write', writeRouter);
app.use('/add', addRouter);
app.use('/delete', deleteRouter);
app.use('/edit', editRouter);
app.use('/file', fileRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
