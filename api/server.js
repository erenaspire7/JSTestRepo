const app = require("./app");

const server = app.listen(5000, () => {
  console.log("App running on port 5000....");
});
