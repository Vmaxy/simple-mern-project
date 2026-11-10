const mongoose =  require('mongoose')

async function maindb () {

    await mongoose.connect(process.env.MONGODB_URL)
    console.log('connected to the database');
    
    
}

module.exports = maindb; 