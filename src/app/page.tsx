import Image from "next/image";
import Banner from "./components/HomePage";
import MainPage from "./components/mainPage";

export default function Home() {
  return <div>
    <Banner></Banner>
    <MainPage></MainPage>
  </div>;
}
