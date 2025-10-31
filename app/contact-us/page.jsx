import ContactForm from "@/components/contact-us/ContactForm";
import CsrBg from "@/components/reusables/assets/CsrBg";
import React from "react";

const Page = async () => {
  return (
    <CsrBg className="relative w-full min-h-screen bg-cover bg-fixed" style={{backgroundImage:"url(/assets/bookings/bg.jpg)"}}>
      {/* Optimized Background */}


      <div className="w-full flex p-4 max-w-7xl mx-auto justify-end">
        <div className="w-full max-w-lg flex flex-col gap-4 pt-16">
          <ContactForm />
        </div>
      </div>
    </CsrBg>
  );
};

export default Page;
