((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={X2:function X2(){this.a=$
this.b=null},aq0:function aq0(d){this.a=d},
bHg(){return new B.tD(null)},
tD:function tD(d){this.a=d},
Rx:function Rx(d,e,f){var _=this
_.d=d
_.e=e
_.f="\u0627\u0644\u0642\u0627\u0647\u0631\u0629 (\u062a\u0642\u0631\u064a\u0628\u064a)"
_.r=!1
_.w=f
_.y=_.x=null
_.as=_.Q=_.z=!1
_.c=_.a=_.at=null},
b69:function b69(d){this.a=d},
b68:function b68(d,e,f){this.a=d
this.b=e
this.c=f},
b6a:function b6a(d){this.a=d},
b67:function b67(d){this.a=d},
b65:function b65(d){this.a=d},
b66:function b66(d){this.a=d},
b6b:function b6b(d){this.a=d},
b6c:function b6c(d,e){this.a=d
this.b=e},
b6d:function b6d(d){this.a=d},
b6f:function b6f(){},
b6e:function b6e(d,e){this.a=d
this.b=e},
b6g:function b6g(d,e){this.a=d
this.b=e},
acA:function acA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ahG:function ahG(d,e,f){this.b=d
this.c=e
this.a=f},
bxB(d,e){var x=d*3.141592653589793/180,w=(39.8262-e)*3.141592653589793/180
return B.V1(Math.atan2(Math.sin(w)*Math.cos(0.37389315900848524),Math.cos(x)*Math.sin(0.37389315900848524)-Math.sin(x)*Math.cos(0.37389315900848524)*Math.cos(w))*180/3.141592653589793)},
V1(d){var x=C.d.al(d,360)
return x<0?x+360:x},
bn8(d,e){var x=B.V1(d-e)
return x>180?x-360:x}},D,F,H,I,E,G
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[5],B)
D=c[18]
F=c[17]
H=c[19]
I=c[14]
E=c[9]
G=c[11]
B.X2.prototype={
M4(){var x=0,w=A.o(y.e),v,u=2,t=[],s,r,q,p,o
var $async$M4=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=b.G
s=A.v3(q.DeviceOrientationEvent)
if(s==null||s.requestPermission==null){q=A.v3(q.DeviceOrientationEvent)
v=q!=null
x=1
break}x=7
return A.f(A.f4(A.jI(s,"requestPermission",null,null,y.h),y.w),$async$M4)
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
return A.n($async$M4,w)},
a5T(){var x,w,v,u,t,s,r
try{t=b.G
x=A.v3(t.screen)
s=x
w=A.v3(s==null?null:s.orientation)
s=w
v=s==null?null:s.angle
if(v!=null){t=A.d7(v)
return t}u=t.orientation
t=u==null?0:A.d7(u)
return t}catch(r){return 0}},
aB9(d){var x,w,v,u,t,s,r,q=this
try{x=d.webkitCompassHeading
if(x!=null){t=q.a
t===$&&A.a()
t.C(0,B.V1(A.d7(x)+q.a5T()))
return}w=d.alpha
if(w==null)return
s=A.a1(d.type)
v=s==null?null:s
t=A.lS(d.absolute)
if(t==null)t=null
u=t===!0
if(J.c(v,"deviceorientationabsolute")||u){t=q.a
t===$&&A.a()
t.C(0,B.V1(360-A.d7(w)+q.a5T()))}}catch(r){}},
aqC(){var x,w,v,u="addEventListener"
if(this.b!=null)return
x=this.b=A.fl(new B.aq0(this))
w=b.G
v=y.q
A.jI(w,u,"deviceorientationabsolute",x,v)
A.jI(w,u,"deviceorientation",x,v)},
a6P(){var x,w,v="removeEventListener",u=this.b
if(u==null)return
x=b.G
w=y.q
A.jI(x,v,"deviceorientationabsolute",u,w)
A.jI(x,v,"deviceorientation",u,w)
this.b=null}}
B.tD.prototype={
V(){var x=C.b.gac(F.mk),w=C.b.gac(F.mk),v=new B.X2()
v.a=new A.k_(v.gaqB(),v.gaGX(),y.o)
return new B.Rx(x.b,w.c,v)}}
B.Rx.prototype={
ai(){var x,w,v=this
v.aw()
x=A.v3(b.G.DeviceOrientationEvent)
w=x!=null&&x.requestPermission!=null
v.Q=w
if(!w)v.a3U()
v.Bo()},
l(){var x=this,w=x.at
if(w!=null)w.b0()
w=x.x
if(w!=null)w.b0()
w=x.w
w.a6P()
w=w.a
w===$&&A.a()
w.bh()
x.aC()},
a3U(){var x=this,w=x.x
if(w!=null)w.b0()
w=x.w.a
w===$&&A.a()
x.x=new A.eg(w,A.u(w).i("eg<1>")).jQ(new B.b69(x))
w=x.at
if(w!=null)w.b0()
x.at=A.cF(D.a2s,new B.b6a(x))},
FQ(){var x=0,w=A.o(y.v),v,u=this,t
var $async$FQ=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:x=3
return A.f(u.w.M4(),$async$FQ)
case 3:t=e
if(u.c==null){x=1
break}u.u(new B.b65(u))
if(t)u.a3U()
else{u.u(new B.b66(u))
u.c.U(y.r).f.by(A.bW(null,null,null,null,null,C.k,null,A.r("\u0645\u0646 \u063a\u064a\u0631 \u0625\u0630\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0647\u0646\u0648\u0631\u064a\u0643 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0628\u0627\u0644\u062f\u0631\u062c\u0627\u062a \u0628\u0633",null,null,null,null,null,null,null,null),null,C.O,null,null,null,null,null,null,null,null,null,null))}case 1:return A.m(v,w)}})
return A.n($async$FQ,w)},
Bo(){var x=0,w=A.o(y.v),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$Bo=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:r.u(new B.b6b(r))
u=4
x=7
return A.f(A.up(),$async$Bo)
case 7:q=e
if(r.c==null){s=[1]
x=5
break}r.u(new B.b6c(r,q))
s.push(6)
x=5
break
case 4:u=3
n=t.pop()
o=r.c
if(o!=null)o.U(y.r).f.by(A.bW(null,null,null,null,null,C.k,null,A.r("\u0645\u0642\u062f\u0631\u0646\u0627\u0634 \u0646\u062d\u062f\u062f \u0645\u0643\u0627\u0646\u0643 \u2014 \u0627\u062e\u062a\u0627\u0631 \u0645\u062f\u064a\u0646\u062a\u0643 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629",null,null,null,null,null,null,null,null),null,C.O,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.u(new B.b6d(r))
x=s.pop()
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$Bo,w)},
Hy(){var x=0,w=A.o(y.v),v,u=this,t,s
var $async$Hy=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.f(A.iz(new B.b6f(),s,!1,null,y.C),$async$Hy)
case 3:t=e
if(t==null||u.c==null){x=1
break}u.u(new B.b6g(u,t))
case 1:return A.m(v,w)}})
return A.n($async$Hy,w)},
F(d){var x,w,v,u,t,s,r=this,q=null,p=B.bxB(r.d,r.e),o=r.y,n=o!=null,m=n?B.bn8(p,o):0,l=y.u,k=A.b([D.a6M,C.au,A.bc(A.r(r.f,q,q,q,q,G.bV,q,q,q),1)],l)
if(r.r)k.push(F.QJ)
else k.push(A.dV(q,q,q,D.a8q,q,q,r.gaDw(),q,q,q,"\u062d\u062f\u0651\u062f \u0645\u0643\u0627\u0646\u064a",q))
k.push(A.cv(D.aL8,q,q,r.gaD6(),q,q))
k=A.aA(k,C.l,C.f,C.i,0,q)
x=n?-o:0
x=A.cZ(A.bG(new B.acA(x,p,r.as&&n,q),290,290),q,q)
w=A.r("\u0627\u0644\u0642\u0628\u0644\u0629 \u0639\u0644\u0649 "+E.dc(C.d.aB(p,0))+"\xb0 \u0645\u0646 \u0627\u0644\u0634\u0645\u0627\u0644",q,q,q,q,D.aBU,C.aF,q,q)
v=D.acH[C.e.al(C.d.bX(B.V1(p)+22.5,45),8)]
u=r.d
t=r.e
s=Math.pow(Math.sin((21.4225-u)*3.141592653589793/180/2),2)+Math.cos(u*3.141592653589793/180)*Math.cos(0.37389315900848524)*Math.pow(Math.sin((39.8262-t)*3.141592653589793/180/2),2)
l=A.b([new E.f9(k,C.aD,C.bm,q,!1,q),C.ad,x,C.av,w,A.r("\u0646\u0627\u062d\u064a\u0629 "+v+" \u2022 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0644\u0643\u0639\u0628\u0629 \u062d\u0648\u0627\u0644\u064a "+E.dc(C.d.aG(12742*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))))+" \u0643\u0645",q,q,q,q,G.bO,C.aF,q,q),C.aV],l)
if(r.Q)l.push(A.ZY(D.a7F,D.aIo,r.gaoP(),A.bk5(C.z,C.as,q)))
else if(n){k=r.as
if(k)x="\u062a\u0645\u0627\u0645! \u0625\u0646\u062a \u062f\u0644\u0648\u0642\u062a\u064a \u0645\u062a\u0648\u062c\u0651\u0647 \u0644\u0644\u0642\u0628\u0644\u0629 \u2713"
else{x=Math.abs(m)
x=m>0?"\u0644\u0641\u0651 \u064a\u0645\u064a\u0646 "+E.dc(C.d.aG(x))+"\xb0":"\u0644\u0641\u0651 \u0634\u0645\u0627\u0644 "+E.dc(C.d.aG(x))+"\xb0"}l.push(new E.f9(A.r(x,q,q,q,q,D.aDc,C.aF,q,q),C.aD,C.bm,q,k,q))}else if(r.z)l.push(D.a4K)
else l.push(D.Xy)
l.push(C.Z)
l.push(D.aLu)
return E.a7J(l,"\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629")}}
B.acA.prototype={
F(d){var x=null,w=this.e,v=A.aOR(this.c*3.141592653589793/180,A.h9(x,x,x,new B.ahG(this.d,w,x),D.aA2)),u=w?C.z:I.fE,t=A.cX(C.z,2)
return A.hz(C.U,A.b([v,D.at2,A.aI(x,A.df(C.er,w?C.as:C.z,x,x),C.m,x,x,new A.aw(u,x,t,x,x,x,C.d0),x,54,x,x,x,x,54)],y.u),C.k,C.c4,x)}}
B.ahG.prototype={
aI(a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a3.km(C.n),a1=a3.gfp()/2-18
$.a4()
x=A.b_()
x.r=C.h.cm(0.06).gq()
a2.jk(a0,a1,x)
x=A.b_()
x.b=C.bD
x.r=H.wN.gq()
x.c=2
a2.jk(a0,a1,x)
for(x=a2.a,w=a0.a,v=a0.b,u=0;u<360;u+=10){t=(u-90)*3.141592653589793/180
s=C.e.al(u,90)===0
r=Math.cos(t)
q=Math.sin(t)
p=Math.cos(t)
o=Math.sin(t)
n=a1-(s?14:7)
m=new A.nu(C.cL,C.d8,C.ff,C.hc,C.dC)
m.r=(s?C.h:C.wH).gq()
m.c=s?2.5:1.2
l=m.ec()
x.drawLine.apply(x,[w+r*a1,v+q*a1,w+p*n,v+o*n,l])
l.delete()}for(x=D.apx.ge0(),x=x.ga9(x),r=a1-28;x.t();){q=x.gN()
p=q.a
t=(p-90)*3.141592653589793/180
q=q.b
p=p===0?D.a_k:C.aa
k=new A.yg(new A.fB(q,d,d,C.bs,d,d,d,d,d,d,new A.t(!0,p,d,d,d,d,16,C.a5,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)),C.x,C.aN,new A.iv(1),d,d,d,d,C.b5,d)
k.ym()
q=Math.cos(t)
p=Math.sin(t)
o=k.b
k.aI(a2,new A.p(w+q*r-o.c/2,v+p*r-o.a.c.gc8()/2))}t=(this.b-90)*3.141592653589793/180
x=Math.cos(t)
w=Math.sin(t)
j=new A.p(x,w)
i=new A.p(-w,x)
h=a0.X(0,j.ak(0,a1+12))
g=a0.X(0,j.ak(0,34))
x=$.a4()
f=A.b_()
w=(this.c?C.z:C.z.cm(0.9)).gq()
f.r=w
v=a0.X(0,j.ak(0,a1-6))
r=A.b_()
r.r=A.bV(w).gq()
r.c=5
r.d=C.iJ
a2.l4(g,v,r)
e=new A.c2(x.r,C.a3,d,d,A.b([],y.a))
e.aD(new A.eX(h.a,h.b))
x=a1-14
e.aD(new A.cx(a0.X(0,j.ak(0,x)).X(0,i.ak(0,11)).a,a0.X(0,j.ak(0,x)).X(0,i.ak(0,11)).b))
e.aD(new A.cx(a0.X(0,j.ak(0,x)).ae(0,i.ak(0,11)).a,a0.X(0,j.ak(0,x)).ae(0,i.ak(0,11)).b))
e.aD(new A.lh())
a2.fz(e,f)},
eF(d){return d.b!==this.b||d.c!==this.c}}
var z=a.updateTypes(["a8<~>()","~()"])
B.aq0.prototype={
$1(d){return this.a.aB9(d)},
$S:3}
B.b69.prototype={
$1(d){var x,w,v,u=this.a
if(u.c==null)return
x=u.y
w=x==null?d:B.V1(x+B.bn8(d,x)*0.35)
v=Math.abs(B.bn8(B.bxB(u.d,u.e),w))<4
if(v&&!u.as)A.biF(80)
u.u(new B.b68(u,w,v))},
$S:99}
B.b68.prototype={
$0(){var x=this.a
x.y=this.b
x.as=this.c},
$S:0}
B.b6a.prototype={
$0(){var x=this.a
if(x.c!=null)x.u(new B.b67(x))},
$S:0}
B.b67.prototype={
$0(){return this.a.z=!0},
$S:0}
B.b65.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.b66.prototype={
$0(){return this.a.z=!0},
$S:0}
B.b6b.prototype={
$0(){return this.a.r=!0},
$S:0}
B.b6c.prototype={
$0(){var x=this.a,w=this.b
x.d=w.a
x.e=w.b
x.f="\u0645\u0643\u0627\u0646\u0643 \u0627\u0644\u062d\u0627\u0644\u064a"},
$S:0}
B.b6d.prototype={
$0(){return this.a.r=!1},
$S:0}
B.b6f.prototype={
$1(d){var x,w,v=null,u=A.b([F.zv],y.u)
for(x=0;x<27;++x){w=F.mk[x]
u.push(A.d1(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.b6e(d,w),!1,v,v,v,v,v,v,A.r(w.a,v,v,v,v,v,v,v,v),v,v))}return A.e8(!0,A.cD(u,v,v,v,C.v,!1),C.T,!0)},
$S:43}
B.b6e.prototype={
$0(){A.au(this.a,!1).bK(this.b)
return null},
$S:0}
B.b6g.prototype={
$0(){var x=this.a,w=this.b
x.d=w.b
x.e=w.c
x.f=w.a},
$S:0};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.X2.prototype,"gaqB","aqC",1)
x(w,"gaGX","a6P",1)
x(w=B.Rx.prototype,"gaoP","FQ",0)
x(w,"gaDw","Bo",0)
x(w,"gaD6","Hy",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.X2,A.N)
w(A.jw,[B.aq0,B.b69,B.b6f])
x(B.tD,A.U)
x(B.Rx,A.V)
w(A.oZ,[B.b68,B.b6a,B.b67,B.b65,B.b66,B.b6b,B.b6c,B.b6d,B.b6e,B.b6g])
x(B.acA,A.a7)
x(B.ahG,A.Am)})()
A.FF(b.typeUniverse,JSON.parse('{"tD":{"U":[],"d":[]},"Rx":{"V":["tD"]},"acA":{"a7":[],"d":[]},"ahG":{"ar":[]}}'))
var y=(function rtii(){var x=A.aj
return{a:x("y<e7>"),u:x("y<d>"),h:x("bi"),C:x("+(i,K,K)"),w:x("i"),o:x("k_<K>"),r:x("qN"),e:x("H"),q:x("N?"),v:x("~")}})();(function constants(){var x=a.makeConstList
D.aK1=new A.w("\u0628\u0646\u062f\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u0628\u0648\u0635\u0644\u0629\u2026",null,G.bO,null,null,null,null,null,null,null,null)
D.Xy=new A.dU(C.U,null,null,D.aK1,null)
D.a_k=new A.I(1,1,0.4196078431372549,0.4196078431372549,C.j)
D.a2s=new A.bd(3e6)
D.aFv=new A.t(!0,C.aa,null,null,null,null,13,null,null,null,null,null,1.7,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLE=new A.w("\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u0634 \u0645\u062a\u0627\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u0623\u0648 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647. \u062d\u0637 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0648\u062c\u0651\u0647 \u062d\u0631\u0641 \xab\u0634\xbb (\u0627\u0644\u0634\u0645\u0627\u0644) \u0646\u0627\u062d\u064a\u0629 \u0627\u0644\u0634\u0645\u0627\u0644 \u2014 \u062a\u0642\u062f\u0631 \u062a\u0639\u0631\u0641\u0647 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062e\u0631\u0627\u0626\u0637 \u0623\u0648 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u2014 \u0648\u0627\u0644\u0633\u0647\u0645 \u0627\u0644\u062f\u0647\u0628\u064a \u0647\u064a\u0628\u0642\u0649 \u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629.",null,D.aFv,null,null,null,null,null,null,null,null)
D.a4K=new E.f9(D.aLE,C.aD,C.bm,null,!1,null)
D.a6M=new A.ak(F.yD,null,C.z,null,null,null)
D.a7F=new A.ak(C.qR,null,null,null,null,null)
D.a8q=new A.ak(C.jL,null,C.aa,null,null,null)
D.acH=x(["\u0627\u0644\u0634\u0645\u0627\u0644","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u0634\u0631\u0642","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u062c\u0646\u0648\u0628","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u063a\u0631\u0628\u064a","\u0627\u0644\u063a\u0631\u0628","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u063a\u0631\u0628\u064a"],A.aj("y<i>"))
D.apx=new A.cU([0,"\u0634",90,"\u0642",180,"\u062c",270,"\u063a"],A.aj("cU<v,i>"))
D.a5u=new A.aa(62839,"MaterialIcons",null,!1)
D.a7T=new A.ak(D.a5u,34,C.h,null,null,null)
D.at2=new A.pP(null,0,null,null,null,null,D.a7T,null)
D.aA2=new A.D(290,290)
D.aBU=new A.t(!0,C.h,null,null,null,null,22,C.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aDc=new A.t(!0,C.h,null,null,null,null,16,C.ac,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aIo=new A.w("\u0634\u063a\u0651\u0644 \u0627\u0644\u0628\u0648\u0635\u0644\u0629",null,null,null,null,null,null,null,null,null,null)
D.aL8=new A.w("\u0645\u062f\u064a\u0646\u0629 \u062a\u0627\u0646\u064a\u0629",null,C.fk,null,null,null,null,null,null,null,null)
D.aLu=new A.w("\u0646\u0635\u064a\u062d\u0629: \u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0628\u0639\u064a\u062f \u0639\u0646 \u0627\u0644\u062d\u062f\u064a\u062f \u0648\u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633. \u0644\u0648 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0645\u0634 \u062b\u0627\u0628\u062a \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0641\u064a \u0634\u0643\u0644 \u0631\u0642\u0645 8 \u0643\u0627\u0645 \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u062a\u062a\u0638\u0628\u0637.",null,G.bO,C.aF,null,null,null,null,null,null,null)})()};
(a=>{a["OaL3Ro7+2LPWHDKPVHpAzT96vpI="]=a.current})($__dart_deferred_initializers__);