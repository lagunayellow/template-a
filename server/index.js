const app = require('./app/app.js');

app.listen(process.env.PORT, () => {
    console.log(`port: ${process.env.PORT}`);
})