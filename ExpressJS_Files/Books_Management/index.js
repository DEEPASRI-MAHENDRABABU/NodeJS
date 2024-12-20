const express = require("express");
const fs = require("fs");
const path = require("path");
 
const app = express();
const PORT = 3000;
 
// Middleware
app.use(express.urlencoded({ extended: true }));
 
// Load books from books.json
let books = require("./books.json");
 
// Serve static files except index.html
app.use("/add.html", express.static(path.join(__dirname, "public", "add.html")));
app.use("/style.css", express.static(path.join(__dirname, "public", "style.css")));
 
// Serve the main page dynamically
app.get("/", (req, res) => {
    const filePath = path.join(__dirname, "public", "index.html");
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("Error loading page");
            return;
        }
 
        // Replace the placeholder {{books}} with the actual book data
        const booksHtml = books
            .map(
                (book) => `
                <li>
                    <span>${book.title} -- ${book.author}</span>
<form action="/delete/${book.id}" method="POST" style="display:inline;">
                        <button type="submit" class="delete-button">Delete</button>
                    </form>
                </li>
            `
            )
            .join("");
 
        const updatedHtml = data.replace("{{books}}", booksHtml);
 
        res.send(updatedHtml);
    });
});
 
// Add a new book
app.post("/add", (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
    };
    books.push(newBook);
    saveBooks();
    res.redirect("/");
});
 
// Delete a book
app.post("/delete/:id", (req, res) => {
books = books.filter((book) => book.id !== parseInt(req.params.id));
    saveBooks();
    res.redirect("/");
});
 
// Save books to books.json
function saveBooks() {
    fs.writeFileSync("./books.json", JSON.stringify(books, null, 2));
}
 
// Start the server
app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});
