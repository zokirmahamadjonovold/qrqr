require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const _ = require('lodash');

const fileUpload = require('express-fileupload');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.set('view engine', 'ejs');
app.use(morgan('dev'));
// enable files upload
app.use(
  fileUpload({
    createParentPath: true,
  })
);

const main = async () => {
  app.use('/', require('./routes/'));
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
  });
};

main().catch((err) => console.log(err));
