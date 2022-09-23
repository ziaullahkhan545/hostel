// importing assets 
const mongoose =  require('mongoose');

async function connection(){
    const PORT = 27017;
    const DATABASE = 'hostel';
    try {
        await mongoose.connect(`mongodb://localhost:${PORT}/${DATABASE}`);
        console.log(`mongoDB is running at port ${PORT}`);
    } catch(err){
        console.log('mongoDB connection failled');
    }
}

module.exports = connection;