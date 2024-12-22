import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET() {
    try {
        const filePath = join(process.cwd(), "data", "blogposts.json");
        const fileContents = readFileSync(filePath, "utf-8");
        const posts = JSON.parse(fileContents);

        return NextResponse.json(posts);
    } catch (error) {
        console.error("Failed to read blog posts:", error);
        return NextResponse.json({ error: "Failed to load blog posts" }, { status: 500 });
    }
}
