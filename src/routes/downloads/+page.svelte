<script lang="ts">
    export let data;
</script>

<svelte:head>
	<title>Charcoal | Downloads</title>
</svelte:head>

<main class="flex justify-center">
    <article class="max-h-screen md:w-3/4 flex flex-col md:justify-center gap-4 p-8 pb-20">
        <h2 class="font-family-mono">Downloads</h2>
        
        <div class="divider bg-slate-50" />
    
        <div class="h-full flex flex-col gap-2 overflow-y-auto">
            {#each data.downloads as download}
                <button class="border border-mate-pink hover:bg-midnight-blue rounded-md p-2">
                    <h3>Version {download.name}</h3>
                    <p>{download.description}</p>
                </button>
            {/each}
        </div>
    </article>
</main>