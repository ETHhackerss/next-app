import React from "react";

const NftCertificate = ({ title, image, description }) => {
  return (
    <div>
      <div className="flex group flex-col bg-white border shadow-sm rounded-xl ">
        <div className="p-4 md:p-5">
          <div className="flex flex-row justify-between">
            <h3 className="text-lg font-bold text-gray-800 ">{title}</h3>
            <button
              type="button"
              className=" text-white bg-gray-800 hidden group-hover:block hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 transition-opacity mr-2  "
            >
              Delete
            </button>
          </div>
          <img
            className="w-65 h-40 mt-5 rounded-t-xl rounded-b-xl  "
            src={image}
            alt={description}
          />
        </div>
      </div>
    </div>
  );
};

export default NftCertificate;
