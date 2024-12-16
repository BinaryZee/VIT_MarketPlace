<script>
    export let name;
    export let description;
</script>
<div class="flex w-1/4 items-center my gap-4">
    <img
      src="/favicon.png"
      alt=""
      class="size-20 rounded-lg object-cover"
    />
    <div>
      <h3 class="text-lg/tight font-medium text-gray-900">{name}</h3>
      <p class="mt-0.5 text-gray-700">
        {description}
      </p>
    </div>
</div>

<style>
    .my{
        margin-left: 40vw;
        margin-top: 2vh;
        border: 1px solid black;
        border-radius: 10px;
    }
</style>