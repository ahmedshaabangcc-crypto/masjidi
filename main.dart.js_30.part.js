((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,Q,R,H,N,G,O,S,T,K,L,B={aZU:function aZU(d,e){this.a=d
this.b=e},Yq:function Yq(d,e,f){this.d=d
this.r=e
this.a=f},aVG:function aVG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4){var _=this
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
_.dy=a4},aVH:function aVH(d){this.a=d},
bWZ(d){var x,w,v,u,t,s
if(d instanceof B.kF)return d
try{x=A.cn(d)
w=x.code
v=x.message
u=w==null?"failed":A.aa(w)
t=v==null?"":A.aa(v)
return new B.kF(u,t)}catch(s){u=A.f(d)
return new B.kF("failed",u)}},
ab4:function ab4(){this.b=this.a=null},
aTw:function aTw(d){this.a=d},
aTz:function aTz(){},
aTy:function aTy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aTx:function aTx(d){this.a=d},
aTD:function aTD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aTB:function aTB(d){this.a=d},
aTC:function aTC(d){this.a=d},
aTE:function aTE(d){this.a=d},
aTG:function aTG(d,e,f){this.a=d
this.b=e
this.c=f},
aTF:function aTF(d,e,f){this.a=d
this.b=e
this.c=f},
aTA:function aTA(){},
bX_(d,e){return new B.kF(d,e)},
QC:function QC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.w=i},
FJ:function FJ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i
_.w=j},
FL:function FL(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
FK:function FK(d,e){this.a=d
this.b=e},
kF:function kF(d,e){this.a=d
this.b=e},
bJE(d){var x,w=$.bO6()
w=A.bS(d,w,"\u0627")
x=$.bO7()
w=A.bS(w,x,"\u064a")
x=$.bOf()
w=A.bS(w,x,"\u0627")
x=$.bMQ()
w=A.bS(w,x,"\u0627")
x=$.bNO()
w=A.bS(w,x,"\u0621")
x=$.bNx()
w=A.bS(w,x,"\u0621")
x=$.bMR()
w=A.bS(w,x,"\u0627")
x=$.bMW()
w=A.bS(w,x,"\u0621")
w=A.bS(w,"\u0649","\u064a")
w=A.bS(w,"\u0629","\u0647")
x=$.bNz()
w=A.bS(w,x,"")
x=$.bNR()
w=A.bS(w,x," ")
x=$.bNF()
w=A.bS(w,x," ")
x=$.bzZ()
return C.c.ap(A.bS(w,x," "))},
c0p(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.length,k=e.length
if(l===0)return k
if(k===0)return l
x=k+1
w=y.S
v=J.lk(x,w)
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
bu8(d,e){var x,w,v,u,t,s
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
s=1-B.c0p(d,e)/u
return s>=1?0.99:s},
Bc(d){var x,w,v,u,t,s,r,q=A.a([],y.d)
for(x=C.c.qN(d,$.bzZ()),w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.length===0)continue
t=B.bJE(u)
s=A.bS(t," ","")
if(s.length===0){if(q.length!==0){r=q.pop()
q.push(new B.NV(r.a+" "+u,r.b))}continue}q.push(new B.NV(u,s))}return q},
c_b(d,e){var x,w,v,u,t=new B.bpG(),s=A.a([],y.s)
for(x=A.fb(e,0,A.i0(5,"count",y.S),A.ae(e).c),w=x.$ti,x=new A.bN(x,x.gK(0),w.i("bN<aI.E>")),w=w.i("aI.E");x.u();){v=x.d
s.push((v==null?w.a(v):v).b)}u=!t.$2(s,D.CT)&&t.$2(d,D.CT)?C.b.iq(d,5):d
return!t.$2(s,D.Hl)&&t.$2(u,D.Hl)?C.b.iq(u,4):u},
bID(d,e){var x=B.Bc(d),w=B.bJE(e),v=y.U
v=A.a2(new A.aE(A.a(w.split(" "),y.s),new B.br9(),v),v.i("M.E"))
return new B.Es(x,B.bZp(x,B.c_b(v,x)),w)},
bZp(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=A.a([],y.s)
for(x=a5.length,w=0;w<a5.length;a5.length===x||(0,A.B)(a5),++w)a4.push(a5[w].b)
v=a4.length
u=a6.length
t=u+1
x=(v+1)*t
s=y.i
r=A.c3(x,0,!1,s)
q=A.c3(x,0,!1,y.S)
p=A.c3(v*(u===0?1:u),0,!1,s)
for(o=0;o<v;++o)for(x=o*u,n=0;n<u;++n)p[x+n]=B.bu8(a4[o],a6[n])
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
e=2}if(n>=2&&r[h-2]<g&&B.bu8(a4[m],a6[n-2]+a6[n-1])>=1){g=r[h-2]
e=3}if(s&&r[i+n-1]<g&&B.bu8(a4[j]+a4[m],a6[n-1])>=1){g=r[i+n-1]
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
if(a2>=1)m=D.fZ
else m=a2>=0.6?D.pq:D.pr
a1.push(new B.lT(o,x,s,m))
break
case 1:--o
a1.push(new B.lT(o,a4[o],null,D.ps))
break
case 2:--n
a1.push(new B.lT(null,null,a6[n],D.Vs))
break
case 3:--o
a3=n-2
a1.push(new B.lT(o,a4[o],a6[a3]+" "+a6[n-1],D.fZ))
n=a3
break
default:x=o-1;--n
a1.push(new B.lT(x,a4[x],a6[n],D.fZ))
o-=2
a1.push(new B.lT(o,a4[o],a6[n],D.fZ))}}a4=y.e
a4=A.a2(new A.cG(a1,a4),a4.i("aI.E"))
return a4},
mt:function mt(d,e){this.a=d
this.b=e},
NV:function NV(d,e){this.a=d
this.b=e},
lT:function lT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Es:function Es(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
aL3:function aL3(d){this.a=d},
aL2:function aL2(){},
bpG:function bpG(){},
br9:function br9(){},
bP8(d,e,f){return new B.pS(d,e,f)},
c1e(d){var x
A:{if("memorized"===d){x=D.dY
break A}if("learning"===d){x=D.lP
break A}x=D.lO
break A}return x},
bKB(d,e){return d>=1&&d<=114&&e>=1&&e<=I.c1[d-1].a[1]},
bX0(){var x=y.S
return new B.ab5(A.x(x,y.u),A.aD(x))},
aTI(d){var x=d.kh()
return C.c.dk(C.e.j(A.cF(x)),4,"0")+"-"+C.c.dk(C.e.j(A.cg(x)),2,"0")+"-"+C.c.dk(C.e.j(A.cv(x)),2,"0")},
bFL(d){var x=y.x,w=A.a2(new A.aj(A.a(d.split("-"),y.s),A.c2u(),x),x.i("aI.E"))
return B.aTI(A.jz(w[0],w[1],w[2]-1,12,0,0,0))},
bx7(d){var x,w,v,u,t,s,r,q,p=y.S,o=A.x(p,y.u),n=A.aD(p),m=new B.ab5(o,n),l=d.h(0,"rows")
if(y.f.b(l))for(x=l.gdH(),x=x.ga0(x),w=y.j;x.u();){v=x.gL()
u=A.f9(A.f(v.a),null)
t=v.b
v=!0
if(u!=null)if(w.b(t))if(J.bk(t)>=3){v=C.e.bc(u,1000)
s=C.e.af(u,1000)
v=!(v>=1&&v<=114&&s>=1&&s<=I.c1[v-1].a[1])}if(v)continue
v=J.br(t)
r=C.d.bT(A.dl(v.h(t,0)))
if(r<0||r>=3)continue
o.n(0,u,new B.pS(D.apS[r],C.d.bT(A.dl(v.h(t,1))),new A.b6(A.ki(C.d.bT(A.dl(v.h(t,2))),0,!0),0,!0)))}q=d.h(0,"dirty")
if(y.j.b(q)){x=J.buJ(q,y.o)
p=A.ne(x,new B.aTH(),x.$ti.i("M.E"),p)
n.E(0,new A.aE(p,o.gVK(),A.w(p).i("aE<M.E>")))}m.c=A.W(d.h(0,"last"))
p=A.bK(d.h(0,"streak"))
p=p==null?null:C.d.bT(p)
p=m.d=p==null?0:p
o=A.bK(d.h(0,"best"))
o=o==null?null:C.d.bT(o)
m.e=o==null?p:o
return m},
aqb(d,e){return"https://everyayah.com/data/Husary_Muallim_128kbps/"+C.c.dk(C.e.j(d),3,"0")+C.c.dk(C.e.j(e),3,"0")+".mp3"},
Bu:function Bu(d,e){this.a=d
this.b=e},
pS:function pS(d,e,f){this.a=d
this.b=e
this.c=f},
ab5:function ab5(d,e){var _=this
_.a=d
_.b=e
_.c=null
_.e=_.d=0},
aTJ:function aTJ(){},
aTK:function aTK(){},
aTH:function aTH(){},
QA:function QA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bUz(){return new B.uS(null)},
c4U(d,e){var x,w,v,u,t={},s=I.c1[e-1].a[1],r=$.Iy().c
t.a=1
x=r.a
w=e*1000
v=1
for(;;){if(v<=s){v=x.h(0,w+v)
v=(v==null?$.pH():v).a===D.dY}else v=!1
if(!v)break
v=++t.a}x=t.a
if(x>s){t.a=1
u=1}else u=x
x=s<=10
if(x)u=1
t.b=u
t.c=x?s:C.e.cw(u+4,1,s)
return A.fv(C.d6,new B.bt5(t,s,e),d,!0,null,null,!1,y.l)},
byO(d){return A.d2(0,0,0,0,0,C.e.cw(C.d.ao(6+d*1.2),25,90))},
bxN(d){return E.aZ(C.e.bc(d,60))+":"+C.c.dk(E.aZ(C.e.af(d,60)),2,"\u0660")},
bKm(d){return A.fv(C.d6,new B.btO($.Iy()),d,!0,null,null,!1,y.H)},
Ir(d){var x,w=d.a
A:{if("timeout"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0627\u062a\u0623\u062e\u0631 \u0623\u0648\u064a \u0648\u0645\u0631\u062f\u0651\u0634\u060c \u0641\u0648\u0642\u0651\u0641\u0646\u0627\u0647 \u0648\u062c\u0631\u0651\u0628\u0646\u0627 \u062a\u0627\u0646\u064a \u0628\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0623\u062e\u0641 \u0648\u0645\u0646\u0641\u0639\u0634. \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}if("crashed"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0642\u0641 \u0641\u062c\u0623\u0629 (\u063a\u0627\u0644\u0628\u064b\u0627 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0634 \u0645\u0643\u0641\u064a\u0629). \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}x=d.gjM()
break A}return x},
c6b(d,e,f){var x,w=new B.bu1(),v=w.$1(f),u=w.$1("\xab\u0627\u0644\u0645\u062d\u0641\u0651\u0638\xbb \u0645\u0634\u0643\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 ("+e+")\n"+d.a+": "+d.b+"\n"),t=1990-u.length
if(v.length>t)v=t<=1?"":C.c.Y(v,0,t-1)+"\u2026"
x=u+v
return x.length>1990?C.c.Y(x,0,1990):x},
bKw(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
try{x=y.P.a(C.a_.eS(a4,null))
s=y.Y
r=s.a(J.b8(x,"rec"))
w=r==null?C.eF:r
q=s.a(J.b8(x,"last"))
v=q==null?C.eF:q
u=new B.bu0()
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
Dw:function Dw(d,e){this.a=d
this.b=e},
QB:function QB(d,e,f,g,h){var _=this
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
aTL:function aTL(d){this.a=d},
aTM:function aTM(d){this.a=d},
aTN:function aTN(d){this.a=d},
uS:function uS(d){this.a=d},
Uo:function Uo(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.w=_.r=null},
beW:function beW(d){this.a=d},
beV:function beV(d,e){this.a=d
this.b=e},
beX:function beX(d){this.a=d},
beU:function beU(d,e){this.a=d
this.b=e},
beY:function beY(){},
beI:function beI(){},
beO:function beO(d,e,f){this.a=d
this.b=e
this.c=f},
beP:function beP(){},
beS:function beS(d){this.a=d},
beR:function beR(){},
beT:function beT(d){this.a=d},
beL:function beL(d,e){this.a=d
this.b=e},
beM:function beM(d){this.a=d},
beK:function beK(){},
beN:function beN(d){this.a=d},
beJ:function beJ(d){this.a=d},
beQ:function beQ(d,e){this.a=d
this.b=e},
Dx:function Dx(d,e,f){this.c=d
this.d=e
this.a=f},
Se:function Se(d,e){this.c=d
this.a=e},
bt5:function bt5(d,e,f){this.a=d
this.b=e
this.c=f},
bt2:function bt2(d,e,f){this.a=d
this.b=e
this.c=f},
bt4:function bt4(d,e){this.a=d
this.b=e},
bt1:function bt1(d,e){this.a=d
this.b=e},
bt0:function bt0(d,e){this.a=d
this.b=e},
bt3:function bt3(d,e){this.a=d
this.b=e},
bsX:function bsX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bsW:function bsW(d,e,f){this.a=d
this.b=e
this.c=f},
bsY:function bsY(d){this.a=d},
bsZ:function bsZ(d){this.a=d},
bt_:function bt_(d,e){this.a=d
this.b=e},
AH:function AH(d,e){this.a=d
this.b=e},
zY:function zY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Wm:function Wm(d,e){var _=this
_.d=d
_.e=$
_.f=e
_.w=_.r=null
_.x=!1
_.y=0
_.ax=_.at=_.as=_.Q=_.z=null
_.ay=0
_.c=_.a=_.ch=null},
bmH:function bmH(){},
bmX:function bmX(d,e){this.a=d
this.b=e},
bn0:function bn0(d){this.a=d},
bn1:function bn1(d){this.a=d},
bn2:function bn2(d,e,f){this.a=d
this.b=e
this.c=f},
bn4:function bn4(d){this.a=d},
bn5:function bn5(d){this.a=d},
bn3:function bn3(){},
bn7:function bn7(d){this.a=d},
bn6:function bn6(d){this.a=d},
bn8:function bn8(d,e){this.a=d
this.b=e},
bna:function bna(d){this.a=d},
bnb:function bnb(d){this.a=d},
bn9:function bn9(){},
bmW:function bmW(d,e,f){this.a=d
this.b=e
this.c=f},
bmY:function bmY(d,e,f){this.a=d
this.b=e
this.c=f},
bmP:function bmP(d){this.a=d},
bmQ:function bmQ(d){this.a=d},
bmO:function bmO(){},
bmR:function bmR(){},
bmS:function bmS(d,e){this.a=d
this.b=e},
bng:function bng(d){this.a=d},
bnh:function bnh(d){this.a=d},
bni:function bni(d,e){this.a=d
this.b=e},
bnf:function bnf(d){this.a=d},
bnj:function bnj(d,e){this.a=d
this.b=e},
bmV:function bmV(){},
bmU:function bmU(d){this.a=d},
bmT:function bmT(d,e){this.a=d
this.b=e},
bn_:function bn_(d){this.a=d},
bmZ:function bmZ(d){this.a=d},
bnc:function bnc(){},
bnd:function bnd(){},
bne:function bne(){},
bmI:function bmI(d,e,f){this.a=d
this.b=e
this.c=f},
bmJ:function bmJ(d){this.a=d},
bmL:function bmL(){},
bmK:function bmK(){},
bmM:function bmM(d){this.a=d},
bmN:function bmN(d){this.a=d},
Ac:function Ac(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
zX:function zX(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Wl:function Wl(d,e,f,g,h){var _=this
_.d=d
_.e=null
_.f=e
_.r=f
_.w=g
_.x=0
_.as=_.Q=_.z=_.y=null
_.at=h
_.c=_.a=null},
bmq:function bmq(){},
bmz:function bmz(d,e){this.a=d
this.b=e},
bmA:function bmA(d){this.a=d},
bmy:function bmy(){},
bmC:function bmC(d){this.a=d},
bmB:function bmB(d,e){this.a=d
this.b=e},
bmD:function bmD(d,e){this.a=d
this.b=e},
bmu:function bmu(d,e){this.a=d
this.b=e},
bmv:function bmv(d,e,f){this.a=d
this.b=e
this.c=f},
bmw:function bmw(d,e,f){this.a=d
this.b=e
this.c=f},
bmr:function bmr(d,e,f){this.a=d
this.b=e
this.c=f},
bms:function bms(d,e,f){this.a=d
this.b=e
this.c=f},
bmt:function bmt(d,e){this.a=d
this.b=e},
bmx:function bmx(d){this.a=d},
bmE:function bmE(){},
bmF:function bmF(d,e){this.a=d
this.b=e},
bmG:function bmG(d,e){this.a=d
this.b=e},
zW:function zW(d){this.a=d},
Wk:function Wk(d){this.d=d
this.c=this.a=null},
bmh:function bmh(){},
bmo:function bmo(d){this.a=d},
bmp:function bmp(){},
bmn:function bmn(d,e){this.a=d
this.b=e},
bmm:function bmm(d,e,f){this.a=d
this.b=e
this.c=f},
bml:function bml(d,e,f){this.a=d
this.b=e
this.c=f},
bmk:function bmk(d){this.a=d},
bmi:function bmi(d){this.a=d},
bmj:function bmj(d){this.a=d},
btO:function btO(d){this.a=d},
btN:function btN(d){this.a=d},
btI:function btI(d,e){this.a=d
this.b=e},
btK:function btK(){},
btJ:function btJ(){},
btL:function btL(d,e){this.a=d
this.b=e},
btM:function btM(d,e){this.a=d
this.b=e},
ab3:function ab3(d){this.a=d},
aTv:function aTv(d){this.a=d},
bu1:function bu1(){},
bu2:function bu2(){},
zZ:function zZ(d,e,f){this.c=d
this.d=e
this.a=f},
Wn:function Wn(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.r=null},
bnk:function bnk(d){this.a=d},
bnl:function bnl(d){this.a=d},
bnm:function bnm(d,e){this.a=d
this.b=e},
bnn:function bnn(d){this.a=d},
bnp:function bnp(d){this.a=d},
bno:function bno(d){this.a=d},
bu0:function bu0(){}},D,P,I,E,F
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
K=c[39]
L=c[37]
B=a.updateHolder(c[8],B)
D=c[40]
P=c[27]
I=c[28]
E=c[16]
F=c[18]
B.aZU.prototype={
M(){return"_ChipVariant."+this.b}}
B.Yq.prototype={
C(d){var x=null
A.T(d)
return A.aJC(!1,x,C.fq,x,x,x,x,C.m,x,new B.aVG(d,!0,D.jJ,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,C.ox,x,x,x,x,x,x,x,x),x,x,x,x,x,x,x,x,!0,this.d,x,x,x,x,x,this.r,x,x,x,!1,x,x,x,x,x,x,x,!0,x,x)}}
B.aVG.prototype={
goZ(){var x,w=this,v=w.go
if(v===$){x=A.T(w.fr)
w.go!==$&&A.aC()
v=w.go=x.ax}return v},
gdT(){if(this.fy===D.jJ)var x=0
else x=this.fx?1:0
return x},
gwf(){return 1},
gfW(){var x,w=this,v=w.id
if(v===$){x=A.T(w.fr)
w.id!==$&&A.aC()
v=w.id=x.ok}x=v.as
if(x==null)x=null
else x=x.cB(w.fx?w.goZ().k3:w.goZ().k3)
return x},
gcL(){return new A.b3(new B.aVH(this),y.b)},
gcb(){if(this.fy===D.jJ)var x=C.O
else{x=this.goZ().x1
if(x==null)x=C.x}return x},
gcp(){return C.O},
grM(){return null},
gvq(){return null},
gek(){var x,w,v=this
if(v.fy===D.jJ)if(v.fx){x=v.goZ()
w=x.to
if(w==null){w=x.p
x=w==null?x.k3:w}else x=w
x=new A.b4(x,1,C.B,-1)}else{x=v.goZ().k3
x=new A.b4(A.az(31,x.v()>>>16&255,x.v()>>>8&255,x.v()&255),1,C.B,-1)}else x=C.jV
return x},
ghs(){var x=null
return new A.dG(18,x,x,x,x,this.fx?this.goZ().b:this.goZ().k3,x,x,x)},
gcN(){return C.ev},
gtm(){var x=this.gfW(),w=x==null?null:x.r
if(w==null)w=14
x=A.bX(this.fr,C.bm)
x=x==null?null:x.gdd()
x=A.or(C.iG,C.dn,A.C((x==null?C.aV:x).ba(w)/14-1,0,1))
x.toString
return x}}
B.ab4.prototype={
pd(){var x=this,w=x.a
if(w!=null)return A.dF(w,y.m)
w=x.b
return w==null?x.b=new B.aTw(x).$0():w},
r6(d,e){return this.ayv(d,e,e)},
ayv(d,e,f){var x=0,w=A.n(f),v,u=2,t=[],s,r,q,p
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
r=B.bWZ(s)
throw A.p(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$r6,w)},
mP(d,e){var x=A.hr(d[e])
if(x==null)x=null
return x===!0},
GU(){var x=0,w=A.n(y.X),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$GU=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
h=A
g=A
x=7
return A.d(s.pd(),$async$GU)
case 7:r=h.cn(g.ce(e,"support",null,null,null,null))
q=s.mP(r,"worker")
p=s.mP(r,"wasm")
o=s.mP(r,"mic")
n=s.mP(r,"audio")
s.mP(r,"webgpu")
m=s.mP(r,"secure")
s.mP(r,"ios")
l=A.jq(r.memory)
if(l==null)l=null
if(l==null)l=0
s.mP(r,"isolated")
k=A.jq(r.cores)
if(k!=null)C.d.ao(k)
v=new B.QC(q,p,o,n,m,l)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=D.V3
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$GU,w)},
AA(){var x=0,w=A.n(y.M),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$AA=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=A
l=A
k=A
x=8
return A.d(s.pd(),$async$AA)
case 8:x=7
return A.d(m.dY(l.cn(k.ce(e,"storage",null,null,null,null)),y.A),$async$AA)
case 7:r=e
if(r==null){v=null
x=1
break}q=C.d.ao(A.dg(r.quota))
p=C.d.ao(A.dg(r.usage))
v=new A.akf(q,p)
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
return A.m($async$AA,w)},
b_3(){var x=y.K
A.Ll(this.pd().bI(new B.aTz(),x),x)},
pc(d,e){var x=A.jq(d[e])
x=x==null?null:C.d.ao(x)
return x==null?0:x},
aXz(d,e,f){return this.r6(new B.aTy(this,d,e,f),y.C)},
ga9n(){var x,w
try{x=A.jr(b.G.sessionStorage)
return x}catch(w){return null}},
gag1(){var x=A.hr(b.G.mogtama3yTutorIsolated)
if(x==null)x=null
return x===!0},
a_U(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
try{m=b.G
l=A.hr(m.crossOriginIsolated)
if(l==null)l=f
if(l===!0)return!1
if(this.gag1())return!1
l=A.hr(m.isSecureContext)
if(l==null)l=f
if(l!==!0)return!1
x=A.cn(m.navigator)
if(!("serviceWorker" in x))return!1
w=A.aa(x.userAgent)
l=A.jq(x.maxTouchPoints)
k=l==null?f:l
v=k==null?0:k
l=A.W(x.platform)
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
l=this.ga9n()
l=l==null?f:A.W(A.ce(l,"getItem","mt.tutor.iso",f,f,f))
if(l==null)l=f
p=A.f9(l==null?"":l,f)
if(p!=null&&q-p<3e4)return!1
o=A.jr(m.localStorage)
m=o
m=m==null?f:A.W(A.ce(m,"getItem","mt.tutor.noiso",f,f,f))
if(m==null)m=f
n=A.f9(m==null?"":m,f)
if(n!=null&&q-n<2592e5)return!1
return!0}catch(g){return!1}},
aeH(){var x,w,v,u,t,s,r=null
try{x=this.ga9n()
if(x!=null)A.ce(x,"setItem","mt.tutor.iso",""+Date.now(),r,r)}catch(w){}x=b.G
v=A.cn(x.location)
u=A.aa(v.hash)
t=A.aa(v.search)
s=A.bW(A.aa(A.cn(x.document).baseURI),0,r).W("tutor/").j(0)
x=u.length===0?"#/masjid/tools/tutor":u
A.ce(v,"replace",s+t+x,r,r,r)},
aXj(){var x,w=null,v=b.G,u=A.cn(v.history),t=A.jq(u.length),s=t==null?w:t
if((s==null?0:s)>1)A.ce(u,"back",w,w,w,w)
else{x=A.aa(A.cn(v.document).baseURI)
A.ce(A.cn(v.location),"replace",A.bW(x,0,w).W("./").j(0)+"#/",w,w,w)}},
a05(d,e,f,g,h){return this.r6(new B.aTD(this,e,d,f,h,g),y.H)},
a08(){return this.r6(new B.aTE(this),y.D)},
Vn(){var x=null,w=this.a
if(w!=null)A.ce(w,"cancelRecording",x,x,x,x)},
aaA(d){var x,w,v=this,u=A.W(d.text)
if(u==null)u=null
if(u==null)u=""
x=v.pc(d,"ms")
w=A.jq(d.seconds)
if(w==null)w=null
if(w==null)w=0
return new B.FL(u,x,w,v.pc(d,"frames"),v.pc(d,"tokens"),v.mP(d,"retried"),v.pc(d,"encMs"),v.pc(d,"decMs"),v.pc(d,"featMs"))},
a7t(d){var x={}
x.words=d
return x},
aiQ(d,e){return this.r6(new B.aTG(this,d,e),y._)},
b1e(d,e){return this.r6(new B.aTF(this,d,e),y._)},
F8(d,e){return this.b_8(d,e)},
b_8(d,e){var x=0,w=A.n(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$F8=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=p==null?7:9
break
case 7:x=10
return A.d(s.pd(),$async$F8)
case 10:x=8
break
case 9:g=p
case 8:r=g
o=A.ae(d).i("aj<1,h>")
o=A.a2(new A.aj(d,new B.aTA(),o),o.i("aI.E"))
x=11
return A.d(A.dY(A.cn(A.ce(r,"play",o,e,null,null)),y.y),$async$F8)
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
return A.m($async$F8,w)},
GA(){var x=null,w=this.a
if(w!=null)A.ce(w,"stopPlayback",x,x,x,x)},
DP(){var x,w,v,u=null
try{w=this.a
x=w==null?u:A.aa(A.ce(w,"diag",u,u,u,u))
w=x
if(w==null)w=u
if(w==null)w="{}"
return w}catch(v){return"{}"}},
b0o(){var x,w,v=null
try{x=this.a
if(x!=null)A.ce(x,"resetDevice",v,v,v,v)}catch(w){}},
YF(d){var x=this.a
if(x!=null)A.ce(x,"prefetch",d,null,null,null)}}
B.QC.prototype={}
B.FJ.prototype={
gly(){var x=this.f,w=x>0?"CPU \xd7"+x:""
x=this.a
if(x==="webgpu")return"WebGPU"
if(C.c.m(x,"webgpu"))return"WebGPU + "+w
return w.length===0?x:w}}
B.FL.prototype={
gLA(){var x=this,w=C.d.aA(x.d/100,0),v=x.f?" (retried on 30 s)":""
return"window "+w+" s, "+x.e+" tokens"+v+", mel "+x.x+" ms, encoder "+x.r+" ms, decoder "+x.w+" ms"}}
B.FK.prototype={}
B.kF.prototype={
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
B.NV.prototype={}
B.lT.prototype={
j(d){var x,w=this.b
if(w==null)w=""
x=this.c
if(x==null)x=""
return this.d.b+":"+w+"->"+x}}
B.Es.prototype={
gGy(){var x,w=this,v=w.d
if(v===$){x=new B.aL3(w).$0()
w.d!==$&&A.aC()
w.d=x
v=x}return v},
gE4(){var x,w,v,u,t,s=A.a([],y.s)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.d===D.Vs&&u.c!=null){t=u.c
t.toString
s.push(t)}}return s},
gaYp(){return J.oa(this.gGy(),new B.aL2()).gK(0)},
gqj(){var x=this.a
return x.length!==0&&this.gaYp()===x.length&&this.gE4().length===0}}
B.Bu.prototype={
M(){return"AyahStatus."+this.b}}
B.pS.prototype={}
B.ab5.prototype={
Ye(d,e){var x=this.a.h(0,d*1000+e)
return x==null?$.pH():x},
aHS(d){var x=this,w=B.aTI(d),v=x.c
if(v===w)return
v=v!=null&&v===B.bFL(w)?x.d+1:1
x.d=v
if(v>x.e)x.e=v
x.c=w},
adV(){var x=Date.now(),w=B.aTI(new A.b6(x,0,!1))
x=this.c
return x===w||x===B.bFL(w)?this.d:0},
ahV(d,e,f,g){var x=this,w=new A.b6(Date.now(),0,!1),v=x.Ye(d,e),u=g?C.e.cw(v.b+1,0,100):0,t=g&&u>=f?D.dY:D.lP,s=new B.pS(t,u,w.hM()),r=d*1000+e
x.a.n(0,r,s)
x.b.D(0,r)
x.aHS(w)
return s},
Y5(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.c1[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pH():s).a===D.dY)++u}return u},
aXh(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.c1[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pH():s).a===D.lP)++u}return u},
gah5(){var x=this.a,w=A.w(x).i("c6<2>")
return new A.aE(new A.c6(x,w),new B.aTJ(),w.i("aE<M.E>")).gK(0)},
galX(){var x=this.a,w=A.w(x).i("bf<1>")
w=A.ne(new A.bf(x,w),new B.aTK(),w.i("M.E"),y.S)
w=A.en(w,A.w(w).i("M.E"))
x=A.a2(w,A.w(w).c)
C.b.l6(x)
return x},
cS(){var x,w,v,u,t,s=this,r=y.N,q=A.x(r,y.L)
for(x=s.a,x=new A.dH(x,A.w(x).i("dH<1,2>")).ga0(0),w=y.t;x.u();){v=x.d
u=v.a
t=v.b
q.n(0,""+u,A.a([t.a.a,t.b,t.c.a],w))}x=s.b
x=A.a2(x,A.w(x).c)
return A.L(["v",1,"rows",q,"dirty",x,"last",s.c,"streak",s.d,"best",s.e],r,y.z)},
aTk(){var x,w,v,u,t,s,r,q,p,o=A.a([],y.Z)
for(x=this.b,x=A.bwW(x,300,A.w(x).c),x=new A.Fu(J.aF(x.a),x.b,A.w(x).i("Fu<1>")),w=y.N,v=y.z,u=this.a;x.u();){t=x.gL()
s=C.e.bc(t,1000)
t=C.e.af(t,1000)
r=s*1000+t
q=u.h(0,r)
q=(q==null?$.pH():q).a===D.dY?"memorized":"learning"
p=u.h(0,r)
if(p==null)p=$.pH()
r=u.h(0,r)
o.push(A.L(["surah",s,"ayah",t,"status",q,"perfect_count",p.b,"updated_at",(r==null?$.pH():r).c.jf()],w,v))}return o},
aXR(d){var x,w,v,u,t,s,r
for(x=d.length,w=this.a,v=this.b,u=0;u<d.length;d.length===x||(0,A.B)(d),++u){t=d[u]
s=A.et(t.h(0,"surah"))*1000+A.et(t.h(0,"ayah"))
r=w.h(0,C.e.bc(s,1000)*1000+C.e.af(s,1000))
if((r==null?$.pH():r).c.jf()===t.h(0,"updated_at"))v.I(0,s)}},
aXZ(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(x=J.aF(d),w=this.b,v=this.a,u=y.f,t=!1;x.u();){s=x.gL()
if(!u.b(s))continue
r=A.bK(s.h(0,"surah"))
q=r==null?null:C.d.bT(r)
r=A.bK(s.h(0,"ayah"))
p=r==null?null:C.d.bT(r)
o=A.hw(A.f(s.h(0,"updated_at")))
r=!0
if(q!=null)if(p!=null)if(o!=null)r=!(q>=1&&q<=114&&p>=1&&p<=I.c1[q-1].a[1])
if(r)continue
n=B.c1e(s.h(0,"status"))
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
l=A.bK(s.h(0,"perfect_count"))
l=l==null?null:C.d.bT(l)
v.n(0,r,new B.pS(n,C.e.cw(l==null?0:l,0,100),o.hM()))
w.I(0,r)
t=!0}return t}}
B.QA.prototype={
DE(d,e,f,g,h){var x=this,w=g==null?x.a:g,v=h==null?x.b:h,u=d==null?x.c:d,t=e==null?x.d:e
return new B.QA(w,v,u,t,f==null?x.e:f)},
aRP(d){var x=null
return this.DE(x,x,d,x,x)},
adv(d){var x=null
return this.DE(x,d,x,x,x)},
aRT(d){var x=null
return this.DE(x,x,x,x,d)},
aRj(d){var x=null
return this.DE(d,x,x,x,x)},
aRQ(d){var x=null
return this.DE(x,x,x,d,x)},
cS(){var x=this
return A.L(["n",x.a,"r",x.b,"auto",x.c,"hide",x.d,"in",x.e],y.N,y.z)}}
B.Dw.prototype={
M(){return"ModelState."+this.b}}
B.QB.prototype={
Xz(){var x=this.Q
return x==null?this.Q=new B.aTL(this).$0():x},
oQ(d){return this.aku(d)},
aku(d){var x=0,w=A.n(y.H),v=this
var $async$oQ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v.b=d
v.X()
x=2
return A.d(A.i2("mt.tutor.settings",C.a_.hp(d.cS(),null)),$async$oQ)
case 2:return A.l(null,w)}})
return A.m($async$oQ,w)},
wP(){var x=0,w=A.n(y.H),v=this,u
var $async$wP=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.X()
x=2
return A.d(A.i2("mt.tutor.progress",C.a_.hp(v.c.cS(),null)),$async$wP)
case 2:u=v.as
if(u!=null)u.aF()
v.as=A.cC(C.D,v.gaqM())
return A.l(null,w)}})
return A.m($async$wP,w)},
Gj(d,e,f){return this.al6(d,e,f)},
al6(d,e,f){var x=0,w=A.n(y.H),v=this
var $async$Gj=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:v.z=new A.bJ(d,e,f)
x=2
return A.d(A.i2("mt.tutor.last",C.a_.hp(A.L(["s",d,"f",e,"t",f],y.N,y.S),null)),$async$Gj)
case 2:return A.l(null,w)}})
return A.m($async$Gj,w)},
zr(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$zr=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=s.f
if(n===D.Nq||n===D.hK){x=1
break}s.f=D.Nq
s.y=null
s.X()
u=4
n=A.jZ().gei().h(0,"tutor_device")
if(n==null)n="auto"
p=A.jZ().gei().h(0,"tutor_threads")
p=A.f9(p==null?"":p,null)
if(p==null)p=0
x=7
return A.d(s.a.aXz(new B.aTM(s),n,p),$async$zr)
case 7:s.x=e
s.f=D.hK
n=A.jZ().gei().h(0,"debug")
if(n==="1"){n=s.x
n.toString
r=n
A.t6().$1("[tutor] model ready: "+r.a+" "+r.b+" threads="+r.f+" isolated="+r.r+" in "+r.c+" ms (warm-up "+r.w+" ms, cached before: "+r.d+")")}u=2
x=6
break
case 4:u=3
m=t.pop()
n=A.Y(m)
if(n instanceof B.kF){q=n
s.f=D.awl
s.y=q
n=A.jZ().gei().h(0,"debug")
if(n==="1")A.t6().$1("[tutor] model failed: "+A.f(q))}else throw m
x=6
break
case 3:x=2
break
case 6:s.X()
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$zr,w)},
um(){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$um=A.j(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:if(r.at){x=1
break}q=null
try{k=$.a9().b
k===$&&A.b()
k=k.gc_().e.a
q=(k==null?null:k.r)!=null}catch(d){x=1
break}if(!q){x=1
break}r.at=!0
u=4
k=$.a9().b
k===$&&A.b()
p=k
x=7
return A.d(p.cY("quran_tutor_progress").hh("surah, ayah, status, perfect_count, updated_at"),$async$um)
case 7:o=a1
n=r.c.aXZ(o)
m=0,k=y.N,i=y.z
case 8:if(!(m<25)){x=10
break}l=r.c.aTk()
if(J.bk(l)===0){x=10
break}h=p
g=A.L(["p_rows",l],k,i)
f=h.CW
f===$&&A.b()
f.b.E(0,A.lZ(h.x,k,k))
x=11
return A.d(f.b0L("quran_tutor_save",!1,g,i),$async$um)
case 11:r.c.aXR(l)
case 9:++m
x=8
break
case 10:x=12
return A.d(A.i2("mt.tutor.progress",C.a_.hp(r.c.cS(),null)),$async$um)
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
Fn(d){return this.b0q(d)},
b0q(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$Fn=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:p=B.bx7(t.c.cS()).cS()
y.f.a(p.h(0,"rows")).dE(0,new B.aTN(d))
t.c=B.bx7(p)
x=2
return A.d(t.wP(),$async$Fn)
case 2:v=4
s=$.a9().b
s===$&&A.b()
r=s.gc_().e.a
x=(r==null?null:r.r)!=null?7:8
break
case 7:r=y.z
x=9
return A.d(s.bg("quran_tutor_reset",A.L(["p_surah",d],y.N,r),r),$async$Fn)
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
return A.m($async$Fn,w)}}
B.uS.prototype={
V(){var x=$.Iy()
return new B.Uo(x,new A.bc(C.W,$.a7()))}}
B.Uo.prototype={
ab(){var x,w,v=this
v.ar()
x=v.d
x.a4(v.gn0())
w=y.a
x.Xz().bI(new B.beW(v),w)
H.aJx().bI(new B.beX(v),w).ho(new B.beY())
A.Ll(H.bwy(),y.y)},
v5(){if(this.c!=null)this.t(new B.beI())},
l(){var x,w=this
w.d.R(w.gn0())
x=w.e
x.p$=$.a7()
x.T$=0
w.aq()},
J0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$J0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.d
x=3
return A.d(s.oQ(s.b.aRP(!0)),$async$J0)
case 3:t=s.a
t.b_3()
if(t.a_U()){t.aeH()
x=1
break}s.zr()
case 1:return A.l(v,w)}})
return A.m($async$J0,w)},
v6(d,e,f){return this.aGm(d,e,f)},
aNd(d){return this.v6(d,null,null)},
aGm(d,e,f){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$v6=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:if(u.w==null){u.c.U(y.q).f.be(A.bR(null,null,null,null,null,C.l,null,A.o("\u0644\u062d\u0638\u0629\u2026 \u0628\u0646\u062c\u0647\u0651\u0632 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641",null,null,null,null,null,null,null,null),null,C.D,null,null,null,null,null,null,null,null,null,null))
x=1
break}x=e!=null&&f!=null?3:5
break
case 3:t=new A.Q(e,f)
x=4
break
case 5:s=u.c
s.toString
x=6
return A.d(B.c4U(s,d),$async$v6)
case 6:t=h
case 4:if(t==null||u.c==null){x=1
break}x=7
return A.d(u.d.Gj(d,t.a,t.b),$async$v6)
case 7:s=u.c
if(s==null){x=1
break}r=y.z
x=8
return A.d(A.ak(s,!1).cr(A.cm(new B.beO(u,d,t),null,r),r),$async$v6)
case 8:if(u.c!=null)u.t(new B.beP())
case 1:return A.l(v,w)}})
return A.m($async$v6,w)},
C(d){var x=null,w=this.d,v=w.b,u=A.a([],y.p),t=w.a
if(t.gag1()&&!A.ak(d,!1).Vk())u.push(A.cJ(x,x,x,x,D.acS,x,x,t.gaXi(),x,x,x,"\u0631\u062c\u0648\u0639 \u0644\u0645\u0633\u062c\u062f\u064a",x))
t=v.e
if(t)u.push(A.cJ(x,x,x,x,D.adP,x,x,new B.beS(d),x,x,x,"\u062a\u0642\u062f\u0651\u0645\u064a",x))
u.push(A.cJ(x,x,x,x,D.Bl,x,x,new B.beT(d),x,x,x,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",x))
if(!w.e)w=D.amB
else w=t?this.aCL():this.aDb()
return M.vz(u,w,"\u0627\u0644\u0645\u062d\u0641\u0651\u0638")},
aDb(){var x,w,v,u,t,s,r,q,p=null,o=this.d.d
if(o==null)o=D.V3
x=this.r
w=x==null?p:x.a-x.b
if(!(o.a&&o.b))v="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u062f\u0639\u0645 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638. \u062c\u0631\u0651\u0628 \u0623\u062d\u062f\u062b \u0646\u0633\u062e\u0629 \u0645\u0646 Chrome (\u0623\u0646\u062f\u0631\u0648\u064a\u062f) \u0623\u0648 Safari (\u0622\u064a\u0641\u0648\u0646)."
else if(!o.f)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0641\u062a\u062d \u0639\u0644\u0649 https \u0639\u0634\u0627\u0646 \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0627\u064a\u0643."
else v=!o.c||!o.d?"\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u0633\u0645\u062d \u0628\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0646 \u0627\u0644\u0645\u0627\u064a\u0643.":p
x=y.p
u=A.a([D.aHJ,C.ar],x)
for(t=0;t<4;++t){s=D.ao7[t]
u.push(new A.a4(C.bx,A.al(A.a([A.c7(s.a,C.a6,p,18),C.aq,new A.dE(1,C.aX,A.o(s.b,p,p,p,p,G.U1,p,p,p),p)],x),C.z,C.f,C.h,0,p),p))}u=A.af(u,C.z,C.f,C.h)
s=A.a([D.aZ0,C.P,A.o("\u0647\u0646\u062d\u0645\u0651\u0644 \u0645\u0644\u0641 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 (\u062d\u0648\u0627\u0644\u064a "+E.aZ(105)+" \u0645\u064a\u062c\u0627) \u0648\u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0648\u0628\u0639\u062f \u0643\u062f\u0647 \u0628\u064a\u0641\u062a\u062d \u0645\u0646 \u063a\u064a\u0631 \u062a\u062d\u0645\u064a\u0644. \u064a\u064f\u0641\u0636\u0651\u0644 \u062a\u0643\u0648\u0646 \u0639\u0644\u0649 Wi-Fi.",p,p,p,p,F.ag,p,p,p)],x)
if(w!=null){r=w<3e8
q=r?"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0645\u062a\u0635\u0641\u062d \u0642\u0644\u064a\u0644\u0629 ("+E.aZ(C.d.ao(w/1e6))+" \u0645\u064a\u062c\u0627) \u2014 \u0641\u0636\u0651\u064a \u0634\u0648\u064a\u0629 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0623\u0648\u0644.":"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629: \u0643\u0641\u0627\u064a\u0629 \u2713"
C.b.E(s,A.a([C.P,A.o(q,p,p,p,p,A.cB(p,p,r?D.cW:C.cj,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x))}r=o.w
if(r>0&&r<3)C.b.E(s,A.a([C.P,D.aYy],x))
x=A.a([new E.cU(u,C.ac,C.ay,p,!0,p),new E.cU(A.af(s,C.z,C.f,C.h),C.ac,C.ay,p,!1,p),D.b4F,C.P],x)
if(v!=null)x.push(new E.cU(A.o(v,p,p,p,p,D.aQE,p,p,p),C.ac,C.ay,p,!1,p))
else x.push(A.jE(D.acc,D.aTV,this.gaGv(),A.jF(C.q,C.a4,D.aKf,p,p,p,p)))
x.push(C.aL)
x.push(D.V2)
return x},
aCL(){var x,w,v=this,u=null,t=v.d,s=t.c,r=v.e,q=C.c.ap(r.a.a),p=q.length===0,o=p?C.tV:H.bKe(q),n=t.z,m=A.aS(v.a9X(C.hr,E.aZ(s.gah5())+" \u0622\u064a\u0629","\u062d\u0641\u0638\u062a\u0647\u0627"),1),l=E.aZ(s.adV()),k=s.c,j=Date.now()
k=k===B.aTI(new A.b6(j,0,!1))?"\u0648\u0631\u0627 \u0628\u0639\u0636 \u2014 \u0643\u0645\u0651\u0644!":"\u0633\u0645\u0651\u0639 \u0627\u0644\u0646\u0647\u0627\u0631\u062f\u0647 \u0639\u0634\u0627\u0646 \u062a\u0643\u0645\u0651\u0644"
j=y.p
k=A.a([new B.Dx(t,!1,u),A.al(A.a([m,C.aq,A.aS(v.a9X(C.AK,l+" \u064a\u0648\u0645",k),1)],j),C.j,C.f,C.h,0,u),C.R],j)
if(n!=null){t=H.jt(n.a)
m=n.b
l=n.c
m=m===l?"\u0622\u064a\u0629 "+E.aZ(m):"\u0627\u0644\u0622\u064a\u0627\u062a "+E.aZ(m)+"\u2013"+E.aZ(l)
k.push(new E.cU(A.al(A.a([D.adl,C.aY,A.aS(A.af(A.a([D.aSk,A.o(t+" \u2014 "+m,u,u,u,u,F.aZ,u,u,u)],j),C.z,C.f,C.h),1),Q.kF],j),C.j,C.f,C.h,0,u),C.ac,C.ay,new B.beL(v,n),!0,u))}t=C.i.bN(0.08)
k.push(A.bG(u,C.J,!1,u,!0,C.l,u,A.bL(),r,u,u,u,u,u,2,A.fB(u,new A.e8(4,A.ac(14),C.v),u,u,u,u,u,u,!0,u,u,u,u,u,u,t,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,C.p7,"\u0639\u0627\u064a\u0632 \u062a\u062d\u0641\u0638 \u0633\u0648\u0631\u0629 \u0625\u064a\u0647\u061f",u,u,u,u,u,u,u,u,u,!0,!0,!1,u,C.n1,u,u,u,u,u,u,u,u,u,u,u,u),C.t,!0,u,!0,u,!1,u,C.L,u,u,u,u,u,u,u,u,u,1,u,u,!1,"\u2022",u,new B.beM(v),u,u,u,!1,u,u,!1,u,!0,u,C.H,u,u,u,u,u,u,u,u,u,u,u,C.cP,!0,C.y,u,C.Q,u,u,u,u))
k.push(C.R)
if(!p){t=A.a([],j)
if(o.length===0)t.push(D.aWl)
for(r=o.length,x=0;x<o.length;o.length===r||(0,A.B)(o),++x)t.push(v.K_(o[x]))
C.b.E(k,t)}else{t=A.a([D.ayz,D.az_,v.K_(1)],j)
for(w=114;w>=78;--w)t.push(v.K_(w))
t.push(C.P)
r=v.f
p=A.c7(r?C.tm:C.kA,C.a6,u,u)
t.push(A.hn(p,A.o(r?"\u0627\u062e\u0641\u064a \u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631":"\u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631 (\u0627\u0644\u0628\u0642\u0631\u0629 \u0644\u062d\u062f \u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a)",u,u,u,u,C.ej,u,u,u),new B.beN(v),u))
if(v.f)for(w=2;w<=77;++w)t.push(v.K_(w))
C.b.E(k,t)}k.push(C.ar)
k.push(D.wN)
return k},
a9X(d,e,f){var x=null,w=y.p
return new E.cU(A.al(A.a([A.c7(d,C.q,x,x),C.aq,A.aS(A.af(A.a([A.o(e,x,x,x,x,F.aZ,x,x,x),A.o(f,1,C.am,x,x,D.aPr,x,x,x)],w),C.z,C.f,C.h),1)],w),C.j,C.f,C.h,0,x),C.ac,C.G,x,!1,x)},
K_(d){var x,w=null,v=this.d.c,u=I.c1[d-1].a[1],t=v.Y5(d),s=t/u,r=y.p,q=A.bu(A.hm(C.V,A.a([A.bv2(C.e1,G.bY,w,w,w,w,w,3,s,w),A.o(E.aZ(d),w,w,w,w,R.Us,w,w,w)],r),C.l,C.cb,w),36,36),p=A.o(H.jt(d),w,w,w,w,D.aMm,w,w,w)
if(t===0)x=E.aZ(u)+" \u0622\u064a\u0629"
else x=t===u?"\u0645\u062d\u0641\u0648\u0638\u0629 \u0643\u0644\u0647\u0627 \u2713":"\u062d\u0641\u0638\u062a "+E.aZ(t)+" \u0645\u0646 "+E.aZ(u)
r=A.a([q,C.i0,A.aS(A.af(A.a([p,A.o(x,w,w,w,w,A.cB(w,w,t===u?G.bY:C.cj,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),C.z,C.f,C.h),1)],r)
if(s>0&&s<1)r.push(A.o(E.aZ(C.d.ao(s*100))+"\u066a",w,w,w,w,D.Uf,w,w,w))
r.push(D.acf)
return new E.cU(A.al(r,C.j,C.f,C.h,0,w),L.zA,C.eu,new B.beQ(this,d),!1,w)}}
B.Dx.prototype={
C(d){var x,w,v,u,t,s,r=null,q=this.c
switch(q.f.a){case 2:if(this.d)return C.aE
return D.ayr
case 3:x=q.y
x=A.a([A.o(x==null?"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0634\u063a\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638":B.Ir(x),r,r,r,r,D.wb,r,r,r)],y.p)
w=q.y
if(w!=null)x.push(new B.zZ(w,"model load",r))
x.push(C.P)
x.push(new A.xv(C.VL,!1,q.gaXy(),r,r,r,r,C.m,r,!1,r,!0,r,C.pb,r))
return new E.cU(A.af(x,C.z,C.f,C.h),C.ac,C.ay,r,!1,r)
case 0:case 1:v=q.w
u=q.r
q=v>0
t=q?C.d.cw(u/v,0,1):r
s=q&&u<v
q=A.o(s?"\u0628\u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026 "+E.aZ(C.d.ao(u/1e6))+" \u0645\u0646 "+E.aZ(C.d.ao(v/1e6))+" \u0645\u064a\u062c\u0627":"\u0628\u0646\u062c\u0647\u0651\u0632 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026",r,r,r,r,C.wd,r,r,r)
x=A.ac(8)
w=y.p
x=A.a([q,C.S,A.mS(x,A.D9(C.e1,C.q,7,s?t:r),C.bp)],w)
if(!this.d)C.b.E(x,A.a([C.P,D.aUn],w))
return new E.cU(A.af(x,C.z,C.f,C.h),C.ac,C.ay,r,!1,r)}}}
B.Se.prototype={
C(d){var x=null,w=D.cW.bN(0.1),v=A.ac(14),u=A.cW(D.cW.bN(0.4),1)
return A.aA(x,A.al(A.a([D.ad8,C.aq,A.aS(A.o(this.c?"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0627\u0644\u062a\u062c\u0648\u064a\u062f.":"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0623\u062d\u0643\u0627\u0645 \u0627\u0644\u062a\u062c\u0648\u064a\u062f. \u0627\u0642\u0631\u0627 \u0639\u0644\u0649 \u0634\u064a\u062e \u0623\u0648 \u0645\u062d\u0641\u0651\u0638 \u0641\u064a \u0645\u0633\u062c\u062f\u0643 \u0643\u0645\u0627\u0646.",x,x,x,x,D.Um,x,x,x),1)],y.p),C.z,C.f,C.h,0,x),C.m,x,x,new A.as(w,x,u,v,x,x,C.r),x,x,C.ay,C.aR,x,x,x)}}
B.AH.prototype={
M(){return"_Phase."+this.b}}
B.zY.prototype={
V(){return new B.Wm($.Iy(),D.jQ)}}
B.Wm.prototype={
gi4(){var x=this.e
return x===$?this.e=this.a.d:x},
gy9(){var x,w=this.a,v=w.f
w=w.c
x=this.gi4()
return H.Io(w,x,v.vd(w,x)).b},
ab(){var x,w=this
w.ar()
x=w.d
x.a4(w.gn0())
x.Xz()
x.a.YF(B.aqb(w.a.c,w.gi4()))},
v5(){if(this.c!=null)this.t(new B.bmH())},
l(){var x,w=this,v=w.d
v.R(w.gn0())
x=w.Q
if(x!=null)x.aF()
v=v.a
v.GA()
v.Vn()
w.aq()},
RO(d){var x,w,v=this
if(v.f===D.pE)v.d.a.Vn()
x=v.d.a
x.GA()
w=v.Q
if(w!=null)w.aF()
v.t(new B.bmX(v,d))
x.YF(B.aqb(v.a.c,d))
w=v.a
if(d<w.e)x.YF(B.aqb(w.c,d+1))},
Kd(d){return this.aDL(d)},
aDL(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$Kd=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f===D.pD){u.d.a.GA()
u.t(new B.bn0(u))
x=1
break}t=u.r!=null?D.h4:D.jQ
u.t(new B.bn1(u))
s=u.d
r=A.a([B.aqb(u.a.c,u.gi4())],y.s)
q=d==null?s.b.b:d
x=3
return A.d(s.a.F8(r,q),$async$Kd)
case 3:p=f
if(u.c==null||u.f!==D.pD){x=1
break}u.t(new B.bn2(u,t,p))
case 1:return A.l(v,w)}})
return A.m($async$Kd,w)},
Jh(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Jh=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.d
if(l.f!==D.hK){x=1
break}p=l.a
p.GA()
r=B.Bc(s.gy9()).length
s.t(new B.bn4(s))
o=s.Q
if(o!=null)o.aF()
s.Q=A.mp(C.fu,new B.bn5(s))
u=4
o=B.byO(r)
n=A.d2(0,0,0,350*r,0,0)
x=7
return A.d(p.a05(l.b.c,o,n,new B.bn6(s),new B.bn7(s)),$async$Jh)
case 7:u=2
x=6
break
case 4:u=3
k=t.pop()
l=A.Y(k)
if(l instanceof B.kF){q=l
l=s.Q
if(l!=null)l.aF()
if(s.c!=null)s.t(new B.bn8(s,q))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Jh,w)},
y5(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$y5=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.f!==D.pE){x=1
break}m=s.Q
if(m!=null)m.aF()
s.t(new B.bna(s))
s.Q=A.mp(C.hk,new B.bnb(s))
l=new A.zs()
$.Bf()
l.mM()
r=l
u=4
m=s.d.a
x=7
return A.d(m.a08(),$async$y5)
case 7:q=e
if(q.b<0.8){s.aNc("\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0642\u0635\u064a\u0631 \u0623\u0648\u064a \u2014 \u062f\u0648\u0633 \xab\u0633\u0645\u0651\u0639\xbb \u0648\u0627\u0642\u0631\u0627 \u0627\u0644\u0622\u064a\u0629 \u0643\u0644\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb.")
x=1
break}x=8
return A.d(m.aiQ(q,B.Bc(s.gy9()).length),$async$y5)
case 8:p=e
s.ch=A.d2(0,0,r.gWG(),0,0,0)
k=A.jZ().gei().h(0,"debug")
if(k==="1"){o=B.bKw(m.DP())
A.t6().$1("[tutor] "+s.a.c+":"+s.gi4()+" audio="+C.d.aA(q.b,1)+"s infer="+p.b+"ms total="+r.gyR()+"ms "+p.gLA()+" text="+p.a)
A.t6().$1("[tutor] stages: "+A.f(o))
s.ax="\u062a\u0633\u062c\u064a\u0644\u0643 "+C.d.aA(p.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(p.b/1000,2)+" \u062b\n"+p.gLA()+"\n"+A.f(o)+"\n"+p.a}s.a5h(p.a)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.Y(i)
if(m instanceof B.kF){n=m
m=A.jZ().gei().h(0,"debug")
if(m==="1")A.t6().$1("[tutor] check failed: "+A.f(n)+"\n"+s.d.a.DP())
s.Ue(B.Ir(n),n)}else throw i
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$y5,w)},
Ue(d,e){var x=this,w=x.Q
if(w!=null)w.aF()
if(x.c==null)return
x.t(new B.bmW(x,d,e))},
aNc(d){return this.Ue(d,null)},
a5h(d){var x,w,v,u,t,s=this,r={},q=s.Q
if(q!=null)q.aF()
if(s.c==null)return
x=B.bID(s.gy9(),d)
r.a=null
if(C.c.ap(x.c).length!==0){q=s.d
w=q.c
v=s.a.c
u=s.gi4()
t=x.gqj()
r.a=w.ahV(v,u,q.b.a,t)
q.wP()}s.t(new B.bmY(r,s,x))},
Hx(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Hx=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:g=s.d
if(g.f!==D.hK){x=1
break}s.t(new B.bmP(s))
l=s.Q
if(l!=null)l.aF()
s.Q=A.mp(C.hk,new B.bmQ(s))
k=new A.zs()
$.Bf()
k.mM()
r=k
u=4
l=g.a
x=7
return A.d(l.b1e(B.aqb(s.a.c,s.gi4()),B.Bc(s.gy9()).length),$async$Hx)
case 7:q=e
p=B.bKw(l.DP())
o="\u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a "+C.d.aA(q.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(q.b/1000,2)+" \u062b (\u0627\u0644\u0643\u0644 "+C.d.aA(r.gyR()/1000,2)+" \u062b)\n"+q.gLA()+"\n"+A.f(p)+"\n"+q.a
A.t6().$1("[tutor-debug] "+s.a.c+":"+s.gi4()+" audio="+C.d.aA(q.c,1)+"s infer="+q.b+"ms total="+r.gyR()+"ms "+q.gLA()+" text="+q.a)
A.t6().$1("[tutor-debug] stages: "+A.f(p))
s.ch=A.d2(0,0,r.gWG(),0,0,0)
s.a5h(q.a)
n=s.r
if(n!=null){l=n.gqj()
j=n.b
i=A.ae(j).i("aE<1>")
j=A.a2(new A.aE(j,new B.bmR(),i),i.i("M.E"))
A.t6().$1("[tutor-debug] perfect="+l+" ops="+A.f(j))}s.t(new B.bmS(s,o))
u=2
x=6
break
case 4:u=3
f=t.pop()
l=A.Y(f)
if(l instanceof B.kF){m=l
A.t6().$1("[tutor-debug] failed: "+A.f(m)+"\n"+g.a.DP())
s.Ue(B.Ir(m),m)}else throw f
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Hx,w)},
gT7(){var x,w,v
for(x=this.a.d,w=this.d;v=this.a,x<=v.e;++x){v=w.c.a.h(0,v.c*1000+x)
if((v==null?$.pH():v).a!==D.dY)return!1}return!0},
C(d){var x,w=this,v=null,u=w.d,t=u.c.Ye(w.a.c,w.gi4()),s=u.b,r=s.d&&!w.x&&w.f!==D.h4,q=H.jt(w.a.c),p=y.p,o=A.a([A.cJ(v,v,v,v,D.Bl,v,v,new B.bng(d),v,v,v,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",v)],p),n=w.aw7(),m=A.o("\u0622\u064a\u0629 "+E.aZ(w.gi4()),v,v,v,v,C.jD,v,v,v),l=E.aZ(w.gi4()-w.a.d+1),k=w.a
s=A.a([A.al(A.a([m,C.bI,A.o("("+l+" \u0645\u0646 "+E.aZ(k.e-k.d+1)+")",v,v,v,v,F.ag,v,v,v),C.dv,w.aH7(t,s.a)],p),C.j,C.f,C.h,0,v),C.R],p)
if(r)s.push(w.aCG())
else{m=w.r
if(m!=null){l=w.f
l=l!==D.pE&&l!==D.lF}else l=!1
if(l)s.push(w.auj(m))
else s.push(A.o(w.gy9()+" \ufd3f"+E.aZ(w.gi4())+"\ufd3e",v,v,v,v,D.i6,C.af,C.aN,v))}s=A.a([new B.Dx(u,!0,v),n,C.S,new E.cU(A.af(s,C.ak,C.f,C.h),D.a7z,C.ay,v,!1,v)],p)
n=w.r
if(n!=null&&w.f===D.h4)s.push(w.aOv(n))
if(w.r!=null&&w.f===D.h4&&w.ch!=null){x=C.d.ao(C.e.bc(w.ch.a,1000)/100)
s.push(new A.a4(C.bx,A.o("\u0627\u062a\u0631\u0627\u062c\u0639 \u0641\u064a "+(E.aZ(C.e.bc(x,10))+"\u066b"+E.aZ(C.e.af(x,10)))+" \u062b",v,v,v,v,F.ag,C.af,v,v),v))}n=w.as
if(n!=null)s.push(new A.a4(C.ay,A.o(n,v,v,v,v,D.wb,v,v,v),v))
if(w.as!=null&&w.at!=null){n=w.at
n.toString
s.push(new B.zZ(n,"check "+w.a.c+":"+w.gi4(),v))}s.push(w.auJ())
s.push(C.ar)
s.push(A.rj(C.q,C.G,v,new B.bnh(w),D.aT7,D.aVk,u.b.d))
n=w.a
if(n.e>n.d){n=w.gT7()
s.push(new E.cU(A.al(A.a([D.abq,C.aY,A.aS(A.af(A.a([D.aW3,A.o(w.gT7()?"\u062d\u0641\u0638\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u0633\u0645\u0651\u0639\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636 \u0645\u0646 \u063a\u064a\u0631 \u0645\u0627 \u062a\u0634\u0648\u0641\u0647\u0627":"\u0644\u0645\u0627 \u062a\u062e\u0644\u0651\u0635 \u0627\u0644\u0622\u064a\u0627\u062a \u0648\u0627\u062d\u062f\u0629 \u0648\u0627\u062d\u062f\u0629\u060c \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0644\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636",v,v,v,v,F.ag,v,v,v)],p),C.z,C.f,C.h),1),Q.kF],p),C.j,C.f,C.h,0,v),C.ac,C.ay,new B.bni(w,d),n,v))}n=A.jZ().gei().h(0,"debug")
if(n==="1"){p=A.a([C.S,A.f6(D.acb,D.aV1,u.f===D.hK&&w.f!==D.lF?w.gavi():v,v)],p)
n=w.ax
if(n!=null)p.push(new A.a4(C.iE,A.ER(n,F.ag,v,v),v))
n=u.x
if(n!=null){m=n.a
l=n.b
n=n.gly()
u=u.x
p.push(A.o("model: "+m+" "+l+" \u2014 "+n+", isolated "+u.r+", load "+u.c+" ms (warm-up "+u.w+" ms)",v,v,v,v,F.ag,v,v,v))}p.push(A.bO(D.aVG,v,v,v,new B.bnj(w,d),v,v))
C.b.E(s,p)}s.push(C.S)
s.push(D.wN)
return M.vz(o,s,q)},
aw7(){var x=this.a,w=x.e-x.d+1
if(w===1)return C.aE
return A.bu(A.oR(new B.bmU(this),w,null,C.az,new B.bmV()),36,null)},
aH7(d,e){var x,w,v,u,t,s,r,q=null
if(d.a===D.dY)return D.aHP
x=d.b
w=E.aZ(x)
v=E.aZ(e)
u=A.a([],y.p)
for(t=0;t<e;++t){s=t<x
r=s?C.d7:D.aaY
u.push(new A.a4(D.a89,A.c7(r,s?G.bY:C.eV,q,16),q))}return A.aTk(A.al(u,C.j,C.f,C.Y,0,q),q,"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637 \u0648\u0631\u0627 \u0628\u0639\u0636: "+w+" \u0645\u0646 "+v,q,q)},
aCG(){var x=null
return A.dk(!1,A.ac(12),!0,A.aA(x,D.a42,C.m,x,x,new A.as(L.qA,x,x,A.ac(12),x,x,C.r),x,x,x,D.a7g,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bn_(this),x,x,x,x,x,x,x)},
auj(d){var x,w,v,u,t,s=null,r=A.a([],y.R)
for(x=d.a,w=0;w<x.length;++w){v=J.b8(d.gGy(),w)
A:{if(D.fZ===v){u=D.i6.cB(G.bY)
break A}if(D.pq===v){u=D.i6.VY(D.cW,C.fS,D.cW)
break A}if(D.pr===v){u=D.i6.VY(D.dB,C.fS,D.dB)
break A}u=D.i6.VY(C.eV,C.p0,C.c5)
break A}t=x[w]
r.push(new A.f_(t.a,s,s,C.bd,s,s,s,s,s,s,u))
r.push(L.w5)}x=E.aZ(this.gi4())
r.push(A.dQ(s,s,s,s,s,s,s,s,s,D.i6.cB(C.a6),"\ufd3f"+x+"\ufd3e"))
return A.Q_(A.dQ(r,s,s,s,s,s,s,s,s,s,s),s,C.af,C.aN)},
aOv(d){var x,w,v,u,t,s,r=this.w
if(C.c.ap(d.c).length===0)return D.b4k
if(d.gqj()){x=r==null
if((x?null:r.a)===D.dY&&r.b===this.d.b.a)x="\u0627\u0644\u0622\u064a\u0629 \u062f\u064a \u0627\u062a\u062d\u0641\u0638\u062a! \u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0627\u0644\u0644\u064a \u0628\u0639\u062f\u0647\u0627."
else x=!x&&r.a!==D.dY?"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637. \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0645\u0627\u0646 "+E.aZ(this.d.b.a-r.b)+" \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629.":"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637."
return new B.Ac(G.bY,C.d7,"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713",x,null)}x=d.gGy()
w=J.d0(x)
v=w.hY(x,new B.bnc()).gK(0)
u=w.hY(x,new B.bnd()).gK(0)
t=w.hY(x,new B.bne()).gK(0)
x=A.a([],y.s)
if(u>0)x.push(E.aZ(u)+" \u063a\u0644\u0637")
if(v>0)x.push(E.aZ(v)+" \u0631\u0627\u062c\u0639\u0647\u0627")
if(t>0)x.push(E.aZ(t)+" \u0646\u0627\u0642\u0635\u0629")
if(d.gE4().length!==0)x.push(E.aZ(d.gE4().length)+" \u0632\u064a\u0627\u062f\u0629")
w=u+t>0?D.dB:D.cW
x=C.b.aK(x," \u2022 ")
s=d.gE4().length!==0?"\n\u0632\u064a\u0627\u062f\u0629: "+C.b.aK(d.gE4(),"\u060c "):""
return new B.Ac(w,C.kD,"\u0642\u0631\u0628\u062a! \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0644\u0648\u0651\u0646\u0629",x+"\n\u0627\u0644\u0623\u0635\u0641\u0631: \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u062f\u064a \u2014 \u0627\u0644\u0623\u062d\u0645\u0631: \u063a\u0644\u0637 \u2014 \u0627\u0644\u0631\u0645\u0627\u062f\u064a \u0627\u0644\u0645\u0634\u0637\u0648\u0628: \u0646\u0633\u064a\u062a\u0647\u0627."+s,null)},
auJ(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d,g=h.f===D.hK,f=j.f
switch(f.a){case 2:if(j.z==null)x=0
else{f=Date.now()
w=j.z
w.toString
x=C.e.bc(new A.b6(f,0,!1).dJ(w).a,1e6)}v=C.e.bc(B.byO(B.Bc(j.gy9()).length).a,1e6)
f=j.gaM1()
w=96+26*j.y
u=D.dB.bN(0.25)
w=A.lc(i,A.bAs(C.V,A.aA(i,D.ach,C.m,i,i,D.Yu,i,84,i,i,i,i,84),i,new A.as(u,i,i,i,i,i,C.cw),C.zo,i,w,w),C.t,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,f,i,i,i,i,i,i)
u=A.o("\u0628\u0646\u0633\u062c\u0651\u0644\u2026 "+B.bxN(x)+" / "+B.bxN(v),i,i,i,i,K.lp,i,i,i)
return A.af(A.a([w,C.S,u,A.o(h.b.c?"\u0644\u0645\u0627 \u062a\u062e\u0644\u0635 \u0627\u0633\u0643\u062a \u062b\u0627\u0646\u064a\u0629 \u0623\u0648 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb":"\u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb \u0644\u0645\u0627 \u062a\u062e\u0644\u0635",i,i,i,i,F.ag,i,i,i),A.bO(D.aYx,i,i,i,f,i,i)],y.p),C.j,C.f,C.h)
case 3:t=C.d.e1((Date.now()-j.ay)/1000)
if(t<8)h="\u062b\u0648\u0627\u0646\u064a \u0648\u0646\u0642\u0648\u0644\u0643"
else h=t<25?"\u0644\u0633\u0647 \u0634\u063a\u0627\u0644\u064a\u0646 \u2014 \u0627\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0628\u062a\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0643\u062a\u0631 ("+E.aZ(t)+" \u062b)":"\u0648\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0637\u0648\u0644 \u0645\u0646 \u0627\u0644\u0639\u0627\u062f\u064a \u2014 \u0644\u0648 \u0639\u0644\u0651\u0642 \u0647\u0646\u0639\u064a\u062f \u062a\u0634\u063a\u064a\u0644\u0647 \u0644\u0648\u062d\u062f\u0646\u0627 ("+E.aZ(t)+" \u062b)"
return new A.a4(D.a7d,A.af(A.a([C.qo,C.ar,D.aUE,A.o(h,i,i,i,i,F.ag,C.af,i,i)],y.p),C.j,C.f,C.h),i)
default:s=f===D.pD
r=j.r
f=r==null
w=!f
q=w&&r.gqj()
u=A.c7(s?C.kE:K.B0,i,i,i)
if(s)p="\u0648\u0642\u0651\u0641"
else p=w&&!q?"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u062d":"\u0627\u0633\u0645\u0639"
p=A.o(p,i,i,i,i,i,i,i,i)
o=A.jF(i,i,D.aKc,i,i,i,i)
u=A.aS(new A.xv(C.VL,!0,new B.bmI(j,r,q),i,i,i,o,C.m,i,!1,i,!0,i,new A.SJ(p,u,o,i,i),i),1)
p=A.a([],y.n)
for(o=y.c,n=0;n<3;++n){m=D.C5[n]
p.push(new A.ep(m,i,A.o("\xd7"+E.aZ(m),i,i,i,i,i,i,i,i),o))}o=y.S
l=y.b
k=y.p
o=A.al(A.a([u,C.aq,A.vc(new B.bmJ(j),p,A.cS([h.b.b],o),!1,A.jw(i,i,i,new A.b3(new B.bmK(),l),i,i,i,i,new A.b3(new B.bmL(),l),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,C.di),o)],k),C.j,C.f,C.h,0,i)
h=g&&!s?j.gaIA():i
u=A.c7(f?D.mU:C.kD,i,i,i)
if(g)f=f?"\u0633\u0645\u0651\u0639":"\u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a"
else f="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
f=A.o(f,i,i,i,i,C.cB,i,i,i)
p=q?N.hf:C.q
h=A.a([o,C.R,A.jE(u,f,h,A.jF(p,q?C.i:C.a4,D.oS,i,i,i,i))],k)
if(w&&j.gi4()<j.a.e)C.b.E(h,A.a([C.S,q?A.jE(D.ae0,D.aXN,new B.bmM(j),A.jF(G.bY,C.a4,D.oS,i,i,i,i)):A.bO(D.aTd,i,i,i,new B.bmN(j),i,i)],k))
if(w){f=j.gi4()
w=j.a
u=w.e
f=f===u&&q&&u>w.d}else f=!1
if(f)h.push(new A.a4(C.rc,A.o(j.gT7()?"\u062e\u0644\u0651\u0635\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u062c\u0631\u0651\u0628 \xab\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636\xbb \u062a\u062d\u062a.":"\u062e\u0644\u0635\u062a \u0622\u062e\u0631 \u0622\u064a\u0629 \u2014 \u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0644\u0633\u0647 (\u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0635\u0641\u0631\u0627 \u0641\u0648\u0642).",i,i,i,i,K.pa,C.af,i,i),i))
return A.af(h,C.ak,C.f,C.h)}}}
B.Ac.prototype={
C(d){var x=this,w=null,v=x.c,u=v.bN(0.12),t=A.ac(14),s=A.cW(v.bN(0.5),1),r=y.p
return A.aA(w,A.al(A.a([A.c7(x.d,v,w,w),C.aq,A.aS(A.af(A.a([A.o(x.e,w,w,w,w,A.cB(w,w,v,w,w,w,w,w,w,w,w,15,w,w,C.a3,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),C.vz,A.o(x.f,w,w,w,w,D.Um,w,w,w)],r),C.z,C.f,C.h),1)],r),C.z,C.f,C.h,0,w),C.m,w,w,new A.as(u,w,s,t,w,w,C.r),w,w,C.ay,C.aR,w,w,w)}}
B.zX.prototype={
V(){var x=y.S
return new B.Wl($.Iy(),A.x(x,y.B),A.aD(x),A.x(x,y.N),A.dF(null,y.H))}}
B.Wl.prototype={
ab(){this.ar()
this.d.a4(this.gn0())},
v5(){if(this.c!=null)this.t(new B.bmq())},
l(){var x,w=this,v=w.d
v.R(w.gn0())
x=w.y
if(x!=null)x.aF()
v.a.Vn()
w.aq()},
CV(d){return this.aLR(d)},
aLR(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m
var $async$CV=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.t(new B.bmz(t,d))
r=t.y
if(r!=null)r.aF()
t.y=A.mp(C.fu,new B.bmA(t))
v=3
r=t.d
q=t.a
p=q.f
q=q.c
q=B.byO(B.Bc(H.Io(q,d,p.vd(q,d)).b).length)
p=t.a
o=p.f
p=p.c
p=A.d2(0,0,0,350*B.Bc(H.Io(p,d,o.vd(p,d)).b).length,0,0)
x=6
return A.d(r.a.a05(r.b.c,q,p,new B.bmB(t,d),new B.bmC(t)),$async$CV)
case 6:v=1
x=5
break
case 3:v=2
m=u.pop()
r=A.Y(m)
if(r instanceof B.kF){s=r
r=t.y
if(r!=null)r.aF()
if(t.c!=null)t.t(new B.bmD(t,s))}else throw m
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$CV,w)},
Br(d,e){return this.ax7(d,e)},
ax7(d,e){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Br=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.e!==d){x=1
break}o=s.y
if(o!=null)o.aF()
s.t(new B.bmu(s,d))
n=d<s.a.e?d+1:null
r=s.d.a.a08()
if(e&&n!=null)s.CV(n)
q=null
u=4
x=7
return A.d(r,$async$Br)
case 7:q=g
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.Y(l)
if(o instanceof B.kF){p=o
s.t(new B.bmv(s,d,p))}else throw l
x=6
break
case 3:x=2
break
case 6:if(q!=null){o=q
s.at=s.at.bI(new B.bmw(s,o,d),y.H)}case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Br,w)},
gaF5(){var x,w,v,u,t=this
for(x=t.a.d,w=t.f,v=t.r,u=t.w;x<=t.a.e;++x)if(!w.aw(x)&&!v.m(0,x)&&!u.aw(x)&&x!==t.e)return x
return null},
aJd(){this.t(new B.bmx(this))},
C(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q.f===D.hK,o=s.e,n=s.gaF5(),m=s.f,l=m.a,k=s.w.a,j=s.a,i=l+k===j.e-j.d+1&&s.r.a===0&&o==null
l=A.w(m).i("c6<2>")
x=new A.aE(new A.c6(m,l),new B.bmE(),l.i("aE<M.E>")).gK(0)
l=H.jt(s.a.c)
m=y.p
q=A.a([new B.Dx(q,!0,r),A.o("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 "+E.aZ(s.a.d)+" \u0644\u062d\u062f "+E.aZ(s.a.e)+" \u0645\u0646 \u062d\u0641\u0638\u0643\u060c \u0622\u064a\u0629 \u0622\u064a\u0629: \u0628\u0639\u062f \u0643\u0644 \u0622\u064a\u0629 \u062f\u0648\u0633 \xab\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629\xbb \u0648\u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0637\u0648\u0644 \u2014 \u0647\u0646\u0635\u062d\u0651\u062d \u0648\u0625\u0646\u062a \u0628\u062a\u0642\u0631\u0627.",r,r,r,r,F.ag,r,r,r),C.R],m)
for(w=s.a.d;w<=s.a.e;++w)q.push(s.aNe(w))
q.push(C.S)
k=s.Q
if(k!=null)q.push(A.o(k,r,r,r,r,D.wb,r,r,r))
k=s.as
if(k!=null){j=s.a
q.push(new B.zZ(k,"review "+j.c+":"+j.d+"-"+j.e,r))}k=o==null
if(!k){j=E.aZ(o)
if(s.z==null)v=0
else{v=Date.now()
u=s.z
u.toString
u=C.e.bc(new A.b6(v,0,!1).dJ(u).a,1e6)
v=u}v=A.o("\u0628\u0646\u0633\u062c\u0651\u0644 \u0622\u064a\u0629 "+j+"\u2026 "+B.bxN(v),r,r,r,r,K.lp,C.af,r,r)
j=A.mS(A.ac(6),A.D9(C.e1,D.dB,6,s.x),C.bp)
u=o<s.a.e
t=A.c7(u?P.AW:C.kE,r,r,r)
C.b.E(q,A.a([v,C.P,j,C.R,A.jE(t,A.o(u?"\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629":"\u062e\u0644\u0635\u062a",r,r,r,r,C.cB,r,r,r),new B.bmF(s,o),A.jF(C.q,C.a4,D.oS,r,r,r,r))],m))}else if(n!=null){j=p?new B.bmG(s,n):r
if(!p)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
else v=n===s.a.d?"\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0633\u0645\u064a\u0639":"\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+E.aZ(n)
q.push(A.jE(D.acT,A.o(v,r,r,r,r,C.cB,r,r,r),j,A.jF(C.q,C.a4,D.oS,r,r,r,r)))}if(s.r.a!==0&&k)q.push(D.ayF)
if(i){k=s.a
k=x===k.e-k.d+1
j=k?G.bY:D.cW
v=k?C.mS:C.kD
if(k)k="\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713 \u0633\u0645\u0651\u0639\u062a\u0647\u0645 \u0643\u0644\u0647\u0645 \u0635\u062d"
else{k=E.aZ(x)
u=s.a
u=k+" \u0645\u0646 "+E.aZ(u.e-u.d+1)+" \u0622\u064a\u0627\u062a \u0645\u0638\u0628\u0648\u0637\u0629"
k=u}u=s.a
u=x===u.e-u.d+1?"\u0631\u0628\u0646\u0627 \u064a\u062b\u0628\u0651\u062a\u0647\u0627 \u0641\u064a \u0642\u0644\u0628\u0643.":"\u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0641\u064a\u0647\u0627 \u0623\u0644\u0648\u0627\u0646 \u0648\u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a."
C.b.E(q,A.a([new B.Ac(j,v,k,u,r),A.f6(D.adW,D.aY8,s.gaJc(),r)],m))}q.push(C.R)
q.push(D.wN)
return M.vz(r,q,"\u0633\u0645\u0651\u0639 "+l)},
aNe(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.f.h(0,d),i=l.w.h(0,d)
if(l.e===d)x=D.acz
else if(l.r.m(0,d))x=O.oT
else if(i!=null)x=D.acI
else if(j!=null){w=j.gqj()?C.d7:D.aar
x=A.c7(w,j.gqj()?G.bY:D.cW,k,k)}else x=D.abS
w=y.p
v=A.a([A.al(A.a([A.o("\u0622\u064a\u0629 "+E.aZ(d),k,k,k,k,D.aQ1,k,k,k),C.dv,x],w),C.j,C.f,C.h,0,k)],w)
if(i!=null)v.push(A.o(i,k,k,k,k,D.Ui,k,k,k))
if(j!=null&&!j.gqj()){u=y.R
t=A.a([],u)
for(s=j.a,r=0;r<s.length;++r){q=s[r]
p=j.gGy()
o=J.br(p)
n=o.h(p,r)
A:{if(D.fZ===n){m=G.bY
break A}if(D.pq===n){m=D.cW
break A}if(D.pr===n){m=D.dB
break A}m=C.eV
break A}m=D.i6.aSn(m,o.h(p,r)===D.ps?C.p0:k,22)
C.b.E(t,A.a([new A.f_(q.a,k,k,C.bd,k,k,k,k,k,k,m),L.w5],u))}w=A.a([C.aS,A.Q_(A.dQ(t,k,k,k,k,k,k,k,k,k,k),k,C.af,C.aN)],w)
if(C.c.ap(j.c).length===0)w.push(D.aVL)
C.b.E(v,w)}return new E.cU(A.af(v,C.ak,C.f,C.h),C.eZ,C.eu,k,!1,k)}}
B.zW.prototype={
V(){return new B.Wk($.Iy())}}
B.Wk.prototype={
ab(){this.ar()
var x=this.d
x.a4(this.gn0())
x.Xz()},
v5(){if(this.c!=null)this.t(new B.bmh())},
l(){this.d.R(this.gn0())
this.aq()},
C(d){var x,w,v,u,t,s=this,r=null,q=s.d.c,p=q.galX(),o=A.a([],y.t)
for(x=78;x<=114;++x)o.push(x)
w=C.b.nk(o,0,new B.bmo(q))
v=C.b.nk(o,0,new B.bmp())
o=y.p
o=A.a([A.al(A.a([A.aS(s.Q_(E.aZ(q.gah5()),"\u0622\u064a\u0629 \u0645\u062d\u0641\u0648\u0638\u0629"),1),C.aq,A.aS(s.Q_(E.aZ(q.adV()),"\u064a\u0648\u0645 \u0648\u0631\u0627 \u0628\u0639\u0636"),1),C.aq,A.aS(s.Q_(E.aZ(q.e),"\u0623\u0637\u0648\u0644 \u0633\u0644\u0633\u0644\u0629"),1)],o),C.j,C.f,C.h,0,r),C.R,new E.cU(A.af(A.a([A.o("\u062c\u0632\u0621 \u0639\u0645\u0651: "+E.aZ(C.d.ao(w*100/v))+"\u066a",r,r,r,r,F.aZ,r,r,r),C.P,A.mS(A.ac(6),A.D9(C.e1,G.bY,8,w/v),C.bp),C.aS,A.o(E.aZ(w)+" \u0645\u0646 "+E.aZ(v)+" \u0622\u064a\u0629",r,r,r,r,F.ag,r,r,r)],o),C.z,C.f,C.h),C.ac,C.ay,r,!1,r)],o)
if(p.length===0)o.push(D.ayN)
for(u=p.length,t=0;t<p.length;p.length===u||(0,A.B)(p),++t)o.push(s.aNg(p[t]))
o.push(C.S)
u=$.a9().b
u===$&&A.b()
u=u.gc_().e.a
o.push(A.o((u==null?r:u.r)!=null?"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643 \u0648\u064a\u0638\u0647\u0631 \u0639\u0644\u0649 \u0623\u064a \u062c\u0647\u0627\u0632 \u062a\u062f\u062e\u0644 \u0645\u0646\u0647.":"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647. \u0633\u062c\u0651\u0644 \u062f\u062e\u0648\u0644 \u0639\u0634\u0627\u0646 \u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643.",r,r,r,r,F.ag,r,r,r))
return M.vz(r,o,"\u062a\u0642\u062f\u0651\u0645\u064a \u0641\u064a \u0627\u0644\u062d\u0641\u0638")},
Q_(d,e){var x=null
return new E.cU(A.af(A.a([A.o(d,x,x,x,x,D.aPO,x,x,x),A.o(e,x,x,x,x,C.Uy,C.af,x,x)],y.p),C.j,C.f,C.h),C.ac,C.G,x,!1,x)},
aNg(d){var x=null,w=this.d.c,v=I.c1[d-1].a[1],u=w.Y5(d),t=w.aXh(d),s=y.p,r=A.al(A.a([A.aS(A.o(H.jt(d),x,x,x,x,F.aZ,x,x,x),1),A.o(E.aZ(C.d.ao(u*100/v))+"\u066a",x,x,x,x,D.aQF,x,x,x)],s),C.j,C.f,C.h,0,x),q=A.mS(A.ac(6),A.D9(C.e1,G.bY,7,u/v),C.bp),p=E.aZ(u),o=E.aZ(v),n=t>0?" \u2022 \u0628\u062a\u0631\u0627\u062c\u0639 "+E.aZ(t):""
return new E.cU(A.af(A.a([r,C.P,q,C.aS,A.o("\u0645\u062d\u0641\u0648\u0638 "+p+" \u0645\u0646 "+o+n,x,x,x,x,F.ag,x,x,x)],s),C.z,C.f,C.h),C.ac,C.ay,new B.bmn(this,d),!1,x)},
HA(d){return this.avz(d)},
avz(d){var x=0,w=A.n(y.H),v=this,u,t
var $async$HA=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=I.c1[d-1].a[1]
t=v.c
t.toString
x=2
return A.d(A.fv(C.d6,new B.bmm(v,d,u),t,!0,null,null,!1,y.H),$async$HA)
case 2:return A.l(null,w)}})
return A.m($async$HA,w)}}
B.ab3.prototype={
Kc(d,e){var x=null,w=A.zD(x,x,x,x,x,x,x,x,x,x,x,D.aJZ,C.G,x,x,x,x,C.l0,x,x)
return A.bO(A.o(d,x,x,x,x,C.jC,x,x,x),x,x,x,new B.aTv(e),x,w)},
C(d){var x=this,w=y.p
return new E.cU(A.af(A.a([D.aXD,C.P,D.aYw,A.es(A.a([x.Kc("tarteel-ai/whisper-base-ar-quran","https://huggingface.co/tarteel-ai/whisper-base-ar-quran"),x.Kc("iqbalaesthetic/Basira","https://huggingface.co/iqbalaesthetic/Basira")],w),C.b6,0,12),D.aSY,x.Kc("tanzil.net","https://tanzil.net"),D.aZk,x.Kc("everyayah.com","https://everyayah.com")],w),C.z,C.f,C.h),C.ac,C.ay,null,!1,null)}}
B.zZ.prototype={
V(){return new B.Wn()}}
B.Wn.prototype={
ga8y(){var x=this.a
return B.c6b(x.c,x.d,$.bzo().DP())},
Ke(){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k
var $async$Ke=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.t(new B.bnk(s))
v=3
r=A.bti()
n=s.ga8y()
m=y.N
q=A.x(m,m)
J.fN(q,"app","masjid")
J.fN(q,"path","tutor \u203a "+s.a.d)
if(r!=null){m=r.length>160?C.c.Y(r,0,160):r
J.fN(q,"ua",m)}x=6
return A.d(A.a20(n,null,C.A7,q),$async$Ke)
case 6:if(s.c!=null)s.t(new B.bnl(s))
t.push(5)
x=4
break
case 3:v=2
k=u.pop()
p=A.Y(k)
o=p instanceof A.d6?p.a:"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0628\u0639\u062a \u2014 \u0627\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0646\u062a \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
if(s.c!=null)s.t(new B.bnm(s,o))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.t(new B.bnn(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Ke,w)},
C(d){var x,w,v,u=this,t=null,s=y.p
s=A.a([A.dk(!1,t,!0,new A.a4(C.zz,A.al(A.a([A.c7(u.d?C.tm:C.kA,C.c5,t,18),C.fP,D.aYU],s),C.j,C.f,C.h,0,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,new B.bnp(u),t,t,t,t,t,t,t)],s)
if(u.d){x=A.ac(8)
s.push(A.aA(t,A.ER(u.ga8y(),D.aML,t,C.o),C.m,t,t,new A.as(L.qA,t,t,x,t,t,C.r),t,t,D.a7l,C.ev,t,t,1/0))}if(u.f)s.push(D.aT4)
else{x=A.zD(t,t,t,t,t,t,t,t,t,t,t,C.T9,C.G,t,t,t,t,C.l0,t,t)
w=u.e
v=w?t:u.gaNf()
s.push(A.hn(w?D.aKm:D.adC,D.aX6,v,x))}x=u.r
if(x!=null)s.push(A.o(x,t,t,t,t,D.Ui,t,t,t))
return new A.a4(C.ay,A.af(s,C.z,C.f,C.h),t)}}
var z=a.updateTypes(["ab<~>()","~()","A(mt)","ab<FL>()","ab<FJ>()","ab<FK>()","R<mt>()","A(pS)","bl(nt)","zY(z)","zW(z)","A(lT)","zX(z)","A(Es)"])
B.aVH.prototype={
$1(d){var x,w
if(d.m(0,C.A)){x=this.a
if(x.fy===D.jJ)x=null
else{x=x.goZ().k3
x=A.az(31,x.v()>>>16&255,x.v()>>>8&255,x.v()&255)}return x}x=this.a
if(x.fy===D.jJ)x=null
else{x=x.goZ()
w=x.p3
x=w==null?x.k2:w}return x},
$S:24}
B.aTw.prototype={
$0(){var x=0,w=A.n(y.m),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=A.aa(A.cn(b.G.document).baseURI)
q=A.bW(r,0,null).W("quran_tutor/tutor.js?v=3").j(0)
x=7
return A.d(A.dY(import(q),y.m),$async$$0)
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
m=B.bX_("network",A.f(o))
throw A.p(m)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:231}
B.aTz.prototype={
$1(d){var x=null
return A.bpe(A.ce(d,"persist",x,x,x,x))},
$S:907}
B.aTy.prototype={
$0(){var x=0,w=A.n(y.C),v,u=this,t,s,r,q,p,o,n,m,l
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.a
n=A
m=A
l=A
x=4
return A.d(q.pd(),$async$$0)
case 4:x=3
return A.d(n.dY(m.cn(l.ce(e,"loadModel",A.bpL(new B.aTx(u.b)),u.c,u.d,null)),y.m),$async$$0)
case 3:p=e
o=A.W(p.device)
if(o==null)o=null
if(o==null)o=""
t=A.W(p.dtype)
if(t==null)t=null
if(t==null)t=""
s=q.pc(p,"ms")
r=q.mP(p,"cached")
A.W(p.backend)
v=new B.FJ(o,t,s,r,q.pc(p,"threads"),q.mP(p,"isolated"),q.pc(p,"warmMs"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+4}
B.aTx.prototype={
$2(d,e){this.a.$2(C.d.ao(d),C.d.ao(e))},
$S:908}
B.aTD.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=v.a
s=t.a
x=s==null?2:3
break
case 2:x=4
return A.d(t.pd(),$async$$0)
case 4:s=e
case 3:u={}
u.maxMs=C.e.bc(v.b.a,1000)
u.autoStop=v.c
u.minMs=C.e.bc(v.d.a,1000)
u.onLevel=A.f1(new B.aTB(v.e))
u.onAutoStop=A.f1(new B.aTC(v.f))
x=5
return A.d(A.dY(A.cn(A.ce(s,"startRecording",u,null,null,null)),y.O),$async$$0)
case 5:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.aTB.prototype={
$1(d){return this.a.$1(d)},
$S:57}
B.aTC.prototype={
$1(d){return this.a.$1(d)},
$S:9}
B.aTE.prototype={
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
return A.d(t.pd(),$async$$0)
case 7:x=5
break
case 6:e=s
case 5:x=3
return A.d(q.dY(p.cn(o.ce(e,"stopRecording",null,null,null,null)),y.m),$async$$0)
case 3:r=e
v=new B.FK(r,A.dg(r.seconds))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+5}
B.aTG.prototype={
$0(){var x=0,w=A.n(y._),v,u=this,t,s,r,q,p,o
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.b.a
s=u.a
r=s
q=A
p=A
o=A
x=4
return A.d(s.pd(),$async$$0)
case 4:x=3
return A.d(q.dY(p.cn(o.ce(e,"transcribe",t.audio,t.rate,s.a7t(u.c),null)),y.m),$async$$0)
case 3:v=r.aaA(e)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+3}
B.aTF.prototype={
$0(){var x=0,w=A.n(y._),v,u=this,t,s,r,q,p
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t
r=A
q=A
p=A
x=4
return A.d(t.pd(),$async$$0)
case 4:x=3
return A.d(r.dY(q.cn(p.ce(e,"transcribeUrl",u.b,t.a7t(u.c),null,null)),y.m),$async$$0)
case 3:v=s.aaA(e)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+3}
B.aTA.prototype={
$1(d){return d},
$S:31}
B.aL3.prototype={
$0(){var x,w,v,u,t=this.a,s=A.c3(t.a.length,D.ps,!1,y.G)
for(t=t.b,x=t.length,w=0;w<x;++w){v=t[w]
u=v.a
if(u!=null)s[u]=v.d}return s},
$S:z+6}
B.aL2.prototype={
$1(d){return d===D.fZ},
$S:z+2}
B.bpG.prototype={
$2(d,e){var x,w=e.length
if(d.length<w)return!1
for(x=0;x<w;++x)if(B.bu8(e[x],d[x])<0.75)return!1
return!0},
$S:909}
B.br9.prototype={
$1(d){return d.length!==0},
$S:12}
B.aTJ.prototype={
$1(d){return d.a===D.dY},
$S:z+7}
B.aTK.prototype={
$1(d){return C.e.bc(d,1000)},
$S:64}
B.aTH.prototype={
$1(d){return C.d.bT(d)},
$S:910}
B.aTL.prototype={
$0(){var x=0,w=A.n(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$$0=A.j(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d(A.i1("mt.tutor.settings"),$async$$0)
case 7:r=a3
if(r!=null){k=y.P.a(C.a_.eS(r,null))
j=A.bK(k.h(0,"n"))
j=j==null?null:C.d.bT(j)
j=C.e.cw(j==null?2:j,1,5)
i=C.b.m(D.C5,k.h(0,"r"))?A.et(k.h(0,"r")):1
h=A.hr(k.h(0,"auto"))
g=A.hr(k.h(0,"hide"))
k=A.hr(k.h(0,"in"))
s.a.b=new B.QA(j,i,h!==!1,g===!0,k===!0)}u=2
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
return A.d(A.i1("mt.tutor.progress"),$async$$0)
case 12:q=a3
if(q!=null)s.a.c=B.bx7(y.P.a(C.a_.eS(q,null)))
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
return A.d(A.i1("mt.tutor.last"),$async$$0)
case 17:p=a3
if(p!=null){o=y.P.a(C.a_.eS(p,null))
n=C.d.bT(A.dl(J.b8(o,"s")))
m=C.d.bT(A.dl(J.b8(o,"f")))
l=C.d.bT(A.dl(J.b8(o,"t")))
if(B.bKB(n,m)&&B.bKB(n,l)&&m<=l)s.a.z=new A.bJ(n,m,l)}u=2
x=16
break
case 14:u=13
a0=t.pop()
x=16
break
case 13:x=2
break
case 16:k=s.a
if(k.b.e&&k.a.a_U()){k.a.aeH()
x=1
break}a1=k
x=18
return A.d(k.a.GU(),$async$$0)
case 18:a1.d=a3
k.e=!0
k.X()
if(k.b.e)k.zr()
k.um()
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:102}
B.aTM.prototype={
$2(d,e){var x=this.a
x.r=d
x.w=e
x.X()},
$S:911}
B.aTN.prototype={
$2(d,e){return C.e.bc(A.eu(A.f(d),null,null),1000)===this.a},
$S:912}
B.beW.prototype={
$1(d){var x=0,w=A.n(y.a),v=this,u,t
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.d(u.d.a.AA(),$async$$1)
case 2:t=f
if(u.c!=null)u.t(new B.beV(u,t))
return A.l(null,w)}})
return A.m($async$$1,w)},
$S:913}
B.beV.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.beX.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.beU(x,d))},
$S:z+8}
B.beU.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.beY.prototype={
$1(d){},
$S:22}
B.beI.prototype={
$0(){},
$S:0}
B.beO.prototype={
$1(d){var x=this.c,w=this.a.w
w.toString
return new B.zY(this.b,x.a,x.b,w,null)},
$S:z+9}
B.beP.prototype={
$0(){},
$S:0}
B.beS.prototype={
$0(){var x=y.z
return A.ak(this.a,!1).cr(A.cm(new B.beR(),null,x),x)},
$S:0}
B.beR.prototype={
$1(d){return D.aZY},
$S:z+10}
B.beT.prototype={
$0(){return B.bKm(this.a)},
$S:0}
B.beL.prototype={
$0(){var x=this.b
return this.a.v6(x.a,x.b,x.c)},
$S:0}
B.beM.prototype={
$1(d){return this.a.t(new B.beK())},
$S:9}
B.beK.prototype={
$0(){},
$S:0}
B.beN.prototype={
$0(){var x=this.a
return x.t(new B.beJ(x))},
$S:0}
B.beJ.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.beQ.prototype={
$0(){return this.a.aNd(this.b)},
$S:0}
B.bt5.prototype={
$1(d){return new A.iQ(new B.bt2(this.a,this.b,this.c),null)},
$S:50}
B.bt2.prototype={
$2(d,e){var x,w,v=null,u=this.b,t=new B.bt4(u,e),s=this.a,r=new B.bt3(s,e),q=A.o(H.jt(this.c),v,v,v,v,C.p4,v,v,v),p=A.o("\u0647\u062a\u0633\u0645\u0651\u0639 \u0623\u0646\u0647\u064a \u0622\u064a\u0627\u062a\u061f ("+E.aZ(u)+" \u0622\u064a\u0629)",v,v,v,v,F.ag,v,v,v),o=y.p,n=A.a([],o)
if(u<=30)n.push(r.$3("\u0627\u0644\u0633\u0648\u0631\u0629 \u0643\u0644\u0647\u0627",1,u))
x=u<5
w=E.aZ(x?u:5)
x=x?u:5
n.push(r.$3("\u0623\u0648\u0644 "+w+" \u0622\u064a\u0627\u062a",1,x))
x=s.a
if(x>1){x=E.aZ(x)
w=s.a
n.push(r.$3("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+x,w,C.e.cw(w+4,1,u)))}u=A.a([q,C.aS,p,C.R,A.es(n,C.b6,6,8),C.S,A.al(A.a([t.$3("\u0645\u0646",s.b,new B.bsY(s)),D.aKi,t.$3("\u0644\u062d\u062f",s.c,new B.bsZ(s))],o),C.j,C.f,C.h,0,v)],o)
if(s.c-s.b>=10)u.push(D.ayI)
u.push(C.aL)
u.push(A.jD(D.aUj,new B.bt_(s,d),A.jF(C.q,C.a4,D.aK9,v,v,v,v)))
return A.dK(!0,new A.a4(C.zF,A.af(u,C.ak,C.f,C.Y),v),C.G,!0)},
$S:226}
B.bt4.prototype={
$3(d,e,f){var x,w,v,u=null,t=A.o(d,u,u,u,u,C.i9,u,u,u),s=A.a([],y.I)
for(x=this.a,w=y.r,v=1;v<=x;++v)s.push(new A.cY(v,A.o("\u0622\u064a\u0629 "+E.aZ(v),u,u,u,u,u,u,u,u),C.aB,u,w))
return A.aS(A.af(A.a([t,S.Ci(C.d6,!0,s,320,new B.bt1(this.b,f),D.aQX,e,y.S)],y.p),C.z,C.f,C.h),1)},
$S:915}
B.bt1.prototype={
$1(d){return d==null?null:this.a.$1(new B.bt0(this.b,d))},
$S:53}
B.bt0.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bt3.prototype={
$3(d,e,f){var x=null
return new B.Yq(A.o(d,x,x,x,x,x,x,x,x),new B.bsX(this.a,this.b,e,f),x)},
$S:916}
B.bsX.prototype={
$0(){var x=this
return x.b.$1(new B.bsW(x.a,x.c,x.d))},
$S:0}
B.bsW.prototype={
$0(){var x=this.a
x.b=this.b
x.c=this.c},
$S:0}
B.bsY.prototype={
$1(d){var x=this.a
x.b=d
if(x.c<d)x.c=d},
$S:32}
B.bsZ.prototype={
$1(d){var x=this.a
x.c=d
if(x.b>d)x.b=d},
$S:32}
B.bt_.prototype={
$0(){var x=this.a
return A.ak(this.b,!1).bi(new A.Q(x.b,x.c))},
$S:0}
B.bmH.prototype={
$0(){},
$S:0}
B.bmX.prototype={
$0(){var x=this.a
x.e=this.b
x.f=D.jQ
x.w=x.r=null
x.x=!1
x.ch=x.ax=x.as=null},
$S:0}
B.bn0.prototype={
$0(){var x=this.a
return x.f=x.r!=null?D.h4:D.jQ},
$S:0}
B.bn1.prototype={
$0(){var x=this.a
x.f=D.pD
x.as=null},
$S:0}
B.bn2.prototype={
$0(){var x=this.a
x.f=this.b
if(!this.c&&x.as==null)x.as=null},
$S:0}
B.bn4.prototype={
$0(){var x=this.a
x.f=D.pE
x.as=null
x.y=0
x.z=new A.b6(Date.now(),0,!1)
x.ax=null},
$S:0}
B.bn5.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bn3())},
$S:40}
B.bn3.prototype={
$0(){},
$S:0}
B.bn7.prototype={
$1(d){return this.a.y=d},
$S:57}
B.bn6.prototype={
$1(d){return this.a.y5()},
$S:9}
B.bn8.prototype={
$0(){var x,w=this.a
w.f=w.r!=null?D.h4:D.jQ
x=this.b
w.as=B.Ir(x)
w.at=x},
$S:0}
B.bna.prototype={
$0(){var x=this.a
x.f=D.lF
x.ay=Date.now()},
$S:0}
B.bnb.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bn9())},
$S:40}
B.bn9.prototype={
$0(){},
$S:0}
B.bmW.prototype={
$0(){var x=this.a
x.f=x.r!=null?D.h4:D.jQ
x.as=this.b
x.at=this.c},
$S:0}
B.bmY.prototype={
$0(){var x=this.b
x.r=this.c
x.w=this.a.a
x.f=D.h4
x.x=!1},
$S:0}
B.bmP.prototype={
$0(){var x=this.a
x.f=D.lF
x.ay=Date.now()
x.as=null},
$S:0}
B.bmQ.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bmO())},
$S:40}
B.bmO.prototype={
$0(){},
$S:0}
B.bmR.prototype={
$1(d){return d.d!==D.fZ},
$S:z+11}
B.bmS.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.bng.prototype={
$0(){return B.bKm(this.a)},
$S:0}
B.bnh.prototype={
$1(d){var x=this.a.d
return x.oQ(x.b.adv(d))},
$S:5}
B.bni.prototype={
$0(){var x=y.z
return A.ak(this.b,!1).cr(A.cm(new B.bnf(this.a),null,x),x)},
$S:0}
B.bnf.prototype={
$1(d){var x=this.a.a
return new B.zX(x.c,x.d,x.e,x.f,null)},
$S:z+12}
B.bnj.prototype={
$0(){this.a.d.a.b0o()
this.b.U(y.q).f.be(D.aKN)},
$S:0}
B.bmV.prototype={
$2(d,e){return C.bI},
$S:48}
B.bmU.prototype={
$2(d,e){var x,w,v,u=null,t=this.a,s=t.a,r=s.d+e
switch(t.d.c.Ye(s.c,r).a.a){case 2:s=G.bY
break
case 1:s=D.cW
break
case 0:s=N.hf
break
default:s=u}x=A.ac(18)
w=t.f===D.lF?u:new B.bmT(t,r)
v=s.bN(0.25)
if(r===t.gi4())s=C.i
s=A.cW(s,r===t.gi4()?2:1)
return A.dk(!1,x,!0,A.aA(C.V,A.o(E.aZ(r),u,u,u,u,D.aNZ,u,u,u),C.m,u,u,new A.as(v,u,s,u,u,u,C.cw),u,u,u,u,u,u,36),u,!0,u,u,u,u,u,u,u,u,u,u,w,u,u,u,u,u,u,u)},
$S:127}
B.bmT.prototype={
$0(){return this.a.RO(this.b)},
$S:0}
B.bn_.prototype={
$0(){var x=this.a
return x.t(new B.bmZ(x))},
$S:0}
B.bmZ.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bnc.prototype={
$1(d){return d===D.pq},
$S:z+2}
B.bnd.prototype={
$1(d){return d===D.pr},
$S:z+2}
B.bne.prototype={
$1(d){return d===D.ps},
$S:z+2}
B.bmI.prototype={
$0(){var x=this.b!=null&&!this.c?1:null
return this.a.Kd(x)},
$S:0}
B.bmJ.prototype={
$1(d){var x=this.a.d
return x.oQ(x.b.aRT(d.ga7(d)))},
$S:105}
B.bmL.prototype={
$1(d){return d.m(0,C.E)?C.a4:C.i},
$S:4}
B.bmK.prototype={
$1(d){return d.m(0,C.E)?C.q:C.O},
$S:4}
B.bmM.prototype={
$0(){var x=this.a
return x.RO(x.gi4()+1)},
$S:0}
B.bmN.prototype={
$0(){var x=this.a
return x.RO(x.gi4()+1)},
$S:0}
B.bmq.prototype={
$0(){},
$S:0}
B.bmz.prototype={
$0(){var x=this.a
x.e=this.b
x.Q=null
x.x=0
x.z=new A.b6(Date.now(),0,!1)},
$S:0}
B.bmA.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bmy())},
$S:40}
B.bmy.prototype={
$0(){},
$S:0}
B.bmC.prototype={
$1(d){return this.a.x=d},
$S:57}
B.bmB.prototype={
$1(d){return this.a.Br(this.b,!1)},
$S:9}
B.bmD.prototype={
$0(){var x,w=this.a
w.e=null
x=this.b
w.Q=B.Ir(x)
w.as=x},
$S:0}
B.bmu.prototype={
$0(){var x=this.a
x.e=null
x.r.D(0,this.b)},
$S:0}
B.bmv.prototype={
$0(){var x,w=this.a,v=this.b
w.r.I(0,v)
x=this.c
w.w.n(0,v,B.Ir(x))
w.as=x},
$S:0}
B.bmw.prototype={
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
return A.d(n.a.aiQ(s.b,B.Bc(H.Io(l,m,k.vd(l,m)).b).length),$async$$1)
case 6:r=f
l=o.a
k=l.f
l=l.c
q=B.bID(H.Io(l,m,k.vd(l,m)).b,r.a)
if(C.c.ap(q.c).length!==0){l=n.c
k=o.a.c
j=q.gqj()
l.ahV(k,m,n.b.a,j)}n.wP()
if(o.c!=null)o.t(new B.bmr(o,m,q))
t.push(5)
x=4
break
case 3:v=2
h=u.pop()
o=A.Y(h)
if(o instanceof B.kF){p=o
o=s.a
if(o.c!=null)o.t(new B.bms(o,s.c,p))}else throw h
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
o=s.a
if(o.c!=null)o.t(new B.bmt(o,s.c))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$$1,w)},
$S:142}
B.bmr.prototype={
$0(){var x=this.c
this.a.f.n(0,this.b,x)
return x},
$S:0}
B.bms.prototype={
$0(){var x=this.a,w=this.c
x.w.n(0,this.b,B.Ir(w))
x.as=w},
$S:0}
B.bmt.prototype={
$0(){return this.a.r.I(0,this.b)},
$S:0}
B.bmx.prototype={
$0(){var x=this.a
x.f.ah(0)
x.w.ah(0)
x.as=null},
$S:0}
B.bmE.prototype={
$1(d){return d.gqj()},
$S:z+13}
B.bmF.prototype={
$0(){return this.a.Br(this.b,!0)},
$S:0}
B.bmG.prototype={
$0(){return this.a.CV(this.b)},
$S:0}
B.bmh.prototype={
$0(){},
$S:0}
B.bmo.prototype={
$2(d,e){return d+this.a.Y5(e)},
$S:104}
B.bmp.prototype={
$2(d,e){return d+I.c1[e-1].a[1]},
$S:104}
B.bmn.prototype={
$0(){return this.a.HA(this.b)},
$S:0}
B.bmm.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.b,o=A.o(H.jt(p),q,q,q,q,C.p4,q,q,q),n=y.p,m=A.a([],n)
for(x=this.c,w=this.a,v=w.d,u=p*1000,t=1;t<=x;++t){s=new A.bb(10,10)
r=v.c.a.h(0,u+t)
switch((r==null?$.pH():r).a.a){case 2:r=G.bY.bN(0.35)
break
case 1:r=D.cW.bN(0.35)
break
case 0:r=C.yx
break
default:r=q}m.push(A.aA(C.V,A.o(E.aZ(t),q,q,q,q,K.U6,q,q,q),C.m,q,q,new A.as(r,q,q,new A.dh(s,s,s,s),q,q,C.r),q,38,q,q,q,q,38))}return A.dK(!0,new A.a4(C.iF,A.af(A.a([o,C.aS,D.aWb,C.R,new A.em(D.Ym,A.hV(A.es(m,C.b6,6,6),q,C.t,q,q,C.w),q),C.ar,A.bO(D.aX7,q,q,q,new B.bml(w,d,p),q,q)],n),C.ak,C.f,C.Y),q),C.G,!0)},
$S:52}
B.bml.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.b
t=v.c
x=4
return A.d(A.ev(null,new B.bmk(t),u,y.y),$async$$0)
case 4:x=e===!0?2:3
break
case 2:x=5
return A.d(v.a.d.Fn(t),$async$$0)
case 5:if(u.e!=null)A.ak(u,!1).es()
case 3:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.bmk.prototype={
$1(d){var x=null,w=A.o("\u0647\u062a\u0628\u062f\u0623 "+H.jt(this.a)+" \u0645\u0646 \u0627\u0644\u0623\u0648\u0644.",x,x,x,x,x,x,x,x)
return A.ey(A.a([A.bO(C.wp,x,x,x,new B.bmi(d),x,x),A.bO(D.aYv,x,x,x,new B.bmj(d),x,x)],y.p),w,D.aXZ)},
$S:19}
B.bmi.prototype={
$0(){A.ak(this.a,!1).bi(!1)
return null},
$S:0}
B.bmj.prototype={
$0(){A.ak(this.a,!1).bi(!0)
return null},
$S:0}
B.btO.prototype={
$1(d){var x=this.a
return new A.jJ(new B.btN(x),null,x,null)},
$S:917}
B.btN.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.a,r=s.b,q=A.a([],y.n)
for(x=y.c,w=1;w<=5;++w)q.push(new A.ep(w,t,A.o(E.aZ(w),t,t,t,t,t,t,t,t),x))
x=y.S
v=y.b
u=y.p
x=A.a([D.aSW,C.ar,D.aXn,C.P,A.vc(new B.btI(s,r),q,A.cS([r.a],x),!1,A.jw(t,t,t,new A.b3(new B.btJ(),v),t,t,t,t,new A.b3(new B.btK(),v),t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),x),C.S,A.rj(C.q,C.G,t,new B.btL(s,r),D.aVP,D.aZ2,r.c),A.rj(C.q,C.G,t,new B.btM(s,r),t,D.aSG,r.d)],u)
s=s.x
if(s!=null)C.b.E(x,A.a([C.aS,A.o("\u0627\u0644\u0645\u0639\u0627\u0644\u062c: "+s.gly(),t,t,t,t,F.ag,t,C.aN,t)],u))
x.push(C.S)
x.push(D.V2)
return A.dK(!0,A.hV(A.af(x,C.ak,C.f,C.h),t,C.t,C.iF,t,C.w),C.G,!0)},
$S:918}
B.btI.prototype={
$1(d){return this.a.oQ(this.b.aRQ(d.ga7(d)))},
$S:105}
B.btK.prototype={
$1(d){return d.m(0,C.E)?C.a4:C.i},
$S:4}
B.btJ.prototype={
$1(d){return d.m(0,C.E)?C.q:C.O},
$S:4}
B.btL.prototype={
$1(d){return this.a.oQ(this.b.aRj(d))},
$S:5}
B.btM.prototype={
$1(d){return this.a.oQ(this.b.adv(d))},
$S:5}
B.aTv.prototype={
$0(){return A.eR(A.bW(this.a,0,null),C.c_,null)},
$S:0}
B.bu1.prototype={
$1(d){var x,w=A.aP("https?://",!0,!1)
w=A.bS(d,w,"")
x=A.aP("www\\.",!0,!1)
return A.Bd(A.bS(w,x,"www[.]"),A.aP("([A-Za-z0-9-]+)\\.(com|net|org|io|xyz|ru|info|me|link)\\b",!1,!1),new B.bu2(),null)},
$S:31}
B.bu2.prototype={
$1(d){return A.f(d.h(0,1))+"[.]"+A.f(d.h(0,2))},
$S:59}
B.bnk.prototype={
$0(){var x=this.a
x.e=!0
x.r=null},
$S:0}
B.bnl.prototype={
$0(){return this.a.f=!0},
$S:0}
B.bnm.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bnn.prototype={
$0(){return this.a.e=!1},
$S:0}
B.bnp.prototype={
$0(){var x=this.a
return x.t(new B.bno(x))},
$S:0}
B.bno.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.bu0.prototype={
$1(d){return d==null?"\u2013":A.f(d)},
$S:196};(function installTearOffs(){var x=a._instance_0u
x(B.ab4.prototype,"gaXi","aXj",1)
var w
x(w=B.QB.prototype,"gaXy","zr",0)
x(w,"gaqM","um",0)
x(w=B.Uo.prototype,"gn0","v5",1)
x(w,"gaGv","J0",0)
x(w=B.Wm.prototype,"gn0","v5",1)
x(w,"gaIA","Jh",0)
x(w,"gaM1","y5",0)
x(w,"gavi","Hx",0)
x(w=B.Wl.prototype,"gn0","v5",1)
x(w,"gaJc","aJd",1)
x(B.Wk.prototype,"gn0","v5",1)
x(B.Wn.prototype,"gaNf","Ke",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.Ap,[B.aZU,B.mt,B.Bu,B.Dw,B.AH])
x(A.a6,[B.Yq,B.Dx,B.Se,B.Ac,B.ab3])
w(B.aVG,A.x5)
x(A.hK,[B.aVH,B.aTz,B.aTB,B.aTC,B.aTA,B.aL2,B.br9,B.aTJ,B.aTK,B.aTH,B.beW,B.beX,B.beY,B.beO,B.beR,B.beM,B.bt5,B.bt4,B.bt1,B.bt3,B.bsY,B.bsZ,B.bn5,B.bn7,B.bn6,B.bnb,B.bmQ,B.bmR,B.bnh,B.bnf,B.bnc,B.bnd,B.bne,B.bmJ,B.bmL,B.bmK,B.bmA,B.bmC,B.bmB,B.bmw,B.bmE,B.bmm,B.bmk,B.btO,B.btI,B.btK,B.btJ,B.btL,B.btM,B.bu1,B.bu2,B.bu0])
x(A.N,[B.ab4,B.QC,B.FJ,B.FL,B.FK,B.kF,B.NV,B.lT,B.Es,B.pS,B.ab5,B.QA])
x(A.ke,[B.aTw,B.aTy,B.aTD,B.aTE,B.aTG,B.aTF,B.aL3,B.aTL,B.beV,B.beU,B.beI,B.beP,B.beS,B.beT,B.beL,B.beK,B.beN,B.beJ,B.beQ,B.bt0,B.bsX,B.bsW,B.bt_,B.bmH,B.bmX,B.bn0,B.bn1,B.bn2,B.bn4,B.bn3,B.bn8,B.bna,B.bn9,B.bmW,B.bmY,B.bmP,B.bmO,B.bmS,B.bng,B.bni,B.bnj,B.bmT,B.bn_,B.bmZ,B.bmI,B.bmM,B.bmN,B.bmq,B.bmz,B.bmy,B.bmD,B.bmu,B.bmv,B.bmr,B.bms,B.bmt,B.bmx,B.bmF,B.bmG,B.bmh,B.bmn,B.bml,B.bmi,B.bmj,B.aTv,B.bnk,B.bnl,B.bnm,B.bnn,B.bnp,B.bno])
x(A.mU,[B.aTx,B.bpG,B.aTM,B.aTN,B.bt2,B.bmV,B.bmU,B.bmo,B.bmp,B.btN])
w(B.QB,A.h9)
x(A.P,[B.uS,B.zY,B.zX,B.zW,B.zZ])
x(A.S,[B.Uo,B.Wm,B.Wl,B.Wk,B.Wn])})()
A.o3(b.typeUniverse,JSON.parse('{"Yq":{"a6":[],"e":[]},"kF":{"bm":[]},"zY":{"P":[],"e":[]},"zX":{"P":[],"e":[]},"zW":{"P":[],"e":[]},"zZ":{"P":[],"e":[]},"QB":{"ar":[]},"uS":{"P":[],"e":[]},"Uo":{"S":["uS"]},"Dx":{"a6":[],"e":[]},"Se":{"a6":[],"e":[]},"Wm":{"S":["zY"]},"Ac":{"a6":[],"e":[]},"Wl":{"S":["zX"]},"Wk":{"S":["zW"]},"ab3":{"a6":[],"e":[]},"Wn":{"S":["zZ"]}}'))
var y=(function rtii(){var x=A.a1
return{u:x("pS"),c:x("ep<v>"),r:x("cY<v>"),k:x("y<lT>"),n:x("y<ep<v>>"),I:x("y<cY<v>>"),R:x("y<fX>"),Z:x("y<aJ<h,@>>"),d:x("y<NV>"),s:x("y<h>"),p:x("y<e>"),t:x("y<v>"),m:x("bh"),j:x("R<@>"),L:x("R<v>"),P:x("aJ<h,@>"),f:x("aJ<@,@>"),x:x("aj<h,v>"),a:x("bl"),K:x("N"),B:x("Es"),l:x("+(v,v)"),e:x("cG<lT>"),N:x("h"),C:x("FJ"),D:x("FK"),X:x("QC"),_:x("FL"),U:x("aE<h>"),G:x("mt"),q:x("o0"),b:x("b3<H?>"),y:x("A"),i:x("J"),z:x("@"),S:x("v"),A:x("bh?"),Y:x("aJ<@,@>?"),O:x("N?"),M:x("+quota,usage(v,v)?"),o:x("eF"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.lO=new B.Bu(0,"none")
D.lP=new B.Bu(1,"learning")
D.dY=new B.Bu(2,"memorized")
D.Ym=new A.av(0,1/0,0,320)
D.dB=new A.H(1,0.9725490196078431,0.44313725490196076,0.44313725490196076,C.k)
D.Yu=new A.as(D.dB,null,null,null,null,null,C.cw)
D.cW=new A.H(1,0.984313725490196,0.7490196078431373,0.1411764705882353,C.k)
D.ada=new A.a0(C.B_,null,C.c5,null,null,null)
D.aY2=new A.r("\u0627\u0644\u0646\u0635 \u0645\u062e\u0641\u064a \u2014 \u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.ej,null,null,null,null,null,null,null,null)
D.aNe=new A.t(!0,C.eV,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWc=new A.r("(\u062f\u0648\u0633 \u0647\u0646\u0627 \u0644\u0648 \u0639\u0627\u064a\u0632 \u062a\u0628\u0635)",null,D.aNe,null,null,null,null,null,null,null,null)
D.aoQ=x([D.ada,C.P,D.aY2,D.aWc],y.p)
D.a42=new A.j1(C.w,C.f,C.h,C.j,null,C.b5,null,0,D.aoQ,null)
D.a7d=new A.a_(0,18,0,18)
D.a7g=new A.a_(0,26,0,26)
D.a7l=new A.a_(0,4,0,6)
D.a7z=new A.a_(14,12,14,14)
D.a89=new A.a_(3,0,0,0)
D.aar=new A.a3(63251,"MaterialIcons",null,!1)
D.mU=new A.a3(63677,"MaterialIcons",null,!1)
D.aaY=new A.a3(983256,"MaterialIcons",null,!1)
D.aaW=new A.a3(983209,"MaterialIcons",null,!1)
D.abq=new A.a0(D.aaW,28,C.q,null,null,null)
D.abS=new A.a0(C.AN,null,N.hf,null,null,null)
D.aag=new A.a3(62961,"MaterialIcons",null,!1)
D.acb=new A.a0(D.aag,null,null,null,null,null)
D.aap=new A.a3(63199,"MaterialIcons",null,!1)
D.acc=new A.a0(D.aap,null,null,null,null,null)
D.acf=new A.a0(C.iQ,null,C.eV,null,null,null)
D.ach=new A.a0(C.kE,44,C.i,null,null,null)
D.acz=new A.a0(D.mU,null,D.dB,null,null,null)
D.acI=new A.a0(C.tl,null,D.dB,null,null,null)
D.acS=new A.a0(C.AI,null,null,null,null,null)
D.acT=new A.a0(D.mU,null,null,null,null,null)
D.Bl=new A.a0(C.mY,null,null,null,null,null)
D.ad8=new A.a0(C.kB,20,D.cW,null,null,null)
D.adl=new A.a0(C.mW,30,C.q,null,null,null)
D.adC=new A.a0(C.mX,16,C.q,null,null,null)
D.aaE=new A.a3(63520,"MaterialIcons",null,!1)
D.adP=new A.a0(D.aaE,null,null,null,null,null)
D.adW=new A.a0(C.kD,null,null,null,null,null)
D.aac=new A.a3(62842,"MaterialIcons",null,!0)
D.ae0=new A.a0(D.aac,null,null,null,null,null)
D.C5=x([1,3,5],y.t)
D.CT=x(["\u0627\u0639\u0648\u0630","\u0628\u0627\u0644\u0644\u0647","\u0645\u0646","\u0627\u0644\u0634\u064a\u0637\u0627\u0646","\u0627\u0644\u0631\u062c\u064a\u0645"],y.s)
D.az4=new A.a4(C.kt,T.qf,null)
D.amB=x([D.az4],y.p)
D.aCk=new A.Q(C.iS,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0629 \u0628\u0635\u0648\u062a \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062d\u0635\u0631\u064a (\u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645) \u0645\u0631\u0629 \u0623\u0648 \u0663 \u0623\u0648 \u0665 \u0645\u0631\u0627\u062a.")
D.aCc=new A.Q(D.mU,"\u0633\u0645\u0651\u0639\u0647\u0627 \u0645\u0646 \u062d\u0641\u0638\u0643 \u2014 \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0644\u0648\u0651\u0646\u0644\u0643 \u0643\u0644 \u0643\u0644\u0645\u0629: \u0623\u062e\u0636\u0631 \u0635\u062d\u060c \u0623\u0635\u0641\u0631 \u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0623\u062d\u0645\u0631 \u063a\u0644\u0637.")
D.aCx=new A.Q(C.hr,"\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0645\u0627 \u062a\u0633\u0645\u0651\u0639\u0647\u0627 \u0635\u062d \u0645\u0631\u062a\u064a\u0646 \u0648\u0631\u0627 \u0628\u0639\u0636 (\u062a\u0642\u062f\u0631 \u062a\u063a\u064a\u0651\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a).")
D.aaL=new A.a3(63625,"MaterialIcons",null,!1)
D.aCG=new A.Q(D.aaL,"\u0643\u0644 \u062f\u0647 \u0628\u064a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u2014 \u0635\u0648\u062a\u0643 \u0645\u0634 \u0628\u064a\u062a\u0631\u0641\u0639 \u0639\u0644\u0649 \u0623\u064a \u0633\u064a\u0631\u0641\u0631.")
D.ao7=x([D.aCk,D.aCc,D.aCx,D.aCG],A.a1("y<+(a3,h)>"))
D.apS=x([D.lO,D.lP,D.dY],A.a1("y<Bu>"))
D.Hl=x(["\u0628\u0633\u0645","\u0627\u0644\u0644\u0647","\u0627\u0644\u0631\u062d\u0645\u0646","\u0627\u0644\u0631\u062d\u064a\u0645"],y.s)
D.awk=new B.Dw(0,"idle")
D.Nq=new B.Dw(1,"loading")
D.hK=new B.Dw(2,"ready")
D.awl=new B.Dw(3,"failed")
D.acx=new A.a0(C.d7,18,G.bY,null,null,null)
D.aYH=new A.r("\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u062c\u0627\u0647\u0632 \u064a\u0633\u0645\u0639\u0643",null,K.pa,null,null,null,null,null,null,null,null)
D.alP=x([D.acx,C.bI,D.aYH],y.p)
D.aHS=new A.jd(C.az,C.f,C.h,C.j,null,C.b5,null,0,D.alP,null)
D.ayr=new A.a4(C.ay,D.aHS,null)
D.a86=new A.a_(2,6,2,4)
D.aMT=new A.t(!0,C.q,null,null,null,null,14,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSV=new A.r("\u0627\u0628\u062f\u0623 \u0645\u0646 \u0647\u0646\u0627 \u2014 \u0627\u0644\u0641\u0627\u062a\u062d\u0629 \u0648\u062c\u0632\u0621 \u0639\u0645\u0651",null,D.aMT,null,null,null,null,null,null,null,null)
D.ayz=new A.a4(D.a86,D.aSV,null)
D.aYP=new A.r("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.ej,null,null,null,null,null,null,null,null)
D.amR=x([O.oT,C.aq,D.aYP],y.p)
D.aHQ=new A.jd(C.az,C.cn,C.h,C.j,null,C.b5,null,0,D.amR,null)
D.ayF=new A.a4(P.r8,D.aHQ,null)
D.wi=new A.t(!0,D.cW,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYY=new A.r("\u0646\u0635\u064a\u062d\u0629: \u0627\u062d\u0641\u0638 \u0663\u2013\u0665 \u0622\u064a\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0631\u0629 \u0623\u0633\u0647\u0644.",null,D.wi,null,null,null,null,null,null,null,null)
D.ayI=new A.a4(C.fv,D.aYY,null)
D.aYD=new A.r("\u0644\u0633\u0647 \u0645\u0633\u0645\u0651\u0639\u062a\u0634 \u0623\u064a \u0622\u064a\u0629 \u2014 \u0627\u0628\u062f\u0623 \u0628\u0633\u0648\u0631\u0629 \u0642\u0635\u064a\u0631\u0629 \u0645\u0646 \u062c\u0632\u0621 \u0639\u0645\u0651.",null,F.ag,C.af,null,null,null,null,null,null,null)
D.ayN=new A.a4(C.H,D.aYD,null)
D.a83=new A.a_(2,0,2,8)
D.aWk=new A.r("\u0627\u0644\u0633\u0648\u0631 \u0627\u0644\u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u060c \u0645\u0646 \u0627\u0644\u0646\u0627\u0633 \u0644\u062d\u062f \u0627\u0644\u0646\u0628\u0623.",null,F.ag,null,null,null,null,null,null,null,null)
D.az_=new A.a4(D.a83,D.aWk,null)
D.adJ=new A.a0(C.hq,30,C.q,null,null,null)
D.aRu=new A.t(!0,C.i,null,null,null,null,17,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZl=new A.r("\u0633\u0645\u0651\u0639\u060c \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0642\u0648\u0644\u0643 \u0635\u062d \u0648\u0644\u0627 \u063a\u0644\u0637",null,D.aRu,null,null,null,null,null,null,null,null)
D.a8J=new A.dE(1,C.aX,D.aZl,null)
D.an2=x([D.adJ,C.aY,D.a8J],y.p)
D.aHJ=new A.jd(C.az,C.f,C.h,C.j,null,C.b5,null,0,D.an2,null)
D.ads=new A.a0(C.hr,18,G.bY,null,null,null)
D.Uf=new A.t(!0,G.bY,null,null,null,null,12,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYn=new A.r("\u0645\u062d\u0641\u0648\u0638\u0629",null,D.Uf,null,null,null,null,null,null,null,null)
D.amc=x([D.ads,C.fP,D.aYn],y.p)
D.aHP=new A.jd(C.az,C.f,C.Y,C.j,null,C.b5,null,0,D.amc,null)
D.aJZ=new A.G(0,30)
D.oS=new A.G(1/0,54)
D.aK9=new A.G(1/0,48)
D.aKc=new A.G(1/0,50)
D.aKf=new A.G(1/0,52)
D.aKi=new A.cs(16,null,null,null)
D.aKm=new A.cs(14,14,O.y2,null)
D.aXe=new A.r("safe mode / no-gpu flags cleared (reload)",null,null,null,null,null,null,null,null,null,null)
D.aKN=new A.ih(D.aXe,null,null,null,null,null,null,null,null,null,null,null,null,C.D,!1,null,null,null,C.l,null)
D.aMm=new A.t(!0,C.i,null,null,null,null,14.5,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aML=new A.t(!0,C.a6,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.wb=new A.t(!0,D.dB,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNZ=new A.t(!0,C.i,null,null,null,null,12,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.i6=new A.t(!0,C.i,null,"AmiriQuranMT",null,null,27,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPr=new A.t(!0,C.cj,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Ui=new A.t(!0,D.dB,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPO=new A.t(!0,C.q,null,null,null,null,24,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Um=new A.t(!0,C.i,null,null,null,null,12.5,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQ1=new A.t(!0,C.q,null,null,null,null,null,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQE=new A.t(!0,D.cW,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQF=new A.t(!0,G.bY,null,null,null,null,null,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQX=new A.t(!0,C.i,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSk=new A.r("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u062e\u0631 \u0645\u0631\u0629",null,C.i9,null,null,null,null,null,null,null,null)
D.aSG=new A.r("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643 (\u062e\u0628\u0651\u064a \u0627\u0644\u0646\u0635)",null,C.cP,null,null,null,null,null,null,null,null)
D.aSW=new A.r("\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,C.p4,null,null,null,null,null,null,null,null)
D.aSY=new A.r("\u2022 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641: \u0645\u0634\u0631\u0648\u0639 \u062a\u0646\u0632\u064a\u0644 Tanzil (\u062a\u0631\u062e\u064a\u0635 CC BY 3.0).",null,F.ag,null,null,null,null,null,null,null,null)
D.aNX=new A.t(!0,G.bY,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aT4=new A.r("\u0648\u0635\u0644\u062a\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2014 \u0634\u0643\u0631\u064b\u0627\u060c \u0647\u0646\u0628\u0635 \u0639\u0644\u064a\u0647\u0627.",null,D.aNX,null,null,null,null,null,null,null,null)
D.aT7=new A.r("\u062e\u0628\u0651\u064a \u0646\u0635 \u0627\u0644\u0622\u064a\u0629 \u0648\u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,F.ag,null,null,null,null,null,null,null,null)
D.aTd=new A.r("\u0639\u062f\u0651\u064a \u0644\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.ej,null,null,null,null,null,null,null,null)
D.aTV=new A.r("\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0627\u0628\u062f\u0623",null,C.cB,null,null,null,null,null,null,null,null)
D.aUj=new A.r("\u064a\u0644\u0627 \u0646\u0628\u062f\u0623",null,C.cS,null,null,null,null,null,null,null,null)
D.aUn=new A.r("\u0645\u0645\u0643\u0646 \u062a\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 \u062f\u0644\u0648\u0642\u062a\u064a \u0644\u062d\u062f \u0645\u0627 \u064a\u062e\u0644\u0635.",null,F.ag,null,null,null,null,null,null,null,null)
D.aUE=new A.r("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.Ux,null,null,null,null,null,null,null,null)
D.aV1=new A.r("\u062c\u0631\u0651\u0628 \u0639\u0644\u0649 \u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a (\u0644\u0644\u062a\u062c\u0631\u0628\u0629)",null,null,null,null,null,null,null,null,null,null)
D.aVk=new A.r("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643",null,K.lp,null,null,null,null,null,null,null,null)
D.aVG=new A.r("reset safe mode / WebGPU ban",null,P.U2,null,null,null,null,null,null,null,null)
D.aVL=new A.r("\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629",null,D.wi,null,null,null,null,null,null,null,null)
D.aVP=new A.r("\u0628\u0639\u062f \u062d\u0648\u0627\u0644\u064a \u062b\u0627\u0646\u064a\u0629 \u0633\u0643\u0648\u062a",null,F.ag,null,null,null,null,null,null,null,null)
D.aW3=new A.r("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636",null,F.aZ,null,null,null,null,null,null,null,null)
D.aWb=new A.r("\u0623\u062e\u0636\u0631: \u0645\u062d\u0641\u0648\u0638\u0629 \u2014 \u0623\u0635\u0641\u0631: \u0628\u062a\u0631\u0627\u062c\u0639\u0647\u0627 \u2014 \u0631\u0645\u0627\u062f\u064a: \u0644\u0633\u0647",null,F.ag,null,null,null,null,null,null,null,null)
D.aWl=new A.r("\u0645\u0641\u064a\u0634 \u0633\u0648\u0631\u0629 \u0628\u0627\u0644\u0627\u0633\u0645 \u062f\u0647",null,F.ag,null,null,null,null,null,null,null,null)
D.aRw=new A.t(!0,C.q,null,null,null,null,12.5,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aX6=new A.r("\u0627\u0628\u0639\u062a \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aRw,null,null,null,null,null,null,null,null)
D.aPb=new A.t(!0,D.dB,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aX7=new A.r("\u0627\u0628\u062f\u0623 \u0627\u0644\u0633\u0648\u0631\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644",null,D.aPb,null,null,null,null,null,null,null,null)
D.aXn=new A.r("\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f \u0643\u0627\u0645 \u062a\u0633\u0645\u064a\u0639 \u0635\u062d \u0648\u0631\u0627 \u0628\u0639\u0636\u061f",null,K.lp,null,null,null,null,null,null,null,null)
D.aM8=new A.t(!0,C.i,null,null,null,null,null,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXD=new A.r("\u0627\u0644\u0645\u0635\u0627\u062f\u0631",null,D.aM8,null,null,null,null,null,null,null,null)
D.aXN=new A.r("\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.cB,null,null,null,null,null,null,null,null)
D.aXZ=new A.r("\u062a\u0645\u0633\u062d \u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0633\u0648\u0631\u0629 \u062f\u064a\u061f",null,null,null,null,null,null,null,null,null,null)
D.aY8=new A.r("\u0633\u0645\u0651\u0639\u0647\u0645 \u062a\u0627\u0646\u064a",null,null,null,null,null,null,null,null,null,null)
D.aYv=new A.r("\u0627\u0645\u0633\u062d",null,null,null,null,null,null,null,null,null,null)
D.aYw=new A.r("\u2022 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: whisper-base-ar-quran \u0645\u0646 Tarteel (\u062a\u0631\u062e\u064a\u0635 Apache-2.0)\u060c \u0628\u0635\u064a\u063a\u0629 ONNX \u0645\u0646 \u0645\u0634\u0631\u0648\u0639 Basira\u060c \u0648\u0628\u064a\u0634\u062a\u063a\u0644 \u062c\u0648\u0651\u0647 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0628\u0645\u0643\u062a\u0628\u0629 Transformers.js.",null,F.ag,null,null,null,null,null,null,null,null)
D.aYx=new A.r("\u062e\u0644\u0635\u062a",null,C.jD,null,null,null,null,null,null,null,null)
D.aYy=new A.r("\u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647 \u0630\u0627\u0643\u0631\u062a\u0647 \u0642\u0644\u064a\u0644\u0629 \u2014 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0645\u0643\u0646 \u064a\u0643\u0648\u0646 \u0628\u0637\u064a\u0621 \u0639\u0644\u064a\u0647.",null,D.wi,null,null,null,null,null,null,null,null)
D.aQ3=new A.t(!0,C.cj,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,C.fS,null,null,null,null,null,null,null,null)
D.aYU=new A.r("\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aQ3,null,null,null,null,null,null,null,null)
D.aZ0=new A.r("\u0623\u0648\u0644 \u0645\u0631\u0629 \u0628\u0633: \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,F.aZ,null,null,null,null,null,null,null,null)
D.aZ2=new A.r("\u0648\u0642\u0651\u0641 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0644\u0648\u062d\u062f\u0647 \u0644\u0645\u0627 \u0623\u0633\u0643\u062a",null,C.cP,null,null,null,null,null,null,null,null)
D.aZk=new A.r("\u2022 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: \u0627\u0644\u0634\u064a\u062e \u0645\u062d\u0645\u0648\u062f \u062e\u0644\u064a\u0644 \u0627\u0644\u062d\u0635\u0631\u064a \u2014 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645\u060c \u0645\u0646 everyayah.com.",null,F.ag,null,null,null,null,null,null,null,null)
D.V2=new B.ab3(null)
D.aZY=new B.zW(null)
D.aZZ=new B.QA(2,1,!0,!1,!1)
D.V3=new B.QC(!1,!1,!1,!1,!1,0)
D.fZ=new B.mt(0,"ok")
D.pq=new B.mt(1,"near")
D.pr=new B.mt(2,"wrong")
D.ps=new B.mt(3,"missing")
D.Vs=new B.mt(4,"extra")
D.aaA=new A.a3(63456,"MaterialIcons",null,!1)
D.b4k=new B.Ac(D.cW,D.aaA,"\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629","\u0642\u0631\u0651\u0628 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0646\u0643 \u0648\u0627\u0642\u0631\u0627 \u0628\u0635\u0648\u062a \u0648\u0627\u0636\u062d \u0641\u064a \u0645\u0643\u0627\u0646 \u0647\u0627\u062f\u064a\u060c \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a.",null)
D.jJ=new B.aZU(0,"flat")
D.b4F=new B.Se(!1,null)
D.wN=new B.Se(!0,null)
D.jQ=new B.AH(0,"idle")
D.pD=new B.AH(1,"playing")
D.pE=new B.AH(2,"recording")
D.lF=new B.AH(3,"thinking")
D.h4=new B.AH(4,"result")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c99","bzo",()=>new B.ab4())
x($,"ccj","bO6",()=>A.aP("\u0640[\u064b-\u0652]*\u0670",!0,!1))
x($,"cck","bO7",()=>A.aP("\u0640[\u064b-\u0652]*[\u06e6\u06e7]",!0,!1))
x($,"ccv","bOf",()=>A.aP("\u0648\u0670",!0,!1))
x($,"cbT","bNO",()=>A.aP("[\u0648\u064a\u0649][\u064b-\u0652]*[\u0654]",!0,!1))
x($,"cap","bMQ",()=>A.aP("\u0627[\u0654\u0655]",!0,!1))
x($,"cbw","bNx",()=>A.aP("[\u0654\u0655]",!0,!1))
x($,"caq","bMR",()=>A.aP("[\u0622\u0623\u0625\u0671\u0672\u0673]",!0,!1))
x($,"caw","bMW",()=>A.aP("[\u0624\u0626]",!0,!1))
x($,"cby","bNz",()=>A.aP("[\u064b-\u065f\u0670\u06d6-\u06ed\u08d3-\u08ff\u0640]",!0,!1))
x($,"cbY","bNR",()=>A.aP("[\u06dd\u06de\u0660-\u0669\u06f0-\u06f90-9]",!0,!1))
x($,"cbF","bNF",()=>A.aP("[^\u0621-\u064a\\s]",!0,!1))
x($,"cci","bzZ",()=>A.aP("\\s+",!0,!1))
x($,"c6u","pH",()=>B.bP8(D.lO,0,A.bvh(0,!0)))
x($,"c9a","Iy",()=>new B.QB($.bzo(),D.aZZ,B.bX0(),D.awk,$.a7()))})()};
(a=>{a["qatjzNN423t636zSXob8kO80AmM="]=a.current})($__dart_deferred_initializers__);