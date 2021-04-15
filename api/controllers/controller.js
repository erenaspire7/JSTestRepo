const fs = require("fs");

let books = JSON.parse(fs.readFileSync(`${__dirname}/../json/books.json`));

exports.getAllBooks = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      results: books.length,
      books
    });
  } catch (err) {
    console.log(err.message);
  }
};

exports.getBook = (req, res) => {
  const book = books.find((el) => el.id === req.params.id * 1);

  if (book == undefined) {
    res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  } else if (req.params.id * 1 > books.length - 1) {
    res.status(404).json({
      status: "fail",
      message: "ID not found!",
    });
  } else {
    res.status(200).json({
      status: "success",
      book
    });
  }
};

exports.newBook = (req, res) => {
  let book = {};

  let id = books.length;
  book.id = id;
  if (req.body.title) book.title = req.body.title;
  if (req.body.description) book.description = req.body.description;

  books[book.id] = book;

  fs.writeFileSync(`${__dirname}/../json/books.json`, JSON.stringify(books));

  res.status(200).json({
    status: "success",
    book
  });
};

exports.updateBook = (req, res) => {
  let book = books.find((el) => el.id === req.params.id * 1);

  if (book == undefined) {
    res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  } else if (req.params.id * 1 > books.length - 1) {
    res.status(404).json({
      status: "fail",
      message: "ID not found!",
    });
  } else {
    if (req.body.id) book.id = req.body.id;

    if (req.body.title) book.title = req.body.title;

    if (req.body.description) book.description = req.body.description;

    books[book.id] = book;

    fs.writeFileSync(`${__dirname}/../json/books.json`, JSON.stringify(books));

    res.status(200).json({
      status: "success",
      book
    });
  }
};

exports.deleteBook = (req, res) => {
  let book = books.find((el) => el.id === req.params.id * 1);

  if (book == undefined) {
    res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  } else if (req.params.id * 1 > books.length - 1) {
    res.status(404).json({
      status: "fail",
      message: "ID not found!",
    });
  } else {
    books.splice(book.id, 1);

    fs.writeFileSync(`${__dirname}/../json/books.json`, JSON.stringify(books));

    res.status(200).json({
      status: "success",
      books
    });
  }
};
