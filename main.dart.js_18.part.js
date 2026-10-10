((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,B={YQ:function YQ(){this.a=$
this.b=null},as7:function as7(d){this.a=d},
bQd(){return new B.uw(null)},
uw:function uw(d){this.a=d},
Te:function Te(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=!1
_.w=g
_.y=_.x=null
_.as=_.Q=_.z=!1
_.c=_.a=_.at=null},
bbs:function bbs(d){this.a=d},
bbr:function bbr(d,e,f){this.a=d
this.b=e
this.c=f},
bbt:function bbt(d){this.a=d},
bbq:function bbq(d){this.a=d},
bbo:function bbo(d){this.a=d},
bbp:function bbp(d){this.a=d},
bbu:function bbu(d){this.a=d},
bbv:function bbv(d,e){this.a=d
this.b=e},
bbw:function bbw(d){this.a=d},
bbx:function bbx(d,e){this.a=d
this.b=e},
aez:function aez(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ajL:function ajL(d,e,f){this.b=d
this.c=e
this.a=f},
bG4(d,e){var x=d*3.141592653589793/180,w=(39.8262-e)*3.141592653589793/180
return B.WN(Math.atan2(Math.sin(w)*Math.cos(0.37389315900848524),Math.cos(x)*Math.sin(0.37389315900848524)-Math.sin(x)*Math.cos(0.37389315900848524)*Math.cos(w))*180/3.141592653589793)},
WN(d){var x=C.d.ae(d,360)
return x<0?x+360:x},
bvh(d,e){var x=B.WN(d-e)
return x>180?x-360:x}},D,H,I,K,L,M,N,E,F
J=c[1]
A=c[0]
C=c[2]
G=c[14]
B=a.updateHolder(c[5],B)
D=c[33]
H=c[12]
I=c[35]
K=c[30]
L=c[23]
M=c[34]
N=c[31]
E=c[15]
F=c[17]
B.YQ.prototype={
Ng(){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o
var $async$Ng=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=b.G
s=A.lD(q.DeviceOrientationEvent)
if(s==null||s.requestPermission==null){q=A.lD(q.DeviceOrientationEvent)
v=q!=null
x=1
break}x=7
return A.d(A.e6(A.cm(A.cw(s,"requestPermission",null,null,null,null)),y.w),$async$Ng)
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
return A.m($async$Ng,w)},
a7C(){var x,w,v,u,t,s,r
try{t=b.G
x=A.lD(t.screen)
s=x
w=A.lD(s==null?null:s.orientation)
s=w
v=s==null?null:s.angle
if(v!=null){t=A.d_(v)
return t}u=t.orientation
t=u==null?0:A.d_(u)
return t}catch(r){return 0}},
aDJ(d){var x,w,v,u,t,s,r,q=this
try{x=d.webkitCompassHeading
if(x!=null){t=q.a
t===$&&A.b()
t.C(0,B.WN(A.d_(x)+q.a7C()))
return}w=d.alpha
if(w==null)return
s=A.X(d.type)
v=s==null?null:s
t=A.hy(d.absolute)
if(t==null)t=null
u=t===!0
if(J.c(v,"deviceorientationabsolute")||u){t=q.a
t===$&&A.b()
t.C(0,B.WN(360-A.d_(w)+q.a7C()))}}catch(r){}},
asK(){var x,w,v=null,u="addEventListener"
if(this.b!=null)return
x=this.b=A.eT(new B.as7(this))
w=b.G
A.cw(w,u,"deviceorientationabsolute",x,v,v)
A.cw(w,u,"deviceorientation",x,v,v)},
a8x(){var x,w=null,v="removeEventListener",u=this.b
if(u==null)return
x=b.G
A.cw(x,v,"deviceorientationabsolute",u,w,w)
A.cw(x,v,"deviceorientation",u,w,w)
this.b=null}}
B.uw.prototype={
V(){var x,w=$.bIk().a,v=w[1],u=w[2]
w=w[0]
x=new B.YQ()
x.a=new A.ky(x.gasJ(),x.gaJV(),y.o)
return new B.Te(v,u,w+" (\u062a\u0642\u0631\u064a\u0628\u064a)",x)}}
B.Te.prototype={
ag(){var x,w,v=this
v.ar()
x=A.lD(b.G.DeviceOrientationEvent)
w=x!=null&&x.requestPermission!=null
v.Q=w
if(!w)v.a6I()
v.Cf()},
l(){var x=this,w=x.at
if(w!=null)w.aI()
w=x.x
if(w!=null)w.aI()
w=x.w
w.a8x()
w=w.a
w===$&&A.b()
w.ba()
x.az()},
a6I(){var x=this,w=x.x
if(w!=null)w.aI()
w=x.w.a
w===$&&A.b()
x.x=new A.et(w,A.w(w).i("et<1>")).jY(new B.bbs(x))
w=x.at
if(w!=null)w.aI()
x.at=A.cQ(D.a5n,new B.bbt(x))},
GF(){var x=0,w=A.n(y.v),v,u=this,t
var $async$GF=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(u.w.Ng(),$async$GF)
case 3:t=e
if(u.c==null){x=1
break}u.t(new B.bbo(u))
if(t)u.a6I()
else{u.t(new B.bbp(u))
u.c.U(y.q).f.bb(A.bT(null,null,null,null,null,C.l,null,A.p("\u0645\u0646 \u063a\u064a\u0631 \u0625\u0630\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0647\u0646\u0648\u0631\u064a\u0643 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0628\u0627\u0644\u062f\u0631\u062c\u0627\u062a \u0628\u0633",null,null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))}case 1:return A.l(v,w)}})
return A.m($async$GF,w)},
Cf(){var x=0,w=A.n(y.v),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$Cf=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:r.t(new B.bbu(r))
u=4
x=7
return A.d(A.vl(),$async$Cf)
case 7:q=e
if(r.c==null){s=[1]
x=5
break}r.t(new B.bbv(r,q))
s.push(6)
x=5
break
case 4:u=3
n=t.pop()
o=r.c
if(o!=null)o.U(y.q).f.bb(A.bT(null,null,null,null,null,C.l,null,A.p("\u0645\u0642\u062f\u0631\u0646\u0627\u0634 \u0646\u062d\u062f\u062f \u0645\u0643\u0627\u0646\u0643 \u2014 \u0627\u062e\u062a\u0627\u0631 \u0645\u062f\u064a\u0646\u062a\u0643 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629",null,null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.t(new B.bbw(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Cf,w)},
Iw(){var x=0,w=A.n(y.v),v,u=this,t,s
var $async$Iw=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.d(H.bFV(s),$async$Iw)
case 3:t=e
if(t==null||u.c==null){x=1
break}u.t(new B.bbx(u,t))
case 1:return A.l(v,w)}})
return A.m($async$Iw,w)},
D(d){var x,w,v,u,t,s,r=this,q=null,p=B.bG4(r.d,r.e),o=r.y,n=o!=null,m=n?B.bvh(p,o):0,l=y.u,k=A.a([D.aa5,C.ap,A.aV(A.p(r.f,q,q,q,q,F.b_,q,q,q),1)],l)
if(r.r)k.push(M.ou)
else k.push(A.cM(q,q,q,q,D.acc,q,q,r.gaGe(),q,q,q,"\u062d\u062f\u0651\u062f \u0645\u0643\u0627\u0646\u064a",q))
k.push(A.c_(D.aU0,q,q,r.gaFN(),q,q))
k=A.an(k,C.j,C.f,C.h,0,q)
x=n?-o:0
x=A.cT(A.bB(new B.aez(x,p,r.as&&n,q),290,290),q,q)
w=A.p("\u0627\u0644\u0642\u0628\u0644\u0629 \u0639\u0644\u0649 "+E.aW(C.d.ap(p,0))+"\xb0 \u0645\u0646 \u0627\u0644\u0634\u0645\u0627\u0644",q,q,q,q,N.Tj,C.ak,q,q)
v=D.agM[C.e.ae(C.d.b7(B.WN(p)+22.5,45),8)]
u=r.d
t=r.e
s=Math.pow(Math.sin((21.4225-u)*3.141592653589793/180/2),2)+Math.cos(u*3.141592653589793/180)*Math.cos(0.37389315900848524)*Math.pow(Math.sin((39.8262-t)*3.141592653589793/180/2),2)
l=A.a([new E.cW(k,C.ag,C.ay,q,!1,q),C.S,x,C.as,w,A.p("\u0646\u0627\u062d\u064a\u0629 "+v+" \u2022 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0644\u0643\u0639\u0628\u0629 \u062d\u0648\u0627\u0644\u064a "+E.aW(C.d.aA(12742*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))))+" \u0643\u0645",q,q,q,q,F.ah,C.ak,q,q),C.aN],l)
if(r.Q)l.push(A.k6(D.abf,D.aQL,r.gaqX(),A.k7(C.q,C.a7,q,q,q)))
else if(n){k=r.as
if(k)x="\u062a\u0645\u0627\u0645! \u0625\u0646\u062a \u062f\u0644\u0648\u0642\u062a\u064a \u0645\u062a\u0648\u062c\u0651\u0647 \u0644\u0644\u0642\u0628\u0644\u0629 \u2713"
else{x=Math.abs(m)
x=m>0?"\u0644\u0641\u0651 \u064a\u0645\u064a\u0646 "+E.aW(C.d.aA(x))+"\xb0":"\u0644\u0641\u0651 \u0634\u0645\u0627\u0644 "+E.aW(C.d.aA(x))+"\xb0"}l.push(new E.cW(A.p(x,q,q,q,q,D.aLd,C.ak,q,q),C.ag,C.ay,q,k,q))}else if(r.z)l.push(D.a7W)
else l.push(D.ZK)
l.push(C.O)
l.push(D.aUr)
return G.vd(q,l,"\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629")}}
B.aez.prototype={
D(d){var x=null,w=this.e,v=A.aRC(this.c*3.141592653589793/180,A.hn(x,x,x,new B.ajL(this.d,w,x),D.aHO)),u=w?C.q:L.dg,t=A.d2(C.q,2)
return A.he(C.W,A.a([v,D.axV,A.aA(x,A.ca(C.eR,w?C.a7:C.q,x,x),C.m,x,x,new A.au(u,x,t,x,x,x,C.co),x,54,x,x,x,x,54)],y.u),C.l,C.c4,x)}}
B.ajL.prototype={
aJ(a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a3.kx(C.n),a1=a3.gfD()/2-18
$.ae()
x=A.b5()
x.r=C.i.bQ(0.06).gq()
a2.js(a0,a1,x)
x=A.b5()
x.b=C.bJ
x.r=K.h2.gq()
x.c=2
a2.js(a0,a1,x)
for(x=a2.a,w=a0.a,v=a0.b,u=0;u<360;u+=10){t=(u-90)*3.141592653589793/180
s=C.e.ae(u,90)===0
r=Math.cos(t)
q=Math.sin(t)
p=Math.cos(t)
o=Math.sin(t)
n=a1-(s?14:7)
m=new A.o6(C.d0,C.dn,C.fF,C.hI,C.dV)
m.r=(s?C.i:C.ff).gq()
m.c=s?2.5:1.2
l=m.ei()
x.drawLine.apply(x,[w+r*a1,v+q*a1,w+p*n,v+o*n,l])
l.delete()}for(x=D.atX.gdH(),x=x.ga5(x),r=a1-28;x.u();){q=x.gL()
p=q.a
t=(p-90)*3.141592653589793/180
q=q.b
p=p===0?D.a1z:C.a8
k=new A.ze(new A.fj(q,d,d,C.bl,d,d,d,d,d,d,new A.r(!0,p,d,d,d,d,16,C.a2,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)),C.x,C.aK,new A.iN(1),d,d,d,d,C.bc,d)
k.z3()
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
x=$.ae()
f=A.b5()
w=(this.c?C.q:C.q.bQ(0.9)).gq()
f.r=w
v=a0.Y(0,j.al(0,a1-6))
r=A.b5()
r.r=A.c4(w).gq()
r.c=5
r.d=C.jh
a2.le(g,v,r)
e=new A.c9(x.r,C.ab,d,d,A.a([],y.a))
e.aF(new A.fg(h.a,h.b))
x=a1-14
e.aF(new A.cN(a0.Y(0,j.al(0,x)).Y(0,i.al(0,11)).a,a0.Y(0,j.al(0,x)).Y(0,i.al(0,11)).b))
e.aF(new A.cN(a0.Y(0,j.al(0,x)).ai(0,i.al(0,11)).a,a0.Y(0,j.al(0,x)).ai(0,i.al(0,11)).b))
e.aF(new A.lR())
a2.fI(e,f)},
eM(d){return d.b!==this.b||d.c!==this.c}}
var z=a.updateTypes(["a8<~>()","~()"])
B.as7.prototype={
$1(d){return this.a.aDJ(d)},
$S:3}
B.bbs.prototype={
$1(d){var x,w,v,u=this.a
if(u.c==null)return
x=u.y
w=x==null?d:B.WN(x+B.bvh(d,x)*0.35)
v=Math.abs(B.bvh(B.bG4(u.d,u.e),w))<4
if(v&&!u.as)A.bqu(80)
u.t(new B.bbr(u,w,v))},
$S:50}
B.bbr.prototype={
$0(){var x=this.a
x.y=this.b
x.as=this.c},
$S:0}
B.bbt.prototype={
$0(){var x=this.a
if(x.c!=null)x.t(new B.bbq(x))},
$S:0}
B.bbq.prototype={
$0(){return this.a.z=!0},
$S:0}
B.bbo.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.bbp.prototype={
$0(){return this.a.z=!0},
$S:0}
B.bbu.prototype={
$0(){return this.a.r=!0},
$S:0}
B.bbv.prototype={
$0(){var x=this.a,w=this.b
x.d=w.a
x.e=w.b
x.f="\u0645\u0643\u0627\u0646\u0643 \u0627\u0644\u062d\u0627\u0644\u064a"},
$S:0}
B.bbw.prototype={
$0(){return this.a.r=!1},
$S:0}
B.bbx.prototype={
$0(){var x=this.a,w=this.b
x.d=w.b
x.e=w.c
x.f=w.gll()},
$S:0};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.YQ.prototype,"gasJ","asK",1)
x(w,"gaJV","a8x",1)
x(w=B.Te.prototype,"gaqX","GF",0)
x(w,"gaGe","Cf",0)
x(w,"gaFN","Iw",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.YQ,A.N)
w(A.hF,[B.as7,B.bbs])
x(B.uw,A.S)
x(B.Te,A.U)
w(A.jZ,[B.bbr,B.bbt,B.bbq,B.bbo,B.bbp,B.bbu,B.bbv,B.bbw,B.bbx])
x(B.aez,A.a6)
x(B.ajL,A.Bq)})()
A.nR(b.typeUniverse,JSON.parse('{"uw":{"S":[],"e":[]},"Te":{"U":["uw"]},"aez":{"a6":[],"e":[]},"ajL":{"at":[]}}'))
var y={a:A.a7("y<ee>"),u:A.a7("y<e>"),w:A.a7("h"),o:A.a7("ky<J>"),q:A.a7("pl"),e:A.a7("B"),v:A.a7("~")};(function constants(){var x=a.makeConstList
D.aSE=new A.t("\u0628\u0646\u062f\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u0628\u0648\u0635\u0644\u0629\u2026",null,F.ah,null,null,null,null,null,null,null,null)
D.ZK=new A.dV(C.W,null,null,D.aSE,null)
D.a1z=new A.I(1,1,0.4196078431372549,0.4196078431372549,C.k)
D.a5n=new A.bn(3e6)
D.aNC=new A.r(!0,C.a8,null,null,null,null,13,null,null,null,null,null,1.7,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUE=new A.t("\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u0634 \u0645\u062a\u0627\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u0623\u0648 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647. \u062d\u0637 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0648\u062c\u0651\u0647 \u062d\u0631\u0641 \xab\u0634\xbb (\u0627\u0644\u0634\u0645\u0627\u0644) \u0646\u0627\u062d\u064a\u0629 \u0627\u0644\u0634\u0645\u0627\u0644 \u2014 \u062a\u0642\u062f\u0631 \u062a\u0639\u0631\u0641\u0647 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062e\u0631\u0627\u0626\u0637 \u0623\u0648 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u2014 \u0648\u0627\u0644\u0633\u0647\u0645 \u0627\u0644\u062f\u0647\u0628\u064a \u0647\u064a\u0628\u0642\u0649 \u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629.",null,D.aNC,null,null,null,null,null,null,null,null)
D.a7W=new E.cW(D.aUE,C.ag,C.ay,null,!1,null)
D.aa5=new A.a2(I.Ac,null,C.q,null,null,null)
D.abf=new A.a2(C.rS,null,null,null,null,null)
D.acc=new A.a2(C.kj,null,C.a8,null,null,null)
D.agM=x(["\u0627\u0644\u0634\u0645\u0627\u0644","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u0634\u0631\u0642","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u062c\u0646\u0648\u0628","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u063a\u0631\u0628\u064a","\u0627\u0644\u063a\u0631\u0628","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u063a\u0631\u0628\u064a"],A.a7("y<h>"))
D.atX=new A.cH([0,"\u0634",90,"\u0642",180,"\u062c",270,"\u063a"],A.a7("cH<v,h>"))
D.a8G=new A.a3(62839,"MaterialIcons",null,!1)
D.abw=new A.a2(D.a8G,34,C.i,null,null,null)
D.axV=new A.qH(null,0,null,null,null,null,D.abw,null)
D.aHO=new A.G(290,290)
D.aLd=new A.r(!0,C.i,null,null,null,null,16,C.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQL=new A.t("\u0634\u063a\u0651\u0644 \u0627\u0644\u0628\u0648\u0635\u0644\u0629",null,null,null,null,null,null,null,null,null,null)
D.aU0=new A.t("\u0645\u062f\u064a\u0646\u0629 \u062a\u0627\u0646\u064a\u0629",null,C.ee,null,null,null,null,null,null,null,null)
D.aUr=new A.t("\u0646\u0635\u064a\u062d\u0629: \u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0628\u0639\u064a\u062f \u0639\u0646 \u0627\u0644\u062d\u062f\u064a\u062f \u0648\u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633. \u0644\u0648 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0645\u0634 \u062b\u0627\u0628\u062a \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0641\u064a \u0634\u0643\u0644 \u0631\u0642\u0645 8 \u0643\u0627\u0645 \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u062a\u062a\u0638\u0628\u0637.",null,F.ah,C.ak,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c5l","bIk",()=>A.buE())})()};
(a=>{a["mhxAisiEh3MP0YdiWgNvMGGTekA="]=a.current})($__dart_deferred_initializers__);