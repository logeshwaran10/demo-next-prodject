import Link from 'next/link';


export default function Home() {

  return (
   <div>
     <Link href={'/about'}>
       About
     </Link>

       <Link
           href={'/productsList'}
           style={{
           marginLeft: '10px'
       }}
       >
           productList
     </Link>
   </div>
  )
}
