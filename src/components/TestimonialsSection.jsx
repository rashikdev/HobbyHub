import Marquee from "react-fast-marquee";

const TestimonialsSection = () => {
  return (
    <div className="my-12 md:p-4 p-2 bg-base-300 rounded-xl text-center">
      <h2 className="md:text-3xl text-xl font-bold  mb-8">What Our Members Say</h2>
      <div className="rounded-md overflow-hidden">
        <Marquee pauseOnHover={true}>
          <div className="bg-gradient-to-br from-orange-300  to-green-400 shadow-lg p-6 rounded-lg md:w-72 w-70 mr-3 skew-x-6">
            <p className="italic text-gray-700">
              “I joined a photography group here and it completely reignited my
              passion. I’ve made friends for life!”
            </p>
            <p className="font-semibold mt-4 text-blue-700">— Anika R.</p>
          </div>
          <div className="bg-gradient-to-br from-red-400  to-red-200 shadow-lg p-6 rounded-lg md:w-72 w-70 mr-3 skew-x-6">
            <p className="italic text-gray-700">
              “HobbyHub helped me stay active by joining a local hiking club.
              Every weekend is now an adventure!”
            </p>
            <p className="font-semibold mt-4 text-blue-700">— Mark D.</p>
          </div>
          <div className="bg-gradient-to-br from-orange-300  to-indigo-400 shadow-lg p-6 rounded-lg md:w-72 w-70 mr-3 skew-x-6">
            <p className="italic text-gray-700">
              “I never thought I’d love cooking so much. Joining the Culinary
              Nights group has changed how I see food.”
            </p>
            <p className="font-semibold mt-4 text-blue-700">— Sarah K.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-300  to-rose-500 shadow-lg p-6 rounded-lg md:w-72 w-70 mr-3 skew-x-6">
            <p className="italic text-gray-700">
              “Being part of the painting circle has been therapeutic. I’ve
              learned new techniques and met inspiring people.”
            </p>
            <p className="font-semibold mt-4 text-blue-700">— Leo M.</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-500  to-green-400 shadow-lg p-6 rounded-lg md:w-72 w-70 mr-3 skew-x-6">
            <p className="italic text-gray-700">
              “HobbyHub helped me stay active by joining a local hiking club.
              Every weekend is now an adventure!”
            </p>
            <p className="font-semibold mt-4 text-blue-700">— Md. Rashik</p>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TestimonialsSection;
