<script lang="ts">
	import BigTemperature from './big-temperature.svelte';
	import LinkButton from '$lib/buttons/link-button.svelte';
	import Anchor from '$lib/links/anchor.svelte';
	import { scrollToId } from '$lib/links/scroll-to-id';
	import NoBreakCite from '$lib/citations/no-break-cite.svelte';
	import Bibliography from '$lib/citations/bibliography.svelte';
	import { compileCitations } from '$lib/citations/compile';
	import { unicode } from '$lib/unicode';
	import Link from '$lib/links/link.svelte';
	import Head from '$lib/head.svelte';
	import Hidden from '$lib/hidden.svelte';

	const cite = compileCitations({
		ipccData6thReport: {
			title:
				'AR6 SYR Data for Figure SPM.4(a): Global surface temperature changes in °C relative to 1850–1900',
			accessed: '8 Feb 2024',
			publisher: 'Intergovernmental Panel on Climate Change',
			author: 'Fyfe, John; Fox-Kemper, Baylor; Kopp, Robert; Garner, Gregory',
			url: 'https://ipcc-browser.ipcc-data.org/browser/dataset/6132/0'
		},
		ipcc6RA: {
			title: 'Climate Change 2023 Synthesis Report',
			accessed: '30 Sep 2024',
			publisher: 'Intergovernmental Panel on Climate Change',
			url: 'https://www.ipcc.ch/report/ar6/syr/downloads/report/IPCC_AR6_SYR_LongerReport.pdf'
		},
		ipcc2023ForPolicymakers: {
			title: 'Climate Change 2023 Synthesis Report: Summary for Policymakers',
			accessed: '3 Oct 2024',
			publisher: 'Intergovernmental Panel on Climate Change',
			url: 'https://www.ipcc.ch/report/ar6/syr/downloads/report/IPCC_AR6_SYR_SPM.pdf'
		},
		voxLivestock: {
			title: 'UN numbers say meat is bad for the climate. The reality is worse.',
			accessed: '24 Sep 2024',
			author: 'Kevany, Sophie',
			publisher: 'Vox Media',
			url: 'https://www.vox.com/future-perfect/23738600/un-fao-meat-dairy-livestock-emissions-methane-climate-change'
		},
		breakthroughLivestock: {
			title: 'Livestock Don’t Contribute 14.5% of Global Greenhouse Gas Emissions',
			accessed: '24 Sep 2024',
			author: 'Blaustein-Rejto, Dan; Gambino, Chris',
			publisher: 'The Breakthrough Institute',
			url: 'https://thebreakthrough.org/issues/food-agriculture-environment/livestock-dont-contribute-14-5-of-global-greenhouse-gas-emissions'
		},
		foodWaste: {
			title: 'Food waste is responsible for 6% of global greenhouse gas emissions',
			accessed: '1 Oct 2024',
			author: 'Ritchie, Hannah',
			publisher: 'Our World in Data',
			url: 'https://ourworldindata.org/food-waste-emissions'
		},
		usdaFoodExpiration: {
			title: 'Before You Toss Food, Wait. Check It Out!',
			accessed: '1 Oct 2024',
			author: 'Gravely, Marianne',
			publisher: 'United States Department of Agriculture',
			url: 'https://www.usda.gov/media/blog/2013/06/27/you-toss-food-wait-check-it-out'
		},
		epaPreventingFoodWaste: {
			title: 'Preventing Wasted Food At Home',
			accessed: '1 Oct 2024',
			publisher: 'United States Environmental Protection Agency',
			url: 'https://www.epa.gov/recycle/preventing-wasted-food-home'
		},
		projectDrawdownThingsToDo: {
			title: 'The powerful role of household actions in solving climate change',
			accessed: '2 Oct 2024',
			publisher: 'Project Drawdown',
			author: 'Frischmann, Chad; Chissell, Crystal',
			url: 'https://drawdown.org/insights/the-powerful-role-of-household-actions-in-solving-climate-change'
		},
		howBadIsMyGasStove: {
			title: 'How bad is my gas stove? (Part One)',
			accessed: '2 Oct 2024',
			publisher: 'Carbon Switch',
			author: 'Thomas, Michael',
			url: 'https://carbonswitch.com/how-bad-is-my-gas-stove-part-one'
		},
		nprGasStove: {
			title: 'We need to talk about your gas stove, your health and climate change',
			accessed: '2 Oct 2024',
			publisher: 'National Public Radio',
			author: 'Brady, Jeff',
			url: 'https://www.npr.org/2021/10/07/1015460605/gas-stove-emissions-climate-change-health-effects'
		},
		wrenActions: {
			title: 'Actions',
			accessed: '1 Oct 2024',
			publisher: 'Wren Climate',
			url: 'https://www.wren.co/actions'
		}
	});
</script>

<Head
	canonicalUrl="https://aaronstanek.com/blog/global-temperature-clock"
	title="Global Temperature Clock"
	description="See the current global temperature relative to the pre-industrial average and learn what you can do to combat Climate Change."
/>

<Hidden><h1>Global Temperature Clock</h1></Hidden>

<BigTemperature />

<div class="flex justify-center learn-more">
	<LinkButton callback={() => scrollToId('title')}>Cool Earth Down</LinkButton>
</div>

<Anchor name="title"
	><h2 class="page-title text-center">Here's what you can do about Climate Change</h2></Anchor
>

<div class="mt-6">
	Climate change is a serious threat, but you can make a difference. Below are a few things that you
	can do that actually have a meaningful impact.
</div>

<h3 class="mt-12">{unicode.pointRight} Eat Your Vegetables</h3>

<div class="mt-6">Yes, that's the top thing on this list!</div>

<div class="mt-6">
	Farm animals account for somewhere between 10% and 20% of all greenhouse gas <NoBreakCite
		ref={[cite.get.voxLivestock, cite.get.breakthroughLivestock]}>emissions.</NoBreakCite
	>
	While researchers debate the exact figure, the bottom line is that farm animals contribute a lot to
	Climate Change. Farmed vegetables have a significantly smaller climate impact.
</div>

<div class="mt-6">
	Replacing some of your meat-focused meals with vegetable-focused meals reduces the demand for
	meat, allowing farms to raise fewer animals, reducing greenhouse gas emissions from farms.
</div>

<div class="mt-6">
	While if might feel like one person cutting back on their meat consumption won't make a
	difference, consider what happens if everyone were to make that small change. A small change,
	multiplied by a lot of people, is a gigantic impact!
</div>

<h3 class="mt-12">{unicode.pointRight} Save Your Food, Save Your Wallet</h3>

<div class="mt-6">
	Food waste accounts for at least 6% of all greenhouse gas <NoBreakCite ref={cite.get.foodWaste}
		>emissions.</NoBreakCite
	>
</div>

<div class="mt-6">
	To be clear, this is food that you are <span style="text-decoration: underline"
		>buying with your own money</span
	>, and then <span style="text-decoration: underline">throwing out</span> before you eat it.
</div>

<div class="mt-6">There's two easy ways to reduce food waste at home.</div>

<div class="mt-6">
	The first easy way to reduce food waste is to double check that food has actually spoiled before
	you throw it out. Food expiration dates typically refer to quality, not safety. In many cases,
	food that is past its expiration date is still safe to eat and <NoBreakCite
		ref={cite.get.usdaFoodExpiration}>nutritious.</NoBreakCite
	>
	For more details, <Link
		href="https://www.usda.gov/media/blog/2013/06/27/you-toss-food-wait-check-it-out"
		>read the USDA guide</Link
	> on this topic.
</div>

<div class="mt-6">
	The second easy way to reduce food waste is to be more deliberate about your grocery purchases.
	When you go to the store, only buy the food that you're actually going to eat, and when you get
	home, store that food <NoBreakCite ref={cite.get.epaPreventingFoodWaste}>properly.</NoBreakCite>
	For more details on how to do this, <Link
		href="https://www.epa.gov/recycle/preventing-wasted-food-home">read the EPA guide</Link
	> on this topic.
</div>

<h3 class="mt-12">{unicode.pointRight} Get More Efficient</h3>

<div class="mt-6">
	After changing your food habits, the next biggest action you can take as an individual is to use
	less <NoBreakCite ref={cite.get.projectDrawdownThingsToDo}>power.</NoBreakCite>
	Here's a few suggestions on how to boost your energy efficiency while reducing your reliance on fossil
	<NoBreakCite ref={cite.get.projectDrawdownThingsToDo}>fuels.</NoBreakCite>
</div>

<h4 class="mt-6">At Home</h4>
<div class="flex flex-col pl-5">
	<div>- Install Solar Panels</div>
	<div>- Improve Insulation</div>
	<div>- Switch Old Lightbulbs for LEDs</div>
	<div>- Install a Solar Hot Water Heater</div>
	<div>- Switch Old Windows for Insulated Glass</div>
	<div>- Install a High-Efficiency Heat Pump</div>
	<div>- Install a Smart Thermostat</div>
</div>

<h4 class="mt-6">In Transit</h4>
<div class="flex flex-col pl-5">
	<div>- Use public transit, bike, and walk whenever feasible</div>
	<div>- If you have to use a car, then carpool</div>
	<div>- Swap your gasoline car for an electric car</div>
</div>

<h4 class="mt-6">An interesting sidenote:</h4>

<div>
	Before doing research for this section, it seemed likely that replacing a gas stove with an
	electric stove would appear on the list of high-impact home improvements, but no! Compared to the
	other items on the home improvement list, switching to an electric stove has a relatively small
	impact on climate change. That being said, gas stoves are still
	<span style="text-decoration: underline">terrible for human health</span>, and broadly switching
	away from natural gas powered appliances is good for both the planet and for <NoBreakCite
		ref={[cite.get.nprGasStove, cite.get.howBadIsMyGasStove]}>people.</NoBreakCite
	>
</div>

<h3 class="mt-12">{unicode.pointRight} Shape Society</h3>

<div class="mt-6">
	Sadly, there's only so much that individual people can do to directly combat Climate Change. About
	70% of greenhouse gas emissions come from companies and <NoBreakCite
		ref={cite.get.projectDrawdownThingsToDo}>governments.</NoBreakCite
	>
	To address the bulk of the challenge, you'll need to help support society-level changes.
</div>

<div class="mt-6">
	If you live in a country with elections, the easiest way to support these society-level changes is
	by voting for candidates and policies that align with reducing greenhouse gas emissions. The
	following types of policies are known to be effective at combating Climate <NoBreakCite
		ref={cite.get.ipcc2023ForPolicymakers}>Change.</NoBreakCite
	>
</div>

<div class="flex flex-col pl-5">
	<div class="mt-6">
		- Policies that increase the cost of fossil fuels through increased taxation or subsidy removal.
		Governments can avoid negative side-effects of these policies by using the added tax revenue or
		saved subsidy money to benefit economically vulnerable populations.
	</div>
	<div class="mt-6">
		- Policies that reduce the cost of alternative energy through subsidies, infrastructure
		investment, or research funding.
	</div>
	<div class="mt-6">
		- Policies that reduce deforestation and ecosystem disruption, especially in tropical areas.
		Some examples include policies that reduce meat consumption, policies that reduce food waste,
		and policies that increase the productivity of existing farmland.
	</div>
	<div class="mt-6">
		- Policies that make commutes easier. Some examples include policies that change how cities are
		designed so jobs and housing are closer together, and policies that build and maintain
		infrastructure for public transportation, bicycles, and walking.
	</div>
	<div class="mt-6">
		- Policies that make it easier for developing countries to access funding for climate projects.
	</div>
</div>

<div class="mt-6">
	Talking to your friends, family, and colleagues about the policies above will help these policies
	get adopted in your area. If you're in the United States, you can <Link
		href="https://www.vote.gov/register">register to vote using this link</Link
	>.
</div>

<div class="mt-6">
	Outside of voting, you can join a local climate advocacy group to help shape public awareness,
	public opinion, and public policy.
</div>

<h2 class="text-center mt-12">Science Disclaimer</h2>

<div class="mt-6">
	The temperature listed at the top of this page is correct insofar as it is based on the best
	science available in 2024. However, the listed temperature hides a great deal of nuance and
	requires appropriate context to be understood correctly.
</div>

<div class="mt-6">
	Firstly, the temperature listed at the top of this page has far too many significant figures. The
	unnaturally large number of digits allows us to illustrate the increase in temperature during the
	first few seconds of a reader's visit to the page. Real-world Climate Change operates on the scale
	of decades, not seconds, and is therefore much less engaging to the human brain's painfully short
	attention span.
</div>

<div class="mt-6">
	Secondly, Earth's real-world temperature is much more erratic than the steadily increasing number
	up top suggests. Earth sometimes gets warmer and sometimes gets cooler; Climate Change refers to
	the average change in temperature over a period of time. For illustrative purposes, it is more
	useful to show the increasing average than it is to show the erratic real temperature.
</div>

<div class="mt-6">
	For the mathematically-inclined readers: the temperature at the top of the page is produced from a
	piecewise linear function that linearly interpolates the annual temperature projections of the
	IPCC's 6th Assessment Report's median model. <Link
		href="https://github.com/aaronstanek/global-temperature-clock"
		>Read the source code for this page</Link
	>.
</div>

<div class="mt-6">
	The source <NoBreakCite ref={cite.get.ipccData6thReport}>data</NoBreakCite> used to compute the temperature
	at the top of the page is used under license from its creators.
</div>

<h2 class="text-center mt-12 mb-6">Bibliography</h2>

<Bibliography highlightPipe={cite.highlightPipe} ordered={cite.ordered} />

<style>
	.learn-more {
		margin-top: 5vh;
	}
	.page-title {
		margin-top: 100vh;
	}
</style>
