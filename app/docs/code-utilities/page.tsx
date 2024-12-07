import { Metadata } from 'next'
import { CodeBlock } from '@/components/docs/code-block'
import Section from '@/components/docs/section'

export const metadata: Metadata = {
  title: 'Code Utilities - Frontline Documentation',
  description:
    'Learn about useful code utilities including fetch wrappers, error handling, and Axios setup for frontend development.',
}

export default function CodeUtilitiesPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold tracking-tight'>Code Utilities</h1>

      <Section sectionId='fetch-wrappers' title='Fetch Wrappers' groupId='code-utilities'>
        <p>A reusable fetch wrapper with error handling for GET request, but its pretty similar with others,</p>
        <p>just add the body to the parameters</p>
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
import { useEffect, useState } from 'react';

const fetchWrapper = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('HTTP error! Status: {response.status}');
  }
  return await response.json();
};

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchWrapper('https://api.example.com/data')
      .then(setData)
      .catch(err => console.error(err));
  }, []);

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
};

          `,
          }}
        />
      </Section>
      <Section groupId='code-utilities' sectionId='error-handling' title='Error Handling'>
        <CodeBlock snippets={{
          JS: `
          const fetchWithErrorHandling = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      switch (response.status) {
        case 404:
          throw new Error('Not Found');
        case 500:
          throw new Error('Server Error');
        default:
          throw new Error('Unexpected error: {response.status}');
      }
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};
          `,
          TS: `
          type ErrorHandler = (status: number) => void;

const fetchWithErrorHandling = async <T>(
  url: string,
  errorHandler: ErrorHandler
): Promise<T> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      errorHandler(response.status);
      throw new Error('HTTP error: {response.status}');
    }
    return await response.json() as T;
  } catch (error) {
    console.error('Fetch Error:', (error as Error).message);
    throw error;
  }
};

// Usage
fetchWithErrorHandling('https://api.example.com/data', (status) => {
  if (status === 404) console.error('Resource not found!');
  else console.error('Other error:', status);
});
          `
        }}/>
      </Section>
      <Section groupId='code-utilities' sectionId='axios-setup' title='Axios Setup'>
        <p>Axios is a popular JavaScript library for making HTTP requests.</p>
        <p>To use Axios, you need to install it as a dependency in your project. You can do this using npm, yarn, or pnpm..etc:</p>
        <CodeBlock snippets={{
          JS: `
npm install axios
// or
yarn add axios
// or
pnpm install axios
          `,
        }}/>
        <p>Once Axios is installed, you can import it into your project and start making HTTP requests.</p>
        <CodeBlock snippets={{
          JS: `
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

fetchData();
          `,
        }}/>
      </Section>
    </div>
  )
}
