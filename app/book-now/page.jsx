import Form from "@/components/book-now/Form";
import CsrBg from "@/components/reusables/assets/CsrBg";
import React from "react";

const Page = () => {
  return (
    <CsrBg
      className="relative w-full min-h-screen bg-cover bg-fixed"
      style={{ backgroundImage: "url(/assets/bookings/bg.jpg)" }}
    >
      {/* Optimized Background Image */}

      {/* Dark overlay and content */}
      <section className="relative w-full min-h-screen p-8 pt-28 bg-slate-950/70">
        <Form />
      </section>
    </CsrBg>
  );
};

export default Page;
