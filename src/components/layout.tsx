import Navbar from "./nav/Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div>
        <Navbar theme="dark" />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
