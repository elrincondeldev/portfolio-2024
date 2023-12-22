import React from "react";
import Image from "next/image";
import { useValueStore } from "@/store/valueStore";

function Contact() {

  const {setContactState} = useValueStore((state) => ({
    setContactState: state.setContactState,
  }))

  return (
    <>
      <form
        action="https://formspree.io/f/mbjbaoyk"
        method="POST"
        className="md:flex hidden flex-col items-center bg-[#333333] min-w-[500px] max-w-[700px] rounded-3xl border-4"
      >
        <div className="flex gap-10 bg-black p-3 w-full rounded-t-3xl">
          <Image
            className="rounded-[100px]"
            src="/image-profile-2.jpeg"
            height={60}
            width={60}
            alt="Profile image"
          />
          <div>
            <h1 className="acorn-bold text-2xl">Jose Ramón Montes</h1>
            <h2 className="acorn-bold text-xl">Ask me a question.</h2>
          </div>
        </div>
        <div className="flex flex-col gap-8 py-16 w-full px-5">
          <label className="flex flex-col montserrat font-bold">
            Email:
            <input
              type="email"
              name="email"
              placeholder="Rachel@domain.com"
              className="py-3 px-2 text-black"
            />
          </label>
          <label className="flex flex-col montserrat font-bold">
            Message:
            <textarea
              name="message"
              placeholder="Type your query here..."
              className="w-full h-[100px] py-3 px-2 text-black"
            ></textarea>
          </label>
          <div className=" flex justify-between w-full">
            <button
              type="submit"
              className="bg-[#6088EE] py-3 px-5 rounded-md w-1/2 montserrat font-bold"
            >
              Send my message
            </button>
            <button type="button" onClick={() => setContactState(false)} className="bg-[#DB3232] py-3 px-5 rounded-md montserrat font-bold w-[30%]">
              Close
            </button>
          </div>
        </div>
      </form>
      <form
        action="https://formspree.io/f/mbjbaoyk"
        method="POST"
        className="flex md:hidden flex-col items-center bg-[#333333] rounded-3xl border-4"
      >
        <div className="flex gap-10 bg-black p-3 w-full rounded-t-3xl">
          <Image
            className="rounded-[100px]"
            src="/image-profile-2.jpeg"
            height={60}
            width={60}
            alt="Profile image"
          />
          <div>
            <h1 className="acorn-bold text-2xl">Jose Ramón Montes</h1>
            <h2 className="acorn-bold text-xl">Ask me a question.</h2>
          </div>
        </div>
        <div className="flex flex-col gap-8 py-16 w-full px-5">
          <label className="flex flex-col montserrat font-bold">
            Email:
            <input
              type="email"
              name="email"
              placeholder="Rachel@domain.com"
              className="py-3 px-2 text-black"
            />
          </label>
          <label className="flex flex-col montserrat font-bold">
            Message:
            <textarea
              name="message"
              placeholder="Type your query here..."
              className="w-full h-[100px] py-3 px-2 text-black"
            ></textarea>
          </label>
          <div className=" flex justify-between w-full">
            <button
              type="submit"
              className="bg-[#6088EE] py-3 px-5 rounded-md w-1/2 montserrat font-bold"
            >
              Send my message
            </button>
            <button type="button" onClick={() => setContactState(false)} className="bg-[#DB3232] py-3 px-5 rounded-md montserrat font-bold w-[30%]">
              Close
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
