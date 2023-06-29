"use client";

import { getPostsBySearch } from '@/services/getPosts';
import { usePosts } from '@/store';
import React, { FormEventHandler, useState } from 'react';
import useSWR from 'swr'

// **** [1] - USE WITHOUT STATE MANAGER ***** 
// type props = {
//     onSearch: (value: any[]) => void
// }
// const PostSearch = ({onSearch }: props) => {
//     const [search, setSearch] = useState('')

//     const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
//         event.preventDefault()
//         const posts = await getPostsBySearch(search)
//         onSearch(posts)
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type='search' placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)}/>  
//             <button type='submit'>search</button>
//         </form>
//     );
// };

// export default PostSearch;



// **** [2] - USE WITHOUT SWR ONLY STATE MANAGER ***** 
// const PostSearch = () => {
//     const [search, setSearch] = useState('')

//     const getPostsBeSearch = usePosts(state => state.getPostsBeSearch)

//     const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
//         event.preventDefault()
//         await getPostsBeSearch(search)
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type='search' placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)}/>  
//             <button type='submit'>search</button>
//         </form>
//     );
// };

// export default PostSearch;







const PostSearch = () => {
    const {mutate} = useSWR('posts', )
    const [search, setSearch] = useState('')


    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        
        const posts = await getPostsBySearch(search)

        mutate(posts)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='search' placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)}/>  
            <button type='submit'>search</button>
        </form>
    );
};

export default PostSearch;