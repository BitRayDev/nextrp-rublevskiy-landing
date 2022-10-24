<template>
	<button class="button">
		<slot />
	</button>
</template>

<script setup>
</script>

<style lang="scss">
.button {
  font-weight: 700;
  font-size: 16px;
  line-height: 137.88%;

  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;

	min-width: 270px;
	height: 65px;

	color: white;
	background: #5896fa;

	border: none;
	border-radius: 3px;

	transition: box-shadow 150ms ease-out;

  cursor: pointer;

	&:hover {
    box-shadow: 0px 6px 23px rgba(66, 138, 255, 0.42);
	}
}
</style>