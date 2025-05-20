const TestimonialsSection = () => {
  return (
    <div className="my-12 p-8 bg-gray-100 rounded-xl text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        What Our Members Say
      </h2>
      <div className="grid grid-cols-1
      md:grid-cols-4 items-center gap-8">
        <div className="bg-white shadow-lg p-6 roundemax-d-lg w-72">
          <p className="italic text-gray-600">
            “I joined a photography group here and it completely reignited my passion. I’ve made friends for life!”
          </p>
          <p className="font-semibold mt-4 text-blue-700">— Anika R.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-72">
          <p className="italic text-gray-600">
            “HobbyHub helped me stay active by joining a local hiking club. Every weekend is now an adventure!”
          </p>
          <p className="font-semibold mt-4 text-blue-700">— Mark D.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-72">
          <p className="italic text-gray-600">
            “I never thought I’d love cooking so much. Joining the Culinary Nights group has changed how I see food.”
          </p>
          <p className="font-semibold mt-4 text-blue-700">— Sarah K.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-72">
          <p className="italic text-gray-600">
            “Being part of the painting circle has been therapeutic. I’ve learned new techniques and met inspiring people.”
          </p>
          <p className="font-semibold mt-4 text-blue-700">— Leo M.</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
