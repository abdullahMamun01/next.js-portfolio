/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';

export default function AboutSection() {
  return (
    <div className=" text-white font-sans py-16 relative overflow-hidden" id='hero'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4d79ff] to-[#38b6ff] rounded-3xl transform rotate-3"></div>
              <Image
              width={500}
              height={500}
                src="https://avatars.githubusercontent.com/u/91420483?s=400&u=3655f6c14bf582659ab648f0499379e16b279e9c&v=4" 
                alt="Portrait of Jenna"
                className="relative z-10 rounded-3xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-16">
            <div className="bg-[#1c2c4c] text-sm font-semibold py-1 px-3 rounded-full inline-block mb-4">
              Programming Journey
            </div>
            <h2 className="text-3xl font-bold mb-5">
            Developing My Problem-Solving Skills:  <span className="text-[#4d79ff]">A Beginner's Journey in Code</span>
            </h2>
            <p className="text-gray-300 mb-5">
              When I first started learning programming, JavaScript was my first language. Initially, I struggled to understand the code beyond what my instructor provided. I could replicate the examples, but I realized I wasn't truly grasping the concepts or thinking critically about how to solve problems on my own.
            </p>
            <p className="text-gray-300 mb-5">
              This led me to explore problem-solving techniques and the importance of data structures and algorithms (DSA). To build my problem-solving skills, I decided to start with C, a foundational programming language, which helped me gain a deeper understanding of core programming principles. I began solving problems on online coding platforms, working with strings, arrays, loops, and other basic concepts. As I solved more problems, I naturally transitioned into learning DSA, which allowed me to tackle more complex challenges.
            </p>
            <p className="text-gray-300 mb-5">
              The difference between my initial approach and where I am now is striking. I can now approach new technologies with confidence, researching and learning independently—something I couldn't do before. This growth in my problem-solving abilities has been crucial in shaping my development journey, and now, I'm excited to apply these skills to real-world projects in the industry.
            </p>
            <div className="flex flex-wrap justify-between mb-8">
             
            </div>
            <button className="bg-[#4d79ff] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#3a5ec2] transition-colors">
              GET IN TOUCH →
            </button>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-[#4d79ff] rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#38b6ff] rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute left-0 bottom-0 w-64 h-64 opacity-10">
        <div className="w-full h-full border-[32px] border-[#4d9fff] rounded-full"></div>
      </div>
      <div className="absolute left-0 top-10 w-64 h-64 opacity-10">
        <div className="w-full h-full border-[32px] border-[#4d9fff] rounded-full"></div>
      </div>
      <div className="absolute right-0 top-0 w-96 h-96 opacity-10">
        <div className="w-full h-full border-[48px] border-[#4d9fff] rounded-full"></div>
      </div>
    </div>
  );
}