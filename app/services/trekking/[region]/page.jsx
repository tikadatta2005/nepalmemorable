import FastBookNow from '@/components/forms/FastBookNow';
import RegionBanner from '@/components/reusables/banners/RegionBanner';
import CardBook from '@/components/reusables/cards/CardBook';
import TrekkHolder from '@/components/trekking/TrekkHolder';
import { GetData } from '@/utils/GetData';
import React from 'react'

const Region = async({params}) =>{

  const {region} = await params
  const _id = region.split("-").pop()

  const metaData = await GetData(`/get-content/${_id}?type=trekking-regions`)
  const meta = metaData?.data

  const folder_id = region.split("-").slice(0, -1).join("-");

  const res = await GetData(
    `/get-contents?type=trekking&sort=1&page=0&len=20&search_key=folder_id&search_val=${folder_id}`
  );
  const data = res?.data;

  return (
    <main className="w-full bg-gray-50">
      {/* Banner */}
      <RegionBanner
        title={meta?.name}
        cover={`${process.env.NEXT_SERVER || process.env.NEXT_PUBLIC_SERVER}/${meta?.cover}`}
      />

      {/* Introduction */}
      <div className="w-full max-w-7xl mx-auto p-6 md:p-12 text-gray-700 text-base md:text-lg leading-relaxed">
        <div
          dangerouslySetInnerHTML={{ __html: meta?.content || meta?.description }}
          className="prose prose-cyan max-w-full"
        ></div>
      </div>

      {/* Main Content: Cards + Form */}
      <div className="w-full max-w-7xl mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-8">
        {/* Cards */}
        <div className="w-full md:w-3/4 space-y-6">
          <TrekkHolder type="trekking-regions" slug={`/${folder_id}`} sort={"1"}>
            {data?.map((elem, index) => (
              <CardBook data={elem} key={index} service={`trekking/${folder_id}`} />
            ))}
          </TrekkHolder>
        </div>

        {/* Sticky Booking Form */}
        <div className="hidden md:block w-full md:w-1/4">
          <div className="sticky top-24">
            <FastBookNow title={"Trekking"} location={`https://www.nepalmemorable.com/services/trekking`}/>
          </div>
        </div>
      </div>
    </main>
  );
};


export const revalidate = 300;

export default Region