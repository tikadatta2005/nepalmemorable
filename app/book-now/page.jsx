import Form from "@/components/book-now/Form";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <main className="relative w-full min-h-screen">
      {/* Optimized Background Image */}
      <Image
        src="/assets/bookings/bg.jpg"
        alt="Booking background"
        fill
        priority
        className="object-cover object-center -z-10"
        sizes="100vw"
      />

      {/* Dark overlay and content */}
      <section className="relative w-full min-h-screen p-8 pt-28 bg-slate-950/70">
        <Form />
      </section>
    </main>
  );
};

export default Page;
