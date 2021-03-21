// sfc + tab
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        {/* <img src="./logo.png" /> */}
        <Image src="/logo.png" width={70} height={70} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/mollyListing"><a>Molly Listing</a></Link>
    </nav>
  );
}

export default Navbar;