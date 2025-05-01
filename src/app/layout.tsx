import Navbar from "./partials/navbar";
import Footer from "./partials/footer"
import "./output.css";
import "./styles.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      

      <body>
      <Navbar />
        {children}
        <Footer />
        
      </body>
    </html>
  );
};

export default Layout;