import { NextRequest, NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const uri = "mongodb+srv://sagasv001:ZwdPUJ9ZZ7FzuPST@cluster0.ko4vc66.mongodb.net/"; // Replace with your MongoDB connection URI
const client = new MongoClient(uri);

interface Vote {
  _id: ObjectId;
  foodVotes: number;
  venueVotes: number;
}

export async function POST(req: NextRequest) {
  try {
    const { type } = await req.json();

    if (!type || (type !== "food" && type !== "venue")) {
      return NextResponse.json({ error: "Invalid vote type" }, { status: 400 });
    }

    await client.connect();
    const db = client.db("eth-db"); // Replace with your database name
    const votesCollection = db.collection<Vote>("votes");

    const result = await votesCollection.findOneAndUpdate(
      {},
      { $inc: type === "food" ? { foodVotes: 1 } : { venueVotes: 1 } },
      { upsert: true, returnDocument: "after" },
    );

    if (result) {
      return NextResponse.json({
        message: "Vote updated successfully",
        foodVotes: result.foodVotes,
        venueVotes: result.venueVotes,
      });
    } else {
      return NextResponse.json({ error: "Failed to update vote" }, { status: 500 });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to update vote" }, { status: 500 });
  } finally {
    await client.close();
  }
}
