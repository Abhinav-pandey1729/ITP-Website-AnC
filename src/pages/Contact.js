import React from "react";
import ChromaGrid from "../components/ChromaGrid";

const managers = [
  {
    image: "/Aayush.jpg", 
    subtitle: "Manager",
    handle: "aayushk23@iitk.ac.in",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg, #4F46E5, #000)",
    url: "#",
  },
  {
    image: "/Ayush_Kumar.jpg",
    title: "Ayush Kumar",
    subtitle: "Manager",
    handle: "ayushkumar23@iitk.ac.in",
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg, #10B981, #000)",
    url: "#",
  },
  {
    image: "/Aditya_Sati.jpg",
    title: "Aditya Sati",
    subtitle: "Manager",
    handle: "aityasati23@iitk.ac.in",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg, #F59E0B, #000)",
    url: "#",
  },
  {
    image: "/Karmanya_Goyal.jpeg",
    title: "Karmanya Goyal",
    subtitle: "Manager",
    handle: "karmanya23@iitk.ac.in",
    borderColor: "#EF4444",
    gradient: "linear-gradient(195deg, #EF4444, #000)",
    url: "#",
  },
  {
    image: "/Aryamann.jpeg",
    title: "Aryamann Srivastava",
    subtitle: "Manager",
    handle: "aryamanns23@iitk.ac.in",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg, #8B5CF6, #000)",
    url: "#",
  },
];

const abhinav = {
  image: "/Abhinav.jpg",
  title: "Abhinav Kumar Pandey",
  subtitle: "Web Coordinator, AnC Council",
  handle: "Abhinav-pandey1729",
  borderColor: "#8B5CF6",
  gradient: "linear-gradient(225deg, #8B5CF6, #000)",
  url: "#",
};

const Contact = () => (
  <div className="container mx-auto py-8 px-4">
    <h1 className="text-3xl font-bold mb-6 text-center">Managers</h1>
    <ChromaGrid items={managers} columns={3} rows={2} />
    <h2 className="text-2xl font-bold mt-12 mb-4 text-center">Designed by</h2>
    <div className="flex justify-center">
      <ChromaGrid items={[abhinav]} columns={1} rows={1} />
    </div>
  </div>
);

export default Contact;
