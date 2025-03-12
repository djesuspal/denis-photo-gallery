import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md text-center">
        <div className="w-48 h-48 mx-auto relative mb-6">
          <Image 
            src="/images/Denis Jesus Palma Abanto 1.png"
            alt="Denis Jesus Palma Abanto" 
            fill
            className="rounded-full object-cover border-4 border-amber-300"
          />
        </div>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back to exploring my gallery and blog.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="px-6 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition duration-300"
          >
            Return Home
          </Link>
          <Link 
            href="/gallery" 
            className="px-6 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 transition duration-300"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}
