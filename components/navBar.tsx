


import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobile-sidebar";


const NavBar = () => {
  return (
    <div className=" flex items-center md:justify-end justify-between p-4">
    <MobileSidebar/>
      <UserButton  afterSignOutUrl="/"/>
    </div>
  );
};

export default NavBar;
