import "../styles/about.css";

function AboutUs() {
  return (
    <div className="about-page">
      <h1 className="about-title">About Grand Palace Hotel</h1>

      <div className="about-intro">
        <img
          src="https://picsum.photos/600/350?random=1"
          alt="Hotel Lobby"
        />
        <div className="about-text">
          <p>
            Welcome to Grand Palace Hotel, a 5-star luxury hotel in the heart
            of Mumbai. Since 1998, we have been committed to providing world-class
            hospitality, comfort, and unforgettable experiences to our guests.
          </p>
          <p>
            Our hotel combines modern amenities with timeless elegance. Each
            room and suite is designed for relaxation, offering breathtaking views,
            high-speed internet, and premium facilities.
          </p>
        </div>
      </div>

      <div className="about-history">
        <h2>Our History</h2>
        <p>
          Established over 25 years ago, Grand Palace Hotel started as a boutique
          property and has grown into one of Mumbai's most trusted luxury destinations.
          We pride ourselves on tradition, excellence, and attention to every detail.
        </p>
      </div>

      <div className="about-mission">
        <h2>Our Mission & Values</h2>
        <ul>
          <li>Deliver exceptional hospitality and memorable experiences</li>
          <li>Maintain the highest standards of comfort and cleanliness</li>
          <li>Provide personalized services tailored to each guest</li>
          <li>Foster sustainability and community engagement</li>
        </ul>
      </div>

      <div className="about-gallery">
        <h2>Gallery</h2>
        <div className="gallery-images">
          <img src="https://picsum.photos/300/200?random=2" alt="Hotel Room" />
          <img src="https://picsum.photos/300/200?random=3" alt="Hotel Pool" />
          <img src="https://picsum.photos/300/200?random=4" alt="Hotel Restaurant" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
