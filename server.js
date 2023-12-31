const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '/public')));

app.use((req, res, next) => {
	res.show = name => {
		res.sendFile(path.join(__dirname, `/views/${name}`));
	};
	next();
});

app.use('/user', (req, res, next) => {
	res.show = name => {
		res.sendFile(path.join(__dirname, `/views/user/${name}`));
	};
	next();
});

app.get('/', (req, res) => {
	res.show('home.html');
});
app.get('/home', (req, res) => {
	res.show('home.html');
});

app.get('/user/panel', (req, res) => {
	res.show('panel.html');
});
app.get('/user/settings', (req, res) => {
	res.show('settings.html');
});

app.use((req, res) => {
	res.status(404).sendFile(path.join(__dirname, `/views/notFound.html`));
});

app.listen(8000, () => {
	console.log(`Server is running on port: 8000`);
});
