"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[1116],{98762:function(t,e,r){var n,o,i,a,c,s,l=r(88962),d=r(33368),u=r(71650),h=r(82390),p=r(69205),v=r(70906),f=r(91808),m=(r(14271),r(68144)),y=r(79932);r(76870),r(52039),(0,f.Z)([(0,y.Mo)("ha-progress-button")],(function(t,e){var r=function(e){(0,p.Z)(n,e);var r=(0,v.Z)(n);function n(){var e;(0,u.Z)(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=r.call.apply(r,[this].concat(i)),t((0,h.Z)(e)),e}return(0,d.Z)(n)}(e);return{F:r,d:[{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"progress",value:function(){return!1}},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"raised",value:function(){return!1}},{kind:"field",decorators:[(0,y.SB)()],key:"_result",value:void 0},{kind:"method",key:"render",value:function(){var t=this._result||this.progress;return(0,m.dy)(n||(n=(0,l.Z)([' <mwc-button ?raised="','" .disabled="','" @click="','" class="','"> <slot></slot> </mwc-button> '," "])),this.raised,this.disabled||this.progress,this._buttonTapped,this._result||"",t?(0,m.dy)(o||(o=(0,l.Z)([' <div class="progress"> '," </div> "])),"success"===this._result?(0,m.dy)(i||(i=(0,l.Z)(['<ha-svg-icon .path="','"></ha-svg-icon>'])),"M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"):"error"===this._result?(0,m.dy)(a||(a=(0,l.Z)(['<ha-svg-icon .path="','"></ha-svg-icon>'])),"M2.2,16.06L3.88,12L2.2,7.94L6.26,6.26L7.94,2.2L12,3.88L16.06,2.2L17.74,6.26L21.8,7.94L20.12,12L21.8,16.06L17.74,17.74L16.06,21.8L12,20.12L7.94,21.8L6.26,17.74L2.2,16.06M13,17V15H11V17H13M13,13V7H11V13H13Z"):this.progress?(0,m.dy)(c||(c=(0,l.Z)([' <ha-circular-progress size="small" active></ha-circular-progress> ']))):""):"")}},{kind:"method",key:"actionSuccess",value:function(){this._setResult("success")}},{kind:"method",key:"actionError",value:function(){this._setResult("error")}},{kind:"method",key:"_setResult",value:function(t){var e=this;this._result=t,setTimeout((function(){e._result=void 0}),2e3)}},{kind:"method",key:"_buttonTapped",value:function(t){this.progress&&t.stopPropagation()}},{kind:"get",static:!0,key:"styles",value:function(){return(0,m.iv)(s||(s=(0,l.Z)([":host{outline:0;display:inline-block;position:relative}mwc-button{transition:all 1s}mwc-button.success{--mdc-theme-primary:white;background-color:var(--success-color);transition:none;border-radius:4px;pointer-events:none}mwc-button[raised].success{--mdc-theme-primary:var(--success-color);--mdc-theme-on-primary:white}mwc-button.error{--mdc-theme-primary:white;background-color:var(--error-color);transition:none;border-radius:4px;pointer-events:none}mwc-button[raised].error{--mdc-theme-primary:var(--error-color);--mdc-theme-on-primary:white}.progress{bottom:4px;position:absolute;text-align:center;top:4px;width:100%}ha-svg-icon{color:#fff}mwc-button.error slot,mwc-button.success slot{visibility:hidden}"])))}}]}}),m.oi)},81545:function(t,e,r){var n,o,i=r(88962),a=r(33368),c=r(71650),s=r(82390),l=r(69205),d=r(70906),u=r(91808),h=r(34541),p=r(47838),v=(r(65666),r(68144)),f=r(79932),m=r(38378);(0,u.Z)([(0,f.Mo)("ha-button-menu")],(function(t,e){var r=function(e){(0,l.Z)(n,e);var r=(0,d.Z)(n);function n(){var e;(0,c.Z)(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=r.call.apply(r,[this].concat(i)),t((0,s.Z)(e)),e}return(0,a.Z)(n)}(e);return{F:r,d:[{kind:"field",key:m.gA,value:void 0},{kind:"field",decorators:[(0,f.Cb)()],key:"corner",value:function(){return"BOTTOM_START"}},{kind:"field",decorators:[(0,f.Cb)()],key:"menuCorner",value:function(){return"START"}},{kind:"field",decorators:[(0,f.Cb)({type:Number})],key:"x",value:function(){return null}},{kind:"field",decorators:[(0,f.Cb)({type:Number})],key:"y",value:function(){return null}},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"multi",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"activatable",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"fixed",value:function(){return!1}},{kind:"field",decorators:[(0,f.IO)("mwc-menu",!0)],key:"_menu",value:void 0},{kind:"get",key:"items",value:function(){var t;return null===(t=this._menu)||void 0===t?void 0:t.items}},{kind:"get",key:"selected",value:function(){var t;return null===(t=this._menu)||void 0===t?void 0:t.selected}},{kind:"method",key:"focus",value:function(){var t,e;null!==(t=this._menu)&&void 0!==t&&t.open?this._menu.focusItemAtIndex(0):null===(e=this._triggerButton)||void 0===e||e.focus()}},{kind:"method",key:"render",value:function(){return(0,v.dy)(n||(n=(0,i.Z)([' <div @click="','"> <slot name="trigger" @slotchange="','"></slot> </div> <mwc-menu .corner="','" .menuCorner="','" .fixed="','" .multi="','" .activatable="','" .y="','" .x="','"> <slot></slot> </mwc-menu> '])),this._handleClick,this._setTriggerAria,this.corner,this.menuCorner,this.fixed,this.multi,this.activatable,this.y,this.x)}},{kind:"method",key:"firstUpdated",value:function(t){var e=this;(0,h.Z)((0,p.Z)(r.prototype),"firstUpdated",this).call(this,t),"rtl"===document.dir&&this.updateComplete.then((function(){e.querySelectorAll("mwc-list-item").forEach((function(t){var e=document.createElement("style");e.innerHTML="span.material-icons:first-of-type { margin-left: var(--mdc-list-item-graphic-margin, 32px) !important; margin-right: 0px !important;}",t.shadowRoot.appendChild(e)}))}))}},{kind:"method",key:"_handleClick",value:function(){this.disabled||(this._menu.anchor=this,this._menu.show())}},{kind:"get",key:"_triggerButton",value:function(){return this.querySelector('ha-icon-button[slot="trigger"], mwc-button[slot="trigger"]')}},{kind:"method",key:"_setTriggerAria",value:function(){this._triggerButton&&(this._triggerButton.ariaHasPopup="menu")}},{kind:"get",static:!0,key:"styles",value:function(){return(0,v.iv)(o||(o=(0,i.Z)([":host{display:inline-block;position:relative}::slotted([disabled]){color:var(--disabled-text-color)}"])))}}]}}),v.oi)},14089:function(t,e,r){var n,o,i=r(88962),a=r(33368),c=r(71650),s=r(82390),l=r(69205),d=r(70906),u=r(91808),h=r(68144),p=r(79932);(0,u.Z)([(0,p.Mo)("ha-settings-row")],(function(t,e){var r=function(e){(0,l.Z)(n,e);var r=(0,d.Z)(n);function n(){var e;(0,c.Z)(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=r.call.apply(r,[this].concat(i)),t((0,s.Z)(e)),e}return(0,a.Z)(n)}(e);return{F:r,d:[{kind:"field",decorators:[(0,p.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,p.Cb)({type:Boolean,attribute:"three-line"})],key:"threeLine",value:function(){return!1}},{kind:"method",key:"render",value:function(){return(0,h.dy)(n||(n=(0,i.Z)([' <div class="prefix-wrap"> <slot name="prefix"></slot> <div class="body" ?two-line="','" ?three-line="','"> <slot name="heading"></slot> <div class="secondary"><slot name="description"></slot></div> </div> </div> <div class="content"><slot></slot></div> '])),!this.threeLine,this.threeLine)}},{kind:"get",static:!0,key:"styles",value:function(){return(0,h.iv)(o||(o=(0,i.Z)([":host{display:flex;padding:0 16px;align-content:normal;align-self:auto;align-items:center}.body{padding:8px 16px 8px 0;overflow:hidden;display:var(--layout-vertical_-_display);flex-direction:var(--layout-vertical_-_flex-direction);justify-content:var(--layout-center-justified_-_justify-content);flex:var(--layout-flex_-_flex);flex-basis:var(--layout-flex_-_flex-basis)}.body[three-line]{min-height:var(--paper-item-body-three-line-min-height,88px)}.body>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.body>.secondary{display:block;padding-top:4px;font-family:var(--mdc-typography-body2-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));-webkit-font-smoothing:antialiased;font-size:var(--mdc-typography-body2-font-size,.875rem);font-weight:var(--mdc-typography-body2-font-weight,400);line-height:normal;color:var(--secondary-text-color)}.body[two-line]{min-height:calc(var(--paper-item-body-two-line-min-height,72px) - 16px);flex:1}.content{display:contents}:host(:not([narrow])) .content{display:var(--settings-row-content-display,flex);justify-content:flex-end;flex:1;padding:16px 0}.content ::slotted(*){width:var(--settings-row-content-width)}:host([narrow]){align-items:normal;flex-direction:column;border-top:1px solid var(--divider-color);padding-bottom:8px}::slotted(ha-switch){padding:16px 0}.secondary{white-space:normal}.prefix-wrap{display:var(--settings-row-prefix-display)}:host([narrow]) .prefix-wrap{display:flex;align-items:center}"])))}}]}}),h.oi)},30172:function(t,e,r){var n,o=r(88962),i=r(33368),a=r(71650),c=r(82390),s=r(69205),l=r(70906),d=r(91808),u=r(34541),h=r(47838),p=r(53464),v=r(4301),f=r(68144),m=r(79932),y=r(47181);(0,d.Z)([(0,m.Mo)("ha-switch")],(function(t,e){var r=function(e){(0,s.Z)(n,e);var r=(0,l.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return e=r.call.apply(r,[this].concat(i)),t((0,c.Z)(e)),e}return(0,i.Z)(n)}(e);return{F:r,d:[{kind:"field",decorators:[(0,m.Cb)({type:Boolean})],key:"haptic",value:function(){return!1}},{kind:"method",key:"firstUpdated",value:function(){var t=this;(0,u.Z)((0,h.Z)(r.prototype),"firstUpdated",this).call(this),this.addEventListener("change",(function(){var e;t.haptic&&(e="light",(0,y.B)(window,"haptic",e))}))}},{kind:"field",static:!0,key:"styles",value:function(){return[v.W,(0,f.iv)(n||(n=(0,o.Z)([":host{--mdc-theme-secondary:var(--switch-checked-color)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:var(--switch-checked-button-color);border-color:var(--switch-checked-button-color)}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:var(--switch-checked-track-color);border-color:var(--switch-checked-track-color)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:var(--switch-unchecked-button-color);border-color:var(--switch-unchecked-button-color)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:var(--switch-unchecked-track-color);border-color:var(--switch-unchecked-track-color)}"])))]}}]}}),p.H)},51283:function(t,e,r){r.d(e,{t:function(){return a},y:function(){return c}});var n=r(99312),o=r(81043),i=r(63864),a=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.callService("homeassistant","restart");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e,r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,i.I)(e.config.version,2021,2,4)){t.next=5;break}return t.next=3,e.callWS({type:"supervisor/api",endpoint:"/core/update",method:"post",timeout:null,data:{backup:r}});case 3:t.next=7;break;case 5:return t.next=7,e.callApi("POST","hassio/core/update",{backup:r});case 7:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=1116-xNyDWQHsExg.js.map