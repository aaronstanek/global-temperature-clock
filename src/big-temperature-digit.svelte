<script lang="ts">
	interface Props {
		value: string;
	}

	let { value }: Props = $props();
	let topValue = $state(' ');
	let bottomValue = $state(' ');

	let mover: HTMLDivElement | undefined = $state();

	const move = (next: string) => {
		topValue = bottomValue;
		bottomValue = next;
		if (mover === undefined) return;
		mover.classList.remove('final-position');
		setTimeout(() => {
			if (mover === undefined) return;
			mover.classList.add('final-position');
		}, 0);
	};

	$effect(() => {
		move(value);
	});
</script>

<div class="fixed-height">
	<div bind:this={mover} class="flex flex-col big-text final-position">
		<div class="digit">{topValue}</div>
		<div class="digit">{bottomValue}</div>
	</div>
</div>

<style>
	.digit {
		height: 36px;
	}
	.fixed-height {
		height: 36px;
		overflow: hidden;
		display: inline-block;
	}
	@keyframes go-up {
		0% {
			top: 0px;
		}
		100% {
			top: -36px;
		}
	}
	.big-text {
		font-size: var(--text-size-plus-1);
		font-family: var(--monospaced);
		position: relative;
	}
	.final-position {
		animation-name: go-up;
		animation-duration: 0.2s;
		top: -36px;
	}
</style>
