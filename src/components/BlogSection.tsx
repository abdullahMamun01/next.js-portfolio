import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { allBlogFromDB } from '@/database/queries'

export default async function BLogSection() {
 

  const blogPosts  = await allBlogFromDB()


  return (
        <section className=" px-10 md:px-20 py-20 bg-gradient-to-b  from-[#07223A] to-[#062E4F] " id='blog'>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl md:text-3xl font-bold">Latest from the Blog</h2>
            <Link href="/blog" className="text-blue-500 hover:text-blue-400 flex items-center">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-[#04335C] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full object-cover h-48"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.description}</p>
                  <div className="flex items-center justify-between">
             
                    <a href={post.blogUrl} target='_blank' className="text-blue-500 hover:text-blue-400">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      
 
  )
}