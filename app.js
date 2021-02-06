var createError = require('http-errors');

const db = require('./db/users/userQueries')
var cors = require('cors')
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/userRoutes/getUsers');
var getUserRouter = require('./routes/userRoutes/getUserById');
var deleteUserRouter = require('./routes/userRoutes/deleteUser')
var createUserRouter = require('./routes/userRoutes/createUser')
var updateUserRouter = require('./routes/userRoutes/updateUser')

var productsRouter = require('./routes/ProductRoutes/getProducts')
var getProductRouter = require('./routes/ProductRoutes/getProductById')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors())  //cross origin resource sharing required to bypass browser orgin checking.  *need more info*
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(express.static(path.join(__dirname, 'public')));

//user routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user', getUserRouter);
app.use('/user', deleteUserRouter)
app.use('/user', updateUserRouter)
app.use('/user', createUserRouter)
//item routes
app.use('/products', productsRouter)
app.use('/product', getProductRouter)

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
