import Navbar from "./ui/navbar";
import Auction from "@/app/assets/auctioneer.jpg"
import Image from "next/image";
import Auction2 from "@/app/assets/auctioneer2.png"
import Auction3 from "@/app/assets/auctioneer3.png"

export default function Home() {
  return (
    <>
    <Navbar />

    <div className="pt-6 container mx-auto justify-center flex">
      <Image
        src={Auction}
        height="350"
        width="auto"
        alt="Auction"
        className="rounded-l-lg"
      />
      <Image
        src={Auction3}
        height="350"
        width="auto"
        alt="Auction 2"
        className=""
      />
      <Image
        src={Auction2}
        height="350"
        width="auto"
        alt="Auction 2"
        className="rounded-r-lg"
      />
    </div>
    </>
  );
}