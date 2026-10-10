((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={XT:function XT(){this.a=$
this.b=null},aqV:function aqV(d){this.a=d},
bLz(){return new B.tW(null)},
tW:function tW(d){this.a=d},
Sh:function Sh(d,e,f){var _=this
_.d=d
_.e=e
_.f="\u0627\u0644\u0642\u0627\u0647\u0631\u0629 (\u062a\u0642\u0631\u064a\u0628\u064a)"
_.r=!1
_.w=f
_.y=_.x=null
_.as=_.Q=_.z=!1
_.c=_.a=_.at=null},
b8o:function b8o(d){this.a=d},
b8n:function b8n(d,e,f){this.a=d
this.b=e
this.c=f},
b8p:function b8p(d){this.a=d},
b8m:function b8m(d){this.a=d},
b8k:function b8k(d){this.a=d},
b8l:function b8l(d){this.a=d},
b8q:function b8q(d){this.a=d},
b8r:function b8r(d,e){this.a=d
this.b=e},
b8s:function b8s(d){this.a=d},
b8u:function b8u(){},
b8t:function b8t(d,e){this.a=d
this.b=e},
b8v:function b8v(d,e){this.a=d
this.b=e},
ads:function ads(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aiz:function aiz(d,e,f){this.b=d
this.c=e
this.a=f},
bBD(d,e){var x=d*3.141592653589793/180,w=(39.8262-e)*3.141592653589793/180
return B.VS(Math.atan2(Math.sin(w)*Math.cos(0.37389315900848524),Math.cos(x)*Math.sin(0.37389315900848524)-Math.sin(x)*Math.cos(0.37389315900848524)*Math.cos(w))*180/3.141592653589793)},
VS(d){var x=C.d.aj(d,360)
return x<0?x+360:x},
br7(d,e){var x=B.VS(d-e)
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
B.XT.prototype={
ML(){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o
var $async$ML=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=b.G
s=A.vn(q.DeviceOrientationEvent)
if(s==null||s.requestPermission==null){q=A.vn(q.DeviceOrientationEvent)
v=q!=null
x=1
break}x=7
return A.e(A.e6(A.eN(s,"requestPermission",null,null,y.h),y.w),$async$ML)
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
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ML,w)},
a6N(){var x,w,v,u,t,s,r
try{t=b.G
x=A.vn(t.screen)
s=x
w=A.vn(s==null?null:s.orientation)
s=w
v=s==null?null:s.angle
if(v!=null){t=A.cW(v)
return t}u=t.orientation
t=u==null?0:A.cW(u)
return t}catch(r){return 0}},
aCr(d){var x,w,v,u,t,s,r,q=this
try{x=d.webkitCompassHeading
if(x!=null){t=q.a
t===$&&A.b()
t.C(0,B.VS(A.cW(x)+q.a6N()))
return}w=d.alpha
if(w==null)return
s=A.Z(d.type)
v=s==null?null:s
t=A.iB(d.absolute)
if(t==null)t=null
u=t===!0
if(J.c(v,"deviceorientationabsolute")||u){t=q.a
t===$&&A.b()
t.C(0,B.VS(360-A.cW(w)+q.a6N()))}}catch(r){}},
arH(){var x,w,v,u="addEventListener"
if(this.b!=null)return
x=this.b=A.f5(new B.aqV(this))
w=b.G
v=y.q
A.eN(w,u,"deviceorientationabsolute",x,v)
A.eN(w,u,"deviceorientation",x,v)},
a7K(){var x,w,v="removeEventListener",u=this.b
if(u==null)return
x=b.G
w=y.q
A.eN(x,v,"deviceorientationabsolute",u,w)
A.eN(x,v,"deviceorientation",u,w)
this.b=null}}
B.tW.prototype={
V(){var x=C.b.gad(F.mQ),w=C.b.gad(F.mQ),v=new B.XT()
v.a=new A.kb(v.garG(),v.gaIp(),y.o)
return new B.Sh(x.b,w.c,v)}}
B.Sh.prototype={
ah(){var x,w,v=this
v.ao()
x=A.vn(b.G.DeviceOrientationEvent)
w=x!=null&&x.requestPermission!=null
v.Q=w
if(!w)v.a4N()
v.BN()},
l(){var x=this,w=x.at
if(w!=null)w.aI()
w=x.x
if(w!=null)w.aI()
w=x.w
w.a7K()
w=w.a
w===$&&A.b()
w.bi()
x.aA()},
a4N(){var x=this,w=x.x
if(w!=null)w.aI()
w=x.w.a
w===$&&A.b()
x.x=new A.el(w,A.w(w).i("el<1>")).jV(new B.b8o(x))
w=x.at
if(w!=null)w.aI()
x.at=A.cL(D.a3A,new B.b8p(x))},
Gm(){var x=0,w=A.n(y.v),v,u=this,t
var $async$Gm=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.e(u.w.ML(),$async$Gm)
case 3:t=e
if(u.c==null){x=1
break}u.t(new B.b8k(u))
if(t)u.a4N()
else{u.t(new B.b8l(u))
u.c.U(y.r).f.ba(A.bS(null,null,null,null,null,C.l,null,A.p("\u0645\u0646 \u063a\u064a\u0631 \u0625\u0630\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0647\u0646\u0648\u0631\u064a\u0643 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0628\u0627\u0644\u062f\u0631\u062c\u0627\u062a \u0628\u0633",null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))}case 1:return A.l(v,w)}})
return A.m($async$Gm,w)},
BN(){var x=0,w=A.n(y.v),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$BN=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:r.t(new B.b8q(r))
u=4
x=7
return A.e(A.uI(),$async$BN)
case 7:q=e
if(r.c==null){s=[1]
x=5
break}r.t(new B.b8r(r,q))
s.push(6)
x=5
break
case 4:u=3
n=t.pop()
o=r.c
if(o!=null)o.U(y.r).f.ba(A.bS(null,null,null,null,null,C.l,null,A.p("\u0645\u0642\u062f\u0631\u0646\u0627\u0634 \u0646\u062d\u062f\u062f \u0645\u0643\u0627\u0646\u0643 \u2014 \u0627\u062e\u062a\u0627\u0631 \u0645\u062f\u064a\u0646\u062a\u0643 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629",null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.t(new B.b8s(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$BN,w)},
I8(){var x=0,w=A.n(y.v),v,u=this,t,s
var $async$I8=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.e(A.hq(null,new B.b8u(),s,!1,null,y.C),$async$I8)
case 3:t=e
if(t==null||u.c==null){x=1
break}u.t(new B.b8v(u,t))
case 1:return A.l(v,w)}})
return A.m($async$I8,w)},
D(d){var x,w,v,u,t,s,r=this,q=null,p=B.bBD(r.d,r.e),o=r.y,n=o!=null,m=n?B.br7(p,o):0,l=y.u,k=A.a([D.a83,C.ak,A.b_(A.p(r.f,q,q,q,q,G.bn,q,q,q),1)],l)
if(r.r)k.push(K.oe)
else k.push(A.dG(q,q,q,D.aa_,q,q,r.gaET(),q,q,q,"\u062d\u062f\u0651\u062f \u0645\u0643\u0627\u0646\u064a",q))
k.push(A.c3(D.aO4,q,q,r.gaEs(),q,q))
k=A.aq(k,C.j,C.f,C.h,0,q)
x=n?-o:0
x=A.d1(A.bF(new B.ads(x,p,r.as&&n,q),290,290),q,q)
w=A.p("\u0627\u0644\u0642\u0628\u0644\u0629 \u0639\u0644\u0649 "+E.bc(C.d.av(p,0))+"\xb0 \u0645\u0646 \u0627\u0644\u0634\u0645\u0627\u0644",q,q,q,q,D.aEb,C.as,q,q)
v=D.aep[C.e.aj(C.d.bq(B.VS(p)+22.5,45),8)]
u=r.d
t=r.e
s=Math.pow(Math.sin((21.4225-u)*3.141592653589793/180/2),2)+Math.cos(u*3.141592653589793/180)*Math.cos(0.37389315900848524)*Math.pow(Math.sin((39.8262-t)*3.141592653589793/180/2),2)
l=A.a([new E.dn(k,C.aj,C.aD,q,!1,q),C.Y,x,C.ap,w,A.p("\u0646\u0627\u062d\u064a\u0629 "+v+" \u2022 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0644\u0643\u0639\u0628\u0629 \u062d\u0648\u0627\u0644\u064a "+E.bc(C.d.aD(12742*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))))+" \u0643\u0645",q,q,q,q,G.az,C.as,q,q),C.aV],l)
if(r.Q)l.push(A.nZ(D.a96,D.aKZ,r.gapS(),A.o_(C.u,C.am,q,q)))
else if(n){k=r.as
if(k)x="\u062a\u0645\u0627\u0645! \u0625\u0646\u062a \u062f\u0644\u0648\u0642\u062a\u064a \u0645\u062a\u0648\u062c\u0651\u0647 \u0644\u0644\u0642\u0628\u0644\u0629 \u2713"
else{x=Math.abs(m)
x=m>0?"\u0644\u0641\u0651 \u064a\u0645\u064a\u0646 "+E.bc(C.d.aD(x))+"\xb0":"\u0644\u0641\u0651 \u0634\u0645\u0627\u0644 "+E.bc(C.d.aD(x))+"\xb0"}l.push(new E.dn(A.p(x,q,q,q,q,D.aFy,C.as,q,q),C.aj,C.aD,q,k,q))}else if(r.z)l.push(D.a5Y)
else l.push(D.YK)
l.push(C.R)
l.push(D.aOt)
return E.uA(q,l,"\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629")}}
B.ads.prototype={
D(d){var x=null,w=this.e,v=A.aPS(this.c*3.141592653589793/180,A.hd(x,x,x,new B.aiz(this.d,w,x),D.aCg)),u=w?C.u:I.dL,t=A.cR(C.u,2)
return A.hk(C.V,A.a([v,D.av7,A.aC(x,A.cG(C.eD,w?C.am:C.u,x,x),C.m,x,x,new A.av(u,x,t,x,x,x,C.cr),x,54,x,x,x,x,54)],y.u),C.l,C.bW,x)}}
B.aiz.prototype={
aJ(a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a3.kr(C.n),a1=a3.gfw()/2-18
$.a8()
x=A.b1()
x.r=C.i.bZ(0.06).gq()
a2.jq(a0,a1,x)
x=A.b1()
x.b=C.bG
x.r=H.jM.gq()
x.c=2
a2.jq(a0,a1,x)
for(x=a2.a,w=a0.a,v=a0.b,u=0;u<360;u+=10){t=(u-90)*3.141592653589793/180
s=C.e.aj(u,90)===0
r=Math.cos(t)
q=Math.sin(t)
p=Math.cos(t)
o=Math.sin(t)
n=a1-(s?14:7)
m=new A.nK(C.cW,C.dh,C.fq,C.hu,C.dN)
m.r=(s?C.i:C.fQ).gq()
m.c=s?2.5:1.2
l=m.ef()
x.drawLine.apply(x,[w+r*a1,v+q*a1,w+p*n,v+o*n,l])
l.delete()}for(x=D.arn.gdP(),x=x.ga4(x),r=a1-28;x.u();){q=x.gN()
p=q.a
t=(p-90)*3.141592653589793/180
q=q.b
p=p===0?D.a0w:C.a7
k=new A.yE(new A.fb(q,d,d,C.bj,d,d,d,d,d,d,new A.r(!0,p,d,d,d,d,16,C.a0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)),C.y,C.aJ,new A.iz(1),d,d,d,d,C.b9,d)
k.yG()
q=Math.cos(t)
p=Math.sin(t)
o=k.b
k.aJ(a2,new A.q(w+q*r-o.c/2,v+p*r-o.a.c.gc9()/2))}t=(this.b-90)*3.141592653589793/180
x=Math.cos(t)
w=Math.sin(t)
j=new A.q(x,w)
i=new A.q(-w,x)
h=a0.X(0,j.al(0,a1+12))
g=a0.X(0,j.al(0,34))
x=$.a8()
f=A.b1()
w=(this.c?C.u:C.u.bZ(0.9)).gq()
f.r=w
v=a0.X(0,j.al(0,a1-6))
r=A.b1()
r.r=A.c_(w).gq()
r.c=5
r.d=C.j3
a2.l8(g,v,r)
e=new A.c7(x.r,C.a8,d,d,A.a([],y.a))
e.aF(new A.f8(h.a,h.b))
x=a1-14
e.aF(new A.cC(a0.X(0,j.al(0,x)).X(0,i.al(0,11)).a,a0.X(0,j.al(0,x)).X(0,i.al(0,11)).b))
e.aF(new A.cC(a0.X(0,j.al(0,x)).af(0,i.al(0,11)).a,a0.X(0,j.al(0,x)).af(0,i.al(0,11)).b))
e.aF(new A.lv())
a2.fD(e,f)},
eI(d){return d.b!==this.b||d.c!==this.c}}
var z=a.updateTypes(["a6<~>()","~()"])
B.aqV.prototype={
$1(d){return this.a.aCr(d)},
$S:3}
B.b8o.prototype={
$1(d){var x,w,v,u=this.a
if(u.c==null)return
x=u.y
w=x==null?d:B.VS(x+B.br7(d,x)*0.35)
v=Math.abs(B.br7(B.bBD(u.d,u.e),w))<4
if(v&&!u.as)A.bmB(80)
u.t(new B.b8n(u,w,v))},
$S:58}
B.b8n.prototype={
$0(){var x=this.a
x.y=this.b
x.as=this.c},
$S:0}
B.b8p.prototype={
$0(){var x=this.a
if(x.c!=null)x.t(new B.b8m(x))},
$S:0}
B.b8m.prototype={
$0(){return this.a.z=!0},
$S:0}
B.b8k.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.b8l.prototype={
$0(){return this.a.z=!0},
$S:0}
B.b8q.prototype={
$0(){return this.a.r=!0},
$S:0}
B.b8r.prototype={
$0(){var x=this.a,w=this.b
x.d=w.a
x.e=w.b
x.f="\u0645\u0643\u0627\u0646\u0643 \u0627\u0644\u062d\u0627\u0644\u064a"},
$S:0}
B.b8s.prototype={
$0(){return this.a.r=!1},
$S:0}
B.b8u.prototype={
$1(d){var x,w,v=null,u=A.a([F.Ap],y.u)
for(x=0;x<27;++x){w=F.mQ[x]
u.push(A.d4(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.b8t(d,w),!1,v,v,v,v,v,v,A.p(w.a,v,v,v,v,v,v,v,v),v,v))}return A.e_(!0,A.cI(u,v,v,v,C.v,!1),C.N,!0)},
$S:40}
B.b8t.prototype={
$0(){A.ap(this.a,!1).bv(this.b)
return null},
$S:0}
B.b8v.prototype={
$0(){var x=this.a,w=this.b
x.d=w.b
x.e=w.c
x.f=w.a},
$S:0};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.XT.prototype,"garG","arH",1)
x(w,"gaIp","a7K",1)
x(w=B.Sh.prototype,"gapS","Gm",0)
x(w,"gaET","BN",0)
x(w,"gaEs","I8",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.XT,A.M)
w(A.iI,[B.aqV,B.b8o,B.b8u])
x(B.tW,A.T)
x(B.Sh,A.V)
w(A.mk,[B.b8n,B.b8p,B.b8m,B.b8k,B.b8l,B.b8q,B.b8r,B.b8s,B.b8t,B.b8v])
x(B.ads,A.a7)
x(B.aiz,A.AN)})()
A.zJ(b.typeUniverse,JSON.parse('{"tW":{"T":[],"d":[]},"Sh":{"V":["tW"]},"ads":{"a7":[],"d":[]},"aiz":{"au":[]}}'))
var y=(function rtii(){var x=A.al
return{a:x("y<ed>"),u:x("y<d>"),h:x("bi"),C:x("+(i,K,K)"),w:x("i"),o:x("kb<K>"),r:x("oS"),e:x("F"),q:x("M?"),v:x("~")}})();(function constants(){var x=a.makeConstList
D.aMN=new A.u("\u0628\u0646\u062f\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u0628\u0648\u0635\u0644\u0629\u2026",null,G.az,null,null,null,null,null,null,null,null)
D.YK=new A.dV(C.V,null,null,D.aMN,null)
D.a0w=new A.I(1,1,0.4196078431372549,0.4196078431372549,C.k)
D.a3A=new A.bh(3e6)
D.aHW=new A.r(!0,C.a7,null,null,null,null,13,null,null,null,null,null,1.7,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOE=new A.u("\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u0634 \u0645\u062a\u0627\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u0623\u0648 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647. \u062d\u0637 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0648\u062c\u0651\u0647 \u062d\u0631\u0641 \xab\u0634\xbb (\u0627\u0644\u0634\u0645\u0627\u0644) \u0646\u0627\u062d\u064a\u0629 \u0627\u0644\u0634\u0645\u0627\u0644 \u2014 \u062a\u0642\u062f\u0631 \u062a\u0639\u0631\u0641\u0647 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062e\u0631\u0627\u0626\u0637 \u0623\u0648 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u2014 \u0648\u0627\u0644\u0633\u0647\u0645 \u0627\u0644\u062f\u0647\u0628\u064a \u0647\u064a\u0628\u0642\u0649 \u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629.",null,D.aHW,null,null,null,null,null,null,null,null)
D.a5Y=new E.dn(D.aOE,C.aj,C.aD,null,!1,null)
D.a83=new A.ac(F.zw,null,C.u,null,null,null)
D.a96=new A.ac(C.rs,null,null,null,null,null)
D.aa_=new A.ac(C.k5,null,C.a7,null,null,null)
D.aep=x(["\u0627\u0644\u0634\u0645\u0627\u0644","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u0634\u0631\u0642","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u062c\u0646\u0648\u0628","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u063a\u0631\u0628\u064a","\u0627\u0644\u063a\u0631\u0628","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u063a\u0631\u0628\u064a"],A.al("y<i>"))
D.arn=new A.d_([0,"\u0634",90,"\u0642",180,"\u062c",270,"\u063a"],A.al("d_<v,i>"))
D.a6I=new A.a5(62839,"MaterialIcons",null,!1)
D.a9m=new A.ac(D.a6I,34,C.i,null,null,null)
D.av7=new A.q9(null,0,null,null,null,null,D.a9m,null)
D.aCg=new A.D(290,290)
D.aEb=new A.r(!0,C.i,null,null,null,null,22,C.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aFy=new A.r(!0,C.i,null,null,null,null,16,C.aa,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKZ=new A.u("\u0634\u063a\u0651\u0644 \u0627\u0644\u0628\u0648\u0635\u0644\u0629",null,null,null,null,null,null,null,null,null,null)
D.aO4=new A.u("\u0645\u062f\u064a\u0646\u0629 \u062a\u0627\u0646\u064a\u0629",null,C.fx,null,null,null,null,null,null,null,null)
D.aOt=new A.u("\u0646\u0635\u064a\u062d\u0629: \u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0628\u0639\u064a\u062f \u0639\u0646 \u0627\u0644\u062d\u062f\u064a\u062f \u0648\u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633. \u0644\u0648 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0645\u0634 \u062b\u0627\u0628\u062a \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0641\u064a \u0634\u0643\u0644 \u0631\u0642\u0645 8 \u0643\u0627\u0645 \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u062a\u062a\u0638\u0628\u0637.",null,G.az,C.as,null,null,null,null,null,null,null)})()};
(a=>{a["7yKRuckuJH+QKt1DchDBnziB4ko="]=a.current})($__dart_deferred_initializers__);