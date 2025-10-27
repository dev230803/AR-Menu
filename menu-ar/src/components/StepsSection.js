import React, { useState, useRef, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const StepsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);
  const playAttemptedRef = useRef(false);

  // Safe video play function with error handling
  const playVideoSafely = async (videoElement) => {
    if (!videoElement) return;

    try {
      // Check if play is allowed
      const playPromise = videoElement.play();

      if (playPromise !== undefined) {
        await playPromise
          .then(() => {
            // Video started playing successfully
            console.log("Video autoplayed successfully");
          })
          .catch((error) => {
            // Autoplay was prevented
            console.log("Autoplay prevented:", error.name);
            // Don't throw error - this is expected behavior
          });
      }
    } catch (error) {
      // Silently handle any errors without showing to user
      console.log("Video play error handled silently:", error.name);
    }
  };

  // Reset video to beginning when it becomes active
  useEffect(() => {
    const currentVideo = videoRefs.current[activeIndex];

    if (currentVideo && !currentVideo.paused) {
      // Only play if video is not already playing
      return;
    }

    if (currentVideo) {
      currentVideo.currentTime = 0;

      // Only attempt autoplay once per video
      if (!playAttemptedRef.current) {
        playVideoSafely(currentVideo);
        playAttemptedRef.current = true;

        // Reset flag after a delay
        setTimeout(() => {
          playAttemptedRef.current = false;
        }, 100);
      }
    }
  }, [activeIndex]);

  const videos = [
    {
      id: 1,
      title: "Walk into the Future of Dining",
      src: "/carousel/1 Walk into the future of Dining.mp4",
      description:
        "Experience the next generation of dining with immersive 3D technology.",
    },
    {
      id: 2,
      title: "Scan to Discover Your Meal in 3D",
      src: "/carousel/2 Scan to Discover Your Meal in 3D.mp4",
      description:
        "Simply scan the QR code to unlock a world of 3D food visualization.",
    },
    {
      id: 3,
      title: "Browse the Digital Menu Instantly",
      src: "/carousel/3 Browse the Digital Menu Instantly.mp4",
      description: "Navigate through our interactive digital menu with ease.",
    },
    {
      id: 4,
      title: "Know Your Dish Before You Order",
      src: "/carousel/4 Know Your Dish Before You Order.mp4",
      description: "See every detail of your meal before making your choice.",
    },
    {
      id: 5,
      title: "Experience Your Meal Come to Life",
      src: "/carousel/5 Experience Your Meal Come to Life.mp4",
      description: "Watch as your food comes to life in stunning 3D detail.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Redefine the Way Your Guests Dine — in 5 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of dining through our interactive video
            demonstrations. See how easy it is to transform your restaurant
            experience.
          </p>
        </div>

        {/* Video Carousel */}
        <div className="max-w-4xl mx-auto">
          <Carousel
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            interval={2500}
            fade={true}
            indicators={true}
            controls={false}
            autoPlay={true}
            pause={false}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            {videos.map((video, index) => (
              <Carousel.Item key={video.id}>
                <div className="relative bg-black min-h-[400px] flex items-center justify-center">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="w-full h-auto max-h-96 object-cover"
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onError={(e) => {
                      console.log("Video load error handled silently");
                      // Prevent error from propagating
                      e.preventDefault();
                    }}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Text Overlay */}
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-200">{video.description}</p>
                  </div> */}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
