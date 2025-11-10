"use client";
import React, { useEffect, useState } from "react";
import DropDownMenu from "./DropDownMenu";
import Select, { components } from "react-select";
import { ChevronDown } from "lucide-react";
import { PostData } from "@/utils/GetData";
import Notifier from "../reusables/popup/Notifier";
import { FaSpinner } from "react-icons/fa";

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
    country: {
      country: "",
      dial: "",
    },
  });

  const [country, setCountry] = useState(null);
  const [countryOptions, setCountryOptions] = useState([]);

  const [loading, setLoading] = useState(false);

  // Fetch countries with flags + dial codes
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,idd"
        );
        if (!res.ok)
          throw new Error(`Failed to fetch countries: ${res.status}`);
        const countries = await res.json();

        const options = countries
          .filter((c) => c.name?.common && c.idd?.root)
          .map((c) => ({
            value: c.name.common,
            label: c.name.common,
            name: c.name.common,
            flag: c.flags?.svg || c.flags?.png,
            dial: c.idd.root + (c.idd.suffixes ? c.idd.suffixes[0] : ""),
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountryOptions(options);
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    };

    fetchCountries();
  }, []);

  // Country select handler
  const handleCountrySelect = (selected) => {
    setCountry(selected);
    setFormData((prev) => ({
      ...prev,
      country: {
        country: selected.name,
        dial: selected.dial,
        flag: selected.flag,
      },
    }));
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

  const [message, setMessage] = useState({
    success: null,
    msg: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const services = {
      tours: "",
      trekkings: "",
      adventures: "",
      nationalparks: "",
      hiking: "",
    };
    setLoading(true);
    for (const service in services) {
      services[service] = formdata?.[service]
        ?.map((elem) => elem?.title || elem?.name)
        ?.join(", ");
    }

    const text = `
    Dear Nepal Memorable Tours,

    You have recieved a Booking Inquiry. Here are the services expected aby the customer
    
    ${services?.tours && `tours : ${services?.tours}`} 
    ${services?.trekkings && `trekkings : ${services?.trekkings}`} 
    ${services?.adventures && `adventures : ${services?.adventures}`} 
    ${services?.nationalparks && `national parks : ${services?.nationalparks}`} 
    ${services?.hiking && `hiking : ${services?.hiking}`} 

    For total people : ${formdata?.totalPeople}
  
    Name: ${formdata?.name},
    Country: ${formdata?.country?.country}
    Phone: ${formdata?.country?.dial} ${formdata?.phone}
    Email: ${formdata?.email}
      `;

    const body = new FormData();
    body.append("subject", "Booking from website to visit Nepal");
    body.append("text", text);
    body.append("from", formdata?.email);

    const res = await PostData(
      `${process.env.NEXT_PUBLIC_MAIL_SERVER}/api/v1/client/send-mail`,
      { body }
    );
    if (res?.error) {
      setMessage({
        success: false,
        msg: res?.error || "Could not send mail!",
      });
    } else {
      setMessage({
        success: true,
        msg: "Booked Successfully. We will soon reach out to you!",
      });
    }
    setLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full relative max-w-5xl mx-auto p-4 bg-white/50 backdrop-blur-sm min-h-[calc(100vh-8rem)] rounded-xl shadow-xl"
      >
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3">
          <div className="w-full p-8 flex flex-col gap-4 bg-white/80 rounded-xl justify-center">
            <h1 className="text-2xl text-cyan-700">Ready to Explore Nepal?</h1>
            <p>
              Secure your spot for the trip of a lifetime. Complete the form,
              select what you want, and click send!
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
              url={`/get-contents?type=tours&page=:page&len=20&sort=-1`}
              append={(elem) => append("tours", elem)}
              remove={(elem) => remove("tours", elem)}
            />
          </div>

          {/* trekkings */}
          <div className="w-full p-4 flex flex-col gap-4 bg-white/80 rounded-xl">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-lg">Select Trekking</p>
              <span className="text-cyan-700 text-sm">
                {formdata?.trekkings?.length || 0} selected
              </span>
            </div>

            <DropDownMenu
              url={`/get-contents?type=trekking&page=:page&len=20&sort=-1`}
              append={(elem) => append("trekkings", elem)}
              remove={(elem) => remove("trekkings", elem)}
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
              url={`/get-contents?type=adventures&page=:page&len=20&sort=-1`}
              append={(elem) => append("adventures", elem)}
              remove={(elem) => remove("adventures", elem)}
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
              url={`/get-contents?type=national-park&page=:page&len=20&sort=-1`}
              append={(elem) => append("nationalparks", elem)}
              remove={(elem) => remove("nationalparks", elem)}
            />
          </div>

          {/* Hikings */}
          <div className="w-full p-4 flex flex-col gap-4 bg-white/80 rounded-xl">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-lg">Select Hikings</p>
              <span className="text-cyan-700 text-sm">
                {formdata?.hiking?.length || 0} selected
              </span>
            </div>

            <DropDownMenu
              url={`/get-contents?type=hiking&page=:page&len=20&sort=-1`}
              append={(elem) => append("hiking", elem)}
              remove={(elem) => remove("hiking", elem)}
            />
          </div>

          {/* fullname */}
          <div className="w-full p-4 flex flex-col gap-4 bg-white/80 rounded-xl">
            <label htmlFor="fullname" className="font-semibold text-lg">
              Full Name
            </label>
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
            <label htmlFor="email" className="font-semibold text-lg">
              Email
            </label>
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

          <div className="w-full p-4 flex flex-col gap-4 bg-white/80 rounded-xl">
            <label htmlFor="country" className="font-semibold text-lg">
              Country
            </label>
            <div className="w-full">
              <Select
                options={countryOptions}
                value={country}
                onChange={handleCountrySelect}
                placeholder="Select your country"
                isSearchable
                menuPortalTarget={
                  typeof document !== "undefined" ? document.body : null
                }
                components={{
                  DropdownIndicator: (props) => (
                    <components.DropdownIndicator {...props}>
                      <ChevronDown className="text-cyan-700" />{" "}
                      {/* change color here */}
                    </components.DropdownIndicator>
                  ),
                }}
                styles={{
                  control: (base) => ({
                    ...base,
                    border: "2px solid #90A1B9",
                    borderRadius: "8px",
                    boxShadow: "none",
                    minHeight: "43px",
                    backgroundColor: "transparent",
                    color: "#90A1B9",
                    "&:hover": { borderColor: "rgb(8,145,178)" },
                  }),
                  menuPortal: (base) => ({
                    ...base,
                    zIndex: 9999,
                  }),
                  menu: (base) => ({
                    ...base,
                    minHeight: "200px",
                    maxHeight: "300px",
                    overflowY: "auto",
                  }),
                  option: (base) => ({
                    ...base,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }),
                  singleValue: (base) => ({
                    ...base,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }),
                }}
                formatOptionLabel={(option, { context }) => {
                  if (context === "menu") {
                    return (
                      <div className="flex items-center gap-2">
                        <img
                          src={option.flag}
                          alt={option.name}
                          className="w-5 h-4 rounded-sm"
                        />
                        <span className="text-slate-500 text-xs">
                          {option.dial}
                        </span>
                        <span className="text-slate-500 text-xs">
                          {option.name}
                        </span>
                      </div>
                    );
                  }
                  return (
                    <div className="flex items-center gap-2">
                      <img
                        src={option.flag}
                        alt={option.name}
                        className="w-5 h-4 rounded-sm"
                      />
                      <span>{option.name}</span>
                    </div>
                  );
                }}
              />
            </div>
          </div>

          {/* phone */}
          <div className="w-full p-4 flex flex-col gap-4 bg-white/80 rounded-xl">
            <label htmlFor="phone" className="font-semibold text-lg">
              Phone No.
            </label>
            <input
              className="w-full border-2 border-slate-400 text-sm px-4 p-2 rounded-lg"
              placeholder="Enter your phone number"
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

          {/* totalPeople */}
          <div className="w-full p-4 flex flex-col gap-4 bg-white/80 rounded-xl">
            <label htmlFor="totalPeople" className="font-semibold text-lg">
              Total People
            </label>
            <input
              className="w-full border-2 border-slate-400 text-sm px-4 p-2 rounded-lg"
              placeholder="Enter total people"
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

          {/* submit button */}
          <div className="w-full p-4 flex flex-col gap-4 bg-white/80 rounded-xl">
            <span className="font-semibold text-lg">Ready to book?</span>
            <button
              disabled={loading}
              className="w-full p-2 rounded-lg bg-cyan-700 flex items-center gap-2 transition-all duration-300 hover:bg-cyan-800 text-white font-semibold"
            >
              {loading ? (
                <FaSpinner
                  className="transition-all duration-300 text-white animate-spin"
                  size={24}
                />
              ) : null}{" "}
              {loading ? "Booking ..." : "Book Now"}
            </button>
          </div>
        </div>
      </form>

      {message?.msg && (
        <Notifier
          {...message}
          onClose={() => {
            setMessage({ success: null, msg: "" });
          }}
        />
      )}
    </>
  );
};

export default Form;
