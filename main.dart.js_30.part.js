((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,P,R,H,N,G,O,S,T,K,L,B={
c_N(d){var x,w,v,u,t,s
if(d instanceof B.kP)return d
try{x=A.cs(d)
w=x.code
v=x.message
u=w==null?"failed":A.a8(w)
t=v==null?"":A.a8(v)
return new B.kP(u,t)}catch(s){u=A.f(d)
return new B.kP("failed",u)}},
acg:function acg(){this.b=this.a=null},
aVr:function aVr(d){this.a=d},
aVu:function aVu(){},
aVt:function aVt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aVs:function aVs(d){this.a=d},
aVy:function aVy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aVw:function aVw(d){this.a=d},
aVx:function aVx(d){this.a=d},
aVz:function aVz(d){this.a=d},
aVB:function aVB(d,e,f){this.a=d
this.b=e
this.c=f},
aVA:function aVA(d,e,f){this.a=d
this.b=e
this.c=f},
aVv:function aVv(){},
c_O(d,e){return new B.kP(d,e)},
Rp:function Rp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.w=i},
Gv:function Gv(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i
_.w=j},
Gx:function Gx(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Gw:function Gw(d,e){this.a=d
this.b=e},
kP:function kP(d,e){this.a=d
this.b=e},
bNi(d){var x,w=$.bRN()
w=A.bS(d,w,"\u0627")
x=$.bRO()
w=A.bS(w,x,"\u064a")
x=$.bRW()
w=A.bS(w,x,"\u0627")
x=$.bQw()
w=A.bS(w,x,"\u0627")
x=$.bRu()
w=A.bS(w,x,"\u0621")
x=$.bRd()
w=A.bS(w,x,"\u0621")
x=$.bQx()
w=A.bS(w,x,"\u0627")
x=$.bQC()
w=A.bS(w,x,"\u0621")
w=A.bS(w,"\u0649","\u064a")
w=A.bS(w,"\u0629","\u0647")
x=$.bRf()
w=A.bS(w,x,"")
x=$.bRx()
w=A.bS(w,x," ")
x=$.bRl()
w=A.bS(w,x," ")
x=$.bDA()
return C.c.aj(A.bS(w,x," "))},
c4f(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.length,k=e.length
if(l===0)return k
if(k===0)return l
x=k+1
w=y.S
v=J.kz(x,w)
for(u=0;u<x;++u)v[u]=u
t=A.bR(x,0,!1,w)
for(s=1;s<=l;++s,r=t,t=v,v=r){t[0]=s
for(w=s-1,u=1;u<=k;++u){q=u-1
p=d.charCodeAt(w)===e.charCodeAt(q)?0:1
o=v[u]+1
n=t[q]+1
m=v[q]+p
if(o<n)q=o<m?o:m
else q=n<m?n:m
t[u]=q}}return v[k]},
bxB(d,e){var x,w,v,u,t,s
if(d===e)return 1
x=A.aO("[\u0627\u0621]",!0,!1)
w=A.bS(d,x,"")
x=A.aO("[\u0627\u0621]",!0,!1)
v=A.bS(e,x,"")
if(w.length!==0&&w===v)return 1
u=d.length
t=e.length
u=u>t?u:t
if(u===0)return 1
s=1-B.c4f(d,e)/u
return s>=1?0.99:s},
BR(d){var x,w,v,u,t,s,r,q=A.a([],y.d)
for(x=C.c.qY(d,$.bDA()),w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.length===0)continue
t=B.bNi(u)
s=A.bS(t," ","")
if(s.length===0){if(q.length!==0){r=q.pop()
q.push(new B.OG(r.a+" "+u,r.b))}continue}q.push(new B.OG(u,s))}return q},
c30(d,e){var x,w,v,u,t=new B.bsX(),s=A.a([],y.s)
for(x=A.eS(e,0,A.id(5,"count",y.S),A.ae(e).c),w=x.$ti,x=new A.bV(x,x.gL(0),w.i("bV<aH.E>")),w=w.i("aH.E");x.u();){v=x.d
s.push((v==null?w.a(v):v).b)}u=!t.$2(s,D.DV)&&t.$2(d,D.DV)?C.b.it(d,5):d
return!t.$2(s,D.Iq)&&t.$2(u,D.Iq)?C.b.it(u,4):u},
bMh(d,e){var x=B.BR(d),w=B.bNi(e),v=y.U
v=A.a0(new A.aG(A.a(w.split(" "),y.s),new B.buq(),v),v.i("M.E"))
return new B.Fe(x,B.c2e(x,B.c30(v,x)),w)},
c2e(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=A.a([],y.s)
for(x=a5.length,w=0;w<a5.length;a5.length===x||(0,A.B)(a5),++w)a4.push(a5[w].b)
v=a4.length
u=a6.length
t=u+1
x=(v+1)*t
s=y.i
r=A.bR(x,0,!1,s)
q=A.bR(x,0,!1,y.S)
p=A.bR(v*(u===0?1:u),0,!1,s)
for(o=0;o<v;++o)for(x=o*u,n=0;n<u;++n)p[x+n]=B.bxB(a4[o],a6[n])
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
e=2}if(n>=2&&r[h-2]<g&&B.bxB(a4[m],a6[n-2]+a6[n-1])>=1){g=r[h-2]
e=3}if(s&&r[i+n-1]<g&&B.bxB(a4[j]+a4[m],a6[n-1])>=1){g=r[i+n-1]
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
if(a2>=1)m=D.h8
else m=a2>=0.6?D.pX:D.pY
a1.push(new B.m5(o,x,s,m))
break
case 1:--o
a1.push(new B.m5(o,a4[o],null,D.pZ))
break
case 2:--n
a1.push(new B.m5(null,null,a6[n],D.WC))
break
case 3:--o
a3=n-2
a1.push(new B.m5(o,a4[o],a6[a3]+" "+a6[n-1],D.h8))
n=a3
break
default:x=o-1;--n
a1.push(new B.m5(x,a4[x],a6[n],D.h8))
o-=2
a1.push(new B.m5(o,a4[o],a6[n],D.h8))}}a4=y.e
a4=A.a0(new A.cD(a1,a4),a4.i("aH.E"))
return a4},
mJ:function mJ(d,e){this.a=d
this.b=e},
OG:function OG(d,e){this.a=d
this.b=e},
m5:function m5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Fe:function Fe(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
aMO:function aMO(d){this.a=d},
aMN:function aMN(){},
bsX:function bsX(){},
buq:function buq(){},
bSR(d,e,f){return new B.qa(d,e,f)},
c54(d){var x
A:{if("memorized"===d){x=D.e1
break A}if("learning"===d){x=D.m7
break A}x=D.m6
break A}return x},
bOf(d,e){return d>=1&&d<=114&&e>=1&&e<=I.c8[d-1].a[1]},
c_P(){var x=y.S
return new B.ach(A.x(x,y.u),A.aF(x))},
aVD(d){var x=d.io()
return C.c.dt(C.e.j(A.cL(x)),4,"0")+"-"+C.c.dt(C.e.j(A.cj(x)),2,"0")+"-"+C.c.dt(C.e.j(A.cB(x)),2,"0")},
bJn(d){var x=y.x,w=A.a0(new A.ak(A.a(d.split("-"),y.s),A.c6l(),x),x.i("aH.E"))
return B.aVD(A.jL(w[0],w[1],w[2]-1,12,0,0,0))},
bAG(d){var x,w,v,u,t,s,r,q,p=y.S,o=A.x(p,y.u),n=A.aF(p),m=new B.ach(o,n),l=d.h(0,"rows")
if(y.f.b(l))for(x=l.gdv(),x=x.ga_(x),w=y.j;x.u();){v=x.gK()
u=A.f2(A.f(v.a),null)
t=v.b
v=!0
if(u!=null)if(w.b(t))if(J.be(t)>=3){v=C.e.ba(u,1000)
s=C.e.ah(u,1000)
v=!(v>=1&&v<=114&&s>=1&&s<=I.c8[v-1].a[1])}if(v)continue
v=J.bq(t)
r=C.d.bU(A.dr(v.h(t,0)))
if(r<0||r>=3)continue
o.n(0,u,new B.qa(D.asB[r],C.d.bU(A.dr(v.h(t,1))),new A.b2(A.kr(C.d.bU(A.dr(v.h(t,2))),0,!0),0,!0)))}q=d.h(0,"dirty")
if(y.j.b(q)){x=J.byb(q,y.o)
p=A.nt(x,new B.aVC(),x.$ti.i("M.E"),p)
n.E(0,new A.aG(p,o.gWn(),A.w(p).i("aG<M.E>")))}m.c=A.O(d.h(0,"last"))
p=A.bn(d.h(0,"streak"))
p=p==null?null:C.d.bU(p)
p=m.d=p==null?0:p
o=A.bn(d.h(0,"best"))
o=o==null?null:C.d.bU(o)
m.e=o==null?p:o
return m},
aru(d,e){return"https://everyayah.com/data/Husary_Muallim_128kbps/"+C.c.dt(C.e.j(d),3,"0")+C.c.dt(C.e.j(e),3,"0")+".mp3"},
Ca:function Ca(d,e){this.a=d
this.b=e},
qa:function qa(d,e,f){this.a=d
this.b=e
this.c=f},
ach:function ach(d,e){var _=this
_.a=d
_.b=e
_.c=null
_.e=_.d=0},
aVE:function aVE(){},
aVF:function aVF(){},
aVC:function aVC(){},
Rn:function Rn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bYl(){return new B.vg(null)},
c8L(d,e){var x,w,v,u,t={},s=I.c8[e-1].a[1],r=$.Jp().c
t.a=1
x=r.a
w=e*1000
v=1
for(;;){if(v<=s){v=x.h(0,w+v)
v=(v==null?$.q_():v).a===D.e1}else v=!1
if(!v)break
v=++t.a}x=t.a
if(x>s){t.a=1
u=1}else u=x
x=s<=10
if(x)u=1
t.b=u
t.c=x?s:C.e.cA(u+4,1,s)
return A.fB(C.de,new B.bwA(t,s,e),d,!0,null,null,!1,y.l)},
bCp(d){return A.d7(0,0,0,0,0,C.e.cA(C.d.ar(6+d*1.2),25,90))},
bBm(d){return E.aZ(C.e.ba(d,60))+":"+C.c.dt(E.aZ(C.e.ah(d,60)),2,"\u0660")},
bO0(d){return A.fB(C.de,new B.bxi($.Jp()),d,!0,null,null,!1,y.H)},
Ji(d){var x,w=d.a
A:{if("timeout"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0627\u062a\u0623\u062e\u0631 \u0623\u0648\u064a \u0648\u0645\u0631\u062f\u0651\u0634\u060c \u0641\u0648\u0642\u0651\u0641\u0646\u0627\u0647 \u0648\u062c\u0631\u0651\u0628\u0646\u0627 \u062a\u0627\u0646\u064a \u0628\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0623\u062e\u0641 \u0648\u0645\u0646\u0641\u0639\u0634. \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}if("crashed"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0642\u0641 \u0641\u062c\u0623\u0629 (\u063a\u0627\u0644\u0628\u064b\u0627 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0634 \u0645\u0643\u0641\u064a\u0629). \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}x=d.gjT()
break A}return x},
ca1(d,e,f){var x,w=new B.bxu(),v=w.$1(f),u=w.$1("\xab\u0627\u0644\u0645\u062d\u0641\u0651\u0638\xbb \u0645\u0634\u0643\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 ("+e+")\n"+d.a+": "+d.b+"\n"),t=1990-u.length
if(v.length>t)v=t<=1?"":C.c.Y(v,0,t-1)+"\u2026"
x=u+v
return x.length>1990?C.c.Y(x,0,1990):x},
bOa(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
try{x=y.P.a(C.a1.eW(a4,null))
s=y.Y
r=s.a(J.b5(x,"rec"))
w=r==null?C.cF:r
q=s.a(J.b5(x,"last"))
v=q==null?C.cF:q
u=new B.bxt()
s=J.b5(v,"recovered")
t=A.f(s==null?"":s)
s=A.f(u.$1(J.b5(w,"wall")))
p=A.f(u.$1(J.b5(w,"source")))
o=A.f(u.$1(J.b5(w,"ctxRate")))
n=A.f(u.$1(J.b5(w,"pcmPeak")))
m=A.f(u.$1(J.b5(w,"ctxState")))
l=A.f(u.$1(J.b5(w,"stopMs")))
k=A.f(u.$1(J.b5(v,"prepMs")))
j=A.f(u.$1(J.b5(v,"ms")))
i=A.f(u.$1(J.b5(v,"featMs")))
h=A.f(u.$1(J.b5(v,"encMs")))
g=A.f(u.$1(J.b5(v,"decMs")))
f=A.f(u.$1(J.b5(v,"wallMs")))
e=A.f(u.$1(J.b5(v,"backend")))
d=A.f(u.$1(J.b5(v,"threads")))
a0=J.be(t)!==0?" \xb7 recovered from "+A.f(t):""
a1=J.c(J.b5(x,"safe"),!0)?" \xb7 safe mode":""
a2=J.c(J.b5(x,"nogpu"),!0)?" \xb7 no-gpu":""
return"record "+s+" s ("+p+", "+o+" Hz, peak "+n+", "+m+") \u2192 stop/decode "+l+" ms \u2192 resample "+k+" ms \u2192 infer "+j+" ms (mel "+i+", enc "+h+", dec "+g+") \u2192 wall "+f+" ms \xb7 "+e+" \xd7"+d+a0+a1+a2}catch(a3){return""}},
Ek:function Ek(d,e){this.a=d
this.b=e},
Ro:function Ro(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=null
_.e=!1
_.f=g
_.w=_.r=0
_.as=_.Q=_.z=_.y=_.x=null
_.at=!1
_.U$=0
_.p$=h
_.O$=_.M$=0},
aVG:function aVG(d){this.a=d},
aVH:function aVH(d){this.a=d},
aVI:function aVI(d){this.a=d},
vg:function vg(d){this.a=d},
Vk:function Vk(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.w=_.r=null},
bi6:function bi6(d){this.a=d},
bi5:function bi5(d,e){this.a=d
this.b=e},
bi7:function bi7(d){this.a=d},
bi4:function bi4(d,e){this.a=d
this.b=e},
bi8:function bi8(){},
bhT:function bhT(){},
bhZ:function bhZ(d,e,f){this.a=d
this.b=e
this.c=f},
bi_:function bi_(){},
bi2:function bi2(d){this.a=d},
bi1:function bi1(){},
bi3:function bi3(d){this.a=d},
bhW:function bhW(d,e){this.a=d
this.b=e},
bhX:function bhX(d){this.a=d},
bhV:function bhV(){},
bhY:function bhY(d){this.a=d},
bhU:function bhU(d){this.a=d},
bi0:function bi0(d,e){this.a=d
this.b=e},
El:function El(d,e,f){this.c=d
this.d=e
this.a=f},
T7:function T7(d,e){this.c=d
this.a=e},
bwA:function bwA(d,e,f){this.a=d
this.b=e
this.c=f},
bwx:function bwx(d,e,f){this.a=d
this.b=e
this.c=f},
bwz:function bwz(d,e){this.a=d
this.b=e},
bww:function bww(d,e){this.a=d
this.b=e},
bwv:function bwv(d,e){this.a=d
this.b=e},
bwy:function bwy(d,e){this.a=d
this.b=e},
bwr:function bwr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bwq:function bwq(d,e,f){this.a=d
this.b=e
this.c=f},
bws:function bws(d){this.a=d},
bwt:function bwt(d){this.a=d},
bwu:function bwu(d,e){this.a=d
this.b=e},
Bj:function Bj(d,e){this.a=d
this.b=e},
AA:function AA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Xk:function Xk(d,e){var _=this
_.d=d
_.e=$
_.f=e
_.w=_.r=null
_.x=!1
_.y=0
_.ax=_.at=_.as=_.Q=_.z=null
_.ay=0
_.c=_.a=_.ch=null},
bpY:function bpY(){},
bqd:function bqd(d,e){this.a=d
this.b=e},
bqh:function bqh(d){this.a=d},
bqi:function bqi(d){this.a=d},
bqj:function bqj(d,e,f){this.a=d
this.b=e
this.c=f},
bql:function bql(d){this.a=d},
bqm:function bqm(d){this.a=d},
bqk:function bqk(){},
bqo:function bqo(d){this.a=d},
bqn:function bqn(d){this.a=d},
bqp:function bqp(d,e){this.a=d
this.b=e},
bqr:function bqr(d){this.a=d},
bqs:function bqs(d){this.a=d},
bqq:function bqq(){},
bqc:function bqc(d,e,f){this.a=d
this.b=e
this.c=f},
bqe:function bqe(d,e,f){this.a=d
this.b=e
this.c=f},
bq5:function bq5(d){this.a=d},
bq6:function bq6(d){this.a=d},
bq4:function bq4(){},
bq7:function bq7(){},
bq8:function bq8(d,e){this.a=d
this.b=e},
bqx:function bqx(d){this.a=d},
bqy:function bqy(d){this.a=d},
bqz:function bqz(d,e){this.a=d
this.b=e},
bqw:function bqw(d){this.a=d},
bqA:function bqA(d,e){this.a=d
this.b=e},
bqb:function bqb(){},
bqa:function bqa(d){this.a=d},
bq9:function bq9(d,e){this.a=d
this.b=e},
bqg:function bqg(d){this.a=d},
bqf:function bqf(d){this.a=d},
bqt:function bqt(){},
bqu:function bqu(){},
bqv:function bqv(){},
bpZ:function bpZ(d,e,f){this.a=d
this.b=e
this.c=f},
bq_:function bq_(d){this.a=d},
bq1:function bq1(){},
bq0:function bq0(){},
bq2:function bq2(d){this.a=d},
bq3:function bq3(d){this.a=d},
AP:function AP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Az:function Az(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Xj:function Xj(d,e,f,g,h){var _=this
_.d=d
_.e=null
_.f=e
_.r=f
_.w=g
_.x=0
_.as=_.Q=_.z=_.y=null
_.at=h
_.c=_.a=null},
bpH:function bpH(){},
bpQ:function bpQ(d,e){this.a=d
this.b=e},
bpR:function bpR(d){this.a=d},
bpP:function bpP(){},
bpT:function bpT(d){this.a=d},
bpS:function bpS(d,e){this.a=d
this.b=e},
bpU:function bpU(d,e){this.a=d
this.b=e},
bpL:function bpL(d,e){this.a=d
this.b=e},
bpM:function bpM(d,e,f){this.a=d
this.b=e
this.c=f},
bpN:function bpN(d,e,f){this.a=d
this.b=e
this.c=f},
bpI:function bpI(d,e,f){this.a=d
this.b=e
this.c=f},
bpJ:function bpJ(d,e,f){this.a=d
this.b=e
this.c=f},
bpK:function bpK(d,e){this.a=d
this.b=e},
bpO:function bpO(d){this.a=d},
bpV:function bpV(){},
bpW:function bpW(d,e){this.a=d
this.b=e},
bpX:function bpX(d,e){this.a=d
this.b=e},
Ay:function Ay(d){this.a=d},
Xi:function Xi(d){this.d=d
this.c=this.a=null},
bpy:function bpy(){},
bpF:function bpF(d){this.a=d},
bpG:function bpG(){},
bpE:function bpE(d,e){this.a=d
this.b=e},
bpD:function bpD(d,e,f){this.a=d
this.b=e
this.c=f},
bpC:function bpC(d,e,f){this.a=d
this.b=e
this.c=f},
bpB:function bpB(d){this.a=d},
bpz:function bpz(d){this.a=d},
bpA:function bpA(d){this.a=d},
bxi:function bxi(d){this.a=d},
bxh:function bxh(d){this.a=d},
bxc:function bxc(d,e){this.a=d
this.b=e},
bxe:function bxe(){},
bxd:function bxd(){},
bxf:function bxf(d,e){this.a=d
this.b=e},
bxg:function bxg(d,e){this.a=d
this.b=e},
acf:function acf(d){this.a=d},
aVq:function aVq(d){this.a=d},
bxu:function bxu(){},
bxv:function bxv(){},
AB:function AB(d,e,f){this.c=d
this.d=e
this.a=f},
Xl:function Xl(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.r=null},
bqB:function bqB(d){this.a=d},
bqC:function bqC(d){this.a=d},
bqD:function bqD(d,e){this.a=d
this.b=e},
bqE:function bqE(d){this.a=d},
bqG:function bqG(d){this.a=d},
bqF:function bqF(d){this.a=d},
bxt:function bxt(){}},D,Q,I,E,F
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
B.acg.prototype={
pl(){var x=this,w=x.a
if(w!=null)return A.dO(w,y.m)
w=x.b
return w==null?x.b=new B.aVr(x).$0():w},
ri(d,e){return this.azG(d,e,e)},
azG(d,e,f){var x=0,w=A.o(f),v,u=2,t=[],s,r,q,p
var $async$ri=A.k(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d(d.$0(),$async$ri)
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
r=B.c_N(s)
throw A.p(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$ri,w)},
mX(d,e){var x=A.hz(d[e])
if(x==null)x=null
return x===!0},
He(){var x=0,w=A.o(y.X),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$He=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
h=A
g=A
x=7
return A.d(s.pl(),$async$He)
case 7:r=h.cs(g.ch(e,"support",null,null,null,null))
q=s.mX(r,"worker")
p=s.mX(r,"wasm")
o=s.mX(r,"mic")
n=s.mX(r,"audio")
s.mX(r,"webgpu")
m=s.mX(r,"secure")
s.mX(r,"ios")
l=A.jD(r.memory)
if(l==null)l=null
if(l==null)l=0
s.mX(r,"isolated")
k=A.jD(r.cores)
if(k!=null)C.d.ar(k)
v=new B.Rp(q,p,o,n,m,l)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=D.Wd
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$He,w)},
AT(){var x=0,w=A.o(y.M),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$AT=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=A
l=A
k=A
x=8
return A.d(s.pl(),$async$AT)
case 8:x=7
return A.d(m.e3(l.cs(k.ch(e,"storage",null,null,null,null)),y.A),$async$AT)
case 7:r=e
if(r==null){v=null
x=1
break}q=C.d.ar(A.dm(r.quota))
p=C.d.ar(A.dm(r.usage))
v=new A.alv(q,p)
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
return A.n($async$AT,w)},
b0K(){var x=y.K
A.Ds(this.pl().bM(new B.aVu(),x),x)},
pk(d,e){var x=A.jD(d[e])
x=x==null?null:C.d.ar(x)
return x==null?0:x},
aZf(d,e,f){return this.ri(new B.aVt(this,d,e,f),y.C)},
gaab(){var x,w
try{x=A.jE(b.G.sessionStorage)
return x}catch(w){return null}},
gagU(){var x=A.hz(b.G.mogtama3yTutorIsolated)
if(x==null)x=null
return x===!0},
a0z(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
try{m=b.G
l=A.hz(m.crossOriginIsolated)
if(l==null)l=f
if(l===!0)return!1
if(this.gagU())return!1
l=A.hz(m.isSecureContext)
if(l==null)l=f
if(l!==!0)return!1
x=A.cs(m.navigator)
if(!("serviceWorker" in x))return!1
w=A.a8(x.userAgent)
l=A.jD(x.maxTouchPoints)
k=l==null?f:l
v=k==null?0:k
l=A.O(x.platform)
j=l==null?f:l
u=j==null?"":j
l=A.aO("iPad|iPhone|iPod",!0,!1)
if(!l.b.test(w))i=J.c(u,"MacIntel")&&v>1
else i=!0
t=i
l=A.aO("Chrome/|Chromium/|Firefox/|Edg/",!0,!1)
s=l.b.test(w)
if(t||!s)return!1
l=A.jD(x.hardwareConcurrency)
h=l==null?f:l
r=h==null?0:h
if(r>0&&r<3)return!1
q=Date.now()
l=this.gaab()
l=l==null?f:A.O(A.ch(l,"getItem","mt.tutor.iso",f,f,f))
if(l==null)l=f
p=A.f2(l==null?"":l,f)
if(p!=null&&q-p<3e4)return!1
o=A.jE(m.localStorage)
m=o
m=m==null?f:A.O(A.ch(m,"getItem","mt.tutor.noiso",f,f,f))
if(m==null)m=f
n=A.f2(m==null?"":m,f)
if(n!=null&&q-n<2592e5)return!1
return!0}catch(g){return!1}},
afA(){var x,w,v,u,t,s,r=null
try{x=this.gaab()
if(x!=null)A.ch(x,"setItem","mt.tutor.iso",""+Date.now(),r,r)}catch(w){}x=b.G
v=A.cs(x.location)
u=A.a8(v.hash)
t=A.a8(v.search)
s=A.bO(A.a8(A.cs(x.document).baseURI),0,r).W("tutor/").j(0)
x=u.length===0?"#/masjid/tools/tutor":u
A.ch(v,"replace",s+t+x,r,r,r)},
aYZ(){var x,w=null,v=b.G,u=A.cs(v.history),t=A.jD(u.length),s=t==null?w:t
if((s==null?0:s)>1)A.ch(u,"back",w,w,w,w)
else{x=A.a8(A.cs(v.document).baseURI)
A.ch(A.cs(v.location),"replace",A.bO(x,0,w).W("./").j(0)+"#/",w,w,w)}},
a0L(d,e,f,g,h){return this.ri(new B.aVy(this,e,d,f,h,g),y.H)},
a0O(){return this.ri(new B.aVz(this),y.D)},
W0(){var x=null,w=this.a
if(w!=null)A.ch(w,"cancelRecording",x,x,x,x)},
abq(d){var x,w,v=this,u=A.O(d.text)
if(u==null)u=null
if(u==null)u=""
x=v.pk(d,"ms")
w=A.jD(d.seconds)
if(w==null)w=null
if(w==null)w=0
return new B.Gx(u,x,w,v.pk(d,"frames"),v.pk(d,"tokens"),v.mX(d,"retried"),v.pk(d,"encMs"),v.pk(d,"decMs"),v.pk(d,"featMs"))},
a8e(d){var x={}
x.words=d
return x},
ajK(d,e){return this.ri(new B.aVB(this,d,e),y._)},
b2U(d,e){return this.ri(new B.aVA(this,d,e),y._)},
Fw(d,e){return this.b0P(d,e)},
b0P(d,e){var x=0,w=A.o(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Fw=A.k(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=p==null?7:9
break
case 7:x=10
return A.d(s.pl(),$async$Fw)
case 10:x=8
break
case 9:g=p
case 8:r=g
o=A.ae(d).i("ak<1,h>")
o=A.a0(new A.ak(d,new B.aVv(),o),o.i("aH.E"))
x=11
return A.d(A.e3(A.cs(A.ch(r,"play",o,e,null,null)),y.y),$async$Fw)
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
return A.n($async$Fw,w)},
GV(){var x=null,w=this.a
if(w!=null)A.ch(w,"stopPlayback",x,x,x,x)},
Ed(){var x,w,v,u=null
try{w=this.a
x=w==null?u:A.a8(A.ch(w,"diag",u,u,u,u))
w=x
if(w==null)w=u
if(w==null)w="{}"
return w}catch(v){return"{}"}},
b24(){var x,w,v=null
try{x=this.a
if(x!=null)A.ch(x,"resetDevice",v,v,v,v)}catch(w){}},
Zh(d){var x=this.a
if(x!=null)A.ch(x,"prefetch",d,null,null,null)}}
B.Rp.prototype={}
B.Gv.prototype={
glH(){var x=this.f,w=x>0?"CPU \xd7"+x:""
x=this.a
if(x==="webgpu")return"WebGPU"
if(C.c.m(x,"webgpu"))return"WebGPU + "+w
return w.length===0?x:w}}
B.Gx.prototype={
gM1(){var x=this,w=C.d.aA(x.d/100,0),v=x.f?" (retried on 30 s)":""
return"window "+w+" s, "+x.e+" tokens"+v+", mel "+x.x+" ms, encoder "+x.r+" ms, decoder "+x.w+" ms"}}
B.Gw.prototype={}
B.kP.prototype={
gjT(){var x,w=this.a
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
$ibp:1}
B.mJ.prototype={
N(){return"WordStatus."+this.b}}
B.OG.prototype={}
B.m5.prototype={
j(d){var x,w=this.b
if(w==null)w=""
x=this.c
if(x==null)x=""
return this.d.b+":"+w+"->"+x}}
B.Fe.prototype={
gGT(){var x,w=this,v=w.d
if(v===$){x=new B.aMO(w).$0()
w.d!==$&&A.aE()
w.d=x
v=x}return v},
gEu(){var x,w,v,u,t,s=A.a([],y.s)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.d===D.WC&&u.c!=null){t=u.c
t.toString
s.push(t)}}return s},
gb_5(){return J.or(this.gGT(),new B.aMN()).gL(0)},
gqs(){var x=this.a
return x.length!==0&&this.gb_5()===x.length&&this.gEu().length===0}}
B.Ca.prototype={
N(){return"AyahStatus."+this.b}}
B.qa.prototype={}
B.ach.prototype={
YR(d,e){var x=this.a.h(0,d*1000+e)
return x==null?$.q_():x},
aJh(d){var x=this,w=B.aVD(d),v=x.c
if(v===w)return
v=v!=null&&v===B.bJn(w)?x.d+1:1
x.d=v
if(v>x.e)x.e=v
x.c=w},
aeN(){var x=Date.now(),w=B.aVD(new A.b2(x,0,!1))
x=this.c
return x===w||x===B.bJn(w)?this.d:0},
aiP(d,e,f,g){var x=this,w=new A.b2(Date.now(),0,!1),v=x.YR(d,e),u=g?C.e.cA(v.b+1,0,100):0,t=g&&u>=f?D.e1:D.m7,s=new B.qa(t,u,w.hA()),r=d*1000+e
x.a.n(0,r,s)
x.b.D(0,r)
x.aJh(w)
return s},
YI(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.c8[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.q_():s).a===D.e1)++u}return u},
aYX(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.c8[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.q_():s).a===D.m7)++u}return u},
gahY(){var x=this.a,w=A.w(x).i("c9<2>")
return new A.aG(new A.c9(x,w),new B.aVE(),w.i("aG<M.E>")).gL(0)},
gamP(){var x=this.a,w=A.w(x).i("bi<1>")
w=A.nt(new A.bi(x,w),new B.aVF(),w.i("M.E"),y.S)
w=A.ev(w,A.w(w).i("M.E"))
x=A.a0(w,A.w(w).c)
C.b.lc(x)
return x},
cP(){var x,w,v,u,t,s=this,r=y.N,q=A.x(r,y.L)
for(x=s.a,x=new A.dQ(x,A.w(x).i("dQ<1,2>")).ga_(0),w=y.t;x.u();){v=x.d
u=v.a
t=v.b
q.n(0,""+u,A.a([t.a.a,t.b,t.c.a],w))}x=s.b
x=A.a0(x,A.w(x).c)
return A.J(["v",1,"rows",q,"dirty",x,"last",s.c,"streak",s.d,"best",s.e],r,y.z)},
aUY(){var x,w,v,u,t,s,r,q,p,o=A.a([],y.Z)
for(x=this.b,x=A.bAu(x,300,A.w(x).c),x=new A.Gf(J.av(x.a),x.b,A.w(x).i("Gf<1>")),w=y.N,v=y.z,u=this.a;x.u();){t=x.gK()
s=C.e.ba(t,1000)
t=C.e.ah(t,1000)
r=s*1000+t
q=u.h(0,r)
q=(q==null?$.q_():q).a===D.e1?"memorized":"learning"
p=u.h(0,r)
if(p==null)p=$.q_()
r=u.h(0,r)
o.push(A.J(["surah",s,"ayah",t,"status",q,"perfect_count",p.b,"updated_at",(r==null?$.q_():r).c.iX()],w,v))}return o},
aZx(d){var x,w,v,u,t,s,r
for(x=d.length,w=this.a,v=this.b,u=0;u<d.length;d.length===x||(0,A.B)(d),++u){t=d[u]
s=A.ex(t.h(0,"surah"))*1000+A.ex(t.h(0,"ayah"))
r=w.h(0,C.e.ba(s,1000)*1000+C.e.ah(s,1000))
if((r==null?$.q_():r).c.iX()===t.h(0,"updated_at"))v.I(0,s)}},
aZF(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(x=J.av(d),w=this.b,v=this.a,u=y.f,t=!1;x.u();){s=x.gK()
if(!u.b(s))continue
r=A.bn(s.h(0,"surah"))
q=r==null?null:C.d.bU(r)
r=A.bn(s.h(0,"ayah"))
p=r==null?null:C.d.bU(r)
o=A.fp(A.f(s.h(0,"updated_at")))
r=!0
if(q!=null)if(p!=null)if(o!=null)r=!(q>=1&&q<=114&&p>=1&&p<=I.c8[q-1].a[1])
if(r)continue
n=B.c54(s.h(0,"status"))
if(n===D.m6)continue
r=q*1000+p
m=v.h(0,r)
if(m!=null){l=m.c
k=o.a
j=l.a
if(k<=j)l=k===j&&o.b>l.b
else l=!0
l=!l}else l=!1
if(l)continue
l=A.bn(s.h(0,"perfect_count"))
l=l==null?null:C.d.bU(l)
v.n(0,r,new B.qa(n,C.e.cA(l==null?0:l,0,100),o.hA()))
w.I(0,r)
t=!0}return t}}
B.Rn.prototype={
E2(d,e,f,g,h){var x=this,w=g==null?x.a:g,v=h==null?x.b:h,u=d==null?x.c:d,t=e==null?x.d:e
return new B.Rn(w,v,u,t,f==null?x.e:f)},
aTq(d){var x=null
return this.E2(x,x,d,x,x)},
aen(d){var x=null
return this.E2(x,d,x,x,x)},
aTu(d){var x=null
return this.E2(x,x,x,x,d)},
aSV(d){var x=null
return this.E2(d,x,x,x,x)},
aTr(d){var x=null
return this.E2(x,x,x,d,x)},
cP(){var x=this
return A.J(["n",x.a,"r",x.b,"auto",x.c,"hide",x.d,"in",x.e],y.N,y.z)}}
B.Ek.prototype={
N(){return"ModelState."+this.b}}
B.Ro.prototype={
Yc(){var x=this.Q
return x==null?this.Q=new B.aVG(this).$0():x},
oV(d){return this.alm(d)},
alm(d){var x=0,w=A.o(y.H),v=this
var $async$oV=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:v.b=d
v.X()
x=2
return A.d(A.ig("mt.tutor.settings",C.a1.ht(d.cP(),null)),$async$oV)
case 2:return A.m(null,w)}})
return A.n($async$oV,w)},
x3(){var x=0,w=A.o(y.H),v=this,u
var $async$x3=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:v.X()
x=2
return A.d(A.ig("mt.tutor.progress",C.a1.ht(v.c.cP(),null)),$async$x3)
case 2:u=v.as
if(u!=null)u.aE()
v.as=A.cF(C.z,v.garH())
return A.m(null,w)}})
return A.n($async$x3,w)},
GE(d,e,f){return this.am0(d,e,f)},
am0(d,e,f){var x=0,w=A.o(y.H),v=this
var $async$GE=A.k(function(g,h){if(g===1)return A.l(h,w)
for(;;)switch(x){case 0:v.z=new A.bQ(d,e,f)
x=2
return A.d(A.ig("mt.tutor.last",C.a1.ht(A.J(["s",d,"f",e,"t",f],y.N,y.S),null)),$async$GE)
case 2:return A.m(null,w)}})
return A.n($async$GE,w)},
zJ(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$zJ=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=s.f
if(n===D.OA||n===D.hU){x=1
break}s.f=D.OA
s.y=null
s.X()
u=4
n=A.k7().gep().h(0,"tutor_device")
if(n==null)n="auto"
p=A.k7().gep().h(0,"tutor_threads")
p=A.f2(p==null?"":p,null)
if(p==null)p=0
x=7
return A.d(s.a.aZf(new B.aVH(s),n,p),$async$zJ)
case 7:s.x=e
s.f=D.hU
n=A.k7().gep().h(0,"debug")
if(n==="1"){n=s.x
n.toString
r=n
A.tu().$1("[tutor] model ready: "+r.a+" "+r.b+" threads="+r.f+" isolated="+r.r+" in "+r.c+" ms (warm-up "+r.w+" ms, cached before: "+r.d+")")}u=2
x=6
break
case 4:u=3
m=t.pop()
n=A.Y(m)
if(n instanceof B.kP){q=n
s.f=D.azm
s.y=q
n=A.k7().gep().h(0,"debug")
if(n==="1")A.tu().$1("[tutor] model failed: "+A.f(q))}else throw m
x=6
break
case 3:x=2
break
case 6:s.X()
case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$zJ,w)},
ut(){var x=0,w=A.o(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ut=A.k(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:if(r.at){x=1
break}q=null
try{k=$.ad().b
k===$&&A.b()
k=k.gc2().e.a
q=(k==null?null:k.r)!=null}catch(d){x=1
break}if(!q){x=1
break}r.at=!0
u=4
k=$.ad().b
k===$&&A.b()
p=k
x=7
return A.d(p.cU("quran_tutor_progress").h4("surah, ayah, status, perfect_count, updated_at"),$async$ut)
case 7:o=a1
n=r.c.aZF(o)
m=0,k=y.N,i=y.z
case 8:if(!(m<25)){x=10
break}l=r.c.aUY()
if(J.be(l)===0){x=10
break}h=p
g=A.J(["p_rows",l],k,i)
f=h.CW
f===$&&A.b()
f.b.E(0,A.md(h.x,k,k))
x=11
return A.d(f.b2r("quran_tutor_save",!1,g,i),$async$ut)
case 11:r.c.aZx(l)
case 9:++m
x=8
break
case 10:x=12
return A.d(A.ig("mt.tutor.progress",C.a1.ht(r.c.cP(),null)),$async$ut)
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
return A.n($async$ut,w)},
FL(d){return this.b26(d)},
b26(d){var x=0,w=A.o(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$FL=A.k(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:p=B.bAG(t.c.cP()).cP()
y.f.a(p.h(0,"rows")).dK(0,new B.aVI(d))
t.c=B.bAG(p)
x=2
return A.d(t.x3(),$async$FL)
case 2:v=4
s=$.ad().b
s===$&&A.b()
r=s.gc2().e.a
x=(r==null?null:r.r)!=null?7:8
break
case 7:r=y.z
x=9
return A.d(s.bi("quran_tutor_reset",A.J(["p_surah",d],y.N,r),r),$async$FL)
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
return A.n($async$FL,w)}}
B.vg.prototype={
V(){var x=$.Jp()
return new B.Vk(x,new A.b0(C.M,$.a7()))}}
B.Vk.prototype={
aa(){var x,w,v=this
v.ao()
x=v.d
x.a5(v.gn6())
w=y.a
x.Yc().bM(new B.bi6(v),w)
H.aLf().bM(new B.bi7(v),w).hr(new B.bi8())
A.Ds(H.bA6(),y.y)},
ve(){if(this.c!=null)this.t(new B.bhT())},
l(){var x,w=this
w.d.S(w.gn6())
x=w.e
x.p$=$.a7()
x.U$=0
w.aq()},
Jn(){var x=0,w=A.o(y.H),v,u=this,t,s
var $async$Jn=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:s=u.d
x=3
return A.d(s.oV(s.b.aTq(!0)),$async$Jn)
case 3:t=s.a
t.b0K()
if(t.a0z()){t.afA()
x=1
break}s.zJ()
case 1:return A.m(v,w)}})
return A.n($async$Jn,w)},
vf(d,e,f){return this.aHE(d,e,f)},
aOM(d){return this.vf(d,null,null)},
aHE(d,e,f){var x=0,w=A.o(y.H),v,u=this,t,s,r
var $async$vf=A.k(function(g,h){if(g===1)return A.l(h,w)
for(;;)switch(x){case 0:if(u.w==null){u.c.R(y.q).f.aO(A.bs(null,null,null,null,null,C.k,null,A.i("\u0644\u062d\u0638\u0629\u2026 \u0628\u0646\u062c\u0647\u0651\u0632 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641",null,null,null,null,null,null,null,null,null),null,C.z,null,null,null,null,null,null,null,null,null,null))
x=1
break}x=e!=null&&f!=null?3:5
break
case 3:t=new A.R(e,f)
x=4
break
case 5:s=u.c
s.toString
x=6
return A.d(B.c8L(s,d),$async$vf)
case 6:t=h
case 4:if(t==null||u.c==null){x=1
break}x=7
return A.d(u.d.GE(d,t.a,t.b),$async$vf)
case 7:s=u.c
if(s==null){x=1
break}r=y.z
x=8
return A.d(A.al(s,!1).cV(A.cW(new B.bhZ(u,d,t),null,r),r),$async$vf)
case 8:if(u.c!=null)u.t(new B.bi_())
case 1:return A.m(v,w)}})
return A.n($async$vf,w)},
A(d){var x=null,w=this.d,v=w.b,u=A.a([],y.p),t=w.a
if(t.gagU()&&!A.al(d,!1).VY())u.push(A.ct(x,x,x,x,D.aer,x,x,t.gaYY(),x,x,x,"\u0631\u062c\u0648\u0639 \u0644\u0645\u0633\u062c\u062f\u064a",x))
t=v.e
if(t)u.push(A.ct(x,x,x,x,D.afq,x,x,new B.bi2(d),x,x,x,"\u062a\u0642\u062f\u0651\u0645\u064a",x))
u.push(A.ct(x,x,x,x,D.Cn,x,x,new B.bi3(d),x,x,x,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",x))
if(!w.e)w=D.aoY
else w=t?this.aDZ():this.aEp()
return M.w0(u,w,"\u0627\u0644\u0645\u062d\u0641\u0651\u0638")},
aEp(){var x,w,v,u,t,s,r,q,p=null,o=this.d.d
if(o==null)o=D.Wd
x=this.r
w=x==null?p:x.a-x.b
if(!(o.a&&o.b))v="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u062f\u0639\u0645 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638. \u062c\u0631\u0651\u0628 \u0623\u062d\u062f\u062b \u0646\u0633\u062e\u0629 \u0645\u0646 Chrome (\u0623\u0646\u062f\u0631\u0648\u064a\u062f) \u0623\u0648 Safari (\u0622\u064a\u0641\u0648\u0646)."
else if(!o.f)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0641\u062a\u062d \u0639\u0644\u0649 https \u0639\u0634\u0627\u0646 \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0627\u064a\u0643."
else v=!o.c||!o.d?"\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u0633\u0645\u062d \u0628\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0646 \u0627\u0644\u0645\u0627\u064a\u0643.":p
x=y.p
u=A.a([D.aL_,C.aj],x)
for(t=0;t<4;++t){s=D.aqF[t]
u.push(new A.a_(C.bC,A.ai(A.a([A.c8(s.a,C.a6,p,18),C.ar,new A.dD(1,C.aS,A.i(s.b,p,p,p,p,p,G.Vd,p,p,p),p)],x),C.B,C.f,C.h,0,p,p),p))}u=A.ac(u,C.B,C.f,C.h)
s=A.a([D.b39,C.U,A.i("\u0647\u0646\u062d\u0645\u0651\u0644 \u0645\u0644\u0641 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 (\u062d\u0648\u0627\u0644\u064a "+E.aZ(105)+" \u0645\u064a\u062c\u0627) \u0648\u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0648\u0628\u0639\u062f \u0643\u062f\u0647 \u0628\u064a\u0641\u062a\u062d \u0645\u0646 \u063a\u064a\u0631 \u062a\u062d\u0645\u064a\u0644. \u064a\u064f\u0641\u0636\u0651\u0644 \u062a\u0643\u0648\u0646 \u0639\u0644\u0649 Wi-Fi.",p,p,p,p,p,F.al,p,p,p)],x)
if(w!=null){r=w<3e8
q=r?"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0645\u062a\u0635\u0641\u062d \u0642\u0644\u064a\u0644\u0629 ("+E.aZ(C.d.ar(w/1e6))+" \u0645\u064a\u062c\u0627) \u2014 \u0641\u0636\u0651\u064a \u0634\u0648\u064a\u0629 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0623\u0648\u0644.":"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629: \u0643\u0641\u0627\u064a\u0629 \u2713"
C.b.E(s,A.a([C.U,A.i(q,p,p,p,p,p,A.cz(p,p,r?D.d0:C.cs,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x))}r=o.w
if(r>0&&r<3)C.b.E(s,A.a([C.U,D.b2H],x))
x=A.a([new E.cZ(u,C.af,C.aA,p,!0,p),new E.cZ(A.ac(s,C.B,C.f,C.h),C.af,C.aA,p,!1,p),D.ba5,C.U],x)
if(v!=null)x.push(new E.cZ(A.i(v,p,p,p,p,p,D.aVD,p,p,p),C.af,C.aA,p,!1,p))
else x.push(A.jh(D.adM,p,D.aYY,this.gaHO(),A.im(C.q,C.a5,D.aNx,p,p,p,p)))
x.push(C.aJ)
x.push(D.Wc)
return x},
aDZ(){var x,w,v=this,u=null,t=v.d,s=t.c,r=v.e,q=C.c.aj(r.a.a),p=q.length===0,o=p?C.ux:H.bNT(q),n=t.z,m=A.aQ(v.aaN(C.fy,E.aZ(s.gahY())+" \u0622\u064a\u0629","\u062d\u0641\u0638\u062a\u0647\u0627"),1),l=E.aZ(s.aeN()),k=s.c,j=Date.now()
k=k===B.aVD(new A.b2(j,0,!1))?"\u0648\u0631\u0627 \u0628\u0639\u0636 \u2014 \u0643\u0645\u0651\u0644!":"\u0633\u0645\u0651\u0639 \u0627\u0644\u0646\u0647\u0627\u0631\u062f\u0647 \u0639\u0634\u0627\u0646 \u062a\u0643\u0645\u0651\u0644"
j=y.p
k=A.a([new B.El(t,!1,u),A.ai(A.a([m,C.ar,A.aQ(v.aaN(C.BH,l+" \u064a\u0648\u0645",k),1)],j),C.j,C.f,C.h,0,u,u),C.S],j)
if(n!=null){t=H.jG(n.a)
m=n.b
l=n.c
m=m===l?"\u0622\u064a\u0629 "+E.aZ(m):"\u0627\u0644\u0622\u064a\u0627\u062a "+E.aZ(m)+"\u2013"+E.aZ(l)
k.push(new E.cZ(A.ai(A.a([D.aeX,C.aV,A.aQ(A.ac(A.a([D.aXj,A.i(t+" \u2014 "+m,u,u,u,u,u,F.b_,u,u,u)],j),C.B,C.f,C.h),1),P.kW],j),C.j,C.f,C.h,0,u,u),C.af,C.aA,new B.bhW(v,n),!0,u))}t=C.i.bo(0.08)
k.push(A.bu(u,C.n,!1,u,!0,C.k,u,A.bx(),r,u,u,u,u,u,2,A.fq(u,new A.ek(4,A.aa(14),C.w),u,u,u,u,u,u,!0,u,u,u,u,u,u,t,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,C.pE,"\u0639\u0627\u064a\u0632 \u062a\u062d\u0641\u0638 \u0633\u0648\u0631\u0629 \u0625\u064a\u0647\u061f",u,u,u,u,u,u,u,u,u,!0,!0,!1,u,C.nu,u,u,u,u,u,u,u,u,u,u,u,u),C.t,!0,u,!0,u,!1,u,C.E,u,u,u,u,u,u,u,u,u,1,u,u,!1,"\u2022",u,new B.bhX(v),u,u,u,!1,u,u,!1,u,!0,u,C.C,u,u,u,u,u,u,u,u,u,u,u,C.cW,!0,C.y,u,C.G,u,u,u,u))
k.push(C.S)
if(!p){t=A.a([],j)
if(o.length===0)t.push(D.b0s)
for(r=o.length,x=0;x<o.length;o.length===r||(0,A.B)(o),++x)t.push(v.Kn(o[x]))
C.b.E(k,t)}else{t=A.a([D.aBF,D.aC8,v.Kn(1)],j)
for(w=114;w>=78;--w)t.push(v.Kn(w))
t.push(C.U)
r=v.f
p=A.c8(r?C.tY:C.kO,C.a6,u,u)
t.push(A.hb(p,A.i(r?"\u0627\u062e\u0641\u064a \u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631":"\u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631 (\u0627\u0644\u0628\u0642\u0631\u0629 \u0644\u062d\u062f \u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a)",u,u,u,u,u,C.el,u,u,u),new B.bhY(v),u))
if(v.f)for(w=2;w<=77;++w)t.push(v.Kn(w))
C.b.E(k,t)}k.push(C.aj)
k.push(D.xx)
return k},
aaN(d,e,f){var x=null,w=y.p
return new E.cZ(A.ai(A.a([A.c8(d,C.q,x,x),C.ar,A.aQ(A.ac(A.a([A.i(e,x,x,x,x,x,F.b_,x,x,x),A.i(f,x,1,C.ag,x,x,D.aUp,x,x,x)],w),C.B,C.f,C.h),1)],w),C.j,C.f,C.h,0,x,x),C.af,C.L,x,!1,x)},
Kn(d){var x,w=null,v=this.d.c,u=I.c8[d-1].a[1],t=v.YI(d),s=t/u,r=y.p,q=A.bl(A.h9(C.W,A.a([A.byw(C.dI,G.c5,w,w,w,w,w,3,s,w),A.i(E.aZ(d),w,w,w,w,w,R.VD,w,w,w)],r),C.k,C.cd,w),36,36),p=A.i(H.jG(d),w,w,w,w,w,D.aRi,w,w,w)
if(t===0)x=E.aZ(u)+" \u0622\u064a\u0629"
else x=t===u?"\u0645\u062d\u0641\u0648\u0638\u0629 \u0643\u0644\u0647\u0627 \u2713":"\u062d\u0641\u0638\u062a "+E.aZ(t)+" \u0645\u0646 "+E.aZ(u)
r=A.a([q,C.fW,A.aQ(A.ac(A.a([p,A.i(x,w,w,w,w,w,A.cz(w,w,t===u?G.c5:C.cs,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),C.B,C.f,C.h),1)],r)
if(s>0&&s<1)r.push(A.i(E.aZ(C.d.ar(s*100))+"\u066a",w,w,w,w,w,D.Vp,w,w,w))
r.push(D.adP)
return new E.cZ(A.ai(r,C.j,C.f,C.h,0,w,w),L.Aq,C.ex,new B.bi0(this,d),!1,w)}}
B.El.prototype={
A(d){var x,w,v,u,t,s,r=null,q=this.c
switch(q.f.a){case 2:if(this.d)return C.aE
return D.aBx
case 3:x=q.y
x=A.a([A.i(x==null?"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0634\u063a\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638":B.Ji(x),r,r,r,r,r,D.wS,r,r,r)],y.p)
w=q.y
if(w!=null)x.push(new B.AB(w,"model load",r))
x.push(C.U)
x.push(A.bFF(C.lM,r,q.gaZe()))
return new E.cZ(A.ac(x,C.B,C.f,C.h),C.af,C.aA,r,!1,r)
case 0:case 1:v=q.w
u=q.r
q=v>0
t=q?C.d.cA(u/v,0,1):r
s=q&&u<v
q=A.i(s?"\u0628\u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026 "+E.aZ(C.d.ar(u/1e6))+" \u0645\u0646 "+E.aZ(C.d.ar(v/1e6))+" \u0645\u064a\u062c\u0627":"\u0628\u0646\u062c\u0647\u0651\u0632 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026",r,r,r,r,r,C.wV,r,r,r)
x=A.aa(8)
w=y.p
x=A.a([q,C.K,A.n6(x,A.DX(C.dI,C.q,7,s?t:r),C.bm)],w)
if(!this.d)C.b.E(x,A.a([C.U,D.aZr],w))
return new E.cZ(A.ac(x,C.B,C.f,C.h),C.af,C.aA,r,!1,r)}}}
B.T7.prototype={
A(d){var x=null,w=D.d0.bo(0.1),v=A.aa(14),u=A.cT(D.d0.bo(0.4),1)
return A.au(x,A.ai(A.a([D.aeJ,C.ar,A.aQ(A.i(this.c?"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0627\u0644\u062a\u062c\u0648\u064a\u062f.":"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0623\u062d\u0643\u0627\u0645 \u0627\u0644\u062a\u062c\u0648\u064a\u062f. \u0627\u0642\u0631\u0627 \u0639\u0644\u0649 \u0634\u064a\u062e \u0623\u0648 \u0645\u062d\u0641\u0651\u0638 \u0641\u064a \u0645\u0633\u062c\u062f\u0643 \u0643\u0645\u0627\u0646.",x,x,x,x,x,D.Vv,x,x,x),1)],y.p),C.B,C.f,C.h,0,x,x),C.m,x,x,new A.aq(w,x,u,v,x,x,C.u),x,x,C.aA,C.aU,x,x,x)}}
B.Bj.prototype={
N(){return"_Phase."+this.b}}
B.AA.prototype={
V(){return new B.Xk($.Jp(),D.k2)}}
B.Xk.prototype={
gi7(){var x=this.e
return x===$?this.e=this.a.d:x},
gyr(){var x,w=this.a,v=w.f
w=w.c
x=this.gi7()
return H.Jf(w,x,v.vn(w,x)).b},
aa(){var x,w=this
w.ao()
x=w.d
x.a5(w.gn6())
x.Yc()
x.a.Zh(B.aru(w.a.c,w.gi7()))},
ve(){if(this.c!=null)this.t(new B.bpY())},
l(){var x,w=this,v=w.d
v.S(w.gn6())
x=w.Q
if(x!=null)x.aE()
v=v.a
v.GV()
v.W0()
w.aq()},
Sn(d){var x,w,v=this
if(v.f===D.qa)v.d.a.W0()
x=v.d.a
x.GV()
w=v.Q
if(w!=null)w.aE()
v.t(new B.bqd(v,d))
x.Zh(B.aru(v.a.c,d))
w=v.a
if(d<w.e)x.Zh(B.aru(w.c,d+1))},
KB(d){return this.aF_(d)},
aF_(d){var x=0,w=A.o(y.H),v,u=this,t,s,r,q,p
var $async$KB=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:if(u.f===D.q9){u.d.a.GV()
u.t(new B.bqh(u))
x=1
break}t=u.r!=null?D.he:D.k2
u.t(new B.bqi(u))
s=u.d
r=A.a([B.aru(u.a.c,u.gi7())],y.s)
q=d==null?s.b.b:d
x=3
return A.d(s.a.Fw(r,q),$async$KB)
case 3:p=f
if(u.c==null||u.f!==D.q9){x=1
break}u.t(new B.bqj(u,t,p))
case 1:return A.m(v,w)}})
return A.n($async$KB,w)},
JE(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$JE=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.d
if(l.f!==D.hU){x=1
break}p=l.a
p.GV()
r=B.BR(s.gyr()).length
s.t(new B.bql(s))
o=s.Q
if(o!=null)o.aE()
s.Q=A.kO(C.fw,new B.bqm(s))
u=4
o=B.bCp(r)
n=A.d7(0,0,0,350*r,0,0)
x=7
return A.d(p.a0L(l.b.c,o,n,new B.bqn(s),new B.bqo(s)),$async$JE)
case 7:u=2
x=6
break
case 4:u=3
k=t.pop()
l=A.Y(k)
if(l instanceof B.kP){q=l
l=s.Q
if(l!=null)l.aE()
if(s.c!=null)s.t(new B.bqp(s,q))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$JE,w)},
yn(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$yn=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.f!==D.qa){x=1
break}m=s.Q
if(m!=null)m.aE()
s.t(new B.bqr(s))
s.Q=A.kO(C.hu,new B.bqs(s))
l=new A.A4()
$.BU()
l.mS()
r=l
u=4
m=s.d.a
x=7
return A.d(m.a0O(),$async$yn)
case 7:q=e
if(q.b<0.8){s.aOL("\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0642\u0635\u064a\u0631 \u0623\u0648\u064a \u2014 \u062f\u0648\u0633 \xab\u0633\u0645\u0651\u0639\xbb \u0648\u0627\u0642\u0631\u0627 \u0627\u0644\u0622\u064a\u0629 \u0643\u0644\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb.")
x=1
break}x=8
return A.d(m.ajK(q,B.BR(s.gyr()).length),$async$yn)
case 8:p=e
s.ch=A.d7(0,0,r.gXi(),0,0,0)
k=A.k7().gep().h(0,"debug")
if(k==="1"){o=B.bOa(m.Ed())
A.tu().$1("[tutor] "+s.a.c+":"+s.gi7()+" audio="+C.d.aA(q.b,1)+"s infer="+p.b+"ms total="+r.gz6()+"ms "+p.gM1()+" text="+p.a)
A.tu().$1("[tutor] stages: "+A.f(o))
s.ax="\u062a\u0633\u062c\u064a\u0644\u0643 "+C.d.aA(p.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(p.b/1000,2)+" \u062b\n"+p.gM1()+"\n"+A.f(o)+"\n"+p.a}s.a60(p.a)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.Y(i)
if(m instanceof B.kP){n=m
m=A.k7().gep().h(0,"debug")
if(m==="1")A.tu().$1("[tutor] check failed: "+A.f(n)+"\n"+s.d.a.Ed())
s.UR(B.Ji(n),n)}else throw i
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$yn,w)},
UR(d,e){var x=this,w=x.Q
if(w!=null)w.aE()
if(x.c==null)return
x.t(new B.bqc(x,d,e))},
aOL(d){return this.UR(d,null)},
a60(d){var x,w,v,u,t,s=this,r={},q=s.Q
if(q!=null)q.aE()
if(s.c==null)return
x=B.bMh(s.gyr(),d)
r.a=null
if(C.c.aj(x.c).length!==0){q=s.d
w=q.c
v=s.a.c
u=s.gi7()
t=x.gqs()
r.a=w.aiP(v,u,q.b.a,t)
q.x3()}s.t(new B.bqe(r,s,x))},
HV(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$HV=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:g=s.d
if(g.f!==D.hU){x=1
break}s.t(new B.bq5(s))
l=s.Q
if(l!=null)l.aE()
s.Q=A.kO(C.hu,new B.bq6(s))
k=new A.A4()
$.BU()
k.mS()
r=k
u=4
l=g.a
x=7
return A.d(l.b2U(B.aru(s.a.c,s.gi7()),B.BR(s.gyr()).length),$async$HV)
case 7:q=e
p=B.bOa(l.Ed())
o="\u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a "+C.d.aA(q.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(q.b/1000,2)+" \u062b (\u0627\u0644\u0643\u0644 "+C.d.aA(r.gz6()/1000,2)+" \u062b)\n"+q.gM1()+"\n"+A.f(p)+"\n"+q.a
A.tu().$1("[tutor-debug] "+s.a.c+":"+s.gi7()+" audio="+C.d.aA(q.c,1)+"s infer="+q.b+"ms total="+r.gz6()+"ms "+q.gM1()+" text="+q.a)
A.tu().$1("[tutor-debug] stages: "+A.f(p))
s.ch=A.d7(0,0,r.gXi(),0,0,0)
s.a60(q.a)
n=s.r
if(n!=null){l=n.gqs()
j=n.b
i=A.ae(j).i("aG<1>")
j=A.a0(new A.aG(j,new B.bq7(),i),i.i("M.E"))
A.tu().$1("[tutor-debug] perfect="+l+" ops="+A.f(j))}s.t(new B.bq8(s,o))
u=2
x=6
break
case 4:u=3
f=t.pop()
l=A.Y(f)
if(l instanceof B.kP){m=l
A.tu().$1("[tutor-debug] failed: "+A.f(m)+"\n"+g.a.Ed())
s.UR(B.Ji(m),m)}else throw f
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$HV,w)},
gTK(){var x,w,v
for(x=this.a.d,w=this.d;v=this.a,x<=v.e;++x){v=w.c.a.h(0,v.c*1000+x)
if((v==null?$.q_():v).a!==D.e1)return!1}return!0},
A(d){var x,w=this,v=null,u=w.d,t=u.c.YR(w.a.c,w.gi7()),s=u.b,r=s.d&&!w.x&&w.f!==D.he,q=H.jG(w.a.c),p=y.p,o=A.a([A.ct(v,v,v,v,D.Cn,v,v,new B.bqx(d),v,v,v,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",v)],p),n=w.axb(),m=A.i("\u0622\u064a\u0629 "+E.aZ(w.gi7()),v,v,v,v,v,C.jQ,v,v,v),l=E.aZ(w.gi7()-w.a.d+1),k=w.a
s=A.a([A.ai(A.a([m,C.by,A.i("("+l+" \u0645\u0646 "+E.aZ(k.e-k.d+1)+")",v,v,v,v,v,F.al,v,v,v),C.d6,w.aIt(t,s.a)],p),C.j,C.f,C.h,0,v,v),C.S],p)
if(r)s.push(w.aDU())
else{m=w.r
if(m!=null){l=w.f
l=l!==D.qa&&l!==D.lZ}else l=!1
if(l)s.push(w.avo(m))
else s.push(A.i(w.gyr()+" \ufd3f"+E.aZ(w.gi7())+"\ufd3e",v,v,v,v,v,D.ie,C.ad,C.aF,v))}s=A.a([new B.El(u,!0,v),n,C.K,new E.cZ(A.ac(s,C.aa,C.f,C.h),D.a9d,C.aA,v,!1,v)],p)
n=w.r
if(n!=null&&w.f===D.he)s.push(w.aQ3(n))
if(w.r!=null&&w.f===D.he&&w.ch!=null){x=C.d.ar(C.e.ba(w.ch.a,1000)/100)
s.push(new A.a_(C.bC,A.i("\u0627\u062a\u0631\u0627\u062c\u0639 \u0641\u064a "+(E.aZ(C.e.ba(x,10))+"\u066b"+E.aZ(C.e.ah(x,10)))+" \u062b",v,v,v,v,v,F.al,C.ad,v,v),v))}n=w.as
if(n!=null)s.push(new A.a_(C.aA,A.i(n,v,v,v,v,v,D.wS,v,v,v),v))
if(w.as!=null&&w.at!=null){n=w.at
n.toString
s.push(new B.AB(n,"check "+w.a.c+":"+w.gi7(),v))}s.push(w.avO())
s.push(C.aj)
s.push(A.rG(C.q,C.L,v,new B.bqy(w),D.aY9,D.b_q,u.b.d))
n=w.a
if(n.e>n.d){n=w.gTK()
s.push(new E.cZ(A.ai(A.a([D.ad0,C.aV,A.aQ(A.ac(A.a([D.b09,A.i(w.gTK()?"\u062d\u0641\u0638\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u0633\u0645\u0651\u0639\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636 \u0645\u0646 \u063a\u064a\u0631 \u0645\u0627 \u062a\u0634\u0648\u0641\u0647\u0627":"\u0644\u0645\u0627 \u062a\u062e\u0644\u0651\u0635 \u0627\u0644\u0622\u064a\u0627\u062a \u0648\u0627\u062d\u062f\u0629 \u0648\u0627\u062d\u062f\u0629\u060c \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0644\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636",v,v,v,v,v,F.al,v,v,v)],p),C.B,C.f,C.h),1),P.kW],p),C.j,C.f,C.h,0,v,v),C.af,C.aA,new B.bqz(w,d),n,v))}n=A.k7().gep().h(0,"debug")
if(n==="1"){p=A.a([C.K,A.eG(D.adL,D.b_7,u.f===D.hU&&w.f!==D.lZ?w.gawm():v,v)],p)
n=w.ax
if(n!=null)p.push(new A.a_(C.hw,A.rw(n,F.al,v,v),v))
n=u.x
if(n!=null){m=n.a
l=n.b
n=n.glH()
u=u.x
p.push(A.i("model: "+m+" "+l+" \u2014 "+n+", isolated "+u.r+", load "+u.c+" ms (warm-up "+u.w+" ms)",v,v,v,v,v,F.al,v,v,v))}p.push(A.bH(D.b_M,v,v,v,new B.bqA(w,d),v,v))
C.b.E(s,p)}s.push(C.K)
s.push(D.xx)
return M.w0(o,s,q)},
axb(){var x=this.a,w=x.e-x.d+1
if(w===1)return C.aE
return A.bl(A.pa(new B.bqa(this),w,null,C.az,new B.bqb()),36,null)},
aIt(d,e){var x,w,v,u,t,s,r,q=null
if(d.a===D.e1)return D.aL6
x=d.b
w=E.aZ(x)
v=E.aZ(e)
u=A.a([],y.p)
for(t=0;t<e;++t){s=t<x
r=s?C.df:D.acy
u.push(new A.a_(D.a9N,A.c8(r,s?G.c5:C.eZ,q,16),q))}return A.Rg(A.ai(u,C.j,C.f,C.V,0,q,q),q,"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637 \u0648\u0631\u0627 \u0628\u0639\u0636: "+w+" \u0645\u0646 "+v,q,q)},
aDU(){var x=null
return A.dg(!1,A.aa(12),!0,A.au(x,D.a5o,C.m,x,x,new A.aq(L.r5,x,x,A.aa(12),x,x,C.u),x,x,x,D.a8U,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,x,new B.bqg(this),x,x,x,x,x,x,x)},
avo(d){var x,w,v,u,t,s=null,r=A.a([],y.R)
for(x=d.a,w=0;w<x.length;++w){v=J.b5(d.gGT(),w)
A:{if(D.h8===v){u=D.ie.cB(G.c5)
break A}if(D.pX===v){u=D.ie.WA(D.d0,C.h_,D.d0)
break A}if(D.pY===v){u=D.ie.WA(D.dH,C.h_,D.dH)
break A}u=D.ie.WA(C.eZ,C.pt,C.c4)
break A}t=x[w]
r.push(new A.f4(t.a,s,s,C.be,s,s,s,s,s,s,u))
r.push(L.wK)}x=E.aZ(this.gi7())
r.push(A.dX(s,s,s,s,s,s,s,s,s,D.ie.cB(C.a6),"\ufd3f"+x+"\ufd3e"))
return A.QM(A.dX(r,s,s,s,s,s,s,s,s,s,s),s,C.ad,C.aF)},
aQ3(d){var x,w,v,u,t,s,r=this.w
if(C.c.aj(d.c).length===0)return D.b9L
if(d.gqs()){x=r==null
if((x?null:r.a)===D.e1&&r.b===this.d.b.a)x="\u0627\u0644\u0622\u064a\u0629 \u062f\u064a \u0627\u062a\u062d\u0641\u0638\u062a! \u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0627\u0644\u0644\u064a \u0628\u0639\u062f\u0647\u0627."
else x=!x&&r.a!==D.e1?"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637. \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0645\u0627\u0646 "+E.aZ(this.d.b.a-r.b)+" \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629.":"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637."
return new B.AP(G.c5,C.df,"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713",x,null)}x=d.gGT()
w=J.d5(x)
v=w.hP(x,new B.bqt()).gL(0)
u=w.hP(x,new B.bqu()).gL(0)
t=w.hP(x,new B.bqv()).gL(0)
x=A.a([],y.s)
if(u>0)x.push(E.aZ(u)+" \u063a\u0644\u0637")
if(v>0)x.push(E.aZ(v)+" \u0631\u0627\u062c\u0639\u0647\u0627")
if(t>0)x.push(E.aZ(t)+" \u0646\u0627\u0642\u0635\u0629")
if(d.gEu().length!==0)x.push(E.aZ(d.gEu().length)+" \u0632\u064a\u0627\u062f\u0629")
w=u+t>0?D.dH:D.d0
x=C.b.aJ(x," \u2022 ")
s=d.gEu().length!==0?"\n\u0632\u064a\u0627\u062f\u0629: "+C.b.aJ(d.gEu(),"\u060c "):""
return new B.AP(w,C.kR,"\u0642\u0631\u0628\u062a! \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0644\u0648\u0651\u0646\u0629",x+"\n\u0627\u0644\u0623\u0635\u0641\u0631: \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u062f\u064a \u2014 \u0627\u0644\u0623\u062d\u0645\u0631: \u063a\u0644\u0637 \u2014 \u0627\u0644\u0631\u0645\u0627\u062f\u064a \u0627\u0644\u0645\u0634\u0637\u0648\u0628: \u0646\u0633\u064a\u062a\u0647\u0627."+s,null)},
avO(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d,g=h.f===D.hU,f=j.f
switch(f.a){case 2:if(j.z==null)x=0
else{f=Date.now()
w=j.z
w.toString
x=C.e.ba(new A.b2(f,0,!1).dG(w).a,1e6)}v=C.e.ba(B.bCp(B.BR(j.gyr()).length).a,1e6)
f=j.gaNz()
w=96+26*j.y
u=D.dH.bo(0.25)
w=A.jj(i,A.bE4(C.W,A.au(i,D.adR,C.m,i,i,D.ZN,i,84,i,i,i,i,84),i,new A.aq(u,i,i,i,i,i,C.cp),C.Ac,i,w,w),C.t,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,f,i,i,i,i,i,i)
u=A.i("\u0628\u0646\u0633\u062c\u0651\u0644\u2026 "+B.bBm(x)+" / "+B.bBm(v),i,i,i,i,i,K.lH,i,i,i)
return A.ac(A.a([w,C.K,u,A.i(h.b.c?"\u0644\u0645\u0627 \u062a\u062e\u0644\u0635 \u0627\u0633\u0643\u062a \u062b\u0627\u0646\u064a\u0629 \u0623\u0648 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb":"\u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb \u0644\u0645\u0627 \u062a\u062e\u0644\u0635",i,i,i,i,i,F.al,i,i,i),A.bH(D.b2G,i,i,i,f,i,i)],y.p),C.j,C.f,C.h)
case 3:t=C.d.e6((Date.now()-j.ay)/1000)
if(t<8)h="\u062b\u0648\u0627\u0646\u064a \u0648\u0646\u0642\u0648\u0644\u0643"
else h=t<25?"\u0644\u0633\u0647 \u0634\u063a\u0627\u0644\u064a\u0646 \u2014 \u0627\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0628\u062a\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0643\u062a\u0631 ("+E.aZ(t)+" \u062b)":"\u0648\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0637\u0648\u0644 \u0645\u0646 \u0627\u0644\u0639\u0627\u062f\u064a \u2014 \u0644\u0648 \u0639\u0644\u0651\u0642 \u0647\u0646\u0639\u064a\u062f \u062a\u0634\u063a\u064a\u0644\u0647 \u0644\u0648\u062d\u062f\u0646\u0627 ("+E.aZ(t)+" \u062b)"
return new A.a_(D.a8Q,A.ac(A.a([C.qU,C.aj,D.aZJ,A.i(h,i,i,i,i,i,F.al,C.ad,i,i)],y.p),C.j,C.f,C.h),i)
default:s=f===D.q9
r=j.r
f=r==null
w=!f
q=w&&r.gqs()
u=A.c8(s?C.kS:K.C1,i,i,i)
if(s)p="\u0648\u0642\u0651\u0641"
else p=w&&!q?"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u062d":"\u0627\u0633\u0645\u0639"
p=A.i(p,i,i,i,i,i,i,i,i,i)
o=A.im(i,i,D.aNu,i,i,i,i)
u=A.aQ(new A.y3(C.WU,!0,new B.bpZ(j,r,q),i,i,i,o,C.m,i,!1,i,!0,i,new A.TF(p,u,o,i,i),i),1)
p=A.a([],y.n)
for(o=y.c,n=0;n<3;++n){m=D.D7[n]
p.push(new A.ey(m,i,A.i("\xd7"+E.aZ(m),i,i,i,i,i,i,i,i,i),o))}o=y.S
l=y.b
k=y.p
o=A.ai(A.a([u,C.ar,A.vC(new B.bq_(j),p,A.cV([h.b.b],o),!1,A.jI(i,i,i,new A.b4(new B.bq0(),l),i,i,i,i,new A.b4(new B.bq1(),l),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,C.dr),o)],k),C.j,C.f,C.h,0,i,i)
h=g&&!s?j.gaK0():i
u=A.c8(f?D.nl:C.kR,i,i,i)
if(g)f=f?"\u0633\u0645\u0651\u0639":"\u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a"
else f="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
f=A.i(f,i,i,i,i,i,C.cG,i,i,i)
p=q?N.hp:C.q
h=A.a([o,C.S,A.jh(u,i,f,h,A.im(p,q?C.i:C.a5,D.pk,i,i,i,i))],k)
if(w&&j.gi7()<j.a.e)C.b.E(h,A.a([C.K,q?A.jh(D.afB,i,D.b1X,new B.bq2(j),A.im(G.c5,C.a5,D.pk,i,i,i,i)):A.bH(D.aYf,i,i,i,new B.bq3(j),i,i)],k))
if(w){f=j.gi7()
w=j.a
u=w.e
f=f===u&&q&&u>w.d}else f=!1
if(f)h.push(new A.a_(C.mW,A.i(j.gTK()?"\u062e\u0644\u0651\u0635\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u062c\u0631\u0651\u0628 \xab\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636\xbb \u062a\u062d\u062a.":"\u062e\u0644\u0635\u062a \u0622\u062e\u0631 \u0622\u064a\u0629 \u2014 \u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0644\u0633\u0647 (\u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0635\u0641\u0631\u0627 \u0641\u0648\u0642).",i,i,i,i,i,K.pH,C.ad,i,i),i))
return A.ac(h,C.aa,C.f,C.h)}}}
B.AP.prototype={
A(d){var x=this,w=null,v=x.c,u=v.bo(0.12),t=A.aa(14),s=A.cT(v.bo(0.5),1),r=y.p
return A.au(w,A.ai(A.a([A.c8(x.d,v,w,w),C.ar,A.aQ(A.ac(A.a([A.i(x.e,w,w,w,w,w,A.cz(w,w,v,w,w,w,w,w,w,w,w,15,w,w,C.a3,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),C.pm,A.i(x.f,w,w,w,w,w,D.Vv,w,w,w)],r),C.B,C.f,C.h),1)],r),C.B,C.f,C.h,0,w,w),C.m,w,w,new A.aq(u,w,s,t,w,w,C.u),w,w,C.aA,C.aU,w,w,w)}}
B.Az.prototype={
V(){var x=y.S
return new B.Xj($.Jp(),A.x(x,y.B),A.aF(x),A.x(x,y.N),A.dO(null,y.H))}}
B.Xj.prototype={
aa(){this.ao()
this.d.a5(this.gn6())},
ve(){if(this.c!=null)this.t(new B.bpH())},
l(){var x,w=this,v=w.d
v.S(w.gn6())
x=w.y
if(x!=null)x.aE()
v.a.W0()
w.aq()},
Dk(d){return this.aNo(d)},
aNo(d){var x=0,w=A.o(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m
var $async$Dk=A.k(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.t(new B.bpQ(t,d))
r=t.y
if(r!=null)r.aE()
t.y=A.kO(C.fw,new B.bpR(t))
v=3
r=t.d
q=t.a
p=q.f
q=q.c
q=B.bCp(B.BR(H.Jf(q,d,p.vn(q,d)).b).length)
p=t.a
o=p.f
p=p.c
p=A.d7(0,0,0,350*B.BR(H.Jf(p,d,o.vn(p,d)).b).length,0,0)
x=6
return A.d(r.a.a0L(r.b.c,q,p,new B.bpS(t,d),new B.bpT(t)),$async$Dk)
case 6:v=1
x=5
break
case 3:v=2
m=u.pop()
r=A.Y(m)
if(r instanceof B.kP){s=r
r=t.y
if(r!=null)r.aE()
if(t.c!=null)t.t(new B.bpU(t,s))}else throw m
x=5
break
case 2:x=1
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$Dk,w)},
BK(d,e){return this.ayh(d,e)},
ayh(d,e){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$BK=A.k(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.e!==d){x=1
break}o=s.y
if(o!=null)o.aE()
s.t(new B.bpL(s,d))
n=d<s.a.e?d+1:null
r=s.d.a.a0O()
if(e&&n!=null)s.Dk(n)
q=null
u=4
x=7
return A.d(r,$async$BK)
case 7:q=g
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.Y(l)
if(o instanceof B.kP){p=o
s.t(new B.bpM(s,d,p))}else throw l
x=6
break
case 3:x=2
break
case 6:if(q!=null){o=q
s.at=s.at.bM(new B.bpN(s,o,d),y.H)}case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$BK,w)},
gaGn(){var x,w,v,u,t=this
for(x=t.a.d,w=t.f,v=t.r,u=t.w;x<=t.a.e;++x)if(!w.aw(x)&&!v.m(0,x)&&!u.aw(x)&&x!==t.e)return x
return null},
aKE(){this.t(new B.bpO(this))},
A(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q.f===D.hU,o=s.e,n=s.gaGn(),m=s.f,l=m.a,k=s.w.a,j=s.a,i=l+k===j.e-j.d+1&&s.r.a===0&&o==null
l=A.w(m).i("c9<2>")
x=new A.aG(new A.c9(m,l),new B.bpV(),l.i("aG<M.E>")).gL(0)
l=H.jG(s.a.c)
m=y.p
q=A.a([new B.El(q,!0,r),A.i("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 "+E.aZ(s.a.d)+" \u0644\u062d\u062f "+E.aZ(s.a.e)+" \u0645\u0646 \u062d\u0641\u0638\u0643\u060c \u0622\u064a\u0629 \u0622\u064a\u0629: \u0628\u0639\u062f \u0643\u0644 \u0622\u064a\u0629 \u062f\u0648\u0633 \xab\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629\xbb \u0648\u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0637\u0648\u0644 \u2014 \u0647\u0646\u0635\u062d\u0651\u062d \u0648\u0625\u0646\u062a \u0628\u062a\u0642\u0631\u0627.",r,r,r,r,r,F.al,r,r,r),C.S],m)
for(w=s.a.d;w<=s.a.e;++w)q.push(s.aON(w))
q.push(C.K)
k=s.Q
if(k!=null)q.push(A.i(k,r,r,r,r,r,D.wS,r,r,r))
k=s.as
if(k!=null){j=s.a
q.push(new B.AB(k,"review "+j.c+":"+j.d+"-"+j.e,r))}k=o==null
if(!k){j=E.aZ(o)
if(s.z==null)v=0
else{v=Date.now()
u=s.z
u.toString
u=C.e.ba(new A.b2(v,0,!1).dG(u).a,1e6)
v=u}v=A.i("\u0628\u0646\u0633\u062c\u0651\u0644 \u0622\u064a\u0629 "+j+"\u2026 "+B.bBm(v),r,r,r,r,r,K.lH,C.ad,r,r)
j=A.n6(A.aa(6),A.DX(C.dI,D.dH,6,s.x),C.bm)
u=o<s.a.e
t=A.c8(u?Q.BW:C.kS,r,r,r)
C.b.E(q,A.a([v,C.U,j,C.S,A.jh(t,r,A.i(u?"\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629":"\u062e\u0644\u0635\u062a",r,r,r,r,r,C.cG,r,r,r),new B.bpW(s,o),A.im(C.q,C.a5,D.pk,r,r,r,r))],m))}else if(n!=null){j=p?new B.bpX(s,n):r
if(!p)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
else v=n===s.a.d?"\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0633\u0645\u064a\u0639":"\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+E.aZ(n)
q.push(A.jh(D.aes,r,A.i(v,r,r,r,r,r,C.cG,r,r,r),j,A.im(C.q,C.a5,D.pk,r,r,r,r)))}if(s.r.a!==0&&k)q.push(D.aBM)
if(i){k=s.a
k=x===k.e-k.d+1
j=k?G.c5:D.d0
v=k?C.nh:C.kR
if(k)k="\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713 \u0633\u0645\u0651\u0639\u062a\u0647\u0645 \u0643\u0644\u0647\u0645 \u0635\u062d"
else{k=E.aZ(x)
u=s.a
u=k+" \u0645\u0646 "+E.aZ(u.e-u.d+1)+" \u0622\u064a\u0627\u062a \u0645\u0638\u0628\u0648\u0637\u0629"
k=u}u=s.a
u=x===u.e-u.d+1?"\u0631\u0628\u0646\u0627 \u064a\u062b\u0628\u0651\u062a\u0647\u0627 \u0641\u064a \u0642\u0644\u0628\u0643.":"\u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0641\u064a\u0647\u0627 \u0623\u0644\u0648\u0627\u0646 \u0648\u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a."
C.b.E(q,A.a([new B.AP(j,v,k,u,r),A.eG(D.afv,D.b2i,s.gaKD(),r)],m))}q.push(C.S)
q.push(D.xx)
return M.w0(r,q,"\u0633\u0645\u0651\u0639 "+l)},
aON(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.f.h(0,d),i=l.w.h(0,d)
if(l.e===d)x=D.ae8
else if(l.r.m(0,d))x=O.pl
else if(i!=null)x=D.aeh
else if(j!=null){w=j.gqs()?C.df:D.ac2
x=A.c8(w,j.gqs()?G.c5:D.d0,k,k)}else x=D.ads
w=y.p
v=A.a([A.ai(A.a([A.i("\u0622\u064a\u0629 "+E.aZ(d),k,k,k,k,k,D.aV1,k,k,k),C.d6,x],w),C.j,C.f,C.h,0,k,k)],w)
if(i!=null)v.push(A.i(i,k,k,k,k,k,D.Vs,k,k,k))
if(j!=null&&!j.gqs()){u=y.R
t=A.a([],u)
for(s=j.a,r=0;r<s.length;++r){q=s[r]
p=j.gGT()
o=J.bq(p)
n=o.h(p,r)
A:{if(D.h8===n){m=G.c5
break A}if(D.pX===n){m=D.d0
break A}if(D.pY===n){m=D.dH
break A}m=C.eZ
break A}m=D.ie.aTZ(m,o.h(p,r)===D.pZ?C.pt:k,22)
C.b.E(t,A.a([new A.f4(q.a,k,k,C.be,k,k,k,k,k,k,m),L.wK],u))}w=A.a([C.aR,A.QM(A.dX(t,k,k,k,k,k,k,k,k,k,k),k,C.ad,C.aF)],w)
if(C.c.aj(j.c).length===0)w.push(D.b_R)
C.b.E(v,w)}return new E.cZ(A.ac(v,C.aa,C.f,C.h),C.f3,C.ex,k,!1,k)}}
B.Ay.prototype={
V(){return new B.Xi($.Jp())}}
B.Xi.prototype={
aa(){this.ao()
var x=this.d
x.a5(this.gn6())
x.Yc()},
ve(){if(this.c!=null)this.t(new B.bpy())},
l(){this.d.S(this.gn6())
this.aq()},
A(d){var x,w,v,u,t,s=this,r=null,q=s.d.c,p=q.gamP(),o=A.a([],y.t)
for(x=78;x<=114;++x)o.push(x)
w=C.b.kW(o,0,new B.bpF(q))
v=C.b.kW(o,0,new B.bpG())
o=y.p
o=A.a([A.ai(A.a([A.aQ(s.Qy(E.aZ(q.gahY()),"\u0622\u064a\u0629 \u0645\u062d\u0641\u0648\u0638\u0629"),1),C.ar,A.aQ(s.Qy(E.aZ(q.aeN()),"\u064a\u0648\u0645 \u0648\u0631\u0627 \u0628\u0639\u0636"),1),C.ar,A.aQ(s.Qy(E.aZ(q.e),"\u0623\u0637\u0648\u0644 \u0633\u0644\u0633\u0644\u0629"),1)],o),C.j,C.f,C.h,0,r,r),C.S,new E.cZ(A.ac(A.a([A.i("\u062c\u0632\u0621 \u0639\u0645\u0651: "+E.aZ(C.d.ar(w*100/v))+"\u066a",r,r,r,r,r,F.b_,r,r,r),C.U,A.n6(A.aa(6),A.DX(C.dI,G.c5,8,w/v),C.bm),C.aR,A.i(E.aZ(w)+" \u0645\u0646 "+E.aZ(v)+" \u0622\u064a\u0629",r,r,r,r,r,F.al,r,r,r)],o),C.B,C.f,C.h),C.af,C.aA,r,!1,r)],o)
if(p.length===0)o.push(D.aBV)
for(u=p.length,t=0;t<p.length;p.length===u||(0,A.B)(p),++t)o.push(s.aOP(p[t]))
o.push(C.K)
u=$.ad().b
u===$&&A.b()
u=u.gc2().e.a
o.push(A.i((u==null?r:u.r)!=null?"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643 \u0648\u064a\u0638\u0647\u0631 \u0639\u0644\u0649 \u0623\u064a \u062c\u0647\u0627\u0632 \u062a\u062f\u062e\u0644 \u0645\u0646\u0647.":"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647. \u0633\u062c\u0651\u0644 \u062f\u062e\u0648\u0644 \u0639\u0634\u0627\u0646 \u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643.",r,r,r,r,r,F.al,r,r,r))
return M.w0(r,o,"\u062a\u0642\u062f\u0651\u0645\u064a \u0641\u064a \u0627\u0644\u062d\u0641\u0638")},
Qy(d,e){var x=null
return new E.cZ(A.ac(A.a([A.i(d,x,x,x,x,x,D.aUO,x,x,x),A.i(e,x,x,x,x,x,C.VJ,C.ad,x,x)],y.p),C.j,C.f,C.h),C.af,C.L,x,!1,x)},
aOP(d){var x=null,w=this.d.c,v=I.c8[d-1].a[1],u=w.YI(d),t=w.aYX(d),s=y.p,r=A.ai(A.a([A.aQ(A.i(H.jG(d),x,x,x,x,x,F.b_,x,x,x),1),A.i(E.aZ(C.d.ar(u*100/v))+"\u066a",x,x,x,x,x,D.aVE,x,x,x)],s),C.j,C.f,C.h,0,x,x),q=A.n6(A.aa(6),A.DX(C.dI,G.c5,7,u/v),C.bm),p=E.aZ(u),o=E.aZ(v),n=t>0?" \u2022 \u0628\u062a\u0631\u0627\u062c\u0639 "+E.aZ(t):""
return new E.cZ(A.ac(A.a([r,C.U,q,C.aR,A.i("\u0645\u062d\u0641\u0648\u0638 "+p+" \u0645\u0646 "+o+n,x,x,x,x,x,F.al,x,x,x)],s),C.B,C.f,C.h),C.af,C.aA,new B.bpE(this,d),!1,x)},
HY(d){return this.awD(d)},
awD(d){var x=0,w=A.o(y.H),v=this,u,t
var $async$HY=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:u=I.c8[d-1].a[1]
t=v.c
t.toString
x=2
return A.d(A.fB(C.de,new B.bpD(v,d,u),t,!0,null,null,!1,y.H),$async$HY)
case 2:return A.m(null,w)}})
return A.n($async$HY,w)}}
B.acf.prototype={
KA(d,e){var x=null,w=A.pG(x,x,x,x,x,x,x,x,x,x,x,D.aNg,C.L,x,x,x,x,C.li,x,x)
return A.bH(A.i(d,x,x,x,x,x,C.jP,x,x,x),x,x,x,new B.aVq(e),x,w)},
A(d){var x=this,w=y.p
return new E.cZ(A.ac(A.a([D.b1M,C.U,D.b2F,A.dy(A.a([x.KA("tarteel-ai/whisper-base-ar-quran","https://huggingface.co/tarteel-ai/whisper-base-ar-quran"),x.KA("iqbalaesthetic/Basira","https://huggingface.co/iqbalaesthetic/Basira")],w),C.aK,0,12),D.aXZ,x.KA("tanzil.net","https://tanzil.net"),D.b3v,x.KA("everyayah.com","https://everyayah.com")],w),C.B,C.f,C.h),C.af,C.aA,null,!1,null)}}
B.AB.prototype={
V(){return new B.Xl()}}
B.Xl.prototype={
ga9l(){var x=this.a
return B.ca1(x.c,x.d,$.bD_().Ed())},
KC(){var x=0,w=A.o(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k
var $async$KC=A.k(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.t(new B.bqB(s))
v=3
r=A.bwN()
n=s.ga9l()
m=y.N
q=A.x(m,m)
J.fV(q,"app","masjid")
J.fV(q,"path","tutor \u203a "+s.a.d)
if(r!=null){m=r.length>160?C.c.Y(r,0,160):r
J.fV(q,"ua",m)}x=6
return A.d(A.a38(n,null,C.B_,q),$async$KC)
case 6:if(s.c!=null)s.t(new B.bqC(s))
t.push(5)
x=4
break
case 3:v=2
k=u.pop()
p=A.Y(k)
o=p instanceof A.cR?p.a:"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0628\u0639\u062a \u2014 \u0627\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0646\u062a \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
if(s.c!=null)s.t(new B.bqD(s,o))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.t(new B.bqE(s))
x=t.pop()
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$KC,w)},
A(d){var x,w,v,u=this,t=null,s=y.p
s=A.a([A.dg(!1,t,!0,new A.a_(C.Ap,A.ai(A.a([A.c8(u.d?C.tY:C.kO,C.c4,t,18),C.fX,D.b33],s),C.j,C.f,C.h,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new B.bqG(u),t,t,t,t,t,t,t)],s)
if(u.d){x=A.aa(8)
s.push(A.au(t,A.rw(u.ga9l(),D.aRI,t,C.o),C.m,t,t,new A.aq(L.r5,t,t,x,t,t,C.u),t,t,D.a8Z,C.ey,t,t,1/0))}if(u.f)s.push(D.aY6)
else{x=A.pG(t,t,t,t,t,t,t,t,t,t,t,C.Un,C.L,t,t,t,t,C.li,t,t)
w=u.e
v=w?t:u.gaOO()
s.push(A.hb(w?D.aNE:D.afe,D.b1g,v,x))}x=u.r
if(x!=null)s.push(A.i(x,t,t,t,t,t,D.Vs,t,t,t))
return new A.a_(C.aA,A.ac(s,C.B,C.f,C.h),t)}}
var z=a.updateTypes(["ab<~>()","~()","A(mJ)","ab<Gx>()","ab<Gv>()","ab<Gw>()","Q<mJ>()","A(qa)","bo(nI)","AA(z)","Ay(z)","A(m5)","Az(z)","A(Fe)"])
B.aVr.prototype={
$0(){var x=0,w=A.o(y.m),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$$0=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=A.a8(A.cs(b.G.document).baseURI)
q=A.bO(r,0,null).W("quran_tutor/tutor.js?v=3").j(0)
x=7
return A.d(A.e3(import(q),y.m),$async$$0)
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
m=B.c_O("network",A.f(o))
throw A.p(m)
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:227}
B.aVu.prototype={
$1(d){var x=null
return A.bsv(A.ch(d,"persist",x,x,x,x))},
$S:952}
B.aVt.prototype={
$0(){var x=0,w=A.o(y.C),v,u=this,t,s,r,q,p,o,n,m,l
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:q=u.a
n=A
m=A
l=A
x=4
return A.d(q.pl(),$async$$0)
case 4:x=3
return A.d(n.e3(m.cs(l.ch(e,"loadModel",A.bt1(new B.aVs(u.b)),u.c,u.d,null)),y.m),$async$$0)
case 3:p=e
o=A.O(p.device)
if(o==null)o=null
if(o==null)o=""
t=A.O(p.dtype)
if(t==null)t=null
if(t==null)t=""
s=q.pk(p,"ms")
r=q.mX(p,"cached")
A.O(p.backend)
v=new B.Gv(o,t,s,r,q.pk(p,"threads"),q.mX(p,"isolated"),q.pk(p,"warmMs"))
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+4}
B.aVs.prototype={
$2(d,e){this.a.$2(C.d.ar(d),C.d.ar(e))},
$S:953}
B.aVy.prototype={
$0(){var x=0,w=A.o(y.H),v=this,u,t,s
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:t=v.a
s=t.a
x=s==null?2:3
break
case 2:x=4
return A.d(t.pl(),$async$$0)
case 4:s=e
case 3:u={}
u.maxMs=C.e.ba(v.b.a,1000)
u.autoStop=v.c
u.minMs=C.e.ba(v.d.a,1000)
u.onLevel=A.f7(new B.aVw(v.e))
u.onAutoStop=A.f7(new B.aVx(v.f))
x=5
return A.d(A.e3(A.cs(A.ch(s,"startRecording",u,null,null,null)),y.O),$async$$0)
case 5:return A.m(null,w)}})
return A.n($async$$0,w)},
$S:2}
B.aVw.prototype={
$1(d){return this.a.$1(d)},
$S:57}
B.aVx.prototype={
$1(d){return this.a.$1(d)},
$S:9}
B.aVz.prototype={
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
return A.d(t.pl(),$async$$0)
case 7:x=5
break
case 6:e=s
case 5:x=3
return A.d(q.e3(p.cs(o.ch(e,"stopRecording",null,null,null,null)),y.m),$async$$0)
case 3:r=e
v=new B.Gw(r,A.dm(r.seconds))
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+5}
B.aVB.prototype={
$0(){var x=0,w=A.o(y._),v,u=this,t,s,r,q,p,o
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:t=u.b.a
s=u.a
r=s
q=A
p=A
o=A
x=4
return A.d(s.pl(),$async$$0)
case 4:x=3
return A.d(q.e3(p.cs(o.ch(e,"transcribe",t.audio,t.rate,s.a8e(u.c),null)),y.m),$async$$0)
case 3:v=r.abq(e)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+3}
B.aVA.prototype={
$0(){var x=0,w=A.o(y._),v,u=this,t,s,r,q,p
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:t=u.a
s=t
r=A
q=A
p=A
x=4
return A.d(t.pl(),$async$$0)
case 4:x=3
return A.d(r.e3(q.cs(p.ch(e,"transcribeUrl",u.b,t.a8e(u.c),null,null)),y.m),$async$$0)
case 3:v=s.abq(e)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+3}
B.aVv.prototype={
$1(d){return d},
$S:29}
B.aMO.prototype={
$0(){var x,w,v,u,t=this.a,s=A.bR(t.a.length,D.pZ,!1,y.G)
for(t=t.b,x=t.length,w=0;w<x;++w){v=t[w]
u=v.a
if(u!=null)s[u]=v.d}return s},
$S:z+6}
B.aMN.prototype={
$1(d){return d===D.h8},
$S:z+2}
B.bsX.prototype={
$2(d,e){var x,w=e.length
if(d.length<w)return!1
for(x=0;x<w;++x)if(B.bxB(e[x],d[x])<0.75)return!1
return!0},
$S:954}
B.buq.prototype={
$1(d){return d.length!==0},
$S:12}
B.aVE.prototype={
$1(d){return d.a===D.e1},
$S:z+7}
B.aVF.prototype={
$1(d){return C.e.ba(d,1000)},
$S:66}
B.aVC.prototype={
$1(d){return C.d.bU(d)},
$S:955}
B.aVG.prototype={
$0(){var x=0,w=A.o(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$$0=A.k(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d(A.ie("mt.tutor.settings"),$async$$0)
case 7:r=a3
if(r!=null){k=y.P.a(C.a1.eW(r,null))
j=A.bn(k.h(0,"n"))
j=j==null?null:C.d.bU(j)
j=C.e.cA(j==null?2:j,1,5)
i=C.b.m(D.D7,k.h(0,"r"))?A.ex(k.h(0,"r")):1
h=A.hz(k.h(0,"auto"))
g=A.hz(k.h(0,"hide"))
k=A.hz(k.h(0,"in"))
s.a.b=new B.Rn(j,i,h!==!1,g===!0,k===!0)}u=2
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
return A.d(A.ie("mt.tutor.progress"),$async$$0)
case 12:q=a3
if(q!=null)s.a.c=B.bAG(y.P.a(C.a1.eW(q,null)))
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
return A.d(A.ie("mt.tutor.last"),$async$$0)
case 17:p=a3
if(p!=null){o=y.P.a(C.a1.eW(p,null))
n=C.d.bU(A.dr(J.b5(o,"s")))
m=C.d.bU(A.dr(J.b5(o,"f")))
l=C.d.bU(A.dr(J.b5(o,"t")))
if(B.bOf(n,m)&&B.bOf(n,l)&&m<=l)s.a.z=new A.bQ(n,m,l)}u=2
x=16
break
case 14:u=13
a0=t.pop()
x=16
break
case 13:x=2
break
case 16:k=s.a
if(k.b.e&&k.a.a0z()){k.a.afA()
x=1
break}a1=k
x=18
return A.d(k.a.He(),$async$$0)
case 18:a1.d=a3
k.e=!0
k.X()
if(k.b.e)k.zJ()
k.ut()
case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:106}
B.aVH.prototype={
$2(d,e){var x=this.a
x.r=d
x.w=e
x.X()},
$S:956}
B.aVI.prototype={
$2(d,e){return C.e.ba(A.eD(A.f(d),null,null),1000)===this.a},
$S:957}
B.bi6.prototype={
$1(d){var x=0,w=A.o(y.a),v=this,u,t
var $async$$1=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.d(u.d.a.AT(),$async$$1)
case 2:t=f
if(u.c!=null)u.t(new B.bi5(u,t))
return A.m(null,w)}})
return A.n($async$$1,w)},
$S:958}
B.bi5.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bi7.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bi4(x,d))},
$S:z+8}
B.bi4.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bi8.prototype={
$1(d){},
$S:22}
B.bhT.prototype={
$0(){},
$S:0}
B.bhZ.prototype={
$1(d){var x=this.c,w=this.a.w
w.toString
return new B.AA(this.b,x.a,x.b,w,null)},
$S:z+9}
B.bi_.prototype={
$0(){},
$S:0}
B.bi2.prototype={
$0(){var x=y.z
return A.al(this.a,!1).cV(A.cW(new B.bi1(),null,x),x)},
$S:0}
B.bi1.prototype={
$1(d){return D.b4b},
$S:z+10}
B.bi3.prototype={
$0(){return B.bO0(this.a)},
$S:0}
B.bhW.prototype={
$0(){var x=this.b
return this.a.vf(x.a,x.b,x.c)},
$S:0}
B.bhX.prototype={
$1(d){return this.a.t(new B.bhV())},
$S:9}
B.bhV.prototype={
$0(){},
$S:0}
B.bhY.prototype={
$0(){var x=this.a
return x.t(new B.bhU(x))},
$S:0}
B.bhU.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.bi0.prototype={
$0(){return this.a.aOM(this.b)},
$S:0}
B.bwA.prototype={
$1(d){return new A.iZ(new B.bwx(this.a,this.b,this.c),null)},
$S:50}
B.bwx.prototype={
$2(d,e){var x,w,v=null,u=this.b,t=new B.bwz(u,e),s=this.a,r=new B.bwy(s,e),q=A.i(H.jG(this.c),v,v,v,v,v,C.pB,v,v,v),p=A.i("\u0647\u062a\u0633\u0645\u0651\u0639 \u0623\u0646\u0647\u064a \u0622\u064a\u0627\u062a\u061f ("+E.aZ(u)+" \u0622\u064a\u0629)",v,v,v,v,v,F.al,v,v,v),o=y.p,n=A.a([],o)
if(u<=30)n.push(r.$3("\u0627\u0644\u0633\u0648\u0631\u0629 \u0643\u0644\u0647\u0627",1,u))
x=u<5
w=E.aZ(x?u:5)
x=x?u:5
n.push(r.$3("\u0623\u0648\u0644 "+w+" \u0622\u064a\u0627\u062a",1,x))
x=s.a
if(x>1){x=E.aZ(x)
w=s.a
n.push(r.$3("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+x,w,C.e.cA(w+4,1,u)))}u=A.a([q,C.aR,p,C.S,A.dy(n,C.aK,6,8),C.K,A.ai(A.a([t.$3("\u0645\u0646",s.b,new B.bws(s)),D.aNA,t.$3("\u0644\u062d\u062f",s.c,new B.bwt(s))],o),C.j,C.f,C.h,0,v,v)],o)
if(s.c-s.b>=10)u.push(D.aBP)
u.push(C.aJ)
u.push(A.fI(D.aZn,v,new B.bwu(s,d),A.im(C.q,C.a5,D.aNr,v,v,v,v)))
return A.dI(!0,new A.a_(C.Av,A.ac(u,C.aa,C.f,C.V),v),C.L,!0)},
$S:334}
B.bwz.prototype={
$3(d,e,f){var x,w,v,u=null,t=A.i(d,u,u,u,u,u,C.ih,u,u,u),s=A.a([],y.I)
for(x=this.a,w=y.r,v=1;v<=x;++v)s.push(new A.d_(v,A.i("\u0622\u064a\u0629 "+E.aZ(v),u,u,u,u,u,u,u,u,u),C.as,u,w))
return A.aQ(A.ac(A.a([t,S.D3(C.de,!0,s,320,new B.bww(this.b,f),D.aVW,e,y.S)],y.p),C.B,C.f,C.h),1)},
$S:960}
B.bww.prototype={
$1(d){return d==null?null:this.a.$1(new B.bwv(this.b,d))},
$S:53}
B.bwv.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bwy.prototype={
$3(d,e,f){var x=null
return A.bE3(x,A.i(d,x,x,x,x,x,x,x,x,x),new B.bwr(this.a,this.b,e,f))},
$S:961}
B.bwr.prototype={
$0(){var x=this
return x.b.$1(new B.bwq(x.a,x.c,x.d))},
$S:0}
B.bwq.prototype={
$0(){var x=this.a
x.b=this.b
x.c=this.c},
$S:0}
B.bws.prototype={
$1(d){var x=this.a
x.b=d
if(x.c<d)x.c=d},
$S:32}
B.bwt.prototype={
$1(d){var x=this.a
x.c=d
if(x.b>d)x.b=d},
$S:32}
B.bwu.prototype={
$0(){var x=this.a
return A.al(this.b,!1).be(new A.R(x.b,x.c))},
$S:0}
B.bpY.prototype={
$0(){},
$S:0}
B.bqd.prototype={
$0(){var x=this.a
x.e=this.b
x.f=D.k2
x.w=x.r=null
x.x=!1
x.ch=x.ax=x.as=null},
$S:0}
B.bqh.prototype={
$0(){var x=this.a
return x.f=x.r!=null?D.he:D.k2},
$S:0}
B.bqi.prototype={
$0(){var x=this.a
x.f=D.q9
x.as=null},
$S:0}
B.bqj.prototype={
$0(){var x=this.a
x.f=this.b
if(!this.c&&x.as==null)x.as=null},
$S:0}
B.bql.prototype={
$0(){var x=this.a
x.f=D.qa
x.as=null
x.y=0
x.z=new A.b2(Date.now(),0,!1)
x.ax=null},
$S:0}
B.bqm.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bqk())},
$S:34}
B.bqk.prototype={
$0(){},
$S:0}
B.bqo.prototype={
$1(d){return this.a.y=d},
$S:57}
B.bqn.prototype={
$1(d){return this.a.yn()},
$S:9}
B.bqp.prototype={
$0(){var x,w=this.a
w.f=w.r!=null?D.he:D.k2
x=this.b
w.as=B.Ji(x)
w.at=x},
$S:0}
B.bqr.prototype={
$0(){var x=this.a
x.f=D.lZ
x.ay=Date.now()},
$S:0}
B.bqs.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bqq())},
$S:34}
B.bqq.prototype={
$0(){},
$S:0}
B.bqc.prototype={
$0(){var x=this.a
x.f=x.r!=null?D.he:D.k2
x.as=this.b
x.at=this.c},
$S:0}
B.bqe.prototype={
$0(){var x=this.b
x.r=this.c
x.w=this.a.a
x.f=D.he
x.x=!1},
$S:0}
B.bq5.prototype={
$0(){var x=this.a
x.f=D.lZ
x.ay=Date.now()
x.as=null},
$S:0}
B.bq6.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bq4())},
$S:34}
B.bq4.prototype={
$0(){},
$S:0}
B.bq7.prototype={
$1(d){return d.d!==D.h8},
$S:z+11}
B.bq8.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.bqx.prototype={
$0(){return B.bO0(this.a)},
$S:0}
B.bqy.prototype={
$1(d){var x=this.a.d
return x.oV(x.b.aen(d))},
$S:5}
B.bqz.prototype={
$0(){var x=y.z
return A.al(this.b,!1).cV(A.cW(new B.bqw(this.a),null,x),x)},
$S:0}
B.bqw.prototype={
$1(d){var x=this.a.a
return new B.Az(x.c,x.d,x.e,x.f,null)},
$S:z+12}
B.bqA.prototype={
$0(){this.a.d.a.b24()
this.b.R(y.q).f.aO(D.aO6)},
$S:0}
B.bqb.prototype={
$2(d,e){return C.by},
$S:47}
B.bqa.prototype={
$2(d,e){var x,w,v,u=null,t=this.a,s=t.a,r=s.d+e
switch(t.d.c.YR(s.c,r).a.a){case 2:s=G.c5
break
case 1:s=D.d0
break
case 0:s=N.hp
break
default:s=u}x=A.aa(18)
w=t.f===D.lZ?u:new B.bq9(t,r)
v=s.bo(0.25)
if(r===t.gi7())s=C.i
s=A.cT(s,r===t.gi7()?2:1)
return A.dg(!1,x,!0,A.au(C.W,A.i(E.aZ(r),u,u,u,u,u,D.aSW,u,u,u),C.m,u,u,new A.aq(v,u,s,u,u,u,C.cp),u,u,u,u,u,u,36),u,!0,u,u,u,u,u,u,u,u,u,u,u,w,u,u,u,u,u,u,u)},
$S:116}
B.bq9.prototype={
$0(){return this.a.Sn(this.b)},
$S:0}
B.bqg.prototype={
$0(){var x=this.a
return x.t(new B.bqf(x))},
$S:0}
B.bqf.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bqt.prototype={
$1(d){return d===D.pX},
$S:z+2}
B.bqu.prototype={
$1(d){return d===D.pY},
$S:z+2}
B.bqv.prototype={
$1(d){return d===D.pZ},
$S:z+2}
B.bpZ.prototype={
$0(){var x=this.b!=null&&!this.c?1:null
return this.a.KB(x)},
$S:0}
B.bq_.prototype={
$1(d){var x=this.a.d
return x.oV(x.b.aTu(d.ga1(d)))},
$S:99}
B.bq1.prototype={
$1(d){return d.m(0,C.J)?C.a5:C.i},
$S:4}
B.bq0.prototype={
$1(d){return d.m(0,C.J)?C.q:C.P},
$S:4}
B.bq2.prototype={
$0(){var x=this.a
return x.Sn(x.gi7()+1)},
$S:0}
B.bq3.prototype={
$0(){var x=this.a
return x.Sn(x.gi7()+1)},
$S:0}
B.bpH.prototype={
$0(){},
$S:0}
B.bpQ.prototype={
$0(){var x=this.a
x.e=this.b
x.Q=null
x.x=0
x.z=new A.b2(Date.now(),0,!1)},
$S:0}
B.bpR.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bpP())},
$S:34}
B.bpP.prototype={
$0(){},
$S:0}
B.bpT.prototype={
$1(d){return this.a.x=d},
$S:57}
B.bpS.prototype={
$1(d){return this.a.BK(this.b,!1)},
$S:9}
B.bpU.prototype={
$0(){var x,w=this.a
w.e=null
x=this.b
w.Q=B.Ji(x)
w.as=x},
$S:0}
B.bpL.prototype={
$0(){var x=this.a
x.e=null
x.r.D(0,this.b)},
$S:0}
B.bpM.prototype={
$0(){var x,w=this.a,v=this.b
w.r.I(0,v)
x=this.c
w.w.n(0,v,B.Ji(x))
w.as=x},
$S:0}
B.bpN.prototype={
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
return A.d(n.a.ajK(s.b,B.BR(H.Jf(l,m,k.vn(l,m)).b).length),$async$$1)
case 6:r=f
l=o.a
k=l.f
l=l.c
q=B.bMh(H.Jf(l,m,k.vn(l,m)).b,r.a)
if(C.c.aj(q.c).length!==0){l=n.c
k=o.a.c
j=q.gqs()
l.aiP(k,m,n.b.a,j)}n.x3()
if(o.c!=null)o.t(new B.bpI(o,m,q))
t.push(5)
x=4
break
case 3:v=2
h=u.pop()
o=A.Y(h)
if(o instanceof B.kP){p=o
o=s.a
if(o.c!=null)o.t(new B.bpJ(o,s.c,p))}else throw h
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
o=s.a
if(o.c!=null)o.t(new B.bpK(o,s.c))
x=t.pop()
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$$1,w)},
$S:184}
B.bpI.prototype={
$0(){var x=this.c
this.a.f.n(0,this.b,x)
return x},
$S:0}
B.bpJ.prototype={
$0(){var x=this.a,w=this.c
x.w.n(0,this.b,B.Ji(w))
x.as=w},
$S:0}
B.bpK.prototype={
$0(){return this.a.r.I(0,this.b)},
$S:0}
B.bpO.prototype={
$0(){var x=this.a
x.f.ad(0)
x.w.ad(0)
x.as=null},
$S:0}
B.bpV.prototype={
$1(d){return d.gqs()},
$S:z+13}
B.bpW.prototype={
$0(){return this.a.BK(this.b,!0)},
$S:0}
B.bpX.prototype={
$0(){return this.a.Dk(this.b)},
$S:0}
B.bpy.prototype={
$0(){},
$S:0}
B.bpF.prototype={
$2(d,e){return d+this.a.YI(e)},
$S:98}
B.bpG.prototype={
$2(d,e){return d+I.c8[e-1].a[1]},
$S:98}
B.bpE.prototype={
$0(){return this.a.HY(this.b)},
$S:0}
B.bpD.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.b,o=A.i(H.jG(p),q,q,q,q,q,C.pB,q,q,q),n=y.p,m=A.a([],n)
for(x=this.c,w=this.a,v=w.d,u=p*1000,t=1;t<=x;++t){s=new A.ba(10,10)
r=v.c.a.h(0,u+t)
switch((r==null?$.q_():r).a.a){case 2:r=G.c5.bo(0.35)
break
case 1:r=D.d0.bo(0.35)
break
case 0:r=C.zk
break
default:r=q}m.push(A.au(C.W,A.i(E.aZ(t),q,q,q,q,q,K.Vh,q,q,q),C.m,q,q,new A.aq(r,q,q,new A.d2(s,s,s,s),q,q,C.u),q,38,q,q,q,q,38))}return A.dI(!0,new A.a_(C.iO,A.ac(A.a([o,C.aR,D.b0i,C.S,new A.ef(D.ZE,A.hI(A.dy(m,C.aK,6,6),q,C.t,q,q,C.x),q),C.aj,A.bH(D.b1h,q,q,q,new B.bpC(w,d,p),q,q)],n),C.aa,C.f,C.V),q),C.L,!0)},
$S:51}
B.bpC.prototype={
$0(){var x=0,w=A.o(y.H),v=this,u,t
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:u=v.b
t=v.c
x=4
return A.d(A.eb(null,new B.bpB(t),u,y.y),$async$$0)
case 4:x=e===!0?2:3
break
case 2:x=5
return A.d(v.a.d.FL(t),$async$$0)
case 5:if(u.e!=null)A.al(u,!1).eo()
case 3:return A.m(null,w)}})
return A.n($async$$0,w)},
$S:2}
B.bpB.prototype={
$1(d){var x=null,w=A.i("\u0647\u062a\u0628\u062f\u0623 "+H.jG(this.a)+" \u0645\u0646 \u0627\u0644\u0623\u0648\u0644.",x,x,x,x,x,x,x,x,x)
return A.ec(A.a([A.bH(C.x8,x,x,x,new B.bpz(d),x,x),A.bH(D.b2E,x,x,x,new B.bpA(d),x,x)],y.p),w,D.b29)},
$S:14}
B.bpz.prototype={
$0(){A.al(this.a,!1).be(!1)
return null},
$S:0}
B.bpA.prototype={
$0(){A.al(this.a,!1).be(!0)
return null},
$S:0}
B.bxi.prototype={
$1(d){var x=this.a
return new A.jS(new B.bxh(x),null,x,null)},
$S:962}
B.bxh.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.a,r=s.b,q=A.a([],y.n)
for(x=y.c,w=1;w<=5;++w)q.push(new A.ey(w,t,A.i(E.aZ(w),t,t,t,t,t,t,t,t,t),x))
x=y.S
v=y.b
u=y.p
x=A.a([D.aXW,C.aj,D.b1w,C.U,A.vC(new B.bxc(s,r),q,A.cV([r.a],x),!1,A.jI(t,t,t,new A.b4(new B.bxd(),v),t,t,t,t,new A.b4(new B.bxe(),v),t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),x),C.K,A.rG(C.q,C.L,t,new B.bxf(s,r),D.b_V,D.b3b,r.c),A.rG(C.q,C.L,t,new B.bxg(s,r),t,D.aXF,r.d)],u)
s=s.x
if(s!=null)C.b.E(x,A.a([C.aR,A.i("\u0627\u0644\u0645\u0639\u0627\u0644\u062c: "+s.glH(),t,t,t,t,t,F.al,t,C.aF,t)],u))
x.push(C.K)
x.push(D.Wc)
return A.dI(!0,A.hI(A.ac(x,C.aa,C.f,C.h),t,C.t,C.iO,t,C.x),C.L,!0)},
$S:963}
B.bxc.prototype={
$1(d){return this.a.oV(this.b.aTr(d.ga1(d)))},
$S:99}
B.bxe.prototype={
$1(d){return d.m(0,C.J)?C.a5:C.i},
$S:4}
B.bxd.prototype={
$1(d){return d.m(0,C.J)?C.q:C.P},
$S:4}
B.bxf.prototype={
$1(d){return this.a.oV(this.b.aSV(d))},
$S:5}
B.bxg.prototype={
$1(d){return this.a.oV(this.b.aen(d))},
$S:5}
B.aVq.prototype={
$0(){return A.e9(A.bO(this.a,0,null),C.bD,null)},
$S:0}
B.bxu.prototype={
$1(d){var x,w=A.aO("https?://",!0,!1)
w=A.bS(d,w,"")
x=A.aO("www\\.",!0,!1)
return A.BS(A.bS(w,x,"www[.]"),A.aO("([A-Za-z0-9-]+)\\.(com|net|org|io|xyz|ru|info|me|link)\\b",!1,!1),new B.bxv(),null)},
$S:29}
B.bxv.prototype={
$1(d){return A.f(d.h(0,1))+"[.]"+A.f(d.h(0,2))},
$S:60}
B.bqB.prototype={
$0(){var x=this.a
x.e=!0
x.r=null},
$S:0}
B.bqC.prototype={
$0(){return this.a.f=!0},
$S:0}
B.bqD.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bqE.prototype={
$0(){return this.a.e=!1},
$S:0}
B.bqG.prototype={
$0(){var x=this.a
return x.t(new B.bqF(x))},
$S:0}
B.bqF.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.bxt.prototype={
$1(d){return d==null?"\u2013":A.f(d)},
$S:166};(function installTearOffs(){var x=a._instance_0u
x(B.acg.prototype,"gaYY","aYZ",1)
var w
x(w=B.Ro.prototype,"gaZe","zJ",0)
x(w,"garH","ut",0)
x(w=B.Vk.prototype,"gn6","ve",1)
x(w,"gaHO","Jn",0)
x(w=B.Xk.prototype,"gn6","ve",1)
x(w,"gaK0","JE",0)
x(w,"gaNz","yn",0)
x(w,"gawm","HV",0)
x(w=B.Xj.prototype,"gn6","ve",1)
x(w,"gaKD","aKE",1)
x(B.Xi.prototype,"gn6","ve",1)
x(B.Xl.prototype,"gaOO","KC",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.acg,B.Rp,B.Gv,B.Gx,B.Gw,B.kP,B.OG,B.m5,B.Fe,B.qa,B.ach,B.Rn])
x(A.km,[B.aVr,B.aVt,B.aVy,B.aVz,B.aVB,B.aVA,B.aMO,B.aVG,B.bi5,B.bi4,B.bhT,B.bi_,B.bi2,B.bi3,B.bhW,B.bhV,B.bhY,B.bhU,B.bi0,B.bwv,B.bwr,B.bwq,B.bwu,B.bpY,B.bqd,B.bqh,B.bqi,B.bqj,B.bql,B.bqk,B.bqp,B.bqr,B.bqq,B.bqc,B.bqe,B.bq5,B.bq4,B.bq8,B.bqx,B.bqz,B.bqA,B.bq9,B.bqg,B.bqf,B.bpZ,B.bq2,B.bq3,B.bpH,B.bpQ,B.bpP,B.bpU,B.bpL,B.bpM,B.bpI,B.bpJ,B.bpK,B.bpO,B.bpW,B.bpX,B.bpy,B.bpE,B.bpC,B.bpz,B.bpA,B.aVq,B.bqB,B.bqC,B.bqD,B.bqE,B.bqG,B.bqF])
x(A.hX,[B.aVu,B.aVw,B.aVx,B.aVv,B.aMN,B.buq,B.aVE,B.aVF,B.aVC,B.bi6,B.bi7,B.bi8,B.bhZ,B.bi1,B.bhX,B.bwA,B.bwz,B.bww,B.bwy,B.bws,B.bwt,B.bqm,B.bqo,B.bqn,B.bqs,B.bq6,B.bq7,B.bqy,B.bqw,B.bqt,B.bqu,B.bqv,B.bq_,B.bq1,B.bq0,B.bpR,B.bpT,B.bpS,B.bpN,B.bpV,B.bpD,B.bpB,B.bxi,B.bxc,B.bxe,B.bxd,B.bxf,B.bxg,B.bxu,B.bxv,B.bxt])
x(A.n8,[B.aVs,B.bsX,B.aVH,B.aVI,B.bwx,B.bqb,B.bqa,B.bpF,B.bpG,B.bxh])
x(A.B1,[B.mJ,B.Ca,B.Ek,B.Bj])
w(B.Ro,A.hh)
x(A.P,[B.vg,B.AA,B.Az,B.Ay,B.AB])
x(A.U,[B.Vk,B.Xk,B.Xj,B.Xi,B.Xl])
x(A.a5,[B.El,B.T7,B.AP,B.acf])})()
A.ok(b.typeUniverse,JSON.parse('{"kP":{"bp":[]},"AA":{"P":[],"e":[]},"Az":{"P":[],"e":[]},"Ay":{"P":[],"e":[]},"AB":{"P":[],"e":[]},"Ro":{"as":[]},"vg":{"P":[],"e":[]},"Vk":{"U":["vg"]},"El":{"a5":[],"e":[]},"T7":{"a5":[],"e":[]},"Xk":{"U":["AA"]},"AP":{"a5":[],"e":[]},"Xj":{"U":["Az"]},"Xi":{"U":["Ay"]},"acf":{"a5":[],"e":[]},"Xl":{"U":["AB"]}}'))
var y=(function rtii(){var x=A.a3
return{u:x("qa"),c:x("ey<u>"),r:x("d_<u>"),k:x("y<m5>"),n:x("y<ey<u>>"),I:x("y<d_<u>>"),R:x("y<h2>"),Z:x("y<aA<h,@>>"),d:x("y<OG>"),s:x("y<h>"),p:x("y<e>"),t:x("y<u>"),m:x("bj"),j:x("Q<@>"),L:x("Q<u>"),P:x("aA<h,@>"),f:x("aA<@,@>"),x:x("ak<h,u>"),a:x("bo"),K:x("N"),B:x("Fe"),l:x("+(u,u)"),e:x("cD<m5>"),N:x("h"),C:x("Gv"),D:x("Gw"),X:x("Rp"),_:x("Gx"),U:x("aG<h>"),G:x("mJ"),q:x("oh"),b:x("b4<H?>"),y:x("A"),i:x("K"),z:x("@"),S:x("u"),A:x("bj?"),Y:x("aA<@,@>?"),O:x("N?"),M:x("+quota,usage(u,u)?"),o:x("dd"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.m6=new B.Ca(0,"none")
D.m7=new B.Ca(1,"learning")
D.e1=new B.Ca(2,"memorized")
D.ZE=new A.at(0,1/0,0,320)
D.dH=new A.H(1,0.9725490196078431,0.44313725490196076,0.44313725490196076,C.l)
D.ZN=new A.aq(D.dH,null,null,null,null,null,C.cp)
D.d0=new A.H(1,0.984313725490196,0.7490196078431373,0.1411764705882353,C.l)
D.aeL=new A.a4(C.C0,null,C.c4,null,null,null)
D.b2c=new A.r("\u0627\u0644\u0646\u0635 \u0645\u062e\u0641\u064a \u2014 \u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.el,null,null,null,null,null,null,null,null)
D.aSb=new A.t(!0,C.eZ,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b0j=new A.r("(\u062f\u0648\u0633 \u0647\u0646\u0627 \u0644\u0648 \u0639\u0627\u064a\u0632 \u062a\u0628\u0635)",null,D.aSb,null,null,null,null,null,null,null,null)
D.art=x([D.aeL,C.U,D.b2c,D.b0j],y.p)
D.a5o=new A.ja(C.x,C.f,C.h,C.j,null,C.b2,null,0,D.art,null)
D.a8Q=new A.Z(0,18,0,18)
D.a8U=new A.Z(0,26,0,26)
D.a8Z=new A.Z(0,4,0,6)
D.a9d=new A.Z(14,12,14,14)
D.a9N=new A.Z(3,0,0,0)
D.ac2=new A.a2(63251,"MaterialIcons",null,!1)
D.nl=new A.a2(63677,"MaterialIcons",null,!1)
D.acy=new A.a2(983256,"MaterialIcons",null,!1)
D.acw=new A.a2(983209,"MaterialIcons",null,!1)
D.ad0=new A.a4(D.acw,28,C.q,null,null,null)
D.ads=new A.a4(C.BK,null,N.hp,null,null,null)
D.abU=new A.a2(62961,"MaterialIcons",null,!1)
D.adL=new A.a4(D.abU,null,null,null,null,null)
D.ac0=new A.a2(63199,"MaterialIcons",null,!1)
D.adM=new A.a4(D.ac0,null,null,null,null,null)
D.adP=new A.a4(C.hC,null,C.eZ,null,null,null)
D.adR=new A.a4(C.kS,44,C.i,null,null,null)
D.ae8=new A.a4(D.nl,null,D.dH,null,null,null)
D.aeh=new A.a4(C.tX,null,D.dH,null,null,null)
D.aer=new A.a4(C.BG,null,null,null,null,null)
D.aes=new A.a4(D.nl,null,null,null,null,null)
D.Cn=new A.a4(C.nq,null,null,null,null,null)
D.aeJ=new A.a4(C.kP,20,D.d0,null,null,null)
D.aeX=new A.a4(C.nn,30,C.q,null,null,null)
D.afe=new A.a4(C.no,16,C.q,null,null,null)
D.acf=new A.a2(63520,"MaterialIcons",null,!1)
D.afq=new A.a4(D.acf,null,null,null,null,null)
D.afv=new A.a4(C.kR,null,null,null,null,null)
D.afB=new A.a4(C.Bw,null,null,null,null,null)
D.D7=x([1,3,5],y.t)
D.DV=x(["\u0627\u0639\u0648\u0630","\u0628\u0627\u0644\u0644\u0647","\u0645\u0646","\u0627\u0644\u0634\u064a\u0637\u0627\u0646","\u0627\u0644\u0631\u062c\u064a\u0645"],y.s)
D.aCe=new A.a_(C.hx,T.qL,null)
D.aoY=x([D.aCe],y.p)
D.aFz=new A.R(C.j1,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0629 \u0628\u0635\u0648\u062a \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062d\u0635\u0631\u064a (\u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645) \u0645\u0631\u0629 \u0623\u0648 \u0663 \u0623\u0648 \u0665 \u0645\u0631\u0627\u062a.")
D.aFr=new A.R(D.nl,"\u0633\u0645\u0651\u0639\u0647\u0627 \u0645\u0646 \u062d\u0641\u0638\u0643 \u2014 \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0644\u0648\u0651\u0646\u0644\u0643 \u0643\u0644 \u0643\u0644\u0645\u0629: \u0623\u062e\u0636\u0631 \u0635\u062d\u060c \u0623\u0635\u0641\u0631 \u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0623\u062d\u0645\u0631 \u063a\u0644\u0637.")
D.aFM=new A.R(C.fy,"\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0645\u0627 \u062a\u0633\u0645\u0651\u0639\u0647\u0627 \u0635\u062d \u0645\u0631\u062a\u064a\u0646 \u0648\u0631\u0627 \u0628\u0639\u0636 (\u062a\u0642\u062f\u0631 \u062a\u063a\u064a\u0651\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a).")
D.acm=new A.a2(63625,"MaterialIcons",null,!1)
D.aFV=new A.R(D.acm,"\u0643\u0644 \u062f\u0647 \u0628\u064a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u2014 \u0635\u0648\u062a\u0643 \u0645\u0634 \u0628\u064a\u062a\u0631\u0641\u0639 \u0639\u0644\u0649 \u0623\u064a \u0633\u064a\u0631\u0641\u0631.")
D.aqF=x([D.aFz,D.aFr,D.aFM,D.aFV],A.a3("y<+(a2,h)>"))
D.asB=x([D.m6,D.m7,D.e1],A.a3("y<Ca>"))
D.Iq=x(["\u0628\u0633\u0645","\u0627\u0644\u0644\u0647","\u0627\u0644\u0631\u062d\u0645\u0646","\u0627\u0644\u0631\u062d\u064a\u0645"],y.s)
D.azl=new B.Ek(0,"idle")
D.OA=new B.Ek(1,"loading")
D.hU=new B.Ek(2,"ready")
D.azm=new B.Ek(3,"failed")
D.ae6=new A.a4(C.df,18,G.c5,null,null,null)
D.b2Q=new A.r("\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u062c\u0627\u0647\u0632 \u064a\u0633\u0645\u0639\u0643",null,K.pH,null,null,null,null,null,null,null,null)
D.ao5=x([D.ae6,C.by,D.b2Q],y.p)
D.aL9=new A.ir(C.az,C.f,C.h,C.j,null,C.b2,null,0,D.ao5,null)
D.aBx=new A.a_(C.aA,D.aL9,null)
D.a9K=new A.Z(2,6,2,4)
D.aRQ=new A.t(!0,C.q,null,null,null,null,14,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXU=new A.r("\u0627\u0628\u062f\u0623 \u0645\u0646 \u0647\u0646\u0627 \u2014 \u0627\u0644\u0641\u0627\u062a\u062d\u0629 \u0648\u062c\u0632\u0621 \u0639\u0645\u0651",null,D.aRQ,null,null,null,null,null,null,null,null)
D.aBF=new A.a_(D.a9K,D.aXU,null)
D.b2Z=new A.r("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.el,null,null,null,null,null,null,null,null)
D.apg=x([O.pl,C.ar,D.b2Z],y.p)
D.aL7=new A.ir(C.az,C.c9,C.h,C.j,null,C.b2,null,0,D.apg,null)
D.aBM=new A.a_(Q.rM,D.aL7,null)
D.x_=new A.t(!0,D.d0,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b36=new A.r("\u0646\u0635\u064a\u062d\u0629: \u0627\u062d\u0641\u0638 \u0663\u2013\u0665 \u0622\u064a\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0631\u0629 \u0623\u0633\u0647\u0644.",null,D.x_,null,null,null,null,null,null,null,null)
D.aBP=new A.a_(C.fx,D.b36,null)
D.b2M=new A.r("\u0644\u0633\u0647 \u0645\u0633\u0645\u0651\u0639\u062a\u0634 \u0623\u064a \u0622\u064a\u0629 \u2014 \u0627\u0628\u062f\u0623 \u0628\u0633\u0648\u0631\u0629 \u0642\u0635\u064a\u0631\u0629 \u0645\u0646 \u062c\u0632\u0621 \u0639\u0645\u0651.",null,F.al,C.ad,null,null,null,null,null,null,null)
D.aBV=new A.a_(C.C,D.b2M,null)
D.a9H=new A.Z(2,0,2,8)
D.b0r=new A.r("\u0627\u0644\u0633\u0648\u0631 \u0627\u0644\u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u060c \u0645\u0646 \u0627\u0644\u0646\u0627\u0633 \u0644\u062d\u062f \u0627\u0644\u0646\u0628\u0623.",null,F.al,null,null,null,null,null,null,null,null)
D.aC8=new A.a_(D.a9H,D.b0r,null)
D.afk=new A.a4(C.hD,30,C.q,null,null,null)
D.aWt=new A.t(!0,C.i,null,null,null,null,17,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b3w=new A.r("\u0633\u0645\u0651\u0639\u060c \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0642\u0648\u0644\u0643 \u0635\u062d \u0648\u0644\u0627 \u063a\u0644\u0637",null,D.aWt,null,null,null,null,null,null,null,null)
D.aan=new A.dD(1,C.aS,D.b3w,null)
D.apt=x([D.afk,C.aV,D.aan],y.p)
D.aL_=new A.ir(C.az,C.f,C.h,C.j,null,C.b2,null,0,D.apt,null)
D.af4=new A.a4(C.fy,18,G.c5,null,null,null)
D.Vp=new A.t(!0,G.c5,null,null,null,null,12,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b2x=new A.r("\u0645\u062d\u0641\u0648\u0638\u0629",null,D.Vp,null,null,null,null,null,null,null,null)
D.aov=x([D.af4,C.fX,D.b2x],y.p)
D.aL6=new A.ir(C.az,C.f,C.V,C.j,null,C.b2,null,0,D.aov,null)
D.aNg=new A.G(0,30)
D.pk=new A.G(1/0,54)
D.aNr=new A.G(1/0,48)
D.aNu=new A.G(1/0,50)
D.aNx=new A.G(1/0,52)
D.aNA=new A.cr(16,null,null,null)
D.aNE=new A.cr(14,14,O.yR,null)
D.b1o=new A.r("safe mode / no-gpu flags cleared (reload)",null,null,null,null,null,null,null,null,null,null)
D.aO6=new A.hL(D.b1o,null,null,null,null,null,null,null,null,null,null,null,null,C.z,!1,null,null,null,C.k,null)
D.aRi=new A.t(!0,C.i,null,null,null,null,14.5,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRI=new A.t(!0,C.a6,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.wS=new A.t(!0,D.dH,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSW=new A.t(!0,C.i,null,null,null,null,12,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ie=new A.t(!0,C.i,null,"AmiriQuranMT",null,null,27,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUp=new A.t(!0,C.cs,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vs=new A.t(!0,D.dH,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUO=new A.t(!0,C.q,null,null,null,null,24,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vv=new A.t(!0,C.i,null,null,null,null,12.5,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aV1=new A.t(!0,C.q,null,null,null,null,null,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVD=new A.t(!0,D.d0,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVE=new A.t(!0,G.c5,null,null,null,null,null,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVW=new A.t(!0,C.i,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXj=new A.r("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u062e\u0631 \u0645\u0631\u0629",null,C.ih,null,null,null,null,null,null,null,null)
D.aXF=new A.r("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643 (\u062e\u0628\u0651\u064a \u0627\u0644\u0646\u0635)",null,C.cW,null,null,null,null,null,null,null,null)
D.aXW=new A.r("\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,C.pB,null,null,null,null,null,null,null,null)
D.aXZ=new A.r("\u2022 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641: \u0645\u0634\u0631\u0648\u0639 \u062a\u0646\u0632\u064a\u0644 Tanzil (\u062a\u0631\u062e\u064a\u0635 CC BY 3.0).",null,F.al,null,null,null,null,null,null,null,null)
D.aSU=new A.t(!0,G.c5,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aY6=new A.r("\u0648\u0635\u0644\u062a\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2014 \u0634\u0643\u0631\u064b\u0627\u060c \u0647\u0646\u0628\u0635 \u0639\u0644\u064a\u0647\u0627.",null,D.aSU,null,null,null,null,null,null,null,null)
D.aY9=new A.r("\u062e\u0628\u0651\u064a \u0646\u0635 \u0627\u0644\u0622\u064a\u0629 \u0648\u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,F.al,null,null,null,null,null,null,null,null)
D.aYf=new A.r("\u0639\u062f\u0651\u064a \u0644\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.el,null,null,null,null,null,null,null,null)
D.aYY=new A.r("\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0627\u0628\u062f\u0623",null,C.cG,null,null,null,null,null,null,null,null)
D.aZn=new A.r("\u064a\u0644\u0627 \u0646\u0628\u062f\u0623",null,C.cH,null,null,null,null,null,null,null,null)
D.aZr=new A.r("\u0645\u0645\u0643\u0646 \u062a\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 \u062f\u0644\u0648\u0642\u062a\u064a \u0644\u062d\u062f \u0645\u0627 \u064a\u062e\u0644\u0635.",null,F.al,null,null,null,null,null,null,null,null)
D.aZJ=new A.r("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.x0,null,null,null,null,null,null,null,null)
D.b_7=new A.r("\u062c\u0631\u0651\u0628 \u0639\u0644\u0649 \u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a (\u0644\u0644\u062a\u062c\u0631\u0628\u0629)",null,null,null,null,null,null,null,null,null,null)
D.b_q=new A.r("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643",null,K.lH,null,null,null,null,null,null,null,null)
D.b_M=new A.r("reset safe mode / WebGPU ban",null,C.wO,null,null,null,null,null,null,null,null)
D.b_R=new A.r("\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629",null,D.x_,null,null,null,null,null,null,null,null)
D.b_V=new A.r("\u0628\u0639\u062f \u062d\u0648\u0627\u0644\u064a \u062b\u0627\u0646\u064a\u0629 \u0633\u0643\u0648\u062a",null,F.al,null,null,null,null,null,null,null,null)
D.b09=new A.r("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636",null,F.b_,null,null,null,null,null,null,null,null)
D.b0i=new A.r("\u0623\u062e\u0636\u0631: \u0645\u062d\u0641\u0648\u0638\u0629 \u2014 \u0623\u0635\u0641\u0631: \u0628\u062a\u0631\u0627\u062c\u0639\u0647\u0627 \u2014 \u0631\u0645\u0627\u062f\u064a: \u0644\u0633\u0647",null,F.al,null,null,null,null,null,null,null,null)
D.b0s=new A.r("\u0645\u0641\u064a\u0634 \u0633\u0648\u0631\u0629 \u0628\u0627\u0644\u0627\u0633\u0645 \u062f\u0647",null,F.al,null,null,null,null,null,null,null,null)
D.aWv=new A.t(!0,C.q,null,null,null,null,12.5,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b1g=new A.r("\u0627\u0628\u0639\u062a \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aWv,null,null,null,null,null,null,null,null)
D.aU9=new A.t(!0,D.dH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b1h=new A.r("\u0627\u0628\u062f\u0623 \u0627\u0644\u0633\u0648\u0631\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644",null,D.aU9,null,null,null,null,null,null,null,null)
D.b1w=new A.r("\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f \u0643\u0627\u0645 \u062a\u0633\u0645\u064a\u0639 \u0635\u062d \u0648\u0631\u0627 \u0628\u0639\u0636\u061f",null,K.lH,null,null,null,null,null,null,null,null)
D.aR4=new A.t(!0,C.i,null,null,null,null,null,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b1M=new A.r("\u0627\u0644\u0645\u0635\u0627\u062f\u0631",null,D.aR4,null,null,null,null,null,null,null,null)
D.b1X=new A.r("\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.cG,null,null,null,null,null,null,null,null)
D.b29=new A.r("\u062a\u0645\u0633\u062d \u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0633\u0648\u0631\u0629 \u062f\u064a\u061f",null,null,null,null,null,null,null,null,null,null)
D.b2i=new A.r("\u0633\u0645\u0651\u0639\u0647\u0645 \u062a\u0627\u0646\u064a",null,null,null,null,null,null,null,null,null,null)
D.b2E=new A.r("\u0627\u0645\u0633\u062d",null,null,null,null,null,null,null,null,null,null)
D.b2F=new A.r("\u2022 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: whisper-base-ar-quran \u0645\u0646 Tarteel (\u062a\u0631\u062e\u064a\u0635 Apache-2.0)\u060c \u0628\u0635\u064a\u063a\u0629 ONNX \u0645\u0646 \u0645\u0634\u0631\u0648\u0639 Basira\u060c \u0648\u0628\u064a\u0634\u062a\u063a\u0644 \u062c\u0648\u0651\u0647 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0628\u0645\u0643\u062a\u0628\u0629 Transformers.js.",null,F.al,null,null,null,null,null,null,null,null)
D.b2G=new A.r("\u062e\u0644\u0635\u062a",null,C.jQ,null,null,null,null,null,null,null,null)
D.b2H=new A.r("\u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647 \u0630\u0627\u0643\u0631\u062a\u0647 \u0642\u0644\u064a\u0644\u0629 \u2014 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0645\u0643\u0646 \u064a\u0643\u0648\u0646 \u0628\u0637\u064a\u0621 \u0639\u0644\u064a\u0647.",null,D.x_,null,null,null,null,null,null,null,null)
D.aV3=new A.t(!0,C.cs,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,C.h_,null,null,null,null,null,null,null,null)
D.b33=new A.r("\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aV3,null,null,null,null,null,null,null,null)
D.b39=new A.r("\u0623\u0648\u0644 \u0645\u0631\u0629 \u0628\u0633: \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,F.b_,null,null,null,null,null,null,null,null)
D.b3b=new A.r("\u0648\u0642\u0651\u0641 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0644\u0648\u062d\u062f\u0647 \u0644\u0645\u0627 \u0623\u0633\u0643\u062a",null,C.cW,null,null,null,null,null,null,null,null)
D.b3v=new A.r("\u2022 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: \u0627\u0644\u0634\u064a\u062e \u0645\u062d\u0645\u0648\u062f \u062e\u0644\u064a\u0644 \u0627\u0644\u062d\u0635\u0631\u064a \u2014 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645\u060c \u0645\u0646 everyayah.com.",null,F.al,null,null,null,null,null,null,null,null)
D.Wc=new B.acf(null)
D.b4b=new B.Ay(null)
D.b4c=new B.Rn(2,1,!0,!1,!1)
D.Wd=new B.Rp(!1,!1,!1,!1,!1,0)
D.h8=new B.mJ(0,"ok")
D.pX=new B.mJ(1,"near")
D.pY=new B.mJ(2,"wrong")
D.pZ=new B.mJ(3,"missing")
D.WC=new B.mJ(4,"extra")
D.acb=new A.a2(63456,"MaterialIcons",null,!1)
D.b9L=new B.AP(D.d0,D.acb,"\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629","\u0642\u0631\u0651\u0628 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0646\u0643 \u0648\u0627\u0642\u0631\u0627 \u0628\u0635\u0648\u062a \u0648\u0627\u0636\u062d \u0641\u064a \u0645\u0643\u0627\u0646 \u0647\u0627\u062f\u064a\u060c \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a.",null)
D.ba5=new B.T7(!1,null)
D.xx=new B.T7(!0,null)
D.k2=new B.Bj(0,"idle")
D.q9=new B.Bj(1,"playing")
D.qa=new B.Bj(2,"recording")
D.lZ=new B.Bj(3,"thinking")
D.he=new B.Bj(4,"result")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cd1","bD_",()=>new B.acg())
x($,"cgc","bRN",()=>A.aO("\u0640[\u064b-\u0652]*\u0670",!0,!1))
x($,"cgd","bRO",()=>A.aO("\u0640[\u064b-\u0652]*[\u06e6\u06e7]",!0,!1))
x($,"cgo","bRW",()=>A.aO("\u0648\u0670",!0,!1))
x($,"cfM","bRu",()=>A.aO("[\u0648\u064a\u0649][\u064b-\u0652]*[\u0654]",!0,!1))
x($,"ceh","bQw",()=>A.aO("\u0627[\u0654\u0655]",!0,!1))
x($,"cfo","bRd",()=>A.aO("[\u0654\u0655]",!0,!1))
x($,"cei","bQx",()=>A.aO("[\u0622\u0623\u0625\u0671\u0672\u0673]",!0,!1))
x($,"ceo","bQC",()=>A.aO("[\u0624\u0626]",!0,!1))
x($,"cfq","bRf",()=>A.aO("[\u064b-\u065f\u0670\u06d6-\u06ed\u08d3-\u08ff\u0640]",!0,!1))
x($,"cfR","bRx",()=>A.aO("[\u06dd\u06de\u0660-\u0669\u06f0-\u06f90-9]",!0,!1))
x($,"cfx","bRl",()=>A.aO("[^\u0621-\u064a\\s]",!0,!1))
x($,"cgb","bDA",()=>A.aO("\\s+",!0,!1))
x($,"cak","q_",()=>B.bSR(D.m6,0,A.byM(0,!0)))
x($,"cd2","Jp",()=>new B.Ro($.bD_(),D.b4c,B.c_P(),D.azl,$.a7()))})()};
(a=>{a["ZXv2f5/kOesLWrYbUSKhGiwRYaI="]=a.current})($__dart_deferred_initializers__);