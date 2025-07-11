import courseData from "../data/music_courses.json"
import Link from "next/link";
import { Button } from "./ui/moving-border";

interface Course{
    id:number,
    title: string,
    description: number,
    duration: string,
    level: string,
    format: string,
    price:number,
    isFeatured: boolean
} // we defined types by give one object as sample for the types of type script

// const username: string ="anuj" // the username type in typescript is defined as typescript
// username = 1; // it shows error due to number assign in string type defined

function FeaturedCourses () {
    const featuredCourses = courseData.courses?.filter((course:Course) => course.isFeatured === true )|| []
    return(
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wideuppercase">
                        FEATURED COURSES
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Learn with the Best
                    </p>
                </div>
            </div>

            <div className="mt-10">
                <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course:Course) => (
                        <div key={course.id} className="flex justify-center">
                            <p>test</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-20 text-center">
                <Link href={"/courses"}>
                <Button>View All Courses</Button>
                </Link>
            </div>
        </div>
    )
};

export default FeaturedCourses;