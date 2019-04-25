<template>
	<div class="cartcontrol">
		<div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
			<i class="iconfont icon-remove_circle_outlin"></i>
		</div>
		<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
		<div class="cart-add" @click.stop.prevent="addCart">
			<i class="iconfont icon-add_circle"></i>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue';
	
	export default {
		props: {
			food: {
				type: Object
			}
		},
		methods: {
			addCart(event) {
				if (!event._constructed) {
					return;
				}
				if (!this.food.count) {
					Vue.set(this.food, 'count', 1);
				} else {
					this.food.count++;
				}
				this.$emit('cart-add', event.target);
			},
			addCarte(event) {
				if (!event._constructed) {
					return;
				}
				if (!this.food.count) {
					Vue.set(this.food, 'count', 1);
				} else {
					this.food.count++;
				}
				this.$emit('cart-add', event.target);
			},
			decreaseCart(event) {
				if (!event._constructed) {
					return;
				}
				if (this.food.count) {
					this.food.count--;
				}
			}
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.cartcontrol
		font-size: 0
		.cart-decrease
			display: inline-block
			padding: 6px
			.icon-remove_circle_outlin
				font-size: 24px
				color: rgb(0, 160, 220)
				line-height: 24px
		.cart-count
			display: inline-block
			vertical-align: top
			width: 24px
			text-align: center
			font-size: 10px
			color: rgb(147, 153, 159)
			line-height: 24px
			margin-top: 6px
		.cart-add
			display: inline-block
			padding: 6px
			.icon-add_circle
				font-size: 24px
				color: rgb(0, 160, 220)
				line-height: 24px			
</style>