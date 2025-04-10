import React, { useState, useEffect } from "react";
import "../Style/Home.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselImages = [
    {
      src: "image3.png",
      caption: "Comfortable Rooms for a Relaxing Stay",
    },
    { src: "image2.png", caption: "Enjoy Delicious and Nutritious Meals",},
    { src: "hostel.jpg", caption: "A Friendly Community You'll Love", },
  ];

  const latestNews = [
    "🌟 Exclusive Deal: Stay for 5 nights, pay for 4!",
    "🍳 Breakfast is now included with all bookings.",
    "🛏 Private rooms now available for solo travelers!",
    "🎨 Art and craft workshop this Sunday at 4 PM.",
    "📚 Study zones upgraded with high-speed WiFi.",
    "🎶 Join our weekly karaoke nights every Thursday!",
    "🚴 Bike rentals are now available for exploring the area.",
    "🎂 Celebrate your special day with us and enjoy a free dinner!",
    "🧹 Deep cleaning scheduled for all rooms this weekend.",
    "🔥 Bonfire night: Join us for marshmallows and stories on Saturday!",
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 2000); // Change slide every 10 seconds
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="carousel-news-container">
          <div className="carousel">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <img src={image.src} alt={`Slide ${index + 1}`} />

                <div className="carousel-caption">
                  <h1>Welcome To Munnu Hostel</h1>
                  <p>{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="latest-news">
            <h3>Notice and News</h3>
            <div className="news-container">
              <div className="news-scroller">
                {latestNews.map((news, index) => (
                  <div className="news-item" key={index}>
                    {news}
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2>About Munnu Hostel</h2>
          <p>
            Munnu Hostel offers a unique blend of comfort and affordability.
            With spacious rooms, delicious meals, and friendly staff, we ensure
            that your stay is unforgettable.
          </p>
          <button className="btn-secondary">Learn More</button>
        </div>
        <div className="about-image">
          <img src="hostel.jpg" alt="About Munnu Hostel" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Amenities</h2>
        <div className="features-cards">
          <div className="feature-card">
            <img src="Wifi.png" alt="Free WiFi" />
            <h3>Free WiFi</h3>
            <p>
              Stay connected with high-speed internet throughout the hostel.
            </p>
          </div>
          <div className="feature-card">
            <img src="Food.png" alt="Delicious Meals" />
            <h3>Delicious Meals</h3>
            <p>Enjoy freshly prepared, nutritious meals daily.</p>
          </div>
          <div className="feature-card">
            <img src="Security.png" alt="24/7 Security" />
            <h3>24/7 Security</h3>
            <p>
              Your safety is our top priority, with round-the-clock security.
            </p>
          </div>
          
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Guests Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              "The perfect place to stay! Clean, friendly staff, and great
              food."
            </p>
            <span>- Ashish Sah</span>
          </div>
          <div className="testimonial-card">
            <p>
              "Affordable and comfortable. I felt at home throughout my stay."
            </p>
            <span>- Ram Prasad</span>
          </div>
          <div className="testimonial-card">
            <p>
              "Affordable and comfortable. I felt at home throughout my stay."
            </p>
            <span>- Ram Prasad</span>
          </div>
          <div className="testimonial-card">
            <p>
              "Affordable and comfortable. I felt at home throughout my stay."
            </p>
            <span>- Ram Prasad</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
