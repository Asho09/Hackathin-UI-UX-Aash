import React from 'react';
import Link from 'next/link';
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
 return (
 <div className=" bg-amber-100 flex justify-between items-center w-full h-[100px] px-10 py-5 bg-[hashtag#FBEBB5]">
 {/* Navigation Links */}
 <ul className="flex gap-10 text-[16px] font-medium text-black">
 <li>
 <Link href="/">Home</Link>
 </li>
 <li>
 <Link href="/Shop">Shop</Link>
 </li>
 <li>
 <Link href="/Account">Account</Link>
 </li>
 <li>
 <Link href="/Contact">Contact</Link>
 </li>
 </ul>

 {/* Icons */}
 <div className="flex gap-5">
 <li>
 <Link href="/#"><RiContactsBook2Fill size={24} /></Link>
 </li>
 <li>
 <Link href="/#"><IoSearchSharp size={24} /></Link>
 </li>
 <li>
 <Link href="/#"><FaRegHeart size={24} /></Link>
 </li>
 <li>
 <Link href="/#"><MdShoppingCart size={24} /></Link>
 </li>
 </div>
 </div>
 );
};

export default Header;