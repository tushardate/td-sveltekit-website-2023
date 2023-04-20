<script>
	export let data;
	console.log(data.about);
	const { title, name, email, phone, bio, headline, workExperience, awards, skills, edu } =
		data.about;

	const filterClients = workExperience
		.map((e) => e.expClients.split(',').map((val) => val.trim()))
		.flat()
		.sort();
	const clients = [...new Set(filterClients)];
	const filterAwards = awards.map((e) => e.awardName);
	const awardList = [...new Set(filterAwards)];
</script>

<div class="px-3 my-40">
	<div class="px-16 text-lg">
		<div class="headline -ml-2 pb-12">
			<p class="ml-auto w-5/6 text-8xl font-neuemachina headline">{headline}</p>
		</div>
		<div class="contact">
			<div class="flex">
				<p class="w-1/6 py-12">Contact</p>
				<div class="w-5/6 col-count-1 c-gap border-b py-12">
					<a class="hover:text-tdblue" href={`tel:+1-${phone}`}>
						<p>{phone}</p>
					</a>
					<a class="hover:text-tdblue" href={`mailto:${email}`}>
						<p>{email}</p>
					</a>
					<a class="hover:text-tdblue" href="http://www.linkedin.com/pub/tushar-date/11/315/a25" target="_blank">
						<p>LinkedIn</p>
					</a>
				</div>
			</div>
		</div>
		<div class="bio">
			<div class="flex">
				<p class="w-1/6 py-12">About</p>
				<p class="w-5/6 col-count-2 c-gap border-b py-12">{@html bio}</p>
			</div>
		</div>
		<div class="experience">
			<div class="flex">
				<p class="w-1/6 py-12">Experience</p>
				<div class="w-5/6 col-count-2 c-gap border-b py-12">
					{#each workExperience as exp}
						<div class="pb-4 avoid-break">
							<p>{exp.expRole}</p>
							<p class="text-sm">{exp.expAgency}</p>
							<p class="text-sm">{exp.expDates}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="brands">
			<div class="flex">
				<p class="w-1/6 py-12">Brands</p>
				<div class="w-5/6 col-count-3 c-gap border-b py-12">
					{#each clients as client}
						<div class="">
							<p>{client}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="awards">
			<div class="flex">
				<p class="w-1/6 py-12">Recognition</p>
				<div class="w-5/6 col-count-3 c-gap py-12">
					{#each awardList as aw}
						<div class="">
							<p>{aw}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.headline {
		letter-spacing: -0.035em;
	}
	.c-gap {
		column-gap: 64px;
	}
	.col-count-4 {
		column-count: 4;
	}
	.avoid-break {
		break-inside: avoid;
	}
</style>
