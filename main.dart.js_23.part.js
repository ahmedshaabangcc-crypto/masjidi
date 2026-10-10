((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,P,L,K,M,Q,N,G,I,B={aWH:function aWH(d,e){this.a=d
this.b=e},WK:function WK(d,e,f){this.d=d
this.r=e
this.a=f},aSU:function aSU(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4){var _=this
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
_.dy=a4},aSV:function aSV(d){this.a=d},
bQ0(d){var x,w,v,u,t,s
if(d instanceof B.kj)return d
try{x=A.cv(d)
w=x.code
v=x.message
u=w==null?"failed":A.a5(w)
t=v==null?"":A.a5(v)
return new B.kj(u,t)}catch(s){u=A.i(d)
return new B.kj("failed",u)}},
a9a:function a9a(){this.b=this.a=null},
aQO:function aQO(d){this.a=d},
aQR:function aQR(){},
aQQ:function aQQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aQP:function aQP(d){this.a=d},
aQV:function aQV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aQT:function aQT(d){this.a=d},
aQU:function aQU(d){this.a=d},
aQW:function aQW(d){this.a=d},
aQY:function aQY(d,e,f){this.a=d
this.b=e
this.c=f},
aQX:function aQX(d,e,f){this.a=d
this.b=e
this.c=f},
aQS:function aQS(){},
bQ1(d,e){return new B.kj(d,e)},
P6:function P6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.w=i},
EB:function EB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i
_.w=j},
ED:function ED(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
EC:function EC(d,e){this.a=d
this.b=e},
kj:function kj(d,e){this.a=d
this.b=e},
bD_(d){var x,w=$.bHj()
w=A.c7(d,w,"\u0627")
x=$.bHk()
w=A.c7(w,x,"\u064a")
x=$.bHs()
w=A.c7(w,x,"\u0627")
x=$.bG3()
w=A.c7(w,x,"\u0627")
x=$.bH0()
w=A.c7(w,x,"\u0621")
x=$.bGK()
w=A.c7(w,x,"\u0621")
x=$.bG4()
w=A.c7(w,x,"\u0627")
x=$.bG9()
w=A.c7(w,x,"\u0621")
w=A.c7(w,"\u0649","\u064a")
w=A.c7(w,"\u0629","\u0647")
x=$.bGM()
w=A.c7(w,x,"")
x=$.bH3()
w=A.c7(w,x," ")
x=$.bGS()
w=A.c7(w,x," ")
x=$.btL()
return C.c.aw(A.c7(w,x," "))},
bUq(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.length,k=e.length
if(l===0)return k
if(k===0)return l
x=k+1
w=y.S
v=J.kY(x,w)
for(u=0;u<x;++u)v[u]=u
t=A.c_(x,0,!1,w)
for(s=1;s<=l;++s,r=t,t=v,v=r){t[0]=s
for(w=s-1,u=1;u<=k;++u){q=u-1
p=d.charCodeAt(w)===e.charCodeAt(q)?0:1
o=v[u]+1
n=t[q]+1
m=v[q]+p
if(o<n)q=o<m?o:m
else q=n<m?n:m
t[u]=q}}return v[k]},
boh(d,e){var x,w,v,u,t,s
if(d===e)return 1
x=A.b3("[\u0627\u0621]",!0,!1)
w=A.c7(d,x,"")
x=A.b3("[\u0627\u0621]",!0,!1)
v=A.c7(e,x,"")
if(w.length!==0&&w===v)return 1
u=d.length
t=e.length
u=u>t?u:t
if(u===0)return 1
s=1-B.bUq(d,e)/u
return s>=1?0.99:s},
Al(d){var x,w,v,u,t,s,r,q=A.a([],y.d)
for(x=C.c.tD(d,$.btL()),w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.length===0)continue
t=B.bD_(u)
s=A.c7(t," ","")
if(s.length===0){if(q.length!==0){r=q.pop()
q.push(new B.Mp(r.a+" "+u,r.b))}continue}q.push(new B.Mp(u,s))}return q},
bTe(d,e){var x,w,v,u,t=new B.bkn(),s=A.a([],y.s)
for(x=A.fh(e,0,A.ih(5,"count",y.S),A.af(e).c),w=x.$ti,x=new A.bQ(x,x.gK(0),w.i("bQ<aK.E>")),w=w.i("aK.E");x.u();){v=x.d
s.push((v==null?w.a(v):v).b)}u=!t.$2(s,D.BF)&&t.$2(d,D.BF)?C.b.iH(d,5):d
return!t.$2(s,D.G3)&&t.$2(u,D.G3)?C.b.iH(u,4):u},
bC6(d,e){var x=B.Al(d),w=B.bD_(e),v=y.U
v=A.a_(new A.aO(A.a(w.split(" "),y.s),new B.blI(),v),v.i("L.E"))
return new B.Do(x,B.bSs(x,B.bTe(v,x)),w)},
bSs(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=A.a([],y.s)
for(x=a5.length,w=0;w<a5.length;a5.length===x||(0,A.B)(a5),++w)a4.push(a5[w].b)
v=a4.length
u=a6.length
t=u+1
x=(v+1)*t
s=y.i
r=A.c_(x,0,!1,s)
q=A.c_(x,0,!1,y.S)
p=A.c_(v*(u===0?1:u),0,!1,s)
for(o=0;o<v;++o)for(x=o*u,n=0;n<u;++n)p[x+n]=B.boh(a4[o],a6[n])
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
e=2}if(n>=2&&r[h-2]<g&&B.boh(a4[m],a6[n-2]+a6[n-1])>=1){g=r[h-2]
e=3}if(s&&r[i+n-1]<g&&B.boh(a4[j]+a4[m],a6[n-1])>=1){g=r[i+n-1]
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
if(a2>=1)m=D.fK
else m=a2>=0.6?D.oP:D.oQ
a1.push(new B.lD(o,x,s,m))
break
case 1:--o
a1.push(new B.lD(o,a4[o],null,D.oR))
break
case 2:--n
a1.push(new B.lD(null,null,a6[n],D.Ua))
break
case 3:--o
a3=n-2
a1.push(new B.lD(o,a4[o],a6[a3]+" "+a6[n-1],D.fK))
n=a3
break
default:x=o-1;--n
a1.push(new B.lD(x,a4[x],a6[n],D.fK))
o-=2
a1.push(new B.lD(o,a4[o],a6[n],D.fK))}}a4=y.e
a4=A.a_(new A.cM(a1,a4),a4.i("aK.E"))
return a4},
md:function md(d,e){this.a=d
this.b=e},
Mp:function Mp(d,e){this.a=d
this.b=e},
lD:function lD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Do:function Do(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
aIk:function aIk(d){this.a=d},
aIj:function aIj(){},
bkn:function bkn(){},
blI:function blI(){},
bIi(d,e,f){return new B.pv(d,e,f)},
bVd(d){var x
A:{if("memorized"===d){x=D.dM
break A}if("learning"===d){x=D.lm
break A}x=D.ll
break A}return x},
bDR(d,e){return d>=1&&d<=114&&e>=1&&e<=H.cp[d-1].a[1]},
bQ2(){var x=y.S
return new B.a9b(A.x(x,y.u),A.aJ(x))},
aR_(d){var x=d.kP()
return C.c.dr(C.e.j(A.cC(x)),4,"0")+"-"+C.c.dr(C.e.j(A.cb(x)),2,"0")+"-"+C.c.dr(C.e.j(A.ct(x)),2,"0")},
bzq(d){var x=y.x,w=A.a_(new A.ai(A.a(d.split("-"),y.s),A.bWm(),x),x.i("aK.E"))
return B.aR_(A.jk(w[0],w[1],w[2]-1,12,0,0,0))},
br6(d){var x,w,v,u,t,s,r,q,p=y.S,o=A.x(p,y.u),n=A.aJ(p),m=new B.a9b(o,n),l=d.h(0,"rows")
if(y.f.b(l))for(x=l.gdL(),x=x.ga4(x),w=y.j;x.u();){v=x.gL()
u=A.fR(A.i(v.a),null)
t=v.b
v=!0
if(u!=null)if(w.b(t))if(J.bk(t)>=3){v=C.e.b9(u,1000)
s=C.e.ae(u,1000)
v=!(v>=1&&v<=114&&s>=1&&s<=H.cp[v-1].a[1])}if(v)continue
v=J.bo(t)
r=C.d.c1(A.dT(v.h(t,0)))
if(r<0||r>=3)continue
o.m(0,u,new B.pv(D.an2[r],C.d.c1(A.dT(v.h(t,1))),new A.bw(A.lM(C.d.c1(A.dT(v.h(t,2))),0,!0),0,!0)))}q=d.h(0,"dirty")
if(y.j.b(q)){x=J.boS(q,y.o)
p=A.n_(x,new B.aQZ(),x.$ti.i("L.E"),p)
n.E(0,new A.aO(p,o.gUz(),A.w(p).i("aO<L.E>")))}m.c=A.X(d.h(0,"last"))
p=A.bY(d.h(0,"streak"))
p=p==null?null:C.d.c1(p)
p=m.d=p==null?0:p
o=A.bY(d.h(0,"best"))
o=o==null?null:C.d.c1(o)
m.e=o==null?p:o
return m},
ao_(d,e){return"https://everyayah.com/data/Husary_Muallim_128kbps/"+C.c.dr(C.e.j(d),3,"0")+C.c.dr(C.e.j(e),3,"0")+".mp3"},
AC:function AC(d,e){this.a=d
this.b=e},
pv:function pv(d,e,f){this.a=d
this.b=e
this.c=f},
a9b:function a9b(d,e){var _=this
_.a=d
_.b=e
_.c=null
_.e=_.d=0},
aR0:function aR0(){},
aR1:function aR1(){},
aQZ:function aQZ(){},
P4:function P4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bNF(){return new B.ul(null)},
bYC(d,e){var x,w,v,u,t={},s=H.cp[e-1].a[1],r=$.Ha().c
t.a=1
x=r.a
w=e*1000
v=1
for(;;){if(v<=s){v=x.h(0,w+v)
v=(v==null?$.pj():v).a===D.dM}else v=!1
if(!v)break
v=++t.a}x=t.a
if(x>s){t.a=1
u=1}else u=x
x=s<=10
if(x)u=1
t.b=u
t.c=x?s:C.e.cC(u+4,1,s)
return A.hi(K.dQ,new B.bnp(t,s,e),d,!0,null,!1,y.l)},
bsK(d){return A.d_(0,0,0,0,0,C.e.cC(C.d.aC(6+d*1.2),25,90))},
brP(d){return E.bd(C.e.b9(d,60))+":"+C.c.dr(E.bd(C.e.ae(d,60)),2,"\u0660")},
bDF(d){return A.hi(K.dQ,new B.bo_($.Ha()),d,!0,null,!1,y.H)},
Cy:function Cy(d,e){this.a=d
this.b=e},
P5:function P5(d,e,f,g,h){var _=this
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
_.R$=_.O$=0},
aR2:function aR2(d){this.a=d},
aR3:function aR3(d){this.a=d},
aR4:function aR4(d){this.a=d},
ul:function ul(d){this.a=d},
SL:function SL(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.w=_.r=null},
bac:function bac(d){this.a=d},
bab:function bab(d,e){this.a=d
this.b=e},
bad:function bad(d){this.a=d},
baa:function baa(d,e){this.a=d
this.b=e},
bae:function bae(){},
b9Z:function b9Z(){},
ba4:function ba4(d,e,f){this.a=d
this.b=e
this.c=f},
ba5:function ba5(){},
ba8:function ba8(d){this.a=d},
ba7:function ba7(){},
ba9:function ba9(d){this.a=d},
ba1:function ba1(d,e){this.a=d
this.b=e},
ba2:function ba2(d){this.a=d},
ba0:function ba0(){},
ba3:function ba3(d){this.a=d},
ba_:function ba_(d){this.a=d},
ba6:function ba6(d,e){this.a=d
this.b=e},
Cz:function Cz(d,e,f){this.c=d
this.d=e
this.a=f},
QF:function QF(d,e){this.c=d
this.a=e},
bnp:function bnp(d,e,f){this.a=d
this.b=e
this.c=f},
bnm:function bnm(d,e,f){this.a=d
this.b=e
this.c=f},
bno:function bno(d,e){this.a=d
this.b=e},
bnl:function bnl(d,e){this.a=d
this.b=e},
bnk:function bnk(d,e){this.a=d
this.b=e},
bnn:function bnn(d,e){this.a=d
this.b=e},
bng:function bng(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bnf:function bnf(d,e,f){this.a=d
this.b=e
this.c=f},
bnh:function bnh(d){this.a=d},
bni:function bni(d){this.a=d},
bnj:function bnj(d,e){this.a=d
this.b=e},
zS:function zS(d,e){this.a=d
this.b=e},
zd:function zd(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
UF:function UF(d,e){var _=this
_.d=d
_.e=$
_.f=e
_.w=_.r=null
_.x=!1
_.y=0
_.at=_.as=_.Q=_.z=null
_.ax=0
_.c=_.a=_.ay=null},
bhw:function bhw(){},
bhM:function bhM(d,e){this.a=d
this.b=e},
bhQ:function bhQ(d){this.a=d},
bhR:function bhR(d){this.a=d},
bhS:function bhS(d,e,f){this.a=d
this.b=e
this.c=f},
bhU:function bhU(d){this.a=d},
bhV:function bhV(d){this.a=d},
bhT:function bhT(){},
bhX:function bhX(d){this.a=d},
bhW:function bhW(d){this.a=d},
bhY:function bhY(d,e){this.a=d
this.b=e},
bi_:function bi_(d){this.a=d},
bi0:function bi0(d){this.a=d},
bhZ:function bhZ(){},
bhL:function bhL(d,e){this.a=d
this.b=e},
bhN:function bhN(d,e,f){this.a=d
this.b=e
this.c=f},
bhE:function bhE(d){this.a=d},
bhF:function bhF(d){this.a=d},
bhD:function bhD(){},
bhG:function bhG(){},
bhH:function bhH(d,e){this.a=d
this.b=e},
bi5:function bi5(d){this.a=d},
bi6:function bi6(d){this.a=d},
bi7:function bi7(d,e){this.a=d
this.b=e},
bi4:function bi4(d){this.a=d},
bhK:function bhK(){},
bhJ:function bhJ(d){this.a=d},
bhI:function bhI(d,e){this.a=d
this.b=e},
bhP:function bhP(d){this.a=d},
bhO:function bhO(d){this.a=d},
bi1:function bi1(){},
bi2:function bi2(){},
bi3:function bi3(){},
bhx:function bhx(d,e,f){this.a=d
this.b=e
this.c=f},
bhy:function bhy(d){this.a=d},
bhA:function bhA(){},
bhz:function bhz(){},
bhB:function bhB(d){this.a=d},
bhC:function bhC(d){this.a=d},
zp:function zp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
zc:function zc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
UE:function UE(d,e,f,g,h){var _=this
_.d=d
_.e=null
_.f=e
_.r=f
_.w=g
_.x=0
_.Q=_.z=_.y=null
_.as=h
_.c=_.a=null},
bhf:function bhf(){},
bho:function bho(d,e){this.a=d
this.b=e},
bhp:function bhp(d){this.a=d},
bhn:function bhn(){},
bhr:function bhr(d){this.a=d},
bhq:function bhq(d,e){this.a=d
this.b=e},
bhs:function bhs(d,e){this.a=d
this.b=e},
bhj:function bhj(d,e){this.a=d
this.b=e},
bhk:function bhk(d,e,f){this.a=d
this.b=e
this.c=f},
bhl:function bhl(d,e,f){this.a=d
this.b=e
this.c=f},
bhg:function bhg(d,e,f){this.a=d
this.b=e
this.c=f},
bhh:function bhh(d,e,f){this.a=d
this.b=e
this.c=f},
bhi:function bhi(d,e){this.a=d
this.b=e},
bhm:function bhm(d){this.a=d},
bht:function bht(){},
bhu:function bhu(d,e){this.a=d
this.b=e},
bhv:function bhv(d,e){this.a=d
this.b=e},
zb:function zb(d){this.a=d},
UD:function UD(d){this.d=d
this.c=this.a=null},
bh6:function bh6(){},
bhd:function bhd(d){this.a=d},
bhe:function bhe(){},
bhc:function bhc(d,e){this.a=d
this.b=e},
bhb:function bhb(d,e,f){this.a=d
this.b=e
this.c=f},
bha:function bha(d,e,f){this.a=d
this.b=e
this.c=f},
bh9:function bh9(d){this.a=d},
bh7:function bh7(d){this.a=d},
bh8:function bh8(d){this.a=d},
bo_:function bo_(d){this.a=d},
bnZ:function bnZ(d){this.a=d},
bnU:function bnU(d,e){this.a=d
this.b=e},
bnW:function bnW(){},
bnV:function bnV(){},
bnX:function bnX(d,e){this.a=d
this.b=e},
bnY:function bnY(d,e){this.a=d
this.b=e},
a99:function a99(d){this.a=d},
aQN:function aQN(d){this.a=d}},D,H,E,F,O
J=c[1]
A=c[0]
C=c[2]
P=c[16]
L=c[24]
K=c[19]
M=c[23]
Q=c[9]
N=c[18]
G=c[11]
I=c[29]
B=a.updateHolder(c[8],B)
D=c[30]
H=c[27]
E=c[12]
F=c[14]
O=c[15]
B.aWH.prototype={
M(){return"_ChipVariant."+this.b}}
B.WK.prototype={
D(d){var x=null
A.S(d)
return A.aGS(!1,x,C.f8,x,x,x,x,C.m,x,new B.aSU(d,!0,D.jo,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,C.o0,x,x,x,x,x,x,x,x),x,x,x,x,x,x,x,x,!0,this.d,x,x,x,x,x,this.r,x,x,x,!1,x,x,x,x,x,x,x,!0,x,x)}}
B.aSU.prototype={
goA(){var x,w=this,v=w.go
if(v===$){x=A.S(w.fr)
w.go!==$&&A.aA()
v=w.go=x.ax}return v},
gdG(){if(this.fy===D.jo)var x=0
else x=this.fx?1:0
return x},
gvG(){return 1},
gfJ(){var x,w=this,v=w.id
if(v===$){x=A.S(w.fr)
w.id!==$&&A.aA()
v=w.id=x.ok}x=v.as
if(x==null)x=null
else x=x.co(w.fx?w.goA().k3:w.goA().k3)
return x},
gcz(){return new A.ba(new B.aSV(this),y.b)},
gc2(){if(this.fy===D.jo)var x=C.O
else{x=this.goA().x1
if(x==null)x=C.x}return x},
gcf(){return C.O},
gr5(){return null},
guP(){return null},
ge7(){var x,w,v=this
if(v.fy===D.jo)if(v.fx){x=v.goA()
w=x.to
if(w==null){w=x.p
x=w==null?x.k3:w}else x=w
x=new A.b7(x,1,C.A,-1)}else{x=v.goA().k3
x=new A.b7(A.aE(31,x.B()>>>16&255,x.B()>>>8&255,x.B()&255),1,C.A,-1)}else x=C.pv
return x},
ghd(){var x=null
return new A.dz(18,x,x,x,x,this.fx?this.goA().b:this.goA().k3,x,x,x)},
gcB(){return C.eJ},
grN(){var x=this.gfJ(),w=x==null?null:x.r
if(w==null)w=14
x=A.bU(this.fr,C.bi)
x=x==null?null:x.gd1()
x=A.o4(C.il,C.df,A.A((x==null?C.aS:x).b3(w)/14-1,0,1))
x.toString
return x}}
B.a9a.prototype={
oL(){var x=this,w=x.a
if(w!=null)return A.dO(w,y.m)
w=x.b
return w==null?x.b=new B.aQO(x).$0():w},
qx(d,e){return this.awg(d,e,e)},
awg(d,e,f){var x=0,w=A.n(f),v,u=2,t=[],s,r,q,p
var $async$qx=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d(d.$0(),$async$qx)
case 7:r=h
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.Z(p)
r=B.bQ0(s)
throw A.o(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$qx,w)},
mv(d,e){var x=A.hP(d[e])
if(x==null)x=null
return x===!0},
Ge(){var x=0,w=A.n(y.X),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ge=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
h=A
g=A
x=7
return A.d(s.oL(),$async$Ge)
case 7:r=h.cv(g.d9(e,"support",null,null,null,null))
q=s.mv(r,"worker")
p=s.mv(r,"wasm")
o=s.mv(r,"mic")
n=s.mv(r,"audio")
s.mv(r,"webgpu")
m=s.mv(r,"secure")
s.mv(r,"ios")
l=A.nL(r.memory)
if(l==null)l=null
if(l==null)l=0
s.mv(r,"isolated")
k=A.nL(r.cores)
if(k!=null)C.d.aC(k)
v=new B.P6(q,p,o,n,m,l)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=D.TM
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ge,w)},
A6(){var x=0,w=A.n(y.M),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$A6=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=A
l=A
k=A
x=8
return A.d(s.oL(),$async$A6)
case 8:x=7
return A.d(m.eb(l.cv(k.d9(e,"storage",null,null,null,null)),y.A),$async$A6)
case 7:r=e
if(r==null){v=null
x=1
break}q=C.d.aC(A.d4(r.quota))
p=C.d.aC(A.d4(r.usage))
v=new A.ai9(q,p)
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
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$A6,w)},
aWF(){var x=y.K
A.JX(this.oL().bE(new B.aQR(),x),x)},
oK(d,e){var x=A.nL(d[e])
x=x==null?null:C.d.aC(x)
return x==null?0:x},
aUe(d,e,f){return this.qx(new B.aQQ(this,d,e,f),y.C)},
ga7x(){var x,w
try{x=A.pc(b.G.sessionStorage)
return x}catch(w){return null}},
gae6(){var x=A.hP(b.G.mogtama3yTutorIsolated)
if(x==null)x=null
return x===!0},
ZC(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
try{m=b.G
l=A.hP(m.crossOriginIsolated)
if(l==null)l=f
if(l===!0)return!1
if(this.gae6())return!1
l=A.hP(m.isSecureContext)
if(l==null)l=f
if(l!==!0)return!1
x=A.cv(m.navigator)
if(!("serviceWorker" in x))return!1
w=A.a5(x.userAgent)
l=A.nL(x.maxTouchPoints)
k=l==null?f:l
v=k==null?0:k
l=A.X(x.platform)
j=l==null?f:l
u=j==null?"":j
l=A.b3("iPad|iPhone|iPod",!0,!1)
if(!l.b.test(w))i=J.c(u,"MacIntel")&&v>1
else i=!0
t=i
l=A.b3("Chrome/|Chromium/|Firefox/|Edg/",!0,!1)
s=l.b.test(w)
if(t||!s)return!1
l=A.nL(x.hardwareConcurrency)
h=l==null?f:l
r=h==null?0:h
if(r>0&&r<3)return!1
q=Date.now()
l=this.ga7x()
l=l==null?f:A.X(A.d9(l,"getItem","mt.tutor.iso",f,f,f))
if(l==null)l=f
p=A.fR(l==null?"":l,f)
if(p!=null&&q-p<3e4)return!1
o=A.pc(m.localStorage)
m=o
m=m==null?f:A.X(A.d9(m,"getItem","mt.tutor.noiso",f,f,f))
if(m==null)m=f
n=A.fR(m==null?"":m,f)
if(n!=null&&q-n<2592e5)return!1
return!0}catch(g){return!1}},
acM(){var x,w,v,u,t,s,r=null
try{x=this.ga7x()
if(x!=null)A.d9(x,"setItem","mt.tutor.iso",""+Date.now(),r,r)}catch(w){}x=b.G
v=A.cv(x.location)
u=A.a5(v.hash)
t=A.a5(v.search)
s=A.c0(A.a5(A.cv(x.document).baseURI),0,r).W("tutor/").j(0)
x=u.length===0?"#/masjid/tools/tutor":u
A.d9(v,"replace",s+t+x,r,r,r)},
aTZ(){var x,w=null,v=b.G,u=A.cv(v.history),t=A.nL(u.length),s=t==null?w:t
if((s==null?0:s)>1)A.d9(u,"back",w,w,w,w)
else{x=A.a5(A.cv(v.document).baseURI)
A.d9(A.cv(v.location),"replace",A.c0(x,0,w).W("./").j(0)+"#/",w,w,w)}},
ZM(d,e,f,g,h){return this.qx(new B.aQV(this,e,d,f,h,g),y.H)},
ZP(){return this.qx(new B.aQW(this),y.D)},
Uc(){var x=null,w=this.a
if(w!=null)A.d9(w,"cancelRecording",x,x,x,x)},
a8K(d){var x,w,v=this,u=A.X(d.text)
if(u==null)u=null
if(u==null)u=""
x=v.oK(d,"ms")
w=A.nL(d.seconds)
if(w==null)w=null
if(w==null)w=0
return new B.ED(u,x,w,v.oK(d,"frames"),v.oK(d,"tokens"),v.mv(d,"retried"),v.oK(d,"encMs"),v.oK(d,"decMs"),v.oK(d,"featMs"))},
a5L(d){var x={}
x.words=d
return x},
agY(d,e){return this.qx(new B.aQY(this,d,e),y._)},
aYI(d,e){return this.qx(new B.aQX(this,d,e),y._)},
Ew(d,e){return this.aWI(d,e)},
aWI(d,e){var x=0,w=A.n(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Ew=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=p==null?7:9
break
case 7:x=10
return A.d(s.oL(),$async$Ew)
case 10:x=8
break
case 9:g=p
case 8:r=g
o=A.af(d).i("ai<1,h>")
o=A.a_(new A.ai(d,new B.aQS(),o),o.i("aK.E"))
x=11
return A.d(A.eb(A.cv(A.d9(r,"play",o,e,null,null)),y.y),$async$Ew)
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
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ew,w)},
FV(){var x=null,w=this.a
if(w!=null)A.d9(w,"stopPlayback",x,x,x,x)},
Xu(d){var x=this.a
if(x!=null)A.d9(x,"prefetch",d,null,null,null)}}
B.P6.prototype={}
B.EB.prototype={
gli(){var x=this.f,w=x>0?"CPU \xd7"+x:""
x=this.a
if(x==="webgpu")return"WebGPU"
if(C.c.n(x,"webgpu"))return"WebGPU + "+w
return w.length===0?x:w}}
B.ED.prototype={
gKF(){var x=this,w=C.d.ap(x.d/100,0),v=x.f?" (retried on 30 s)":""
return"window "+w+" s, "+x.e+" tokens"+v+", mel "+x.x+" ms, encoder "+x.r+" ms, decoder "+x.w+" ms"}}
B.EC.prototype={}
B.kj.prototype={
ghe(){var x,w=this.a
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
$ibh:1}
B.md.prototype={
M(){return"WordStatus."+this.b}}
B.Mp.prototype={}
B.lD.prototype={
j(d){var x,w=this.b
if(w==null)w=""
x=this.c
if(x==null)x=""
return this.d.b+":"+w+"->"+x}}
B.Do.prototype={
gFU(){var x,w=this,v=w.d
if(v===$){x=new B.aIk(w).$0()
w.d!==$&&A.aA()
w.d=x
v=x}return v},
gDv(){var x,w,v,u,t,s=A.a([],y.s)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.d===D.Ua&&u.c!=null){t=u.c
t.toString
s.push(t)}}return s},
gaV2(){return J.po(this.gFU(),new B.aIj()).gK(0)},
gpO(){var x=this.a
return x.length!==0&&this.gaV2()===x.length&&this.gDv().length===0}}
B.AC.prototype={
M(){return"AyahStatus."+this.b}}
B.pv.prototype={}
B.a9b.prototype={
X4(d,e){var x=this.a.h(0,d*1000+e)
return x==null?$.pj():x},
aFg(d){var x=this,w=B.aR_(d),v=x.c
if(v===w)return
v=v!=null&&v===B.bzq(w)?x.d+1:1
x.d=v
if(v>x.e)x.e=v
x.c=w},
abZ(){var x=Date.now(),w=B.aR_(new A.bw(x,0,!1))
x=this.c
return x===w||x===B.bzq(w)?this.d:0},
ag6(d,e,f,g){var x=this,w=new A.bw(Date.now(),0,!1),v=x.X4(d,e),u=g?C.e.cC(v.b+1,0,100):0,t=g&&u>=f?D.dM:D.lm,s=new B.pv(t,u,w.j3()),r=d*1000+e
x.a.m(0,r,s)
x.b.C(0,r)
x.aFg(w)
return s},
WW(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=H.cp[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pj():s).a===D.dM)++u}return u},
aTX(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=H.cp[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pj():s).a===D.lm)++u}return u},
gafc(){var x=this.a,w=A.w(x).i("c3<2>")
return new A.aO(new A.c3(x,w),new B.aR0(),w.i("aO<L.E>")).gK(0)},
gak2(){var x=this.a,w=A.w(x).i("bc<1>")
w=A.n_(new A.bc(x,w),new B.aR1(),w.i("L.E"),y.S)
w=A.em(w,A.w(w).i("L.E"))
x=A.a_(w,A.w(w).c)
C.b.ly(x)
return x},
d2(){var x,w,v,u,t,s=this,r=y.N,q=A.x(r,y.L)
for(x=s.a,x=new A.dP(x,A.w(x).i("dP<1,2>")).ga4(0),w=y.t;x.u();){v=x.d
u=v.a
t=v.b
q.m(0,""+u,A.a([t.a.a,t.b,t.c.a],w))}x=s.b
x=A.a_(x,A.w(x).c)
return A.M(["v",1,"rows",q,"dirty",x,"last",s.c,"streak",s.d,"best",s.e],r,y.z)},
aQ2(){var x,w,v,u,t,s,r,q,p,o=A.a([],y.Y)
for(x=this.b,x=A.bqV(x,300,A.w(x).c),x=new A.El(J.aN(x.a),x.b,A.w(x).i("El<1>")),w=y.N,v=y.z,u=this.a;x.u();){t=x.gL()
s=C.e.b9(t,1000)
t=C.e.ae(t,1000)
r=s*1000+t
q=u.h(0,r)
q=(q==null?$.pj():q).a===D.dM?"memorized":"learning"
p=u.h(0,r)
if(p==null)p=$.pj()
r=u.h(0,r)
o.push(A.M(["surah",s,"ayah",t,"status",q,"perfect_count",p.b,"updated_at",(r==null?$.pj():r).c.kO()],w,v))}return o},
aUw(d){var x,w,v,u,t,s,r
for(x=d.length,w=this.a,v=this.b,u=0;u<d.length;d.length===x||(0,A.B)(d),++u){t=d[u]
s=A.er(t.h(0,"surah"))*1000+A.er(t.h(0,"ayah"))
r=w.h(0,C.e.b9(s,1000)*1000+C.e.ae(s,1000))
if((r==null?$.pj():r).c.kO()===t.h(0,"updated_at"))v.I(0,s)}},
aUE(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(x=J.aN(d),w=this.b,v=this.a,u=y.f,t=!1;x.u();){s=x.gL()
if(!u.b(s))continue
r=A.bY(s.h(0,"surah"))
q=r==null?null:C.d.c1(r)
r=A.bY(s.h(0,"ayah"))
p=r==null?null:C.d.c1(r)
o=A.hW(A.i(s.h(0,"updated_at")))
r=!0
if(q!=null)if(p!=null)if(o!=null)r=!(q>=1&&q<=114&&p>=1&&p<=H.cp[q-1].a[1])
if(r)continue
n=B.bVd(s.h(0,"status"))
if(n===D.ll)continue
r=q*1000+p
m=v.h(0,r)
if(m!=null){l=m.c
k=o.a
j=l.a
if(k<=j)l=k===j&&o.b>l.b
else l=!0
l=!l}else l=!1
if(l)continue
l=A.bY(s.h(0,"perfect_count"))
l=l==null?null:C.d.c1(l)
v.m(0,r,new B.pv(n,C.e.cC(l==null?0:l,0,100),o.j3()))
w.I(0,r)
t=!0}return t}}
B.P4.prototype={
D5(d,e,f,g,h){var x=this,w=g==null?x.a:g,v=h==null?x.b:h,u=d==null?x.c:d,t=e==null?x.d:e
return new B.P4(w,v,u,t,f==null?x.e:f)},
aOB(d){var x=null
return this.D5(x,x,d,x,x)},
abA(d){var x=null
return this.D5(x,d,x,x,x)},
aOF(d){var x=null
return this.D5(x,x,x,x,d)},
aO6(d){var x=null
return this.D5(d,x,x,x,x)},
aOC(d){var x=null
return this.D5(x,x,x,d,x)},
d2(){var x=this
return A.M(["n",x.a,"r",x.b,"auto",x.c,"hide",x.d,"in",x.e],y.N,y.z)}}
B.Cy.prototype={
M(){return"ModelState."+this.b}}
B.P5.prototype={
Wp(){var x=this.Q
return x==null?this.Q=new B.aR2(this).$0():x},
oq(d){return this.aiC(d)},
aiC(d){var x=0,w=A.n(y.H),v=this
var $async$oq=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v.b=d
v.a9()
x=2
return A.d(A.lw("mt.tutor.settings",C.ab.js(d.d2(),null)),$async$oq)
case 2:return A.l(null,w)}})
return A.m($async$oq,w)},
wf(){var x=0,w=A.n(y.H),v=this,u
var $async$wf=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a9()
x=2
return A.d(A.lw("mt.tutor.progress",C.ab.js(v.c.d2(),null)),$async$wf)
case 2:u=v.as
if(u!=null)u.aI()
v.as=A.cO(C.G,v.gaoP())
return A.l(null,w)}})
return A.m($async$wf,w)},
FF(d,e,f){return this.ajf(d,e,f)},
ajf(d,e,f){var x=0,w=A.n(y.H),v=this
var $async$FF=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:v.z=new A.bq(d,e,f)
x=2
return A.d(A.lw("mt.tutor.last",C.ab.js(A.M(["s",d,"f",e,"t",f],y.N,y.S),null)),$async$FF)
case 2:return A.l(null,w)}})
return A.m($async$FF,w)},
z_(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$z_=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=s.f
if(n===D.M5||n===D.hv){x=1
break}s.f=D.M5
s.y=null
s.a9()
u=4
n=A.kk().geG().h(0,"tutor_device")
if(n==null)n="auto"
p=A.kk().geG().h(0,"tutor_threads")
p=A.fR(p==null?"":p,null)
if(p==null)p=0
x=7
return A.d(s.a.aUe(new B.aR3(s),n,p),$async$z_)
case 7:s.x=e
s.f=D.hv
n=A.kk().geG().h(0,"debug")
if(n==="1"){n=s.x
n.toString
r=n
A.H0().$1("[tutor] model ready: "+r.a+" "+r.b+" threads="+r.f+" isolated="+r.r+" in "+r.c+" ms (warm-up "+r.w+" ms, cached before: "+r.d+")")}u=2
x=6
break
case 4:u=3
m=t.pop()
n=A.Z(m)
if(n instanceof B.kj){q=n
s.f=D.atm
s.y=q
n=A.kk().geG().h(0,"debug")
if(n==="1")A.H0().$1("[tutor] model failed: "+A.i(q))}else throw m
x=6
break
case 3:x=2
break
case 6:s.a9()
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$z_,w)},
tP(){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$tP=A.j(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:if(r.at){x=1
break}q=null
try{k=$.a4().b
k===$&&A.b()
k=k.gbP().e.a
q=(k==null?null:k.r)!=null}catch(d){x=1
break}if(!q){x=1
break}r.at=!0
u=4
k=$.a4().b
k===$&&A.b()
p=k
x=7
return A.d(p.cR("quran_tutor_progress").hj("surah, ayah, status, perfect_count, updated_at"),$async$tP)
case 7:o=a1
n=r.c.aUE(o)
m=0,k=y.N,i=y.z
case 8:if(!(m<25)){x=10
break}l=r.c.aQ2()
if(J.bk(l)===0){x=10
break}h=p
g=A.M(["p_rows",l],k,i)
f=h.CW
f===$&&A.b()
f.b.E(0,A.lK(h.x,k,k))
x=11
return A.d(f.aYe("quran_tutor_save",!1,g,i),$async$tP)
case 11:r.c.aUw(l)
case 9:++m
x=8
break
case 10:x=12
return A.d(A.lw("mt.tutor.progress",C.ab.js(r.c.d2(),null)),$async$tP)
case 12:if(n)r.a9()
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
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$tP,w)},
EJ(d){return this.aXX(d)},
aXX(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$EJ=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:p=B.br6(t.c.d2()).d2()
y.f.a(p.h(0,"rows")).dD(0,new B.aR4(d))
t.c=B.br6(p)
x=2
return A.d(t.wf(),$async$EJ)
case 2:v=4
s=$.a4().b
s===$&&A.b()
r=s.gbP().e.a
x=(r==null?null:r.r)!=null?7:8
break
case 7:r=y.z
x=9
return A.d(s.bc("quran_tutor_reset",A.M(["p_surah",d],y.N,r),r),$async$EJ)
case 9:case 8:v=1
x=6
break
case 4:v=3
o=u.pop()
x=6
break
case 3:x=1
break
case 6:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$EJ,w)}}
B.ul.prototype={
V(){var x=$.Ha()
return new B.SL(x,new A.b5(C.K,$.a3()))}}
B.SL.prototype={
ai(){var x,w,v=this
v.aq()
x=v.d
x.a5(v.gmH())
w=y.a
x.Wp().bE(new B.bac(v),w)
G.aGN().bE(new B.bad(v),w).hD(new B.bae())
A.JX(G.bqA(),y.y)},
uv(){if(this.c!=null)this.t(new B.b9Z())},
l(){var x,w=this
w.d.S(w.gmH())
x=w.e
x.p$=$.a3()
x.T$=0
w.aB()},
Ie(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Ie=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.d
x=3
return A.d(s.oq(s.b.aOB(!0)),$async$Ie)
case 3:t=s.a
t.aWF()
if(t.ZC()){t.acM()
x=1
break}s.z_()
case 1:return A.l(v,w)}})
return A.m($async$Ie,w)},
uw(d,e,f){return this.aDP(d,e,f)},
aKg(d){return this.uw(d,null,null)},
aDP(d,e,f){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$uw=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:if(u.w==null){u.c.U(y.q).f.ba(A.bS(null,null,null,null,null,C.l,null,A.p("\u0644\u062d\u0638\u0629\u2026 \u0628\u0646\u062c\u0647\u0651\u0632 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641",null,null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
x=1
break}x=e!=null&&f!=null?3:5
break
case 3:t=new A.R(e,f)
x=4
break
case 5:s=u.c
s.toString
x=6
return A.d(B.bYC(s,d),$async$uw)
case 6:t=h
case 4:if(t==null||u.c==null){x=1
break}x=7
return A.d(u.d.FF(d,t.a,t.b),$async$uw)
case 7:s=u.c
if(s==null){x=1
break}r=y.z
x=8
return A.d(A.ap(s,!1).cu(A.cs(new B.ba4(u,d,t),null,r),r),$async$uw)
case 8:if(u.c!=null)u.t(new B.ba5())
case 1:return A.l(v,w)}})
return A.m($async$uw,w)},
D(d){var x=null,w=this.d,v=w.b,u=A.a([],y.p),t=w.a
if(t.gae6()&&!A.ap(d,!1).U9())u.push(A.dy(x,x,x,D.aak,x,x,t.gaTY(),x,x,x,"\u0631\u062c\u0648\u0639 \u0644\u0645\u0633\u062c\u062f\u064a",x))
t=v.e
if(t)u.push(A.dy(x,x,x,D.ab9,x,x,new B.ba8(d),x,x,x,"\u062a\u0642\u062f\u0651\u0645\u064a",x))
u.push(A.dy(x,x,x,D.Ad,x,x,new B.ba9(d),x,x,x,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",x))
if(!w.e)w=D.ajM
else w=t?this.aAu():this.aAU()
return E.v0(u,w,"\u0627\u0644\u0645\u062d\u0641\u0651\u0638")},
aAU(){var x,w,v,u,t,s,r,q,p=null,o=this.d.d
if(o==null)o=D.TM
x=this.r
w=x==null?p:x.a-x.b
if(!(o.a&&o.b))v="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u062f\u0639\u0645 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638. \u062c\u0631\u0651\u0628 \u0623\u062d\u062f\u062b \u0646\u0633\u062e\u0629 \u0645\u0646 Chrome (\u0623\u0646\u062f\u0631\u0648\u064a\u062f) \u0623\u0648 Safari (\u0622\u064a\u0641\u0648\u0646)."
else if(!o.f)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0641\u062a\u062d \u0639\u0644\u0649 https \u0639\u0634\u0627\u0646 \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0627\u064a\u0643."
else v=!o.c||!o.d?"\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u0633\u0645\u062d \u0628\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0646 \u0627\u0644\u0645\u0627\u064a\u0643.":p
x=y.p
u=A.a([D.aEo,C.ap],x)
for(t=0;t<4;++t){s=D.ali[t]
u.push(new A.ag(C.bO,A.aq(A.a([A.cz(s.a,C.a8,p,18),C.am,new A.dM(1,C.aX,A.p(s.b,p,p,p,p,D.aJ2,p,p,p),p)],x),C.I,C.f,C.h,0,p),p))}u=A.am(u,C.I,C.f,C.h)
s=A.a([D.aUF,C.V,A.p("\u0647\u0646\u062d\u0645\u0651\u0644 \u0645\u0644\u0641 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 (\u062d\u0648\u0627\u0644\u064a "+E.bd(105)+" \u0645\u064a\u062c\u0627) \u0648\u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0648\u0628\u0639\u062f \u0643\u062f\u0647 \u0628\u064a\u0641\u062a\u062d \u0645\u0646 \u063a\u064a\u0631 \u062a\u062d\u0645\u064a\u0644. \u064a\u064f\u0641\u0636\u0651\u0644 \u062a\u0643\u0648\u0646 \u0639\u0644\u0649 Wi-Fi.",p,p,p,p,F.ax,p,p,p)],x)
if(w!=null){r=w<3e8
q=r?"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0645\u062a\u0635\u0641\u062d \u0642\u0644\u064a\u0644\u0629 ("+E.bd(C.d.aC(w/1e6))+" \u0645\u064a\u062c\u0627) \u2014 \u0641\u0636\u0651\u064a \u0634\u0648\u064a\u0629 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0623\u0648\u0644.":"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629: \u0643\u0641\u0627\u064a\u0629 \u2713"
C.b.E(s,A.a([C.V,A.p(q,p,p,p,p,A.cN(p,p,r?D.cN:C.d0,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x))}r=o.w
if(r>0&&r<3)C.b.E(s,A.a([C.V,D.aUf],x))
x=A.a([new E.dv(u,C.al,C.aF,p,!0,p),new E.dv(A.am(s,C.I,C.f,C.h),C.al,C.aF,p,!1,p),D.b09,C.V],x)
if(v!=null)x.push(new E.dv(A.p(v,p,p,p,p,D.aMZ,p,p,p),C.al,C.aF,p,!1,p))
else x.push(A.mI(D.a9J,D.aQ0,this.gaDX(),A.mJ(C.u,C.ao,D.aGQ,p)))
x.push(C.aQ)
x.push(D.TL)
return x},
aAu(){var x,w,v=this,u=null,t=v.d,s=t.c,r=v.e,q=C.c.aw(r.a.a),p=q.length===0,o=p?C.t5:G.bDz(q),n=t.z,m=A.b_(v.a86(C.hd,E.bd(s.gafc())+" \u0622\u064a\u0629","\u062d\u0641\u0638\u062a\u0647\u0627"),1),l=E.bd(s.abZ()),k=s.c,j=Date.now()
k=k===B.aR_(new A.bw(j,0,!1))?"\u0648\u0631\u0627 \u0628\u0639\u0636 \u2014 \u0643\u0645\u0651\u0644!":"\u0633\u0645\u0651\u0639 \u0627\u0644\u0646\u0647\u0627\u0631\u062f\u0647 \u0639\u0634\u0627\u0646 \u062a\u0643\u0645\u0651\u0644"
j=y.p
k=A.a([new B.Cz(t,!1,u),A.aq(A.a([m,C.am,A.b_(v.a86(C.zL,l+" \u064a\u0648\u0645",k),1)],j),C.j,C.f,C.h,0,u),C.R],j)
if(n!=null){t=G.jd(n.a)
m=n.b
l=n.c
m=m===l?"\u0622\u064a\u0629 "+E.bd(m):"\u0627\u0644\u0622\u064a\u0627\u062a "+E.bd(m)+"\u2013"+E.bd(l)
k.push(new E.dv(A.aq(A.a([D.aaK,C.ba,A.b_(A.am(A.a([D.aOC,A.p(t+" \u2014 "+m,u,u,u,u,F.bo,u,u,u)],j),C.I,C.f,C.h),1),O.kf],j),C.j,C.f,C.h,0,u),C.al,C.aF,new B.ba1(v,n),!0,u))}t=C.i.bR(0.08)
k.push(A.bF(u,C.D,!1,u,!0,C.l,u,A.bI(),r,u,u,u,u,u,2,A.hG(u,new A.e8(4,A.ab(14),C.w),u,u,u,u,u,u,!0,u,u,u,u,u,u,t,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,C.va,"\u0639\u0627\u064a\u0632 \u062a\u062d\u0641\u0638 \u0633\u0648\u0631\u0629 \u0625\u064a\u0647\u061f",u,u,u,u,u,u,u,u,u,!0,!0,!1,u,C.rR,u,u,u,u,u,u,u,u,u,u,u,u),C.q,!0,u,!0,u,!1,u,C.F,u,u,u,u,u,u,u,u,u,1,u,u,!1,"\u2022",u,new B.ba2(v),u,u,u,!1,u,u,!1,u,!0,u,C.C,u,u,u,u,u,u,u,u,u,u,u,C.dH,!0,C.y,u,C.J,u,u,u,u))
k.push(C.R)
if(!p){t=A.a([],j)
if(o.length===0)t.push(D.aSf)
for(r=o.length,x=0;x<o.length;o.length===r||(0,A.B)(o),++x)t.push(v.J6(o[x]))
C.b.E(k,t)}else{t=A.a([D.avv,D.avR,v.J6(1)],j)
for(w=114;w>=78;--w)t.push(v.J6(w))
t.push(C.V)
r=v.f
p=A.cz(r?C.zI:C.rA,C.a8,u,u)
t.push(A.jB(p,A.p(r?"\u0627\u062e\u0641\u064a \u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631":"\u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631 (\u0627\u0644\u0628\u0642\u0631\u0629 \u0644\u062d\u062f \u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a)",u,u,u,u,C.fC,u,u,u),new B.ba3(v),u))
if(v.f)for(w=2;w<=77;++w)t.push(v.J6(w))
C.b.E(k,t)}k.push(C.ap)
k.push(D.vO)
return k},
a86(d,e,f){var x=null,w=y.p
return new E.dv(A.aq(A.a([A.cz(d,C.u,x,x),C.am,A.b_(A.am(A.a([A.p(e,x,x,x,x,F.bo,x,x,x),A.p(f,1,C.av,x,x,D.aLM,x,x,x)],w),C.I,C.f,C.h),1)],w),C.j,C.f,C.h,0,x),C.al,C.N,x,!1,x)},
J6(d){var x,w=null,v=this.d.c,u=H.cp[d-1].a[1],t=v.WW(d),s=t/u,r=y.p,q=A.bH(A.hc(C.X,A.a([A.bpa(C.eD,D.cm,w,w,w,w,w,3,s,w),A.p(E.bd(d),w,w,w,w,P.Ta,w,w,w)],r),C.l,C.c2,w),36,36),p=A.p(G.jd(d),w,w,w,w,D.aIL,w,w,w)
if(t===0)x=E.bd(u)+" \u0622\u064a\u0629"
else x=t===u?"\u0645\u062d\u0641\u0648\u0638\u0629 \u0643\u0644\u0647\u0627 \u2713":"\u062d\u0641\u0638\u062a "+E.bd(t)+" \u0645\u0646 "+E.bd(u)
r=A.a([q,C.j7,A.b_(A.am(A.a([p,A.p(x,w,w,w,w,A.cN(w,w,t===u?D.cm:C.d0,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),C.I,C.f,C.h),1)],r)
if(s>0&&s<1)r.push(A.p(E.bd(C.d.aC(s*100))+"\u066a",w,w,w,w,D.T0,w,w,w))
r.push(D.a9N)
return new E.dv(A.aq(r,C.j,C.f,C.h,0,w),H.yA,C.h6,new B.ba6(this,d),!1,w)}}
B.Cz.prototype={
D(d){var x,w,v,u,t,s,r=null,q=this.c
switch(q.f.a){case 2:if(this.d)return C.aV
return D.avn
case 3:x=q.y
x=x==null?r:x.ghe()
return new E.dv(A.am(A.a([A.p(x==null?"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0634\u063a\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638":x,r,r,r,r,D.v8,r,r,r),C.V,new A.wS(C.Ur,!1,q.gaUd(),r,r,r,r,C.m,r,!1,r,!0,r,C.vo,r)],y.p),C.I,C.f,C.h),C.al,C.aF,r,!1,r)
case 0:case 1:w=q.w
v=q.r
q=w>0
u=q?C.d.cC(v/w,0,1):r
t=q&&v<w
q=A.p(t?"\u0628\u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026 "+E.bd(C.d.aC(v/1e6))+" \u0645\u0646 "+E.bd(C.d.aC(w/1e6))+" \u0645\u064a\u062c\u0627":"\u0628\u0646\u062c\u0647\u0651\u0632 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026",r,r,r,r,C.vb,r,r,r)
x=A.ab(8)
s=y.p
x=A.a([q,C.S,A.mB(x,A.KK(C.eD,C.u,7,t?u:r),C.bt)],s)
if(!this.d)C.b.E(x,A.a([C.V,D.aQq],s))
return new E.dv(A.am(x,C.I,C.f,C.h),C.al,C.aF,r,!1,r)}}}
B.QF.prototype={
D(d){var x=null,w=D.cN.bR(0.1),v=A.ab(14),u=A.cZ(D.cN.bR(0.4),1)
return A.aD(x,A.aq(A.a([D.aay,C.am,A.b_(A.p(this.c?"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0627\u0644\u062a\u062c\u0648\u064a\u062f.":"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0623\u062d\u0643\u0627\u0645 \u0627\u0644\u062a\u062c\u0648\u064a\u062f. \u0627\u0642\u0631\u0627 \u0639\u0644\u0649 \u0634\u064a\u062e \u0623\u0648 \u0645\u062d\u0641\u0651\u0638 \u0641\u064a \u0645\u0633\u062c\u062f\u0643 \u0643\u0645\u0627\u0646.",x,x,x,x,D.T6,x,x,x),1)],y.p),C.I,C.f,C.h,0,x),C.m,x,x,new A.av(w,x,u,v,x,x,C.t),x,x,C.aF,C.aU,x,x,x)}}
B.zS.prototype={
M(){return"_Phase."+this.b}}
B.zd.prototype={
V(){return new B.UF($.Ha(),D.jw)}}
B.UF.prototype={
gig(){var x=this.e
return x===$?this.e=this.a.d:x},
gxA(){var x,w=this.a,v=w.f
w=w.c
x=this.gig()
return G.H3(w,x,v.uE(w,x)).b},
ai(){var x,w=this
w.aq()
x=w.d
x.a5(w.gmH())
x.Wp()
x.a.Xu(B.ao_(w.a.c,w.gig()))},
uv(){if(this.c!=null)this.t(new B.bhw())},
l(){var x,w=this,v=w.d
v.S(w.gmH())
x=w.Q
if(x!=null)x.aI()
v=v.a
v.FV()
v.Uc()
w.aB()},
QF(d){var x,w,v=this
if(v.f===D.p2)v.d.a.Uc()
x=v.d.a
x.FV()
w=v.Q
if(w!=null)w.aI()
v.t(new B.bhM(v,d))
x.Xu(B.ao_(v.a.c,d))
w=v.a
if(d<w.e)x.Xu(B.ao_(w.c,d+1))},
Jk(d){return this.aBr(d)},
aBr(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$Jk=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f===D.p1){u.d.a.FV()
u.t(new B.bhQ(u))
x=1
break}t=u.r!=null?D.fQ:D.jw
u.t(new B.bhR(u))
s=u.d
r=A.a([B.ao_(u.a.c,u.gig())],y.s)
q=d==null?s.b.b:d
x=3
return A.d(s.a.Ew(r,q),$async$Jk)
case 3:p=f
if(u.c==null||u.f!==D.p1){x=1
break}u.t(new B.bhS(u,t,p))
case 1:return A.l(v,w)}})
return A.m($async$Jk,w)},
Ir(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Ir=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.d
if(l.f!==D.hv){x=1
break}p=l.a
p.FV()
r=B.Al(s.gxA()).length
s.t(new B.bhU(s))
o=s.Q
if(o!=null)o.aI()
s.Q=A.oX(C.fd,new B.bhV(s))
u=4
o=B.bsK(r)
n=A.d_(0,0,0,350*r,0,0)
x=7
return A.d(p.ZM(l.b.c,o,n,new B.bhW(s),new B.bhX(s)),$async$Ir)
case 7:u=2
x=6
break
case 4:u=3
k=t.pop()
l=A.Z(k)
if(l instanceof B.kj){q=l
l=s.Q
if(l!=null)l.aI()
if(s.c!=null)s.t(new B.bhY(s,q))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ir,w)},
xz(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$xz=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.f!==D.p2){x=1
break}n=s.Q
if(n!=null)n.aI()
s.t(new B.bi_(s))
s.Q=A.oX(C.h4,new B.bi0(s))
m=new A.yL()
$.An()
m.qc()
r=m
u=4
n=s.d.a
x=7
return A.d(n.ZP(),$async$xz)
case 7:q=e
if(q.b<0.8){s.T4("\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0642\u0635\u064a\u0631 \u0623\u0648\u064a \u2014 \u062f\u0648\u0633 \xab\u0633\u0645\u0651\u0639\xbb \u0648\u0627\u0642\u0631\u0627 \u0627\u0644\u0622\u064a\u0629 \u0643\u0644\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb.")
x=1
break}x=8
return A.d(n.agY(q,B.Al(s.gxA()).length),$async$xz)
case 8:p=e
s.ay=A.d_(0,0,r.gVx(),0,0,0)
n=A.kk().geG().h(0,"debug")
if(n==="1"){A.H0().$1("[tutor] "+s.a.c+":"+s.gig()+" audio="+C.d.ap(q.b,1)+"s infer="+p.b+"ms total="+r.gyl()+"ms "+p.gKF()+" text="+p.a)
s.at="\u062a\u0633\u062c\u064a\u0644\u0643 "+C.d.ap(p.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.ap(p.b/1000,2)+" \u062b\n"+p.gKF()+"\n"+p.a}s.a3H(p.a)
u=2
x=6
break
case 4:u=3
k=t.pop()
n=A.Z(k)
if(n instanceof B.kj){o=n
s.T4(o.ghe())}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$xz,w)},
T4(d){var x=this,w=x.Q
if(w!=null)w.aI()
if(x.c==null)return
x.t(new B.bhL(x,d))},
a3H(d){var x,w,v,u,t,s=this,r={},q=s.Q
if(q!=null)q.aI()
if(s.c==null)return
x=B.bC6(s.gxA(),d)
r.a=null
if(C.c.aw(x.c).length!==0){q=s.d
w=q.c
v=s.a.c
u=s.gig()
t=x.gpO()
r.a=w.ag6(v,u,q.b.a,t)
q.wf()}s.t(new B.bhN(r,s,x))},
GQ(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$GQ=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:i=s.d
if(i.f!==D.hv){x=1
break}s.t(new B.bhE(s))
m=s.Q
if(m!=null)m.aI()
s.Q=A.oX(C.h4,new B.bhF(s))
l=new A.yL()
$.An()
l.qc()
r=l
u=4
x=7
return A.d(i.a.aYI(B.ao_(s.a.c,s.gig()),B.Al(s.gxA()).length),$async$GQ)
case 7:q=e
p="\u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a "+C.d.ap(q.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.ap(q.b/1000,2)+" \u062b (\u0627\u0644\u0643\u0644 "+C.d.ap(r.gyl()/1000,2)+" \u062b)\n"+q.gKF()+"\n"+q.a
A.H0().$1("[tutor-debug] "+s.a.c+":"+s.gig()+" audio="+C.d.ap(q.c,1)+"s infer="+q.b+"ms total="+r.gyl()+"ms "+q.gKF()+" text="+q.a)
s.ay=A.d_(0,0,r.gVx(),0,0,0)
s.a3H(q.a)
o=s.r
if(o!=null){i=o.gpO()
m=o.b
k=A.af(m).i("aO<1>")
m=A.a_(new A.aO(m,new B.bhG(),k),k.i("L.E"))
A.H0().$1("[tutor-debug] perfect="+i+" ops="+A.i(m))}s.t(new B.bhH(s,p))
u=2
x=6
break
case 4:u=3
h=t.pop()
i=A.Z(h)
if(i instanceof B.kj){n=i
A.H0().$1("[tutor-debug] failed: "+A.i(n))
s.T4(n.ghe())}else throw h
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$GQ,w)},
gS0(){var x,w,v
for(x=this.a.d,w=this.d;v=this.a,x<=v.e;++x){v=w.c.a.h(0,v.c*1000+x)
if((v==null?$.pj():v).a!==D.dM)return!1}return!0},
D(d){var x,w=this,v=null,u=w.d,t=u.c.X4(w.a.c,w.gig()),s=u.b,r=s.d&&!w.x&&w.f!==D.fQ,q=G.jd(w.a.c),p=y.p,o=A.a([A.dy(v,v,v,D.Ad,v,v,new B.bi5(d),v,v,v,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",v)],p),n=w.atV(),m=A.p("\u0622\u064a\u0629 "+E.bd(w.gig()),v,v,v,v,N.vf,v,v,v),l=E.bd(w.gig()-w.a.d+1),k=w.a
s=A.a([A.aq(A.a([m,C.c1,A.p("("+l+" \u0645\u0646 "+E.bd(k.e-k.d+1)+")",v,v,v,v,F.ax,v,v,v),C.e6,w.aEz(t,s.a)],p),C.j,C.f,C.h,0,v),C.R],p)
if(r)s.push(w.aAp())
else{m=w.r
if(m!=null){l=w.f
l=l!==D.p2&&l!==D.le}else l=!1
if(l)s.push(w.asa(m))
else s.push(A.p(w.gxA()+" \ufd3f"+E.bd(w.gig())+"\ufd3e",v,v,v,v,D.hO,C.ar,C.aI,v))}s=A.a([new B.Cz(u,!0,v),n,C.S,new E.dv(A.am(s,C.ak,C.f,C.h),D.a5r,C.aF,v,!1,v)],p)
n=w.r
if(n!=null&&w.f===D.fQ)s.push(w.aLs(n))
if(w.r!=null&&w.f===D.fQ&&w.ay!=null){x=C.d.aC(C.e.b9(w.ay.a,1000)/100)
s.push(new A.ag(C.bO,A.p("\u0627\u062a\u0631\u0627\u062c\u0639 \u0641\u064a "+(E.bd(C.e.b9(x,10))+"\u066b"+E.bd(C.e.ae(x,10)))+" \u062b",v,v,v,v,F.ax,C.ar,v,v),v))}n=w.as
if(n!=null)s.push(new A.ag(C.aF,A.p(n,v,v,v,v,D.v8,v,v,v),v))
s.push(w.asB())
s.push(C.ap)
s.push(A.qU(C.u,C.N,v,new B.bi6(w),D.aPk,D.aRj,u.b.d))
n=w.a
if(n.e>n.d){n=w.gS0()
s.push(new E.dv(A.aq(A.a([D.a94,C.ba,A.b_(A.am(A.a([D.aS_,A.p(w.gS0()?"\u062d\u0641\u0638\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u0633\u0645\u0651\u0639\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636 \u0645\u0646 \u063a\u064a\u0631 \u0645\u0627 \u062a\u0634\u0648\u0641\u0647\u0627":"\u0644\u0645\u0627 \u062a\u062e\u0644\u0651\u0635 \u0627\u0644\u0622\u064a\u0627\u062a \u0648\u0627\u062d\u062f\u0629 \u0648\u0627\u062d\u062f\u0629\u060c \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0644\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636",v,v,v,v,F.ax,v,v,v)],p),C.I,C.f,C.h),1),O.kf],p),C.j,C.f,C.h,0,v),C.al,C.aF,new B.bi7(w,d),n,v))}n=A.kk().geG().h(0,"debug")
if(n==="1"){p=A.a([C.S,A.fO(D.a9I,D.aR2,u.f===D.hv&&w.f!==D.le?w.gat9():v,v)],p)
n=w.at
if(n!=null)p.push(new A.ag(C.k4,A.a7x(n,F.ax,v),v))
n=u.x
if(n!=null){m=n.a
l=n.b
n=n.gli()
u=u.x
p.push(A.p("model: "+m+" "+l+" \u2014 "+n+", isolated "+u.r+", load "+u.c+" ms (warm-up "+u.w+" ms)",v,v,v,v,F.ax,v,v,v))}C.b.E(s,p)}s.push(C.S)
s.push(D.vO)
return E.v0(o,s,q)},
atV(){var x=this.a,w=x.e-x.d+1
if(w===1)return C.aV
return A.bH(A.qb(new B.bhJ(this),w,null,C.aC,new B.bhK()),36,null)},
aEz(d,e){var x,w,v,u,t,s,r,q=null
if(d.a===D.dM)return D.aEt
x=d.b
w=E.bd(x)
v=E.bd(e)
u=A.a([],y.p)
for(t=0;t<e;++t){s=t<x
r=s?C.cO:D.a8D
u.push(new A.ag(D.a5X,A.cz(r,s?D.cm:C.h_,q,16),q))}return A.br3(A.aq(u,C.j,C.f,C.a1,0,q),q,"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637 \u0648\u0631\u0627 \u0628\u0639\u0636: "+w+" \u0645\u0646 "+v,q,q)},
aAp(){var x=null
return A.dw(!1,A.ab(12),!0,A.aD(x,D.a24,C.m,x,x,new A.av(H.xt,x,x,A.ab(12),x,x,C.t),x,x,x,D.a5d,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bhP(this),x,x,x,x,x,x,x)},
asa(d){var x,w,v,u,t,s=null,r=A.a([],y.R)
for(x=d.a,w=0;w<x.length;++w){v=J.bA(d.gFU(),w)
A:{if(D.fK===v){u=D.hO.co(D.cm)
break A}if(D.oP===v){u=D.hO.UP(D.cN,C.hK,D.cN)
break A}if(D.oQ===v){u=D.hO.UP(D.du,C.hK,D.du)
break A}u=D.hO.UP(C.h_,C.ov,C.dv)
break A}t=x[w]
r.push(new A.fi(t.a,s,s,C.bk,s,s,s,s,s,s,u))
r.push(H.v2)}x=E.bd(this.gig())
r.push(A.dH(s,s,s,s,s,s,s,s,s,D.hO.co(C.a8),"\ufd3f"+x+"\ufd3e"))
return A.a8N(A.dH(r,s,s,s,s,s,s,s,s,s,s),s,C.ar,C.aI)},
aLs(d){var x,w,v,u,t,s,r=this.w
if(C.c.aw(d.c).length===0)return D.b_P
if(d.gpO()){x=r==null
if((x?null:r.a)===D.dM&&r.b===this.d.b.a)x="\u0627\u0644\u0622\u064a\u0629 \u062f\u064a \u0627\u062a\u062d\u0641\u0638\u062a! \u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0627\u0644\u0644\u064a \u0628\u0639\u062f\u0647\u0627."
else x=!x&&r.a!==D.dM?"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637. \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0645\u0627\u0646 "+E.bd(this.d.b.a-r.b)+" \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629.":"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637."
return new B.zp(D.cm,C.cO,"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713",x,null)}x=d.gFU()
w=J.cV(x)
v=w.hO(x,new B.bi1()).gK(0)
u=w.hO(x,new B.bi2()).gK(0)
t=w.hO(x,new B.bi3()).gK(0)
x=A.a([],y.s)
if(u>0)x.push(E.bd(u)+" \u063a\u0644\u0637")
if(v>0)x.push(E.bd(v)+" \u0631\u0627\u062c\u0639\u0647\u0627")
if(t>0)x.push(E.bd(t)+" \u0646\u0627\u0642\u0635\u0629")
if(d.gDv().length!==0)x.push(E.bd(d.gDv().length)+" \u0632\u064a\u0627\u062f\u0629")
w=u+t>0?D.du:D.cN
x=C.b.aU(x," \u2022 ")
s=d.gDv().length!==0?"\n\u0632\u064a\u0627\u062f\u0629: "+C.b.aU(d.gDv(),"\u060c "):""
return new B.zp(w,C.ke,"\u0642\u0631\u0628\u062a! \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0644\u0648\u0651\u0646\u0629",x+"\n\u0627\u0644\u0623\u0635\u0641\u0631: \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u062f\u064a \u2014 \u0627\u0644\u0623\u062d\u0645\u0631: \u063a\u0644\u0637 \u2014 \u0627\u0644\u0631\u0645\u0627\u062f\u064a \u0627\u0644\u0645\u0634\u0637\u0648\u0628: \u0646\u0633\u064a\u062a\u0647\u0627."+s,null)},
asB(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d,g=h.f===D.hv,f=j.f
switch(f.a){case 2:if(j.z==null)x=0
else{f=Date.now()
w=j.z
w.toString
x=C.e.b9(new A.bw(f,0,!1).ec(w).a,1e6)}v=C.e.b9(B.bsK(B.Al(j.gxA()).length).a,1e6)
f=j.gaKi()
w=96+26*j.y
u=D.du.bR(0.25)
w=A.lR(i,A.buh(C.X,A.aD(i,D.a9P,C.m,i,i,D.WF,i,84,i,i,i,i,84),i,new A.av(u,i,i,i,i,i,C.cx),C.yq,i,w,w),C.q,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,f,i,i,i,i,i,i)
u=A.p("\u0628\u0646\u0633\u062c\u0651\u0644\u2026 "+B.brP(x)+" / "+B.brP(v),i,i,i,i,I.kZ,i,i,i)
return A.am(A.a([w,C.S,u,A.p(h.b.c?"\u0644\u0645\u0627 \u062a\u062e\u0644\u0635 \u0627\u0633\u0643\u062a \u062b\u0627\u0646\u064a\u0629 \u0623\u0648 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb":"\u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb \u0644\u0645\u0627 \u062a\u062e\u0644\u0635",i,i,i,i,F.ax,i,i,i),A.c4(D.aUe,i,i,f,i,i)],y.p),C.j,C.f,C.h)
case 3:t=C.d.dW((Date.now()-j.ax)/1000)
return new A.ag(D.a5a,A.am(A.a([C.pN,C.ap,D.aQH,A.p(t<8?"\u062b\u0648\u0627\u0646\u064a \u0648\u0646\u0642\u0648\u0644\u0643":"\u0644\u0633\u0647 \u0634\u063a\u0627\u0644\u064a\u0646 \u2014 \u0627\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0628\u062a\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0643\u062a\u0631 ("+E.bd(t)+" \u062b)",i,i,i,i,F.ax,i,i,i)],y.p),C.j,C.f,C.h),i)
default:s=f===D.p1
r=j.r
f=r==null
w=!f
q=w&&r.gpO()
u=A.cz(s?D.rL:I.zY,i,i,i)
if(s)p="\u0648\u0642\u0651\u0641"
else p=w&&!q?"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u062d":"\u0627\u0633\u0645\u0639"
p=A.p(p,i,i,i,i,i,i,i,i)
o=A.mJ(i,i,D.aGN,i)
u=A.b_(new A.wS(C.Ur,!0,new B.bhx(j,r,q),i,i,i,o,C.m,i,!1,i,!0,i,new A.R8(p,u,o,i,i),i),1)
p=A.a([],y.n)
for(o=y.c,n=0;n<3;++n){m=D.AT[n]
p.push(new A.ef(m,i,A.p("\xd7"+E.bd(m),i,i,i,i,i,i,i,i),o))}o=y.S
l=y.b
k=y.p
o=A.aq(A.a([u,C.am,A.uG(new B.bhy(j),p,A.cK([h.b.b],o),!1,A.jh(i,i,i,new A.ba(new B.bhz(),l),i,i,i,i,new A.ba(new B.bhA(),l),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,C.f0),o)],k),C.j,C.f,C.h,0,i)
h=g&&!s?j.gaFQ():i
u=A.cz(f?D.ms:C.ke,i,i,i)
if(g)f=f?"\u0633\u0645\u0651\u0639":"\u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a"
else f="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
f=A.p(f,i,i,i,i,C.cr,i,i,i)
p=q?L.jS:C.u
h=A.a([o,C.R,A.mI(u,f,h,A.mJ(p,q?C.i:C.ao,D.ol,i))],k)
if(w&&j.gig()<j.a.e)C.b.E(h,A.a([C.S,q?A.mI(D.abj,D.aTA,new B.bhB(j),A.mJ(D.cm,C.ao,D.ol,i)):A.c4(D.aPo,i,i,new B.bhC(j),i,i)],k))
if(w){f=j.gig()
w=j.a
u=w.e
f=f===u&&q&&u>w.d}else f=!1
if(f)h.push(new A.ag(C.qw,A.p(j.gS0()?"\u062e\u0644\u0651\u0635\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u062c\u0631\u0651\u0628 \xab\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636\xbb \u062a\u062d\u062a.":"\u062e\u0644\u0635\u062a \u0622\u062e\u0631 \u0622\u064a\u0629 \u2014 \u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0644\u0633\u0647 (\u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0635\u0641\u0631\u0627 \u0641\u0648\u0642).",i,i,i,i,D.Td,C.ar,i,i),i))
return A.am(h,C.ak,C.f,C.h)}}}
B.zp.prototype={
D(d){var x=this,w=null,v=x.c,u=v.bR(0.12),t=A.ab(14),s=A.cZ(v.bR(0.5),1),r=y.p
return A.aD(w,A.aq(A.a([A.cz(x.d,v,w,w),C.am,A.b_(A.am(A.a([A.p(x.e,w,w,w,w,A.cN(w,w,v,w,w,w,w,w,w,w,w,15,w,w,C.a0,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),C.ux,A.p(x.f,w,w,w,w,D.T6,w,w,w)],r),C.I,C.f,C.h),1)],r),C.I,C.f,C.h,0,w),C.m,w,w,new A.av(u,w,s,t,w,w,C.t),w,w,C.aF,C.aU,w,w,w)}}
B.zc.prototype={
V(){var x=y.S
return new B.UE($.Ha(),A.x(x,y.B),A.aJ(x),A.x(x,y.N),A.dO(null,y.H))}}
B.UE.prototype={
ai(){this.aq()
this.d.a5(this.gmH())},
uv(){if(this.c!=null)this.t(new B.bhf())},
l(){var x,w=this,v=w.d
v.S(w.gmH())
x=w.y
if(x!=null)x.aI()
v.a.Uc()
w.aB()},
Cp(d){return this.aIZ(d)},
aIZ(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m
var $async$Cp=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.t(new B.bho(t,d))
r=t.y
if(r!=null)r.aI()
t.y=A.oX(C.fd,new B.bhp(t))
v=3
r=t.d
q=t.a
p=q.f
q=q.c
q=B.bsK(B.Al(G.H3(q,d,p.uE(q,d)).b).length)
p=t.a
o=p.f
p=p.c
p=A.d_(0,0,0,350*B.Al(G.H3(p,d,o.uE(p,d)).b).length,0,0)
x=6
return A.d(r.a.ZM(r.b.c,q,p,new B.bhq(t,d),new B.bhr(t)),$async$Cp)
case 6:v=1
x=5
break
case 3:v=2
m=u.pop()
r=A.Z(m)
if(r instanceof B.kj){s=r
r=t.y
if(r!=null)r.aI()
if(t.c!=null)t.t(new B.bhs(t,s))}else throw m
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Cp,w)},
AY(d,e){return this.auT(d,e)},
auT(d,e){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$AY=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.e!==d){x=1
break}o=s.y
if(o!=null)o.aI()
s.t(new B.bhj(s,d))
n=d<s.a.e?d+1:null
r=s.d.a.ZP()
if(e&&n!=null)s.Cp(n)
q=null
u=4
x=7
return A.d(r,$async$AY)
case 7:q=g
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.Z(l)
if(o instanceof B.kj){p=o
s.t(new B.bhk(s,d,p))}else throw l
x=6
break
case 3:x=2
break
case 6:if(q!=null){o=q
s.as=s.as.bE(new B.bhl(s,o,d),y.H)}case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$AY,w)},
gaCE(){var x,w,v,u,t=this
for(x=t.a.d,w=t.f,v=t.r,u=t.w;x<=t.a.e;++x)if(!w.av(x)&&!v.n(0,x)&&!u.av(x)&&x!==t.e)return x
return null},
aGr(){this.t(new B.bhm(this))},
D(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q.f===D.hv,o=s.e,n=s.gaCE(),m=s.f,l=m.a,k=s.w.a,j=s.a,i=l+k===j.e-j.d+1&&s.r.a===0&&o==null
l=A.w(m).i("c3<2>")
x=new A.aO(new A.c3(m,l),new B.bht(),l.i("aO<L.E>")).gK(0)
l=G.jd(s.a.c)
m=y.p
q=A.a([new B.Cz(q,!0,r),A.p("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 "+E.bd(s.a.d)+" \u0644\u062d\u062f "+E.bd(s.a.e)+" \u0645\u0646 \u062d\u0641\u0638\u0643\u060c \u0622\u064a\u0629 \u0622\u064a\u0629: \u0628\u0639\u062f \u0643\u0644 \u0622\u064a\u0629 \u062f\u0648\u0633 \xab\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629\xbb \u0648\u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0637\u0648\u0644 \u2014 \u0647\u0646\u0635\u062d\u0651\u062d \u0648\u0625\u0646\u062a \u0628\u062a\u0642\u0631\u0627.",r,r,r,r,F.ax,r,r,r),C.R],m)
for(w=s.a.d;w<=s.a.e;++w)q.push(s.aKh(w))
q.push(C.S)
k=s.Q
if(k!=null)q.push(A.p(k,r,r,r,r,D.v8,r,r,r))
k=o==null
if(!k){j=E.bd(o)
if(s.z==null)v=0
else{v=Date.now()
u=s.z
u.toString
u=C.e.b9(new A.bw(v,0,!1).ec(u).a,1e6)
v=u}v=A.p("\u0628\u0646\u0633\u062c\u0651\u0644 \u0622\u064a\u0629 "+j+"\u2026 "+B.brP(v),r,r,r,r,I.kZ,C.ar,r,r)
j=A.mB(A.ab(6),A.KK(C.eD,D.du,6,s.x),C.bt)
u=o<s.a.e
t=A.cz(u?D.a8L:D.rL,r,r,r)
C.b.E(q,A.a([v,C.V,j,C.R,A.mI(t,A.p(u?"\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629":"\u062e\u0644\u0635\u062a",r,r,r,r,C.cr,r,r,r),new B.bhu(s,o),A.mJ(C.u,C.ao,D.ol,r))],m))}else if(n!=null){j=p?new B.bhv(s,n):r
if(!p)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
else v=n===s.a.d?"\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0633\u0645\u064a\u0639":"\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+E.bd(n)
q.push(A.mI(D.aal,A.p(v,r,r,r,r,C.cr,r,r,r),j,A.mJ(C.u,C.ao,D.ol,r)))}if(s.r.a!==0&&k)q.push(D.avA)
if(i){k=s.a
k=x===k.e-k.d+1
j=k?D.cm:D.cN
v=k?C.mo:C.ke
if(k)k="\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713 \u0633\u0645\u0651\u0639\u062a\u0647\u0645 \u0643\u0644\u0647\u0645 \u0635\u062d"
else{k=E.bd(x)
u=s.a
u=k+" \u0645\u0646 "+E.bd(u.e-u.d+1)+" \u0622\u064a\u0627\u062a \u0645\u0638\u0628\u0648\u0637\u0629"
k=u}u=s.a
u=x===u.e-u.d+1?"\u0631\u0628\u0646\u0627 \u064a\u062b\u0628\u0651\u062a\u0647\u0627 \u0641\u064a \u0642\u0644\u0628\u0643.":"\u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0641\u064a\u0647\u0627 \u0623\u0644\u0648\u0627\u0646 \u0648\u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a."
C.b.E(q,A.a([new B.zp(j,v,k,u,r),A.fO(D.abe,D.aTU,s.gaGq(),r)],m))}q.push(C.R)
q.push(D.vO)
return E.v0(r,q,"\u0633\u0645\u0651\u0639 "+l)},
aKh(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.f.h(0,d),i=l.w.h(0,d)
if(l.e===d)x=D.aa3
else if(l.r.n(0,d))x=M.om
else if(i!=null)x=D.aac
else if(j!=null){w=j.gpO()?C.cO:D.a8a
x=A.cz(w,j.gpO()?D.cm:D.cN,k,k)}else x=D.a9r
w=y.p
v=A.a([A.aq(A.a([A.p("\u0622\u064a\u0629 "+E.bd(d),k,k,k,k,D.aMn,k,k,k),C.e6,x],w),C.j,C.f,C.h,0,k)],w)
if(i!=null)v.push(A.p(i,k,k,k,k,D.aLQ,k,k,k))
if(j!=null&&!j.gpO()){u=y.R
t=A.a([],u)
for(s=j.a,r=0;r<s.length;++r){q=s[r]
p=j.gFU()
o=J.bo(p)
n=o.h(p,r)
A:{if(D.fK===n){m=D.cm
break A}if(D.oP===n){m=D.cN
break A}if(D.oQ===n){m=D.du
break A}m=C.h_
break A}m=D.hO.aP6(m,o.h(p,r)===D.oR?C.ov:k,22)
C.b.E(t,A.a([new A.fi(q.a,k,k,C.bk,k,k,k,k,k,k,m),H.v2],u))}w=A.a([C.aY,A.a8N(A.dH(t,k,k,k,k,k,k,k,k,k,k),k,C.ar,C.aI)],w)
if(C.c.aw(j.c).length===0)w.push(D.aRH)
C.b.E(v,w)}return new E.dv(A.am(v,C.ak,C.f,C.h),C.fe,C.h6,k,!1,k)}}
B.zb.prototype={
V(){return new B.UD($.Ha())}}
B.UD.prototype={
ai(){this.aq()
var x=this.d
x.a5(this.gmH())
x.Wp()},
uv(){if(this.c!=null)this.t(new B.bh6())},
l(){this.d.S(this.gmH())
this.aB()},
D(d){var x,w,v,u,t,s=this,r=null,q=s.d.c,p=q.gak2(),o=A.a([],y.t)
for(x=78;x<=114;++x)o.push(x)
w=C.b.mW(o,0,new B.bhd(q))
v=C.b.mW(o,0,new B.bhe())
o=y.p
o=A.a([A.aq(A.a([A.b_(s.OW(E.bd(q.gafc()),"\u0622\u064a\u0629 \u0645\u062d\u0641\u0648\u0638\u0629"),1),C.am,A.b_(s.OW(E.bd(q.abZ()),"\u064a\u0648\u0645 \u0648\u0631\u0627 \u0628\u0639\u0636"),1),C.am,A.b_(s.OW(E.bd(q.e),"\u0623\u0637\u0648\u0644 \u0633\u0644\u0633\u0644\u0629"),1)],o),C.j,C.f,C.h,0,r),C.R,new E.dv(A.am(A.a([A.p("\u062c\u0632\u0621 \u0639\u0645\u0651: "+E.bd(C.d.aC(w*100/v))+"\u066a",r,r,r,r,F.bo,r,r,r),C.V,A.mB(A.ab(6),A.KK(C.eD,D.cm,8,w/v),C.bt),C.aY,A.p(E.bd(w)+" \u0645\u0646 "+E.bd(v)+" \u0622\u064a\u0629",r,r,r,r,F.ax,r,r,r)],o),C.I,C.f,C.h),C.al,C.aF,r,!1,r)],o)
if(p.length===0)o.push(D.avH)
for(u=p.length,t=0;t<p.length;p.length===u||(0,A.B)(p),++t)o.push(s.aKj(p[t]))
o.push(C.S)
u=$.a4().b
u===$&&A.b()
u=u.gbP().e.a
o.push(A.p((u==null?r:u.r)!=null?"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643 \u0648\u064a\u0638\u0647\u0631 \u0639\u0644\u0649 \u0623\u064a \u062c\u0647\u0627\u0632 \u062a\u062f\u062e\u0644 \u0645\u0646\u0647.":"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647. \u0633\u062c\u0651\u0644 \u062f\u062e\u0648\u0644 \u0639\u0634\u0627\u0646 \u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643.",r,r,r,r,F.ax,r,r,r))
return E.v0(r,o,"\u062a\u0642\u062f\u0651\u0645\u064a \u0641\u064a \u0627\u0644\u062d\u0641\u0638")},
OW(d,e){var x=null
return new E.dv(A.am(A.a([A.p(d,x,x,x,x,D.aM9,x,x,x),A.p(e,x,x,x,x,C.Th,C.ar,x,x)],y.p),C.j,C.f,C.h),C.al,C.N,x,!1,x)},
aKj(d){var x=null,w=this.d.c,v=H.cp[d-1].a[1],u=w.WW(d),t=w.aTX(d),s=y.p,r=A.aq(A.a([A.b_(A.p(G.jd(d),x,x,x,x,F.bo,x,x,x),1),A.p(E.bd(C.d.aC(u*100/v))+"\u066a",x,x,x,x,D.aN_,x,x,x)],s),C.j,C.f,C.h,0,x),q=A.mB(A.ab(6),A.KK(C.eD,D.cm,7,u/v),C.bt),p=E.bd(u),o=E.bd(v),n=t>0?" \u2022 \u0628\u062a\u0631\u0627\u062c\u0639 "+E.bd(t):""
return new E.dv(A.am(A.a([r,C.V,q,C.aY,A.p("\u0645\u062d\u0641\u0648\u0638 "+p+" \u0645\u0646 "+o+n,x,x,x,x,F.ax,x,x,x)],s),C.I,C.f,C.h),C.al,C.aF,new B.bhc(this,d),!1,x)},
GT(d){return this.ato(d)},
ato(d){var x=0,w=A.n(y.H),v=this,u,t
var $async$GT=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=H.cp[d-1].a[1]
t=v.c
t.toString
x=2
return A.d(A.hi(K.dQ,new B.bhb(v,d,u),t,!0,null,!1,y.H),$async$GT)
case 2:return A.l(null,w)}})
return A.m($async$GT,w)}}
B.a99.prototype={
Jj(d,e){var x=null,w=A.a8P(x,x,x,x,x,x,x,x,x,x,x,D.aGx,C.N,x,x,x,x,C.ty,x,x)
return A.c4(A.p(d,x,x,x,x,C.l0,x,x,x),x,x,new B.aQN(e),x,w)},
D(d){var x=this,w=y.p
return new E.dv(A.am(A.a([D.aTr,C.V,D.aUd,A.fb(A.a([x.Jj("tarteel-ai/whisper-base-ar-quran","https://huggingface.co/tarteel-ai/whisper-base-ar-quran"),x.Jj("iqbalaesthetic/Basira","https://huggingface.co/iqbalaesthetic/Basira")],w),0,12),D.aPc,x.Jj("tanzil.net","https://tanzil.net"),D.aUZ,x.Jj("everyayah.com","https://everyayah.com")],w),C.I,C.f,C.h),C.al,C.aF,null,!1,null)}}
var z=a.updateTypes(["~()","a6<~>()","C(md)","a6<ED>()","a6<EB>()","a6<EC>()","P<md>()","C(pv)","bj(nc)","zd(z)","zb(z)","C(lD)","zc(z)","C(Do)"])
B.aSV.prototype={
$1(d){var x,w
if(d.n(0,C.B)){x=this.a
if(x.fy===D.jo)x=null
else{x=x.goA().k3
x=A.aE(31,x.B()>>>16&255,x.B()>>>8&255,x.B()&255)}return x}x=this.a
if(x.fy===D.jo)x=null
else{x=x.goA()
w=x.p3
x=w==null?x.k2:w}return x},
$S:29}
B.aQO.prototype={
$0(){var x=0,w=A.n(y.m),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=A.a5(A.cv(b.G.document).baseURI)
q=A.c0(r,0,null).W("quran_tutor/tutor.js?v=2").j(0)
x=7
return A.d(A.eb(import(q),y.m),$async$$0)
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
o=A.Z(l)
s.a.b=null
m=B.bQ1("network",A.i(o))
throw A.o(m)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:267}
B.aQR.prototype={
$1(d){var x=null
return A.bjX(A.d9(d,"persist",x,x,x,x))},
$S:890}
B.aQQ.prototype={
$0(){var x=0,w=A.n(y.C),v,u=this,t,s,r,q,p,o,n,m,l
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.a
n=A
m=A
l=A
x=4
return A.d(q.oL(),$async$$0)
case 4:x=3
return A.d(n.eb(m.cv(l.d9(e,"loadModel",A.bks(new B.aQP(u.b)),u.c,u.d,null)),y.m),$async$$0)
case 3:p=e
o=A.X(p.device)
if(o==null)o=null
if(o==null)o=""
t=A.X(p.dtype)
if(t==null)t=null
if(t==null)t=""
s=q.oK(p,"ms")
r=q.mv(p,"cached")
A.X(p.backend)
v=new B.EB(o,t,s,r,q.oK(p,"threads"),q.mv(p,"isolated"),q.oK(p,"warmMs"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+4}
B.aQP.prototype={
$2(d,e){this.a.$2(C.d.aC(d),C.d.aC(e))},
$S:891}
B.aQV.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=v.a
s=t.a
x=s==null?2:3
break
case 2:x=4
return A.d(t.oL(),$async$$0)
case 4:s=e
case 3:u={}
u.maxMs=C.e.b9(v.b.a,1000)
u.autoStop=v.c
u.minMs=C.e.b9(v.d.a,1000)
u.onLevel=A.fc(new B.aQT(v.e))
u.onAutoStop=A.fc(new B.aQU(v.f))
x=5
return A.d(A.eb(A.cv(A.d9(s,"startRecording",u,null,null,null)),y.O),$async$$0)
case 5:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.aQT.prototype={
$1(d){return this.a.$1(d)},
$S:59}
B.aQU.prototype={
$1(d){return this.a.$1(d)},
$S:11}
B.aQW.prototype={
$0(){var x=0,w=A.n(y.D),v,u=this,t,s,r,q,p,o
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.a
q=A
p=A
o=A
x=s==null?4:6
break
case 4:x=7
return A.d(t.oL(),$async$$0)
case 7:x=5
break
case 6:e=s
case 5:x=3
return A.d(q.eb(p.cv(o.d9(e,"stopRecording",null,null,null,null)),y.m),$async$$0)
case 3:r=e
v=new B.EC(r,A.d4(r.seconds))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+5}
B.aQY.prototype={
$0(){var x=0,w=A.n(y._),v,u=this,t,s,r,q,p,o
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.b.a
s=u.a
r=s
q=A
p=A
o=A
x=4
return A.d(s.oL(),$async$$0)
case 4:x=3
return A.d(q.eb(p.cv(o.d9(e,"transcribe",t.audio,t.rate,s.a5L(u.c),null)),y.m),$async$$0)
case 3:v=r.a8K(e)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+3}
B.aQX.prototype={
$0(){var x=0,w=A.n(y._),v,u=this,t,s,r,q,p
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t
r=A
q=A
p=A
x=4
return A.d(t.oL(),$async$$0)
case 4:x=3
return A.d(r.eb(q.cv(p.d9(e,"transcribeUrl",u.b,t.a5L(u.c),null,null)),y.m),$async$$0)
case 3:v=s.a8K(e)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+3}
B.aQS.prototype={
$1(d){return d},
$S:33}
B.aIk.prototype={
$0(){var x,w,v,u,t=this.a,s=A.c_(t.a.length,D.oR,!1,y.G)
for(t=t.b,x=t.length,w=0;w<x;++w){v=t[w]
u=v.a
if(u!=null)s[u]=v.d}return s},
$S:z+6}
B.aIj.prototype={
$1(d){return d===D.fK},
$S:z+2}
B.bkn.prototype={
$2(d,e){var x,w=e.length
if(d.length<w)return!1
for(x=0;x<w;++x)if(B.boh(e[x],d[x])<0.75)return!1
return!0},
$S:892}
B.blI.prototype={
$1(d){return d.length!==0},
$S:14}
B.aR0.prototype={
$1(d){return d.a===D.dM},
$S:z+7}
B.aR1.prototype={
$1(d){return C.e.b9(d,1000)},
$S:71}
B.aQZ.prototype={
$1(d){return C.d.c1(d)},
$S:893}
B.aR2.prototype={
$0(){var x=0,w=A.n(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$$0=A.j(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d(A.mq("mt.tutor.settings"),$async$$0)
case 7:r=a3
if(r!=null){k=y.P.a(C.ab.hF(r,null))
j=A.bY(k.h(0,"n"))
j=j==null?null:C.d.c1(j)
j=C.e.cC(j==null?2:j,1,5)
i=C.b.n(D.AT,k.h(0,"r"))?A.er(k.h(0,"r")):1
h=A.hP(k.h(0,"auto"))
g=A.hP(k.h(0,"hide"))
k=A.hP(k.h(0,"in"))
s.a.b=new B.P4(j,i,h!==!1,g===!0,k===!0)}u=2
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
return A.d(A.mq("mt.tutor.progress"),$async$$0)
case 12:q=a3
if(q!=null)s.a.c=B.br6(y.P.a(C.ab.hF(q,null)))
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
return A.d(A.mq("mt.tutor.last"),$async$$0)
case 17:p=a3
if(p!=null){o=y.P.a(C.ab.hF(p,null))
n=C.d.c1(A.dT(J.bA(o,"s")))
m=C.d.c1(A.dT(J.bA(o,"f")))
l=C.d.c1(A.dT(J.bA(o,"t")))
if(B.bDR(n,m)&&B.bDR(n,l)&&m<=l)s.a.z=new A.bq(n,m,l)}u=2
x=16
break
case 14:u=13
a0=t.pop()
x=16
break
case 13:x=2
break
case 16:k=s.a
if(k.b.e&&k.a.ZC()){k.a.acM()
x=1
break}a1=k
x=18
return A.d(k.a.Ge(),$async$$0)
case 18:a1.d=a3
k.e=!0
k.a9()
if(k.b.e)k.z_()
k.tP()
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:121}
B.aR3.prototype={
$2(d,e){var x=this.a
x.r=d
x.w=e
x.a9()},
$S:894}
B.aR4.prototype={
$2(d,e){return C.e.b9(A.f_(A.i(d),null,null),1000)===this.a},
$S:895}
B.bac.prototype={
$1(d){var x=0,w=A.n(y.a),v=this,u,t
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.d(u.d.a.A6(),$async$$1)
case 2:t=f
if(u.c!=null)u.t(new B.bab(u,t))
return A.l(null,w)}})
return A.m($async$$1,w)},
$S:896}
B.bab.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bad.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.baa(x,d))},
$S:z+8}
B.baa.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bae.prototype={
$1(d){},
$S:23}
B.b9Z.prototype={
$0(){},
$S:0}
B.ba4.prototype={
$1(d){var x=this.c,w=this.a.w
w.toString
return new B.zd(this.b,x.a,x.b,w,null)},
$S:z+9}
B.ba5.prototype={
$0(){},
$S:0}
B.ba8.prototype={
$0(){var x=y.z
return A.ap(this.a,!1).cu(A.cs(new B.ba7(),null,x),x)},
$S:0}
B.ba7.prototype={
$1(d){return D.aVA},
$S:z+10}
B.ba9.prototype={
$0(){return B.bDF(this.a)},
$S:0}
B.ba1.prototype={
$0(){var x=this.b
return this.a.uw(x.a,x.b,x.c)},
$S:0}
B.ba2.prototype={
$1(d){return this.a.t(new B.ba0())},
$S:11}
B.ba0.prototype={
$0(){},
$S:0}
B.ba3.prototype={
$0(){var x=this.a
return x.t(new B.ba_(x))},
$S:0}
B.ba_.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.ba6.prototype={
$0(){return this.a.aKg(this.b)},
$S:0}
B.bnp.prototype={
$1(d){return new A.j3(new B.bnm(this.a,this.b,this.c),null)},
$S:57}
B.bnm.prototype={
$2(d,e){var x,w,v=null,u=this.b,t=new B.bno(u,e),s=this.a,r=new B.bnn(s,e),q=A.p(G.jd(this.c),v,v,v,v,C.oz,v,v,v),p=A.p("\u0647\u062a\u0633\u0645\u0651\u0639 \u0623\u0646\u0647\u064a \u0622\u064a\u0627\u062a\u061f ("+E.bd(u)+" \u0622\u064a\u0629)",v,v,v,v,F.ax,v,v,v),o=y.p,n=A.a([],o)
if(u<=30)n.push(r.$3("\u0627\u0644\u0633\u0648\u0631\u0629 \u0643\u0644\u0647\u0627",1,u))
x=u<5
w=E.bd(x?u:5)
x=x?u:5
n.push(r.$3("\u0623\u0648\u0644 "+w+" \u0622\u064a\u0627\u062a",1,x))
x=s.a
if(x>1){x=E.bd(x)
w=s.a
n.push(r.$3("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+x,w,C.e.cC(w+4,1,u)))}u=A.a([q,C.aY,p,C.R,A.fb(n,6,8),C.S,A.aq(A.a([t.$3("\u0645\u0646",s.b,new B.bnh(s)),D.aGT,t.$3("\u0644\u062d\u062f",s.c,new B.bni(s))],o),C.j,C.f,C.h,0,v)],o)
if(s.c-s.b>=10)u.push(D.avD)
u.push(C.aQ)
u.push(A.kO(D.aQm,new B.bnj(s,d),A.mJ(C.u,C.ao,D.aGK,v)))
return A.dZ(!0,new A.ag(C.yF,A.am(u,C.ak,C.f,C.a1),v),C.N,!0)},
$S:316}
B.bno.prototype={
$3(d,e,f){var x,w,v,u=null,t=A.p(d,u,u,u,u,C.hR,u,u,u),s=A.a([],y.I)
for(x=this.a,w=y.r,v=1;v<=x;++v)s.push(new A.cU(v,A.p("\u0622\u064a\u0629 "+E.bd(v),u,u,u,u,u,u,u,u),C.aE,u,w))
return A.b_(A.am(A.a([t,Q.Bo(K.dQ,!0,s,320,new B.bnl(this.b,f),D.aNg,e,y.S)],y.p),C.I,C.f,C.h),1)},
$S:898}
B.bnl.prototype={
$1(d){return d==null?null:this.a.$1(new B.bnk(this.b,d))},
$S:46}
B.bnk.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bnn.prototype={
$3(d,e,f){var x=null
return new B.WK(A.p(d,x,x,x,x,x,x,x,x),new B.bng(this.a,this.b,e,f),x)},
$S:899}
B.bng.prototype={
$0(){var x=this
return x.b.$1(new B.bnf(x.a,x.c,x.d))},
$S:0}
B.bnf.prototype={
$0(){var x=this.a
x.b=this.b
x.c=this.c},
$S:0}
B.bnh.prototype={
$1(d){var x=this.a
x.b=d
if(x.c<d)x.c=d},
$S:30}
B.bni.prototype={
$1(d){var x=this.a
x.c=d
if(x.b>d)x.b=d},
$S:30}
B.bnj.prototype={
$0(){var x=this.a
return A.ap(this.b,!1).bs(new A.R(x.b,x.c))},
$S:0}
B.bhw.prototype={
$0(){},
$S:0}
B.bhM.prototype={
$0(){var x=this.a
x.e=this.b
x.f=D.jw
x.w=x.r=null
x.x=!1
x.ay=x.at=x.as=null},
$S:0}
B.bhQ.prototype={
$0(){var x=this.a
return x.f=x.r!=null?D.fQ:D.jw},
$S:0}
B.bhR.prototype={
$0(){var x=this.a
x.f=D.p1
x.as=null},
$S:0}
B.bhS.prototype={
$0(){var x=this.a
x.f=this.b
if(!this.c&&x.as==null)x.as=null},
$S:0}
B.bhU.prototype={
$0(){var x=this.a
x.f=D.p2
x.as=null
x.y=0
x.z=new A.bw(Date.now(),0,!1)
x.at=null},
$S:0}
B.bhV.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bhT())},
$S:42}
B.bhT.prototype={
$0(){},
$S:0}
B.bhX.prototype={
$1(d){return this.a.y=d},
$S:59}
B.bhW.prototype={
$1(d){return this.a.xz()},
$S:11}
B.bhY.prototype={
$0(){var x=this.a
x.f=x.r!=null?D.fQ:D.jw
x.as=this.b.ghe()},
$S:0}
B.bi_.prototype={
$0(){var x=this.a
x.f=D.le
x.ax=Date.now()},
$S:0}
B.bi0.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bhZ())},
$S:42}
B.bhZ.prototype={
$0(){},
$S:0}
B.bhL.prototype={
$0(){var x=this.a
x.f=x.r!=null?D.fQ:D.jw
x.as=this.b},
$S:0}
B.bhN.prototype={
$0(){var x=this.b
x.r=this.c
x.w=this.a.a
x.f=D.fQ
x.x=!1},
$S:0}
B.bhE.prototype={
$0(){var x=this.a
x.f=D.le
x.ax=Date.now()
x.as=null},
$S:0}
B.bhF.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bhD())},
$S:42}
B.bhD.prototype={
$0(){},
$S:0}
B.bhG.prototype={
$1(d){return d.d!==D.fK},
$S:z+11}
B.bhH.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bi5.prototype={
$0(){return B.bDF(this.a)},
$S:0}
B.bi6.prototype={
$1(d){var x=this.a.d
return x.oq(x.b.abA(d))},
$S:6}
B.bi7.prototype={
$0(){var x=y.z
return A.ap(this.b,!1).cu(A.cs(new B.bi4(this.a),null,x),x)},
$S:0}
B.bi4.prototype={
$1(d){var x=this.a.a
return new B.zc(x.c,x.d,x.e,x.f,null)},
$S:z+12}
B.bhK.prototype={
$2(d,e){return C.c1},
$S:48}
B.bhJ.prototype={
$2(d,e){var x,w,v,u=null,t=this.a,s=t.a,r=s.d+e
switch(t.d.c.X4(s.c,r).a.a){case 2:s=D.cm
break
case 1:s=D.cN
break
case 0:s=L.jS
break
default:s=u}x=A.ab(18)
w=t.f===D.le?u:new B.bhI(t,r)
v=s.bR(0.25)
if(r===t.gig())s=C.i
s=A.cZ(s,r===t.gig()?2:1)
return A.dw(!1,x,!0,A.aD(C.X,A.p(E.bd(r),u,u,u,u,D.aKk,u,u,u),C.m,u,u,new A.av(v,u,s,u,u,u,C.cx),u,u,u,u,u,u,36),u,!0,u,u,u,u,u,u,u,u,u,u,w,u,u,u,u,u,u,u)},
$S:129}
B.bhI.prototype={
$0(){return this.a.QF(this.b)},
$S:0}
B.bhP.prototype={
$0(){var x=this.a
return x.t(new B.bhO(x))},
$S:0}
B.bhO.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bi1.prototype={
$1(d){return d===D.oP},
$S:z+2}
B.bi2.prototype={
$1(d){return d===D.oQ},
$S:z+2}
B.bi3.prototype={
$1(d){return d===D.oR},
$S:z+2}
B.bhx.prototype={
$0(){var x=this.b!=null&&!this.c?1:null
return this.a.Jk(x)},
$S:0}
B.bhy.prototype={
$1(d){var x=this.a.d
return x.oq(x.b.aOF(d.gad(d)))},
$S:90}
B.bhA.prototype={
$1(d){return d.n(0,C.W)?C.ao:C.i},
$S:4}
B.bhz.prototype={
$1(d){return d.n(0,C.W)?C.u:C.O},
$S:4}
B.bhB.prototype={
$0(){var x=this.a
return x.QF(x.gig()+1)},
$S:0}
B.bhC.prototype={
$0(){var x=this.a
return x.QF(x.gig()+1)},
$S:0}
B.bhf.prototype={
$0(){},
$S:0}
B.bho.prototype={
$0(){var x=this.a
x.e=this.b
x.Q=null
x.x=0
x.z=new A.bw(Date.now(),0,!1)},
$S:0}
B.bhp.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bhn())},
$S:42}
B.bhn.prototype={
$0(){},
$S:0}
B.bhr.prototype={
$1(d){return this.a.x=d},
$S:59}
B.bhq.prototype={
$1(d){return this.a.AY(this.b,!1)},
$S:11}
B.bhs.prototype={
$0(){var x=this.a
x.e=null
x.Q=this.b.ghe()},
$S:0}
B.bhj.prototype={
$0(){var x=this.a
x.e=null
x.r.C(0,this.b)},
$S:0}
B.bhk.prototype={
$0(){var x=this.a,w=this.b
x.r.I(0,w)
x.w.m(0,w,this.c.ghe())},
$S:0}
B.bhl.prototype={
$1(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
o=s.a
n=o.d
m=s.c
l=o.a
k=l.f
l=l.c
x=6
return A.d(n.a.agY(s.b,B.Al(G.H3(l,m,k.uE(l,m)).b).length),$async$$1)
case 6:r=f
l=o.a
k=l.f
l=l.c
q=B.bC6(G.H3(l,m,k.uE(l,m)).b,r.a)
if(C.c.aw(q.c).length!==0){l=n.c
k=o.a.c
j=q.gpO()
l.ag6(k,m,n.b.a,j)}n.wf()
if(o.c!=null)o.t(new B.bhg(o,m,q))
t.push(5)
x=4
break
case 3:v=2
h=u.pop()
o=A.Z(h)
if(o instanceof B.kj){p=o
o=s.a
if(o.c!=null)o.t(new B.bhh(o,s.c,p))}else throw h
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
o=s.a
if(o.c!=null)o.t(new B.bhi(o,s.c))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$$1,w)},
$S:185}
B.bhg.prototype={
$0(){var x=this.c
this.a.f.m(0,this.b,x)
return x},
$S:0}
B.bhh.prototype={
$0(){var x=this.c.ghe()
this.a.w.m(0,this.b,x)
return x},
$S:0}
B.bhi.prototype={
$0(){return this.a.r.I(0,this.b)},
$S:0}
B.bhm.prototype={
$0(){var x=this.a
x.f.ah(0)
x.w.ah(0)},
$S:0}
B.bht.prototype={
$1(d){return d.gpO()},
$S:z+13}
B.bhu.prototype={
$0(){return this.a.AY(this.b,!0)},
$S:0}
B.bhv.prototype={
$0(){return this.a.Cp(this.b)},
$S:0}
B.bh6.prototype={
$0(){},
$S:0}
B.bhd.prototype={
$2(d,e){return d+this.a.WW(e)},
$S:92}
B.bhe.prototype={
$2(d,e){return d+H.cp[e-1].a[1]},
$S:92}
B.bhc.prototype={
$0(){return this.a.GT(this.b)},
$S:0}
B.bhb.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.b,o=A.p(G.jd(p),q,q,q,q,C.oz,q,q,q),n=y.p,m=A.a([],n)
for(x=this.c,w=this.a,v=w.d,u=p*1000,t=1;t<=x;++t){s=new A.b8(10,10)
r=v.c.a.h(0,u+t)
switch((r==null?$.pj():r).a.a){case 2:r=D.cm.bR(0.35)
break
case 1:r=D.cN.bR(0.35)
break
case 0:r=C.xy
break
default:r=q}m.push(A.aD(C.X,A.p(E.bd(t),q,q,q,q,D.aJL,q,q,q),C.m,q,q,new A.av(r,q,q,new A.dl(s,s,s,s),q,q,C.t),q,38,q,q,q,q,38))}return A.dZ(!0,new A.ag(C.k7,A.am(A.a([o,C.aY,D.aS7,C.R,new A.el(D.Wx,A.iD(A.fb(m,6,6),q,C.q,q,q,C.v),q),C.ap,A.c4(D.aSZ,q,q,new B.bha(w,d,p),q,q)],n),C.ak,C.f,C.a1),q),C.N,!0)},
$S:49}
B.bha.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.b
t=v.c
x=4
return A.d(A.eR(null,new B.bh9(t),u,y.y),$async$$0)
case 4:x=e===!0?2:3
break
case 2:x=5
return A.d(v.a.d.EJ(t),$async$$0)
case 5:if(u.e!=null)A.ap(u,!1).eA()
case 3:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.bh9.prototype={
$1(d){var x=null,w=A.p("\u0647\u062a\u0628\u062f\u0623 "+G.jd(this.a)+" \u0645\u0646 \u0627\u0644\u0623\u0648\u0644.",x,x,x,x,x,x,x,x)
return A.eT(A.a([A.c4(C.vq,x,x,new B.bh7(d),x,x),A.c4(D.aUc,x,x,new B.bh8(d),x,x)],y.p),w,D.aTL)},
$S:21}
B.bh7.prototype={
$0(){A.ap(this.a,!1).bs(!1)
return null},
$S:0}
B.bh8.prototype={
$0(){A.ap(this.a,!1).bs(!0)
return null},
$S:0}
B.bo_.prototype={
$1(d){var x=this.a
return new A.k6(new B.bnZ(x),null,x,null)},
$S:900}
B.bnZ.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.a,r=s.b,q=A.a([],y.n)
for(x=y.c,w=1;w<=5;++w)q.push(new A.ef(w,t,A.p(E.bd(w),t,t,t,t,t,t,t,t),x))
x=y.S
v=y.b
u=y.p
x=A.a([D.aPb,C.ap,D.aTd,C.V,A.uG(new B.bnU(s,r),q,A.cK([r.a],x),!1,A.jh(t,t,t,new A.ba(new B.bnV(),v),t,t,t,t,new A.ba(new B.bnW(),v),t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),x),C.S,A.qU(C.u,C.N,t,new B.bnX(s,r),D.aRL,D.aUH,r.c),A.qU(C.u,C.N,t,new B.bnY(s,r),t,D.aOZ,r.d)],u)
s=s.x
if(s!=null)C.b.E(x,A.a([C.aY,A.p("\u0627\u0644\u0645\u0639\u0627\u0644\u062c: "+s.gli(),t,t,t,t,F.ax,t,C.aI,t)],u))
x.push(C.S)
x.push(D.TL)
return A.dZ(!0,A.iD(A.am(x,C.ak,C.f,C.h),t,C.q,C.k7,t,C.v),C.N,!0)},
$S:901}
B.bnU.prototype={
$1(d){return this.a.oq(this.b.aOC(d.gad(d)))},
$S:90}
B.bnW.prototype={
$1(d){return d.n(0,C.W)?C.ao:C.i},
$S:4}
B.bnV.prototype={
$1(d){return d.n(0,C.W)?C.u:C.O},
$S:4}
B.bnX.prototype={
$1(d){return this.a.oq(this.b.aO6(d))},
$S:6}
B.bnY.prototype={
$1(d){return this.a.oq(this.b.abA(d))},
$S:6}
B.aQN.prototype={
$0(){return A.f0(A.c0(this.a,0,null),C.cb,null)},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.a9a.prototype,"gaTY","aTZ",0)
var w
x(w=B.P5.prototype,"gaUd","z_",1)
x(w,"gaoP","tP",1)
x(w=B.SL.prototype,"gmH","uv",0)
x(w,"gaDX","Ie",1)
x(w=B.UF.prototype,"gmH","uv",0)
x(w,"gaFQ","Ir",1)
x(w,"gaKi","xz",1)
x(w,"gat9","GQ",1)
x(w=B.UE.prototype,"gmH","uv",0)
x(w,"gaGq","aGr",0)
x(B.UD.prototype,"gmH","uv",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.R_,[B.aWH,B.md,B.AC,B.Cy,B.zS])
x(A.a7,[B.WK,B.Cz,B.QF,B.zp,B.a99])
w(B.aSU,A.wu)
x(A.ik,[B.aSV,B.aQR,B.aQT,B.aQU,B.aQS,B.aIj,B.blI,B.aR0,B.aR1,B.aQZ,B.bac,B.bad,B.bae,B.ba4,B.ba7,B.ba2,B.bnp,B.bno,B.bnl,B.bnn,B.bnh,B.bni,B.bhV,B.bhX,B.bhW,B.bi0,B.bhF,B.bhG,B.bi6,B.bi4,B.bi1,B.bi2,B.bi3,B.bhy,B.bhA,B.bhz,B.bhp,B.bhr,B.bhq,B.bhl,B.bht,B.bhb,B.bh9,B.bo_,B.bnU,B.bnW,B.bnV,B.bnX,B.bnY])
x(A.N,[B.a9a,B.P6,B.EB,B.ED,B.EC,B.kj,B.Mp,B.lD,B.Do,B.pv,B.a9b,B.P4])
x(A.lJ,[B.aQO,B.aQQ,B.aQV,B.aQW,B.aQY,B.aQX,B.aIk,B.aR2,B.bab,B.baa,B.b9Z,B.ba5,B.ba8,B.ba9,B.ba1,B.ba0,B.ba3,B.ba_,B.ba6,B.bnk,B.bng,B.bnf,B.bnj,B.bhw,B.bhM,B.bhQ,B.bhR,B.bhS,B.bhU,B.bhT,B.bhY,B.bi_,B.bhZ,B.bhL,B.bhN,B.bhE,B.bhD,B.bhH,B.bi5,B.bi7,B.bhI,B.bhP,B.bhO,B.bhx,B.bhB,B.bhC,B.bhf,B.bho,B.bhn,B.bhs,B.bhj,B.bhk,B.bhg,B.bhh,B.bhi,B.bhm,B.bhu,B.bhv,B.bh6,B.bhc,B.bha,B.bh7,B.bh8,B.aQN])
x(A.t0,[B.aQP,B.bkn,B.aR3,B.aR4,B.bnm,B.bhK,B.bhJ,B.bhd,B.bhe,B.bnZ])
w(B.P5,A.hz)
x(A.T,[B.ul,B.zd,B.zc,B.zb])
x(A.V,[B.SL,B.UF,B.UE,B.UD])})()
A.vG(b.typeUniverse,JSON.parse('{"WK":{"a7":[],"e":[]},"kj":{"bh":[]},"zd":{"T":[],"e":[]},"zc":{"T":[],"e":[]},"zb":{"T":[],"e":[]},"P5":{"as":[]},"ul":{"T":[],"e":[]},"SL":{"V":["ul"]},"Cz":{"a7":[],"e":[]},"QF":{"a7":[],"e":[]},"UF":{"V":["zd"]},"zp":{"a7":[],"e":[]},"UE":{"V":["zc"]},"UD":{"V":["zb"]},"a99":{"a7":[],"e":[]}}'))
var y=(function rtii(){var x=A.a9
return{u:x("pv"),c:x("ef<v>"),r:x("cU<v>"),k:x("y<lD>"),n:x("y<ef<v>>"),I:x("y<cU<v>>"),R:x("y<fK>"),Y:x("y<aI<h,@>>"),d:x("y<Mp>"),s:x("y<h>"),p:x("y<e>"),t:x("y<v>"),m:x("bi"),j:x("P<@>"),L:x("P<v>"),P:x("aI<h,@>"),f:x("aI<@,@>"),x:x("ai<h,v>"),a:x("bj"),K:x("N"),B:x("Do"),l:x("+(v,v)"),e:x("cM<lD>"),N:x("h"),C:x("EB"),D:x("EC"),X:x("P6"),_:x("ED"),U:x("aO<h>"),G:x("md"),q:x("p8"),b:x("ba<I?>"),y:x("C"),i:x("K"),z:x("@"),S:x("v"),A:x("bi?"),O:x("N?"),M:x("+quota,usage(v,v)?"),o:x("et"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ll=new B.AC(0,"none")
D.lm=new B.AC(1,"learning")
D.dM=new B.AC(2,"memorized")
D.Wx=new A.aw(0,1/0,0,320)
D.du=new A.I(1,0.9725490196078431,0.44313725490196076,0.44313725490196076,C.k)
D.WF=new A.av(D.du,null,null,null,null,null,C.cx)
D.cN=new A.I(1,0.984313725490196,0.7490196078431373,0.1411764705882353,C.k)
D.cm=new A.I(1,0.20392156862745098,0.8274509803921568,0.6,C.k)
D.a8R=new A.a8(983698,"MaterialIcons",null,!1)
D.aaA=new A.aa(D.a8R,null,C.dv,null,null,null)
D.aTO=new A.t("\u0627\u0644\u0646\u0635 \u0645\u062e\u0641\u064a \u2014 \u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.fC,null,null,null,null,null,null,null,null)
D.aJD=new A.r(!0,C.h_,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aS8=new A.t("(\u062f\u0648\u0633 \u0647\u0646\u0627 \u0644\u0648 \u0639\u0627\u064a\u0632 \u062a\u0628\u0635)",null,D.aJD,null,null,null,null,null,null,null,null)
D.am2=x([D.aaA,C.V,D.aTO,D.aS8],y.p)
D.a24=new A.iR(C.v,C.f,C.h,C.j,null,C.b5,null,0,D.am2,null)
D.a5a=new A.a1(0,18,0,18)
D.a5d=new A.a1(0,26,0,26)
D.a5r=new A.a1(14,12,14,14)
D.a5X=new A.a1(3,0,0,0)
D.a8a=new A.a8(63251,"MaterialIcons",null,!1)
D.ms=new A.a8(63677,"MaterialIcons",null,!1)
D.a8D=new A.a8(983256,"MaterialIcons",null,!1)
D.a8L=new A.a8(983443,"MaterialIcons",null,!1)
D.rL=new A.a8(983516,"MaterialIcons",null,!1)
D.a8B=new A.a8(983209,"MaterialIcons",null,!1)
D.a94=new A.aa(D.a8B,28,C.u,null,null,null)
D.a9r=new A.aa(C.zO,null,L.jS,null,null,null)
D.a81=new A.a8(62961,"MaterialIcons",null,!1)
D.a9I=new A.aa(D.a81,null,null,null,null,null)
D.a89=new A.a8(63199,"MaterialIcons",null,!1)
D.a9J=new A.aa(D.a89,null,null,null,null,null)
D.a9N=new A.aa(C.ix,null,C.h_,null,null,null)
D.a9P=new A.aa(D.rL,44,C.i,null,null,null)
D.aa3=new A.aa(D.ms,null,D.du,null,null,null)
D.aac=new A.aa(C.zH,null,D.du,null,null,null)
D.aak=new A.aa(C.zJ,null,null,null,null,null)
D.aal=new A.aa(D.ms,null,null,null,null,null)
D.Ad=new A.aa(C.mt,null,null,null,null,null)
D.aay=new A.aa(C.mq,20,D.cN,null,null,null)
D.aaK=new A.aa(C.rH,30,C.u,null,null,null)
D.a8k=new A.a8(63520,"MaterialIcons",null,!1)
D.ab9=new A.aa(D.a8k,null,null,null,null,null)
D.abe=new A.aa(C.ke,null,null,null,null,null)
D.a7X=new A.a8(62842,"MaterialIcons",null,!0)
D.abj=new A.aa(D.a7X,null,null,null,null,null)
D.AT=x([1,3,5],y.t)
D.BF=x(["\u0627\u0639\u0648\u0630","\u0628\u0627\u0644\u0644\u0647","\u0645\u0646","\u0627\u0644\u0634\u064a\u0637\u0627\u0646","\u0627\u0644\u0631\u062c\u064a\u0645"],y.s)
D.avV=new A.ag(C.m3,I.x_,null)
D.ajM=x([D.avV],y.p)
D.az8=new A.R(C.rE,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0629 \u0628\u0635\u0648\u062a \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062d\u0635\u0631\u064a (\u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645) \u0645\u0631\u0629 \u0623\u0648 \u0663 \u0623\u0648 \u0665 \u0645\u0631\u0627\u062a.")
D.az0=new A.R(D.ms,"\u0633\u0645\u0651\u0639\u0647\u0627 \u0645\u0646 \u062d\u0641\u0638\u0643 \u2014 \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0644\u0648\u0651\u0646\u0644\u0643 \u0643\u0644 \u0643\u0644\u0645\u0629: \u0623\u062e\u0636\u0631 \u0635\u062d\u060c \u0623\u0635\u0641\u0631 \u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0623\u062d\u0645\u0631 \u063a\u0644\u0637.")
D.azl=new A.R(C.hd,"\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0645\u0627 \u062a\u0633\u0645\u0651\u0639\u0647\u0627 \u0635\u062d \u0645\u0631\u062a\u064a\u0646 \u0648\u0631\u0627 \u0628\u0639\u0636 (\u062a\u0642\u062f\u0631 \u062a\u063a\u064a\u0651\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a).")
D.a8q=new A.a8(63625,"MaterialIcons",null,!1)
D.azt=new A.R(D.a8q,"\u0643\u0644 \u062f\u0647 \u0628\u064a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u2014 \u0635\u0648\u062a\u0643 \u0645\u0634 \u0628\u064a\u062a\u0631\u0641\u0639 \u0639\u0644\u0649 \u0623\u064a \u0633\u064a\u0631\u0641\u0631.")
D.ali=x([D.az8,D.az0,D.azl,D.azt],A.a9("y<+(a8,h)>"))
D.an2=x([D.ll,D.lm,D.dM],A.a9("y<AC>"))
D.G3=x(["\u0628\u0633\u0645","\u0627\u0644\u0644\u0647","\u0627\u0644\u0631\u062d\u0645\u0646","\u0627\u0644\u0631\u062d\u064a\u0645"],y.s)
D.atl=new B.Cy(0,"idle")
D.M5=new B.Cy(1,"loading")
D.hv=new B.Cy(2,"ready")
D.atm=new B.Cy(3,"failed")
D.aa2=new A.aa(C.cO,18,D.cm,null,null,null)
D.Td=new A.r(!0,C.a8,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUo=new A.t("\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u062c\u0627\u0647\u0632 \u064a\u0633\u0645\u0639\u0643",null,D.Td,null,null,null,null,null,null,null,null)
D.aiZ=x([D.aa2,C.c1,D.aUo],y.p)
D.aEw=new A.jx(C.aC,C.f,C.h,C.j,null,C.b5,null,0,D.aiZ,null)
D.avn=new A.ag(C.aF,D.aEw,null)
D.a5V=new A.a1(2,6,2,4)
D.aJg=new A.r(!0,C.u,null,null,null,null,14,C.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPa=new A.t("\u0627\u0628\u062f\u0623 \u0645\u0646 \u0647\u0646\u0627 \u2014 \u0627\u0644\u0641\u0627\u062a\u062d\u0629 \u0648\u062c\u0632\u0621 \u0639\u0645\u0651",null,D.aJg,null,null,null,null,null,null,null,null)
D.avv=new A.ag(D.a5V,D.aPa,null)
D.a55=new A.a1(0,10,0,0)
D.aUv=new A.t("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.fC,null,null,null,null,null,null,null,null)
D.ak1=x([M.om,C.am,D.aUv],y.p)
D.aEu=new A.jx(C.aC,C.cQ,C.h,C.j,null,C.b5,null,0,D.ak1,null)
D.avA=new A.ag(D.a55,D.aEu,null)
D.vh=new A.r(!0,D.cN,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUC=new A.t("\u0646\u0635\u064a\u062d\u0629: \u0627\u062d\u0641\u0638 \u0663\u2013\u0665 \u0622\u064a\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0631\u0629 \u0623\u0633\u0647\u0644.",null,D.vh,null,null,null,null,null,null,null,null)
D.avD=new A.ag(C.h7,D.aUC,null)
D.aUk=new A.t("\u0644\u0633\u0647 \u0645\u0633\u0645\u0651\u0639\u062a\u0634 \u0623\u064a \u0622\u064a\u0629 \u2014 \u0627\u0628\u062f\u0623 \u0628\u0633\u0648\u0631\u0629 \u0642\u0635\u064a\u0631\u0629 \u0645\u0646 \u062c\u0632\u0621 \u0639\u0645\u0651.",null,F.ax,C.ar,null,null,null,null,null,null,null)
D.avH=new A.ag(C.C,D.aUk,null)
D.a5S=new A.a1(2,0,2,8)
D.aSe=new A.t("\u0627\u0644\u0633\u0648\u0631 \u0627\u0644\u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u060c \u0645\u0646 \u0627\u0644\u0646\u0627\u0633 \u0644\u062d\u062f \u0627\u0644\u0646\u0628\u0623.",null,F.ax,null,null,null,null,null,null,null,null)
D.avR=new A.ag(D.a5S,D.aSe,null)
D.ab4=new A.aa(C.hc,30,C.u,null,null,null)
D.aNN=new A.r(!0,C.i,null,null,null,null,17,C.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aV_=new A.t("\u0633\u0645\u0651\u0639\u060c \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0642\u0648\u0644\u0643 \u0635\u062d \u0648\u0644\u0627 \u063a\u0644\u0637",null,D.aNN,null,null,null,null,null,null,null,null)
D.a6w=new A.dM(1,C.aX,D.aV_,null)
D.akd=x([D.ab4,C.ba,D.a6w],y.p)
D.aEo=new A.jx(C.aC,C.f,C.h,C.j,null,C.b5,null,0,D.akd,null)
D.aaQ=new A.aa(C.hd,18,D.cm,null,null,null)
D.T0=new A.r(!0,D.cm,null,null,null,null,12,C.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aU6=new A.t("\u0645\u062d\u0641\u0648\u0638\u0629",null,D.T0,null,null,null,null,null,null,null,null)
D.ajm=x([D.aaQ,C.j8,D.aU6],y.p)
D.aEt=new A.jx(C.aC,C.f,C.a1,C.j,null,C.b5,null,0,D.ajm,null)
D.aGx=new A.F(0,30)
D.ol=new A.F(1/0,54)
D.aGK=new A.F(1/0,48)
D.aGN=new A.F(1/0,50)
D.aGQ=new A.F(1/0,52)
D.aGT=new A.cx(16,null,null,null)
D.aIL=new A.r(!0,C.i,null,null,null,null,14.5,C.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJ2=new A.r(!0,C.i,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJL=new A.r(!0,C.i,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.v8=new A.r(!0,D.du,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKk=new A.r(!0,C.i,null,null,null,null,12,C.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hO=new A.r(!0,C.i,null,"AmiriQuranMT",null,null,27,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLM=new A.r(!0,C.d0,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLQ=new A.r(!0,D.du,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aM9=new A.r(!0,C.u,null,null,null,null,24,C.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.T6=new A.r(!0,C.i,null,null,null,null,12.5,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aMn=new A.r(!0,C.u,null,null,null,null,null,C.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aMZ=new A.r(!0,D.cN,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aN_=new A.r(!0,D.cm,null,null,null,null,null,C.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNg=new A.r(!0,C.i,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOC=new A.t("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u062e\u0631 \u0645\u0631\u0629",null,C.hR,null,null,null,null,null,null,null,null)
D.aOZ=new A.t("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643 (\u062e\u0628\u0651\u064a \u0627\u0644\u0646\u0635)",null,C.dH,null,null,null,null,null,null,null,null)
D.aPb=new A.t("\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,C.oz,null,null,null,null,null,null,null,null)
D.aPc=new A.t("\u2022 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641: \u0645\u0634\u0631\u0648\u0639 \u062a\u0646\u0632\u064a\u0644 Tanzil (\u062a\u0631\u062e\u064a\u0635 CC BY 3.0).",null,F.ax,null,null,null,null,null,null,null,null)
D.aPk=new A.t("\u062e\u0628\u0651\u064a \u0646\u0635 \u0627\u0644\u0622\u064a\u0629 \u0648\u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,F.ax,null,null,null,null,null,null,null,null)
D.aPo=new A.t("\u0639\u062f\u0651\u064a \u0644\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.fC,null,null,null,null,null,null,null,null)
D.aQ0=new A.t("\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0627\u0628\u062f\u0623",null,C.cr,null,null,null,null,null,null,null,null)
D.aQm=new A.t("\u064a\u0644\u0627 \u0646\u0628\u062f\u0623",null,C.cJ,null,null,null,null,null,null,null,null)
D.aQq=new A.t("\u0645\u0645\u0643\u0646 \u062a\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 \u062f\u0644\u0648\u0642\u062a\u064a \u0644\u062d\u062f \u0645\u0627 \u064a\u062e\u0644\u0635.",null,F.ax,null,null,null,null,null,null,null,null)
D.aQH=new A.t("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.Tg,null,null,null,null,null,null,null,null)
D.aR2=new A.t("\u062c\u0631\u0651\u0628 \u0639\u0644\u0649 \u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a (\u0644\u0644\u062a\u062c\u0631\u0628\u0629)",null,null,null,null,null,null,null,null,null,null)
D.aRj=new A.t("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643",null,I.kZ,null,null,null,null,null,null,null,null)
D.aRH=new A.t("\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629",null,D.vh,null,null,null,null,null,null,null,null)
D.aRL=new A.t("\u0628\u0639\u062f \u062d\u0648\u0627\u0644\u064a \u062b\u0627\u0646\u064a\u0629 \u0633\u0643\u0648\u062a",null,F.ax,null,null,null,null,null,null,null,null)
D.aS_=new A.t("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636",null,F.bo,null,null,null,null,null,null,null,null)
D.aS7=new A.t("\u0623\u062e\u0636\u0631: \u0645\u062d\u0641\u0648\u0638\u0629 \u2014 \u0623\u0635\u0641\u0631: \u0628\u062a\u0631\u0627\u062c\u0639\u0647\u0627 \u2014 \u0631\u0645\u0627\u062f\u064a: \u0644\u0633\u0647",null,F.ax,null,null,null,null,null,null,null,null)
D.aSf=new A.t("\u0645\u0641\u064a\u0634 \u0633\u0648\u0631\u0629 \u0628\u0627\u0644\u0627\u0633\u0645 \u062f\u0647",null,F.ax,null,null,null,null,null,null,null,null)
D.aLx=new A.r(!0,D.du,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSZ=new A.t("\u0627\u0628\u062f\u0623 \u0627\u0644\u0633\u0648\u0631\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644",null,D.aLx,null,null,null,null,null,null,null,null)
D.aTd=new A.t("\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f \u0643\u0627\u0645 \u062a\u0633\u0645\u064a\u0639 \u0635\u062d \u0648\u0631\u0627 \u0628\u0639\u0636\u061f",null,I.kZ,null,null,null,null,null,null,null,null)
D.aIA=new A.r(!0,C.i,null,null,null,null,null,C.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTr=new A.t("\u0627\u0644\u0645\u0635\u0627\u062f\u0631",null,D.aIA,null,null,null,null,null,null,null,null)
D.aTA=new A.t("\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.cr,null,null,null,null,null,null,null,null)
D.aTL=new A.t("\u062a\u0645\u0633\u062d \u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0633\u0648\u0631\u0629 \u062f\u064a\u061f",null,null,null,null,null,null,null,null,null,null)
D.aTU=new A.t("\u0633\u0645\u0651\u0639\u0647\u0645 \u062a\u0627\u0646\u064a",null,null,null,null,null,null,null,null,null,null)
D.aUc=new A.t("\u0627\u0645\u0633\u062d",null,null,null,null,null,null,null,null,null,null)
D.aUd=new A.t("\u2022 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: whisper-base-ar-quran \u0645\u0646 Tarteel (\u062a\u0631\u062e\u064a\u0635 Apache-2.0)\u060c \u0628\u0635\u064a\u063a\u0629 ONNX \u0645\u0646 \u0645\u0634\u0631\u0648\u0639 Basira\u060c \u0648\u0628\u064a\u0634\u062a\u063a\u0644 \u062c\u0648\u0651\u0647 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0628\u0645\u0643\u062a\u0628\u0629 Transformers.js.",null,F.ax,null,null,null,null,null,null,null,null)
D.aUe=new A.t("\u062e\u0644\u0635\u062a",null,N.vf,null,null,null,null,null,null,null,null)
D.aUf=new A.t("\u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647 \u0630\u0627\u0643\u0631\u062a\u0647 \u0642\u0644\u064a\u0644\u0629 \u2014 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0645\u0643\u0646 \u064a\u0643\u0648\u0646 \u0628\u0637\u064a\u0621 \u0639\u0644\u064a\u0647.",null,D.vh,null,null,null,null,null,null,null,null)
D.aUF=new A.t("\u0623\u0648\u0644 \u0645\u0631\u0629 \u0628\u0633: \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,F.bo,null,null,null,null,null,null,null,null)
D.aUH=new A.t("\u0648\u0642\u0651\u0641 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0644\u0648\u062d\u062f\u0647 \u0644\u0645\u0627 \u0623\u0633\u0643\u062a",null,C.dH,null,null,null,null,null,null,null,null)
D.aUZ=new A.t("\u2022 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: \u0627\u0644\u0634\u064a\u062e \u0645\u062d\u0645\u0648\u062f \u062e\u0644\u064a\u0644 \u0627\u0644\u062d\u0635\u0631\u064a \u2014 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645\u060c \u0645\u0646 everyayah.com.",null,F.ax,null,null,null,null,null,null,null,null)
D.TL=new B.a99(null)
D.aVA=new B.zb(null)
D.aVB=new B.P4(2,1,!0,!1,!1)
D.TM=new B.P6(!1,!1,!1,!1,!1,0)
D.fK=new B.md(0,"ok")
D.oP=new B.md(1,"near")
D.oQ=new B.md(2,"wrong")
D.oR=new B.md(3,"missing")
D.Ua=new B.md(4,"extra")
D.a8h=new A.a8(63456,"MaterialIcons",null,!1)
D.b_P=new B.zp(D.cN,D.a8h,"\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629","\u0642\u0631\u0651\u0628 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0646\u0643 \u0648\u0627\u0642\u0631\u0627 \u0628\u0635\u0648\u062a \u0648\u0627\u0636\u062d \u0641\u064a \u0645\u0643\u0627\u0646 \u0647\u0627\u062f\u064a\u060c \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a.",null)
D.jo=new B.aWH(0,"flat")
D.b09=new B.QF(!1,null)
D.vO=new B.QF(!0,null)
D.jw=new B.zS(0,"idle")
D.p1=new B.zS(1,"playing")
D.p2=new B.zS(2,"recording")
D.le=new B.zS(3,"thinking")
D.fQ=new B.zS(4,"result")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c1K","bFh",()=>new B.a9a())
x($,"c4K","bHj",()=>A.b3("\u0640[\u064b-\u0652]*\u0670",!0,!1))
x($,"c4L","bHk",()=>A.b3("\u0640[\u064b-\u0652]*[\u06e6\u06e7]",!0,!1))
x($,"c4W","bHs",()=>A.b3("\u0648\u0670",!0,!1))
x($,"c4j","bH0",()=>A.b3("[\u0648\u064a\u0649][\u064b-\u0652]*[\u0654]",!0,!1))
x($,"c2U","bG3",()=>A.b3("\u0627[\u0654\u0655]",!0,!1))
x($,"c3X","bGK",()=>A.b3("[\u0654\u0655]",!0,!1))
x($,"c2V","bG4",()=>A.b3("[\u0622\u0623\u0625\u0671\u0672\u0673]",!0,!1))
x($,"c30","bG9",()=>A.b3("[\u0624\u0626]",!0,!1))
x($,"c3Z","bGM",()=>A.b3("[\u064b-\u065f\u0670\u06d6-\u06ed\u08d3-\u08ff\u0640]",!0,!1))
x($,"c4o","bH3",()=>A.b3("[\u06dd\u06de\u0660-\u0669\u06f0-\u06f90-9]",!0,!1))
x($,"c45","bGS",()=>A.b3("[^\u0621-\u064a\\s]",!0,!1))
x($,"c4J","btL",()=>A.b3("\\s+",!0,!1))
x($,"c_6","pj",()=>B.bIi(D.ll,0,A.bJz(0,!0)))
x($,"c1L","Ha",()=>new B.P5($.bFh(),D.aVB,B.bQ2(),D.atl,$.a3()))})()};
(a=>{a["lzSYiix92TUnwAdcmm22B4NcKZo="]=a.current})($__dart_deferred_initializers__);