import ContactForm from "@/components/contact-us/ContactForm";
import Image from "next/image";
import React from "react";

const Page = async () => {
  return (
    <main className="relative w-full min-h-screen bg-black/0">
      {/* Optimized Background */}
      <Image
        src="/assets/bookings/bg.jpg"
        alt="Bookings background"
        fill
        priority
        className="object-cover object-center -z-10"
        sizes="100vw"
      />

      <div className="w-full flex p-4 max-w-7xl mx-auto justify-end">
        <div className="w-full max-w-lg flex flex-col gap-4 pt-16">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default Page;
