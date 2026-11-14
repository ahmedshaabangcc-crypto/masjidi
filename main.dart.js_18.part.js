((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,B={
CB(d){var x,w,v
if(d==null)return null
try{x=A.dm(d)
w=isNaN(x)?null:x
return w}catch(v){return null}},
avb:function avb(d){var _=this
_.a=d
_.d=_.c=_.b=null
_.r=_.f=_.e=!1
_.w=null},
avd:function avd(d){this.a=d},
ave:function ave(d){this.a=d},
avc:function avc(d){this.a=d},
bNB(d,e){var x=d*3.141592653589793/180,w=(39.8262-e)*3.141592653589793/180
return B.BM(Math.atan2(Math.sin(w)*Math.cos(0.37389315900848524),Math.cos(x)*Math.sin(0.37389315900848524)-Math.sin(x)*Math.cos(0.37389315900848524)*Math.cos(w))*180/3.141592653589793)},
BM(d){var x=C.d.ad(d,360)
return x<0?x+360:x},
bNX(d,e){var x=B.BM(d-e)
return x>=180?x-360:x},
c5N(d){var x,w,v,u,t,s=d.length
if(s<2)return 0
for(x=0,w=0,v=0;v<d.length;d.length===s||(0,A.B)(d),++v){u=d[v]*3.141592653589793/180
x+=Math.cos(u)
w+=Math.sin(u)}t=Math.sqrt(x*x+w*w)/d.length
if(t>=1)return 0
if(t<=1e-9)return 180
return Math.sqrt(-2*Math.log(t))*180/3.141592653589793},
aBG:function aBG(d){this.a=d
this.c=this.b=null},
xG:function xG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bY4(){return new B.vb(null)},
vb:function vb(d){this.a=d},
Ve:function Ve(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.r=!1
_.w=g
_.x=h
_.y=i
_.as=_.Q=_.z=null
_.CW=_.ch=_.ay=_.ax=_.at=!1
_.cy=_.cx=null
_.db=j
_.c=_.a=null},
bht:function bht(d){this.a=d},
bhs:function bhs(d){this.a=d},
bho:function bho(){},
bhp:function bhp(d){this.a=d},
bhn:function bhn(){},
bhi:function bhi(d){this.a=d},
bhj:function bhj(d){this.a=d},
bhk:function bhk(d){this.a=d},
bhl:function bhl(d,e){this.a=d
this.b=e},
bhm:function bhm(d){this.a=d},
bhq:function bhq(d,e){this.a=d
this.b=e},
bhr:function bhr(d){this.a=d},
TU:function TU(d,e,f){this.c=d
this.d=e
this.a=f},
ah5:function ah5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amo:function amo(d){this.a=d},
afo:function afo(d,e){this.b=d
this.a=e}},D,H,I,K,F,L,M,E,N
J=c[1]
A=c[0]
C=c[2]
G=c[15]
B=a.updateHolder(c[5],B)
D=c[31]
H=c[12]
I=c[34]
K=c[28]
F=c[33]
L=c[32]
M=c[29]
E=c[16]
N=c[18]
B.avb.prototype={
Or(){var x=0,w=A.o(y.e),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Or=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
n=b.G
r=A.jD(n.DeviceOrientationEvent)
if(r==null||r.requestPermission==null){n=A.jD(n.DeviceOrientationEvent)
v=n!=null
x=1
break}x=7
return A.d(A.e3(A.cs(A.ch(r,"requestPermission",null,null,null,null)),y.w),$async$Or)
case 7:q=e
p=q==="granted"
if(p)s.HI()
v=p
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.Y(l)
A.f(o)
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$Or,w)},
a9P(){var x,w,v,u,t,s
try{u=b.G
x=A.jD(u.screen)
t=x
w=A.jD(t==null?null:t.orientation)
t=w
v=B.CB(t==null?null:t.angle)
if(v!=null)return v
u=B.CB(u.orientation)
if(u==null)u=0
return u}catch(s){return 0}},
avq(d){var x,w,v,u,t,s,r,q,p,o,n=this,m="deviceorientationabsolute"
if(n.f)return
try{x=B.CB(d.beta)
w=B.CB(d.gamma)
v=B.CB(d.webkitCompassHeading)
if(v!=null){n.w=new A.b_(Date.now(),0,!1)
n.a.D(0,new B.xG(B.BM(v+n.a9P()),B.CB(d.webkitCompassAccuracy),x,w))
return}u=B.CB(d.alpha)
if(u==null)return
r=A.O(d.type)
t=r==null?null:r
if(!J.c(t,m)){q=A.hy(d.absolute)
if(q==null)q=null
p=q===!0}else p=!0
s=p
if(!s)return
if(J.c(t,m))n.r=!0
else if(n.r)return
n.w=new A.b_(Date.now(),0,!1)
n.a.D(0,new B.xG(B.BM(360-u+n.a9P()),null,x,w))}catch(o){}},
mS(){var x,w,v,u=this,t=null,s="addEventListener"
if(u.e||u.f)return
u.e=!0
u.HI()
x=u.c=A.bLj(new B.avd(u))
w=b.G
v=A.jD(w.document)
if(v!=null)A.ch(v,s,"visibilitychange",x,t,t)
A.ch(w,s,"pageshow",x,t,t)
u.d=A.kK(C.ku,new B.ave(u))},
HI(){var x,w,v=this,u=null,t="addEventListener"
if(v.f)return
v.a4e()
x=v.b=A.f6(new B.avc(v))
w=b.G
if("ondeviceorientationabsolute" in w)A.ch(w,t,"deviceorientationabsolute",x,u,u)
A.ch(w,t,"deviceorientation",x,u,u)},
a4e(){var x,w=null,v="removeEventListener",u=this.b
if(u==null)return
x=b.G
A.ch(x,v,"deviceorientationabsolute",u,w,w)
A.ch(x,v,"deviceorientation",u,w,w)
this.b=null},
l(){var x,w,v,u=this,t=null,s="removeEventListener"
if(u.f)return
u.f=!0
x=u.d
if(x!=null)x.aE()
u.a4e()
w=u.c
if(w!=null){x=b.G
v=A.jD(x.document)
if(v!=null)A.ch(v,s,"visibilitychange",w,t,t)
A.ch(x,s,"pageshow",w,t,t)}u.a.be()}}
B.aBG.prototype={}
B.xG.prototype={}
B.vb.prototype={
V(){var x=$.bPZ().a,w=x[1],v=x[2]
x=x[0]
return new B.Ve(w,v,x+" (\u062a\u0642\u0631\u064a\u0628\u064a)",new B.avb(new A.kO(null,null,y.o)),new B.aBG(0.2),A.a([],y.h),new A.b_(A.kn(0,0,!1),0,!1))}}
B.Ve.prototype={
aa(){var x,w,v,u=this
u.ao()
x=A.jD(b.G.DeviceOrientationEvent)
u.ch=x!=null&&x.requestPermission!=null
w=u.w
v=w.a
u.z=new A.eJ(v,A.w(v).i("eJ<1>")).ki(u.gaH1())
w.mS()
u.cx=A.cF(D.a85,new B.bht(u))
u.aJy()},
l(){var x=this,w=x.cx
if(w!=null)w.aE()
w=x.cy
if(w!=null)w.aE()
w=x.z
if(w!=null)w.aE()
x.w.l()
x.aq()},
aH2(d){var x,w,v,u,t,s,r,q,p,o=this
if(o.c==null)return
x=o.y
w=d.a
x.push(w)
if(x.length>15)C.b.kl(x,0)
v=o.x
w=w*3.141592653589793/180
u=Math.cos(w)
t=Math.sin(w)
w=v.b
if(w==null){v.b=u
v.c=t
v=t
w=u}else{s=v.a
w=v.b=w+(u-w)*s
r=v.c
r.toString
s=v.c=r+(t-r)*s
if(Math.abs(w)<0.000001&&Math.abs(s)<0.000001){v.b=u
v.c=t
v=t
w=u}else v=s}w=B.BM(Math.atan2(v,w)*180/3.141592653589793)
w.toString
q=Math.abs(B.bNX(B.bNB(o.d,o.e),w))<=5
if(q&&!o.CW)A.bxp(80)
v=o.Q
o.Q=w
o.CW=q
o.as=d.b
w=d.c
s=d.d
if(!(w!=null&&Math.abs(w)>35))w=s!=null&&Math.abs(s)>35
else w=!0
o.at=w
o.ax=x.length>=10&&B.c5N(x)>12
o.ay=o.ch=!1
p=new A.b_(Date.now(),0,!1)
if(v==null||p.dG(o.db).a>33e3){o.db=p
x=o.cy
if(x!=null)x.aE()
o.cy=null
o.t(new B.bho())}else if(o.cy==null)o.cy=A.cF(C.A9,new B.bhp(o))},
Hq(){var x=0,w=A.o(y.v),v,u=this,t,s
var $async$Hq=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:t=u.w
x=3
return A.d(t.Or(),$async$Hq)
case 3:s=e
if(u.c==null){x=1
break}if(s){u.t(new B.bhi(u))
t.mS()}else{u.t(new B.bhj(u))
u.c.R(y.q).f.aO(A.br(null,null,null,null,null,C.k,null,A.i("\u0645\u0646 \u063a\u064a\u0631 \u0625\u0630\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0647\u0646\u0648\u0631\u064a\u0643 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0628\u0627\u0644\u062f\u0631\u062c\u0627\u062a \u0628\u0633",null,null,null,null,null,null,null,null,null),null,C.z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.m(v,w)}})
return A.n($async$Hq,w)},
y6(d){return this.aFo(d)},
aJy(){return this.y6(!1)},
aFo(d){var x=0,w=A.o(y.v),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$y6=A.k(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:r.t(new B.bhk(r))
u=4
x=d?7:9
break
case 7:x=10
return A.d(A.w7(!0),$async$y6)
case 10:x=8
break
case 9:x=11
return A.d(A.w8(),$async$y6)
case 11:case 8:q=f
if(r.c==null||q==null){s=[1]
x=5
break}r.t(new B.bhl(r,q))
s.push(6)
x=5
break
case 4:u=3
n=t.pop()
o=r.c
if(o!=null&&d)o.R(y.q).f.aO(A.br(null,null,null,null,null,C.k,null,A.i("\u0645\u0642\u062f\u0631\u0646\u0627\u0634 \u0646\u062d\u062f\u062f \u0645\u0643\u0627\u0646\u0643 \u2014 \u0627\u062e\u062a\u0627\u0631 \u0645\u062f\u064a\u0646\u062a\u0643 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629",null,null,null,null,null,null,null,null,null),null,C.z,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.t(new B.bhm(r))
x=s.pop()
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$y6,w)},
Jp(){var x=0,w=A.o(y.v),v,u=this,t,s
var $async$Jp=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.d(H.bNr(s),$async$Jp)
case 3:t=e
if(t==null||u.c==null){x=1
break}u.t(new B.bhq(u,t))
case 1:return A.m(v,w)}})
return A.n($async$Jp,w)},
A(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.bNB(p.d,p.e),m=p.Q,l=m==null,k=!l,j=k?B.bNX(n,m):0,i=k&&p.CW,h=p.as
if(h!=null)x=h<0||h>25
else x=!1
h=y.u
w=A.a([D.acW,C.aq,A.aQ(A.i(p.f,o,o,o,o,o,N.b0,o,o,o),1)],h)
if(p.r)w.push(L.pj)
else w.push(A.ct(o,o,o,o,D.afe,o,o,new B.bhr(p),o,o,o,"\u062d\u062f\u0651\u062f \u0645\u0643\u0627\u0646\u064a",o))
w.push(A.bH(D.b0h,o,o,o,p.gaIY(),o,o))
w=A.ai(w,C.j,C.f,C.h,0,o,o)
v=l?0:m
v=A.cQ(A.bl(new B.ah5(v,k?j:n,i,o),290,290),o,o)
u=A.i("\u0627\u0644\u0642\u0628\u0644\u0629 \u0639\u0644\u0649 "+(E.aW(C.e.ad(C.d.ar(B.BM(n)),360))+"\xb0")+" \u0645\u0646 \u0627\u0644\u0634\u0645\u0627\u0644",o,o,o,o,o,M.Vq,C.ad,o,o)
t=D.ak2[C.e.ad(C.d.ba(B.BM(n)+22.5,45),8)]
s=p.d
r=p.e
q=Math.pow(Math.sin((21.4225-s)*3.141592653589793/180/2),2)+Math.cos(s*3.141592653589793/180)*Math.cos(0.37389315900848524)*Math.pow(Math.sin((39.8262-r)*3.141592653589793/180/2),2)
t=A.a([new E.cZ(w,C.af,C.aA,o,!1,o),C.V,v,C.ak,u,A.i("\u0646\u0627\u062d\u064a\u0629 "+t+" \u2022 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0644\u0643\u0639\u0628\u0629 \u062d\u0648\u0627\u0644\u064a "+E.aW(C.d.ar(12742*Math.atan2(Math.sqrt(q),Math.sqrt(1-q))))+" \u0643\u0645",o,o,o,o,o,C.ah,C.ad,o,o)],h)
if(k){w=E.aW(C.e.ad(C.d.ar(B.BM(m)),360))
v=p.as
v=v!=null&&v>=0?" \u2022 \u062f\u0642\u0629 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \xb1"+E.aW(C.d.ar(v))+"\xb0":""
t.push(A.i("\u0627\u062a\u062c\u0627\u0647 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u062f\u0644\u0648\u0642\u062a\u064a "+(w+"\xb0")+v,o,o,o,o,o,D.aRG,C.ad,o,o))}t.push(C.aJ)
if(p.ch&&l)C.b.E(t,A.a([A.jg(D.ae8,o,D.aXI,p.gatv(),A.ik(C.r,C.a5,o,o,o,o,o)),C.T],h))
if(k){l=i?"aligned":"turn "+C.d.ar(j)
if(i)h="\u062a\u0645\u0627\u0645! \u0625\u0646\u062a \u062f\u0644\u0648\u0642\u062a\u064a \u0645\u062a\u0648\u062c\u0651\u0647 \u0644\u0644\u0642\u0628\u0644\u0629 \u2713"
else{h=Math.abs(j)
h=j>0?"\u0644\u0641\u0651 \u064a\u0645\u064a\u0646 "+E.aW(C.d.ar(h))+"\xb0":"\u0644\u0641\u0651 \u0634\u0645\u0627\u0644 "+E.aW(C.d.ar(h))+"\xb0"}t.push(A.bJ(o,o,o,new E.cZ(A.i(h,o,o,o,o,o,A.cz(o,o,i?F.c7:C.i,o,o,o,o,o,o,o,o,16,o,o,C.N,o,o,!0,o,o,o,o,o,o,o,o),C.ad,o,o),C.af,C.aA,o,i,o),!1,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,C.I,o))}else if(p.ay&&!p.ch)t.push(D.aaH)
else if(!p.ch)t.push(D.a15)
if(k&&p.at)t.push(D.b9d)
if(k)l=x||p.ax
else l=!1
if(l)t.push(D.b9c)
t.push(C.T)
t.push(D.aWS)
return G.vY(o,t,"\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629")}}
B.TU.prototype={
A(d){var x=null
return new E.cZ(A.ai(A.a([A.c8(this.c,C.r,x,22),C.aV,A.aQ(A.i(this.d,x,x,x,x,x,F.pz,x,x,x),1)],y.u),C.j,C.f,C.h,0,x,x),C.af,C.aA,x,!1,x)}}
B.ah5.prototype={
A(d){var x,w=null,v=this.e,u=v?F.c7:C.r,t=A.ac5(-this.c*3.141592653589793/180,A.fG(w,w,w,new B.amo(w),D.Ul)),s=this.d,r=C.d.ar(s)
r=A.bJ(w,w,w,A.ac5(s*3.141592653589793/180,A.fG(w,w,w,new B.afo(u,w),D.Ul)),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"qibla-arrow "+r,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,C.I,w)
s=v?u:C.dc
x=A.cT(u,2)
return A.h7(C.Y,A.a([t,r,D.aCN,A.at(w,A.c8(C.eE,v?C.a5:C.r,w,w),C.m,w,w,new A.ap(s,w,x,w,w,w,C.cp),w,54,w,w,w,w,54)],y.u),C.k,C.ce,w)}}
B.amo.prototype={
aK(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=e.jE(C.p),h=e.gfA()/2-18
$.af()
x=A.aZ()
x.r=C.i.bx(0.06).gq()
d.fX(i,h,x)
x=A.aZ()
x.b=C.bq
x.r=K.hj.gq()
x.c=2
d.fX(i,h,x)
for(x=d.a,w=i.a,v=i.b,u=0;u<360;u+=10){t=(u-90)*3.141592653589793/180
s=C.e.ad(u,90)===0
r=Math.cos(t)
q=Math.sin(t)
p=Math.cos(t)
o=Math.sin(t)
n=h-(s?14:7)
m=new A.oA(C.da,C.d2,C.fX,C.i4,C.e6)
m.r=(s?C.i:C.eZ).gq()
m.c=s?2.5:1.2
l=m.e4()
x.drawLine.apply(x,[w+r*h,v+q*h,w+p*n,v+o*n,l])
l.delete()}for(x=D.ays.gdv(),x=x.ga_(x),r=h-28;x.u();){q=x.gK()
p=q.a
t=(p-90)*3.141592653589793/180
q=q.b
p=p===0?D.a3V:C.a8
k=new A.Ak(new A.f4(q,j,j,C.bg,j,j,j,j,j,j,new A.v(!0,p,j,j,j,j,16,C.W,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)),C.y,C.aF,new A.j2(1),j,j,j,j,C.be,j)
k.zC()
q=Math.cos(t)
p=Math.sin(t)
o=k.b
k.aK(d,new A.q(w+q*r-o.c/2,v+p*r-o.a.c.gcm()/2))}},
eU(d){return!1}}
B.afo.prototype={
aK(d,e){var x,w,v,u,t,s=e.jE(C.p),r=e.gfA()/2-18,q=s.a0(0,C.lb.am(0,r+12)),p=$.af(),o=A.aZ(),n=this.b
o.r=n.gq()
x=s.a0(0,C.lb.am(0,34))
w=s.a0(0,C.lb.am(0,r-6))
v=A.aZ()
v.r=n.gq()
v.c=5
v.d=C.jA
d.ly(x,w,v)
u=s.a0(0,C.lb.am(0,r-14))
t=new A.cf(p.r,C.ae,null,null,A.a([],y.a))
t.aG(new A.fq(q.a,q.b))
t.aG(new A.d0(u.a0(0,C.fc.am(0,11)).a,u.a0(0,C.fc.am(0,11)).b))
t.aG(new A.d0(u.aj(0,C.fc.am(0,11)).a,u.aj(0,C.fc.am(0,11)).b))
t.aG(new A.m6())
d.fG(t,o)},
eU(d){return!d.b.k(0,this.b)}}
var z=a.updateTypes(["aa<~>()","~(xG)"])
B.avd.prototype={
$0(){var x,w,v=this.a
if(v.f)return
x=A.jD(b.G.document)
w=A.O(x==null?null:x.visibilityState)
if((w==null?null:w)==="visible")v.HI()},
$S:16}
B.ave.prototype={
$1(d){var x=this.a,w=x.w
if(w!=null&&new A.b_(Date.now(),0,!1).dG(w).a>3e6){x.w=new A.b_(Date.now(),0,!1)
x.HI()}},
$S:34}
B.avc.prototype={
$1(d){return this.a.avq(d)},
$S:3}
B.bht.prototype={
$0(){var x=this.a
if(x.c!=null&&x.Q==null)x.t(new B.bhs(x))},
$S:0}
B.bhs.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.bho.prototype={
$0(){},
$S:0}
B.bhp.prototype={
$0(){var x=this.a
x.cy=null
x.db=new A.b_(Date.now(),0,!1)
if(x.c!=null)x.t(new B.bhn())},
$S:0}
B.bhn.prototype={
$0(){},
$S:0}
B.bhi.prototype={
$0(){return this.a.ch=!1},
$S:0}
B.bhj.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.bhk.prototype={
$0(){return this.a.r=!0},
$S:0}
B.bhl.prototype={
$0(){var x=this.a,w=this.b
x.d=w.a
x.e=w.b
x.f="\u0645\u0643\u0627\u0646\u0643 \u0627\u0644\u062d\u0627\u0644\u064a"},
$S:0}
B.bhm.prototype={
$0(){return this.a.r=!1},
$S:0}
B.bhq.prototype={
$0(){var x=this.a,w=this.b
x.d=w.b
x.e=w.c
x.f=w.glH()},
$S:0}
B.bhr.prototype={
$0(){return this.a.y6(!0)},
$S:0};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Ve.prototype,"gaH1","aH2",1)
w(v,"gatv","Hq",0)
w(v,"gaIY","Jp",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.avb,B.aBG,B.xG])
x(A.ki,[B.avd,B.bht,B.bhs,B.bho,B.bhp,B.bhn,B.bhi,B.bhj,B.bhk,B.bhl,B.bhm,B.bhq,B.bhr])
x(A.hW,[B.ave,B.avc])
w(B.vb,A.P)
w(B.Ve,A.U)
x(A.a5,[B.TU,B.ah5])
x(A.CL,[B.amo,B.afo])})()
A.oi(b.typeUniverse,JSON.parse('{"vb":{"P":[],"e":[]},"Ve":{"U":["vb"]},"TU":{"a5":[],"e":[]},"ah5":{"a5":[],"e":[]},"amo":{"ar":[]},"afo":{"ar":[]}}'))
var y={a:A.a3("y<eo>"),u:A.a3("y<e>"),h:A.a3("y<K>"),w:A.a3("h"),o:A.a3("kO<xG>"),q:A.a3("of"),e:A.a3("A"),v:A.a3("~")};(function constants(){var x=a.makeConstList
D.aZR=new A.r("\u0628\u0646\u062f\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u0628\u0648\u0635\u0644\u0629\u2026",null,C.ah,null,null,null,null,null,null,null,null)
D.a15=new A.dL(C.Y,null,null,D.aZR,null)
D.a3V=new A.H(1,1,0.4196078431372549,0.4196078431372549,C.l)
D.a85=new A.bv(3e6)
D.aU4=new A.v(!0,C.a8,null,null,null,null,13,null,null,null,null,null,1.7,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b0Y=new A.r("\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u0634 \u0645\u062a\u0627\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u0623\u0648 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647. \u062d\u0637 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0648\u062c\u0651\u0647 \u062d\u0631\u0641 \xab\u0634\xbb (\u0627\u0644\u0634\u0645\u0627\u0644) \u0646\u0627\u062d\u064a\u0629 \u0627\u0644\u0634\u0645\u0627\u0644 \u2014 \u062a\u0642\u062f\u0631 \u062a\u0639\u0631\u0641\u0647 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062e\u0631\u0627\u0626\u0637 \u0623\u0648 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u2014 \u0648\u0627\u0644\u0633\u0647\u0645 \u0627\u0644\u062f\u0647\u0628\u064a \u0647\u064a\u0628\u0642\u0649 \u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629.",null,D.aU4,null,null,null,null,null,null,null,null)
D.aaH=new E.cZ(D.b0Y,C.af,C.aA,null,!1,null)
D.acW=new A.a4(I.BK,null,C.r,null,null,null)
D.ae8=new A.a4(C.tY,null,null,null,null,null)
D.afe=new A.a4(C.iZ,null,C.a8,null,null,null)
D.ak2=x(["\u0627\u0644\u0634\u0645\u0627\u0644","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u0634\u0631\u0642","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u062c\u0646\u0648\u0628","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u063a\u0631\u0628\u064a","\u0627\u0644\u063a\u0631\u0628","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u063a\u0631\u0628\u064a"],A.a3("y<h>"))
D.ays=new A.cx([0,"\u0634",90,"\u0642",180,"\u062c",270,"\u063a"],A.a3("cx<t,h>"))
D.aeq=new A.a4(C.Bp,34,C.i,null,null,null)
D.aCN=new A.re(null,0,null,null,null,null,D.aeq,null)
D.Ul=new A.G(290,290)
D.aRG=new A.v(!0,C.a8,null,null,null,null,13,null,null,null,null,null,1.8,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWS=new A.r("\u0646\u0635\u064a\u062d\u0629: \u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0628\u0639\u064a\u062f \u0639\u0646 \u0627\u0644\u062d\u062f\u064a\u062f \u0648\u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633 \u0648\u062c\u0631\u0627\u0628 \u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633. \u0644\u0648 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0645\u0634 \u062b\u0627\u0628\u062a \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0641\u064a \u0634\u0643\u0644 \u0631\u0642\u0645 8 \u0643\u0627\u0645 \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u062a\u062a\u0638\u0628\u0637.",null,C.ah,C.ad,null,null,null,null,null,null,null)
D.aXI=new A.r("\u0634\u063a\u0651\u0644 \u0627\u0644\u0628\u0648\u0635\u0644\u0629",null,null,null,null,null,null,null,null,null,null)
D.b0h=new A.r("\u0645\u062f\u064a\u0646\u0629 \u062a\u0627\u0646\u064a\u0629",null,C.em,null,null,null,null,null,null,null,null)
D.abs=new A.a2(62812,"MaterialIcons",null,!1)
D.b9c=new B.TU(D.abs,"\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u062d\u062a\u0627\u062c\u0629 \u0645\u0639\u0627\u064a\u0631\u0629: \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0639\u0644\u0649 \u0634\u0643\u0644 8 \u0641\u064a \u0627\u0644\u0647\u0648\u0627 \u0643\u0627\u0645 \u0645\u0631\u0629",null)
D.acC=new A.a2(985111,"MaterialIcons",null,!1)
D.b9d=new B.TU(D.acC,"\u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0641\u0631\u0648\u062f (\u0645\u0633\u0637\u0651\u062d \u0632\u064a \u0627\u0644\u0635\u064a\u0646\u064a\u0629) \u0639\u0634\u0627\u0646 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u064a\u0628\u0642\u0649 \u0645\u0638\u0628\u0648\u0637",null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cdF","bPZ",()=>A.bBN())})()};
(a=>{a["SPMlzpnR0GpuG/ta3mpPuEaYazA="]=a.current})($__dart_deferred_initializers__);