((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,B={
Cv(d){var x,w,v
if(d==null)return null
try{x=A.dk(d)
w=isNaN(x)?null:x
return w}catch(v){return null}},
av0:function av0(d){var _=this
_.a=d
_.d=_.c=_.b=null
_.r=_.f=_.e=!1
_.w=null},
av2:function av2(d){this.a=d},
av3:function av3(d){this.a=d},
av1:function av1(d){this.a=d},
bMF(d,e){var x=d*3.141592653589793/180,w=(39.8262-e)*3.141592653589793/180
return B.BG(Math.atan2(Math.sin(w)*Math.cos(0.37389315900848524),Math.cos(x)*Math.sin(0.37389315900848524)-Math.sin(x)*Math.cos(0.37389315900848524)*Math.cos(w))*180/3.141592653589793)},
BG(d){var x=C.d.ah(d,360)
return x<0?x+360:x},
bN0(d,e){var x=B.BG(d-e)
return x>=180?x-360:x},
c4Q(d){var x,w,v,u,t,s=d.length
if(s<2)return 0
for(x=0,w=0,v=0;v<d.length;d.length===s||(0,A.B)(d),++v){u=d[v]*3.141592653589793/180
x+=Math.cos(u)
w+=Math.sin(u)}t=Math.sqrt(x*x+w*w)/d.length
if(t>=1)return 0
if(t<=1e-9)return 180
return Math.sqrt(-2*Math.log(t))*180/3.141592653589793},
aBx:function aBx(d){this.a=d
this.c=this.b=null},
xB:function xB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX5(){return new B.v7(null)},
v7:function v7(d){this.a=d},
V7:function V7(d,e,f,g,h,i,j){var _=this
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
bgw:function bgw(d){this.a=d},
bgv:function bgv(d){this.a=d},
bgr:function bgr(){},
bgs:function bgs(d){this.a=d},
bgq:function bgq(){},
bgl:function bgl(d){this.a=d},
bgm:function bgm(d){this.a=d},
bgn:function bgn(d){this.a=d},
bgo:function bgo(d,e){this.a=d
this.b=e},
bgp:function bgp(d){this.a=d},
bgt:function bgt(d,e){this.a=d
this.b=e},
bgu:function bgu(d){this.a=d},
TN:function TN(d,e,f){this.c=d
this.d=e
this.a=f},
agZ:function agZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amh:function amh(d){this.a=d},
afi:function afi(d,e){this.b=d
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
B.av0.prototype={
Ok(){var x=0,w=A.o(y.e),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Ok=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
n=b.G
r=A.jB(n.DeviceOrientationEvent)
if(r==null||r.requestPermission==null){n=A.jB(n.DeviceOrientationEvent)
v=n!=null
x=1
break}x=7
return A.d(A.e1(A.co(A.cf(r,"requestPermission",null,null,null,null)),y.w),$async$Ok)
case 7:q=e
p=q==="granted"
if(p)s.HC()
v=p
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.Y(l)
A.h(o)
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$Ok,w)},
a9A(){var x,w,v,u,t,s
try{u=b.G
x=A.jB(u.screen)
t=x
w=A.jB(t==null?null:t.orientation)
t=w
v=B.Cv(t==null?null:t.angle)
if(v!=null)return v
u=B.Cv(u.orientation)
if(u==null)u=0
return u}catch(s){return 0}},
av4(d){var x,w,v,u,t,s,r,q,p,o,n=this,m="deviceorientationabsolute"
if(n.f)return
try{x=B.Cv(d.beta)
w=B.Cv(d.gamma)
v=B.Cv(d.webkitCompassHeading)
if(v!=null){n.w=new A.b1(Date.now(),0,!1)
n.a.D(0,new B.xB(B.BG(v+n.a9A()),B.Cv(d.webkitCompassAccuracy),x,w))
return}u=B.Cv(d.alpha)
if(u==null)return
r=A.U(d.type)
t=r==null?null:r
if(!J.c(t,m)){q=A.hw(d.absolute)
if(q==null)q=null
p=q===!0}else p=!0
s=p
if(!s)return
if(J.c(t,m))n.r=!0
else if(n.r)return
n.w=new A.b1(Date.now(),0,!1)
n.a.D(0,new B.xB(B.BG(360-u+n.a9A()),null,x,w))}catch(o){}},
mS(){var x,w,v,u=this,t=null,s="addEventListener"
if(u.e||u.f)return
u.e=!0
u.HC()
x=u.c=A.bKm(new B.av2(u))
w=b.G
v=A.jB(w.document)
if(v!=null)A.cf(v,s,"visibilitychange",x,t,t)
A.cf(w,s,"pageshow",x,t,t)
u.d=A.kM(C.kw,new B.av3(u))},
HC(){var x,w,v=this,u=null,t="addEventListener"
if(v.f)return
v.a42()
x=v.b=A.f3(new B.av1(v))
w=b.G
if("ondeviceorientationabsolute" in w)A.cf(w,t,"deviceorientationabsolute",x,u,u)
A.cf(w,t,"deviceorientation",x,u,u)},
a42(){var x,w=null,v="removeEventListener",u=this.b
if(u==null)return
x=b.G
A.cf(x,v,"deviceorientationabsolute",u,w,w)
A.cf(x,v,"deviceorientation",u,w,w)
this.b=null},
l(){var x,w,v,u=this,t=null,s="removeEventListener"
if(u.f)return
u.f=!0
x=u.d
if(x!=null)x.aF()
u.a42()
w=u.c
if(w!=null){x=b.G
v=A.jB(x.document)
if(v!=null)A.cf(v,s,"visibilitychange",w,t,t)
A.cf(x,s,"pageshow",w,t,t)}u.a.be()}}
B.aBx.prototype={}
B.xB.prototype={}
B.v7.prototype={
V(){var x=$.bP1().a,w=x[1],v=x[2]
x=x[0]
return new B.V7(w,v,x+" (\u062a\u0642\u0631\u064a\u0628\u064a)",new B.av0(new A.kQ(null,null,y.o)),new B.aBx(0.2),A.a([],y.h),new A.b1(A.kp(0,0,!1),0,!1))}}
B.V7.prototype={
ab(){var x,w,v,u=this
u.ap()
x=A.jB(b.G.DeviceOrientationEvent)
u.ch=x!=null&&x.requestPermission!=null
w=u.w
v=w.a
u.z=new A.eH(v,A.w(v).i("eH<1>")).kj(u.gaGI())
w.mS()
u.cx=A.cB(D.a7M,new B.bgw(u))
u.aJ6()},
l(){var x=this,w=x.cx
if(w!=null)w.aF()
w=x.cy
if(w!=null)w.aF()
w=x.z
if(w!=null)w.aF()
x.w.l()
x.ao()},
aGJ(d){var x,w,v,u,t,s,r,q,p,o=this
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
w=u}else v=s}w=B.BG(Math.atan2(v,w)*180/3.141592653589793)
w.toString
q=Math.abs(B.bN0(B.bMF(o.d,o.e),w))<=5
if(q&&!o.CW)A.bwu(80)
v=o.Q
o.Q=w
o.CW=q
o.as=d.b
w=d.c
s=d.d
if(!(w!=null&&Math.abs(w)>35))w=s!=null&&Math.abs(s)>35
else w=!0
o.at=w
o.ax=x.length>=10&&B.c4Q(x)>12
o.ay=o.ch=!1
p=new A.b1(Date.now(),0,!1)
if(v==null||p.dM(o.db).a>33e3){o.db=p
x=o.cy
if(x!=null)x.aF()
o.cy=null
o.t(new B.bgr())}else if(o.cy==null)o.cy=A.cB(C.zX,new B.bgs(o))},
Hl(){var x=0,w=A.o(y.v),v,u=this,t,s
var $async$Hl=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:t=u.w
x=3
return A.d(t.Ok(),$async$Hl)
case 3:s=e
if(u.c==null){x=1
break}if(s){u.t(new B.bgl(u))
t.mS()}else{u.t(new B.bgm(u))
u.c.U(y.q).f.bc(A.bK(null,null,null,null,null,C.k,null,A.j("\u0645\u0646 \u063a\u064a\u0631 \u0625\u0630\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0647\u0646\u0648\u0631\u064a\u0643 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0628\u0627\u0644\u062f\u0631\u062c\u0627\u062a \u0628\u0633",null,null,null,null,null,null,null,null,null),null,C.C,null,null,null,null,null,null,null,null,null,null))}case 1:return A.m(v,w)}})
return A.n($async$Hl,w)},
xZ(d){return this.aF4(d)},
aJ6(){return this.xZ(!1)},
aF4(d){var x=0,w=A.o(y.v),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$xZ=A.k(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:r.t(new B.bgn(r))
u=4
x=d?7:9
break
case 7:x=10
return A.d(A.w5(!0),$async$xZ)
case 10:x=8
break
case 9:x=11
return A.d(A.AB(),$async$xZ)
case 11:case 8:q=f
if(r.c==null||q==null){s=[1]
x=5
break}r.t(new B.bgo(r,q))
s.push(6)
x=5
break
case 4:u=3
n=t.pop()
o=r.c
if(o!=null&&d)o.U(y.q).f.bc(A.bK(null,null,null,null,null,C.k,null,A.j("\u0645\u0642\u062f\u0631\u0646\u0627\u0634 \u0646\u062d\u062f\u062f \u0645\u0643\u0627\u0646\u0643 \u2014 \u0627\u062e\u062a\u0627\u0631 \u0645\u062f\u064a\u0646\u062a\u0643 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629",null,null,null,null,null,null,null,null,null),null,C.C,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.t(new B.bgp(r))
x=s.pop()
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$xZ,w)},
Jk(){var x=0,w=A.o(y.v),v,u=this,t,s
var $async$Jk=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.d(I.bMv(s),$async$Jk)
case 3:t=e
if(t==null||u.c==null){x=1
break}u.t(new B.bgt(u,t))
case 1:return A.m(v,w)}})
return A.n($async$Jk,w)},
A(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.bMF(p.d,p.e),m=p.Q,l=m==null,k=!l,j=k?B.bN0(n,m):0,i=k&&p.CW,h=p.as
if(h!=null)x=h<0||h>25
else x=!1
h=y.u
w=A.a([D.acJ,C.as,A.aQ(A.j(p.f,o,o,o,o,o,F.aZ,o,o,o),1)],h)
if(p.r)w.push(M.pa)
else w.push(A.cH(o,o,o,o,D.aeY,o,o,new B.bgu(p),o,o,o,"\u062d\u062f\u0651\u062f \u0645\u0643\u0627\u0646\u064a",o))
w.push(A.bL(D.aYh,o,o,o,p.gaIB(),o,o))
w=A.ak(w,C.j,C.f,C.h,0,o,o)
v=l?0:m
v=A.cP(A.bn(new B.agZ(v,k?j:n,i,o),290,290),o,o)
u=A.j("\u0627\u0644\u0642\u0628\u0644\u0629 \u0639\u0644\u0649 "+(E.aZ(C.e.ah(C.d.ar(B.BG(n)),360))+"\xb0")+" \u0645\u0646 \u0627\u0644\u0634\u0645\u0627\u0644",o,o,o,o,o,N.UF,C.ad,o,o)
t=D.ajE[C.e.ah(C.d.b9(B.BG(n)+22.5,45),8)]
s=p.d
r=p.e
q=Math.pow(Math.sin((21.4225-s)*3.141592653589793/180/2),2)+Math.cos(s*3.141592653589793/180)*Math.cos(0.37389315900848524)*Math.pow(Math.sin((39.8262-r)*3.141592653589793/180/2),2)
t=A.a([new E.cW(w,C.af,C.aA,o,!1,o),C.R,v,C.aq,u,A.j("\u0646\u0627\u062d\u064a\u0629 "+t+" \u2022 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0644\u0643\u0639\u0628\u0629 \u062d\u0648\u0627\u0644\u064a "+E.aZ(C.d.ar(12742*Math.atan2(Math.sqrt(q),Math.sqrt(1-q))))+" \u0643\u0645",o,o,o,o,o,F.ak,C.ad,o,o)],h)
if(k){w=E.aZ(C.e.ah(C.d.ar(B.BG(m)),360))
v=p.as
v=v!=null&&v>=0?" \u2022 \u062f\u0642\u0629 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \xb1"+E.aZ(C.d.ar(v))+"\xb0":""
t.push(A.j("\u0627\u062a\u062c\u0627\u0647 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u062f\u0644\u0648\u0642\u062a\u064a "+(w+"\xb0")+v,o,o,o,o,o,D.aOW,C.ad,o,o))}t.push(C.aJ)
if(p.ch&&l)C.b.E(t,A.a([A.jM(D.adX,D.aUV,p.gatc(),A.jd(C.p,C.a5,o,o,o,o,o)),C.T],h))
if(k){l=i?"aligned":"turn "+C.d.ar(j)
if(i)h="\u062a\u0645\u0627\u0645! \u0625\u0646\u062a \u062f\u0644\u0648\u0642\u062a\u064a \u0645\u062a\u0648\u062c\u0651\u0647 \u0644\u0644\u0642\u0628\u0644\u0629 \u2713"
else{h=Math.abs(j)
h=j>0?"\u0644\u0641\u0651 \u064a\u0645\u064a\u0646 "+E.aZ(C.d.ar(h))+"\xb0":"\u0644\u0641\u0651 \u0634\u0645\u0627\u0644 "+E.aZ(C.d.ar(h))+"\xb0"}t.push(A.bD(o,o,o,new E.cW(A.j(h,o,o,o,o,o,A.cu(o,o,i?G.c3:C.i,o,o,o,o,o,o,o,o,16,o,o,C.a2,o,o,!0,o,o,o,o,o,o,o,o),C.ad,o,o),C.af,C.aA,o,i,o),!1,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,C.E,o))}else if(p.ay&&!p.ch)t.push(D.aas)
else if(!p.ch)t.push(D.a0N)
if(k&&p.at)t.push(D.b6G)
if(k)l=x||p.ax
else l=!1
if(l)t.push(D.b6F)
t.push(C.T)
t.push(D.aUk)
return H.vV(o,t,"\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629")}}
B.TN.prototype={
A(d){var x=null
return new E.cW(A.ak(A.a([A.c6(this.c,C.p,x,22),C.aU,A.aQ(A.j(this.d,x,x,x,x,x,G.UJ,x,x,x),1)],y.u),C.j,C.f,C.h,0,x,x),C.af,C.aA,x,!1,x)}}
B.agZ.prototype={
A(d){var x,w=null,v=this.e,u=v?G.c3:C.p,t=A.abZ(-this.c*3.141592653589793/180,A.fD(w,w,w,new B.amh(w),D.TV)),s=this.d,r=C.d.ar(s)
r=A.bD(w,w,w,A.abZ(s*3.141592653589793/180,A.fD(w,w,w,new B.afi(u,w),D.TV)),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"qibla-arrow "+r,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,C.E,w)
s=v?u:C.db
x=A.cR(u,2)
return A.h6(C.W,A.a([t,r,D.aBl,A.au(w,A.c6(C.eC,v?C.a5:C.p,w,w),C.m,w,w,new A.ap(s,w,x,w,w,w,C.cn),w,54,w,w,w,w,54)],y.u),C.k,C.ca,w)}}
B.amh.prototype={
aJ(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=e.jE(C.o),h=e.gfA()/2-18
$.af()
x=A.b_()
x.r=C.i.bo(0.06).gq()
d.fU(i,h,x)
x=A.b_()
x.b=C.bn
x.r=L.hl.gq()
x.c=2
d.fU(i,h,x)
for(x=d.a,w=i.a,v=i.b,u=0;u<360;u+=10){t=(u-90)*3.141592653589793/180
s=C.e.ah(u,90)===0
r=Math.cos(t)
q=Math.sin(t)
p=Math.cos(t)
o=Math.sin(t)
n=h-(s?14:7)
m=new A.ox(C.d9,C.d2,C.fW,C.i5,C.e6)
m.r=(s?C.i:C.eW).gq()
m.c=s?2.5:1.2
l=m.e4()
x.drawLine.apply(x,[w+r*h,v+q*h,w+p*n,v+o*n,l])
l.delete()}for(x=D.ax5.gdG(),x=x.ga0(x),r=h-28;x.u();){q=x.gK()
p=q.a
t=(p-90)*3.141592653589793/180
q=q.b
p=p===0?D.a3B:C.a6
k=new A.Ac(new A.f1(q,j,j,C.be,j,j,j,j,j,j,new A.r(!0,p,j,j,j,j,16,C.a3,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)),C.y,C.aF,new A.j_(1),j,j,j,j,C.bc,j)
k.zy()
q=Math.cos(t)
p=Math.sin(t)
o=k.b
k.aJ(d,new A.q(w+q*r-o.c/2,v+p*r-o.a.c.gcm()/2))}},
eT(d){return!1}}
B.afi.prototype={
aJ(d,e){var x,w,v,u,t,s=e.jE(C.o),r=e.gfA()/2-18,q=s.a_(0,C.lb.al(0,r+12)),p=$.af(),o=A.b_(),n=this.b
o.r=n.gq()
x=s.a_(0,C.lb.al(0,34))
w=s.a_(0,C.lb.al(0,r-6))
v=A.b_()
v.r=n.gq()
v.c=5
v.d=C.jA
d.ly(x,w,v)
u=s.a_(0,C.lb.al(0,r-14))
t=new A.cc(p.r,C.ac,null,null,A.a([],y.a))
t.aG(new A.fo(q.a,q.b))
t.aG(new A.cY(u.a_(0,C.f9.al(0,11)).a,u.a_(0,C.f9.al(0,11)).b))
t.aG(new A.cY(u.ai(0,C.f9.al(0,11)).a,u.ai(0,C.f9.al(0,11)).b))
t.aG(new A.m6())
d.fG(t,o)},
eT(d){return!d.b.k(0,this.b)}}
var z=a.updateTypes(["aa<~>()","~(xB)"])
B.av2.prototype={
$0(){var x,w,v=this.a
if(v.f)return
x=A.jB(b.G.document)
w=A.U(x==null?null:x.visibilityState)
if((w==null?null:w)==="visible")v.HC()},
$S:15}
B.av3.prototype={
$1(d){var x=this.a,w=x.w
if(w!=null&&new A.b1(Date.now(),0,!1).dM(w).a>3e6){x.w=new A.b1(Date.now(),0,!1)
x.HC()}},
$S:35}
B.av1.prototype={
$1(d){return this.a.av4(d)},
$S:3}
B.bgw.prototype={
$0(){var x=this.a
if(x.c!=null&&x.Q==null)x.t(new B.bgv(x))},
$S:0}
B.bgv.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.bgr.prototype={
$0(){},
$S:0}
B.bgs.prototype={
$0(){var x=this.a
x.cy=null
x.db=new A.b1(Date.now(),0,!1)
if(x.c!=null)x.t(new B.bgq())},
$S:0}
B.bgq.prototype={
$0(){},
$S:0}
B.bgl.prototype={
$0(){return this.a.ch=!1},
$S:0}
B.bgm.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.bgn.prototype={
$0(){return this.a.r=!0},
$S:0}
B.bgo.prototype={
$0(){var x=this.a,w=this.b
x.d=w.a
x.e=w.b
x.f="\u0645\u0643\u0627\u0646\u0643 \u0627\u0644\u062d\u0627\u0644\u064a"},
$S:0}
B.bgp.prototype={
$0(){return this.a.r=!1},
$S:0}
B.bgt.prototype={
$0(){var x=this.a,w=this.b
x.d=w.b
x.e=w.c
x.f=w.glH()},
$S:0}
B.bgu.prototype={
$0(){return this.a.xZ(!0)},
$S:0};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.V7.prototype,"gaGI","aGJ",1)
w(v,"gatc","Hl",0)
w(v,"gaIB","Jk",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.av0,B.aBx,B.xB])
x(A.kl,[B.av2,B.bgw,B.bgv,B.bgr,B.bgs,B.bgq,B.bgl,B.bgm,B.bgn,B.bgo,B.bgp,B.bgt,B.bgu])
x(A.hT,[B.av3,B.av1])
w(B.v7,A.P)
w(B.V7,A.T)
x(A.a4,[B.TN,B.agZ])
x(A.CE,[B.amh,B.afi])})()
A.oc(b.typeUniverse,JSON.parse('{"v7":{"P":[],"e":[]},"V7":{"T":["v7"]},"TN":{"a4":[],"e":[]},"agZ":{"a4":[],"e":[]},"amh":{"as":[]},"afi":{"as":[]}}'))
var y={a:A.a2("y<ek>"),u:A.a2("y<e>"),h:A.a2("y<J>"),w:A.a2("f"),o:A.a2("kQ<xB>"),q:A.a2("o9"),e:A.a2("A"),v:A.a2("~")};(function constants(){var x=a.makeConstList
D.aWT=new A.t("\u0628\u0646\u062f\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u0628\u0648\u0635\u0644\u0629\u2026",null,F.ak,null,null,null,null,null,null,null,null)
D.a0N=new A.dQ(C.W,null,null,D.aWT,null)
D.a3B=new A.H(1,1,0.4196078431372549,0.4196078431372549,C.l)
D.a7M=new A.bq(3e6)
D.aRD=new A.r(!0,C.a6,null,null,null,null,13,null,null,null,null,null,1.7,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYX=new A.t("\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u0634 \u0645\u062a\u0627\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u0623\u0648 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647. \u062d\u0637 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0648\u062c\u0651\u0647 \u062d\u0631\u0641 \xab\u0634\xbb (\u0627\u0644\u0634\u0645\u0627\u0644) \u0646\u0627\u062d\u064a\u0629 \u0627\u0644\u0634\u0645\u0627\u0644 \u2014 \u062a\u0642\u062f\u0631 \u062a\u0639\u0631\u0641\u0647 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062e\u0631\u0627\u0626\u0637 \u0623\u0648 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u2014 \u0648\u0627\u0644\u0633\u0647\u0645 \u0627\u0644\u062f\u0647\u0628\u064a \u0647\u064a\u0628\u0642\u0649 \u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629.",null,D.aRD,null,null,null,null,null,null,null,null)
D.aas=new E.cW(D.aYX,C.af,C.aA,null,!1,null)
D.acJ=new A.a5(K.Bs,null,C.p,null,null,null)
D.adX=new A.a5(C.tL,null,null,null,null,null)
D.aeY=new A.a5(C.j_,null,C.a6,null,null,null)
D.ajE=x(["\u0627\u0644\u0634\u0645\u0627\u0644","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u0634\u0631\u0642","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u062c\u0646\u0648\u0628","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u063a\u0631\u0628\u064a","\u0627\u0644\u063a\u0631\u0628","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u063a\u0631\u0628\u064a"],A.a2("y<f>"))
D.ax5=new A.cG([0,"\u0634",90,"\u0642",180,"\u062c",270,"\u063a"],A.a2("cG<u,f>"))
D.aee=new A.a5(C.B8,34,C.i,null,null,null)
D.aBl=new A.re(null,0,null,null,null,null,D.aee,null)
D.TV=new A.G(290,290)
D.aOW=new A.r(!0,C.a6,null,null,null,null,13,null,null,null,null,null,1.8,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUk=new A.t("\u0646\u0635\u064a\u062d\u0629: \u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0628\u0639\u064a\u062f \u0639\u0646 \u0627\u0644\u062d\u062f\u064a\u062f \u0648\u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633 \u0648\u062c\u0631\u0627\u0628 \u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633. \u0644\u0648 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0645\u0634 \u062b\u0627\u0628\u062a \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0641\u064a \u0634\u0643\u0644 \u0631\u0642\u0645 8 \u0643\u0627\u0645 \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u062a\u062a\u0638\u0628\u0637.",null,F.ak,C.ad,null,null,null,null,null,null,null)
D.aUV=new A.t("\u0634\u063a\u0651\u0644 \u0627\u0644\u0628\u0648\u0635\u0644\u0629",null,null,null,null,null,null,null,null,null,null)
D.aYh=new A.t("\u0645\u062f\u064a\u0646\u0629 \u062a\u0627\u0646\u064a\u0629",null,C.el,null,null,null,null,null,null,null,null)
D.abc=new A.a3(62812,"MaterialIcons",null,!1)
D.b6F=new B.TN(D.abc,"\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u062d\u062a\u0627\u062c\u0629 \u0645\u0639\u0627\u064a\u0631\u0629: \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0639\u0644\u0649 \u0634\u0643\u0644 8 \u0641\u064a \u0627\u0644\u0647\u0648\u0627 \u0643\u0627\u0645 \u0645\u0631\u0629",null)
D.aco=new A.a3(985111,"MaterialIcons",null,!1)
D.b6G=new B.TN(D.aco,"\u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0641\u0631\u0648\u062f (\u0645\u0633\u0637\u0651\u062d \u0632\u064a \u0627\u0644\u0635\u064a\u0646\u064a\u0629) \u0639\u0634\u0627\u0646 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u064a\u0628\u0642\u0649 \u0645\u0638\u0628\u0648\u0637",null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ccG","bP1",()=>A.bAP())})()};
(a=>{a["BC7s3zFuu+iEoAE2EKXtZQ8g870="]=a.current})($__dart_deferred_initializers__);