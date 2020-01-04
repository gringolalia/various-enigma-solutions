<template lang="pug">
.home
	img(alt='Vue logo', src='../../public/img/icons/hammer-sickle.svg' width="200px")
	h1 Arcana na Membrana
	h2 Riddler, ou, Charada
	h3 Bat Macumba Oba
	.d-flex.mt-3
		b-button.mr-2(size='lg') Imprensa
		b-button(large variant='dark' size='lg') Impressionante
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'home',
	components: {
		HelloWorld
	}
}
</script>

<style>
.home {
	height: calc(100vh - 80px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>
