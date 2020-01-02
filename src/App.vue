<template lang="pug">
#app
	div
		b-navbar(toggleable='md' type='dark' variant='primary')
			b-navbar-brand(href='/')
				i.fas.fa-sun.fa-2x.mr-2
				| Engenho Novo LLC

			b-navbar-toggle(target='nav-collapse')

			b-collapse#nav-collapse(is-nav)
				b-navbar-nav

					b-nav-item-dropdown.active(text='Sabedoria' no-caret)

						template(v-slot:button-content) 
							i.material-icons.mr-2 keyboard_arrow_down
							| Scholasticisms au Gogo

						b-dropdown-item(to='/empiricism')
							i.fas.fa-balance-scale.fa-lg.mr-2
							| Empiricism

						b-dropdown-item(href='/existential') 
							i.material-icons.md-24.mr-2 waves
							| Existentialism

						b-dropdown-item(href='/hegelian') 
							i.fas.fa-chess-knight.fa-lg.mr-2
							| Hegelian Nonsense

						b-dropdown-item(href='/idealist')
							i.material-icons.mr-2 beach_access
							|  Idealism

						b-dropdown-item(href='/kantian') 
							i.material-icons.mr-2 my_location
							| Kantianism

						b-dropdown-item(href='/marxist') 
							i.material-icons.mr-2 directions_bike
							| Marxism

						b-dropdown-item(href='/phenomenology') 
							i.material-icons.mr-2 directions_run
							| Phenomenology
						
						b-dropdown-item(href='/positivism') 
							i.fas.fa-sun.fa-lg.mr-2
							| Positivism

						b-dropdown-item(href='/pragmaticism') 
							i.fas.fa-strikethrough.fa-lg.mr-2
							| Pragmaticism

						b-dropdown-item(href='/rationalist') 
							i.fas.fa-bullseye.fa-lg.mr-2
							| Rationalism

						b-dropdown-item(href='/realist') 
							i.material-icons.mr-2 pool
							| Realism

				b-navbar-nav.ml-auto

					b-nav-item-dropdown.active.d-none.d-md-block.ml-2(right no-caret)

						template(v-slot:button-content) 
							i.material-icons.mr-2 keyboard_arrow_up
							| Engimata
						b-dropdown-item(href='/adivinha') Adivinha

						b-dropdown-item(href='/alegoria') Alegoria

						b-dropdown-item(href='#') Arcano

						b-dropdown-item(href='#') Brenha
						b-dropdown-item(href='#') Charada
						b-dropdown-item(href='#') Cifra
						b-dropdown-item(href='#') Esfinge
						b-dropdown-item(href='#') Grifo
						b-dropdown-item(href='#') Incógnita
						b-dropdown-item(href='#') Parabola
						


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