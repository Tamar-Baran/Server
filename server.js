require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const PORT = process.env.PORT || 3600

//app.use("/api/notes", noteRouter);
app.use(cors());
app.use(cors(corsOptions));
app.use('/',express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded());
app.use(cookieParser());

app.use('/', require('./routes/root'))
app.use("/api/lesson", require("./routes/lessonRoutes"));
app.use("/api/question", require("./routes/questionRoutes"));
app.use("/api/optionalanswers", require("./routes/optionalanswersRoutes"));
app.use("/api/level", require("./routes/levelRoutes"));
app.use("/api/useranswer", require("./routes/useranswerRoutes"));
app.use("/api/stoppoint", require("./routes/stoppointRoutes"));
app.use("/api/achievements", require("./routes/achievementsRoutes"));
app.use("/api/user", require("./routes/userRoutes"));

app.listen(PORT, () => {
    console.log("app ruuning");
}); 
console.log(process.env.NODE_ENV);
