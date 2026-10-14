((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,Q,R,H,N,G,O,S,T,L,K,B={aZt:function aZt(d,e){this.a=d
this.b=e},Yn:function Yn(d,e,f){this.d=d
this.r=e
this.a=f},aVF:function aVF(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4){var _=this
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
_.dy=a4},aVG:function aVG(d){this.a=d},
bWu(d){var x,w,v,u,t,s
if(d instanceof B.kE)return d
try{x=A.cm(d)
w=x.code
v=x.message
u=w==null?"failed":A.aa(w)
t=v==null?"":A.aa(v)
return new B.kE(u,t)}catch(s){u=A.f(d)
return new B.kE("failed",u)}},
ab2:function ab2(){this.b=this.a=null},
aTv:function aTv(d){this.a=d},
aTy:function aTy(){},
aTx:function aTx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aTw:function aTw(d){this.a=d},
aTC:function aTC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aTA:function aTA(d){this.a=d},
aTB:function aTB(d){this.a=d},
aTD:function aTD(d){this.a=d},
aTF:function aTF(d,e,f){this.a=d
this.b=e
this.c=f},
aTE:function aTE(d,e,f){this.a=d
this.b=e
this.c=f},
aTz:function aTz(){},
bWv(d,e){return new B.kE(d,e)},
QA:function QA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.w=i},
FI:function FI(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i
_.w=j},
FK:function FK(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
FJ:function FJ(d,e){this.a=d
this.b=e},
kE:function kE(d,e){this.a=d
this.b=e},
bJ9(d){var x,w=$.bNC()
w=A.bQ(d,w,"\u0627")
x=$.bND()
w=A.bQ(w,x,"\u064a")
x=$.bNL()
w=A.bQ(w,x,"\u0627")
x=$.bMl()
w=A.bQ(w,x,"\u0627")
x=$.bNj()
w=A.bQ(w,x,"\u0621")
x=$.bN2()
w=A.bQ(w,x,"\u0621")
x=$.bMm()
w=A.bQ(w,x,"\u0627")
x=$.bMr()
w=A.bQ(w,x,"\u0621")
w=A.bQ(w,"\u0649","\u064a")
w=A.bQ(w,"\u0629","\u0647")
x=$.bN4()
w=A.bQ(w,x,"")
x=$.bNm()
w=A.bQ(w,x," ")
x=$.bNa()
w=A.bQ(w,x," ")
x=$.bzx()
return C.c.ap(A.bQ(w,x," "))},
c_V(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.length,k=e.length
if(l===0)return k
if(k===0)return l
x=k+1
w=y.S
v=J.lj(x,w)
for(u=0;u<x;++u)v[u]=u
t=A.c3(x,0,!1,w)
for(s=1;s<=l;++s,r=t,t=v,v=r){t[0]=s
for(w=s-1,u=1;u<=k;++u){q=u-1
p=d.charCodeAt(w)===e.charCodeAt(q)?0:1
o=v[u]+1
n=t[q]+1
m=v[q]+p
if(o<n)q=o<m?o:m
else q=n<m?n:m
t[u]=q}}return v[k]},
btF(d,e){var x,w,v,u,t,s
if(d===e)return 1
x=A.aP("[\u0627\u0621]",!0,!1)
w=A.bQ(d,x,"")
x=A.aP("[\u0627\u0621]",!0,!1)
v=A.bQ(e,x,"")
if(w.length!==0&&w===v)return 1
u=d.length
t=e.length
u=u>t?u:t
if(u===0)return 1
s=1-B.c_V(d,e)/u
return s>=1?0.99:s},
Ba(d){var x,w,v,u,t,s,r,q=A.a([],y.d)
for(x=C.c.qM(d,$.bzx()),w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.length===0)continue
t=B.bJ9(u)
s=A.bQ(t," ","")
if(s.length===0){if(q.length!==0){r=q.pop()
q.push(new B.NU(r.a+" "+u,r.b))}continue}q.push(new B.NU(u,s))}return q},
bZH(d,e){var x,w,v,u,t=new B.bpd(),s=A.a([],y.s)
for(x=A.fj(e,0,A.is(5,"count",y.S),A.ae(e).c),w=x.$ti,x=new A.bS(x,x.gK(0),w.i("bS<aL.E>")),w=w.i("aL.E");x.u();){v=x.d
s.push((v==null?w.a(v):v).b)}u=!t.$2(s,D.CR)&&t.$2(d,D.CR)?C.b.iq(d,5):d
return!t.$2(s,D.Hi)&&t.$2(u,D.Hi)?C.b.iq(u,4):u},
bI8(d,e){var x=B.Ba(d),w=B.bJ9(e),v=y.U
v=A.a1(new A.aD(A.a(w.split(" "),y.s),new B.bqH(),v),v.i("L.E"))
return new B.Er(x,B.bYV(x,B.bZH(v,x)),w)},
bYV(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=A.a([],y.s)
for(x=a5.length,w=0;w<a5.length;a5.length===x||(0,A.B)(a5),++w)a4.push(a5[w].b)
v=a4.length
u=a6.length
t=u+1
x=(v+1)*t
s=y.i
r=A.c3(x,0,!1,s)
q=A.c3(x,0,!1,y.S)
p=A.c3(v*(u===0?1:u),0,!1,s)
for(o=0;o<v;++o)for(x=o*u,n=0;n<u;++n)p[x+n]=B.btF(a4[o],a6[n])
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
e=2}if(n>=2&&r[h-2]<g&&B.btF(a4[m],a6[n-2]+a6[n-1])>=1){g=r[h-2]
e=3}if(s&&r[i+n-1]<g&&B.btF(a4[j]+a4[m],a6[n-1])>=1){g=r[i+n-1]
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
if(a2>=1)m=D.fX
else m=a2>=0.6?D.pt:D.pu
a1.push(new B.lT(o,x,s,m))
break
case 1:--o
a1.push(new B.lT(o,a4[o],null,D.pv))
break
case 2:--n
a1.push(new B.lT(null,null,a6[n],D.Vp))
break
case 3:--o
a3=n-2
a1.push(new B.lT(o,a4[o],a6[a3]+" "+a6[n-1],D.fX))
n=a3
break
default:x=o-1;--n
a1.push(new B.lT(x,a4[x],a6[n],D.fX))
o-=2
a1.push(new B.lT(o,a4[o],a6[n],D.fX))}}a4=y.e
a4=A.a1(new A.cF(a1,a4),a4.i("aL.E"))
return a4},
mt:function mt(d,e){this.a=d
this.b=e},
NU:function NU(d,e){this.a=d
this.b=e},
lT:function lT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Er:function Er(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
aL2:function aL2(d){this.a=d},
aL1:function aL1(){},
bpd:function bpd(){},
bqH:function bqH(){},
bOE(d,e,f){return new B.pR(d,e,f)},
c0K(d){var x
A:{if("memorized"===d){x=D.dW
break A}if("learning"===d){x=D.lP
break A}x=D.lO
break A}return x},
bK6(d,e){return d>=1&&d<=114&&e>=1&&e<=I.c_[d-1].a[1]},
bWw(){var x=y.S
return new B.ab3(A.x(x,y.u),A.aE(x))},
aTH(d){var x=d.l2()
return C.c.dk(C.e.j(A.cE(x)),4,"0")+"-"+C.c.dk(C.e.j(A.ce(x)),2,"0")+"-"+C.c.dk(C.e.j(A.cw(x)),2,"0")},
bFg(d){var x=y.x,w=A.a1(new A.aj(A.a(d.split("-"),y.s),A.c2_(),x),x.i("aL.E"))
return B.aTH(A.jz(w[0],w[1],w[2]-1,12,0,0,0))},
bwF(d){var x,w,v,u,t,s,r,q,p=y.S,o=A.x(p,y.u),n=A.aE(p),m=new B.ab3(o,n),l=d.h(0,"rows")
if(y.f.b(l))for(x=l.gdJ(),x=x.ga1(x),w=y.j;x.u();){v=x.gL()
u=A.f7(A.f(v.a),null)
t=v.b
v=!0
if(u!=null)if(w.b(t))if(J.bk(t)>=3){v=C.e.bc(u,1000)
s=C.e.af(u,1000)
v=!(v>=1&&v<=114&&s>=1&&s<=I.c_[v-1].a[1])}if(v)continue
v=J.br(t)
r=C.d.bS(A.dk(v.h(t,0)))
if(r<0||r>=3)continue
o.n(0,u,new B.pR(D.apG[r],C.d.bS(A.dk(v.h(t,1))),new A.b6(A.kg(C.d.bS(A.dk(v.h(t,2))),0,!0),0,!0)))}q=d.h(0,"dirty")
if(y.j.b(q)){x=J.buf(q,y.o)
p=A.nf(x,new B.aTG(),x.$ti.i("L.E"),p)
n.E(0,new A.aD(p,o.gVJ(),A.w(p).i("aD<L.E>")))}m.c=A.X(d.h(0,"last"))
p=A.bM(d.h(0,"streak"))
p=p==null?null:C.d.bS(p)
p=m.d=p==null?0:p
o=A.bM(d.h(0,"best"))
o=o==null?null:C.d.bS(o)
m.e=o==null?p:o
return m},
aqa(d,e){return"https://everyayah.com/data/Husary_Muallim_128kbps/"+C.c.dk(C.e.j(d),3,"0")+C.c.dk(C.e.j(e),3,"0")+".mp3"},
Bs:function Bs(d,e){this.a=d
this.b=e},
pR:function pR(d,e,f){this.a=d
this.b=e
this.c=f},
ab3:function ab3(d,e){var _=this
_.a=d
_.b=e
_.c=null
_.e=_.d=0},
aTI:function aTI(){},
aTJ:function aTJ(){},
aTG:function aTG(){},
Qy:function Qy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bU4(){return new B.uT(null)},
c4p(d,e){var x,w,v,u,t={},s=I.c_[e-1].a[1],r=$.Ix().c
t.a=1
x=r.a
w=e*1000
v=1
for(;;){if(v<=s){v=x.h(0,w+v)
v=(v==null?$.pG():v).a===D.dW}else v=!1
if(!v)break
v=++t.a}x=t.a
if(x>s){t.a=1
u=1}else u=x
x=s<=10
if(x)u=1
t.b=u
t.c=x?s:C.e.cw(u+4,1,s)
return A.fv(C.d7,new B.bsC(t,s,e),d,!0,null,null,!1,y.l)},
bym(d){return A.d2(0,0,0,0,0,C.e.cw(C.d.ao(6+d*1.2),25,90))},
bxk(d){return E.aZ(C.e.bc(d,60))+":"+C.c.dk(E.aZ(C.e.af(d,60)),2,"\u0660")},
bJS(d){return A.fv(C.d7,new B.btk($.Ix()),d,!0,null,null,!1,y.H)},
Iq(d){var x,w=d.a
A:{if("timeout"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0627\u062a\u0623\u062e\u0631 \u0623\u0648\u064a \u0648\u0645\u0631\u062f\u0651\u0634\u060c \u0641\u0648\u0642\u0651\u0641\u0646\u0627\u0647 \u0648\u062c\u0631\u0651\u0628\u0646\u0627 \u062a\u0627\u0646\u064a \u0628\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0623\u062e\u0641 \u0648\u0645\u0646\u0641\u0639\u0634. \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}if("crashed"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0642\u0641 \u0641\u062c\u0623\u0629 (\u063a\u0627\u0644\u0628\u064b\u0627 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0634 \u0645\u0643\u0641\u064a\u0629). \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}x=d.gjM()
break A}return x},
c5H(d,e,f){var x,w=new B.bty(),v=w.$1(f),u=w.$1("\xab\u0627\u0644\u0645\u062d\u0641\u0651\u0638\xbb \u0645\u0634\u0643\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 ("+e+")\n"+d.a+": "+d.b+"\n"),t=1990-u.length
if(v.length>t)v=t<=1?"":C.c.Y(v,0,t-1)+"\u2026"
x=u+v
return x.length>1990?C.c.Y(x,0,1990):x},
bK1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
try{x=y.P.a(C.Z.eS(a4,null))
s=y.Y
r=s.a(J.b8(x,"rec"))
w=r==null?C.f4:r
q=s.a(J.b8(x,"last"))
v=q==null?C.f4:q
u=new B.btx()
s=J.b8(v,"recovered")
t=A.f(s==null?"":s)
s=A.f(u.$1(J.b8(w,"wall")))
p=A.f(u.$1(J.b8(w,"source")))
o=A.f(u.$1(J.b8(w,"ctxRate")))
n=A.f(u.$1(J.b8(w,"pcmPeak")))
m=A.f(u.$1(J.b8(w,"ctxState")))
l=A.f(u.$1(J.b8(w,"stopMs")))
k=A.f(u.$1(J.b8(v,"prepMs")))
j=A.f(u.$1(J.b8(v,"ms")))
i=A.f(u.$1(J.b8(v,"featMs")))
h=A.f(u.$1(J.b8(v,"encMs")))
g=A.f(u.$1(J.b8(v,"decMs")))
f=A.f(u.$1(J.b8(v,"wallMs")))
e=A.f(u.$1(J.b8(v,"backend")))
d=A.f(u.$1(J.b8(v,"threads")))
a0=J.bk(t)!==0?" \xb7 recovered from "+A.f(t):""
a1=J.c(J.b8(x,"safe"),!0)?" \xb7 safe mode":""
a2=J.c(J.b8(x,"nogpu"),!0)?" \xb7 no-gpu":""
return"record "+s+" s ("+p+", "+o+" Hz, peak "+n+", "+m+") \u2192 stop/decode "+l+" ms \u2192 resample "+k+" ms \u2192 infer "+j+" ms (mel "+i+", enc "+h+", dec "+g+") \u2192 wall "+f+" ms \xb7 "+e+" \xd7"+d+a0+a1+a2}catch(a3){return""}},
Dv:function Dv(d,e){this.a=d
this.b=e},
Qz:function Qz(d,e,f,g,h){var _=this
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
_.P$=_.O$=0},
aTK:function aTK(d){this.a=d},
aTL:function aTL(d){this.a=d},
aTM:function aTM(d){this.a=d},
uT:function uT(d){this.a=d},
Ul:function Ul(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.w=_.r=null},
bev:function bev(d){this.a=d},
beu:function beu(d,e){this.a=d
this.b=e},
bew:function bew(d){this.a=d},
bet:function bet(d,e){this.a=d
this.b=e},
bex:function bex(){},
beh:function beh(){},
ben:function ben(d,e,f){this.a=d
this.b=e
this.c=f},
beo:function beo(){},
ber:function ber(d){this.a=d},
beq:function beq(){},
bes:function bes(d){this.a=d},
bek:function bek(d,e){this.a=d
this.b=e},
bel:function bel(d){this.a=d},
bej:function bej(){},
bem:function bem(d){this.a=d},
bei:function bei(d){this.a=d},
bep:function bep(d,e){this.a=d
this.b=e},
Dw:function Dw(d,e,f){this.c=d
this.d=e
this.a=f},
Sb:function Sb(d,e){this.c=d
this.a=e},
bsC:function bsC(d,e,f){this.a=d
this.b=e
this.c=f},
bsz:function bsz(d,e,f){this.a=d
this.b=e
this.c=f},
bsB:function bsB(d,e){this.a=d
this.b=e},
bsy:function bsy(d,e){this.a=d
this.b=e},
bsx:function bsx(d,e){this.a=d
this.b=e},
bsA:function bsA(d,e){this.a=d
this.b=e},
bst:function bst(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bss:function bss(d,e,f){this.a=d
this.b=e
this.c=f},
bsu:function bsu(d){this.a=d},
bsv:function bsv(d){this.a=d},
bsw:function bsw(d,e){this.a=d
this.b=e},
AF:function AF(d,e){this.a=d
this.b=e},
zW:function zW(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Wj:function Wj(d,e){var _=this
_.d=d
_.e=$
_.f=e
_.w=_.r=null
_.x=!1
_.y=0
_.ax=_.at=_.as=_.Q=_.z=null
_.ay=0
_.c=_.a=_.ch=null},
bme:function bme(){},
bmu:function bmu(d,e){this.a=d
this.b=e},
bmy:function bmy(d){this.a=d},
bmz:function bmz(d){this.a=d},
bmA:function bmA(d,e,f){this.a=d
this.b=e
this.c=f},
bmC:function bmC(d){this.a=d},
bmD:function bmD(d){this.a=d},
bmB:function bmB(){},
bmF:function bmF(d){this.a=d},
bmE:function bmE(d){this.a=d},
bmG:function bmG(d,e){this.a=d
this.b=e},
bmI:function bmI(d){this.a=d},
bmJ:function bmJ(d){this.a=d},
bmH:function bmH(){},
bmt:function bmt(d,e,f){this.a=d
this.b=e
this.c=f},
bmv:function bmv(d,e,f){this.a=d
this.b=e
this.c=f},
bmm:function bmm(d){this.a=d},
bmn:function bmn(d){this.a=d},
bml:function bml(){},
bmo:function bmo(){},
bmp:function bmp(d,e){this.a=d
this.b=e},
bmO:function bmO(d){this.a=d},
bmP:function bmP(d){this.a=d},
bmQ:function bmQ(d,e){this.a=d
this.b=e},
bmN:function bmN(d){this.a=d},
bmR:function bmR(d,e){this.a=d
this.b=e},
bms:function bms(){},
bmr:function bmr(d){this.a=d},
bmq:function bmq(d,e){this.a=d
this.b=e},
bmx:function bmx(d){this.a=d},
bmw:function bmw(d){this.a=d},
bmK:function bmK(){},
bmL:function bmL(){},
bmM:function bmM(){},
bmf:function bmf(d,e,f){this.a=d
this.b=e
this.c=f},
bmg:function bmg(d){this.a=d},
bmi:function bmi(){},
bmh:function bmh(){},
bmj:function bmj(d){this.a=d},
bmk:function bmk(d){this.a=d},
Aa:function Aa(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
zV:function zV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Wi:function Wi(d,e,f,g,h){var _=this
_.d=d
_.e=null
_.f=e
_.r=f
_.w=g
_.x=0
_.as=_.Q=_.z=_.y=null
_.at=h
_.c=_.a=null},
blY:function blY(){},
bm6:function bm6(d,e){this.a=d
this.b=e},
bm7:function bm7(d){this.a=d},
bm5:function bm5(){},
bm9:function bm9(d){this.a=d},
bm8:function bm8(d,e){this.a=d
this.b=e},
bma:function bma(d,e){this.a=d
this.b=e},
bm1:function bm1(d,e){this.a=d
this.b=e},
bm2:function bm2(d,e,f){this.a=d
this.b=e
this.c=f},
bm3:function bm3(d,e,f){this.a=d
this.b=e
this.c=f},
blZ:function blZ(d,e,f){this.a=d
this.b=e
this.c=f},
bm_:function bm_(d,e,f){this.a=d
this.b=e
this.c=f},
bm0:function bm0(d,e){this.a=d
this.b=e},
bm4:function bm4(d){this.a=d},
bmb:function bmb(){},
bmc:function bmc(d,e){this.a=d
this.b=e},
bmd:function bmd(d,e){this.a=d
this.b=e},
zU:function zU(d){this.a=d},
Wh:function Wh(d){this.d=d
this.c=this.a=null},
blP:function blP(){},
blW:function blW(d){this.a=d},
blX:function blX(){},
blV:function blV(d,e){this.a=d
this.b=e},
blU:function blU(d,e,f){this.a=d
this.b=e
this.c=f},
blT:function blT(d,e,f){this.a=d
this.b=e
this.c=f},
blS:function blS(d){this.a=d},
blQ:function blQ(d){this.a=d},
blR:function blR(d){this.a=d},
btk:function btk(d){this.a=d},
btj:function btj(d){this.a=d},
bte:function bte(d,e){this.a=d
this.b=e},
btg:function btg(){},
btf:function btf(){},
bth:function bth(d,e){this.a=d
this.b=e},
bti:function bti(d,e){this.a=d
this.b=e},
ab1:function ab1(d){this.a=d},
aTu:function aTu(d){this.a=d},
bty:function bty(){},
btz:function btz(){},
zX:function zX(d,e,f){this.c=d
this.d=e
this.a=f},
Wk:function Wk(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.r=null},
bmS:function bmS(d){this.a=d},
bmT:function bmT(d){this.a=d},
bmU:function bmU(d,e){this.a=d
this.b=e},
bmV:function bmV(d){this.a=d},
bmX:function bmX(d){this.a=d},
bmW:function bmW(d){this.a=d},
btx:function btx(){}},D,P,I,E,F
J=c[1]
A=c[0]
C=c[2]
M=c[15]
Q=c[19]
R=c[21]
H=c[13]
N=c[29]
G=c[34]
O=c[33]
S=c[10]
T=c[31]
L=c[37]
K=c[39]
B=a.updateHolder(c[8],B)
D=c[40]
P=c[27]
I=c[28]
E=c[16]
F=c[18]
B.aZt.prototype={
M(){return"_ChipVariant."+this.b}}
B.Yn.prototype={
C(d){var x=null
A.T(d)
return A.aJB(!1,x,C.fp,x,x,x,x,C.m,x,new B.aVF(d,!0,D.jK,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,C.oz,x,x,x,x,x,x,x,x),x,x,x,x,x,x,x,x,!0,this.d,x,x,x,x,x,this.r,x,x,x,!1,x,x,x,x,x,x,x,!0,x,x)}}
B.aVF.prototype={
goZ(){var x,w=this,v=w.go
if(v===$){x=A.T(w.fr)
w.go!==$&&A.aB()
v=w.go=x.ax}return v},
gdS(){if(this.fy===D.jK)var x=0
else x=this.fx?1:0
return x},
gwd(){return 1},
gfW(){var x,w=this,v=w.id
if(v===$){x=A.T(w.fr)
w.id!==$&&A.aB()
v=w.id=x.ok}x=v.as
if(x==null)x=null
else x=x.cB(w.fx?w.goZ().k3:w.goZ().k3)
return x},
gcL(){return new A.b3(new B.aVG(this),y.b)},
gcb(){if(this.fy===D.jK)var x=C.O
else{x=this.goZ().x1
if(x==null)x=C.x}return x},
gcp(){return C.O},
grM(){return null},
gvo(){return null},
gek(){var x,w,v=this
if(v.fy===D.jK)if(v.fx){x=v.goZ()
w=x.to
if(w==null){w=x.p
x=w==null?x.k3:w}else x=w
x=new A.b4(x,1,C.B,-1)}else{x=v.goZ().k3
x=new A.b4(A.az(31,x.v()>>>16&255,x.v()>>>8&255,x.v()&255),1,C.B,-1)}else x=C.jW
return x},
ghs(){var x=null
return new A.dG(18,x,x,x,x,this.fx?this.goZ().b:this.goZ().k3,x,x,x)},
gcN(){return C.eu},
gtm(){var x=this.gfW(),w=x==null?null:x.r
if(w==null)w=14
x=A.bV(this.fr,C.bk)
x=x==null?null:x.gdd()
x=A.os(C.iE,C.dn,A.C((x==null?C.aV:x).ba(w)/14-1,0,1))
x.toString
return x}}
B.ab2.prototype={
pc(){var x=this,w=x.a
if(w!=null)return A.dF(w,y.m)
w=x.b
return w==null?x.b=new B.aTv(x).$0():w},
r6(d,e){return this.ayq(d,e,e)},
ayq(d,e,f){var x=0,w=A.n(f),v,u=2,t=[],s,r,q,p
var $async$r6=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d(d.$0(),$async$r6)
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
r=B.bWu(s)
throw A.p(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$r6,w)},
mQ(d,e){var x=A.hq(d[e])
if(x==null)x=null
return x===!0},
GS(){var x=0,w=A.n(y.X),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$GS=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
h=A
g=A
x=7
return A.d(s.pc(),$async$GS)
case 7:r=h.cm(g.cc(e,"support",null,null,null,null))
q=s.mQ(r,"worker")
p=s.mQ(r,"wasm")
o=s.mQ(r,"mic")
n=s.mQ(r,"audio")
s.mQ(r,"webgpu")
m=s.mQ(r,"secure")
s.mQ(r,"ios")
l=A.jq(r.memory)
if(l==null)l=null
if(l==null)l=0
s.mQ(r,"isolated")
k=A.jq(r.cores)
if(k!=null)C.d.ao(k)
v=new B.QA(q,p,o,n,m,l)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=D.V0
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$GS,w)},
Az(){var x=0,w=A.n(y.M),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Az=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=A
l=A
k=A
x=8
return A.d(s.pc(),$async$Az)
case 8:x=7
return A.d(m.dX(l.cm(k.cc(e,"storage",null,null,null,null)),y.A),$async$Az)
case 7:r=e
if(r==null){v=null
x=1
break}q=C.d.ao(A.dg(r.quota))
p=C.d.ao(A.dg(r.usage))
v=new A.ake(q,p)
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
return A.m($async$Az,w)},
aZX(){var x=y.K
A.Lk(this.pc().bI(new B.aTy(),x),x)},
pb(d,e){var x=A.jq(d[e])
x=x==null?null:C.d.ao(x)
return x==null?0:x},
aXs(d,e,f){return this.r6(new B.aTx(this,d,e,f),y.C)},
ga9k(){var x,w
try{x=A.jr(b.G.sessionStorage)
return x}catch(w){return null}},
gafZ(){var x=A.hq(b.G.mogtama3yTutorIsolated)
if(x==null)x=null
return x===!0},
a_T(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
try{m=b.G
l=A.hq(m.crossOriginIsolated)
if(l==null)l=f
if(l===!0)return!1
if(this.gafZ())return!1
l=A.hq(m.isSecureContext)
if(l==null)l=f
if(l!==!0)return!1
x=A.cm(m.navigator)
if(!("serviceWorker" in x))return!1
w=A.aa(x.userAgent)
l=A.jq(x.maxTouchPoints)
k=l==null?f:l
v=k==null?0:k
l=A.X(x.platform)
j=l==null?f:l
u=j==null?"":j
l=A.aP("iPad|iPhone|iPod",!0,!1)
if(!l.b.test(w))i=J.c(u,"MacIntel")&&v>1
else i=!0
t=i
l=A.aP("Chrome/|Chromium/|Firefox/|Edg/",!0,!1)
s=l.b.test(w)
if(t||!s)return!1
l=A.jq(x.hardwareConcurrency)
h=l==null?f:l
r=h==null?0:h
if(r>0&&r<3)return!1
q=Date.now()
l=this.ga9k()
l=l==null?f:A.X(A.cc(l,"getItem","mt.tutor.iso",f,f,f))
if(l==null)l=f
p=A.f7(l==null?"":l,f)
if(p!=null&&q-p<3e4)return!1
o=A.jr(m.localStorage)
m=o
m=m==null?f:A.X(A.cc(m,"getItem","mt.tutor.noiso",f,f,f))
if(m==null)m=f
n=A.f7(m==null?"":m,f)
if(n!=null&&q-n<2592e5)return!1
return!0}catch(g){return!1}},
aeE(){var x,w,v,u,t,s,r=null
try{x=this.ga9k()
if(x!=null)A.cc(x,"setItem","mt.tutor.iso",""+Date.now(),r,r)}catch(w){}x=b.G
v=A.cm(x.location)
u=A.aa(v.hash)
t=A.aa(v.search)
s=A.bY(A.aa(A.cm(x.document).baseURI),0,r).W("tutor/").j(0)
x=u.length===0?"#/masjid/tools/tutor":u
A.cc(v,"replace",s+t+x,r,r,r)},
aXc(){var x,w=null,v=b.G,u=A.cm(v.history),t=A.jq(u.length),s=t==null?w:t
if((s==null?0:s)>1)A.cc(u,"back",w,w,w,w)
else{x=A.aa(A.cm(v.document).baseURI)
A.cc(A.cm(v.location),"replace",A.bY(x,0,w).W("./").j(0)+"#/",w,w,w)}},
a04(d,e,f,g,h){return this.r6(new B.aTC(this,e,d,f,h,g),y.H)},
a07(){return this.r6(new B.aTD(this),y.D)},
Vm(){var x=null,w=this.a
if(w!=null)A.cc(w,"cancelRecording",x,x,x,x)},
aax(d){var x,w,v=this,u=A.X(d.text)
if(u==null)u=null
if(u==null)u=""
x=v.pb(d,"ms")
w=A.jq(d.seconds)
if(w==null)w=null
if(w==null)w=0
return new B.FK(u,x,w,v.pb(d,"frames"),v.pb(d,"tokens"),v.mQ(d,"retried"),v.pb(d,"encMs"),v.pb(d,"decMs"),v.pb(d,"featMs"))},
a7q(d){var x={}
x.words=d
return x},
aiN(d,e){return this.r6(new B.aTF(this,d,e),y._)},
b17(d,e){return this.r6(new B.aTE(this,d,e),y._)},
F6(d,e){return this.b_1(d,e)},
b_1(d,e){var x=0,w=A.n(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$F6=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=p==null?7:9
break
case 7:x=10
return A.d(s.pc(),$async$F6)
case 10:x=8
break
case 9:g=p
case 8:r=g
o=A.ae(d).i("aj<1,h>")
o=A.a1(new A.aj(d,new B.aTz(),o),o.i("aL.E"))
x=11
return A.d(A.dX(A.cm(A.cc(r,"play",o,e,null,null)),y.y),$async$F6)
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
return A.m($async$F6,w)},
Gy(){var x=null,w=this.a
if(w!=null)A.cc(w,"stopPlayback",x,x,x,x)},
DN(){var x,w,v,u=null
try{w=this.a
x=w==null?u:A.aa(A.cc(w,"diag",u,u,u,u))
w=x
if(w==null)w=u
if(w==null)w="{}"
return w}catch(v){return"{}"}},
b0h(){var x,w,v=null
try{x=this.a
if(x!=null)A.cc(x,"resetDevice",v,v,v,v)}catch(w){}},
YE(d){var x=this.a
if(x!=null)A.cc(x,"prefetch",d,null,null,null)}}
B.QA.prototype={}
B.FI.prototype={
glx(){var x=this.f,w=x>0?"CPU \xd7"+x:""
x=this.a
if(x==="webgpu")return"WebGPU"
if(C.c.m(x,"webgpu"))return"WebGPU + "+w
return w.length===0?x:w}}
B.FK.prototype={
gLy(){var x=this,w=C.d.aA(x.d/100,0),v=x.f?" (retried on 30 s)":""
return"window "+w+" s, "+x.e+" tokens"+v+", mel "+x.x+" ms, encoder "+x.r+" ms, decoder "+x.w+" ms"}}
B.FJ.prototype={}
B.kE.prototype={
gjM(){var x,w=this.a
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
$ibm:1}
B.mt.prototype={
M(){return"WordStatus."+this.b}}
B.NU.prototype={}
B.lT.prototype={
j(d){var x,w=this.b
if(w==null)w=""
x=this.c
if(x==null)x=""
return this.d.b+":"+w+"->"+x}}
B.Er.prototype={
gGw(){var x,w=this,v=w.d
if(v===$){x=new B.aL2(w).$0()
w.d!==$&&A.aB()
w.d=x
v=x}return v},
gE2(){var x,w,v,u,t,s=A.a([],y.s)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.d===D.Vp&&u.c!=null){t=u.c
t.toString
s.push(t)}}return s},
gaYi(){return J.ob(this.gGw(),new B.aL1()).gK(0)},
gqi(){var x=this.a
return x.length!==0&&this.gaYi()===x.length&&this.gE2().length===0}}
B.Bs.prototype={
M(){return"AyahStatus."+this.b}}
B.pR.prototype={}
B.ab3.prototype={
Yd(d,e){var x=this.a.h(0,d*1000+e)
return x==null?$.pG():x},
aHM(d){var x=this,w=B.aTH(d),v=x.c
if(v===w)return
v=v!=null&&v===B.bFg(w)?x.d+1:1
x.d=v
if(v>x.e)x.e=v
x.c=w},
adS(){var x=Date.now(),w=B.aTH(new A.b6(x,0,!1))
x=this.c
return x===w||x===B.bFg(w)?this.d:0},
ahS(d,e,f,g){var x=this,w=new A.b6(Date.now(),0,!1),v=x.Yd(d,e),u=g?C.e.cw(v.b+1,0,100):0,t=g&&u>=f?D.dW:D.lP,s=new B.pR(t,u,w.hN()),r=d*1000+e
x.a.n(0,r,s)
x.b.D(0,r)
x.aHM(w)
return s},
Y4(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.c_[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pG():s).a===D.dW)++u}return u},
aXa(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.c_[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pG():s).a===D.lP)++u}return u},
gah2(){var x=this.a,w=A.w(x).i("c7<2>")
return new A.aD(new A.c7(x,w),new B.aTI(),w.i("aD<L.E>")).gK(0)},
galU(){var x=this.a,w=A.w(x).i("bf<1>")
w=A.nf(new A.bf(x,w),new B.aTJ(),w.i("L.E"),y.S)
w=A.em(w,A.w(w).i("L.E"))
x=A.a1(w,A.w(w).c)
C.b.l6(x)
return x},
cS(){var x,w,v,u,t,s=this,r=y.N,q=A.x(r,y.L)
for(x=s.a,x=new A.dT(x,A.w(x).i("dT<1,2>")).ga1(0),w=y.t;x.u();){v=x.d
u=v.a
t=v.b
q.n(0,""+u,A.a([t.a.a,t.b,t.c.a],w))}x=s.b
x=A.a1(x,A.w(x).c)
return A.M(["v",1,"rows",q,"dirty",x,"last",s.c,"streak",s.d,"best",s.e],r,y.z)},
aTd(){var x,w,v,u,t,s,r,q,p,o=A.a([],y.Z)
for(x=this.b,x=A.bwt(x,300,A.w(x).c),x=new A.Ft(J.aI(x.a),x.b,A.w(x).i("Ft<1>")),w=y.N,v=y.z,u=this.a;x.u();){t=x.gL()
s=C.e.bc(t,1000)
t=C.e.af(t,1000)
r=s*1000+t
q=u.h(0,r)
q=(q==null?$.pG():q).a===D.dW?"memorized":"learning"
p=u.h(0,r)
if(p==null)p=$.pG()
r=u.h(0,r)
o.push(A.M(["surah",s,"ayah",t,"status",q,"perfect_count",p.b,"updated_at",(r==null?$.pG():r).c.jf()],w,v))}return o},
aXK(d){var x,w,v,u,t,s,r
for(x=d.length,w=this.a,v=this.b,u=0;u<d.length;d.length===x||(0,A.B)(d),++u){t=d[u]
s=A.er(t.h(0,"surah"))*1000+A.er(t.h(0,"ayah"))
r=w.h(0,C.e.bc(s,1000)*1000+C.e.af(s,1000))
if((r==null?$.pG():r).c.jf()===t.h(0,"updated_at"))v.I(0,s)}},
aXS(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(x=J.aI(d),w=this.b,v=this.a,u=y.f,t=!1;x.u();){s=x.gL()
if(!u.b(s))continue
r=A.bM(s.h(0,"surah"))
q=r==null?null:C.d.bS(r)
r=A.bM(s.h(0,"ayah"))
p=r==null?null:C.d.bS(r)
o=A.hM(A.f(s.h(0,"updated_at")))
r=!0
if(q!=null)if(p!=null)if(o!=null)r=!(q>=1&&q<=114&&p>=1&&p<=I.c_[q-1].a[1])
if(r)continue
n=B.c0K(s.h(0,"status"))
if(n===D.lO)continue
r=q*1000+p
m=v.h(0,r)
if(m!=null){l=m.c
k=o.a
j=l.a
if(k<=j)l=k===j&&o.b>l.b
else l=!0
l=!l}else l=!1
if(l)continue
l=A.bM(s.h(0,"perfect_count"))
l=l==null?null:C.d.bS(l)
v.n(0,r,new B.pR(n,C.e.cw(l==null?0:l,0,100),o.hN()))
w.I(0,r)
t=!0}return t}}
B.Qy.prototype={
DC(d,e,f,g,h){var x=this,w=g==null?x.a:g,v=h==null?x.b:h,u=d==null?x.c:d,t=e==null?x.d:e
return new B.Qy(w,v,u,t,f==null?x.e:f)},
aRI(d){var x=null
return this.DC(x,x,d,x,x)},
ads(d){var x=null
return this.DC(x,d,x,x,x)},
aRM(d){var x=null
return this.DC(x,x,x,x,d)},
aRc(d){var x=null
return this.DC(d,x,x,x,x)},
aRJ(d){var x=null
return this.DC(x,x,x,d,x)},
cS(){var x=this
return A.M(["n",x.a,"r",x.b,"auto",x.c,"hide",x.d,"in",x.e],y.N,y.z)}}
B.Dv.prototype={
M(){return"ModelState."+this.b}}
B.Qz.prototype={
Xy(){var x=this.Q
return x==null?this.Q=new B.aTK(this).$0():x},
oQ(d){return this.akr(d)},
akr(d){var x=0,w=A.n(y.H),v=this
var $async$oQ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v.b=d
v.X()
x=2
return A.d(A.i0("mt.tutor.settings",C.Z.hp(d.cS(),null)),$async$oQ)
case 2:return A.l(null,w)}})
return A.m($async$oQ,w)},
wN(){var x=0,w=A.n(y.H),v=this,u
var $async$wN=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.X()
x=2
return A.d(A.i0("mt.tutor.progress",C.Z.hp(v.c.cS(),null)),$async$wN)
case 2:u=v.as
if(u!=null)u.aF()
v.as=A.cB(C.D,v.gaqJ())
return A.l(null,w)}})
return A.m($async$wN,w)},
Gh(d,e,f){return this.al3(d,e,f)},
al3(d,e,f){var x=0,w=A.n(y.H),v=this
var $async$Gh=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:v.z=new A.bI(d,e,f)
x=2
return A.d(A.i0("mt.tutor.last",C.Z.hp(A.M(["s",d,"f",e,"t",f],y.N,y.S),null)),$async$Gh)
case 2:return A.l(null,w)}})
return A.m($async$Gh,w)},
zq(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$zq=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=s.f
if(n===D.Nm||n===D.hI){x=1
break}s.f=D.Nm
s.y=null
s.X()
u=4
n=A.jX().gei().h(0,"tutor_device")
if(n==null)n="auto"
p=A.jX().gei().h(0,"tutor_threads")
p=A.f7(p==null?"":p,null)
if(p==null)p=0
x=7
return A.d(s.a.aXs(new B.aTL(s),n,p),$async$zq)
case 7:s.x=e
s.f=D.hI
n=A.jX().gei().h(0,"debug")
if(n==="1"){n=s.x
n.toString
r=n
A.t6().$1("[tutor] model ready: "+r.a+" "+r.b+" threads="+r.f+" isolated="+r.r+" in "+r.c+" ms (warm-up "+r.w+" ms, cached before: "+r.d+")")}u=2
x=6
break
case 4:u=3
m=t.pop()
n=A.Y(m)
if(n instanceof B.kE){q=n
s.f=D.aw8
s.y=q
n=A.jX().gei().h(0,"debug")
if(n==="1")A.t6().$1("[tutor] model failed: "+A.f(q))}else throw m
x=6
break
case 3:x=2
break
case 6:s.X()
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$zq,w)},
um(){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$um=A.j(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:if(r.at){x=1
break}q=null
try{k=$.ab().b
k===$&&A.b()
k=k.gc_().e.a
q=(k==null?null:k.r)!=null}catch(d){x=1
break}if(!q){x=1
break}r.at=!0
u=4
k=$.ab().b
k===$&&A.b()
p=k
x=7
return A.d(p.cY("quran_tutor_progress").hh("surah, ayah, status, perfect_count, updated_at"),$async$um)
case 7:o=a1
n=r.c.aXS(o)
m=0,k=y.N,i=y.z
case 8:if(!(m<25)){x=10
break}l=r.c.aTd()
if(J.bk(l)===0){x=10
break}h=p
g=A.M(["p_rows",l],k,i)
f=h.CW
f===$&&A.b()
f.b.E(0,A.lZ(h.x,k,k))
x=11
return A.d(f.b0E("quran_tutor_save",!1,g,i),$async$um)
case 11:r.c.aXK(l)
case 9:++m
x=8
break
case 10:x=12
return A.d(A.i0("mt.tutor.progress",C.Z.hp(r.c.cS(),null)),$async$um)
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
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$um,w)},
Fl(d){return this.b0j(d)},
b0j(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$Fl=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:p=B.bwF(t.c.cS()).cS()
y.f.a(p.h(0,"rows")).dE(0,new B.aTM(d))
t.c=B.bwF(p)
x=2
return A.d(t.wN(),$async$Fl)
case 2:v=4
s=$.ab().b
s===$&&A.b()
r=s.gc_().e.a
x=(r==null?null:r.r)!=null?7:8
break
case 7:r=y.z
x=9
return A.d(s.bh("quran_tutor_reset",A.M(["p_surah",d],y.N,r),r),$async$Fl)
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
return A.m($async$Fl,w)}}
B.uT.prototype={
V(){var x=$.Ix()
return new B.Ul(x,new A.bb(C.T,$.a6()))}}
B.Ul.prototype={
ad(){var x,w,v=this
v.ar()
x=v.d
x.a4(v.gn1())
w=y.a
x.Xy().bI(new B.bev(v),w)
H.aJw().bI(new B.bew(v),w).ho(new B.bex())
A.Lk(H.bw5(),y.y)},
v3(){if(this.c!=null)this.t(new B.beh())},
l(){var x,w=this
w.d.R(w.gn1())
x=w.e
x.p$=$.a6()
x.T$=0
w.aq()},
IZ(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$IZ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.d
x=3
return A.d(s.oQ(s.b.aRI(!0)),$async$IZ)
case 3:t=s.a
t.aZX()
if(t.a_T()){t.aeE()
x=1
break}s.zq()
case 1:return A.l(v,w)}})
return A.m($async$IZ,w)},
v4(d,e,f){return this.aGh(d,e,f)},
aN6(d){return this.v4(d,null,null)},
aGh(d,e,f){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$v4=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:if(u.w==null){u.c.U(y.q).f.be(A.bP(null,null,null,null,null,C.l,null,A.o("\u0644\u062d\u0638\u0629\u2026 \u0628\u0646\u062c\u0647\u0651\u0632 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641",null,null,null,null,null,null,null,null),null,C.D,null,null,null,null,null,null,null,null,null,null))
x=1
break}x=e!=null&&f!=null?3:5
break
case 3:t=new A.Q(e,f)
x=4
break
case 5:s=u.c
s.toString
x=6
return A.d(B.c4p(s,d),$async$v4)
case 6:t=h
case 4:if(t==null||u.c==null){x=1
break}x=7
return A.d(u.d.Gh(d,t.a,t.b),$async$v4)
case 7:s=u.c
if(s==null){x=1
break}r=y.z
x=8
return A.d(A.ao(s,!1).cu(A.cn(new B.ben(u,d,t),null,r),r),$async$v4)
case 8:if(u.c!=null)u.t(new B.beo())
case 1:return A.l(v,w)}})
return A.m($async$v4,w)},
C(d){var x=null,w=this.d,v=w.b,u=A.a([],y.p),t=w.a
if(t.gafZ()&&!A.ao(d,!1).Vj())u.push(A.cI(x,x,x,x,D.acL,x,x,t.gaXb(),x,x,x,"\u0631\u062c\u0648\u0639 \u0644\u0645\u0633\u062c\u062f\u064a",x))
t=v.e
if(t)u.push(A.cI(x,x,x,x,D.adI,x,x,new B.ber(d),x,x,x,"\u062a\u0642\u062f\u0651\u0645\u064a",x))
u.push(A.cI(x,x,x,x,D.Bj,x,x,new B.bes(d),x,x,x,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",x))
if(!w.e)w=D.ams
else w=t?this.aCG():this.aD6()
return M.vA(u,w,"\u0627\u0644\u0645\u062d\u0641\u0651\u0638")},
aD6(){var x,w,v,u,t,s,r,q,p=null,o=this.d.d
if(o==null)o=D.V0
x=this.r
w=x==null?p:x.a-x.b
if(!(o.a&&o.b))v="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u062f\u0639\u0645 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638. \u062c\u0631\u0651\u0628 \u0623\u062d\u062f\u062b \u0646\u0633\u062e\u0629 \u0645\u0646 Chrome (\u0623\u0646\u062f\u0631\u0648\u064a\u062f) \u0623\u0648 Safari (\u0622\u064a\u0641\u0648\u0646)."
else if(!o.f)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0641\u062a\u062d \u0639\u0644\u0649 https \u0639\u0634\u0627\u0646 \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0627\u064a\u0643."
else v=!o.c||!o.d?"\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u0633\u0645\u062d \u0628\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0646 \u0627\u0644\u0645\u0627\u064a\u0643.":p
x=y.p
u=A.a([D.aHr,C.ar],x)
for(t=0;t<4;++t){s=D.anX[t]
u.push(new A.a7(C.bC,A.ak(A.a([A.c6(s.a,C.a6,p,18),C.aq,new A.dE(1,C.aX,A.o(s.b,p,p,p,p,G.U_,p,p,p),p)],x),C.A,C.f,C.h,0,p),p))}u=A.af(u,C.A,C.f,C.h)
s=A.a([D.aYv,C.S,A.o("\u0647\u0646\u062d\u0645\u0651\u0644 \u0645\u0644\u0641 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 (\u062d\u0648\u0627\u0644\u064a "+E.aZ(105)+" \u0645\u064a\u062c\u0627) \u0648\u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0648\u0628\u0639\u062f \u0643\u062f\u0647 \u0628\u064a\u0641\u062a\u062d \u0645\u0646 \u063a\u064a\u0631 \u062a\u062d\u0645\u064a\u0644. \u064a\u064f\u0641\u0636\u0651\u0644 \u062a\u0643\u0648\u0646 \u0639\u0644\u0649 Wi-Fi.",p,p,p,p,F.ag,p,p,p)],x)
if(w!=null){r=w<3e8
q=r?"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0645\u062a\u0635\u0641\u062d \u0642\u0644\u064a\u0644\u0629 ("+E.aZ(C.d.ao(w/1e6))+" \u0645\u064a\u062c\u0627) \u2014 \u0641\u0636\u0651\u064a \u0634\u0648\u064a\u0629 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0623\u0648\u0644.":"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629: \u0643\u0641\u0627\u064a\u0629 \u2713"
C.b.E(s,A.a([C.S,A.o(q,p,p,p,p,A.cH(p,p,r?D.cV:C.ch,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x))}r=o.w
if(r>0&&r<3)C.b.E(s,A.a([C.S,D.aY2],x))
x=A.a([new E.cU(u,C.ac,C.ax,p,!0,p),new E.cU(A.af(s,C.A,C.f,C.h),C.ac,C.ax,p,!1,p),D.b4a,C.S],x)
if(v!=null)x.push(new E.cU(A.o(v,p,p,p,p,D.aQj,p,p,p),C.ac,C.ax,p,!1,p))
else x.push(A.jD(D.ac5,D.aTw,this.gaGq(),A.jE(C.q,C.a3,D.aJX,p,p,p,p)))
x.push(C.aK)
x.push(D.V_)
return x},
aCG(){var x,w,v=this,u=null,t=v.d,s=t.c,r=v.e,q=C.c.ap(r.a.a),p=q.length===0,o=p?C.tU:H.bJK(q),n=t.z,m=A.aS(v.a9U(C.hq,E.aZ(s.gah2())+" \u0622\u064a\u0629","\u062d\u0641\u0638\u062a\u0647\u0627"),1),l=E.aZ(s.adS()),k=s.c,j=Date.now()
k=k===B.aTH(new A.b6(j,0,!1))?"\u0648\u0631\u0627 \u0628\u0639\u0636 \u2014 \u0643\u0645\u0651\u0644!":"\u0633\u0645\u0651\u0639 \u0627\u0644\u0646\u0647\u0627\u0631\u062f\u0647 \u0639\u0634\u0627\u0646 \u062a\u0643\u0645\u0651\u0644"
j=y.p
k=A.a([new B.Dw(t,!1,u),A.ak(A.a([m,C.aq,A.aS(v.a9U(C.AK,l+" \u064a\u0648\u0645",k),1)],j),C.j,C.f,C.h,0,u),C.R],j)
if(n!=null){t=H.jt(n.a)
m=n.b
l=n.c
m=m===l?"\u0622\u064a\u0629 "+E.aZ(m):"\u0627\u0644\u0622\u064a\u0627\u062a "+E.aZ(m)+"\u2013"+E.aZ(l)
k.push(new E.cU(A.ak(A.a([D.ade,C.aY,A.aS(A.af(A.a([D.aS_,A.o(t+" \u2014 "+m,u,u,u,u,F.aZ,u,u,u)],j),C.A,C.f,C.h),1),Q.kF],j),C.j,C.f,C.h,0,u),C.ac,C.ax,new B.bek(v,n),!0,u))}t=C.i.bT(0.08)
k.push(A.bG(u,C.I,!1,u,!0,C.l,u,A.bJ(),r,u,u,u,u,u,2,A.fB(u,new A.e8(4,A.ac(14),C.v),u,u,u,u,u,u,!0,u,u,u,u,u,u,t,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,C.pa,"\u0639\u0627\u064a\u0632 \u062a\u062d\u0641\u0638 \u0633\u0648\u0631\u0629 \u0625\u064a\u0647\u061f",u,u,u,u,u,u,u,u,u,!0,!0,!1,u,C.n3,u,u,u,u,u,u,u,u,u,u,u,u),C.r,!0,u,!0,u,!1,u,C.L,u,u,u,u,u,u,u,u,u,1,u,u,!1,"\u2022",u,new B.bel(v),u,u,u,!1,u,u,!1,u,!0,u,C.H,u,u,u,u,u,u,u,u,u,u,u,C.cP,!0,C.y,u,C.Q,u,u,u,u))
k.push(C.R)
if(!p){t=A.a([],j)
if(o.length===0)t.push(D.aVW)
for(r=o.length,x=0;x<o.length;o.length===r||(0,A.B)(o),++x)t.push(v.JY(o[x]))
C.b.E(k,t)}else{t=A.a([D.ayj,D.ayJ,v.JY(1)],j)
for(w=114;w>=78;--w)t.push(v.JY(w))
t.push(C.S)
r=v.f
p=A.c6(r?C.tm:C.kA,C.a6,u,u)
t.push(A.hm(p,A.o(r?"\u0627\u062e\u0641\u064a \u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631":"\u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631 (\u0627\u0644\u0628\u0642\u0631\u0629 \u0644\u062d\u062f \u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a)",u,u,u,u,C.ei,u,u,u),new B.bem(v),u))
if(v.f)for(w=2;w<=77;++w)t.push(v.JY(w))
C.b.E(k,t)}k.push(C.ar)
k.push(D.wL)
return k},
a9U(d,e,f){var x=null,w=y.p
return new E.cU(A.ak(A.a([A.c6(d,C.q,x,x),C.aq,A.aS(A.af(A.a([A.o(e,x,x,x,x,F.aZ,x,x,x),A.o(f,1,C.am,x,x,D.aP6,x,x,x)],w),C.A,C.f,C.h),1)],w),C.j,C.f,C.h,0,x),C.ac,C.G,x,!1,x)},
JY(d){var x,w=null,v=this.d.c,u=I.c_[d-1].a[1],t=v.Y4(d),s=t/u,r=y.p,q=A.bv(A.hl(C.W,A.a([A.buy(C.e_,G.bX,w,w,w,w,w,3,s,w),A.o(E.aZ(d),w,w,w,w,R.Uq,w,w,w)],r),C.l,C.cb,w),36,36),p=A.o(H.jt(d),w,w,w,w,D.aM2,w,w,w)
if(t===0)x=E.aZ(u)+" \u0622\u064a\u0629"
else x=t===u?"\u0645\u062d\u0641\u0648\u0638\u0629 \u0643\u0644\u0647\u0627 \u2713":"\u062d\u0641\u0638\u062a "+E.aZ(t)+" \u0645\u0646 "+E.aZ(u)
r=A.a([q,C.hZ,A.aS(A.af(A.a([p,A.o(x,w,w,w,w,A.cH(w,w,t===u?G.bX:C.ch,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),C.A,C.f,C.h),1)],r)
if(s>0&&s<1)r.push(A.o(E.aZ(C.d.ao(s*100))+"\u066a",w,w,w,w,D.Ud,w,w,w))
r.push(D.ac9)
return new E.cU(A.ak(r,C.j,C.f,C.h,0,w),L.zy,C.et,new B.bep(this,d),!1,w)}}
B.Dw.prototype={
C(d){var x,w,v,u,t,s,r=null,q=this.c
switch(q.f.a){case 2:if(this.d)return C.aE
return D.ayb
case 3:x=q.y
x=A.a([A.o(x==null?"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0634\u063a\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638":B.Iq(x),r,r,r,r,D.w9,r,r,r)],y.p)
w=q.y
if(w!=null)x.push(new B.zX(w,"model load",r))
x.push(C.S)
x.push(new A.xu(C.VI,!1,q.gaXr(),r,r,r,r,C.m,r,!1,r,!0,r,C.pe,r))
return new E.cU(A.af(x,C.A,C.f,C.h),C.ac,C.ax,r,!1,r)
case 0:case 1:v=q.w
u=q.r
q=v>0
t=q?C.d.cw(u/v,0,1):r
s=q&&u<v
q=A.o(s?"\u0628\u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026 "+E.aZ(C.d.ao(u/1e6))+" \u0645\u0646 "+E.aZ(C.d.ao(v/1e6))+" \u0645\u064a\u062c\u0627":"\u0628\u0646\u062c\u0647\u0651\u0632 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026",r,r,r,r,C.wb,r,r,r)
x=A.ac(8)
w=y.p
x=A.a([q,C.P,A.mS(x,A.D8(C.e_,C.q,7,s?t:r),C.bo)],w)
if(!this.d)C.b.E(x,A.a([C.S,D.aTY],w))
return new E.cU(A.af(x,C.A,C.f,C.h),C.ac,C.ax,r,!1,r)}}}
B.Sb.prototype={
C(d){var x=null,w=D.cV.bT(0.1),v=A.ac(14),u=A.d_(D.cV.bT(0.4),1)
return A.aC(x,A.ak(A.a([D.ad2,C.aq,A.aS(A.o(this.c?"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0627\u0644\u062a\u062c\u0648\u064a\u062f.":"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0623\u062d\u0643\u0627\u0645 \u0627\u0644\u062a\u062c\u0648\u064a\u062f. \u0627\u0642\u0631\u0627 \u0639\u0644\u0649 \u0634\u064a\u062e \u0623\u0648 \u0645\u062d\u0641\u0651\u0638 \u0641\u064a \u0645\u0633\u062c\u062f\u0643 \u0643\u0645\u0627\u0646.",x,x,x,x,D.Uk,x,x,x),1)],y.p),C.A,C.f,C.h,0,x),C.m,x,x,new A.as(w,x,u,v,x,x,C.t),x,x,C.ax,C.aU,x,x,x)}}
B.AF.prototype={
M(){return"_Phase."+this.b}}
B.zW.prototype={
V(){return new B.Wj($.Ix(),D.jR)}}
B.Wj.prototype={
gi4(){var x=this.e
return x===$?this.e=this.a.d:x},
gy8(){var x,w=this.a,v=w.f
w=w.c
x=this.gi4()
return H.In(w,x,v.vb(w,x)).b},
ad(){var x,w=this
w.ar()
x=w.d
x.a4(w.gn1())
x.Xy()
x.a.YE(B.aqa(w.a.c,w.gi4()))},
v3(){if(this.c!=null)this.t(new B.bme())},
l(){var x,w=this,v=w.d
v.R(w.gn1())
x=w.Q
if(x!=null)x.aF()
v=v.a
v.Gy()
v.Vm()
w.aq()},
RN(d){var x,w,v=this
if(v.f===D.pH)v.d.a.Vm()
x=v.d.a
x.Gy()
w=v.Q
if(w!=null)w.aF()
v.t(new B.bmu(v,d))
x.YE(B.aqa(v.a.c,d))
w=v.a
if(d<w.e)x.YE(B.aqa(w.c,d+1))},
Kb(d){return this.aDG(d)},
aDG(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$Kb=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f===D.pG){u.d.a.Gy()
u.t(new B.bmy(u))
x=1
break}t=u.r!=null?D.h2:D.jR
u.t(new B.bmz(u))
s=u.d
r=A.a([B.aqa(u.a.c,u.gi4())],y.s)
q=d==null?s.b.b:d
x=3
return A.d(s.a.F6(r,q),$async$Kb)
case 3:p=f
if(u.c==null||u.f!==D.pG){x=1
break}u.t(new B.bmA(u,t,p))
case 1:return A.l(v,w)}})
return A.m($async$Kb,w)},
Jf(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Jf=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.d
if(l.f!==D.hI){x=1
break}p=l.a
p.Gy()
r=B.Ba(s.gy8()).length
s.t(new B.bmC(s))
o=s.Q
if(o!=null)o.aF()
s.Q=A.mp(C.ft,new B.bmD(s))
u=4
o=B.bym(r)
n=A.d2(0,0,0,350*r,0,0)
x=7
return A.d(p.a04(l.b.c,o,n,new B.bmE(s),new B.bmF(s)),$async$Jf)
case 7:u=2
x=6
break
case 4:u=3
k=t.pop()
l=A.Y(k)
if(l instanceof B.kE){q=l
l=s.Q
if(l!=null)l.aF()
if(s.c!=null)s.t(new B.bmG(s,q))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Jf,w)},
y4(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$y4=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.f!==D.pH){x=1
break}m=s.Q
if(m!=null)m.aF()
s.t(new B.bmI(s))
s.Q=A.mp(C.hi,new B.bmJ(s))
l=new A.zq()
$.Bd()
l.mM()
r=l
u=4
m=s.d.a
x=7
return A.d(m.a07(),$async$y4)
case 7:q=e
if(q.b<0.8){s.aN5("\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0642\u0635\u064a\u0631 \u0623\u0648\u064a \u2014 \u062f\u0648\u0633 \xab\u0633\u0645\u0651\u0639\xbb \u0648\u0627\u0642\u0631\u0627 \u0627\u0644\u0622\u064a\u0629 \u0643\u0644\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb.")
x=1
break}x=8
return A.d(m.aiN(q,B.Ba(s.gy8()).length),$async$y4)
case 8:p=e
s.ch=A.d2(0,0,r.gWF(),0,0,0)
k=A.jX().gei().h(0,"debug")
if(k==="1"){o=B.bK1(m.DN())
A.t6().$1("[tutor] "+s.a.c+":"+s.gi4()+" audio="+C.d.aA(q.b,1)+"s infer="+p.b+"ms total="+r.gyQ()+"ms "+p.gLy()+" text="+p.a)
A.t6().$1("[tutor] stages: "+A.f(o))
s.ax="\u062a\u0633\u062c\u064a\u0644\u0643 "+C.d.aA(p.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(p.b/1000,2)+" \u062b\n"+p.gLy()+"\n"+A.f(o)+"\n"+p.a}s.a5e(p.a)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.Y(i)
if(m instanceof B.kE){n=m
m=A.jX().gei().h(0,"debug")
if(m==="1")A.t6().$1("[tutor] check failed: "+A.f(n)+"\n"+s.d.a.DN())
s.Ud(B.Iq(n),n)}else throw i
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$y4,w)},
Ud(d,e){var x=this,w=x.Q
if(w!=null)w.aF()
if(x.c==null)return
x.t(new B.bmt(x,d,e))},
aN5(d){return this.Ud(d,null)},
a5e(d){var x,w,v,u,t,s=this,r={},q=s.Q
if(q!=null)q.aF()
if(s.c==null)return
x=B.bI8(s.gy8(),d)
r.a=null
if(C.c.ap(x.c).length!==0){q=s.d
w=q.c
v=s.a.c
u=s.gi4()
t=x.gqi()
r.a=w.ahS(v,u,q.b.a,t)
q.wN()}s.t(new B.bmv(r,s,x))},
Hv(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Hv=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:g=s.d
if(g.f!==D.hI){x=1
break}s.t(new B.bmm(s))
l=s.Q
if(l!=null)l.aF()
s.Q=A.mp(C.hi,new B.bmn(s))
k=new A.zq()
$.Bd()
k.mM()
r=k
u=4
l=g.a
x=7
return A.d(l.b17(B.aqa(s.a.c,s.gi4()),B.Ba(s.gy8()).length),$async$Hv)
case 7:q=e
p=B.bK1(l.DN())
o="\u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a "+C.d.aA(q.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(q.b/1000,2)+" \u062b (\u0627\u0644\u0643\u0644 "+C.d.aA(r.gyQ()/1000,2)+" \u062b)\n"+q.gLy()+"\n"+A.f(p)+"\n"+q.a
A.t6().$1("[tutor-debug] "+s.a.c+":"+s.gi4()+" audio="+C.d.aA(q.c,1)+"s infer="+q.b+"ms total="+r.gyQ()+"ms "+q.gLy()+" text="+q.a)
A.t6().$1("[tutor-debug] stages: "+A.f(p))
s.ch=A.d2(0,0,r.gWF(),0,0,0)
s.a5e(q.a)
n=s.r
if(n!=null){l=n.gqi()
j=n.b
i=A.ae(j).i("aD<1>")
j=A.a1(new A.aD(j,new B.bmo(),i),i.i("L.E"))
A.t6().$1("[tutor-debug] perfect="+l+" ops="+A.f(j))}s.t(new B.bmp(s,o))
u=2
x=6
break
case 4:u=3
f=t.pop()
l=A.Y(f)
if(l instanceof B.kE){m=l
A.t6().$1("[tutor-debug] failed: "+A.f(m)+"\n"+g.a.DN())
s.Ud(B.Iq(m),m)}else throw f
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Hv,w)},
gT6(){var x,w,v
for(x=this.a.d,w=this.d;v=this.a,x<=v.e;++x){v=w.c.a.h(0,v.c*1000+x)
if((v==null?$.pG():v).a!==D.dW)return!1}return!0},
C(d){var x,w=this,v=null,u=w.d,t=u.c.Yd(w.a.c,w.gi4()),s=u.b,r=s.d&&!w.x&&w.f!==D.h2,q=H.jt(w.a.c),p=y.p,o=A.a([A.cI(v,v,v,v,D.Bj,v,v,new B.bmO(d),v,v,v,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",v)],p),n=w.aw3(),m=A.o("\u0622\u064a\u0629 "+E.aZ(w.gi4()),v,v,v,v,C.jD,v,v,v),l=E.aZ(w.gi4()-w.a.d+1),k=w.a
s=A.a([A.ak(A.a([m,C.bP,A.o("("+l+" \u0645\u0646 "+E.aZ(k.e-k.d+1)+")",v,v,v,v,F.ag,v,v,v),C.dv,w.aH2(t,s.a)],p),C.j,C.f,C.h,0,v),C.R],p)
if(r)s.push(w.aCB())
else{m=w.r
if(m!=null){l=w.f
l=l!==D.pH&&l!==D.lF}else l=!1
if(l)s.push(w.auf(m))
else s.push(A.o(w.gy8()+" \ufd3f"+E.aZ(w.gi4())+"\ufd3e",v,v,v,v,D.i5,C.af,C.aM,v))}s=A.a([new B.Dw(u,!0,v),n,C.P,new E.cU(A.af(s,C.ak,C.f,C.h),D.a7u,C.ax,v,!1,v)],p)
n=w.r
if(n!=null&&w.f===D.h2)s.push(w.aOo(n))
if(w.r!=null&&w.f===D.h2&&w.ch!=null){x=C.d.ao(C.e.bc(w.ch.a,1000)/100)
s.push(new A.a7(C.bC,A.o("\u0627\u062a\u0631\u0627\u062c\u0639 \u0641\u064a "+(E.aZ(C.e.bc(x,10))+"\u066b"+E.aZ(C.e.af(x,10)))+" \u062b",v,v,v,v,F.ag,C.af,v,v),v))}n=w.as
if(n!=null)s.push(new A.a7(C.ax,A.o(n,v,v,v,v,D.w9,v,v,v),v))
if(w.as!=null&&w.at!=null){n=w.at
n.toString
s.push(new B.zX(n,"check "+w.a.c+":"+w.gi4(),v))}s.push(w.auF())
s.push(C.ar)
s.push(A.rj(C.q,C.G,v,new B.bmP(w),D.aSL,D.aUW,u.b.d))
n=w.a
if(n.e>n.d){n=w.gT6()
s.push(new E.cU(A.ak(A.a([D.abk,C.aY,A.aS(A.af(A.a([D.aVG,A.o(w.gT6()?"\u062d\u0641\u0638\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u0633\u0645\u0651\u0639\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636 \u0645\u0646 \u063a\u064a\u0631 \u0645\u0627 \u062a\u0634\u0648\u0641\u0647\u0627":"\u0644\u0645\u0627 \u062a\u062e\u0644\u0651\u0635 \u0627\u0644\u0622\u064a\u0627\u062a \u0648\u0627\u062d\u062f\u0629 \u0648\u0627\u062d\u062f\u0629\u060c \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0644\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636",v,v,v,v,F.ag,v,v,v)],p),C.A,C.f,C.h),1),Q.kF],p),C.j,C.f,C.h,0,v),C.ac,C.ax,new B.bmQ(w,d),n,v))}n=A.jX().gei().h(0,"debug")
if(n==="1"){p=A.a([C.P,A.h0(D.ac4,D.aUC,u.f===D.hI&&w.f!==D.lF?w.gavd():v,v)],p)
n=w.ax
if(n!=null)p.push(new A.a7(C.iC,A.EQ(n,F.ag,v,v),v))
n=u.x
if(n!=null){m=n.a
l=n.b
n=n.glx()
u=u.x
p.push(A.o("model: "+m+" "+l+" \u2014 "+n+", isolated "+u.r+", load "+u.c+" ms (warm-up "+u.w+" ms)",v,v,v,v,F.ag,v,v,v))}p.push(A.bX(D.aVi,v,v,v,new B.bmR(w,d),v,v))
C.b.E(s,p)}s.push(C.P)
s.push(D.wL)
return M.vA(o,s,q)},
aw3(){var x=this.a,w=x.e-x.d+1
if(w===1)return C.aE
return A.bv(A.qz(new B.bmr(this),w,null,C.az,new B.bms()),36,null)},
aH2(d,e){var x,w,v,u,t,s,r,q=null
if(d.a===D.dW)return D.aHx
x=d.b
w=E.aZ(x)
v=E.aZ(e)
u=A.a([],y.p)
for(t=0;t<e;++t){s=t<x
r=s?C.cW:D.aaS
u.push(new A.a7(D.a84,A.c6(r,s?G.bX:C.eS,q,16),q))}return A.aTj(A.ak(u,C.j,C.f,C.a_,0,q),q,"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637 \u0648\u0631\u0627 \u0628\u0639\u0636: "+w+" \u0645\u0646 "+v,q,q)},
aCB(){var x=null
return A.dj(!1,A.ac(12),!0,A.aC(x,D.a3Y,C.m,x,x,new A.as(L.qD,x,x,A.ac(12),x,x,C.t),x,x,x,D.a7b,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bmx(this),x,x,x,x,x,x,x)},
auf(d){var x,w,v,u,t,s=null,r=A.a([],y.R)
for(x=d.a,w=0;w<x.length;++w){v=J.b8(d.gGw(),w)
A:{if(D.fX===v){u=D.i5.cB(G.bX)
break A}if(D.pt===v){u=D.i5.VX(D.cV,C.fQ,D.cV)
break A}if(D.pu===v){u=D.i5.VX(D.dC,C.fQ,D.dC)
break A}u=D.i5.VX(C.eS,C.p2,C.c4)
break A}t=x[w]
r.push(new A.fn(t.a,s,s,C.bn,s,s,s,s,s,s,u))
r.push(L.w3)}x=E.aZ(this.gi4())
r.push(A.dP(s,s,s,s,s,s,s,s,s,D.i5.cB(C.a6),"\ufd3f"+x+"\ufd3e"))
return A.aaF(A.dP(r,s,s,s,s,s,s,s,s,s,s),s,C.af,C.aM)},
aOo(d){var x,w,v,u,t,s,r=this.w
if(C.c.ap(d.c).length===0)return D.b3Q
if(d.gqi()){x=r==null
if((x?null:r.a)===D.dW&&r.b===this.d.b.a)x="\u0627\u0644\u0622\u064a\u0629 \u062f\u064a \u0627\u062a\u062d\u0641\u0638\u062a! \u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0627\u0644\u0644\u064a \u0628\u0639\u062f\u0647\u0627."
else x=!x&&r.a!==D.dW?"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637. \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0645\u0627\u0646 "+E.aZ(this.d.b.a-r.b)+" \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629.":"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637."
return new B.Aa(G.bX,C.cW,"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713",x,null)}x=d.gGw()
w=J.cY(x)
v=w.hY(x,new B.bmK()).gK(0)
u=w.hY(x,new B.bmL()).gK(0)
t=w.hY(x,new B.bmM()).gK(0)
x=A.a([],y.s)
if(u>0)x.push(E.aZ(u)+" \u063a\u0644\u0637")
if(v>0)x.push(E.aZ(v)+" \u0631\u0627\u062c\u0639\u0647\u0627")
if(t>0)x.push(E.aZ(t)+" \u0646\u0627\u0642\u0635\u0629")
if(d.gE2().length!==0)x.push(E.aZ(d.gE2().length)+" \u0632\u064a\u0627\u062f\u0629")
w=u+t>0?D.dC:D.cV
x=C.b.aO(x," \u2022 ")
s=d.gE2().length!==0?"\n\u0632\u064a\u0627\u062f\u0629: "+C.b.aO(d.gE2(),"\u060c "):""
return new B.Aa(w,C.kD,"\u0642\u0631\u0628\u062a! \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0644\u0648\u0651\u0646\u0629",x+"\n\u0627\u0644\u0623\u0635\u0641\u0631: \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u062f\u064a \u2014 \u0627\u0644\u0623\u062d\u0645\u0631: \u063a\u0644\u0637 \u2014 \u0627\u0644\u0631\u0645\u0627\u062f\u064a \u0627\u0644\u0645\u0634\u0637\u0648\u0628: \u0646\u0633\u064a\u062a\u0647\u0627."+s,null)},
auF(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d,g=h.f===D.hI,f=j.f
switch(f.a){case 2:if(j.z==null)x=0
else{f=Date.now()
w=j.z
w.toString
x=C.e.bc(new A.b6(f,0,!1).dI(w).a,1e6)}v=C.e.bc(B.bym(B.Ba(j.gy8()).length).a,1e6)
f=j.gaLW()
w=96+26*j.y
u=D.dC.bT(0.25)
w=A.lb(i,A.bA0(C.W,A.aC(i,D.acb,C.m,i,i,D.Yq,i,84,i,i,i,i,84),i,new A.as(u,i,i,i,i,i,C.cw),C.zm,i,w,w),C.r,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,f,i,i,i,i,i,i)
u=A.o("\u0628\u0646\u0633\u062c\u0651\u0644\u2026 "+B.bxk(x)+" / "+B.bxk(v),i,i,i,i,K.lp,i,i,i)
return A.af(A.a([w,C.P,u,A.o(h.b.c?"\u0644\u0645\u0627 \u062a\u062e\u0644\u0635 \u0627\u0633\u0643\u062a \u062b\u0627\u0646\u064a\u0629 \u0623\u0648 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb":"\u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb \u0644\u0645\u0627 \u062a\u062e\u0644\u0635",i,i,i,i,F.ag,i,i,i),A.bX(D.aY1,i,i,i,f,i,i)],y.p),C.j,C.f,C.h)
case 3:t=C.d.e1((Date.now()-j.ay)/1000)
if(t<8)h="\u062b\u0648\u0627\u0646\u064a \u0648\u0646\u0642\u0648\u0644\u0643"
else h=t<25?"\u0644\u0633\u0647 \u0634\u063a\u0627\u0644\u064a\u0646 \u2014 \u0627\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0628\u062a\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0643\u062a\u0631 ("+E.aZ(t)+" \u062b)":"\u0648\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0637\u0648\u0644 \u0645\u0646 \u0627\u0644\u0639\u0627\u062f\u064a \u2014 \u0644\u0648 \u0639\u0644\u0651\u0642 \u0647\u0646\u0639\u064a\u062f \u062a\u0634\u063a\u064a\u0644\u0647 \u0644\u0648\u062d\u062f\u0646\u0627 ("+E.aZ(t)+" \u062b)"
return new A.a7(D.a78,A.af(A.a([C.qr,C.ar,D.aUf,A.o(h,i,i,i,i,F.ag,C.af,i,i)],y.p),C.j,C.f,C.h),i)
default:s=f===D.pG
r=j.r
f=r==null
w=!f
q=w&&r.gqi()
u=A.c6(s?C.kE:K.B_,i,i,i)
if(s)p="\u0648\u0642\u0651\u0641"
else p=w&&!q?"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u062d":"\u0627\u0633\u0645\u0639"
p=A.o(p,i,i,i,i,i,i,i,i)
o=A.jE(i,i,D.aJU,i,i,i,i)
u=A.aS(new A.xu(C.VI,!0,new B.bmf(j,r,q),i,i,i,o,C.m,i,!1,i,!0,i,new A.SG(p,u,o,i,i),i),1)
p=A.a([],y.n)
for(o=y.c,n=0;n<3;++n){m=D.C3[n]
p.push(new A.eo(m,i,A.o("\xd7"+E.aZ(m),i,i,i,i,i,i,i,i),o))}o=y.S
l=y.b
k=y.p
o=A.ak(A.a([u,C.aq,A.vd(new B.bmg(j),p,A.cR([h.b.b],o),!1,A.jw(i,i,i,new A.b3(new B.bmh(),l),i,i,i,i,new A.b3(new B.bmi(),l),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,C.di),o)],k),C.j,C.f,C.h,0,i)
h=g&&!s?j.gaIu():i
u=A.c6(f?D.mV:C.kD,i,i,i)
if(g)f=f?"\u0633\u0645\u0651\u0639":"\u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a"
else f="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
f=A.o(f,i,i,i,i,C.cA,i,i,i)
p=q?N.hd:C.q
h=A.a([o,C.R,A.jD(u,f,h,A.jE(p,q?C.i:C.a3,D.oU,i,i,i,i))],k)
if(w&&j.gi4()<j.a.e)C.b.E(h,A.a([C.P,q?A.jD(D.adT,D.aXk,new B.bmj(j),A.jE(G.bX,C.a3,D.oU,i,i,i,i)):A.bX(D.aSR,i,i,i,new B.bmk(j),i,i)],k))
if(w){f=j.gi4()
w=j.a
u=w.e
f=f===u&&q&&u>w.d}else f=!1
if(f)h.push(new A.a7(C.re,A.o(j.gT6()?"\u062e\u0644\u0651\u0635\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u062c\u0631\u0651\u0628 \xab\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636\xbb \u062a\u062d\u062a.":"\u062e\u0644\u0635\u062a \u0622\u062e\u0631 \u0622\u064a\u0629 \u2014 \u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0644\u0633\u0647 (\u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0635\u0641\u0631\u0627 \u0641\u0648\u0642).",i,i,i,i,K.pd,C.af,i,i),i))
return A.af(h,C.ak,C.f,C.h)}}}
B.Aa.prototype={
C(d){var x=this,w=null,v=x.c,u=v.bT(0.12),t=A.ac(14),s=A.d_(v.bT(0.5),1),r=y.p
return A.aC(w,A.ak(A.a([A.c6(x.d,v,w,w),C.aq,A.aS(A.af(A.a([A.o(x.e,w,w,w,w,A.cH(w,w,v,w,w,w,w,w,w,w,w,15,w,w,C.a2,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),C.vy,A.o(x.f,w,w,w,w,D.Uk,w,w,w)],r),C.A,C.f,C.h),1)],r),C.A,C.f,C.h,0,w),C.m,w,w,new A.as(u,w,s,t,w,w,C.t),w,w,C.ax,C.aU,w,w,w)}}
B.zV.prototype={
V(){var x=y.S
return new B.Wi($.Ix(),A.x(x,y.B),A.aE(x),A.x(x,y.N),A.dF(null,y.H))}}
B.Wi.prototype={
ad(){this.ar()
this.d.a4(this.gn1())},
v3(){if(this.c!=null)this.t(new B.blY())},
l(){var x,w=this,v=w.d
v.R(w.gn1())
x=w.y
if(x!=null)x.aF()
v.a.Vm()
w.aq()},
CT(d){return this.aLL(d)},
aLL(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m
var $async$CT=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.t(new B.bm6(t,d))
r=t.y
if(r!=null)r.aF()
t.y=A.mp(C.ft,new B.bm7(t))
v=3
r=t.d
q=t.a
p=q.f
q=q.c
q=B.bym(B.Ba(H.In(q,d,p.vb(q,d)).b).length)
p=t.a
o=p.f
p=p.c
p=A.d2(0,0,0,350*B.Ba(H.In(p,d,o.vb(p,d)).b).length,0,0)
x=6
return A.d(r.a.a04(r.b.c,q,p,new B.bm8(t,d),new B.bm9(t)),$async$CT)
case 6:v=1
x=5
break
case 3:v=2
m=u.pop()
r=A.Y(m)
if(r instanceof B.kE){s=r
r=t.y
if(r!=null)r.aF()
if(t.c!=null)t.t(new B.bma(t,s))}else throw m
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$CT,w)},
Bq(d,e){return this.ax2(d,e)},
ax2(d,e){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Bq=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.e!==d){x=1
break}o=s.y
if(o!=null)o.aF()
s.t(new B.bm1(s,d))
n=d<s.a.e?d+1:null
r=s.d.a.a07()
if(e&&n!=null)s.CT(n)
q=null
u=4
x=7
return A.d(r,$async$Bq)
case 7:q=g
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.Y(l)
if(o instanceof B.kE){p=o
s.t(new B.bm2(s,d,p))}else throw l
x=6
break
case 3:x=2
break
case 6:if(q!=null){o=q
s.at=s.at.bI(new B.bm3(s,o,d),y.H)}case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Bq,w)},
gaF0(){var x,w,v,u,t=this
for(x=t.a.d,w=t.f,v=t.r,u=t.w;x<=t.a.e;++x)if(!w.aw(x)&&!v.m(0,x)&&!u.aw(x)&&x!==t.e)return x
return null},
aJ7(){this.t(new B.bm4(this))},
C(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q.f===D.hI,o=s.e,n=s.gaF0(),m=s.f,l=m.a,k=s.w.a,j=s.a,i=l+k===j.e-j.d+1&&s.r.a===0&&o==null
l=A.w(m).i("c7<2>")
x=new A.aD(new A.c7(m,l),new B.bmb(),l.i("aD<L.E>")).gK(0)
l=H.jt(s.a.c)
m=y.p
q=A.a([new B.Dw(q,!0,r),A.o("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 "+E.aZ(s.a.d)+" \u0644\u062d\u062f "+E.aZ(s.a.e)+" \u0645\u0646 \u062d\u0641\u0638\u0643\u060c \u0622\u064a\u0629 \u0622\u064a\u0629: \u0628\u0639\u062f \u0643\u0644 \u0622\u064a\u0629 \u062f\u0648\u0633 \xab\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629\xbb \u0648\u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0637\u0648\u0644 \u2014 \u0647\u0646\u0635\u062d\u0651\u062d \u0648\u0625\u0646\u062a \u0628\u062a\u0642\u0631\u0627.",r,r,r,r,F.ag,r,r,r),C.R],m)
for(w=s.a.d;w<=s.a.e;++w)q.push(s.aN7(w))
q.push(C.P)
k=s.Q
if(k!=null)q.push(A.o(k,r,r,r,r,D.w9,r,r,r))
k=s.as
if(k!=null){j=s.a
q.push(new B.zX(k,"review "+j.c+":"+j.d+"-"+j.e,r))}k=o==null
if(!k){j=E.aZ(o)
if(s.z==null)v=0
else{v=Date.now()
u=s.z
u.toString
u=C.e.bc(new A.b6(v,0,!1).dI(u).a,1e6)
v=u}v=A.o("\u0628\u0646\u0633\u062c\u0651\u0644 \u0622\u064a\u0629 "+j+"\u2026 "+B.bxk(v),r,r,r,r,K.lp,C.af,r,r)
j=A.mS(A.ac(6),A.D8(C.e_,D.dC,6,s.x),C.bo)
u=o<s.a.e
t=A.c6(u?P.AW:C.kE,r,r,r)
C.b.E(q,A.a([v,C.S,j,C.R,A.jD(t,A.o(u?"\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629":"\u062e\u0644\u0635\u062a",r,r,r,r,C.cA,r,r,r),new B.bmc(s,o),A.jE(C.q,C.a3,D.oU,r,r,r,r))],m))}else if(n!=null){j=p?new B.bmd(s,n):r
if(!p)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
else v=n===s.a.d?"\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0633\u0645\u064a\u0639":"\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+E.aZ(n)
q.push(A.jD(D.acM,A.o(v,r,r,r,r,C.cA,r,r,r),j,A.jE(C.q,C.a3,D.oU,r,r,r,r)))}if(s.r.a!==0&&k)q.push(D.ayo)
if(i){k=s.a
k=x===k.e-k.d+1
j=k?G.bX:D.cV
v=k?C.mT:C.kD
if(k)k="\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713 \u0633\u0645\u0651\u0639\u062a\u0647\u0645 \u0643\u0644\u0647\u0645 \u0635\u062d"
else{k=E.aZ(x)
u=s.a
u=k+" \u0645\u0646 "+E.aZ(u.e-u.d+1)+" \u0622\u064a\u0627\u062a \u0645\u0638\u0628\u0648\u0637\u0629"
k=u}u=s.a
u=x===u.e-u.d+1?"\u0631\u0628\u0646\u0627 \u064a\u062b\u0628\u0651\u062a\u0647\u0627 \u0641\u064a \u0642\u0644\u0628\u0643.":"\u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0641\u064a\u0647\u0627 \u0623\u0644\u0648\u0627\u0646 \u0648\u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a."
C.b.E(q,A.a([new B.Aa(j,v,k,u,r),A.h0(D.adO,D.aXF,s.gaJ6(),r)],m))}q.push(C.R)
q.push(D.wL)
return M.vA(r,q,"\u0633\u0645\u0651\u0639 "+l)},
aN7(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.f.h(0,d),i=l.w.h(0,d)
if(l.e===d)x=D.act
else if(l.r.m(0,d))x=O.oV
else if(i!=null)x=D.acC
else if(j!=null){w=j.gqi()?C.cW:D.aal
x=A.c6(w,j.gqi()?G.bX:D.cV,k,k)}else x=D.abL
w=y.p
v=A.a([A.ak(A.a([A.o("\u0622\u064a\u0629 "+E.aZ(d),k,k,k,k,D.aPH,k,k,k),C.dv,x],w),C.j,C.f,C.h,0,k)],w)
if(i!=null)v.push(A.o(i,k,k,k,k,D.Ug,k,k,k))
if(j!=null&&!j.gqi()){u=y.R
t=A.a([],u)
for(s=j.a,r=0;r<s.length;++r){q=s[r]
p=j.gGw()
o=J.br(p)
n=o.h(p,r)
A:{if(D.fX===n){m=G.bX
break A}if(D.pt===n){m=D.cV
break A}if(D.pu===n){m=D.dC
break A}m=C.eS
break A}m=D.i5.aSg(m,o.h(p,r)===D.pv?C.p2:k,22)
C.b.E(t,A.a([new A.fn(q.a,k,k,C.bn,k,k,k,k,k,k,m),L.w3],u))}w=A.a([C.aR,A.aaF(A.dP(t,k,k,k,k,k,k,k,k,k,k),k,C.af,C.aM)],w)
if(C.c.ap(j.c).length===0)w.push(D.aVn)
C.b.E(v,w)}return new E.cU(A.af(v,C.ak,C.f,C.h),C.eX,C.et,k,!1,k)}}
B.zU.prototype={
V(){return new B.Wh($.Ix())}}
B.Wh.prototype={
ad(){this.ar()
var x=this.d
x.a4(this.gn1())
x.Xy()},
v3(){if(this.c!=null)this.t(new B.blP())},
l(){this.d.R(this.gn1())
this.aq()},
C(d){var x,w,v,u,t,s=this,r=null,q=s.d.c,p=q.galU(),o=A.a([],y.t)
for(x=78;x<=114;++x)o.push(x)
w=C.b.nl(o,0,new B.blW(q))
v=C.b.nl(o,0,new B.blX())
o=y.p
o=A.a([A.ak(A.a([A.aS(s.PZ(E.aZ(q.gah2()),"\u0622\u064a\u0629 \u0645\u062d\u0641\u0648\u0638\u0629"),1),C.aq,A.aS(s.PZ(E.aZ(q.adS()),"\u064a\u0648\u0645 \u0648\u0631\u0627 \u0628\u0639\u0636"),1),C.aq,A.aS(s.PZ(E.aZ(q.e),"\u0623\u0637\u0648\u0644 \u0633\u0644\u0633\u0644\u0629"),1)],o),C.j,C.f,C.h,0,r),C.R,new E.cU(A.af(A.a([A.o("\u062c\u0632\u0621 \u0639\u0645\u0651: "+E.aZ(C.d.ao(w*100/v))+"\u066a",r,r,r,r,F.aZ,r,r,r),C.S,A.mS(A.ac(6),A.D8(C.e_,G.bX,8,w/v),C.bo),C.aR,A.o(E.aZ(w)+" \u0645\u0646 "+E.aZ(v)+" \u0622\u064a\u0629",r,r,r,r,F.ag,r,r,r)],o),C.A,C.f,C.h),C.ac,C.ax,r,!1,r)],o)
if(p.length===0)o.push(D.ayw)
for(u=p.length,t=0;t<p.length;p.length===u||(0,A.B)(p),++t)o.push(s.aN9(p[t]))
o.push(C.P)
u=$.ab().b
u===$&&A.b()
u=u.gc_().e.a
o.push(A.o((u==null?r:u.r)!=null?"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643 \u0648\u064a\u0638\u0647\u0631 \u0639\u0644\u0649 \u0623\u064a \u062c\u0647\u0627\u0632 \u062a\u062f\u062e\u0644 \u0645\u0646\u0647.":"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647. \u0633\u062c\u0651\u0644 \u062f\u062e\u0648\u0644 \u0639\u0634\u0627\u0646 \u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643.",r,r,r,r,F.ag,r,r,r))
return M.vA(r,o,"\u062a\u0642\u062f\u0651\u0645\u064a \u0641\u064a \u0627\u0644\u062d\u0641\u0638")},
PZ(d,e){var x=null
return new E.cU(A.af(A.a([A.o(d,x,x,x,x,D.aPt,x,x,x),A.o(e,x,x,x,x,C.Uw,C.af,x,x)],y.p),C.j,C.f,C.h),C.ac,C.G,x,!1,x)},
aN9(d){var x=null,w=this.d.c,v=I.c_[d-1].a[1],u=w.Y4(d),t=w.aXa(d),s=y.p,r=A.ak(A.a([A.aS(A.o(H.jt(d),x,x,x,x,F.aZ,x,x,x),1),A.o(E.aZ(C.d.ao(u*100/v))+"\u066a",x,x,x,x,D.aQk,x,x,x)],s),C.j,C.f,C.h,0,x),q=A.mS(A.ac(6),A.D8(C.e_,G.bX,7,u/v),C.bo),p=E.aZ(u),o=E.aZ(v),n=t>0?" \u2022 \u0628\u062a\u0631\u0627\u062c\u0639 "+E.aZ(t):""
return new E.cU(A.af(A.a([r,C.S,q,C.aR,A.o("\u0645\u062d\u0641\u0648\u0638 "+p+" \u0645\u0646 "+o+n,x,x,x,x,F.ag,x,x,x)],s),C.A,C.f,C.h),C.ac,C.ax,new B.blV(this,d),!1,x)},
Hy(d){return this.avv(d)},
avv(d){var x=0,w=A.n(y.H),v=this,u,t
var $async$Hy=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=I.c_[d-1].a[1]
t=v.c
t.toString
x=2
return A.d(A.fv(C.d7,new B.blU(v,d,u),t,!0,null,null,!1,y.H),$async$Hy)
case 2:return A.l(null,w)}})
return A.m($async$Hy,w)}}
B.ab1.prototype={
Ka(d,e){var x=null,w=A.zB(x,x,x,x,x,x,x,x,x,x,x,D.aJG,C.G,x,x,x,x,C.l0,x,x)
return A.bX(A.o(d,x,x,x,x,C.jC,x,x,x),x,x,x,new B.aTu(e),x,w)},
C(d){var x=this,w=y.p
return new E.cU(A.af(A.a([D.aXb,C.S,D.aY0,A.eM(A.a([x.Ka("tarteel-ai/whisper-base-ar-quran","https://huggingface.co/tarteel-ai/whisper-base-ar-quran"),x.Ka("iqbalaesthetic/Basira","https://huggingface.co/iqbalaesthetic/Basira")],w),C.ba,0,12),D.aSC,x.Ka("tanzil.net","https://tanzil.net"),D.aYQ,x.Ka("everyayah.com","https://everyayah.com")],w),C.A,C.f,C.h),C.ac,C.ax,null,!1,null)}}
B.zX.prototype={
V(){return new B.Wk()}}
B.Wk.prototype={
ga8v(){var x=this.a
return B.c5H(x.c,x.d,$.byX().DN())},
Kc(){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k
var $async$Kc=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.t(new B.bmS(s))
v=3
r=A.bsP()
n=s.ga8v()
m=y.N
q=A.x(m,m)
J.fM(q,"app","masjid")
J.fM(q,"path","tutor \u203a "+s.a.d)
if(r!=null){m=r.length>160?C.c.Y(r,0,160):r
J.fM(q,"ua",m)}x=6
return A.d(A.a1Y(n,null,C.A5,q),$async$Kc)
case 6:if(s.c!=null)s.t(new B.bmT(s))
t.push(5)
x=4
break
case 3:v=2
k=u.pop()
p=A.Y(k)
o=p instanceof A.d5?p.a:"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0628\u0639\u062a \u2014 \u0627\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0646\u062a \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
if(s.c!=null)s.t(new B.bmU(s,o))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.t(new B.bmV(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Kc,w)},
C(d){var x,w,v,u=this,t=null,s=y.p
s=A.a([A.dj(!1,t,!0,new A.a7(C.zx,A.ak(A.a([A.c6(u.d?C.tm:C.kA,C.c4,t,18),C.fN,D.aYo],s),C.j,C.f,C.h,0,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,new B.bmX(u),t,t,t,t,t,t,t)],s)
if(u.d){x=A.ac(8)
s.push(A.aC(t,A.EQ(u.ga8v(),D.aMq,t,C.n),C.m,t,t,new A.as(L.qD,t,t,x,t,t,C.t),t,t,D.a7g,C.eu,t,t,1/0))}if(u.f)s.push(D.aSI)
else{x=A.zB(t,t,t,t,t,t,t,t,t,t,t,C.T6,C.G,t,t,t,t,C.l0,t,t)
w=u.e
v=w?t:u.gaN8()
s.push(A.hm(w?D.aK3:D.adv,D.aWG,v,x))}x=u.r
if(x!=null)s.push(A.o(x,t,t,t,t,D.Ug,t,t,t))
return new A.a7(C.ax,A.af(s,C.A,C.f,C.h),t)}}
var z=a.updateTypes(["a9<~>()","~()","A(mt)","a9<FK>()","a9<FI>()","a9<FJ>()","R<mt>()","A(pR)","bl(nu)","zW(z)","zU(z)","A(lT)","zV(z)","A(Er)"])
B.aVG.prototype={
$1(d){var x,w
if(d.m(0,C.z)){x=this.a
if(x.fy===D.jK)x=null
else{x=x.goZ().k3
x=A.az(31,x.v()>>>16&255,x.v()>>>8&255,x.v()&255)}return x}x=this.a
if(x.fy===D.jK)x=null
else{x=x.goZ()
w=x.p3
x=w==null?x.k2:w}return x},
$S:26}
B.aTv.prototype={
$0(){var x=0,w=A.n(y.m),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=A.aa(A.cm(b.G.document).baseURI)
q=A.bY(r,0,null).W("quran_tutor/tutor.js?v=3").j(0)
x=7
return A.d(A.dX(import(q),y.m),$async$$0)
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
m=B.bWv("network",A.f(o))
throw A.p(m)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:231}
B.aTy.prototype={
$1(d){var x=null
return A.boM(A.cc(d,"persist",x,x,x,x))},
$S:906}
B.aTx.prototype={
$0(){var x=0,w=A.n(y.C),v,u=this,t,s,r,q,p,o,n,m,l
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.a
n=A
m=A
l=A
x=4
return A.d(q.pc(),$async$$0)
case 4:x=3
return A.d(n.dX(m.cm(l.cc(e,"loadModel",A.bpi(new B.aTw(u.b)),u.c,u.d,null)),y.m),$async$$0)
case 3:p=e
o=A.X(p.device)
if(o==null)o=null
if(o==null)o=""
t=A.X(p.dtype)
if(t==null)t=null
if(t==null)t=""
s=q.pb(p,"ms")
r=q.mQ(p,"cached")
A.X(p.backend)
v=new B.FI(o,t,s,r,q.pb(p,"threads"),q.mQ(p,"isolated"),q.pb(p,"warmMs"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+4}
B.aTw.prototype={
$2(d,e){this.a.$2(C.d.ao(d),C.d.ao(e))},
$S:907}
B.aTC.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=v.a
s=t.a
x=s==null?2:3
break
case 2:x=4
return A.d(t.pc(),$async$$0)
case 4:s=e
case 3:u={}
u.maxMs=C.e.bc(v.b.a,1000)
u.autoStop=v.c
u.minMs=C.e.bc(v.d.a,1000)
u.onLevel=A.eZ(new B.aTA(v.e))
u.onAutoStop=A.eZ(new B.aTB(v.f))
x=5
return A.d(A.dX(A.cm(A.cc(s,"startRecording",u,null,null,null)),y.O),$async$$0)
case 5:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.aTA.prototype={
$1(d){return this.a.$1(d)},
$S:60}
B.aTB.prototype={
$1(d){return this.a.$1(d)},
$S:9}
B.aTD.prototype={
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
return A.d(t.pc(),$async$$0)
case 7:x=5
break
case 6:e=s
case 5:x=3
return A.d(q.dX(p.cm(o.cc(e,"stopRecording",null,null,null,null)),y.m),$async$$0)
case 3:r=e
v=new B.FJ(r,A.dg(r.seconds))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+5}
B.aTF.prototype={
$0(){var x=0,w=A.n(y._),v,u=this,t,s,r,q,p,o
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.b.a
s=u.a
r=s
q=A
p=A
o=A
x=4
return A.d(s.pc(),$async$$0)
case 4:x=3
return A.d(q.dX(p.cm(o.cc(e,"transcribe",t.audio,t.rate,s.a7q(u.c),null)),y.m),$async$$0)
case 3:v=r.aax(e)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+3}
B.aTE.prototype={
$0(){var x=0,w=A.n(y._),v,u=this,t,s,r,q,p
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t
r=A
q=A
p=A
x=4
return A.d(t.pc(),$async$$0)
case 4:x=3
return A.d(r.dX(q.cm(p.cc(e,"transcribeUrl",u.b,t.a7q(u.c),null,null)),y.m),$async$$0)
case 3:v=s.aax(e)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+3}
B.aTz.prototype={
$1(d){return d},
$S:31}
B.aL2.prototype={
$0(){var x,w,v,u,t=this.a,s=A.c3(t.a.length,D.pv,!1,y.G)
for(t=t.b,x=t.length,w=0;w<x;++w){v=t[w]
u=v.a
if(u!=null)s[u]=v.d}return s},
$S:z+6}
B.aL1.prototype={
$1(d){return d===D.fX},
$S:z+2}
B.bpd.prototype={
$2(d,e){var x,w=e.length
if(d.length<w)return!1
for(x=0;x<w;++x)if(B.btF(e[x],d[x])<0.75)return!1
return!0},
$S:908}
B.bqH.prototype={
$1(d){return d.length!==0},
$S:12}
B.aTI.prototype={
$1(d){return d.a===D.dW},
$S:z+7}
B.aTJ.prototype={
$1(d){return C.e.bc(d,1000)},
$S:66}
B.aTG.prototype={
$1(d){return C.d.bS(d)},
$S:909}
B.aTK.prototype={
$0(){var x=0,w=A.n(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$$0=A.j(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d(A.i_("mt.tutor.settings"),$async$$0)
case 7:r=a3
if(r!=null){k=y.P.a(C.Z.eS(r,null))
j=A.bM(k.h(0,"n"))
j=j==null?null:C.d.bS(j)
j=C.e.cw(j==null?2:j,1,5)
i=C.b.m(D.C3,k.h(0,"r"))?A.er(k.h(0,"r")):1
h=A.hq(k.h(0,"auto"))
g=A.hq(k.h(0,"hide"))
k=A.hq(k.h(0,"in"))
s.a.b=new B.Qy(j,i,h!==!1,g===!0,k===!0)}u=2
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
return A.d(A.i_("mt.tutor.progress"),$async$$0)
case 12:q=a3
if(q!=null)s.a.c=B.bwF(y.P.a(C.Z.eS(q,null)))
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
return A.d(A.i_("mt.tutor.last"),$async$$0)
case 17:p=a3
if(p!=null){o=y.P.a(C.Z.eS(p,null))
n=C.d.bS(A.dk(J.b8(o,"s")))
m=C.d.bS(A.dk(J.b8(o,"f")))
l=C.d.bS(A.dk(J.b8(o,"t")))
if(B.bK6(n,m)&&B.bK6(n,l)&&m<=l)s.a.z=new A.bI(n,m,l)}u=2
x=16
break
case 14:u=13
a0=t.pop()
x=16
break
case 13:x=2
break
case 16:k=s.a
if(k.b.e&&k.a.a_T()){k.a.aeE()
x=1
break}a1=k
x=18
return A.d(k.a.GS(),$async$$0)
case 18:a1.d=a3
k.e=!0
k.X()
if(k.b.e)k.zq()
k.um()
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:89}
B.aTL.prototype={
$2(d,e){var x=this.a
x.r=d
x.w=e
x.X()},
$S:910}
B.aTM.prototype={
$2(d,e){return C.e.bc(A.es(A.f(d),null,null),1000)===this.a},
$S:911}
B.bev.prototype={
$1(d){var x=0,w=A.n(y.a),v=this,u,t
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.d(u.d.a.Az(),$async$$1)
case 2:t=f
if(u.c!=null)u.t(new B.beu(u,t))
return A.l(null,w)}})
return A.m($async$$1,w)},
$S:912}
B.beu.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bew.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bet(x,d))},
$S:z+8}
B.bet.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bex.prototype={
$1(d){},
$S:22}
B.beh.prototype={
$0(){},
$S:0}
B.ben.prototype={
$1(d){var x=this.c,w=this.a.w
w.toString
return new B.zW(this.b,x.a,x.b,w,null)},
$S:z+9}
B.beo.prototype={
$0(){},
$S:0}
B.ber.prototype={
$0(){var x=y.z
return A.ao(this.a,!1).cu(A.cn(new B.beq(),null,x),x)},
$S:0}
B.beq.prototype={
$1(d){return D.aZt},
$S:z+10}
B.bes.prototype={
$0(){return B.bJS(this.a)},
$S:0}
B.bek.prototype={
$0(){var x=this.b
return this.a.v4(x.a,x.b,x.c)},
$S:0}
B.bel.prototype={
$1(d){return this.a.t(new B.bej())},
$S:9}
B.bej.prototype={
$0(){},
$S:0}
B.bem.prototype={
$0(){var x=this.a
return x.t(new B.bei(x))},
$S:0}
B.bei.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.bep.prototype={
$0(){return this.a.aN6(this.b)},
$S:0}
B.bsC.prototype={
$1(d){return new A.jg(new B.bsz(this.a,this.b,this.c),null)},
$S:54}
B.bsz.prototype={
$2(d,e){var x,w,v=null,u=this.b,t=new B.bsB(u,e),s=this.a,r=new B.bsA(s,e),q=A.o(H.jt(this.c),v,v,v,v,C.p7,v,v,v),p=A.o("\u0647\u062a\u0633\u0645\u0651\u0639 \u0623\u0646\u0647\u064a \u0622\u064a\u0627\u062a\u061f ("+E.aZ(u)+" \u0622\u064a\u0629)",v,v,v,v,F.ag,v,v,v),o=y.p,n=A.a([],o)
if(u<=30)n.push(r.$3("\u0627\u0644\u0633\u0648\u0631\u0629 \u0643\u0644\u0647\u0627",1,u))
x=u<5
w=E.aZ(x?u:5)
x=x?u:5
n.push(r.$3("\u0623\u0648\u0644 "+w+" \u0622\u064a\u0627\u062a",1,x))
x=s.a
if(x>1){x=E.aZ(x)
w=s.a
n.push(r.$3("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+x,w,C.e.cw(w+4,1,u)))}u=A.a([q,C.aR,p,C.R,A.eM(n,C.ba,6,8),C.P,A.ak(A.a([t.$3("\u0645\u0646",s.b,new B.bsu(s)),D.aK_,t.$3("\u0644\u062d\u062f",s.c,new B.bsv(s))],o),C.j,C.f,C.h,0,v)],o)
if(s.c-s.b>=10)u.push(D.ayr)
u.push(C.aK)
u.push(A.jC(D.aTU,new B.bsw(s,d),A.jE(C.q,C.a3,D.aJR,v,v,v,v)))
return A.dJ(!0,new A.a7(C.zD,A.af(u,C.ak,C.f,C.a_),v),C.G,!0)},
$S:226}
B.bsB.prototype={
$3(d,e,f){var x,w,v,u=null,t=A.o(d,u,u,u,u,C.i8,u,u,u),s=A.a([],y.I)
for(x=this.a,w=y.r,v=1;v<=x;++v)s.push(new A.d1(v,A.o("\u0622\u064a\u0629 "+E.aZ(v),u,u,u,u,u,u,u,u),C.aC,u,w))
return A.aS(A.af(A.a([t,S.Ch(C.d7,!0,s,320,new B.bsy(this.b,f),D.aQC,e,y.S)],y.p),C.A,C.f,C.h),1)},
$S:914}
B.bsy.prototype={
$1(d){return d==null?null:this.a.$1(new B.bsx(this.b,d))},
$S:48}
B.bsx.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bsA.prototype={
$3(d,e,f){var x=null
return new B.Yn(A.o(d,x,x,x,x,x,x,x,x),new B.bst(this.a,this.b,e,f),x)},
$S:915}
B.bst.prototype={
$0(){var x=this
return x.b.$1(new B.bss(x.a,x.c,x.d))},
$S:0}
B.bss.prototype={
$0(){var x=this.a
x.b=this.b
x.c=this.c},
$S:0}
B.bsu.prototype={
$1(d){var x=this.a
x.b=d
if(x.c<d)x.c=d},
$S:33}
B.bsv.prototype={
$1(d){var x=this.a
x.c=d
if(x.b>d)x.b=d},
$S:33}
B.bsw.prototype={
$0(){var x=this.a
return A.ao(this.b,!1).bv(new A.Q(x.b,x.c))},
$S:0}
B.bme.prototype={
$0(){},
$S:0}
B.bmu.prototype={
$0(){var x=this.a
x.e=this.b
x.f=D.jR
x.w=x.r=null
x.x=!1
x.ch=x.ax=x.as=null},
$S:0}
B.bmy.prototype={
$0(){var x=this.a
return x.f=x.r!=null?D.h2:D.jR},
$S:0}
B.bmz.prototype={
$0(){var x=this.a
x.f=D.pG
x.as=null},
$S:0}
B.bmA.prototype={
$0(){var x=this.a
x.f=this.b
if(!this.c&&x.as==null)x.as=null},
$S:0}
B.bmC.prototype={
$0(){var x=this.a
x.f=D.pH
x.as=null
x.y=0
x.z=new A.b6(Date.now(),0,!1)
x.ax=null},
$S:0}
B.bmD.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bmB())},
$S:40}
B.bmB.prototype={
$0(){},
$S:0}
B.bmF.prototype={
$1(d){return this.a.y=d},
$S:60}
B.bmE.prototype={
$1(d){return this.a.y4()},
$S:9}
B.bmG.prototype={
$0(){var x,w=this.a
w.f=w.r!=null?D.h2:D.jR
x=this.b
w.as=B.Iq(x)
w.at=x},
$S:0}
B.bmI.prototype={
$0(){var x=this.a
x.f=D.lF
x.ay=Date.now()},
$S:0}
B.bmJ.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bmH())},
$S:40}
B.bmH.prototype={
$0(){},
$S:0}
B.bmt.prototype={
$0(){var x=this.a
x.f=x.r!=null?D.h2:D.jR
x.as=this.b
x.at=this.c},
$S:0}
B.bmv.prototype={
$0(){var x=this.b
x.r=this.c
x.w=this.a.a
x.f=D.h2
x.x=!1},
$S:0}
B.bmm.prototype={
$0(){var x=this.a
x.f=D.lF
x.ay=Date.now()
x.as=null},
$S:0}
B.bmn.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bml())},
$S:40}
B.bml.prototype={
$0(){},
$S:0}
B.bmo.prototype={
$1(d){return d.d!==D.fX},
$S:z+11}
B.bmp.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.bmO.prototype={
$0(){return B.bJS(this.a)},
$S:0}
B.bmP.prototype={
$1(d){var x=this.a.d
return x.oQ(x.b.ads(d))},
$S:5}
B.bmQ.prototype={
$0(){var x=y.z
return A.ao(this.b,!1).cu(A.cn(new B.bmN(this.a),null,x),x)},
$S:0}
B.bmN.prototype={
$1(d){var x=this.a.a
return new B.zV(x.c,x.d,x.e,x.f,null)},
$S:z+12}
B.bmR.prototype={
$0(){this.a.d.a.b0h()
this.b.U(y.q).f.be(D.aKu)},
$S:0}
B.bms.prototype={
$2(d,e){return C.bP},
$S:50}
B.bmr.prototype={
$2(d,e){var x,w,v,u=null,t=this.a,s=t.a,r=s.d+e
switch(t.d.c.Yd(s.c,r).a.a){case 2:s=G.bX
break
case 1:s=D.cV
break
case 0:s=N.hd
break
default:s=u}x=A.ac(18)
w=t.f===D.lF?u:new B.bmq(t,r)
v=s.bT(0.25)
if(r===t.gi4())s=C.i
s=A.d_(s,r===t.gi4()?2:1)
return A.dj(!1,x,!0,A.aC(C.W,A.o(E.aZ(r),u,u,u,u,D.aNE,u,u,u),C.m,u,u,new A.as(v,u,s,u,u,u,C.cw),u,u,u,u,u,u,36),u,!0,u,u,u,u,u,u,u,u,u,u,w,u,u,u,u,u,u,u)},
$S:127}
B.bmq.prototype={
$0(){return this.a.RN(this.b)},
$S:0}
B.bmx.prototype={
$0(){var x=this.a
return x.t(new B.bmw(x))},
$S:0}
B.bmw.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bmK.prototype={
$1(d){return d===D.pt},
$S:z+2}
B.bmL.prototype={
$1(d){return d===D.pu},
$S:z+2}
B.bmM.prototype={
$1(d){return d===D.pv},
$S:z+2}
B.bmf.prototype={
$0(){var x=this.b!=null&&!this.c?1:null
return this.a.Kb(x)},
$S:0}
B.bmg.prototype={
$1(d){var x=this.a.d
return x.oQ(x.b.aRM(d.ga7(d)))},
$S:90}
B.bmi.prototype={
$1(d){return d.m(0,C.E)?C.a3:C.i},
$S:4}
B.bmh.prototype={
$1(d){return d.m(0,C.E)?C.q:C.O},
$S:4}
B.bmj.prototype={
$0(){var x=this.a
return x.RN(x.gi4()+1)},
$S:0}
B.bmk.prototype={
$0(){var x=this.a
return x.RN(x.gi4()+1)},
$S:0}
B.blY.prototype={
$0(){},
$S:0}
B.bm6.prototype={
$0(){var x=this.a
x.e=this.b
x.Q=null
x.x=0
x.z=new A.b6(Date.now(),0,!1)},
$S:0}
B.bm7.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bm5())},
$S:40}
B.bm5.prototype={
$0(){},
$S:0}
B.bm9.prototype={
$1(d){return this.a.x=d},
$S:60}
B.bm8.prototype={
$1(d){return this.a.Bq(this.b,!1)},
$S:9}
B.bma.prototype={
$0(){var x,w=this.a
w.e=null
x=this.b
w.Q=B.Iq(x)
w.as=x},
$S:0}
B.bm1.prototype={
$0(){var x=this.a
x.e=null
x.r.D(0,this.b)},
$S:0}
B.bm2.prototype={
$0(){var x,w=this.a,v=this.b
w.r.I(0,v)
x=this.c
w.w.n(0,v,B.Iq(x))
w.as=x},
$S:0}
B.bm3.prototype={
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
return A.d(n.a.aiN(s.b,B.Ba(H.In(l,m,k.vb(l,m)).b).length),$async$$1)
case 6:r=f
l=o.a
k=l.f
l=l.c
q=B.bI8(H.In(l,m,k.vb(l,m)).b,r.a)
if(C.c.ap(q.c).length!==0){l=n.c
k=o.a.c
j=q.gqi()
l.ahS(k,m,n.b.a,j)}n.wN()
if(o.c!=null)o.t(new B.blZ(o,m,q))
t.push(5)
x=4
break
case 3:v=2
h=u.pop()
o=A.Y(h)
if(o instanceof B.kE){p=o
o=s.a
if(o.c!=null)o.t(new B.bm_(o,s.c,p))}else throw h
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
o=s.a
if(o.c!=null)o.t(new B.bm0(o,s.c))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$$1,w)},
$S:142}
B.blZ.prototype={
$0(){var x=this.c
this.a.f.n(0,this.b,x)
return x},
$S:0}
B.bm_.prototype={
$0(){var x=this.a,w=this.c
x.w.n(0,this.b,B.Iq(w))
x.as=w},
$S:0}
B.bm0.prototype={
$0(){return this.a.r.I(0,this.b)},
$S:0}
B.bm4.prototype={
$0(){var x=this.a
x.f.ah(0)
x.w.ah(0)
x.as=null},
$S:0}
B.bmb.prototype={
$1(d){return d.gqi()},
$S:z+13}
B.bmc.prototype={
$0(){return this.a.Bq(this.b,!0)},
$S:0}
B.bmd.prototype={
$0(){return this.a.CT(this.b)},
$S:0}
B.blP.prototype={
$0(){},
$S:0}
B.blW.prototype={
$2(d,e){return d+this.a.Y4(e)},
$S:92}
B.blX.prototype={
$2(d,e){return d+I.c_[e-1].a[1]},
$S:92}
B.blV.prototype={
$0(){return this.a.Hy(this.b)},
$S:0}
B.blU.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.b,o=A.o(H.jt(p),q,q,q,q,C.p7,q,q,q),n=y.p,m=A.a([],n)
for(x=this.c,w=this.a,v=w.d,u=p*1000,t=1;t<=x;++t){s=new A.bc(10,10)
r=v.c.a.h(0,u+t)
switch((r==null?$.pG():r).a.a){case 2:r=G.bX.bT(0.35)
break
case 1:r=D.cV.bT(0.35)
break
case 0:r=C.yv
break
default:r=q}m.push(A.aC(C.W,A.o(E.aZ(t),q,q,q,q,K.U4,q,q,q),C.m,q,q,new A.as(r,q,q,new A.dl(s,s,s,s),q,q,C.t),q,38,q,q,q,q,38))}return A.dJ(!0,new A.a7(C.iD,A.af(A.a([o,C.aR,D.aVO,C.R,new A.ek(D.Yi,A.ie(A.eM(m,C.ba,6,6),q,C.r,q,q,C.w),q),C.ar,A.bX(D.aWH,q,q,q,new B.blT(w,d,p),q,q)],n),C.ak,C.f,C.a_),q),C.G,!0)},
$S:51}
B.blT.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.b
t=v.c
x=4
return A.d(A.eP(null,new B.blS(t),u,y.y),$async$$0)
case 4:x=e===!0?2:3
break
case 2:x=5
return A.d(v.a.d.Fl(t),$async$$0)
case 5:if(u.e!=null)A.ao(u,!1).es()
case 3:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.blS.prototype={
$1(d){var x=null,w=A.o("\u0647\u062a\u0628\u062f\u0623 "+H.jt(this.a)+" \u0645\u0646 \u0627\u0644\u0623\u0648\u0644.",x,x,x,x,x,x,x,x)
return A.eS(A.a([A.bX(C.wn,x,x,x,new B.blQ(d),x,x),A.bX(D.aY_,x,x,x,new B.blR(d),x,x)],y.p),w,D.aXw)},
$S:20}
B.blQ.prototype={
$0(){A.ao(this.a,!1).bv(!1)
return null},
$S:0}
B.blR.prototype={
$0(){A.ao(this.a,!1).bv(!0)
return null},
$S:0}
B.btk.prototype={
$1(d){var x=this.a
return new A.jI(new B.btj(x),null,x,null)},
$S:916}
B.btj.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.a,r=s.b,q=A.a([],y.n)
for(x=y.c,w=1;w<=5;++w)q.push(new A.eo(w,t,A.o(E.aZ(w),t,t,t,t,t,t,t,t),x))
x=y.S
v=y.b
u=y.p
x=A.a([D.aSA,C.ar,D.aWX,C.S,A.vd(new B.bte(s,r),q,A.cR([r.a],x),!1,A.jw(t,t,t,new A.b3(new B.btf(),v),t,t,t,t,new A.b3(new B.btg(),v),t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),x),C.P,A.rj(C.q,C.G,t,new B.bth(s,r),D.aVr,D.aYx,r.c),A.rj(C.q,C.G,t,new B.bti(s,r),t,D.aSl,r.d)],u)
s=s.x
if(s!=null)C.b.E(x,A.a([C.aR,A.o("\u0627\u0644\u0645\u0639\u0627\u0644\u062c: "+s.glx(),t,t,t,t,F.ag,t,C.aM,t)],u))
x.push(C.P)
x.push(D.V_)
return A.dJ(!0,A.ie(A.af(x,C.ak,C.f,C.h),t,C.r,C.iD,t,C.w),C.G,!0)},
$S:917}
B.bte.prototype={
$1(d){return this.a.oQ(this.b.aRJ(d.ga7(d)))},
$S:90}
B.btg.prototype={
$1(d){return d.m(0,C.E)?C.a3:C.i},
$S:4}
B.btf.prototype={
$1(d){return d.m(0,C.E)?C.q:C.O},
$S:4}
B.bth.prototype={
$1(d){return this.a.oQ(this.b.aRc(d))},
$S:5}
B.bti.prototype={
$1(d){return this.a.oQ(this.b.ads(d))},
$S:5}
B.aTu.prototype={
$0(){return A.f0(A.bY(this.a,0,null),C.c7,null)},
$S:0}
B.bty.prototype={
$1(d){var x,w=A.aP("https?://",!0,!1)
w=A.bQ(d,w,"")
x=A.aP("www\\.",!0,!1)
return A.Bb(A.bQ(w,x,"www[.]"),A.aP("([A-Za-z0-9-]+)\\.(com|net|org|io|xyz|ru|info|me|link)\\b",!1,!1),new B.btz(),null)},
$S:31}
B.btz.prototype={
$1(d){return A.f(d.h(0,1))+"[.]"+A.f(d.h(0,2))},
$S:59}
B.bmS.prototype={
$0(){var x=this.a
x.e=!0
x.r=null},
$S:0}
B.bmT.prototype={
$0(){return this.a.f=!0},
$S:0}
B.bmU.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bmV.prototype={
$0(){return this.a.e=!1},
$S:0}
B.bmX.prototype={
$0(){var x=this.a
return x.t(new B.bmW(x))},
$S:0}
B.bmW.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.btx.prototype={
$1(d){return d==null?"\u2013":A.f(d)},
$S:196};(function installTearOffs(){var x=a._instance_0u
x(B.ab2.prototype,"gaXb","aXc",1)
var w
x(w=B.Qz.prototype,"gaXr","zq",0)
x(w,"gaqJ","um",0)
x(w=B.Ul.prototype,"gn1","v3",1)
x(w,"gaGq","IZ",0)
x(w=B.Wj.prototype,"gn1","v3",1)
x(w,"gaIu","Jf",0)
x(w,"gaLW","y4",0)
x(w,"gavd","Hv",0)
x(w=B.Wi.prototype,"gn1","v3",1)
x(w,"gaJ6","aJ7",1)
x(B.Wh.prototype,"gn1","v3",1)
x(B.Wk.prototype,"gaN8","Kc",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.An,[B.aZt,B.mt,B.Bs,B.Dv,B.AF])
x(A.a5,[B.Yn,B.Dw,B.Sb,B.Aa,B.ab1])
w(B.aVF,A.x5)
x(A.hJ,[B.aVG,B.aTy,B.aTA,B.aTB,B.aTz,B.aL1,B.bqH,B.aTI,B.aTJ,B.aTG,B.bev,B.bew,B.bex,B.ben,B.beq,B.bel,B.bsC,B.bsB,B.bsy,B.bsA,B.bsu,B.bsv,B.bmD,B.bmF,B.bmE,B.bmJ,B.bmn,B.bmo,B.bmP,B.bmN,B.bmK,B.bmL,B.bmM,B.bmg,B.bmi,B.bmh,B.bm7,B.bm9,B.bm8,B.bm3,B.bmb,B.blU,B.blS,B.btk,B.bte,B.btg,B.btf,B.bth,B.bti,B.bty,B.btz,B.btx])
x(A.N,[B.ab2,B.QA,B.FI,B.FK,B.FJ,B.kE,B.NU,B.lT,B.Er,B.pR,B.ab3,B.Qy])
x(A.kc,[B.aTv,B.aTx,B.aTC,B.aTD,B.aTF,B.aTE,B.aL2,B.aTK,B.beu,B.bet,B.beh,B.beo,B.ber,B.bes,B.bek,B.bej,B.bem,B.bei,B.bep,B.bsx,B.bst,B.bss,B.bsw,B.bme,B.bmu,B.bmy,B.bmz,B.bmA,B.bmC,B.bmB,B.bmG,B.bmI,B.bmH,B.bmt,B.bmv,B.bmm,B.bml,B.bmp,B.bmO,B.bmQ,B.bmR,B.bmq,B.bmx,B.bmw,B.bmf,B.bmj,B.bmk,B.blY,B.bm6,B.bm5,B.bma,B.bm1,B.bm2,B.blZ,B.bm_,B.bm0,B.bm4,B.bmc,B.bmd,B.blP,B.blV,B.blT,B.blQ,B.blR,B.aTu,B.bmS,B.bmT,B.bmU,B.bmV,B.bmX,B.bmW])
x(A.mU,[B.aTw,B.bpd,B.aTL,B.aTM,B.bsz,B.bms,B.bmr,B.blW,B.blX,B.btj])
w(B.Qz,A.h9)
x(A.P,[B.uT,B.zW,B.zV,B.zU,B.zX])
x(A.S,[B.Ul,B.Wj,B.Wi,B.Wh,B.Wk])})()
A.o4(b.typeUniverse,JSON.parse('{"Yn":{"a5":[],"e":[]},"kE":{"bm":[]},"zW":{"P":[],"e":[]},"zV":{"P":[],"e":[]},"zU":{"P":[],"e":[]},"zX":{"P":[],"e":[]},"Qz":{"ar":[]},"uT":{"P":[],"e":[]},"Ul":{"S":["uT"]},"Dw":{"a5":[],"e":[]},"Sb":{"a5":[],"e":[]},"Wj":{"S":["zW"]},"Aa":{"a5":[],"e":[]},"Wi":{"S":["zV"]},"Wh":{"S":["zU"]},"ab1":{"a5":[],"e":[]},"Wk":{"S":["zX"]}}'))
var y=(function rtii(){var x=A.a0
return{u:x("pR"),c:x("eo<v>"),r:x("d1<v>"),k:x("y<lT>"),n:x("y<eo<v>>"),I:x("y<d1<v>>"),R:x("y<fW>"),Z:x("y<aH<h,@>>"),d:x("y<NU>"),s:x("y<h>"),p:x("y<e>"),t:x("y<v>"),m:x("bh"),j:x("R<@>"),L:x("R<v>"),P:x("aH<h,@>"),f:x("aH<@,@>"),x:x("aj<h,v>"),a:x("bl"),K:x("N"),B:x("Er"),l:x("+(v,v)"),e:x("cF<lT>"),N:x("h"),C:x("FI"),D:x("FJ"),X:x("QA"),_:x("FK"),U:x("aD<h>"),G:x("mt"),q:x("o1"),b:x("b3<H?>"),y:x("A"),i:x("J"),z:x("@"),S:x("v"),A:x("bh?"),Y:x("aH<@,@>?"),O:x("N?"),M:x("+quota,usage(v,v)?"),o:x("eB"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.lO=new B.Bs(0,"none")
D.lP=new B.Bs(1,"learning")
D.dW=new B.Bs(2,"memorized")
D.Yi=new A.av(0,1/0,0,320)
D.dC=new A.H(1,0.9725490196078431,0.44313725490196076,0.44313725490196076,C.k)
D.Yq=new A.as(D.dC,null,null,null,null,null,C.cw)
D.cV=new A.H(1,0.984313725490196,0.7490196078431373,0.1411764705882353,C.k)
D.ab5=new A.a3(983698,"MaterialIcons",null,!1)
D.ad4=new A.a2(D.ab5,null,C.c4,null,null,null)
D.aXz=new A.t("\u0627\u0644\u0646\u0635 \u0645\u062e\u0641\u064a \u2014 \u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.ei,null,null,null,null,null,null,null,null)
D.aMU=new A.r(!0,C.eS,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVP=new A.t("(\u062f\u0648\u0633 \u0647\u0646\u0627 \u0644\u0648 \u0639\u0627\u064a\u0632 \u062a\u0628\u0635)",null,D.aMU,null,null,null,null,null,null,null,null)
D.aoF=x([D.ad4,C.S,D.aXz,D.aVP],y.p)
D.a3Y=new A.j_(C.w,C.f,C.h,C.j,null,C.b5,null,0,D.aoF,null)
D.a78=new A.a_(0,18,0,18)
D.a7b=new A.a_(0,26,0,26)
D.a7g=new A.a_(0,4,0,6)
D.a7u=new A.a_(14,12,14,14)
D.a84=new A.a_(3,0,0,0)
D.aal=new A.a3(63251,"MaterialIcons",null,!1)
D.mV=new A.a3(63677,"MaterialIcons",null,!1)
D.aaS=new A.a3(983256,"MaterialIcons",null,!1)
D.aaQ=new A.a3(983209,"MaterialIcons",null,!1)
D.abk=new A.a2(D.aaQ,28,C.q,null,null,null)
D.abL=new A.a2(C.AN,null,N.hd,null,null,null)
D.aab=new A.a3(62961,"MaterialIcons",null,!1)
D.ac4=new A.a2(D.aab,null,null,null,null,null)
D.aak=new A.a3(63199,"MaterialIcons",null,!1)
D.ac5=new A.a2(D.aak,null,null,null,null,null)
D.ac9=new A.a2(C.iP,null,C.eS,null,null,null)
D.acb=new A.a2(C.kE,44,C.i,null,null,null)
D.act=new A.a2(D.mV,null,D.dC,null,null,null)
D.acC=new A.a2(C.tl,null,D.dC,null,null,null)
D.acL=new A.a2(C.AI,null,null,null,null,null)
D.acM=new A.a2(D.mV,null,null,null,null,null)
D.Bj=new A.a2(C.mZ,null,null,null,null,null)
D.ad2=new A.a2(C.kB,20,D.cV,null,null,null)
D.ade=new A.a2(C.mX,30,C.q,null,null,null)
D.adv=new A.a2(C.mY,16,C.q,null,null,null)
D.aay=new A.a3(63520,"MaterialIcons",null,!1)
D.adI=new A.a2(D.aay,null,null,null,null,null)
D.adO=new A.a2(C.kD,null,null,null,null,null)
D.aa7=new A.a3(62842,"MaterialIcons",null,!0)
D.adT=new A.a2(D.aa7,null,null,null,null,null)
D.C3=x([1,3,5],y.t)
D.CR=x(["\u0627\u0639\u0648\u0630","\u0628\u0627\u0644\u0644\u0647","\u0645\u0646","\u0627\u0644\u0634\u064a\u0637\u0627\u0646","\u0627\u0644\u0631\u062c\u064a\u0645"],y.s)
D.ayN=new A.a7(C.mA,T.qi,null)
D.ams=x([D.ayN],y.p)
D.aC2=new A.Q(C.iR,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0629 \u0628\u0635\u0648\u062a \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062d\u0635\u0631\u064a (\u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645) \u0645\u0631\u0629 \u0623\u0648 \u0663 \u0623\u0648 \u0665 \u0645\u0631\u0627\u062a.")
D.aBV=new A.Q(D.mV,"\u0633\u0645\u0651\u0639\u0647\u0627 \u0645\u0646 \u062d\u0641\u0638\u0643 \u2014 \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0644\u0648\u0651\u0646\u0644\u0643 \u0643\u0644 \u0643\u0644\u0645\u0629: \u0623\u062e\u0636\u0631 \u0635\u062d\u060c \u0623\u0635\u0641\u0631 \u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0623\u062d\u0645\u0631 \u063a\u0644\u0637.")
D.aCf=new A.Q(C.hq,"\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0645\u0627 \u062a\u0633\u0645\u0651\u0639\u0647\u0627 \u0635\u062d \u0645\u0631\u062a\u064a\u0646 \u0648\u0631\u0627 \u0628\u0639\u0636 (\u062a\u0642\u062f\u0631 \u062a\u063a\u064a\u0651\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a).")
D.aaF=new A.a3(63625,"MaterialIcons",null,!1)
D.aCo=new A.Q(D.aaF,"\u0643\u0644 \u062f\u0647 \u0628\u064a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u2014 \u0635\u0648\u062a\u0643 \u0645\u0634 \u0628\u064a\u062a\u0631\u0641\u0639 \u0639\u0644\u0649 \u0623\u064a \u0633\u064a\u0631\u0641\u0631.")
D.anX=x([D.aC2,D.aBV,D.aCf,D.aCo],A.a0("y<+(a3,h)>"))
D.apG=x([D.lO,D.lP,D.dW],A.a0("y<Bs>"))
D.Hi=x(["\u0628\u0633\u0645","\u0627\u0644\u0644\u0647","\u0627\u0644\u0631\u062d\u0645\u0646","\u0627\u0644\u0631\u062d\u064a\u0645"],y.s)
D.aw7=new B.Dv(0,"idle")
D.Nm=new B.Dv(1,"loading")
D.hI=new B.Dv(2,"ready")
D.aw8=new B.Dv(3,"failed")
D.acr=new A.a2(C.cW,18,G.bX,null,null,null)
D.aYb=new A.t("\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u062c\u0627\u0647\u0632 \u064a\u0633\u0645\u0639\u0643",null,K.pd,null,null,null,null,null,null,null,null)
D.alG=x([D.acr,C.bP,D.aYb],y.p)
D.aHA=new A.jc(C.az,C.f,C.h,C.j,null,C.b5,null,0,D.alG,null)
D.ayb=new A.a7(C.ax,D.aHA,null)
D.a81=new A.a_(2,6,2,4)
D.aMy=new A.r(!0,C.q,null,null,null,null,14,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSz=new A.t("\u0627\u0628\u062f\u0623 \u0645\u0646 \u0647\u0646\u0627 \u2014 \u0627\u0644\u0641\u0627\u062a\u062d\u0629 \u0648\u062c\u0632\u0621 \u0639\u0645\u0651",null,D.aMy,null,null,null,null,null,null,null,null)
D.ayj=new A.a7(D.a81,D.aSz,null)
D.aYj=new A.t("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.ei,null,null,null,null,null,null,null,null)
D.amI=x([O.oV,C.aq,D.aYj],y.p)
D.aHy=new A.jc(C.az,C.cl,C.h,C.j,null,C.b5,null,0,D.amI,null)
D.ayo=new A.a7(P.rb,D.aHy,null)
D.wg=new A.r(!0,D.cV,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYs=new A.t("\u0646\u0635\u064a\u062d\u0629: \u0627\u062d\u0641\u0638 \u0663\u2013\u0665 \u0622\u064a\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0631\u0629 \u0623\u0633\u0647\u0644.",null,D.wg,null,null,null,null,null,null,null,null)
D.ayr=new A.a7(C.hk,D.aYs,null)
D.aY7=new A.t("\u0644\u0633\u0647 \u0645\u0633\u0645\u0651\u0639\u062a\u0634 \u0623\u064a \u0622\u064a\u0629 \u2014 \u0627\u0628\u062f\u0623 \u0628\u0633\u0648\u0631\u0629 \u0642\u0635\u064a\u0631\u0629 \u0645\u0646 \u062c\u0632\u0621 \u0639\u0645\u0651.",null,F.ag,C.af,null,null,null,null,null,null,null)
D.ayw=new A.a7(C.H,D.aY7,null)
D.a7Z=new A.a_(2,0,2,8)
D.aVV=new A.t("\u0627\u0644\u0633\u0648\u0631 \u0627\u0644\u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u060c \u0645\u0646 \u0627\u0644\u0646\u0627\u0633 \u0644\u062d\u062f \u0627\u0644\u0646\u0628\u0623.",null,F.ag,null,null,null,null,null,null,null,null)
D.ayJ=new A.a7(D.a7Z,D.aVV,null)
D.adC=new A.a2(C.hp,30,C.q,null,null,null)
D.aR9=new A.r(!0,C.i,null,null,null,null,17,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYR=new A.t("\u0633\u0645\u0651\u0639\u060c \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0642\u0648\u0644\u0643 \u0635\u062d \u0648\u0644\u0627 \u063a\u0644\u0637",null,D.aR9,null,null,null,null,null,null,null,null)
D.a8F=new A.dE(1,C.aX,D.aYR,null)
D.amU=x([D.adC,C.aY,D.a8F],y.p)
D.aHr=new A.jc(C.az,C.f,C.h,C.j,null,C.b5,null,0,D.amU,null)
D.adl=new A.a2(C.hq,18,G.bX,null,null,null)
D.Ud=new A.r(!0,G.bX,null,null,null,null,12,C.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXT=new A.t("\u0645\u062d\u0641\u0648\u0638\u0629",null,D.Ud,null,null,null,null,null,null,null,null)
D.am3=x([D.adl,C.fN,D.aXT],y.p)
D.aHx=new A.jc(C.az,C.f,C.a_,C.j,null,C.b5,null,0,D.am3,null)
D.aJG=new A.G(0,30)
D.oU=new A.G(1/0,54)
D.aJR=new A.G(1/0,48)
D.aJU=new A.G(1/0,50)
D.aJX=new A.G(1/0,52)
D.aK_=new A.cs(16,null,null,null)
D.aK3=new A.cs(14,14,O.y0,null)
D.aWO=new A.t("safe mode / no-gpu flags cleared (reload)",null,null,null,null,null,null,null,null,null,null)
D.aKu=new A.ig(D.aWO,null,null,null,null,null,null,null,null,null,null,null,null,C.D,!1,null,null,null,C.l,null)
D.aM2=new A.r(!0,C.i,null,null,null,null,14.5,C.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aMq=new A.r(!0,C.a6,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.w9=new A.r(!0,D.dC,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNE=new A.r(!0,C.i,null,null,null,null,12,C.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.i5=new A.r(!0,C.i,null,"AmiriQuranMT",null,null,27,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aP6=new A.r(!0,C.ch,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Ug=new A.r(!0,D.dC,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPt=new A.r(!0,C.q,null,null,null,null,24,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Uk=new A.r(!0,C.i,null,null,null,null,12.5,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPH=new A.r(!0,C.q,null,null,null,null,null,C.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQj=new A.r(!0,D.cV,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQk=new A.r(!0,G.bX,null,null,null,null,null,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQC=new A.r(!0,C.i,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aS_=new A.t("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u062e\u0631 \u0645\u0631\u0629",null,C.i8,null,null,null,null,null,null,null,null)
D.aSl=new A.t("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643 (\u062e\u0628\u0651\u064a \u0627\u0644\u0646\u0635)",null,C.cP,null,null,null,null,null,null,null,null)
D.aSA=new A.t("\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,C.p7,null,null,null,null,null,null,null,null)
D.aSC=new A.t("\u2022 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641: \u0645\u0634\u0631\u0648\u0639 \u062a\u0646\u0632\u064a\u0644 Tanzil (\u062a\u0631\u062e\u064a\u0635 CC BY 3.0).",null,F.ag,null,null,null,null,null,null,null,null)
D.aNC=new A.r(!0,G.bX,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSI=new A.t("\u0648\u0635\u0644\u062a\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2014 \u0634\u0643\u0631\u064b\u0627\u060c \u0647\u0646\u0628\u0635 \u0639\u0644\u064a\u0647\u0627.",null,D.aNC,null,null,null,null,null,null,null,null)
D.aSL=new A.t("\u062e\u0628\u0651\u064a \u0646\u0635 \u0627\u0644\u0622\u064a\u0629 \u0648\u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,F.ag,null,null,null,null,null,null,null,null)
D.aSR=new A.t("\u0639\u062f\u0651\u064a \u0644\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.ei,null,null,null,null,null,null,null,null)
D.aTw=new A.t("\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0627\u0628\u062f\u0623",null,C.cA,null,null,null,null,null,null,null,null)
D.aTU=new A.t("\u064a\u0644\u0627 \u0646\u0628\u062f\u0623",null,C.cR,null,null,null,null,null,null,null,null)
D.aTY=new A.t("\u0645\u0645\u0643\u0646 \u062a\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 \u062f\u0644\u0648\u0642\u062a\u064a \u0644\u062d\u062f \u0645\u0627 \u064a\u062e\u0644\u0635.",null,F.ag,null,null,null,null,null,null,null,null)
D.aUf=new A.t("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.Uv,null,null,null,null,null,null,null,null)
D.aUC=new A.t("\u062c\u0631\u0651\u0628 \u0639\u0644\u0649 \u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a (\u0644\u0644\u062a\u062c\u0631\u0628\u0629)",null,null,null,null,null,null,null,null,null,null)
D.aUW=new A.t("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643",null,K.lp,null,null,null,null,null,null,null,null)
D.aVi=new A.t("reset safe mode / WebGPU ban",null,P.U0,null,null,null,null,null,null,null,null)
D.aVn=new A.t("\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629",null,D.wg,null,null,null,null,null,null,null,null)
D.aVr=new A.t("\u0628\u0639\u062f \u062d\u0648\u0627\u0644\u064a \u062b\u0627\u0646\u064a\u0629 \u0633\u0643\u0648\u062a",null,F.ag,null,null,null,null,null,null,null,null)
D.aVG=new A.t("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636",null,F.aZ,null,null,null,null,null,null,null,null)
D.aVO=new A.t("\u0623\u062e\u0636\u0631: \u0645\u062d\u0641\u0648\u0638\u0629 \u2014 \u0623\u0635\u0641\u0631: \u0628\u062a\u0631\u0627\u062c\u0639\u0647\u0627 \u2014 \u0631\u0645\u0627\u062f\u064a: \u0644\u0633\u0647",null,F.ag,null,null,null,null,null,null,null,null)
D.aVW=new A.t("\u0645\u0641\u064a\u0634 \u0633\u0648\u0631\u0629 \u0628\u0627\u0644\u0627\u0633\u0645 \u062f\u0647",null,F.ag,null,null,null,null,null,null,null,null)
D.aRb=new A.r(!0,C.q,null,null,null,null,12.5,C.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWG=new A.t("\u0627\u0628\u0639\u062a \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aRb,null,null,null,null,null,null,null,null)
D.aOR=new A.r(!0,D.dC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWH=new A.t("\u0627\u0628\u062f\u0623 \u0627\u0644\u0633\u0648\u0631\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644",null,D.aOR,null,null,null,null,null,null,null,null)
D.aWX=new A.t("\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f \u0643\u0627\u0645 \u062a\u0633\u0645\u064a\u0639 \u0635\u062d \u0648\u0631\u0627 \u0628\u0639\u0636\u061f",null,K.lp,null,null,null,null,null,null,null,null)
D.aLQ=new A.r(!0,C.i,null,null,null,null,null,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXb=new A.t("\u0627\u0644\u0645\u0635\u0627\u062f\u0631",null,D.aLQ,null,null,null,null,null,null,null,null)
D.aXk=new A.t("\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.cA,null,null,null,null,null,null,null,null)
D.aXw=new A.t("\u062a\u0645\u0633\u062d \u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0633\u0648\u0631\u0629 \u062f\u064a\u061f",null,null,null,null,null,null,null,null,null,null)
D.aXF=new A.t("\u0633\u0645\u0651\u0639\u0647\u0645 \u062a\u0627\u0646\u064a",null,null,null,null,null,null,null,null,null,null)
D.aY_=new A.t("\u0627\u0645\u0633\u062d",null,null,null,null,null,null,null,null,null,null)
D.aY0=new A.t("\u2022 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: whisper-base-ar-quran \u0645\u0646 Tarteel (\u062a\u0631\u062e\u064a\u0635 Apache-2.0)\u060c \u0628\u0635\u064a\u063a\u0629 ONNX \u0645\u0646 \u0645\u0634\u0631\u0648\u0639 Basira\u060c \u0648\u0628\u064a\u0634\u062a\u063a\u0644 \u062c\u0648\u0651\u0647 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0628\u0645\u0643\u062a\u0628\u0629 Transformers.js.",null,F.ag,null,null,null,null,null,null,null,null)
D.aY1=new A.t("\u062e\u0644\u0635\u062a",null,C.jD,null,null,null,null,null,null,null,null)
D.aY2=new A.t("\u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647 \u0630\u0627\u0643\u0631\u062a\u0647 \u0642\u0644\u064a\u0644\u0629 \u2014 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0645\u0643\u0646 \u064a\u0643\u0648\u0646 \u0628\u0637\u064a\u0621 \u0639\u0644\u064a\u0647.",null,D.wg,null,null,null,null,null,null,null,null)
D.aPJ=new A.r(!0,C.ch,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,C.fQ,null,null,null,null,null,null,null,null)
D.aYo=new A.t("\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aPJ,null,null,null,null,null,null,null,null)
D.aYv=new A.t("\u0623\u0648\u0644 \u0645\u0631\u0629 \u0628\u0633: \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,F.aZ,null,null,null,null,null,null,null,null)
D.aYx=new A.t("\u0648\u0642\u0651\u0641 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0644\u0648\u062d\u062f\u0647 \u0644\u0645\u0627 \u0623\u0633\u0643\u062a",null,C.cP,null,null,null,null,null,null,null,null)
D.aYQ=new A.t("\u2022 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: \u0627\u0644\u0634\u064a\u062e \u0645\u062d\u0645\u0648\u062f \u062e\u0644\u064a\u0644 \u0627\u0644\u062d\u0635\u0631\u064a \u2014 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645\u060c \u0645\u0646 everyayah.com.",null,F.ag,null,null,null,null,null,null,null,null)
D.V_=new B.ab1(null)
D.aZt=new B.zU(null)
D.aZu=new B.Qy(2,1,!0,!1,!1)
D.V0=new B.QA(!1,!1,!1,!1,!1,0)
D.fX=new B.mt(0,"ok")
D.pt=new B.mt(1,"near")
D.pu=new B.mt(2,"wrong")
D.pv=new B.mt(3,"missing")
D.Vp=new B.mt(4,"extra")
D.aau=new A.a3(63456,"MaterialIcons",null,!1)
D.b3Q=new B.Aa(D.cV,D.aau,"\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629","\u0642\u0631\u0651\u0628 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0646\u0643 \u0648\u0627\u0642\u0631\u0627 \u0628\u0635\u0648\u062a \u0648\u0627\u0636\u062d \u0641\u064a \u0645\u0643\u0627\u0646 \u0647\u0627\u062f\u064a\u060c \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a.",null)
D.jK=new B.aZt(0,"flat")
D.b4a=new B.Sb(!1,null)
D.wL=new B.Sb(!0,null)
D.jR=new B.AF(0,"idle")
D.pG=new B.AF(1,"playing")
D.pH=new B.AF(2,"recording")
D.lF=new B.AF(3,"thinking")
D.h2=new B.AF(4,"result")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c8F","byX",()=>new B.ab2())
x($,"cbP","bNC",()=>A.aP("\u0640[\u064b-\u0652]*\u0670",!0,!1))
x($,"cbQ","bND",()=>A.aP("\u0640[\u064b-\u0652]*[\u06e6\u06e7]",!0,!1))
x($,"cc0","bNL",()=>A.aP("\u0648\u0670",!0,!1))
x($,"cbo","bNj",()=>A.aP("[\u0648\u064a\u0649][\u064b-\u0652]*[\u0654]",!0,!1))
x($,"c9V","bMl",()=>A.aP("\u0627[\u0654\u0655]",!0,!1))
x($,"cb1","bN2",()=>A.aP("[\u0654\u0655]",!0,!1))
x($,"c9W","bMm",()=>A.aP("[\u0622\u0623\u0625\u0671\u0672\u0673]",!0,!1))
x($,"ca1","bMr",()=>A.aP("[\u0624\u0626]",!0,!1))
x($,"cb3","bN4",()=>A.aP("[\u064b-\u065f\u0670\u06d6-\u06ed\u08d3-\u08ff\u0640]",!0,!1))
x($,"cbt","bNm",()=>A.aP("[\u06dd\u06de\u0660-\u0669\u06f0-\u06f90-9]",!0,!1))
x($,"cba","bNa",()=>A.aP("[^\u0621-\u064a\\s]",!0,!1))
x($,"cbO","bzx",()=>A.aP("\\s+",!0,!1))
x($,"c6_","pG",()=>B.bOE(D.lO,0,A.buN(0,!0)))
x($,"c8G","Ix",()=>new B.Qz($.byX(),D.aZu,B.bWw(),D.aw7,$.a6()))})()};
(a=>{a["lFpTXxzk9v21L7fwA0qaA0ACFu4="]=a.current})($__dart_deferred_initializers__);