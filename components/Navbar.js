import Image from 'next/image';
import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/Blog.jpg" width={128} height={77} alt="" />
            </div>
            <Link href="/" ><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/blogs"><a>Blogs</a></Link>
        </nav>
     );
}
 
export default Navbar;