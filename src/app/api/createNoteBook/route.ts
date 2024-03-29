import { db } from "@/lib/db"
import { generateImage, generateImagePrompt } from "@/lib/db/openai"
import { $notes } from "@/lib/db/schema"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"


export async function POST(req: Request) {
    const { userId } = auth()

    if (!userId) {
        return new NextResponse("unauthorized", {status: 401})
    }
    const body = await req.json()
    const {name} = body

    const image_description = await generateImagePrompt(name)
    if (!image_description) {
        return new NextResponse('failed to create image', {status: 500})
    }
     
    const image_url = await generateImage(image_description)
    if (!image_url) {
        return new NextResponse('failed to create ur;', {status: 500})
    }
  
    const note_ids = await db.insert($notes).values({
        name,
        userId,
        imageUrl: image_url, 
    }).returning({
        insertedId: $notes.id
    })
    return NextResponse.json({
        note_id: note_ids[0].insertedId
    })
}