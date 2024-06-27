<script lang="ts">
	import * as config from '$lib/config'
	import { Linkedin, Rss, Github } from 'lucide-svelte'
	import { createLinkPreview, melt } from '@melt-ui/svelte'
	import { fly } from 'svelte/transition'

	const {
		elements: { trigger, content, arrow },
		states: { open }
	} = createLinkPreview({
		forceVisible: true
	})
</script>

<footer class="flex justify-between">
	<p>{config.title} &copy {new Date().getFullYear()}</p>
	<div class="flex gap-3">
		<div class="trigger me-2" use:melt={$trigger}>
			<img
				src="https://media.licdn.com/dms/image/D4D03AQEXI0MHYf3fQA/profile-displayphoto-shrink_200_200/0/1710513333483?e=1724889600&v=beta&t=sH3WNF2xdILIzdPQwj5rjrw7PgKgoPJuzL8dbUWQnxk"
				alt="Linkedin Profile Picture"
				class="h-full w-full rounded-full bg-neutral-900 object-contain p-1"
			/>
			<span class="sr-only">Open Melt UI Details</span>
		</div>

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
								<div class="text-neutral-400">Delivery Lead</div>
							</div>
						</div>
						<div class="m-0 text-neutral-700">TBA</div>
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

		<a href="https://www.linkedin.com/in/johannes-am%C3%A9e-bj%C3%B6rkdahl-ab7495a9" target="_blank"
			><Linkedin /></a
		>
		<a href="/rss.xml" target="_blank"><Rss /></a>
		<a href="https://github.com/johannesamee" target="_blank"><Github /></a>
	</div>
</footer>

<style>
	.trigger {
		@apply flex h-8 w-8 items-center justify-center;
		@apply rounded-full bg-white p-0 text-sm font-medium;
		@apply text-magnum-900 transition-colors hover:bg-white/90;
		@apply focus-visible:ring focus-visible:ring-magnum-400 focus-visible:ring-offset-2;
	}
	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
	}

	footer a {
		align-content: center;
	}

	p {
		color: var(--text-2);
	}
</style>
