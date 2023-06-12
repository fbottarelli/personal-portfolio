<script>
  import "../app.css";
	import Nav from "../components/Nav.svelte";
  import Button from '../components/Button.svelte'
</script>


<Nav />

<!-- Aside navbar -->
<!-- <aside class="sticky md:w-[150px] md:flex-shrink-0 mb-8 mx-4 md:mx-0">
    <div class="sticky lg:top-20">
    <nav class="flex flex-row md:flex-col relative">
        <div class="flex flex-row md:flex-col">
        <a href="./" class="mr-12 md:mb-4">Home</a>
        <a href="./about" class="mr-4">About me</a>
        <a href="./works">Works</a>
        </div>
        <Button>
          Toggle
        </Button>
    </nav>
    </div>
</aside> -->



<style>
	:global(body) {
		background-color: #f2eee2;
		color: #000000;
		transition: background-color 0.3s
	}
	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}
</style>


<slot />