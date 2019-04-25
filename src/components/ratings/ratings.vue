<template>
	<div class="ratings" ref="ratings">
		<div>
			<div class="overview">
				<div class="overview-left">
					<h1>{{seller.score}}</h1>
					<span>综合评分</span>
					<p>高于周边商家{{seller.rankRate}}%</p>
				</div>
				<div class="overview-right">
					<div class="score-wrapper">
						<span class="name">服务态度</span>
						<div class="star-wrapper">
							<star :size="36" :score="seller.serviceScore"></star>
						</div>
						<span class="score">{{seller.serviceScore}}</span>
					</div>
					<div class="score-wrapper">
						<span class="name">食物质量</span>
						<div class="star-wrapper">
							<star :size="36" :score="seller.foodScore"></star>
						</div>
						<span class="score">{{seller.foodScore}}</span>
					</div>
					<div class="delivery-wrapper">
						<span class="name">送达时间</span>
						<span class="delivery">{{seller.deliveryTime}}分钟</span>
					</div>
				</div>
			</div>
			
			<split></split>
			
			<ratingselect :select-type="selectType" :only-content="onlyContent" :ratings="ratings" v-on:ratingtype-select="ratingtypeSelect" v-on:content-toggle="contentToggle"></ratingselect>
			
			<div class="rating">
				<ul>
					<li v-for="rating in ratings" v-show="needShow(rating.rateType, rating.text)" class="rating-item">
						<div class="rating-left">
							<img :src="rating.avatar" width="28" height="28" />
						</div>
						<div class="rating-right">
							<div class="rating-right-t">
								<span class="title">{{rating.username}}</span>
								<div class="star-wrapper">
									<star :size="24" :score="seller.foodScore" class="stars"></star>
									<span class="deliveryTime" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
								</div>
								<div class="time">{{rating.rateTime | formatDate}}</div>
							</div>
							<p class="rating-right-c">{{rating.text}}</p>
							<div class="rating-right-b">
								<i class="iconfont" :class="{'icon-thumb_up':rating.rateType === 0,'icon-thumb_down':rating.rateType === 1}"></i>
								<span v-for="ratingre in rating.recommend" class="ratingr">{{ratingre}}</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll';
	import {formatDate} from 'common/js/date';
	import star from 'components/star/star';
	import split from 'components/split/split';
	import ratingselect from 'components/ratingselect/ratingselect';
	// import {goods} from 'common/js/api'
	
	const ALL = 2;
	const ERR_OK = 0;
	
	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				ratings: [],
				selectType: ALL,
				onlyContent: true
			}
		},
		created() {
			this.$http.get('/api/ratings').then((response) => {
				response = response.body;
				if (response.errno === ERR_OK) {
					this.ratings = response.data;
					this.$nextTick(() => {
						this.scroll = new BScroll(this.$refs.ratings, {
							click: true
						});
					});
				}
			});
			// this._goods()
		},
		methods: {
//			_goods() {
//				goods().then((res) => {
//					this.ratings = res.ratings
//				})
//				this.$nextTick(() => {
//					this.scroll = new BScroll(this.$refs.ratings, {
//						click: true
//					})
//				})
//			},
			needShow(type, text) {
				if (this.onlyContent && !text) {
					return false;
				}
				if (this.selectType === ALL) {
					return true;
				} else {
					return type === this.selectType;
				}
			},
			ratingtypeSelect(type) {
				this.selectType = type;
				this.$nextTick(() => {
					this.scroll.refresh();
				});
			},
			contentToggle(onlyContent) {
				this.onlyContent = onlyContent;
				this.$nextTick(() => {
					this.scroll.refresh();
				});
			}
		},
		filters: {
			formatDate(time) {
				let date = new Date(time);
				return formatDate(date, 'yyyy-MM-dd hh:mm');
			}
		},
		components: {
			star,
			split,
			ratingselect
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import '../../common/stylus/mixin.styl';

	.ratings
		position: absolute
		top: 174px
		bottom: 0
		width: 100%
		overflow: hidden
		.overview
			padding: 18px 0
			overflow: hidden
			.overview-left
				width: 36%
				text-align:center
				display: inline-block
				font-size: 0
				box-sizing: border-box
				border-right: 1px solid rgba(7, 17, 27, 0.1)
				float: left
				h1
					font-size: 24px
					color: rgb(255, 153, 0)
					line-height: 28px
				span
					padding: 6px 0 8px 0
					font-size: 12px
					color: rgb(7, 17, 27)
					line-height: 12px
					display: inline-block
				p
					padding-bottom: 6px
					font-size: 10px
					color: rgba(7, 17, 27, 0.5)
					line-height: 10px
			.overview-right
				width: 64%
				float: left
				box-sizing: border-box
				padding: 0 20px
				.score-wrapper
					margin-bottom: 8px
					font-size: 0
					.name
						display: inline-block
						font-size: 12px
						color: rgb(7, 17, 27)
						line-height: 18px
					.star-wrapper
						display: inline-block
						margin: 0 12px
						vertical-align: top
					.score
						display: inline-block
						font-size: 12px
						color: rgb(255, 153, 0)
						line-height: 18px
				.delivery-wrapper
					.name
						display: inline-block
						font-size: 12px
						color: rgb(7, 17, 27)
						line-height: 18px
					.delivery
						display: inline-block
						font-size: 12px
						color: rgb(147, 153, 159)
						line-height: 18px
						margin-left: 12px
		.rating
			padding: 0 18px
			ul
				.rating-item
					padding: 18px 0
					display: flex
					border-1px(rgba(7, 17, 27, 0.1))
					.rating-left
						flex: 0 0 28px
						width: 28px
						height: 28px
						border-radius: 50%
						overflow: hidden
					.rating-right
						flex: 1
						margin-left: 12px
						.rating-right-t
							position: relative
							margin-bottom: 6px
							.title
								font-size: 10px
								color: rgb(7, 17, 27)
								line-height: 12px
								margin-bottom: 4px
							.star-wrapper
								.stars
									display: inline-block
								.deliveryTime
									font-size: 10px
									font-weight: 200
									color: rgb(147, 153, 159)
									line-height: 12px
									margin-left: 6px
							.time
								position: absolute
								right: 0
								top: 0
								font-size: 10px
								font-weight: 200
								color: rgb(147, 153, 159)
								line-height: 12px
								float: right
						.rating-right-c
							font-size: 12px
							color: rgb(7, 17, 27)
							line-height: 18px
						.rating-right-b
							margin-top: 8px
							.iconfont
								font-size: 12px
								line-height: 16px
								&.icon-thumb_up
									color: rgb(0, 160, 220)
								&.icon-thumb_down
									color: rgb(183, 187, 191)
							.ratingr
								display: inline-block
								padding: 0 6px
								margin-left: 8px
								font-size: 9px
								color: rgb(147, 153, 159)
								line-height: 16px
								border: 1px solid rgba(7, 17, 27, 0.1)
								border-radius: 2px
								
</style>
