<template>
	<div class="seller" ref="seller">
		<div>
			<div class="seller-content">
				<div class="seller-content-t">
					<div class="seller-content-tl">
						<h2 class="title">{{seller.name}}</h2>
						<div class="xinxi">
							<div class="star-wrapper">
								<star :size="36" :score="seller.score"></star>
							</div>
							<span class="text">({{seller.ratingCount}})</span>
							<span class="text">月售{{seller.sellCount}}单</span>
						</div>
					</div>
					<div class="seller-content-tr" @click="iabsd">
						<i class="iconfont icon-favorite" :class="{active: absd}"></i>
						<span class="text">{{sctr}}</span>
					</div>
				</div>
				<div class="seller-content-b">
					<div class="content-bs">
						<h2>起始价</h2>
						<div class="content">
							<span class="stress">{{seller.minPrice}}</span>元
						</div>
					</div>
					<div class="content-bs">
						<h2>商家配送费</h2>
						<div class="content">
							<span class="stress">{{seller.deliveryPrice}}</span>元
						</div>
					</div>
					<div class="content-bs">
						<h2>平均配送时间</h2>
						<div class="content">
							<span class="stress">{{seller.deliveryTime}}</span>元
						</div>
					</div>
				</div>
			</div>
			<split></split>
			<div class="seller-notice">
				<div class="notice">
					<h2 class="title">公告与活动</h2>
					<p>{{seller.bulletin}}</p>
				</div>
				<div class="activity">
					<ul>
						<li v-for="item in seller.supports" class="item">
							<i class="iconfont" :class="Eclass[item.type]"></i>
							<span>{{item.description}}</span>
						</li>
					</ul>
				</div>
			</div>
			<split></split>
			<div class="seller-scene">
				<h2 class="title">商家实景</h2>
				<div class="scene" ref="picWrapper">
					<ul class="picList" ref="picList">
						<li v-for="scene in seller.pics"><img :src="scene" width="120px" /></li>
					</ul>
				</div>
			</div>
			<split></split>
			<div class="seller-info">
				<h2 class="title">商家信息</h2>
				<div class="info">
					<ul>
						<li v-for="info in seller.infos" class="item">{{info}}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll';
	import star from 'components/star/star';
	import split from 'components/split/split';
	
	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				sctr: "收藏",
				absd: false
			}
		},
		methods: {
			iabsd () {
				if (!this.absd) {
					this.sctr = "已收藏";
					this.absd = true;
				} else {
					this.sctr = "收藏";
					this.absd = false;
				}
			},
			_initScroll () {
				if (!this.scroll) {
					this.scroll = new BScroll(this.$refs.seller, {
						click: true
					});
				} else {
					this.scroll.refresh();
				}
			},
			_initPics() {
				if (this.seller.pics) {
					let picWidth = 120;
					let margin = 6;
					let width = (picWidth + margin) * this.seller.pics.length - margin;
					this.$refs.picList.style.width = width + 'px';
					this.$nextTick(() => {
						if (!this.picScroll) {
							this.picScroll = new BScroll(this.$refs.picWrapper, {
								scrollX: true,
								eventPassthrough: 'vertical'
							});
						} else {
							this.picScroll.refresh();
						}
					});
				}
			}
		},
		created() {
			this.Eclass = ['decrease','discount','special','invoice','guarantee'];
		},
		mounted() {
			this._initScroll();
			this._initPics();
		},
		components: {
			star,
			split
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import '../../common/stylus/mixin.styl';
	
	.seller
		position: absolute
		top: 174px
		bottom: 0
		width: 100%
		overflow: hidden
		.title
			font-size: 14px
			color: rgb(7, 17, 27)
			line-height: 28px
		.seller-content
			padding: 18px
			.seller-content-t
				position:relative
				padding-bottom: 18px
				border-1px(rgba(7, 17, 27, 0.1))
				.seller-content-tl
					display: inline-block
					font-size: 0
					.xinxi
						margin-top: 4px
						font-size: 0
						.star-wrapper
							display: inline-block
							vertical-align: top
							margin-right: 8px
						.text
							display: inline-block
							margin-right: 12px
							font-size: 10px
							color: rgb(77, 85, 93)
							line-height: 18px
				.seller-content-tr
					position: absolute
					right: 0
					top: 0
					width: 50px
					text-align: center
					.icon-favorite
						font-size: 24px
						color: rgba(7, 17, 27, 0.4)
						line-height: 24px
						&.active
							color: rgb(240, 20, 20)
					.text
						display: inline-block
						font-size: 10px
						color: rgb(77, 85, 93)
						line-height: 10px
			.seller-content-b
				display: flex
				padding-top: 18px
				.content-bs
					flex: 1
					text-align: center
					box-sizing: border-box
					border-right: 1px solid rgba(7, 17, 27, 0.1)
					&:last-child
						border: 0
					.content
						font-size: 10px
						font-weight: 200
						color: rgb(7, 17, 27)
						line-height: 24px
						.stress
							font-size: 24px
		.seller-notice
			padding: 18px 18px 0 18px
			.notice
				padding-bottom: 16px
				p
					padding: 0 12px
					font-size: 12px
					font-weight: 200
					color: rgb(240, 20, 20)
					line-height: 24px
			.activity
				ul
					.item
						padding: 16px 12px
						border-top: 1px solid rgba(7, 17, 27, 0.1)
						.iconfont
							display: inline-block
							vertical-align: top
							width: 16px
							height: 16px
							margin-right: 6px
							background-size: 16px
							&.decrease
								bg-img('decrease_4')
							&.discount
								bg-img('discount_4')
							&.guarantee
								bg-img('guarantee_4')
							&.invoice
								bg-img('invoice_4')
							&.special
								bg-img('special_4')
						span
							font-size: 12px
							font-weight: 200
							color: rgb(7, 17, 27)
							line-height: 16px
		.seller-scene
			padding: 18px
			.scene
				width: 100%
				display: inline-block
				font-size: 0
				margin-top: 12px
				overflow: hidden
				.picList
					width: 200%
					height: 90px
					overflow: hidden
					white-space: nowrap
					font-size: 0
					li
						display: inline-block
						width: 120px
						height: 90px
						margin-right: 6px
						&:last-child
							margin: 0
		.seller-info
			padding: 18px
			.info
				ul
					.item
						border-top: 1px solid rgba(7, 17, 27, 0.1)
						padding: 16px 12px
						font-size: 12px
						font-weight: 200
						color: rgb(7, 17, 27)
						line-height: 16px
			
</style>