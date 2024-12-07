import { Metadata } from 'next'
import { CodeBlock } from '@/components/docs/code-block'
import { AddToReadingListButton } from '@/components/docs/add-to-reading-list-button'

export const metadata: Metadata = {
  title: 'Navigation & URLs - Frontline Documentation',
  description:
    'Learn about URL parameter extraction, redirects, routing, and more in frontend development.',
}

export default function NavigationAndUrlsPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold tracking-tight'>Navigation & URLs</h1>
      <section id='extracting-url-parameters'>
        <div className='flex justify-between'>
          <h2 className='text-2xl font-semibold mb-4'>
            Extracting URL Parameters
          </h2>
          <AddToReadingListButton
            title='Extracting URL Parameters'
            href='/docs/navigation-and-urls#extracting-url-parameters'
          />
        </div>
        <p>
          Easily retrieve and manipulate parameters from the URL to customize
          your app's behavior.
        </p>
        <CodeBlock
          snippets={{
            JS: `
const urlParams = new URLSearchParams(window.location.search);
// Getting query params if exists
const id = urlParams.get('id');
console.log(id);
          `,
            TS: `
const urlParams = new URLSearchParams(window.location.search);
// Getting query params if exists
const id: string | null = urlParams.get('id');
console.log(id);
          `,
            Nextjs: `
import {useSearchParams} from 'next/navigation';
const searchParams = useSearchParams();
//Usage
const id = searchParams.get('id');
console.log(id);
`,
            React: `
// React with React Router
import { useParams } from 'react-router-dom';

function Component() {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  return <div>ID: {id}</div>;
}
          `,
            Svelte: `
<!-- Svelte with SvelteKit -->
<script lang="ts">
  import { page } from '$app/stores';
  
  $: id = $page.params.id;
</script>

<div>ID: {id}</div>
          `,
          }}
        />
        <h2>Accessing the pathname</h2>
        <CodeBlock
          snippets={{
            'JS/TS': `
const pathname = window.location.pathname;
console.log(pathname); // /your/path/name
          `,
            Nextjs: `
          import {usePathname} from 'next/navigation';
const pathname = usePathname();
console.log(pathname);  // /your/path/name
          `,
            Svelte: `
<script lang="ts">
  import { page } from '$app/stores';
  
  $: pathname = $page.url.pathname;
</script>

<div>Pathname: {pathname}</div>
          `,
          }}
        />
        <h2>Accessing the URL Object</h2>
        <CodeBlock
          snippets={{
            'JS/TS': `
const url = new URL(window.location.href);
console.log(url.pathname); // /your/path/name
console.log(url.searchParams.get('q')); // "search-term"
          `,
            Svelte: `
<script lang="ts">
  import { page } from '$app/stores';
  
  $: url = $page.url;
</script>

<div>URL: {url}</div>
          `,
          }}
        />
      </section>

      <section id='redirects-and-routing'>
        <div className='flex justify-between'>
          <h2 className='text-2xl font-semibold mb-4'>Redirects & Routing</h2>
          <AddToReadingListButton
            title='Redirects & Routing'
            href='/docs/navigation-and-urls#redirects-and-routing'
          />
        </div>
        <CodeBlock
          snippets={{
            JS: `
function redirect(url) {
  window.location.href = url;
}

// Usage
redirect('/new-page');
          `,
            TS: `
function redirect(url: string): void {
  window.location.href = url;
}

// Usage
redirect('/new-page');
          `,
            React: `
// React with React Router
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Redirect from="/old-path" to="/new-path" />
      </Switch>
    </BrowserRouter>
  );
}
          `,
            Svelte: `
<!-- Svelte with SvelteKit -->
<script lang="ts">
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./Home.svelte";
  import About from "./About.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>
  <main>
    <Route path="/"><Home /></Route>
    <Route path="/about"><About /></Route>
  </main>
</Router>
          `,
          }}
        />
        <h2>Dynamic Routing</h2>
        <CodeBlock
          snippets={{
            'JS/TS': `
//Loads a new page            
window.location.assign('/new-page'); 
//Changes the url without reloading the page
window.history.pushState(null, '', '/new-page'); 
//Replace the actual url without creating a new history entry
window.history.replaceState(null, '', '/new-page'); 
            `,
            React: `
  // Using React Router
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const goToPage = () => navigate('/new-page');
  return <button onClick={goToPage}>Go to New Page</button>;
};
            `,
            Nextjs: `
// Using Next.js
import useRouter from 'next/navigation';

const MyComponent = () => {
  const router = useRouter();

  const goToPage = () => router.push('/new-page');
  return <button onClick={goToPage}>Go to New Page</button>;
};
            `,
            Svelte: `
<!-- Svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';

  function handleClick() {
    goto('/new-page');
  }
</script> 

<button on:click={handleClick}>Go to new page</button>

            `,
          }}
        />
        <h2>URL State Management</h2>
        <p>This allows to store information like pagination or search terms</p>
        <CodeBlock
          snippets={{
            'JS/TS': `
            //Filters are optional
            const setFilters = (filters) => {
  const params = new URLSearchParams(filters);
  window.history.replaceState(null, '', '?{params.toString()}');

  // You can also set query params using the searchParams property
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set('name', 'Kevin');
  //Then update the url
  window.history.replaceState(null, '', '?{searchParams.toString()}');
};
};
            `,
            React: `
            import { useSearchParams } from 'react-router-dom';

const MyComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateFilter = (newFilter) => {
    setSearchParams({ filter: newFilter });
  };

  return (
    <div>
      <p>Current filter: {searchParams.get('filter')}</p>
      <button onClick={() => updateFilter('popular')}>Set Popular Filter</button>
    </div>
  );
};
            `,
          }}
        />
      </section>

      <section id='scroll-to-sections'>
        <div className='flex justify-between'>
          <h2 className='text-2xl font-semibold mb-4'>Scroll to Sections</h2>
          <AddToReadingListButton
            title='Scroll to Sections'
            href='/docs/navigation-and-urls#scroll-to-sections'
          />
        </div>
        <CodeBlock snippets={{
          'JS/TS': `
const scrollToSection = () => {
  const section = document.querySelector('#section-id');
  section.scrollIntoView();

  //you can also combine the element Id with an anchor tag
};
          `,
          React: `
import { useRef, useEffect } from 'react';

const MyComponent = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionRef.current.scrollIntoView();
  }, []);

  return (
    <div ref={sectionRef} id='section-id'>
      Section content
    </div>
  );
};
          `,
          Svelte: `
<script lang="ts">
  import { onMount } from 'svelte';

  let sectionRef: HTMLElement;

  onMount(() => {
    sectionRef.scrollIntoView();
  });
</script>

<div bind:this={sectionRef} id="section-id">
  Section content
</div>
          `, 
        }} />
      </section>
    </div>
  )
}
