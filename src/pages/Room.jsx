import "../styles/room.css";

function Room() {
  return (
    <div className="room-page">
      <h1 className="room-title">Our Rooms</h1>
      <p className="room-subtitle">
        Choose from a range of comfortable and luxurious rooms designed for
        relaxation and convenience.
      </p>

      <div className="room-container">

        <div className="room-card">
          <img src="https://picsum.photos/400/250?random=1" alt="Deluxe Room" />
          <h3>Deluxe Room</h3>
          <p>Spacious AC room with modern interiors, king-size bed, free Wi-Fi, and city view.</p>
          <p className="price">₹4,999 / night</p>
        </div>

        <div className="room-card">
          <img src="https://picsum.photos/400/250?random=2" alt="Luxury Suite" />
          <h3>Luxury Suite</h3>
          <p>Premium suite with separate living area, sea view balcony, minibar, and bathtub.</p>
          <p className="price">₹8,999 / night</p>
        </div>

        <div className="room-card">
          <img src="https://picsum.photos/400/250?random=3" alt="Standard Room" />
          <h3>Standard Room</h3>
          <p>Comfortable non-AC room ideal for budget travelers with essential amenities.</p>
          <p className="price">₹2,999 / night</p>
        </div>

        <div className="room-card">
          <img src="https://picsum.photos/400/250?random=4" alt="Executive Room" />
          <h3>Executive Room</h3>
          <p>AC room with work desk, high-speed internet, and city skyline views.</p>
          <p className="price">₹5,999 / night</p>
        </div>

        <div className="room-card">
          <img src="https://picsum.photos/400/250?random=5" alt="Family Suite" />
          <h3>Family Suite</h3>
          <p>Spacious suite with 2 bedrooms, living area, and kid-friendly amenities.</p>
          <p className="price">₹9,499 / night</p>
        </div>

        <div className="room-card">
          <img src="https://picsum.photos/400/250?random=6" alt="Presidential Suite" />
          <h3>Presidential Suite</h3>
          <p>Top-tier luxury suite with private terrace, Jacuzzi, and premium services.</p>
          <p className="price">₹15,999 / night</p>
        </div>
        

      </div>
    </div>
  );
}

export default Room;
