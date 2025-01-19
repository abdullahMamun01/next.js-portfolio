/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Facebook,  Linkedin } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className=" text-white py-16 ">
      <div className=" mx-auto px-4 ">
        <div className=" rounded-lg overflow-hidden ">
          <div className="flex flex-col md:flex-row py-20 bg-[#172A45] " id='contact'>
            <div className="md:w-1/3 p-8 ">
              <div className="rounded-lg overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="abdullah"
                  width={300}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="mb-6">
                <h3 className="text-gray-400 text-sm mb-2">WRITE AN E-MAIL</h3>
                <p className="text-xl">abdullah.mamun.0110@gmail.com</p>
              </div>
              <div className="mb-6">
                <h3 className="text-gray-400 text-sm mb-2">WRITE AN E-MAIL</h3>
                <p className="text-xl">+880-1875273061</p>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700">
                  <Facebook size={20} />
                </a>
            
                <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-900">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="text-4xl font-bold mb-4">Let's Discuss Your Project</h2>
              <p className="text-gray-400 mb-8">
                Always available for freelancing if the right project comes along. Feel free to contact me.
              </p>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">YOUR NAME</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-[#0c1a2a] rounded-md border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">YOUR EMAIL</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-[#0c1a2a] rounded-md border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">SUBJECT</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full bg-[#0c1a2a] rounded-md border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">YOUR MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-[#0c1a2a] rounded-md border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}