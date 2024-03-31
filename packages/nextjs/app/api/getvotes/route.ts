import { NextRequest, NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const uri = "mongodb+srv://sagasv001:ZwdPUJ9ZZ7FzuPST@cluster0.ko4vc66.mongodb.net/"; // Replace with your MongoDB connection URI
const client = new MongoClient(uri);

interface Vote {
  _id: ObjectId;
  foodVotes: number;
  venueVotes: number;
}

export async function GET() {
  try {
    await client.connect();
    const db = client.db("eth-db");
    const votesCollection = db.collection<Vote>("votes");

    const vote = await votesCollection.findOne({});

    return NextResponse.json({
      foodVotes: vote?.foodVotes || 0,
      venueVotes: vote?.venueVotes || 0,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to retrieve votes" }, { status: 500 });
  } finally {
    await client.close();
  }
}
