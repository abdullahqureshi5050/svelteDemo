<script lang="ts">
  // src/routes/(admin)/login/+page.sevelte
  import { goto } from '$app/navigation';

  let username = '';
  let password = '';
  let error = '';

  async function login() {
    error = '';

    try {
      const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert(data?.message)
        goto('/dashboard');
      } else {
        error = 'Invalid credentials';
      }
    } catch (e) {
      console.error(e);
      error = 'Server error';
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center">
  <div class="w-full max-w-sm p-6 border rounded-xl shadow">
    <h2 class="text-2xl font-bold mb-4">Admin Login</h2>

    <input
      placeholder="Username"
      bind:value={username}
      class="w-full mb-3 p-2 border rounded"
    />

    <input
      type="password"
      placeholder="Password"
      bind:value={password}
      class="w-full mb-3 p-2 border rounded"
    />

    {#if error}
      <p class="text-red-500 mb-2">{error}</p>
    {/if}

    <button
      on:click={login}
      class="w-full bg-orange-500 text-white p-2 rounded"
    >
      Login
    </button>
  </div>
</div>
