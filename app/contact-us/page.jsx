import ContactForm from "@/components/contact-us/ContactForm";
import React from "react";

const page = async () => {
 
  return (
    <main
      className="w-full bg-cover bg-center bg-fixed bg-no-repeat min-h-screen"
      style={{
        backgroundImage: "url('/assets/bookings/bg.jpg')",
      }}
    >
      <div className="w-full flex p-4 max-w-7xl mx-auto justify-end">
        <div className="w-full max-w-lg flex flex-col gap-4 pt-16">
            <ContactForm/>
        </div>
      </div>
    </main>
  );
};

export default page;
