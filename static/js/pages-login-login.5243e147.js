(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"05e9":function(t,e,i){"use strict";i.r(e);var r=i("f03d"),n=i.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},"1adc":function(t,e,i){"use strict";i("7a82");var r=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n=r(i("2e48")),a={name:"u-switch",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],watch:{value:{immediate:!0,handler:function(t){t!==this.inactiveValue&&t!==this.activeValue&&uni.$u.error("v-model绑定的值必须为inactiveValue、activeValue二者之一")}}},data:function(){return{bgColor:"#ffffff"}},computed:{isActive:function(){return this.value===this.activeValue},switchStyle:function(){var t={};return t.width=uni.$u.addUnit(2*this.size+2),t.height=uni.$u.addUnit(Number(this.size)+2),this.customInactiveColor&&(t.borderColor="rgba(0, 0, 0, 0)"),t.backgroundColor=this.isActive?this.activeColor:this.inactiveColor,t},nodeStyle:function(){var t={};t.width=uni.$u.addUnit(this.size-this.space),t.height=uni.$u.addUnit(this.size-this.space);var e=this.isActive?uni.$u.addUnit(this.space):uni.$u.addUnit(this.size);return t.transform="translateX(-".concat(e,")"),t},bgStyle:function(){var t={};return t.width=uni.$u.addUnit(2*Number(this.size)-this.size/2),t.height=uni.$u.addUnit(this.size),t.backgroundColor=this.inactiveColor,t.transform="scale(".concat(this.isActive?0:1,")"),t},customInactiveColor:function(){return"#fff"!==this.inactiveColor&&"#ffffff"!==this.inactiveColor}},methods:{clickHandler:function(){var t=this;if(!this.disabled&&!this.loading){var e=this.isActive?this.inactiveValue:this.activeValue;this.asyncChange||this.$emit("input",e),this.$nextTick((function(){t.$emit("change",e)}))}}}};e.default=a},"2e48":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var r={props:{loading:{type:Boolean,default:uni.$u.props.switch.loading},disabled:{type:Boolean,default:uni.$u.props.switch.disabled},size:{type:[String,Number],default:uni.$u.props.switch.size},activeColor:{type:String,default:uni.$u.props.switch.activeColor},inactiveColor:{type:String,default:uni.$u.props.switch.inactiveColor},value:{type:[Boolean,String,Number],default:uni.$u.props.switch.value},activeValue:{type:[String,Number,Boolean],default:uni.$u.props.switch.activeValue},inactiveValue:{type:[String,Number,Boolean],default:uni.$u.props.switch.inactiveValue},asyncChange:{type:Boolean,default:uni.$u.props.switch.asyncChange},space:{type:[String,Number],default:uni.$u.props.switch.space}}};e.default=r},5150:function(t,e,i){var r=i("cb28");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("cb8ab678",r,!0,{sourceMap:!1,shadowMode:!1})},"5da3":function(t,e,i){"use strict";var r=i("5150"),n=i.n(r);n.a},"72ef":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var r={uLoadingIcon:i("5b82").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-switch",class:[t.disabled&&"u-switch--disabled"],style:[t.switchStyle,t.$u.addStyle(t.customStyle)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-switch__bg",style:[t.bgStyle]}),i("v-uni-view",{ref:"u-switch__node",staticClass:"u-switch__node",class:[t.value&&"u-switch__node--on"],style:[t.nodeStyle]},[i("u-loading-icon",{attrs:{show:t.loading,mode:"circle",timingFunction:"linear",color:t.value?t.activeColor:"#AAABAD",size:.6*t.size}})],1)],1)},a=[]},7565:function(t,e,i){var r=i("f76d");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("89b329c2",r,!0,{sourceMap:!1,shadowMode:!1})},"77be":function(t,e,i){"use strict";var r=i("7565"),n=i.n(r);n.a},"8e5f":function(t,e,i){t.exports=i.p+"static/img/logo.a8707443.png"},b5a0:function(t,e,i){"use strict";i.r(e);var r=i("72ef"),n=i("f021");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("77be");var o=i("f0c5"),s=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"12709030",null,!1,r["a"],void 0);e["default"]=s.exports},c459:function(t,e,i){"use strict";i.r(e);var r=i("f524"),n=i("05e9");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("5da3");var o=i("f0c5"),s=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"30feb63f",null,!1,r["a"],void 0);e["default"]=s.exports},cb28:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,".logo-box[data-v-30feb63f]{width:100%;height:%?433?%;padding:%?34?% 0}.logo-box uni-image[data-v-30feb63f]{width:%?173?%;height:%?173?%;margin:0 auto;display:block;margin-top:%?190?%}.login-form[data-v-30feb63f]{padding:%?34?%}.login-form[data-v-30feb63f] .u-form .u-form-item__body{padding:%?30?% %?20?%}",""]),t.exports=e},f021:function(t,e,i){"use strict";i.r(e);var r=i("1adc"),n=i.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},f03d:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{remember:!1,form:{username:"",password:""},rules:{username:{type:"string",required:!0,message:"请填写用户名",trigger:["blur","change"]},password:{type:"string",max:1,required:!0,message:"请填写密码",trigger:["blur","change"]}},radio:"",switchVal:!1}},methods:{}}},f524:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var r={"u-Form":i("5101").default,uFormItem:i("9234").default,"u-Input":i("03ae").default,uSwitch:i("b5a0").default,uButton:i("2ecb").default},n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"login f24"},[r("v-uni-view",{staticClass:"logo-box"},[r("v-uni-image",{attrs:{src:i("8e5f")}}),r("v-uni-view",{staticClass:"mt40 f26 tc"},[t._v("登录")])],1),r("v-uni-view",{staticClass:"login-form"},[r("u--form",{ref:"uForm",attrs:{labelWidth:"90",labelStyle:{fontSize:"24rpx"},labelPosition:"left",model:t.form,rules:t.rules}},[r("u-form-item",{ref:"item1",attrs:{label:"用户名",prop:"username",borderBottom:!0}},[r("u--input",{attrs:{placeholder:"请输入用户名",border:"none"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),r("u-form-item",{ref:"item1",attrs:{label:"密码",prop:"password",borderBottom:!0}},[r("u--input",{attrs:{placeholder:"请输入密码",type:"password",border:"none"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1),r("v-uni-view",{staticClass:"flex-row mt30"},[r("u-switch",{attrs:{activeColor:"#12d97e"},model:{value:t.remember,callback:function(e){t.remember=e},expression:"remember"}}),r("v-uni-view",{staticClass:"ml20 "},[t._v("记住我")])],1),r("v-uni-view",{staticClass:"mt60"},[r("u-button",{attrs:{size:"large",type:"primary",text:"登录"}})],1),r("v-uni-view",{staticClass:"f24 tc mt40"},[t._v("注册")])],1)],1)},a=[]},f76d:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-12709030], uni-scroll-view[data-v-12709030], uni-swiper-item[data-v-12709030]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-switch[data-v-12709030]{display:flex;flex-direction:row;box-sizing:border-box;position:relative;background-color:#fff;border-width:1px;border-radius:100px;transition:background-color .4s;border-color:rgba(0,0,0,.12);border-style:solid;justify-content:flex-end;align-items:center;overflow:hidden}.u-switch__node[data-v-12709030]{display:flex;flex-direction:row;align-items:center;justify-content:center;border-radius:100px;background-color:#fff;border-radius:100px;box-shadow:1px 1px 1px 0 rgba(0,0,0,.25);transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.4s;transition-timing-function:cubic-bezier(.3,1.05,.4,1.05)}.u-switch__bg[data-v-12709030]{position:absolute;border-radius:100px;background-color:#fff;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.4s;border-top-left-radius:0;border-bottom-left-radius:0;transition-timing-function:ease}.u-switch--disabled[data-v-12709030]{opacity:.6}',""]),t.exports=e}}]);