//Aqui tenemos un enlace dinámico que muestra ID. con esto se puede hacer el fetching de datos...

//importamos listOfPost: para nuestro server component...
import { ListOfPost } from "./listOfPost"
import { likeButton } from "./likeButton"
//CREAMOS UN REACT SERVER COMPONENT
export default async function PostsPage(){
    return (
    <section>
        <ListOfPost />
    </section>
)}