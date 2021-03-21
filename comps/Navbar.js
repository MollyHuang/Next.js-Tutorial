// sfc + tab
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Molly List</h1>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/mollyListing"><a>Molly Listing</a></Link>
    </nav>
  );
}

export default Navbar;