'use client'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
    
function UpcomingWebinars () {

 const featuredWebinars = [
    {
    title: 'Beginner Guitar Mastery',
    description: 'Learn the fundamentals of playing acoustic and electric guitar, from chords to strumming patterns.',
    slug: 'beginner-guitar-mastery',
    isFeatured: true
  },
  {
    title: 'Piano for Beginners',
    description: 'Step-by-step guide to learning piano, reading music, and playing songs',
    slug: 'piano-for-beginners',
    isFeatured: false
  },
  {
    title: "Music Theory Essentials",
    description: "Understand the building blocks of music including scales, intervals, chords, and harmony.",
    slug: "music-theory-essentials",
    isFeatured: true
  },
  {
    title: "Electronic Music Production",
    description: "Produce EDM, hip hop, and pop tracks using modern digital audio workstations like Ableton and FL Studio.",
    slug: "electronic-music-production",
    isFeatured: false
  },
  {
    title: "Vocal Training for Singers",
    description: "Improve vocal range, tone, and breathing with exercises taught by a professional vocal coach.",
    slug: "vocal-training-for-singers",
    isFeatured: true
  },
  {
    title: "Drumming Fundamentals",
    description: "Learn basic rhythms, drum notation, and hand-foot coordination for beginners.",
    slug: "drumming-fundamentals",
    isFeatured: false
  },
];
  return(
      <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
                </div>

                <div className="mt-10">
                    <HoverEffect items={featuredWebinars.map(webinar => (
                        {
                            title: webinar.title,
                            description: webinar.description,
                            link: '/'
                        }
                    ))}/>
                </div>

                <div className="mt-10 text-center">
                    <Link href={"/"} 
                    className="px-4 py-2 rounded-border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                    View All Webinars 
                    </Link>
                </div>

            </div>
        </div>
    )
}
 export default UpcomingWebinars;