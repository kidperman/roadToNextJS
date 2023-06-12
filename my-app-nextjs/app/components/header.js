//links para la navegacion 
import Link from "next/link.js"  //importamos libreria para renderizar los links
import styles from './Header.module.css'
//definimos los links
const links = [{
  label: 'Home',
  route: '/'
},{
  label: 'About',
  route: '/about'
},{
  label: 'Posts',
  route: '/myposts'
}
]


export function Header(){
    return(
        <header className={styles.header}>
        <nav>
          <ul className={styles.navigation}>

            {links.map(({label, route})=>(
              <li key={route}>
                <Link href={route}>
                  {label}
                </Link>
              </li>
            ))}

          </ul>
        </nav>
        </header>
    )
}