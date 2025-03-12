import { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "my-photography-journey",
    title: "My Photography Journey Through the Years",
    description: "Explore how my passion for photography began and evolved over time, including pivotal moments and lessons learned along the way.",
    date: "2025-03-01",
    author: "Denis Jesus Palma Abanto",
    coverImage: "/images/Denis Jesus Palma Abanto 3.png",
    content: `
# My Photography Journey Through the Years

Photography has been a cornerstone of my creative expression for over a decade now. What started as a casual hobby quickly evolved into a passion that has shaped how I see and interact with the world around me.

## The Beginning

I still remember my first camera - a simple point-and-shoot that my parents gave me for my birthday. Despite its limited capabilities, that camera opened up a new world of possibilities. I spent countless hours photographing everything around me, from family gatherings to urban landscapes in my hometown.

The technical limitations of that first camera became a blessing in disguise. Without complex settings to worry about, I focused entirely on composition and lighting - fundamentals that would serve as the foundation for my photographic style.

## Evolution and Growth

As my skills improved, so did my equipment. Each new camera brought new possibilities and challenges, pushing me to continually expand my technical knowledge and creative horizons.

One pivotal moment came during a trip to the Peruvian highlands. The breathtaking landscapes and rich cultural heritage I encountered there ignited a deeper appreciation for documentary photography. Capturing authentic moments and telling stories through images became my primary focus.

## Finding My Style

It took years of experimentation to develop what I now consider my photographic voice. I've learned that my work resonates most when it balances technical precision with emotional impact. I strive to create images that not only please the eye but also evoke feeling and curiosity in the viewer.

While I enjoy many genres, from portraiture to landscape photography, I've found that my strongest work emerges when I photograph people in their natural environments. There's something magical about capturing genuine expressions and interactions.

## Looking Forward

Photography continues to be an evolving journey. Even now, I approach each photoshoot with both excitement and humility, knowing there's always something new to learn.

Through this blog, I hope to share not only my images but also the stories and insights behind them. Whether you're a fellow photographer or simply appreciate visual storytelling, I invite you to join me on this ongoing adventure.

Stay tuned for more posts about specific techniques, memorable shoots, and the philosophy behind my work.
    `,
  },
  {
    slug: "capturing-authentic-moments",
    title: "The Art of Capturing Authentic Moments in Photography",
    description: "Discover my approach to capturing genuine emotions and authentic moments in portrait and documentary photography.",
    date: "2025-02-15",
    author: "Denis Jesus Palma Abanto",
    coverImage: "/images/Denis Jesus Palma Abanto 10.png",
    content: `
# The Art of Capturing Authentic Moments in Photography

In a world saturated with perfectly posed and heavily edited images, there's something refreshingly powerful about photographs that capture authentic moments. As a photographer, I've found that my most impactful work comes from documenting genuine emotions and interactions rather than manufacturing them.

## Beyond the Posed Smile

While there's certainly a place for carefully composed portraits, my passion lies in capturing people as they truly are. The subtle glance between friends, an unguarded laugh, or a moment of quiet contemplation - these fleeting instances reveal far more about a person than any posed shot ever could.

The challenge, of course, is creating an environment where these authentic moments can emerge naturally. This requires a delicate balance: being present enough to capture the moment while remaining unobtrusive enough not to influence it.

## Building Trust and Connection

The foundation of authentic photography is trust. When subjects feel comfortable in your presence, they're more likely to let their guard down and reveal their true selves. I spend time getting to know the people I photograph, engaging in conversation and establishing a genuine connection before even picking up my camera.

This approach is particularly important in documentary and street photography, where the line between observer and intruder can be thin. Respecting people's boundaries while still seeking those honest moments is an ongoing ethical consideration.

## Technical Considerations for Authentic Photography

Capturing authentic moments also requires technical readiness. Some practical approaches I've developed include:

1. **Always being prepared**: Camera settings adjusted for the environment, lens cap off, and ready to shoot at a moment's notice
2. **Embracing continuous shooting**: Using burst mode to capture a sequence of expressions rather than a single frame
3. **Prioritizing speed over perfection**: Sometimes a slightly imperfect image that captures a genuine moment is worth far more than a technically perfect shot that misses the emotion
4. **Working with available light**: Using flash can disrupt natural moments, so I've learned to work with available light whenever possible

## The Reward

There's something truly special about reviewing your photos and finding you've captured a moment of genuine emotion. These images often become the most treasured - both for me as the photographer and for the subjects themselves.

In my next post, I'll share specific techniques for becoming "invisible" as a photographer, allowing you to document events without disrupting them. Until then, I encourage you to look for those authentic moments in your own photography practice.
    `,
  },
  {
    slug: "personal-photography-projects",
    title: "The Importance of Personal Photography Projects",
    description: "Why personal projects are crucial for creative growth and how they've helped shape my photographic identity.",
    date: "2025-01-20",
    author: "Denis Jesus Palma Abanto",
    coverImage: "/images/Denis Jesus Palma Abanto 15.png",
    content: `
# The Importance of Personal Photography Projects

As photographers, it's easy to get caught up in client work, technical details, or chasing trends. While these aspects of photography certainly have their place, I've found that personal projects are where true growth and artistic development occur.

## What Makes a Personal Project?

A personal project is any photographic endeavor undertaken primarily for yourself rather than for clients or external validation. It might be a specific theme you explore over time, a particular technique you want to master, or documentation of a subject that matters deeply to you.

The defining characteristic is that you set the parameters and pursue the project out of genuine interest and creative curiosity rather than external obligation.

## Why Personal Projects Matter

### Finding Your Voice

Perhaps the most valuable aspect of personal projects is how they help you discover and refine your unique photographic voice. When you're not shooting to meet someone else's vision, you're free to experiment and follow your intuition.

My own journey to finding a distinctive style accelerated dramatically when I committed to a year-long project photographing daily life in my neighborhood. Without client expectations to meet, I found myself naturally gravitating toward certain compositions, subjects, and editing styles that now form the core of my photographic identity.

### Technical Growth Through Freedom

Personal projects provide the perfect space for technical experimentation. Want to master manual focus, try a new lighting technique, or play with alternative processes? A personal project gives you the freedom to fail, learn, and try again without the pressure of delivering specific results.

### Sustaining Passion

Photography should be joyful, but professional demands can sometimes drain that joy. Personal projects reconnect you with the excitement and curiosity that likely drew you to photography in the first place.

Even during my busiest periods with commercial work, I make time for personal photography. These projects serve as a creative recharge, preventing burnout and keeping my approach fresh.

## Starting Your Own Personal Project

If you're inspired to begin a personal project, here are some guiding principles:

1. **Choose something meaningful**: The most successful personal projects are rooted in genuine interest or passion
2. **Set flexible parameters**: Give yourself enough structure to stay focused, but enough freedom to explore
3. **Commit to a timeframe**: Whether it's a week, a month, or a year, defining a duration helps maintain momentum
4. **Share selectively**: Consider keeping your project private during its early stages to avoid external influences

## My Current Personal Project

Currently, I'm working on a project documenting traditional craftspeople in my region. The skills and knowledge these artisans possess are gradually disappearing, and I feel compelled to create a visual record of their work and stories.

This project has pushed me in new directions technically, as I navigate varied lighting conditions in workshops and studios. More importantly, it's connected me with remarkable individuals whose dedication to their craft is truly inspiring.

In future posts, I'll share more specific examples from my personal projects and detailed advice on how to structure your own. Until then, I encourage you to consider what subjects or techniques genuinely excite you, and how you might explore them through a personal project.
    `,
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
