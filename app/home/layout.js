import Navigation from "@/app/_Components/Navigation";
import "../globals.css";
function HomeLayout({ children }) {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row">
      <Navigation />
      <div className="grow">{children}</div>
    </div>
  );
}

export default HomeLayout;
