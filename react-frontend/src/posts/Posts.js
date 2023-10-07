import React from 'react'
import ReactMarkDown from "react-markdown"
// import ReactDom from "react-dom"
import useFetch from '../hooks/useFetch'


const Posts = () => {
  const baseUrl = 'http://localhost:1337/';
  const postsUrl = 'http://localhost:1337/api/posts?populate=*';
  const { loading, error, data } = useFetch(postsUrl);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error fetching API data</p>

  return (
    <div className="posts">

      {data.map(post => (

        <div key="{post.id}" className="post-card">
          <h2>{post.attributes.title}</h2>

          {/* <img source="{post.attributes.thumbnail.data.attributes.url}" /> */}
          <div className="postContent">
            <ReactMarkDown>{post.attributes.postContent}</ReactMarkDown>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Posts;

