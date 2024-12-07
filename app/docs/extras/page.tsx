import { Metadata } from 'next'
import { CodeBlock } from '@/components/docs/code-block'

export const metadata: Metadata = {
  title: 'Extras - Frontline Documentation',
  description:
    'Additional resources and information for Frontline, including offline documentation and how to contribute.',
}

export default function ExtrasPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold tracking-tight'>Extras</h1>

      <section id='offline-documentation'>
        <h2 className='text-2xl font-semibold mb-4'>Offline Documentation</h2>
        <p>
          To access Frontline documentation offline, you can clone our GitHub
          repository and run the documentation locally. Here&apos;s how:
        </p>
        <CodeBlock
          snippets={{
            JS: `
# Clone the repository
git clone https://github.com/frontline/docs.git

# Navigate to the project directory
cd docs

# Install dependencies
npm install

# Run the documentation locally
npm run dev
          `,
            TS: `
# Clone the repository
git clone https://github.com/frontline/docs.git

# Navigate to the project directory
cd docs

# Install dependencies
npm install

# Run the documentation locally
npm run dev
          `,
            React: `
# Clone the repository
git clone https://github.com/frontline/docs.git

# Navigate to the project directory
cd docs

# Install dependencies
npm install

# Run the documentation locally
npm run dev
          `,
            Svelte: `
# Clone the repository
git clone https://github.com/frontline/docs.git

# Navigate to the project directory
cd docs

# Install dependencies
npm install

# Run the documentation locally
npm run dev
          `,
          }}
        />
        <p className='mt-4'>
          Once the server is running, you can access the documentation at{' '}
          <code>http://localhost:3000</code>.
        </p>
      </section>

      <section id='contributing'>
        <h2 className='text-2xl font-semibold mb-4'>
          Contributing to FrontLine
        </h2>
        <p>
          We welcome contributions to Frontline! Here&apos;s how you can
          contribute:
        </p>
        <ol className='list-decimal list-inside space-y-2 mt-4'>
          <li>Fork the repository on GitHub.</li>
          <li>Clone your fork locally.</li>
          <li>Create a new branch for your feature or bug fix.</li>
          <li>
            Make your changes and commit them with clear, descriptive commit
            messages.
          </li>
          <li>Push your changes to your fork on GitHub.</li>
          <li>Submit a pull request to the main Frontline repository.</li>
        </ol>
        <p className='mt-4'>
          Before submitting a pull request, please ensure that your code follows
          our style guidelines and passes all tests. For more detailed
          information on contributing, please read our CONTRIBUTING.md file in
          the repository.
        </p>
      </section>
    </div>
  )
}
