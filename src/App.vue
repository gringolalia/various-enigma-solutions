<template lang="pug">
#app
	div
		b-navbar(toggleable='md' type='dark' variant='primary')
			b-navbar-brand(href='#')
				i.fas.fa-sun.fa-2x.mr-2
				| Engenho Novo LLC

			b-navbar-toggle(target='nav-collapse')

			b-collapse#nav-collapse(is-nav='')
				b-navbar-nav
					b-nav-item(href='#') In Principio

					b-nav-item(href='#') Handicapped

				b-navbar-nav.ml-auto
					b-nav-form
						b-form-input.mr-sm-2(size='sm', placeholder='Search')

						b-button.my-2.my-sm-0(size='sm', type='submit') Search

						<!-- <b-nav-item-dropdown text="Lang" right>
						<b-dropdown-item href="#">EN</b-dropdown-item>
						<b-dropdown-item href="#">ES</b-dropdown-item>
						<b-dropdown-item href="#">RU</b-dropdown-item>
						<b-dropdown-item href="#">FA</b-dropdown-item>
						</b-nav-item-dropdown> -->

					b-nav-item-dropdown(right)

						template(v-slot:button-content) Netocracy

						b-dropdown-item(href='#') Profile

						b-dropdown-item(href='#') Sign Out

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
