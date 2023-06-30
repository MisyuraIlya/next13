import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const query = 'matrix';
    const API_KEY = process.env.OMDB_SECRET;
    console.log('API_KEY',API_KEY)
    console.log('`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`',`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    const movies = await fetch (`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`).then(res => res.json())
    return NextResponse.json(movies)
}