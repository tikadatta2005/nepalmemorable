import CsrBg from "@/components/reusables/assets/CsrBg";
import CsrImage from "@/components/reusables/assets/CsrImage";
import { GetData } from "@/utils/GetData";
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await GetData(`/get-content/${id}?type=testimonials`);
  const data = res?.data;
  const coverImage = `${process.env.NEXT_SERVER}/${data?.cover}`;
  return {
    title: data?.title || "Default Title",
    description: data?.description || "Default Description",
    openGraph: {
      title: data?.title || "Default Title",
      description: data?.description || "Default Description",
      url: `https://www.nepalmemorable.com/testimonials/${id}`,
      type: "article",
      images: [
        {
          url: coverImage,
          width: 1200,
          height: 630,
          alt: data?.title || "Tour Image",
        },
      ],
    },
  };
}

const page = async ({ params }) => {
  const { id } = await params;
  const res = await GetData(`/get-content/${id}?type=testimonials`);
  const data = await res?.data;

  return (
    <CsrBg
      className="relative w-full min-h-screen bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url(/assets/testimonials/bg.webp)" }}
    >
      <section className="relative w-full min-h-screen pt-32 sm:pt-36 p-4 sm:p-8 bg-slate-950/80">
        <div className="w-full max-w-6xl mx-auto bg-cyan-800 rounded-xl shadow-xl overflow-hidden pt-8 md:pt-12">
          {/* Quote Icon */}
          <div className="absolute -mt-20 ml-6 w-20 h-20 rounded-full bg-cyan-600 flex items-center justify-center shadow-xl text-white">
            <FaQuoteLeft size={30} />
          </div>

          <div className="w-full flex flex-col gap-8 p-6 md:p-12 pt-14 md:pt-16">
            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 items-center">
              {/* Testimonial Image */}
              <CsrImage
                src={`${
                  process.env.NEXT_SERVER || process.env.NEXT_PUBLIC_SERVER
                }/${data?.image}`}
                alt={data?.title || data?.name}
                width={500}
                height={500}
                className="w-32 md:w-full aspect-square object-cover bg-linear-to-br from-cyan-600 to-teal-700 rounded-full object-center shadow-md mx-auto md:mx-0"
              />

              {/* Testimonial Text */}
              <div className="col-span-1 md:col-span-3 flex flex-col gap-4 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                  {data?.name}
                </h1>
                <div className="flex justify-center md:justify-start gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} size={20} className="text-amber-400" />
                  ))}
                </div>
                <div
                  className="text-white text-lg md:text-xl"
                  dangerouslySetInnerHTML={{ __html: data?.description }}
                />
              </div>
            </div>

            {/* Testimonial Content */}
            <div
              className="bg-white text-slate-800 p-6 md:p-8 rounded-xl shadow-md prose prose-slate max-w-full mx-auto"
              dangerouslySetInnerHTML={{ __html: `${data?.content}` }}
            ></div>
          </div>
        </div>
      </section>
    </CsrBg>
  );
};

export const revalidate = 300
export default page;
