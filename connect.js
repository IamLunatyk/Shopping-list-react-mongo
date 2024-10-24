const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// Create a new MongoClient
const connectionParams = {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  try {
    const con = await mongoose
      .connect(process.env.DATABASE_URI, connectionParams)
      .then(() => {
        console.log("Connected to the database ");
      })
      .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
      });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
