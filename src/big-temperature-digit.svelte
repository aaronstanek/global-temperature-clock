<script lang="ts">
	export let value: string;
	let topValue = ' ';
	let bottomValue = ' ';

	let mover: HTMLDivElement | undefined;

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

	$: move(value);
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
