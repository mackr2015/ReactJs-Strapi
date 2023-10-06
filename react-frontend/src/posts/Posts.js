import React from 'react'
import ReactMarkDown from "react-markdown"
import ReactDom from "react-dom"
import useFetch from '../hooks/useFetch'


const Posts = () => {
  const postsUrl = 'http://localhost:1337/api/posts';
  const { loading, error, data } = useFetch(postsUrl);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error fetching API data</p>

  return (
    <div className="posts">
      {Object.keys(data.data).map(index => (
        
        <div key="{data.data[index].id}" className="post-card">
          <h2>{data.data[index].attributes.title}</h2>
          <ReactMarkDown>{data.data[index].attributes.postContent}</ReactMarkDown>
        </div>
      ))}
     
    </div>
  )
}

export default Posts;

