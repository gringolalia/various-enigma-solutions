<template lang="pug">
#app
	div
		b-navbar(toggleable='md' type='dark' variant='primary')
			b-navbar-brand(href='#')
				i.fas.fa-sun.fa-2x.mr-2
				| Engenho Novo LLC

			b-navbar-toggle(target='nav-collapse')

			b-collapse#nav-collapse(is-nav)
				b-navbar-nav




					b-nav-item-dropdown(text='Sabedoria' no-caret)

						template(v-slot:button-content) 
							i.material-icons.mr-2 keyboard_arrow_down
							| Scholasticisms au Gogo

						b-dropdown-item(href='empirical') Empiricism

						b-dropdown-item(href='existential') Existentialism

						b-dropdown-item(href='hegelian') Hegelianism

						b-dropdown-item(href='idealist') Idealism

						b-dropdown-item(href='kantian') Kantianism

						b-dropdown-item(href='marxist') Marxism

						b-dropdown-item(href='phenomenology') Phenomenology
						
						b-dropdown-item(href='positivism') Positivism

						b-dropdown-item(href='pragmaticism') Pragmaticism

						b-dropdown-item(href='rationalist') Rationalism

						b-dropdown-item(href='realist') Realism

				b-navbar-nav.ml-auto

					b-nav-item-dropdown.ml-2(right no-caret)

						template(v-slot:button-content) 
							i.material-icons.mr-2 keyboard_arrow_down
							| Informações
						b-dropdown-item(href='#') Sobre Nós

						b-dropdown-item(href='#') Nosso Perfil

						b-dropdown-item(href='#') Nosso Contorno

						b-dropdown-item(href='#') Nossa Silhueta
						b-dropdown-item(href='#') Um Delineamento
						b-dropdown-item(href='#') Uma Feição
						b-dropdown-item(href='#') Índole Nosso
						b-dropdown-item(href='#') Nosso Jeito
						b-dropdown-item(href='#') Nosso Caráter


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

</style>