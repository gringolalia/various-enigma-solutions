<template lang="pug">
#app
	div
		b-navbar(toggleable='md' type='dark' variant='primary')
			b-navbar-brand(href='/')
				i.fas.fa-sun.fa-2x.mr-3
				| Engenho Novo LLC

			b-navbar-toggle(target='nav-collapse')

			b-collapse#nav-collapse(is-nav)
				b-navbar-nav

					b-nav-item-dropdown.active(text='Sabedoria' no-caret)

						template(v-slot:button-content)
							i.material-icons.mr-2 keyboard_arrow_down
							| Scholasticisms au Gogo

						b-dropdown-item(to='empiricism')
							i.fas.fa-balance-scale.fa-lg.mr-3
							| Empiricism

						b-dropdown-item(href='existential')
							i.material-icons.md-24.mr-3 waves
							| Existentialism

						b-dropdown-item(href='hegelian')
							i.fas.fa-chess-knight.fa-lg.mr-3
							| Hegelianism

						b-dropdown-item(href='idealist')
							i.material-icons.mr-3 beach_access
							|  Idealism

						b-dropdown-item(href='kantian')
							i.material-icons.mr-3 my_location
							| Kantianism

						b-dropdown-item(href='marxism')
							i.material-icons.mr-3 directions_bike
							| Marxism

						b-dropdown-item(href='phenomenology')
							i.material-icons.mr-3 directions_run
							| Phenomenology

						b-dropdown-item(href='positivism')
							i.fas.fa-sun.fa-lg.mr-3
							| Positivism

						b-dropdown-item(href='pragmaticism')
							i.fas.fa-strikethrough.fa-lg.mr-3
							| Pragmaticism

						b-dropdown-item(href='/rationalist')
							i.fas.fa-bullseye.fa-lg.mr-3
							| Rationalism

						b-dropdown-item(href='/realist')
							i.material-icons.mr-3 pool
							| Realism

				b-navbar-nav.ml-auto

					b-nav-item-dropdown.active.d-none.d-md-block.ml-2(right no-caret)

						template(v-slot:button-content)
							i.material-icons.mr-2 keyboard_arrow_up
							| Enigmata

						b-dropdown-item(href='/adivinha')
							i.fas.fa-angle-double-down.mr-3
							| Adivinha

						b-dropdown-item(href='/alegoria')
							i.fas.fa-power-off.mr-3
							| Alegoria

						b-dropdown-item(href='/arcano')
							i.fas.fa-fighter-jet.mr-3
							| Arcano

						b-dropdown-item(href='/brenha')
							i.fas.fa-quote-left.mr-3
							| Brenha
						b-dropdown-item(href='/charada')
							i.fas.fa-archway.mr-3
							| Charada
						b-dropdown-item(href='/cifra')
							i.fas.fa-sun.mr-3
							| Cifra
						b-dropdown-item(href='/esfinge')
							i.fas.fa-balance-scale-right.mr-3
							| Esfinge
						b-dropdown-item(href='/grifo')
							i.fas.fa-cogs.mr-3
							| Grifo
						b-dropdown-item(href='/incognita')
							i.fas.fa-biking.mr-3
							| Incógnita
						b-dropdown-item(href='/parabola')
							i.fas.fa-biohazard.mr-3
							| Parábola
	router-view
</template>

<style>

@import 'assets/scss/bespoke.css';

body, html {
		font-family: 'News Cycle', sans-serif !important;
		height: 100%;
		font-weight: 300 !important;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: 'News Cycle' ,sans-serif;
		font-weight: 300 !important;
	}

	.dignity {
		font-family: "News Cycle", sans-serif;
		font-weight: 300 !important;
	}

	i, .material-icons, .fa, .fab, .far, .fas {
		vertical-align: middle;
	}

	a:hover {
		text-decoration: none;
		border: none;
	}

</style>