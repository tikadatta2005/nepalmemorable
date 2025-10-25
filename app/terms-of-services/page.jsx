import Banner1 from "@/components/reusables/banners/Banner1";
import React from "react";

export const revalidate = 0;
export const dynamic = "force-dynamic";
const page = async () => {
 
    const termsData = [
  {
    title: "Introduction",
    description: `
      <p>Welcome to Nepal Memorable Tours. These Terms & Services (“Terms”) govern your use of our website, booking platform, and all travel-related services provided by Nepal Memorable Tours (“Company,” “we,” or “us”). Your access to and use of our services constitutes your agreement to comply with these Terms. If you do not agree to these Terms, please refrain from using our website or services.</p>

      <p>These Terms are designed to provide clarity and transparency regarding the rights, responsibilities, and obligations of clients and the company. They cover all aspects of the travel experience, including booking, payments, cancellations, itinerary changes, travel safety, liability, data privacy, and dispute resolution.</p>

      <p>By making a booking or using our website, you acknowledge that you understand and accept these Terms. This includes your agreement to follow our policies regarding conduct, safety, and payment procedures.</p>

      <p>These Terms may be updated periodically to reflect changes in regulations, company policies, or service offerings. It is your responsibility to review the latest version. Continued use of our services after updates indicates acceptance of the revised Terms.</p>

      <p>Our website may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or services provided by third parties. Using such links is at your own risk.</p>

      <p>By using our services, you also acknowledge that traveling involves inherent risks, and it is your responsibility to take appropriate precautions. These Terms are intended to protect both clients and the company while ensuring a safe and enjoyable travel experience.</p>
    `,
  },
  {
    title: "Booking & Payments",
    description: `
      <p>Booking a trip with Nepal Memorable Tours requires careful attention to the following policies and procedures. By completing a booking, you agree to adhere to these rules.</p>

      <ul>
        <li><strong>Booking Confirmation:</strong> Reservations are considered provisional until payment is received. Confirmation is provided via email, including your booking reference number and trip details.</li>
        <li><strong>Payment Methods:</strong> We accept bank transfers, credit/debit cards, and verified online payment gateways. Ensure that all payment details are correct and that sufficient funds are available.</li>
        <li><strong>Partial Payments:</strong> In some cases, a partial deposit is sufficient to secure your booking. Full payment is required before the trip begins. Failure to pay the full amount may result in cancellation.</li>
        <li><strong>Price Adjustments:</strong> Prices may change due to variations in fuel costs, government taxes, exchange rates, or service provider fees. We notify clients of any major changes prior to confirmation.</li>
        <li><strong>Taxes and Service Charges:</strong> All applicable taxes, service fees, and processing charges are included unless explicitly stated otherwise. Clients are responsible for any additional fees imposed by banks or payment providers.</li>
      </ul>

      <p>Clients are responsible for verifying their booking details, including names, travel dates, accommodation, and activities. Errors or omissions may affect eligibility for refunds or services.</p>

      <p>Payment disputes must be reported within 7 days of the transaction. Delayed reporting may affect our ability to resolve issues.</p>

      <p>By booking, clients agree that the company may charge the payment method provided without further consent, as long as the charges are consistent with the agreed-upon booking and payment schedule.</p>
    `,
  },
  {
    title: "Cancellation & Refund Policy",
    description: `
      <p>Cancellations are sometimes unavoidable. Our policy aims to be fair and transparent while covering costs incurred by the company.</p>

      <ul>
        <li><strong>Request Submission:</strong> All cancellation requests must be submitted in writing via email or official contact channels. Verbal cancellations are not accepted.</li>
        <li><strong>Refund Eligibility:</strong> Refunds depend on trip type, booking time, and cancellation notice period. Special offers, group bookings, or peak-season trips may be non-refundable.</li>
        <li><strong>Processing Time:</strong> Refunds typically take up to 15 business days. Transaction fees, payment gateway fees, and bank charges are non-refundable.</li>
        <li><strong>No-Show Policy:</strong> Failure to appear without prior notice is treated as a no-show. No refund is granted in such cases.</li>
        <li><strong>Travel Insurance:</strong> We strongly recommend clients purchase travel insurance to cover cancellations, medical emergencies, or unforeseen events.</li>
      </ul>

      <p>Clients are encouraged to review cancellation deadlines carefully. Early notification increases eligibility for partial or full refunds. Late cancellations or changes may incur additional fees.</p>

      <p>The company reserves the right to cancel trips in certain circumstances, such as insufficient participation, natural disasters, or government restrictions. In such cases, clients are entitled to a full refund or alternative arrangements.</p>
    `,
  },
  {
    title: "Travel Safety & Responsibilities",
    description: `
      <p>Travel involves inherent risks, and clients must exercise reasonable care to ensure their own safety and that of fellow participants.</p>

      <ul>
        <li><strong>Medical Disclosures:</strong> Clients must provide accurate information about medical conditions, allergies, or physical limitations that could affect participation in activities.</li>
        <li><strong>Guide Instructions:</strong> Safety instructions provided by guides or trip leaders must be followed. Failure to comply may result in removal from activities without refund.</li>
        <li><strong>Personal Belongings:</strong> Clients are responsible for their own belongings. The company is not liable for theft, loss, or damage.</li>
        <li><strong>Insurance:</strong> Adequate travel insurance is recommended, covering medical emergencies, accidents, and trip interruptions.</li>
        <li><strong>Behavior:</strong> Clients must respect local laws, cultural practices, and fellow travelers. Misconduct may result in termination of services.</li>
      </ul>

      <p>By participating, clients acknowledge that some activities, such as trekking, rafting, or adventure sports, carry risks that cannot be entirely mitigated. Awareness, preparation, and compliance with safety protocols are essential.</p>

      <p>The company may provide equipment and guidance, but ultimate responsibility for safety lies with the client. Pregnant travelers, minors, or individuals with specific health concerns should seek medical advice before booking.</p>
    `,
  },
  {
    title: "Changes to Itinerary",
    description: `
      <p>While we strive to adhere to published itineraries, circumstances beyond our control may necessitate changes. These include weather conditions, natural disasters, political events, strikes, or other emergencies.</p>

      <ul>
        <li>Clients will be notified promptly of significant changes and provided with alternative arrangements wherever possible.</li>
        <li>Alternative arrangements may include substitute accommodations, activities, or schedules of similar quality.</li>
        <li>We reserve the right to adjust itineraries to ensure safety, accessibility, and quality of service.</li>
        <li>Clients are expected to cooperate with staff and guides to implement changes smoothly.</li>
      </ul>

      <p>Occasionally, minor changes may occur without prior notice, such as transport schedule adjustments or activity timing. These are not grounds for refunds unless they materially affect the overall experience.</p>

      <p>By booking, clients agree to accept itinerary changes when necessary, understanding that flexibility is essential in travel.</p>
    `,
  },
  {
    title: "Liability",
    description: `
      <p>Nepal Memorable Tours is committed to providing safe and reliable services. However, the company is not liable for damages arising from circumstances beyond our control, including but not limited to:</p>

      <ul>
        <li>Natural disasters, extreme weather, or environmental hazards</li>
        <li>Transportation delays, cancellations, or accidents</li>
        <li>Actions or negligence of third-party service providers</li>
        <li>Illness, injury, or death during travel</li>
        <li>Loss, theft, or damage to personal property</li>
      </ul>

      <p>Clients are encouraged to purchase comprehensive travel insurance covering medical emergencies, cancellations, and personal belongings.</p>

      <p>By participating, clients assume full responsibility for risks inherent in travel. The company will take reasonable precautions to minimize risks but cannot guarantee absolute safety.</p>

      <p>Liability limitations do not affect rights that cannot legally be excluded, such as certain statutory consumer protections.</p>
    `,
  },
  {
    title: "Privacy & Data Usage",
    description: `
      <p>We respect your privacy and take all reasonable measures to protect personal information collected during booking and service use.</p>

      <ul>
        <li>Information collected includes names, contact details, payment information, medical disclosures, and special requirements necessary for travel arrangements.</li>
        <li>Data is used exclusively for trip management, communication, customer support, and legal compliance.</li>
        <li>We do not sell, lease, or trade client information with third parties for marketing purposes.</li>
        <li>Security measures include encryption, restricted access, and secure storage to protect client data from unauthorized access or misuse.</li>
        <li>Clients may request access, correction, or deletion of their personal data by contacting our support team.</li>
      </ul>

      <p>By booking, clients consent to the collection and use of personal data as described. Data is retained only as long as necessary for operational, legal, or accounting purposes.</p>
    `,
  },
  {
    title: "Agreement & Updates",
    description: `
      <p>By using our website and services, clients acknowledge that they understand and accept these Terms & Services.</p>

      <ul>
        <li>We reserve the right to update policies, fees, and terms at any time. The latest version will supersede previous versions.</li>
        <li>Clients are responsible for reviewing Terms periodically. Continued use of services after updates constitutes acceptance.</li>
        <li>In the event of disputes, the most current Terms will govern resolution unless otherwise agreed in writing.</li>
        <li>These Terms constitute the full agreement between the client and Nepal Memorable Tours regarding the services provided.</li>
      </ul>

      <p>Clients are encouraged to contact support for clarifications or questions. Open communication ensures a smooth and enjoyable travel experience.</p>
    `,
  },
];


  return (
    <main className="w-full flex flex-col">
      <Banner1
        title="Terms & Services"
        description="Please review the following terms that govern your use of our website and travel services. By booking with us, you agree to these policies designed to ensure a safe and seamless experience."
        cover="/assets/terms/bg.jpg"
      />
      <br/>
      {
        termsData?.map((elem, index)=>{
           return (
            <section className="w-full max-w-5xl flex flex-col gap-4 mx-auto p-4" key={index}>
                <h2 className="w-full text-2xl md:text-4xl text-slate-800">{elem?.title}</h2>
                <div className="text-base md:text-lg text-slate-500 flex flex-col gap-4" dangerouslySetInnerHTML={{__html:`${elem?.description}`}}/>
            </section>
           ) 
        })
      }
    </main>
  );
};

export default page;
