const app = require("./app");
const mongoose = require("mongoose");
const db = "mongodb://127.0.0.1:27017/arms";
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false,
});

const port = process.env.Port || 8000;

app.listen(port, () => {
  console.log(`server connected on port: ${port}`);
});
