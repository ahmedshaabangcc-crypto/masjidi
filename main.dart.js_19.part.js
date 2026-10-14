((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,B={
BV(d){var x,w,v
if(d==null)return null
try{x=A.df(d)
w=isNaN(x)?null:x
return w}catch(v){return null}},
atG:function atG(d){var _=this
_.a=d
_.d=_.c=_.b=null
_.r=_.f=_.e=!1
_.w=null},
atI:function atI(d){this.a=d},
atJ:function atJ(d){this.a=d},
atH:function atH(d){this.a=d},
bJw(d,e){var x=d*3.141592653589793/180,w=(39.8262-e)*3.141592653589793/180
return B.B6(Math.atan2(Math.sin(w)*Math.cos(0.37389315900848524),Math.cos(x)*Math.sin(0.37389315900848524)-Math.sin(x)*Math.cos(0.37389315900848524)*Math.cos(w))*180/3.141592653589793)},
B6(d){var x=C.d.af(d,360)
return x<0?x+360:x},
bJS(d,e){var x=B.B6(d-e)
return x>=180?x-360:x},
c1u(d){var x,w,v,u,t,s=d.length
if(s<2)return 0
for(x=0,w=0,v=0;v<d.length;d.length===s||(0,A.B)(d),++v){u=d[v]*3.141592653589793/180
x+=Math.cos(u)
w+=Math.sin(u)}t=Math.sqrt(x*x+w*w)/d.length
if(t>=1)return 0
if(t<=1e-9)return 180
return Math.sqrt(-2*Math.log(t))*180/3.141592653589793},
aA3:function aA3(d){this.a=d
this.c=this.b=null},
x7:function x7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTQ(){return new B.uR(null)},
uR:function uR(d){this.a=d},
Ui:function Ui(d,e,f,g,h,i,j){var _=this
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
bdX:function bdX(d){this.a=d},
bdW:function bdW(d){this.a=d},
bdS:function bdS(){},
bdT:function bdT(d){this.a=d},
bdR:function bdR(){},
bdM:function bdM(d){this.a=d},
bdN:function bdN(d){this.a=d},
bdO:function bdO(d){this.a=d},
bdP:function bdP(d,e){this.a=d
this.b=e},
bdQ:function bdQ(d){this.a=d},
bdU:function bdU(d,e){this.a=d
this.b=e},
bdV:function bdV(d){this.a=d},
SY:function SY(d,e,f){this.c=d
this.d=e
this.a=f},
afW:function afW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alb:function alb(d){this.a=d},
aef:function aef(d,e){this.b=d
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
B.atG.prototype={
NX(){var x=0,w=A.n(y.e),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$NX=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
n=b.G
r=A.jq(n.DeviceOrientationEvent)
if(r==null||r.requestPermission==null){n=A.jq(n.DeviceOrientationEvent)
v=n!=null
x=1
break}x=7
return A.d(A.dX(A.cm(A.cc(r,"requestPermission",null,null,null,null)),y.w),$async$NX)
case 7:q=e
p=q==="granted"
if(p)s.Ho()
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
return A.m($async$NX,w)},
a9_(){var x,w,v,u,t,s
try{u=b.G
x=A.jq(u.screen)
t=x
w=A.jq(t==null?null:t.orientation)
t=w
v=B.BV(t==null?null:t.angle)
if(v!=null)return v
u=B.BV(u.orientation)
if(u==null)u=0
return u}catch(s){return 0}},
aug(d){var x,w,v,u,t,s,r,q,p,o,n=this,m="deviceorientationabsolute"
if(n.f)return
try{x=B.BV(d.beta)
w=B.BV(d.gamma)
v=B.BV(d.webkitCompassHeading)
if(v!=null){n.w=new A.b6(Date.now(),0,!1)
n.a.D(0,new B.x7(B.B6(v+n.a9_()),B.BV(d.webkitCompassAccuracy),x,w))
return}u=B.BV(d.alpha)
if(u==null)return
r=A.X(d.type)
t=r==null?null:r
if(!J.c(t,m)){q=A.hq(d.absolute)
if(q==null)q=null
p=q===!0}else p=!0
s=p
if(!s)return
if(J.c(t,m))n.r=!0
else if(n.r)return
n.w=new A.b6(Date.now(),0,!1)
n.a.D(0,new B.x7(B.B6(360-u+n.a9_()),null,x,w))}catch(o){}},
mM(){var x,w,v,u=this,t=null,s="addEventListener"
if(u.e||u.f)return
u.e=!0
u.Ho()
x=u.c=A.bHe(new B.atI(u))
w=b.G
v=A.jq(w.document)
if(v!=null)A.cc(v,s,"visibilitychange",x,t,t)
A.cc(w,s,"pageshow",x,t,t)
u.d=A.mo(C.ko,new B.atJ(u))},
Ho(){var x,w,v=this,u=null,t="addEventListener"
if(v.f)return
v.a3z()
x=v.b=A.eZ(new B.atH(v))
w=b.G
if("ondeviceorientationabsolute" in w)A.cc(w,t,"deviceorientationabsolute",x,u,u)
A.cc(w,t,"deviceorientation",x,u,u)},
a3z(){var x,w=null,v="removeEventListener",u=this.b
if(u==null)return
x=b.G
A.cc(x,v,"deviceorientationabsolute",u,w,w)
A.cc(x,v,"deviceorientation",u,w,w)
this.b=null},
l(){var x,w,v,u=this,t=null,s="removeEventListener"
if(u.f)return
u.f=!0
x=u.d
if(x!=null)x.aF()
u.a3z()
w=u.c
if(w!=null){x=b.G
v=A.jq(x.document)
if(v!=null)A.cc(v,s,"visibilitychange",w,t,t)
A.cc(x,s,"pageshow",w,t,t)}u.a.bg()}}
B.aA3.prototype={}
B.x7.prototype={}
B.uR.prototype={
V(){var x=$.bLR().a,w=x[1],v=x[2]
x=x[0]
return new B.Ui(w,v,x+" (\u062a\u0642\u0631\u064a\u0628\u064a)",new B.atG(new A.kG(null,null,y.o)),new B.aA3(0.2),A.a([],y.h),new A.b6(A.kf(0,0,!1),0,!1))}}
B.Ui.prototype={
ad(){var x,w,v,u=this
u.ar()
x=A.jq(b.G.DeviceOrientationEvent)
u.ch=x!=null&&x.requestPermission!=null
w=u.w
v=w.a
u.z=new A.ez(v,A.w(v).i("ez<1>")).ka(u.gaFG())
w.mM()
u.cx=A.cB(D.a6T,new B.bdX(u))
u.aI2()},
l(){var x=this,w=x.cx
if(w!=null)w.aF()
w=x.cy
if(w!=null)w.aF()
w=x.z
if(w!=null)w.aF()
x.w.l()
x.aq()},
aFH(d){var x,w,v,u,t,s,r,q,p,o=this
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
w=u}else v=s}w=B.B6(Math.atan2(v,w)*180/3.141592653589793)
w.toString
q=Math.abs(B.bJS(B.bJw(o.d,o.e),w))<=5
if(q&&!o.CW)A.btx(80)
v=o.Q
o.Q=w
o.CW=q
o.as=d.b
w=d.c
s=d.d
if(!(w!=null&&Math.abs(w)>35))w=s!=null&&Math.abs(s)>35
else w=!0
o.at=w
o.ax=x.length>=10&&B.c1u(x)>12
o.ay=o.ch=!1
p=new A.b6(Date.now(),0,!1)
if(v==null||p.dI(o.db).a>33e3){o.db=p
x=o.cy
if(x!=null)x.aF()
o.cy=null
o.t(new B.bdS())}else if(o.cy==null)o.cy=A.cB(C.zp,new B.bdT(o))},
H7(){var x=0,w=A.n(y.v),v,u=this,t,s
var $async$H7=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
x=3
return A.d(t.NX(),$async$H7)
case 3:s=e
if(u.c==null){x=1
break}if(s){u.t(new B.bdM(u))
t.mM()}else{u.t(new B.bdN(u))
u.c.U(y.q).f.be(A.bP(null,null,null,null,null,C.l,null,A.o("\u0645\u0646 \u063a\u064a\u0631 \u0625\u0630\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0647\u0646\u0648\u0631\u064a\u0643 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0628\u0627\u0644\u062f\u0631\u062c\u0627\u062a \u0628\u0633",null,null,null,null,null,null,null,null),null,C.D,null,null,null,null,null,null,null,null,null,null))}case 1:return A.l(v,w)}})
return A.m($async$H7,w)},
xL(d){return this.aE3(d)},
aI2(){return this.xL(!1)},
aE3(d){var x=0,w=A.n(y.v),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$xL=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:r.t(new B.bdO(r))
u=4
x=d?7:9
break
case 7:x=10
return A.d(A.vK(!0),$async$xL)
case 10:x=8
break
case 9:x=11
return A.d(A.A3(),$async$xL)
case 11:case 8:q=f
if(r.c==null||q==null){s=[1]
x=5
break}r.t(new B.bdP(r,q))
s.push(6)
x=5
break
case 4:u=3
n=t.pop()
o=r.c
if(o!=null&&d)o.U(y.q).f.be(A.bP(null,null,null,null,null,C.l,null,A.o("\u0645\u0642\u062f\u0631\u0646\u0627\u0634 \u0646\u062d\u062f\u062f \u0645\u0643\u0627\u0646\u0643 \u2014 \u0627\u062e\u062a\u0627\u0631 \u0645\u062f\u064a\u0646\u062a\u0643 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629",null,null,null,null,null,null,null,null),null,C.D,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.t(new B.bdQ(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$xL,w)},
J4(){var x=0,w=A.n(y.v),v,u=this,t,s
var $async$J4=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.d(I.bJm(s),$async$J4)
case 3:t=e
if(t==null||u.c==null){x=1
break}u.t(new B.bdU(u,t))
case 1:return A.l(v,w)}})
return A.m($async$J4,w)},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.bJw(p.d,p.e),m=p.Q,l=m==null,k=!l,j=k?B.bJS(n,m):0,i=k&&p.CW,h=p.as
if(h!=null)x=h<0||h>25
else x=!1
h=y.u
w=A.a([D.abK,C.aq,A.aS(A.o(p.f,o,o,o,o,F.aX,o,o,o),1)],h)
if(p.r)w.push(M.oU)
else w.push(A.cI(o,o,o,o,D.ae0,o,o,new B.bdV(p),o,o,o,"\u062d\u062f\u0651\u062f \u0645\u0643\u0627\u0646\u064a",o))
w.push(A.bX(D.aWj,o,o,o,p.gaHx(),o,o))
w=A.ak(w,C.j,C.f,C.h,0,o)
v=l?0:m
v=A.cV(A.bw(new B.afW(v,k?j:n,i,o),290,290),o,o)
u=A.o("\u0627\u0644\u0642\u0628\u0644\u0629 \u0639\u0644\u0649 "+(E.aZ(C.e.af(C.d.ao(B.B6(n)),360))+"\xb0")+" \u0645\u0646 \u0627\u0644\u0634\u0645\u0627\u0644",o,o,o,o,N.U7,C.af,o,o)
t=D.aiA[C.e.af(C.d.bc(B.B6(n)+22.5,45),8)]
s=p.d
r=p.e
q=Math.pow(Math.sin((21.4225-s)*3.141592653589793/180/2),2)+Math.cos(s*3.141592653589793/180)*Math.cos(0.37389315900848524)*Math.pow(Math.sin((39.8262-r)*3.141592653589793/180/2),2)
t=A.a([new E.cU(w,C.ad,C.ax,o,!1,o),C.S,v,C.ar,u,A.o("\u0646\u0627\u062d\u064a\u0629 "+t+" \u2022 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0644\u0643\u0639\u0628\u0629 \u062d\u0648\u0627\u0644\u064a "+E.aZ(C.d.ao(12742*Math.atan2(Math.sqrt(q),Math.sqrt(1-q))))+" \u0643\u0645",o,o,o,o,F.ag,C.af,o,o)],h)
if(k){w=E.aZ(C.e.af(C.d.ao(B.B6(m)),360))
v=p.as
v=v!=null&&v>=0?" \u2022 \u062f\u0642\u0629 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \xb1"+E.aZ(C.d.ao(v))+"\xb0":""
t.push(A.o("\u0627\u062a\u062c\u0627\u0647 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u062f\u0644\u0648\u0642\u062a\u064a "+(w+"\xb0")+v,o,o,o,o,D.aN1,C.af,o,o))}t.push(C.aK)
if(p.ch&&l)C.b.E(t,A.a([A.jC(D.acZ,D.aSX,p.gasn(),A.jD(C.q,C.a3,o,o,o,o,o)),C.R],h))
if(k){l=i?"aligned":"turn "+C.d.ao(j)
if(i)h="\u062a\u0645\u0627\u0645! \u0625\u0646\u062a \u062f\u0644\u0648\u0642\u062a\u064a \u0645\u062a\u0648\u062c\u0651\u0647 \u0644\u0644\u0642\u0628\u0644\u0629 \u2713"
else{h=Math.abs(j)
h=j>0?"\u0644\u0641\u0651 \u064a\u0645\u064a\u0646 "+E.aZ(C.d.ao(h))+"\xb0":"\u0644\u0641\u0651 \u0634\u0645\u0627\u0644 "+E.aZ(C.d.ao(h))+"\xb0"}t.push(A.bD(o,o,o,new E.cU(A.o(h,o,o,o,o,A.cH(o,o,i?G.bX:C.i,o,o,o,o,o,o,o,o,16,o,o,C.a5,o,o,!0,o,o,o,o,o,o,o,o),C.af,o,o),C.ad,C.ax,o,i,o),!1,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,C.F,o))}else if(p.ay&&!p.ch)t.push(D.a9v)
else if(!p.ch)t.push(D.a07)
if(k&&p.at)t.push(D.b4v)
if(k)l=x||p.ax
else l=!1
if(l)t.push(D.b4u)
t.push(C.R)
t.push(D.aSo)
return H.vA(o,t,"\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629")}}
B.SY.prototype={
C(d){var x=null
return new E.cU(A.ak(A.a([A.c6(this.c,C.q,x,22),C.aZ,A.aS(A.o(this.d,x,x,x,x,G.Uc,x,x,x),1)],y.u),C.j,C.f,C.h,0,x),C.ad,C.ax,x,!1,x)}}
B.afW.prototype={
C(d){var x,w=null,v=this.e,u=v?G.bX:C.q,t=A.aaX(-this.c*3.141592653589793/180,A.fA(w,w,w,new B.alb(w),D.Tn)),s=this.d,r=C.d.ao(s)
r=A.bD(w,w,w,A.aaX(s*3.141592653589793/180,A.fA(w,w,w,new B.aef(u,w),D.Tn)),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"qibla-arrow "+r,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,C.F,w)
s=v?u:C.d7
x=A.d3(u,2)
return A.hl(C.W,A.a([t,r,D.azO,A.aC(w,A.c6(C.ey,v?C.a3:C.q,w,w),C.m,w,w,new A.as(s,w,x,w,w,w,C.cw),w,54,w,w,w,w,54)],y.u),C.l,C.ca,w)}}
B.alb.prototype={
aJ(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=e.jz(C.o),h=e.gfv()/2-18
$.ad()
x=A.b_()
x.r=C.i.bZ(0.06).gq()
d.fR(i,h,x)
x=A.b_()
x.b=C.bx
x.r=L.hd.gq()
x.c=2
d.fR(i,h,x)
for(x=d.a,w=i.a,v=i.b,u=0;u<360;u+=10){t=(u-90)*3.141592653589793/180
s=C.e.af(u,90)===0
r=Math.cos(t)
q=Math.sin(t)
p=Math.cos(t)
o=Math.sin(t)
n=h-(s?14:7)
m=new A.ol(C.d5,C.cY,C.fO,C.i_,C.e2)
m.r=(s?C.i:C.eS).gq()
m.c=s?2.5:1.2
l=m.eu()
x.drawLine.apply(x,[w+r*h,v+q*h,w+p*n,v+o*n,l])
l.delete()}for(x=D.avO.gdJ(),x=x.ga1(x),r=h-28;x.u();){q=x.gL()
p=q.a
t=(p-90)*3.141592653589793/180
q=q.b
p=p===0?D.a2W:C.a6
k=new A.zE(new A.fn(q,j,j,C.bn,j,j,j,j,j,j,new A.r(!0,p,j,j,j,j,16,C.a2,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)),C.y,C.aM,new A.iS(1),j,j,j,j,C.bd,j)
k.zk()
q=Math.cos(t)
p=Math.sin(t)
o=k.b
k.aJ(d,new A.q(w+q*r-o.c/2,v+p*r-o.a.c.gci()/2))}},
eQ(d){return!1}}
B.aef.prototype={
aJ(d,e){var x,w,v,u,t,s=e.jz(C.o),r=e.gfv()/2-18,q=s.a_(0,C.l0.al(0,r+12)),p=$.ad(),o=A.b_(),n=this.b
o.r=n.gq()
x=s.a_(0,C.l0.al(0,34))
w=s.a_(0,C.l0.al(0,r-6))
v=A.b_()
v.r=n.gq()
v.c=5
v.d=C.ju
d.lp(x,w,v)
u=s.a_(0,C.l0.al(0,r-14))
t=new A.cb(p.r,C.ab,null,null,A.a([],y.a))
t.aG(new A.fk(q.a,q.b))
t.aG(new A.cQ(u.a_(0,C.f8.al(0,11)).a,u.a_(0,C.f8.al(0,11)).b))
t.aG(new A.cQ(u.aj(0,C.f8.al(0,11)).a,u.aj(0,C.f8.al(0,11)).b))
t.aG(new A.lX())
d.fD(t,o)},
eQ(d){return!d.b.k(0,this.b)}}
var z=a.updateTypes(["a9<~>()","~(x7)"])
B.atI.prototype={
$0(){var x,w,v=this.a
if(v.f)return
x=A.jq(b.G.document)
w=A.X(x==null?null:x.visibilityState)
if((w==null?null:w)==="visible")v.Ho()},
$S:15}
B.atJ.prototype={
$1(d){var x=this.a,w=x.w
if(w!=null&&new A.b6(Date.now(),0,!1).dI(w).a>3e6){x.w=new A.b6(Date.now(),0,!1)
x.Ho()}},
$S:41}
B.atH.prototype={
$1(d){return this.a.aug(d)},
$S:3}
B.bdX.prototype={
$0(){var x=this.a
if(x.c!=null&&x.Q==null)x.t(new B.bdW(x))},
$S:0}
B.bdW.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.bdS.prototype={
$0(){},
$S:0}
B.bdT.prototype={
$0(){var x=this.a
x.cy=null
x.db=new A.b6(Date.now(),0,!1)
if(x.c!=null)x.t(new B.bdR())},
$S:0}
B.bdR.prototype={
$0(){},
$S:0}
B.bdM.prototype={
$0(){return this.a.ch=!1},
$S:0}
B.bdN.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.bdO.prototype={
$0(){return this.a.r=!0},
$S:0}
B.bdP.prototype={
$0(){var x=this.a,w=this.b
x.d=w.a
x.e=w.b
x.f="\u0645\u0643\u0627\u0646\u0643 \u0627\u0644\u062d\u0627\u0644\u064a"},
$S:0}
B.bdQ.prototype={
$0(){return this.a.r=!1},
$S:0}
B.bdU.prototype={
$0(){var x=this.a,w=this.b
x.d=w.b
x.e=w.c
x.f=w.glx()},
$S:0}
B.bdV.prototype={
$0(){return this.a.xL(!0)},
$S:0};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Ui.prototype,"gaFG","aFH",1)
w(v,"gasn","H7",0)
w(v,"gaHx","J4",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.atG,B.aA3,B.x7])
x(A.kb,[B.atI,B.bdX,B.bdW,B.bdS,B.bdT,B.bdR,B.bdM,B.bdN,B.bdO,B.bdP,B.bdQ,B.bdU,B.bdV])
x(A.hJ,[B.atJ,B.atH])
w(B.uR,A.P)
w(B.Ui,A.S)
x(A.a7,[B.SY,B.afW])
x(A.C3,[B.alb,B.aef])})()
A.o2(b.typeUniverse,JSON.parse('{"uR":{"P":[],"e":[]},"Ui":{"S":["uR"]},"SY":{"a7":[],"e":[]},"afW":{"a7":[],"e":[]},"alb":{"ar":[]},"aef":{"ar":[]}}'))
var y={a:A.a0("y<ee>"),u:A.a0("y<e>"),h:A.a0("y<J>"),w:A.a0("h"),o:A.a0("kG<x7>"),q:A.a0("o_"),e:A.a0("A"),v:A.a0("~")};(function constants(){var x=a.makeConstList
D.aUU=new A.t("\u0628\u0646\u062f\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u0628\u0648\u0635\u0644\u0629\u2026",null,F.ag,null,null,null,null,null,null,null,null)
D.a07=new A.dY(C.W,null,null,D.aUU,null)
D.a2W=new A.H(1,1,0.4196078431372549,0.4196078431372549,C.k)
D.a6T=new A.bo(3e6)
D.aPH=new A.r(!0,C.a6,null,null,null,null,13,null,null,null,null,null,1.7,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWY=new A.t("\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u0634 \u0645\u062a\u0627\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u0623\u0648 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647. \u062d\u0637 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0648\u062c\u0651\u0647 \u062d\u0631\u0641 \xab\u0634\xbb (\u0627\u0644\u0634\u0645\u0627\u0644) \u0646\u0627\u062d\u064a\u0629 \u0627\u0644\u0634\u0645\u0627\u0644 \u2014 \u062a\u0642\u062f\u0631 \u062a\u0639\u0631\u0641\u0647 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062e\u0631\u0627\u0626\u0637 \u0623\u0648 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u2014 \u0648\u0627\u0644\u0633\u0647\u0645 \u0627\u0644\u062f\u0647\u0628\u064a \u0647\u064a\u0628\u0642\u0649 \u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629.",null,D.aPH,null,null,null,null,null,null,null,null)
D.a9v=new E.cU(D.aWY,C.ad,C.ax,null,!1,null)
D.abK=new A.a2(K.AQ,null,C.q,null,null,null)
D.acZ=new A.a2(C.tm,null,null,null,null,null)
D.ae0=new A.a2(C.iT,null,C.a6,null,null,null)
D.aiA=x(["\u0627\u0644\u0634\u0645\u0627\u0644","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u0634\u0631\u0642","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u062c\u0646\u0648\u0628","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u063a\u0631\u0628\u064a","\u0627\u0644\u063a\u0631\u0628","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u063a\u0631\u0628\u064a"],A.a0("y<h>"))
D.avO=new A.cD([0,"\u0634",90,"\u0642",180,"\u062c",270,"\u063a"],A.a0("cD<v,h>"))
D.adh=new A.a2(C.Ax,34,C.i,null,null,null)
D.azO=new A.qW(null,0,null,null,null,null,D.adh,null)
D.Tn=new A.G(290,290)
D.aN1=new A.r(!0,C.a6,null,null,null,null,13,null,null,null,null,null,1.8,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSo=new A.t("\u0646\u0635\u064a\u062d\u0629: \u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0628\u0639\u064a\u062f \u0639\u0646 \u0627\u0644\u062d\u062f\u064a\u062f \u0648\u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633 \u0648\u062c\u0631\u0627\u0628 \u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633. \u0644\u0648 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0645\u0634 \u062b\u0627\u0628\u062a \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0641\u064a \u0634\u0643\u0644 \u0631\u0642\u0645 8 \u0643\u0627\u0645 \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u062a\u062a\u0638\u0628\u0637.",null,F.ag,C.af,null,null,null,null,null,null,null)
D.aSX=new A.t("\u0634\u063a\u0651\u0644 \u0627\u0644\u0628\u0648\u0635\u0644\u0629",null,null,null,null,null,null,null,null,null,null)
D.aWj=new A.t("\u0645\u062f\u064a\u0646\u0629 \u062a\u0627\u0646\u064a\u0629",null,C.ek,null,null,null,null,null,null,null,null)
D.aag=new A.a3(62812,"MaterialIcons",null,!1)
D.b4u=new B.SY(D.aag,"\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u062d\u062a\u0627\u062c\u0629 \u0645\u0639\u0627\u064a\u0631\u0629: \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0639\u0644\u0649 \u0634\u0643\u0644 8 \u0641\u064a \u0627\u0644\u0647\u0648\u0627 \u0643\u0627\u0645 \u0645\u0631\u0629",null)
D.abs=new A.a3(985111,"MaterialIcons",null,!1)
D.b4v=new B.SY(D.abs,"\u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0641\u0631\u0648\u062f (\u0645\u0633\u0637\u0651\u062d \u0632\u064a \u0627\u0644\u0635\u064a\u0646\u064a\u0629) \u0639\u0634\u0627\u0646 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u064a\u0628\u0642\u0649 \u0645\u0638\u0628\u0648\u0637",null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c9i","bLR",()=>A.bxM())})()};
(a=>{a["y/ec1kdpWZ39aZt1R2nwoBBUTqg="]=a.current})($__dart_deferred_initializers__);