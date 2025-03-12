import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Denis Jesus Palma Abanto | Personal Site',
  description: 'Learn more about Denis Jesus Palma Abanto, his background, interests, and professional journey.',
  keywords: 'Denis Jesus Palma Abanto, Denis Palma Abanto, about, bio, background, professional journey',
  openGraph: {
    title: 'About Denis Jesus Palma Abanto',
    description: 'Learn more about Denis Jesus Palma Abanto, his background, interests, and professional journey.',
    url: 'https://denis.pe/denis-jesus-palma-abanto',
    siteName: 'Denis Jesus Palma Abanto Gallery',
    images: [
      {
        url: '/images/Denis Jesus Palma Abanto 1.png',
        width: 1080,
        height: 1080,
        alt: 'Denis Jesus Palma Abanto portrait',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Denis Jesus Palma Abanto',
    description: 'Learn more about Denis Jesus Palma Abanto, his background, interests, and professional journey.',
    images: ['/images/Denis Jesus Palma Abanto 1.png'],
  },
}

export default function AboutPage() {
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
              <Link href="/denis-jesus-palma-abanto" className="text-amber-300 font-semibold">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-100 hover:text-amber-300 transition-colors duration-200">
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
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">About Denis Jesus Palma Abanto</h1>
              
              <div className="md:flex md:items-center mb-8">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-amber-300">
                    <Image 
                      src="/images/Denis Jesus Palma Abanto 2.png"
                      alt="Denis Jesus Palma Abanto portrait" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h2 className="text-2xl font-bold text-gray-700 mb-3">Personal Background</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Hello! I&apos;m Denis Jesus Palma Abanto, born and raised in Peru with a passion for technology and the arts. 
                    My journey has taken me through various creative and technical endeavors, allowing me to develop a unique 
                    perspective that bridges multiple disciplines.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    When I&apos;m not working, you can find me capturing moments through photography, exploring new places, 
                    and connecting with people from diverse backgrounds.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Professional Journey</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  With a background in both creative and technical fields, I&apos;ve developed expertise in digital 
                  media, web development, and visual storytelling. Throughout my career, I&apos;ve collaborated with 
                  various organizations and individuals to create meaningful digital experiences.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  My approach combines technical precision with artistic vision, allowing me to develop solutions 
                  that are both functional and aesthetically pleasing. I believe in the power of technology to 
                  connect people and share stories that matter.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Skills & Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Technical Skills</h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Web Development</li>
                      <li>UI/UX Design</li>
                      <li>Digital Photography</li>
                      <li>Content Creation</li>
                      <li>SEO Optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Soft Skills</h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Creative Problem Solving</li>
                      <li>Project Management</li>
                      <li>Team Collaboration</li>
                      <li>Communication</li>
                      <li>Adaptability</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Personal Interests</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Beyond my professional life, I&apos;m passionate about photography, which you can explore in my gallery. 
                  I also enjoy traveling, learning about different cultures, and staying active through various outdoor activities.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I believe in continuous learning and personal growth. Each experience, whether professional or personal, 
                  contributes to my understanding of the world and shapes how I approach my work and relationships.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/#gallery" 
              className="inline-block px-6 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition duration-300"
            >
              Explore My Photo Gallery
            </Link>
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
