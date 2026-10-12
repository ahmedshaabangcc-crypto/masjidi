((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,B={
Bs(d){var x,w,v
if(d==null)return null
try{x=A.dc(d)
w=isNaN(x)?null:x
return w}catch(v){return null}},
ast:function ast(d){var _=this
_.a=d
_.d=_.c=_.b=null
_.r=_.f=_.e=!1
_.w=null},
asv:function asv(d){this.a=d},
asw:function asw(d){this.a=d},
asu:function asu(d){this.a=d},
bH6(d,e){var x=d*3.141592653589793/180,w=(39.8262-e)*3.141592653589793/180
return B.AH(Math.atan2(Math.sin(w)*Math.cos(0.37389315900848524),Math.cos(x)*Math.sin(0.37389315900848524)-Math.sin(x)*Math.cos(0.37389315900848524)*Math.cos(w))*180/3.141592653589793)},
AH(d){var x=C.d.ae(d,360)
return x<0?x+360:x},
bHs(d,e){var x=B.AH(d-e)
return x>=180?x-360:x},
bZT(d){var x,w,v,u,t,s=d.length
if(s<2)return 0
for(x=0,w=0,v=0;v<d.length;d.length===s||(0,A.A)(d),++v){u=d[v]*3.141592653589793/180
x+=Math.cos(u)
w+=Math.sin(u)}t=Math.sqrt(x*x+w*w)/d.length
if(t>=1)return 0
if(t<=1e-9)return 180
return Math.sqrt(-2*Math.log(t))*180/3.141592653589793},
ayP:function ayP(d){this.a=d
this.c=this.b=null},
wS:function wS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRi(){return new B.uB(null)},
uB:function uB(d){this.a=d},
Tu:function Tu(d,e,f,g,h,i,j){var _=this
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
bcb:function bcb(d){this.a=d},
bca:function bca(d){this.a=d},
bc7:function bc7(){},
bc8:function bc8(d){this.a=d},
bc6:function bc6(){},
bc1:function bc1(d){this.a=d},
bc2:function bc2(d){this.a=d},
bc3:function bc3(d){this.a=d},
bc4:function bc4(d,e){this.a=d
this.b=e},
bc5:function bc5(d){this.a=d},
bc9:function bc9(d,e){this.a=d
this.b=e},
S9:function S9(d,e,f){this.c=d
this.d=e
this.a=f},
aeU:function aeU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ak4:function ak4(d){this.a=d},
ade:function ade(d,e){this.b=d
this.a=e}},D,I,K,L,G,M,N,E,F
J=c[1]
A=c[0]
C=c[2]
H=c[15]
B=a.updateHolder(c[5],B)
D=c[33]
I=c[12]
K=c[36]
L=c[30]
G=c[35]
M=c[34]
N=c[31]
E=c[16]
F=c[18]
B.ast.prototype={
Nl(){var x=0,w=A.n(y.e),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Nl=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
n=b.G
r=A.jj(n.DeviceOrientationEvent)
if(r==null||r.requestPermission==null){n=A.jj(n.DeviceOrientationEvent)
v=n!=null
x=1
break}x=7
return A.d(A.e1(A.co(A.cb(r,"requestPermission",null,null,null,null)),y.w),$async$Nl)
case 7:q=e
p=q==="granted"
if(p)s.GX()
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
return A.m($async$Nl,w)},
a7O(){var x,w,v,u,t,s
try{u=b.G
x=A.jj(u.screen)
t=x
w=A.jj(t==null?null:t.orientation)
t=w
v=B.Bs(t==null?null:t.angle)
if(v!=null)return v
u=B.Bs(u.orientation)
if(u==null)u=0
return u}catch(s){return 0}},
aDW(d){var x,w,v,u,t,s,r,q,p,o,n=this,m="deviceorientationabsolute"
if(n.f)return
try{x=B.Bs(d.beta)
w=B.Bs(d.gamma)
v=B.Bs(d.webkitCompassHeading)
if(v!=null){n.w=new A.ba(Date.now(),0,!1)
n.a.D(0,new B.wS(B.AH(v+n.a7O()),B.Bs(d.webkitCompassAccuracy),x,w))
return}u=B.Bs(d.alpha)
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
n.w=new A.ba(Date.now(),0,!1)
n.a.D(0,new B.wS(B.AH(360-u+n.a7O()),null,x,w))}catch(o){}},
my(){var x,w,v,u=this,t=null,s="addEventListener"
if(u.e||u.f)return
u.e=!0
u.GX()
x=u.c=A.bEX(new B.asv(u))
w=b.G
v=A.jj(w.document)
if(v!=null)A.cb(v,s,"visibilitychange",x,t,t)
A.cb(w,s,"pageshow",x,t,t)
u.d=A.mh(C.kc,new B.asw(u))},
GX(){var x,w,v=this,u=null,t="addEventListener"
if(v.f)return
v.a2G()
x=v.b=A.eV(new B.asu(v))
w=b.G
if("ondeviceorientationabsolute" in w)A.cb(w,t,"deviceorientationabsolute",x,u,u)
A.cb(w,t,"deviceorientation",x,u,u)},
a2G(){var x,w=null,v="removeEventListener",u=this.b
if(u==null)return
x=b.G
A.cb(x,v,"deviceorientationabsolute",u,w,w)
A.cb(x,v,"deviceorientation",u,w,w)
this.b=null},
l(){var x,w,v,u=this,t=null,s="removeEventListener"
if(u.f)return
u.f=!0
x=u.d
if(x!=null)x.aG()
u.a2G()
w=u.c
if(w!=null){x=b.G
v=A.jj(x.document)
if(v!=null)A.cb(v,s,"visibilitychange",w,t,t)
A.cb(x,s,"pageshow",w,t,t)}u.a.bb()}}
B.ayP.prototype={}
B.wS.prototype={}
B.uB.prototype={
V(){var x=$.bJo().a,w=x[1],v=x[2]
x=x[0]
return new B.Tu(w,v,x+" (\u062a\u0642\u0631\u064a\u0628\u064a)",new B.ast(new A.kz(null,null,y.o)),new B.ayP(0.2),A.a([],y.h),new A.ba(A.kW(0,0,!1),0,!1))}}
B.Tu.prototype={
ag(){var x,w,v,u=this
u.ap()
x=A.jj(b.G.DeviceOrientationEvent)
u.ch=x!=null&&x.requestPermission!=null
w=u.w
v=w.a
u.z=new A.eu(v,A.w(v).i("eu<1>")).jZ(u.gaEb())
w.my()
u.cx=A.cC(D.a5N,new B.bcb(u))
u.Cf()},
l(){var x=this,w=x.cx
if(w!=null)w.aG()
w=x.cy
if(w!=null)w.aG()
w=x.z
if(w!=null)w.aG()
x.w.l()
x.az()},
aEc(d){var x,w,v,u,t,s,r,q,p,o=this
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
w=u}else v=s}w=B.AH(Math.atan2(v,w)*180/3.141592653589793)
w.toString
q=Math.abs(B.bHs(B.bH6(o.d,o.e),w))<=5
if(q&&!o.CW)A.bro(80)
v=o.Q
o.Q=w
o.CW=q
o.as=d.b
w=d.c
s=d.d
if(!(w!=null&&Math.abs(w)>35))w=s!=null&&Math.abs(s)>35
else w=!0
o.at=w
o.ax=x.length>=10&&B.bZT(x)>12
o.ay=o.ch=!1
p=new A.ba(Date.now(),0,!1)
if(v==null||p.dG(o.db).a>33e3){o.db=p
x=o.cy
if(x!=null)x.aG()
o.cy=null
o.t(new B.bc7())}else if(o.cy==null)o.cy=A.cC(C.yY,new B.bc8(o))},
GG(){var x=0,w=A.n(y.v),v,u=this,t,s
var $async$GG=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
x=3
return A.d(t.Nl(),$async$GG)
case 3:s=e
if(u.c==null){x=1
break}if(s){u.t(new B.bc1(u))
t.my()}else{u.t(new B.bc2(u))
u.c.U(y.q).f.ba(A.bS(null,null,null,null,null,C.l,null,A.p("\u0645\u0646 \u063a\u064a\u0631 \u0625\u0630\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0647\u0646\u0648\u0631\u064a\u0643 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0628\u0627\u0644\u062f\u0631\u062c\u0627\u062a \u0628\u0633",null,null,null,null,null,null,null,null),null,C.E,null,null,null,null,null,null,null,null,null,null))}case 1:return A.l(v,w)}})
return A.m($async$GG,w)},
Cf(){var x=0,w=A.n(y.v),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$Cf=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:r.t(new B.bc3(r))
u=4
x=7
return A.d(A.vq(),$async$Cf)
case 7:q=e
if(r.c==null){s=[1]
x=5
break}r.t(new B.bc4(r,q))
s.push(6)
x=5
break
case 4:u=3
n=t.pop()
o=r.c
if(o!=null)o.U(y.q).f.ba(A.bS(null,null,null,null,null,C.l,null,A.p("\u0645\u0642\u062f\u0631\u0646\u0627\u0634 \u0646\u062d\u062f\u062f \u0645\u0643\u0627\u0646\u0643 \u2014 \u0627\u062e\u062a\u0627\u0631 \u0645\u062f\u064a\u0646\u062a\u0643 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629",null,null,null,null,null,null,null,null),null,C.E,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.t(new B.bc5(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Cf,w)},
IA(){var x=0,w=A.n(y.v),v,u=this,t,s
var $async$IA=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.d(I.bGX(s),$async$IA)
case 3:t=e
if(t==null||u.c==null){x=1
break}u.t(new B.bc9(u,t))
case 1:return A.l(v,w)}})
return A.m($async$IA,w)},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.bH6(p.d,p.e),m=p.Q,l=m==null,k=!l,j=k?B.bHs(n,m):0,i=k&&p.CW,h=p.as
if(h!=null)x=h<0||h>25
else x=!1
h=y.u
w=A.a([D.aaC,C.ap,A.aR(A.p(p.f,o,o,o,o,F.b0,o,o,o),1)],h)
if(p.r)w.push(M.oF)
else w.push(A.cJ(o,o,o,o,D.acM,o,o,p.gaGu(),o,o,o,"\u062d\u062f\u0651\u062f \u0645\u0643\u0627\u0646\u064a",o))
w.push(A.bW(D.aUN,o,o,o,p.gaG2(),o,o))
w=A.ak(w,C.j,C.f,C.h,0,o)
v=l?0:m
v=A.cU(A.bA(new B.aeU(v,k?j:n,i,o),290,290),o,o)
u=A.p("\u0627\u0644\u0642\u0628\u0644\u0629 \u0639\u0644\u0649 "+(E.aW(C.e.ae(C.d.ar(B.AH(n)),360))+"\xb0")+" \u0645\u0646 \u0627\u0644\u0634\u0645\u0627\u0644",o,o,o,o,N.TD,C.ae,o,o)
t=D.ahl[C.e.ae(C.d.b7(B.AH(n)+22.5,45),8)]
s=p.d
r=p.e
q=Math.pow(Math.sin((21.4225-s)*3.141592653589793/180/2),2)+Math.cos(s*3.141592653589793/180)*Math.cos(0.37389315900848524)*Math.pow(Math.sin((39.8262-r)*3.141592653589793/180/2),2)
t=A.a([new E.cT(w,C.ah,C.ay,o,!1,o),C.Q,v,C.as,u,A.p("\u0646\u0627\u062d\u064a\u0629 "+t+" \u2022 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0644\u0644\u0643\u0639\u0628\u0629 \u062d\u0648\u0627\u0644\u064a "+E.aW(C.d.ar(12742*Math.atan2(Math.sqrt(q),Math.sqrt(1-q))))+" \u0643\u0645",o,o,o,o,F.ai,C.ae,o,o)],h)
if(k){w=E.aW(C.e.ae(C.d.ar(B.AH(m)),360))
v=p.as
v=v!=null&&v>=0?" \u2022 \u062f\u0642\u0629 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \xb1"+E.aW(C.d.ar(v))+"\xb0":""
t.push(A.p("\u0627\u062a\u062c\u0627\u0647 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u062f\u0644\u0648\u0642\u062a\u064a "+(w+"\xb0")+v,o,o,o,o,D.aLC,C.ae,o,o))}t.push(C.aK)
if(p.ch&&l)C.b.E(t,A.a([A.ka(D.abN,D.aRw,p.gar8(),A.kb(C.q,C.a5,o,o,o)),C.N],h))
if(k){l=i?"aligned":"turn "+C.d.ar(j)
if(i)h="\u062a\u0645\u0627\u0645! \u0625\u0646\u062a \u062f\u0644\u0648\u0642\u062a\u064a \u0645\u062a\u0648\u062c\u0651\u0647 \u0644\u0644\u0642\u0628\u0644\u0629 \u2713"
else{h=Math.abs(j)
h=j>0?"\u0644\u0641\u0651 \u064a\u0645\u064a\u0646 "+E.aW(C.d.ar(h))+"\xb0":"\u0644\u0641\u0651 \u0634\u0645\u0627\u0644 "+E.aW(C.d.ar(h))+"\xb0"}t.push(A.bJ(o,o,new E.cT(A.p(h,o,o,o,o,A.cB(o,o,i?G.bW:C.i,o,o,o,o,o,o,o,o,16,o,o,C.a3,o,o,!0,o,o,o,o,o,o,o,o),C.ae,o,o),C.ah,C.ay,o,i,o),!1,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,C.K,o))}else if(p.ay&&!p.ch)t.push(D.a8n)
else if(!p.ch)t.push(D.a_b)
if(k&&p.at)t.push(D.b2Y)
if(k)l=x||p.ax
else l=!1
if(l)t.push(D.b2X)
t.push(C.N)
t.push(D.aR0)
return H.vi(o,t,"\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629")}}
B.S9.prototype={
C(d){var x=null
return new E.cT(A.ak(A.a([A.c7(this.c,C.q,x,22),C.aY,A.aR(A.p(this.d,x,x,x,x,G.TI,x,x,x),1)],y.u),C.j,C.f,C.h,0,x),C.ah,C.ay,x,!1,x)}}
B.aeU.prototype={
C(d){var x,w=null,v=this.e,u=v?G.bW:C.q,t=A.a9W(-this.c*3.141592653589793/180,A.h6(w,w,w,new B.ak4(w),D.SR)),s=this.d,r=C.d.ar(s)
r=A.bJ(w,w,A.a9W(s*3.141592653589793/180,A.h6(w,w,w,new B.ade(u,w),D.SR)),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"qibla-arrow "+r,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,C.K,w)
s=v?u:C.d3
x=A.d2(u,2)
return A.hg(C.W,A.a([t,r,D.ayu,A.aA(w,A.c7(C.eT,v?C.a5:C.q,w,w),C.m,w,w,new A.ar(s,w,x,w,w,w,C.cr),w,54,w,w,w,w,54)],y.u),C.l,C.c5,w)}}
B.ak4.prototype={
aJ(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=e.jR(C.n),h=e.gfl()/2-18
$.ae()
x=A.b6()
x.r=C.i.bQ(0.06).gq()
d.jr(i,h,x)
x=A.b6()
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
m=new A.oa(C.d1,C.dq,C.fI,C.hO,C.dW)
m.r=(s?C.i:C.eK).gq()
m.c=s?2.5:1.2
l=m.ej()
x.drawLine.apply(x,[w+r*h,v+q*h,w+p*n,v+o*n,l])
l.delete()}for(x=D.auw.gdI(),x=x.ga5(x),r=h-28;x.u();){q=x.gL()
p=q.a
t=(p-90)*3.141592653589793/180
q=q.b
p=p===0?D.a2_:C.a8
k=new A.zl(new A.fj(q,j,j,C.bl,j,j,j,j,j,j,new A.r(!0,p,j,j,j,j,16,C.a0,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)),C.x,C.aL,new A.iO(1),j,j,j,j,C.bc,j)
k.z4()
q=Math.cos(t)
p=Math.sin(t)
o=k.b
k.aJ(d,new A.q(w+q*r-o.c/2,v+p*r-o.a.c.gca()/2))}},
eG(d){return!1}}
B.ade.prototype={
aJ(d,e){var x,w,v,u,t,s=e.jR(C.n),r=e.gfl()/2-18,q=s.Z(0,C.kN.am(0,r+12)),p=$.ae(),o=A.b6(),n=this.b
o.r=n.gq()
x=s.Z(0,C.kN.am(0,34))
w=s.Z(0,C.kN.am(0,r-6))
v=A.b6()
v.r=n.gq()
v.c=5
v.d=C.jl
d.le(x,w,v)
u=s.Z(0,C.kN.am(0,r-14))
t=new A.ca(p.r,C.ab,null,null,A.a([],y.a))
t.aF(new A.fg(q.a,q.b))
t.aF(new A.cO(u.Z(0,C.f1.am(0,11)).a,u.Z(0,C.f1.am(0,11)).b))
t.aF(new A.cO(u.ai(0,C.f1.am(0,11)).a,u.ai(0,C.f1.am(0,11)).b))
t.aF(new A.lT())
d.fI(t,o)},
eG(d){return!d.b.k(0,this.b)}}
var z=a.updateTypes(["a9<~>()","~(wS)"])
B.asv.prototype={
$0(){var x,w,v=this.a
if(v.f)return
x=A.jj(b.G.document)
w=A.X(x==null?null:x.visibilityState)
if((w==null?null:w)==="visible")v.GX()},
$S:15}
B.asw.prototype={
$1(d){var x=this.a,w=x.w
if(w!=null&&new A.ba(Date.now(),0,!1).dG(w).a>3e6){x.w=new A.ba(Date.now(),0,!1)
x.GX()}},
$S:39}
B.asu.prototype={
$1(d){return this.a.aDW(d)},
$S:3}
B.bcb.prototype={
$0(){var x=this.a
if(x.c!=null&&x.Q==null)x.t(new B.bca(x))},
$S:0}
B.bca.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.bc7.prototype={
$0(){},
$S:0}
B.bc8.prototype={
$0(){var x=this.a
x.cy=null
x.db=new A.ba(Date.now(),0,!1)
if(x.c!=null)x.t(new B.bc6())},
$S:0}
B.bc6.prototype={
$0(){},
$S:0}
B.bc1.prototype={
$0(){return this.a.ch=!1},
$S:0}
B.bc2.prototype={
$0(){return this.a.ay=!0},
$S:0}
B.bc3.prototype={
$0(){return this.a.r=!0},
$S:0}
B.bc4.prototype={
$0(){var x=this.a,w=this.b
x.d=w.a
x.e=w.b
x.f="\u0645\u0643\u0627\u0646\u0643 \u0627\u0644\u062d\u0627\u0644\u064a"},
$S:0}
B.bc5.prototype={
$0(){return this.a.r=!1},
$S:0}
B.bc9.prototype={
$0(){var x=this.a,w=this.b
x.d=w.b
x.e=w.c
x.f=w.glm()},
$S:0};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Tu.prototype,"gaEb","aEc",1)
w(v,"gar8","GG",0)
w(v,"gaGu","Cf",0)
w(v,"gaG2","IA",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.ast,B.ayP,B.wS])
x(A.k3,[B.asv,B.bcb,B.bca,B.bc7,B.bc8,B.bc6,B.bc1,B.bc2,B.bc3,B.bc4,B.bc5,B.bc9])
x(A.hG,[B.asw,B.asu])
w(B.uB,A.S)
w(B.Tu,A.T)
x(A.a5,[B.S9,B.aeU])
x(A.BA,[B.ak4,B.ade])})()
A.nV(b.typeUniverse,JSON.parse('{"uB":{"S":[],"e":[]},"Tu":{"T":["uB"]},"S9":{"a5":[],"e":[]},"aeU":{"a5":[],"e":[]},"ak4":{"au":[]},"ade":{"au":[]}}'))
var y={a:A.a1("y<ef>"),u:A.a1("y<e>"),h:A.a1("y<J>"),w:A.a1("i"),o:A.a1("kz<wS>"),q:A.a1("nS"),e:A.a1("B"),v:A.a1("~")};(function constants(){var x=a.makeConstList
D.aTp=new A.t("\u0628\u0646\u062f\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u0628\u0648\u0635\u0644\u0629\u2026",null,F.ai,null,null,null,null,null,null,null,null)
D.a_b=new A.dV(C.W,null,null,D.aTp,null)
D.a2_=new A.I(1,1,0.4196078431372549,0.4196078431372549,C.k)
D.a5N=new A.bm(3e6)
D.aOi=new A.r(!0,C.a8,null,null,null,null,13,null,null,null,null,null,1.7,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVr=new A.t("\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u0634 \u0645\u062a\u0627\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u0623\u0648 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647. \u062d\u0637 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0648\u062c\u0651\u0647 \u062d\u0631\u0641 \xab\u0634\xbb (\u0627\u0644\u0634\u0645\u0627\u0644) \u0646\u0627\u062d\u064a\u0629 \u0627\u0644\u0634\u0645\u0627\u0644 \u2014 \u062a\u0642\u062f\u0631 \u062a\u0639\u0631\u0641\u0647 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062e\u0631\u0627\u0626\u0637 \u0623\u0648 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u2014 \u0648\u0627\u0644\u0633\u0647\u0645 \u0627\u0644\u062f\u0647\u0628\u064a \u0647\u064a\u0628\u0642\u0649 \u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0642\u0628\u0644\u0629.",null,D.aOi,null,null,null,null,null,null,null,null)
D.a8n=new E.cT(D.aVr,C.ah,C.ay,null,!1,null)
D.aaC=new A.a4(K.Ao,null,C.q,null,null,null)
D.abN=new A.a4(C.t0,null,null,null,null,null)
D.acM=new A.a4(C.kn,null,C.a8,null,null,null)
D.ahl=x(["\u0627\u0644\u0634\u0645\u0627\u0644","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u0634\u0631\u0642","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u0634\u0631\u0642\u064a","\u0627\u0644\u062c\u0646\u0648\u0628","\u0627\u0644\u062c\u0646\u0648\u0628 \u0627\u0644\u063a\u0631\u0628\u064a","\u0627\u0644\u063a\u0631\u0628","\u0627\u0644\u0634\u0645\u0627\u0644 \u0627\u0644\u063a\u0631\u0628\u064a"],A.a1("y<i>"))
D.auw=new A.cI([0,"\u0634",90,"\u0642",180,"\u062c",270,"\u063a"],A.a1("cI<v,i>"))
D.a99=new A.a2(62839,"MaterialIcons",null,!1)
D.ac4=new A.a4(D.a99,34,C.i,null,null,null)
D.ayu=new A.qK(null,0,null,null,null,null,D.ac4,null)
D.SR=new A.G(290,290)
D.aLC=new A.r(!0,C.a8,null,null,null,null,13,null,null,null,null,null,1.8,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aR0=new A.t("\u0646\u0635\u064a\u062d\u0629: \u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0633\u0637\u0651\u062d \u0648\u0628\u0639\u064a\u062f \u0639\u0646 \u0627\u0644\u062d\u062f\u064a\u062f \u0648\u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633 \u0648\u062c\u0631\u0627\u0628 \u0627\u0644\u0645\u063a\u0646\u0627\u0637\u064a\u0633. \u0644\u0648 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u0645\u0634 \u062b\u0627\u0628\u062a \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0641\u064a \u0634\u0643\u0644 \u0631\u0642\u0645 8 \u0643\u0627\u0645 \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u062a\u062a\u0638\u0628\u0637.",null,F.ai,C.ae,null,null,null,null,null,null,null)
D.aRw=new A.t("\u0634\u063a\u0651\u0644 \u0627\u0644\u0628\u0648\u0635\u0644\u0629",null,null,null,null,null,null,null,null,null,null)
D.aUN=new A.t("\u0645\u062f\u064a\u0646\u0629 \u062a\u0627\u0646\u064a\u0629",null,C.ef,null,null,null,null,null,null,null,null)
D.a97=new A.a2(62812,"MaterialIcons",null,!1)
D.b2X=new B.S9(D.a97,"\u0627\u0644\u0628\u0648\u0635\u0644\u0629 \u0645\u062d\u062a\u0627\u062c\u0629 \u0645\u0639\u0627\u064a\u0631\u0629: \u062d\u0631\u0651\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0639\u0644\u0649 \u0634\u0643\u0644 8 \u0641\u064a \u0627\u0644\u0647\u0648\u0627 \u0643\u0627\u0645 \u0645\u0631\u0629",null)
D.aal=new A.a2(985111,"MaterialIcons",null,!1)
D.b2Y=new B.S9(D.aal,"\u0627\u0645\u0633\u0643 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0641\u0631\u0648\u062f (\u0645\u0633\u0637\u0651\u062d \u0632\u064a \u0627\u0644\u0635\u064a\u0646\u064a\u0629) \u0639\u0634\u0627\u0646 \u0627\u0644\u0627\u062a\u062c\u0627\u0647 \u064a\u0628\u0642\u0649 \u0645\u0638\u0628\u0648\u0637",null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c6z","bJo",()=>A.bvD())})()};
(a=>{a["a20L19daX8Tr7qD7G3HznufZZ9k="]=a.current})($__dart_deferred_initializers__);