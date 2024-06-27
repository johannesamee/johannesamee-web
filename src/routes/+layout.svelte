<script lang="ts">
	import Footer from './footer.svelte'
	import Header from './header.svelte'
	import PageTransition from './transition.svelte'
	import { page } from '$app/stores'
	import '../app.css'

	export let data

	$: isMainPage = $page.url.pathname === '/'
</script>

<div class="max-w-screen-{isMainPage ? 'lg' : 'sm'} layout mx-auto">
	<Header />

	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

	<Footer />
</div>
