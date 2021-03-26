import mongoose from 'mongoose';
import config from './config'


(async () => {
    const db = await mongoose.connect(config.mongodbURL,{
        useUnifiedTopology: true ,
        useNewUrlParser: true
    });
    console.log('DataBase its connected to : ',db.connection.name);
})();

