"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[2323],{2323:(t,e,a)=>{a.d(e,{Attractor:()=>i});var o=a(4409);class i extends o.U4{constructor(t){super(t)}clear(){}init(){}interact(t){const e=this.container;void 0===t.attractDistance&&(t.attractDistance=(0,o.VG)(t.options.move.attract.distance)*e.retina.pixelRatio);const a=t.attractDistance,i=t.getPosition(),c=e.particles.quadTree.queryCircle(i,a);for(const s of c){if(t===s||!s.options.move.attract.enable||s.destroyed||s.spawning)continue;const e=s.getPosition(),{dx:a,dy:c}=(0,o.vr)(i,e),n=t.options.move.attract.rotate,r=a/(1e3*n.x),l=c/(1e3*n.y),p=s.size.value/t.size.value,v=1/p;t.velocity.x-=r*p,t.velocity.y-=l*p,s.velocity.x+=r*v,s.velocity.y+=l*v}}isEnabled(t){return t.options.move.attract.enable}reset(){}}}}]);
//# sourceMappingURL=2323.83ea5775.chunk.js.map