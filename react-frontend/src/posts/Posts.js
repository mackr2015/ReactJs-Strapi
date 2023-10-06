import React from 'react'

import useFetch from '../hooks/useFetch'

const Posts = () => {

  const { loading, error, data } = useFetch('http://localhost:1337/api/posts');

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error fetching API data</p>

  // console.log(data.data[0].attributes);
  // console.log(typeof(data.data));
  // let posts = {};
  // for (let post in data.data){
  //   // console.log(post);
  //   // console.log(data.data[post].attributes);
  //   posts = data.data;
  // }
  console.log(data);
  // console.log(posts);
  return (
    <div className="posts">

      {/* {data.map(post => ( */}
        {/* // <div key={post.id} className="posts-card">
        //   <h2>{post.title}</h2>
        //   <p>
        //     {post.body.substring(0, 180)}...
        //   </p>
        // </div>  */}
      {/* ))} */}
     
    </div>
  )
}

export default Posts;

