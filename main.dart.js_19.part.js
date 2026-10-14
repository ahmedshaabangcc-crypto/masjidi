((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,B={
BW(d){var x,w,v
if(d==null)return null
try{x=A.dg(d)
w=isNaN(x)?null:x
return w}catch(v){return null}},
atJ:function atJ(d){var _=this
_.a=d
_.d=_.c=_.b=null
_.r=_.f=_.e=!1
_.w=null},
atL:function atL(d){this.a=d},
atM:function atM(d){this.a=d},
atK:function atK(d){this.a=d},
bJF(d,e){var x=d*3.141592653589793/180,w=(39.8262-e)*3.141592653589793/180
return B.B8(Math.atan2(Math.sin(w)*Math.cos(0.37389315900848524),Math.cos(x)*Math.sin(0.37389315900848524)-Math.sin(x)*Math.cos(0.37389315900848524)*Math.cos(w))*180/3.141592653589793)},
B8(d){var x=C.d.af(d,360)
return x<0?x+360:x},
bK0(d,e){var x=B.B8(d-e)
return x>=180?x-360:x},
c1H(d){var x,w,v,u,t,s=d.length
if(s<2)return 0
for(x=0,w=0,v=0;v<d.length;d.length===s||(0,A.B)(d),++v){u=d[v]*3.141592653589793/180
x+=Math.cos(u)
w+=Math.sin(u)}t=Math.sqrt(x*x+w*w)/d.length
if(t>=1)return 0
if(t<=1e-9)return 180
return Math.sqrt(-2*Math.log(t))*180/3.141592653589793},
aA6:function aA6(d){this.a=d
this.c=this.b=null},
xa:function xa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bU_(){return new B.uR(null)},
uR:function uR(d){this.a=d},
Uk:function Uk(d,e,f,g,h,i,j){var _=this
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
be1:function be1(d){this.a=d},
be0:function be0(d){this.a=d},
bdX:function bdX(){},
bdY:function bdY(d){this.a=d},
bdW:function bdW(){},
bdR:function bdR(d){this.a=d},
bdS:function bdS(d){this.a=d},
bdT:function bdT(d){this.a=d},
bdU:function bdU(d,e){this.a=d
this.b=e},
bdV:function bdV(d){this.a=d},
bdZ:function bdZ(d,e){this.a=d
this.b=e},
be_:function be_(d){this.a=d},
T_:function T_(d,e,f){this.c=d
this.d=e
this.a=f},
afZ:function afZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ale:function ale(d){this.a=d},
aei:function aei(d,e){this.b=d
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
B.atJ.prototype={
NZ(){var x=0,w=A.n(y.e),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$NZ=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
n=b.G
r=A.jr(n.DeviceOrientationEvent)
if(r==null||r.requestPermission==null){n=A.jr(n.DeviceOrientationEvent)
v=n!=null
x=1
break}x=7
return A.d(A.dX(A.cm(A.cc(r,"requestPermission",null,null,null,null)),y.w),$async$NZ)
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
return A.m($async$NZ,w)},
a9_(){var x,w,v,u,t,s
try{u=b.G
x=A.jr(u.screen)
t=x
w=A.jr(t==null?null:t.orientation)
t=w
v=B.BW(t==null?null:t.angle)
if(v!=null)return v
u=B.BW(u.orientation)
if(u==null)u=0
return u}catch(s){return 0}},
aug(d){var x,w,v,u,t,s,r,q,p,o,n=this,m="deviceorientationabsolute"
if(n.f)return
try{x=B.BW(d.beta)
w=B.BW(d.gamma)
v=B.BW(d.webkitCompassHeading)
if(v!=null){n.w=new A.b6(Date.now(),0,!1)
n.a.D(0,new B.xa(B.B8(v+n.a9_()),B.BW(d.webkitCompassAccuracy),x,w))
return}u=B.BW(d.alpha)
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
n.a.D(0,new B.xa(B.B8(360-u+n.a9_()),null,x,w))}catch(o){}},
mM(){var x,w,v,u=this,t=null,s="addEventListener"
if(u.e||u.f)return
u.e=!0
u.Ho()
x=u.c=A.bHn(new B.atL(u))
w=b.G
v=A.jr(w.document)
if(v!=null)A.cc(v,s,"visibilitychange",x,t,t)
A.cc(w,s,"pageshow",x,t,t)
u.d=A.mp(C.ko,new B.atM(u))},
Ho(){var x,w,v=this,u=null,t="addEventListener"
if(v.f)return
v.a3z()
x=v.b=A.eZ(new B.atK(v))
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
v=A.jr(x.document)
if(v!=null)A.cc(v,s,"visibilitychange",w,t,t)
A.cc(x,s,"pageshow",w,t,t)}u.a.bg()}}
B.aA6.prototype={}
B.xa.prototype={}
B.uR.prototype={
V(){var x=$.bM0().a,w=x[1],v=x[2]
x=x[0]
return new B.Uk(w,v,x+" (\u062a\u0642\u0631\u064a\u0628\u064a)",new B.atJ(new A.kI(null,null,y.o)),new B.aA6(0.2),A.a([],y.h),new A.b6(A.kg(0,0,!1),0,!1))}}
B.Uk.prototype={
ad(){var x,w,v,u=this
u.ar()
x=A.jr(b.G.DeviceOrientationEvent)
u.ch=x!=null&&x.requestPermission!=null
w=u.w
v=w.a
u.z=new A.ez(v,A.w(v).i("ez<1>")).ka(u.gaFG())
w.mM()
u.cx=A.cB(D.a6H,new B.be1(u))
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
w=u}else v=s}w=B.B8(Math.atan2(v,w)*180/3.141592653589793)
w.toString
q=Math.abs(B.bK0(B.bJF(o.d,o.e),w))<=5
if(q&&!o.CW)A.btE(80)
v=o.Q
o.Q=w
o.CW=q
o.as=d.b
w=d.c
s=d.d
if(!(w!=null&&Math.abs(w)>35))w=s!=null&&Math.abs(s)>35
else w=!0
o.at=w
o.ax=x.length>=10&&B.c1H(x)>12
o.ay=o.ch=!1
p=new A.b6(Date.now(),0,!1)
if(v==null||p.dI(o.db).a>33e3){o.db=p
x=o.cy
if(x!=null)x.aF()
o.cy=null
o.t(new B.bdX())}else if(o.cy==null)o.cy=A.cB(C.zq,new B.bdY(o))},
H7(){var x=0,w=A.n(y.v),v,u=this,t,s
var $async$H7=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
x=3
return A.d(t.NZ(),$async$H7)
case 3:s=e
if(u.c==null){x=1
break}if(s){u.t(new B.bdR(u))
t.mM()}else{u.t(new B.bdS(u))
u.c.U(y.q).f.be(A.bP(null,null,null,null,null,C.l,null,A.o("\u0645\u0646 \u063a\u064a\u0631 \u0625\u0630\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0647\u0646\u0648\u0631\u064a\u0643 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0628\u0627\u0644\u062f\u0631\u062c\u0627\u062a \u0628\u0633",null,null,null,null,null,null,null,null),null,C.D,null,null,null,null,null,null,null,null,null,null))}case 1:return A.l(v,w)}})
return A.m($async$H7,w)},
xL(d){return this.aE3(d)},
aI2(){return this.xL(!1)},
aE3(d){var x=0,w=A.n(y.v),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$xL=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:r.t(new B.bdT(r))
u=4
x=d?7:9
break
case 7:x=10
return A.d(A.vL(!0),$async$xL)
case 10:x=8
break
case 9:x=11
return A.d(A.A5(),$async$xL)
case 11:case 8:q=f
if(r.c==null||q==null){s=[1]
x=5
break}r.t(new B.bdU(r,q))
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
if(r.c!=null)r.t(new B.bdV(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$xL,w)},
J5(){var x=0,w=A.n(y.v),v,u=this,t,s
var $async$J5=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.d(I.bJv(s),$async$J5)
case 3:t=e
if(t==null||u.c==null){x=1
break}u.t(new B.bdZ(u,t))
case 1:return A.l(v,w)}})
return A.m($async$J5,w)},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.bJF(p.d,p.e),m=p.Q,l=m==null,k=!l,j=k?B.bK0(n,m):0,i=k&&p.CW,h=p.as
if(h!=null)x=h<0||h>25
else x=!1
h=y.u
w=A.a([D.abA,C.aq,A.aS(A.o(p.f,o,o,o,o,F.aZ,o,o,o),1)],h)
if(p.r)w.push(M.oV)
else w.push(A.cI(o,o,o,o,D.adR,o,o,new B.be_(p),o,o,o,"\u062d\u062f\u0651\u062f \u0645\u0643\u0627\u0646\u064a",o))
w.push(A.bX(D.aWh,o,o,o,p.gaHx(),o,o))
w=A.ak(w,C.j,C.f,C.h,0,o)
v=l?0:m
v=A.cV(A.bv(new B.afZ(v,k?j:n,i,o),290,290),o,o)
u=A.o("\u0627\u0644\u0642\u0628\u0644\u0629 \u0639\u0644\u0649 "+(E.aZ(C.e.af(C.d.ao(B.B8(n)),360))+"\xb0")+" \u0645\u0646 \u0627\u0644\u0634\u0645\u0627\u0644",o,o,o,o,N.TV,C.af,o,o)
t=D.aiq[C.e.af(C.d.bc(B.B8(n)+22.5,45),8)]
s=p.d
r=p.e
q=Math.pow(Math.sin((21.4225-s)*3.141592653589793/180/2),2)+Math.cos(s*3.141592653589793/180)*Math.cos(0.37389315900848524)*Math.pow(Math.sin((39.8262-r)*3.141592653589793/180/2),2)
t=A.a([new E.cU(w,C.ac,C.ax,o,!1,o),C.S,v,C.ar,u,A.o("\u0646\u0627\u062d\u064a\u0629 "+t+" \u2022 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0644\u0643\u0639\u0628\u0629 \u062d\u0648\u0627\u0644\u064a "+E.aZ(C.d.ao(12742*Math.atan2(Math.sqrt(q),Math.sqrt(1-q))))+" \u0643\u0645",o,o,o,o,F.ag,C.af,o,o)],h)
if(k){w=E.aZ(C.e.af(C.d.ao(B.B8(m)),360))
v=p.as
v=v!=null&&v>=0?" \u2022 \u062f\u0642\u0629 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \xb1"+E.aZ(C.d.ao(v))+"\xb0":""
t.push(A.o("\u0627\u062a\u062c\u0627\u0647 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u062f\u0644\u0648\u0642\u062a\u064a "+(w+"\xb0")+v,o,o,o,o,D.aN_,C.af,o,o))}t.push(C.aK)
if(p.ch&&l)C.b.E(t,A.a([A.jD(D.acP,D.aSV,p.gasn(),A.jE(C.q,C.a3,o,o,o,o,o)),C.R],h))
if(k){l=i?"aligned":"turn "+C.d.ao(j)
if(i)h="\u062a\u0645\u0627\u0645! \u0625\u0646\u062a \u062f\u0644\u0648\u0642\u062a\u064a \u0645\u062a\u0648\u062c\u0651\u0647 \u0644\u0644\u0642\u0628\u0644\u0629 \u2713"
else{h=Math.abs(j)
h=j>0?"\u0644\u0641\u0651 \u064a\u0645\u064a\u0646 "+E.aZ(C.d.ao(h))+"\xb0":"\u0644\u0641\u0651 \u0634\u0645\u0627\u0644 "+E.aZ(C.d.ao(h))+"\xb0"}t.push(A.bC(o,o,o,new E.cU(A.o(h,o,o,o,o,A.cH(o,o,i?G.bX:C.i,o,o,o,o,o,o,o,o,16,o,o,C.a5,o,o,!0,o,o,o,o,o,o,o,o),C.af,o,o),C.ac,C.ax,o,i,o),!1,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,C.F,o))}else if(p.ay&&!p.ch)t.push(D.a9k)
else if(!p.ch)t.push(D.a_W)
if(k&&p.at)t.push(D.b4u)
if(k)l=x||p.ax
else l=!1
if(l)t.push(D.b4t)
t.push(C.R)
t.push(D.aSm)
return H.vA(o,t,"\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629")}}
B.T_.prototype={
C(d){var x=null
return new E.cU(A.ak(A.a([A.c6(this.c,C.q,x,22),C.aY,A.aS(A.o(this.d,x,x,x,x,G.U_,x,x,x),1)],y.u),C.j,C.f,C.h,0,x),C.ac,C.ax,x,!1,x)}}
B.afZ.prototype={
C(d){var x,w=null,v=this.e,u=v?G.bX:C.q,t=A.aaZ(-this.c*3.141592653589793/180,A.fA(w,w,w,new B.ale(w),D.Ta)),s=this.d,r=C.d.ao(s)
r=A.bC(w,w,w,A.aaZ(s*3.141592653589793/180,A.fA(w,w,w,new B.aei(u,w),D.Ta)),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"qibla-arrow "+r,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,C.F,w)
s=v?u:C.d7
x=A.d_(u,2)
return A.hl(C.W,A.a([t,r,D.azH,A.aC(w,A.c6(C.ey,v?C.a3:C.q,w,w),C.m,w,w,new A.as(s,w,x,w,w,w,C.cw),w,54,w,w,w,w,54)],y.u),C.l,C.cb,w)}}
B.ale.prototype={
aJ(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=e.jz(C.o),h=e.gfv()/2-18
$.ad()
x=A.b_()
x.r=C.i.bT(0.06).gq()
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
m=new A.on(C.d5,C.cY,C.fP,C.i_,C.e2)
m.r=(s?C.i:C.eS).gq()
m.c=s?2.5:1.2
l=m.eu()
x.drawLine.apply(x,[w+r*h,v+q*h,w+p*n,v+o*n,l])
l.delete()}for(x=D.avF.gdJ(),x=x.ga1(x),r=h-28;x.u();){q=x.gL()
p=q.a
t=(p-90)*3.141592653589793/180
q=q.b
p=p===0?D.a2K:C.a6
k=new A.zH(new A.fn(q,j,j,C.bn,j,j,j,j,j,j,new A.r(!0,p,j,j,j,j,16,C.a2,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)),C.y,C.aM,new A.iS(1),j,j,j,j,C.bd,j)
k.zk()
q=Math.cos(t)
p=Math.sin(t)
o=k.b
k.aJ(d,new A.q(w+q*r-o.c/2,v+p*r-o.a.c.gci()/2))}},
eQ(d){return!1}}
B.aei.prototype={
aJ(d,e){var x,w,v,u,t,s=e.jz(C.o),r=e.gfv()/2-18,q=s.a_(0,C.l1.al(0,r+12)),p=$.ad(),o=A.b_(),n=this.b
o.r=n.gq()
x=s.a_(0,C.l1.al(0,34))
w=s.a_(0,C.l1.al(0,r-6))
v=A.b_()
v.r=n.gq()
v.c=5
v.d=C.ju
d.lp(x,w,v)
u=s.a_(0,C.l1.al(0,r-14))
t=new A.cb(p.r,C.ab,null,null,A.a([],y.a))
t.aG(new A.fk(q.a,q.b))
t.aG(new A.cQ(u.a_(0,C.f8.al(0,11)).a,u.a_(0,C.f8.al(0,11)).b))
t.aG(new A.cQ(u.aj(0,C.f8.al(0,11)).a,u.aj(0,C.f8.al(0,11)).b))
t.aG(new A.lY())
d.fD(t,o)},
eQ(d){return!d.b.k(0,this.b)}}
var z=a.updateTypes(["a9<~>()","~(xa)"])
B.atL.prototype={
$0(){var x,w,v=this.a
if(v.f)return
x=A.jr(b.G.document)
w=A.X(x==null?null:x.visibilityState)
if((w==null?null:w)==="visible")v.Ho()},
$S:15}
B.atM.prototype={
$1(d){var x=this.a,w=x.w
if(w!=null&&new A.b6(Date.now(),0,!1).dI(w).a>3e6){x.w=new A.b6(Date.now(),0,!1)
x.Ho()}},
$S:40}
B.atK.prototype={
$1(d){return this.a.aug(d)},
$S:3}
B.be1.prototype={
$0(){var x=this.a
if(x.c!=null&&x.Q==null)x.t(new B.be0(x))},
$S:0}
B.be0.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.bdX.prototype={
$0(){},
$S:0}
B.bdY.prototype={
$0(){var x=this.a
x.cy=null
x.db=new A.b6(Date.now(),0,!1)
if(x.c!=null)x.t(new B.bdW())},
$S:0}
B.bdW.prototype={
$0(){},
$S:0}
B.bdR.prototype={
$0(){return this.a.ch=!1},
$S:0}
B.bdS.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.bdT.prototype={
$0(){return this.a.r=!0},
$S:0}
B.bdU.prototype={
$0(){var x=this.a,w=this.b
x.d=w.a
x.e=w.b
x.f="\u0645\u0643\u0627\u0646\u0643 \u0627\u0644\u062d\u0627\u0644\u064a"},
$S:0}
B.bdV.prototype={
$0(){return this.a.r=!1},
$S:0}
B.bdZ.prototype={
$0(){var x=this.a,w=this.b
x.d=w.b
x.e=w.c
x.f=w.glx()},
$S:0}
B.be_.prototype={
$0(){return this.a.xL(!0)},
$S:0};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Uk.prototype,"gaFG","aFH",1)
w(v,"gasn","H7",0)
w(v,"gaHx","J5",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.atJ,B.aA6,B.xa])
x(A.kc,[B.atL,B.be1,B.be0,B.bdX,B.bdY,B.bdW,B.bdR,B.bdS,B.bdT,B.bdU,B.bdV,B.bdZ,B.be_])
x(A.hJ,[B.atM,B.atK])
w(B.uR,A.P)
w(B.Uk,A.S)
x(A.a5,[B.T_,B.afZ])
x(A.C4,[B.ale,B.aei])})()
A.o4(b.typeUniverse,JSON.parse('{"uR":{"P":[],"e":[]},"Uk":{"S":["uR"]},"T_":{"a5":[],"e":[]},"afZ":{"a5":[],"e":[]},"ale":{"ar":[]},"aei":{"ar":[]}}'))
var y={a:A.a0("y<ee>"),u:A.a0("y<e>"),h:A.a0("y<J>"),w:A.a0("h"),o:A.a0("kI<xa>"),q:A.a0("o1"),e:A.a0("A"),v:A.a0("~")};(function constants(){var x=a.makeConstList
D.aUS=new A.t("\u0628\u0646\u062f\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u0628\u0648\u0635\u0644\u0629\u2026",null,F.ag,null,null,null,null,null,null,null,null)
D.a_W=new A.dY(C.W,null,null,D.aUS,null)
D.a2K=new A.H(1,1,0.4196078431372549,0.4196078431372549,C.k)
D.a6H=new A.bo(3e6)
D.aPF=new A.r(!0,C.a6,null,null,null,null,13,null,null,null,null,null,1.7,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWW=new A.t("\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u0634 \u0645\u062a\u0627\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u0623\u0648 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647. \u062d\u0637 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0648\u062c\u0651\u0647 \u062d\u0631\u0641 \xab\u0634\xbb (\u0627\u0644\u0634\u0645\u0627\u0644) \u0646\u0627\u062d\u064a\u0629 \u0627\u0644\u0634\u0645\u0627\u0644 \u2014 \u062a\u0642\u062f\u0631 \u062a\u0639\u0631\u0641\u0647 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062e\u0631\u0627\u0626\u0637 \u0623\u0648 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u2014 \u0648\u0627\u0644\u0633\u0647\u0645 \u0627\u0644\u062f\u0647\u0628\u064a \u0647\u064a\u0628\u0642\u0649 \u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629.",null,D.aPF,null,null,null,null,null,null,null,null)
D.a9k=new E.cU(D.aWW,C.ac,C.ax,null,!1,null)
D.abA=new A.a2(K.AR,null,C.q,null,null,null)
D.acP=new A.a2(C.tn,null,null,null,null,null)
D.adR=new A.a2(C.iT,null,C.a6,null,null,null)
D.aiq=x(["\u0627\u0644\u0634\u0645\u0627\u0644","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u0634\u0631\u0642","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u062c\u0646\u0648\u0628","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u063a\u0631\u0628\u064a","\u0627\u0644\u063a\u0631\u0628","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u063a\u0631\u0628\u064a"],A.a0("y<h>"))
D.avF=new A.cD([0,"\u0634",90,"\u0642",180,"\u062c",270,"\u063a"],A.a0("cD<v,h>"))
D.ad7=new A.a2(C.Ay,34,C.i,null,null,null)
D.azH=new A.qX(null,0,null,null,null,null,D.ad7,null)
D.Ta=new A.G(290,290)
D.aN_=new A.r(!0,C.a6,null,null,null,null,13,null,null,null,null,null,1.8,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSm=new A.t("\u0646\u0635\u064a\u062d\u0629: \u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0628\u0639\u064a\u062f \u0639\u0646 \u0627\u0644\u062d\u062f\u064a\u062f \u0648\u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633 \u0648\u062c\u0631\u0627\u0628 \u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633. \u0644\u0648 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0645\u0634 \u062b\u0627\u0628\u062a \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0641\u064a \u0634\u0643\u0644 \u0631\u0642\u0645 8 \u0643\u0627\u0645 \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u062a\u062a\u0638\u0628\u0637.",null,F.ag,C.af,null,null,null,null,null,null,null)
D.aSV=new A.t("\u0634\u063a\u0651\u0644 \u0627\u0644\u0628\u0648\u0635\u0644\u0629",null,null,null,null,null,null,null,null,null,null)
D.aWh=new A.t("\u0645\u062f\u064a\u0646\u0629 \u062a\u0627\u0646\u064a\u0629",null,C.ek,null,null,null,null,null,null,null,null)
D.aa5=new A.a3(62812,"MaterialIcons",null,!1)
D.b4t=new B.T_(D.aa5,"\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u062d\u062a\u0627\u062c\u0629 \u0645\u0639\u0627\u064a\u0631\u0629: \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0639\u0644\u0649 \u0634\u0643\u0644 8 \u0641\u064a \u0627\u0644\u0647\u0648\u0627 \u0643\u0627\u0645 \u0645\u0631\u0629",null)
D.abh=new A.a3(985111,"MaterialIcons",null,!1)
D.b4u=new B.T_(D.abh,"\u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0641\u0631\u0648\u062f (\u0645\u0633\u0637\u0651\u062d \u0632\u064a \u0627\u0644\u0635\u064a\u0646\u064a\u0629) \u0639\u0634\u0627\u0646 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u064a\u0628\u0642\u0649 \u0645\u0638\u0628\u0648\u0637",null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c9v","bM0",()=>A.bxT())})()};
(a=>{a["C4q4rOWVWT23jfxegVx3mLy8Ds0="]=a.current})($__dart_deferred_initializers__);