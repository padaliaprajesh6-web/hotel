import "../styles/service.css";

function Service() {
  const services = [
    {
      title: "24x7 Room Service",
      description: "Round-the-clock room service to satisfy your cravings anytime.",
      icon: "🛎️",
    },
    {
      title: "Free Wi-Fi",
      description: "High-speed internet throughout the hotel premises.",
      icon: "📶",
    },
    {
      title: "Airport Pickup",
      description: "Comfortable and timely airport transfers on request.",
      icon: "✈️",
    },
    {
      title: "Spa & Gym",
      description: "Relax your body at the spa or keep fit at our gym.",
      icon: "💆‍♂️",
    },
    {
      title: "Swimming Pool",
      description: "Indoor and outdoor pools to unwind and relax.",
      icon: "🏊‍♂️",
    },
    {
      title: "Restaurant & Bar",
      description: "Enjoy multi-cuisine delicacies and fine drinks.",
      icon: "🍽️",
    },
    {
      title: "Conference Hall",
      description: "Fully-equipped hall for business meetings and events.",
      icon: "🏢",
    },
    {
      title: "Laundry Service",
      description: "Quick and reliable laundry services for guests.",
      icon: "🧺",
    },
  ];

  return (
    <div className="service-page">
      <h1 className="service-title">Our Hotel Services</h1>
      <p className="service-subtitle">
        We offer a wide range of services to make your stay comfortable and
        memorable.
      </p>

      <div className="service-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
