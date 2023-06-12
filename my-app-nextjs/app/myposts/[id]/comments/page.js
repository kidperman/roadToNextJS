import Image from "next/image";
//Aqui tenemos un enlace dinámico que muestra ID. con esto se puede hacer el fetching de datos...
const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000));   //creamos una promesa para hacer un tiempo de espera de 3 segundos para los comentarios
//   throw new Error('error al cargar comentarios')
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
      .then(res => res.json())


 } 


//CREAMOS UN REACT SERVER COMPONENT
export default async function PostsPage({params}){
  const {id} = params  
  const comments = await fetchComments(id)

    return (
      <ul style={{ background:'#E2E8F0', fontSize: '12px', color: 'black', marginLeft: '24px', padding: '24px'}}>
        <h1 style ={{textAlign: 'center', marginBottom: '24px'}}>COMMENTS</h1>
        {comments.map(comment => (
            <li key={comment.id}>
                <Image width='50' height='50' alt={comment.name} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`}/>
                <h1>{comment.name}</h1>
                <p>{comment.body}</p>
            </li>
        ))}

      </ul>
)}