import Navigation from './Navigation';
import Footer from './Footer';
import Cookies from './Cookies';

const Layout = ({ children }: any) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
      <Cookies />
    </>
  );
};

export default Layout;
