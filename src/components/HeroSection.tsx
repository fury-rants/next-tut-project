import Link from "next/link"
import { Spotlight } from "../components/ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection(){
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
            <div className="p-4 relative z-10 w-full text-center">
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >Master of the Art of Music
                </h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                 Id aliquid repudiandae nobis officia quasi unde vitae. 
                 Itaque molestiae voluptatibus voluptates exercitationem 
                 adipisci laborum temporibus! Doloremque, iure! Cumque 
                </p>
                <div className="mt-4">
                    <Link href={"/courses"}>
                       <Button className="bg-white dark:bg-black text-black dark:text-white border-neutral dark:border-slate-800">
                        Explore courses
                       </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection