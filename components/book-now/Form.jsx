"use client";
import React, { useState } from "react";
import DropDownMenu from "./DropDownMenu";

const Form = () => {
  const [formdata, setFormData] = useState({
    tours: [],
    trekkings: [],
    adventures: [],
    nationalparks: [],
    hiking: [],
    totalPeople: "1",
    fullname: "",
    email: "",
    phone: "",
  });

  const arrays = "tours trekkings adventures nationalparks hiking".split(" ");

  const totalPrice = (elem) => {
    let sum = 0;

    arrays.forEach((key) => {
      const items = elem[key] || [];
      items.forEach((obj) => {
        sum += obj.price || 0;
      });
    });

    console.log("Total Price:", sum);
    return sum * elem?.totalPeople;
  };

  const append = (type, elem) => {
    setFormData((prev) => ({ ...prev, [type]: [...prev?.[type], elem] }));
  };

  const remove = (type, elem) => {
    setFormData((prev) => ({
      ...prev,
      [type]: prev?.[type]?.filter((li) => li?._id !== elem?._id),
    }));
  };

  return (
    <form className="w-full relative max-w-5xl mx-auto p-4 bg-white/50 backdrop-blur-sm min-h-[calc(100vh-8rem)]  rounded-xl shadow-xl">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3">
        <div className="w-full p-8 flex flex-col gap-4 bg-white/80 rounded-xl justify-center">
          <h1 className="text-2xl text-cyan-700">Ready to Explore Nepal?</h1>
          <p>
            Secure your spot for the trip of a lifetime. Complete the given
            form. Select what you want and click send!
          </p>
        </div>

        {/* tours */}
        <div className="w-full p-4 flex flex-col gap-4 bg-white/80 rounded-xl">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-lg">Select Tours</p>
            <span className="text-cyan-700 text-sm">
              {formdata?.tours?.length || 0} selected
            </span>
          </div>

          <DropDownMenu
            url={`${process.env.NEXT_PUBLIC_SERVER}/api/v1/client/get-contents?type=tours&page=:page`}
            append={(elem) => {
              append("tours", elem);
            }}
            remove={(elem) => {
              remove("tours", elem);
            }}
          />
        </div>

        {/* trekkings  */}
        <div className="w-full p-4 flex flex-col gap-4 bg-white/80 rounded-xl">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-lg">Select Trekking</p>
            <span className="text-cyan-700 text-sm">
              {formdata?.trekkings?.length || 0} selected
            </span>
          </div>

          <DropDownMenu
            url={`${process.env.NEXT_PUBLIC_SERVER}/api/v1/client/get-contents?type=trekkings&page=:page`}
            append={(elem) => {
              append("trekkings", elem);
            }}
            remove={(elem) => {
              remove("trekkings", elem);
            }}
          />
        </div>

        {/* adventures */}
        <div className="w-full p-4 flex flex-col gap-4 bg-white/80 rounded-xl">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-lg">Select Adventures</p>
            <span className="text-cyan-700 text-sm">
              {formdata?.adventures?.length || 0} selected
            </span>
          </div>

          <DropDownMenu
            url={`${process.env.NEXT_PUBLIC_SERVER}/api/v1/client/get-contents?type=adventures&page=:page`}
            append={(elem) => {
              append("adventures", elem);
            }}
            remove={(elem) => {
              remove("adventures", elem);
            }}
          />
        </div>

        {/* National Parks */}
        <div className="w-full p-4 flex flex-col gap-4 bg-white/80 rounded-xl">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-lg">Select National Parks</p>
            <span className="text-cyan-700 text-sm">
              {formdata?.nationalparks?.length || 0} selected
            </span>
          </div>

          <DropDownMenu
            url={`${process.env.NEXT_PUBLIC_SERVER}/api/v1/client/get-contents?type=national-parks&page=:page`}
            append={(elem) => {
              append("nationalparks", elem);
            }}
            remove={(elem) => {
              remove("nationalparks", elem);
            }}
          />
        </div>

        {/* Hikings */}
        <div className="w-full p-4 flex flex-col gap-4 bg-white/80 rounded-xl">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-lg">Select Hikings</p>
            <span className="text-cyan-700 text-sm">
              {formdata?.tours?.length || 0} selected
            </span>
          </div>

          <DropDownMenu
            url={`${process.env.NEXT_PUBLIC_SERVER}/api/v1/client/get-contents?type=hiking&page=:page`}
            append={(elem) => {
              append("hiking", elem);
            }}
            remove={(elem) => {
              remove("hiking", elem);
            }}
          />
        </div>

        {/* fullname */}
        <div className="w-full p-4 flex flex-col gap-4 bg-white/80 rounded-xl">
          <div className="flex items-center justify-between">
            <label htmlFor="fullname" className="font-semibold text-lg">
              Fullname
            </label>
          </div>{" "}
          <input
            className="w-full border-2 border-slate-400 text-sm px-4 p-2 rounded-lg"
            placeholder="Enter your name"
            value={formdata?.fullname}
            required
            name="fullname"
            id="fullname"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, fullname: e?.target?.value }))
            }
          />
        </div>

        {/* email */}
        <div className="w-full p-4 flex flex-col gap-4 bg-white/80 rounded-xl">
          <div className="flex items-center justify-between">
            <label htmlFor="email" className="font-semibold text-lg">
              email
            </label>
          </div>
          <input
            className="w-full border-2 border-slate-400 text-sm px-4 p-2 rounded-lg"
            placeholder="Enter your email"
            value={formdata?.email}
            required
            type="email"
            name="email"
            id="email"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e?.target?.value }))
            }
          />
        </div>

        {/* phone */}
        <div className="w-full p-4 flex flex-col gap-4 bg-white/80 rounded-xl">
          <div className="flex items-center justify-between">
            <label htmlFor="phone" className="font-semibold text-lg">
              Phone No.
            </label>
          </div>{" "}
          <input
            className="w-full border-2 border-slate-400 text-sm px-4 p-2 rounded-lg"
            placeholder="Enter your Phone no."
            value={formdata?.phone}
            required
            type="tel"
            name="phone"
            id="phone"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e?.target?.value }))
            }
          />
        </div>

        {/* phone */}
        <div className="w-full p-4 flex flex-col gap-4 bg-white/80 rounded-xl">
          <div className="flex items-center justify-between">
            <label htmlFor="totalPeople" className="font-semibold text-lg">
              Total People
            </label>
          </div>{" "}
          <input
            className="w-full border-2 border-slate-400 text-sm px-4 p-2 rounded-lg"
            placeholder="Enter Total people"
            value={formdata?.totalPeople}
            required
            type="number"
            min={"1"}
            name="totalPeople"
            id="totalPeople"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                totalPeople: e?.target?.value,
              }))
            }
          />
        </div>

        <div className="w-full p-4 flex flex-col gap-4 bg-white/80 rounded-xl">
          <div className="flex items-center justify-between">
            <span  className="font-semibold text-lg">
              Total Price{" "}
            </span>
          </div>
          <div className="text-4xl text-cyan-600 font-semibold"><span className="text-sm">Rs</span> {Number(totalPrice(formdata)).toLocaleString()}</div>
        </div> 
        
        <div className="w-full p-4 flex flex-col gap-4 bg-white/80 rounded-xl">
          <div className="flex items-center justify-between">
            <span  className="font-semibold text-lg">
              Ready to book?
            </span>
          </div>
          <button className="w-full p-2 rounded-lg bg-cyan-700 transition-all duration-300 hover:bg-cyan-800 text-white font-semibold">Book Now</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
