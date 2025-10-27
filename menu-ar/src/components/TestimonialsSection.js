import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Broadwalk Customer",
      role: "Broadwalk by Flamboyant",
      image: "🏖️",
      quote:
        "The 3D menu at Boardwalk is incredibly useful! It allows us to see the actual product we're ordering virtually on the table. This unique feature helps us gauge the quality and presentation of the food, enhancing our dining experience. It's a fun and engaging way to order, and I believe it will greatly boost customer satisfaction. Highly recommended!",
      rating: 5,
    },
    {
      name: "Epitome Customer",
      role: "Epitome",
      image: "✨",
      quote:
        "3D menu is a fantastic tech initiative in the dining experience! Seeing the food come alive on the table before ordering was interactive and enjoyable. As a first-time user, I found it engaging and a glimpse into the future of dining. This tech initiative has great potential, and it's already proving to be a useful addition",
      rating: 5,
    },
    {
      name: "Sante Spa Customer",
      role: "Sante Spa",
      image: "🧘",
      quote:
        "It is an amazing addition to the dining experience! Seeing the food in 3D made it easier to choose and more tempting. As a foodie, I found it incredibly helpful and enjoyable.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Customers Say About 3D Menu?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from real customers who have experienced the future of
            dining
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Restaurants</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
            <div className="text-gray-600">Avg. Sales Increase</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Customer Rating</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
