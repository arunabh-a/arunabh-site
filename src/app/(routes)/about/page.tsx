import React from "react";
import Image from "next/image";
import pfp from "/public/me-updated.png";
import { ABOUT_US_CONTENT } from "@/lib/constants";

const Page = () => {
    return (
        
        <div className="flex h-screen lg:justify-evenly overflow-hidden justify-center items-center lg:flex-row flex-col-reverse ">
            <div className="bg-gray-600 p-4 rounded-2xl max-w-2xl border-4">
                <p className="md:w-full font-euclid text-center lg:text-left text-gray-300 font-medium text-md">
                    Based in <strong className="text-white">Delhi</strong>, I'm
                    a <strong className="text-white">Software Engineer</strong>{" "}
                    who loves to build things. I have experience in building
                    <strong className="text-white">
                        {" "}
                        web applications, mobile applications, and cloud
                        services
                    </strong>
                    . I am passionate about creating products that are{" "}
                    <strong className="text-white">
                        user-friendly and accessible to everyone
                    </strong>
                    .
                    <br />I am always looking for new opportunities to{" "}
                    <strong className="text-white">
                        learn and grow as a developer
                    </strong>
                    , constantly exploring new technologies and best practices
                    to enhance my craft.
                    <br />
                </p>
                <div className="mt-4">
                    <h2 className="text-white font-semibold text-lg mb-1">
                        What I Use
                    </h2>
                    <div className=" flex flex-wrap gap-2">
                        {ABOUT_US_CONTENT.skills &&
                            ABOUT_US_CONTENT.skills.map(
                                (item: string, index: number) => (
                                    <div
                                        key={index}
                                        className="bg-gray-800 px-2 py-1 rounded-lg"
                                    >
                                        <p className="text-gray-400">{item}</p>
                                    </div>
                                )
                            )}
                    </div>
                </div>
            </div>
            <div className="w-[150px] h-[150px] xs:w-[180px] xs:h-[180px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
                <Image
                    src={pfp}
                    alt="about"
                    width={500}
                    height={500}
                    className="pfp p-1 aspect-square object-cover "
                    style={{
                        borderRadius: "47% 53% 50% 50% / 41% 30% 70% 59%",
                    }}
                />
            </div>{" "}
        </div>
    );
};

export default Page;
