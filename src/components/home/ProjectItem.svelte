<script>
    export let image;
    export let caption;
    export let link;
</script>

<div class="py-12 lg:py-16">
    <div class="pb-4">
        <img class="h-auto max-w-full" src={image} alt>
    </div>  
    <div class="text-white underline">
        <a href={link}>{caption}</a>
    </div>
</div>