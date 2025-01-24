import React from "react";
import "../Style/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Munnu Hostel</h1>
          <p>Your home away from home. Affordable, comfortable, and convenient.</p>
          <button className="btn-primary">Explore Here</button>
        </div>
        <section className="news-ticker">
        <p>🚨 Breaking News: Munnu Hostel now offers discounted stays! 🚨</p>
      
      </section>
      </section>

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
          <img src="Hostel.png" alt="About Munnu Hostel" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Amenities</h2>
        <div className="features-cards">
          <div className="feature-card">
            <img src="Wifi.png" alt="Free WiFi" />
            <h3>Free WiFi</h3>
            <p>Stay connected with high-speed internet throughout the hostel.</p>
          </div>
          <div className="feature-card">
            <img src="Food.png" alt="Delicious Meals" />
            <h3>Delicious Meals</h3>
            <p>Enjoy freshly prepared, nutritious meals daily.</p>
          </div>
          <div className="feature-card">
            <img src="Security.png" alt="24/7 Security" />
            <h3>24/7 Security</h3>
            <p>Your safety is our top priority, with round-the-clock security.</p>
          </div>
          
          
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Guests Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"The perfect place to stay! Clean, friendly staff, and great food."</p>
            <span>- Ashish sah.</span>
          </div>
          <div className="testimonial-card">
            <p>"Affordable and comfortable. I felt at home throughout my stay."</p>
            <span>- Ram Prasad.</span>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Home;
