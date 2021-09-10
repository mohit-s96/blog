import Navbar from "./nav/Navbar";

type Props = {
  children: React.ReactNode;
  theme?: "dark" | "light";
};

const Layout = ({ children, theme = "dark" }: Props) => {
  return (
    <>
      <div
        className={`${
          theme === "dark" ? "bg-primary-bg-dark" : "bg-primary-bg-light"
        }`}
      >
        <Navbar theme={theme} />
        <main className="w-10/12 mx-auto">{children}</main>
      </div>
    </>
  );
};

export default Layout;
