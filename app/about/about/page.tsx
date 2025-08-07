"use client";

import Image from "next/image";
import { motion} from "framer-motion";

export default function AboutPage() {

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[85vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div
          className="relative z-10 px-6 text-center max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-lg font-serif pt-24">
            About Sunset Forest Villa
          </h1>
          <p className="mt-6 text-lg md:text-xl font-light text-white/90 max-w-3xl mx-auto">
            Experience the perfect blend of Kandyan heritage, luxury, and nature’s tranquility.
          </p>
        </motion.div>
      </section>

      <section className="bg-[#FCF8F3] px-6 sm:px-12 lg:px-32">
        {/* Main Content */}
        <main className="bg-[#FCF8F3] py-24 px-6 sm:px-12 lg:px-32 space-y-32 max-w-[1400px] mx-auto">

          {/* Our Story */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-bold text-[#4B2E1D] mb-6 border-b-4 border-[#B8860B] inline-block pb-1">
                Our Story
              </h2>
              <p className="text-[#5C4433] text-lg leading-relaxed">
                Sunset Forest Villa was born from a vision to combine the rich Kandyan heritage with the tranquility of nature. Nestled in the heart of Sri Lanka’s hill country, we offer guests an authentic experience blending culture, luxury, and sustainability.
              </p>
            </motion.div>
            <motion.div
              className="rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/bg/bg2.jpg"
                alt="About Our Story"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </motion.div>
          </section>

          {/* Vision & Mission */}
          <section className="bg-[#F7E9D7] rounded-3xl p-14 shadow-xl max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-4xl font-bold text-[#4B2E1D] border-b-4 border-[#B8860B] inline-block pb-1 mx-auto">
              Vision & Mission
            </h2>
            <div className="flex flex-col md:flex-row md:justify-center md:space-x-24 space-y-10 md:space-y-0 text-[#5C4433] text-lg max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h3 className="font-semibold text-xl mb-2">Our Vision</h3>
                <p>
                  To be the premier destination where cultural heritage and sustainable luxury unite to create memorable experiences.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <h3 className="font-semibold text-xl mb-2">Our Mission</h3>
                <p>
                  Deliver exceptional hospitality inspired by Kandyan traditions and natural beauty, with personalized service and care.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Message from Proprietor */}
          <section className="max-w-4xl mx-auto bg-white rounded-3xl p-14 shadow-xl text-[#4B2E1D] space-y-8">
            <h2 className="text-4xl font-bold border-b-4 border-[#B8860B] inline-block pb-1 mb-6">
              A Message from Our Proprietor
            </h2>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              {/* Text */}
              <div className="md:flex-1 space-y-6">
                <p className="text-lg leading-relaxed">
                  I’m the proprietor of Sunset Forest Villa, and I welcome you to our humble sanctuary. This villa is a reflection of my love for nature, peace, and authentic hospitality. Every detail from the rooms to the garden has been designed with care to give you a memorable stay.
                </p>
                <p className="text-lg leading-relaxed">
                  Whether you&apos;re exploring Kandy&apos;s cultural treasures or simply relaxing with a cup of tea while watching the sunset, this place is meant to feel like your home away from home.
                </p>
                <p className="text-lg leading-relaxed italic font-semibold">
                  I look forward to hosting you and making your stay truly special.<br />
                  – Ravi Perera
                </p>
              </div>

              {/* Image */}
              <div className="md:w-80 w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/proprietor.png"
                  alt="Ravi Perera"
                  width={320}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </section>

          {/* What Makes Us Unique */}
          <section className="max-w-4xl mx-auto bg-[#F7E9D7] rounded-3xl p-14 shadow-xl text-[#4B2E1D] space-y-6">
            <h2 className="text-4xl font-bold border-b-4 border-[#B8860B] inline-block pb-1 mb-6">
              What Makes Us Unique?
            </h2>
            <ul className="list-disc list-inside text-lg space-y-3">
              <li>Peaceful Forest Surroundings: Wake up to birdsong and greenery.</li>
              <li>Private & Comfortable: Only one villa — total privacy guaranteed.</li>
              <li>Close to City & Attractions: Just 2 km from Kandy town.</li>
              <li>Genuine Hospitality: Managed with personal care and warmth.</li>
              <li>Ideal for All Types of Guests: Perfect for families, couples, and digital nomads.</li>
            </ul>
          </section>

          {/* Why Choose Us */}
          <section className="max-w-4xl mx-auto bg-white rounded-3xl p-14 shadow-xl text-[#4B2E1D] space-y-6">
            <h2 className="text-4xl font-bold border-b-4 border-[#B8860B] inline-block pb-1 mb-6">
              Why Choose Us?
            </h2>
            <ul className="list-disc list-inside text-lg space-y-3">
              <li>Prime Location with Mountain & Forest Views</li>
              <li>Family-Friendly Villas for Groups</li>
              <li>Personalised Hospitality & Owner-Operated</li>
              <li>Affordable Pricing with Premium Comfort</li>
              <li>Ideal for Couples, Families, and Group Retreats</li>
            </ul>
          </section>
        </main>
      </section>
    </>
  );
}