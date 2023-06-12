import { LikeButton } from "./likeButton"
import Link from "next/link"
import {font} from '../font'
//SIMPLIFICACION DE LA PAGINA DE POSTS

//definimos una constante para realizar fetching a URL de json
const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
          revalidate: 60
        }
      })
          .then(res => res.json())
    
    
    } 

//CREAMOS UN REACT SERVER COMPONENT
//AQUI HACEMOS FETCHING DE DATOS...DESDE EL SERVER
export async function ListOfPost(){
    const posts = await fetchPosts()
    
    return posts.slice(0,5).map(post => (
            <article key={post.id}>
                <Link href='/myposts/[id]' as={`/myposts/${post.id}`}>
                    <h1 className={font.className}>{post.title}</h1>
                    <p>{post.body}</p>
                    <LikeButton id={post.id}/>
               
                </Link>     
            </article>
        ))
}
