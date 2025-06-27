import Marquee from "react-fast-marquee";

const TestimonialsSection = () => {
  return (
    <div className="my-12 md:py-10 md:px-4 p-2 rounded-xl text-center">
      <h2 className="md:text-3xl text-xl font-semibold text-[#1307fd] mb-8">What Our Members Say</h2>
      <div className="rounded-md overflow-hidden" >
        <Marquee pauseOnHover={true}>
          <div className="border-l-2 border-r-2 border-indigo-500 shadow-lg p-6 md:h-50 rounded-lg md:w-72 w-70 mr-3 md:mr-6 skew-x-6">
            <p className="italic text-gray-700">
              “I joined a photography group here and it completely reignited my
              passion. I’ve made friends for life!”
            </p>
            <p className="font-semibold mt-4 text-blue-700">— Anika R.</p>
          </div>
          <div className="border-l-2 border-r-2 border-indigo-500 shadow-lg p-6 md:h-50 rounded-lg md:w-72 w-70 mr-3 md:mr-6 skew-x-6">
            <p className="italic text-gray-700">
              “HobbyHub helped me stay active by joining a local hiking club.
              Every weekend is now an adventure!”
            </p>
            <p className="font-semibold mt-4 text-blue-700">— Mark D.</p>
          </div>
          <div className="border-l-2 border-r-2 border-indigo-500 shadow-lg p-6 md:h-50 rounded-lg md:w-72 w-70 mr-3 md:mr-6 skew-x-6">
            <p className="italic text-gray-700">
              “I never thought I’d love cooking so much. Joining the Culinary
              Nights group has changed how I see food.”
            </p>
            <p className="font-semibold mt-4 text-blue-700">— Sarah K.</p>
          </div>
          <div className="border-l-2 border-r-2 border-indigo-500 shadow-lg p-6 md:h-50 rounded-lg md:w-72 w-70 mr-3 md:mr-6 skew-x-6">
            <p className="italic text-gray-700">
              “Being part of the painting circle has been therapeutic. I’ve
              learned new techniques and met inspiring people.”
            </p>
            <p className="font-semibold mt-4 text-blue-700">— Leo M.</p>
          </div>
          <div className="border-l-2 border-r-2 border-indigo-500 shadow-lg p-6 md:h-50 rounded-lg md:w-72 w-70 mr-3 md:mr-6 skew-x-6">
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
