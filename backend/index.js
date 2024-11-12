const express = require('express');
const connectDB = require('./config/connectDB');
const authRoutes = require('./routes/auth');
const routes = require('./routes/routes');
const config = require('./config/config.json');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const Filler = require('./config/fillDB');

const app = express();

app.use(express.json());
app.use(cookieParser());

connectDB();
Filler();

app.get('/', function (req, res) {
    res.send('Hello Soul :)')
})

app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));

//app.use(cors({ origin: 'http://localhost:5173' }));

app.use('/', authRoutes);
app.use('/', routes);

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});
