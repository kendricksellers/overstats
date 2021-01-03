import mongoose from 'mongoose';

const connectToDatabase = () => {
    const uri = process.env.DB_URI;

    mongoose
        .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .catch(error => {
            console.log(error);
        });

    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', true);

    return mongoose.connection;
};

export { connectToDatabase }