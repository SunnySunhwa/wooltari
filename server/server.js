// 포트 번호
require('dotenv').config(); 
// dependencies
const express = require('express');
const bodyParser = require('body-parser');

//포트 넘버가 다를때 다른 서버로 인식하는 것을 막기위한 라이브러리
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

