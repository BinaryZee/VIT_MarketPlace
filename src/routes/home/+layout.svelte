<script lang="ts">
	import { navigating } from '$app/stores';
    import'../../app.css';
	let { children } = $props();	
	
</script>
{#if !!$navigating}
<div class="loader-wrapper">
    <div class="loader"></div>
</div>

{/if}
	<!-- navbar -->
<div class="w-full h-[7vh] border-2 border-black flex items-center justify-between">
	<div class="flex bg-red-500 w-[20vw] h-full">
		<a href="/"><img src="/favicon.png" alt="" class="h-[6vh]"></a>
	</div>
	<div class="flex bg-green-500 w-[50vw] h-full">
		<ol>
			<li><a href="/home">home</a></li>
		</ol>
	</div>
	<div class="flex bg-blue-500 w-[30vw] h-full">
		<ol class="flex w-full flex-row justify-around">
			<li>Sign-In</li>
			<li>Sign-Up</li>
		</ol>
	</div>
</div>
{@render children()}
<style>
	/* Wrapper to cover the entire screen */
.loader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8); /* White with slight transparency */
    backdrop-filter: blur(10px); /* Blurry background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Ensure it's above other elements */
}

/* Loader Animation */
.loader {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-top: 5px solid #3498db; /* Customize the color */
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

/* Keyframes for spinner animation */
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

</style>