<script>
    export let title;
    export let description;
    export let category;
    export let image;
    export let gradient;
    export let url;
</script>

<div class="grid grid-cols-1 lg:grid-cols-[50%_50%] py-12 lg:py-16">
    <div>
        <a class="block text-4xl lg:text-5xl {gradient} py-8" href={url} target="_blank">{title}</a>
        <p class="text-lg text-slate-500 lg:text-xl">{description}</p>
        <p class="text-md text-slate-500 pt-4 lg:text-lg">{category}</p>
    </div>  
    <div class="pt-8 ml-auto">
        <img class="h-64" src={image} alt>
    </div>
</div>
<hr>