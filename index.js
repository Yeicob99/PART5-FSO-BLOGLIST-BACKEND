const config = require('./utils/config.js');
const app = require('./app.js');

const PORT = config.PORT;

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });