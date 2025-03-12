import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { getAllBlogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Blog | Denis Jesus Palma Abanto',
  description: 'Read articles and insights by Denis Jesus Palma Abanto on photography, creativity, and personal experiences.',
  keywords: 'Denis Jesus Palma Abanto, Denis Palma Abanto, blog, photography, writing, articles',
  openGraph: {
    title: 'Denis Jesus Palma Abanto - Blog',
    description: 'Read articles and insights by Denis Jesus Palma Abanto on photography, creativity, and personal experiences.',
    url: 'https://denis.pe/blog',
    siteName: 'Denis Jesus Palma Abanto Gallery',
    images: [
      {
        url: '/images/Denis Jesus Palma Abanto 1.png',
        width: 1080,
        height: 1080,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denis Jesus Palma Abanto - Blog',
    description: 'Read articles and insights by Denis Jesus Palma Abanto on photography, creativity, and personal experiences.',
    images: ['/images/Denis Jesus Palma Abanto 1.png'],
  },
}

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-gray-900/95 text-gray-100 shadow-md backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-amber-300">Denis Palma Abanto</Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-100 hover:text-amber-300 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/denis-jesus-palma-abanto" className="text-gray-100 hover:text-amber-300 transition-colors duration-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-amber-300 font-semibold">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/#gallery" className="text-gray-100 hover:text-amber-300 transition-colors duration-200">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-gray-100 hover:text-amber-300 transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Blog</h1>
            <p className="text-gray-600 mb-8 text-lg">Thoughts, stories, and insights from Denis Jesus Palma Abanto</p>
            
            <div className="space-y-10">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="md:flex">
                      <div className="md:flex-shrink-0 md:w-1/3 relative">
                        <div className="h-48 md:h-full w-full relative">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-6 md:p-8 md:w-2/3">
                        <div className="tracking-wide text-sm text-amber-500 font-semibold mb-1">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                        <h2 className="block mt-1 text-2xl leading-tight font-bold text-gray-900 hover:text-amber-600 mb-2">{post.title}</h2>
                        <p className="mt-2 text-gray-600">{post.description}</p>
                        <div className="mt-4 flex items-center">
                          <div className="text-sm">
                            <p className="text-gray-900 leading-none">By {post.author}</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <span className="inline-block text-amber-600 hover:text-amber-800 font-medium">
                            Read more →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Denis Jesus Palma Abanto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
