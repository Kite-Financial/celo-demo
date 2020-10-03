const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const walletRoutes = require('./routes/wallet');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(walletRoutes.routes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
  });


app.listen(3000);
