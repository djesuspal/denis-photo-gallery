'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Instagram, Twitter, Facebook } from 'lucide-react'
import Head from 'next/head'

// Generate array of image paths with personal context
const generateImagePaths = () => {
  // Add personal context descriptions
  const descriptions = [
    'personal photo', 'casual portrait', 'lifestyle moment',
    'social gathering', 'everyday life', 'candid moment',
    'personal style', 'daily life', 'memorable moment',
    'casual photography'
  ]

  return Array.from({ length: 41 }, (_, i) => {
    const descIndex = i % descriptions.length
    return {
      src: `/images/Denis Jesus Palma Abanto ${i + 1}.png`,
      alt: `Denis Jesus Palma Abanto - ${descriptions[descIndex]} ${i + 1}`,
      width: 1080,
      height: 1080
    }
  })
}

// Shuffle function
const shuffleArray = (array) => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function PersonalGallery() {
  const [images, setImages] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [profileImage, setProfileImage] = useState('')

  useEffect(() => {
    // Generate and shuffle images
    const allImages = generateImagePaths()
    const shuffledImages = shuffleArray(allImages)
    setImages(shuffledImages)
    
    // Set random profile image
    const randomIndex = Math.floor(Math.random() * 41)
    setProfileImage(shuffledImages[randomIndex].src)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  // Only render the component when images are loaded
  if (images.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>Denis Jesus Palma Abanto | Personal Photo Gallery</title>
        <meta name="title" content="Denis Jesus Palma Abanto | Personal Photo Gallery" />
        <meta name="description" content="Welcome to Denis Jesus Palma Abanto's (Denis Palma Abanto) personal photo gallery. Explore a collection of moments and memories capturing life's journey through personal photographs." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/" />
        <meta property="og:title" content="Denis Jesus Palma Abanto - Personal Photo Gallery" />
        <meta property="og:description" content="Explore Denis Jesus Palma Abanto's personal photo collection. A visual journey through moments and memories." />
        <meta property="og:image" content="/images/Denis Jesus Palma Abanto 1.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://your-domain.com/" />
        <meta property="twitter:title" content="Denis Jesus Palma Abanto - Personal Photo Gallery" />
        <meta property="twitter:description" content="Explore Denis Jesus Palma Abanto's personal photo collection. A visual journey through moments and memories." />
        <meta property="twitter:image" content="/images/Denis Jesus Palma Abanto 1.png" />

        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="Denis Jesus Palma Abanto, Denis Palma Abanto, personal gallery, photo collection, personal photos, memories" />
        <meta name="author" content="Denis Jesus Palma Abanto" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-domain.com" />

        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "name": "Denis Jesus Palma Abanto's Personal Gallery",
            "image": "/images/Denis Jesus Palma Abanto 1.png",
            "description": "A personal photo gallery showcasing moments and memories of Denis Jesus Palma Abanto.",
            "url": "https://your-domain.com",
            "mainEntity": {
              "@type": "Person",
              "name": "Denis Jesus Palma Abanto",
              "sameAs": [
                "https://instagram.com/[your-handle]",
                "https://twitter.com/[your-handle]",
                "https://facebook.com/[your-handle]"
              ]
            }
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <header className="sticky top-0 z-50 bg-gray-900/95 text-gray-100 shadow-md backdrop-blur-sm">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-amber-300">Denis Palma Abanto</h1>
            <ul className="flex space-x-6">
              {['home', 'about', 'gallery', 'contact'].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className="text-gray-100 hover:text-amber-300 transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(`#${section}`);
                      const offset = 80;
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elementRect = element.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition = elementPosition - offset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="pt-16">
          <section id="home" className="py-20 text-center bg-gray-900 text-gray-100">
            <h2 className="text-5xl font-bold mb-4 text-amber-300">Denis Jesus Palma Abanto</h2>
            <p className="text-xl text-gray-300 mb-8">Personal Photo Gallery</p>
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-gray-900">
              <a href="#gallery">Explore Gallery</a>
            </Button>
          </section>

          <section id="about" className="py-24 bg-gray-100">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                {profileImage && (
                  <div className="relative w-[400px] h-[400px]">
                    <Image
                      src={profileImage}
                      alt="Denis Jesus Palma Abanto"
                      fill
                      className="rounded-full shadow-xl border-4 border-amber-300 object-cover"
                      priority
                    />
                  </div>
                )}
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  Hello! I'm Denis Jesus Palma Abanto, and this is my personal photo gallery where I share moments and memories from my life's journey.
                </p>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  This collection of photos represents various moments in my life, each telling its own unique story and capturing memories that I cherish.
                </p>
              </div>
            </div>
          </section>

          <section id="gallery" className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                          priority={index < 6}
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full bg-gray-900/95 p-0">
                      <DialogTitle className="sr-only">
                        Image {currentImageIndex + 1} of {images.length}
                      </DialogTitle>
                      <div className="relative w-full h-[80vh]">
                        <Image
                          src={images[currentImageIndex].src}
                          alt={images[currentImageIndex].alt}
                          fill
                          className="object-contain"
                        />
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-amber-300 transition-colors"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-10 h-10" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-amber-300 transition-colors"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-10 h-10" />
                        </button>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-24 bg-gray-900 text-gray-100">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-8 text-amber-300">Get in Touch</h2>
              <p className="text-xl text-gray-300 mb-8">Connect with me on social media</p>
              <div className="mt-12 flex justify-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors duration-200">
                  <Instagram className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors duration-200">
                  <Twitter className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors duration-200">
                  <Facebook className="w-8 h-8" />
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Denis Jesus Palma Abanto. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
