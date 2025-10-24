import Form from "@/components/book-now/Form";
import React from "react";

const page = () => {
  return (
    <main
      className="w-full bg-cover bg-center bg-fixed bg-no-repeat min-h-screen"
      style={{
        backgroundImage: "url('/assets/bookings/bg.jpg')",
      }}
    >
      <section className="w-full min-h-screen p-8 pt-28 bg-slate-950/70">
        <Form />
      </section>
    </main>
  );
};

export default page;
