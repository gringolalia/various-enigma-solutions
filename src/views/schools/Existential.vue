<template lang="pug">
.home
	img(alt='Vue logo', src='../../../public/img/icons/hammer-sickle.svg' width="200px")
	h1 X Marks the Essential
	h2 Iron Heart of Jean Paul Sartre
	h3 The Stranger Than Fiction
	.d-flex.mt-3
		b-button.mr-2(size='lg') Imprint
		b-button(large variant='dark' size='lg') Offprint
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
<template>
  <div class="about">
    <h1>Empirical</h1>
  </div>
</template>
