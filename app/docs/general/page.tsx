import { Metadata } from 'next'
import { CodeBlock } from '@/components/docs/code-block'
import { AddToReadingListButton } from '@/components/docs/add-to-reading-list-button'

export const metadata: Metadata = {
  title: 'General - Frontline Documentation',
  description:
    'General information about Frontline, including introduction, usage, and quick start guide.',
}

export default function GeneralDocsPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold tracking-tight' id='introduction'>
        General
      </h1>

      <section id='quick-start'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-semibold mb-4'>Quick Start</h2>
        </div>
        <p>
          To get started with Frontline, simply navigate to the category
          you&apos;re interested in and start exploring the snippets.
        </p>
      </section>

      <section id='copy-first-snippet'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-semibold mb-4'>
            Copy Your First Snippet
          </h2>
          <AddToReadingListButton
            title='Copy Your First Snippet'
            href='/docs/general#copy-first-snippet'
          />
        </div>
        <p>
          Here&apos;s an example of how easy it is to use a Frontline snippet:
        </p>
        <CodeBlock
          snippets={{
            JS: `
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Usage
const debouncedSearch = debounce((query) => {
  console.log('Searching for:', query);
}, 300);

document.querySelector('input').addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});
  `,
            TS: `
function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout!);
      func(...args);
    };
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Usage
const debouncedSearch = debounce((query: string) => {
  console.log('Searching for:', query);
}, 300);

document.querySelector('input')!.addEventListener('input', (e: Event) => {
  debouncedSearch((e.target as HTMLInputElement).value);
});
  `,
            React: `
import {useState} from "react";
// You need to install use-debounce dependency first, a very lightweight debounce library
import { useDebouncedCallback } from "use-debounce";

const DebouncedExample = () => {
  const [value, setValue] = useState("");

  const debounced = useDebouncedCallback((newValue) => {
    setValue(newValue); // Update the state after 500ms
    console.log("Debounced value:", newValue);
  }, 500);

  const handleChange = (event) => {
    debounced(event.target.value); // Call the function
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        onChange={handleChange}
        style={{ width: "100%", padding: "8px" }}
      />
      <p>Value: {value}</p>
    </div>
  );
};

export default DebouncedExample;

  `,
            //             Svelte: `
            // <script>
            //   import { onDestroy } from 'svelte';

            //   let value = '';
            //   let debouncedValue = '';
            //   let timeout;

            //   function debounce(func, wait) {
            //     return (...args) => {
            //       clearTimeout(timeout);
            //       timeout = setTimeout(() => func(...args), wait);
            //     };
            //   }

            //   const debouncedSetValue = debounce((text) => {
            //     debouncedValue = text;
            //   }, 300);

            //   function handleInput(event) {
            //     value = event.target.value;
            //     debouncedSetValue(value);
            //   }

            //   onDestroy(() => {
            //     clearTimeout(timeout);
            //   });
            // </script>

            // <input bind:value on:input={handleInput} />
            // <p>Debounced value: {debouncedValue}</p>
            //   `,
          }}
        />
      </section>

      <section id='framework-setup'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-semibold mb-4'>Framework Setup</h2>
          <AddToReadingListButton
            title='Framework Setup'
            href='/docs/general#framework-setup'
          />
        </div>
        <p>
          Here&apos;s how you might set up a basic project with different
          frameworks:
        </p>
        <CodeBlock
          snippets={{
            React: `
npm create vite@latest my-react-app --template react
cd my-react-app
npm install
npm run dev
        `,
            Vue: `
npm create vite@latest my-vue-app --template vue
cd my-vue-app
npm install
npm run dev
        `,
            Angular: `
npm install -g @angular/cli
ng new my-angular-app
cd my-angular-app
ng serve
        `,
            Svelte: `
npm create svelte@latest my-svelte-app
cd my-svelte-app
npm install
npm run dev
        `,
            Nextjs: `
npx create-next-app@latest my-next-app
cd my-next-app
npm install
npm run dev
        `,
            Astro: `
            npm create astro@latest my-astro-app
cd my-astro-app
npm install
npm run dev

            `,
          }}
        />
      </section>
    </div>
  )
}
