<script>
    export let title;
    export let date;
    export let description;
</script>

<div class="py-8 max-w-4xl">
    <p class="font-bold text-2xl">{title}</p>
    <span class="my-2 py-2 px-8 inline-block text-lg bg-slate-200 text-slate-500 rounded-2xl">{date}</span>
    <p class="text-lg">{description}</p>
</div>