((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,B={
Bq(d){var x,w,v
if(d==null)return null
try{x=A.db(d)
w=isNaN(x)?null:x
return w}catch(v){return null}},
aso:function aso(d){var _=this
_.a=d
_.d=_.c=_.b=null
_.r=_.f=_.e=!1
_.w=null},
asq:function asq(d){this.a=d},
asr:function asr(d){this.a=d},
asp:function asp(d){this.a=d},
bGC(d,e){var x=d*3.141592653589793/180,w=(39.8262-e)*3.141592653589793/180
return B.AF(Math.atan2(Math.sin(w)*Math.cos(0.37389315900848524),Math.cos(x)*Math.sin(0.37389315900848524)-Math.sin(x)*Math.cos(0.37389315900848524)*Math.cos(w))*180/3.141592653589793)},
AF(d){var x=C.d.ae(d,360)
return x<0?x+360:x},
bGY(d,e){var x=B.AF(d-e)
return x>=180?x-360:x},
bZl(d){var x,w,v,u,t,s=d.length
if(s<2)return 0
for(x=0,w=0,v=0;v<d.length;d.length===s||(0,A.A)(d),++v){u=d[v]*3.141592653589793/180
x+=Math.cos(u)
w+=Math.sin(u)}t=Math.sqrt(x*x+w*w)/d.length
if(t>=1)return 0
if(t<=1e-9)return 180
return Math.sqrt(-2*Math.log(t))*180/3.141592653589793},
ayI:function ayI(d){this.a=d
this.c=this.b=null},
wR:function wR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQN(){return new B.uA(null)},
uA:function uA(d){this.a=d},
Tq:function Tq(d,e,f,g,h,i,j){var _=this
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
bbS:function bbS(d){this.a=d},
bbR:function bbR(d){this.a=d},
bbO:function bbO(){},
bbP:function bbP(d){this.a=d},
bbN:function bbN(){},
bbI:function bbI(d){this.a=d},
bbJ:function bbJ(d){this.a=d},
bbK:function bbK(d){this.a=d},
bbL:function bbL(d,e){this.a=d
this.b=e},
bbM:function bbM(d){this.a=d},
bbQ:function bbQ(d,e){this.a=d
this.b=e},
S6:function S6(d,e,f){this.c=d
this.d=e
this.a=f},
aeP:function aeP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ak_:function ak_(d){this.a=d},
ad9:function ad9(d,e){this.b=d
this.a=e}},D,I,K,L,G,M,N,O,E,F
J=c[1]
A=c[0]
C=c[2]
H=c[15]
B=a.updateHolder(c[5],B)
D=c[34]
I=c[12]
K=c[37]
L=c[31]
G=c[36]
M=c[24]
N=c[35]
O=c[32]
E=c[16]
F=c[18]
B.aso.prototype={
Nj(){var x=0,w=A.n(y.e),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Nj=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
n=b.G
r=A.ji(n.DeviceOrientationEvent)
if(r==null||r.requestPermission==null){n=A.ji(n.DeviceOrientationEvent)
v=n!=null
x=1
break}x=7
return A.d(A.e6(A.cn(A.cb(r,"requestPermission",null,null,null,null)),y.w),$async$Nj)
case 7:q=e
p=q==="granted"
if(p)s.GW()
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
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Nj,w)},
a7H(){var x,w,v,u,t,s
try{u=b.G
x=A.ji(u.screen)
t=x
w=A.ji(t==null?null:t.orientation)
t=w
v=B.Bq(t==null?null:t.angle)
if(v!=null)return v
u=B.Bq(u.orientation)
if(u==null)u=0
return u}catch(s){return 0}},
aDL(d){var x,w,v,u,t,s,r,q,p,o,n=this,m="deviceorientationabsolute"
if(n.f)return
try{x=B.Bq(d.beta)
w=B.Bq(d.gamma)
v=B.Bq(d.webkitCompassHeading)
if(v!=null){n.w=new A.bb(Date.now(),0,!1)
n.a.C(0,new B.wR(B.AF(v+n.a7H()),B.Bq(d.webkitCompassAccuracy),x,w))
return}u=B.Bq(d.alpha)
if(u==null)return
r=A.X(d.type)
t=r==null?null:r
if(!J.c(t,m)){q=A.hz(d.absolute)
if(q==null)q=null
p=q===!0}else p=!0
s=p
if(!s)return
if(J.c(t,m))n.r=!0
else if(n.r)return
n.w=new A.bb(Date.now(),0,!1)
n.a.C(0,new B.wR(B.AF(360-u+n.a7H()),null,x,w))}catch(o){}},
my(){var x,w,v,u=this,t=null,s="addEventListener"
if(u.e||u.f)return
u.e=!0
u.GW()
x=u.c=A.bEt(new B.asq(u))
w=b.G
v=A.ji(w.document)
if(v!=null)A.cb(v,s,"visibilitychange",x,t,t)
A.cb(w,s,"pageshow",x,t,t)
u.d=A.nB(C.mc,new B.asr(u))},
GW(){var x,w,v=this,u=null,t="addEventListener"
if(v.f)return
v.a2B()
x=v.b=A.eU(new B.asp(v))
w=b.G
if("ondeviceorientationabsolute" in w)A.cb(w,t,"deviceorientationabsolute",x,u,u)
A.cb(w,t,"deviceorientation",x,u,u)},
a2B(){var x,w=null,v="removeEventListener",u=this.b
if(u==null)return
x=b.G
A.cb(x,v,"deviceorientationabsolute",u,w,w)
A.cb(x,v,"deviceorientation",u,w,w)
this.b=null},
l(){var x,w,v,u=this,t=null,s="removeEventListener"
if(u.f)return
u.f=!0
x=u.d
if(x!=null)x.aI()
u.a2B()
w=u.c
if(w!=null){x=b.G
v=A.ji(x.document)
if(v!=null)A.cb(v,s,"visibilitychange",w,t,t)
A.cb(x,s,"pageshow",w,t,t)}u.a.bb()}}
B.ayI.prototype={}
B.wR.prototype={}
B.uA.prototype={
V(){var x=$.bIU().a,w=x[1],v=x[2]
x=x[0]
return new B.Tq(w,v,x+" (\u062a\u0642\u0631\u064a\u0628\u064a)",new B.aso(new A.kz(null,null,y.o)),new B.ayI(0.2),A.a([],y.h),new A.bb(A.kV(0,0,!1),0,!1))}}
B.Tq.prototype={
ag(){var x,w,v,u=this
u.aq()
x=A.ji(b.G.DeviceOrientationEvent)
u.ch=x!=null&&x.requestPermission!=null
w=u.w
v=w.a
u.z=new A.et(v,A.w(v).i("et<1>")).jZ(u.gaE0())
w.my()
u.cx=A.cK(D.a5w,new B.bbS(u))
u.Cf()},
l(){var x=this,w=x.cx
if(w!=null)w.aI()
w=x.cy
if(w!=null)w.aI()
w=x.z
if(w!=null)w.aI()
x.w.l()
x.aA()},
aE1(d){var x,w,v,u,t,s,r,q,p,o=this
if(o.c==null)return
x=o.y
w=d.a
x.push(w)
if(x.length>15)C.b.k5(x,0)
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
w=u}else v=s}w=B.AF(Math.atan2(v,w)*180/3.141592653589793)
w.toString
q=Math.abs(B.bGY(B.bGC(o.d,o.e),w))<=5
if(q&&!o.CW)A.bqY(80)
v=o.Q
o.Q=w
o.CW=q
o.as=d.b
w=d.c
s=d.d
if(!(w!=null&&Math.abs(w)>35))w=s!=null&&Math.abs(s)>35
else w=!0
o.at=w
o.ax=x.length>=10&&B.bZl(x)>12
o.ay=o.ch=!1
p=new A.bb(Date.now(),0,!1)
if(v==null||p.dG(o.db).a>33e3){o.db=p
x=o.cy
if(x!=null)x.aI()
o.cy=null
o.t(new B.bbO())}else if(o.cy==null)o.cy=A.cK(C.yT,new B.bbP(o))},
GG(){var x=0,w=A.n(y.v),v,u=this,t,s
var $async$GG=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
x=3
return A.d(t.Nj(),$async$GG)
case 3:s=e
if(u.c==null){x=1
break}if(s){u.t(new B.bbI(u))
t.my()}else{u.t(new B.bbJ(u))
u.c.U(y.q).f.ba(A.bS(null,null,null,null,null,C.l,null,A.p("\u0645\u0646 \u063a\u064a\u0631 \u0625\u0630\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0647\u0646\u0648\u0631\u064a\u0643 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0628\u0627\u0644\u062f\u0631\u062c\u0627\u062a \u0628\u0633",null,null,null,null,null,null,null,null),null,C.F,null,null,null,null,null,null,null,null,null,null))}case 1:return A.l(v,w)}})
return A.m($async$GG,w)},
Cf(){var x=0,w=A.n(y.v),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$Cf=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:r.t(new B.bbK(r))
u=4
x=7
return A.d(A.vp(),$async$Cf)
case 7:q=e
if(r.c==null){s=[1]
x=5
break}r.t(new B.bbL(r,q))
s.push(6)
x=5
break
case 4:u=3
n=t.pop()
o=r.c
if(o!=null)o.U(y.q).f.ba(A.bS(null,null,null,null,null,C.l,null,A.p("\u0645\u0642\u062f\u0631\u0646\u0627\u0634 \u0646\u062d\u062f\u062f \u0645\u0643\u0627\u0646\u0643 \u2014 \u0627\u062e\u062a\u0627\u0631 \u0645\u062f\u064a\u0646\u062a\u0643 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629",null,null,null,null,null,null,null,null),null,C.F,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.t(new B.bbM(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Cf,w)},
Iy(){var x=0,w=A.n(y.v),v,u=this,t,s
var $async$Iy=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.d(I.bGs(s),$async$Iy)
case 3:t=e
if(t==null||u.c==null){x=1
break}u.t(new B.bbQ(u,t))
case 1:return A.l(v,w)}})
return A.m($async$Iy,w)},
D(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.bGC(p.d,p.e),m=p.Q,l=m==null,k=!l,j=k?B.bGY(n,m):0,i=k&&p.CW,h=p.as
if(h!=null)x=h<0||h>25
else x=!1
h=y.u
w=A.a([D.aae,C.ap,A.aV(A.p(p.f,o,o,o,o,F.b0,o,o,o),1)],h)
if(p.r)w.push(N.oC)
else w.push(A.cN(o,o,o,o,D.acm,o,o,p.gaGj(),o,o,o,"\u062d\u062f\u0651\u062f \u0645\u0643\u0627\u0646\u064a",o))
w.push(A.bZ(D.aUj,o,o,p.gaFS(),o,o))
w=A.an(w,C.j,C.f,C.h,0,o)
v=l?0:m
v=A.cU(A.bB(new B.aeP(v,k?j:n,i,o),290,290),o,o)
u=A.p("\u0627\u0644\u0642\u0628\u0644\u0629 \u0639\u0644\u0649 "+(E.aU(C.e.ae(C.d.ar(B.AF(n)),360))+"\xb0")+" \u0645\u0646 \u0627\u0644\u0634\u0645\u0627\u0644",o,o,o,o,O.Tr,C.ae,o,o)
t=D.agW[C.e.ae(C.d.b7(B.AF(n)+22.5,45),8)]
s=p.d
r=p.e
q=Math.pow(Math.sin((21.4225-s)*3.141592653589793/180/2),2)+Math.cos(s*3.141592653589793/180)*Math.cos(0.37389315900848524)*Math.pow(Math.sin((39.8262-r)*3.141592653589793/180/2),2)
t=A.a([new E.cT(w,C.ah,C.ay,o,!1,o),C.S,v,C.as,u,A.p("\u0646\u0627\u062d\u064a\u0629 "+t+" \u2022 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0644\u0643\u0639\u0628\u0629 \u062d\u0648\u0627\u0644\u064a "+E.aU(C.d.ar(12742*Math.atan2(Math.sqrt(q),Math.sqrt(1-q))))+" \u0643\u0645",o,o,o,o,F.ai,C.ae,o,o)],h)
if(k){w=E.aU(C.e.ae(C.d.ar(B.AF(m)),360))
v=p.as
v=v!=null&&v>=0?" \u2022 \u062f\u0642\u0629 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \xb1"+E.aU(C.d.ar(v))+"\xb0":""
t.push(A.p("\u0627\u062a\u062c\u0627\u0647 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u062f\u0644\u0648\u0642\u062a\u064a "+(w+"\xb0")+v,o,o,o,o,D.aLc,C.ae,o,o))}t.push(C.aN)
if(p.ch&&l)C.b.E(t,A.a([A.k8(D.abo,D.aR2,p.gar0(),A.k9(C.q,C.a7,o,o,o)),C.N],h))
if(k){l=i?"aligned":"turn "+C.d.ar(j)
if(i)h="\u062a\u0645\u0627\u0645! \u0625\u0646\u062a \u062f\u0644\u0648\u0642\u062a\u064a \u0645\u062a\u0648\u062c\u0651\u0647 \u0644\u0644\u0642\u0628\u0644\u0629 \u2713"
else{h=Math.abs(j)
h=j>0?"\u0644\u0641\u0651 \u064a\u0645\u064a\u0646 "+E.aU(C.d.ar(h))+"\xb0":"\u0644\u0641\u0651 \u0634\u0645\u0627\u0644 "+E.aU(C.d.ar(h))+"\xb0"}t.push(A.bJ(o,o,new E.cT(A.p(h,o,o,o,o,A.cB(o,o,i?G.bV:C.i,o,o,o,o,o,o,o,o,16,o,o,C.a3,o,o,!0,o,o,o,o,o,o,o,o),C.ae,o,o),C.ah,C.ay,o,i,o),!1,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,C.L,o))}else if(p.ay&&!p.ch)t.push(D.a83)
else if(!p.ch)t.push(D.ZV)
if(k&&p.at)t.push(D.b2p)
if(k)l=x||p.ax
else l=!1
if(l)t.push(D.b2o)
t.push(C.N)
t.push(D.aQx)
return H.vh(o,t,"\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629")}}
B.S6.prototype={
D(d){var x=null
return new E.cT(A.an(A.a([A.c8(this.c,C.q,x,22),C.aZ,A.aV(A.p(this.d,x,x,x,x,G.Tw,x,x,x),1)],y.u),C.j,C.f,C.h,0,x),C.ah,C.ay,x,!1,x)}}
B.aeP.prototype={
D(d){var x,w=null,v=this.e,u=v?G.bV:C.q,t=A.a9R(-this.c*3.141592653589793/180,A.h6(w,w,w,new B.ak_(w),D.SF)),s=this.d,r=C.d.ar(s)
r=A.bJ(w,w,A.a9R(s*3.141592653589793/180,A.h6(w,w,w,new B.ad9(u,w),D.SF)),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"qibla-arrow "+r,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,C.L,w)
s=v?u:M.dh
x=A.d1(u,2)
return A.hg(C.W,A.a([t,r,D.ay4,A.aA(w,A.c8(C.eT,v?C.a7:C.q,w,w),C.m,w,w,new A.au(s,w,x,w,w,w,C.cq),w,54,w,w,w,w,54)],y.u),C.l,C.c5,w)}}
B.ak_.prototype={
aJ(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=e.jR(C.n),h=e.gfl()/2-18
$.ae()
x=A.b5()
x.r=C.i.bQ(0.06).gq()
d.jr(i,h,x)
x=A.b5()
x.b=C.bJ
x.r=L.h6.gq()
x.c=2
d.jr(i,h,x)
for(x=d.a,w=i.a,v=i.b,u=0;u<360;u+=10){t=(u-90)*3.141592653589793/180
s=C.e.ae(u,90)===0
r=Math.cos(t)
q=Math.sin(t)
p=Math.cos(t)
o=Math.sin(t)
n=h-(s?14:7)
m=new A.o9(C.d1,C.dp,C.fI,C.hM,C.dW)
m.r=(s?C.i:C.eJ).gq()
m.c=s?2.5:1.2
l=m.ei()
x.drawLine.apply(x,[w+r*h,v+q*h,w+p*n,v+o*n,l])
l.delete()}for(x=D.au7.gdI(),x=x.ga5(x),r=h-28;x.u();){q=x.gL()
p=q.a
t=(p-90)*3.141592653589793/180
q=q.b
p=p===0?D.a1J:C.a8
k=new A.zj(new A.fj(q,j,j,C.bl,j,j,j,j,j,j,new A.r(!0,p,j,j,j,j,16,C.a2,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)),C.x,C.aK,new A.iO(1),j,j,j,j,C.bc,j)
k.z4()
q=Math.cos(t)
p=Math.sin(t)
o=k.b
k.aJ(d,new A.q(w+q*r-o.c/2,v+p*r-o.a.c.gca()/2))}},
eG(d){return!1}}
B.ad9.prototype={
aJ(d,e){var x,w,v,u,t,s=e.jR(C.n),r=e.gfl()/2-18,q=s.Z(0,C.kL.am(0,r+12)),p=$.ae(),o=A.b5(),n=this.b
o.r=n.gq()
x=s.Z(0,C.kL.am(0,34))
w=s.Z(0,C.kL.am(0,r-6))
v=A.b5()
v.r=n.gq()
v.c=5
v.d=C.jj
d.le(x,w,v)
u=s.Z(0,C.kL.am(0,r-14))
t=new A.ca(p.r,C.ab,null,null,A.a([],y.a))
t.aF(new A.fg(q.a,q.b))
t.aF(new A.cO(u.Z(0,C.f1.am(0,11)).a,u.Z(0,C.f1.am(0,11)).b))
t.aF(new A.cO(u.ai(0,C.f1.am(0,11)).a,u.ai(0,C.f1.am(0,11)).b))
t.aF(new A.lT())
d.fI(t,o)},
eG(d){return!d.b.k(0,this.b)}}
var z=a.updateTypes(["a8<~>()","~(wR)"])
B.asq.prototype={
$0(){var x,w,v=this.a
if(v.f)return
x=A.ji(b.G.document)
w=A.X(x==null?null:x.visibilityState)
if((w==null?null:w)==="visible")v.GW()},
$S:15}
B.asr.prototype={
$1(d){var x=this.a,w=x.w
if(w!=null&&new A.bb(Date.now(),0,!1).dG(w).a>3e6){x.w=new A.bb(Date.now(),0,!1)
x.GW()}},
$S:41}
B.asp.prototype={
$1(d){return this.a.aDL(d)},
$S:3}
B.bbS.prototype={
$0(){var x=this.a
if(x.c!=null&&x.Q==null)x.t(new B.bbR(x))},
$S:0}
B.bbR.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.bbO.prototype={
$0(){},
$S:0}
B.bbP.prototype={
$0(){var x=this.a
x.cy=null
x.db=new A.bb(Date.now(),0,!1)
if(x.c!=null)x.t(new B.bbN())},
$S:0}
B.bbN.prototype={
$0(){},
$S:0}
B.bbI.prototype={
$0(){return this.a.ch=!1},
$S:0}
B.bbJ.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.bbK.prototype={
$0(){return this.a.r=!0},
$S:0}
B.bbL.prototype={
$0(){var x=this.a,w=this.b
x.d=w.a
x.e=w.b
x.f="\u0645\u0643\u0627\u0646\u0643 \u0627\u0644\u062d\u0627\u0644\u064a"},
$S:0}
B.bbM.prototype={
$0(){return this.a.r=!1},
$S:0}
B.bbQ.prototype={
$0(){var x=this.a,w=this.b
x.d=w.b
x.e=w.c
x.f=w.gll()},
$S:0};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Tq.prototype,"gaE0","aE1",1)
w(v,"gar0","GG",0)
w(v,"gaGj","Cf",0)
w(v,"gaFS","Iy",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.aso,B.ayI,B.wR])
x(A.k0,[B.asq,B.bbS,B.bbR,B.bbO,B.bbP,B.bbN,B.bbI,B.bbJ,B.bbK,B.bbL,B.bbM,B.bbQ])
x(A.hF,[B.asr,B.asp])
w(B.uA,A.S)
w(B.Tq,A.U)
x(A.a5,[B.S6,B.aeP])
x(A.By,[B.ak_,B.ad9])})()
A.nU(b.typeUniverse,JSON.parse('{"uA":{"S":[],"e":[]},"Tq":{"U":["uA"]},"S6":{"a5":[],"e":[]},"aeP":{"a5":[],"e":[]},"ak_":{"at":[]},"ad9":{"at":[]}}'))
var y={a:A.a1("y<ee>"),u:A.a1("y<e>"),h:A.a1("y<J>"),w:A.a1("i"),o:A.a1("kz<wR>"),q:A.a1("nR"),e:A.a1("B"),v:A.a1("~")};(function constants(){var x=a.makeConstList
D.aSW=new A.t("\u0628\u0646\u062f\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u0628\u0648\u0635\u0644\u0629\u2026",null,F.ai,null,null,null,null,null,null,null,null)
D.ZV=new A.dV(C.W,null,null,D.aSW,null)
D.a1J=new A.I(1,1,0.4196078431372549,0.4196078431372549,C.k)
D.a5w=new A.bm(3e6)
D.aNQ=new A.r(!0,C.a8,null,null,null,null,13,null,null,null,null,null,1.7,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUY=new A.t("\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u0634 \u0645\u062a\u0627\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u0623\u0648 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647. \u062d\u0637 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0648\u062c\u0651\u0647 \u062d\u0631\u0641 \xab\u0634\xbb (\u0627\u0644\u0634\u0645\u0627\u0644) \u0646\u0627\u062d\u064a\u0629 \u0627\u0644\u0634\u0645\u0627\u0644 \u2014 \u062a\u0642\u062f\u0631 \u062a\u0639\u0631\u0641\u0647 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062e\u0631\u0627\u0626\u0637 \u0623\u0648 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u2014 \u0648\u0627\u0644\u0633\u0647\u0645 \u0627\u0644\u062f\u0647\u0628\u064a \u0647\u064a\u0628\u0642\u0649 \u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629.",null,D.aNQ,null,null,null,null,null,null,null,null)
D.a83=new E.cT(D.aUY,C.ah,C.ay,null,!1,null)
D.aae=new A.a4(K.Aj,null,C.q,null,null,null)
D.abo=new A.a4(C.rY,null,null,null,null,null)
D.acm=new A.a4(C.kl,null,C.a8,null,null,null)
D.agW=x(["\u0627\u0644\u0634\u0645\u0627\u0644","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u0634\u0631\u0642","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u062c\u0646\u0648\u0628","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u063a\u0631\u0628\u064a","\u0627\u0644\u063a\u0631\u0628","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u063a\u0631\u0628\u064a"],A.a1("y<i>"))
D.au7=new A.cH([0,"\u0634",90,"\u0642",180,"\u062c",270,"\u063a"],A.a1("cH<v,i>"))
D.a8P=new A.a3(62839,"MaterialIcons",null,!1)
D.abF=new A.a4(D.a8P,34,C.i,null,null,null)
D.ay4=new A.qJ(null,0,null,null,null,null,D.abF,null)
D.SF=new A.G(290,290)
D.aLc=new A.r(!0,C.a8,null,null,null,null,13,null,null,null,null,null,1.8,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQx=new A.t("\u0646\u0635\u064a\u062d\u0629: \u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0628\u0639\u064a\u062f \u0639\u0646 \u0627\u0644\u062d\u062f\u064a\u062f \u0648\u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633 \u0648\u062c\u0631\u0627\u0628 \u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633. \u0644\u0648 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0645\u0634 \u062b\u0627\u0628\u062a \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0641\u064a \u0634\u0643\u0644 \u0631\u0642\u0645 8 \u0643\u0627\u0645 \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u062a\u062a\u0638\u0628\u0637.",null,F.ai,C.ae,null,null,null,null,null,null,null)
D.aR2=new A.t("\u0634\u063a\u0651\u0644 \u0627\u0644\u0628\u0648\u0635\u0644\u0629",null,null,null,null,null,null,null,null,null,null)
D.aUj=new A.t("\u0645\u062f\u064a\u0646\u0629 \u062a\u0627\u0646\u064a\u0629",null,C.ef,null,null,null,null,null,null,null,null)
D.a8N=new A.a3(62812,"MaterialIcons",null,!1)
D.b2o=new B.S6(D.a8N,"\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u062d\u062a\u0627\u062c\u0629 \u0645\u0639\u0627\u064a\u0631\u0629: \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0639\u0644\u0649 \u0634\u0643\u0644 8 \u0641\u064a \u0627\u0644\u0647\u0648\u0627 \u0643\u0627\u0645 \u0645\u0631\u0629",null)
D.a9Y=new A.a3(985111,"MaterialIcons",null,!1)
D.b2p=new B.S6(D.a9Y,"\u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0641\u0631\u0648\u062f (\u0645\u0633\u0637\u0651\u062d \u0632\u064a \u0627\u0644\u0635\u064a\u0646\u064a\u0629) \u0639\u0634\u0627\u0646 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u064a\u0628\u0642\u0649 \u0645\u0638\u0628\u0648\u0637",null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c5X","bIU",()=>A.bva())})()};
(a=>{a["lvO7EwLhJNdmT0CpXBV5Tb/gnCU="]=a.current})($__dart_deferred_initializers__);