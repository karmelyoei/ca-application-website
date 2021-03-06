const express = require('express');
const { join } = require('path');
const cookieParser = require('cookie-parser');
const router = require('./controllers');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(router);

app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.set('port', process.env.PORT || 4000);

if (process.env.NODE_ENV === 'production') {
	app.get('*', (req, res) => {
		res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
	});
}

module.exports = app;
