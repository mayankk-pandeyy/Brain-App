import { useState } from "react";
import Content from "../components/Content";
import ContentModal from "../components/ContentModal";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-screen h-screen px-5 flex flex-col justify-evenly bg-[#EBECE9] overflow-hidden">
      <div className="h-[10%] flex items-center">
        <Navbar open={open} setOpen={setOpen} />
      </div>

      <div className="h-[80%] w-full overflow-auto relative">
        <Content />
      </div>

      {open && (
          <div className="absolute inset-0 flex justify-center items-center z-30 bg-black/30">
            <ContentModal open={open} setOpen={setOpen} />
          </div>
      )}
    </div>
  );
};

export default Dashboard;