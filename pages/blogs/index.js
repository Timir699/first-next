import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/Blogs.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    return {
        props: { blogs : data }
    }
}

const AllBlogs = ({ blogs }) => {
  
    return ( 
        <div>
            <Head>
                <title>Blog | All Blogs</title>
                <meta name="keywords" content="blogs" />
            </Head>
            <h1>AllBlogs</h1>
            {blogs.map( blog => (
                <Link href={'/blogs/'+ blog.id} key={blog.id}>
                   <a  className={styles.single}>
                        <h3>{blog.title}</h3>
                   </a>
                </Link>
             ) )}
        </div>
     );
}
 
export default AllBlogs;