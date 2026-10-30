((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,B={
C_(d){var x,w,v
if(d==null)return null
try{x=A.dg(d)
w=isNaN(x)?null:x
return w}catch(v){return null}},
atO:function atO(d){var _=this
_.a=d
_.d=_.c=_.b=null
_.r=_.f=_.e=!1
_.w=null},
atQ:function atQ(d){this.a=d},
atR:function atR(d){this.a=d},
atP:function atP(d){this.a=d},
bKi(d,e){var x=d*3.141592653589793/180,w=(39.8262-e)*3.141592653589793/180
return B.Bc(Math.atan2(Math.sin(w)*Math.cos(0.37389315900848524),Math.cos(x)*Math.sin(0.37389315900848524)-Math.sin(x)*Math.cos(0.37389315900848524)*Math.cos(w))*180/3.141592653589793)},
Bc(d){var x=C.d.af(d,360)
return x<0?x+360:x},
bKE(d,e){var x=B.Bc(d-e)
return x>=180?x-360:x},
c2m(d){var x,w,v,u,t,s=d.length
if(s<2)return 0
for(x=0,w=0,v=0;v<d.length;d.length===s||(0,A.B)(d),++v){u=d[v]*3.141592653589793/180
x+=Math.cos(u)
w+=Math.sin(u)}t=Math.sqrt(x*x+w*w)/d.length
if(t>=1)return 0
if(t<=1e-9)return 180
return Math.sqrt(-2*Math.log(t))*180/3.141592653589793},
aAc:function aAc(d){this.a=d
this.c=this.b=null},
xd:function xd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUF(){return new B.uT(null)},
uT:function uT(d){this.a=d},
Up:function Up(d,e,f,g,h,i,j){var _=this
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
bex:function bex(d){this.a=d},
bew:function bew(d){this.a=d},
bes:function bes(){},
bet:function bet(d){this.a=d},
ber:function ber(){},
bem:function bem(d){this.a=d},
ben:function ben(d){this.a=d},
beo:function beo(d){this.a=d},
bep:function bep(d,e){this.a=d
this.b=e},
beq:function beq(d){this.a=d},
beu:function beu(d,e){this.a=d
this.b=e},
bev:function bev(d){this.a=d},
T4:function T4(d,e,f){this.c=d
this.d=e
this.a=f},
ag3:function ag3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alj:function alj(d){this.a=d},
aen:function aen(d,e){this.b=d
this.a=e}},D,I,K,L,G,M,N,E,F
J=c[1]
A=c[0]
C=c[2]
H=c[15]
B=a.updateHolder(c[5],B)
D=c[32]
I=c[12]
K=c[35]
L=c[29]
G=c[34]
M=c[33]
N=c[30]
E=c[16]
F=c[18]
B.atO.prototype={
O2(){var x=0,w=A.n(y.e),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$O2=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
n=b.G
r=A.jr(n.DeviceOrientationEvent)
if(r==null||r.requestPermission==null){n=A.jr(n.DeviceOrientationEvent)
v=n!=null
x=1
break}x=7
return A.d(A.dY(A.co(A.ce(r,"requestPermission",null,null,null,null)),y.w),$async$O2)
case 7:q=e
p=q==="granted"
if(p)s.Hs()
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
return A.m($async$O2,w)},
a95(){var x,w,v,u,t,s
try{u=b.G
x=A.jr(u.screen)
t=x
w=A.jr(t==null?null:t.orientation)
t=w
v=B.C_(t==null?null:t.angle)
if(v!=null)return v
u=B.C_(u.orientation)
if(u==null)u=0
return u}catch(s){return 0}},
aum(d){var x,w,v,u,t,s,r,q,p,o,n=this,m="deviceorientationabsolute"
if(n.f)return
try{x=B.C_(d.beta)
w=B.C_(d.gamma)
v=B.C_(d.webkitCompassHeading)
if(v!=null){n.w=new A.b6(Date.now(),0,!1)
n.a.D(0,new B.xd(B.Bc(v+n.a95()),B.C_(d.webkitCompassAccuracy),x,w))
return}u=B.C_(d.alpha)
if(u==null)return
r=A.W(d.type)
t=r==null?null:r
if(!J.c(t,m)){q=A.hr(d.absolute)
if(q==null)q=null
p=q===!0}else p=!0
s=p
if(!s)return
if(J.c(t,m))n.r=!0
else if(n.r)return
n.w=new A.b6(Date.now(),0,!1)
n.a.D(0,new B.xd(B.Bc(360-u+n.a95()),null,x,w))}catch(o){}},
mM(){var x,w,v,u=this,t=null,s="addEventListener"
if(u.e||u.f)return
u.e=!0
u.Hs()
x=u.c=A.bI0(new B.atQ(u))
w=b.G
v=A.jr(w.document)
if(v!=null)A.ce(v,s,"visibilitychange",x,t,t)
A.ce(w,s,"pageshow",x,t,t)
u.d=A.mq(C.kp,new B.atR(u))},
Hs(){var x,w,v=this,u=null,t="addEventListener"
if(v.f)return
v.a3F()
x=v.b=A.f1(new B.atP(v))
w=b.G
if("ondeviceorientationabsolute" in w)A.ce(w,t,"deviceorientationabsolute",x,u,u)
A.ce(w,t,"deviceorientation",x,u,u)},
a3F(){var x,w=null,v="removeEventListener",u=this.b
if(u==null)return
x=b.G
A.ce(x,v,"deviceorientationabsolute",u,w,w)
A.ce(x,v,"deviceorientation",u,w,w)
this.b=null},
l(){var x,w,v,u=this,t=null,s="removeEventListener"
if(u.f)return
u.f=!0
x=u.d
if(x!=null)x.aG()
u.a3F()
w=u.c
if(w!=null){x=b.G
v=A.jr(x.document)
if(v!=null)A.ce(v,s,"visibilitychange",w,t,t)
A.ce(x,s,"pageshow",w,t,t)}u.a.bh()}}
B.aAc.prototype={}
B.xd.prototype={}
B.uT.prototype={
V(){var x=$.bME().a,w=x[1],v=x[2]
x=x[0]
return new B.Up(w,v,x+" (\u062a\u0642\u0631\u064a\u0628\u064a)",new B.atO(new A.kJ(null,null,y.o)),new B.aAc(0.2),A.a([],y.h),new A.b6(A.ki(0,0,!1),0,!1))}}
B.Up.prototype={
ab(){var x,w,v,u=this
u.ar()
x=A.jr(b.G.DeviceOrientationEvent)
u.ch=x!=null&&x.requestPermission!=null
w=u.w
v=w.a
u.z=new A.eD(v,A.w(v).i("eD<1>")).ka(u.gaFN())
w.mM()
u.cx=A.cC(D.a6Y,new B.bex(u))
u.aIb()},
l(){var x=this,w=x.cx
if(w!=null)w.aG()
w=x.cy
if(w!=null)w.aG()
w=x.z
if(w!=null)w.aG()
x.w.l()
x.aq()},
aFO(d){var x,w,v,u,t,s,r,q,p,o=this
if(o.c==null)return
x=o.y
w=d.a
x.push(w)
if(x.length>15)C.b.kd(x,0)
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
w=u}else v=s}w=B.Bc(Math.atan2(v,w)*180/3.141592653589793)
w.toString
q=Math.abs(B.bKE(B.bKi(o.d,o.e),w))<=5
if(q&&!o.CW)A.buf(80)
v=o.Q
o.Q=w
o.CW=q
o.as=d.b
w=d.c
s=d.d
if(!(w!=null&&Math.abs(w)>35))w=s!=null&&Math.abs(s)>35
else w=!0
o.at=w
o.ax=x.length>=10&&B.c2m(x)>12
o.ay=o.ch=!1
p=new A.b6(Date.now(),0,!1)
if(v==null||p.dJ(o.db).a>33e3){o.db=p
x=o.cy
if(x!=null)x.aG()
o.cy=null
o.t(new B.bes())}else if(o.cy==null)o.cy=A.cC(C.zD,new B.bet(o))},
Hb(){var x=0,w=A.n(y.v),v,u=this,t,s
var $async$Hb=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
x=3
return A.d(t.O2(),$async$Hb)
case 3:s=e
if(u.c==null){x=1
break}if(s){u.t(new B.bem(u))
t.mM()}else{u.t(new B.ben(u))
u.c.U(y.q).f.bd(A.bR(null,null,null,null,null,C.l,null,A.o("\u0645\u0646 \u063a\u064a\u0631 \u0625\u0630\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0647\u0646\u0648\u0631\u064a\u0643 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0628\u0627\u0644\u062f\u0631\u062c\u0627\u062a \u0628\u0633",null,null,null,null,null,null,null,null),null,C.D,null,null,null,null,null,null,null,null,null,null))}case 1:return A.l(v,w)}})
return A.m($async$Hb,w)},
xP(d){return this.aEa(d)},
aIb(){return this.xP(!1)},
aEa(d){var x=0,w=A.n(y.v),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$xP=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:r.t(new B.beo(r))
u=4
x=d?7:9
break
case 7:x=10
return A.d(A.vN(!0),$async$xP)
case 10:x=8
break
case 9:x=11
return A.d(A.A9(),$async$xP)
case 11:case 8:q=f
if(r.c==null||q==null){s=[1]
x=5
break}r.t(new B.bep(r,q))
s.push(6)
x=5
break
case 4:u=3
n=t.pop()
o=r.c
if(o!=null&&d)o.U(y.q).f.bd(A.bR(null,null,null,null,null,C.l,null,A.o("\u0645\u0642\u062f\u0631\u0646\u0627\u0634 \u0646\u062d\u062f\u062f \u0645\u0643\u0627\u0646\u0643 \u2014 \u0627\u062e\u062a\u0627\u0631 \u0645\u062f\u064a\u0646\u062a\u0643 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629",null,null,null,null,null,null,null,null),null,C.D,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.t(new B.beq(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$xP,w)},
J9(){var x=0,w=A.n(y.v),v,u=this,t,s
var $async$J9=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.d(I.bK8(s),$async$J9)
case 3:t=e
if(t==null||u.c==null){x=1
break}u.t(new B.beu(u,t))
case 1:return A.l(v,w)}})
return A.m($async$J9,w)},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.bKi(p.d,p.e),m=p.Q,l=m==null,k=!l,j=k?B.bKE(n,m):0,i=k&&p.CW,h=p.as
if(h!=null)x=h<0||h>25
else x=!1
h=y.u
w=A.a([D.abS,C.aq,A.aS(A.o(p.f,o,o,o,o,F.aZ,o,o,o),1)],h)
if(p.r)w.push(M.oW)
else w.push(A.cJ(o,o,o,o,D.aea,o,o,new B.bev(p),o,o,o,"\u062d\u062f\u0651\u062f \u0645\u0643\u0627\u0646\u064a",o))
w.push(A.bO(D.aWZ,o,o,o,p.gaHG(),o,o))
w=A.al(w,C.j,C.f,C.h,0,o)
v=l?0:m
v=A.cY(A.bu(new B.ag3(v,k?j:n,i,o),290,290),o,o)
u=A.o("\u0627\u0644\u0642\u0628\u0644\u0629 \u0639\u0644\u0649 "+(E.aZ(C.e.af(C.d.an(B.Bc(n)),360))+"\xb0")+" \u0645\u0646 \u0627\u0644\u0634\u0645\u0627\u0644",o,o,o,o,N.U9,C.ac,o,o)
t=D.aiM[C.e.af(C.d.bc(B.Bc(n)+22.5,45),8)]
s=p.d
r=p.e
q=Math.pow(Math.sin((21.4225-s)*3.141592653589793/180/2),2)+Math.cos(s*3.141592653589793/180)*Math.cos(0.37389315900848524)*Math.pow(Math.sin((39.8262-r)*3.141592653589793/180/2),2)
t=A.a([new E.cT(w,C.ad,C.ay,o,!1,o),C.P,v,C.ar,u,A.o("\u0646\u0627\u062d\u064a\u0629 "+t+" \u2022 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0644\u0643\u0639\u0628\u0629 \u062d\u0648\u0627\u0644\u064a "+E.aZ(C.d.an(12742*Math.atan2(Math.sqrt(q),Math.sqrt(1-q))))+" \u0643\u0645",o,o,o,o,F.ag,C.ac,o,o)],h)
if(k){w=E.aZ(C.e.af(C.d.an(B.Bc(m)),360))
v=p.as
v=v!=null&&v>=0?" \u2022 \u062f\u0642\u0629 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \xb1"+E.aZ(C.d.an(v))+"\xb0":""
t.push(A.o("\u0627\u062a\u062c\u0627\u0647 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u062f\u0644\u0648\u0642\u062a\u064a "+(w+"\xb0")+v,o,o,o,o,D.aNA,C.ac,o,o))}t.push(C.aL)
if(p.ch&&l)C.b.E(t,A.a([A.jE(D.ad7,D.aTz,p.gasu(),A.jF(C.q,C.a4,o,o,o,o,o)),C.R],h))
if(k){l=i?"aligned":"turn "+C.d.an(j)
if(i)h="\u062a\u0645\u0627\u0645! \u0625\u0646\u062a \u062f\u0644\u0648\u0642\u062a\u064a \u0645\u062a\u0648\u062c\u0651\u0647 \u0644\u0644\u0642\u0628\u0644\u0629 \u2713"
else{h=Math.abs(j)
h=j>0?"\u0644\u0641\u0651 \u064a\u0645\u064a\u0646 "+E.aZ(C.d.an(h))+"\xb0":"\u0644\u0641\u0651 \u0634\u0645\u0627\u0644 "+E.aZ(C.d.an(h))+"\xb0"}t.push(A.bC(o,o,o,new E.cT(A.o(h,o,o,o,o,A.cB(o,o,i?G.bY:C.i,o,o,o,o,o,o,o,o,16,o,o,C.a2,o,o,!0,o,o,o,o,o,o,o,o),C.ac,o,o),C.ad,C.ay,o,i,o),!1,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,C.I,o))}else if(p.ay&&!p.ch)t.push(D.a9A)
else if(!p.ch)t.push(D.a0b)
if(k&&p.at)t.push(D.b5k)
if(k)l=x||p.ax
else l=!1
if(l)t.push(D.b5j)
t.push(C.R)
t.push(D.aSY)
return H.vC(o,t,"\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629")}}
B.T4.prototype={
C(d){var x=null
return new E.cT(A.al(A.a([A.c7(this.c,C.q,x,22),C.aY,A.aS(A.o(this.d,x,x,x,x,G.Ud,x,x,x),1)],y.u),C.j,C.f,C.h,0,x),C.ad,C.ay,x,!1,x)}}
B.ag3.prototype={
C(d){var x,w=null,v=this.e,u=v?G.bY:C.q,t=A.ab4(-this.c*3.141592653589793/180,A.fA(w,w,w,new B.alj(w),D.Tp)),s=this.d,r=C.d.an(s)
r=A.bC(w,w,w,A.ab4(s*3.141592653589793/180,A.fA(w,w,w,new B.aen(u,w),D.Tp)),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"qibla-arrow "+r,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,C.I,w)
s=v?u:C.d6
x=A.cX(u,2)
return A.hm(C.V,A.a([t,r,D.aAc,A.aA(w,A.c7(C.eA,v?C.a4:C.q,w,w),C.m,w,w,new A.as(s,w,x,w,w,w,C.cx),w,54,w,w,w,w,54)],y.u),C.l,C.cb,w)}}
B.alj.prototype={
aJ(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=e.jz(C.n),h=e.gfv()/2-18
$.ad()
x=A.b_()
x.r=C.i.bJ(0.06).gq()
d.fR(i,h,x)
x=A.b_()
x.b=C.bk
x.r=L.hi.gq()
x.c=2
d.fR(i,h,x)
for(x=d.a,w=i.a,v=i.b,u=0;u<360;u+=10){t=(u-90)*3.141592653589793/180
s=C.e.af(u,90)===0
r=Math.cos(t)
q=Math.sin(t)
p=Math.cos(t)
o=Math.sin(t)
n=h-(s?14:7)
m=new A.on(C.d4,C.cY,C.fS,C.i3,C.e4)
m.r=(s?C.i:C.eU).gq()
m.c=s?2.5:1.2
l=m.e1()
x.drawLine.apply(x,[w+r*h,v+q*h,w+p*n,v+o*n,l])
l.delete()}for(x=D.aw4.gdH(),x=x.ga0(x),r=h-28;x.u();){q=x.gL()
p=q.a
t=(p-90)*3.141592653589793/180
q=q.b
p=p===0?D.a3_:C.a6
k=new A.zL(new A.f_(q,j,j,C.bd,j,j,j,j,j,j,new A.t(!0,p,j,j,j,j,16,C.a3,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)),C.y,C.aN,new A.iV(1),j,j,j,j,C.be,j)
k.zn()
q=Math.cos(t)
p=Math.sin(t)
o=k.b
k.aJ(d,new A.q(w+q*r-o.c/2,v+p*r-o.a.c.gci()/2))}},
eQ(d){return!1}}
B.aen.prototype={
aJ(d,e){var x,w,v,u,t,s=e.jz(C.n),r=e.gfv()/2-18,q=s.a_(0,C.l3.al(0,r+12)),p=$.ad(),o=A.b_(),n=this.b
o.r=n.gq()
x=s.a_(0,C.l3.al(0,34))
w=s.a_(0,C.l3.al(0,r-6))
v=A.b_()
v.r=n.gq()
v.c=5
v.d=C.jv
d.lp(x,w,v)
u=s.a_(0,C.l3.al(0,r-14))
t=new A.cb(p.r,C.ab,null,null,A.a([],y.a))
t.aF(new A.fl(q.a,q.b))
t.aF(new A.cU(u.a_(0,C.f8.al(0,11)).a,u.a_(0,C.f8.al(0,11)).b))
t.aF(new A.cU(u.aj(0,C.f8.al(0,11)).a,u.aj(0,C.f8.al(0,11)).b))
t.aF(new A.lY())
d.fD(t,o)},
eQ(d){return!d.b.k(0,this.b)}}
var z=a.updateTypes(["ab<~>()","~(xd)"])
B.atQ.prototype={
$0(){var x,w,v=this.a
if(v.f)return
x=A.jr(b.G.document)
w=A.W(x==null?null:x.visibilityState)
if((w==null?null:w)==="visible")v.Hs()},
$S:15}
B.atR.prototype={
$1(d){var x=this.a,w=x.w
if(w!=null&&new A.b6(Date.now(),0,!1).dJ(w).a>3e6){x.w=new A.b6(Date.now(),0,!1)
x.Hs()}},
$S:40}
B.atP.prototype={
$1(d){return this.a.aum(d)},
$S:3}
B.bex.prototype={
$0(){var x=this.a
if(x.c!=null&&x.Q==null)x.t(new B.bew(x))},
$S:0}
B.bew.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.bes.prototype={
$0(){},
$S:0}
B.bet.prototype={
$0(){var x=this.a
x.cy=null
x.db=new A.b6(Date.now(),0,!1)
if(x.c!=null)x.t(new B.ber())},
$S:0}
B.ber.prototype={
$0(){},
$S:0}
B.bem.prototype={
$0(){return this.a.ch=!1},
$S:0}
B.ben.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.beo.prototype={
$0(){return this.a.r=!0},
$S:0}
B.bep.prototype={
$0(){var x=this.a,w=this.b
x.d=w.a
x.e=w.b
x.f="\u0645\u0643\u0627\u0646\u0643 \u0627\u0644\u062d\u0627\u0644\u064a"},
$S:0}
B.beq.prototype={
$0(){return this.a.r=!1},
$S:0}
B.beu.prototype={
$0(){var x=this.a,w=this.b
x.d=w.b
x.e=w.c
x.f=w.gly()},
$S:0}
B.bev.prototype={
$0(){return this.a.xP(!0)},
$S:0};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Up.prototype,"gaFN","aFO",1)
w(v,"gasu","Hb",0)
w(v,"gaHG","J9",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.atO,B.aAc,B.xd])
x(A.ke,[B.atQ,B.bex,B.bew,B.bes,B.bet,B.ber,B.bem,B.ben,B.beo,B.bep,B.beq,B.beu,B.bev])
x(A.hK,[B.atR,B.atP])
w(B.uT,A.P)
w(B.Up,A.S)
x(A.a6,[B.T4,B.ag3])
x(A.C8,[B.alj,B.aen])})()
A.o4(b.typeUniverse,JSON.parse('{"uT":{"P":[],"e":[]},"Up":{"S":["uT"]},"T4":{"a6":[],"e":[]},"ag3":{"a6":[],"e":[]},"alj":{"ar":[]},"aen":{"ar":[]}}'))
var y={a:A.a1("y<eg>"),u:A.a1("y<e>"),h:A.a1("y<J>"),w:A.a1("h"),o:A.a1("kJ<xd>"),q:A.a1("o1"),e:A.a1("A"),v:A.a1("~")};(function constants(){var x=a.makeConstList
D.aVz=new A.r("\u0628\u0646\u062f\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u0628\u0648\u0635\u0644\u0629\u2026",null,F.ag,null,null,null,null,null,null,null,null)
D.a0b=new A.dT(C.V,null,null,D.aVz,null)
D.a3_=new A.H(1,1,0.4196078431372549,0.4196078431372549,C.k)
D.a6Y=new A.bo(3e6)
D.aQg=new A.t(!0,C.a6,null,null,null,null,13,null,null,null,null,null,1.7,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXE=new A.r("\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u0634 \u0645\u062a\u0627\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u0623\u0648 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647. \u062d\u0637 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0648\u062c\u0651\u0647 \u062d\u0631\u0641 \xab\u0634\xbb (\u0627\u0644\u0634\u0645\u0627\u0644) \u0646\u0627\u062d\u064a\u0629 \u0627\u0644\u0634\u0645\u0627\u0644 \u2014 \u062a\u0642\u062f\u0631 \u062a\u0639\u0631\u0641\u0647 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062e\u0631\u0627\u0626\u0637 \u0623\u0648 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u2014 \u0648\u0627\u0644\u0633\u0647\u0645 \u0627\u0644\u062f\u0647\u0628\u064a \u0647\u064a\u0628\u0642\u0649 \u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629.",null,D.aQg,null,null,null,null,null,null,null,null)
D.a9A=new E.cT(D.aXE,C.ad,C.ay,null,!1,null)
D.abS=new A.a0(K.B2,null,C.q,null,null,null)
D.ad7=new A.a0(C.tx,null,null,null,null,null)
D.aea=new A.a0(C.iV,null,C.a6,null,null,null)
D.aiM=x(["\u0627\u0644\u0634\u0645\u0627\u0644","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u0634\u0631\u0642","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u062c\u0646\u0648\u0628","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u063a\u0631\u0628\u064a","\u0627\u0644\u063a\u0631\u0628","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u063a\u0631\u0628\u064a"],A.a1("y<h>"))
D.aw4=new A.cE([0,"\u0634",90,"\u0642",180,"\u062c",270,"\u063a"],A.a1("cE<v,h>"))
D.adp=new A.a0(C.AK,34,C.i,null,null,null)
D.aAc=new A.qZ(null,0,null,null,null,null,D.adp,null)
D.Tp=new A.G(290,290)
D.aNA=new A.t(!0,C.a6,null,null,null,null,13,null,null,null,null,null,1.8,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSY=new A.r("\u0646\u0635\u064a\u062d\u0629: \u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0628\u0639\u064a\u062f \u0639\u0646 \u0627\u0644\u062d\u062f\u064a\u062f \u0648\u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633 \u0648\u062c\u0631\u0627\u0628 \u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633. \u0644\u0648 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0645\u0634 \u062b\u0627\u0628\u062a \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0641\u064a \u0634\u0643\u0644 \u0631\u0642\u0645 8 \u0643\u0627\u0645 \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u062a\u062a\u0638\u0628\u0637.",null,F.ag,C.ac,null,null,null,null,null,null,null)
D.aTz=new A.r("\u0634\u063a\u0651\u0644 \u0627\u0644\u0628\u0648\u0635\u0644\u0629",null,null,null,null,null,null,null,null,null,null)
D.aWZ=new A.r("\u0645\u062f\u064a\u0646\u0629 \u062a\u0627\u0646\u064a\u0629",null,C.el,null,null,null,null,null,null,null,null)
D.aam=new A.a3(62812,"MaterialIcons",null,!1)
D.b5j=new B.T4(D.aam,"\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u062d\u062a\u0627\u062c\u0629 \u0645\u0639\u0627\u064a\u0631\u0629: \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0639\u0644\u0649 \u0634\u0643\u0644 8 \u0641\u064a \u0627\u0644\u0647\u0648\u0627 \u0643\u0627\u0645 \u0645\u0631\u0629",null)
D.aby=new A.a3(985111,"MaterialIcons",null,!1)
D.b5k=new B.T4(D.aby,"\u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0641\u0631\u0648\u062f (\u0645\u0633\u0637\u0651\u062d \u0632\u064a \u0627\u0644\u0635\u064a\u0646\u064a\u0629) \u0639\u0634\u0627\u0646 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u064a\u0628\u0642\u0649 \u0645\u0638\u0628\u0648\u0637",null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"caa","bME",()=>A.byt())})()};
(a=>{a["rFuJ/1lFRAbaHeSHhmAzZglSAks="]=a.current})($__dart_deferred_initializers__);