import { Metadata } from 'next'
import { CodeBlock } from '@/components/docs/code-block'
import { Code } from 'lucide-react'
import Section from '@/components/docs/section'

export const metadata: Metadata = {
  title: 'Performance Utilities - Frontline Documentation',
  description:
    'Learn about performance optimization techniques including debouncing, throttling, and lazy loading in frontend development.',
}

export default function PerformanceUtilitiesPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold tracking-tight'>
        Performance Utilities
      </h1>

      <Section
        sectionId='throttling'
        title='Throttling'
        groupId='performance-utilities'
      >
        <p>
          This utility limit the number of times a function is executed, in a
          period of time
        </p>
        <CodeBlock
          snippets={{
            'JS/TS': `
// Throttle function
 let lastScrollTime = 0;

  window.addEventListener('scroll', () => {
    const now = Date.now();
    if (now - lastScrollTime >= 1000) { // Limit to once every 1000ms
      console.log('Scroll event triggered');
      lastScrollTime = now;
    }
  });
          `,
            React: `
// Using lodash            
import React, { useEffect } from "react";
import { throttle } from "lodash";

const ScrollComponent = () => {
  const handleScroll = throttle(() => {
    console.log("Scrolling...");
  }, 1000); // Ejecuta cada 1000 ms

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div style={{ height: "2000px" }}>Scroll me!</div>;
};

export default ScrollComponent;

          `,
          }}
        />
      </Section>
      <Section
        sectionId='memoization'
        title='Memoization'
        groupId='performance-utilities'
      >
        <p>
          Memoization is a technique used to cache the results of a function, so
          that subsequent calls
        </p>
        <p>with the same arguments will not re-execute the function.</p>
        <CodeBlock
          snippets={{
            JS: `
  const memoizedFactorial = (() => {
    const cache = new Map();
    return (n) => {
      if (cache.has(n)) return cache.get(n);
      let result = n <= 1 ? 1 : n * memoizedFactorial(n - 1);
      cache.set(n, result);
      return result;
    };
  })();

  console.log(memoizedFactorial(5)); // First time calculation
  console.log(memoizedFactorial(5)); // From cache
            `,
            TS: `
const memoizedFactorial = (() => {
  const cache = new Map<number, number>();
  return (n: number): number => {
    if (cache.has(n)) return cache.get(n) as number;
    let result = n <= 1 ? 1 : n * memoizedFactorial(n - 1);
    cache.set(n, result);
    return result;
  };
})();

console.log(memoizedFactorial(5)); // First time calculation
console.log(memoizedFactorial(5)); // From cache

            `,
            React: `
          import React, { useMemo } from "react";

const ExpensiveCalculationComponent = ({ num }) => {
  const expensiveCalculation = (n) => {
    console.log("Running expensive calculation...");
    return n * 2;
  };

  const result = useMemo(() => expensiveCalculation(num), [num]);

  return <div>Result: {result}</div>;
};

export default ExpensiveCalculationComponent;

          `,
          }}
        />
      </Section>
      <Section
        sectionId='lazy-loading'
        title='Lazy Loading'
        groupId='performance-utilities'
      >
        <p>
          Lazy loading is a technique used to load components or data only when
          they are needed, improving the initial
        </p>
        <p> load time of your application.</p>
        <CodeBlock
          snippets={{
            JS: `
<!-- Lazy loading an image using IntersectionObserver API-->
<img src="placeholder.jpg" data-src="large-image.jpg" alt="Lazy loaded image" class="lazy">

<script>
  const lazyImages = document.querySelectorAll('.lazy');

  const loadImage = (image) => {
    image.src = image.dataset.src;
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadImage(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  lazyImages.forEach(image => {
    observer.observe(image);
  });
</script>
            `,
            TS: `
const lazyImages = document.querySelectorAll<HTMLImageElement>('.lazy');

const loadImage = (image: HTMLImageElement): void => {
  image.src = image.dataset.src || '';
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadImage(entry.target as HTMLImageElement);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

lazyImages.forEach(image => {
  observer.observe(image);
});
            `,
            React: `
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App = () => (
  <div>
    <h1>Welcome to my app</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  </div>
);

export default App;

            `,
          }}
        />
      </Section>
      <Section groupId='performance-utilities' sectionId='image-optimization' title='Image Optimization'>
        <p>Image optimization is the process of reducing the size of an image without affecting its quality.</p>
        <p>There are several techniques for image optimization, including:</p>
        <ul className='list-disc list-inside space-y-2 mt-4'>
          <li>Lossless compression: Reducing the file size without losing any image quality.</li>
          <li>Lossy compression: Reducing the file size while maintaining some level of image quality.</li>
          <li>Image resizing: Resizing an image to a smaller size while maintaining its aspect ratio.</li>
          <li>Image format conversion: Converting an image from one format to another.</li>
        </ul>
        <p>There are many tools available for image optimization, including online services and command-line tools.</p>
        <p>Highly recommended to use webp format and <a href="https:/www.squoosh.app" className='text-blue-500 underline' target='_blank'>Squoosh</a></p>  
        <CodeBlock
          snippets={{
            JS: `
// Using sharp
const image = await sharp(inputImagePath).resize(100, 100).toFile(outputImagePath);

// Using imagemagick
convert inputImagePath -resize 100x100 outputImagePath

// Using imagemin
imagemin([inputImagePath]).dest(outputImagePath).run();

// Using sharp
const image = await sharp(inputImagePath).resize(100, 100).toFile(outputImagePath);

// Using imagemagick
convert inputImagePath -resize 100x100 outputImagePath

// Using imagemin
imagemin([inputImagePath]).dest(outputImagePath).run();
            `,
            NextJs: `
            // Use the optimize Image component from next
            import Image from 'next/image';
            const imageUrl = 'https://example.com/image.jpg';
            <Image
              src={imageUrl}
              alt="Image"
              width={100}
              height={100}
              layout="responsive"
              objectFit="cover"
            `
          }}          
        />

      </Section>
    </div>
  )
}
