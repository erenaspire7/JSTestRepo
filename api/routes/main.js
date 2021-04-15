const express = require("express");

const controller = require("./../controllers/controller");

const router = express.Router();

router.route("/").get(controller.getAllBooks).post(controller.newBook);

router
  .route("/:id")
  .get(controller.getBook)
  .put(controller.updateBook)
  .delete(controller.deleteBook);

module.exports = router;
