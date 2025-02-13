import React from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import bgimg from "/assets/bg-img.jpg";

const WhyChooseUs = [
  {
    id: "1a",
    img: "/assets/fee_page_img.jpg",
    text: "Affordable Fees",
  },
  {
    id: "1b",
    img: "/assets/global.webp",
    text: "Global Exposure",
  },
  {
    id: "1c",
    img: "/assets/university.avif",
    text: "Top Universities",
  },
  {
    id: "1d",
    img: "/assets/easy-add.jpg",
    text: "Easy Admission",
  },
]
const Destinations = [
  {
    id: "2a",
    img: "/assets/russia.jpg",
    text: "Russia",
  },
  {
    id: "2b",
    img: "/assets/uzbekistan.jpg",
    text: "Uzbekistan",
  },
  {
    id: "2c",
    img: "/assets/kazakhstan.jpg",
    text: "kazakhstan",
  },
  {
    id: "2d",
    img: "/assets/Philippines.jpg",
    text: "Philippines",
  },
  {
    id: "2e",
    img: "/assets/Georgia.webp",
    text: "Georgia",
  },
  {
    id: "2f",
    img: "/assets/Kyrgyztan.jpg",
    text: "Kyrgyztan",
  },
  {
    id: "2g",
    img: "/assets/Egypt.jpg",
    text: "Egypt",
  },
]

const LandingPage = () => {
  const navigate = useNavigate()

  return (

    <div className="font-sans">
      <img src={bgimg} alt="bgimg" className="z-0 absolute blur-sm md:w-full h-screen" />
      <section className="z-10 relative flex flex-col flex-wrap justify-center items-center h-screen text-white text-center">
        <h1 className="text-shadow font-bold text-6xl md:text-7xl">Study MBBS Abroad</h1>
        <p className="text-shadow mt-4 text-xl">Affordable Fees | Top Universities | Easy Admission</p>
        <button onClick={() => navigate("/form")} className="inline-block relative bg-green-500 hover:bg-green-600 mt-3 px-6 py-3 rounded-lg overflow-hidden font-bold text-white">
          Apply Now
        </button>
      </section>
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-bold text-blue-600 text-3xl">Admission Process</h2>
          <p className="mt-2 text-gray-600">Follow these simple steps to secure your MBBS admission abroad.</p>
        </div>
        <div className="gap-6 grid md:grid-cols-2 mx-auto mt-8 max-w-4xl">
          <div className="bg-white shadow-md p-6 border border-gray-200 rounded-xl">
            <h3 className="font-semibold text-blue-600 text-lg">Step 1: Check Eligibility</h3>
            <p className="mt-2 text-gray-500">Ensure you meet the university’s academic and entrance requirements.</p>
          </div>

          <div className="bg-white shadow-md p-6 border border-gray-200 rounded-xl">
            <h3 className="font-semibold text-blue-600 text-lg">Step 2: Application Submission</h3>
            <p className="mt-2 text-gray-500">Fill out the online application and submit necessary documents.</p>
          </div>

          <div className="bg-white shadow-md p-6 border border-gray-200 rounded-xl">
            <h3 className="font-semibold text-blue-600 text-lg">Step 3: Receive Admission Letter</h3>
            <p className="mt-2 text-gray-500">Get the official admission letter from the university.</p>
          </div>

          <div className="bg-white shadow-md p-6 border border-gray-200 rounded-xl">
            <h3 className="font-semibold text-blue-600 text-lg">Step 4: Visa & Travel Arrangements</h3>
            <p className="mt-2 text-gray-500">Apply for a student visa and book your travel tickets.</p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl text-center">
          <h2 className="font-bold text-blue-600 text-3xl">Eligibility Criteria</h2>
          <p className="mt-2 text-gray-600">Basic requirements to study MBBS abroad:</p>
        </div>

        <div className="gap-4 grid md:grid-cols-3 mx-auto mt-6 max-w-4xl">
          <div className="bg-white shadow-md p-4 border border-gray-200 rounded-xl text-center">
            <h3 className="font-semibold text-blue-600 text-lg">Age Requirement</h3>
            <p className="mt-2 text-gray-500">Minimum 17 years old at the time of admission.</p>
          </div>

          <div className="bg-white shadow-md p-4 border border-gray-200 rounded-xl text-center">
            <h3 className="font-semibold text-blue-600 text-lg">Academic Qualification</h3>
            <p className="mt-2 text-gray-500">Completed 10+2 with Physics, Chemistry, and Biology (50% marks).</p>
          </div>

          <div className="bg-white shadow-md p-4 border border-gray-200 rounded-xl text-center">
            <h3 className="font-semibold text-blue-600 text-lg">NEET Qualification</h3>
            <p className="mt-2 text-gray-500">NEET exam is mandatory for Indian students.</p>
          </div>
        </div>
      </section>
      <section className="px-6 py-12 text-center">
        <h2 className="font-bold text-white text-2xl">Why Choose Us?</h2>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-4 mt-6">
          {
            WhyChooseUs.map((data) => (
              <div key={data.id} className="bg-gray-600 shadow-md p-6 rounded-lg">
                <img src={data.img} alt={data.text} className="w-full h-64" />
                <h3 className="p-6 font-semibold text-white text-2xl">{data.text}</h3>
              </div>
            ))
          }
        </div>
      </section>
      <section className="bg-gray-700 px-6 py-12 text-center">
        <h2 className="font-bold text-white text-2xl">Top Destinations</h2>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-4 mt-6">
          {Destinations.map((data) => (
            <div key={data.id} className="bg-gray-600 shadow-md p-6 rounded-lg">
              <img src={data.img} alt={data.text} className="w-full h-64" />
              <h3 className="p-6 font-semibold text-white text-2xl">{data.text}</h3>
            </div>
          ))}
        </div>
      </section>
      <div>
        <Form />
      </div>
      <footer className="bg-gray-900 py-6 text-white text-center">
        <p>&copy; 2025 MBBS Abroad. All rights reserved.</p>
      </footer>
    </div >
  );
};

export default LandingPage;
