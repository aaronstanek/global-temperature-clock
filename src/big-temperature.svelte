<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { unicode } from '$lib/unicode';
	import { PiecewiseLinearModel } from './model';
	import BigTemperatureDigit from './big-temperature-digit.svelte';

	let intervalTimerId: number | undefined;
	let currentTemperature = $state(0);

	onMount(() => {
		const model = PiecewiseLinearModel();
		const update = () => {
			currentTemperature = model(Date.now());
		};
		intervalTimerId = setInterval(update, 200);
		update();
	});

	onDestroy(() => {
		if (intervalTimerId !== undefined) clearInterval(intervalTimerId);
	});

	const formatTemperature = (t: number): string => {
		const numberParts = t.toString().split('.');
		const whole = numberParts[0] ?? '0';
		let fraction = numberParts[1] ?? '';
		while (fraction.length < 9) {
			fraction = fraction + '0';
		}
		return `${whole}.${fraction.slice(0, 9)}`;
	};

	let formattedTemperature = $derived(formatTemperature(currentTemperature));
</script>

<div class="text-center intro line-1">Since the Industrial Revolution,</div>

<div class="text-center intro line-2">Earth's temperature has risen by</div>

<div class="big-temperature">
	<div class="flex justify-center">
		{#each formattedTemperature as character}
			<BigTemperatureDigit value={character} />
		{/each}
		<div class="temperature-text">{unicode.degree}C</div>
	</div>
</div>

<style>
	.temperature-text {
		font-size: var(--text-size-plus-1);
		font-family: var(--monospaced);
		padding-left: 10px;
	}
	.big-temperature {
		margin-top: 5vh;
		margin-bottom: 10vh;
	}
	.intro {
		font-size: var(--text-size-plus-1);
	}
	.line-1 {
		margin-top: 10vh;
	}
	.line-2 {
		margin-top: 5vh;
	}
</style>
