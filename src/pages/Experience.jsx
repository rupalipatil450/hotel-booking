import React from "react";

const experiences = [
  {
    title: "Mountain Adventures",
    desc: "Explore breathtaking mountain treks and scenic views.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_3GAQnB2r9h6zq_Ax3vFQ8Fmliqc_VjJm6w&s",
  },
  {
    title: "Beach Escapes",
    desc: "Relax at the most beautiful beaches around the world.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq6DCwJg2UTFAh6uuLXc-Yqvb_cIbnHwDXMw&s",
  },
  {
    title: "City Tours",
    desc: "Discover vibrant cities with guided experiences.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl4X3CTflmI29jV83Izd7AAiBfzx4395KTog&s",
  },
];

const Experience = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-20 bg-gray-200">
      {/* Heading */}
      <h1 className="font-playfair text-3xl md:text-5xl font-bold text-center">
        Explore Experiences
      </h1>
      <p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto">
        Discover curated experiences designed to make your journey
        unforgettable.
      </p>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
          >
            <div className="overflow-hidden">
              <img
                src={exp.img}
                alt={exp.title}
                className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-semibold">{exp.title}</h2>
              <p className="text-gray-500 text-sm mt-2">{exp.desc}</p>

              <button className="mt-4 text-primary font-medium hover:underline">
                Explore →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center bg-primary text-white rounded-xl py-10 px-6">
        <h2 className="font-playfair text-2xl md:text-4xl font-bold">
          Ready for your next adventure?
        </h2>
        <p className="mt-3 text-sm md:text-base">
          Book unique experiences and create unforgettable memories.
        </p>
        <button className="mt-5 bg-black text-white px-6 py-2 rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Experience;
