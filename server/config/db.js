const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://kairos2:testingproject@cluster0.co251.mongodb.net/kairos2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
