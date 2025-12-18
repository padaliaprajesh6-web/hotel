import "../styles/home.css";

function Home() {
  const highlights = [
    { title: "Deluxe Rooms", img: "https://picsum.photos/300/200?" },
    { title: "Sea View", img: "https://picsum.photos/300/200?random=1" },
    { title: "Swimming Pool", img: "https://picsum.photos/300/200?random=3" },
    { title: "Spa & Wellness", img: "https://picsum.photos/300/200?random=2" },
    { title: "Restaurant & Bar", img: "https://picsum.photos/300/200?random=6" },
    { title: "Conference Hall", img: "https://picsum.photos/300/200?random=5" },
  ];

  return (
    <div className="home-page">

      {/* Slider */}
      <div className="slider">
        <div className="slide" style={{ backgroundImage: "url('https://picsum.photos/seed/picsum/200/')" }}>
          <h1>Luxury Stay in Mumbai</h1>
        </div>
      </div>

      {/* Intro */}
      <div className="home-intro">
        <h2>Welcome to PADALIA PLACE HOTEL</h2>
        <p>
          Experience unparalleled luxury, comfort, and world-class hospitality in
          the heart of Mumbai. Whether you are here for business or leisure,
          our hotel provides everything you need for a memorable stay.
        </p>
      </div>

      {/* Highlights */}
      <h2>Our Highlights</h2>
      <div className="card-container">
        {highlights.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
