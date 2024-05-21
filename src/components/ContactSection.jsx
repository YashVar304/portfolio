import React from "react";

function ContactSection() {
  return (
    <section className=" text-white py-16 px-8" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex-1 ">
            <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
            <p className="mb-4">
              Feel free to reach out to me through any of the following ways:
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:varshneyyash304@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  varshneyyash304@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium">Phone:</span>{" "}
                <a
                  href="tel:+918126838409"
                  className="text-blue-400 hover:underline"
                >
                  +91 8126838409
                </a>
              </li>
              <li>
                <span className="font-medium">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/YashVar304"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/yashvar304/
                </a>
              </li>
              <li>
                <span className="font-medium">GitHub:</span>{" "}
                <a
                  href="https://github.com/YashVar304"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/yashvar304/
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
