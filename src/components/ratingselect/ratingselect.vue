<template>
	<div class="ratingselect">
		<div class="rating-type">
			<span @click="select(2,$event)" class="block positive" :class="{'active':selectt===2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
			<span @click="select(0,$event)" class="block positive" :class="{'active':selectt===0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
			<span @click="select(1,$event)" class="block negative" :class="{'active':selectt===1}">{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
		</div>
		<div @click="toggleContent" class="switch" :class="{'on':onlys}">
			<span class="iconfont icon-check_circle"></span>
			<span class="text">只看有内容的评价</span>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	const POSITIVE = 0;
	const NEGATIVE = 1;
	const ALL = 2;
	
	export default {
		data() {
			return {
				selectt: this.selectType,
				onlys: this.onlyContent
			}
		},
		props: {
			ratings: {
				type: Array,
				default() {
					return [];
				}
			},
			selectType: {
				type: Number,
				default: ALL
			},
			onlyContent: {
				type: Boolean,
				default: false
			},
			desc: {
				type: Object,
				default() {
					return {
						all: '全部',
						positive: '满意',
						negative: '不满意'
					};
				}
			}
		},
		computed: {
			positives() {
				return this.ratings.filter((rating) => {
					return rating.rateType === POSITIVE;
				})
			},
			negatives() {
				return this.ratings.filter((rating) => {
					return rating.rateType === NEGATIVE;
				})
			}
		},
		methods: {
			select(type, event) {
				if (!event._constructed) {
					return;
				}
				this.selectt = type;
				this.$emit('ratingtype-select', this.selectt);
			},
			toggleContent(event) {
				if (!event._constructed) {
					return;
				}
				this.onlys = !this.onlys;
				this.$emit('content-toggle', this.onlys);
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import '../../common/stylus/mixin.styl'
	
	.ratingselect
		padding-top: 18px
		border-1px(rgba(7, 17, 27, 0.1))
		font-size: 0
		.rating-type
			padding-bottom: 18px
			margin: 0 18px
			border-bottom: 1px solid rgba(7, 17, 27, 0.1)
			.block
				display: inline-block
				padding: 8px 12px
				margin-right: 8px
				line-height: 16px
				border-radius: 1px
				font-size: 12px
				color: rgb(77, 85, 93)
				&.active
					color: #fff
				.count
					margin-right: 2px
					font-size: 8px
				&.positive
					background: rgba(0, 160, 220, 0.2)
					&.active
						background: rgb(0, 160, 220)
				&.negative
					background: rgba(77, 85, 93, 0.2)
					&.active
						background: rgb(77, 85, 93)
		.switch
			padding: 12px 18px
			line-height: 24px
			color: rgb(147, 153, 159)
			font-size: 0
			&.on
				.icon-check_circle
					color: #00c850
			.icon-check_circle
				display: inline-block
				vertical-align: top
				margin-right: 4px
				font-size: 24px
			.text
				display: inline-block
				vertical-align: top
				font-size: 12px
</style>