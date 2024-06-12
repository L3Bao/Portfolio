const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connection string (replace <password> with your actual password)
// Ensure your database name matches the case exactly as it exists in MongoDB Atlas
const dbURI =
  "mongodb+srv://s3979654:B1u3isaw3som3...@cluster1.j824kam.mongodb.net/Bookstore?retryWrites=true&w=majority";

// Connect to MongoDB Atlas
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Connection error:", err));

// Import routes
const bookRoutes = require("./routes/books");

// Use routes
app.use("/books", bookRoutes);

// Define a simple route
app.get("/", (req, res) => {
  res.send("Welcome to the Bookstore API");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
