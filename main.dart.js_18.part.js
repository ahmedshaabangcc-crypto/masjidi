((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,B={
CF(d){var x,w,v
if(d==null)return null
try{x=A.dm(d)
w=isNaN(x)?null:x
return w}catch(v){return null}},
avj:function avj(d){var _=this
_.a=d
_.d=_.c=_.b=null
_.r=_.f=_.e=!1
_.w=null},
avl:function avl(d){this.a=d},
avm:function avm(d){this.a=d},
avk:function avk(d){this.a=d},
bNO(d,e){var x=d*3.141592653589793/180,w=(39.8262-e)*3.141592653589793/180
return B.BP(Math.atan2(Math.sin(w)*Math.cos(0.37389315900848524),Math.cos(x)*Math.sin(0.37389315900848524)-Math.sin(x)*Math.cos(0.37389315900848524)*Math.cos(w))*180/3.141592653589793)},
BP(d){var x=C.d.ah(d,360)
return x<0?x+360:x},
bO9(d,e){var x=B.BP(d-e)
return x>=180?x-360:x},
c61(d){var x,w,v,u,t,s=d.length
if(s<2)return 0
for(x=0,w=0,v=0;v<d.length;d.length===s||(0,A.B)(d),++v){u=d[v]*3.141592653589793/180
x+=Math.cos(u)
w+=Math.sin(u)}t=Math.sqrt(x*x+w*w)/d.length
if(t>=1)return 0
if(t<=1e-9)return 180
return Math.sqrt(-2*Math.log(t))*180/3.141592653589793},
aBP:function aBP(d){this.a=d
this.c=this.b=null},
xJ:function xJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bYg(){return new B.ve(null)},
ve:function ve(d){this.a=d},
Vj:function Vj(d,e,f,g,h,i,j){var _=this
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
bhD:function bhD(d){this.a=d},
bhC:function bhC(d){this.a=d},
bhy:function bhy(){},
bhz:function bhz(d){this.a=d},
bhx:function bhx(){},
bhs:function bhs(d){this.a=d},
bht:function bht(d){this.a=d},
bhu:function bhu(d){this.a=d},
bhv:function bhv(d,e){this.a=d
this.b=e},
bhw:function bhw(d){this.a=d},
bhA:function bhA(d,e){this.a=d
this.b=e},
bhB:function bhB(d){this.a=d},
TZ:function TZ(d,e,f){this.c=d
this.d=e
this.a=f},
ahc:function ahc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amv:function amv(d){this.a=d},
afv:function afv(d,e){this.b=d
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
B.avj.prototype={
Ow(){var x=0,w=A.o(y.e),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Ow=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
n=b.G
r=A.jE(n.DeviceOrientationEvent)
if(r==null||r.requestPermission==null){n=A.jE(n.DeviceOrientationEvent)
v=n!=null
x=1
break}x=7
return A.d(A.e3(A.cs(A.ch(r,"requestPermission",null,null,null,null)),y.w),$async$Ow)
case 7:q=e
p=q==="granted"
if(p)s.HM()
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
return A.n($async$Ow,w)},
a9Q(){var x,w,v,u,t,s
try{u=b.G
x=A.jE(u.screen)
t=x
w=A.jE(t==null?null:t.orientation)
t=w
v=B.CF(t==null?null:t.angle)
if(v!=null)return v
u=B.CF(u.orientation)
if(u==null)u=0
return u}catch(s){return 0}},
avp(d){var x,w,v,u,t,s,r,q,p,o,n=this,m="deviceorientationabsolute"
if(n.f)return
try{x=B.CF(d.beta)
w=B.CF(d.gamma)
v=B.CF(d.webkitCompassHeading)
if(v!=null){n.w=new A.b2(Date.now(),0,!1)
n.a.D(0,new B.xJ(B.BP(v+n.a9Q()),B.CF(d.webkitCompassAccuracy),x,w))
return}u=B.CF(d.alpha)
if(u==null)return
r=A.O(d.type)
t=r==null?null:r
if(!J.c(t,m)){q=A.hz(d.absolute)
if(q==null)q=null
p=q===!0}else p=!0
s=p
if(!s)return
if(J.c(t,m))n.r=!0
else if(n.r)return
n.w=new A.b2(Date.now(),0,!1)
n.a.D(0,new B.xJ(B.BP(360-u+n.a9Q()),null,x,w))}catch(o){}},
mS(){var x,w,v,u=this,t=null,s="addEventListener"
if(u.e||u.f)return
u.e=!0
u.HM()
x=u.c=A.bLv(new B.avl(u))
w=b.G
v=A.jE(w.document)
if(v!=null)A.ch(v,s,"visibilitychange",x,t,t)
A.ch(w,s,"pageshow",x,t,t)
u.d=A.kO(C.kC,new B.avm(u))},
HM(){var x,w,v=this,u=null,t="addEventListener"
if(v.f)return
v.a4g()
x=v.b=A.f7(new B.avk(v))
w=b.G
if("ondeviceorientationabsolute" in w)A.ch(w,t,"deviceorientationabsolute",x,u,u)
A.ch(w,t,"deviceorientation",x,u,u)},
a4g(){var x,w=null,v="removeEventListener",u=this.b
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
u.a4g()
w=u.c
if(w!=null){x=b.G
v=A.jE(x.document)
if(v!=null)A.ch(v,s,"visibilitychange",w,t,t)
A.ch(x,s,"pageshow",w,t,t)}u.a.bf()}}
B.aBP.prototype={}
B.xJ.prototype={}
B.ve.prototype={
V(){var x=$.bQb().a,w=x[1],v=x[2]
x=x[0]
return new B.Vj(w,v,x+" (\u062a\u0642\u0631\u064a\u0628\u064a)",new B.avj(new A.kS(null,null,y.o)),new B.aBP(0.2),A.a([],y.h),new A.b2(A.kr(0,0,!1),0,!1))}}
B.Vj.prototype={
aa(){var x,w,v,u=this
u.ao()
x=A.jE(b.G.DeviceOrientationEvent)
u.ch=x!=null&&x.requestPermission!=null
w=u.w
v=w.a
u.z=new A.eK(v,A.w(v).i("eK<1>")).kj(u.gaH2())
w.mS()
u.cx=A.cF(D.a8n,new B.bhD(u))
u.aJz()},
l(){var x=this,w=x.cx
if(w!=null)w.aE()
w=x.cy
if(w!=null)w.aE()
w=x.z
if(w!=null)w.aE()
x.w.l()
x.aq()},
aH3(d){var x,w,v,u,t,s,r,q,p,o=this
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
w=u}else v=s}w=B.BP(Math.atan2(v,w)*180/3.141592653589793)
w.toString
q=Math.abs(B.bO9(B.bNO(o.d,o.e),w))<=5
if(q&&!o.CW)A.bxA(80)
v=o.Q
o.Q=w
o.CW=q
o.as=d.b
w=d.c
s=d.d
if(!(w!=null&&Math.abs(w)>35))w=s!=null&&Math.abs(s)>35
else w=!0
o.at=w
o.ax=x.length>=10&&B.c61(x)>12
o.ay=o.ch=!1
p=new A.b2(Date.now(),0,!1)
if(v==null||p.dG(o.db).a>33e3){o.db=p
x=o.cy
if(x!=null)x.aE()
o.cy=null
o.t(new B.bhy())}else if(o.cy==null)o.cy=A.cF(C.Ag,new B.bhz(o))},
Hu(){var x=0,w=A.o(y.v),v,u=this,t,s
var $async$Hu=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:t=u.w
x=3
return A.d(t.Ow(),$async$Hu)
case 3:s=e
if(u.c==null){x=1
break}if(s){u.t(new B.bhs(u))
t.mS()}else{u.t(new B.bht(u))
u.c.R(y.q).f.aO(A.bs(null,null,null,null,null,C.k,null,A.i("\u0645\u0646 \u063a\u064a\u0631 \u0625\u0630\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0647\u0646\u0648\u0631\u064a\u0643 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0628\u0627\u0644\u062f\u0631\u062c\u0627\u062a \u0628\u0633",null,null,null,null,null,null,null,null,null),null,C.z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.m(v,w)}})
return A.n($async$Hu,w)},
y6(d){return this.aFp(d)},
aJz(){return this.y6(!1)},
aFp(d){var x=0,w=A.o(y.v),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$y6=A.k(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:r.t(new B.bhu(r))
u=4
x=d?7:9
break
case 7:x=10
return A.d(A.wb(!0),$async$y6)
case 10:x=8
break
case 9:x=11
return A.d(A.AK(),$async$y6)
case 11:case 8:q=f
if(r.c==null||q==null){s=[1]
x=5
break}r.t(new B.bhv(r,q))
s.push(6)
x=5
break
case 4:u=3
n=t.pop()
o=r.c
if(o!=null&&d)o.R(y.q).f.aO(A.bs(null,null,null,null,null,C.k,null,A.i("\u0645\u0642\u062f\u0631\u0646\u0627\u0634 \u0646\u062d\u062f\u062f \u0645\u0643\u0627\u0646\u0643 \u2014 \u0627\u062e\u062a\u0627\u0631 \u0645\u062f\u064a\u0646\u062a\u0643 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629",null,null,null,null,null,null,null,null,null),null,C.z,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.t(new B.bhw(r))
x=s.pop()
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$y6,w)},
Jt(){var x=0,w=A.o(y.v),v,u=this,t,s
var $async$Jt=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.d(I.bNE(s),$async$Jt)
case 3:t=e
if(t==null||u.c==null){x=1
break}u.t(new B.bhA(u,t))
case 1:return A.m(v,w)}})
return A.n($async$Jt,w)},
A(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.bNO(p.d,p.e),m=p.Q,l=m==null,k=!l,j=k?B.bO9(n,m):0,i=k&&p.CW,h=p.as
if(h!=null)x=h<0||h>25
else x=!1
h=y.u
w=A.a([D.adh,C.ar,A.aQ(A.i(p.f,o,o,o,o,o,F.b_,o,o,o),1)],h)
if(p.r)w.push(M.pl)
else w.push(A.ct(o,o,o,o,D.afz,o,o,new B.bhB(p),o,o,o,"\u062d\u062f\u0651\u062f \u0645\u0643\u0627\u0646\u064a",o))
w.push(A.bH(D.b0O,o,o,o,p.gaIZ(),o,o))
w=A.ai(w,C.j,C.f,C.h,0,o,o)
v=l?0:m
v=A.cQ(A.bl(new B.ahc(v,k?j:n,i,o),290,290),o,o)
u=A.i("\u0627\u0644\u0642\u0628\u0644\u0629 \u0639\u0644\u0649 "+(E.aZ(C.e.ah(C.d.ar(B.BP(n)),360))+"\xb0")+" \u0645\u0646 \u0627\u0644\u0634\u0645\u0627\u0644",o,o,o,o,o,N.Va,C.ad,o,o)
t=D.akq[C.e.ah(C.d.ba(B.BP(n)+22.5,45),8)]
s=p.d
r=p.e
q=Math.pow(Math.sin((21.4225-s)*3.141592653589793/180/2),2)+Math.cos(s*3.141592653589793/180)*Math.cos(0.37389315900848524)*Math.pow(Math.sin((39.8262-r)*3.141592653589793/180/2),2)
t=A.a([new E.cZ(w,C.af,C.aA,o,!1,o),C.U,v,C.aj,u,A.i("\u0646\u0627\u062d\u064a\u0629 "+t+" \u2022 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0644\u0643\u0639\u0628\u0629 \u062d\u0648\u0627\u0644\u064a "+E.aZ(C.d.ar(12742*Math.atan2(Math.sqrt(q),Math.sqrt(1-q))))+" \u0643\u0645",o,o,o,o,o,F.al,C.ad,o,o)],h)
if(k){w=E.aZ(C.e.ah(C.d.ar(B.BP(m)),360))
v=p.as
v=v!=null&&v>=0?" \u2022 \u062f\u0642\u0629 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \xb1"+E.aZ(C.d.ar(v))+"\xb0":""
t.push(A.i("\u0627\u062a\u062c\u0627\u0647 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u062f\u0644\u0648\u0642\u062a\u064a "+(w+"\xb0")+v,o,o,o,o,o,D.aSh,C.ad,o,o))}t.push(C.aJ)
if(p.ch&&l)C.b.E(t,A.a([A.jh(D.aev,o,D.aYj,p.gatu(),A.im(C.q,C.a5,o,o,o,o,o)),C.S],h))
if(k){l=i?"aligned":"turn "+C.d.ar(j)
if(i)h="\u062a\u0645\u0627\u0645! \u0625\u0646\u062a \u062f\u0644\u0648\u0642\u062a\u064a \u0645\u062a\u0648\u062c\u0651\u0647 \u0644\u0644\u0642\u0628\u0644\u0629 \u2713"
else{h=Math.abs(j)
h=j>0?"\u0644\u0641\u0651 \u064a\u0645\u064a\u0646 "+E.aZ(C.d.ar(h))+"\xb0":"\u0644\u0641\u0651 \u0634\u0645\u0627\u0644 "+E.aZ(C.d.ar(h))+"\xb0"}t.push(A.bJ(o,o,o,new E.cZ(A.i(h,o,o,o,o,o,A.cz(o,o,i?G.c5:C.i,o,o,o,o,o,o,o,o,16,o,o,C.a2,o,o,!0,o,o,o,o,o,o,o,o),C.ad,o,o),C.af,C.aA,o,i,o),!1,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,C.I,o))}else if(p.ay&&!p.ch)t.push(D.ab2)
else if(!p.ch)t.push(D.a1m)
if(k&&p.at)t.push(D.bas)
if(k)l=x||p.ax
else l=!1
if(l)t.push(D.bar)
t.push(C.S)
t.push(D.aXG)
return H.w0(o,t,"\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629")}}
B.TZ.prototype={
A(d){var x=null
return new E.cZ(A.ai(A.a([A.c8(this.c,C.q,x,22),C.aV,A.aQ(A.i(this.d,x,x,x,x,x,G.Vd,x,x,x),1)],y.u),C.j,C.f,C.h,0,x,x),C.af,C.aA,x,!1,x)}}
B.ahc.prototype={
A(d){var x,w=null,v=this.e,u=v?G.c5:C.q,t=A.acc(-this.c*3.141592653589793/180,A.fH(w,w,w,new B.amv(w),D.Ur)),s=this.d,r=C.d.ar(s)
r=A.bJ(w,w,w,A.acc(s*3.141592653589793/180,A.fH(w,w,w,new B.afv(u,w),D.Ur)),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"qibla-arrow "+r,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,C.I,w)
s=v?u:C.de
x=A.cT(u,2)
return A.h9(C.W,A.a([t,r,D.aDa,A.au(w,A.c8(C.eD,v?C.a5:C.q,w,w),C.m,w,w,new A.aq(s,w,x,w,w,w,C.cp),w,54,w,w,w,w,54)],y.u),C.k,C.cd,w)}}
B.amv.prototype={
aK(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=e.jF(C.p),h=e.gfA()/2-18
$.af()
x=A.b_()
x.r=C.i.bo(0.06).gq()
d.fW(i,h,x)
x=A.b_()
x.b=C.bo
x.r=L.hp.gq()
x.c=2
d.fW(i,h,x)
for(x=d.a,w=i.a,v=i.b,u=0;u<360;u+=10){t=(u-90)*3.141592653589793/180
s=C.e.ah(u,90)===0
r=Math.cos(t)
q=Math.sin(t)
p=Math.cos(t)
o=Math.sin(t)
n=h-(s?14:7)
m=new A.oD(C.dc,C.d4,C.fZ,C.ia,C.e7)
m.r=(s?C.i:C.eZ).gq()
m.c=s?2.5:1.2
l=m.e4()
x.drawLine.apply(x,[w+r*h,v+q*h,w+p*n,v+o*n,l])
l.delete()}for(x=D.ayQ.gdv(),x=x.ga_(x),r=h-28;x.u();){q=x.gK()
p=q.a
t=(p-90)*3.141592653589793/180
q=q.b
p=p===0?D.a4a:C.a6
k=new A.Al(new A.f4(q,j,j,C.be,j,j,j,j,j,j,new A.t(!0,p,j,j,j,j,16,C.a3,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)),C.y,C.aF,new A.j3(1),j,j,j,j,C.bc,j)
k.zD()
q=Math.cos(t)
p=Math.sin(t)
o=k.b
k.aK(d,new A.q(w+q*r-o.c/2,v+p*r-o.a.c.gcm()/2))}},
eU(d){return!1}}
B.afv.prototype={
aK(d,e){var x,w,v,u,t,s=e.jF(C.p),r=e.gfA()/2-18,q=s.a0(0,C.lj.am(0,r+12)),p=$.af(),o=A.b_(),n=this.b
o.r=n.gq()
x=s.a0(0,C.lj.am(0,34))
w=s.a0(0,C.lj.am(0,r-6))
v=A.b_()
v.r=n.gq()
v.c=5
v.d=C.jG
d.ly(x,w,v)
u=s.a0(0,C.lj.am(0,r-14))
t=new A.ce(p.r,C.ae,null,null,A.a([],y.a))
t.aG(new A.fr(q.a,q.b))
t.aG(new A.d0(u.a0(0,C.fd.am(0,11)).a,u.a0(0,C.fd.am(0,11)).b))
t.aG(new A.d0(u.ai(0,C.fd.am(0,11)).a,u.ai(0,C.fd.am(0,11)).b))
t.aG(new A.mb())
d.fG(t,o)},
eU(d){return!d.b.k(0,this.b)}}
var z=a.updateTypes(["ab<~>()","~(xJ)"])
B.avl.prototype={
$0(){var x,w,v=this.a
if(v.f)return
x=A.jE(b.G.document)
w=A.O(x==null?null:x.visibilityState)
if((w==null?null:w)==="visible")v.HM()},
$S:16}
B.avm.prototype={
$1(d){var x=this.a,w=x.w
if(w!=null&&new A.b2(Date.now(),0,!1).dG(w).a>3e6){x.w=new A.b2(Date.now(),0,!1)
x.HM()}},
$S:34}
B.avk.prototype={
$1(d){return this.a.avp(d)},
$S:3}
B.bhD.prototype={
$0(){var x=this.a
if(x.c!=null&&x.Q==null)x.t(new B.bhC(x))},
$S:0}
B.bhC.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.bhy.prototype={
$0(){},
$S:0}
B.bhz.prototype={
$0(){var x=this.a
x.cy=null
x.db=new A.b2(Date.now(),0,!1)
if(x.c!=null)x.t(new B.bhx())},
$S:0}
B.bhx.prototype={
$0(){},
$S:0}
B.bhs.prototype={
$0(){return this.a.ch=!1},
$S:0}
B.bht.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.bhu.prototype={
$0(){return this.a.r=!0},
$S:0}
B.bhv.prototype={
$0(){var x=this.a,w=this.b
x.d=w.a
x.e=w.b
x.f="\u0645\u0643\u0627\u0646\u0643 \u0627\u0644\u062d\u0627\u0644\u064a"},
$S:0}
B.bhw.prototype={
$0(){return this.a.r=!1},
$S:0}
B.bhA.prototype={
$0(){var x=this.a,w=this.b
x.d=w.b
x.e=w.c
x.f=w.glH()},
$S:0}
B.bhB.prototype={
$0(){return this.a.y6(!0)},
$S:0};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Vj.prototype,"gaH2","aH3",1)
w(v,"gatu","Hu",0)
w(v,"gaIZ","Jt",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.avj,B.aBP,B.xJ])
x(A.km,[B.avl,B.bhD,B.bhC,B.bhy,B.bhz,B.bhx,B.bhs,B.bht,B.bhu,B.bhv,B.bhw,B.bhA,B.bhB])
x(A.hX,[B.avm,B.avk])
w(B.ve,A.P)
w(B.Vj,A.U)
x(A.a5,[B.TZ,B.ahc])
x(A.CO,[B.amv,B.afv])})()
A.ok(b.typeUniverse,JSON.parse('{"ve":{"P":[],"e":[]},"Vj":{"U":["ve"]},"TZ":{"a5":[],"e":[]},"ahc":{"a5":[],"e":[]},"amv":{"as":[]},"afv":{"as":[]}}'))
var y={a:A.a3("y<ep>"),u:A.a3("y<e>"),h:A.a3("y<K>"),w:A.a3("h"),o:A.a3("kS<xJ>"),q:A.a3("oh"),e:A.a3("A"),v:A.a3("~")};(function constants(){var x=a.makeConstList
D.b_n=new A.r("\u0628\u0646\u062f\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u0628\u0648\u0635\u0644\u0629\u2026",null,F.al,null,null,null,null,null,null,null,null)
D.a1m=new A.dM(C.W,null,null,D.b_n,null)
D.a4a=new A.H(1,1,0.4196078431372549,0.4196078431372549,C.l)
D.a8n=new A.bt(3e6)
D.aV_=new A.t(!0,C.a6,null,null,null,null,13,null,null,null,null,null,1.7,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b1v=new A.r("\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u0634 \u0645\u062a\u0627\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u0623\u0648 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647. \u062d\u0637 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0648\u062c\u0651\u0647 \u062d\u0631\u0641 \xab\u0634\xbb (\u0627\u0644\u0634\u0645\u0627\u0644) \u0646\u0627\u062d\u064a\u0629 \u0627\u0644\u0634\u0645\u0627\u0644 \u2014 \u062a\u0642\u062f\u0631 \u062a\u0639\u0631\u0641\u0647 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062e\u0631\u0627\u0626\u0637 \u0623\u0648 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u2014 \u0648\u0627\u0644\u0633\u0647\u0645 \u0627\u0644\u062f\u0647\u0628\u064a \u0647\u064a\u0628\u0642\u0649 \u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629.",null,D.aV_,null,null,null,null,null,null,null,null)
D.ab2=new E.cZ(D.b1v,C.af,C.aA,null,!1,null)
D.adh=new A.a4(K.BQ,null,C.q,null,null,null)
D.aev=new A.a4(C.tZ,null,null,null,null,null)
D.afz=new A.a4(C.j3,null,C.a6,null,null,null)
D.akq=x(["\u0627\u0644\u0634\u0645\u0627\u0644","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u0634\u0631\u0642","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u062c\u0646\u0648\u0628","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u063a\u0631\u0628\u064a","\u0627\u0644\u063a\u0631\u0628","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u063a\u0631\u0628\u064a"],A.a3("y<h>"))
D.ayQ=new A.cx([0,"\u0634",90,"\u0642",180,"\u062c",270,"\u063a"],A.a3("cx<u,h>"))
D.aeO=new A.a4(C.Bv,34,C.i,null,null,null)
D.aDa=new A.rh(null,0,null,null,null,null,D.aeO,null)
D.Ur=new A.G(290,290)
D.aSh=new A.t(!0,C.a6,null,null,null,null,13,null,null,null,null,null,1.8,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXG=new A.r("\u0646\u0635\u064a\u062d\u0629: \u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0628\u0639\u064a\u062f \u0639\u0646 \u0627\u0644\u062d\u062f\u064a\u062f \u0648\u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633 \u0648\u062c\u0631\u0627\u0628 \u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633. \u0644\u0648 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0645\u0634 \u062b\u0627\u0628\u062a \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0641\u064a \u0634\u0643\u0644 \u0631\u0642\u0645 8 \u0643\u0627\u0645 \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u062a\u062a\u0638\u0628\u0637.",null,F.al,C.ad,null,null,null,null,null,null,null)
D.aYj=new A.r("\u0634\u063a\u0651\u0644 \u0627\u0644\u0628\u0648\u0635\u0644\u0629",null,null,null,null,null,null,null,null,null,null)
D.b0O=new A.r("\u0645\u062f\u064a\u0646\u0629 \u062a\u0627\u0646\u064a\u0629",null,C.em,null,null,null,null,null,null,null,null)
D.abO=new A.a2(62812,"MaterialIcons",null,!1)
D.bar=new B.TZ(D.abO,"\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u062d\u062a\u0627\u062c\u0629 \u0645\u0639\u0627\u064a\u0631\u0629: \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0639\u0644\u0649 \u0634\u0643\u0644 8 \u0641\u064a \u0627\u0644\u0647\u0648\u0627 \u0643\u0627\u0645 \u0645\u0631\u0629",null)
D.acY=new A.a2(985111,"MaterialIcons",null,!1)
D.bas=new B.TZ(D.acY,"\u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0641\u0631\u0648\u062f (\u0645\u0633\u0637\u0651\u062d \u0632\u064a \u0627\u0644\u0635\u064a\u0646\u064a\u0629) \u0639\u0634\u0627\u0646 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u064a\u0628\u0642\u0649 \u0645\u0638\u0628\u0648\u0637",null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cdS","bQb",()=>A.bBW())})()};
(a=>{a["3wUWtfGL6hx2vqWOchzWKFSC3yk="]=a.current})($__dart_deferred_initializers__);