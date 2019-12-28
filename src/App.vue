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
					b-nav-item-dropdown(text='Sabedoria')
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

					b-nav-item-dropdown.ml-2(right)

						template(v-slot:button-content) Sobre Você

						b-dropdown-item(href='#') Sobre Nós

						b-dropdown-item(href='#') Perfil

						b-dropdown-item(href='#') Contorno

						b-dropdown-item(href='#') Silhueta
						b-dropdown-item(href='#') Delineamento
						b-dropdown-item(href='#') Feição
						b-dropdown-item(href='#') Índole
						b-dropdown-item(href='#') Jeito
						b-dropdown-item(href='#') Caráter


	router-view
</template>

<style>
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
