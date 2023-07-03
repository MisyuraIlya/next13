import { getAllPosts } from '@/services/getPosts';
import { Metadata } from 'next';
import React, {FC} from 'react';

async function getData(id: string){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })

    return response.json()
}


type props = {
    params: {
        id: string
    }
}

export async function generateStaticParams() {
    const posts: any[] = await getAllPosts()

    return posts.map((post) => ({
        slug: post.id.toString(),
    }))
}

export async function generateMetadata({
    params: { id },
  }: props): Promise<Metadata> {
    const post = await getData(id);
  
    return {
      title: post.title,
    };
  }
  
  export const revalidate = 60

  export default async function Post({ params: { id } }: props) {
    const post = await getData(id);
  
    return (
      <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </>
    );
  }