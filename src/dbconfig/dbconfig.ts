import mongoose from "mongoose";

export async function connectToMongo() {
    try {
        await mongoose.connect(process.env.MONGO_URI!);

        mongoose.connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        });

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
