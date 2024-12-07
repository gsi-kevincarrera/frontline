import { Metadata } from 'next'
import { CodeBlock } from '@/components/docs/code-block'

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

      <section id='throttling'>
        <h2 className='text-2xl font-semibold mb-4'>Throttling</h2>
        <p>
          To limit the number of times a function is executed, you can use
          throttling:
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
            Svelte: `
<!-- Svelte Debounce and Throttle -->
<script lang="ts">
  import { onDestroy } from 'svelte';

  function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout>;
    return function executedFunction(...args: Parameters<T>) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return function throttledFunction(...args: Parameters<T>) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  let searchTerm = '';
  let debouncedSearchTerm = '';

  const debouncedSearch = debounce((term: string) => {
    debouncedSearchTerm = term;
    // Perform search operation
  }, 300);

  const throttledScroll = throttle(() => {
    // Handle scroll event
  }, 100);

  onDestroy(() => {
    window.removeEventListener('scroll', throttledScroll);
  });

  window.addEventListener('scroll', throttledScroll);
</script>

<input
  type="text"
  bind:value={searchTerm}
  on:input={() => debouncedSearch(searchTerm)}
  placeholder="Search..."
/>

<p>Debounced search term: {debouncedSearchTerm}</p>
          `,
          }}
        />
      </section>
    </div>
  )
}
