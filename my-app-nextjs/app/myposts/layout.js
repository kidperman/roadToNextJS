export default function PostsLayout({children}){
    return(
        <div>
            <small style={{background: '#fff', color: 'black'}}>Esta es mi primera página en Next :)</small>  
            <h2>Este es el Layout de los post</h2>
            {children}
        </div>

    )
}