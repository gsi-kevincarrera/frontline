import { Metadata } from 'next'
import { CodeBlock } from '@/components/docs/code-block'

export const metadata: Metadata = {
  title: 'Advanced Snippets - Frontline Documentation',
  description:
    'Explore advanced frontend development techniques including custom React hooks, Vue composables, and complex state management.',
}

export default function AdvancedSnippetsPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold tracking-tight'>Advanced Snippets</h1>

      <section id='custom-hooks-react'>
        <h2 className='text-2xl font-semibold mb-4'>Custom Hooks (React)</h2>
        <p>Creating a custom hook for managing local storage:</p>
        <CodeBlock
          snippets={{
            JS: `
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

// Usage
function App() {
  const [name, setName] = useLocalStorage('name', 'John Doe');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
          `,
            TS: `
import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

// Usage
function App() {
  const [name, setName] = useLocalStorage<string>('name', 'John Doe');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
    </div>
  );
}
          `,
            React: `
import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

// Usage
function App() {
  const [name, setName] = useLocalStorage<string>('name', 'John Doe');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
          `,
            Svelte: `
<script lang="ts">
  import { writable } from 'svelte/store';

  function createLocalStorage<T>(key: string, initialValue: T) {
    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;
    const store = writable<T>(initial);

    store.subscribe(value => {
      localStorage.setItem(key, JSON.stringify(value));
    });

    return store;
  }

  const name = createLocalStorage('name', 'John Doe');
</script>

<input
  type="text"
  bind:value={$name}
/>

<p>Stored name: {$name}</p>
          `,
          }}
        />
      </section>

      {/* Add more sections as needed */}
    </div>
  )
}
