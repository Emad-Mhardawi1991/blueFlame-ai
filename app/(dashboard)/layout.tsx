import NavBar from "@/components/navBar";
import SideBar from "@/components/sideBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className=" h-full relative text-muted">
      <div className="hidden h-full  bg-[#080D19]  md:flex md:w-72 md:flex-col md:fixed md:inset-y-50 z-[80]">
        <SideBar/>
      </div>

      <main className="md:pl-72">
        <NavBar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
