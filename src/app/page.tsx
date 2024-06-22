import Image from "next/image";
import ImgFull from "./components/ImgFull";
import About from "./components/About";
import Artice from "./components/Artice";

export default function Home() {
  return (
    <div>
      <ImgFull  />
      <About />
      <Artice/>
    </div>
  );
}
