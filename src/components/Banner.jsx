const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-100 via-blue-50 to-pink-100">
      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 leading-tight mb-4">
            Discover Your Passion with <br className="hidden md:block" />
            <span className="text-orange-500">HobbyHub</span>
          </h1>
          <p className="text-gray-700 text-lg mb-6 max-w-xl">
            Join groups, meet like-minded people, and grow your skills together — from coding to cooking, we’ve got your passion covered.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition-all">
            🚀 Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src="https://i.postimg.cc/d3KCDNcP/Adobe-Express-file.png"
            alt="Hobby illustration"
            className="w-full max-w-md mx-auto drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
