const server = require("./src/index.js");
const { conn } = require("./src/db.js");

conn
  .sync({ force: false})
  .then(() => {
    server.listen(3001, () => {
      console.log(`Server listening on port ${3001}`);
    });
  })
  .catch((error) => console.error(error)); 