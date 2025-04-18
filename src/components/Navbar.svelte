<script>
    import { onMount, onDestroy } from 'svelte';
    
    let showDropdown = false;

    const toggleDropdown = () => {
        showDropdown = !showDropdown;
    }

    const handleResize = () => {
        // If window width is larger than 1024px, hide the dropdown
        if (window.innerWidth >= 1024) {
            showDropdown = false;
        }
    }
</script>

<svelte:window on:resize={handleResize} />

<div class="py-4 px-16 bg-black text-white text-2xl sticky top-0">
    <div class="flex items-center justify-between">
        <a class="hover:underline" href="/zeaj">zmra</a>
        <div class="hidden lg:inline text-lg">
            <a class="px-4 hover:underline" href="https://storage.googleapis.com/zeaj-website-static/zamoranos-resume-winter%202025.pdf" target="_blank">RESUME</a>
            <a class="px-4 hover:underline" href="/zeaj/about">ABOUT ME</a>
        </div>
        <span class="hidden lg:inline text-lg">(pronounced zéy-uh)</span>
        <button class="lg:hidden" on:click={toggleDropdown}>☰</button>
    </div>
</div>

<!--Dropdown content-->
{#if showDropdown}
    <div class="w-full bg-black text-white py-2 px-4 text-center fixed z-10">
        <a class="block py-2" href="https://storage.googleapis.com/zeaj-website-static/zamoranos-resume-winter%202025.pdf" target="_blank">RESUME</a>
        <a class="block py-2" href>ABOUT ME</a>
    </div>
{/if}