var app = require('./server-config.js');

const PORT = process.env.PORT || 4568


app.listen(PORT);

console.log('Server now listening on PORT ' + PORT);
