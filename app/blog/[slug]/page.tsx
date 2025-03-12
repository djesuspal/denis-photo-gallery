import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getBlogPostBySlug, getAllBlogPosts } from '@/data/blog-posts';

// Simplify the approach to match Next.js expectations
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: `${post.title} | Denis Jesus Palma Abanto`,
    description: post.description,
    keywords: `Denis Jesus Palma Abanto, Denis Palma Abanto, blog, ${post.title.toLowerCase()}`,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://denis.pe/blog/${post.slug}`,
      siteName: 'Denis Jesus Palma Abanto Gallery',
      images: [
        {
          url: post.coverImage,
          width: 1080,
          height: 1080,
          alt: post.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
  };
}

export function generateStaticParams() {
  const posts = getAllBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Simplified page component signature
export default function Page({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  // Function to convert markdown to HTML (very simple version)
  const renderMarkdown = (content: string) => {
    const paragraphs = content.split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      // Headings
      if (paragraph.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mb-6 mt-8">{paragraph.substring(2)}</h1>;
      }
      if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mb-4 mt-6">{paragraph.substring(3)}</h2>;
      }
      if (paragraph.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold mb-3 mt-5">{paragraph.substring(4)}</h3>;
      }
      
      // Lists
      if (paragraph.includes('\n1. ')) {
        const items = paragraph.split('\n').filter(item => item.trim());
        return (
          <ol key={index} className="list-decimal pl-5 mb-4 space-y-1">
            {items.map((item, i) => {
              const content = item.replace(/^\d+\.\s/, '');
              return <li key={i} className="text-gray-700">{content}</li>;
            })}
          </ol>
        );
      }
      
      if (paragraph.includes('\n- ')) {
        const items = paragraph.split('\n').filter(item => item.trim());
        return (
          <ul key={index} className="list-disc pl-5 mb-4 space-y-1">
            {items.map((item, i) => {
              const content = item.replace(/^-\s/, '');
              return <li key={i} className="text-gray-700">{content}</li>;
            })}
          </ul>
        );
      }
      
      // Regular paragraph
      return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>;
    });
  };
  
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
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link href="/blog" className="text-amber-600 hover:text-amber-800 font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Blog
              </Link>
            </div>
            
            <article className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-72 relative w-full">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="p-8">
                <div className="mb-4">
                  <div className="text-amber-500 font-medium mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
                  <p className="text-gray-600 text-lg mb-4">{post.description}</p>
                  <div className="text-gray-700 font-medium">By {post.author}</div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 prose max-w-none">
                  {renderMarkdown(post.content)}
                </div>
              </div>
            </article>
            
            <div className="mt-10 border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Continue Reading</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {getAllBlogPosts()
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="block">
                      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 relative">
                          <Image
                            src={relatedPost.coverImage}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-gray-800 hover:text-amber-600 mb-1">{relatedPost.title}</h4>
                          <p className="text-sm text-gray-500">{new Date(relatedPost.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Denis Jesus Palma Abanto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
