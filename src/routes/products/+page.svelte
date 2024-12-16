<script lang="ts">
    import Card from "$lib/homePage/card.svelte";
    import type { ProductsType } from "../../types";
    export let data: {data:ProductsType[]}; 
    const products:ProductsType[] = data.data;
</script>
{#if products && products.length > 0}
    {#each products as product}
        <Card name={product.product_name} description={product.product_des} />
    {/each}
{:else}
    <p>No products available.</p>
{/if}
