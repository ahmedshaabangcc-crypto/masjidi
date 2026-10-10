((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={XK:function XK(){this.a=$
this.b=null},aqJ:function aqJ(d){this.a=d},
bKr(){return new B.tS(null)},
tS:function tS(d){this.a=d},
S9:function S9(d,e,f){var _=this
_.d=d
_.e=e
_.f="\u0627\u0644\u0642\u0627\u0647\u0631\u0629 (\u062a\u0642\u0631\u064a\u0628\u064a)"
_.r=!1
_.w=f
_.y=_.x=null
_.as=_.Q=_.z=!1
_.c=_.a=_.at=null},
b7m:function b7m(d){this.a=d},
b7l:function b7l(d,e,f){this.a=d
this.b=e
this.c=f},
b7n:function b7n(d){this.a=d},
b7k:function b7k(d){this.a=d},
b7i:function b7i(d){this.a=d},
b7j:function b7j(d){this.a=d},
b7o:function b7o(d){this.a=d},
b7p:function b7p(d,e){this.a=d
this.b=e},
b7q:function b7q(d){this.a=d},
b7s:function b7s(){},
b7r:function b7r(d,e){this.a=d
this.b=e},
b7t:function b7t(d,e){this.a=d
this.b=e},
adg:function adg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ain:function ain(d,e,f){this.b=d
this.c=e
this.a=f},
bAw(d,e){var x=d*3.141592653589793/180,w=(39.8262-e)*3.141592653589793/180
return B.VJ(Math.atan2(Math.sin(w)*Math.cos(0.37389315900848524),Math.cos(x)*Math.sin(0.37389315900848524)-Math.sin(x)*Math.cos(0.37389315900848524)*Math.cos(w))*180/3.141592653589793)},
VJ(d){var x=C.d.ak(d,360)
return x<0?x+360:x},
bq4(d,e){var x=B.VJ(d-e)
return x>180?x-360:x}},D,F,H,I,K,E,G
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[5],B)
D=c[23]
F=c[22]
H=c[25]
I=c[19]
K=c[24]
E=c[12]
G=c[14]
B.XK.prototype={
MD(){var x=0,w=A.o(y.e),v,u=2,t=[],s,r,q,p,o
var $async$MD=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=b.G
s=A.vk(q.DeviceOrientationEvent)
if(s==null||s.requestPermission==null){q=A.vk(q.DeviceOrientationEvent)
v=q!=null
x=1
break}x=7
return A.e(A.e6(A.eM(s,"requestPermission",null,null,y.h),y.w),$async$MD)
case 7:r=e
v=r==="granted"
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$MD,w)},
a6E(){var x,w,v,u,t,s,r
try{t=b.G
x=A.vk(t.screen)
s=x
w=A.vk(s==null?null:s.orientation)
s=w
v=s==null?null:s.angle
if(v!=null){t=A.cT(v)
return t}u=t.orientation
t=u==null?0:A.cT(u)
return t}catch(r){return 0}},
aCg(d){var x,w,v,u,t,s,r,q=this
try{x=d.webkitCompassHeading
if(x!=null){t=q.a
t===$&&A.a()
t.C(0,B.VJ(A.cT(x)+q.a6E()))
return}w=d.alpha
if(w==null)return
s=A.a1(d.type)
v=s==null?null:s
t=A.iz(d.absolute)
if(t==null)t=null
u=t===!0
if(J.c(v,"deviceorientationabsolute")||u){t=q.a
t===$&&A.a()
t.C(0,B.VJ(360-A.cT(w)+q.a6E()))}}catch(r){}},
arz(){var x,w,v,u="addEventListener"
if(this.b!=null)return
x=this.b=A.f_(new B.aqJ(this))
w=b.G
v=y.q
A.eM(w,u,"deviceorientationabsolute",x,v)
A.eM(w,u,"deviceorientation",x,v)},
a7B(){var x,w,v="removeEventListener",u=this.b
if(u==null)return
x=b.G
w=y.q
A.eM(x,v,"deviceorientationabsolute",u,w)
A.eM(x,v,"deviceorientation",u,w)
this.b=null}}
B.tS.prototype={
V(){var x=C.b.gad(F.mN),w=C.b.gad(F.mN),v=new B.XK()
v.a=new A.k7(v.gary(),v.gaIb(),y.o)
return new B.S9(x.b,w.c,v)}}
B.S9.prototype={
ai(){var x,w,v=this
v.ar()
x=A.vk(b.G.DeviceOrientationEvent)
w=x!=null&&x.requestPermission!=null
v.Q=w
if(!w)v.a4F()
v.BF()},
l(){var x=this,w=x.at
if(w!=null)w.aI()
w=x.x
if(w!=null)w.aI()
w=x.w
w.a7B()
w=w.a
w===$&&A.a()
w.bh()
x.aA()},
a4F(){var x=this,w=x.x
if(w!=null)w.aI()
w=x.w.a
w===$&&A.a()
x.x=new A.el(w,A.w(w).i("el<1>")).jV(new B.b7m(x))
w=x.at
if(w!=null)w.aI()
x.at=A.cG(D.a3k,new B.b7n(x))},
Gg(){var x=0,w=A.o(y.v),v,u=this,t
var $async$Gg=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:x=3
return A.e(u.w.MD(),$async$Gg)
case 3:t=e
if(u.c==null){x=1
break}u.t(new B.b7i(u))
if(t)u.a4F()
else{u.t(new B.b7j(u))
u.c.U(y.r).f.bw(A.c_(null,null,null,null,null,C.l,null,A.q("\u0645\u0646 \u063a\u064a\u0631 \u0625\u0630\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0647\u0646\u0648\u0631\u064a\u0643 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0628\u0627\u0644\u062f\u0631\u062c\u0627\u062a \u0628\u0633",null,null,null,null,null,null,null,null),null,C.O,null,null,null,null,null,null,null,null,null,null))}case 1:return A.m(v,w)}})
return A.n($async$Gg,w)},
BF(){var x=0,w=A.o(y.v),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$BF=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:r.t(new B.b7o(r))
u=4
x=7
return A.e(A.uF(),$async$BF)
case 7:q=e
if(r.c==null){s=[1]
x=5
break}r.t(new B.b7p(r,q))
s.push(6)
x=5
break
case 4:u=3
n=t.pop()
o=r.c
if(o!=null)o.U(y.r).f.bw(A.c_(null,null,null,null,null,C.l,null,A.q("\u0645\u0642\u062f\u0631\u0646\u0627\u0634 \u0646\u062d\u062f\u062f \u0645\u0643\u0627\u0646\u0643 \u2014 \u0627\u062e\u062a\u0627\u0631 \u0645\u062f\u064a\u0646\u062a\u0643 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629",null,null,null,null,null,null,null,null),null,C.O,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.t(new B.b7q(r))
x=s.pop()
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$BF,w)},
I1(){var x=0,w=A.o(y.v),v,u=this,t,s
var $async$I1=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.e(A.hn(null,new B.b7s(),s,!1,null,y.C),$async$I1)
case 3:t=e
if(t==null||u.c==null){x=1
break}u.t(new B.b7t(u,t))
case 1:return A.m(v,w)}})
return A.n($async$I1,w)},
D(d){var x,w,v,u,t,s,r=this,q=null,p=B.bAw(r.d,r.e),o=r.y,n=o!=null,m=n?B.bq4(p,o):0,l=y.u,k=A.b([D.a7P,C.ak,A.b1(A.q(r.f,q,q,q,q,G.bn,q,q,q),1)],l)
if(r.r)k.push(K.oa)
else k.push(A.dF(q,q,q,D.a9J,q,q,r.gaEH(),q,q,q,"\u062d\u062f\u0651\u062f \u0645\u0643\u0627\u0646\u064a",q))
k.push(A.cd(D.aNo,q,q,r.gaEg(),q,q))
k=A.ar(k,C.k,C.f,C.h,0,q)
x=n?-o:0
x=A.d2(A.bD(new B.adg(x,p,r.as&&n,q),290,290),q,q)
w=A.q("\u0627\u0644\u0642\u0628\u0644\u0629 \u0639\u0644\u0649 "+E.bc(C.d.az(p,0))+"\xb0 \u0645\u0646 \u0627\u0644\u0634\u0645\u0627\u0644",q,q,q,q,D.aDH,C.as,q,q)
v=D.ae0[C.e.ak(C.d.bI(B.VJ(p)+22.5,45),8)]
u=r.d
t=r.e
s=Math.pow(Math.sin((21.4225-u)*3.141592653589793/180/2),2)+Math.cos(u*3.141592653589793/180)*Math.cos(0.37389315900848524)*Math.pow(Math.sin((39.8262-t)*3.141592653589793/180/2),2)
l=A.b([new E.dm(k,C.aj,C.aD,q,!1,q),C.a_,x,C.ao,w,A.q("\u0646\u0627\u062d\u064a\u0629 "+v+" \u2022 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0644\u0643\u0639\u0628\u0629 \u062d\u0648\u0627\u0644\u064a "+E.bc(C.d.aD(12742*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))))+" \u0643\u0645",q,q,q,q,G.ax,C.as,q,q),C.aU],l)
if(r.Q)l.push(A.py(D.a8R,D.aKr,r.gapK(),A.pz(C.u,C.am,q,q)))
else if(n){k=r.as
if(k)x="\u062a\u0645\u0627\u0645! \u0625\u0646\u062a \u062f\u0644\u0648\u0642\u062a\u064a \u0645\u062a\u0648\u062c\u0651\u0647 \u0644\u0644\u0642\u0628\u0644\u0629 \u2713"
else{x=Math.abs(m)
x=m>0?"\u0644\u0641\u0651 \u064a\u0645\u064a\u0646 "+E.bc(C.d.aD(x))+"\xb0":"\u0644\u0641\u0651 \u0634\u0645\u0627\u0644 "+E.bc(C.d.aD(x))+"\xb0"}l.push(new E.dm(A.q(x,q,q,q,q,D.aF3,C.as,q,q),C.aj,C.aD,q,k,q))}else if(r.z)l.push(D.a5H)
else l.push(D.Yt)
l.push(C.T)
l.push(D.aNL)
return E.ux(q,l,"\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629")}}
B.adg.prototype={
D(d){var x=null,w=this.e,v=A.aPC(this.c*3.141592653589793/180,A.hb(x,x,x,new B.ain(this.d,w,x),D.aBM)),u=w?C.u:I.dL,t=A.cO(C.u,2)
return A.hh(C.V,A.b([v,D.auD,A.aD(x,A.cE(C.eC,w?C.am:C.u,x,x),C.m,x,x,new A.aw(u,x,t,x,x,x,C.cr),x,54,x,x,x,x,54)],y.u),C.l,C.bV,x)}}
B.ain.prototype={
aJ(a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a3.kq(C.n),a1=a3.gfv()/2-18
$.a7()
x=A.b0()
x.r=C.i.bZ(0.06).gq()
a2.jq(a0,a1,x)
x=A.b0()
x.b=C.bG
x.r=H.jL.gq()
x.c=2
a2.jq(a0,a1,x)
for(x=a2.a,w=a0.a,v=a0.b,u=0;u<360;u+=10){t=(u-90)*3.141592653589793/180
s=C.e.ak(u,90)===0
r=Math.cos(t)
q=Math.sin(t)
p=Math.cos(t)
o=Math.sin(t)
n=a1-(s?14:7)
m=new A.nH(C.cS,C.dg,C.fp,C.hs,C.dN)
m.r=(s?C.i:C.fP).gq()
m.c=s?2.5:1.2
l=m.ef()
x.drawLine.apply(x,[w+r*a1,v+q*a1,w+p*n,v+o*n,l])
l.delete()}for(x=D.aqY.gdY(),x=x.ga7(x),r=a1-28;x.u();){q=x.gN()
p=q.a
t=(p-90)*3.141592653589793/180
q=q.b
p=p===0?D.a0f:C.a5
k=new A.yy(new A.f6(q,d,d,C.bj,d,d,d,d,d,d,new A.r(!0,p,d,d,d,d,16,C.a1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)),C.y,C.aJ,new A.ix(1),d,d,d,d,C.b9,d)
k.yA()
q=Math.cos(t)
p=Math.sin(t)
o=k.b
k.aJ(a2,new A.p(w+q*r-o.c/2,v+p*r-o.a.c.gc9()/2))}t=(this.b-90)*3.141592653589793/180
x=Math.cos(t)
w=Math.sin(t)
j=new A.p(x,w)
i=new A.p(-w,x)
h=a0.X(0,j.al(0,a1+12))
g=a0.X(0,j.al(0,34))
x=$.a7()
f=A.b0()
w=(this.c?C.u:C.u.bZ(0.9)).gq()
f.r=w
v=a0.X(0,j.al(0,a1-6))
r=A.b0()
r.r=A.bY(w).gq()
r.c=5
r.d=C.j2
a2.l6(g,v,r)
e=new A.c6(x.r,C.a7,d,d,A.b([],y.a))
e.aE(new A.f3(h.a,h.b))
x=a1-14
e.aE(new A.cA(a0.X(0,j.al(0,x)).X(0,i.al(0,11)).a,a0.X(0,j.al(0,x)).X(0,i.al(0,11)).b))
e.aE(new A.cA(a0.X(0,j.al(0,x)).af(0,i.al(0,11)).a,a0.X(0,j.al(0,x)).af(0,i.al(0,11)).b))
e.aE(new A.lr())
a2.fD(e,f)},
eH(d){return d.b!==this.b||d.c!==this.c}}
var z=a.updateTypes(["a4<~>()","~()"])
B.aqJ.prototype={
$1(d){return this.a.aCg(d)},
$S:3}
B.b7m.prototype={
$1(d){var x,w,v,u=this.a
if(u.c==null)return
x=u.y
w=x==null?d:B.VJ(x+B.bq4(d,x)*0.35)
v=Math.abs(B.bq4(B.bAw(u.d,u.e),w))<4
if(v&&!u.as)A.bly(80)
u.t(new B.b7l(u,w,v))},
$S:57}
B.b7l.prototype={
$0(){var x=this.a
x.y=this.b
x.as=this.c},
$S:0}
B.b7n.prototype={
$0(){var x=this.a
if(x.c!=null)x.t(new B.b7k(x))},
$S:0}
B.b7k.prototype={
$0(){return this.a.z=!0},
$S:0}
B.b7i.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.b7j.prototype={
$0(){return this.a.z=!0},
$S:0}
B.b7o.prototype={
$0(){return this.a.r=!0},
$S:0}
B.b7p.prototype={
$0(){var x=this.a,w=this.b
x.d=w.a
x.e=w.b
x.f="\u0645\u0643\u0627\u0646\u0643 \u0627\u0644\u062d\u0627\u0644\u064a"},
$S:0}
B.b7q.prototype={
$0(){return this.a.r=!1},
$S:0}
B.b7s.prototype={
$1(d){var x,w,v=null,u=A.b([F.Aj],y.u)
for(x=0;x<27;++x){w=F.mN[x]
u.push(A.d5(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.b7r(d,w),!1,v,v,v,v,v,v,A.q(w.a,v,v,v,v,v,v,v,v),v,v))}return A.dX(!0,A.cJ(u,v,v,v,C.w,!1),C.N,!0)},
$S:39}
B.b7r.prototype={
$0(){A.aq(this.a,!1).bF(this.b)
return null},
$S:0}
B.b7t.prototype={
$0(){var x=this.a,w=this.b
x.d=w.b
x.e=w.c
x.f=w.a},
$S:0};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.XK.prototype,"gary","arz",1)
x(w,"gaIb","a7B",1)
x(w=B.S9.prototype,"gapK","Gg",0)
x(w,"gaEH","BF",0)
x(w,"gaEg","I1",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.XK,A.M)
w(A.iH,[B.aqJ,B.b7m,B.b7s])
x(B.tS,A.T)
x(B.S9,A.V)
w(A.mi,[B.b7l,B.b7n,B.b7k,B.b7i,B.b7j,B.b7o,B.b7p,B.b7q,B.b7r,B.b7t])
x(B.adg,A.a6)
x(B.ain,A.AG)})()
A.zD(b.typeUniverse,JSON.parse('{"tS":{"T":[],"d":[]},"S9":{"V":["tS"]},"adg":{"a6":[],"d":[]},"ain":{"au":[]}}'))
var y=(function rtii(){var x=A.aj
return{a:x("y<ed>"),u:x("y<d>"),h:x("bi"),C:x("+(i,K,K)"),w:x("i"),o:x("k7<K>"),r:x("oN"),e:x("F"),q:x("M?"),v:x("~")}})();(function constants(){var x=a.makeConstList
D.aMa=new A.u("\u0628\u0646\u062f\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u0628\u0648\u0635\u0644\u0629\u2026",null,G.ax,null,null,null,null,null,null,null,null)
D.Yt=new A.dZ(C.V,null,null,D.aMa,null)
D.a0f=new A.I(1,1,0.4196078431372549,0.4196078431372549,C.j)
D.a3k=new A.bh(3e6)
D.aHq=new A.r(!0,C.a5,null,null,null,null,13,null,null,null,null,null,1.7,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNV=new A.u("\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u0634 \u0645\u062a\u0627\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u0623\u0648 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647. \u062d\u0637 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0648\u062c\u0651\u0647 \u062d\u0631\u0641 \xab\u0634\xbb (\u0627\u0644\u0634\u0645\u0627\u0644) \u0646\u0627\u062d\u064a\u0629 \u0627\u0644\u0634\u0645\u0627\u0644 \u2014 \u062a\u0642\u062f\u0631 \u062a\u0639\u0631\u0641\u0647 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062e\u0631\u0627\u0626\u0637 \u0623\u0648 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u2014 \u0648\u0627\u0644\u0633\u0647\u0645 \u0627\u0644\u062f\u0647\u0628\u064a \u0647\u064a\u0628\u0642\u0649 \u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629.",null,D.aHq,null,null,null,null,null,null,null,null)
D.a5H=new E.dm(D.aNV,C.aj,C.aD,null,!1,null)
D.a7P=new A.ac(F.zq,null,C.u,null,null,null)
D.a8R=new A.ac(C.rq,null,null,null,null,null)
D.a9J=new A.ac(C.k4,null,C.a5,null,null,null)
D.ae0=x(["\u0627\u0644\u0634\u0645\u0627\u0644","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u0634\u0631\u0642","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u062c\u0646\u0648\u0628","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u063a\u0631\u0628\u064a","\u0627\u0644\u063a\u0631\u0628","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u063a\u0631\u0628\u064a"],A.aj("y<i>"))
D.aqY=new A.d_([0,"\u0634",90,"\u0642",180,"\u062c",270,"\u063a"],A.aj("d_<v,i>"))
D.a6r=new A.a5(62839,"MaterialIcons",null,!1)
D.a96=new A.ac(D.a6r,34,C.i,null,null,null)
D.auD=new A.q7(null,0,null,null,null,null,D.a96,null)
D.aBM=new A.D(290,290)
D.aDH=new A.r(!0,C.i,null,null,null,null,22,C.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aF3=new A.r(!0,C.i,null,null,null,null,16,C.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKr=new A.u("\u0634\u063a\u0651\u0644 \u0627\u0644\u0628\u0648\u0635\u0644\u0629",null,null,null,null,null,null,null,null,null,null)
D.aNo=new A.u("\u0645\u062f\u064a\u0646\u0629 \u062a\u0627\u0646\u064a\u0629",null,C.fv,null,null,null,null,null,null,null,null)
D.aNL=new A.u("\u0646\u0635\u064a\u062d\u0629: \u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0628\u0639\u064a\u062f \u0639\u0646 \u0627\u0644\u062d\u062f\u064a\u062f \u0648\u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633. \u0644\u0648 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0645\u0634 \u062b\u0627\u0628\u062a \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0641\u064a \u0634\u0643\u0644 \u0631\u0642\u0645 8 \u0643\u0627\u0645 \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u062a\u062a\u0638\u0628\u0637.",null,G.ax,C.as,null,null,null,null,null,null,null)})()};
(a=>{a["RsBKosAvVvq/kFQuzxqrlslvAf0="]=a.current})($__dart_deferred_initializers__);