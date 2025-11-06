import mongoose, { ClientSession } from "mongoose";
import { connectMongoose } from "@/global/configurations";

export async function runAtomic(
  callback: (session: ClientSession) => Promise<void>
) {
  await connectMongoose();
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    await callback(session);
    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    console.error("⛔ Transaction aborted:", error);
    throw error;
  } finally {
    session.endSession();
  }
}
