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
      <form className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap ">
          <div className="w-full md:w-1/2 text-left">
            <label htmlFor="">Your Name</label>
            <input
              type="text"
              name="Name"
              placeholder="Enter Your Name Here..."
              required
              className="border border-gray-300 rounded py-3 px-4 mt-1 w-full"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            <label htmlFor="">Your Email</label>
            <input
              type="email"
              name="Email"
              placeholder="Enter Your Email..."
              required
              className="border border-gray-300 rounded py-3 px-4 w-full mt-1"
            />
          </div>
        </div>
        <div className="my-5 text-left">
          <label htmlFor="">Message</label>
          <textarea
            name="Message"
            required
            placeholder="Enter Your Message Here..."
            className="border border-gray-300 w-full resize-none rounded mt-1 h-48 px-4 py-2"
          ></textarea>
        </div>
        <div className="">
          <button className="bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-2 text-white  rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
