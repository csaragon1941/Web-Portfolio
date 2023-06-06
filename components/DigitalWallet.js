import React from "react";
import userData from "@constants/data";

export default function wallet() {
  return (
    <section className="bg-[#F4F3EE] dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto h-48 bg-[#F4F3EE] dark:bg-[#1F1F1F]">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left flex justify-center items-center">
          Digital Wallet
        </h1>
      </div>
      <div className="bg-[#F4F3EE] dark:bg-[#1F1F1F] -mt-4">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-semibold mb-4">Title</h2>
          <p className="text-lg text-gray-800 dark:text-[#FFFCF2] mb-4">
            Description
          </p>
          <p className="text-lg text-gray-800 dark:text-[#FFFCF2] mb-4">
          </p>
        </div>
      </div>
    </section>
  );
}
