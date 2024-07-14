const express = require('express');
const path = require("path");
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 5000;

const authenticateToken = require('./middleware/authenticateToken');

const indexRoutes = require('./routes/index.routes');
const authRoutes = require('./routes/auth.routes');
const uploadRoutes = require('./routes/upload.routes');

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/", indexRoutes);
app.use("/", authRoutes);
app.use("/", authenticateToken, uploadRoutes);

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
