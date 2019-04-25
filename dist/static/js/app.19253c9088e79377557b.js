webpackJsonp([0],{"/iid":function(t,s){},0:function(t,s){},"34KM":function(t,s){},EQvJ:function(t,s){},FKEn:function(t,s){},GpbZ:function(t,s){},JVIr:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}},n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemClasses,function(t){return s("span",{staticClass:"star-item",class:t,attrs:{"track-by":"$index"}})}),0)},staticRenderFns:[]};var o=e("VU/8")(a,n,!1,function(t){e("aVYw")},null,null).exports,r={props:{seller:{type:Object}},data:function(){return{datailShow:!1}},methods:{showDetail:function(){this.datailShow=!0},hideDetail:function(){this.datailShow=!1}},created:function(){this.Eclass=["decrease","discount","special","invoice","guarantee"]},components:{star:o}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64",height:"64",src:t.seller.avatar}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n\t\t\t\t"+t._s(t.seller.description)+"/"+t._s(t.seller.deliverTime)+"分钟送达\n\t\t\t")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.Eclass[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("span",{staticClass:"iconfont icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),t._v(" "),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"iconfont icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{width:"100%",height:"100%",src:t.seller.avatar}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.datailShow,expression:"datailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail_content"},[e("h1",[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",[e("span",{staticClass:"icon",class:t.Eclass[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])}),0):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",[t._v(t._s(t.seller.bulletin))])])]),t._v(" "),e("div",{staticClass:"detail_footer",on:{click:t.hideDetail}},[e("i",{staticClass:"iconfont icon-close"})])])])],1)},staticRenderFns:[]};var c={data:function(){return{seller:{}}},created:function(){var t=this;this.$http.get("/api/seller").then(function(s){0===(s=s.body).errno&&(t.seller=s.data,console.log(t.seller))})},components:{"v-header":e("VU/8")(r,l,!1,function(t){e("Tg9M")},null,null).exports}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},staticRenderFns:[]};var d=e("VU/8")(c,v,!1,function(t){e("/iid")},null,null).exports,u=e("/ocq"),p=e("GQaK"),h={props:{food:{type:Object}},methods:{addCart:function(t){t._constructed&&(this.food.count?this.food.count++:i.a.set(this.food,"count",1),this.$emit("cart-add",t.target))},addCarte:function(t){t._constructed&&(this.food.count?this.food.count++:i.a.set(this.food,"count",1),this.$emit("cart-add",t.target))},decreaseCart:function(t){t._constructed&&this.food.count&&this.food.count--}}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.decreaseCart(s)}}},[e("i",{staticClass:"iconfont icon-remove_circle_outlin"})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addCart(s)}}},[e("i",{staticClass:"iconfont icon-add_circle"})])])},staticRenderFns:[]};var _=e("VU/8")(h,f,!1,function(t){e("UJIN")},null,null).exports,C={props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0}},methods:{drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,this.dropBalls.push(e),void console.log(t)}},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-32,n=-(window.innerHeight-i.top-42);t.style.display="",t.style.webkitTransform="translate3d(0,"+n+"px,0)",t.style.transform="translate3d(0,"+n+"px,0)";var o=t.getElementsByClassName("inner-hook")[0];return o.style.webkitTransform="translate3d("+a+"px,0,0)",void(o.style.transform="translate3d("+a+"px,0,0)")}}},enter:function(t){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var s=t.getElementsByClassName("inner-hook")[0];s.style.webkitTransform="translate3d(0,0,0)",s.style.transform="translate3d(0,0,0)"})},afterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},toggleList:function(){this.totalCount&&(this.fold=!this.fold,console.log("1111"))},hideList:function(){this.fold=!0},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},pay:function(){this.totalPrice<this.minPrice||window.alert("支付"+this.totalPrice+"元")}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"元起送":this.totalPrice<this.minPrice?"还差￥"+(this.minPrice-this.totalPrice)+"元起送":"去结算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},listShow:function(){var t=this;if(console.log(this.totalCount),!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new p.a(t.$refs.listContent,{click:!0})}),s}},components:{cartcontrol:_}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"iconfont icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.pay(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v(t._s(t.payDesc))])])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s){return e("div",{staticClass:"ball"},[e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"inner"},[e("div",{staticClass:"inner-hook"})])])],1)}),0),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])}),0)])])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.hideList}})])],1)},staticRenderFns:[]};var m=e("VU/8")(C,g,!1,function(t){e("FKEn")},null,null).exports;function w(t,s){/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in e)if(new RegExp("("+i+")").test(s)){var a=e[i]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?a:y(a))}return s}function y(t){return("00"+t).substr(t.length)}var b={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"split"})},staticRenderFns:[]};var x=e("VU/8")({},b,!1,function(t){e("GpbZ")},null,null).exports,k={data:function(){return{selectt:this.selectType,onlys:this.onlyContent}},props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:2},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negatives:function(){return this.ratings.filter(function(t){return 1===t.rateType})}},methods:{select:function(t,s){s._constructed&&(this.selectt=t,this.$emit("ratingtype-select",this.selectt))},toggleContent:function(t){t._constructed&&(this.onlys=!this.onlys,this.$emit("content-toggle",this.onlys))}}},T={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type"},[e("span",{staticClass:"block positive",class:{active:2===t.selectt},on:{click:function(s){t.select(2,s)}}},[t._v(t._s(t.desc.all)),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0===t.selectt},on:{click:function(s){t.select(0,s)}}},[t._v(t._s(t.desc.positive)),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1===t.selectt},on:{click:function(s){t.select(1,s)}}},[t._v(t._s(t.desc.negative)),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:t.onlys},on:{click:t.toggleContent}},[e("span",{staticClass:"iconfont icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[]};var $=e("VU/8")(k,T,!1,function(t){e("fq8Y")},null,null).exports,E={props:{food:{type:Object}},data:function(){return{showFlag:!1,selectType:2,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},methods:{show:function(){var t=this;this.showFlag=!0,this.selectType=2,this.onlyContent=!0,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new p.a(t.$refs.food,{click:!0})})},hide:function(){this.showFlag=!1},addFirst:function(t){t._constructed&&(this.$emit("cart-add",t.target),console.log(t.target),i.a.set(this.food,"count",1))},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)},ratingtypeSelect:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},contentToggle:function(t){var s=this;this.onlyContent=t,this.$nextTick(function(){s.scroll.refresh()})}},filters:{formatDate:function(t){return w(new Date(t),"yyyy-MM-dd hh:mm")}},components:{cartcontrol:_,split:x,ratingselect:$}},S={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"iconfont icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count===0"}],staticClass:"buy",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addFirst(s)}}},[t._v("加入购物车")])])],1)]),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"titile"},[t._v("商品信息")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.food.ratings},on:{"ratingtype-select":t.ratingtypeSelect,"content-toggle":t.contentToggle}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],staticClass:"rating-item border-1px"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{width:"12",height:"12",src:s.avatar}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("i",{staticClass:"iconfont",class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v(t._s(s.text)+"\n\t\t\t\t\t\t\t")])])}),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings || !food.ratings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])])},staticRenderFns:[]};var P=e("VU/8")(E,S,!1,function(t){e("woEE")},null,null).exports,F={props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},created:function(){var t=this;this.classMap=["decrease","discount","special","invoice","guarantee"],this.$http.get("/api/goods").then(function(s){0===(s=s.body).errno&&(t.goods=s.data,t.$nextTick(function(){t._initScroll(),t._calculateHeight()}))})},computed:{currentIndex:function(){console.log("啦啦啦");for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},methods:{cartAdd:function(t){var s=this;this.$nextTick(function(){s.$refs.shopCart.drop(t)})},selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook")[t];this.foodsScroll.scrollToElement(e,300)}},selectFood:function(t,s){s._constructed&&(this.selectedFood=t,this.$refs.food.show())},_drop:function(t){var s=this;this.$nextTick(function(){s.$refs.shopcart.drop(t)})},_initScroll:function(){var t=this;this.meunScroll=new p.a(this.$refs.menuWrapper,{click:!0,bounce:{top:!1,bottom:!1}}),this.foodsScroll=new p.a(this.$refs.foodsWrapper,{click:!0,probeType:3,momentum:!1}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}}},components:{shopcart:m,cartcontrol:_,food:P},events:{"cart.add":function(t){this._drop(t)}}},N={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(s){t.selectMenu(i,s)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\n          ")])])}),0)]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item border-1px",on:{click:function(e){t.selectFood(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{"cart-add":t.cartAdd}})],1)])])}),0)])}),0)]),t._v(" "),e("shopcart",{ref:"shopCart",attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}}),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood}})],1)},staticRenderFns:[]};var M=e("VU/8")(F,N,!1,function(t){e("JVIr")},null,null).exports,D={props:{seller:{type:Object}},data:function(){return{ratings:[],selectType:2,onlyContent:!0}},created:function(){var t=this;this.$http.get("/api/ratings").then(function(s){0===(s=s.body).errno&&(t.ratings=s.data,t.$nextTick(function(){t.scroll=new p.a(t.$refs.ratings,{click:!0})}))})},methods:{needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)},ratingtypeSelect:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},contentToggle:function(t){var s=this;this.onlyContent=t,this.$nextTick(function(){s.scroll.refresh()})}},filters:{formatDate:function(t){return w(new Date(t),"yyyy-MM-dd hh:mm")}},components:{star:o,split:x,ratingselect:$}},R={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",[t._v(t._s(t.seller.score))]),t._v(" "),e("span",[t._v("综合评分")]),t._v(" "),e("p",[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"name"},[t._v("服务态度")]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:36,score:t.seller.serviceScore}})],1),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])]),t._v(" "),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"name"},[t._v("食物质量")]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:36,score:t.seller.foodScore}})],1),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])]),t._v(" "),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"name"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("split"),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,ratings:t.ratings},on:{"ratingtype-select":t.ratingtypeSelect,"content-toggle":t.contentToggle}}),t._v(" "),e("div",{staticClass:"rating"},[e("ul",t._l(t.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType, rating.text)"}],staticClass:"rating-item"},[e("div",{staticClass:"rating-left"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"rating-right"},[e("div",{staticClass:"rating-right-t"},[e("span",{staticClass:"title"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{staticClass:"stars",attrs:{size:24,score:t.seller.foodScore}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"deliveryTime"},[t._v(t._s(s.deliveryTime)+"分钟送达")])],1),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))])]),t._v(" "),e("p",{staticClass:"rating-right-c"},[t._v(t._s(s.text))]),t._v(" "),e("div",{staticClass:"rating-right-b"},[e("i",{staticClass:"iconfont",class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v(" "),t._l(s.recommend,function(s){return e("span",{staticClass:"ratingr"},[t._v(t._s(s))])})],2)])])}),0)])],1)])},staticRenderFns:[]};var V=e("VU/8")(D,R,!1,function(t){e("EQvJ")},null,null).exports,H={props:{seller:{type:Object}},data:function(){return{sctr:"收藏",absd:!1}},methods:{iabsd:function(){this.absd?(this.sctr="收藏",this.absd=!1):(this.sctr="已收藏",this.absd=!0)},_initScroll:function(){this.scroll?this.scroll.refresh():this.scroll=new p.a(this.$refs.seller,{click:!0})},_initPics:function(){var t=this;if(this.seller.pics){var s=126*this.seller.pics.length-6;this.$refs.picList.style.width=s+"px",this.$nextTick(function(){t.picScroll?t.picScroll.refresh():t.picScroll=new p.a(t.$refs.picWrapper,{scrollX:!0,eventPassthrough:"vertical"})})}}},created:function(){this.Eclass=["decrease","discount","special","invoice","guarantee"]},mounted:function(){this._initScroll(),this._initPics()},components:{star:o,split:x}},U={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"seller-content-t"},[e("div",{staticClass:"seller-content-tl"},[e("h2",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"xinxi"},[e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:36,score:t.seller.score}})],1),t._v(" "),e("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])])]),t._v(" "),e("div",{staticClass:"seller-content-tr",on:{click:t.iabsd}},[e("i",{staticClass:"iconfont icon-favorite",class:{active:t.absd}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.sctr))])])]),t._v(" "),e("div",{staticClass:"seller-content-b"},[e("div",{staticClass:"content-bs"},[e("h2",[t._v("起始价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"content-bs"},[e("h2",[t._v("商家配送费")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"content-bs"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("元\n\t\t\t\t\t")])])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"seller-notice"},[e("div",{staticClass:"notice"},[e("h2",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("p",[t._v(t._s(t.seller.bulletin))])]),t._v(" "),e("div",{staticClass:"activity"},[e("ul",t._l(t.seller.supports,function(s){return e("li",{staticClass:"item"},[e("i",{staticClass:"iconfont",class:t.Eclass[s.type]}),t._v(" "),e("span",[t._v(t._s(s.description))])])}),0)])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"seller-scene"},[e("h2",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picWrapper",staticClass:"scene"},[e("ul",{ref:"picList",staticClass:"picList"},t._l(t.seller.pics,function(t){return e("li",[e("img",{attrs:{src:t,width:"120px"}})])}),0)])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"seller-info"},[e("h2",{staticClass:"title"},[t._v("商家信息")]),t._v(" "),e("div",{staticClass:"info"},[e("ul",t._l(t.seller.infos,function(s){return e("li",{staticClass:"item"},[t._v(t._s(s))])}),0)])])],1)])},staticRenderFns:[]};var j=e("VU/8")(H,U,!1,function(t){e("jvcO")},null,null).exports;i.a.use(u.a);var O=new u.a({linkActiveClass:"active",routes:[{path:"/",component:M},{path:"/goods",component:M},{path:"/ratings",component:V},{path:"/seller",component:j}]}),B=e("8+8L");e("34KM");i.a.use(B.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:O,components:{App:d},template:"<App/>"})},Tg9M:function(t,s){},UJIN:function(t,s){},aVYw:function(t,s){},fq8Y:function(t,s){},jvcO:function(t,s){},woEE:function(t,s){}},["NHnr"]);