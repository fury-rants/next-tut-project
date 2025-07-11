'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
        id:1,
        name: "john doe",
        designation: "piano coach",
        image:'https://randomuser.me/api/portraits/women/66.jpg'
    },
    {
        id:2,
        name: "doe john doe",
        designation: "guitar coach",
        image:'https://randomuser.me/api/portraits/women/66.jpg'
    },
    {
        id:3,
        name: "john lorem",
        designation: "flute coach",
        image:'https://randomuser.me/api/portraits/women/66.jpg'
    },
    {
        id:4,
        name: "johnson baby",
        designation: "saxophone coach",
        image:'https://randomuser.me/api/portraits/women/66.jpg'
    },
    {
        id:5,
        name: "dogman",
        designation: "drum coach",
        image:'https://randomuser.me/api/portraits/women/66.jpg'
    }
]

function Instructors () {
    return (
       <div className="relative h-[51rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white text-center font-bold mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">discover the talented professionals who will guide your musical journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors}/>
            </div>
        </WavyBackground>
       </div>
    )
};
 export default Instructors