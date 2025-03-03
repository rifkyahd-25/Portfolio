import React from "react";
import { ShootingStars } from "./ui/shooting";
import { TextShimmer } from "./ui/textShimmer";
import { WordPullUp } from "./ui/wordPullUp";
import { Github } from "lucide-react";
import { Button } from "./Button";

export const Header = () => {
  return (
    <div className=" relative h-screen w-screen ">
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#FF0099"
        trailColor="#FFB800"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />

      <div className="stars relative  flex flex-col items-center justify-center h-full text-center text-white px-6 md:px-12">
        <TextShimmer
          as="h1"
          duration={1.5}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-4 p-4 sm:p-5 md:p-6"
        >
          Rifky Ahamed
        </TextShimmer>

        <WordPullUp
          className="text-xl font-medium tracking-wide text-black dark:text-white sm:text-2xl sm:leading-snug sm:tracking-normal md:text-3xl md:leading-snug lg:text-4xl lg:leading-relaxed"
          words="MERN Stack Developer | Cybersecurity Enthusiast"
        />

        <WordPullUp
          className="text-xl font-medium tracking-wide text-black dark:text-white sm:text-2xl sm:leading-snug sm:tracking-normal md:text-3xl md:leading-snug lg:text-4xl lg:leading-relaxed"
          words="Building Scalable, Secure, and Performant Web Applications"
        />
        <Button />
      </div>
    </div>
  );
};
