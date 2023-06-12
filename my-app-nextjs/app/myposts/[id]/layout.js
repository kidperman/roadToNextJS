//Aqui tenemos un enlace dinámico que muestra ID. con esto se puede hacer el fetching de datos...
import Link from "next/link.js"

const fetchSinglePosts = (id) => {

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })
      .then(res => res.json())


} 


//CREAMOS UN REACT SERVER COMPONENT
export default async function PostsPage({children, params}){
  const {id} = params  
  const post = await fetchSinglePosts(id)

    return (
        <article>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link href={`/myposts/${id}/comments`}>
            <h1>Ver comentarios...</h1>
          </Link>
          {children}
        </article>
)}