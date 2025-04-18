"use client";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "542e1d69-28fd-410b-996a-ffb09a733b08");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-6 sm:px-[12%] py-10 scroll-mt-20 bg-center bg-cover"
      style={{
        backgroundImage: `url('/footer-bg-collectRoutesUsingEdgeRuntime.png')`,
      }}
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo">
        Get in touch
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form.
      </p>

      <form
        onSubmit={onSubmit}
        className="w-full max-w-2xl mx-auto"
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>

        <textarea
          name="message"
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        />

        <button
          type="submit"
          className="py-3 px-8 w-full sm:w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto
          hover:bg-black duration-500 cursor-pointer"
        >
          Submit Now
        </button>

        <p className="text-center mt-4 text-gray-600">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
