import { Metadata } from 'next'
import { CodeBlock } from '@/components/docs/code-block'
import Section from '@/components/docs/section'

export const metadata: Metadata = {
  title: 'Advanced Snippets - Frontline Documentation',
  description:
    'Explore advanced frontend development techniques including custom React hooks, Vue composables, and complex state management.',
}

export default function AdvancedSnippetsPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold tracking-tight'>Advanced Snippets</h1>
      <Section
        sectionId='optimized-fetch-with-abortcontroller'
        title='Optimized Fetch with AbortController'
        groupId='advanced-snippets'
      >
        <p>Using the AbortController API to cancel a fetch request after a delay:</p>
        <CodeBlock
          snippets={{
            JS: `
            const fetchWithAbort = (url) => {
  const controller = new AbortController();
  const signal = controller.signal;

  const fetchPromise = fetch(url, { signal })
    .then(response => response.json())
    .catch(err => {
      if (err.name === 'AbortError') {
        console.error('Fetch aborted');
      } else {
        console.error('Fetch error:', err);
      }
    });

  // Abort after 5 seconds
  setTimeout(() => controller.abort(), 5000);

  return fetchPromise;
};

// Usage
fetchWithAbort('https://api.example.com/data')
  .then(data => console.log(data));
`,
          }}
        />
      </Section>
      <Section
        groupId='advanced-snippets'
        sectionId='error-boundary'
        title='Error Boundary'
      >
        <p>Using the Error Boundary to catch and handle errors:</p>
        <CodeBlock
          snippets={{
            React: `
          class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update the state to show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can register the error or send it to an error reporting service
    console.error('Error capturado:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops, something went wrong.</h1>; // UI fallback
    }
    return this.props.children;
  }
}

// Uso
const App = () => (
  <ErrorBoundary>
    <ComponentQuePuedeFallar />
  </ErrorBoundary>
);

          `,
          }}
        />
      </Section>
    </div>
  )
}
