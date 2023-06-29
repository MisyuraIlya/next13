
"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePosts } from '@/store';
import shallow from 'zustand/shallow'
import useSWR from 'swr'
import { getAllPosts } from '@/services/getPosts';

// **** [1] - USE WITHOUT STATE MANAGER ***** 
// type props = {
//     posts: any[]
// }

// const Posts = ({posts}: props) => {
//     return (
//         <div>
//             <ul>
//                 {posts.map((post: any) => (
//                     <li key={post.id}>
//                         <Link href={`/blog/${post.id}`}>
//                             {post.title}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Posts;




// **** [2] - USE WITHOUT SWR ONLY STATE MANAGER ***** 
// const Posts = () => {
//     const [posts, loading, getAllPosts] = usePosts((state) => [state.posts, state.loading, state.getAllPosts],shallow)

//     useEffect(() => {
//         getAllPosts();
//     },[getAllPosts])
//     return (
//         <div>
//             {loading ? <h4>loading</h4> :
//             <ul>
//                 {posts.map((post: any) => (
//                     <li key={post.id}>
//                         <Link href={`/blog/${post.id}`}>
//                             {post.title}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//             }

//         </div>
//     );
// };

// export default Posts;





// **** [3] - USE SWR LIKE REACT QUERY ***** 
const Posts = () => {
    const {data: posts, isLoading} = useSWR('posts', getAllPosts)

    return (
        <div>
            {isLoading ? <h4>loading</h4> :
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
            }

        </div>
    );
};

export default Posts;