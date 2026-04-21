const WhyChooseUs = () => {
  return (
    <section className="max-w-1920 mx-auto py-20 bg-slate-900">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto px-6">
        <p className="flex-1 text-[42px] font-bold text-white text-center md:text-left">
          Join Our Newsletter
        </p>
        <div className="flex flex-col lg:flex-row flex-1 justify-end gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg bg-gray-700 text-white outline-none"
          />

          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
