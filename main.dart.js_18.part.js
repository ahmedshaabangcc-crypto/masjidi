((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,B={
Cy(d){var x,w,v
if(d==null)return null
try{x=A.dl(d)
w=isNaN(x)?null:x
return w}catch(v){return null}},
av7:function av7(d){var _=this
_.a=d
_.d=_.c=_.b=null
_.r=_.f=_.e=!1
_.w=null},
av9:function av9(d){this.a=d},
ava:function ava(d){this.a=d},
av8:function av8(d){this.a=d},
bN3(d,e){var x=d*3.141592653589793/180,w=(39.8262-e)*3.141592653589793/180
return B.BI(Math.atan2(Math.sin(w)*Math.cos(0.37389315900848524),Math.cos(x)*Math.sin(0.37389315900848524)-Math.sin(x)*Math.cos(0.37389315900848524)*Math.cos(w))*180/3.141592653589793)},
BI(d){var x=C.d.ah(d,360)
return x<0?x+360:x},
bNp(d,e){var x=B.BI(d-e)
return x>=180?x-360:x},
c5e(d){var x,w,v,u,t,s=d.length
if(s<2)return 0
for(x=0,w=0,v=0;v<d.length;d.length===s||(0,A.B)(d),++v){u=d[v]*3.141592653589793/180
x+=Math.cos(u)
w+=Math.sin(u)}t=Math.sqrt(x*x+w*w)/d.length
if(t>=1)return 0
if(t<=1e-9)return 180
return Math.sqrt(-2*Math.log(t))*180/3.141592653589793},
aBD:function aBD(d){this.a=d
this.c=this.b=null},
xC:function xC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bXu(){return new B.v9(null)},
v9:function v9(d){this.a=d},
Va:function Va(d,e,f,g,h,i,j){var _=this
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
bgT:function bgT(d){this.a=d},
bgS:function bgS(d){this.a=d},
bgO:function bgO(){},
bgP:function bgP(d){this.a=d},
bgN:function bgN(){},
bgI:function bgI(d){this.a=d},
bgJ:function bgJ(d){this.a=d},
bgK:function bgK(d){this.a=d},
bgL:function bgL(d,e){this.a=d
this.b=e},
bgM:function bgM(d){this.a=d},
bgQ:function bgQ(d,e){this.a=d
this.b=e},
bgR:function bgR(d){this.a=d},
TQ:function TQ(d,e,f){this.c=d
this.d=e
this.a=f},
ah4:function ah4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amn:function amn(d){this.a=d},
afo:function afo(d,e){this.b=d
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
B.av7.prototype={
Oo(){var x=0,w=A.o(y.e),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Oo=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
n=b.G
r=A.jB(n.DeviceOrientationEvent)
if(r==null||r.requestPermission==null){n=A.jB(n.DeviceOrientationEvent)
v=n!=null
x=1
break}x=7
return A.d(A.e2(A.cp(A.cf(r,"requestPermission",null,null,null,null)),y.w),$async$Oo)
case 7:q=e
p=q==="granted"
if(p)s.HG()
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
return A.n($async$Oo,w)},
a9E(){var x,w,v,u,t,s
try{u=b.G
x=A.jB(u.screen)
t=x
w=A.jB(t==null?null:t.orientation)
t=w
v=B.Cy(t==null?null:t.angle)
if(v!=null)return v
u=B.Cy(u.orientation)
if(u==null)u=0
return u}catch(s){return 0}},
av8(d){var x,w,v,u,t,s,r,q,p,o,n=this,m="deviceorientationabsolute"
if(n.f)return
try{x=B.Cy(d.beta)
w=B.Cy(d.gamma)
v=B.Cy(d.webkitCompassHeading)
if(v!=null){n.w=new A.b1(Date.now(),0,!1)
n.a.D(0,new B.xC(B.BI(v+n.a9E()),B.Cy(d.webkitCompassAccuracy),x,w))
return}u=B.Cy(d.alpha)
if(u==null)return
r=A.Q(d.type)
t=r==null?null:r
if(!J.c(t,m)){q=A.hx(d.absolute)
if(q==null)q=null
p=q===!0}else p=!0
s=p
if(!s)return
if(J.c(t,m))n.r=!0
else if(n.r)return
n.w=new A.b1(Date.now(),0,!1)
n.a.D(0,new B.xC(B.BI(360-u+n.a9E()),null,x,w))}catch(o){}},
mS(){var x,w,v,u=this,t=null,s="addEventListener"
if(u.e||u.f)return
u.e=!0
u.HG()
x=u.c=A.bKL(new B.av9(u))
w=b.G
v=A.jB(w.document)
if(v!=null)A.cf(v,s,"visibilitychange",x,t,t)
A.cf(w,s,"pageshow",x,t,t)
u.d=A.kM(C.kw,new B.ava(u))},
HG(){var x,w,v=this,u=null,t="addEventListener"
if(v.f)return
v.a46()
x=v.b=A.f4(new B.av8(v))
w=b.G
if("ondeviceorientationabsolute" in w)A.cf(w,t,"deviceorientationabsolute",x,u,u)
A.cf(w,t,"deviceorientation",x,u,u)},
a46(){var x,w=null,v="removeEventListener",u=this.b
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
u.a46()
w=u.c
if(w!=null){x=b.G
v=A.jB(x.document)
if(v!=null)A.cf(v,s,"visibilitychange",w,t,t)
A.cf(x,s,"pageshow",w,t,t)}u.a.be()}}
B.aBD.prototype={}
B.xC.prototype={}
B.v9.prototype={
V(){var x=$.bPq().a,w=x[1],v=x[2]
x=x[0]
return new B.Va(w,v,x+" (\u062a\u0642\u0631\u064a\u0628\u064a)",new B.av7(new A.kQ(null,null,y.o)),new B.aBD(0.2),A.a([],y.h),new A.b1(A.kp(0,0,!1),0,!1))}}
B.Va.prototype={
aa(){var x,w,v,u=this
u.ap()
x=A.jB(b.G.DeviceOrientationEvent)
u.ch=x!=null&&x.requestPermission!=null
w=u.w
v=w.a
u.z=new A.eI(v,A.w(v).i("eI<1>")).kk(u.gaGM())
w.mS()
u.cx=A.cE(D.a7V,new B.bgT(u))
u.aJe()},
l(){var x=this,w=x.cx
if(w!=null)w.aF()
w=x.cy
if(w!=null)w.aF()
w=x.z
if(w!=null)w.aF()
x.w.l()
x.aq()},
aGN(d){var x,w,v,u,t,s,r,q,p,o=this
if(o.c==null)return
x=o.y
w=d.a
x.push(w)
if(x.length>15)C.b.km(x,0)
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
w=u}else v=s}w=B.BI(Math.atan2(v,w)*180/3.141592653589793)
w.toString
q=Math.abs(B.bNp(B.bN3(o.d,o.e),w))<=5
if(q&&!o.CW)A.bwR(80)
v=o.Q
o.Q=w
o.CW=q
o.as=d.b
w=d.c
s=d.d
if(!(w!=null&&Math.abs(w)>35))w=s!=null&&Math.abs(s)>35
else w=!0
o.at=w
o.ax=x.length>=10&&B.c5e(x)>12
o.ay=o.ch=!1
p=new A.b1(Date.now(),0,!1)
if(v==null||p.dM(o.db).a>33e3){o.db=p
x=o.cy
if(x!=null)x.aF()
o.cy=null
o.t(new B.bgO())}else if(o.cy==null)o.cy=A.cE(C.A0,new B.bgP(o))},
Hp(){var x=0,w=A.o(y.v),v,u=this,t,s
var $async$Hp=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:t=u.w
x=3
return A.d(t.Oo(),$async$Hp)
case 3:s=e
if(u.c==null){x=1
break}if(s){u.t(new B.bgI(u))
t.mS()}else{u.t(new B.bgJ(u))
u.c.S(y.q).f.b3(A.bz(null,null,null,null,null,C.k,null,A.j("\u0645\u0646 \u063a\u064a\u0631 \u0625\u0630\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0647\u0646\u0648\u0631\u064a\u0643 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0628\u0627\u0644\u062f\u0631\u062c\u0627\u062a \u0628\u0633",null,null,null,null,null,null,null,null,null),null,C.A,null,null,null,null,null,null,null,null,null,null))}case 1:return A.m(v,w)}})
return A.n($async$Hp,w)},
y0(d){return this.aF8(d)},
aJe(){return this.y0(!1)},
aF8(d){var x=0,w=A.o(y.v),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$y0=A.k(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:r.t(new B.bgK(r))
u=4
x=d?7:9
break
case 7:x=10
return A.d(A.w6(!0),$async$y0)
case 10:x=8
break
case 9:x=11
return A.d(A.AD(),$async$y0)
case 11:case 8:q=f
if(r.c==null||q==null){s=[1]
x=5
break}r.t(new B.bgL(r,q))
s.push(6)
x=5
break
case 4:u=3
n=t.pop()
o=r.c
if(o!=null&&d)o.S(y.q).f.b3(A.bz(null,null,null,null,null,C.k,null,A.j("\u0645\u0642\u062f\u0631\u0646\u0627\u0634 \u0646\u062d\u062f\u062f \u0645\u0643\u0627\u0646\u0643 \u2014 \u0627\u062e\u062a\u0627\u0631 \u0645\u062f\u064a\u0646\u062a\u0643 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629",null,null,null,null,null,null,null,null,null),null,C.A,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.t(new B.bgM(r))
x=s.pop()
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$y0,w)},
Jo(){var x=0,w=A.o(y.v),v,u=this,t,s
var $async$Jo=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.d(I.bMU(s),$async$Jo)
case 3:t=e
if(t==null||u.c==null){x=1
break}u.t(new B.bgQ(u,t))
case 1:return A.m(v,w)}})
return A.n($async$Jo,w)},
A(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.bN3(p.d,p.e),m=p.Q,l=m==null,k=!l,j=k?B.bNp(n,m):0,i=k&&p.CW,h=p.as
if(h!=null)x=h<0||h>25
else x=!1
h=y.u
w=A.a([D.acT,C.as,A.aP(A.j(p.f,o,o,o,o,o,F.b_,o,o,o),1)],h)
if(p.r)w.push(M.pc)
else w.push(A.cz(o,o,o,o,D.af8,o,o,new B.bgR(p),o,o,o,"\u062d\u062f\u0651\u062f \u0645\u0643\u0627\u0646\u064a",o))
w.push(A.bH(D.aYA,o,o,o,p.gaIH(),o,o))
w=A.ak(w,C.j,C.f,C.h,0,o,o)
v=l?0:m
v=A.cP(A.bk(new B.ah4(v,k?j:n,i,o),290,290),o,o)
u=A.j("\u0627\u0644\u0642\u0628\u0644\u0629 \u0639\u0644\u0649 "+(E.aZ(C.e.ah(C.d.ar(B.BI(n)),360))+"\xb0")+" \u0645\u0646 \u0627\u0644\u0634\u0645\u0627\u0644",o,o,o,o,o,N.UK,C.ac,o,o)
t=D.ajT[C.e.ah(C.d.ba(B.BI(n)+22.5,45),8)]
s=p.d
r=p.e
q=Math.pow(Math.sin((21.4225-s)*3.141592653589793/180/2),2)+Math.cos(s*3.141592653589793/180)*Math.cos(0.37389315900848524)*Math.pow(Math.sin((39.8262-r)*3.141592653589793/180/2),2)
t=A.a([new E.cW(w,C.af,C.aA,o,!1,o),C.T,v,C.ao,u,A.j("\u0646\u0627\u062d\u064a\u0629 "+t+" \u2022 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0644\u0643\u0639\u0628\u0629 \u062d\u0648\u0627\u0644\u064a "+E.aZ(C.d.ar(12742*Math.atan2(Math.sqrt(q),Math.sqrt(1-q))))+" \u0643\u0645",o,o,o,o,o,F.ak,C.ac,o,o)],h)
if(k){w=E.aZ(C.e.ah(C.d.ar(B.BI(m)),360))
v=p.as
v=v!=null&&v>=0?" \u2022 \u062f\u0642\u0629 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \xb1"+E.aZ(C.d.ar(v))+"\xb0":""
t.push(A.j("\u0627\u062a\u062c\u0627\u0647 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u062f\u0644\u0648\u0642\u062a\u064a "+(w+"\xb0")+v,o,o,o,o,o,D.aPa,C.ac,o,o))}t.push(C.aJ)
if(p.ch&&l)C.b.E(t,A.a([A.jM(D.ae6,D.aV9,p.gatg(),A.iH(C.p,C.a5,o,o,o,o,o)),C.R],h))
if(k){l=i?"aligned":"turn "+C.d.ar(j)
if(i)h="\u062a\u0645\u0627\u0645! \u0625\u0646\u062a \u062f\u0644\u0648\u0642\u062a\u064a \u0645\u062a\u0648\u062c\u0651\u0647 \u0644\u0644\u0642\u0628\u0644\u0629 \u2713"
else{h=Math.abs(j)
h=j>0?"\u0644\u0641\u0651 \u064a\u0645\u064a\u0646 "+E.aZ(C.d.ar(h))+"\xb0":"\u0644\u0641\u0651 \u0634\u0645\u0627\u0644 "+E.aZ(C.d.ar(h))+"\xb0"}t.push(A.bG(o,o,o,new E.cW(A.j(h,o,o,o,o,o,A.cw(o,o,i?G.c4:C.i,o,o,o,o,o,o,o,o,16,o,o,C.a2,o,o,!0,o,o,o,o,o,o,o,o),C.ac,o,o),C.af,C.aA,o,i,o),!1,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,C.G,o))}else if(p.ay&&!p.ch)t.push(D.aaC)
else if(!p.ch)t.push(D.a0V)
if(k&&p.at)t.push(D.b70)
if(k)l=x||p.ax
else l=!1
if(l)t.push(D.b7_)
t.push(C.R)
t.push(D.aUy)
return H.vW(o,t,"\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629")}}
B.TQ.prototype={
A(d){var x=null
return new E.cW(A.ak(A.a([A.c6(this.c,C.p,x,22),C.aV,A.aP(A.j(this.d,x,x,x,x,x,G.UO,x,x,x),1)],y.u),C.j,C.f,C.h,0,x,x),C.af,C.aA,x,!1,x)}}
B.ah4.prototype={
A(d){var x,w=null,v=this.e,u=v?G.c4:C.p,t=A.ac5(-this.c*3.141592653589793/180,A.fE(w,w,w,new B.amn(w),D.U_)),s=this.d,r=C.d.ar(s)
r=A.bG(w,w,w,A.ac5(s*3.141592653589793/180,A.fE(w,w,w,new B.afo(u,w),D.U_)),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"qibla-arrow "+r,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,C.G,w)
s=v?u:C.dc
x=A.cR(u,2)
return A.h6(C.W,A.a([t,r,D.aBC,A.au(w,A.c6(C.eC,v?C.a5:C.p,w,w),C.m,w,w,new A.ap(s,w,x,w,w,w,C.co),w,54,w,w,w,w,54)],y.u),C.k,C.cb,w)}}
B.amn.prototype={
aJ(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=e.jF(C.o),h=e.gfA()/2-18
$.af()
x=A.b_()
x.r=C.i.bo(0.06).gq()
d.fU(i,h,x)
x=A.b_()
x.b=C.bo
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
m=new A.ox(C.da,C.d3,C.fW,C.i5,C.e6)
m.r=(s?C.i:C.eX).gq()
m.c=s?2.5:1.2
l=m.e4()
x.drawLine.apply(x,[w+r*h,v+q*h,w+p*n,v+o*n,l])
l.delete()}for(x=D.axk.gdC(),x=x.ga0(x),r=h-28;x.u();){q=x.gK()
p=q.a
t=(p-90)*3.141592653589793/180
q=q.b
p=p===0?D.a3J:C.a6
k=new A.Ae(new A.f2(q,j,j,C.be,j,j,j,j,j,j,new A.r(!0,p,j,j,j,j,16,C.a3,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)),C.x,C.aF,new A.j1(1),j,j,j,j,C.bc,j)
k.zA()
q=Math.cos(t)
p=Math.sin(t)
o=k.b
k.aJ(d,new A.q(w+q*r-o.c/2,v+p*r-o.a.c.gcm()/2))}},
eT(d){return!1}}
B.afo.prototype={
aJ(d,e){var x,w,v,u,t,s=e.jF(C.o),r=e.gfA()/2-18,q=s.a_(0,C.lb.am(0,r+12)),p=$.af(),o=A.b_(),n=this.b
o.r=n.gq()
x=s.a_(0,C.lb.am(0,34))
w=s.a_(0,C.lb.am(0,r-6))
v=A.b_()
v.r=n.gq()
v.c=5
v.d=C.jA
d.ly(x,w,v)
u=s.a_(0,C.lb.am(0,r-14))
t=new A.cc(p.r,C.ae,null,null,A.a([],y.a))
t.aG(new A.fo(q.a,q.b))
t.aG(new A.cY(u.a_(0,C.fa.am(0,11)).a,u.a_(0,C.fa.am(0,11)).b))
t.aG(new A.cY(u.ai(0,C.fa.am(0,11)).a,u.ai(0,C.fa.am(0,11)).b))
t.aG(new A.m7())
d.fG(t,o)},
eT(d){return!d.b.k(0,this.b)}}
var z=a.updateTypes(["ab<~>()","~(xC)"])
B.av9.prototype={
$0(){var x,w,v=this.a
if(v.f)return
x=A.jB(b.G.document)
w=A.Q(x==null?null:x.visibilityState)
if((w==null?null:w)==="visible")v.HG()},
$S:16}
B.ava.prototype={
$1(d){var x=this.a,w=x.w
if(w!=null&&new A.b1(Date.now(),0,!1).dM(w).a>3e6){x.w=new A.b1(Date.now(),0,!1)
x.HG()}},
$S:34}
B.av8.prototype={
$1(d){return this.a.av8(d)},
$S:3}
B.bgT.prototype={
$0(){var x=this.a
if(x.c!=null&&x.Q==null)x.t(new B.bgS(x))},
$S:0}
B.bgS.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.bgO.prototype={
$0(){},
$S:0}
B.bgP.prototype={
$0(){var x=this.a
x.cy=null
x.db=new A.b1(Date.now(),0,!1)
if(x.c!=null)x.t(new B.bgN())},
$S:0}
B.bgN.prototype={
$0(){},
$S:0}
B.bgI.prototype={
$0(){return this.a.ch=!1},
$S:0}
B.bgJ.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.bgK.prototype={
$0(){return this.a.r=!0},
$S:0}
B.bgL.prototype={
$0(){var x=this.a,w=this.b
x.d=w.a
x.e=w.b
x.f="\u0645\u0643\u0627\u0646\u0643 \u0627\u0644\u062d\u0627\u0644\u064a"},
$S:0}
B.bgM.prototype={
$0(){return this.a.r=!1},
$S:0}
B.bgQ.prototype={
$0(){var x=this.a,w=this.b
x.d=w.b
x.e=w.c
x.f=w.glH()},
$S:0}
B.bgR.prototype={
$0(){return this.a.y0(!0)},
$S:0};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Va.prototype,"gaGM","aGN",1)
w(v,"gatg","Hp",0)
w(v,"gaIH","Jo",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.av7,B.aBD,B.xC])
x(A.kl,[B.av9,B.bgT,B.bgS,B.bgO,B.bgP,B.bgN,B.bgI,B.bgJ,B.bgK,B.bgL,B.bgM,B.bgQ,B.bgR])
x(A.hU,[B.ava,B.av8])
w(B.v9,A.P)
w(B.Va,A.U)
x(A.a4,[B.TQ,B.ah4])
x(A.CH,[B.amn,B.afo])})()
A.od(b.typeUniverse,JSON.parse('{"v9":{"P":[],"e":[]},"Va":{"U":["v9"]},"TQ":{"a4":[],"e":[]},"ah4":{"a4":[],"e":[]},"amn":{"as":[]},"afo":{"as":[]}}'))
var y={a:A.a3("y<en>"),u:A.a3("y<e>"),h:A.a3("y<J>"),w:A.a3("f"),o:A.a3("kQ<xC>"),q:A.a3("oa"),e:A.a3("A"),v:A.a3("~")};(function constants(){var x=a.makeConstList
D.aXb=new A.t("\u0628\u0646\u062f\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u0628\u0648\u0635\u0644\u0629\u2026",null,F.ak,null,null,null,null,null,null,null,null)
D.a0V=new A.dL(C.W,null,null,D.aXb,null)
D.a3J=new A.H(1,1,0.4196078431372549,0.4196078431372549,C.l)
D.a7V=new A.br(3e6)
D.aRS=new A.r(!0,C.a6,null,null,null,null,13,null,null,null,null,null,1.7,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZf=new A.t("\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u0634 \u0645\u062a\u0627\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u0623\u0648 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647. \u062d\u0637 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0648\u062c\u0651\u0647 \u062d\u0631\u0641 \xab\u0634\xbb (\u0627\u0644\u0634\u0645\u0627\u0644) \u0646\u0627\u062d\u064a\u0629 \u0627\u0644\u0634\u0645\u0627\u0644 \u2014 \u062a\u0642\u062f\u0631 \u062a\u0639\u0631\u0641\u0647 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062e\u0631\u0627\u0626\u0637 \u0623\u0648 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u2014 \u0648\u0627\u0644\u0633\u0647\u0645 \u0627\u0644\u062f\u0647\u0628\u064a \u0647\u064a\u0628\u0642\u0649 \u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629.",null,D.aRS,null,null,null,null,null,null,null,null)
D.aaC=new E.cW(D.aZf,C.af,C.aA,null,!1,null)
D.acT=new A.a5(K.Bx,null,C.p,null,null,null)
D.ae6=new A.a5(C.tM,null,null,null,null,null)
D.af8=new A.a5(C.j_,null,C.a6,null,null,null)
D.ajT=x(["\u0627\u0644\u0634\u0645\u0627\u0644","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u0634\u0631\u0642","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u062c\u0646\u0648\u0628","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u063a\u0631\u0628\u064a","\u0627\u0644\u063a\u0631\u0628","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u063a\u0631\u0628\u064a"],A.a3("y<f>"))
D.axk=new A.cy([0,"\u0634",90,"\u0642",180,"\u062c",270,"\u063a"],A.a3("cy<u,f>"))
D.aep=new A.a5(C.Bd,34,C.i,null,null,null)
D.aBC=new A.re(null,0,null,null,null,null,D.aep,null)
D.U_=new A.G(290,290)
D.aPa=new A.r(!0,C.a6,null,null,null,null,13,null,null,null,null,null,1.8,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUy=new A.t("\u0646\u0635\u064a\u062d\u0629: \u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0628\u0639\u064a\u062f \u0639\u0646 \u0627\u0644\u062d\u062f\u064a\u062f \u0648\u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633 \u0648\u062c\u0631\u0627\u0628 \u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633. \u0644\u0648 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0645\u0634 \u062b\u0627\u0628\u062a \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0641\u064a \u0634\u0643\u0644 \u0631\u0642\u0645 8 \u0643\u0627\u0645 \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u062a\u062a\u0638\u0628\u0637.",null,F.ak,C.ac,null,null,null,null,null,null,null)
D.aV9=new A.t("\u0634\u063a\u0651\u0644 \u0627\u0644\u0628\u0648\u0635\u0644\u0629",null,null,null,null,null,null,null,null,null,null)
D.aYA=new A.t("\u0645\u062f\u064a\u0646\u0629 \u062a\u0627\u0646\u064a\u0629",null,C.el,null,null,null,null,null,null,null,null)
D.abm=new A.a2(62812,"MaterialIcons",null,!1)
D.b7_=new B.TQ(D.abm,"\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u062d\u062a\u0627\u062c\u0629 \u0645\u0639\u0627\u064a\u0631\u0629: \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0639\u0644\u0649 \u0634\u0643\u0644 8 \u0641\u064a \u0627\u0644\u0647\u0648\u0627 \u0643\u0627\u0645 \u0645\u0631\u0629",null)
D.acy=new A.a2(985111,"MaterialIcons",null,!1)
D.b70=new B.TQ(D.acy,"\u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0641\u0631\u0648\u062f (\u0645\u0633\u0637\u0651\u062d \u0632\u064a \u0627\u0644\u0635\u064a\u0646\u064a\u0629) \u0639\u0634\u0627\u0646 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u064a\u0628\u0642\u0649 \u0645\u0638\u0628\u0648\u0637",null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cd4","bPq",()=>A.bBb())})()};
(a=>{a["PPrTf+GPydpHXNoO67T7UEFj/ww="]=a.current})($__dart_deferred_initializers__);