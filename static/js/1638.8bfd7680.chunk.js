"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[1638],{1638:(e,t,a)=>{a.d(t,{EmojiDrawer:()=>c});var o=a(4409);var n=a(6682);const i='"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';class c{constructor(){this._emojiShapeDict=new Map}destroy(){for(const[e,t]of this._emojiShapeDict)t instanceof ImageBitmap&&(null===t||void 0===t||t.close(),this._emojiShapeDict.delete(e))}draw(e){!function(e){const{context:t,particle:a,radius:o,opacity:n}=e,i=a.emojiData,c=2*o,l=t.globalAlpha;i&&(t.globalAlpha=n,t.drawImage(i,-o,-o,c,c),t.globalAlpha=l)}(e)}async init(e){const t=e.actualOptions;if(!n.u.find((e=>(0,o.hn)(e,t.particles.shape.type))))return;const a=[(0,o.Al)(i)],c=n.u.map((e=>t.particles.shape.options[e])).find((e=>!!e));c&&(0,o.wJ)(c,(e=>{e.font&&a.push((0,o.Al)(e.font))})),await Promise.all(a)}particleDestroy(e){delete e.emojiData}particleInit(e,t){var a;const n=t.shapeData;if(null===n||void 0===n||!n.value)return;const c=(0,o.TA)(n.value,t.randomIndexData),l=null!==(a=n.font)&&void 0!==a?a:i;if(!c)return;const s="".concat(c,"_").concat(l),r=this._emojiShapeDict.get(s);if(r)return void(t.emojiData=r);const p=2*(0,o.W9)(t.size.value);let f;const m=(0,o.W9)(t.size.value);if("undefined"!==typeof OffscreenCanvas){const e=new OffscreenCanvas(p,p),t=e.getContext("2d");if(!t)return;t.font="400 ".concat(2*m,"px ").concat(l),t.textBaseline="middle",t.textAlign="center",t.fillText(c,m,m),f=e.transferToImageBitmap()}else{const e=document.createElement("canvas");e.width=p,e.height=p;const t=e.getContext("2d");if(!t)return;t.font="400 ".concat(2*m,"px ").concat(l),t.textBaseline="middle",t.textAlign="center",t.fillText(c,m,m),f=e}this._emojiShapeDict.set(s,f),t.emojiData=f}}}}]);
//# sourceMappingURL=1638.8bfd7680.chunk.js.map