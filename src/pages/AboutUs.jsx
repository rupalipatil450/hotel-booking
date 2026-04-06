import React from "react";

const AboutUs = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-20 bg-gray-200">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-playfair text-3xl md:text-5xl font-bold">
          About Us
        </h1>
        <p className="text-gray-500 mt-4">
          We are passionate about creating seamless hotel booking experiences
          and unforgettable journeys for travelers around the world.
        </p>
      </div>

      {/* Image + Content */}
      <div className="grid md:grid-cols-2 gap-10 mt-16 items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkKyzDe1tFFHbq3lRJcvSPOisMNt7_aYhTGg&s"
          alt="about"
          className="rounded-xl shadow-md"
        />

        <div>
          <h2 className="font-playfair text-2xl md:text-3xl font-semibold">
            Our Mission
          </h2>
          <p className="text-gray-500 mt-3">
            Our mission is to make travel easy, affordable, and enjoyable.
            Whether you're booking a luxury stay or a budget room, we ensure
            quality and comfort.
          </p>

          <h2 className="font-playfair text-2xl md:text-3xl font-semibold mt-8">
            Why Choose Us?
          </h2>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>✔ Wide range of hotels</li>
            <li>✔ Easy booking process</li>
            <li>✔ Trusted by thousands</li>
            <li>✔ 24/7 support</li>
          </ul>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center">
        <div>
          <h3 className="text-3xl font-bold text-primary">10K+</h3>
          <p className="text-gray-500">Happy Customers</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-primary">500+</h3>
          <p className="text-gray-500">Hotels</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-primary">100+</h3>
          <p className="text-gray-500">Destinations</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-primary">24/7</h3>
          <p className="text-gray-500">Support</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
