import Image from "next/image";

import Hero from "./components/Hero";
import About from "./About/page";
import Account from "./Account/page";
import Blog from "./Blog/page";
import Cart from "./Cart/page";
import Checkout from "./Checkout/page";
import { FcContacts } from "react-icons/fc";
import ContactSection from "./Contact/page";
import Shop from "./Shop/page";



export default function Home() {
  return (
    <div>
    
    <Hero />
     <About /> 
     <Shop />
     <Account />
     <Checkout />
     <Cart />
     <ContactSection />
     <Blog />
     
    </div>
  );
}
