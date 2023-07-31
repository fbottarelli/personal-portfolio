<!-- Script to add Markdown -->
<script>
    import MarkdownIt from 'markdown-it';
    import sanitizeHtml from 'sanitize-html';
	import { afterUpdate } from 'svelte';
	const md = new MarkdownIt();
	
	let markdown = '';
	let result = '';
	
	afterUpdate(() => {
		result = sanitizeHtml(md.render(markdown), {
			allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'h1', 'h2', 'img' ])
		});
	});
</script>


<!-- Main-section -->
<div class="flex-col"> 
    <div class="font-serif font-semibold text-2xl">
        <p> My Works</p>
    </div>
    <div>
        <p>Sunt do velit ullamco deserunt nulla incididunt consectetur est. Elit aute aliquip proident deserunt minim excepteur culpa qui velit nulla commodo adipisicing excepteur cillum. Ea duis ullamco commodo incididunt anim ex proident ipsum reprehenderit consectetur veniam. Eu velit reprehenderit anim voluptate.</p>
    </div>

<!-- Markdown editor -->
<div class="markdown-editor my-20">
	<div class="markdown-editor__panel">
		<span class="markdown-editor__panel__label">Markdown</span>
		<textarea class="markdown-editor__textarea" bind:value={markdown} />
	</div>
	<div class="markdown-editor__panel">
		<span class="markdown-editor__panel__label">Output</span>
		<div class="markdown-editor__result-html">
			{@html result}
		</div>
	</div>
</div>


</div> 
<!-- End of main div -->

