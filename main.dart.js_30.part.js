((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,P,R,H,N,G,O,S,T,K,L,B={b0S:function b0S(d,e){this.a=d
this.b=e},Za:function Za(d,e,f){this.d=d
this.r=e
this.a=f},aXj:function aXj(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4){var _=this
_.fr=d
_.fx=e
_.fy=f
_.id=_.go=$
_.a=g
_.b=h
_.c=i
_.d=j
_.e=k
_.f=l
_.r=m
_.w=n
_.x=o
_.y=p
_.z=q
_.Q=r
_.as=s
_.at=t
_.ax=u
_.ay=v
_.ch=w
_.CW=x
_.cx=a0
_.cy=a1
_.db=a2
_.dx=a3
_.dy=a4},aXk:function aXk(d){this.a=d},
bZx(d){var x,w,v,u,t,s
if(d instanceof B.kN)return d
try{x=A.co(d)
w=x.code
v=x.message
u=w==null?"failed":A.ab(w)
t=v==null?"":A.ab(v)
return new B.kN(u,t)}catch(s){u=A.h(d)
return new B.kN("failed",u)}},
ac2:function ac2(){this.b=this.a=null},
aV9:function aV9(d){this.a=d},
aVc:function aVc(){},
aVb:function aVb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aVa:function aVa(d){this.a=d},
aVg:function aVg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aVe:function aVe(d){this.a=d},
aVf:function aVf(d){this.a=d},
aVh:function aVh(d){this.a=d},
aVj:function aVj(d,e,f){this.a=d
this.b=e
this.c=f},
aVi:function aVi(d,e,f){this.a=d
this.b=e
this.c=f},
aVd:function aVd(){},
bZy(d,e){return new B.kN(d,e)},
Re:function Re(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.w=i},
Gl:function Gl(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i
_.w=j},
Gn:function Gn(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Gm:function Gm(d,e){this.a=d
this.b=e},
kN:function kN(d,e){this.a=d
this.b=e},
bM4(d){var x,w=$.bQy()
w=A.bX(d,w,"\u0627")
x=$.bQz()
w=A.bX(w,x,"\u064a")
x=$.bQH()
w=A.bX(w,x,"\u0627")
x=$.bPh()
w=A.bX(w,x,"\u0627")
x=$.bQf()
w=A.bX(w,x,"\u0621")
x=$.bPZ()
w=A.bX(w,x,"\u0621")
x=$.bPi()
w=A.bX(w,x,"\u0627")
x=$.bPn()
w=A.bX(w,x,"\u0621")
w=A.bX(w,"\u0649","\u064a")
w=A.bX(w,"\u0629","\u0647")
x=$.bQ0()
w=A.bX(w,x,"")
x=$.bQi()
w=A.bX(w,x," ")
x=$.bQ6()
w=A.bX(w,x," ")
x=$.bCo()
return C.c.ar(A.bX(w,x," "))},
c2Z(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.length,k=e.length
if(l===0)return k
if(k===0)return l
x=k+1
w=y.S
v=J.kx(x,w)
for(u=0;u<x;++u)v[u]=u
t=A.bM(x,0,!1,w)
for(s=1;s<=l;++s,r=t,t=v,v=r){t[0]=s
for(w=s-1,u=1;u<=k;++u){q=u-1
p=d.charCodeAt(w)===e.charCodeAt(q)?0:1
o=v[u]+1
n=t[q]+1
m=v[q]+p
if(o<n)q=o<m?o:m
else q=n<m?n:m
t[u]=q}}return v[k]},
bwp(d,e){var x,w,v,u,t,s
if(d===e)return 1
x=A.aP("[\u0627\u0621]",!0,!1)
w=A.bX(d,x,"")
x=A.aP("[\u0627\u0621]",!0,!1)
v=A.bX(e,x,"")
if(w.length!==0&&w===v)return 1
u=d.length
t=e.length
u=u>t?u:t
if(u===0)return 1
s=1-B.c2Z(d,e)/u
return s>=1?0.99:s},
BG(d){var x,w,v,u,t,s,r,q=A.a([],y.d)
for(x=C.c.qY(d,$.bCo()),w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.length===0)continue
t=B.bM4(u)
s=A.bX(t," ","")
if(s.length===0){if(q.length!==0){r=q.pop()
q.push(new B.Ox(r.a+" "+u,r.b))}continue}q.push(new B.Ox(u,s))}return q},
c1L(d,e){var x,w,v,u,t=new B.brJ(),s=A.a([],y.s)
for(x=A.eQ(e,0,A.i8(5,"count",y.S),A.ad(e).c),w=x.$ti,x=new A.bP(x,x.gL(0),w.i("bP<aG.E>")),w=w.i("aG.E");x.u();){v=x.d
s.push((v==null?w.a(v):v).b)}u=!t.$2(s,D.Dw)&&t.$2(d,D.Dw)?C.b.is(d,5):d
return!t.$2(s,D.HZ)&&t.$2(u,D.HZ)?C.b.is(u,4):u},
bL3(d,e){var x=B.BG(d),w=B.bM4(e),v=y.U
v=A.a_(new A.aH(A.a(w.split(" "),y.s),new B.btc(),v),v.i("M.E"))
return new B.F3(x,B.c0Z(x,B.c1L(v,x)),w)},
c0Z(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=A.a([],y.s)
for(x=a5.length,w=0;w<a5.length;a5.length===x||(0,A.B)(a5),++w)a4.push(a5[w].b)
v=a4.length
u=a6.length
t=u+1
x=(v+1)*t
s=y.i
r=A.bM(x,0,!1,s)
q=A.bM(x,0,!1,y.S)
p=A.bM(v*(u===0?1:u),0,!1,s)
for(o=0;o<v;++o)for(x=o*u,n=0;n<u;++n)p[x+n]=B.bwp(a4[o],a6[n])
for(o=1;o<=v;++o){x=o*t
r[x]=o
q[x]=1}for(n=1;n<=u;++n){r[n]=n
q[n]=2}for(o=1;o<=v;++o)for(x=o*t,s=o>=2,m=o-1,l=m*t,k=m*u,j=o-2,i=j*t,n=1;n<=u;++n){h=l+n
g=r[h-1]+(1-p[k+n-1])
f=r[h]+1
if(f<g){g=f
e=1}else e=0
d=x+n
a0=r[d-1]+1
if(a0<g){g=a0
e=2}if(n>=2&&r[h-2]<g&&B.bwp(a4[m],a6[n-2]+a6[n-1])>=1){g=r[h-2]
e=3}if(s&&r[i+n-1]<g&&B.bwp(a4[j]+a4[m],a6[n-1])>=1){g=r[i+n-1]
e=4}r[d]=g
q[d]=e}a1=A.a([],y.k)
n=u
o=v
for(;;){x=o>0
if(!(x||n>0))break
if(x&&n>0)e=q[o*t+n]
else e=x?1:2
switch(e){case 0:--o
a2=p[o*u+n-1]
x=a4[o];--n
s=a6[n]
if(a2>=1)m=D.h4
else m=a2>=0.6?D.pH:D.pI
a1.push(new B.m0(o,x,s,m))
break
case 1:--o
a1.push(new B.m0(o,a4[o],null,D.pJ))
break
case 2:--n
a1.push(new B.m0(null,null,a6[n],D.W6))
break
case 3:--o
a3=n-2
a1.push(new B.m0(o,a4[o],a6[a3]+" "+a6[n-1],D.h4))
n=a3
break
default:x=o-1;--n
a1.push(new B.m0(x,a4[x],a6[n],D.h4))
o-=2
a1.push(new B.m0(o,a4[o],a6[n],D.h4))}}a4=y.e
a4=A.a_(new A.cz(a1,a4),a4.i("aG.E"))
return a4},
mD:function mD(d,e){this.a=d
this.b=e},
Ox:function Ox(d,e){this.a=d
this.b=e},
m0:function m0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
F3:function F3(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
aMw:function aMw(d){this.a=d},
aMv:function aMv(){},
brJ:function brJ(){},
btc:function btc(){},
bRC(d,e,f){return new B.q5(d,e,f)},
c3O(d){var x
A:{if("memorized"===d){x=D.e0
break A}if("learning"===d){x=D.m_
break A}x=D.lZ
break A}return x},
bN1(d,e){return d>=1&&d<=114&&e>=1&&e<=I.c6[d-1].a[1]},
bZz(){var x=y.S
return new B.ac3(A.x(x,y.u),A.aF(x))},
aVl(d){var x=d.jm()
return C.c.dt(C.e.j(A.cJ(x)),4,"0")+"-"+C.c.dt(C.e.j(A.ch(x)),2,"0")+"-"+C.c.dt(C.e.j(A.cx(x)),2,"0")},
bIa(d){var x=y.x,w=A.a_(new A.aj(A.a(d.split("-"),y.s),A.c54(),x),x.i("aG.E"))
return B.aVl(A.jG(w[0],w[1],w[2]-1,12,0,0,0))},
bzt(d){var x,w,v,u,t,s,r,q,p=y.S,o=A.x(p,y.u),n=A.aF(p),m=new B.ac3(o,n),l=d.h(0,"rows")
if(y.f.b(l))for(x=l.gdG(),x=x.ga0(x),w=y.j;x.u();){v=x.gK()
u=A.fb(A.h(v.a),null)
t=v.b
v=!0
if(u!=null)if(w.b(t))if(J.bf(t)>=3){v=C.e.b9(u,1000)
s=C.e.ah(u,1000)
v=!(v>=1&&v<=114&&s>=1&&s<=I.c6[v-1].a[1])}if(v)continue
v=J.bs(t)
r=C.d.bU(A.dp(v.h(t,0)))
if(r<0||r>=3)continue
o.n(0,u,new B.q5(D.ar0[r],C.d.bU(A.dp(v.h(t,1))),new A.b1(A.kp(C.d.bU(A.dp(v.h(t,2))),0,!0),0,!0)))}q=d.h(0,"dirty")
if(y.j.b(q)){x=J.bx_(q,y.o)
p=A.nm(x,new B.aVk(),x.$ti.i("M.E"),p)
n.E(0,new A.aH(p,o.gW7(),A.w(p).i("aH<M.E>")))}m.c=A.U(d.h(0,"last"))
p=A.bl(d.h(0,"streak"))
p=p==null?null:C.d.bU(p)
p=m.d=p==null?0:p
o=A.bl(d.h(0,"best"))
o=o==null?null:C.d.bU(o)
m.e=o==null?p:o
return m},
arf(d,e){return"https://everyayah.com/data/Husary_Muallim_128kbps/"+C.c.dt(C.e.j(d),3,"0")+C.c.dt(C.e.j(e),3,"0")+".mp3"},
C0:function C0(d,e){this.a=d
this.b=e},
q5:function q5(d,e,f){this.a=d
this.b=e
this.c=f},
ac3:function ac3(d,e){var _=this
_.a=d
_.b=e
_.c=null
_.e=_.d=0},
aVm:function aVm(){},
aVn:function aVn(){},
aVk:function aVk(){},
Rc:function Rc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bX5(){return new B.v8(null)},
c7u(d,e){var x,w,v,u,t={},s=I.c6[e-1].a[1],r=$.Jd().c
t.a=1
x=r.a
w=e*1000
v=1
for(;;){if(v<=s){v=x.h(0,w+v)
v=(v==null?$.pV():v).a===D.e0}else v=!1
if(!v)break
v=++t.a}x=t.a
if(x>s){t.a=1
u=1}else u=x
x=s<=10
if(x)u=1
t.b=u
t.c=x?s:C.e.cA(u+4,1,s)
return A.fy(C.db,new B.bvm(t,s,e),d,!0,null,null,!1,y.l)},
bBd(d){return A.d5(0,0,0,0,0,C.e.cA(C.d.aq(6+d*1.2),25,90))},
bAa(d){return E.aZ(C.e.b9(d,60))+":"+C.c.dt(E.aZ(C.e.ah(d,60)),2,"\u0660")},
bMN(d){return A.fy(C.db,new B.bw4($.Jd()),d,!0,null,null,!1,y.H)},
J6(d){var x,w=d.a
A:{if("timeout"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0627\u062a\u0623\u062e\u0631 \u0623\u0648\u064a \u0648\u0645\u0631\u062f\u0651\u0634\u060c \u0641\u0648\u0642\u0651\u0641\u0646\u0627\u0647 \u0648\u062c\u0631\u0651\u0628\u0646\u0627 \u062a\u0627\u0646\u064a \u0628\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0623\u062e\u0641 \u0648\u0645\u0646\u0641\u0639\u0634. \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}if("crashed"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0642\u0641 \u0641\u062c\u0623\u0629 (\u063a\u0627\u0644\u0628\u064b\u0627 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0634 \u0645\u0643\u0641\u064a\u0629). \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}x=d.gjS()
break A}return x},
c8M(d,e,f){var x,w=new B.bwi(),v=w.$1(f),u=w.$1("\xab\u0627\u0644\u0645\u062d\u0641\u0651\u0638\xbb \u0645\u0634\u0643\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 ("+e+")\n"+d.a+": "+d.b+"\n"),t=1990-u.length
if(v.length>t)v=t<=1?"":C.c.Y(v,0,t-1)+"\u2026"
x=u+v
return x.length>1990?C.c.Y(x,0,1990):x},
bMX(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
try{x=y.P.a(C.a1.eV(a4,null))
s=y.Y
r=s.a(J.b4(x,"rec"))
w=r==null?C.cD:r
q=s.a(J.b4(x,"last"))
v=q==null?C.cD:q
u=new B.bwh()
s=J.b4(v,"recovered")
t=A.h(s==null?"":s)
s=A.h(u.$1(J.b4(w,"wall")))
p=A.h(u.$1(J.b4(w,"source")))
o=A.h(u.$1(J.b4(w,"ctxRate")))
n=A.h(u.$1(J.b4(w,"pcmPeak")))
m=A.h(u.$1(J.b4(w,"ctxState")))
l=A.h(u.$1(J.b4(w,"stopMs")))
k=A.h(u.$1(J.b4(v,"prepMs")))
j=A.h(u.$1(J.b4(v,"ms")))
i=A.h(u.$1(J.b4(v,"featMs")))
h=A.h(u.$1(J.b4(v,"encMs")))
g=A.h(u.$1(J.b4(v,"decMs")))
f=A.h(u.$1(J.b4(v,"wallMs")))
e=A.h(u.$1(J.b4(v,"backend")))
d=A.h(u.$1(J.b4(v,"threads")))
a0=J.bf(t)!==0?" \xb7 recovered from "+A.h(t):""
a1=J.c(J.b4(x,"safe"),!0)?" \xb7 safe mode":""
a2=J.c(J.b4(x,"nogpu"),!0)?" \xb7 no-gpu":""
return"record "+s+" s ("+p+", "+o+" Hz, peak "+n+", "+m+") \u2192 stop/decode "+l+" ms \u2192 resample "+k+" ms \u2192 infer "+j+" ms (mel "+i+", enc "+h+", dec "+g+") \u2192 wall "+f+" ms \xb7 "+e+" \xd7"+d+a0+a1+a2}catch(a3){return""}},
E7:function E7(d,e){this.a=d
this.b=e},
Rd:function Rd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=null
_.e=!1
_.f=g
_.w=_.r=0
_.as=_.Q=_.z=_.y=_.x=null
_.at=!1
_.T$=0
_.p$=h
_.O$=_.M$=0},
aVo:function aVo(d){this.a=d},
aVp:function aVp(d){this.a=d},
aVq:function aVq(d){this.a=d},
v8:function v8(d){this.a=d},
V5:function V5(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.w=_.r=null},
bgU:function bgU(d){this.a=d},
bgT:function bgT(d,e){this.a=d
this.b=e},
bgV:function bgV(d){this.a=d},
bgS:function bgS(d,e){this.a=d
this.b=e},
bgW:function bgW(){},
bgG:function bgG(){},
bgM:function bgM(d,e,f){this.a=d
this.b=e
this.c=f},
bgN:function bgN(){},
bgQ:function bgQ(d){this.a=d},
bgP:function bgP(){},
bgR:function bgR(d){this.a=d},
bgJ:function bgJ(d,e){this.a=d
this.b=e},
bgK:function bgK(d){this.a=d},
bgI:function bgI(){},
bgL:function bgL(d){this.a=d},
bgH:function bgH(d){this.a=d},
bgO:function bgO(d,e){this.a=d
this.b=e},
E8:function E8(d,e,f){this.c=d
this.d=e
this.a=f},
SU:function SU(d,e){this.c=d
this.a=e},
bvm:function bvm(d,e,f){this.a=d
this.b=e
this.c=f},
bvj:function bvj(d,e,f){this.a=d
this.b=e
this.c=f},
bvl:function bvl(d,e){this.a=d
this.b=e},
bvi:function bvi(d,e){this.a=d
this.b=e},
bvh:function bvh(d,e){this.a=d
this.b=e},
bvk:function bvk(d,e){this.a=d
this.b=e},
bvd:function bvd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bvc:function bvc(d,e,f){this.a=d
this.b=e
this.c=f},
bve:function bve(d){this.a=d},
bvf:function bvf(d){this.a=d},
bvg:function bvg(d,e){this.a=d
this.b=e},
B9:function B9(d,e){this.a=d
this.b=e},
Aq:function Aq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
X6:function X6(d,e){var _=this
_.d=d
_.e=$
_.f=e
_.w=_.r=null
_.x=!1
_.y=0
_.ax=_.at=_.as=_.Q=_.z=null
_.ay=0
_.c=_.a=_.ch=null},
boL:function boL(){},
bp0:function bp0(d,e){this.a=d
this.b=e},
bp4:function bp4(d){this.a=d},
bp5:function bp5(d){this.a=d},
bp6:function bp6(d,e,f){this.a=d
this.b=e
this.c=f},
bp8:function bp8(d){this.a=d},
bp9:function bp9(d){this.a=d},
bp7:function bp7(){},
bpb:function bpb(d){this.a=d},
bpa:function bpa(d){this.a=d},
bpc:function bpc(d,e){this.a=d
this.b=e},
bpe:function bpe(d){this.a=d},
bpf:function bpf(d){this.a=d},
bpd:function bpd(){},
bp_:function bp_(d,e,f){this.a=d
this.b=e
this.c=f},
bp1:function bp1(d,e,f){this.a=d
this.b=e
this.c=f},
boT:function boT(d){this.a=d},
boU:function boU(d){this.a=d},
boS:function boS(){},
boV:function boV(){},
boW:function boW(d,e){this.a=d
this.b=e},
bpk:function bpk(d){this.a=d},
bpl:function bpl(d){this.a=d},
bpm:function bpm(d,e){this.a=d
this.b=e},
bpj:function bpj(d){this.a=d},
bpn:function bpn(d,e){this.a=d
this.b=e},
boZ:function boZ(){},
boY:function boY(d){this.a=d},
boX:function boX(d,e){this.a=d
this.b=e},
bp3:function bp3(d){this.a=d},
bp2:function bp2(d){this.a=d},
bpg:function bpg(){},
bph:function bph(){},
bpi:function bpi(){},
boM:function boM(d,e,f){this.a=d
this.b=e
this.c=f},
boN:function boN(d){this.a=d},
boP:function boP(){},
boO:function boO(){},
boQ:function boQ(d){this.a=d},
boR:function boR(d){this.a=d},
AF:function AF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Ap:function Ap(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
X5:function X5(d,e,f,g,h){var _=this
_.d=d
_.e=null
_.f=e
_.r=f
_.w=g
_.x=0
_.as=_.Q=_.z=_.y=null
_.at=h
_.c=_.a=null},
bou:function bou(){},
boD:function boD(d,e){this.a=d
this.b=e},
boE:function boE(d){this.a=d},
boC:function boC(){},
boG:function boG(d){this.a=d},
boF:function boF(d,e){this.a=d
this.b=e},
boH:function boH(d,e){this.a=d
this.b=e},
boy:function boy(d,e){this.a=d
this.b=e},
boz:function boz(d,e,f){this.a=d
this.b=e
this.c=f},
boA:function boA(d,e,f){this.a=d
this.b=e
this.c=f},
bov:function bov(d,e,f){this.a=d
this.b=e
this.c=f},
bow:function bow(d,e,f){this.a=d
this.b=e
this.c=f},
box:function box(d,e){this.a=d
this.b=e},
boB:function boB(d){this.a=d},
boI:function boI(){},
boJ:function boJ(d,e){this.a=d
this.b=e},
boK:function boK(d,e){this.a=d
this.b=e},
Ao:function Ao(d){this.a=d},
X4:function X4(d){this.d=d
this.c=this.a=null},
bol:function bol(){},
bos:function bos(d){this.a=d},
bot:function bot(){},
bor:function bor(d,e){this.a=d
this.b=e},
boq:function boq(d,e,f){this.a=d
this.b=e
this.c=f},
bop:function bop(d,e,f){this.a=d
this.b=e
this.c=f},
boo:function boo(d){this.a=d},
bom:function bom(d){this.a=d},
bon:function bon(d){this.a=d},
bw4:function bw4(d){this.a=d},
bw3:function bw3(d){this.a=d},
bvZ:function bvZ(d,e){this.a=d
this.b=e},
bw0:function bw0(){},
bw_:function bw_(){},
bw1:function bw1(d,e){this.a=d
this.b=e},
bw2:function bw2(d,e){this.a=d
this.b=e},
ac1:function ac1(d){this.a=d},
aV8:function aV8(d){this.a=d},
bwi:function bwi(){},
bwj:function bwj(){},
Ar:function Ar(d,e,f){this.c=d
this.d=e
this.a=f},
X7:function X7(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.r=null},
bpo:function bpo(d){this.a=d},
bpp:function bpp(d){this.a=d},
bpq:function bpq(d,e){this.a=d
this.b=e},
bpr:function bpr(d){this.a=d},
bpt:function bpt(d){this.a=d},
bps:function bps(d){this.a=d},
bwh:function bwh(){}},D,Q,I,E,F
J=c[1]
A=c[0]
C=c[2]
M=c[15]
P=c[19]
R=c[21]
H=c[13]
N=c[29]
G=c[34]
O=c[33]
S=c[10]
T=c[31]
K=c[39]
L=c[37]
B=a.updateHolder(c[8],B)
D=c[40]
Q=c[27]
I=c[28]
E=c[16]
F=c[18]
B.b0S.prototype={
N(){return"_ChipVariant."+this.b}}
B.Za.prototype={
A(d){var x=null
A.S(d)
return A.aL4(!1,x,C.fr,x,x,x,x,C.m,x,new B.aXj(d,!0,D.jQ,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,C.oP,x,x,x,x,x,x,x,x),x,x,x,x,x,x,x,x,!0,this.d,x,x,x,x,x,this.r,x,x,x,!1,x,x,x,x,x,x,x,!0,x,x)}}
B.aXj.prototype={
gp9(){var x,w=this,v=w.go
if(v===$){x=A.S(w.fr)
w.go!==$&&A.aE()
v=w.go=x.ax}return v},
gdW(){if(this.fy===D.jQ)var x=0
else x=this.fx?1:0
return x},
gwp(){return 1},
gfZ(){var x,w=this,v=w.id
if(v===$){x=A.S(w.fr)
w.id!==$&&A.aE()
v=w.id=x.ok}x=v.as
if(x==null)x=null
else x=x.cB(w.fx?w.gp9().k3:w.gp9().k3)
return x},
gcM(){return new A.b3(new B.aXk(this),y.b)},
gc5(){if(this.fy===D.jQ)var x=C.J
else{x=this.gp9().x1
if(x==null)x=C.x}return x},
gcf(){return C.J},
grW(){return null},
gvz(){return null},
ger(){var x,w,v=this
if(v.fy===D.jQ)if(v.fx){x=v.gp9()
w=x.to
if(w==null){w=x.p
x=w==null?x.k3:w}else x=w
x=new A.b6(x,1,C.B,-1)}else{x=v.gp9().k3
x=new A.b6(A.aC(31,x.v()>>>16&255,x.v()>>>8&255,x.v()&255),1,C.B,-1)}else x=C.k1
return x},
ghw(){var x=null
return new A.dM(18,x,x,x,x,this.fx?this.gp9().b:this.gp9().k3,x,x,x)},
gcO(){return C.ex},
gtu(){var x=this.gfZ(),w=x==null?null:x.r
if(w==null)w=14
x=A.c0(this.fr,C.br)
x=x==null?null:x.gdf()
x=A.oG(C.iL,C.du,A.D((x==null?C.aX:x).bc(w)/14-1,0,1))
x.toString
return x}}
B.ac2.prototype={
pk(){var x=this,w=x.a
if(w!=null)return A.dL(w,y.m)
w=x.b
return w==null?x.b=new B.aV9(x).$0():w},
rj(d,e){return this.azk(d,e,e)},
azk(d,e,f){var x=0,w=A.o(f),v,u=2,t=[],s,r,q,p
var $async$rj=A.k(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d(d.$0(),$async$rj)
case 7:r=h
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.Y(p)
r=B.bZx(s)
throw A.p(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$rj,w)},
mW(d,e){var x=A.hw(d[e])
if(x==null)x=null
return x===!0},
H4(){var x=0,w=A.o(y.X),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$H4=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
h=A
g=A
x=7
return A.d(s.pk(),$async$H4)
case 7:r=h.co(g.cf(e,"support",null,null,null,null))
q=s.mW(r,"worker")
p=s.mW(r,"wasm")
o=s.mW(r,"mic")
n=s.mW(r,"audio")
s.mW(r,"webgpu")
m=s.mW(r,"secure")
s.mW(r,"ios")
l=A.jy(r.memory)
if(l==null)l=null
if(l==null)l=0
s.mW(r,"isolated")
k=A.jy(r.cores)
if(k!=null)C.d.aq(k)
v=new B.Re(q,p,o,n,m,l)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=D.VI
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$H4,w)},
AO(){var x=0,w=A.o(y.M),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$AO=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=A
l=A
k=A
x=8
return A.d(s.pk(),$async$AO)
case 8:x=7
return A.d(m.e1(l.co(k.cf(e,"storage",null,null,null,null)),y.A),$async$AO)
case 7:r=e
if(r==null){v=null
x=1
break}q=C.d.aq(A.dk(r.quota))
p=C.d.aq(A.dk(r.usage))
v=new A.alg(q,p)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$AO,w)},
b09(){var x=y.K
A.LU(this.pk().bM(new B.aVc(),x),x)},
pj(d,e){var x=A.jy(d[e])
x=x==null?null:C.d.aq(x)
return x==null?0:x},
aYG(d,e,f){return this.rj(new B.aVb(this,d,e,f),y.C)},
ga9V(){var x,w
try{x=A.jz(b.G.sessionStorage)
return x}catch(w){return null}},
gagD(){var x=A.hw(b.G.mogtama3yTutorIsolated)
if(x==null)x=null
return x===!0},
a0j(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
try{m=b.G
l=A.hw(m.crossOriginIsolated)
if(l==null)l=f
if(l===!0)return!1
if(this.gagD())return!1
l=A.hw(m.isSecureContext)
if(l==null)l=f
if(l!==!0)return!1
x=A.co(m.navigator)
if(!("serviceWorker" in x))return!1
w=A.ab(x.userAgent)
l=A.jy(x.maxTouchPoints)
k=l==null?f:l
v=k==null?0:k
l=A.U(x.platform)
j=l==null?f:l
u=j==null?"":j
l=A.aP("iPad|iPhone|iPod",!0,!1)
if(!l.b.test(w))i=J.c(u,"MacIntel")&&v>1
else i=!0
t=i
l=A.aP("Chrome/|Chromium/|Firefox/|Edg/",!0,!1)
s=l.b.test(w)
if(t||!s)return!1
l=A.jy(x.hardwareConcurrency)
h=l==null?f:l
r=h==null?0:h
if(r>0&&r<3)return!1
q=Date.now()
l=this.ga9V()
l=l==null?f:A.U(A.cf(l,"getItem","mt.tutor.iso",f,f,f))
if(l==null)l=f
p=A.fb(l==null?"":l,f)
if(p!=null&&q-p<3e4)return!1
o=A.jz(m.localStorage)
m=o
m=m==null?f:A.U(A.cf(m,"getItem","mt.tutor.noiso",f,f,f))
if(m==null)m=f
n=A.fb(m==null?"":m,f)
if(n!=null&&q-n<2592e5)return!1
return!0}catch(g){return!1}},
afi(){var x,w,v,u,t,s,r=null
try{x=this.ga9V()
if(x!=null)A.cf(x,"setItem","mt.tutor.iso",""+Date.now(),r,r)}catch(w){}x=b.G
v=A.co(x.location)
u=A.ab(v.hash)
t=A.ab(v.search)
s=A.bV(A.ab(A.co(x.document).baseURI),0,r).W("tutor/").j(0)
x=u.length===0?"#/masjid/tools/tutor":u
A.cf(v,"replace",s+t+x,r,r,r)},
aYp(){var x,w=null,v=b.G,u=A.co(v.history),t=A.jy(u.length),s=t==null?w:t
if((s==null?0:s)>1)A.cf(u,"back",w,w,w,w)
else{x=A.ab(A.co(v.document).baseURI)
A.cf(A.co(v.location),"replace",A.bV(x,0,w).W("./").j(0)+"#/",w,w,w)}},
a0v(d,e,f,g,h){return this.rj(new B.aVg(this,e,d,f,h,g),y.H)},
a0y(){return this.rj(new B.aVh(this),y.D)},
VL(){var x=null,w=this.a
if(w!=null)A.cf(w,"cancelRecording",x,x,x,x)},
ab8(d){var x,w,v=this,u=A.U(d.text)
if(u==null)u=null
if(u==null)u=""
x=v.pj(d,"ms")
w=A.jy(d.seconds)
if(w==null)w=null
if(w==null)w=0
return new B.Gn(u,x,w,v.pj(d,"frames"),v.pj(d,"tokens"),v.mW(d,"retried"),v.pj(d,"encMs"),v.pj(d,"decMs"),v.pj(d,"featMs"))},
a7Y(d){var x={}
x.words=d
return x},
ajt(d,e){return this.rj(new B.aVj(this,d,e),y._)},
b2j(d,e){return this.rj(new B.aVi(this,d,e),y._)},
Fm(d,e){return this.b0e(d,e)},
b0e(d,e){var x=0,w=A.o(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Fm=A.k(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=p==null?7:9
break
case 7:x=10
return A.d(s.pk(),$async$Fm)
case 10:x=8
break
case 9:g=p
case 8:r=g
o=A.ad(d).i("aj<1,f>")
o=A.a_(new A.aj(d,new B.aVd(),o),o.i("aG.E"))
x=11
return A.d(A.e1(A.co(A.cf(r,"play",o,e,null,null)),y.y),$async$Fm)
case 11:q=g
v=q
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$Fm,w)},
GL(){var x=null,w=this.a
if(w!=null)A.cf(w,"stopPlayback",x,x,x,x)},
E3(){var x,w,v,u=null
try{w=this.a
x=w==null?u:A.ab(A.cf(w,"diag",u,u,u,u))
w=x
if(w==null)w=u
if(w==null)w="{}"
return w}catch(v){return"{}"}},
b1u(){var x,w,v=null
try{x=this.a
if(x!=null)A.cf(x,"resetDevice",v,v,v,v)}catch(w){}},
Z1(d){var x=this.a
if(x!=null)A.cf(x,"prefetch",d,null,null,null)}}
B.Re.prototype={}
B.Gl.prototype={
glH(){var x=this.f,w=x>0?"CPU \xd7"+x:""
x=this.a
if(x==="webgpu")return"WebGPU"
if(C.c.m(x,"webgpu"))return"WebGPU + "+w
return w.length===0?x:w}}
B.Gn.prototype={
gLQ(){var x=this,w=C.d.aA(x.d/100,0),v=x.f?" (retried on 30 s)":""
return"window "+w+" s, "+x.e+" tokens"+v+", mel "+x.x+" ms, encoder "+x.r+" ms, decoder "+x.w+" ms"}}
B.Gm.prototype={}
B.kN.prototype={
gjS(){var x,w=this.a
A:{if("mic_denied"===w){x="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0645\u0634 \u0633\u0627\u0645\u062d \u0644\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0627\u064a\u0643. \u0627\u0641\u062a\u062d \u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u0648\u0642\u0639 (\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u0642\u0641\u0644 \u062c\u0646\u0628 \u0627\u0644\u0639\u0646\u0648\u0627\u0646) \u0648\u0627\u0633\u0645\u062d \u0628\u0627\u0644\u0645\u064a\u0643\u0631\u0648\u0641\u0648\u0646\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
break A}if("no_mic"===w){x="\u0645\u0634 \u0644\u0627\u0642\u064a\u064a\u0646 \u0645\u0627\u064a\u0643 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647."
break A}if("mic_busy"===w){x="\u0627\u0644\u0645\u0627\u064a\u0643 \u0645\u0634\u063a\u0648\u0644 \u0641\u064a \u062a\u0637\u0628\u064a\u0642 \u062a\u0627\u0646\u064a (\u0645\u0643\u0627\u0644\u0645\u0629 \u0623\u0648 \u062a\u0633\u062c\u064a\u0644) \u2014 \u0627\u0642\u0641\u0644\u0647 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
break A}if("insecure"===w){x="\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0641\u062a\u062d \u0639\u0644\u0649 https."
break A}if("unsupported"===w){x="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u062f\u0639\u0645 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0623\u0648 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638. \u062c\u0631\u0651\u0628 \u0623\u062d\u062f\u062b \u0646\u0633\u062e\u0629 \u0645\u0646 Chrome \u0623\u0648 Safari."
break A}if("network"===w){x="\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0627\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0646\u062a \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
break A}if("memory"===w){x="\u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0634 \u0645\u0643\u0641\u064a\u0629 \u0644\u0644\u0645\u062d\u0641\u0651\u0638. \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
break A}if("decode"===w){x="\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0642\u0631\u0627 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u2014 \u062c\u0631\u0651\u0628 \u062a\u0633\u062c\u0651\u0644 \u062a\u0627\u0646\u064a."
break A}x="\u062d\u0635\u0644\u062a \u0645\u0634\u0643\u0644\u0629 \u0641\u064a \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
break A}return x},
j(d){return"TutorError("+this.a+": "+this.b+")"},
$ibo:1}
B.mD.prototype={
N(){return"WordStatus."+this.b}}
B.Ox.prototype={}
B.m0.prototype={
j(d){var x,w=this.b
if(w==null)w=""
x=this.c
if(x==null)x=""
return this.d.b+":"+w+"->"+x}}
B.F3.prototype={
gGJ(){var x,w=this,v=w.d
if(v===$){x=new B.aMw(w).$0()
w.d!==$&&A.aE()
w.d=x
v=x}return v},
gEk(){var x,w,v,u,t,s=A.a([],y.s)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.d===D.W6&&u.c!=null){t=u.c
t.toString
s.push(t)}}return s},
gaZw(){return J.ok(this.gGJ(),new B.aMv()).gL(0)},
gqs(){var x=this.a
return x.length!==0&&this.gaZw()===x.length&&this.gEk().length===0}}
B.C0.prototype={
N(){return"AyahStatus."+this.b}}
B.q5.prototype={}
B.ac3.prototype={
YB(d,e){var x=this.a.h(0,d*1000+e)
return x==null?$.pV():x},
aIP(d){var x=this,w=B.aVl(d),v=x.c
if(v===w)return
v=v!=null&&v===B.bIa(w)?x.d+1:1
x.d=v
if(v>x.e)x.e=v
x.c=w},
aev(){var x=Date.now(),w=B.aVl(new A.b1(x,0,!1))
x=this.c
return x===w||x===B.bIa(w)?this.d:0},
aiy(d,e,f,g){var x=this,w=new A.b1(Date.now(),0,!1),v=x.YB(d,e),u=g?C.e.cA(v.b+1,0,100):0,t=g&&u>=f?D.e0:D.m_,s=new B.q5(t,u,w.hA()),r=d*1000+e
x.a.n(0,r,s)
x.b.D(0,r)
x.aIP(w)
return s},
Ys(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.c6[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pV():s).a===D.e0)++u}return u},
aYn(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.c6[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pV():s).a===D.m_)++u}return u},
gahH(){var x=this.a,w=A.w(x).i("c7<2>")
return new A.aH(new A.c7(x,w),new B.aVm(),w.i("aH<M.E>")).gL(0)},
gamy(){var x=this.a,w=A.w(x).i("bh<1>")
w=A.nm(new A.bh(x,w),new B.aVn(),w.i("M.E"),y.S)
w=A.ep(w,A.w(w).i("M.E"))
x=A.a_(w,A.w(w).c)
C.b.lc(x)
return x},
cV(){var x,w,v,u,t,s=this,r=y.N,q=A.x(r,y.L)
for(x=s.a,x=new A.dN(x,A.w(x).i("dN<1,2>")).ga0(0),w=y.t;x.u();){v=x.d
u=v.a
t=v.b
q.n(0,""+u,A.a([t.a.a,t.b,t.c.a],w))}x=s.b
x=A.a_(x,A.w(x).c)
return A.L(["v",1,"rows",q,"dirty",x,"last",s.c,"streak",s.d,"best",s.e],r,y.z)},
aUo(){var x,w,v,u,t,s,r,q,p,o=A.a([],y.Z)
for(x=this.b,x=A.bzh(x,300,A.w(x).c),x=new A.G5(J.aB(x.a),x.b,A.w(x).i("G5<1>")),w=y.N,v=y.z,u=this.a;x.u();){t=x.gK()
s=C.e.b9(t,1000)
t=C.e.ah(t,1000)
r=s*1000+t
q=u.h(0,r)
q=(q==null?$.pV():q).a===D.e0?"memorized":"learning"
p=u.h(0,r)
if(p==null)p=$.pV()
r=u.h(0,r)
o.push(A.L(["surah",s,"ayah",t,"status",q,"perfect_count",p.b,"updated_at",(r==null?$.pV():r).c.iW()],w,v))}return o},
aYY(d){var x,w,v,u,t,s,r
for(x=d.length,w=this.a,v=this.b,u=0;u<d.length;d.length===x||(0,A.B)(d),++u){t=d[u]
s=A.er(t.h(0,"surah"))*1000+A.er(t.h(0,"ayah"))
r=w.h(0,C.e.b9(s,1000)*1000+C.e.ah(s,1000))
if((r==null?$.pV():r).c.iW()===t.h(0,"updated_at"))v.I(0,s)}},
aZ5(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(x=J.aB(d),w=this.b,v=this.a,u=y.f,t=!1;x.u();){s=x.gK()
if(!u.b(s))continue
r=A.bl(s.h(0,"surah"))
q=r==null?null:C.d.bU(r)
r=A.bl(s.h(0,"ayah"))
p=r==null?null:C.d.bU(r)
o=A.fX(A.h(s.h(0,"updated_at")))
r=!0
if(q!=null)if(p!=null)if(o!=null)r=!(q>=1&&q<=114&&p>=1&&p<=I.c6[q-1].a[1])
if(r)continue
n=B.c3O(s.h(0,"status"))
if(n===D.lZ)continue
r=q*1000+p
m=v.h(0,r)
if(m!=null){l=m.c
k=o.a
j=l.a
if(k<=j)l=k===j&&o.b>l.b
else l=!0
l=!l}else l=!1
if(l)continue
l=A.bl(s.h(0,"perfect_count"))
l=l==null?null:C.d.bU(l)
v.n(0,r,new B.q5(n,C.e.cA(l==null?0:l,0,100),o.hA()))
w.I(0,r)
t=!0}return t}}
B.Rc.prototype={
DT(d,e,f,g,h){var x=this,w=g==null?x.a:g,v=h==null?x.b:h,u=d==null?x.c:d,t=e==null?x.d:e
return new B.Rc(w,v,u,t,f==null?x.e:f)},
aSR(d){var x=null
return this.DT(x,x,d,x,x)},
ae5(d){var x=null
return this.DT(x,d,x,x,x)},
aSV(d){var x=null
return this.DT(x,x,x,x,d)},
aSl(d){var x=null
return this.DT(d,x,x,x,x)},
aSS(d){var x=null
return this.DT(x,x,x,d,x)},
cV(){var x=this
return A.L(["n",x.a,"r",x.b,"auto",x.c,"hide",x.d,"in",x.e],y.N,y.z)}}
B.E7.prototype={
N(){return"ModelState."+this.b}}
B.Rd.prototype={
XX(){var x=this.Q
return x==null?this.Q=new B.aVo(this).$0():x},
oU(d){return this.al4(d)},
al4(d){var x=0,w=A.o(y.H),v=this
var $async$oU=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:v.b=d
v.X()
x=2
return A.d(A.ia("mt.tutor.settings",C.a1.ht(d.cV(),null)),$async$oU)
case 2:return A.m(null,w)}})
return A.n($async$oU,w)},
wZ(){var x=0,w=A.o(y.H),v=this,u
var $async$wZ=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:v.X()
x=2
return A.d(A.ia("mt.tutor.progress",C.a1.ht(v.c.cV(),null)),$async$wZ)
case 2:u=v.as
if(u!=null)u.aF()
v.as=A.cB(C.C,v.garq())
return A.m(null,w)}})
return A.n($async$wZ,w)},
Gu(d,e,f){return this.alK(d,e,f)},
alK(d,e,f){var x=0,w=A.o(y.H),v=this
var $async$Gu=A.k(function(g,h){if(g===1)return A.l(h,w)
for(;;)switch(x){case 0:v.z=new A.bL(d,e,f)
x=2
return A.d(A.ia("mt.tutor.last",C.a1.ht(A.L(["s",d,"f",e,"t",f],y.N,y.S),null)),$async$Gu)
case 2:return A.m(null,w)}})
return A.n($async$Gu,w)},
zE(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$zE=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=s.f
if(n===D.O4||n===D.hP){x=1
break}s.f=D.O4
s.y=null
s.X()
u=4
n=A.k6().gep().h(0,"tutor_device")
if(n==null)n="auto"
p=A.k6().gep().h(0,"tutor_threads")
p=A.fb(p==null?"":p,null)
if(p==null)p=0
x=7
return A.d(s.a.aYG(new B.aVp(s),n,p),$async$zE)
case 7:s.x=e
s.f=D.hP
n=A.k6().gep().h(0,"debug")
if(n==="1"){n=s.x
n.toString
r=n
A.to().$1("[tutor] model ready: "+r.a+" "+r.b+" threads="+r.f+" isolated="+r.r+" in "+r.c+" ms (warm-up "+r.w+" ms, cached before: "+r.d+")")}u=2
x=6
break
case 4:u=3
m=t.pop()
n=A.Y(m)
if(n instanceof B.kN){q=n
s.f=D.axx
s.y=q
n=A.k6().gep().h(0,"debug")
if(n==="1")A.to().$1("[tutor] model failed: "+A.h(q))}else throw m
x=6
break
case 3:x=2
break
case 6:s.X()
case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$zE,w)},
us(){var x=0,w=A.o(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$us=A.k(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:if(r.at){x=1
break}q=null
try{k=$.ac().b
k===$&&A.b()
k=k.gc2().e.a
q=(k==null?null:k.r)!=null}catch(d){x=1
break}if(!q){x=1
break}r.at=!0
u=4
k=$.ac().b
k===$&&A.b()
p=k
x=7
return A.d(p.cT("quran_tutor_progress").h2("surah, ayah, status, perfect_count, updated_at"),$async$us)
case 7:o=a1
n=r.c.aZ5(o)
m=0,k=y.N,i=y.z
case 8:if(!(m<25)){x=10
break}l=r.c.aUo()
if(J.bf(l)===0){x=10
break}h=p
g=A.L(["p_rows",l],k,i)
f=h.CW
f===$&&A.b()
f.b.E(0,A.m7(h.x,k,k))
x=11
return A.d(f.b1R("quran_tutor_save",!1,g,i),$async$us)
case 11:r.c.aYY(l)
case 9:++m
x=8
break
case 10:x=12
return A.d(A.ia("mt.tutor.progress",C.a1.ht(r.c.cV(),null)),$async$us)
case 12:if(n)r.X()
s.push(6)
x=5
break
case 4:u=3
e=t.pop()
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
r.at=!1
x=s.pop()
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$us,w)},
FB(d){return this.b1w(d)},
b1w(d){var x=0,w=A.o(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$FB=A.k(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:p=B.bzt(t.c.cV()).cV()
y.f.a(p.h(0,"rows")).dJ(0,new B.aVq(d))
t.c=B.bzt(p)
x=2
return A.d(t.wZ(),$async$FB)
case 2:v=4
s=$.ac().b
s===$&&A.b()
r=s.gc2().e.a
x=(r==null?null:r.r)!=null?7:8
break
case 7:r=y.z
x=9
return A.d(s.bh("quran_tutor_reset",A.L(["p_surah",d],y.N,r),r),$async$FB)
case 9:case 8:v=1
x=6
break
case 4:v=3
o=u.pop()
x=6
break
case 3:x=1
break
case 6:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$FB,w)}}
B.v8.prototype={
V(){var x=$.Jd()
return new B.V5(x,new A.bb(C.W,$.a8()))}}
B.V5.prototype={
ab(){var x,w,v=this
v.ap()
x=v.d
x.a5(v.gn5())
w=y.a
x.XX().bM(new B.bgU(v),w)
H.aL_().bM(new B.bgV(v),w).hr(new B.bgW())
A.LU(H.byU(),y.y)},
vb(){if(this.c!=null)this.t(new B.bgG())},
l(){var x,w=this
w.d.R(w.gn5())
x=w.e
x.p$=$.a8()
x.T$=0
w.ao()},
Jc(){var x=0,w=A.o(y.H),v,u=this,t,s
var $async$Jc=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:s=u.d
x=3
return A.d(s.oU(s.b.aSR(!0)),$async$Jc)
case 3:t=s.a
t.b09()
if(t.a0j()){t.afi()
x=1
break}s.zE()
case 1:return A.m(v,w)}})
return A.n($async$Jc,w)},
vc(d,e,f){return this.aHi(d,e,f)},
aOc(d){return this.vc(d,null,null)},
aHi(d,e,f){var x=0,w=A.o(y.H),v,u=this,t,s,r
var $async$vc=A.k(function(g,h){if(g===1)return A.l(h,w)
for(;;)switch(x){case 0:if(u.w==null){u.c.U(y.q).f.be(A.bQ(null,null,null,null,null,C.l,null,A.j("\u0644\u062d\u0638\u0629\u2026 \u0628\u0646\u062c\u0647\u0651\u0632 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641",null,null,null,null,null,null,null,null,null),null,C.C,null,null,null,null,null,null,null,null,null,null))
x=1
break}x=e!=null&&f!=null?3:5
break
case 3:t=new A.Q(e,f)
x=4
break
case 5:s=u.c
s.toString
x=6
return A.d(B.c7u(s,d),$async$vc)
case 6:t=h
case 4:if(t==null||u.c==null){x=1
break}x=7
return A.d(u.d.Gu(d,t.a,t.b),$async$vc)
case 7:s=u.c
if(s==null){x=1
break}r=y.z
x=8
return A.d(A.ao(s,!1).cU(A.cU(new B.bgM(u,d,t),null,r),r),$async$vc)
case 8:if(u.c!=null)u.t(new B.bgN())
case 1:return A.m(v,w)}})
return A.n($async$vc,w)},
A(d){var x=null,w=this.d,v=w.b,u=A.a([],y.p),t=w.a
if(t.gagD()&&!A.ao(d,!1).VI())u.push(A.cG(x,x,x,x,D.adR,x,x,t.gaYo(),x,x,x,"\u0631\u062c\u0648\u0639 \u0644\u0645\u0633\u062c\u062f\u064a",x))
t=v.e
if(t)u.push(A.cG(x,x,x,x,D.aeO,x,x,new B.bgQ(d),x,x,x,"\u062a\u0642\u062f\u0651\u0645\u064a",x))
u.push(A.cG(x,x,x,x,D.C_,x,x,new B.bgR(d),x,x,x,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",x))
if(!w.e)w=D.anF
else w=t?this.aDD():this.aE3()
return M.vT(u,w,"\u0627\u0644\u0645\u062d\u0641\u0651\u0638")},
aE3(){var x,w,v,u,t,s,r,q,p=null,o=this.d.d
if(o==null)o=D.VI
x=this.r
w=x==null?p:x.a-x.b
if(!(o.a&&o.b))v="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u062f\u0639\u0645 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638. \u062c\u0631\u0651\u0628 \u0623\u062d\u062f\u062b \u0646\u0633\u062e\u0629 \u0645\u0646 Chrome (\u0623\u0646\u062f\u0631\u0648\u064a\u062f) \u0623\u0648 Safari (\u0622\u064a\u0641\u0648\u0646)."
else if(!o.f)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0641\u062a\u062d \u0639\u0644\u0649 https \u0639\u0634\u0627\u0646 \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0627\u064a\u0643."
else v=!o.c||!o.d?"\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u0633\u0645\u062d \u0628\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0646 \u0627\u0644\u0645\u0627\u064a\u0643.":p
x=y.p
u=A.a([D.aJ7,C.aq],x)
for(t=0;t<4;++t){s=D.apd[t]
u.push(new A.a1(C.bA,A.ak(A.a([A.c6(s.a,C.a6,p,18),C.as,new A.dD(1,C.aT,A.j(s.b,p,p,p,p,p,G.UJ,p,p,p),p)],x),C.y,C.f,C.h,0,p,p),p))}u=A.ae(u,C.y,C.f,C.h)
s=A.a([D.b_r,C.Q,A.j("\u0647\u0646\u062d\u0645\u0651\u0644 \u0645\u0644\u0641 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 (\u062d\u0648\u0627\u0644\u064a "+E.aZ(105)+" \u0645\u064a\u062c\u0627) \u0648\u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0648\u0628\u0639\u062f \u0643\u062f\u0647 \u0628\u064a\u0641\u062a\u062d \u0645\u0646 \u063a\u064a\u0631 \u062a\u062d\u0645\u064a\u0644. \u064a\u064f\u0641\u0636\u0651\u0644 \u062a\u0643\u0648\u0646 \u0639\u0644\u0649 Wi-Fi.",p,p,p,p,p,F.ak,p,p,p)],x)
if(w!=null){r=w<3e8
q=r?"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0645\u062a\u0635\u0641\u062d \u0642\u0644\u064a\u0644\u0629 ("+E.aZ(C.d.aq(w/1e6))+" \u0645\u064a\u062c\u0627) \u2014 \u0641\u0636\u0651\u064a \u0634\u0648\u064a\u0629 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0623\u0648\u0644.":"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629: \u0643\u0641\u0627\u064a\u0629 \u2713"
C.b.E(s,A.a([C.Q,A.j(q,p,p,p,p,p,A.cu(p,p,r?D.d_:C.cq,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x))}r=o.w
if(r>0&&r<3)C.b.E(s,A.a([C.Q,D.aZZ],x))
x=A.a([new E.cW(u,C.af,C.aA,p,!0,p),new E.cW(A.ae(s,C.y,C.f,C.h),C.af,C.aA,p,!1,p),D.b6c,C.Q],x)
if(v!=null)x.push(new E.cW(A.j(v,p,p,p,p,p,D.aSc,p,p,p),C.af,C.aA,p,!1,p))
else x.push(A.jL(D.adb,D.aVq,this.gaHr(),A.jM(C.p,C.a5,D.aLF,p,p,p,p)))
x.push(C.aJ)
x.push(D.VH)
return x},
aDD(){var x,w,v=this,u=null,t=v.d,s=t.c,r=v.e,q=C.c.ar(r.a.a),p=q.length===0,o=p?C.ui:H.bMF(q),n=t.z,m=A.aQ(v.aav(C.fw,E.aZ(s.gahH())+" \u0622\u064a\u0629","\u062d\u0641\u0638\u062a\u0647\u0627"),1),l=E.aZ(s.aev()),k=s.c,j=Date.now()
k=k===B.aVl(new A.b1(j,0,!1))?"\u0648\u0631\u0627 \u0628\u0639\u0636 \u2014 \u0643\u0645\u0651\u0644!":"\u0633\u0645\u0651\u0639 \u0627\u0644\u0646\u0647\u0627\u0631\u062f\u0647 \u0639\u0634\u0627\u0646 \u062a\u0643\u0645\u0651\u0644"
j=y.p
k=A.a([new B.E8(t,!1,u),A.ak(A.a([m,C.as,A.aQ(v.aav(C.Bk,l+" \u064a\u0648\u0645",k),1)],j),C.j,C.f,C.h,0,u,u),C.T],j)
if(n!=null){t=H.jB(n.a)
m=n.b
l=n.c
m=m===l?"\u0622\u064a\u0629 "+E.aZ(m):"\u0627\u0644\u0622\u064a\u0627\u062a "+E.aZ(m)+"\u2013"+E.aZ(l)
k.push(new E.cW(A.ak(A.a([D.aek,C.aU,A.aQ(A.ae(A.a([D.aTT,A.j(t+" \u2014 "+m,u,u,u,u,u,F.aZ,u,u,u)],j),C.y,C.f,C.h),1),P.kN],j),C.j,C.f,C.h,0,u,u),C.af,C.aA,new B.bgJ(v,n),!0,u))}t=C.i.bo(0.08)
k.push(A.bE(u,C.I,!1,u,!0,C.l,u,A.bJ(),r,u,u,u,u,u,2,A.fn(u,new A.ef(4,A.a9(14),C.v),u,u,u,u,u,u,!0,u,u,u,u,u,u,t,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,C.pp,"\u0639\u0627\u064a\u0632 \u062a\u062d\u0641\u0638 \u0633\u0648\u0631\u0629 \u0625\u064a\u0647\u061f",u,u,u,u,u,u,u,u,u,!0,!0,!1,u,C.nl,u,u,u,u,u,u,u,u,u,u,u,u),C.t,!0,u,!0,u,!1,u,C.L,u,u,u,u,u,u,u,u,u,1,u,u,!1,"\u2022",u,new B.bgK(v),u,u,u,!1,u,u,!1,u,!0,u,C.H,u,u,u,u,u,u,u,u,u,u,u,C.cU,!0,C.z,u,C.S,u,u,u,u))
k.push(C.T)
if(!p){t=A.a([],j)
if(o.length===0)t.push(D.aXO)
for(r=o.length,x=0;x<o.length;o.length===r||(0,A.B)(o),++x)t.push(v.Kb(o[x]))
C.b.E(k,t)}else{t=A.a([D.azP,D.aAh,v.Kb(1)],j)
for(w=114;w>=78;--w)t.push(v.Kb(w))
t.push(C.Q)
r=v.f
p=A.c6(r?C.tK:C.kH,C.a6,u,u)
t.push(A.hs(p,A.j(r?"\u0627\u062e\u0641\u064a \u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631":"\u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631 (\u0627\u0644\u0628\u0642\u0631\u0629 \u0644\u062d\u062f \u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a)",u,u,u,u,u,C.ek,u,u,u),new B.bgL(v),u))
if(v.f)for(w=2;w<=77;++w)t.push(v.Kb(w))
C.b.E(k,t)}k.push(C.aq)
k.push(D.xe)
return k},
aav(d,e,f){var x=null,w=y.p
return new E.cW(A.ak(A.a([A.c6(d,C.p,x,x),C.as,A.aQ(A.ae(A.a([A.j(e,x,x,x,x,x,F.aZ,x,x,x),A.j(f,x,1,C.ag,x,x,D.aR_,x,x,x)],w),C.y,C.f,C.h),1)],w),C.j,C.f,C.h,0,x,x),C.af,C.G,x,!1,x)},
Kb(d){var x,w=null,v=this.d.c,u=I.c6[d-1].a[1],t=v.Ys(d),s=t/u,r=y.p,q=A.bn(A.h6(C.U,A.a([A.bxk(C.dH,G.c3,w,w,w,w,w,3,s,w),A.j(E.aZ(d),w,w,w,w,w,R.V7,w,w,w)],r),C.l,C.ca,w),36,36),p=A.j(H.jB(d),w,w,w,w,w,D.aNS,w,w,w)
if(t===0)x=E.aZ(u)+" \u0622\u064a\u0629"
else x=t===u?"\u0645\u062d\u0641\u0648\u0638\u0629 \u0643\u0644\u0647\u0627 \u2713":"\u062d\u0641\u0638\u062a "+E.aZ(t)+" \u0645\u0646 "+E.aZ(u)
r=A.a([q,C.fT,A.aQ(A.ae(A.a([p,A.j(x,w,w,w,w,w,A.cu(w,w,t===u?G.c3:C.cq,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),C.y,C.f,C.h),1)],r)
if(s>0&&s<1)r.push(A.j(E.aZ(C.d.aq(s*100))+"\u066a",w,w,w,w,w,D.UV,w,w,w))
r.push(D.ade)
return new E.cW(A.ak(r,C.j,C.f,C.h,0,w,w),L.A5,C.ew,new B.bgO(this,d),!1,w)}}
B.E8.prototype={
A(d){var x,w,v,u,t,s,r=null,q=this.c
switch(q.f.a){case 2:if(this.d)return C.aE
return D.azH
case 3:x=q.y
x=A.a([A.j(x==null?"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0634\u063a\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638":B.J6(x),r,r,r,r,r,D.wA,r,r,r)],y.p)
w=q.y
if(w!=null)x.push(new B.Ar(w,"model load",r))
x.push(C.Q)
x.push(new A.xT(C.Wo,!1,q.gaYF(),r,r,r,r,C.m,r,!1,r,!0,r,C.lE,r))
return new E.cW(A.ae(x,C.y,C.f,C.h),C.af,C.aA,r,!1,r)
case 0:case 1:v=q.w
u=q.r
q=v>0
t=q?C.d.cA(u/v,0,1):r
s=q&&u<v
q=A.j(s?"\u0628\u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026 "+E.aZ(C.d.aq(u/1e6))+" \u0645\u0646 "+E.aZ(C.d.aq(v/1e6))+" \u0645\u064a\u062c\u0627":"\u0628\u0646\u062c\u0647\u0651\u0632 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026",r,r,r,r,r,C.wD,r,r,r)
x=A.a9(8)
w=y.p
x=A.a([q,C.R,A.n0(x,A.DK(C.dH,C.p,7,s?t:r),C.bl)],w)
if(!this.d)C.b.E(x,A.a([C.Q,D.aVS],w))
return new E.cW(A.ae(x,C.y,C.f,C.h),C.af,C.aA,r,!1,r)}}}
B.SU.prototype={
A(d){var x=null,w=D.d_.bo(0.1),v=A.a9(14),u=A.cR(D.d_.bo(0.4),1)
return A.au(x,A.ak(A.a([D.ae7,C.as,A.aQ(A.j(this.c?"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0627\u0644\u062a\u062c\u0648\u064a\u062f.":"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0623\u062d\u0643\u0627\u0645 \u0627\u0644\u062a\u062c\u0648\u064a\u062f. \u0627\u0642\u0631\u0627 \u0639\u0644\u0649 \u0634\u064a\u062e \u0623\u0648 \u0645\u062d\u0641\u0651\u0638 \u0641\u064a \u0645\u0633\u062c\u062f\u0643 \u0643\u0645\u0627\u0646.",x,x,x,x,x,D.V0,x,x,x),1)],y.p),C.y,C.f,C.h,0,x,x),C.m,x,x,new A.ap(w,x,u,v,x,x,C.r),x,x,C.aA,C.aS,x,x,x)}}
B.B9.prototype={
N(){return"_Phase."+this.b}}
B.Aq.prototype={
V(){return new B.X6($.Jd(),D.jX)}}
B.X6.prototype={
gi7(){var x=this.e
return x===$?this.e=this.a.d:x},
gyl(){var x,w=this.a,v=w.f
w=w.c
x=this.gi7()
return H.J3(w,x,v.vk(w,x)).b},
ab(){var x,w=this
w.ap()
x=w.d
x.a5(w.gn5())
x.XX()
x.a.Z1(B.arf(w.a.c,w.gi7()))},
vb(){if(this.c!=null)this.t(new B.boL())},
l(){var x,w=this,v=w.d
v.R(w.gn5())
x=w.Q
if(x!=null)x.aF()
v=v.a
v.GL()
v.VL()
w.ao()},
S9(d){var x,w,v=this
if(v.f===D.pV)v.d.a.VL()
x=v.d.a
x.GL()
w=v.Q
if(w!=null)w.aF()
v.t(new B.bp0(v,d))
x.Z1(B.arf(v.a.c,d))
w=v.a
if(d<w.e)x.Z1(B.arf(w.c,d+1))},
Kp(d){return this.aEE(d)},
aEE(d){var x=0,w=A.o(y.H),v,u=this,t,s,r,q,p
var $async$Kp=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:if(u.f===D.pU){u.d.a.GL()
u.t(new B.bp4(u))
x=1
break}t=u.r!=null?D.ha:D.jX
u.t(new B.bp5(u))
s=u.d
r=A.a([B.arf(u.a.c,u.gi7())],y.s)
q=d==null?s.b.b:d
x=3
return A.d(s.a.Fm(r,q),$async$Kp)
case 3:p=f
if(u.c==null||u.f!==D.pU){x=1
break}u.t(new B.bp6(u,t,p))
case 1:return A.m(v,w)}})
return A.n($async$Kp,w)},
Jt(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Jt=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.d
if(l.f!==D.hP){x=1
break}p=l.a
p.GL()
r=B.BG(s.gyl()).length
s.t(new B.bp8(s))
o=s.Q
if(o!=null)o.aF()
s.Q=A.kM(C.fu,new B.bp9(s))
u=4
o=B.bBd(r)
n=A.d5(0,0,0,350*r,0,0)
x=7
return A.d(p.a0v(l.b.c,o,n,new B.bpa(s),new B.bpb(s)),$async$Jt)
case 7:u=2
x=6
break
case 4:u=3
k=t.pop()
l=A.Y(k)
if(l instanceof B.kN){q=l
l=s.Q
if(l!=null)l.aF()
if(s.c!=null)s.t(new B.bpc(s,q))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$Jt,w)},
yh(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$yh=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.f!==D.pV){x=1
break}m=s.Q
if(m!=null)m.aF()
s.t(new B.bpe(s))
s.Q=A.kM(C.hq,new B.bpf(s))
l=new A.zU()
$.BJ()
l.mS()
r=l
u=4
m=s.d.a
x=7
return A.d(m.a0y(),$async$yh)
case 7:q=e
if(q.b<0.8){s.aOb("\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0642\u0635\u064a\u0631 \u0623\u0648\u064a \u2014 \u062f\u0648\u0633 \xab\u0633\u0645\u0651\u0639\xbb \u0648\u0627\u0642\u0631\u0627 \u0627\u0644\u0622\u064a\u0629 \u0643\u0644\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb.")
x=1
break}x=8
return A.d(m.ajt(q,B.BG(s.gyl()).length),$async$yh)
case 8:p=e
s.ch=A.d5(0,0,r.gX2(),0,0,0)
k=A.k6().gep().h(0,"debug")
if(k==="1"){o=B.bMX(m.E3())
A.to().$1("[tutor] "+s.a.c+":"+s.gi7()+" audio="+C.d.aA(q.b,1)+"s infer="+p.b+"ms total="+r.gz1()+"ms "+p.gLQ()+" text="+p.a)
A.to().$1("[tutor] stages: "+A.h(o))
s.ax="\u062a\u0633\u062c\u064a\u0644\u0643 "+C.d.aA(p.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(p.b/1000,2)+" \u062b\n"+p.gLQ()+"\n"+A.h(o)+"\n"+p.a}s.a5K(p.a)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.Y(i)
if(m instanceof B.kN){n=m
m=A.k6().gep().h(0,"debug")
if(m==="1")A.to().$1("[tutor] check failed: "+A.h(n)+"\n"+s.d.a.E3())
s.UC(B.J6(n),n)}else throw i
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$yh,w)},
UC(d,e){var x=this,w=x.Q
if(w!=null)w.aF()
if(x.c==null)return
x.t(new B.bp_(x,d,e))},
aOb(d){return this.UC(d,null)},
a5K(d){var x,w,v,u,t,s=this,r={},q=s.Q
if(q!=null)q.aF()
if(s.c==null)return
x=B.bL3(s.gyl(),d)
r.a=null
if(C.c.ar(x.c).length!==0){q=s.d
w=q.c
v=s.a.c
u=s.gi7()
t=x.gqs()
r.a=w.aiy(v,u,q.b.a,t)
q.wZ()}s.t(new B.bp1(r,s,x))},
HK(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$HK=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:g=s.d
if(g.f!==D.hP){x=1
break}s.t(new B.boT(s))
l=s.Q
if(l!=null)l.aF()
s.Q=A.kM(C.hq,new B.boU(s))
k=new A.zU()
$.BJ()
k.mS()
r=k
u=4
l=g.a
x=7
return A.d(l.b2j(B.arf(s.a.c,s.gi7()),B.BG(s.gyl()).length),$async$HK)
case 7:q=e
p=B.bMX(l.E3())
o="\u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a "+C.d.aA(q.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(q.b/1000,2)+" \u062b (\u0627\u0644\u0643\u0644 "+C.d.aA(r.gz1()/1000,2)+" \u062b)\n"+q.gLQ()+"\n"+A.h(p)+"\n"+q.a
A.to().$1("[tutor-debug] "+s.a.c+":"+s.gi7()+" audio="+C.d.aA(q.c,1)+"s infer="+q.b+"ms total="+r.gz1()+"ms "+q.gLQ()+" text="+q.a)
A.to().$1("[tutor-debug] stages: "+A.h(p))
s.ch=A.d5(0,0,r.gX2(),0,0,0)
s.a5K(q.a)
n=s.r
if(n!=null){l=n.gqs()
j=n.b
i=A.ad(j).i("aH<1>")
j=A.a_(new A.aH(j,new B.boV(),i),i.i("M.E"))
A.to().$1("[tutor-debug] perfect="+l+" ops="+A.h(j))}s.t(new B.boW(s,o))
u=2
x=6
break
case 4:u=3
f=t.pop()
l=A.Y(f)
if(l instanceof B.kN){m=l
A.to().$1("[tutor-debug] failed: "+A.h(m)+"\n"+g.a.E3())
s.UC(B.J6(m),m)}else throw f
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$HK,w)},
gTv(){var x,w,v
for(x=this.a.d,w=this.d;v=this.a,x<=v.e;++x){v=w.c.a.h(0,v.c*1000+x)
if((v==null?$.pV():v).a!==D.e0)return!1}return!0},
A(d){var x,w=this,v=null,u=w.d,t=u.c.YB(w.a.c,w.gi7()),s=u.b,r=s.d&&!w.x&&w.f!==D.ha,q=H.jB(w.a.c),p=y.p,o=A.a([A.cG(v,v,v,v,D.C_,v,v,new B.bpk(d),v,v,v,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",v)],p),n=w.awR(),m=A.j("\u0622\u064a\u0629 "+E.aZ(w.gi7()),v,v,v,v,v,C.jK,v,v,v),l=E.aZ(w.gi7()-w.a.d+1),k=w.a
s=A.a([A.ak(A.a([m,C.bD,A.j("("+l+" \u0645\u0646 "+E.aZ(k.e-k.d+1)+")",v,v,v,v,v,F.ak,v,v,v),C.d3,w.aI4(t,s.a)],p),C.j,C.f,C.h,0,v,v),C.T],p)
if(r)s.push(w.aDy())
else{m=w.r
if(m!=null){l=w.f
l=l!==D.pV&&l!==D.lR}else l=!1
if(l)s.push(w.av2(m))
else s.push(A.j(w.gyl()+" \ufd3f"+E.aZ(w.gi7())+"\ufd3e",v,v,v,v,v,D.ia,C.ad,C.aF,v))}s=A.a([new B.E8(u,!0,v),n,C.R,new E.cW(A.ae(s,C.ae,C.f,C.h),D.a8A,C.aA,v,!1,v)],p)
n=w.r
if(n!=null&&w.f===D.ha)s.push(w.aPu(n))
if(w.r!=null&&w.f===D.ha&&w.ch!=null){x=C.d.aq(C.e.b9(w.ch.a,1000)/100)
s.push(new A.a1(C.bA,A.j("\u0627\u062a\u0631\u0627\u062c\u0639 \u0641\u064a "+(E.aZ(C.e.b9(x,10))+"\u066b"+E.aZ(C.e.ah(x,10)))+" \u062b",v,v,v,v,v,F.ak,C.ad,v,v),v))}n=w.as
if(n!=null)s.push(new A.a1(C.aA,A.j(n,v,v,v,v,v,D.wA,v,v,v),v))
if(w.as!=null&&w.at!=null){n=w.at
n.toString
s.push(new B.Ar(n,"check "+w.a.c+":"+w.gi7(),v))}s.push(w.avt())
s.push(C.aq)
s.push(A.rB(C.p,C.G,v,new B.bpl(w),D.aUF,D.aWN,u.b.d))
n=w.a
if(n.e>n.d){n=w.gTv()
s.push(new E.cW(A.ak(A.a([D.acp,C.aU,A.aQ(A.ae(A.a([D.aXw,A.j(w.gTv()?"\u062d\u0641\u0638\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u0633\u0645\u0651\u0639\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636 \u0645\u0646 \u063a\u064a\u0631 \u0645\u0627 \u062a\u0634\u0648\u0641\u0647\u0627":"\u0644\u0645\u0627 \u062a\u062e\u0644\u0651\u0635 \u0627\u0644\u0622\u064a\u0627\u062a \u0648\u0627\u062d\u062f\u0629 \u0648\u0627\u062d\u062f\u0629\u060c \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0644\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636",v,v,v,v,v,F.ak,v,v,v)],p),C.y,C.f,C.h),1),P.kN],p),C.j,C.f,C.h,0,v,v),C.af,C.aA,new B.bpm(w,d),n,v))}n=A.k6().gep().h(0,"debug")
if(n==="1"){p=A.a([C.R,A.f8(D.ada,D.aWu,u.f===D.hP&&w.f!==D.lR?w.gaw1():v,v)],p)
n=w.ax
if(n!=null)p.push(new A.a1(C.iJ,A.Fs(n,F.ak,v,v),v))
n=u.x
if(n!=null){m=n.a
l=n.b
n=n.glH()
u=u.x
p.push(A.j("model: "+m+" "+l+" \u2014 "+n+", isolated "+u.r+", load "+u.c+" ms (warm-up "+u.w+" ms)",v,v,v,v,v,F.ak,v,v,v))}p.push(A.bR(D.aX8,v,v,v,new B.bpn(w,d),v,v))
C.b.E(s,p)}s.push(C.R)
s.push(D.xe)
return M.vT(o,s,q)},
awR(){var x=this.a,w=x.e-x.d+1
if(w===1)return C.aE
return A.bn(A.p4(new B.boY(this),w,null,C.az,new B.boZ()),36,null)},
aI4(d,e){var x,w,v,u,t,s,r,q=null
if(d.a===D.e0)return D.aJe
x=d.b
w=E.aZ(x)
v=E.aZ(e)
u=A.a([],y.p)
for(t=0;t<e;++t){s=t<x
r=s?C.dc:D.abX
u.push(new A.a1(D.a99,A.c6(r,s?G.c3:C.eW,q,16),q))}return A.abY(A.ak(u,C.j,C.f,C.X,0,q,q),q,"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637 \u0648\u0631\u0627 \u0628\u0639\u0636: "+w+" \u0645\u0646 "+v,q,q)},
aDy(){var x=null
return A.de(!1,A.a9(12),!0,A.au(x,D.a4P,C.m,x,x,new A.ap(L.qS,x,x,A.a9(12),x,x,C.r),x,x,x,D.a8g,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,x,new B.bp3(this),x,x,x,x,x,x,x)},
av2(d){var x,w,v,u,t,s=null,r=A.a([],y.R)
for(x=d.a,w=0;w<x.length;++w){v=J.b4(d.gGJ(),w)
A:{if(D.h4===v){u=D.ia.cB(G.c3)
break A}if(D.pH===v){u=D.ia.Wk(D.d_,C.fX,D.d_)
break A}if(D.pI===v){u=D.ia.Wk(D.dG,C.fX,D.dG)
break A}u=D.ia.Wk(C.eW,C.pi,C.c2)
break A}t=x[w]
r.push(new A.f1(t.a,s,s,C.be,s,s,s,s,s,s,u))
r.push(L.wt)}x=E.aZ(this.gi7())
r.push(A.dU(s,s,s,s,s,s,s,s,s,D.ia.cB(C.a6),"\ufd3f"+x+"\ufd3e"))
return A.QC(A.dU(r,s,s,s,s,s,s,s,s,s,s),s,C.ad,C.aF)},
aPu(d){var x,w,v,u,t,s,r=this.w
if(C.c.ar(d.c).length===0)return D.b5S
if(d.gqs()){x=r==null
if((x?null:r.a)===D.e0&&r.b===this.d.b.a)x="\u0627\u0644\u0622\u064a\u0629 \u062f\u064a \u0627\u062a\u062d\u0641\u0638\u062a! \u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0627\u0644\u0644\u064a \u0628\u0639\u062f\u0647\u0627."
else x=!x&&r.a!==D.e0?"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637. \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0645\u0627\u0646 "+E.aZ(this.d.b.a-r.b)+" \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629.":"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637."
return new B.AF(G.c3,C.dc,"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713",x,null)}x=d.gGJ()
w=J.d2(x)
v=w.hP(x,new B.bpg()).gL(0)
u=w.hP(x,new B.bph()).gL(0)
t=w.hP(x,new B.bpi()).gL(0)
x=A.a([],y.s)
if(u>0)x.push(E.aZ(u)+" \u063a\u0644\u0637")
if(v>0)x.push(E.aZ(v)+" \u0631\u0627\u062c\u0639\u0647\u0627")
if(t>0)x.push(E.aZ(t)+" \u0646\u0627\u0642\u0635\u0629")
if(d.gEk().length!==0)x.push(E.aZ(d.gEk().length)+" \u0632\u064a\u0627\u062f\u0629")
w=u+t>0?D.dG:D.d_
x=C.b.aK(x," \u2022 ")
s=d.gEk().length!==0?"\n\u0632\u064a\u0627\u062f\u0629: "+C.b.aK(d.gEk(),"\u060c "):""
return new B.AF(w,C.kK,"\u0642\u0631\u0628\u062a! \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0644\u0648\u0651\u0646\u0629",x+"\n\u0627\u0644\u0623\u0635\u0641\u0631: \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u062f\u064a \u2014 \u0627\u0644\u0623\u062d\u0645\u0631: \u063a\u0644\u0637 \u2014 \u0627\u0644\u0631\u0645\u0627\u062f\u064a \u0627\u0644\u0645\u0634\u0637\u0648\u0628: \u0646\u0633\u064a\u062a\u0647\u0627."+s,null)},
avt(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d,g=h.f===D.hP,f=j.f
switch(f.a){case 2:if(j.z==null)x=0
else{f=Date.now()
w=j.z
w.toString
x=C.e.b9(new A.b1(f,0,!1).dM(w).a,1e6)}v=C.e.b9(B.bBd(B.BG(j.gyl()).length).a,1e6)
f=j.gaN0()
w=96+26*j.y
u=D.dG.bo(0.25)
w=A.jd(i,A.bCS(C.U,A.au(i,D.adg,C.m,i,i,D.Zd,i,84,i,i,i,i,84),i,new A.ap(u,i,i,i,i,i,C.cn),C.zT,i,w,w),C.t,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,f,i,i,i,i,i,i)
u=A.j("\u0628\u0646\u0633\u062c\u0651\u0644\u2026 "+B.bAa(x)+" / "+B.bAa(v),i,i,i,i,i,K.lz,i,i,i)
return A.ae(A.a([w,C.R,u,A.j(h.b.c?"\u0644\u0645\u0627 \u062a\u062e\u0644\u0635 \u0627\u0633\u0643\u062a \u062b\u0627\u0646\u064a\u0629 \u0623\u0648 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb":"\u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb \u0644\u0645\u0627 \u062a\u062e\u0644\u0635",i,i,i,i,i,F.ak,i,i,i),A.bR(D.aZY,i,i,i,f,i,i)],y.p),C.j,C.f,C.h)
case 3:t=C.d.e6((Date.now()-j.ay)/1000)
if(t<8)h="\u062b\u0648\u0627\u0646\u064a \u0648\u0646\u0642\u0648\u0644\u0643"
else h=t<25?"\u0644\u0633\u0647 \u0634\u063a\u0627\u0644\u064a\u0646 \u2014 \u0627\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0628\u062a\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0643\u062a\u0631 ("+E.aZ(t)+" \u062b)":"\u0648\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0637\u0648\u0644 \u0645\u0646 \u0627\u0644\u0639\u0627\u062f\u064a \u2014 \u0644\u0648 \u0639\u0644\u0651\u0642 \u0647\u0646\u0639\u064a\u062f \u062a\u0634\u063a\u064a\u0644\u0647 \u0644\u0648\u062d\u062f\u0646\u0627 ("+E.aZ(t)+" \u062b)"
return new A.a1(D.a8c,A.ae(A.a([C.qF,C.aq,D.aW8,A.j(h,i,i,i,i,i,F.ak,C.ad,i,i)],y.p),C.j,C.f,C.h),i)
default:s=f===D.pU
r=j.r
f=r==null
w=!f
q=w&&r.gqs()
u=A.c6(s?C.kL:K.BF,i,i,i)
if(s)p="\u0648\u0642\u0651\u0641"
else p=w&&!q?"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u062d":"\u0627\u0633\u0645\u0639"
p=A.j(p,i,i,i,i,i,i,i,i,i)
o=A.jM(i,i,D.aLC,i,i,i,i)
u=A.aQ(new A.xT(C.Wo,!0,new B.boM(j,r,q),i,i,i,o,C.m,i,!1,i,!0,i,new A.Tq(p,u,o,i,i),i),1)
p=A.a([],y.n)
for(o=y.c,n=0;n<3;++n){m=D.CJ[n]
p.push(new A.et(m,i,A.j("\xd7"+E.aZ(m),i,i,i,i,i,i,i,i,i),o))}o=y.S
l=y.b
k=y.p
o=A.ak(A.a([u,C.as,A.vu(new B.boN(j),p,A.cT([h.b.b],o),!1,A.jD(i,i,i,new A.b3(new B.boO(),l),i,i,i,i,new A.b3(new B.boP(),l),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,C.dn),o)],k),C.j,C.f,C.h,0,i,i)
h=g&&!s?j.gaJx():i
u=A.c6(f?D.nb:C.kK,i,i,i)
if(g)f=f?"\u0633\u0645\u0651\u0639":"\u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a"
else f="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
f=A.j(f,i,i,i,i,i,C.cF,i,i,i)
p=q?N.hl:C.p
h=A.a([o,C.T,A.jL(u,f,h,A.jM(p,q?C.i:C.a5,D.p9,i,i,i,i))],k)
if(w&&j.gi7()<j.a.e)C.b.E(h,A.a([C.R,q?A.jL(D.aeY,D.aZe,new B.boQ(j),A.jM(G.c3,C.a5,D.p9,i,i,i,i)):A.bR(D.aUL,i,i,i,new B.boR(j),i,i)],k))
if(w){f=j.gi7()
w=j.a
u=w.e
f=f===u&&q&&u>w.d}else f=!1
if(f)h.push(new A.a1(C.mM,A.j(j.gTv()?"\u062e\u0644\u0651\u0635\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u062c\u0631\u0651\u0628 \xab\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636\xbb \u062a\u062d\u062a.":"\u062e\u0644\u0635\u062a \u0622\u062e\u0631 \u0622\u064a\u0629 \u2014 \u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0644\u0633\u0647 (\u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0635\u0641\u0631\u0627 \u0641\u0648\u0642).",i,i,i,i,i,K.ps,C.ad,i,i),i))
return A.ae(h,C.ae,C.f,C.h)}}}
B.AF.prototype={
A(d){var x=this,w=null,v=x.c,u=v.bo(0.12),t=A.a9(14),s=A.cR(v.bo(0.5),1),r=y.p
return A.au(w,A.ak(A.a([A.c6(x.d,v,w,w),C.as,A.aQ(A.ae(A.a([A.j(x.e,w,w,w,w,w,A.cu(w,w,v,w,w,w,w,w,w,w,w,15,w,w,C.a3,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),C.pb,A.j(x.f,w,w,w,w,w,D.V0,w,w,w)],r),C.y,C.f,C.h),1)],r),C.y,C.f,C.h,0,w,w),C.m,w,w,new A.ap(u,w,s,t,w,w,C.r),w,w,C.aA,C.aS,w,w,w)}}
B.Ap.prototype={
V(){var x=y.S
return new B.X5($.Jd(),A.x(x,y.B),A.aF(x),A.x(x,y.N),A.dL(null,y.H))}}
B.X5.prototype={
ab(){this.ap()
this.d.a5(this.gn5())},
vb(){if(this.c!=null)this.t(new B.bou())},
l(){var x,w=this,v=w.d
v.R(w.gn5())
x=w.y
if(x!=null)x.aF()
v.a.VL()
w.ao()},
Db(d){return this.aMQ(d)},
aMQ(d){var x=0,w=A.o(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m
var $async$Db=A.k(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.t(new B.boD(t,d))
r=t.y
if(r!=null)r.aF()
t.y=A.kM(C.fu,new B.boE(t))
v=3
r=t.d
q=t.a
p=q.f
q=q.c
q=B.bBd(B.BG(H.J3(q,d,p.vk(q,d)).b).length)
p=t.a
o=p.f
p=p.c
p=A.d5(0,0,0,350*B.BG(H.J3(p,d,o.vk(p,d)).b).length,0,0)
x=6
return A.d(r.a.a0v(r.b.c,q,p,new B.boF(t,d),new B.boG(t)),$async$Db)
case 6:v=1
x=5
break
case 3:v=2
m=u.pop()
r=A.Y(m)
if(r instanceof B.kN){s=r
r=t.y
if(r!=null)r.aF()
if(t.c!=null)t.t(new B.boH(t,s))}else throw m
x=5
break
case 2:x=1
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$Db,w)},
BG(d,e){return this.axX(d,e)},
axX(d,e){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$BG=A.k(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.e!==d){x=1
break}o=s.y
if(o!=null)o.aF()
s.t(new B.boy(s,d))
n=d<s.a.e?d+1:null
r=s.d.a.a0y()
if(e&&n!=null)s.Db(n)
q=null
u=4
x=7
return A.d(r,$async$BG)
case 7:q=g
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.Y(l)
if(o instanceof B.kN){p=o
s.t(new B.boz(s,d,p))}else throw l
x=6
break
case 3:x=2
break
case 6:if(q!=null){o=q
s.at=s.at.bM(new B.boA(s,o,d),y.H)}case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$BG,w)},
gaG1(){var x,w,v,u,t=this
for(x=t.a.d,w=t.f,v=t.r,u=t.w;x<=t.a.e;++x)if(!w.aw(x)&&!v.m(0,x)&&!u.aw(x)&&x!==t.e)return x
return null},
aKa(){this.t(new B.boB(this))},
A(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q.f===D.hP,o=s.e,n=s.gaG1(),m=s.f,l=m.a,k=s.w.a,j=s.a,i=l+k===j.e-j.d+1&&s.r.a===0&&o==null
l=A.w(m).i("c7<2>")
x=new A.aH(new A.c7(m,l),new B.boI(),l.i("aH<M.E>")).gL(0)
l=H.jB(s.a.c)
m=y.p
q=A.a([new B.E8(q,!0,r),A.j("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 "+E.aZ(s.a.d)+" \u0644\u062d\u062f "+E.aZ(s.a.e)+" \u0645\u0646 \u062d\u0641\u0638\u0643\u060c \u0622\u064a\u0629 \u0622\u064a\u0629: \u0628\u0639\u062f \u0643\u0644 \u0622\u064a\u0629 \u062f\u0648\u0633 \xab\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629\xbb \u0648\u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0637\u0648\u0644 \u2014 \u0647\u0646\u0635\u062d\u0651\u062d \u0648\u0625\u0646\u062a \u0628\u062a\u0642\u0631\u0627.",r,r,r,r,r,F.ak,r,r,r),C.T],m)
for(w=s.a.d;w<=s.a.e;++w)q.push(s.aOd(w))
q.push(C.R)
k=s.Q
if(k!=null)q.push(A.j(k,r,r,r,r,r,D.wA,r,r,r))
k=s.as
if(k!=null){j=s.a
q.push(new B.Ar(k,"review "+j.c+":"+j.d+"-"+j.e,r))}k=o==null
if(!k){j=E.aZ(o)
if(s.z==null)v=0
else{v=Date.now()
u=s.z
u.toString
u=C.e.b9(new A.b1(v,0,!1).dM(u).a,1e6)
v=u}v=A.j("\u0628\u0646\u0633\u062c\u0651\u0644 \u0622\u064a\u0629 "+j+"\u2026 "+B.bAa(v),r,r,r,r,r,K.lz,C.ad,r,r)
j=A.n0(A.a9(6),A.DK(C.dH,D.dG,6,s.x),C.bl)
u=o<s.a.e
t=A.c6(u?Q.By:C.kL,r,r,r)
C.b.E(q,A.a([v,C.Q,j,C.T,A.jL(t,A.j(u?"\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629":"\u062e\u0644\u0635\u062a",r,r,r,r,r,C.cF,r,r,r),new B.boJ(s,o),A.jM(C.p,C.a5,D.p9,r,r,r,r))],m))}else if(n!=null){j=p?new B.boK(s,n):r
if(!p)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
else v=n===s.a.d?"\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0633\u0645\u064a\u0639":"\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+E.aZ(n)
q.push(A.jL(D.adS,A.j(v,r,r,r,r,r,C.cF,r,r,r),j,A.jM(C.p,C.a5,D.p9,r,r,r,r)))}if(s.r.a!==0&&k)q.push(D.azW)
if(i){k=s.a
k=x===k.e-k.d+1
j=k?G.c3:D.d_
v=k?C.n7:C.kK
if(k)k="\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713 \u0633\u0645\u0651\u0639\u062a\u0647\u0645 \u0643\u0644\u0647\u0645 \u0635\u062d"
else{k=E.aZ(x)
u=s.a
u=k+" \u0645\u0646 "+E.aZ(u.e-u.d+1)+" \u0622\u064a\u0627\u062a \u0645\u0638\u0628\u0648\u0637\u0629"
k=u}u=s.a
u=x===u.e-u.d+1?"\u0631\u0628\u0646\u0627 \u064a\u062b\u0628\u0651\u062a\u0647\u0627 \u0641\u064a \u0642\u0644\u0628\u0643.":"\u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0641\u064a\u0647\u0627 \u0623\u0644\u0648\u0627\u0646 \u0648\u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a."
C.b.E(q,A.a([new B.AF(j,v,k,u,r),A.f8(D.aeT,D.aZA,s.gaK9(),r)],m))}q.push(C.T)
q.push(D.xe)
return M.vT(r,q,"\u0633\u0645\u0651\u0639 "+l)},
aOd(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.f.h(0,d),i=l.w.h(0,d)
if(l.e===d)x=D.ady
else if(l.r.m(0,d))x=O.pa
else if(i!=null)x=D.adH
else if(j!=null){w=j.gqs()?C.dc:D.abq
x=A.c6(w,j.gqs()?G.c3:D.d_,k,k)}else x=D.acS
w=y.p
v=A.a([A.ak(A.a([A.j("\u0622\u064a\u0629 "+E.aZ(d),k,k,k,k,k,D.aRB,k,k,k),C.d3,x],w),C.j,C.f,C.h,0,k,k)],w)
if(i!=null)v.push(A.j(i,k,k,k,k,k,D.UY,k,k,k))
if(j!=null&&!j.gqs()){u=y.R
t=A.a([],u)
for(s=j.a,r=0;r<s.length;++r){q=s[r]
p=j.gGJ()
o=J.bs(p)
n=o.h(p,r)
A:{if(D.h4===n){m=G.c3
break A}if(D.pH===n){m=D.d_
break A}if(D.pI===n){m=D.dG
break A}m=C.eW
break A}m=D.ia.aTp(m,o.h(p,r)===D.pJ?C.pi:k,22)
C.b.E(t,A.a([new A.f1(q.a,k,k,C.be,k,k,k,k,k,k,m),L.wt],u))}w=A.a([C.aQ,A.QC(A.dU(t,k,k,k,k,k,k,k,k,k,k),k,C.ad,C.aF)],w)
if(C.c.ar(j.c).length===0)w.push(D.aXd)
C.b.E(v,w)}return new E.cW(A.ae(v,C.ae,C.f,C.h),C.f0,C.ew,k,!1,k)}}
B.Ao.prototype={
V(){return new B.X4($.Jd())}}
B.X4.prototype={
ab(){this.ap()
var x=this.d
x.a5(this.gn5())
x.XX()},
vb(){if(this.c!=null)this.t(new B.bol())},
l(){this.d.R(this.gn5())
this.ao()},
A(d){var x,w,v,u,t,s=this,r=null,q=s.d.c,p=q.gamy(),o=A.a([],y.t)
for(x=78;x<=114;++x)o.push(x)
w=C.b.kc(o,0,new B.bos(q))
v=C.b.kc(o,0,new B.bot())
o=y.p
o=A.a([A.ak(A.a([A.aQ(s.Ql(E.aZ(q.gahH()),"\u0622\u064a\u0629 \u0645\u062d\u0641\u0648\u0638\u0629"),1),C.as,A.aQ(s.Ql(E.aZ(q.aev()),"\u064a\u0648\u0645 \u0648\u0631\u0627 \u0628\u0639\u0636"),1),C.as,A.aQ(s.Ql(E.aZ(q.e),"\u0623\u0637\u0648\u0644 \u0633\u0644\u0633\u0644\u0629"),1)],o),C.j,C.f,C.h,0,r,r),C.T,new E.cW(A.ae(A.a([A.j("\u062c\u0632\u0621 \u0639\u0645\u0651: "+E.aZ(C.d.aq(w*100/v))+"\u066a",r,r,r,r,r,F.aZ,r,r,r),C.Q,A.n0(A.a9(6),A.DK(C.dH,G.c3,8,w/v),C.bl),C.aQ,A.j(E.aZ(w)+" \u0645\u0646 "+E.aZ(v)+" \u0622\u064a\u0629",r,r,r,r,r,F.ak,r,r,r)],o),C.y,C.f,C.h),C.af,C.aA,r,!1,r)],o)
if(p.length===0)o.push(D.aA4)
for(u=p.length,t=0;t<p.length;p.length===u||(0,A.B)(p),++t)o.push(s.aOf(p[t]))
o.push(C.R)
u=$.ac().b
u===$&&A.b()
u=u.gc2().e.a
o.push(A.j((u==null?r:u.r)!=null?"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643 \u0648\u064a\u0638\u0647\u0631 \u0639\u0644\u0649 \u0623\u064a \u062c\u0647\u0627\u0632 \u062a\u062f\u062e\u0644 \u0645\u0646\u0647.":"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647. \u0633\u062c\u0651\u0644 \u062f\u062e\u0648\u0644 \u0639\u0634\u0627\u0646 \u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643.",r,r,r,r,r,F.ak,r,r,r))
return M.vT(r,o,"\u062a\u0642\u062f\u0651\u0645\u064a \u0641\u064a \u0627\u0644\u062d\u0641\u0638")},
Ql(d,e){var x=null
return new E.cW(A.ae(A.a([A.j(d,x,x,x,x,x,D.aRn,x,x,x),A.j(e,x,x,x,x,x,C.Vd,C.ad,x,x)],y.p),C.j,C.f,C.h),C.af,C.G,x,!1,x)},
aOf(d){var x=null,w=this.d.c,v=I.c6[d-1].a[1],u=w.Ys(d),t=w.aYn(d),s=y.p,r=A.ak(A.a([A.aQ(A.j(H.jB(d),x,x,x,x,x,F.aZ,x,x,x),1),A.j(E.aZ(C.d.aq(u*100/v))+"\u066a",x,x,x,x,x,D.aSd,x,x,x)],s),C.j,C.f,C.h,0,x,x),q=A.n0(A.a9(6),A.DK(C.dH,G.c3,7,u/v),C.bl),p=E.aZ(u),o=E.aZ(v),n=t>0?" \u2022 \u0628\u062a\u0631\u0627\u062c\u0639 "+E.aZ(t):""
return new E.cW(A.ae(A.a([r,C.Q,q,C.aQ,A.j("\u0645\u062d\u0641\u0648\u0638 "+p+" \u0645\u0646 "+o+n,x,x,x,x,x,F.ak,x,x,x)],s),C.y,C.f,C.h),C.af,C.aA,new B.bor(this,d),!1,x)},
HN(d){return this.awi(d)},
awi(d){var x=0,w=A.o(y.H),v=this,u,t
var $async$HN=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:u=I.c6[d-1].a[1]
t=v.c
t.toString
x=2
return A.d(A.fy(C.db,new B.boq(v,d,u),t,!0,null,null,!1,y.H),$async$HN)
case 2:return A.m(null,w)}})
return A.n($async$HN,w)}}
B.ac1.prototype={
Ko(d,e){var x=null,w=A.A5(x,x,x,x,x,x,x,x,x,x,x,D.aLo,C.G,x,x,x,x,C.la,x,x)
return A.bR(A.j(d,x,x,x,x,x,C.jJ,x,x,x),x,x,x,new B.aV8(e),x,w)},
A(d){var x=this,w=y.p
return new E.cW(A.ae(A.a([D.aZ4,C.Q,D.aZX,A.e6(A.a([x.Ko("tarteel-ai/whisper-base-ar-quran","https://huggingface.co/tarteel-ai/whisper-base-ar-quran"),x.Ko("iqbalaesthetic/Basira","https://huggingface.co/iqbalaesthetic/Basira")],w),C.b_,0,12),D.aUv,x.Ko("tanzil.net","https://tanzil.net"),D.b_L,x.Ko("everyayah.com","https://everyayah.com")],w),C.y,C.f,C.h),C.af,C.aA,null,!1,null)}}
B.Ar.prototype={
V(){return new B.X7()}}
B.X7.prototype={
ga94(){var x=this.a
return B.c8M(x.c,x.d,$.bBO().E3())},
Kq(){var x=0,w=A.o(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k
var $async$Kq=A.k(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.t(new B.bpo(s))
v=3
r=A.bvz()
n=s.ga94()
m=y.N
q=A.x(m,m)
J.fQ(q,"app","masjid")
J.fQ(q,"path","tutor \u203a "+s.a.d)
if(r!=null){m=r.length>160?C.c.Y(r,0,160):r
J.fQ(q,"ua",m)}x=6
return A.d(A.a2W(n,null,C.AF,q),$async$Kq)
case 6:if(s.c!=null)s.t(new B.bpp(s))
t.push(5)
x=4
break
case 3:v=2
k=u.pop()
p=A.Y(k)
o=p instanceof A.d1?p.a:"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0628\u0639\u062a \u2014 \u0627\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0646\u062a \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
if(s.c!=null)s.t(new B.bpq(s,o))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.t(new B.bpr(s))
x=t.pop()
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$Kq,w)},
A(d){var x,w,v,u=this,t=null,s=y.p
s=A.a([A.de(!1,t,!0,new A.a1(C.A4,A.ak(A.a([A.c6(u.d?C.tK:C.kH,C.c2,t,18),C.fU,D.b_l],s),C.j,C.f,C.h,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new B.bpt(u),t,t,t,t,t,t,t)],s)
if(u.d){x=A.a9(8)
s.push(A.au(t,A.Fs(u.ga94(),D.aOi,t,C.n),C.m,t,t,new A.ap(L.qS,t,t,x,t,t,C.r),t,t,D.a8l,C.ex,t,t,1/0))}if(u.f)s.push(D.aUC)
else{x=A.A5(t,t,t,t,t,t,t,t,t,t,t,C.TR,C.G,t,t,t,t,C.la,t,t)
w=u.e
v=w?t:u.gaOe()
s.push(A.hs(w?D.aLM:D.aeC,D.aYz,v,x))}x=u.r
if(x!=null)s.push(A.j(x,t,t,t,t,t,D.UY,t,t,t))
return new A.a1(C.aA,A.ae(s,C.y,C.f,C.h),t)}}
var z=a.updateTypes(["aa<~>()","~()","A(mD)","aa<Gn>()","aa<Gl>()","aa<Gm>()","O<mD>()","A(q5)","bm(nA)","Aq(z)","Ao(z)","A(m0)","Ap(z)","A(F3)"])
B.aXk.prototype={
$1(d){var x,w
if(d.m(0,C.A)){x=this.a
if(x.fy===D.jQ)x=null
else{x=x.gp9().k3
x=A.aC(31,x.v()>>>16&255,x.v()>>>8&255,x.v()&255)}return x}x=this.a
if(x.fy===D.jQ)x=null
else{x=x.gp9()
w=x.p3
x=w==null?x.k2:w}return x},
$S:24}
B.aV9.prototype={
$0(){var x=0,w=A.o(y.m),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$$0=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=A.ab(A.co(b.G.document).baseURI)
q=A.bV(r,0,null).W("quran_tutor/tutor.js?v=3").j(0)
x=7
return A.d(A.e1(import(q),y.m),$async$$0)
case 7:p=e
s.a.a=p
v=p
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.Y(l)
s.a.b=null
m=B.bZy("network",A.h(o))
throw A.p(m)
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:313}
B.aVc.prototype={
$1(d){var x=null
return A.brh(A.cf(d,"persist",x,x,x,x))},
$S:943}
B.aVb.prototype={
$0(){var x=0,w=A.o(y.C),v,u=this,t,s,r,q,p,o,n,m,l
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:q=u.a
n=A
m=A
l=A
x=4
return A.d(q.pk(),$async$$0)
case 4:x=3
return A.d(n.e1(m.co(l.cf(e,"loadModel",A.brO(new B.aVa(u.b)),u.c,u.d,null)),y.m),$async$$0)
case 3:p=e
o=A.U(p.device)
if(o==null)o=null
if(o==null)o=""
t=A.U(p.dtype)
if(t==null)t=null
if(t==null)t=""
s=q.pj(p,"ms")
r=q.mW(p,"cached")
A.U(p.backend)
v=new B.Gl(o,t,s,r,q.pj(p,"threads"),q.mW(p,"isolated"),q.pj(p,"warmMs"))
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+4}
B.aVa.prototype={
$2(d,e){this.a.$2(C.d.aq(d),C.d.aq(e))},
$S:944}
B.aVg.prototype={
$0(){var x=0,w=A.o(y.H),v=this,u,t,s
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:t=v.a
s=t.a
x=s==null?2:3
break
case 2:x=4
return A.d(t.pk(),$async$$0)
case 4:s=e
case 3:u={}
u.maxMs=C.e.b9(v.b.a,1000)
u.autoStop=v.c
u.minMs=C.e.b9(v.d.a,1000)
u.onLevel=A.f3(new B.aVe(v.e))
u.onAutoStop=A.f3(new B.aVf(v.f))
x=5
return A.d(A.e1(A.co(A.cf(s,"startRecording",u,null,null,null)),y.O),$async$$0)
case 5:return A.m(null,w)}})
return A.n($async$$0,w)},
$S:2}
B.aVe.prototype={
$1(d){return this.a.$1(d)},
$S:61}
B.aVf.prototype={
$1(d){return this.a.$1(d)},
$S:9}
B.aVh.prototype={
$0(){var x=0,w=A.o(y.D),v,u=this,t,s,r,q,p,o
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.a
q=A
p=A
o=A
x=s==null?4:6
break
case 4:x=7
return A.d(t.pk(),$async$$0)
case 7:x=5
break
case 6:e=s
case 5:x=3
return A.d(q.e1(p.co(o.cf(e,"stopRecording",null,null,null,null)),y.m),$async$$0)
case 3:r=e
v=new B.Gm(r,A.dk(r.seconds))
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+5}
B.aVj.prototype={
$0(){var x=0,w=A.o(y._),v,u=this,t,s,r,q,p,o
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:t=u.b.a
s=u.a
r=s
q=A
p=A
o=A
x=4
return A.d(s.pk(),$async$$0)
case 4:x=3
return A.d(q.e1(p.co(o.cf(e,"transcribe",t.audio,t.rate,s.a7Y(u.c),null)),y.m),$async$$0)
case 3:v=r.ab8(e)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+3}
B.aVi.prototype={
$0(){var x=0,w=A.o(y._),v,u=this,t,s,r,q,p
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:t=u.a
s=t
r=A
q=A
p=A
x=4
return A.d(t.pk(),$async$$0)
case 4:x=3
return A.d(r.e1(q.co(p.cf(e,"transcribeUrl",u.b,t.a7Y(u.c),null,null)),y.m),$async$$0)
case 3:v=s.ab8(e)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+3}
B.aVd.prototype={
$1(d){return d},
$S:29}
B.aMw.prototype={
$0(){var x,w,v,u,t=this.a,s=A.bM(t.a.length,D.pJ,!1,y.G)
for(t=t.b,x=t.length,w=0;w<x;++w){v=t[w]
u=v.a
if(u!=null)s[u]=v.d}return s},
$S:z+6}
B.aMv.prototype={
$1(d){return d===D.h4},
$S:z+2}
B.brJ.prototype={
$2(d,e){var x,w=e.length
if(d.length<w)return!1
for(x=0;x<w;++x)if(B.bwp(e[x],d[x])<0.75)return!1
return!0},
$S:945}
B.btc.prototype={
$1(d){return d.length!==0},
$S:12}
B.aVm.prototype={
$1(d){return d.a===D.e0},
$S:z+7}
B.aVn.prototype={
$1(d){return C.e.b9(d,1000)},
$S:62}
B.aVk.prototype={
$1(d){return C.d.bU(d)},
$S:946}
B.aVo.prototype={
$0(){var x=0,w=A.o(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$$0=A.k(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d(A.i9("mt.tutor.settings"),$async$$0)
case 7:r=a3
if(r!=null){k=y.P.a(C.a1.eV(r,null))
j=A.bl(k.h(0,"n"))
j=j==null?null:C.d.bU(j)
j=C.e.cA(j==null?2:j,1,5)
i=C.b.m(D.CJ,k.h(0,"r"))?A.er(k.h(0,"r")):1
h=A.hw(k.h(0,"auto"))
g=A.hw(k.h(0,"hide"))
k=A.hw(k.h(0,"in"))
s.a.b=new B.Rc(j,i,h!==!1,g===!0,k===!0)}u=2
x=6
break
case 4:u=3
e=t.pop()
x=6
break
case 3:x=2
break
case 6:u=9
x=12
return A.d(A.i9("mt.tutor.progress"),$async$$0)
case 12:q=a3
if(q!=null)s.a.c=B.bzt(y.P.a(C.a1.eV(q,null)))
u=2
x=11
break
case 9:u=8
d=t.pop()
x=11
break
case 8:x=2
break
case 11:u=14
x=17
return A.d(A.i9("mt.tutor.last"),$async$$0)
case 17:p=a3
if(p!=null){o=y.P.a(C.a1.eV(p,null))
n=C.d.bU(A.dp(J.b4(o,"s")))
m=C.d.bU(A.dp(J.b4(o,"f")))
l=C.d.bU(A.dp(J.b4(o,"t")))
if(B.bN1(n,m)&&B.bN1(n,l)&&m<=l)s.a.z=new A.bL(n,m,l)}u=2
x=16
break
case 14:u=13
a0=t.pop()
x=16
break
case 13:x=2
break
case 16:k=s.a
if(k.b.e&&k.a.a0j()){k.a.afi()
x=1
break}a1=k
x=18
return A.d(k.a.H4(),$async$$0)
case 18:a1.d=a3
k.e=!0
k.X()
if(k.b.e)k.zE()
k.us()
case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:99}
B.aVp.prototype={
$2(d,e){var x=this.a
x.r=d
x.w=e
x.X()},
$S:947}
B.aVq.prototype={
$2(d,e){return C.e.b9(A.ey(A.h(d),null,null),1000)===this.a},
$S:948}
B.bgU.prototype={
$1(d){var x=0,w=A.o(y.a),v=this,u,t
var $async$$1=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.d(u.d.a.AO(),$async$$1)
case 2:t=f
if(u.c!=null)u.t(new B.bgT(u,t))
return A.m(null,w)}})
return A.n($async$$1,w)},
$S:949}
B.bgT.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bgV.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bgS(x,d))},
$S:z+8}
B.bgS.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bgW.prototype={
$1(d){},
$S:22}
B.bgG.prototype={
$0(){},
$S:0}
B.bgM.prototype={
$1(d){var x=this.c,w=this.a.w
w.toString
return new B.Aq(this.b,x.a,x.b,w,null)},
$S:z+9}
B.bgN.prototype={
$0(){},
$S:0}
B.bgQ.prototype={
$0(){var x=y.z
return A.ao(this.a,!1).cU(A.cU(new B.bgP(),null,x),x)},
$S:0}
B.bgP.prototype={
$1(d){return D.b0r},
$S:z+10}
B.bgR.prototype={
$0(){return B.bMN(this.a)},
$S:0}
B.bgJ.prototype={
$0(){var x=this.b
return this.a.vc(x.a,x.b,x.c)},
$S:0}
B.bgK.prototype={
$1(d){return this.a.t(new B.bgI())},
$S:9}
B.bgI.prototype={
$0(){},
$S:0}
B.bgL.prototype={
$0(){var x=this.a
return x.t(new B.bgH(x))},
$S:0}
B.bgH.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.bgO.prototype={
$0(){return this.a.aOc(this.b)},
$S:0}
B.bvm.prototype={
$1(d){return new A.iW(new B.bvj(this.a,this.b,this.c),null)},
$S:53}
B.bvj.prototype={
$2(d,e){var x,w,v=null,u=this.b,t=new B.bvl(u,e),s=this.a,r=new B.bvk(s,e),q=A.j(H.jB(this.c),v,v,v,v,v,C.pm,v,v,v),p=A.j("\u0647\u062a\u0633\u0645\u0651\u0639 \u0623\u0646\u0647\u064a \u0622\u064a\u0627\u062a\u061f ("+E.aZ(u)+" \u0622\u064a\u0629)",v,v,v,v,v,F.ak,v,v,v),o=y.p,n=A.a([],o)
if(u<=30)n.push(r.$3("\u0627\u0644\u0633\u0648\u0631\u0629 \u0643\u0644\u0647\u0627",1,u))
x=u<5
w=E.aZ(x?u:5)
x=x?u:5
n.push(r.$3("\u0623\u0648\u0644 "+w+" \u0622\u064a\u0627\u062a",1,x))
x=s.a
if(x>1){x=E.aZ(x)
w=s.a
n.push(r.$3("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+x,w,C.e.cA(w+4,1,u)))}u=A.a([q,C.aQ,p,C.T,A.e6(n,C.b_,6,8),C.R,A.ak(A.a([t.$3("\u0645\u0646",s.b,new B.bve(s)),D.aLI,t.$3("\u0644\u062d\u062f",s.c,new B.bvf(s))],o),C.j,C.f,C.h,0,v,v)],o)
if(s.c-s.b>=10)u.push(D.azZ)
u.push(C.aJ)
u.push(A.jK(D.aVO,new B.bvg(s,d),A.jM(C.p,C.a5,D.aLz,v,v,v,v)))
return A.dG(!0,new A.a1(C.Aa,A.ae(u,C.ae,C.f,C.X),v),C.G,!0)},
$S:330}
B.bvl.prototype={
$3(d,e,f){var x,w,v,u=null,t=A.j(d,u,u,u,u,u,C.ic,u,u,u),s=A.a([],y.I)
for(x=this.a,w=y.r,v=1;v<=x;++v)s.push(new A.d_(v,A.j("\u0622\u064a\u0629 "+E.aZ(v),u,u,u,u,u,u,u,u,u),C.au,u,w))
return A.aQ(A.ae(A.a([t,S.CS(C.db,!0,s,320,new B.bvi(this.b,f),D.aSv,e,y.S)],y.p),C.y,C.f,C.h),1)},
$S:951}
B.bvi.prototype={
$1(d){return d==null?null:this.a.$1(new B.bvh(this.b,d))},
$S:52}
B.bvh.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bvk.prototype={
$3(d,e,f){var x=null
return new B.Za(A.j(d,x,x,x,x,x,x,x,x,x),new B.bvd(this.a,this.b,e,f),x)},
$S:952}
B.bvd.prototype={
$0(){var x=this
return x.b.$1(new B.bvc(x.a,x.c,x.d))},
$S:0}
B.bvc.prototype={
$0(){var x=this.a
x.b=this.b
x.c=this.c},
$S:0}
B.bve.prototype={
$1(d){var x=this.a
x.b=d
if(x.c<d)x.c=d},
$S:30}
B.bvf.prototype={
$1(d){var x=this.a
x.c=d
if(x.b>d)x.b=d},
$S:30}
B.bvg.prototype={
$0(){var x=this.a
return A.ao(this.b,!1).bk(new A.Q(x.b,x.c))},
$S:0}
B.boL.prototype={
$0(){},
$S:0}
B.bp0.prototype={
$0(){var x=this.a
x.e=this.b
x.f=D.jX
x.w=x.r=null
x.x=!1
x.ch=x.ax=x.as=null},
$S:0}
B.bp4.prototype={
$0(){var x=this.a
return x.f=x.r!=null?D.ha:D.jX},
$S:0}
B.bp5.prototype={
$0(){var x=this.a
x.f=D.pU
x.as=null},
$S:0}
B.bp6.prototype={
$0(){var x=this.a
x.f=this.b
if(!this.c&&x.as==null)x.as=null},
$S:0}
B.bp8.prototype={
$0(){var x=this.a
x.f=D.pV
x.as=null
x.y=0
x.z=new A.b1(Date.now(),0,!1)
x.ax=null},
$S:0}
B.bp9.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bp7())},
$S:35}
B.bp7.prototype={
$0(){},
$S:0}
B.bpb.prototype={
$1(d){return this.a.y=d},
$S:61}
B.bpa.prototype={
$1(d){return this.a.yh()},
$S:9}
B.bpc.prototype={
$0(){var x,w=this.a
w.f=w.r!=null?D.ha:D.jX
x=this.b
w.as=B.J6(x)
w.at=x},
$S:0}
B.bpe.prototype={
$0(){var x=this.a
x.f=D.lR
x.ay=Date.now()},
$S:0}
B.bpf.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bpd())},
$S:35}
B.bpd.prototype={
$0(){},
$S:0}
B.bp_.prototype={
$0(){var x=this.a
x.f=x.r!=null?D.ha:D.jX
x.as=this.b
x.at=this.c},
$S:0}
B.bp1.prototype={
$0(){var x=this.b
x.r=this.c
x.w=this.a.a
x.f=D.ha
x.x=!1},
$S:0}
B.boT.prototype={
$0(){var x=this.a
x.f=D.lR
x.ay=Date.now()
x.as=null},
$S:0}
B.boU.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.boS())},
$S:35}
B.boS.prototype={
$0(){},
$S:0}
B.boV.prototype={
$1(d){return d.d!==D.h4},
$S:z+11}
B.boW.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.bpk.prototype={
$0(){return B.bMN(this.a)},
$S:0}
B.bpl.prototype={
$1(d){var x=this.a.d
return x.oU(x.b.ae5(d))},
$S:5}
B.bpm.prototype={
$0(){var x=y.z
return A.ao(this.b,!1).cU(A.cU(new B.bpj(this.a),null,x),x)},
$S:0}
B.bpj.prototype={
$1(d){var x=this.a.a
return new B.Ap(x.c,x.d,x.e,x.f,null)},
$S:z+12}
B.bpn.prototype={
$0(){this.a.d.a.b1u()
this.b.U(y.q).f.be(D.aMd)},
$S:0}
B.boZ.prototype={
$2(d,e){return C.bD},
$S:48}
B.boY.prototype={
$2(d,e){var x,w,v,u=null,t=this.a,s=t.a,r=s.d+e
switch(t.d.c.YB(s.c,r).a.a){case 2:s=G.c3
break
case 1:s=D.d_
break
case 0:s=N.hl
break
default:s=u}x=A.a9(18)
w=t.f===D.lR?u:new B.boX(t,r)
v=s.bo(0.25)
if(r===t.gi7())s=C.i
s=A.cR(s,r===t.gi7()?2:1)
return A.de(!1,x,!0,A.au(C.U,A.j(E.aZ(r),u,u,u,u,u,D.aPw,u,u,u),C.m,u,u,new A.ap(v,u,s,u,u,u,C.cn),u,u,u,u,u,u,36),u,!0,u,u,u,u,u,u,u,u,u,u,u,w,u,u,u,u,u,u,u)},
$S:115}
B.boX.prototype={
$0(){return this.a.S9(this.b)},
$S:0}
B.bp3.prototype={
$0(){var x=this.a
return x.t(new B.bp2(x))},
$S:0}
B.bp2.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bpg.prototype={
$1(d){return d===D.pH},
$S:z+2}
B.bph.prototype={
$1(d){return d===D.pI},
$S:z+2}
B.bpi.prototype={
$1(d){return d===D.pJ},
$S:z+2}
B.boM.prototype={
$0(){var x=this.b!=null&&!this.c?1:null
return this.a.Kp(x)},
$S:0}
B.boN.prototype={
$1(d){var x=this.a.d
return x.oU(x.b.aSV(d.ga3(d)))},
$S:94}
B.boP.prototype={
$1(d){return d.m(0,C.F)?C.a5:C.i},
$S:4}
B.boO.prototype={
$1(d){return d.m(0,C.F)?C.p:C.J},
$S:4}
B.boQ.prototype={
$0(){var x=this.a
return x.S9(x.gi7()+1)},
$S:0}
B.boR.prototype={
$0(){var x=this.a
return x.S9(x.gi7()+1)},
$S:0}
B.bou.prototype={
$0(){},
$S:0}
B.boD.prototype={
$0(){var x=this.a
x.e=this.b
x.Q=null
x.x=0
x.z=new A.b1(Date.now(),0,!1)},
$S:0}
B.boE.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.boC())},
$S:35}
B.boC.prototype={
$0(){},
$S:0}
B.boG.prototype={
$1(d){return this.a.x=d},
$S:61}
B.boF.prototype={
$1(d){return this.a.BG(this.b,!1)},
$S:9}
B.boH.prototype={
$0(){var x,w=this.a
w.e=null
x=this.b
w.Q=B.J6(x)
w.as=x},
$S:0}
B.boy.prototype={
$0(){var x=this.a
x.e=null
x.r.D(0,this.b)},
$S:0}
B.boz.prototype={
$0(){var x,w=this.a,v=this.b
w.r.I(0,v)
x=this.c
w.w.n(0,v,B.J6(x))
w.as=x},
$S:0}
B.boA.prototype={
$1(d){var x=0,w=A.o(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.k(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
o=s.a
n=o.d
m=s.c
l=o.a
k=l.f
l=l.c
x=6
return A.d(n.a.ajt(s.b,B.BG(H.J3(l,m,k.vk(l,m)).b).length),$async$$1)
case 6:r=f
l=o.a
k=l.f
l=l.c
q=B.bL3(H.J3(l,m,k.vk(l,m)).b,r.a)
if(C.c.ar(q.c).length!==0){l=n.c
k=o.a.c
j=q.gqs()
l.aiy(k,m,n.b.a,j)}n.wZ()
if(o.c!=null)o.t(new B.bov(o,m,q))
t.push(5)
x=4
break
case 3:v=2
h=u.pop()
o=A.Y(h)
if(o instanceof B.kN){p=o
o=s.a
if(o.c!=null)o.t(new B.bow(o,s.c,p))}else throw h
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
o=s.a
if(o.c!=null)o.t(new B.box(o,s.c))
x=t.pop()
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$$1,w)},
$S:179}
B.bov.prototype={
$0(){var x=this.c
this.a.f.n(0,this.b,x)
return x},
$S:0}
B.bow.prototype={
$0(){var x=this.a,w=this.c
x.w.n(0,this.b,B.J6(w))
x.as=w},
$S:0}
B.box.prototype={
$0(){return this.a.r.I(0,this.b)},
$S:0}
B.boB.prototype={
$0(){var x=this.a
x.f.ad(0)
x.w.ad(0)
x.as=null},
$S:0}
B.boI.prototype={
$1(d){return d.gqs()},
$S:z+13}
B.boJ.prototype={
$0(){return this.a.BG(this.b,!0)},
$S:0}
B.boK.prototype={
$0(){return this.a.Db(this.b)},
$S:0}
B.bol.prototype={
$0(){},
$S:0}
B.bos.prototype={
$2(d,e){return d+this.a.Ys(e)},
$S:96}
B.bot.prototype={
$2(d,e){return d+I.c6[e-1].a[1]},
$S:96}
B.bor.prototype={
$0(){return this.a.HN(this.b)},
$S:0}
B.boq.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.b,o=A.j(H.jB(p),q,q,q,q,q,C.pm,q,q,q),n=y.p,m=A.a([],n)
for(x=this.c,w=this.a,v=w.d,u=p*1000,t=1;t<=x;++t){s=new A.b9(10,10)
r=v.c.a.h(0,u+t)
switch((r==null?$.pV():r).a.a){case 2:r=G.c3.bo(0.35)
break
case 1:r=D.d_.bo(0.35)
break
case 0:r=C.z_
break
default:r=q}m.push(A.au(C.U,A.j(E.aZ(t),q,q,q,q,q,K.UN,q,q,q),C.m,q,q,new A.ap(r,q,q,new A.cZ(s,s,s,s),q,q,C.r),q,38,q,q,q,q,38))}return A.dG(!0,new A.a1(C.iK,A.ae(A.a([o,C.aQ,D.aXE,C.T,new A.ea(D.Z4,A.hF(A.e6(m,C.b_,6,6),q,C.t,q,q,C.w),q),C.aq,A.bR(D.aYA,q,q,q,new B.bop(w,d,p),q,q)],n),C.ae,C.f,C.X),q),C.G,!0)},
$S:51}
B.bop.prototype={
$0(){var x=0,w=A.o(y.H),v=this,u,t
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:u=v.b
t=v.c
x=4
return A.d(A.eA(null,new B.boo(t),u,y.y),$async$$0)
case 4:x=e===!0?2:3
break
case 2:x=5
return A.d(v.a.d.FB(t),$async$$0)
case 5:if(u.e!=null)A.ao(u,!1).eo()
case 3:return A.m(null,w)}})
return A.n($async$$0,w)},
$S:2}
B.boo.prototype={
$1(d){var x=null,w=A.j("\u0647\u062a\u0628\u062f\u0623 "+H.jB(this.a)+" \u0645\u0646 \u0627\u0644\u0623\u0648\u0644.",x,x,x,x,x,x,x,x,x)
return A.eC(A.a([A.bR(C.wQ,x,x,x,new B.bom(d),x,x),A.bR(D.aZW,x,x,x,new B.bon(d),x,x)],y.p),w,D.aZr)},
$S:19}
B.bom.prototype={
$0(){A.ao(this.a,!1).bk(!1)
return null},
$S:0}
B.bon.prototype={
$0(){A.ao(this.a,!1).bk(!0)
return null},
$S:0}
B.bw4.prototype={
$1(d){var x=this.a
return new A.jR(new B.bw3(x),null,x,null)},
$S:953}
B.bw3.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.a,r=s.b,q=A.a([],y.n)
for(x=y.c,w=1;w<=5;++w)q.push(new A.et(w,t,A.j(E.aZ(w),t,t,t,t,t,t,t,t,t),x))
x=y.S
v=y.b
u=y.p
x=A.a([D.aUt,C.aq,D.aYP,C.Q,A.vu(new B.bvZ(s,r),q,A.cT([r.a],x),!1,A.jD(t,t,t,new A.b3(new B.bw_(),v),t,t,t,t,new A.b3(new B.bw0(),v),t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),x),C.R,A.rB(C.p,C.G,t,new B.bw1(s,r),D.aXh,D.b_t,r.c),A.rB(C.p,C.G,t,new B.bw2(s,r),t,D.aUe,r.d)],u)
s=s.x
if(s!=null)C.b.E(x,A.a([C.aQ,A.j("\u0627\u0644\u0645\u0639\u0627\u0644\u062c: "+s.glH(),t,t,t,t,t,F.ak,t,C.aF,t)],u))
x.push(C.R)
x.push(D.VH)
return A.dG(!0,A.hF(A.ae(x,C.ae,C.f,C.h),t,C.t,C.iK,t,C.w),C.G,!0)},
$S:954}
B.bvZ.prototype={
$1(d){return this.a.oU(this.b.aSS(d.ga3(d)))},
$S:94}
B.bw0.prototype={
$1(d){return d.m(0,C.F)?C.a5:C.i},
$S:4}
B.bw_.prototype={
$1(d){return d.m(0,C.F)?C.p:C.J},
$S:4}
B.bw1.prototype={
$1(d){return this.a.oU(this.b.aSl(d))},
$S:5}
B.bw2.prototype={
$1(d){return this.a.oU(this.b.ae5(d))},
$S:5}
B.aV8.prototype={
$0(){return A.ez(A.bV(this.a,0,null),C.bY,null)},
$S:0}
B.bwi.prototype={
$1(d){var x,w=A.aP("https?://",!0,!1)
w=A.bX(d,w,"")
x=A.aP("www\\.",!0,!1)
return A.BH(A.bX(w,x,"www[.]"),A.aP("([A-Za-z0-9-]+)\\.(com|net|org|io|xyz|ru|info|me|link)\\b",!1,!1),new B.bwj(),null)},
$S:29}
B.bwj.prototype={
$1(d){return A.h(d.h(0,1))+"[.]"+A.h(d.h(0,2))},
$S:59}
B.bpo.prototype={
$0(){var x=this.a
x.e=!0
x.r=null},
$S:0}
B.bpp.prototype={
$0(){return this.a.f=!0},
$S:0}
B.bpq.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bpr.prototype={
$0(){return this.a.e=!1},
$S:0}
B.bpt.prototype={
$0(){var x=this.a
return x.t(new B.bps(x))},
$S:0}
B.bps.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.bwh.prototype={
$1(d){return d==null?"\u2013":A.h(d)},
$S:150};(function installTearOffs(){var x=a._instance_0u
x(B.ac2.prototype,"gaYo","aYp",1)
var w
x(w=B.Rd.prototype,"gaYF","zE",0)
x(w,"garq","us",0)
x(w=B.V5.prototype,"gn5","vb",1)
x(w,"gaHr","Jc",0)
x(w=B.X6.prototype,"gn5","vb",1)
x(w,"gaJx","Jt",0)
x(w,"gaN0","yh",0)
x(w,"gaw1","HK",0)
x(w=B.X5.prototype,"gn5","vb",1)
x(w,"gaK9","aKa",1)
x(B.X4.prototype,"gn5","vb",1)
x(B.X7.prototype,"gaOe","Kq",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.AS,[B.b0S,B.mD,B.C0,B.E7,B.B9])
x(A.a2,[B.Za,B.E8,B.SU,B.AF,B.ac1])
w(B.aXj,A.xu)
x(A.hS,[B.aXk,B.aVc,B.aVe,B.aVf,B.aVd,B.aMv,B.btc,B.aVm,B.aVn,B.aVk,B.bgU,B.bgV,B.bgW,B.bgM,B.bgP,B.bgK,B.bvm,B.bvl,B.bvi,B.bvk,B.bve,B.bvf,B.bp9,B.bpb,B.bpa,B.bpf,B.boU,B.boV,B.bpl,B.bpj,B.bpg,B.bph,B.bpi,B.boN,B.boP,B.boO,B.boE,B.boG,B.boF,B.boA,B.boI,B.boq,B.boo,B.bw4,B.bvZ,B.bw0,B.bw_,B.bw1,B.bw2,B.bwi,B.bwj,B.bwh])
x(A.N,[B.ac2,B.Re,B.Gl,B.Gn,B.Gm,B.kN,B.Ox,B.m0,B.F3,B.q5,B.ac3,B.Rc])
x(A.kl,[B.aV9,B.aVb,B.aVg,B.aVh,B.aVj,B.aVi,B.aMw,B.aVo,B.bgT,B.bgS,B.bgG,B.bgN,B.bgQ,B.bgR,B.bgJ,B.bgI,B.bgL,B.bgH,B.bgO,B.bvh,B.bvd,B.bvc,B.bvg,B.boL,B.bp0,B.bp4,B.bp5,B.bp6,B.bp8,B.bp7,B.bpc,B.bpe,B.bpd,B.bp_,B.bp1,B.boT,B.boS,B.boW,B.bpk,B.bpm,B.bpn,B.boX,B.bp3,B.bp2,B.boM,B.boQ,B.boR,B.bou,B.boD,B.boC,B.boH,B.boy,B.boz,B.bov,B.bow,B.box,B.boB,B.boJ,B.boK,B.bol,B.bor,B.bop,B.bom,B.bon,B.aV8,B.bpo,B.bpp,B.bpq,B.bpr,B.bpt,B.bps])
x(A.n1,[B.aVa,B.brJ,B.aVp,B.aVq,B.bvj,B.boZ,B.boY,B.bos,B.bot,B.bw3])
w(B.Rd,A.hd)
x(A.P,[B.v8,B.Aq,B.Ap,B.Ao,B.Ar])
x(A.T,[B.V5,B.X6,B.X5,B.X4,B.X7])})()
A.oc(b.typeUniverse,JSON.parse('{"Za":{"a2":[],"e":[]},"kN":{"bo":[]},"Aq":{"P":[],"e":[]},"Ap":{"P":[],"e":[]},"Ao":{"P":[],"e":[]},"Ar":{"P":[],"e":[]},"Rd":{"as":[]},"v8":{"P":[],"e":[]},"V5":{"T":["v8"]},"E8":{"a2":[],"e":[]},"SU":{"a2":[],"e":[]},"X6":{"T":["Aq"]},"AF":{"a2":[],"e":[]},"X5":{"T":["Ap"]},"X4":{"T":["Ao"]},"ac1":{"a2":[],"e":[]},"X7":{"T":["Ar"]}}'))
var y=(function rtii(){var x=A.a3
return{u:x("q5"),c:x("et<u>"),r:x("d_<u>"),k:x("y<m0>"),n:x("y<et<u>>"),I:x("y<d_<u>>"),R:x("y<h_>"),Z:x("y<aA<f,@>>"),d:x("y<Ox>"),s:x("y<f>"),p:x("y<e>"),t:x("y<u>"),m:x("bi"),j:x("O<@>"),L:x("O<u>"),P:x("aA<f,@>"),f:x("aA<@,@>"),x:x("aj<f,u>"),a:x("bm"),K:x("N"),B:x("F3"),l:x("+(u,u)"),e:x("cz<m0>"),N:x("f"),C:x("Gl"),D:x("Gm"),X:x("Re"),_:x("Gn"),U:x("aH<f>"),G:x("mD"),q:x("o9"),b:x("b3<H?>"),y:x("A"),i:x("J"),z:x("@"),S:x("u"),A:x("bi?"),Y:x("aA<@,@>?"),O:x("N?"),M:x("+quota,usage(u,u)?"),o:x("db"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.lZ=new B.C0(0,"none")
D.m_=new B.C0(1,"learning")
D.e0=new B.C0(2,"memorized")
D.Z4=new A.at(0,1/0,0,320)
D.dG=new A.H(1,0.9725490196078431,0.44313725490196076,0.44313725490196076,C.k)
D.Zd=new A.ap(D.dG,null,null,null,null,null,C.cn)
D.d_=new A.H(1,0.984313725490196,0.7490196078431373,0.1411764705882353,C.k)
D.ae9=new A.a5(C.BE,null,C.c2,null,null,null)
D.aZu=new A.t("\u0627\u0644\u0646\u0635 \u0645\u062e\u0641\u064a \u2014 \u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.ek,null,null,null,null,null,null,null,null)
D.aOM=new A.r(!0,C.eW,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXF=new A.t("(\u062f\u0648\u0633 \u0647\u0646\u0627 \u0644\u0648 \u0639\u0627\u064a\u0632 \u062a\u0628\u0635)",null,D.aOM,null,null,null,null,null,null,null,null)
D.apZ=x([D.ae9,C.Q,D.aZu,D.aXF],y.p)
D.a4P=new A.j6(C.w,C.f,C.h,C.j,null,C.b2,null,0,D.apZ,null)
D.a8c=new A.Z(0,18,0,18)
D.a8g=new A.Z(0,26,0,26)
D.a8l=new A.Z(0,4,0,6)
D.a8A=new A.Z(14,12,14,14)
D.a99=new A.Z(3,0,0,0)
D.abq=new A.a4(63251,"MaterialIcons",null,!1)
D.nb=new A.a4(63677,"MaterialIcons",null,!1)
D.abX=new A.a4(983256,"MaterialIcons",null,!1)
D.abV=new A.a4(983209,"MaterialIcons",null,!1)
D.acp=new A.a5(D.abV,28,C.p,null,null,null)
D.acS=new A.a5(C.Bn,null,N.hl,null,null,null)
D.abg=new A.a4(62961,"MaterialIcons",null,!1)
D.ada=new A.a5(D.abg,null,null,null,null,null)
D.abo=new A.a4(63199,"MaterialIcons",null,!1)
D.adb=new A.a5(D.abo,null,null,null,null,null)
D.ade=new A.a5(C.hx,null,C.eW,null,null,null)
D.adg=new A.a5(C.kL,44,C.i,null,null,null)
D.ady=new A.a5(D.nb,null,D.dG,null,null,null)
D.adH=new A.a5(C.tJ,null,D.dG,null,null,null)
D.adR=new A.a5(C.Bj,null,null,null,null,null)
D.adS=new A.a5(D.nb,null,null,null,null,null)
D.C_=new A.a5(C.ng,null,null,null,null,null)
D.ae7=new A.a5(C.kI,20,D.d_,null,null,null)
D.aek=new A.a5(C.nd,30,C.p,null,null,null)
D.aeC=new A.a5(C.ne,16,C.p,null,null,null)
D.abD=new A.a4(63520,"MaterialIcons",null,!1)
D.aeO=new A.a5(D.abD,null,null,null,null,null)
D.aeT=new A.a5(C.kK,null,null,null,null,null)
D.aeY=new A.a5(C.B9,null,null,null,null,null)
D.CJ=x([1,3,5],y.t)
D.Dw=x(["\u0627\u0639\u0648\u0630","\u0628\u0627\u0644\u0644\u0647","\u0645\u0646","\u0627\u0644\u0634\u064a\u0637\u0627\u0646","\u0627\u0644\u0631\u062c\u064a\u0645"],y.s)
D.aAn=new A.a1(C.hs,T.qw,null)
D.anF=x([D.aAn],y.p)
D.aDH=new A.Q(C.iY,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0629 \u0628\u0635\u0648\u062a \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062d\u0635\u0631\u064a (\u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645) \u0645\u0631\u0629 \u0623\u0648 \u0663 \u0623\u0648 \u0665 \u0645\u0631\u0627\u062a.")
D.aDz=new A.Q(D.nb,"\u0633\u0645\u0651\u0639\u0647\u0627 \u0645\u0646 \u062d\u0641\u0638\u0643 \u2014 \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0644\u0648\u0651\u0646\u0644\u0643 \u0643\u0644 \u0643\u0644\u0645\u0629: \u0623\u062e\u0636\u0631 \u0635\u062d\u060c \u0623\u0635\u0641\u0631 \u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0623\u062d\u0645\u0631 \u063a\u0644\u0637.")
D.aDU=new A.Q(C.fw,"\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0645\u0627 \u062a\u0633\u0645\u0651\u0639\u0647\u0627 \u0635\u062d \u0645\u0631\u062a\u064a\u0646 \u0648\u0631\u0627 \u0628\u0639\u0636 (\u062a\u0642\u062f\u0631 \u062a\u063a\u064a\u0651\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a).")
D.abK=new A.a4(63625,"MaterialIcons",null,!1)
D.aE2=new A.Q(D.abK,"\u0643\u0644 \u062f\u0647 \u0628\u064a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u2014 \u0635\u0648\u062a\u0643 \u0645\u0634 \u0628\u064a\u062a\u0631\u0641\u0639 \u0639\u0644\u0649 \u0623\u064a \u0633\u064a\u0631\u0641\u0631.")
D.apd=x([D.aDH,D.aDz,D.aDU,D.aE2],A.a3("y<+(a4,f)>"))
D.ar0=x([D.lZ,D.m_,D.e0],A.a3("y<C0>"))
D.HZ=x(["\u0628\u0633\u0645","\u0627\u0644\u0644\u0647","\u0627\u0644\u0631\u062d\u0645\u0646","\u0627\u0644\u0631\u062d\u064a\u0645"],y.s)
D.axw=new B.E7(0,"idle")
D.O4=new B.E7(1,"loading")
D.hP=new B.E7(2,"ready")
D.axx=new B.E7(3,"failed")
D.adw=new A.a5(C.dc,18,G.c3,null,null,null)
D.b_7=new A.t("\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u062c\u0627\u0647\u0632 \u064a\u0633\u0645\u0639\u0643",null,K.ps,null,null,null,null,null,null,null,null)
D.amT=x([D.adw,C.bD,D.b_7],y.p)
D.aJh=new A.il(C.az,C.f,C.h,C.j,null,C.b2,null,0,D.amT,null)
D.azH=new A.a1(C.aA,D.aJh,null)
D.a96=new A.Z(2,6,2,4)
D.aOq=new A.r(!0,C.p,null,null,null,null,14,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUr=new A.t("\u0627\u0628\u062f\u0623 \u0645\u0646 \u0647\u0646\u0627 \u2014 \u0627\u0644\u0641\u0627\u062a\u062d\u0629 \u0648\u062c\u0632\u0621 \u0639\u0645\u0651",null,D.aOq,null,null,null,null,null,null,null,null)
D.azP=new A.a1(D.a96,D.aUr,null)
D.b_g=new A.t("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.ek,null,null,null,null,null,null,null,null)
D.anV=x([O.pa,C.as,D.b_g],y.p)
D.aJf=new A.il(C.az,C.c7,C.h,C.j,null,C.b2,null,0,D.anV,null)
D.azW=new A.a1(Q.rz,D.aJf,null)
D.wI=new A.r(!0,D.d_,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b_o=new A.t("\u0646\u0635\u064a\u062d\u0629: \u0627\u062d\u0641\u0638 \u0663\u2013\u0665 \u0622\u064a\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0631\u0629 \u0623\u0633\u0647\u0644.",null,D.wI,null,null,null,null,null,null,null,null)
D.azZ=new A.a1(C.fv,D.b_o,null)
D.b_3=new A.t("\u0644\u0633\u0647 \u0645\u0633\u0645\u0651\u0639\u062a\u0634 \u0623\u064a \u0622\u064a\u0629 \u2014 \u0627\u0628\u062f\u0623 \u0628\u0633\u0648\u0631\u0629 \u0642\u0635\u064a\u0631\u0629 \u0645\u0646 \u062c\u0632\u0621 \u0639\u0645\u0651.",null,F.ak,C.ad,null,null,null,null,null,null,null)
D.aA4=new A.a1(C.H,D.b_3,null)
D.a93=new A.Z(2,0,2,8)
D.aXN=new A.t("\u0627\u0644\u0633\u0648\u0631 \u0627\u0644\u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u060c \u0645\u0646 \u0627\u0644\u0646\u0627\u0633 \u0644\u062d\u062f \u0627\u0644\u0646\u0628\u0623.",null,F.ak,null,null,null,null,null,null,null,null)
D.aAh=new A.a1(D.a93,D.aXN,null)
D.aeI=new A.a5(C.hy,30,C.p,null,null,null)
D.aT2=new A.r(!0,C.i,null,null,null,null,17,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b_M=new A.t("\u0633\u0645\u0651\u0639\u060c \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0642\u0648\u0644\u0643 \u0635\u062d \u0648\u0644\u0627 \u063a\u0644\u0637",null,D.aT2,null,null,null,null,null,null,null,null)
D.a9K=new A.dD(1,C.aT,D.b_M,null)
D.ao7=x([D.aeI,C.aU,D.a9K],y.p)
D.aJ7=new A.il(C.az,C.f,C.h,C.j,null,C.b2,null,0,D.ao7,null)
D.aes=new A.a5(C.fw,18,G.c3,null,null,null)
D.UV=new A.r(!0,G.c3,null,null,null,null,12,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZP=new A.t("\u0645\u062d\u0641\u0648\u0638\u0629",null,D.UV,null,null,null,null,null,null,null,null)
D.ang=x([D.aes,C.fU,D.aZP],y.p)
D.aJe=new A.il(C.az,C.f,C.X,C.j,null,C.b2,null,0,D.ang,null)
D.aLo=new A.G(0,30)
D.p9=new A.G(1/0,54)
D.aLz=new A.G(1/0,48)
D.aLC=new A.G(1/0,50)
D.aLF=new A.G(1/0,52)
D.aLI=new A.cp(16,null,null,null)
D.aLM=new A.cp(14,14,O.yw,null)
D.aYH=new A.t("safe mode / no-gpu flags cleared (reload)",null,null,null,null,null,null,null,null,null,null)
D.aMd=new A.i3(D.aYH,null,null,null,null,null,null,null,null,null,null,null,null,C.C,!1,null,null,null,C.l,null)
D.aNS=new A.r(!0,C.i,null,null,null,null,14.5,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOi=new A.r(!0,C.a6,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.wA=new A.r(!0,D.dG,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPw=new A.r(!0,C.i,null,null,null,null,12,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ia=new A.r(!0,C.i,null,"AmiriQuranMT",null,null,27,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aR_=new A.r(!0,C.cq,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.UY=new A.r(!0,D.dG,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRn=new A.r(!0,C.p,null,null,null,null,24,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.V0=new A.r(!0,C.i,null,null,null,null,12.5,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRB=new A.r(!0,C.p,null,null,null,null,null,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSc=new A.r(!0,D.d_,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSd=new A.r(!0,G.c3,null,null,null,null,null,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSv=new A.r(!0,C.i,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTT=new A.t("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u062e\u0631 \u0645\u0631\u0629",null,C.ic,null,null,null,null,null,null,null,null)
D.aUe=new A.t("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643 (\u062e\u0628\u0651\u064a \u0627\u0644\u0646\u0635)",null,C.cU,null,null,null,null,null,null,null,null)
D.aUt=new A.t("\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,C.pm,null,null,null,null,null,null,null,null)
D.aUv=new A.t("\u2022 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641: \u0645\u0634\u0631\u0648\u0639 \u062a\u0646\u0632\u064a\u0644 Tanzil (\u062a\u0631\u062e\u064a\u0635 CC BY 3.0).",null,F.ak,null,null,null,null,null,null,null,null)
D.aPu=new A.r(!0,G.c3,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUC=new A.t("\u0648\u0635\u0644\u062a\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2014 \u0634\u0643\u0631\u064b\u0627\u060c \u0647\u0646\u0628\u0635 \u0639\u0644\u064a\u0647\u0627.",null,D.aPu,null,null,null,null,null,null,null,null)
D.aUF=new A.t("\u062e\u0628\u0651\u064a \u0646\u0635 \u0627\u0644\u0622\u064a\u0629 \u0648\u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,F.ak,null,null,null,null,null,null,null,null)
D.aUL=new A.t("\u0639\u062f\u0651\u064a \u0644\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.ek,null,null,null,null,null,null,null,null)
D.aVq=new A.t("\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0627\u0628\u062f\u0623",null,C.cF,null,null,null,null,null,null,null,null)
D.aVO=new A.t("\u064a\u0644\u0627 \u0646\u0628\u062f\u0623",null,C.cW,null,null,null,null,null,null,null,null)
D.aVS=new A.t("\u0645\u0645\u0643\u0646 \u062a\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 \u062f\u0644\u0648\u0642\u062a\u064a \u0644\u062d\u062f \u0645\u0627 \u064a\u062e\u0644\u0635.",null,F.ak,null,null,null,null,null,null,null,null)
D.aW8=new A.t("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.wJ,null,null,null,null,null,null,null,null)
D.aWu=new A.t("\u062c\u0631\u0651\u0628 \u0639\u0644\u0649 \u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a (\u0644\u0644\u062a\u062c\u0631\u0628\u0629)",null,null,null,null,null,null,null,null,null,null)
D.aWN=new A.t("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643",null,K.lz,null,null,null,null,null,null,null,null)
D.aX8=new A.t("reset safe mode / WebGPU ban",null,C.ww,null,null,null,null,null,null,null,null)
D.aXd=new A.t("\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629",null,D.wI,null,null,null,null,null,null,null,null)
D.aXh=new A.t("\u0628\u0639\u062f \u062d\u0648\u0627\u0644\u064a \u062b\u0627\u0646\u064a\u0629 \u0633\u0643\u0648\u062a",null,F.ak,null,null,null,null,null,null,null,null)
D.aXw=new A.t("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636",null,F.aZ,null,null,null,null,null,null,null,null)
D.aXE=new A.t("\u0623\u062e\u0636\u0631: \u0645\u062d\u0641\u0648\u0638\u0629 \u2014 \u0623\u0635\u0641\u0631: \u0628\u062a\u0631\u0627\u062c\u0639\u0647\u0627 \u2014 \u0631\u0645\u0627\u062f\u064a: \u0644\u0633\u0647",null,F.ak,null,null,null,null,null,null,null,null)
D.aXO=new A.t("\u0645\u0641\u064a\u0634 \u0633\u0648\u0631\u0629 \u0628\u0627\u0644\u0627\u0633\u0645 \u062f\u0647",null,F.ak,null,null,null,null,null,null,null,null)
D.aT4=new A.r(!0,C.p,null,null,null,null,12.5,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYz=new A.t("\u0627\u0628\u0639\u062a \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aT4,null,null,null,null,null,null,null,null)
D.aQK=new A.r(!0,D.dG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYA=new A.t("\u0627\u0628\u062f\u0623 \u0627\u0644\u0633\u0648\u0631\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644",null,D.aQK,null,null,null,null,null,null,null,null)
D.aYP=new A.t("\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f \u0643\u0627\u0645 \u062a\u0633\u0645\u064a\u0639 \u0635\u062d \u0648\u0631\u0627 \u0628\u0639\u0636\u061f",null,K.lz,null,null,null,null,null,null,null,null)
D.aNE=new A.r(!0,C.i,null,null,null,null,null,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZ4=new A.t("\u0627\u0644\u0645\u0635\u0627\u062f\u0631",null,D.aNE,null,null,null,null,null,null,null,null)
D.aZe=new A.t("\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.cF,null,null,null,null,null,null,null,null)
D.aZr=new A.t("\u062a\u0645\u0633\u062d \u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0633\u0648\u0631\u0629 \u062f\u064a\u061f",null,null,null,null,null,null,null,null,null,null)
D.aZA=new A.t("\u0633\u0645\u0651\u0639\u0647\u0645 \u062a\u0627\u0646\u064a",null,null,null,null,null,null,null,null,null,null)
D.aZW=new A.t("\u0627\u0645\u0633\u062d",null,null,null,null,null,null,null,null,null,null)
D.aZX=new A.t("\u2022 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: whisper-base-ar-quran \u0645\u0646 Tarteel (\u062a\u0631\u062e\u064a\u0635 Apache-2.0)\u060c \u0628\u0635\u064a\u063a\u0629 ONNX \u0645\u0646 \u0645\u0634\u0631\u0648\u0639 Basira\u060c \u0648\u0628\u064a\u0634\u062a\u063a\u0644 \u062c\u0648\u0651\u0647 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0628\u0645\u0643\u062a\u0628\u0629 Transformers.js.",null,F.ak,null,null,null,null,null,null,null,null)
D.aZY=new A.t("\u062e\u0644\u0635\u062a",null,C.jK,null,null,null,null,null,null,null,null)
D.aZZ=new A.t("\u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647 \u0630\u0627\u0643\u0631\u062a\u0647 \u0642\u0644\u064a\u0644\u0629 \u2014 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0645\u0643\u0646 \u064a\u0643\u0648\u0646 \u0628\u0637\u064a\u0621 \u0639\u0644\u064a\u0647.",null,D.wI,null,null,null,null,null,null,null,null)
D.aRD=new A.r(!0,C.cq,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,C.fX,null,null,null,null,null,null,null,null)
D.b_l=new A.t("\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aRD,null,null,null,null,null,null,null,null)
D.b_r=new A.t("\u0623\u0648\u0644 \u0645\u0631\u0629 \u0628\u0633: \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,F.aZ,null,null,null,null,null,null,null,null)
D.b_t=new A.t("\u0648\u0642\u0651\u0641 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0644\u0648\u062d\u062f\u0647 \u0644\u0645\u0627 \u0623\u0633\u0643\u062a",null,C.cU,null,null,null,null,null,null,null,null)
D.b_L=new A.t("\u2022 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: \u0627\u0644\u0634\u064a\u062e \u0645\u062d\u0645\u0648\u062f \u062e\u0644\u064a\u0644 \u0627\u0644\u062d\u0635\u0631\u064a \u2014 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645\u060c \u0645\u0646 everyayah.com.",null,F.ak,null,null,null,null,null,null,null,null)
D.VH=new B.ac1(null)
D.b0r=new B.Ao(null)
D.b0s=new B.Rc(2,1,!0,!1,!1)
D.VI=new B.Re(!1,!1,!1,!1,!1,0)
D.h4=new B.mD(0,"ok")
D.pH=new B.mD(1,"near")
D.pI=new B.mD(2,"wrong")
D.pJ=new B.mD(3,"missing")
D.W6=new B.mD(4,"extra")
D.abz=new A.a4(63456,"MaterialIcons",null,!1)
D.b5S=new B.AF(D.d_,D.abz,"\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629","\u0642\u0631\u0651\u0628 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0646\u0643 \u0648\u0627\u0642\u0631\u0627 \u0628\u0635\u0648\u062a \u0648\u0627\u0636\u062d \u0641\u064a \u0645\u0643\u0627\u0646 \u0647\u0627\u062f\u064a\u060c \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a.",null)
D.jQ=new B.b0S(0,"flat")
D.b6c=new B.SU(!1,null)
D.xe=new B.SU(!0,null)
D.jX=new B.B9(0,"idle")
D.pU=new B.B9(1,"playing")
D.pV=new B.B9(2,"recording")
D.lR=new B.B9(3,"thinking")
D.ha=new B.B9(4,"result")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cbL","bBO",()=>new B.ac2())
x($,"ceW","bQy",()=>A.aP("\u0640[\u064b-\u0652]*\u0670",!0,!1))
x($,"ceX","bQz",()=>A.aP("\u0640[\u064b-\u0652]*[\u06e6\u06e7]",!0,!1))
x($,"cf7","bQH",()=>A.aP("\u0648\u0670",!0,!1))
x($,"cev","bQf",()=>A.aP("[\u0648\u064a\u0649][\u064b-\u0652]*[\u0654]",!0,!1))
x($,"cd0","bPh",()=>A.aP("\u0627[\u0654\u0655]",!0,!1))
x($,"ce7","bPZ",()=>A.aP("[\u0654\u0655]",!0,!1))
x($,"cd1","bPi",()=>A.aP("[\u0622\u0623\u0625\u0671\u0672\u0673]",!0,!1))
x($,"cd7","bPn",()=>A.aP("[\u0624\u0626]",!0,!1))
x($,"ce9","bQ0",()=>A.aP("[\u064b-\u065f\u0670\u06d6-\u06ed\u08d3-\u08ff\u0640]",!0,!1))
x($,"ceA","bQi",()=>A.aP("[\u06dd\u06de\u0660-\u0669\u06f0-\u06f90-9]",!0,!1))
x($,"ceg","bQ6",()=>A.aP("[^\u0621-\u064a\\s]",!0,!1))
x($,"ceV","bCo",()=>A.aP("\\s+",!0,!1))
x($,"c94","pV",()=>B.bRC(D.lZ,0,A.bxA(0,!0)))
x($,"cbM","Jd",()=>new B.Rd($.bBO(),D.b0s,B.bZz(),D.axw,$.a8()))})()};
(a=>{a["1Xh2YfsCffk8ueYB/8Ytm+SjkMg="]=a.current})($__dart_deferred_initializers__);