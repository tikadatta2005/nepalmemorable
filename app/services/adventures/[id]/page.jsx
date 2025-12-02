import NotFoundPage from "@/components/reusables/404/NotFound";
import DetailsPage from "@/components/reusables/assets/DetailsPage";
import { GetData } from "@/utils/GetData";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const _id = id.split("-").pop() || id
  const res = await GetData(`/get-content/${_id}?type=adventures`);
  const data = res?.data;
  const coverImage = `${process.env.NEXT_SERVER}/${data?.cover}`;
  return {
    title: data?.title || "Default Title",
    description: data?.description || "Default Description",
    openGraph: {
      title: data?.title || "Default Title",
      description: data?.description || "Default Description",
      url: `https://www.nepalmemorable.com/services/adventures/${id}`,
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
  const _id = id.split("-").pop() || id
  const res = await GetData(`/get-content/${_id}?type=adventures`);
  const data = await res?.data;
if(!data) return <NotFoundPage/>
  return (
   <DetailsPage location={`https://www.nepalmemorable.com/services/adventures/${id}`}data={data}/>
  );
};
export const revalidate = 300;

export default page;
