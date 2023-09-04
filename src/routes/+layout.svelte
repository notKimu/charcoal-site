<script lang="ts">
    import "$lib/css/app.css";
</script>

<header class="absolute bottom-2 mr-auto right-0 ml-auto left-0 w-fit h-16 flex flex-row items-center gap-3 bg-midnight-blue border border-breeze-pink rounded-md p-3 z-50">
    <a class="logo h-full" href="/">
        <img class="h-full" src="/svg/logo.svg" alt="download" />
    </a>
    <span class="text-xl">|</span>

    <a class="h-full hover:p-1  hover:bg-breeze-pink rounded-md" href="/downloads">
        <img class="h-full" src="/svg/download.svg" alt="download" />
    </a>
    <a class="h-full hover:p-1  hover:bg-breeze-pink rounded-md" href="/docs">
        <img class="h-full" src="/svg/docs.svg" alt="documentation" />
    </a>
    <a class="h-full hover:p-1  hover:bg-breeze-pink rounded-md" href="https://github.com/notKimu/charcoal-site">
        <img class="h-full" src="/svg/repo.svg" alt="github repository" />
    </a>
    <a class="h-full hover:p-1  hover:bg-breeze-pink rounded-md" href="/donate">
        <img class="h-full" src="/svg/donate.svg" alt="donate ko-fi" />
    </a>
</header>

<slot />

<style>
    .logo:hover {
        animation: rainbow-so-gay 2s ease infinite;
    }

    @keyframes rainbow-so-gay {
        0% {
            filter: hue-rotate(0deg);
        }
        100% {
            filter: hue-rotate(360deg);
        }
    }
</style>