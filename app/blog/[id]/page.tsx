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

export async function generateMetadata({params: {id}}: props): Promise<Metadata> {
    const post = await getData(id)
    return {
        title: post.title
    }
}

const page: FC<props> = async ({params: {id}}) => {
    const post = await getData(id)
    console.log('post',post)
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default page;