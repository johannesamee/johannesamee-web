<script lang="ts">
	import { createLinkPreview, melt } from '@melt-ui/svelte'
	import { fly } from 'svelte/transition'

	const {
		elements: { trigger, content, arrow },
		states: { open }
	} = createLinkPreview({
		forceVisible: true
	})
</script>

<article class="prose lg:prose-xl">
	<h1>Contact</h1>

	<a
		class="trigger"
		href="https://www.linkedin.com/in/johannes-amée-björkdahl-ab7495a9"
		target="_blank"
		rel="noopener noreferrer"
		use:melt={$trigger}
	>
		<img
			src="https://media.licdn.com/dms/image/D4D03AQEXI0MHYf3fQA/profile-displayphoto-shrink_200_200/0/1710513333483?e=1724889600&v=beta&t=sH3WNF2xdILIzdPQwj5rjrw7PgKgoPJuzL8dbUWQnxk"
			alt="Melt UI Logo"
			class="h-full w-full rounded-full bg-neutral-900 object-contain p-1"
		/>
		<span class="sr-only">Open Melt UI Details</span>
	</a>

	{#if $open}
		<div
			use:melt={$content}
			transition:fly={{ y: -5, duration: 100 }}
			class=" z-10 rounded-md bg-white shadow-sm"
		>
			<div class="w-[300px] rounded-md bg-white p-5 shadow-sm">
				<div class="flex flex-col gap-2">
					<img
						src="https://media.licdn.com/dms/image/D4D03AQEXI0MHYf3fQA/profile-displayphoto-shrink_200_200/0/1710513333483?e=1724889600&v=beta&t=sH3WNF2xdILIzdPQwj5rjrw7PgKgoPJuzL8dbUWQnxk"
						alt="Linkedin Profile Picture"
						class="object-fit block h-14 w-14 rounded-full bg-neutral-900 p-1"
					/>
					<div class="flex flex-col gap-4">
						<div>
							<div class="font-bold text-neutral-900">Johannes Amée Björkdahl</div>
							<div class="text-neutral-400">Decerno AB | LinkedIn</div>
						</div>
					</div>
					<div class="m-0 text-neutral-700">
						Johannes focuses on clear communication between all parties involved to guarantee that
						the best product is delivered.
					</div>
					<div class="flex gap-4">
						<div class="flex gap-1">
							<a
								class="text-neutral-400 underline"
								href="https://www.linkedin.com/company/decerno-ab/">Decerno AB</a
							>
						</div>
						<div class="flex gap-1">
							<div class="text-neutral-400">Gothenburg</div>
						</div>
					</div>
				</div>
			</div>
			<div use:melt={$arrow} />
		</div>
	{/if}
</article>

<style lang="postcss">
	.trigger {
		@apply flex h-12 w-12 items-center justify-center;
		@apply rounded-full bg-white p-0 text-sm font-medium;
		@apply text-magnum-900 transition-colors hover:bg-white/90;
		@apply focus-visible:ring focus-visible:ring-magnum-400 focus-visible:ring-offset-2;
	}
</style>
