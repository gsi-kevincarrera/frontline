import { Metadata } from 'next'
import { CodeBlock } from '@/components/docs/code-block'

export const metadata: Metadata = {
  title: 'Code Utilities - Frontline Documentation',
  description:
    'Learn about useful code utilities including fetch wrappers, error handling, and Axios setup for frontend development.',
}

export default function CodeUtilitiesPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold tracking-tight'>Code Utilities</h1>

      <section id='fetch-wrappers'>
        <h2 className='text-2xl font-semibold mb-4'>Fetch Wrappers</h2>
        <p>A reusable fetch wrapper with error handling:</p>
        <CodeBlock
          snippets={{
            JS: `
async function fetchWrapper(url, options = {}) {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

// Usage
fetchWrapper('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
          `,
            TS: `
interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

async function fetchWrapper<T>(url: string, options: FetchOptions = {}): Promise<T> {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

// Usage
interface UserData {
  id: number;
  name: string;
}

fetchWrapper<UserData>('https://api.example.com/user')
  .then(data => console.log(data.name))
  .catch(error => console.error('Error:', error));
          `,
            React: `
import { useState, useEffect } from 'react';

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

async function fetchWrapper<T>(url: string, options: FetchOptions = {}): Promise<T> {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

function useFetch<T>(url: string, options: FetchOptions = {}) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchWrapper<T>(url, options)
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserComponent() {
  const { data, loading, error } = useFetch<{ name: string }>('https://api.example.com/user');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>User: {data?.name}</div>;
}
          `,
            Svelte: `
<script lang="ts">
  import { onMount } from 'svelte';

  interface FetchOptions extends RequestInit {
    headers?: Record<string, string>;
  }

  async function fetchWrapper<T>(url: string, options: FetchOptions = {}): Promise<T> {
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }

      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }

  export let url: string;
  let data: any = null;
  let loading: boolean = true;
  let error: Error | null = null;

  onMount(async () => {
    try {
      data = await fetchWrapper(url);
      loading = false;
    } catch (err) {
      error = err as Error;
      loading = false;
    }
  });
</script>

{#if loading}
  <div>Loading...</div>
{:else if error}
  <div>Error: {error.message}</div>
{:else}
  <div>Data: {JSON.stringify(data)}</div>
{/if}
          `,
          }}
        />
      </section>

      {/* Add more sections as needed */}
    </div>
  )
}
