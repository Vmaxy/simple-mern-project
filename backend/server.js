require('dotenv').config({ path: require('path').join(__dirname, 'src/.env') });
const server = require('./src/app');
const mongoose = require('./src/db/db');

mongoose();



server.listen(3000, () => {
    console.log('this is running in  port 3000');
    
})