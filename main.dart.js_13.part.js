((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={Yn:function Yn(){this.a=$
this.b=null},art:function art(d){this.a=d},
bNA(){return new B.uj(null)},
uj:function uj(d){this.a=d},
SK:function SK(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=!1
_.w=g
_.y=_.x=null
_.as=_.Q=_.z=!1
_.c=_.a=_.at=null},
b9E:function b9E(d){this.a=d},
b9D:function b9D(d,e,f){this.a=d
this.b=e
this.c=f},
b9F:function b9F(d){this.a=d},
b9C:function b9C(d){this.a=d},
b9A:function b9A(d){this.a=d},
b9B:function b9B(d){this.a=d},
b9G:function b9G(d){this.a=d},
b9H:function b9H(d,e){this.a=d
this.b=e},
b9I:function b9I(d){this.a=d},
b9J:function b9J(d,e){this.a=d
this.b=e},
ae1:function ae1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aj8:function aj8(d,e,f){this.b=d
this.c=e
this.a=f},
bDs(d,e){var x=d*3.141592653589793/180,w=(39.8262-e)*3.141592653589793/180
return B.Wk(Math.atan2(Math.sin(w)*Math.cos(0.37389315900848524),Math.cos(x)*Math.sin(0.37389315900848524)-Math.sin(x)*Math.cos(0.37389315900848524)*Math.cos(w))*180/3.141592653589793)},
Wk(d){var x=C.d.ae(d,360)
return x<0?x+360:x},
bsR(d,e){var x=B.Wk(d-e)
return x>180?x-360:x}},D,G,H,I,K,L,E,F
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[5],B)
D=c[22]
G=c[10]
H=c[25]
I=c[24]
K=c[19]
L=c[23]
E=c[12]
F=c[14]
B.Yn.prototype={
N_(){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o
var $async$N_=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=b.G
s=A.pc(q.DeviceOrientationEvent)
if(s==null||s.requestPermission==null){q=A.pc(q.DeviceOrientationEvent)
v=q!=null
x=1
break}x=7
return A.d(A.eb(A.cv(A.d9(s,"requestPermission",null,null,null,null)),y.w),$async$N_)
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
return A.m($async$N_,w)},
a7c(){var x,w,v,u,t,s,r
try{t=b.G
x=A.pc(t.screen)
s=x
w=A.pc(s==null?null:s.orientation)
s=w
v=s==null?null:s.angle
if(v!=null){t=A.d4(v)
return t}u=t.orientation
t=u==null?0:A.d4(u)
return t}catch(r){return 0}},
aD0(d){var x,w,v,u,t,s,r,q=this
try{x=d.webkitCompassHeading
if(x!=null){t=q.a
t===$&&A.b()
t.C(0,B.Wk(A.d4(x)+q.a7c()))
return}w=d.alpha
if(w==null)return
s=A.X(d.type)
v=s==null?null:s
t=A.hP(d.absolute)
if(t==null)t=null
u=t===!0
if(J.c(v,"deviceorientationabsolute")||u){t=q.a
t===$&&A.b()
t.C(0,B.Wk(360-A.d4(w)+q.a7c()))}}catch(r){}},
asc(){var x,w,v=null,u="addEventListener"
if(this.b!=null)return
x=this.b=A.fc(new B.art(this))
w=b.G
A.d9(w,u,"deviceorientationabsolute",x,v,v)
A.d9(w,u,"deviceorientation",x,v,v)},
a88(){var x,w=null,v="removeEventListener",u=this.b
if(u==null)return
x=b.G
A.d9(x,v,"deviceorientationabsolute",u,w,w)
A.d9(x,v,"deviceorientation",u,w,w)
this.b=null}}
B.uj.prototype={
V(){var x,w=$.bFJ().a,v=w[1],u=w[2]
w=w[0]
x=new B.Yn()
x.a=new A.ko(x.gasb(),x.gaJ9(),y.o)
return new B.SK(v,u,w+" (\u062a\u0642\u0631\u064a\u0628\u064a)",x)}}
B.SK.prototype={
ai(){var x,w,v=this
v.aq()
x=A.pc(b.G.DeviceOrientationEvent)
w=x!=null&&x.requestPermission!=null
v.Q=w
if(!w)v.a57()
v.C1()},
l(){var x=this,w=x.at
if(w!=null)w.aI()
w=x.x
if(w!=null)w.aI()
w=x.w
w.a88()
w=w.a
w===$&&A.b()
w.bk()
x.aB()},
a57(){var x=this,w=x.x
if(w!=null)w.aI()
w=x.w.a
w===$&&A.b()
x.x=new A.eq(w,A.w(w).i("eq<1>")).jX(new B.b9E(x))
w=x.at
if(w!=null)w.aI()
x.at=A.cO(D.a4H,new B.b9F(x))},
Gu(){var x=0,w=A.n(y.v),v,u=this,t
var $async$Gu=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(u.w.N_(),$async$Gu)
case 3:t=e
if(u.c==null){x=1
break}u.t(new B.b9A(u))
if(t)u.a57()
else{u.t(new B.b9B(u))
u.c.U(y.q).f.ba(A.bS(null,null,null,null,null,C.l,null,A.p("\u0645\u0646 \u063a\u064a\u0631 \u0625\u0630\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0647\u0646\u0648\u0631\u064a\u0643 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0628\u0627\u0644\u062f\u0631\u062c\u0627\u062a \u0628\u0633",null,null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))}case 1:return A.l(v,w)}})
return A.m($async$Gu,w)},
C1(){var x=0,w=A.n(y.v),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$C1=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:r.t(new B.b9G(r))
u=4
x=7
return A.d(A.v8(),$async$C1)
case 7:q=e
if(r.c==null){s=[1]
x=5
break}r.t(new B.b9H(r,q))
s.push(6)
x=5
break
case 4:u=3
n=t.pop()
o=r.c
if(o!=null)o.U(y.q).f.ba(A.bS(null,null,null,null,null,C.l,null,A.p("\u0645\u0642\u062f\u0631\u0646\u0627\u0634 \u0646\u062d\u062f\u062f \u0645\u0643\u0627\u0646\u0643 \u2014 \u0627\u062e\u062a\u0627\u0631 \u0645\u062f\u064a\u0646\u062a\u0643 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629",null,null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.t(new B.b9I(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$C1,w)},
Ik(){var x=0,w=A.n(y.v),v,u=this,t,s
var $async$Ik=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.d(G.bDi(s),$async$Ik)
case 3:t=e
if(t==null||u.c==null){x=1
break}u.t(new B.b9J(u,t))
case 1:return A.l(v,w)}})
return A.m($async$Ik,w)},
D(d){var x,w,v,u,t,s,r=this,q=null,p=B.bDs(r.d,r.e),o=r.y,n=o!=null,m=n?B.bsR(p,o):0,l=y.u,k=A.a([D.a9i,C.am,A.b_(A.p(r.f,q,q,q,q,F.bo,q,q,q),1)],l)
if(r.r)k.push(L.om)
else k.push(A.dy(q,q,q,D.abh,q,q,r.gaFu(),q,q,q,"\u062d\u062f\u0651\u062f \u0645\u0643\u0627\u0646\u064a",q))
k.push(A.c4(D.aSA,q,q,r.gaF3(),q,q))
k=A.aq(k,C.j,C.f,C.h,0,q)
x=n?-o:0
x=A.d6(A.bH(new B.ae1(x,p,r.as&&n,q),290,290),q,q)
w=A.p("\u0627\u0644\u0642\u0628\u0644\u0629 \u0639\u0644\u0649 "+E.bd(C.d.ap(p,0))+"\xb0 \u0645\u0646 \u0627\u0644\u0634\u0645\u0627\u0644",q,q,q,q,D.aIB,C.ar,q,q)
v=D.afO[C.e.ae(C.d.b9(B.Wk(p)+22.5,45),8)]
u=r.d
t=r.e
s=Math.pow(Math.sin((21.4225-u)*3.141592653589793/180/2),2)+Math.cos(u*3.141592653589793/180)*Math.cos(0.37389315900848524)*Math.pow(Math.sin((39.8262-t)*3.141592653589793/180/2),2)
l=A.a([new E.dv(k,C.al,C.aF,q,!1,q),C.V,x,C.ap,w,A.p("\u0646\u0627\u062d\u064a\u0629 "+v+" \u2022 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0644\u0643\u0639\u0628\u0629 \u062d\u0648\u0627\u0644\u064a "+E.bd(C.d.aC(12742*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))))+" \u0643\u0645",q,q,q,q,F.ax,C.ar,q,q),C.aQ],l)
if(r.Q)l.push(A.mI(D.aan,D.aPr,r.gaqp(),A.mJ(C.u,C.ao,q,q)))
else if(n){k=r.as
if(k)x="\u062a\u0645\u0627\u0645! \u0625\u0646\u062a \u062f\u0644\u0648\u0642\u062a\u064a \u0645\u062a\u0648\u062c\u0651\u0647 \u0644\u0644\u0642\u0628\u0644\u0629 \u2713"
else{x=Math.abs(m)
x=m>0?"\u0644\u0641\u0651 \u064a\u0645\u064a\u0646 "+E.bd(C.d.aC(x))+"\xb0":"\u0644\u0641\u0651 \u0634\u0645\u0627\u0644 "+E.bd(C.d.aC(x))+"\xb0"}l.push(new E.dv(A.p(x,q,q,q,q,D.aJY,C.ar,q,q),C.al,C.aF,q,k,q))}else if(r.z)l.push(D.a7b)
else l.push(D.Z9)
l.push(C.R)
l.push(D.aT0)
return E.v0(q,l,"\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629")}}
B.ae1.prototype={
D(d){var x=null,w=this.e,v=A.aQG(this.c*3.141592653589793/180,A.hl(x,x,x,new B.aj8(this.d,w,x),D.aGD)),u=w?C.u:K.dQ,t=A.cZ(C.u,2)
return A.hc(C.X,A.a([v,D.awO,A.aD(x,A.cz(C.eL,w?C.ao:C.u,x,x),C.m,x,x,new A.av(u,x,t,x,x,x,C.cx),x,54,x,x,x,x,54)],y.u),C.l,C.c2,x)}}
B.aj8.prototype={
aJ(a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a3.ku(C.n),a1=a3.gfz()/2-18
$.ac()
x=A.b2()
x.r=C.i.bR(0.06).gq()
a2.jr(a0,a1,x)
x=A.b2()
x.b=C.bI
x.r=I.jS.gq()
x.c=2
a2.jr(a0,a1,x)
for(x=a2.a,w=a0.a,v=a0.b,u=0;u<360;u+=10){t=(u-90)*3.141592653589793/180
s=C.e.ae(u,90)===0
r=Math.cos(t)
q=Math.sin(t)
p=Math.cos(t)
o=Math.sin(t)
n=a1-(s?14:7)
m=new A.nZ(C.cZ,C.dk,C.fB,C.hH,C.dS)
m.r=(s?C.i:C.h_).gq()
m.c=s?2.5:1.2
l=m.eh()
x.drawLine.apply(x,[w+r*a1,v+q*a1,w+p*n,v+o*n,l])
l.delete()}for(x=D.asU.gdL(),x=x.ga4(x),r=a1-28;x.u();){q=x.gL()
p=q.a
t=(p-90)*3.141592653589793/180
q=q.b
p=p===0?D.a0W:C.a8
k=new A.z_(new A.fi(q,d,d,C.bk,d,d,d,d,d,d,new A.r(!0,p,d,d,d,d,16,C.a0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)),C.y,C.aI,new A.iJ(1),d,d,d,d,C.bb,d)
k.yU()
q=Math.cos(t)
p=Math.sin(t)
o=k.b
k.aJ(a2,new A.q(w+q*r-o.c/2,v+p*r-o.a.c.gca()/2))}t=(this.b-90)*3.141592653589793/180
x=Math.cos(t)
w=Math.sin(t)
j=new A.q(x,w)
i=new A.q(-w,x)
h=a0.Y(0,j.al(0,a1+12))
g=a0.Y(0,j.al(0,34))
x=$.ac()
f=A.b2()
w=(this.c?C.u:C.u.bR(0.9)).gq()
f.r=w
v=a0.Y(0,j.al(0,a1-6))
r=A.b2()
r.r=A.c2(w).gq()
r.c=5
r.d=C.jb
a2.lb(g,v,r)
e=new A.c9(x.r,C.a9,d,d,A.a([],y.a))
e.aF(new A.fe(h.a,h.b))
x=a1-14
e.aF(new A.cJ(a0.Y(0,j.al(0,x)).Y(0,i.al(0,11)).a,a0.Y(0,j.al(0,x)).Y(0,i.al(0,11)).b))
e.aF(new A.cJ(a0.Y(0,j.al(0,x)).ag(0,i.al(0,11)).a,a0.Y(0,j.al(0,x)).ag(0,i.al(0,11)).b))
e.aF(new A.lI())
a2.fE(e,f)},
eK(d){return d.b!==this.b||d.c!==this.c}}
var z=a.updateTypes(["a6<~>()","~()"])
B.art.prototype={
$1(d){return this.a.aD0(d)},
$S:3}
B.b9E.prototype={
$1(d){var x,w,v,u=this.a
if(u.c==null)return
x=u.y
w=x==null?d:B.Wk(x+B.bsR(d,x)*0.35)
v=Math.abs(B.bsR(B.bDs(u.d,u.e),w))<4
if(v&&!u.as)A.bog(80)
u.t(new B.b9D(u,w,v))},
$S:59}
B.b9D.prototype={
$0(){var x=this.a
x.y=this.b
x.as=this.c},
$S:0}
B.b9F.prototype={
$0(){var x=this.a
if(x.c!=null)x.t(new B.b9C(x))},
$S:0}
B.b9C.prototype={
$0(){return this.a.z=!0},
$S:0}
B.b9A.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.b9B.prototype={
$0(){return this.a.z=!0},
$S:0}
B.b9G.prototype={
$0(){return this.a.r=!0},
$S:0}
B.b9H.prototype={
$0(){var x=this.a,w=this.b
x.d=w.a
x.e=w.b
x.f="\u0645\u0643\u0627\u0646\u0643 \u0627\u0644\u062d\u0627\u0644\u064a"},
$S:0}
B.b9I.prototype={
$0(){return this.a.r=!1},
$S:0}
B.b9J.prototype={
$0(){var x=this.a,w=this.b
x.d=w.b
x.e=w.c
x.f=w.gli()},
$S:0};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.Yn.prototype,"gasb","asc",1)
x(w,"gaJ9","a88",1)
x(w=B.SK.prototype,"gaqp","Gu",0)
x(w,"gaFu","C1",0)
x(w,"gaF3","Ik",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Yn,A.N)
w(A.ik,[B.art,B.b9E])
x(B.uj,A.T)
x(B.SK,A.V)
w(A.lJ,[B.b9D,B.b9F,B.b9C,B.b9A,B.b9B,B.b9G,B.b9H,B.b9I,B.b9J])
x(B.ae1,A.a7)
x(B.aj8,A.Bd)})()
A.vG(b.typeUniverse,JSON.parse('{"uj":{"T":[],"e":[]},"SK":{"V":["uj"]},"ae1":{"a7":[],"e":[]},"aj8":{"as":[]}}'))
var y={a:A.a9("y<ei>"),u:A.a9("y<e>"),w:A.a9("h"),o:A.a9("ko<K>"),q:A.a9("p8"),e:A.a9("C"),v:A.a9("~")};(function constants(){var x=a.makeConstList
D.aRf=new A.t("\u0628\u0646\u062f\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u0628\u0648\u0635\u0644\u0629\u2026",null,F.ax,null,null,null,null,null,null,null,null)
D.Z9=new A.e1(C.X,null,null,D.aRf,null)
D.a0W=new A.I(1,1,0.4196078431372549,0.4196078431372549,C.k)
D.a4H=new A.bl(3e6)
D.aMl=new A.r(!0,C.a8,null,null,null,null,13,null,null,null,null,null,1.7,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTc=new A.t("\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u0634 \u0645\u062a\u0627\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u0623\u0648 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647. \u062d\u0637 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0648\u062c\u0651\u0647 \u062d\u0631\u0641 \xab\u0634\xbb (\u0627\u0644\u0634\u0645\u0627\u0644) \u0646\u0627\u062d\u064a\u0629 \u0627\u0644\u0634\u0645\u0627\u0644 \u2014 \u062a\u0642\u062f\u0631 \u062a\u0639\u0631\u0641\u0647 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062e\u0631\u0627\u0626\u0637 \u0623\u0648 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u2014 \u0648\u0627\u0644\u0633\u0647\u0645 \u0627\u0644\u062f\u0647\u0628\u064a \u0647\u064a\u0628\u0642\u0649 \u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629.",null,D.aMl,null,null,null,null,null,null,null,null)
D.a7b=new E.dv(D.aTc,C.al,C.aF,null,!1,null)
D.a9i=new A.aa(H.zS,null,C.u,null,null,null)
D.aan=new A.aa(C.rB,null,null,null,null,null)
D.abh=new A.aa(C.kd,null,C.a8,null,null,null)
D.afO=x(["\u0627\u0644\u0634\u0645\u0627\u0644","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u0634\u0631\u0642","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u062c\u0646\u0648\u0628","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u063a\u0631\u0628\u064a","\u0627\u0644\u063a\u0631\u0628","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u063a\u0631\u0628\u064a"],A.a9("y<h>"))
D.asU=new A.cF([0,"\u0634",90,"\u0642",180,"\u062c",270,"\u063a"],A.a9("cF<v,h>"))
D.a7W=new A.a8(62839,"MaterialIcons",null,!1)
D.aaD=new A.aa(D.a7W,34,C.i,null,null,null)
D.awO=new A.qv(null,0,null,null,null,null,D.aaD,null)
D.aGD=new A.F(290,290)
D.aIB=new A.r(!0,C.i,null,null,null,null,22,C.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJY=new A.r(!0,C.i,null,null,null,null,16,C.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPr=new A.t("\u0634\u063a\u0651\u0644 \u0627\u0644\u0628\u0648\u0635\u0644\u0629",null,null,null,null,null,null,null,null,null,null)
D.aSA=new A.t("\u0645\u062f\u064a\u0646\u0629 \u062a\u0627\u0646\u064a\u0629",null,C.eZ,null,null,null,null,null,null,null,null)
D.aT0=new A.t("\u0646\u0635\u064a\u062d\u0629: \u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0628\u0639\u064a\u062f \u0639\u0646 \u0627\u0644\u062d\u062f\u064a\u062f \u0648\u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633. \u0644\u0648 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0645\u0634 \u062b\u0627\u0628\u062a \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0641\u064a \u0634\u0643\u0644 \u0631\u0642\u0645 8 \u0643\u0627\u0645 \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u062a\u062a\u0638\u0628\u0637.",null,F.ax,C.ar,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c2u","bFJ",()=>A.bsh())})()};
(a=>{a["KuNHGehXl5/ug2bSbEfMR3tjAdc="]=a.current})($__dart_deferred_initializers__);