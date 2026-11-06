((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,P,R,H,N,G,O,S,T,K,L,B={
c_K(d){var x,w,v,u,t,s
if(d instanceof B.kP)return d
try{x=A.cs(d)
w=x.code
v=x.message
u=w==null?"failed":A.a8(w)
t=v==null?"":A.a8(v)
return new B.kP(u,t)}catch(s){u=A.f(d)
return new B.kP("failed",u)}},
acf:function acf(){this.b=this.a=null},
aVn:function aVn(d){this.a=d},
aVq:function aVq(){},
aVp:function aVp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aVo:function aVo(d){this.a=d},
aVu:function aVu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aVs:function aVs(d){this.a=d},
aVt:function aVt(d){this.a=d},
aVv:function aVv(d){this.a=d},
aVx:function aVx(d,e,f){this.a=d
this.b=e
this.c=f},
aVw:function aVw(d,e,f){this.a=d
this.b=e
this.c=f},
aVr:function aVr(){},
c_L(d,e){return new B.kP(d,e)},
Rq:function Rq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.w=i},
Gu:function Gu(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i
_.w=j},
Gw:function Gw(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Gv:function Gv(d,e){this.a=d
this.b=e},
kP:function kP(d,e){this.a=d
this.b=e},
bNg(d){var x,w=$.bRK()
w=A.bS(d,w,"\u0627")
x=$.bRL()
w=A.bS(w,x,"\u064a")
x=$.bRT()
w=A.bS(w,x,"\u0627")
x=$.bQt()
w=A.bS(w,x,"\u0627")
x=$.bRr()
w=A.bS(w,x,"\u0621")
x=$.bRa()
w=A.bS(w,x,"\u0621")
x=$.bQu()
w=A.bS(w,x,"\u0627")
x=$.bQz()
w=A.bS(w,x,"\u0621")
w=A.bS(w,"\u0649","\u064a")
w=A.bS(w,"\u0629","\u0647")
x=$.bRc()
w=A.bS(w,x,"")
x=$.bRu()
w=A.bS(w,x," ")
x=$.bRi()
w=A.bS(w,x," ")
x=$.bDz()
return C.c.ak(A.bS(w,x," "))},
c4b(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.length,k=e.length
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
bxA(d,e){var x,w,v,u,t,s
if(d===e)return 1
x=A.aP("[\u0627\u0621]",!0,!1)
w=A.bS(d,x,"")
x=A.aP("[\u0627\u0621]",!0,!1)
v=A.bS(e,x,"")
if(w.length!==0&&w===v)return 1
u=d.length
t=e.length
u=u>t?u:t
if(u===0)return 1
s=1-B.c4b(d,e)/u
return s>=1?0.99:s},
BQ(d){var x,w,v,u,t,s,r,q=A.a([],y.d)
for(x=C.c.qY(d,$.bDz()),w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.length===0)continue
t=B.bNg(u)
s=A.bS(t," ","")
if(s.length===0){if(q.length!==0){r=q.pop()
q.push(new B.OI(r.a+" "+u,r.b))}continue}q.push(new B.OI(u,s))}return q},
c2Y(d,e){var x,w,v,u,t=new B.bsS(),s=A.a([],y.s)
for(x=A.eS(e,0,A.ic(5,"count",y.S),A.ae(e).c),w=x.$ti,x=new A.bV(x,x.gL(0),w.i("bV<aH.E>")),w=w.i("aH.E");x.u();){v=x.d
s.push((v==null?w.a(v):v).b)}u=!t.$2(s,D.DS)&&t.$2(d,D.DS)?C.b.it(d,5):d
return!t.$2(s,D.In)&&t.$2(u,D.In)?C.b.it(u,4):u},
bMf(d,e){var x=B.BQ(d),w=B.bNg(e),v=y.U
v=A.a0(new A.aG(A.a(w.split(" "),y.s),new B.bul(),v),v.i("M.E"))
return new B.Fd(x,B.c2b(x,B.c2Y(v,x)),w)},
c2b(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=A.a([],y.s)
for(x=a5.length,w=0;w<a5.length;a5.length===x||(0,A.B)(a5),++w)a4.push(a5[w].b)
v=a4.length
u=a6.length
t=u+1
x=(v+1)*t
s=y.i
r=A.bR(x,0,!1,s)
q=A.bR(x,0,!1,y.S)
p=A.bR(v*(u===0?1:u),0,!1,s)
for(o=0;o<v;++o)for(x=o*u,n=0;n<u;++n)p[x+n]=B.bxA(a4[o],a6[n])
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
e=2}if(n>=2&&r[h-2]<g&&B.bxA(a4[m],a6[n-2]+a6[n-1])>=1){g=r[h-2]
e=3}if(s&&r[i+n-1]<g&&B.bxA(a4[j]+a4[m],a6[n-1])>=1){g=r[i+n-1]
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
if(a2>=1)m=D.h7
else m=a2>=0.6?D.pV:D.pW
a1.push(new B.m4(o,x,s,m))
break
case 1:--o
a1.push(new B.m4(o,a4[o],null,D.pX))
break
case 2:--n
a1.push(new B.m4(null,null,a6[n],D.Wz))
break
case 3:--o
a3=n-2
a1.push(new B.m4(o,a4[o],a6[a3]+" "+a6[n-1],D.h7))
n=a3
break
default:x=o-1;--n
a1.push(new B.m4(x,a4[x],a6[n],D.h7))
o-=2
a1.push(new B.m4(o,a4[o],a6[n],D.h7))}}a4=y.e
a4=A.a0(new A.cD(a1,a4),a4.i("aH.E"))
return a4},
mH:function mH(d,e){this.a=d
this.b=e},
OI:function OI(d,e){this.a=d
this.b=e},
m4:function m4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Fd:function Fd(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
aMK:function aMK(d){this.a=d},
aMJ:function aMJ(){},
bsS:function bsS(){},
bul:function bul(){},
bSO(d,e,f){return new B.qa(d,e,f)},
c50(d){var x
A:{if("memorized"===d){x=D.e0
break A}if("learning"===d){x=D.m5
break A}x=D.m4
break A}return x},
bOd(d,e){return d>=1&&d<=114&&e>=1&&e<=I.c7[d-1].a[1]},
c_M(){var x=y.S
return new B.acg(A.x(x,y.u),A.aF(x))},
aVz(d){var x=d.io()
return C.c.dt(C.e.j(A.cL(x)),4,"0")+"-"+C.c.dt(C.e.j(A.cj(x)),2,"0")+"-"+C.c.dt(C.e.j(A.cB(x)),2,"0")},
bJm(d){var x=y.x,w=A.a0(new A.ak(A.a(d.split("-"),y.s),A.c6h(),x),x.i("aH.E"))
return B.aVz(A.jL(w[0],w[1],w[2]-1,12,0,0,0))},
bAF(d){var x,w,v,u,t,s,r,q,p=y.S,o=A.x(p,y.u),n=A.aF(p),m=new B.acg(o,n),l=d.h(0,"rows")
if(y.f.b(l))for(x=l.gdv(),x=x.ga_(x),w=y.j;x.u();){v=x.gK()
u=A.f2(A.f(v.a),null)
t=v.b
v=!0
if(u!=null)if(w.b(t))if(J.bd(t)>=3){v=C.e.ba(u,1000)
s=C.e.ah(u,1000)
v=!(v>=1&&v<=114&&s>=1&&s<=I.c7[v-1].a[1])}if(v)continue
v=J.bq(t)
r=C.d.bU(A.dr(v.h(t,0)))
if(r<0||r>=3)continue
o.n(0,u,new B.qa(D.asz[r],C.d.bU(A.dr(v.h(t,1))),new A.b2(A.kr(C.d.bU(A.dr(v.h(t,2))),0,!0),0,!0)))}q=d.h(0,"dirty")
if(y.j.b(q)){x=J.bya(q,y.o)
p=A.nr(x,new B.aVy(),x.$ti.i("M.E"),p)
n.E(0,new A.aG(p,o.gWi(),A.w(p).i("aG<M.E>")))}m.c=A.O(d.h(0,"last"))
p=A.bn(d.h(0,"streak"))
p=p==null?null:C.d.bU(p)
p=m.d=p==null?0:p
o=A.bn(d.h(0,"best"))
o=o==null?null:C.d.bU(o)
m.e=o==null?p:o
return m},
ars(d,e){return"https://everyayah.com/data/Husary_Muallim_128kbps/"+C.c.dt(C.e.j(d),3,"0")+C.c.dt(C.e.j(e),3,"0")+".mp3"},
C9:function C9(d,e){this.a=d
this.b=e},
qa:function qa(d,e,f){this.a=d
this.b=e
this.c=f},
acg:function acg(d,e){var _=this
_.a=d
_.b=e
_.c=null
_.e=_.d=0},
aVA:function aVA(){},
aVB:function aVB(){},
aVy:function aVy(){},
Ro:function Ro(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bYi(){return new B.ve(null)},
c8H(d,e){var x,w,v,u,t={},s=I.c7[e-1].a[1],r=$.Jo().c
t.a=1
x=r.a
w=e*1000
v=1
for(;;){if(v<=s){v=x.h(0,w+v)
v=(v==null?$.q_():v).a===D.e0}else v=!1
if(!v)break
v=++t.a}x=t.a
if(x>s){t.a=1
u=1}else u=x
x=s<=10
if(x)u=1
t.b=u
t.c=x?s:C.e.cA(u+4,1,s)
return A.fB(C.dd,new B.bwx(t,s,e),d,!0,null,null,!1,y.l)},
bCo(d){return A.d7(0,0,0,0,0,C.e.cA(C.d.ar(6+d*1.2),25,90))},
bBl(d){return E.aZ(C.e.ba(d,60))+":"+C.c.dt(E.aZ(C.e.ah(d,60)),2,"\u0660")},
bNZ(d){return A.fB(C.dd,new B.bxf($.Jo()),d,!0,null,null,!1,y.H)},
Jh(d){var x,w=d.a
A:{if("timeout"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0627\u062a\u0623\u062e\u0631 \u0623\u0648\u064a \u0648\u0645\u0631\u062f\u0651\u0634\u060c \u0641\u0648\u0642\u0651\u0641\u0646\u0627\u0647 \u0648\u062c\u0631\u0651\u0628\u0646\u0627 \u062a\u0627\u0646\u064a \u0628\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0623\u062e\u0641 \u0648\u0645\u0646\u0641\u0639\u0634. \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}if("crashed"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0642\u0641 \u0641\u062c\u0623\u0629 (\u063a\u0627\u0644\u0628\u064b\u0627 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0634 \u0645\u0643\u0641\u064a\u0629). \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}x=d.gjT()
break A}return x},
c9Z(d,e,f){var x,w=new B.bxt(),v=w.$1(f),u=w.$1("\xab\u0627\u0644\u0645\u062d\u0641\u0651\u0638\xbb \u0645\u0634\u0643\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 ("+e+")\n"+d.a+": "+d.b+"\n"),t=1990-u.length
if(v.length>t)v=t<=1?"":C.c.Y(v,0,t-1)+"\u2026"
x=u+v
return x.length>1990?C.c.Y(x,0,1990):x},
bO8(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
try{x=y.P.a(C.a1.eV(a4,null))
s=y.Y
r=s.a(J.b5(x,"rec"))
w=r==null?C.cF:r
q=s.a(J.b5(x,"last"))
v=q==null?C.cF:q
u=new B.bxs()
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
a0=J.bd(t)!==0?" \xb7 recovered from "+A.f(t):""
a1=J.c(J.b5(x,"safe"),!0)?" \xb7 safe mode":""
a2=J.c(J.b5(x,"nogpu"),!0)?" \xb7 no-gpu":""
return"record "+s+" s ("+p+", "+o+" Hz, peak "+n+", "+m+") \u2192 stop/decode "+l+" ms \u2192 resample "+k+" ms \u2192 infer "+j+" ms (mel "+i+", enc "+h+", dec "+g+") \u2192 wall "+f+" ms \xb7 "+e+" \xd7"+d+a0+a1+a2}catch(a3){return""}},
Eh:function Eh(d,e){this.a=d
this.b=e},
Rp:function Rp(d,e,f,g,h){var _=this
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
aVC:function aVC(d){this.a=d},
aVD:function aVD(d){this.a=d},
aVE:function aVE(d){this.a=d},
ve:function ve(d){this.a=d},
Vl:function Vl(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.w=_.r=null},
bi2:function bi2(d){this.a=d},
bi1:function bi1(d,e){this.a=d
this.b=e},
bi3:function bi3(d){this.a=d},
bi0:function bi0(d,e){this.a=d
this.b=e},
bi4:function bi4(){},
bhP:function bhP(){},
bhV:function bhV(d,e,f){this.a=d
this.b=e
this.c=f},
bhW:function bhW(){},
bhZ:function bhZ(d){this.a=d},
bhY:function bhY(){},
bi_:function bi_(d){this.a=d},
bhS:function bhS(d,e){this.a=d
this.b=e},
bhT:function bhT(d){this.a=d},
bhR:function bhR(){},
bhU:function bhU(d){this.a=d},
bhQ:function bhQ(d){this.a=d},
bhX:function bhX(d,e){this.a=d
this.b=e},
Ei:function Ei(d,e,f){this.c=d
this.d=e
this.a=f},
T9:function T9(d,e){this.c=d
this.a=e},
bwx:function bwx(d,e,f){this.a=d
this.b=e
this.c=f},
bwu:function bwu(d,e,f){this.a=d
this.b=e
this.c=f},
bww:function bww(d,e){this.a=d
this.b=e},
bwt:function bwt(d,e){this.a=d
this.b=e},
bws:function bws(d,e){this.a=d
this.b=e},
bwv:function bwv(d,e){this.a=d
this.b=e},
bwo:function bwo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bwn:function bwn(d,e,f){this.a=d
this.b=e
this.c=f},
bwp:function bwp(d){this.a=d},
bwq:function bwq(d){this.a=d},
bwr:function bwr(d,e){this.a=d
this.b=e},
Bi:function Bi(d,e){this.a=d
this.b=e},
Az:function Az(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Xl:function Xl(d,e){var _=this
_.d=d
_.e=$
_.f=e
_.w=_.r=null
_.x=!1
_.y=0
_.ax=_.at=_.as=_.Q=_.z=null
_.ay=0
_.c=_.a=_.ch=null},
bpU:function bpU(){},
bq9:function bq9(d,e){this.a=d
this.b=e},
bqd:function bqd(d){this.a=d},
bqe:function bqe(d){this.a=d},
bqf:function bqf(d,e,f){this.a=d
this.b=e
this.c=f},
bqh:function bqh(d){this.a=d},
bqi:function bqi(d){this.a=d},
bqg:function bqg(){},
bqk:function bqk(d){this.a=d},
bqj:function bqj(d){this.a=d},
bql:function bql(d,e){this.a=d
this.b=e},
bqn:function bqn(d){this.a=d},
bqo:function bqo(d){this.a=d},
bqm:function bqm(){},
bq8:function bq8(d,e,f){this.a=d
this.b=e
this.c=f},
bqa:function bqa(d,e,f){this.a=d
this.b=e
this.c=f},
bq1:function bq1(d){this.a=d},
bq2:function bq2(d){this.a=d},
bq0:function bq0(){},
bq3:function bq3(){},
bq4:function bq4(d,e){this.a=d
this.b=e},
bqt:function bqt(d){this.a=d},
bqu:function bqu(d){this.a=d},
bqv:function bqv(d,e){this.a=d
this.b=e},
bqs:function bqs(d){this.a=d},
bqw:function bqw(d,e){this.a=d
this.b=e},
bq7:function bq7(){},
bq6:function bq6(d){this.a=d},
bq5:function bq5(d,e){this.a=d
this.b=e},
bqc:function bqc(d){this.a=d},
bqb:function bqb(d){this.a=d},
bqp:function bqp(){},
bqq:function bqq(){},
bqr:function bqr(){},
bpV:function bpV(d,e,f){this.a=d
this.b=e
this.c=f},
bpW:function bpW(d){this.a=d},
bpY:function bpY(){},
bpX:function bpX(){},
bpZ:function bpZ(d){this.a=d},
bq_:function bq_(d){this.a=d},
AO:function AO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Ay:function Ay(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Xk:function Xk(d,e,f,g,h){var _=this
_.d=d
_.e=null
_.f=e
_.r=f
_.w=g
_.x=0
_.as=_.Q=_.z=_.y=null
_.at=h
_.c=_.a=null},
bpD:function bpD(){},
bpM:function bpM(d,e){this.a=d
this.b=e},
bpN:function bpN(d){this.a=d},
bpL:function bpL(){},
bpP:function bpP(d){this.a=d},
bpO:function bpO(d,e){this.a=d
this.b=e},
bpQ:function bpQ(d,e){this.a=d
this.b=e},
bpH:function bpH(d,e){this.a=d
this.b=e},
bpI:function bpI(d,e,f){this.a=d
this.b=e
this.c=f},
bpJ:function bpJ(d,e,f){this.a=d
this.b=e
this.c=f},
bpE:function bpE(d,e,f){this.a=d
this.b=e
this.c=f},
bpF:function bpF(d,e,f){this.a=d
this.b=e
this.c=f},
bpG:function bpG(d,e){this.a=d
this.b=e},
bpK:function bpK(d){this.a=d},
bpR:function bpR(){},
bpS:function bpS(d,e){this.a=d
this.b=e},
bpT:function bpT(d,e){this.a=d
this.b=e},
Ax:function Ax(d){this.a=d},
Xj:function Xj(d){this.d=d
this.c=this.a=null},
bpu:function bpu(){},
bpB:function bpB(d){this.a=d},
bpC:function bpC(){},
bpA:function bpA(d,e){this.a=d
this.b=e},
bpz:function bpz(d,e,f){this.a=d
this.b=e
this.c=f},
bpy:function bpy(d,e,f){this.a=d
this.b=e
this.c=f},
bpx:function bpx(d){this.a=d},
bpv:function bpv(d){this.a=d},
bpw:function bpw(d){this.a=d},
bxf:function bxf(d){this.a=d},
bxe:function bxe(d){this.a=d},
bx9:function bx9(d,e){this.a=d
this.b=e},
bxb:function bxb(){},
bxa:function bxa(){},
bxc:function bxc(d,e){this.a=d
this.b=e},
bxd:function bxd(d,e){this.a=d
this.b=e},
ace:function ace(d){this.a=d},
aVm:function aVm(d){this.a=d},
bxt:function bxt(){},
bxu:function bxu(){},
AA:function AA(d,e,f){this.c=d
this.d=e
this.a=f},
Xm:function Xm(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.r=null},
bqx:function bqx(d){this.a=d},
bqy:function bqy(d){this.a=d},
bqz:function bqz(d,e){this.a=d
this.b=e},
bqA:function bqA(d){this.a=d},
bqC:function bqC(d){this.a=d},
bqB:function bqB(d){this.a=d},
bxs:function bxs(){}},D,Q,I,E,F
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
B.acf.prototype={
pk(){var x=this,w=x.a
if(w!=null)return A.dO(w,y.m)
w=x.b
return w==null?x.b=new B.aVn(x).$0():w},
rj(d,e){return this.azz(d,e,e)},
azz(d,e,f){var x=0,w=A.o(f),v,u=2,t=[],s,r,q,p
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
r=B.c_K(s)
throw A.p(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$rj,w)},
mX(d,e){var x=A.hz(d[e])
if(x==null)x=null
return x===!0},
He(){var x=0,w=A.o(y.X),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$He=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
h=A
g=A
x=7
return A.d(s.pk(),$async$He)
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
v=new B.Rq(q,p,o,n,m,l)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=D.Wa
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$He,w)},
AS(){var x=0,w=A.o(y.M),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$AS=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=A
l=A
k=A
x=8
return A.d(s.pk(),$async$AS)
case 8:x=7
return A.d(m.e3(l.cs(k.ch(e,"storage",null,null,null,null)),y.A),$async$AS)
case 7:r=e
if(r==null){v=null
x=1
break}q=C.d.ar(A.dm(r.quota))
p=C.d.ar(A.dm(r.usage))
v=new A.alt(q,p)
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
return A.n($async$AS,w)},
b0B(){var x=y.K
A.M4(this.pk().bM(new B.aVq(),x),x)},
pj(d,e){var x=A.jD(d[e])
x=x==null?null:C.d.ar(x)
return x==null?0:x},
aZ7(d,e,f){return this.rj(new B.aVp(this,d,e,f),y.C)},
gaa5(){var x,w
try{x=A.jE(b.G.sessionStorage)
return x}catch(w){return null}},
gagP(){var x=A.hz(b.G.mogtama3yTutorIsolated)
if(x==null)x=null
return x===!0},
a0u(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
try{m=b.G
l=A.hz(m.crossOriginIsolated)
if(l==null)l=f
if(l===!0)return!1
if(this.gagP())return!1
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
l=A.aP("iPad|iPhone|iPod",!0,!1)
if(!l.b.test(w))i=J.c(u,"MacIntel")&&v>1
else i=!0
t=i
l=A.aP("Chrome/|Chromium/|Firefox/|Edg/",!0,!1)
s=l.b.test(w)
if(t||!s)return!1
l=A.jD(x.hardwareConcurrency)
h=l==null?f:l
r=h==null?0:h
if(r>0&&r<3)return!1
q=Date.now()
l=this.gaa5()
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
afu(){var x,w,v,u,t,s,r=null
try{x=this.gaa5()
if(x!=null)A.ch(x,"setItem","mt.tutor.iso",""+Date.now(),r,r)}catch(w){}x=b.G
v=A.cs(x.location)
u=A.a8(v.hash)
t=A.a8(v.search)
s=A.bO(A.a8(A.cs(x.document).baseURI),0,r).W("tutor/").j(0)
x=u.length===0?"#/masjid/tools/tutor":u
A.ch(v,"replace",s+t+x,r,r,r)},
aYR(){var x,w=null,v=b.G,u=A.cs(v.history),t=A.jD(u.length),s=t==null?w:t
if((s==null?0:s)>1)A.ch(u,"back",w,w,w,w)
else{x=A.a8(A.cs(v.document).baseURI)
A.ch(A.cs(v.location),"replace",A.bO(x,0,w).W("./").j(0)+"#/",w,w,w)}},
a0G(d,e,f,g,h){return this.rj(new B.aVu(this,e,d,f,h,g),y.H)},
a0J(){return this.rj(new B.aVv(this),y.D)},
VW(){var x=null,w=this.a
if(w!=null)A.ch(w,"cancelRecording",x,x,x,x)},
abk(d){var x,w,v=this,u=A.O(d.text)
if(u==null)u=null
if(u==null)u=""
x=v.pj(d,"ms")
w=A.jD(d.seconds)
if(w==null)w=null
if(w==null)w=0
return new B.Gw(u,x,w,v.pj(d,"frames"),v.pj(d,"tokens"),v.mX(d,"retried"),v.pj(d,"encMs"),v.pj(d,"decMs"),v.pj(d,"featMs"))},
a88(d){var x={}
x.words=d
return x},
ajF(d,e){return this.rj(new B.aVx(this,d,e),y._)},
b2L(d,e){return this.rj(new B.aVw(this,d,e),y._)},
Fw(d,e){return this.b0G(d,e)},
b0G(d,e){var x=0,w=A.o(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Fw=A.k(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=p==null?7:9
break
case 7:x=10
return A.d(s.pk(),$async$Fw)
case 10:x=8
break
case 9:g=p
case 8:r=g
o=A.ae(d).i("ak<1,h>")
o=A.a0(new A.ak(d,new B.aVr(),o),o.i("aH.E"))
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
b1W(){var x,w,v=null
try{x=this.a
if(x!=null)A.ch(x,"resetDevice",v,v,v,v)}catch(w){}},
Zc(d){var x=this.a
if(x!=null)A.ch(x,"prefetch",d,null,null,null)}}
B.Rq.prototype={}
B.Gu.prototype={
glH(){var x=this.f,w=x>0?"CPU \xd7"+x:""
x=this.a
if(x==="webgpu")return"WebGPU"
if(C.c.m(x,"webgpu"))return"WebGPU + "+w
return w.length===0?x:w}}
B.Gw.prototype={
gM0(){var x=this,w=C.d.aA(x.d/100,0),v=x.f?" (retried on 30 s)":""
return"window "+w+" s, "+x.e+" tokens"+v+", mel "+x.x+" ms, encoder "+x.r+" ms, decoder "+x.w+" ms"}}
B.Gv.prototype={}
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
B.mH.prototype={
N(){return"WordStatus."+this.b}}
B.OI.prototype={}
B.m4.prototype={
j(d){var x,w=this.b
if(w==null)w=""
x=this.c
if(x==null)x=""
return this.d.b+":"+w+"->"+x}}
B.Fd.prototype={
gGT(){var x,w=this,v=w.d
if(v===$){x=new B.aMK(w).$0()
w.d!==$&&A.aE()
w.d=x
v=x}return v},
gEu(){var x,w,v,u,t,s=A.a([],y.s)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.d===D.Wz&&u.c!=null){t=u.c
t.toString
s.push(t)}}return s},
gaZY(){return J.op(this.gGT(),new B.aMJ()).gL(0)},
gqs(){var x=this.a
return x.length!==0&&this.gaZY()===x.length&&this.gEu().length===0}}
B.C9.prototype={
N(){return"AyahStatus."+this.b}}
B.qa.prototype={}
B.acg.prototype={
YM(d,e){var x=this.a.h(0,d*1000+e)
return x==null?$.q_():x},
aJ9(d){var x=this,w=B.aVz(d),v=x.c
if(v===w)return
v=v!=null&&v===B.bJm(w)?x.d+1:1
x.d=v
if(v>x.e)x.e=v
x.c=w},
aeH(){var x=Date.now(),w=B.aVz(new A.b2(x,0,!1))
x=this.c
return x===w||x===B.bJm(w)?this.d:0},
aiK(d,e,f,g){var x=this,w=new A.b2(Date.now(),0,!1),v=x.YM(d,e),u=g?C.e.cA(v.b+1,0,100):0,t=g&&u>=f?D.e0:D.m5,s=new B.qa(t,u,w.hA()),r=d*1000+e
x.a.n(0,r,s)
x.b.D(0,r)
x.aJ9(w)
return s},
YD(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.c7[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.q_():s).a===D.e0)++u}return u},
aYP(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.c7[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.q_():s).a===D.m5)++u}return u},
gahT(){var x=this.a,w=A.w(x).i("c9<2>")
return new A.aG(new A.c9(x,w),new B.aVA(),w.i("aG<M.E>")).gL(0)},
gamK(){var x=this.a,w=A.w(x).i("bi<1>")
w=A.nr(new A.bi(x,w),new B.aVB(),w.i("M.E"),y.S)
w=A.eu(w,A.w(w).i("M.E"))
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
aUQ(){var x,w,v,u,t,s,r,q,p,o=A.a([],y.Z)
for(x=this.b,x=A.bAt(x,300,A.w(x).c),x=new A.Ge(J.av(x.a),x.b,A.w(x).i("Ge<1>")),w=y.N,v=y.z,u=this.a;x.u();){t=x.gK()
s=C.e.ba(t,1000)
t=C.e.ah(t,1000)
r=s*1000+t
q=u.h(0,r)
q=(q==null?$.q_():q).a===D.e0?"memorized":"learning"
p=u.h(0,r)
if(p==null)p=$.q_()
r=u.h(0,r)
o.push(A.J(["surah",s,"ayah",t,"status",q,"perfect_count",p.b,"updated_at",(r==null?$.q_():r).c.iX()],w,v))}return o},
aZp(d){var x,w,v,u,t,s,r
for(x=d.length,w=this.a,v=this.b,u=0;u<d.length;d.length===x||(0,A.B)(d),++u){t=d[u]
s=A.ew(t.h(0,"surah"))*1000+A.ew(t.h(0,"ayah"))
r=w.h(0,C.e.ba(s,1000)*1000+C.e.ah(s,1000))
if((r==null?$.q_():r).c.iX()===t.h(0,"updated_at"))v.I(0,s)}},
aZx(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(x=J.av(d),w=this.b,v=this.a,u=y.f,t=!1;x.u();){s=x.gK()
if(!u.b(s))continue
r=A.bn(s.h(0,"surah"))
q=r==null?null:C.d.bU(r)
r=A.bn(s.h(0,"ayah"))
p=r==null?null:C.d.bU(r)
o=A.fo(A.f(s.h(0,"updated_at")))
r=!0
if(q!=null)if(p!=null)if(o!=null)r=!(q>=1&&q<=114&&p>=1&&p<=I.c7[q-1].a[1])
if(r)continue
n=B.c50(s.h(0,"status"))
if(n===D.m4)continue
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
B.Ro.prototype={
E2(d,e,f,g,h){var x=this,w=g==null?x.a:g,v=h==null?x.b:h,u=d==null?x.c:d,t=e==null?x.d:e
return new B.Ro(w,v,u,t,f==null?x.e:f)},
aTi(d){var x=null
return this.E2(x,x,d,x,x)},
aeh(d){var x=null
return this.E2(x,d,x,x,x)},
aTm(d){var x=null
return this.E2(x,x,x,x,d)},
aSN(d){var x=null
return this.E2(d,x,x,x,x)},
aTj(d){var x=null
return this.E2(x,x,x,d,x)},
cP(){var x=this
return A.J(["n",x.a,"r",x.b,"auto",x.c,"hide",x.d,"in",x.e],y.N,y.z)}}
B.Eh.prototype={
N(){return"ModelState."+this.b}}
B.Rp.prototype={
Y7(){var x=this.Q
return x==null?this.Q=new B.aVC(this).$0():x},
oU(d){return this.alg(d)},
alg(d){var x=0,w=A.o(y.H),v=this
var $async$oU=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:v.b=d
v.X()
x=2
return A.d(A.ie("mt.tutor.settings",C.a1.ht(d.cP(),null)),$async$oU)
case 2:return A.m(null,w)}})
return A.n($async$oU,w)},
x3(){var x=0,w=A.o(y.H),v=this,u
var $async$x3=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:v.X()
x=2
return A.d(A.ie("mt.tutor.progress",C.a1.ht(v.c.cP(),null)),$async$x3)
case 2:u=v.as
if(u!=null)u.aF()
v.as=A.cF(C.z,v.garC())
return A.m(null,w)}})
return A.n($async$x3,w)},
GE(d,e,f){return this.alW(d,e,f)},
alW(d,e,f){var x=0,w=A.o(y.H),v=this
var $async$GE=A.k(function(g,h){if(g===1)return A.l(h,w)
for(;;)switch(x){case 0:v.z=new A.bQ(d,e,f)
x=2
return A.d(A.ie("mt.tutor.last",C.a1.ht(A.J(["s",d,"f",e,"t",f],y.N,y.S),null)),$async$GE)
case 2:return A.m(null,w)}})
return A.n($async$GE,w)},
zI(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$zI=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=s.f
if(n===D.Ox||n===D.hT){x=1
break}s.f=D.Ox
s.y=null
s.X()
u=4
n=A.k7().gep().h(0,"tutor_device")
if(n==null)n="auto"
p=A.k7().gep().h(0,"tutor_threads")
p=A.f2(p==null?"":p,null)
if(p==null)p=0
x=7
return A.d(s.a.aZ7(new B.aVD(s),n,p),$async$zI)
case 7:s.x=e
s.f=D.hT
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
s.f=D.azj
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
return A.n($async$zI,w)},
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
return A.d(p.cU("quran_tutor_progress").h2("surah, ayah, status, perfect_count, updated_at"),$async$ut)
case 7:o=a1
n=r.c.aZx(o)
m=0,k=y.N,i=y.z
case 8:if(!(m<25)){x=10
break}l=r.c.aUQ()
if(J.bd(l)===0){x=10
break}h=p
g=A.J(["p_rows",l],k,i)
f=h.CW
f===$&&A.b()
f.b.E(0,A.mc(h.x,k,k))
x=11
return A.d(f.b2i("quran_tutor_save",!1,g,i),$async$ut)
case 11:r.c.aZp(l)
case 9:++m
x=8
break
case 10:x=12
return A.d(A.ie("mt.tutor.progress",C.a1.ht(r.c.cP(),null)),$async$ut)
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
FL(d){return this.b1Y(d)},
b1Y(d){var x=0,w=A.o(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$FL=A.k(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:p=B.bAF(t.c.cP()).cP()
y.f.a(p.h(0,"rows")).dJ(0,new B.aVE(d))
t.c=B.bAF(p)
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
B.ve.prototype={
V(){var x=$.Jo()
return new B.Vl(x,new A.b0(C.M,$.a7()))}}
B.Vl.prototype={
aa(){var x,w,v=this
v.ao()
x=v.d
x.a5(v.gn6())
w=y.a
x.Y7().bM(new B.bi2(v),w)
H.aLd().bM(new B.bi3(v),w).hr(new B.bi4())
A.M4(H.bA5(),y.y)},
ve(){if(this.c!=null)this.t(new B.bhP())},
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
return A.d(s.oU(s.b.aTi(!0)),$async$Jn)
case 3:t=s.a
t.b0B()
if(t.a0u()){t.afu()
x=1
break}s.zI()
case 1:return A.m(v,w)}})
return A.n($async$Jn,w)},
vf(d,e,f){return this.aHx(d,e,f)},
aOE(d){return this.vf(d,null,null)},
aHx(d,e,f){var x=0,w=A.o(y.H),v,u=this,t,s,r
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
return A.d(B.c8H(s,d),$async$vf)
case 6:t=h
case 4:if(t==null||u.c==null){x=1
break}x=7
return A.d(u.d.GE(d,t.a,t.b),$async$vf)
case 7:s=u.c
if(s==null){x=1
break}r=y.z
x=8
return A.d(A.al(s,!1).cV(A.cW(new B.bhV(u,d,t),null,r),r),$async$vf)
case 8:if(u.c!=null)u.t(new B.bhW())
case 1:return A.m(v,w)}})
return A.n($async$vf,w)},
A(d){var x=null,w=this.d,v=w.b,u=A.a([],y.p),t=w.a
if(t.gagP()&&!A.al(d,!1).VT())u.push(A.ct(x,x,x,x,D.aeo,x,x,t.gaYQ(),x,x,x,"\u0631\u062c\u0648\u0639 \u0644\u0645\u0633\u062c\u062f\u064a",x))
t=v.e
if(t)u.push(A.ct(x,x,x,x,D.afn,x,x,new B.bhZ(d),x,x,x,"\u062a\u0642\u062f\u0651\u0645\u064a",x))
u.push(A.ct(x,x,x,x,D.Ck,x,x,new B.bi_(d),x,x,x,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",x))
if(!w.e)w=D.aoW
else w=t?this.aDS():this.aEi()
return M.vZ(u,w,"\u0627\u0644\u0645\u062d\u0641\u0651\u0638")},
aEi(){var x,w,v,u,t,s,r,q,p=null,o=this.d.d
if(o==null)o=D.Wa
x=this.r
w=x==null?p:x.a-x.b
if(!(o.a&&o.b))v="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u062f\u0639\u0645 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638. \u062c\u0631\u0651\u0628 \u0623\u062d\u062f\u062b \u0646\u0633\u062e\u0629 \u0645\u0646 Chrome (\u0623\u0646\u062f\u0631\u0648\u064a\u062f) \u0623\u0648 Safari (\u0622\u064a\u0641\u0648\u0646)."
else if(!o.f)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0641\u062a\u062d \u0639\u0644\u0649 https \u0639\u0634\u0627\u0646 \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0627\u064a\u0643."
else v=!o.c||!o.d?"\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u0633\u0645\u062d \u0628\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0646 \u0627\u0644\u0645\u0627\u064a\u0643.":p
x=y.p
u=A.a([D.aKW,C.aj],x)
for(t=0;t<4;++t){s=D.aqD[t]
u.push(new A.a_(C.bC,A.ai(A.a([A.c8(s.a,C.a6,p,18),C.ar,new A.dD(1,C.aS,A.i(s.b,p,p,p,p,p,G.Va,p,p,p),p)],x),C.B,C.f,C.h,0,p,p),p))}u=A.ac(u,C.B,C.f,C.h)
s=A.a([D.b35,C.U,A.i("\u0647\u0646\u062d\u0645\u0651\u0644 \u0645\u0644\u0641 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 (\u062d\u0648\u0627\u0644\u064a "+E.aZ(105)+" \u0645\u064a\u062c\u0627) \u0648\u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0648\u0628\u0639\u062f \u0643\u062f\u0647 \u0628\u064a\u0641\u062a\u062d \u0645\u0646 \u063a\u064a\u0631 \u062a\u062d\u0645\u064a\u0644. \u064a\u064f\u0641\u0636\u0651\u0644 \u062a\u0643\u0648\u0646 \u0639\u0644\u0649 Wi-Fi.",p,p,p,p,p,F.al,p,p,p)],x)
if(w!=null){r=w<3e8
q=r?"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0645\u062a\u0635\u0641\u062d \u0642\u0644\u064a\u0644\u0629 ("+E.aZ(C.d.ar(w/1e6))+" \u0645\u064a\u062c\u0627) \u2014 \u0641\u0636\u0651\u064a \u0634\u0648\u064a\u0629 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0623\u0648\u0644.":"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629: \u0643\u0641\u0627\u064a\u0629 \u2713"
C.b.E(s,A.a([C.U,A.i(q,p,p,p,p,p,A.cz(p,p,r?D.d0:C.cs,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x))}r=o.w
if(r>0&&r<3)C.b.E(s,A.a([C.U,D.b2D],x))
x=A.a([new E.cZ(u,C.af,C.aA,p,!0,p),new E.cZ(A.ac(s,C.B,C.f,C.h),C.af,C.aA,p,!1,p),D.ba1,C.U],x)
if(v!=null)x.push(new E.cZ(A.i(v,p,p,p,p,p,D.aVz,p,p,p),C.af,C.aA,p,!1,p))
else x.push(A.jh(D.adJ,p,D.aYU,this.gaHH(),A.il(C.q,C.a5,D.aNt,p,p,p,p)))
x.push(C.aJ)
x.push(D.W9)
return x},
aDS(){var x,w,v=this,u=null,t=v.d,s=t.c,r=v.e,q=C.c.ak(r.a.a),p=q.length===0,o=p?C.uw:H.bNR(q),n=t.z,m=A.aQ(v.aaH(C.fy,E.aZ(s.gahT())+" \u0622\u064a\u0629","\u062d\u0641\u0638\u062a\u0647\u0627"),1),l=E.aZ(s.aeH()),k=s.c,j=Date.now()
k=k===B.aVz(new A.b2(j,0,!1))?"\u0648\u0631\u0627 \u0628\u0639\u0636 \u2014 \u0643\u0645\u0651\u0644!":"\u0633\u0645\u0651\u0639 \u0627\u0644\u0646\u0647\u0627\u0631\u062f\u0647 \u0639\u0634\u0627\u0646 \u062a\u0643\u0645\u0651\u0644"
j=y.p
k=A.a([new B.Ei(t,!1,u),A.ai(A.a([m,C.ar,A.aQ(v.aaH(C.BE,l+" \u064a\u0648\u0645",k),1)],j),C.j,C.f,C.h,0,u,u),C.S],j)
if(n!=null){t=H.jG(n.a)
m=n.b
l=n.c
m=m===l?"\u0622\u064a\u0629 "+E.aZ(m):"\u0627\u0644\u0622\u064a\u0627\u062a "+E.aZ(m)+"\u2013"+E.aZ(l)
k.push(new E.cZ(A.ai(A.a([D.aeU,C.aV,A.aQ(A.ac(A.a([D.aXf,A.i(t+" \u2014 "+m,u,u,u,u,u,F.b_,u,u,u)],j),C.B,C.f,C.h),1),P.kU],j),C.j,C.f,C.h,0,u,u),C.af,C.aA,new B.bhS(v,n),!0,u))}t=C.i.bo(0.08)
k.push(A.bu(u,C.n,!1,u,!0,C.k,u,A.bx(),r,u,u,u,u,u,2,A.fp(u,new A.ek(4,A.aa(14),C.w),u,u,u,u,u,u,!0,u,u,u,u,u,u,t,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,C.pC,"\u0639\u0627\u064a\u0632 \u062a\u062d\u0641\u0638 \u0633\u0648\u0631\u0629 \u0625\u064a\u0647\u061f",u,u,u,u,u,u,u,u,u,!0,!0,!1,u,C.ns,u,u,u,u,u,u,u,u,u,u,u,u),C.t,!0,u,!0,u,!1,u,C.E,u,u,u,u,u,u,u,u,u,1,u,u,!1,"\u2022",u,new B.bhT(v),u,u,u,!1,u,u,!1,u,!0,u,C.C,u,u,u,u,u,u,u,u,u,u,u,C.cW,!0,C.y,u,C.G,u,u,u,u))
k.push(C.S)
if(!p){t=A.a([],j)
if(o.length===0)t.push(D.b0o)
for(r=o.length,x=0;x<o.length;o.length===r||(0,A.B)(o),++x)t.push(v.Km(o[x]))
C.b.E(k,t)}else{t=A.a([D.aBC,D.aC5,v.Km(1)],j)
for(w=114;w>=78;--w)t.push(v.Km(w))
t.push(C.U)
r=v.f
p=A.c8(r?C.tX:C.kM,C.a6,u,u)
t.push(A.hb(p,A.i(r?"\u0627\u062e\u0641\u064a \u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631":"\u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631 (\u0627\u0644\u0628\u0642\u0631\u0629 \u0644\u062d\u062f \u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a)",u,u,u,u,u,C.el,u,u,u),new B.bhU(v),u))
if(v.f)for(w=2;w<=77;++w)t.push(v.Km(w))
C.b.E(k,t)}k.push(C.aj)
k.push(D.xw)
return k},
aaH(d,e,f){var x=null,w=y.p
return new E.cZ(A.ai(A.a([A.c8(d,C.q,x,x),C.ar,A.aQ(A.ac(A.a([A.i(e,x,x,x,x,x,F.b_,x,x,x),A.i(f,x,1,C.ag,x,x,D.aUl,x,x,x)],w),C.B,C.f,C.h),1)],w),C.j,C.f,C.h,0,x,x),C.af,C.L,x,!1,x)},
Km(d){var x,w=null,v=this.d.c,u=I.c7[d-1].a[1],t=v.YD(d),s=t/u,r=y.p,q=A.bl(A.h9(C.W,A.a([A.byv(C.dI,G.c4,w,w,w,w,w,3,s,w),A.i(E.aZ(d),w,w,w,w,w,R.VA,w,w,w)],r),C.k,C.cc,w),36,36),p=A.i(H.jG(d),w,w,w,w,w,D.aRe,w,w,w)
if(t===0)x=E.aZ(u)+" \u0622\u064a\u0629"
else x=t===u?"\u0645\u062d\u0641\u0648\u0638\u0629 \u0643\u0644\u0647\u0627 \u2713":"\u062d\u0641\u0638\u062a "+E.aZ(t)+" \u0645\u0646 "+E.aZ(u)
r=A.a([q,C.fV,A.aQ(A.ac(A.a([p,A.i(x,w,w,w,w,w,A.cz(w,w,t===u?G.c4:C.cs,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),C.B,C.f,C.h),1)],r)
if(s>0&&s<1)r.push(A.i(E.aZ(C.d.ar(s*100))+"\u066a",w,w,w,w,w,D.Vm,w,w,w))
r.push(D.adM)
return new E.cZ(A.ai(r,C.j,C.f,C.h,0,w,w),L.Ao,C.ex,new B.bhX(this,d),!1,w)}}
B.Ei.prototype={
A(d){var x,w,v,u,t,s,r=null,q=this.c
switch(q.f.a){case 2:if(this.d)return C.aE
return D.aBu
case 3:x=q.y
x=A.a([A.i(x==null?"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0634\u063a\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638":B.Jh(x),r,r,r,r,r,D.wR,r,r,r)],y.p)
w=q.y
if(w!=null)x.push(new B.AA(w,"model load",r))
x.push(C.U)
x.push(A.bFE(C.lK,r,q.gaZ6()))
return new E.cZ(A.ac(x,C.B,C.f,C.h),C.af,C.aA,r,!1,r)
case 0:case 1:v=q.w
u=q.r
q=v>0
t=q?C.d.cA(u/v,0,1):r
s=q&&u<v
q=A.i(s?"\u0628\u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026 "+E.aZ(C.d.ar(u/1e6))+" \u0645\u0646 "+E.aZ(C.d.ar(v/1e6))+" \u0645\u064a\u062c\u0627":"\u0628\u0646\u062c\u0647\u0651\u0632 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026",r,r,r,r,r,C.wU,r,r,r)
x=A.aa(8)
w=y.p
x=A.a([q,C.K,A.n4(x,A.DU(C.dI,C.q,7,s?t:r),C.bm)],w)
if(!this.d)C.b.E(x,A.a([C.U,D.aZn],w))
return new E.cZ(A.ac(x,C.B,C.f,C.h),C.af,C.aA,r,!1,r)}}}
B.T9.prototype={
A(d){var x=null,w=D.d0.bo(0.1),v=A.aa(14),u=A.cT(D.d0.bo(0.4),1)
return A.au(x,A.ai(A.a([D.aeG,C.ar,A.aQ(A.i(this.c?"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0627\u0644\u062a\u062c\u0648\u064a\u062f.":"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0623\u062d\u0643\u0627\u0645 \u0627\u0644\u062a\u062c\u0648\u064a\u062f. \u0627\u0642\u0631\u0627 \u0639\u0644\u0649 \u0634\u064a\u062e \u0623\u0648 \u0645\u062d\u0641\u0651\u0638 \u0641\u064a \u0645\u0633\u062c\u062f\u0643 \u0643\u0645\u0627\u0646.",x,x,x,x,x,D.Vs,x,x,x),1)],y.p),C.B,C.f,C.h,0,x,x),C.m,x,x,new A.ap(w,x,u,v,x,x,C.u),x,x,C.aA,C.aU,x,x,x)}}
B.Bi.prototype={
N(){return"_Phase."+this.b}}
B.Az.prototype={
V(){return new B.Xl($.Jo(),D.k0)}}
B.Xl.prototype={
gi7(){var x=this.e
return x===$?this.e=this.a.d:x},
gyp(){var x,w=this.a,v=w.f
w=w.c
x=this.gi7()
return H.Je(w,x,v.vn(w,x)).b},
aa(){var x,w=this
w.ao()
x=w.d
x.a5(w.gn6())
x.Y7()
x.a.Zc(B.ars(w.a.c,w.gi7()))},
ve(){if(this.c!=null)this.t(new B.bpU())},
l(){var x,w=this,v=w.d
v.S(w.gn6())
x=w.Q
if(x!=null)x.aF()
v=v.a
v.GV()
v.VW()
w.aq()},
Sk(d){var x,w,v=this
if(v.f===D.q8)v.d.a.VW()
x=v.d.a
x.GV()
w=v.Q
if(w!=null)w.aF()
v.t(new B.bq9(v,d))
x.Zc(B.ars(v.a.c,d))
w=v.a
if(d<w.e)x.Zc(B.ars(w.c,d+1))},
KA(d){return this.aET(d)},
aET(d){var x=0,w=A.o(y.H),v,u=this,t,s,r,q,p
var $async$KA=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:if(u.f===D.q7){u.d.a.GV()
u.t(new B.bqd(u))
x=1
break}t=u.r!=null?D.hd:D.k0
u.t(new B.bqe(u))
s=u.d
r=A.a([B.ars(u.a.c,u.gi7())],y.s)
q=d==null?s.b.b:d
x=3
return A.d(s.a.Fw(r,q),$async$KA)
case 3:p=f
if(u.c==null||u.f!==D.q7){x=1
break}u.t(new B.bqf(u,t,p))
case 1:return A.m(v,w)}})
return A.n($async$KA,w)},
JE(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$JE=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.d
if(l.f!==D.hT){x=1
break}p=l.a
p.GV()
r=B.BQ(s.gyp()).length
s.t(new B.bqh(s))
o=s.Q
if(o!=null)o.aF()
s.Q=A.kO(C.fw,new B.bqi(s))
u=4
o=B.bCo(r)
n=A.d7(0,0,0,350*r,0,0)
x=7
return A.d(p.a0G(l.b.c,o,n,new B.bqj(s),new B.bqk(s)),$async$JE)
case 7:u=2
x=6
break
case 4:u=3
k=t.pop()
l=A.Y(k)
if(l instanceof B.kP){q=l
l=s.Q
if(l!=null)l.aF()
if(s.c!=null)s.t(new B.bql(s,q))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$JE,w)},
yl(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$yl=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.f!==D.q8){x=1
break}m=s.Q
if(m!=null)m.aF()
s.t(new B.bqn(s))
s.Q=A.kO(C.ht,new B.bqo(s))
l=new A.A3()
$.BT()
l.mS()
r=l
u=4
m=s.d.a
x=7
return A.d(m.a0J(),$async$yl)
case 7:q=e
if(q.b<0.8){s.aOD("\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0642\u0635\u064a\u0631 \u0623\u0648\u064a \u2014 \u062f\u0648\u0633 \xab\u0633\u0645\u0651\u0639\xbb \u0648\u0627\u0642\u0631\u0627 \u0627\u0644\u0622\u064a\u0629 \u0643\u0644\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb.")
x=1
break}x=8
return A.d(m.ajF(q,B.BQ(s.gyp()).length),$async$yl)
case 8:p=e
s.ch=A.d7(0,0,r.gXd(),0,0,0)
k=A.k7().gep().h(0,"debug")
if(k==="1"){o=B.bO8(m.Ed())
A.tu().$1("[tutor] "+s.a.c+":"+s.gi7()+" audio="+C.d.aA(q.b,1)+"s infer="+p.b+"ms total="+r.gz5()+"ms "+p.gM0()+" text="+p.a)
A.tu().$1("[tutor] stages: "+A.f(o))
s.ax="\u062a\u0633\u062c\u064a\u0644\u0643 "+C.d.aA(p.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(p.b/1000,2)+" \u062b\n"+p.gM0()+"\n"+A.f(o)+"\n"+p.a}s.a5V(p.a)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.Y(i)
if(m instanceof B.kP){n=m
m=A.k7().gep().h(0,"debug")
if(m==="1")A.tu().$1("[tutor] check failed: "+A.f(n)+"\n"+s.d.a.Ed())
s.UN(B.Jh(n),n)}else throw i
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$yl,w)},
UN(d,e){var x=this,w=x.Q
if(w!=null)w.aF()
if(x.c==null)return
x.t(new B.bq8(x,d,e))},
aOD(d){return this.UN(d,null)},
a5V(d){var x,w,v,u,t,s=this,r={},q=s.Q
if(q!=null)q.aF()
if(s.c==null)return
x=B.bMf(s.gyp(),d)
r.a=null
if(C.c.ak(x.c).length!==0){q=s.d
w=q.c
v=s.a.c
u=s.gi7()
t=x.gqs()
r.a=w.aiK(v,u,q.b.a,t)
q.x3()}s.t(new B.bqa(r,s,x))},
HV(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$HV=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:g=s.d
if(g.f!==D.hT){x=1
break}s.t(new B.bq1(s))
l=s.Q
if(l!=null)l.aF()
s.Q=A.kO(C.ht,new B.bq2(s))
k=new A.A3()
$.BT()
k.mS()
r=k
u=4
l=g.a
x=7
return A.d(l.b2L(B.ars(s.a.c,s.gi7()),B.BQ(s.gyp()).length),$async$HV)
case 7:q=e
p=B.bO8(l.Ed())
o="\u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a "+C.d.aA(q.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(q.b/1000,2)+" \u062b (\u0627\u0644\u0643\u0644 "+C.d.aA(r.gz5()/1000,2)+" \u062b)\n"+q.gM0()+"\n"+A.f(p)+"\n"+q.a
A.tu().$1("[tutor-debug] "+s.a.c+":"+s.gi7()+" audio="+C.d.aA(q.c,1)+"s infer="+q.b+"ms total="+r.gz5()+"ms "+q.gM0()+" text="+q.a)
A.tu().$1("[tutor-debug] stages: "+A.f(p))
s.ch=A.d7(0,0,r.gXd(),0,0,0)
s.a5V(q.a)
n=s.r
if(n!=null){l=n.gqs()
j=n.b
i=A.ae(j).i("aG<1>")
j=A.a0(new A.aG(j,new B.bq3(),i),i.i("M.E"))
A.tu().$1("[tutor-debug] perfect="+l+" ops="+A.f(j))}s.t(new B.bq4(s,o))
u=2
x=6
break
case 4:u=3
f=t.pop()
l=A.Y(f)
if(l instanceof B.kP){m=l
A.tu().$1("[tutor-debug] failed: "+A.f(m)+"\n"+g.a.Ed())
s.UN(B.Jh(m),m)}else throw f
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$HV,w)},
gTG(){var x,w,v
for(x=this.a.d,w=this.d;v=this.a,x<=v.e;++x){v=w.c.a.h(0,v.c*1000+x)
if((v==null?$.q_():v).a!==D.e0)return!1}return!0},
A(d){var x,w=this,v=null,u=w.d,t=u.c.YM(w.a.c,w.gi7()),s=u.b,r=s.d&&!w.x&&w.f!==D.hd,q=H.jG(w.a.c),p=y.p,o=A.a([A.ct(v,v,v,v,D.Ck,v,v,new B.bqt(d),v,v,v,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",v)],p),n=w.ax4(),m=A.i("\u0622\u064a\u0629 "+E.aZ(w.gi7()),v,v,v,v,v,C.jO,v,v,v),l=E.aZ(w.gi7()-w.a.d+1),k=w.a
s=A.a([A.ai(A.a([m,C.by,A.i("("+l+" \u0645\u0646 "+E.aZ(k.e-k.d+1)+")",v,v,v,v,v,F.al,v,v,v),C.d5,w.aIl(t,s.a)],p),C.j,C.f,C.h,0,v,v),C.S],p)
if(r)s.push(w.aDN())
else{m=w.r
if(m!=null){l=w.f
l=l!==D.q8&&l!==D.lX}else l=!1
if(l)s.push(w.avh(m))
else s.push(A.i(w.gyp()+" \ufd3f"+E.aZ(w.gi7())+"\ufd3e",v,v,v,v,v,D.id,C.ad,C.aF,v))}s=A.a([new B.Ei(u,!0,v),n,C.K,new E.cZ(A.ac(s,C.aa,C.f,C.h),D.a99,C.aA,v,!1,v)],p)
n=w.r
if(n!=null&&w.f===D.hd)s.push(w.aPW(n))
if(w.r!=null&&w.f===D.hd&&w.ch!=null){x=C.d.ar(C.e.ba(w.ch.a,1000)/100)
s.push(new A.a_(C.bC,A.i("\u0627\u062a\u0631\u0627\u062c\u0639 \u0641\u064a "+(E.aZ(C.e.ba(x,10))+"\u066b"+E.aZ(C.e.ah(x,10)))+" \u062b",v,v,v,v,v,F.al,C.ad,v,v),v))}n=w.as
if(n!=null)s.push(new A.a_(C.aA,A.i(n,v,v,v,v,v,D.wR,v,v,v),v))
if(w.as!=null&&w.at!=null){n=w.at
n.toString
s.push(new B.AA(n,"check "+w.a.c+":"+w.gi7(),v))}s.push(w.avH())
s.push(C.aj)
s.push(A.rG(C.q,C.L,v,new B.bqu(w),D.aY5,D.b_m,u.b.d))
n=w.a
if(n.e>n.d){n=w.gTG()
s.push(new E.cZ(A.ai(A.a([D.acY,C.aV,A.aQ(A.ac(A.a([D.b05,A.i(w.gTG()?"\u062d\u0641\u0638\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u0633\u0645\u0651\u0639\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636 \u0645\u0646 \u063a\u064a\u0631 \u0645\u0627 \u062a\u0634\u0648\u0641\u0647\u0627":"\u0644\u0645\u0627 \u062a\u062e\u0644\u0651\u0635 \u0627\u0644\u0622\u064a\u0627\u062a \u0648\u0627\u062d\u062f\u0629 \u0648\u0627\u062d\u062f\u0629\u060c \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0644\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636",v,v,v,v,v,F.al,v,v,v)],p),C.B,C.f,C.h),1),P.kU],p),C.j,C.f,C.h,0,v,v),C.af,C.aA,new B.bqv(w,d),n,v))}n=A.k7().gep().h(0,"debug")
if(n==="1"){p=A.a([C.K,A.eG(D.adI,D.b_3,u.f===D.hT&&w.f!==D.lX?w.gawf():v,v)],p)
n=w.ax
if(n!=null)p.push(new A.a_(C.hv,A.rw(n,F.al,v,v),v))
n=u.x
if(n!=null){m=n.a
l=n.b
n=n.glH()
u=u.x
p.push(A.i("model: "+m+" "+l+" \u2014 "+n+", isolated "+u.r+", load "+u.c+" ms (warm-up "+u.w+" ms)",v,v,v,v,v,F.al,v,v,v))}p.push(A.bH(D.b_I,v,v,v,new B.bqw(w,d),v,v))
C.b.E(s,p)}s.push(C.K)
s.push(D.xw)
return M.vZ(o,s,q)},
ax4(){var x=this.a,w=x.e-x.d+1
if(w===1)return C.aE
return A.bl(A.p8(new B.bq6(this),w,null,C.az,new B.bq7()),36,null)},
aIl(d,e){var x,w,v,u,t,s,r,q=null
if(d.a===D.e0)return D.aL2
x=d.b
w=E.aZ(x)
v=E.aZ(e)
u=A.a([],y.p)
for(t=0;t<e;++t){s=t<x
r=s?C.de:D.acv
u.push(new A.a_(D.a9J,A.c8(r,s?G.c4:C.eY,q,16),q))}return A.Rh(A.ai(u,C.j,C.f,C.V,0,q,q),q,"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637 \u0648\u0631\u0627 \u0628\u0639\u0636: "+w+" \u0645\u0646 "+v,q,q)},
aDN(){var x=null
return A.dg(!1,A.aa(12),!0,A.au(x,D.a5k,C.m,x,x,new A.ap(L.r4,x,x,A.aa(12),x,x,C.u),x,x,x,D.a8Q,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,x,new B.bqc(this),x,x,x,x,x,x,x)},
avh(d){var x,w,v,u,t,s=null,r=A.a([],y.R)
for(x=d.a,w=0;w<x.length;++w){v=J.b5(d.gGT(),w)
A:{if(D.h7===v){u=D.id.cB(G.c4)
break A}if(D.pV===v){u=D.id.Wv(D.d0,C.fZ,D.d0)
break A}if(D.pW===v){u=D.id.Wv(D.dH,C.fZ,D.dH)
break A}u=D.id.Wv(C.eY,C.pr,C.c3)
break A}t=x[w]
r.push(new A.f4(t.a,s,s,C.be,s,s,s,s,s,s,u))
r.push(L.wJ)}x=E.aZ(this.gi7())
r.push(A.dW(s,s,s,s,s,s,s,s,s,D.id.cB(C.a6),"\ufd3f"+x+"\ufd3e"))
return A.QN(A.dW(r,s,s,s,s,s,s,s,s,s,s),s,C.ad,C.aF)},
aPW(d){var x,w,v,u,t,s,r=this.w
if(C.c.ak(d.c).length===0)return D.b9H
if(d.gqs()){x=r==null
if((x?null:r.a)===D.e0&&r.b===this.d.b.a)x="\u0627\u0644\u0622\u064a\u0629 \u062f\u064a \u0627\u062a\u062d\u0641\u0638\u062a! \u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0627\u0644\u0644\u064a \u0628\u0639\u062f\u0647\u0627."
else x=!x&&r.a!==D.e0?"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637. \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0645\u0627\u0646 "+E.aZ(this.d.b.a-r.b)+" \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629.":"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637."
return new B.AO(G.c4,C.de,"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713",x,null)}x=d.gGT()
w=J.d5(x)
v=w.hP(x,new B.bqp()).gL(0)
u=w.hP(x,new B.bqq()).gL(0)
t=w.hP(x,new B.bqr()).gL(0)
x=A.a([],y.s)
if(u>0)x.push(E.aZ(u)+" \u063a\u0644\u0637")
if(v>0)x.push(E.aZ(v)+" \u0631\u0627\u062c\u0639\u0647\u0627")
if(t>0)x.push(E.aZ(t)+" \u0646\u0627\u0642\u0635\u0629")
if(d.gEu().length!==0)x.push(E.aZ(d.gEu().length)+" \u0632\u064a\u0627\u062f\u0629")
w=u+t>0?D.dH:D.d0
x=C.b.aJ(x," \u2022 ")
s=d.gEu().length!==0?"\n\u0632\u064a\u0627\u062f\u0629: "+C.b.aJ(d.gEu(),"\u060c "):""
return new B.AO(w,C.kP,"\u0642\u0631\u0628\u062a! \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0644\u0648\u0651\u0646\u0629",x+"\n\u0627\u0644\u0623\u0635\u0641\u0631: \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u062f\u064a \u2014 \u0627\u0644\u0623\u062d\u0645\u0631: \u063a\u0644\u0637 \u2014 \u0627\u0644\u0631\u0645\u0627\u062f\u064a \u0627\u0644\u0645\u0634\u0637\u0648\u0628: \u0646\u0633\u064a\u062a\u0647\u0627."+s,null)},
avH(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d,g=h.f===D.hT,f=j.f
switch(f.a){case 2:if(j.z==null)x=0
else{f=Date.now()
w=j.z
w.toString
x=C.e.ba(new A.b2(f,0,!1).dM(w).a,1e6)}v=C.e.ba(B.bCo(B.BQ(j.gyp()).length).a,1e6)
f=j.gaNr()
w=96+26*j.y
u=D.dH.bo(0.25)
w=A.jj(i,A.bE3(C.W,A.au(i,D.adO,C.m,i,i,D.ZJ,i,84,i,i,i,i,84),i,new A.ap(u,i,i,i,i,i,C.cp),C.Aa,i,w,w),C.t,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,f,i,i,i,i,i,i)
u=A.i("\u0628\u0646\u0633\u062c\u0651\u0644\u2026 "+B.bBl(x)+" / "+B.bBl(v),i,i,i,i,i,K.lF,i,i,i)
return A.ac(A.a([w,C.K,u,A.i(h.b.c?"\u0644\u0645\u0627 \u062a\u062e\u0644\u0635 \u0627\u0633\u0643\u062a \u062b\u0627\u0646\u064a\u0629 \u0623\u0648 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb":"\u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb \u0644\u0645\u0627 \u062a\u062e\u0644\u0635",i,i,i,i,i,F.al,i,i,i),A.bH(D.b2C,i,i,i,f,i,i)],y.p),C.j,C.f,C.h)
case 3:t=C.d.e6((Date.now()-j.ay)/1000)
if(t<8)h="\u062b\u0648\u0627\u0646\u064a \u0648\u0646\u0642\u0648\u0644\u0643"
else h=t<25?"\u0644\u0633\u0647 \u0634\u063a\u0627\u0644\u064a\u0646 \u2014 \u0627\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0628\u062a\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0643\u062a\u0631 ("+E.aZ(t)+" \u062b)":"\u0648\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0637\u0648\u0644 \u0645\u0646 \u0627\u0644\u0639\u0627\u062f\u064a \u2014 \u0644\u0648 \u0639\u0644\u0651\u0642 \u0647\u0646\u0639\u064a\u062f \u062a\u0634\u063a\u064a\u0644\u0647 \u0644\u0648\u062d\u062f\u0646\u0627 ("+E.aZ(t)+" \u062b)"
return new A.a_(D.a8M,A.ac(A.a([C.qT,C.aj,D.aZF,A.i(h,i,i,i,i,i,F.al,C.ad,i,i)],y.p),C.j,C.f,C.h),i)
default:s=f===D.q7
r=j.r
f=r==null
w=!f
q=w&&r.gqs()
u=A.c8(s?C.kQ:K.BZ,i,i,i)
if(s)p="\u0648\u0642\u0651\u0641"
else p=w&&!q?"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u062d":"\u0627\u0633\u0645\u0639"
p=A.i(p,i,i,i,i,i,i,i,i,i)
o=A.il(i,i,D.aNq,i,i,i,i)
u=A.aQ(new A.y1(C.WR,!0,new B.bpV(j,r,q),i,i,i,o,C.m,i,!1,i,!0,i,new A.TG(p,u,o,i,i),i),1)
p=A.a([],y.n)
for(o=y.c,n=0;n<3;++n){m=D.D4[n]
p.push(new A.ey(m,i,A.i("\xd7"+E.aZ(m),i,i,i,i,i,i,i,i,i),o))}o=y.S
l=y.b
k=y.p
o=A.ai(A.a([u,C.ar,A.vA(new B.bpW(j),p,A.cV([h.b.b],o),!1,A.jI(i,i,i,new A.b4(new B.bpX(),l),i,i,i,i,new A.b4(new B.bpY(),l),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,C.dq),o)],k),C.j,C.f,C.h,0,i,i)
h=g&&!s?j.gaJT():i
u=A.c8(f?D.nj:C.kP,i,i,i)
if(g)f=f?"\u0633\u0645\u0651\u0639":"\u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a"
else f="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
f=A.i(f,i,i,i,i,i,C.cG,i,i,i)
p=q?N.ho:C.q
h=A.a([o,C.S,A.jh(u,i,f,h,A.il(p,q?C.i:C.a5,D.pi,i,i,i,i))],k)
if(w&&j.gi7()<j.a.e)C.b.E(h,A.a([C.K,q?A.jh(D.afy,i,D.b1T,new B.bpZ(j),A.il(G.c4,C.a5,D.pi,i,i,i,i)):A.bH(D.aYb,i,i,i,new B.bq_(j),i,i)],k))
if(w){f=j.gi7()
w=j.a
u=w.e
f=f===u&&q&&u>w.d}else f=!1
if(f)h.push(new A.a_(C.mU,A.i(j.gTG()?"\u062e\u0644\u0651\u0635\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u062c\u0631\u0651\u0628 \xab\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636\xbb \u062a\u062d\u062a.":"\u062e\u0644\u0635\u062a \u0622\u062e\u0631 \u0622\u064a\u0629 \u2014 \u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0644\u0633\u0647 (\u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0635\u0641\u0631\u0627 \u0641\u0648\u0642).",i,i,i,i,i,K.pF,C.ad,i,i),i))
return A.ac(h,C.aa,C.f,C.h)}}}
B.AO.prototype={
A(d){var x=this,w=null,v=x.c,u=v.bo(0.12),t=A.aa(14),s=A.cT(v.bo(0.5),1),r=y.p
return A.au(w,A.ai(A.a([A.c8(x.d,v,w,w),C.ar,A.aQ(A.ac(A.a([A.i(x.e,w,w,w,w,w,A.cz(w,w,v,w,w,w,w,w,w,w,w,15,w,w,C.a3,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),C.pk,A.i(x.f,w,w,w,w,w,D.Vs,w,w,w)],r),C.B,C.f,C.h),1)],r),C.B,C.f,C.h,0,w,w),C.m,w,w,new A.ap(u,w,s,t,w,w,C.u),w,w,C.aA,C.aU,w,w,w)}}
B.Ay.prototype={
V(){var x=y.S
return new B.Xk($.Jo(),A.x(x,y.B),A.aF(x),A.x(x,y.N),A.dO(null,y.H))}}
B.Xk.prototype={
aa(){this.ao()
this.d.a5(this.gn6())},
ve(){if(this.c!=null)this.t(new B.bpD())},
l(){var x,w=this,v=w.d
v.S(w.gn6())
x=w.y
if(x!=null)x.aF()
v.a.VW()
w.aq()},
Dl(d){return this.aNg(d)},
aNg(d){var x=0,w=A.o(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m
var $async$Dl=A.k(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.t(new B.bpM(t,d))
r=t.y
if(r!=null)r.aF()
t.y=A.kO(C.fw,new B.bpN(t))
v=3
r=t.d
q=t.a
p=q.f
q=q.c
q=B.bCo(B.BQ(H.Je(q,d,p.vn(q,d)).b).length)
p=t.a
o=p.f
p=p.c
p=A.d7(0,0,0,350*B.BQ(H.Je(p,d,o.vn(p,d)).b).length,0,0)
x=6
return A.d(r.a.a0G(r.b.c,q,p,new B.bpO(t,d),new B.bpP(t)),$async$Dl)
case 6:v=1
x=5
break
case 3:v=2
m=u.pop()
r=A.Y(m)
if(r instanceof B.kP){s=r
r=t.y
if(r!=null)r.aF()
if(t.c!=null)t.t(new B.bpQ(t,s))}else throw m
x=5
break
case 2:x=1
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$Dl,w)},
BK(d,e){return this.aya(d,e)},
aya(d,e){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$BK=A.k(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.e!==d){x=1
break}o=s.y
if(o!=null)o.aF()
s.t(new B.bpH(s,d))
n=d<s.a.e?d+1:null
r=s.d.a.a0J()
if(e&&n!=null)s.Dl(n)
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
s.t(new B.bpI(s,d,p))}else throw l
x=6
break
case 3:x=2
break
case 6:if(q!=null){o=q
s.at=s.at.bM(new B.bpJ(s,o,d),y.H)}case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$BK,w)},
gaGg(){var x,w,v,u,t=this
for(x=t.a.d,w=t.f,v=t.r,u=t.w;x<=t.a.e;++x)if(!w.aw(x)&&!v.m(0,x)&&!u.aw(x)&&x!==t.e)return x
return null},
aKw(){this.t(new B.bpK(this))},
A(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q.f===D.hT,o=s.e,n=s.gaGg(),m=s.f,l=m.a,k=s.w.a,j=s.a,i=l+k===j.e-j.d+1&&s.r.a===0&&o==null
l=A.w(m).i("c9<2>")
x=new A.aG(new A.c9(m,l),new B.bpR(),l.i("aG<M.E>")).gL(0)
l=H.jG(s.a.c)
m=y.p
q=A.a([new B.Ei(q,!0,r),A.i("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 "+E.aZ(s.a.d)+" \u0644\u062d\u062f "+E.aZ(s.a.e)+" \u0645\u0646 \u062d\u0641\u0638\u0643\u060c \u0622\u064a\u0629 \u0622\u064a\u0629: \u0628\u0639\u062f \u0643\u0644 \u0622\u064a\u0629 \u062f\u0648\u0633 \xab\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629\xbb \u0648\u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0637\u0648\u0644 \u2014 \u0647\u0646\u0635\u062d\u0651\u062d \u0648\u0625\u0646\u062a \u0628\u062a\u0642\u0631\u0627.",r,r,r,r,r,F.al,r,r,r),C.S],m)
for(w=s.a.d;w<=s.a.e;++w)q.push(s.aOF(w))
q.push(C.K)
k=s.Q
if(k!=null)q.push(A.i(k,r,r,r,r,r,D.wR,r,r,r))
k=s.as
if(k!=null){j=s.a
q.push(new B.AA(k,"review "+j.c+":"+j.d+"-"+j.e,r))}k=o==null
if(!k){j=E.aZ(o)
if(s.z==null)v=0
else{v=Date.now()
u=s.z
u.toString
u=C.e.ba(new A.b2(v,0,!1).dM(u).a,1e6)
v=u}v=A.i("\u0628\u0646\u0633\u062c\u0651\u0644 \u0622\u064a\u0629 "+j+"\u2026 "+B.bBl(v),r,r,r,r,r,K.lF,C.ad,r,r)
j=A.n4(A.aa(6),A.DU(C.dI,D.dH,6,s.x),C.bm)
u=o<s.a.e
t=A.c8(u?Q.BT:C.kQ,r,r,r)
C.b.E(q,A.a([v,C.U,j,C.S,A.jh(t,r,A.i(u?"\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629":"\u062e\u0644\u0635\u062a",r,r,r,r,r,C.cG,r,r,r),new B.bpS(s,o),A.il(C.q,C.a5,D.pi,r,r,r,r))],m))}else if(n!=null){j=p?new B.bpT(s,n):r
if(!p)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
else v=n===s.a.d?"\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0633\u0645\u064a\u0639":"\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+E.aZ(n)
q.push(A.jh(D.aep,r,A.i(v,r,r,r,r,r,C.cG,r,r,r),j,A.il(C.q,C.a5,D.pi,r,r,r,r)))}if(s.r.a!==0&&k)q.push(D.aBJ)
if(i){k=s.a
k=x===k.e-k.d+1
j=k?G.c4:D.d0
v=k?C.nf:C.kP
if(k)k="\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713 \u0633\u0645\u0651\u0639\u062a\u0647\u0645 \u0643\u0644\u0647\u0645 \u0635\u062d"
else{k=E.aZ(x)
u=s.a
u=k+" \u0645\u0646 "+E.aZ(u.e-u.d+1)+" \u0622\u064a\u0627\u062a \u0645\u0638\u0628\u0648\u0637\u0629"
k=u}u=s.a
u=x===u.e-u.d+1?"\u0631\u0628\u0646\u0627 \u064a\u062b\u0628\u0651\u062a\u0647\u0627 \u0641\u064a \u0642\u0644\u0628\u0643.":"\u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0641\u064a\u0647\u0627 \u0623\u0644\u0648\u0627\u0646 \u0648\u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a."
C.b.E(q,A.a([new B.AO(j,v,k,u,r),A.eG(D.afs,D.b2e,s.gaKv(),r)],m))}q.push(C.S)
q.push(D.xw)
return M.vZ(r,q,"\u0633\u0645\u0651\u0639 "+l)},
aOF(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.f.h(0,d),i=l.w.h(0,d)
if(l.e===d)x=D.ae5
else if(l.r.m(0,d))x=O.pj
else if(i!=null)x=D.aee
else if(j!=null){w=j.gqs()?C.de:D.ac_
x=A.c8(w,j.gqs()?G.c4:D.d0,k,k)}else x=D.adp
w=y.p
v=A.a([A.ai(A.a([A.i("\u0622\u064a\u0629 "+E.aZ(d),k,k,k,k,k,D.aUY,k,k,k),C.d5,x],w),C.j,C.f,C.h,0,k,k)],w)
if(i!=null)v.push(A.i(i,k,k,k,k,k,D.Vp,k,k,k))
if(j!=null&&!j.gqs()){u=y.R
t=A.a([],u)
for(s=j.a,r=0;r<s.length;++r){q=s[r]
p=j.gGT()
o=J.bq(p)
n=o.h(p,r)
A:{if(D.h7===n){m=G.c4
break A}if(D.pV===n){m=D.d0
break A}if(D.pW===n){m=D.dH
break A}m=C.eY
break A}m=D.id.aTR(m,o.h(p,r)===D.pX?C.pr:k,22)
C.b.E(t,A.a([new A.f4(q.a,k,k,C.be,k,k,k,k,k,k,m),L.wJ],u))}w=A.a([C.aR,A.QN(A.dW(t,k,k,k,k,k,k,k,k,k,k),k,C.ad,C.aF)],w)
if(C.c.ak(j.c).length===0)w.push(D.b_N)
C.b.E(v,w)}return new E.cZ(A.ac(v,C.aa,C.f,C.h),C.f2,C.ex,k,!1,k)}}
B.Ax.prototype={
V(){return new B.Xj($.Jo())}}
B.Xj.prototype={
aa(){this.ao()
var x=this.d
x.a5(this.gn6())
x.Y7()},
ve(){if(this.c!=null)this.t(new B.bpu())},
l(){this.d.S(this.gn6())
this.aq()},
A(d){var x,w,v,u,t,s=this,r=null,q=s.d.c,p=q.gamK(),o=A.a([],y.t)
for(x=78;x<=114;++x)o.push(x)
w=C.b.kd(o,0,new B.bpB(q))
v=C.b.kd(o,0,new B.bpC())
o=y.p
o=A.a([A.ai(A.a([A.aQ(s.Qw(E.aZ(q.gahT()),"\u0622\u064a\u0629 \u0645\u062d\u0641\u0648\u0638\u0629"),1),C.ar,A.aQ(s.Qw(E.aZ(q.aeH()),"\u064a\u0648\u0645 \u0648\u0631\u0627 \u0628\u0639\u0636"),1),C.ar,A.aQ(s.Qw(E.aZ(q.e),"\u0623\u0637\u0648\u0644 \u0633\u0644\u0633\u0644\u0629"),1)],o),C.j,C.f,C.h,0,r,r),C.S,new E.cZ(A.ac(A.a([A.i("\u062c\u0632\u0621 \u0639\u0645\u0651: "+E.aZ(C.d.ar(w*100/v))+"\u066a",r,r,r,r,r,F.b_,r,r,r),C.U,A.n4(A.aa(6),A.DU(C.dI,G.c4,8,w/v),C.bm),C.aR,A.i(E.aZ(w)+" \u0645\u0646 "+E.aZ(v)+" \u0622\u064a\u0629",r,r,r,r,r,F.al,r,r,r)],o),C.B,C.f,C.h),C.af,C.aA,r,!1,r)],o)
if(p.length===0)o.push(D.aBS)
for(u=p.length,t=0;t<p.length;p.length===u||(0,A.B)(p),++t)o.push(s.aOH(p[t]))
o.push(C.K)
u=$.ad().b
u===$&&A.b()
u=u.gc2().e.a
o.push(A.i((u==null?r:u.r)!=null?"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643 \u0648\u064a\u0638\u0647\u0631 \u0639\u0644\u0649 \u0623\u064a \u062c\u0647\u0627\u0632 \u062a\u062f\u062e\u0644 \u0645\u0646\u0647.":"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647. \u0633\u062c\u0651\u0644 \u062f\u062e\u0648\u0644 \u0639\u0634\u0627\u0646 \u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643.",r,r,r,r,r,F.al,r,r,r))
return M.vZ(r,o,"\u062a\u0642\u062f\u0651\u0645\u064a \u0641\u064a \u0627\u0644\u062d\u0641\u0638")},
Qw(d,e){var x=null
return new E.cZ(A.ac(A.a([A.i(d,x,x,x,x,x,D.aUK,x,x,x),A.i(e,x,x,x,x,x,C.VG,C.ad,x,x)],y.p),C.j,C.f,C.h),C.af,C.L,x,!1,x)},
aOH(d){var x=null,w=this.d.c,v=I.c7[d-1].a[1],u=w.YD(d),t=w.aYP(d),s=y.p,r=A.ai(A.a([A.aQ(A.i(H.jG(d),x,x,x,x,x,F.b_,x,x,x),1),A.i(E.aZ(C.d.ar(u*100/v))+"\u066a",x,x,x,x,x,D.aVA,x,x,x)],s),C.j,C.f,C.h,0,x,x),q=A.n4(A.aa(6),A.DU(C.dI,G.c4,7,u/v),C.bm),p=E.aZ(u),o=E.aZ(v),n=t>0?" \u2022 \u0628\u062a\u0631\u0627\u062c\u0639 "+E.aZ(t):""
return new E.cZ(A.ac(A.a([r,C.U,q,C.aR,A.i("\u0645\u062d\u0641\u0648\u0638 "+p+" \u0645\u0646 "+o+n,x,x,x,x,x,F.al,x,x,x)],s),C.B,C.f,C.h),C.af,C.aA,new B.bpA(this,d),!1,x)},
HY(d){return this.aww(d)},
aww(d){var x=0,w=A.o(y.H),v=this,u,t
var $async$HY=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:u=I.c7[d-1].a[1]
t=v.c
t.toString
x=2
return A.d(A.fB(C.dd,new B.bpz(v,d,u),t,!0,null,null,!1,y.H),$async$HY)
case 2:return A.m(null,w)}})
return A.n($async$HY,w)}}
B.ace.prototype={
Kz(d,e){var x=null,w=A.pG(x,x,x,x,x,x,x,x,x,x,x,D.aNc,C.L,x,x,x,x,C.lg,x,x)
return A.bH(A.i(d,x,x,x,x,x,C.jN,x,x,x),x,x,x,new B.aVm(e),x,w)},
A(d){var x=this,w=y.p
return new E.cZ(A.ac(A.a([D.b1I,C.U,D.b2B,A.dy(A.a([x.Kz("tarteel-ai/whisper-base-ar-quran","https://huggingface.co/tarteel-ai/whisper-base-ar-quran"),x.Kz("iqbalaesthetic/Basira","https://huggingface.co/iqbalaesthetic/Basira")],w),C.aK,0,12),D.aXV,x.Kz("tanzil.net","https://tanzil.net"),D.b3r,x.Kz("everyayah.com","https://everyayah.com")],w),C.B,C.f,C.h),C.af,C.aA,null,!1,null)}}
B.AA.prototype={
V(){return new B.Xm()}}
B.Xm.prototype={
ga9f(){var x=this.a
return B.c9Z(x.c,x.d,$.bCZ().Ed())},
KB(){var x=0,w=A.o(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k
var $async$KB=A.k(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.t(new B.bqx(s))
v=3
r=A.bwK()
n=s.ga9f()
m=y.N
q=A.x(m,m)
J.fU(q,"app","masjid")
J.fU(q,"path","tutor \u203a "+s.a.d)
if(r!=null){m=r.length>160?C.c.Y(r,0,160):r
J.fU(q,"ua",m)}x=6
return A.d(A.a39(n,null,C.AY,q),$async$KB)
case 6:if(s.c!=null)s.t(new B.bqy(s))
t.push(5)
x=4
break
case 3:v=2
k=u.pop()
p=A.Y(k)
o=p instanceof A.cR?p.a:"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0628\u0639\u062a \u2014 \u0627\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0646\u062a \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
if(s.c!=null)s.t(new B.bqz(s,o))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.t(new B.bqA(s))
x=t.pop()
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$KB,w)},
A(d){var x,w,v,u=this,t=null,s=y.p
s=A.a([A.dg(!1,t,!0,new A.a_(C.An,A.ai(A.a([A.c8(u.d?C.tX:C.kM,C.c3,t,18),C.fW,D.b3_],s),C.j,C.f,C.h,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new B.bqC(u),t,t,t,t,t,t,t)],s)
if(u.d){x=A.aa(8)
s.push(A.au(t,A.rw(u.ga9f(),D.aRE,t,C.o),C.m,t,t,new A.ap(L.r4,t,t,x,t,t,C.u),t,t,D.a8V,C.ey,t,t,1/0))}if(u.f)s.push(D.aY2)
else{x=A.pG(t,t,t,t,t,t,t,t,t,t,t,C.Uk,C.L,t,t,t,t,C.lg,t,t)
w=u.e
v=w?t:u.gaOG()
s.push(A.hb(w?D.aNA:D.afb,D.b1c,v,x))}x=u.r
if(x!=null)s.push(A.i(x,t,t,t,t,t,D.Vp,t,t,t))
return new A.a_(C.aA,A.ac(s,C.B,C.f,C.h),t)}}
var z=a.updateTypes(["ab<~>()","~()","A(mH)","ab<Gw>()","ab<Gu>()","ab<Gv>()","Q<mH>()","A(qa)","bo(nF)","Az(z)","Ax(z)","A(m4)","Ay(z)","A(Fd)"])
B.aVn.prototype={
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
m=B.c_L("network",A.f(o))
throw A.p(m)
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:276}
B.aVq.prototype={
$1(d){var x=null
return A.bsq(A.ch(d,"persist",x,x,x,x))},
$S:954}
B.aVp.prototype={
$0(){var x=0,w=A.o(y.C),v,u=this,t,s,r,q,p,o,n,m,l
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:q=u.a
n=A
m=A
l=A
x=4
return A.d(q.pk(),$async$$0)
case 4:x=3
return A.d(n.e3(m.cs(l.ch(e,"loadModel",A.bsX(new B.aVo(u.b)),u.c,u.d,null)),y.m),$async$$0)
case 3:p=e
o=A.O(p.device)
if(o==null)o=null
if(o==null)o=""
t=A.O(p.dtype)
if(t==null)t=null
if(t==null)t=""
s=q.pj(p,"ms")
r=q.mX(p,"cached")
A.O(p.backend)
v=new B.Gu(o,t,s,r,q.pj(p,"threads"),q.mX(p,"isolated"),q.pj(p,"warmMs"))
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+4}
B.aVo.prototype={
$2(d,e){this.a.$2(C.d.ar(d),C.d.ar(e))},
$S:955}
B.aVu.prototype={
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
u.maxMs=C.e.ba(v.b.a,1000)
u.autoStop=v.c
u.minMs=C.e.ba(v.d.a,1000)
u.onLevel=A.f6(new B.aVs(v.e))
u.onAutoStop=A.f6(new B.aVt(v.f))
x=5
return A.d(A.e3(A.cs(A.ch(s,"startRecording",u,null,null,null)),y.O),$async$$0)
case 5:return A.m(null,w)}})
return A.n($async$$0,w)},
$S:2}
B.aVs.prototype={
$1(d){return this.a.$1(d)},
$S:59}
B.aVt.prototype={
$1(d){return this.a.$1(d)},
$S:9}
B.aVv.prototype={
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
return A.d(q.e3(p.cs(o.ch(e,"stopRecording",null,null,null,null)),y.m),$async$$0)
case 3:r=e
v=new B.Gv(r,A.dm(r.seconds))
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+5}
B.aVx.prototype={
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
return A.d(q.e3(p.cs(o.ch(e,"transcribe",t.audio,t.rate,s.a88(u.c),null)),y.m),$async$$0)
case 3:v=r.abk(e)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+3}
B.aVw.prototype={
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
return A.d(r.e3(q.cs(p.ch(e,"transcribeUrl",u.b,t.a88(u.c),null,null)),y.m),$async$$0)
case 3:v=s.abk(e)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+3}
B.aVr.prototype={
$1(d){return d},
$S:29}
B.aMK.prototype={
$0(){var x,w,v,u,t=this.a,s=A.bR(t.a.length,D.pX,!1,y.G)
for(t=t.b,x=t.length,w=0;w<x;++w){v=t[w]
u=v.a
if(u!=null)s[u]=v.d}return s},
$S:z+6}
B.aMJ.prototype={
$1(d){return d===D.h7},
$S:z+2}
B.bsS.prototype={
$2(d,e){var x,w=e.length
if(d.length<w)return!1
for(x=0;x<w;++x)if(B.bxA(e[x],d[x])<0.75)return!1
return!0},
$S:956}
B.bul.prototype={
$1(d){return d.length!==0},
$S:11}
B.aVA.prototype={
$1(d){return d.a===D.e0},
$S:z+7}
B.aVB.prototype={
$1(d){return C.e.ba(d,1000)},
$S:64}
B.aVy.prototype={
$1(d){return C.d.bU(d)},
$S:957}
B.aVC.prototype={
$0(){var x=0,w=A.o(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$$0=A.k(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d(A.id("mt.tutor.settings"),$async$$0)
case 7:r=a3
if(r!=null){k=y.P.a(C.a1.eV(r,null))
j=A.bn(k.h(0,"n"))
j=j==null?null:C.d.bU(j)
j=C.e.cA(j==null?2:j,1,5)
i=C.b.m(D.D4,k.h(0,"r"))?A.ew(k.h(0,"r")):1
h=A.hz(k.h(0,"auto"))
g=A.hz(k.h(0,"hide"))
k=A.hz(k.h(0,"in"))
s.a.b=new B.Ro(j,i,h!==!1,g===!0,k===!0)}u=2
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
return A.d(A.id("mt.tutor.progress"),$async$$0)
case 12:q=a3
if(q!=null)s.a.c=B.bAF(y.P.a(C.a1.eV(q,null)))
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
return A.d(A.id("mt.tutor.last"),$async$$0)
case 17:p=a3
if(p!=null){o=y.P.a(C.a1.eV(p,null))
n=C.d.bU(A.dr(J.b5(o,"s")))
m=C.d.bU(A.dr(J.b5(o,"f")))
l=C.d.bU(A.dr(J.b5(o,"t")))
if(B.bOd(n,m)&&B.bOd(n,l)&&m<=l)s.a.z=new A.bQ(n,m,l)}u=2
x=16
break
case 14:u=13
a0=t.pop()
x=16
break
case 13:x=2
break
case 16:k=s.a
if(k.b.e&&k.a.a0u()){k.a.afu()
x=1
break}a1=k
x=18
return A.d(k.a.He(),$async$$0)
case 18:a1.d=a3
k.e=!0
k.X()
if(k.b.e)k.zI()
k.ut()
case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:94}
B.aVD.prototype={
$2(d,e){var x=this.a
x.r=d
x.w=e
x.X()},
$S:958}
B.aVE.prototype={
$2(d,e){return C.e.ba(A.eD(A.f(d),null,null),1000)===this.a},
$S:959}
B.bi2.prototype={
$1(d){var x=0,w=A.o(y.a),v=this,u,t
var $async$$1=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.d(u.d.a.AS(),$async$$1)
case 2:t=f
if(u.c!=null)u.t(new B.bi1(u,t))
return A.m(null,w)}})
return A.n($async$$1,w)},
$S:960}
B.bi1.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bi3.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bi0(x,d))},
$S:z+8}
B.bi0.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bi4.prototype={
$1(d){},
$S:22}
B.bhP.prototype={
$0(){},
$S:0}
B.bhV.prototype={
$1(d){var x=this.c,w=this.a.w
w.toString
return new B.Az(this.b,x.a,x.b,w,null)},
$S:z+9}
B.bhW.prototype={
$0(){},
$S:0}
B.bhZ.prototype={
$0(){var x=y.z
return A.al(this.a,!1).cV(A.cW(new B.bhY(),null,x),x)},
$S:0}
B.bhY.prototype={
$1(d){return D.b47},
$S:z+10}
B.bi_.prototype={
$0(){return B.bNZ(this.a)},
$S:0}
B.bhS.prototype={
$0(){var x=this.b
return this.a.vf(x.a,x.b,x.c)},
$S:0}
B.bhT.prototype={
$1(d){return this.a.t(new B.bhR())},
$S:9}
B.bhR.prototype={
$0(){},
$S:0}
B.bhU.prototype={
$0(){var x=this.a
return x.t(new B.bhQ(x))},
$S:0}
B.bhQ.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.bhX.prototype={
$0(){return this.a.aOE(this.b)},
$S:0}
B.bwx.prototype={
$1(d){return new A.iZ(new B.bwu(this.a,this.b,this.c),null)},
$S:52}
B.bwu.prototype={
$2(d,e){var x,w,v=null,u=this.b,t=new B.bww(u,e),s=this.a,r=new B.bwv(s,e),q=A.i(H.jG(this.c),v,v,v,v,v,C.pz,v,v,v),p=A.i("\u0647\u062a\u0633\u0645\u0651\u0639 \u0623\u0646\u0647\u064a \u0622\u064a\u0627\u062a\u061f ("+E.aZ(u)+" \u0622\u064a\u0629)",v,v,v,v,v,F.al,v,v,v),o=y.p,n=A.a([],o)
if(u<=30)n.push(r.$3("\u0627\u0644\u0633\u0648\u0631\u0629 \u0643\u0644\u0647\u0627",1,u))
x=u<5
w=E.aZ(x?u:5)
x=x?u:5
n.push(r.$3("\u0623\u0648\u0644 "+w+" \u0622\u064a\u0627\u062a",1,x))
x=s.a
if(x>1){x=E.aZ(x)
w=s.a
n.push(r.$3("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+x,w,C.e.cA(w+4,1,u)))}u=A.a([q,C.aR,p,C.S,A.dy(n,C.aK,6,8),C.K,A.ai(A.a([t.$3("\u0645\u0646",s.b,new B.bwp(s)),D.aNw,t.$3("\u0644\u062d\u062f",s.c,new B.bwq(s))],o),C.j,C.f,C.h,0,v,v)],o)
if(s.c-s.b>=10)u.push(D.aBM)
u.push(C.aJ)
u.push(A.fI(D.aZj,v,new B.bwr(s,d),A.il(C.q,C.a5,D.aNn,v,v,v,v)))
return A.dI(!0,new A.a_(C.At,A.ac(u,C.aa,C.f,C.V),v),C.L,!0)},
$S:334}
B.bww.prototype={
$3(d,e,f){var x,w,v,u=null,t=A.i(d,u,u,u,u,u,C.ig,u,u,u),s=A.a([],y.I)
for(x=this.a,w=y.r,v=1;v<=x;++v)s.push(new A.d_(v,A.i("\u0622\u064a\u0629 "+E.aZ(v),u,u,u,u,u,u,u,u,u),C.as,u,w))
return A.aQ(A.ac(A.a([t,S.D1(C.dd,!0,s,320,new B.bwt(this.b,f),D.aVS,e,y.S)],y.p),C.B,C.f,C.h),1)},
$S:962}
B.bwt.prototype={
$1(d){return d==null?null:this.a.$1(new B.bws(this.b,d))},
$S:53}
B.bws.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bwv.prototype={
$3(d,e,f){var x=null
return A.bE2(x,A.i(d,x,x,x,x,x,x,x,x,x),new B.bwo(this.a,this.b,e,f))},
$S:963}
B.bwo.prototype={
$0(){var x=this
return x.b.$1(new B.bwn(x.a,x.c,x.d))},
$S:0}
B.bwn.prototype={
$0(){var x=this.a
x.b=this.b
x.c=this.c},
$S:0}
B.bwp.prototype={
$1(d){var x=this.a
x.b=d
if(x.c<d)x.c=d},
$S:31}
B.bwq.prototype={
$1(d){var x=this.a
x.c=d
if(x.b>d)x.b=d},
$S:31}
B.bwr.prototype={
$0(){var x=this.a
return A.al(this.b,!1).be(new A.R(x.b,x.c))},
$S:0}
B.bpU.prototype={
$0(){},
$S:0}
B.bq9.prototype={
$0(){var x=this.a
x.e=this.b
x.f=D.k0
x.w=x.r=null
x.x=!1
x.ch=x.ax=x.as=null},
$S:0}
B.bqd.prototype={
$0(){var x=this.a
return x.f=x.r!=null?D.hd:D.k0},
$S:0}
B.bqe.prototype={
$0(){var x=this.a
x.f=D.q7
x.as=null},
$S:0}
B.bqf.prototype={
$0(){var x=this.a
x.f=this.b
if(!this.c&&x.as==null)x.as=null},
$S:0}
B.bqh.prototype={
$0(){var x=this.a
x.f=D.q8
x.as=null
x.y=0
x.z=new A.b2(Date.now(),0,!1)
x.ax=null},
$S:0}
B.bqi.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bqg())},
$S:35}
B.bqg.prototype={
$0(){},
$S:0}
B.bqk.prototype={
$1(d){return this.a.y=d},
$S:59}
B.bqj.prototype={
$1(d){return this.a.yl()},
$S:9}
B.bql.prototype={
$0(){var x,w=this.a
w.f=w.r!=null?D.hd:D.k0
x=this.b
w.as=B.Jh(x)
w.at=x},
$S:0}
B.bqn.prototype={
$0(){var x=this.a
x.f=D.lX
x.ay=Date.now()},
$S:0}
B.bqo.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bqm())},
$S:35}
B.bqm.prototype={
$0(){},
$S:0}
B.bq8.prototype={
$0(){var x=this.a
x.f=x.r!=null?D.hd:D.k0
x.as=this.b
x.at=this.c},
$S:0}
B.bqa.prototype={
$0(){var x=this.b
x.r=this.c
x.w=this.a.a
x.f=D.hd
x.x=!1},
$S:0}
B.bq1.prototype={
$0(){var x=this.a
x.f=D.lX
x.ay=Date.now()
x.as=null},
$S:0}
B.bq2.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bq0())},
$S:35}
B.bq0.prototype={
$0(){},
$S:0}
B.bq3.prototype={
$1(d){return d.d!==D.h7},
$S:z+11}
B.bq4.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.bqt.prototype={
$0(){return B.bNZ(this.a)},
$S:0}
B.bqu.prototype={
$1(d){var x=this.a.d
return x.oU(x.b.aeh(d))},
$S:5}
B.bqv.prototype={
$0(){var x=y.z
return A.al(this.b,!1).cV(A.cW(new B.bqs(this.a),null,x),x)},
$S:0}
B.bqs.prototype={
$1(d){var x=this.a.a
return new B.Ay(x.c,x.d,x.e,x.f,null)},
$S:z+12}
B.bqw.prototype={
$0(){this.a.d.a.b1W()
this.b.R(y.q).f.aO(D.aO2)},
$S:0}
B.bq7.prototype={
$2(d,e){return C.by},
$S:48}
B.bq6.prototype={
$2(d,e){var x,w,v,u=null,t=this.a,s=t.a,r=s.d+e
switch(t.d.c.YM(s.c,r).a.a){case 2:s=G.c4
break
case 1:s=D.d0
break
case 0:s=N.ho
break
default:s=u}x=A.aa(18)
w=t.f===D.lX?u:new B.bq5(t,r)
v=s.bo(0.25)
if(r===t.gi7())s=C.i
s=A.cT(s,r===t.gi7()?2:1)
return A.dg(!1,x,!0,A.au(C.W,A.i(E.aZ(r),u,u,u,u,u,D.aSS,u,u,u),C.m,u,u,new A.ap(v,u,s,u,u,u,C.cp),u,u,u,u,u,u,36),u,!0,u,u,u,u,u,u,u,u,u,u,u,w,u,u,u,u,u,u,u)},
$S:128}
B.bq5.prototype={
$0(){return this.a.Sk(this.b)},
$S:0}
B.bqc.prototype={
$0(){var x=this.a
return x.t(new B.bqb(x))},
$S:0}
B.bqb.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bqp.prototype={
$1(d){return d===D.pV},
$S:z+2}
B.bqq.prototype={
$1(d){return d===D.pW},
$S:z+2}
B.bqr.prototype={
$1(d){return d===D.pX},
$S:z+2}
B.bpV.prototype={
$0(){var x=this.b!=null&&!this.c?1:null
return this.a.KA(x)},
$S:0}
B.bpW.prototype={
$1(d){var x=this.a.d
return x.oU(x.b.aTm(d.ga2(d)))},
$S:90}
B.bpY.prototype={
$1(d){return d.m(0,C.J)?C.a5:C.i},
$S:4}
B.bpX.prototype={
$1(d){return d.m(0,C.J)?C.q:C.P},
$S:4}
B.bpZ.prototype={
$0(){var x=this.a
return x.Sk(x.gi7()+1)},
$S:0}
B.bq_.prototype={
$0(){var x=this.a
return x.Sk(x.gi7()+1)},
$S:0}
B.bpD.prototype={
$0(){},
$S:0}
B.bpM.prototype={
$0(){var x=this.a
x.e=this.b
x.Q=null
x.x=0
x.z=new A.b2(Date.now(),0,!1)},
$S:0}
B.bpN.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bpL())},
$S:35}
B.bpL.prototype={
$0(){},
$S:0}
B.bpP.prototype={
$1(d){return this.a.x=d},
$S:59}
B.bpO.prototype={
$1(d){return this.a.BK(this.b,!1)},
$S:9}
B.bpQ.prototype={
$0(){var x,w=this.a
w.e=null
x=this.b
w.Q=B.Jh(x)
w.as=x},
$S:0}
B.bpH.prototype={
$0(){var x=this.a
x.e=null
x.r.D(0,this.b)},
$S:0}
B.bpI.prototype={
$0(){var x,w=this.a,v=this.b
w.r.I(0,v)
x=this.c
w.w.n(0,v,B.Jh(x))
w.as=x},
$S:0}
B.bpJ.prototype={
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
return A.d(n.a.ajF(s.b,B.BQ(H.Je(l,m,k.vn(l,m)).b).length),$async$$1)
case 6:r=f
l=o.a
k=l.f
l=l.c
q=B.bMf(H.Je(l,m,k.vn(l,m)).b,r.a)
if(C.c.ak(q.c).length!==0){l=n.c
k=o.a.c
j=q.gqs()
l.aiK(k,m,n.b.a,j)}n.x3()
if(o.c!=null)o.t(new B.bpE(o,m,q))
t.push(5)
x=4
break
case 3:v=2
h=u.pop()
o=A.Y(h)
if(o instanceof B.kP){p=o
o=s.a
if(o.c!=null)o.t(new B.bpF(o,s.c,p))}else throw h
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
o=s.a
if(o.c!=null)o.t(new B.bpG(o,s.c))
x=t.pop()
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$$1,w)},
$S:148}
B.bpE.prototype={
$0(){var x=this.c
this.a.f.n(0,this.b,x)
return x},
$S:0}
B.bpF.prototype={
$0(){var x=this.a,w=this.c
x.w.n(0,this.b,B.Jh(w))
x.as=w},
$S:0}
B.bpG.prototype={
$0(){return this.a.r.I(0,this.b)},
$S:0}
B.bpK.prototype={
$0(){var x=this.a
x.f.ad(0)
x.w.ad(0)
x.as=null},
$S:0}
B.bpR.prototype={
$1(d){return d.gqs()},
$S:z+13}
B.bpS.prototype={
$0(){return this.a.BK(this.b,!0)},
$S:0}
B.bpT.prototype={
$0(){return this.a.Dl(this.b)},
$S:0}
B.bpu.prototype={
$0(){},
$S:0}
B.bpB.prototype={
$2(d,e){return d+this.a.YD(e)},
$S:100}
B.bpC.prototype={
$2(d,e){return d+I.c7[e-1].a[1]},
$S:100}
B.bpA.prototype={
$0(){return this.a.HY(this.b)},
$S:0}
B.bpz.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.b,o=A.i(H.jG(p),q,q,q,q,q,C.pz,q,q,q),n=y.p,m=A.a([],n)
for(x=this.c,w=this.a,v=w.d,u=p*1000,t=1;t<=x;++t){s=new A.ba(10,10)
r=v.c.a.h(0,u+t)
switch((r==null?$.q_():r).a.a){case 2:r=G.c4.bo(0.35)
break
case 1:r=D.d0.bo(0.35)
break
case 0:r=C.zi
break
default:r=q}m.push(A.au(C.W,A.i(E.aZ(t),q,q,q,q,q,K.Ve,q,q,q),C.m,q,q,new A.ap(r,q,q,new A.d2(s,s,s,s),q,q,C.u),q,38,q,q,q,q,38))}return A.dI(!0,new A.a_(C.iM,A.ac(A.a([o,C.aR,D.b0e,C.S,new A.ef(D.ZA,A.hI(A.dy(m,C.aK,6,6),q,C.t,q,q,C.x),q),C.aj,A.bH(D.b1d,q,q,q,new B.bpy(w,d,p),q,q)],n),C.aa,C.f,C.V),q),C.L,!0)},
$S:49}
B.bpy.prototype={
$0(){var x=0,w=A.o(y.H),v=this,u,t
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:u=v.b
t=v.c
x=4
return A.d(A.eb(null,new B.bpx(t),u,y.y),$async$$0)
case 4:x=e===!0?2:3
break
case 2:x=5
return A.d(v.a.d.FL(t),$async$$0)
case 5:if(u.e!=null)A.al(u,!1).eo()
case 3:return A.m(null,w)}})
return A.n($async$$0,w)},
$S:2}
B.bpx.prototype={
$1(d){var x=null,w=A.i("\u0647\u062a\u0628\u062f\u0623 "+H.jG(this.a)+" \u0645\u0646 \u0627\u0644\u0623\u0648\u0644.",x,x,x,x,x,x,x,x,x)
return A.ec(A.a([A.bH(C.x7,x,x,x,new B.bpv(d),x,x),A.bH(D.b2A,x,x,x,new B.bpw(d),x,x)],y.p),w,D.b25)},
$S:15}
B.bpv.prototype={
$0(){A.al(this.a,!1).be(!1)
return null},
$S:0}
B.bpw.prototype={
$0(){A.al(this.a,!1).be(!0)
return null},
$S:0}
B.bxf.prototype={
$1(d){var x=this.a
return new A.jS(new B.bxe(x),null,x,null)},
$S:964}
B.bxe.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.a,r=s.b,q=A.a([],y.n)
for(x=y.c,w=1;w<=5;++w)q.push(new A.ey(w,t,A.i(E.aZ(w),t,t,t,t,t,t,t,t,t),x))
x=y.S
v=y.b
u=y.p
x=A.a([D.aXS,C.aj,D.b1s,C.U,A.vA(new B.bx9(s,r),q,A.cV([r.a],x),!1,A.jI(t,t,t,new A.b4(new B.bxa(),v),t,t,t,t,new A.b4(new B.bxb(),v),t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),x),C.K,A.rG(C.q,C.L,t,new B.bxc(s,r),D.b_R,D.b37,r.c),A.rG(C.q,C.L,t,new B.bxd(s,r),t,D.aXB,r.d)],u)
s=s.x
if(s!=null)C.b.E(x,A.a([C.aR,A.i("\u0627\u0644\u0645\u0639\u0627\u0644\u062c: "+s.glH(),t,t,t,t,t,F.al,t,C.aF,t)],u))
x.push(C.K)
x.push(D.W9)
return A.dI(!0,A.hI(A.ac(x,C.aa,C.f,C.h),t,C.t,C.iM,t,C.x),C.L,!0)},
$S:965}
B.bx9.prototype={
$1(d){return this.a.oU(this.b.aTj(d.ga2(d)))},
$S:90}
B.bxb.prototype={
$1(d){return d.m(0,C.J)?C.a5:C.i},
$S:4}
B.bxa.prototype={
$1(d){return d.m(0,C.J)?C.q:C.P},
$S:4}
B.bxc.prototype={
$1(d){return this.a.oU(this.b.aSN(d))},
$S:5}
B.bxd.prototype={
$1(d){return this.a.oU(this.b.aeh(d))},
$S:5}
B.aVm.prototype={
$0(){return A.e9(A.bO(this.a,0,null),C.bD,null)},
$S:0}
B.bxt.prototype={
$1(d){var x,w=A.aP("https?://",!0,!1)
w=A.bS(d,w,"")
x=A.aP("www\\.",!0,!1)
return A.BR(A.bS(w,x,"www[.]"),A.aP("([A-Za-z0-9-]+)\\.(com|net|org|io|xyz|ru|info|me|link)\\b",!1,!1),new B.bxu(),null)},
$S:29}
B.bxu.prototype={
$1(d){return A.f(d.h(0,1))+"[.]"+A.f(d.h(0,2))},
$S:57}
B.bqx.prototype={
$0(){var x=this.a
x.e=!0
x.r=null},
$S:0}
B.bqy.prototype={
$0(){return this.a.f=!0},
$S:0}
B.bqz.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bqA.prototype={
$0(){return this.a.e=!1},
$S:0}
B.bqC.prototype={
$0(){var x=this.a
return x.t(new B.bqB(x))},
$S:0}
B.bqB.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.bxs.prototype={
$1(d){return d==null?"\u2013":A.f(d)},
$S:142};(function installTearOffs(){var x=a._instance_0u
x(B.acf.prototype,"gaYQ","aYR",1)
var w
x(w=B.Rp.prototype,"gaZ6","zI",0)
x(w,"garC","ut",0)
x(w=B.Vl.prototype,"gn6","ve",1)
x(w,"gaHH","Jn",0)
x(w=B.Xl.prototype,"gn6","ve",1)
x(w,"gaJT","JE",0)
x(w,"gaNr","yl",0)
x(w,"gawf","HV",0)
x(w=B.Xk.prototype,"gn6","ve",1)
x(w,"gaKv","aKw",1)
x(B.Xj.prototype,"gn6","ve",1)
x(B.Xm.prototype,"gaOG","KB",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.acf,B.Rq,B.Gu,B.Gw,B.Gv,B.kP,B.OI,B.m4,B.Fd,B.qa,B.acg,B.Ro])
x(A.km,[B.aVn,B.aVp,B.aVu,B.aVv,B.aVx,B.aVw,B.aMK,B.aVC,B.bi1,B.bi0,B.bhP,B.bhW,B.bhZ,B.bi_,B.bhS,B.bhR,B.bhU,B.bhQ,B.bhX,B.bws,B.bwo,B.bwn,B.bwr,B.bpU,B.bq9,B.bqd,B.bqe,B.bqf,B.bqh,B.bqg,B.bql,B.bqn,B.bqm,B.bq8,B.bqa,B.bq1,B.bq0,B.bq4,B.bqt,B.bqv,B.bqw,B.bq5,B.bqc,B.bqb,B.bpV,B.bpZ,B.bq_,B.bpD,B.bpM,B.bpL,B.bpQ,B.bpH,B.bpI,B.bpE,B.bpF,B.bpG,B.bpK,B.bpS,B.bpT,B.bpu,B.bpA,B.bpy,B.bpv,B.bpw,B.aVm,B.bqx,B.bqy,B.bqz,B.bqA,B.bqC,B.bqB])
x(A.hX,[B.aVq,B.aVs,B.aVt,B.aVr,B.aMJ,B.bul,B.aVA,B.aVB,B.aVy,B.bi2,B.bi3,B.bi4,B.bhV,B.bhY,B.bhT,B.bwx,B.bww,B.bwt,B.bwv,B.bwp,B.bwq,B.bqi,B.bqk,B.bqj,B.bqo,B.bq2,B.bq3,B.bqu,B.bqs,B.bqp,B.bqq,B.bqr,B.bpW,B.bpY,B.bpX,B.bpN,B.bpP,B.bpO,B.bpJ,B.bpR,B.bpz,B.bpx,B.bxf,B.bx9,B.bxb,B.bxa,B.bxc,B.bxd,B.bxt,B.bxu,B.bxs])
x(A.n6,[B.aVo,B.bsS,B.aVD,B.aVE,B.bwu,B.bq7,B.bq6,B.bpB,B.bpC,B.bxe])
x(A.B0,[B.mH,B.C9,B.Eh,B.Bi])
w(B.Rp,A.hh)
x(A.P,[B.ve,B.Az,B.Ay,B.Ax,B.AA])
x(A.U,[B.Vl,B.Xl,B.Xk,B.Xj,B.Xm])
x(A.a5,[B.Ei,B.T9,B.AO,B.ace])})()
A.oh(b.typeUniverse,JSON.parse('{"kP":{"bp":[]},"Az":{"P":[],"e":[]},"Ay":{"P":[],"e":[]},"Ax":{"P":[],"e":[]},"AA":{"P":[],"e":[]},"Rp":{"as":[]},"ve":{"P":[],"e":[]},"Vl":{"U":["ve"]},"Ei":{"a5":[],"e":[]},"T9":{"a5":[],"e":[]},"Xl":{"U":["Az"]},"AO":{"a5":[],"e":[]},"Xk":{"U":["Ay"]},"Xj":{"U":["Ax"]},"ace":{"a5":[],"e":[]},"Xm":{"U":["AA"]}}'))
var y=(function rtii(){var x=A.a3
return{u:x("qa"),c:x("ey<u>"),r:x("d_<u>"),k:x("y<m4>"),n:x("y<ey<u>>"),I:x("y<d_<u>>"),R:x("y<h2>"),Z:x("y<aA<h,@>>"),d:x("y<OI>"),s:x("y<h>"),p:x("y<e>"),t:x("y<u>"),m:x("bj"),j:x("Q<@>"),L:x("Q<u>"),P:x("aA<h,@>"),f:x("aA<@,@>"),x:x("ak<h,u>"),a:x("bo"),K:x("N"),B:x("Fd"),l:x("+(u,u)"),e:x("cD<m4>"),N:x("h"),C:x("Gu"),D:x("Gv"),X:x("Rq"),_:x("Gw"),U:x("aG<h>"),G:x("mH"),q:x("oe"),b:x("b4<H?>"),y:x("A"),i:x("K"),z:x("@"),S:x("u"),A:x("bj?"),Y:x("aA<@,@>?"),O:x("N?"),M:x("+quota,usage(u,u)?"),o:x("dd"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.m4=new B.C9(0,"none")
D.m5=new B.C9(1,"learning")
D.e0=new B.C9(2,"memorized")
D.ZA=new A.at(0,1/0,0,320)
D.dH=new A.H(1,0.9725490196078431,0.44313725490196076,0.44313725490196076,C.l)
D.ZJ=new A.ap(D.dH,null,null,null,null,null,C.cp)
D.d0=new A.H(1,0.984313725490196,0.7490196078431373,0.1411764705882353,C.l)
D.aeI=new A.a4(C.BY,null,C.c3,null,null,null)
D.b28=new A.r("\u0627\u0644\u0646\u0635 \u0645\u062e\u0641\u064a \u2014 \u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.el,null,null,null,null,null,null,null,null)
D.aS7=new A.t(!0,C.eY,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b0f=new A.r("(\u062f\u0648\u0633 \u0647\u0646\u0627 \u0644\u0648 \u0639\u0627\u064a\u0632 \u062a\u0628\u0635)",null,D.aS7,null,null,null,null,null,null,null,null)
D.arr=x([D.aeI,C.U,D.b28,D.b0f],y.p)
D.a5k=new A.ja(C.x,C.f,C.h,C.j,null,C.b2,null,0,D.arr,null)
D.a8M=new A.Z(0,18,0,18)
D.a8Q=new A.Z(0,26,0,26)
D.a8V=new A.Z(0,4,0,6)
D.a99=new A.Z(14,12,14,14)
D.a9J=new A.Z(3,0,0,0)
D.ac_=new A.a2(63251,"MaterialIcons",null,!1)
D.nj=new A.a2(63677,"MaterialIcons",null,!1)
D.acv=new A.a2(983256,"MaterialIcons",null,!1)
D.act=new A.a2(983209,"MaterialIcons",null,!1)
D.acY=new A.a4(D.act,28,C.q,null,null,null)
D.adp=new A.a4(C.BH,null,N.ho,null,null,null)
D.abR=new A.a2(62961,"MaterialIcons",null,!1)
D.adI=new A.a4(D.abR,null,null,null,null,null)
D.abY=new A.a2(63199,"MaterialIcons",null,!1)
D.adJ=new A.a4(D.abY,null,null,null,null,null)
D.adM=new A.a4(C.hB,null,C.eY,null,null,null)
D.adO=new A.a4(C.kQ,44,C.i,null,null,null)
D.ae5=new A.a4(D.nj,null,D.dH,null,null,null)
D.aee=new A.a4(C.tW,null,D.dH,null,null,null)
D.aeo=new A.a4(C.BD,null,null,null,null,null)
D.aep=new A.a4(D.nj,null,null,null,null,null)
D.Ck=new A.a4(C.no,null,null,null,null,null)
D.aeG=new A.a4(C.kN,20,D.d0,null,null,null)
D.aeU=new A.a4(C.nl,30,C.q,null,null,null)
D.afb=new A.a4(C.nm,16,C.q,null,null,null)
D.acc=new A.a2(63520,"MaterialIcons",null,!1)
D.afn=new A.a4(D.acc,null,null,null,null,null)
D.afs=new A.a4(C.kP,null,null,null,null,null)
D.afy=new A.a4(C.Bt,null,null,null,null,null)
D.D4=x([1,3,5],y.t)
D.DS=x(["\u0627\u0639\u0648\u0630","\u0628\u0627\u0644\u0644\u0647","\u0645\u0646","\u0627\u0644\u0634\u064a\u0637\u0627\u0646","\u0627\u0644\u0631\u062c\u064a\u0645"],y.s)
D.aCb=new A.a_(C.hw,T.qK,null)
D.aoW=x([D.aCb],y.p)
D.aFv=new A.R(C.j_,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0629 \u0628\u0635\u0648\u062a \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062d\u0635\u0631\u064a (\u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645) \u0645\u0631\u0629 \u0623\u0648 \u0663 \u0623\u0648 \u0665 \u0645\u0631\u0627\u062a.")
D.aFn=new A.R(D.nj,"\u0633\u0645\u0651\u0639\u0647\u0627 \u0645\u0646 \u062d\u0641\u0638\u0643 \u2014 \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0644\u0648\u0651\u0646\u0644\u0643 \u0643\u0644 \u0643\u0644\u0645\u0629: \u0623\u062e\u0636\u0631 \u0635\u062d\u060c \u0623\u0635\u0641\u0631 \u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0623\u062d\u0645\u0631 \u063a\u0644\u0637.")
D.aFI=new A.R(C.fy,"\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0645\u0627 \u062a\u0633\u0645\u0651\u0639\u0647\u0627 \u0635\u062d \u0645\u0631\u062a\u064a\u0646 \u0648\u0631\u0627 \u0628\u0639\u0636 (\u062a\u0642\u062f\u0631 \u062a\u063a\u064a\u0651\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a).")
D.acj=new A.a2(63625,"MaterialIcons",null,!1)
D.aFR=new A.R(D.acj,"\u0643\u0644 \u062f\u0647 \u0628\u064a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u2014 \u0635\u0648\u062a\u0643 \u0645\u0634 \u0628\u064a\u062a\u0631\u0641\u0639 \u0639\u0644\u0649 \u0623\u064a \u0633\u064a\u0631\u0641\u0631.")
D.aqD=x([D.aFv,D.aFn,D.aFI,D.aFR],A.a3("y<+(a2,h)>"))
D.asz=x([D.m4,D.m5,D.e0],A.a3("y<C9>"))
D.In=x(["\u0628\u0633\u0645","\u0627\u0644\u0644\u0647","\u0627\u0644\u0631\u062d\u0645\u0646","\u0627\u0644\u0631\u062d\u064a\u0645"],y.s)
D.azi=new B.Eh(0,"idle")
D.Ox=new B.Eh(1,"loading")
D.hT=new B.Eh(2,"ready")
D.azj=new B.Eh(3,"failed")
D.ae3=new A.a4(C.de,18,G.c4,null,null,null)
D.b2M=new A.r("\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u062c\u0627\u0647\u0632 \u064a\u0633\u0645\u0639\u0643",null,K.pF,null,null,null,null,null,null,null,null)
D.ao3=x([D.ae3,C.by,D.b2M],y.p)
D.aL5=new A.iq(C.az,C.f,C.h,C.j,null,C.b2,null,0,D.ao3,null)
D.aBu=new A.a_(C.aA,D.aL5,null)
D.a9G=new A.Z(2,6,2,4)
D.aRM=new A.t(!0,C.q,null,null,null,null,14,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXQ=new A.r("\u0627\u0628\u062f\u0623 \u0645\u0646 \u0647\u0646\u0627 \u2014 \u0627\u0644\u0641\u0627\u062a\u062d\u0629 \u0648\u062c\u0632\u0621 \u0639\u0645\u0651",null,D.aRM,null,null,null,null,null,null,null,null)
D.aBC=new A.a_(D.a9G,D.aXQ,null)
D.b2V=new A.r("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.el,null,null,null,null,null,null,null,null)
D.ape=x([O.pj,C.ar,D.b2V],y.p)
D.aL3=new A.iq(C.az,C.c8,C.h,C.j,null,C.b2,null,0,D.ape,null)
D.aBJ=new A.a_(Q.rL,D.aL3,null)
D.wZ=new A.t(!0,D.d0,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b32=new A.r("\u0646\u0635\u064a\u062d\u0629: \u0627\u062d\u0641\u0638 \u0663\u2013\u0665 \u0622\u064a\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0631\u0629 \u0623\u0633\u0647\u0644.",null,D.wZ,null,null,null,null,null,null,null,null)
D.aBM=new A.a_(C.fx,D.b32,null)
D.b2I=new A.r("\u0644\u0633\u0647 \u0645\u0633\u0645\u0651\u0639\u062a\u0634 \u0623\u064a \u0622\u064a\u0629 \u2014 \u0627\u0628\u062f\u0623 \u0628\u0633\u0648\u0631\u0629 \u0642\u0635\u064a\u0631\u0629 \u0645\u0646 \u062c\u0632\u0621 \u0639\u0645\u0651.",null,F.al,C.ad,null,null,null,null,null,null,null)
D.aBS=new A.a_(C.C,D.b2I,null)
D.a9D=new A.Z(2,0,2,8)
D.b0n=new A.r("\u0627\u0644\u0633\u0648\u0631 \u0627\u0644\u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u060c \u0645\u0646 \u0627\u0644\u0646\u0627\u0633 \u0644\u062d\u062f \u0627\u0644\u0646\u0628\u0623.",null,F.al,null,null,null,null,null,null,null,null)
D.aC5=new A.a_(D.a9D,D.b0n,null)
D.afh=new A.a4(C.hC,30,C.q,null,null,null)
D.aWp=new A.t(!0,C.i,null,null,null,null,17,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b3s=new A.r("\u0633\u0645\u0651\u0639\u060c \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0642\u0648\u0644\u0643 \u0635\u062d \u0648\u0644\u0627 \u063a\u0644\u0637",null,D.aWp,null,null,null,null,null,null,null,null)
D.aaj=new A.dD(1,C.aS,D.b3s,null)
D.apr=x([D.afh,C.aV,D.aaj],y.p)
D.aKW=new A.iq(C.az,C.f,C.h,C.j,null,C.b2,null,0,D.apr,null)
D.af1=new A.a4(C.fy,18,G.c4,null,null,null)
D.Vm=new A.t(!0,G.c4,null,null,null,null,12,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b2t=new A.r("\u0645\u062d\u0641\u0648\u0638\u0629",null,D.Vm,null,null,null,null,null,null,null,null)
D.aot=x([D.af1,C.fW,D.b2t],y.p)
D.aL2=new A.iq(C.az,C.f,C.V,C.j,null,C.b2,null,0,D.aot,null)
D.aNc=new A.G(0,30)
D.pi=new A.G(1/0,54)
D.aNn=new A.G(1/0,48)
D.aNq=new A.G(1/0,50)
D.aNt=new A.G(1/0,52)
D.aNw=new A.cr(16,null,null,null)
D.aNA=new A.cr(14,14,O.yP,null)
D.b1k=new A.r("safe mode / no-gpu flags cleared (reload)",null,null,null,null,null,null,null,null,null,null)
D.aO2=new A.hL(D.b1k,null,null,null,null,null,null,null,null,null,null,null,null,C.z,!1,null,null,null,C.k,null)
D.aRe=new A.t(!0,C.i,null,null,null,null,14.5,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRE=new A.t(!0,C.a6,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.wR=new A.t(!0,D.dH,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSS=new A.t(!0,C.i,null,null,null,null,12,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.id=new A.t(!0,C.i,null,"AmiriQuranMT",null,null,27,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUl=new A.t(!0,C.cs,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vp=new A.t(!0,D.dH,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUK=new A.t(!0,C.q,null,null,null,null,24,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vs=new A.t(!0,C.i,null,null,null,null,12.5,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUY=new A.t(!0,C.q,null,null,null,null,null,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVz=new A.t(!0,D.d0,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVA=new A.t(!0,G.c4,null,null,null,null,null,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVS=new A.t(!0,C.i,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXf=new A.r("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u062e\u0631 \u0645\u0631\u0629",null,C.ig,null,null,null,null,null,null,null,null)
D.aXB=new A.r("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643 (\u062e\u0628\u0651\u064a \u0627\u0644\u0646\u0635)",null,C.cW,null,null,null,null,null,null,null,null)
D.aXS=new A.r("\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,C.pz,null,null,null,null,null,null,null,null)
D.aXV=new A.r("\u2022 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641: \u0645\u0634\u0631\u0648\u0639 \u062a\u0646\u0632\u064a\u0644 Tanzil (\u062a\u0631\u062e\u064a\u0635 CC BY 3.0).",null,F.al,null,null,null,null,null,null,null,null)
D.aSQ=new A.t(!0,G.c4,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aY2=new A.r("\u0648\u0635\u0644\u062a\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2014 \u0634\u0643\u0631\u064b\u0627\u060c \u0647\u0646\u0628\u0635 \u0639\u0644\u064a\u0647\u0627.",null,D.aSQ,null,null,null,null,null,null,null,null)
D.aY5=new A.r("\u062e\u0628\u0651\u064a \u0646\u0635 \u0627\u0644\u0622\u064a\u0629 \u0648\u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,F.al,null,null,null,null,null,null,null,null)
D.aYb=new A.r("\u0639\u062f\u0651\u064a \u0644\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.el,null,null,null,null,null,null,null,null)
D.aYU=new A.r("\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0627\u0628\u062f\u0623",null,C.cG,null,null,null,null,null,null,null,null)
D.aZj=new A.r("\u064a\u0644\u0627 \u0646\u0628\u062f\u0623",null,C.cH,null,null,null,null,null,null,null,null)
D.aZn=new A.r("\u0645\u0645\u0643\u0646 \u062a\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 \u062f\u0644\u0648\u0642\u062a\u064a \u0644\u062d\u062f \u0645\u0627 \u064a\u062e\u0644\u0635.",null,F.al,null,null,null,null,null,null,null,null)
D.aZF=new A.r("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.x_,null,null,null,null,null,null,null,null)
D.b_3=new A.r("\u062c\u0631\u0651\u0628 \u0639\u0644\u0649 \u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a (\u0644\u0644\u062a\u062c\u0631\u0628\u0629)",null,null,null,null,null,null,null,null,null,null)
D.b_m=new A.r("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643",null,K.lF,null,null,null,null,null,null,null,null)
D.b_I=new A.r("reset safe mode / WebGPU ban",null,C.wN,null,null,null,null,null,null,null,null)
D.b_N=new A.r("\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629",null,D.wZ,null,null,null,null,null,null,null,null)
D.b_R=new A.r("\u0628\u0639\u062f \u062d\u0648\u0627\u0644\u064a \u062b\u0627\u0646\u064a\u0629 \u0633\u0643\u0648\u062a",null,F.al,null,null,null,null,null,null,null,null)
D.b05=new A.r("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636",null,F.b_,null,null,null,null,null,null,null,null)
D.b0e=new A.r("\u0623\u062e\u0636\u0631: \u0645\u062d\u0641\u0648\u0638\u0629 \u2014 \u0623\u0635\u0641\u0631: \u0628\u062a\u0631\u0627\u062c\u0639\u0647\u0627 \u2014 \u0631\u0645\u0627\u062f\u064a: \u0644\u0633\u0647",null,F.al,null,null,null,null,null,null,null,null)
D.b0o=new A.r("\u0645\u0641\u064a\u0634 \u0633\u0648\u0631\u0629 \u0628\u0627\u0644\u0627\u0633\u0645 \u062f\u0647",null,F.al,null,null,null,null,null,null,null,null)
D.aWr=new A.t(!0,C.q,null,null,null,null,12.5,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b1c=new A.r("\u0627\u0628\u0639\u062a \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aWr,null,null,null,null,null,null,null,null)
D.aU5=new A.t(!0,D.dH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b1d=new A.r("\u0627\u0628\u062f\u0623 \u0627\u0644\u0633\u0648\u0631\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644",null,D.aU5,null,null,null,null,null,null,null,null)
D.b1s=new A.r("\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f \u0643\u0627\u0645 \u062a\u0633\u0645\u064a\u0639 \u0635\u062d \u0648\u0631\u0627 \u0628\u0639\u0636\u061f",null,K.lF,null,null,null,null,null,null,null,null)
D.aR0=new A.t(!0,C.i,null,null,null,null,null,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b1I=new A.r("\u0627\u0644\u0645\u0635\u0627\u062f\u0631",null,D.aR0,null,null,null,null,null,null,null,null)
D.b1T=new A.r("\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.cG,null,null,null,null,null,null,null,null)
D.b25=new A.r("\u062a\u0645\u0633\u062d \u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0633\u0648\u0631\u0629 \u062f\u064a\u061f",null,null,null,null,null,null,null,null,null,null)
D.b2e=new A.r("\u0633\u0645\u0651\u0639\u0647\u0645 \u062a\u0627\u0646\u064a",null,null,null,null,null,null,null,null,null,null)
D.b2A=new A.r("\u0627\u0645\u0633\u062d",null,null,null,null,null,null,null,null,null,null)
D.b2B=new A.r("\u2022 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: whisper-base-ar-quran \u0645\u0646 Tarteel (\u062a\u0631\u062e\u064a\u0635 Apache-2.0)\u060c \u0628\u0635\u064a\u063a\u0629 ONNX \u0645\u0646 \u0645\u0634\u0631\u0648\u0639 Basira\u060c \u0648\u0628\u064a\u0634\u062a\u063a\u0644 \u062c\u0648\u0651\u0647 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0628\u0645\u0643\u062a\u0628\u0629 Transformers.js.",null,F.al,null,null,null,null,null,null,null,null)
D.b2C=new A.r("\u062e\u0644\u0635\u062a",null,C.jO,null,null,null,null,null,null,null,null)
D.b2D=new A.r("\u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647 \u0630\u0627\u0643\u0631\u062a\u0647 \u0642\u0644\u064a\u0644\u0629 \u2014 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0645\u0643\u0646 \u064a\u0643\u0648\u0646 \u0628\u0637\u064a\u0621 \u0639\u0644\u064a\u0647.",null,D.wZ,null,null,null,null,null,null,null,null)
D.aV_=new A.t(!0,C.cs,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,C.fZ,null,null,null,null,null,null,null,null)
D.b3_=new A.r("\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aV_,null,null,null,null,null,null,null,null)
D.b35=new A.r("\u0623\u0648\u0644 \u0645\u0631\u0629 \u0628\u0633: \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,F.b_,null,null,null,null,null,null,null,null)
D.b37=new A.r("\u0648\u0642\u0651\u0641 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0644\u0648\u062d\u062f\u0647 \u0644\u0645\u0627 \u0623\u0633\u0643\u062a",null,C.cW,null,null,null,null,null,null,null,null)
D.b3r=new A.r("\u2022 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: \u0627\u0644\u0634\u064a\u062e \u0645\u062d\u0645\u0648\u062f \u062e\u0644\u064a\u0644 \u0627\u0644\u062d\u0635\u0631\u064a \u2014 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645\u060c \u0645\u0646 everyayah.com.",null,F.al,null,null,null,null,null,null,null,null)
D.W9=new B.ace(null)
D.b47=new B.Ax(null)
D.b48=new B.Ro(2,1,!0,!1,!1)
D.Wa=new B.Rq(!1,!1,!1,!1,!1,0)
D.h7=new B.mH(0,"ok")
D.pV=new B.mH(1,"near")
D.pW=new B.mH(2,"wrong")
D.pX=new B.mH(3,"missing")
D.Wz=new B.mH(4,"extra")
D.ac8=new A.a2(63456,"MaterialIcons",null,!1)
D.b9H=new B.AO(D.d0,D.ac8,"\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629","\u0642\u0631\u0651\u0628 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0646\u0643 \u0648\u0627\u0642\u0631\u0627 \u0628\u0635\u0648\u062a \u0648\u0627\u0636\u062d \u0641\u064a \u0645\u0643\u0627\u0646 \u0647\u0627\u062f\u064a\u060c \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a.",null)
D.ba1=new B.T9(!1,null)
D.xw=new B.T9(!0,null)
D.k0=new B.Bi(0,"idle")
D.q7=new B.Bi(1,"playing")
D.q8=new B.Bi(2,"recording")
D.lX=new B.Bi(3,"thinking")
D.hd=new B.Bi(4,"result")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ccY","bCZ",()=>new B.acf())
x($,"cg8","bRK",()=>A.aP("\u0640[\u064b-\u0652]*\u0670",!0,!1))
x($,"cg9","bRL",()=>A.aP("\u0640[\u064b-\u0652]*[\u06e6\u06e7]",!0,!1))
x($,"cgk","bRT",()=>A.aP("\u0648\u0670",!0,!1))
x($,"cfI","bRr",()=>A.aP("[\u0648\u064a\u0649][\u064b-\u0652]*[\u0654]",!0,!1))
x($,"ced","bQt",()=>A.aP("\u0627[\u0654\u0655]",!0,!1))
x($,"cfk","bRa",()=>A.aP("[\u0654\u0655]",!0,!1))
x($,"cee","bQu",()=>A.aP("[\u0622\u0623\u0625\u0671\u0672\u0673]",!0,!1))
x($,"cek","bQz",()=>A.aP("[\u0624\u0626]",!0,!1))
x($,"cfm","bRc",()=>A.aP("[\u064b-\u065f\u0670\u06d6-\u06ed\u08d3-\u08ff\u0640]",!0,!1))
x($,"cfN","bRu",()=>A.aP("[\u06dd\u06de\u0660-\u0669\u06f0-\u06f90-9]",!0,!1))
x($,"cft","bRi",()=>A.aP("[^\u0621-\u064a\\s]",!0,!1))
x($,"cg7","bDz",()=>A.aP("\\s+",!0,!1))
x($,"cah","q_",()=>B.bSO(D.m4,0,A.byL(0,!0)))
x($,"ccZ","Jo",()=>new B.Rp($.bCZ(),D.b48,B.c_M(),D.azi,$.a7()))})()};
(a=>{a["YkVAN1YPwg/ym0ficnTyPF8rE6U="]=a.current})($__dart_deferred_initializers__);