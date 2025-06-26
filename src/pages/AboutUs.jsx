import { FaUsers, FaLightbulb, FaLaptopCode } from "react-icons/fa";

const AboutUs = () => {
  const data = [
    {
      title: "Community Focused",
      description:
        "HobbyHub is built to connect like-minded hobby enthusiasts and encourage collaboration.",
      icon: <FaUsers className="text-4xl text-indigo-600 mx-auto mb-4" />,
    },
    {
      title: "Creative Inspiration",
      description:
        "Whether it’s art, coding, or gardening — explore and grow your hobbies with others.",
      icon: <FaLightbulb className="text-4xl text-yellow-500 mx-auto mb-4" />,
    },
    {
      title: "Tech-Driven",
      description:
        "HobbyHub is powered by cutting-edge technology, ensuring a smooth and seamless experience for all users.",
      icon: <FaLaptopCode className="text-4xl text-pink-500 mx-auto mb-4" />,
    },
  ];
  return (
    <div className="min-h-[calc(100vh-377px)] px-4 py-12 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4">About HobbyHub</h2>
        <p className="text-lg text-gray-500">
          Connecting passionate people through hobbies and creativity.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-2 text-black">{item.title}</h3>
            <p className="text-gray-600 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
