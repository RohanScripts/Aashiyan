const Contact = () => {
  return (
    <div className="bg-white w-full overflow-hidden pb-10">
      <h1 className="text-center text-2xl font-bold">
        Get in Touch{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          With Us
        </span>
      </h1>
      <p className="text-center text-sm text-gray-700">
        Ready to Make a Move? Let's Build Your Future Together..
      </p>
      <form>
        <div>
          <div className="w-full md:w-1/2 text-left">
            <label htmlFor="">Your Name</label>
            <input
              type="text"
              name="Name"
              placeholder="Enter Your Name Here..."
              required
              className="border border-gray-300 rounded py-3 px-4 mt-2 w-full"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <label htmlFor="">Your Email</label>
            <input
              type="email"
              name="Email"
              placeholder="Enter Your Email..."
              required
              className="border border-gray-300 rounded py-3 px-4 w-full mt-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
