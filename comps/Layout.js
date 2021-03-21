import Footer from "./Footer"
import Navbar from "./Navbar"

//sfc + tab
const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      { children}
      <Footer />
    </div>
  );
}
export default Layout;