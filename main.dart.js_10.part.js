((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={X_:function X_(){this.a=$
this.b=null},apV:function apV(d){this.a=d},
bGV(){return new B.tB(null)},
tB:function tB(d){this.a=d},
Ru:function Ru(d,e,f){var _=this
_.d=d
_.e=e
_.f="\u0627\u0644\u0642\u0627\u0647\u0631\u0629 (\u062a\u0642\u0631\u064a\u0628\u064a)"
_.r=!1
_.w=f
_.y=_.x=null
_.as=_.Q=_.z=!1
_.c=_.a=_.at=null},
b5N:function b5N(d){this.a=d},
b5M:function b5M(d,e,f){this.a=d
this.b=e
this.c=f},
b5O:function b5O(d){this.a=d},
b5L:function b5L(d){this.a=d},
b5J:function b5J(d){this.a=d},
b5K:function b5K(d){this.a=d},
b5P:function b5P(d){this.a=d},
b5Q:function b5Q(d,e){this.a=d
this.b=e},
b5R:function b5R(d){this.a=d},
b5T:function b5T(){},
b5S:function b5S(d,e){this.a=d
this.b=e},
b5U:function b5U(d,e){this.a=d
this.b=e},
acv:function acv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ahA:function ahA(d,e,f){this.b=d
this.c=e
this.a=f},
bxf(d,e){var x=d*3.141592653589793/180,w=(39.8262-e)*3.141592653589793/180
return B.UY(Math.atan2(Math.sin(w)*Math.cos(0.37389315900848524),Math.cos(x)*Math.sin(0.37389315900848524)-Math.sin(x)*Math.cos(0.37389315900848524)*Math.cos(w))*180/3.141592653589793)},
UY(d){var x=C.d.am(d,360)
return x<0?x+360:x},
bmN(d,e){var x=B.UY(d-e)
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
B.X_.prototype={
LZ(){var x=0,w=A.o(y.e),v,u=2,t=[],s,r,q,p,o
var $async$LZ=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=b.G
s=A.v1(q.DeviceOrientationEvent)
if(s==null||s.requestPermission==null){q=A.v1(q.DeviceOrientationEvent)
v=q!=null
x=1
break}x=7
return A.f(A.f4(A.jF(s,"requestPermission",null,null,y.h),y.w),$async$LZ)
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
return A.n($async$LZ,w)},
a5K(){var x,w,v,u,t,s,r
try{t=b.G
x=A.v1(t.screen)
s=x
w=A.v1(s==null?null:s.orientation)
s=w
v=s==null?null:s.angle
if(v!=null){t=A.d6(v)
return t}u=t.orientation
t=u==null?0:A.d6(u)
return t}catch(r){return 0}},
aB0(d){var x,w,v,u,t,s,r,q=this
try{x=d.webkitCompassHeading
if(x!=null){t=q.a
t===$&&A.a()
t.C(0,B.UY(A.d6(x)+q.a5K()))
return}w=d.alpha
if(w==null)return
s=A.a2(d.type)
v=s==null?null:s
t=A.lQ(d.absolute)
if(t==null)t=null
u=t===!0
if(J.c(v,"deviceorientationabsolute")||u){t=q.a
t===$&&A.a()
t.C(0,B.UY(360-A.d6(w)+q.a5K()))}}catch(r){}},
aqt(){var x,w,v,u="addEventListener"
if(this.b!=null)return
x=this.b=A.fj(new B.apV(this))
w=b.G
v=y.q
A.jF(w,u,"deviceorientationabsolute",x,v)
A.jF(w,u,"deviceorientation",x,v)},
a6G(){var x,w,v="removeEventListener",u=this.b
if(u==null)return
x=b.G
w=y.q
A.jF(x,v,"deviceorientationabsolute",u,w)
A.jF(x,v,"deviceorientation",u,w)
this.b=null}}
B.tB.prototype={
V(){var x=C.b.gac(F.mj),w=C.b.gac(F.mj),v=new B.X_()
v.a=new A.jY(v.gaqs(),v.gaGM(),y.o)
return new B.Ru(x.b,w.c,v)}}
B.Ru.prototype={
ai(){var x,w,v=this
v.aw()
x=A.v1(b.G.DeviceOrientationEvent)
w=x!=null&&x.requestPermission!=null
v.Q=w
if(!w)v.a3N()
v.Bk()},
l(){var x=this,w=x.at
if(w!=null)w.b0()
w=x.x
if(w!=null)w.b0()
w=x.w
w.a6G()
w=w.a
w===$&&A.a()
w.bh()
x.aC()},
a3N(){var x=this,w=x.x
if(w!=null)w.b0()
w=x.w.a
w===$&&A.a()
x.x=new A.eg(w,A.u(w).i("eg<1>")).jQ(new B.b5N(x))
w=x.at
if(w!=null)w.b0()
x.at=A.cF(D.a2o,new B.b5O(x))},
FL(){var x=0,w=A.o(y.v),v,u=this,t
var $async$FL=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:x=3
return A.f(u.w.LZ(),$async$FL)
case 3:t=e
if(u.c==null){x=1
break}u.v(new B.b5J(u))
if(t)u.a3N()
else{u.v(new B.b5K(u))
u.c.U(y.r).f.bD(A.bZ(null,null,null,null,null,C.l,null,A.t("\u0645\u0646 \u063a\u064a\u0631 \u0625\u0630\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0647\u0646\u0648\u0631\u064a\u0643 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0628\u0627\u0644\u062f\u0631\u062c\u0627\u062a \u0628\u0633",null,null,null,null,null,null,null,null),null,C.Q,null,null,null,null,null,null,null,null,null,null))}case 1:return A.m(v,w)}})
return A.n($async$FL,w)},
Bk(){var x=0,w=A.o(y.v),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$Bk=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:r.v(new B.b5P(r))
u=4
x=7
return A.f(A.un(),$async$Bk)
case 7:q=e
if(r.c==null){s=[1]
x=5
break}r.v(new B.b5Q(r,q))
s.push(6)
x=5
break
case 4:u=3
n=t.pop()
o=r.c
if(o!=null)o.U(y.r).f.bD(A.bZ(null,null,null,null,null,C.l,null,A.t("\u0645\u0642\u062f\u0631\u0646\u0627\u0634 \u0646\u062d\u062f\u062f \u0645\u0643\u0627\u0646\u0643 \u2014 \u0627\u062e\u062a\u0627\u0631 \u0645\u062f\u064a\u0646\u062a\u0643 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629",null,null,null,null,null,null,null,null),null,C.Q,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.v(new B.b5R(r))
x=s.pop()
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$Bk,w)},
Hr(){var x=0,w=A.o(y.v),v,u=this,t,s
var $async$Hr=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.f(A.iy(new B.b5T(),s,!1,null,y.C),$async$Hr)
case 3:t=e
if(t==null||u.c==null){x=1
break}u.v(new B.b5U(u,t))
case 1:return A.m(v,w)}})
return A.n($async$Hr,w)},
F(d){var x,w,v,u,t,s,r=this,q=null,p=B.bxf(r.d,r.e),o=r.y,n=o!=null,m=n?B.bmN(p,o):0,l=y.u,k=A.b([D.a6F,C.au,A.bc(A.t(r.f,q,q,q,q,G.bV,q,q,q),1)],l)
if(r.r)k.push(F.QG)
else k.push(A.dV(q,q,q,D.a8h,q,q,r.gaDm(),q,q,q,"\u062d\u062f\u0651\u062f \u0645\u0643\u0627\u0646\u064a",q))
k.push(A.cy(D.aKP,q,q,r.gaCY(),q,q))
k=A.aB(k,C.k,C.f,C.i,0,q)
x=n?-o:0
x=A.cZ(A.bF(new B.acv(x,p,r.as&&n,q),290,290),q,q)
w=A.t("\u0627\u0644\u0642\u0628\u0644\u0629 \u0639\u0644\u0649 "+E.dc(C.d.aB(p,0))+"\xb0 \u0645\u0646 \u0627\u0644\u0634\u0645\u0627\u0644",q,q,q,q,D.aBF,C.aE,q,q)
v=D.acw[C.e.am(C.d.bX(B.UY(p)+22.5,45),8)]
u=r.d
t=r.e
s=Math.pow(Math.sin((21.4225-u)*3.141592653589793/180/2),2)+Math.cos(u*3.141592653589793/180)*Math.cos(0.37389315900848524)*Math.pow(Math.sin((39.8262-t)*3.141592653589793/180/2),2)
l=A.b([new E.f9(k,C.aC,C.bl,q,!1,q),C.ad,x,C.av,w,A.t("\u0646\u0627\u062d\u064a\u0629 "+v+" \u2022 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0644\u0643\u0639\u0628\u0629 \u062d\u0648\u0627\u0644\u064a "+E.dc(C.d.aG(12742*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))))+" \u0643\u0645",q,q,q,q,G.bO,C.aE,q,q),C.aV],l)
if(r.Q)l.push(A.ZV(D.a7w,D.aI9,r.gaoG(),A.bjI(C.z,C.as,q)))
else if(n){k=r.as
if(k)x="\u062a\u0645\u0627\u0645! \u0625\u0646\u062a \u062f\u0644\u0648\u0642\u062a\u064a \u0645\u062a\u0648\u062c\u0651\u0647 \u0644\u0644\u0642\u0628\u0644\u0629 \u2713"
else{x=Math.abs(m)
x=m>0?"\u0644\u0641\u0651 \u064a\u0645\u064a\u0646 "+E.dc(C.d.aG(x))+"\xb0":"\u0644\u0641\u0651 \u0634\u0645\u0627\u0644 "+E.dc(C.d.aG(x))+"\xb0"}l.push(new E.f9(A.t(x,q,q,q,q,D.aCZ,C.aE,q,q),C.aC,C.bl,q,k,q))}else if(r.z)l.push(D.a4E)
else l.push(D.Xv)
l.push(C.Z)
l.push(D.aLa)
return E.a7E(l,"\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629")}}
B.acv.prototype={
F(d){var x=null,w=this.e,v=A.aOI(this.c*3.141592653589793/180,A.h8(x,x,x,new B.ahA(this.d,w,x),D.azO)),u=w?C.z:I.fD,t=A.cX(C.z,2)
return A.hz(C.T,A.b([v,D.asP,A.aJ(x,A.df(C.er,w?C.as:C.z,x,x),C.m,x,x,new A.aw(u,x,t,x,x,x,C.cZ),x,54,x,x,x,x,54)],y.u),C.l,C.c4,x)}}
B.ahA.prototype={
aI(a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a3.km(C.n),a1=a3.gfp()/2-18
$.a4()
x=A.b_()
x.r=C.h.cm(0.06).gq()
a2.jk(a0,a1,x)
x=A.b_()
x.b=C.bD
x.r=H.wK.gq()
x.c=2
a2.jk(a0,a1,x)
for(x=a2.a,w=a0.a,v=a0.b,u=0;u<360;u+=10){t=(u-90)*3.141592653589793/180
s=C.e.am(u,90)===0
r=Math.cos(t)
q=Math.sin(t)
p=Math.cos(t)
o=Math.sin(t)
n=a1-(s?14:7)
m=new A.nt(C.cL,C.d7,C.ff,C.hb,C.dC)
m.r=(s?C.h:C.wE).gq()
m.c=s?2.5:1.2
l=m.ec()
x.drawLine.apply(x,[w+r*a1,v+q*a1,w+p*n,v+o*n,l])
l.delete()}for(x=D.apm.ge0(),x=x.ga9(x),r=a1-28;x.t();){q=x.gN()
p=q.a
t=(p-90)*3.141592653589793/180
q=q.b
p=p===0?D.a_g:C.aa
k=new A.ye(new A.fz(q,d,d,C.br,d,d,d,d,d,d,new A.r(!0,p,d,d,d,d,16,C.a5,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)),C.y,C.aM,new A.iu(1),d,d,d,d,C.b5,d)
k.yh()
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
r.d=C.iI
a2.l4(g,v,r)
e=new A.c1(x.r,C.a3,d,d,A.b([],y.a))
e.aD(new A.eX(h.a,h.b))
x=a1-14
e.aD(new A.cw(a0.X(0,j.ak(0,x)).X(0,i.ak(0,11)).a,a0.X(0,j.ak(0,x)).X(0,i.ak(0,11)).b))
e.aD(new A.cw(a0.X(0,j.ak(0,x)).ae(0,i.ak(0,11)).a,a0.X(0,j.ak(0,x)).ae(0,i.ak(0,11)).b))
e.aD(new A.lg())
a2.fz(e,f)},
eF(d){return d.b!==this.b||d.c!==this.c}}
var z=a.updateTypes(["a8<~>()","~()"])
B.apV.prototype={
$1(d){return this.a.aB0(d)},
$S:3}
B.b5N.prototype={
$1(d){var x,w,v,u=this.a
if(u.c==null)return
x=u.y
w=x==null?d:B.UY(x+B.bmN(d,x)*0.35)
v=Math.abs(B.bmN(B.bxf(u.d,u.e),w))<4
if(v&&!u.as)A.bih(80)
u.v(new B.b5M(u,w,v))},
$S:96}
B.b5M.prototype={
$0(){var x=this.a
x.y=this.b
x.as=this.c},
$S:0}
B.b5O.prototype={
$0(){var x=this.a
if(x.c!=null)x.v(new B.b5L(x))},
$S:0}
B.b5L.prototype={
$0(){return this.a.z=!0},
$S:0}
B.b5J.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.b5K.prototype={
$0(){return this.a.z=!0},
$S:0}
B.b5P.prototype={
$0(){return this.a.r=!0},
$S:0}
B.b5Q.prototype={
$0(){var x=this.a,w=this.b
x.d=w.a
x.e=w.b
x.f="\u0645\u0643\u0627\u0646\u0643 \u0627\u0644\u062d\u0627\u0644\u064a"},
$S:0}
B.b5R.prototype={
$0(){return this.a.r=!1},
$S:0}
B.b5T.prototype={
$1(d){var x,w,v=null,u=A.b([F.zs],y.u)
for(x=0;x<27;++x){w=F.mj[x]
u.push(A.da(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.b5S(d,w),!1,v,v,v,v,v,v,A.t(w.a,v,v,v,v,v,v,v,v),v,v))}return A.ee(!0,A.cC(u,v,v,v,C.w,!1),C.W,!0)},
$S:42}
B.b5S.prototype={
$0(){A.av(this.a,!1).bN(this.b)
return null},
$S:0}
B.b5U.prototype={
$0(){var x=this.a,w=this.b
x.d=w.b
x.e=w.c
x.f=w.a},
$S:0};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.X_.prototype,"gaqs","aqt",1)
x(w,"gaGM","a6G",1)
x(w=B.Ru.prototype,"gaoG","FL",0)
x(w,"gaDm","Bk",0)
x(w,"gaCY","Hr",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.X_,A.N)
w(A.ju,[B.apV,B.b5N,B.b5T])
x(B.tB,A.U)
x(B.Ru,A.V)
w(A.oZ,[B.b5M,B.b5O,B.b5L,B.b5J,B.b5K,B.b5P,B.b5Q,B.b5R,B.b5S,B.b5U])
x(B.acv,A.a7)
x(B.ahA,A.Aj)})()
A.FD(b.typeUniverse,JSON.parse('{"tB":{"U":[],"d":[]},"Ru":{"V":["tB"]},"acv":{"a7":[],"d":[]},"ahA":{"ar":[]}}'))
var y=(function rtii(){var x=A.aj
return{a:x("y<e7>"),u:x("y<d>"),h:x("bi"),C:x("+(i,K,K)"),w:x("i"),o:x("jY<K>"),r:x("qM"),e:x("H"),q:x("N?"),v:x("~")}})();(function constants(){var x=a.makeConstList
D.aJI=new A.w("\u0628\u0646\u062f\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u0628\u0648\u0635\u0644\u0629\u2026",null,G.bO,null,null,null,null,null,null,null,null)
D.Xv=new A.dU(C.T,null,null,D.aJI,null)
D.a_g=new A.I(1,1,0.4196078431372549,0.4196078431372549,C.j)
D.a2o=new A.bd(3e6)
D.aFh=new A.r(!0,C.aa,null,null,null,null,13,null,null,null,null,null,1.7,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLj=new A.w("\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u0634 \u0645\u062a\u0627\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u0623\u0648 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647. \u062d\u0637 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0648\u062c\u0651\u0647 \u062d\u0631\u0641 \xab\u0634\xbb (\u0627\u0644\u0634\u0645\u0627\u0644) \u0646\u0627\u062d\u064a\u0629 \u0627\u0644\u0634\u0645\u0627\u0644 \u2014 \u062a\u0642\u062f\u0631 \u062a\u0639\u0631\u0641\u0647 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062e\u0631\u0627\u0626\u0637 \u0623\u0648 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u2014 \u0648\u0627\u0644\u0633\u0647\u0645 \u0627\u0644\u062f\u0647\u0628\u064a \u0647\u064a\u0628\u0642\u0649 \u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629.",null,D.aFh,null,null,null,null,null,null,null,null)
D.a4E=new E.f9(D.aLj,C.aC,C.bl,null,!1,null)
D.a6F=new A.am(F.yB,null,C.z,null,null,null)
D.a7w=new A.am(C.qN,null,null,null,null,null)
D.a8h=new A.am(C.jL,null,C.aa,null,null,null)
D.acw=x(["\u0627\u0644\u0634\u0645\u0627\u0644","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u0634\u0631\u0642","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u062c\u0646\u0648\u0628","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u063a\u0631\u0628\u064a","\u0627\u0644\u063a\u0631\u0628","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u063a\u0631\u0628\u064a"],A.aj("y<i>"))
D.apm=new A.cT([0,"\u0634",90,"\u0642",180,"\u062c",270,"\u063a"],A.aj("cT<v,i>"))
D.a5o=new A.aa(62839,"MaterialIcons",null,!1)
D.a7K=new A.am(D.a5o,34,C.h,null,null,null)
D.asP=new A.pO(null,0,null,null,null,null,D.a7K,null)
D.azO=new A.D(290,290)
D.aBF=new A.r(!0,C.h,null,null,null,null,22,C.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCZ=new A.r(!0,C.h,null,null,null,null,16,C.ab,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aI9=new A.w("\u0634\u063a\u0651\u0644 \u0627\u0644\u0628\u0648\u0635\u0644\u0629",null,null,null,null,null,null,null,null,null,null)
D.aKP=new A.w("\u0645\u062f\u064a\u0646\u0629 \u062a\u0627\u0646\u064a\u0629",null,C.fk,null,null,null,null,null,null,null,null)
D.aLa=new A.w("\u0646\u0635\u064a\u062d\u0629: \u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0628\u0639\u064a\u062f \u0639\u0646 \u0627\u0644\u062d\u062f\u064a\u062f \u0648\u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633. \u0644\u0648 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0645\u0634 \u062b\u0627\u0628\u062a \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0641\u064a \u0634\u0643\u0644 \u0631\u0642\u0645 8 \u0643\u0627\u0645 \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u062a\u062a\u0638\u0628\u0637.",null,G.bO,C.aE,null,null,null,null,null,null,null)})()};
(a=>{a["gwT9J5cdiY0qMOAG0iuV3tbt4UY="]=a.current})($__dart_deferred_initializers__);