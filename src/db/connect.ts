import mongoose from 'mongoose';

type DBInput = { db: string };

export default function dbConnect ({ db }: DBInput) {
  async function connect () {
    try {
      await mongoose.connect(db, { useNewUrlParser: true });
    } catch (error) {
      throw new Error('unable to establish db connection');
    }
  }

  connect();
  mongoose.connection.on('disconnected', connect);
}
