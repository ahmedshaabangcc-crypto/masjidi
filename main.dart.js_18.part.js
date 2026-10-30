((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,B={
Cu(d){var x,w,v
if(d==null)return null
try{x=A.dk(d)
w=isNaN(x)?null:x
return w}catch(v){return null}},
av2:function av2(d){var _=this
_.a=d
_.d=_.c=_.b=null
_.r=_.f=_.e=!1
_.w=null},
av4:function av4(d){this.a=d},
av5:function av5(d){this.a=d},
av3:function av3(d){this.a=d},
bMA(d,e){var x=d*3.141592653589793/180,w=(39.8262-e)*3.141592653589793/180
return B.BE(Math.atan2(Math.sin(w)*Math.cos(0.37389315900848524),Math.cos(x)*Math.sin(0.37389315900848524)-Math.sin(x)*Math.cos(0.37389315900848524)*Math.cos(w))*180/3.141592653589793)},
BE(d){var x=C.d.ah(d,360)
return x<0?x+360:x},
bMW(d,e){var x=B.BE(d-e)
return x>=180?x-360:x},
c4L(d){var x,w,v,u,t,s=d.length
if(s<2)return 0
for(x=0,w=0,v=0;v<d.length;d.length===s||(0,A.B)(d),++v){u=d[v]*3.141592653589793/180
x+=Math.cos(u)
w+=Math.sin(u)}t=Math.sqrt(x*x+w*w)/d.length
if(t>=1)return 0
if(t<=1e-9)return 180
return Math.sqrt(-2*Math.log(t))*180/3.141592653589793},
aBz:function aBz(d){this.a=d
this.c=this.b=null},
xy:function xy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX0(){return new B.v6(null)},
v6:function v6(d){this.a=d},
V4:function V4(d,e,f,g,h,i,j){var _=this
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
bgq:function bgq(d){this.a=d},
bgp:function bgp(d){this.a=d},
bgl:function bgl(){},
bgm:function bgm(d){this.a=d},
bgk:function bgk(){},
bgf:function bgf(d){this.a=d},
bgg:function bgg(d){this.a=d},
bgh:function bgh(d){this.a=d},
bgi:function bgi(d,e){this.a=d
this.b=e},
bgj:function bgj(d){this.a=d},
bgn:function bgn(d,e){this.a=d
this.b=e},
bgo:function bgo(d){this.a=d},
TK:function TK(d,e,f){this.c=d
this.d=e
this.a=f},
agY:function agY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amg:function amg(d){this.a=d},
afh:function afh(d,e){this.b=d
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
B.av2.prototype={
Oj(){var x=0,w=A.o(y.e),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Oj=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
n=b.G
r=A.jz(n.DeviceOrientationEvent)
if(r==null||r.requestPermission==null){n=A.jz(n.DeviceOrientationEvent)
v=n!=null
x=1
break}x=7
return A.d(A.e1(A.co(A.cf(r,"requestPermission",null,null,null,null)),y.w),$async$Oj)
case 7:q=e
p=q==="granted"
if(p)s.HB()
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
return A.n($async$Oj,w)},
a9z(){var x,w,v,u,t,s
try{u=b.G
x=A.jz(u.screen)
t=x
w=A.jz(t==null?null:t.orientation)
t=w
v=B.Cu(t==null?null:t.angle)
if(v!=null)return v
u=B.Cu(u.orientation)
if(u==null)u=0
return u}catch(s){return 0}},
av3(d){var x,w,v,u,t,s,r,q,p,o,n=this,m="deviceorientationabsolute"
if(n.f)return
try{x=B.Cu(d.beta)
w=B.Cu(d.gamma)
v=B.Cu(d.webkitCompassHeading)
if(v!=null){n.w=new A.b1(Date.now(),0,!1)
n.a.D(0,new B.xy(B.BE(v+n.a9z()),B.Cu(d.webkitCompassAccuracy),x,w))
return}u=B.Cu(d.alpha)
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
n.a.D(0,new B.xy(B.BE(360-u+n.a9z()),null,x,w))}catch(o){}},
mS(){var x,w,v,u=this,t=null,s="addEventListener"
if(u.e||u.f)return
u.e=!0
u.HB()
x=u.c=A.bKh(new B.av4(u))
w=b.G
v=A.jz(w.document)
if(v!=null)A.cf(v,s,"visibilitychange",x,t,t)
A.cf(w,s,"pageshow",x,t,t)
u.d=A.kM(C.kw,new B.av5(u))},
HB(){var x,w,v=this,u=null,t="addEventListener"
if(v.f)return
v.a41()
x=v.b=A.f3(new B.av3(v))
w=b.G
if("ondeviceorientationabsolute" in w)A.cf(w,t,"deviceorientationabsolute",x,u,u)
A.cf(w,t,"deviceorientation",x,u,u)},
a41(){var x,w=null,v="removeEventListener",u=this.b
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
u.a41()
w=u.c
if(w!=null){x=b.G
v=A.jz(x.document)
if(v!=null)A.cf(v,s,"visibilitychange",w,t,t)
A.cf(x,s,"pageshow",w,t,t)}u.a.bd()}}
B.aBz.prototype={}
B.xy.prototype={}
B.v6.prototype={
V(){var x=$.bOX().a,w=x[1],v=x[2]
x=x[0]
return new B.V4(w,v,x+" (\u062a\u0642\u0631\u064a\u0628\u064a)",new B.av2(new A.kQ(null,null,y.o)),new B.aBz(0.2),A.a([],y.h),new A.b1(A.kp(0,0,!1),0,!1))}}
B.V4.prototype={
ab(){var x,w,v,u=this
u.ap()
x=A.jz(b.G.DeviceOrientationEvent)
u.ch=x!=null&&x.requestPermission!=null
w=u.w
v=w.a
u.z=new A.eH(v,A.w(v).i("eH<1>")).kj(u.gaGH())
w.mS()
u.cx=A.cB(D.a7K,new B.bgq(u))
u.aJ5()},
l(){var x=this,w=x.cx
if(w!=null)w.aF()
w=x.cy
if(w!=null)w.aF()
w=x.z
if(w!=null)w.aF()
x.w.l()
x.ao()},
aGI(d){var x,w,v,u,t,s,r,q,p,o=this
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
w=u}else v=s}w=B.BE(Math.atan2(v,w)*180/3.141592653589793)
w.toString
q=Math.abs(B.bMW(B.bMA(o.d,o.e),w))<=5
if(q&&!o.CW)A.bwo(80)
v=o.Q
o.Q=w
o.CW=q
o.as=d.b
w=d.c
s=d.d
if(!(w!=null&&Math.abs(w)>35))w=s!=null&&Math.abs(s)>35
else w=!0
o.at=w
o.ax=x.length>=10&&B.c4L(x)>12
o.ay=o.ch=!1
p=new A.b1(Date.now(),0,!1)
if(v==null||p.dM(o.db).a>33e3){o.db=p
x=o.cy
if(x!=null)x.aF()
o.cy=null
o.t(new B.bgl())}else if(o.cy==null)o.cy=A.cB(C.zX,new B.bgm(o))},
Hk(){var x=0,w=A.o(y.v),v,u=this,t,s
var $async$Hk=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:t=u.w
x=3
return A.d(t.Oj(),$async$Hk)
case 3:s=e
if(u.c==null){x=1
break}if(s){u.t(new B.bgf(u))
t.mS()}else{u.t(new B.bgg(u))
u.c.U(y.q).f.be(A.bQ(null,null,null,null,null,C.l,null,A.j("\u0645\u0646 \u063a\u064a\u0631 \u0625\u0630\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0647\u0646\u0648\u0631\u064a\u0643 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0628\u0627\u0644\u062f\u0631\u062c\u0627\u062a \u0628\u0633",null,null,null,null,null,null,null,null,null),null,C.C,null,null,null,null,null,null,null,null,null,null))}case 1:return A.m(v,w)}})
return A.n($async$Hk,w)},
xZ(d){return this.aF3(d)},
aJ5(){return this.xZ(!1)},
aF3(d){var x=0,w=A.o(y.v),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$xZ=A.k(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:r.t(new B.bgh(r))
u=4
x=d?7:9
break
case 7:x=10
return A.d(A.w3(!0),$async$xZ)
case 10:x=8
break
case 9:x=11
return A.d(A.AA(),$async$xZ)
case 11:case 8:q=f
if(r.c==null||q==null){s=[1]
x=5
break}r.t(new B.bgi(r,q))
s.push(6)
x=5
break
case 4:u=3
n=t.pop()
o=r.c
if(o!=null&&d)o.U(y.q).f.be(A.bQ(null,null,null,null,null,C.l,null,A.j("\u0645\u0642\u062f\u0631\u0646\u0627\u0634 \u0646\u062d\u062f\u062f \u0645\u0643\u0627\u0646\u0643 \u2014 \u0627\u062e\u062a\u0627\u0631 \u0645\u062f\u064a\u0646\u062a\u0643 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629",null,null,null,null,null,null,null,null,null),null,C.C,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.t(new B.bgj(r))
x=s.pop()
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$xZ,w)},
Jj(){var x=0,w=A.o(y.v),v,u=this,t,s
var $async$Jj=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.d(I.bMq(s),$async$Jj)
case 3:t=e
if(t==null||u.c==null){x=1
break}u.t(new B.bgn(u,t))
case 1:return A.m(v,w)}})
return A.n($async$Jj,w)},
A(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.bMA(p.d,p.e),m=p.Q,l=m==null,k=!l,j=k?B.bMW(n,m):0,i=k&&p.CW,h=p.as
if(h!=null)x=h<0||h>25
else x=!1
h=y.u
w=A.a([D.acH,C.as,A.aQ(A.j(p.f,o,o,o,o,o,F.aZ,o,o,o),1)],h)
if(p.r)w.push(M.pa)
else w.push(A.cG(o,o,o,o,D.aeW,o,o,new B.bgo(p),o,o,o,"\u062d\u062f\u0651\u062f \u0645\u0643\u0627\u0646\u064a",o))
w.push(A.bR(D.aY8,o,o,o,p.gaIA(),o,o))
w=A.ak(w,C.j,C.f,C.h,0,o,o)
v=l?0:m
v=A.cP(A.bn(new B.agY(v,k?j:n,i,o),290,290),o,o)
u=A.j("\u0627\u0644\u0642\u0628\u0644\u0629 \u0639\u0644\u0649 "+(E.aZ(C.e.ah(C.d.aq(B.BE(n)),360))+"\xb0")+" \u0645\u0646 \u0627\u0644\u0634\u0645\u0627\u0644",o,o,o,o,o,N.UF,C.ad,o,o)
t=D.ajB[C.e.ah(C.d.b9(B.BE(n)+22.5,45),8)]
s=p.d
r=p.e
q=Math.pow(Math.sin((21.4225-s)*3.141592653589793/180/2),2)+Math.cos(s*3.141592653589793/180)*Math.cos(0.37389315900848524)*Math.pow(Math.sin((39.8262-r)*3.141592653589793/180/2),2)
t=A.a([new E.cW(w,C.af,C.aA,o,!1,o),C.Q,v,C.aq,u,A.j("\u0646\u0627\u062d\u064a\u0629 "+t+" \u2022 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0644\u0643\u0639\u0628\u0629 \u062d\u0648\u0627\u0644\u064a "+E.aZ(C.d.aq(12742*Math.atan2(Math.sqrt(q),Math.sqrt(1-q))))+" \u0643\u0645",o,o,o,o,o,F.ak,C.ad,o,o)],h)
if(k){w=E.aZ(C.e.ah(C.d.aq(B.BE(m)),360))
v=p.as
v=v!=null&&v>=0?" \u2022 \u062f\u0642\u0629 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \xb1"+E.aZ(C.d.aq(v))+"\xb0":""
t.push(A.j("\u0627\u062a\u062c\u0627\u0647 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u062f\u0644\u0648\u0642\u062a\u064a "+(w+"\xb0")+v,o,o,o,o,o,D.aOS,C.ad,o,o))}t.push(C.aJ)
if(p.ch&&l)C.b.E(t,A.a([A.jL(D.adV,D.aUP,p.gatb(),A.jM(C.p,C.a5,o,o,o,o,o)),C.T],h))
if(k){l=i?"aligned":"turn "+C.d.aq(j)
if(i)h="\u062a\u0645\u0627\u0645! \u0625\u0646\u062a \u062f\u0644\u0648\u0642\u062a\u064a \u0645\u062a\u0648\u062c\u0651\u0647 \u0644\u0644\u0642\u0628\u0644\u0629 \u2713"
else{h=Math.abs(j)
h=j>0?"\u0644\u0641\u0651 \u064a\u0645\u064a\u0646 "+E.aZ(C.d.aq(h))+"\xb0":"\u0644\u0641\u0651 \u0634\u0645\u0627\u0644 "+E.aZ(C.d.aq(h))+"\xb0"}t.push(A.bD(o,o,o,new E.cW(A.j(h,o,o,o,o,o,A.cu(o,o,i?G.c3:C.i,o,o,o,o,o,o,o,o,16,o,o,C.a2,o,o,!0,o,o,o,o,o,o,o,o),C.ad,o,o),C.af,C.aA,o,i,o),!1,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,C.E,o))}else if(p.ay&&!p.ch)t.push(D.aaq)
else if(!p.ch)t.push(D.a0N)
if(k&&p.at)t.push(D.b6w)
if(k)l=x||p.ax
else l=!1
if(l)t.push(D.b6v)
t.push(C.T)
t.push(D.aUf)
return H.vT(o,t,"\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629")}}
B.TK.prototype={
A(d){var x=null
return new E.cW(A.ak(A.a([A.c6(this.c,C.p,x,22),C.aU,A.aQ(A.j(this.d,x,x,x,x,x,G.UJ,x,x,x),1)],y.u),C.j,C.f,C.h,0,x,x),C.af,C.aA,x,!1,x)}}
B.agY.prototype={
A(d){var x,w=null,v=this.e,u=v?G.c3:C.p,t=A.abZ(-this.c*3.141592653589793/180,A.fD(w,w,w,new B.amg(w),D.TV)),s=this.d,r=C.d.aq(s)
r=A.bD(w,w,w,A.abZ(s*3.141592653589793/180,A.fD(w,w,w,new B.afh(u,w),D.TV)),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"qibla-arrow "+r,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,C.E,w)
s=v?u:C.db
x=A.cR(u,2)
return A.h6(C.U,A.a([t,r,D.aBi,A.au(w,A.c6(C.eC,v?C.a5:C.p,w,w),C.m,w,w,new A.ap(s,w,x,w,w,w,C.cn),w,54,w,w,w,w,54)],y.u),C.l,C.ca,w)}}
B.amg.prototype={
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
m=new A.ox(C.d8,C.d1,C.fW,C.i5,C.e6)
m.r=(s?C.i:C.eW).gq()
m.c=s?2.5:1.2
l=m.e4()
x.drawLine.apply(x,[w+r*h,v+q*h,w+p*n,v+o*n,l])
l.delete()}for(x=D.ax2.gdG(),x=x.ga0(x),r=h-28;x.u();){q=x.gK()
p=q.a
t=(p-90)*3.141592653589793/180
q=q.b
p=p===0?D.a3B:C.a6
k=new A.Ab(new A.f1(q,j,j,C.be,j,j,j,j,j,j,new A.r(!0,p,j,j,j,j,16,C.a3,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)),C.z,C.aF,new A.j_(1),j,j,j,j,C.bc,j)
k.zy()
q=Math.cos(t)
p=Math.sin(t)
o=k.b
k.aJ(d,new A.q(w+q*r-o.c/2,v+p*r-o.a.c.gcm()/2))}},
eT(d){return!1}}
B.afh.prototype={
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
var z=a.updateTypes(["aa<~>()","~(xy)"])
B.av4.prototype={
$0(){var x,w,v=this.a
if(v.f)return
x=A.jz(b.G.document)
w=A.U(x==null?null:x.visibilityState)
if((w==null?null:w)==="visible")v.HB()},
$S:15}
B.av5.prototype={
$1(d){var x=this.a,w=x.w
if(w!=null&&new A.b1(Date.now(),0,!1).dM(w).a>3e6){x.w=new A.b1(Date.now(),0,!1)
x.HB()}},
$S:35}
B.av3.prototype={
$1(d){return this.a.av3(d)},
$S:3}
B.bgq.prototype={
$0(){var x=this.a
if(x.c!=null&&x.Q==null)x.t(new B.bgp(x))},
$S:0}
B.bgp.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.bgl.prototype={
$0(){},
$S:0}
B.bgm.prototype={
$0(){var x=this.a
x.cy=null
x.db=new A.b1(Date.now(),0,!1)
if(x.c!=null)x.t(new B.bgk())},
$S:0}
B.bgk.prototype={
$0(){},
$S:0}
B.bgf.prototype={
$0(){return this.a.ch=!1},
$S:0}
B.bgg.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.bgh.prototype={
$0(){return this.a.r=!0},
$S:0}
B.bgi.prototype={
$0(){var x=this.a,w=this.b
x.d=w.a
x.e=w.b
x.f="\u0645\u0643\u0627\u0646\u0643 \u0627\u0644\u062d\u0627\u0644\u064a"},
$S:0}
B.bgj.prototype={
$0(){return this.a.r=!1},
$S:0}
B.bgn.prototype={
$0(){var x=this.a,w=this.b
x.d=w.b
x.e=w.c
x.f=w.glH()},
$S:0}
B.bgo.prototype={
$0(){return this.a.xZ(!0)},
$S:0};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.V4.prototype,"gaGH","aGI",1)
w(v,"gatb","Hk",0)
w(v,"gaIA","Jj",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.av2,B.aBz,B.xy])
x(A.kl,[B.av4,B.bgq,B.bgp,B.bgl,B.bgm,B.bgk,B.bgf,B.bgg,B.bgh,B.bgi,B.bgj,B.bgn,B.bgo])
x(A.hS,[B.av5,B.av3])
w(B.v6,A.P)
w(B.V4,A.T)
x(A.a2,[B.TK,B.agY])
x(A.CD,[B.amg,B.afh])})()
A.oc(b.typeUniverse,JSON.parse('{"v6":{"P":[],"e":[]},"V4":{"T":["v6"]},"TK":{"a2":[],"e":[]},"agY":{"a2":[],"e":[]},"amg":{"as":[]},"afh":{"as":[]}}'))
var y={a:A.a3("y<ek>"),u:A.a3("y<e>"),h:A.a3("y<J>"),w:A.a3("f"),o:A.a3("kQ<xy>"),q:A.a3("o9"),e:A.a3("A"),v:A.a3("~")};(function constants(){var x=a.makeConstList
D.aWK=new A.t("\u0628\u0646\u062f\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u0628\u0648\u0635\u0644\u0629\u2026",null,F.ak,null,null,null,null,null,null,null,null)
D.a0N=new A.dQ(C.U,null,null,D.aWK,null)
D.a3B=new A.H(1,1,0.4196078431372549,0.4196078431372549,C.k)
D.a7K=new A.bq(3e6)
D.aRz=new A.r(!0,C.a6,null,null,null,null,13,null,null,null,null,null,1.7,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYO=new A.t("\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u0634 \u0645\u062a\u0627\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u0623\u0648 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647. \u062d\u0637 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0648\u062c\u0651\u0647 \u062d\u0631\u0641 \xab\u0634\xbb (\u0627\u0644\u0634\u0645\u0627\u0644) \u0646\u0627\u062d\u064a\u0629 \u0627\u0644\u0634\u0645\u0627\u0644 \u2014 \u062a\u0642\u062f\u0631 \u062a\u0639\u0631\u0641\u0647 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062e\u0631\u0627\u0626\u0637 \u0623\u0648 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u2014 \u0648\u0627\u0644\u0633\u0647\u0645 \u0627\u0644\u062f\u0647\u0628\u064a \u0647\u064a\u0628\u0642\u0649 \u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629.",null,D.aRz,null,null,null,null,null,null,null,null)
D.aaq=new E.cW(D.aYO,C.af,C.aA,null,!1,null)
D.acH=new A.a5(K.Bs,null,C.p,null,null,null)
D.adV=new A.a5(C.tL,null,null,null,null,null)
D.aeW=new A.a5(C.j_,null,C.a6,null,null,null)
D.ajB=x(["\u0627\u0644\u0634\u0645\u0627\u0644","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u0634\u0631\u0642","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u062c\u0646\u0648\u0628","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u063a\u0631\u0628\u064a","\u0627\u0644\u063a\u0631\u0628","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u063a\u0631\u0628\u064a"],A.a3("y<f>"))
D.ax2=new A.cF([0,"\u0634",90,"\u0642",180,"\u062c",270,"\u063a"],A.a3("cF<u,f>"))
D.aec=new A.a5(C.B8,34,C.i,null,null,null)
D.aBi=new A.rd(null,0,null,null,null,null,D.aec,null)
D.TV=new A.G(290,290)
D.aOS=new A.r(!0,C.a6,null,null,null,null,13,null,null,null,null,null,1.8,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUf=new A.t("\u0646\u0635\u064a\u062d\u0629: \u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0628\u0639\u064a\u062f \u0639\u0646 \u0627\u0644\u062d\u062f\u064a\u062f \u0648\u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633 \u0648\u062c\u0631\u0627\u0628 \u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633. \u0644\u0648 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0645\u0634 \u062b\u0627\u0628\u062a \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0641\u064a \u0634\u0643\u0644 \u0631\u0642\u0645 8 \u0643\u0627\u0645 \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u062a\u062a\u0638\u0628\u0637.",null,F.ak,C.ad,null,null,null,null,null,null,null)
D.aUP=new A.t("\u0634\u063a\u0651\u0644 \u0627\u0644\u0628\u0648\u0635\u0644\u0629",null,null,null,null,null,null,null,null,null,null)
D.aY8=new A.t("\u0645\u062f\u064a\u0646\u0629 \u062a\u0627\u0646\u064a\u0629",null,C.el,null,null,null,null,null,null,null,null)
D.aba=new A.a4(62812,"MaterialIcons",null,!1)
D.b6v=new B.TK(D.aba,"\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u062d\u062a\u0627\u062c\u0629 \u0645\u0639\u0627\u064a\u0631\u0629: \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0639\u0644\u0649 \u0634\u0643\u0644 8 \u0641\u064a \u0627\u0644\u0647\u0648\u0627 \u0643\u0627\u0645 \u0645\u0631\u0629",null)
D.acm=new A.a4(985111,"MaterialIcons",null,!1)
D.b6w=new B.TK(D.acm,"\u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0641\u0631\u0648\u062f (\u0645\u0633\u0637\u0651\u062d \u0632\u064a \u0627\u0644\u0635\u064a\u0646\u064a\u0629) \u0639\u0634\u0627\u0646 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u064a\u0628\u0642\u0649 \u0645\u0638\u0628\u0648\u0637",null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ccB","bOX",()=>A.bAK())})()};
(a=>{a["Z/VRVshsC2gwG/AlD4RPu0h7MXQ="]=a.current})($__dart_deferred_initializers__);