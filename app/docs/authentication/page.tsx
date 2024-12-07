import { Metadata } from 'next'
import { CodeBlock } from '@/components/docs/code-block'

export const metadata: Metadata = {
  title: 'Authentication - Frontline Documentation',
  description:
    'Learn about implementing authentication in frontend applications, including login systems, token management, and role-based access control.',
}

export default function AuthenticationPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold tracking-tight'>Authentication</h1>

      <section id='basic-login-system'>
        <h2 className='text-2xl font-semibold mb-4'>Basic Login System</h2>
        <p>Implementing a basic login system:</p>
        <CodeBlock
          snippets={{
            JS: `
// Vanilla JavaScript
async function login(username, password) {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Login error:', error);
    return false;
  }
}
          `,
            TS: `
// TypeScript
interface LoginResponse {
  token: string;
}

async function login(username: string, password: string): Promise<boolean> {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const data: LoginResponse = await response.json();
      localStorage.setItem('token', data.token);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Login error:', error);
    return false;
  }
}
          `,
            React: `
// React
import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        // Handle successful login
      } else {
        // Handle login error
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
          `,
            Svelte: `
<!-- Svelte -->
<script lang="ts">
  let username = '';
  let password = '';

  async function handleSubmit(event: Event) {
    event.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        // Handle successful login
      } else {
        // Handle login error
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  }
</script>

<form on:submit={handleSubmit}>
  <input
    type="text"
    bind:value={username}
    placeholder="Username"
  />
  <input
    type="password"
    bind:value={password}
    placeholder="Password"
  />
  <button type="submit">Login</button>
</form>
          `,
          }}
        />
      </section>

      {/* Add more sections as needed */}
    </div>
  )
}
