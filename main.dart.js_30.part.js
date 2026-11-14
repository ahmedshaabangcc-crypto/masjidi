((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,P,R,G,N,F,O,S,T,I,L,B={
c_A(d){var x,w,v,u,t,s
if(d instanceof B.kL)return d
try{x=A.cs(d)
w=x.code
v=x.message
u=w==null?"failed":A.a8(w)
t=v==null?"":A.a8(v)
return new B.kL(u,t)}catch(s){u=A.f(d)
return new B.kL("failed",u)}},
ac9:function ac9(){this.b=this.a=null},
aVg:function aVg(d){this.a=d},
aVj:function aVj(){},
aVi:function aVi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aVh:function aVh(d){this.a=d},
aVn:function aVn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aVl:function aVl(d){this.a=d},
aVm:function aVm(d){this.a=d},
aVo:function aVo(d){this.a=d},
aVq:function aVq(d,e,f){this.a=d
this.b=e
this.c=f},
aVp:function aVp(d,e,f){this.a=d
this.b=e
this.c=f},
aVk:function aVk(){},
c_B(d,e){return new B.kL(d,e)},
Rl:function Rl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.w=i},
Gr:function Gr(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i
_.w=j},
Gt:function Gt(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Gs:function Gs(d,e){this.a=d
this.b=e},
kL:function kL(d,e){this.a=d
this.b=e},
bN5(d){var x,w=$.bRA()
w=A.bR(d,w,"\u0627")
x=$.bRB()
w=A.bR(w,x,"\u064a")
x=$.bRJ()
w=A.bR(w,x,"\u0627")
x=$.bQj()
w=A.bR(w,x,"\u0627")
x=$.bRh()
w=A.bR(w,x,"\u0621")
x=$.bR0()
w=A.bR(w,x,"\u0621")
x=$.bQk()
w=A.bR(w,x,"\u0627")
x=$.bQp()
w=A.bR(w,x,"\u0621")
w=A.bR(w,"\u0649","\u064a")
w=A.bR(w,"\u0629","\u0647")
x=$.bR2()
w=A.bR(w,x,"")
x=$.bRk()
w=A.bR(w,x," ")
x=$.bR8()
w=A.bR(w,x," ")
x=$.bDr()
return C.c.ai(A.bR(w,x," "))},
c40(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.length,k=e.length
if(l===0)return k
if(k===0)return l
x=k+1
w=y.S
v=J.kv(x,w)
for(u=0;u<x;++u)v[u]=u
t=A.bW(x,0,!1,w)
for(s=1;s<=l;++s,r=t,t=v,v=r){t[0]=s
for(w=s-1,u=1;u<=k;++u){q=u-1
p=d.charCodeAt(w)===e.charCodeAt(q)?0:1
o=v[u]+1
n=t[q]+1
m=v[q]+p
if(o<n)q=o<m?o:m
else q=n<m?n:m
t[u]=q}}return v[k]},
bxq(d,e){var x,w,v,u,t,s
if(d===e)return 1
x=A.aO("[\u0627\u0621]",!0,!1)
w=A.bR(d,x,"")
x=A.aO("[\u0627\u0621]",!0,!1)
v=A.bR(e,x,"")
if(w.length!==0&&w===v)return 1
u=d.length
t=e.length
u=u>t?u:t
if(u===0)return 1
s=1-B.c40(d,e)/u
return s>=1?0.99:s},
BO(d){var x,w,v,u,t,s,r,q=A.a([],y.d)
for(x=C.c.qY(d,$.bDr()),w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.length===0)continue
t=B.bN5(u)
s=A.bR(t," ","")
if(s.length===0){if(q.length!==0){r=q.pop()
q.push(new B.OB(r.a+" "+u,r.b))}continue}q.push(new B.OB(u,s))}return q},
c2N(d,e){var x,w,v,u,t=new B.bsN(),s=A.a([],y.s)
for(x=A.eS(e,0,A.ib(5,"count",y.S),A.ae(e).c),w=x.$ti,x=new A.bU(x,x.gL(0),w.i("bU<aG.E>")),w=w.i("aG.E");x.u();){v=x.d
s.push((v==null?w.a(v):v).b)}u=!t.$2(s,D.DP)&&t.$2(d,D.DP)?C.b.ir(d,5):d
return!t.$2(s,D.Ik)&&t.$2(u,D.Ik)?C.b.ir(u,4):u},
bM5(d,e){var x=B.BO(d),w=B.bN5(e),v=y.U
v=A.a0(new A.aF(A.a(w.split(" "),y.s),new B.buf(),v),v.i("M.E"))
return new B.Fa(x,B.c20(x,B.c2N(v,x)),w)},
c20(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=A.a([],y.s)
for(x=a5.length,w=0;w<a5.length;a5.length===x||(0,A.B)(a5),++w)a4.push(a5[w].b)
v=a4.length
u=a6.length
t=u+1
x=(v+1)*t
s=y.i
r=A.bW(x,0,!1,s)
q=A.bW(x,0,!1,y.S)
p=A.bW(v*(u===0?1:u),0,!1,s)
for(o=0;o<v;++o)for(x=o*u,n=0;n<u;++n)p[x+n]=B.bxq(a4[o],a6[n])
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
e=2}if(n>=2&&r[h-2]<g&&B.bxq(a4[m],a6[n-2]+a6[n-1])>=1){g=r[h-2]
e=3}if(s&&r[i+n-1]<g&&B.bxq(a4[j]+a4[m],a6[n-1])>=1){g=r[i+n-1]
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
if(a2>=1)m=D.h2
else m=a2>=0.6?D.pU:D.pV
a1.push(new B.m0(o,x,s,m))
break
case 1:--o
a1.push(new B.m0(o,a4[o],null,D.pW))
break
case 2:--n
a1.push(new B.m0(null,null,a6[n],D.Wo))
break
case 3:--o
a3=n-2
a1.push(new B.m0(o,a4[o],a6[a3]+" "+a6[n-1],D.h2))
n=a3
break
default:x=o-1;--n
a1.push(new B.m0(x,a4[x],a6[n],D.h2))
o-=2
a1.push(new B.m0(o,a4[o],a6[n],D.h2))}}a4=y.e
a4=A.a0(new A.cD(a1,a4),a4.i("aG.E"))
return a4},
mE:function mE(d,e){this.a=d
this.b=e},
OB:function OB(d,e){this.a=d
this.b=e},
m0:function m0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Fa:function Fa(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
aMF:function aMF(d){this.a=d},
aME:function aME(){},
bsN:function bsN(){},
buf:function buf(){},
bSE(d,e,f){return new B.q8(d,e,f)},
c4Q(d){var x
A:{if("memorized"===d){x=D.e0
break A}if("learning"===d){x=D.m5
break A}x=D.m4
break A}return x},
bO2(d,e){return d>=1&&d<=114&&e>=1&&e<=H.c9[d-1].a[1]},
c_C(){var x=y.S
return new B.aca(A.x(x,y.u),A.aE(x))},
aVs(d){var x=d.il()
return C.c.ds(C.e.j(A.cK(x)),4,"0")+"-"+C.c.ds(C.e.j(A.cj(x)),2,"0")+"-"+C.c.ds(C.e.j(A.cB(x)),2,"0")},
bJe(d){var x=y.x,w=A.a0(new A.ak(A.a(d.split("-"),y.s),A.c66(),x),x.i("aG.E"))
return B.aVs(A.jJ(w[0],w[1],w[2]-1,12,0,0,0))},
bAw(d){var x,w,v,u,t,s,r,q,p=y.S,o=A.x(p,y.u),n=A.aE(p),m=new B.aca(o,n),l=d.h(0,"rows")
if(y.f.b(l))for(x=l.gdv(),x=x.ga_(x),w=y.j;x.u();){v=x.gK()
u=A.f2(A.f(v.a),null)
t=v.b
v=!0
if(u!=null)if(w.b(t))if(J.be(t)>=3){v=C.e.ba(u,1000)
s=C.e.ad(u,1000)
v=!(v>=1&&v<=114&&s>=1&&s<=H.c9[v-1].a[1])}if(v)continue
v=J.bs(t)
r=C.d.bU(A.dr(v.h(t,0)))
if(r<0||r>=3)continue
o.n(0,u,new B.q8(D.asf[r],C.d.bU(A.dr(v.h(t,1))),new A.b_(A.kn(C.d.bU(A.dr(v.h(t,2))),0,!0),0,!0)))}q=d.h(0,"dirty")
if(y.j.b(q)){x=J.by0(q,y.o)
p=A.nq(x,new B.aVr(),x.$ti.i("M.E"),p)
n.E(0,new A.aF(p,o.gWk(),A.w(p).i("aF<M.E>")))}m.c=A.O(d.h(0,"last"))
p=A.bn(d.h(0,"streak"))
p=p==null?null:C.d.bU(p)
p=m.d=p==null?0:p
o=A.bn(d.h(0,"best"))
o=o==null?null:C.d.bU(o)
m.e=o==null?p:o
return m},
arn(d,e){return"https://everyayah.com/data/Husary_Muallim_128kbps/"+C.c.ds(C.e.j(d),3,"0")+C.c.ds(C.e.j(e),3,"0")+".mp3"},
C8:function C8(d,e){this.a=d
this.b=e},
q8:function q8(d,e,f){this.a=d
this.b=e
this.c=f},
aca:function aca(d,e){var _=this
_.a=d
_.b=e
_.c=null
_.e=_.d=0},
aVt:function aVt(){},
aVu:function aVu(){},
aVr:function aVr(){},
Rj:function Rj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bY9(){return new B.vd(null)},
c8x(d,e){var x,w,v,u,t={},s=H.c9[e-1].a[1],r=$.Jj().c
t.a=1
x=r.a
w=e*1000
v=1
for(;;){if(v<=s){v=x.h(0,w+v)
v=(v==null?$.pZ():v).a===D.e0}else v=!1
if(!v)break
v=++t.a}x=t.a
if(x>s){t.a=1
u=1}else u=x
x=s<=10
if(x)u=1
t.b=u
t.c=x?s:C.e.cz(u+4,1,s)
return A.fA(C.dc,new B.bwp(t,s,e),d,!0,null,null,!1,y.l)},
bCg(d){return A.d7(0,0,0,0,0,C.e.cz(C.d.ar(6+d*1.2),25,90))},
bBd(d){return E.aW(C.e.ba(d,60))+":"+C.c.ds(E.aW(C.e.ad(d,60)),2,"\u0660")},
bNO(d){return A.fA(C.dc,new B.bx7($.Jj()),d,!0,null,null,!1,y.H)},
Jd(d){var x,w=d.a
A:{if("timeout"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0627\u062a\u0623\u062e\u0631 \u0623\u0648\u064a \u0648\u0645\u0631\u062f\u0651\u0634\u060c \u0641\u0648\u0642\u0651\u0641\u0646\u0627\u0647 \u0648\u062c\u0631\u0651\u0628\u0646\u0627 \u062a\u0627\u0646\u064a \u0628\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0623\u062e\u0641 \u0648\u0645\u0646\u0641\u0639\u0634. \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}if("crashed"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0642\u0641 \u0641\u062c\u0623\u0629 (\u063a\u0627\u0644\u0628\u064b\u0627 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0634 \u0645\u0643\u0641\u064a\u0629). \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}x=d.gjS()
break A}return x},
c9O(d,e,f){var x,w=new B.bxj(),v=w.$1(f),u=w.$1("\xab\u0627\u0644\u0645\u062d\u0641\u0651\u0638\xbb \u0645\u0634\u0643\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 ("+e+")\n"+d.a+": "+d.b+"\n"),t=1990-u.length
if(v.length>t)v=t<=1?"":C.c.Y(v,0,t-1)+"\u2026"
x=u+v
return x.length>1990?C.c.Y(x,0,1990):x},
bNY(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
try{x=y.P.a(C.a3.eW(a4,null))
s=y.Y
r=s.a(J.b5(x,"rec"))
w=r==null?C.cD:r
q=s.a(J.b5(x,"last"))
v=q==null?C.cD:q
u=new B.bxi()
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
Eh:function Eh(d,e){this.a=d
this.b=e},
Rk:function Rk(d,e,f,g,h){var _=this
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
aVv:function aVv(d){this.a=d},
aVw:function aVw(d){this.a=d},
aVx:function aVx(d){this.a=d},
vd:function vd(d){this.a=d},
Vf:function Vf(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.w=_.r=null},
bhX:function bhX(d){this.a=d},
bhW:function bhW(d,e){this.a=d
this.b=e},
bhY:function bhY(d){this.a=d},
bhV:function bhV(d,e){this.a=d
this.b=e},
bhZ:function bhZ(){},
bhJ:function bhJ(){},
bhP:function bhP(d,e,f){this.a=d
this.b=e
this.c=f},
bhQ:function bhQ(){},
bhT:function bhT(d){this.a=d},
bhS:function bhS(){},
bhU:function bhU(d){this.a=d},
bhM:function bhM(d,e){this.a=d
this.b=e},
bhN:function bhN(d){this.a=d},
bhL:function bhL(){},
bhO:function bhO(d){this.a=d},
bhK:function bhK(d){this.a=d},
bhR:function bhR(d,e){this.a=d
this.b=e},
Ei:function Ei(d,e,f){this.c=d
this.d=e
this.a=f},
T2:function T2(d,e){this.c=d
this.a=e},
bwp:function bwp(d,e,f){this.a=d
this.b=e
this.c=f},
bwm:function bwm(d,e,f){this.a=d
this.b=e
this.c=f},
bwo:function bwo(d,e){this.a=d
this.b=e},
bwl:function bwl(d,e){this.a=d
this.b=e},
bwk:function bwk(d,e){this.a=d
this.b=e},
bwn:function bwn(d,e){this.a=d
this.b=e},
bwg:function bwg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bwf:function bwf(d,e,f){this.a=d
this.b=e
this.c=f},
bwh:function bwh(d){this.a=d},
bwi:function bwi(d){this.a=d},
bwj:function bwj(d,e){this.a=d
this.b=e},
Bh:function Bh(d,e){this.a=d
this.b=e},
Az:function Az(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Xf:function Xf(d,e){var _=this
_.d=d
_.e=$
_.f=e
_.w=_.r=null
_.x=!1
_.y=0
_.ax=_.at=_.as=_.Q=_.z=null
_.ay=0
_.c=_.a=_.ch=null},
bpO:function bpO(){},
bq3:function bq3(d,e){this.a=d
this.b=e},
bq7:function bq7(d){this.a=d},
bq8:function bq8(d){this.a=d},
bq9:function bq9(d,e,f){this.a=d
this.b=e
this.c=f},
bqb:function bqb(d){this.a=d},
bqc:function bqc(d){this.a=d},
bqa:function bqa(){},
bqe:function bqe(d){this.a=d},
bqd:function bqd(d){this.a=d},
bqf:function bqf(d,e){this.a=d
this.b=e},
bqh:function bqh(d){this.a=d},
bqi:function bqi(d){this.a=d},
bqg:function bqg(){},
bq2:function bq2(d,e,f){this.a=d
this.b=e
this.c=f},
bq4:function bq4(d,e,f){this.a=d
this.b=e
this.c=f},
bpW:function bpW(d){this.a=d},
bpX:function bpX(d){this.a=d},
bpV:function bpV(){},
bpY:function bpY(){},
bpZ:function bpZ(d,e){this.a=d
this.b=e},
bqn:function bqn(d){this.a=d},
bqo:function bqo(d){this.a=d},
bqp:function bqp(d,e){this.a=d
this.b=e},
bqm:function bqm(d){this.a=d},
bqq:function bqq(d,e){this.a=d
this.b=e},
bq1:function bq1(){},
bq0:function bq0(d){this.a=d},
bq_:function bq_(d,e){this.a=d
this.b=e},
bq6:function bq6(d){this.a=d},
bq5:function bq5(d){this.a=d},
bqj:function bqj(){},
bqk:function bqk(){},
bql:function bql(){},
bpP:function bpP(d,e,f){this.a=d
this.b=e
this.c=f},
bpQ:function bpQ(d){this.a=d},
bpS:function bpS(){},
bpR:function bpR(){},
bpT:function bpT(d){this.a=d},
bpU:function bpU(d){this.a=d},
AN:function AN(d,e,f,g,h){var _=this
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
Xe:function Xe(d,e,f,g,h){var _=this
_.d=d
_.e=null
_.f=e
_.r=f
_.w=g
_.x=0
_.as=_.Q=_.z=_.y=null
_.at=h
_.c=_.a=null},
bpx:function bpx(){},
bpG:function bpG(d,e){this.a=d
this.b=e},
bpH:function bpH(d){this.a=d},
bpF:function bpF(){},
bpJ:function bpJ(d){this.a=d},
bpI:function bpI(d,e){this.a=d
this.b=e},
bpK:function bpK(d,e){this.a=d
this.b=e},
bpB:function bpB(d,e){this.a=d
this.b=e},
bpC:function bpC(d,e,f){this.a=d
this.b=e
this.c=f},
bpD:function bpD(d,e,f){this.a=d
this.b=e
this.c=f},
bpy:function bpy(d,e,f){this.a=d
this.b=e
this.c=f},
bpz:function bpz(d,e,f){this.a=d
this.b=e
this.c=f},
bpA:function bpA(d,e){this.a=d
this.b=e},
bpE:function bpE(d){this.a=d},
bpL:function bpL(){},
bpM:function bpM(d,e){this.a=d
this.b=e},
bpN:function bpN(d,e){this.a=d
this.b=e},
Ax:function Ax(d){this.a=d},
Xd:function Xd(d){this.d=d
this.c=this.a=null},
bpo:function bpo(){},
bpv:function bpv(d){this.a=d},
bpw:function bpw(){},
bpu:function bpu(d,e){this.a=d
this.b=e},
bpt:function bpt(d,e,f){this.a=d
this.b=e
this.c=f},
bps:function bps(d,e,f){this.a=d
this.b=e
this.c=f},
bpr:function bpr(d){this.a=d},
bpp:function bpp(d){this.a=d},
bpq:function bpq(d){this.a=d},
bx7:function bx7(d){this.a=d},
bx6:function bx6(d){this.a=d},
bx1:function bx1(d,e){this.a=d
this.b=e},
bx3:function bx3(){},
bx2:function bx2(){},
bx4:function bx4(d,e){this.a=d
this.b=e},
bx5:function bx5(d,e){this.a=d
this.b=e},
ac8:function ac8(d){this.a=d},
aVf:function aVf(d){this.a=d},
bxj:function bxj(){},
bxk:function bxk(){},
AA:function AA(d,e,f){this.c=d
this.d=e
this.a=f},
Xg:function Xg(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.r=null},
bqr:function bqr(d){this.a=d},
bqs:function bqs(d){this.a=d},
bqt:function bqt(d,e){this.a=d
this.b=e},
bqu:function bqu(d){this.a=d},
bqw:function bqw(d){this.a=d},
bqv:function bqv(d){this.a=d},
bxi:function bxi(){}},D,Q,H,E,K
J=c[1]
A=c[0]
C=c[2]
M=c[15]
P=c[19]
R=c[20]
G=c[13]
N=c[28]
F=c[33]
O=c[32]
S=c[10]
T=c[30]
I=c[38]
L=c[36]
B=a.updateHolder(c[8],B)
D=c[39]
Q=c[26]
H=c[27]
E=c[16]
K=c[18]
B.ac9.prototype={
pk(){var x=this,w=x.a
if(w!=null)return A.dN(w,y.m)
w=x.b
return w==null?x.b=new B.aVg(x).$0():w},
ri(d,e){return this.azH(d,e,e)},
azH(d,e,f){var x=0,w=A.o(f),v,u=2,t=[],s,r,q,p
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
r=B.c_A(s)
throw A.p(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$ri,w)},
mX(d,e){var x=A.hy(d[e])
if(x==null)x=null
return x===!0},
Ha(){var x=0,w=A.o(y.X),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ha=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
h=A
g=A
x=7
return A.d(s.pk(),$async$Ha)
case 7:r=h.cs(g.ch(e,"support",null,null,null,null))
q=s.mX(r,"worker")
p=s.mX(r,"wasm")
o=s.mX(r,"mic")
n=s.mX(r,"audio")
s.mX(r,"webgpu")
m=s.mX(r,"secure")
s.mX(r,"ios")
l=A.jC(r.memory)
if(l==null)l=null
if(l==null)l=0
s.mX(r,"isolated")
k=A.jC(r.cores)
if(k!=null)C.d.ar(k)
v=new B.Rl(q,p,o,n,m,l)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=D.W0
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$Ha,w)},
AR(){var x=0,w=A.o(y.M),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$AR=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=A
l=A
k=A
x=8
return A.d(s.pk(),$async$AR)
case 8:x=7
return A.d(m.e3(l.cs(k.ch(e,"storage",null,null,null,null)),y.A),$async$AR)
case 7:r=e
if(r==null){v=null
x=1
break}q=C.d.ar(A.dm(r.quota))
p=C.d.ar(A.dm(r.usage))
v=new A.alo(q,p)
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
return A.n($async$AR,w)},
b0J(){var x=y.K
A.Dp(this.pk().bT(new B.aVj(),x),x)},
pj(d,e){var x=A.jC(d[e])
x=x==null?null:C.d.ar(x)
return x==null?0:x},
aZd(d,e,f){return this.ri(new B.aVi(this,d,e,f),y.C)},
gaaa(){var x,w
try{x=A.jD(b.G.sessionStorage)
return x}catch(w){return null}},
gagV(){var x=A.hy(b.G.mogtama3yTutorIsolated)
if(x==null)x=null
return x===!0},
a0x(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
try{m=b.G
l=A.hy(m.crossOriginIsolated)
if(l==null)l=f
if(l===!0)return!1
if(this.gagV())return!1
l=A.hy(m.isSecureContext)
if(l==null)l=f
if(l!==!0)return!1
x=A.cs(m.navigator)
if(!("serviceWorker" in x))return!1
w=A.a8(x.userAgent)
l=A.jC(x.maxTouchPoints)
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
l=A.jC(x.hardwareConcurrency)
h=l==null?f:l
r=h==null?0:h
if(r>0&&r<3)return!1
q=Date.now()
l=this.gaaa()
l=l==null?f:A.O(A.ch(l,"getItem","mt.tutor.iso",f,f,f))
if(l==null)l=f
p=A.f2(l==null?"":l,f)
if(p!=null&&q-p<3e4)return!1
o=A.jD(m.localStorage)
m=o
m=m==null?f:A.O(A.ch(m,"getItem","mt.tutor.noiso",f,f,f))
if(m==null)m=f
n=A.f2(m==null?"":m,f)
if(n!=null&&q-n<2592e5)return!1
return!0}catch(g){return!1}},
afB(){var x,w,v,u,t,s,r=null
try{x=this.gaaa()
if(x!=null)A.ch(x,"setItem","mt.tutor.iso",""+Date.now(),r,r)}catch(w){}x=b.G
v=A.cs(x.location)
u=A.a8(v.hash)
t=A.a8(v.search)
s=A.bO(A.a8(A.cs(x.document).baseURI),0,r).W("tutor/").j(0)
x=u.length===0?"#/masjid/tools/tutor":u
A.ch(v,"replace",s+t+x,r,r,r)},
aYY(){var x,w=null,v=b.G,u=A.cs(v.history),t=A.jC(u.length),s=t==null?w:t
if((s==null?0:s)>1)A.ch(u,"back",w,w,w,w)
else{x=A.a8(A.cs(v.document).baseURI)
A.ch(A.cs(v.location),"replace",A.bO(x,0,w).W("./").j(0)+"#/",w,w,w)}},
a0J(d,e,f,g,h){return this.ri(new B.aVn(this,e,d,f,h,g),y.H)},
a0M(){return this.ri(new B.aVo(this),y.D)},
VX(){var x=null,w=this.a
if(w!=null)A.ch(w,"cancelRecording",x,x,x,x)},
abp(d){var x,w,v=this,u=A.O(d.text)
if(u==null)u=null
if(u==null)u=""
x=v.pj(d,"ms")
w=A.jC(d.seconds)
if(w==null)w=null
if(w==null)w=0
return new B.Gt(u,x,w,v.pj(d,"frames"),v.pj(d,"tokens"),v.mX(d,"retried"),v.pj(d,"encMs"),v.pj(d,"decMs"),v.pj(d,"featMs"))},
a8d(d){var x={}
x.words=d
return x},
ajK(d,e){return this.ri(new B.aVq(this,d,e),y._)},
b2T(d,e){return this.ri(new B.aVp(this,d,e),y._)},
Fs(d,e){return this.b0O(d,e)},
b0O(d,e){var x=0,w=A.o(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Fs=A.k(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=p==null?7:9
break
case 7:x=10
return A.d(s.pk(),$async$Fs)
case 10:x=8
break
case 9:g=p
case 8:r=g
o=A.ae(d).i("ak<1,h>")
o=A.a0(new A.ak(d,new B.aVk(),o),o.i("aG.E"))
x=11
return A.d(A.e3(A.cs(A.ch(r,"play",o,e,null,null)),y.y),$async$Fs)
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
return A.n($async$Fs,w)},
GR(){var x=null,w=this.a
if(w!=null)A.ch(w,"stopPlayback",x,x,x,x)},
Eb(){var x,w,v,u=null
try{w=this.a
x=w==null?u:A.a8(A.ch(w,"diag",u,u,u,u))
w=x
if(w==null)w=u
if(w==null)w="{}"
return w}catch(v){return"{}"}},
b23(){var x,w,v=null
try{x=this.a
if(x!=null)A.ch(x,"resetDevice",v,v,v,v)}catch(w){}},
Zd(d){var x=this.a
if(x!=null)A.ch(x,"prefetch",d,null,null,null)}}
B.Rl.prototype={}
B.Gr.prototype={
glH(){var x=this.f,w=x>0?"CPU \xd7"+x:""
x=this.a
if(x==="webgpu")return"WebGPU"
if(C.c.m(x,"webgpu"))return"WebGPU + "+w
return w.length===0?x:w}}
B.Gt.prototype={
gLX(){var x=this,w=C.d.aA(x.d/100,0),v=x.f?" (retried on 30 s)":""
return"window "+w+" s, "+x.e+" tokens"+v+", mel "+x.x+" ms, encoder "+x.r+" ms, decoder "+x.w+" ms"}}
B.Gs.prototype={}
B.kL.prototype={
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
$ibp:1}
B.mE.prototype={
N(){return"WordStatus."+this.b}}
B.OB.prototype={}
B.m0.prototype={
j(d){var x,w=this.b
if(w==null)w=""
x=this.c
if(x==null)x=""
return this.d.b+":"+w+"->"+x}}
B.Fa.prototype={
gGP(){var x,w=this,v=w.d
if(v===$){x=new B.aMF(w).$0()
w.d!==$&&A.aD()
w.d=x
v=x}return v},
gEs(){var x,w,v,u,t,s=A.a([],y.s)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.d===D.Wo&&u.c!=null){t=u.c
t.toString
s.push(t)}}return s},
gb_4(){return J.oo(this.gGP(),new B.aME()).gL(0)},
gqr(){var x=this.a
return x.length!==0&&this.gb_4()===x.length&&this.gEs().length===0}}
B.C8.prototype={
N(){return"AyahStatus."+this.b}}
B.q8.prototype={}
B.aca.prototype={
YN(d,e){var x=this.a.h(0,d*1000+e)
return x==null?$.pZ():x},
aJg(d){var x=this,w=B.aVs(d),v=x.c
if(v===w)return
v=v!=null&&v===B.bJe(w)?x.d+1:1
x.d=v
if(v>x.e)x.e=v
x.c=w},
aeN(){var x=Date.now(),w=B.aVs(new A.b_(x,0,!1))
x=this.c
return x===w||x===B.bJe(w)?this.d:0},
aiP(d,e,f,g){var x=this,w=new A.b_(Date.now(),0,!1),v=x.YN(d,e),u=g?C.e.cz(v.b+1,0,100):0,t=g&&u>=f?D.e0:D.m5,s=new B.q8(t,u,w.hA()),r=d*1000+e
x.a.n(0,r,s)
x.b.D(0,r)
x.aJg(w)
return s},
YE(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=H.c9[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pZ():s).a===D.e0)++u}return u},
aYW(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=H.c9[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pZ():s).a===D.m5)++u}return u},
gahZ(){var x=this.a,w=A.w(x).i("c9<2>")
return new A.aF(new A.c9(x,w),new B.aVt(),w.i("aF<M.E>")).gL(0)},
gamQ(){var x=this.a,w=A.w(x).i("bi<1>")
w=A.nq(new A.bi(x,w),new B.aVu(),w.i("M.E"),y.S)
w=A.ev(w,A.w(w).i("M.E"))
x=A.a0(w,A.w(w).c)
C.b.lc(x)
return x},
cP(){var x,w,v,u,t,s=this,r=y.N,q=A.x(r,y.L)
for(x=s.a,x=new A.dP(x,A.w(x).i("dP<1,2>")).ga_(0),w=y.t;x.u();){v=x.d
u=v.a
t=v.b
q.n(0,""+u,A.a([t.a.a,t.b,t.c.a],w))}x=s.b
x=A.a0(x,A.w(x).c)
return A.J(["v",1,"rows",q,"dirty",x,"last",s.c,"streak",s.d,"best",s.e],r,y.z)},
aUX(){var x,w,v,u,t,s,r,q,p,o=A.a([],y.Z)
for(x=this.b,x=A.bAk(x,300,A.w(x).c),x=new A.Gb(J.au(x.a),x.b,A.w(x).i("Gb<1>")),w=y.N,v=y.z,u=this.a;x.u();){t=x.gK()
s=C.e.ba(t,1000)
t=C.e.ad(t,1000)
r=s*1000+t
q=u.h(0,r)
q=(q==null?$.pZ():q).a===D.e0?"memorized":"learning"
p=u.h(0,r)
if(p==null)p=$.pZ()
r=u.h(0,r)
o.push(A.J(["surah",s,"ayah",t,"status",q,"perfect_count",p.b,"updated_at",(r==null?$.pZ():r).c.iW()],w,v))}return o},
aZv(d){var x,w,v,u,t,s,r
for(x=d.length,w=this.a,v=this.b,u=0;u<d.length;d.length===x||(0,A.B)(d),++u){t=d[u]
s=A.ex(t.h(0,"surah"))*1000+A.ex(t.h(0,"ayah"))
r=w.h(0,C.e.ba(s,1000)*1000+C.e.ad(s,1000))
if((r==null?$.pZ():r).c.iW()===t.h(0,"updated_at"))v.I(0,s)}},
aZD(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(x=J.au(d),w=this.b,v=this.a,u=y.f,t=!1;x.u();){s=x.gK()
if(!u.b(s))continue
r=A.bn(s.h(0,"surah"))
q=r==null?null:C.d.bU(r)
r=A.bn(s.h(0,"ayah"))
p=r==null?null:C.d.bU(r)
o=A.fo(A.f(s.h(0,"updated_at")))
r=!0
if(q!=null)if(p!=null)if(o!=null)r=!(q>=1&&q<=114&&p>=1&&p<=H.c9[q-1].a[1])
if(r)continue
n=B.c4Q(s.h(0,"status"))
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
v.n(0,r,new B.q8(n,C.e.cz(l==null?0:l,0,100),o.hA()))
w.I(0,r)
t=!0}return t}}
B.Rj.prototype={
E0(d,e,f,g,h){var x=this,w=g==null?x.a:g,v=h==null?x.b:h,u=d==null?x.c:d,t=e==null?x.d:e
return new B.Rj(w,v,u,t,f==null?x.e:f)},
aTp(d){var x=null
return this.E0(x,x,d,x,x)},
aem(d){var x=null
return this.E0(x,d,x,x,x)},
aTt(d){var x=null
return this.E0(x,x,x,x,d)},
aSU(d){var x=null
return this.E0(d,x,x,x,x)},
aTq(d){var x=null
return this.E0(x,x,x,d,x)},
cP(){var x=this
return A.J(["n",x.a,"r",x.b,"auto",x.c,"hide",x.d,"in",x.e],y.N,y.z)}}
B.Eh.prototype={
N(){return"ModelState."+this.b}}
B.Rk.prototype={
Y7(){var x=this.Q
return x==null?this.Q=new B.aVv(this).$0():x},
oU(d){return this.aln(d)},
aln(d){var x=0,w=A.o(y.H),v=this
var $async$oU=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:v.b=d
v.X()
x=2
return A.d(A.id("mt.tutor.settings",C.a3.ht(d.cP(),null)),$async$oU)
case 2:return A.m(null,w)}})
return A.n($async$oU,w)},
x3(){var x=0,w=A.o(y.H),v=this,u
var $async$x3=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:v.X()
x=2
return A.d(A.id("mt.tutor.progress",C.a3.ht(v.c.cP(),null)),$async$x3)
case 2:u=v.as
if(u!=null)u.aE()
v.as=A.cF(C.z,v.garI())
return A.m(null,w)}})
return A.n($async$x3,w)},
GA(d,e,f){return this.am1(d,e,f)},
am1(d,e,f){var x=0,w=A.o(y.H),v=this
var $async$GA=A.k(function(g,h){if(g===1)return A.l(h,w)
for(;;)switch(x){case 0:v.z=new A.bQ(d,e,f)
x=2
return A.d(A.id("mt.tutor.last",C.a3.ht(A.J(["s",d,"f",e,"t",f],y.N,y.S),null)),$async$GA)
case 2:return A.m(null,w)}})
return A.n($async$GA,w)},
zI(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$zI=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=s.f
if(n===D.Ou||n===D.hO){x=1
break}s.f=D.Ou
s.y=null
s.X()
u=4
n=A.k3().gep().h(0,"tutor_device")
if(n==null)n="auto"
p=A.k3().gep().h(0,"tutor_threads")
p=A.f2(p==null?"":p,null)
if(p==null)p=0
x=7
return A.d(s.a.aZd(new B.aVw(s),n,p),$async$zI)
case 7:s.x=e
s.f=D.hO
n=A.k3().gep().h(0,"debug")
if(n==="1"){n=s.x
n.toString
r=n
A.tq().$1("[tutor] model ready: "+r.a+" "+r.b+" threads="+r.f+" isolated="+r.r+" in "+r.c+" ms (warm-up "+r.w+" ms, cached before: "+r.d+")")}u=2
x=6
break
case 4:u=3
m=t.pop()
n=A.Y(m)
if(n instanceof B.kL){q=n
s.f=D.ayZ
s.y=q
n=A.k3().gep().h(0,"debug")
if(n==="1")A.tq().$1("[tutor] model failed: "+A.f(q))}else throw m
x=6
break
case 3:x=2
break
case 6:s.X()
case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$zI,w)},
uu(){var x=0,w=A.o(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$uu=A.k(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:if(r.at){x=1
break}q=null
try{k=$.ac().b
k===$&&A.b()
k=k.gc0().e.a
q=(k==null?null:k.r)!=null}catch(d){x=1
break}if(!q){x=1
break}r.at=!0
u=4
k=$.ac().b
k===$&&A.b()
p=k
x=7
return A.d(p.cU("quran_tutor_progress").h5("surah, ayah, status, perfect_count, updated_at"),$async$uu)
case 7:o=a1
n=r.c.aZD(o)
m=0,k=y.N,i=y.z
case 8:if(!(m<25)){x=10
break}l=r.c.aUX()
if(J.be(l)===0){x=10
break}h=p
g=A.J(["p_rows",l],k,i)
f=h.CW
f===$&&A.b()
f.b.E(0,A.m8(h.x,k,k))
x=11
return A.d(f.b2q("quran_tutor_save",!1,g,i),$async$uu)
case 11:r.c.aZv(l)
case 9:++m
x=8
break
case 10:x=12
return A.d(A.id("mt.tutor.progress",C.a3.ht(r.c.cP(),null)),$async$uu)
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
return A.n($async$uu,w)},
FH(d){return this.b25(d)},
b25(d){var x=0,w=A.o(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$FH=A.k(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:p=B.bAw(t.c.cP()).cP()
y.f.a(p.h(0,"rows")).dK(0,new B.aVx(d))
t.c=B.bAw(p)
x=2
return A.d(t.x3(),$async$FH)
case 2:v=4
s=$.ac().b
s===$&&A.b()
r=s.gc0().e.a
x=(r==null?null:r.r)!=null?7:8
break
case 7:r=y.z
x=9
return A.d(s.bi("quran_tutor_reset",A.J(["p_surah",d],y.N,r),r),$async$FH)
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
return A.n($async$FH,w)}}
B.vd.prototype={
V(){var x=$.Jj()
return new B.Vf(x,new A.aX(C.M,$.a7()))}}
B.Vf.prototype={
aa(){var x,w,v=this
v.ao()
x=v.d
x.a5(v.gn6())
w=y.a
x.Y7().bT(new B.bhX(v),w)
G.aL6().bT(new B.bhY(v),w).fT(new B.bhZ())
A.Dp(G.bzX(),y.y)},
vf(){if(this.c!=null)this.t(new B.bhJ())},
l(){var x,w=this
w.d.S(w.gn6())
x=w.e
x.p$=$.a7()
x.U$=0
w.aq()},
Jj(){var x=0,w=A.o(y.H),v,u=this,t,s
var $async$Jj=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:s=u.d
x=3
return A.d(s.oU(s.b.aTp(!0)),$async$Jj)
case 3:t=s.a
t.b0J()
if(t.a0x()){t.afB()
x=1
break}s.zI()
case 1:return A.m(v,w)}})
return A.n($async$Jj,w)},
vg(d,e,f){return this.aHD(d,e,f)},
aOL(d){return this.vg(d,null,null)},
aHD(d,e,f){var x=0,w=A.o(y.H),v,u=this,t,s,r
var $async$vg=A.k(function(g,h){if(g===1)return A.l(h,w)
for(;;)switch(x){case 0:if(u.w==null){u.c.R(y.q).f.aO(A.br(null,null,null,null,null,C.k,null,A.i("\u0644\u062d\u0638\u0629\u2026 \u0628\u0646\u062c\u0647\u0651\u0632 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641",null,null,null,null,null,null,null,null,null),null,C.z,null,null,null,null,null,null,null,null,null,null))
x=1
break}x=e!=null&&f!=null?3:5
break
case 3:t=new A.R(e,f)
x=4
break
case 5:s=u.c
s.toString
x=6
return A.d(B.c8x(s,d),$async$vg)
case 6:t=h
case 4:if(t==null||u.c==null){x=1
break}x=7
return A.d(u.d.GA(d,t.a,t.b),$async$vg)
case 7:s=u.c
if(s==null){x=1
break}r=y.z
x=8
return A.d(A.al(s,!1).cW(A.cW(new B.bhP(u,d,t),null,r),r),$async$vg)
case 8:if(u.c!=null)u.t(new B.bhQ())
case 1:return A.m(v,w)}})
return A.n($async$vg,w)},
A(d){var x=null,w=this.d,v=w.b,u=A.a([],y.p),t=w.a
if(t.gagV()&&!A.al(d,!1).VU())u.push(A.ct(x,x,x,x,D.ae4,x,x,t.gaYX(),x,x,x,"\u0631\u062c\u0648\u0639 \u0644\u0645\u0633\u062c\u062f\u064a",x))
t=v.e
if(t)u.push(A.ct(x,x,x,x,D.af5,x,x,new B.bhT(d),x,x,x,"\u062a\u0642\u062f\u0651\u0645\u064a",x))
u.push(A.ct(x,x,x,x,D.Ch,x,x,new B.bhU(d),x,x,x,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",x))
if(!w.e)w=D.aoE
else w=t?this.aE_():this.aEo()
return M.vY(u,w,"\u0627\u0644\u0645\u062d\u0641\u0651\u0638")},
aEo(){var x,w,v,u,t,s,r,q,p=null,o=this.d.d
if(o==null)o=D.W0
x=this.r
w=x==null?p:x.a-x.b
if(!(o.a&&o.b))v="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u062f\u0639\u0645 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638. \u062c\u0631\u0651\u0628 \u0623\u062d\u062f\u062b \u0646\u0633\u062e\u0629 \u0645\u0646 Chrome (\u0623\u0646\u062f\u0631\u0648\u064a\u062f) \u0623\u0648 Safari (\u0622\u064a\u0641\u0648\u0646)."
else if(!o.f)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0641\u062a\u062d \u0639\u0644\u0649 https \u0639\u0634\u0627\u0646 \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0627\u064a\u0643."
else v=!o.c||!o.d?"\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u0633\u0645\u062d \u0628\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0646 \u0627\u0644\u0645\u0627\u064a\u0643.":p
x=y.p
u=A.a([D.aKH,C.ak],x)
for(t=0;t<4;++t){s=D.aqi[t]
u.push(new A.Z(C.bE,A.ai(A.a([A.c8(s.a,C.a8,p,18),C.aq,new A.dB(1,C.aS,A.i(s.b,p,p,p,p,p,F.pz,p,p,p),p)],x),C.B,C.f,C.h,0,p,p),p))}u=A.ad(u,C.B,C.f,C.h)
s=A.a([D.aYO,C.V,A.i("\u0647\u0646\u062d\u0645\u0651\u0644 \u0645\u0644\u0641 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 (\u062d\u0648\u0627\u0644\u064a "+E.aW(105)+" \u0645\u064a\u062c\u0627) \u0648\u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0648\u0628\u0639\u062f \u0643\u062f\u0647 \u0628\u064a\u0641\u062a\u062d \u0645\u0646 \u063a\u064a\u0631 \u062a\u062d\u0645\u064a\u0644. \u064a\u064f\u0641\u0636\u0651\u0644 \u062a\u0643\u0648\u0646 \u0639\u0644\u0649 Wi-Fi.",p,p,p,p,p,C.ah,p,p,p)],x)
if(w!=null){r=w<3e8
q=r?"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0645\u062a\u0635\u0641\u062d \u0642\u0644\u064a\u0644\u0629 ("+E.aW(C.d.ar(w/1e6))+" \u0645\u064a\u062c\u0627) \u2014 \u0641\u0636\u0651\u064a \u0634\u0648\u064a\u0629 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0623\u0648\u0644.":"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629: \u0643\u0641\u0627\u064a\u0629 \u2713"
C.b.E(s,A.a([C.V,A.i(q,p,p,p,p,p,A.cz(p,p,r?D.cZ:C.b6,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x))}r=o.w
if(r>0&&r<3)C.b.E(s,A.a([C.V,D.b1U],x))
x=A.a([new E.cZ(u,C.af,C.aA,p,!0,p),new E.cZ(A.ad(s,C.B,C.f,C.h),C.af,C.aA,p,!1,p),D.b8R,C.V],x)
if(v!=null)x.push(new E.cZ(A.i(v,p,p,p,p,p,D.aUF,p,p,p),C.af,C.aA,p,!1,p))
else x.push(A.jg(D.adq,p,D.b2O,this.gaHN(),A.ik(C.r,C.a5,D.aN9,p,p,p,p)))
x.push(C.aJ)
x.push(D.W_)
return x},
aE_(){var x,w,v=this,u=null,t=v.d,s=t.c,r=v.e,q=C.c.ai(r.a.a),p=q.length===0,o=p?C.uw:G.bNG(q),n=t.z,m=A.aQ(v.aaM(C.fy,E.aW(s.gahZ())+" \u0622\u064a\u0629","\u062d\u0641\u0638\u062a\u0647\u0627"),1),l=E.aW(s.aeN()),k=s.c,j=Date.now()
k=k===B.aVs(new A.b_(j,0,!1))?"\u0648\u0631\u0627 \u0628\u0639\u0636 \u2014 \u0643\u0645\u0651\u0644!":"\u0633\u0645\u0651\u0639 \u0627\u0644\u0646\u0647\u0627\u0631\u062f\u0647 \u0639\u0634\u0627\u0646 \u062a\u0643\u0645\u0651\u0644"
j=y.p
k=A.a([new B.Ei(t,!1,u),A.ai(A.a([m,C.aq,A.aQ(v.aaM(C.BB,l+" \u064a\u0648\u0645",k),1)],j),C.j,C.f,C.h,0,u,u),C.T],j)
if(n!=null){t=G.jF(n.a)
m=n.b
l=n.c
m=m===l?"\u0622\u064a\u0629 "+E.aW(m):"\u0627\u0644\u0622\u064a\u0627\u062a "+E.aW(m)+"\u2013"+E.aW(l)
k.push(new E.cZ(A.ai(A.a([D.aez,C.aV,A.aQ(A.ad(A.a([D.aWn,A.i(t+" \u2014 "+m,u,u,u,u,u,K.b0,u,u,u)],j),C.B,C.f,C.h),1),P.kO],j),C.j,C.f,C.h,0,u,u),C.af,C.aA,new B.bhM(v,n),!0,u))}t=C.i.bx(0.08)
k.push(A.bt(u,C.n,!1,u,!0,C.k,u,A.bx(),r,u,u,u,u,u,2,A.fp(u,new A.ej(4,A.ab(14),C.w),u,u,u,u,u,u,!0,u,u,u,u,u,u,t,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,C.lH,"\u0639\u0627\u064a\u0632 \u062a\u062d\u0641\u0638 \u0633\u0648\u0631\u0629 \u0625\u064a\u0647\u061f",u,u,u,u,u,u,u,u,u,!0,!0,!1,u,C.nr,u,u,u,u,u,u,u,u,u,u,u,u),C.t,!0,u,!0,u,!1,u,C.E,u,u,u,u,u,u,u,u,u,1,u,u,!1,"\u2022",u,new B.bhN(v),u,u,u,!1,u,u,!1,u,!0,u,C.C,u,u,u,u,u,u,u,u,u,u,u,C.cT,!0,C.y,u,C.G,u,u,u,u))
k.push(C.T)
if(!p){t=A.a([],j)
if(o.length===0)t.push(D.b_W)
for(r=o.length,x=0;x<o.length;o.length===r||(0,A.B)(o),++x)t.push(v.Kj(o[x]))
C.b.E(k,t)}else{t=A.a([D.aB4,D.aBL,v.Kj(1)],j)
for(w=114;w>=78;--w)t.push(v.Kj(w))
t.push(C.V)
r=v.f
p=A.c8(r?C.tX:C.kG,C.a8,u,u)
t.push(A.h9(p,A.i(r?"\u0627\u062e\u0641\u064a \u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631":"\u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631 (\u0627\u0644\u0628\u0642\u0631\u0629 \u0644\u062d\u062f \u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a)",u,u,u,u,u,C.ek,u,u,u),new B.bhO(v),u))
if(v.f)for(w=2;w<=77;++w)t.push(v.Kj(w))
C.b.E(k,t)}k.push(C.ak)
k.push(D.xo)
return k},
aaM(d,e,f){var x=null,w=y.p
return new E.cZ(A.ai(A.a([A.c8(d,C.r,x,x),C.aq,A.aQ(A.ad(A.a([A.i(e,x,x,x,x,x,K.b0,x,x,x),A.i(f,x,1,C.ag,x,x,C.lE,x,x,x)],w),C.B,C.f,C.h),1)],w),C.j,C.f,C.h,0,x,x),C.af,C.L,x,!1,x)},
Kj(d){var x,w=null,v=this.d.c,u=H.c9[d-1].a[1],t=v.YE(d),s=t/u,r=y.p,q=A.bl(A.h7(C.Y,A.a([A.byl(C.dI,F.c7,w,w,w,w,w,3,s,w),A.i(E.aW(d),w,w,w,w,w,R.Vf,w,w,w)],r),C.k,C.ce,w),36,36),p=A.i(G.jF(d),w,w,w,w,w,D.aSz,w,w,w)
if(t===0)x=E.aW(u)+" \u0622\u064a\u0629"
else x=t===u?"\u0645\u062d\u0641\u0648\u0638\u0629 \u0643\u0644\u0647\u0627 \u2713":"\u062d\u0641\u0638\u062a "+E.aW(t)+" \u0645\u0646 "+E.aW(u)
r=A.a([q,C.fV,A.aQ(A.ad(A.a([p,A.i(x,w,w,w,w,w,A.cz(w,w,t===u?F.c7:C.b6,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),C.B,C.f,C.h),1)],r)
if(s>0&&s<1)r.push(A.i(E.aW(C.d.ar(s*100))+"\u066a",w,w,w,w,w,D.Vt,w,w,w))
r.push(D.adt)
return new E.cZ(A.ai(r,C.j,C.f,C.h,0,w,w),L.Aj,C.ey,new B.bhR(this,d),!1,w)}}
B.Ei.prototype={
A(d){var x,w,v,u,t,s,r=null,q=this.c
switch(q.f.a){case 2:if(this.d)return C.aE
return D.aBJ
case 3:x=q.y
x=A.a([A.i(x==null?"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0634\u063a\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638":B.Jd(x),r,r,r,r,r,D.wN,r,r,r)],y.p)
w=q.y
if(w!=null)x.push(new B.AA(w,"model load",r))
x.push(C.V)
x.push(A.bFw(C.lK,r,q.gaZc()))
return new E.cZ(A.ad(x,C.B,C.f,C.h),C.af,C.aA,r,!1,r)
case 0:case 1:v=q.w
u=q.r
q=v>0
t=q?C.d.cz(u/v,0,1):r
s=q&&u<v
q=A.i(s?"\u0628\u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026 "+E.aW(C.d.ar(u/1e6))+" \u0645\u0646 "+E.aW(C.d.ar(v/1e6))+" \u0645\u064a\u062c\u0627":"\u0628\u0646\u062c\u0647\u0651\u0632 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026",r,r,r,r,r,C.wS,r,r,r)
x=A.ab(8)
w=y.p
x=A.a([q,C.K,A.n4(x,A.DU(C.dI,C.r,7,s?t:r),C.bn)],w)
if(!this.d)C.b.E(x,A.a([C.V,D.aYN],w))
return new E.cZ(A.ad(x,C.B,C.f,C.h),C.af,C.aA,r,!1,r)}}}
B.T2.prototype={
A(d){var x=null,w=D.cZ.bx(0.1),v=A.ab(14),u=A.cT(D.cZ.bx(0.4),1)
return A.at(x,A.ai(A.a([D.aem,C.aq,A.aQ(A.i(this.c?"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0627\u0644\u062a\u062c\u0648\u064a\u062f.":"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0623\u062d\u0643\u0627\u0645 \u0627\u0644\u062a\u062c\u0648\u064a\u062f. \u0627\u0642\u0631\u0627 \u0639\u0644\u0649 \u0634\u064a\u062e \u0623\u0648 \u0645\u062d\u0641\u0651\u0638 \u0641\u064a \u0645\u0633\u062c\u062f\u0643 \u0643\u0645\u0627\u0646.",x,x,x,x,x,F.pz,x,x,x),1)],y.p),C.B,C.f,C.h,0,x,x),C.m,x,x,new A.ap(w,x,u,v,x,x,C.u),x,x,C.aA,C.aU,x,x,x)}}
B.Bh.prototype={
N(){return"_Phase."+this.b}}
B.Az.prototype={
V(){return new B.Xf($.Jj(),D.jV)}}
B.Xf.prototype={
gi6(){var x=this.e
return x===$?this.e=this.a.d:x},
gyr(){var x,w=this.a,v=w.f
w=w.c
x=this.gi6()
return G.Ja(w,x,v.vo(w,x)).b},
aa(){var x,w=this
w.ao()
x=w.d
x.a5(w.gn6())
x.Y7()
x.a.Zd(B.arn(w.a.c,w.gi6()))},
vf(){if(this.c!=null)this.t(new B.bpO())},
l(){var x,w=this,v=w.d
v.S(w.gn6())
x=w.Q
if(x!=null)x.aE()
v=v.a
v.GR()
v.VX()
w.aq()},
Si(d){var x,w,v=this
if(v.f===D.q7)v.d.a.VX()
x=v.d.a
x.GR()
w=v.Q
if(w!=null)w.aE()
v.t(new B.bq3(v,d))
x.Zd(B.arn(v.a.c,d))
w=v.a
if(d<w.e)x.Zd(B.arn(w.c,d+1))},
Kx(d){return this.aEZ(d)},
aEZ(d){var x=0,w=A.o(y.H),v,u=this,t,s,r,q,p
var $async$Kx=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:if(u.f===D.q6){u.d.a.GR()
u.t(new B.bq7(u))
x=1
break}t=u.r!=null?D.h8:D.jV
u.t(new B.bq8(u))
s=u.d
r=A.a([B.arn(u.a.c,u.gi6())],y.s)
q=d==null?s.b.b:d
x=3
return A.d(s.a.Fs(r,q),$async$Kx)
case 3:p=f
if(u.c==null||u.f!==D.q6){x=1
break}u.t(new B.bq9(u,t,p))
case 1:return A.m(v,w)}})
return A.n($async$Kx,w)},
JA(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$JA=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.d
if(l.f!==D.hO){x=1
break}p=l.a
p.GR()
r=B.BO(s.gyr()).length
s.t(new B.bqb(s))
o=s.Q
if(o!=null)o.aE()
s.Q=A.kK(C.fw,new B.bqc(s))
u=4
o=B.bCg(r)
n=A.d7(0,0,0,350*r,0,0)
x=7
return A.d(p.a0J(l.b.c,o,n,new B.bqd(s),new B.bqe(s)),$async$JA)
case 7:u=2
x=6
break
case 4:u=3
k=t.pop()
l=A.Y(k)
if(l instanceof B.kL){q=l
l=s.Q
if(l!=null)l.aE()
if(s.c!=null)s.t(new B.bqf(s,q))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$JA,w)},
yn(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$yn=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.f!==D.q7){x=1
break}m=s.Q
if(m!=null)m.aE()
s.t(new B.bqh(s))
s.Q=A.kK(C.ho,new B.bqi(s))
l=new A.A3()
$.BS()
l.mS()
r=l
u=4
m=s.d.a
x=7
return A.d(m.a0M(),$async$yn)
case 7:q=e
if(q.b<0.8){s.aOK("\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0642\u0635\u064a\u0631 \u0623\u0648\u064a \u2014 \u062f\u0648\u0633 \xab\u0633\u0645\u0651\u0639\xbb \u0648\u0627\u0642\u0631\u0627 \u0627\u0644\u0622\u064a\u0629 \u0643\u0644\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb.")
x=1
break}x=8
return A.d(m.ajK(q,B.BO(s.gyr()).length),$async$yn)
case 8:p=e
s.ch=A.d7(0,0,r.gXd(),0,0,0)
k=A.k3().gep().h(0,"debug")
if(k==="1"){o=B.bNY(m.Eb())
A.tq().$1("[tutor] "+s.a.c+":"+s.gi6()+" audio="+C.d.aA(q.b,1)+"s infer="+p.b+"ms total="+r.gz5()+"ms "+p.gLX()+" text="+p.a)
A.tq().$1("[tutor] stages: "+A.f(o))
s.ax="\u062a\u0633\u062c\u064a\u0644\u0643 "+C.d.aA(p.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(p.b/1000,2)+" \u062b\n"+p.gLX()+"\n"+A.f(o)+"\n"+p.a}s.a6_(p.a)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.Y(i)
if(m instanceof B.kL){n=m
m=A.k3().gep().h(0,"debug")
if(m==="1")A.tq().$1("[tutor] check failed: "+A.f(n)+"\n"+s.d.a.Eb())
s.UM(B.Jd(n),n)}else throw i
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$yn,w)},
UM(d,e){var x=this,w=x.Q
if(w!=null)w.aE()
if(x.c==null)return
x.t(new B.bq2(x,d,e))},
aOK(d){return this.UM(d,null)},
a6_(d){var x,w,v,u,t,s=this,r={},q=s.Q
if(q!=null)q.aE()
if(s.c==null)return
x=B.bM5(s.gyr(),d)
r.a=null
if(C.c.ai(x.c).length!==0){q=s.d
w=q.c
v=s.a.c
u=s.gi6()
t=x.gqr()
r.a=w.aiP(v,u,q.b.a,t)
q.x3()}s.t(new B.bq4(r,s,x))},
HR(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$HR=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:g=s.d
if(g.f!==D.hO){x=1
break}s.t(new B.bpW(s))
l=s.Q
if(l!=null)l.aE()
s.Q=A.kK(C.ho,new B.bpX(s))
k=new A.A3()
$.BS()
k.mS()
r=k
u=4
l=g.a
x=7
return A.d(l.b2T(B.arn(s.a.c,s.gi6()),B.BO(s.gyr()).length),$async$HR)
case 7:q=e
p=B.bNY(l.Eb())
o="\u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a "+C.d.aA(q.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(q.b/1000,2)+" \u062b (\u0627\u0644\u0643\u0644 "+C.d.aA(r.gz5()/1000,2)+" \u062b)\n"+q.gLX()+"\n"+A.f(p)+"\n"+q.a
A.tq().$1("[tutor-debug] "+s.a.c+":"+s.gi6()+" audio="+C.d.aA(q.c,1)+"s infer="+q.b+"ms total="+r.gz5()+"ms "+q.gLX()+" text="+q.a)
A.tq().$1("[tutor-debug] stages: "+A.f(p))
s.ch=A.d7(0,0,r.gXd(),0,0,0)
s.a6_(q.a)
n=s.r
if(n!=null){l=n.gqr()
j=n.b
i=A.ae(j).i("aF<1>")
j=A.a0(new A.aF(j,new B.bpY(),i),i.i("M.E"))
A.tq().$1("[tutor-debug] perfect="+l+" ops="+A.f(j))}s.t(new B.bpZ(s,o))
u=2
x=6
break
case 4:u=3
f=t.pop()
l=A.Y(f)
if(l instanceof B.kL){m=l
A.tq().$1("[tutor-debug] failed: "+A.f(m)+"\n"+g.a.Eb())
s.UM(B.Jd(m),m)}else throw f
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$HR,w)},
gTF(){var x,w,v
for(x=this.a.d,w=this.d;v=this.a,x<=v.e;++x){v=w.c.a.h(0,v.c*1000+x)
if((v==null?$.pZ():v).a!==D.e0)return!1}return!0},
A(d){var x,w=this,v=null,u=w.d,t=u.c.YN(w.a.c,w.gi6()),s=u.b,r=s.d&&!w.x&&w.f!==D.h8,q=G.jF(w.a.c),p=y.p,o=A.a([A.ct(v,v,v,v,D.Ch,v,v,new B.bqn(d),v,v,v,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",v)],p),n=w.axc(),m=A.i("\u0622\u064a\u0629 "+E.aW(w.gi6()),v,v,v,v,v,C.i8,v,v,v),l=E.aW(w.gi6()-w.a.d+1),k=w.a
s=A.a([A.ai(A.a([m,C.bA,A.i("("+l+" \u0645\u0646 "+E.aW(k.e-k.d+1)+")",v,v,v,v,v,C.ah,v,v,v),C.d4,w.aIs(t,s.a)],p),C.j,C.f,C.h,0,v,v),C.T],p)
if(r)s.push(w.aDV())
else{m=w.r
if(m!=null){l=w.f
l=l!==D.q7&&l!==D.lX}else l=!1
if(l)s.push(w.avp(m))
else s.push(A.i(w.gyr()+" \ufd3f"+E.aW(w.gi6())+"\ufd3e",v,v,v,v,v,D.i9,C.ad,C.aF,v))}s=A.a([new B.Ei(u,!0,v),n,C.K,new E.cZ(A.ad(s,C.aa,C.f,C.h),D.a8V,C.aA,v,!1,v)],p)
n=w.r
if(n!=null&&w.f===D.h8)s.push(w.aQ2(n))
if(w.r!=null&&w.f===D.h8&&w.ch!=null){x=C.d.ar(C.e.ba(w.ch.a,1000)/100)
s.push(new A.Z(C.bE,A.i("\u0627\u062a\u0631\u0627\u062c\u0639 \u0641\u064a "+(E.aW(C.e.ba(x,10))+"\u066b"+E.aW(C.e.ad(x,10)))+" \u062b",v,v,v,v,v,C.ah,C.ad,v,v),v))}n=w.as
if(n!=null)s.push(new A.Z(C.aA,A.i(n,v,v,v,v,v,D.wN,v,v,v),v))
if(w.as!=null&&w.at!=null){n=w.at
n.toString
s.push(new B.AA(n,"check "+w.a.c+":"+w.gi6(),v))}s.push(w.avP())
s.push(C.ak)
s.push(A.rC(C.r,C.L,v,new B.bqo(w),D.aXv,D.b04,u.b.d))
n=w.a
if(n.e>n.d){n=w.gTF()
s.push(new E.cZ(A.ai(A.a([D.acF,C.aV,A.aQ(A.ad(A.a([D.b14,A.i(w.gTF()?"\u062d\u0641\u0638\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u0633\u0645\u0651\u0639\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636 \u0645\u0646 \u063a\u064a\u0631 \u0645\u0627 \u062a\u0634\u0648\u0641\u0647\u0627":"\u0644\u0645\u0627 \u062a\u062e\u0644\u0651\u0635 \u0627\u0644\u0622\u064a\u0627\u062a \u0648\u0627\u062d\u062f\u0629 \u0648\u0627\u062d\u062f\u0629\u060c \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0644\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636",v,v,v,v,v,C.ah,v,v,v)],p),C.B,C.f,C.h),1),P.kO],p),C.j,C.f,C.h,0,v,v),C.af,C.aA,new B.bqp(w,d),n,v))}n=A.k3().gep().h(0,"debug")
if(n==="1"){p=A.a([C.K,A.eF(D.adp,D.aZy,u.f===D.hO&&w.f!==D.lX?w.gawn():v,v)],p)
n=w.ax
if(n!=null)p.push(new A.Z(C.hq,A.rt(n,C.ah,v,v),v))
n=u.x
if(n!=null){m=n.a
l=n.b
n=n.glH()
u=u.x
p.push(A.i("model: "+m+" "+l+" \u2014 "+n+", isolated "+u.r+", load "+u.c+" ms (warm-up "+u.w+" ms)",v,v,v,v,v,C.ah,v,v,v))}p.push(A.bH(D.aYf,v,v,v,new B.bqq(w,d),v,v))
C.b.E(s,p)}s.push(C.K)
s.push(D.xo)
return M.vY(o,s,q)},
axc(){var x=this.a,w=x.e-x.d+1
if(w===1)return C.aE
return A.bl(A.p8(new B.bq0(this),w,null,C.ax,new B.bq1()),36,null)},
aIs(d,e){var x,w,v,u,t,s,r,q=null
if(d.a===D.e0)return D.aKJ
x=d.b
w=E.aW(x)
v=E.aW(e)
u=A.a([],y.p)
for(t=0;t<e;++t){s=t<x
r=s?C.dd:D.acc
u.push(new A.Z(D.a9s,A.c8(r,s?F.c7:C.eZ,q,16),q))}return A.Rc(A.ai(u,C.j,C.f,C.X,0,q,q),q,"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637 \u0648\u0631\u0627 \u0628\u0639\u0636: "+w+" \u0645\u0646 "+v,q,q)},
aDV(){var x=null
return A.dg(!1,A.ab(12),!0,A.at(x,D.a56,C.m,x,x,new A.ap(L.r2,x,x,A.ab(12),x,x,C.u),x,x,x,D.a8B,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,x,new B.bq6(this),x,x,x,x,x,x,x)},
avp(d){var x,w,v,u,t,s=null,r=A.a([],y.R)
for(x=d.a,w=0;w<x.length;++w){v=J.b5(d.gGP(),w)
A:{if(D.h2===v){u=D.i9.cA(F.c7)
break A}if(D.pU===v){u=D.i9.Wx(D.cZ,C.fY,D.cZ)
break A}if(D.pV===v){u=D.i9.Wx(D.dH,C.fY,D.dH)
break A}u=D.i9.Wx(C.eZ,C.ps,C.b6)
break A}t=x[w]
r.push(new A.f4(t.a,s,s,C.bg,s,s,s,s,s,s,u))
r.push(L.wJ)}x=E.aW(this.gi6())
r.push(A.dX(s,s,s,s,s,s,s,s,s,D.i9.cA(C.a8),"\ufd3f"+x+"\ufd3e"))
return A.QI(A.dX(r,s,s,s,s,s,s,s,s,s,s),s,C.ad,C.aF)},
aQ2(d){var x,w,v,u,t,s,r=this.w
if(C.c.ai(d.c).length===0)return D.b8w
if(d.gqr()){x=r==null
if((x?null:r.a)===D.e0&&r.b===this.d.b.a)x="\u0627\u0644\u0622\u064a\u0629 \u062f\u064a \u0627\u062a\u062d\u0641\u0638\u062a! \u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0627\u0644\u0644\u064a \u0628\u0639\u062f\u0647\u0627."
else x=!x&&r.a!==D.e0?"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637. \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0645\u0627\u0646 "+E.aW(this.d.b.a-r.b)+" \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629.":"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637."
return new B.AN(F.c7,C.dd,"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713",x,null)}x=d.gGP()
w=J.d5(x)
v=w.hO(x,new B.bqj()).gL(0)
u=w.hO(x,new B.bqk()).gL(0)
t=w.hO(x,new B.bql()).gL(0)
x=A.a([],y.s)
if(u>0)x.push(E.aW(u)+" \u063a\u0644\u0637")
if(v>0)x.push(E.aW(v)+" \u0631\u0627\u062c\u0639\u0647\u0627")
if(t>0)x.push(E.aW(t)+" \u0646\u0627\u0642\u0635\u0629")
if(d.gEs().length!==0)x.push(E.aW(d.gEs().length)+" \u0632\u064a\u0627\u062f\u0629")
w=u+t>0?D.dH:D.cZ
x=C.b.aJ(x," \u2022 ")
s=d.gEs().length!==0?"\n\u0632\u064a\u0627\u062f\u0629: "+C.b.aJ(d.gEs(),"\u060c "):""
return new B.AN(w,C.kJ,"\u0642\u0631\u0628\u062a! \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0644\u0648\u0651\u0646\u0629",x+"\n\u0627\u0644\u0623\u0635\u0641\u0631: \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u062f\u064a \u2014 \u0627\u0644\u0623\u062d\u0645\u0631: \u063a\u0644\u0637 \u2014 \u0627\u0644\u0631\u0645\u0627\u062f\u064a \u0627\u0644\u0645\u0634\u0637\u0648\u0628: \u0646\u0633\u064a\u062a\u0647\u0627."+s,null)},
avP(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d,g=h.f===D.hO,f=j.f
switch(f.a){case 2:if(j.z==null)x=0
else{f=Date.now()
w=j.z
w.toString
x=C.e.ba(new A.b_(f,0,!1).dG(w).a,1e6)}v=C.e.ba(B.bCg(B.BO(j.gyr()).length).a,1e6)
f=j.gaNy()
w=96+26*j.y
u=D.dH.bx(0.25)
w=A.ji(i,A.bDW(C.Y,A.at(i,D.adv,C.m,i,i,D.Zz,i,84,i,i,i,i,84),i,new A.ap(u,i,i,i,i,i,C.cp),C.A5,i,w,w),C.t,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,f,i,i,i,i,i,i)
u=A.i("\u0628\u0646\u0633\u062c\u0651\u0644\u2026 "+B.bBd(x)+" / "+B.bBd(v),i,i,i,i,i,I.lD,i,i,i)
return A.ad(A.a([w,C.K,u,A.i(h.b.c?"\u0644\u0645\u0627 \u062a\u062e\u0644\u0635 \u0627\u0633\u0643\u062a \u062b\u0627\u0646\u064a\u0629 \u0623\u0648 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb":"\u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb \u0644\u0645\u0627 \u062a\u062e\u0644\u0635",i,i,i,i,i,C.ah,i,i,i),A.bH(D.b_l,i,i,i,f,i,i)],y.p),C.j,C.f,C.h)
case 3:t=C.d.e6((Date.now()-j.ay)/1000)
if(t<8)h="\u062b\u0648\u0627\u0646\u064a \u0648\u0646\u0642\u0648\u0644\u0643"
else h=t<25?"\u0644\u0633\u0647 \u0634\u063a\u0627\u0644\u064a\u0646 \u2014 \u0627\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0628\u062a\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0643\u062a\u0631 ("+E.aW(t)+" \u062b)":"\u0648\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0637\u0648\u0644 \u0645\u0646 \u0627\u0644\u0639\u0627\u062f\u064a \u2014 \u0644\u0648 \u0639\u0644\u0651\u0642 \u0647\u0646\u0639\u064a\u062f \u062a\u0634\u063a\u064a\u0644\u0647 \u0644\u0648\u062d\u062f\u0646\u0627 ("+E.aW(t)+" \u062b)"
return new A.Z(D.a8x,A.ad(A.a([C.qR,C.ak,D.b1A,A.i(h,i,i,i,i,i,C.ah,C.ad,i,i)],y.p),C.j,C.f,C.h),i)
default:s=f===D.q6
r=j.r
f=r==null
w=!f
q=w&&r.gqr()
u=A.c8(s?C.kK:I.BW,i,i,i)
if(s)p="\u0648\u0642\u0651\u0641"
else p=w&&!q?"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u062d":"\u0627\u0633\u0645\u0639"
p=A.i(p,i,i,i,i,i,i,i,i,i)
o=A.ik(i,i,D.aN6,i,i,i,i)
u=A.aQ(new A.y0(C.WG,!0,new B.bpP(j,r,q),i,i,i,o,C.m,i,!1,i,!0,i,new A.TA(p,u,o,i,i),i),1)
p=A.a([],y.n)
for(o=y.c,n=0;n<3;++n){m=D.D1[n]
p.push(new A.ey(m,i,A.i("\xd7"+E.aW(m),i,i,i,i,i,i,i,i,i),o))}o=y.S
l=y.b
k=y.p
o=A.ai(A.a([u,C.aq,A.vz(new B.bpQ(j),p,A.cV([h.b.b],o),!1,A.jG(i,i,i,new A.b4(new B.bpR(),l),i,i,i,i,new A.b4(new B.bpS(),l),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,C.dp),o)],k),C.j,C.f,C.h,0,i,i)
h=g&&!s?j.gaK_():i
u=A.c8(f?D.ni:C.kJ,i,i,i)
if(g)f=f?"\u0633\u0645\u0651\u0639":"\u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a"
else f="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
f=A.i(f,i,i,i,i,i,C.cE,i,i,i)
p=q?N.hj:C.r
h=A.a([o,C.T,A.jg(u,i,f,h,A.ik(p,q?C.i:C.a5,D.pi,i,i,i,i))],k)
if(w&&j.gi6()<j.a.e)C.b.E(h,A.a([C.K,q?A.jg(D.afg,i,D.aYg,new B.bpT(j),A.ik(F.c7,C.a5,D.pi,i,i,i,i)):A.bH(D.aXF,i,i,i,new B.bpU(j),i,i)],k))
if(w){f=j.gi6()
w=j.a
u=w.e
f=f===u&&q&&u>w.d}else f=!1
if(f)h.push(new A.Z(C.mT,A.i(j.gTF()?"\u062e\u0644\u0651\u0635\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u062c\u0631\u0651\u0628 \xab\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636\xbb \u062a\u062d\u062a.":"\u062e\u0644\u0635\u062a \u0622\u062e\u0631 \u0622\u064a\u0629 \u2014 \u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0644\u0633\u0647 (\u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0635\u0641\u0631\u0627 \u0641\u0648\u0642).",i,i,i,i,i,C.lC,C.ad,i,i),i))
return A.ad(h,C.aa,C.f,C.h)}}}
B.AN.prototype={
A(d){var x=this,w=null,v=x.c,u=v.bx(0.12),t=A.ab(14),s=A.cT(v.bx(0.5),1),r=y.p
return A.at(w,A.ai(A.a([A.c8(x.d,v,w,w),C.aq,A.aQ(A.ad(A.a([A.i(x.e,w,w,w,w,w,A.cz(w,w,v,w,w,w,w,w,w,w,w,15,w,w,C.W,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),C.pk,A.i(x.f,w,w,w,w,w,F.pz,w,w,w)],r),C.B,C.f,C.h),1)],r),C.B,C.f,C.h,0,w,w),C.m,w,w,new A.ap(u,w,s,t,w,w,C.u),w,w,C.aA,C.aU,w,w,w)}}
B.Ay.prototype={
V(){var x=y.S
return new B.Xe($.Jj(),A.x(x,y.B),A.aE(x),A.x(x,y.N),A.dN(null,y.H))}}
B.Xe.prototype={
aa(){this.ao()
this.d.a5(this.gn6())},
vf(){if(this.c!=null)this.t(new B.bpx())},
l(){var x,w=this,v=w.d
v.S(w.gn6())
x=w.y
if(x!=null)x.aE()
v.a.VX()
w.aq()},
Di(d){return this.aNn(d)},
aNn(d){var x=0,w=A.o(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m
var $async$Di=A.k(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.t(new B.bpG(t,d))
r=t.y
if(r!=null)r.aE()
t.y=A.kK(C.fw,new B.bpH(t))
v=3
r=t.d
q=t.a
p=q.f
q=q.c
q=B.bCg(B.BO(G.Ja(q,d,p.vo(q,d)).b).length)
p=t.a
o=p.f
p=p.c
p=A.d7(0,0,0,350*B.BO(G.Ja(p,d,o.vo(p,d)).b).length,0,0)
x=6
return A.d(r.a.a0J(r.b.c,q,p,new B.bpI(t,d),new B.bpJ(t)),$async$Di)
case 6:v=1
x=5
break
case 3:v=2
m=u.pop()
r=A.Y(m)
if(r instanceof B.kL){s=r
r=t.y
if(r!=null)r.aE()
if(t.c!=null)t.t(new B.bpK(t,s))}else throw m
x=5
break
case 2:x=1
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$Di,w)},
BI(d,e){return this.ayi(d,e)},
ayi(d,e){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$BI=A.k(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.e!==d){x=1
break}o=s.y
if(o!=null)o.aE()
s.t(new B.bpB(s,d))
n=d<s.a.e?d+1:null
r=s.d.a.a0M()
if(e&&n!=null)s.Di(n)
q=null
u=4
x=7
return A.d(r,$async$BI)
case 7:q=g
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.Y(l)
if(o instanceof B.kL){p=o
s.t(new B.bpC(s,d,p))}else throw l
x=6
break
case 3:x=2
break
case 6:if(q!=null){o=q
s.at=s.at.bT(new B.bpD(s,o,d),y.H)}case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$BI,w)},
gaGm(){var x,w,v,u,t=this
for(x=t.a.d,w=t.f,v=t.r,u=t.w;x<=t.a.e;++x)if(!w.aw(x)&&!v.m(0,x)&&!u.aw(x)&&x!==t.e)return x
return null},
aKD(){this.t(new B.bpE(this))},
A(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q.f===D.hO,o=s.e,n=s.gaGm(),m=s.f,l=m.a,k=s.w.a,j=s.a,i=l+k===j.e-j.d+1&&s.r.a===0&&o==null
l=A.w(m).i("c9<2>")
x=new A.aF(new A.c9(m,l),new B.bpL(),l.i("aF<M.E>")).gL(0)
l=G.jF(s.a.c)
m=y.p
q=A.a([new B.Ei(q,!0,r),A.i("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 "+E.aW(s.a.d)+" \u0644\u062d\u062f "+E.aW(s.a.e)+" \u0645\u0646 \u062d\u0641\u0638\u0643\u060c \u0622\u064a\u0629 \u0622\u064a\u0629: \u0628\u0639\u062f \u0643\u0644 \u0622\u064a\u0629 \u062f\u0648\u0633 \xab\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629\xbb \u0648\u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0637\u0648\u0644 \u2014 \u0647\u0646\u0635\u062d\u0651\u062d \u0648\u0625\u0646\u062a \u0628\u062a\u0642\u0631\u0627.",r,r,r,r,r,C.ah,r,r,r),C.T],m)
for(w=s.a.d;w<=s.a.e;++w)q.push(s.aOM(w))
q.push(C.K)
k=s.Q
if(k!=null)q.push(A.i(k,r,r,r,r,r,D.wN,r,r,r))
k=s.as
if(k!=null){j=s.a
q.push(new B.AA(k,"review "+j.c+":"+j.d+"-"+j.e,r))}k=o==null
if(!k){j=E.aW(o)
if(s.z==null)v=0
else{v=Date.now()
u=s.z
u.toString
u=C.e.ba(new A.b_(v,0,!1).dG(u).a,1e6)
v=u}v=A.i("\u0628\u0646\u0633\u062c\u0651\u0644 \u0622\u064a\u0629 "+j+"\u2026 "+B.bBd(v),r,r,r,r,r,I.lD,C.ad,r,r)
j=A.n4(A.ab(6),A.DU(C.dI,D.dH,6,s.x),C.bn)
u=o<s.a.e
t=A.c8(u?Q.BQ:C.kK,r,r,r)
C.b.E(q,A.a([v,C.V,j,C.T,A.jg(t,r,A.i(u?"\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629":"\u062e\u0644\u0635\u062a",r,r,r,r,r,C.cE,r,r,r),new B.bpM(s,o),A.ik(C.r,C.a5,D.pi,r,r,r,r))],m))}else if(n!=null){j=p?new B.bpN(s,n):r
if(!p)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
else v=n===s.a.d?"\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0633\u0645\u064a\u0639":"\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+E.aW(n)
q.push(A.jg(D.ae5,r,A.i(v,r,r,r,r,r,C.cE,r,r,r),j,A.ik(C.r,C.a5,D.pi,r,r,r,r)))}if(s.r.a!==0&&k)q.push(D.aBm)
if(i){k=s.a
k=x===k.e-k.d+1
j=k?F.c7:D.cZ
v=k?C.ne:C.kJ
if(k)k="\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713 \u0633\u0645\u0651\u0639\u062a\u0647\u0645 \u0643\u0644\u0647\u0645 \u0635\u062d"
else{k=E.aW(x)
u=s.a
u=k+" \u0645\u0646 "+E.aW(u.e-u.d+1)+" \u0622\u064a\u0627\u062a \u0645\u0638\u0628\u0648\u0637\u0629"
k=u}u=s.a
u=x===u.e-u.d+1?"\u0631\u0628\u0646\u0627 \u064a\u062b\u0628\u0651\u062a\u0647\u0627 \u0641\u064a \u0642\u0644\u0628\u0643.":"\u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0641\u064a\u0647\u0627 \u0623\u0644\u0648\u0627\u0646 \u0648\u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a."
C.b.E(q,A.a([new B.AN(j,v,k,u,r),A.eF(D.afa,D.b1E,s.gaKC(),r)],m))}q.push(C.T)
q.push(D.xo)
return M.vY(r,q,"\u0633\u0645\u0651\u0639 "+l)},
aOM(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.f.h(0,d),i=l.w.h(0,d)
if(l.e===d)x=D.adM
else if(l.r.m(0,d))x=O.pj
else if(i!=null)x=D.adV
else if(j!=null){w=j.gqr()?C.dd:D.abH
x=A.c8(w,j.gqr()?F.c7:D.cZ,k,k)}else x=D.ad7
w=y.p
v=A.a([A.ai(A.a([A.i("\u0622\u064a\u0629 "+E.aW(d),k,k,k,k,k,D.aRM,k,k,k),C.d4,x],w),C.j,C.f,C.h,0,k,k)],w)
if(i!=null)v.push(A.i(i,k,k,k,k,k,D.Vi,k,k,k))
if(j!=null&&!j.gqr()){u=y.R
t=A.a([],u)
for(s=j.a,r=0;r<s.length;++r){q=s[r]
p=j.gGP()
o=J.bs(p)
n=o.h(p,r)
A:{if(D.h2===n){m=F.c7
break A}if(D.pU===n){m=D.cZ
break A}if(D.pV===n){m=D.dH
break A}m=C.eZ
break A}m=D.i9.aTY(m,o.h(p,r)===D.pW?C.ps:k,22)
C.b.E(t,A.a([new A.f4(q.a,k,k,C.bg,k,k,k,k,k,k,m),L.wJ],u))}w=A.a([C.aR,A.QI(A.dX(t,k,k,k,k,k,k,k,k,k,k),k,C.ad,C.aF)],w)
if(C.c.ai(j.c).length===0)w.push(D.b_q)
C.b.E(v,w)}return new E.cZ(A.ad(v,C.aa,C.f,C.h),C.f3,C.ey,k,!1,k)}}
B.Ax.prototype={
V(){return new B.Xd($.Jj())}}
B.Xd.prototype={
aa(){this.ao()
var x=this.d
x.a5(this.gn6())
x.Y7()},
vf(){if(this.c!=null)this.t(new B.bpo())},
l(){this.d.S(this.gn6())
this.aq()},
A(d){var x,w,v,u,t,s=this,r=null,q=s.d.c,p=q.gamQ(),o=A.a([],y.t)
for(x=78;x<=114;++x)o.push(x)
w=C.b.kW(o,0,new B.bpv(q))
v=C.b.kW(o,0,new B.bpw())
o=y.p
o=A.a([A.ai(A.a([A.aQ(s.Qt(E.aW(q.gahZ()),"\u0622\u064a\u0629 \u0645\u062d\u0641\u0648\u0638\u0629"),1),C.aq,A.aQ(s.Qt(E.aW(q.aeN()),"\u064a\u0648\u0645 \u0648\u0631\u0627 \u0628\u0639\u0636"),1),C.aq,A.aQ(s.Qt(E.aW(q.e),"\u0623\u0637\u0648\u0644 \u0633\u0644\u0633\u0644\u0629"),1)],o),C.j,C.f,C.h,0,r,r),C.T,new E.cZ(A.ad(A.a([A.i("\u062c\u0632\u0621 \u0639\u0645\u0651: "+E.aW(C.d.ar(w*100/v))+"\u066a",r,r,r,r,r,K.b0,r,r,r),C.V,A.n4(A.ab(6),A.DU(C.dI,F.c7,8,w/v),C.bn),C.aR,A.i(E.aW(w)+" \u0645\u0646 "+E.aW(v)+" \u0622\u064a\u0629",r,r,r,r,r,C.ah,r,r,r)],o),C.B,C.f,C.h),C.af,C.aA,r,!1,r)],o)
if(p.length===0)o.push(D.aBu)
for(u=p.length,t=0;t<p.length;p.length===u||(0,A.B)(p),++t)o.push(s.aOO(p[t]))
o.push(C.K)
u=$.ac().b
u===$&&A.b()
u=u.gc0().e.a
o.push(A.i((u==null?r:u.r)!=null?"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643 \u0648\u064a\u0638\u0647\u0631 \u0639\u0644\u0649 \u0623\u064a \u062c\u0647\u0627\u0632 \u062a\u062f\u062e\u0644 \u0645\u0646\u0647.":"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647. \u0633\u062c\u0651\u0644 \u062f\u062e\u0648\u0644 \u0639\u0634\u0627\u0646 \u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643.",r,r,r,r,r,C.ah,r,r,r))
return M.vY(r,o,"\u062a\u0642\u062f\u0651\u0645\u064a \u0641\u064a \u0627\u0644\u062d\u0641\u0638")},
Qt(d,e){var x=null
return new E.cZ(A.ad(A.a([A.i(d,x,x,x,x,x,D.aUL,x,x,x),A.i(e,x,x,x,x,x,C.fj,C.ad,x,x)],y.p),C.j,C.f,C.h),C.af,C.L,x,!1,x)},
aOO(d){var x=null,w=this.d.c,v=H.c9[d-1].a[1],u=w.YE(d),t=w.aYW(d),s=y.p,r=A.ai(A.a([A.aQ(A.i(G.jF(d),x,x,x,x,x,K.b0,x,x,x),1),A.i(E.aW(C.d.ar(u*100/v))+"\u066a",x,x,x,x,x,D.aT7,x,x,x)],s),C.j,C.f,C.h,0,x,x),q=A.n4(A.ab(6),A.DU(C.dI,F.c7,7,u/v),C.bn),p=E.aW(u),o=E.aW(v),n=t>0?" \u2022 \u0628\u062a\u0631\u0627\u062c\u0639 "+E.aW(t):""
return new E.cZ(A.ad(A.a([r,C.V,q,C.aR,A.i("\u0645\u062d\u0641\u0648\u0638 "+p+" \u0645\u0646 "+o+n,x,x,x,x,x,C.ah,x,x,x)],s),C.B,C.f,C.h),C.af,C.aA,new B.bpu(this,d),!1,x)},
HU(d){return this.awE(d)},
awE(d){var x=0,w=A.o(y.H),v=this,u,t
var $async$HU=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:u=H.c9[d-1].a[1]
t=v.c
t.toString
x=2
return A.d(A.fA(C.dc,new B.bpt(v,d,u),t,!0,null,null,!1,y.H),$async$HU)
case 2:return A.m(null,w)}})
return A.n($async$HU,w)}}
B.ac8.prototype={
Kw(d,e){var x=null,w=A.pE(x,x,x,x,x,x,x,x,x,x,x,D.aMT,C.L,x,x,x,x,C.la,x,x)
return A.bH(A.i(d,x,x,x,x,x,C.jH,x,x,x),x,x,x,new B.aVf(e),x,w)},
A(d){var x=this,w=y.p
return new E.cZ(A.ad(A.a([D.aXy,C.V,D.b1T,A.dx(A.a([x.Kw("tarteel-ai/whisper-base-ar-quran","https://huggingface.co/tarteel-ai/whisper-base-ar-quran"),x.Kw("iqbalaesthetic/Basira","https://huggingface.co/iqbalaesthetic/Basira")],w),C.aK,0,12),D.aXd,x.Kw("tanzil.net","https://tanzil.net"),D.b2z,x.Kw("everyayah.com","https://everyayah.com")],w),C.B,C.f,C.h),C.af,C.aA,null,!1,null)}}
B.AA.prototype={
V(){return new B.Xg()}}
B.Xg.prototype={
ga9k(){var x=this.a
return B.c9O(x.c,x.d,$.bCR().Eb())},
Ky(){var x=0,w=A.o(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k
var $async$Ky=A.k(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.t(new B.bqr(s))
v=3
r=A.bwC()
n=s.ga9k()
m=y.N
q=A.x(m,m)
J.fU(q,"app","masjid")
J.fU(q,"path","tutor \u203a "+s.a.d)
if(r!=null){m=r.length>160?C.c.Y(r,0,160):r
J.fU(q,"ua",m)}x=6
return A.d(A.a32(n,null,C.AU,q),$async$Ky)
case 6:if(s.c!=null)s.t(new B.bqs(s))
t.push(5)
x=4
break
case 3:v=2
k=u.pop()
p=A.Y(k)
o=p instanceof A.cR?p.a:"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0628\u0639\u062a \u2014 \u0627\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0646\u062a \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
if(s.c!=null)s.t(new B.bqt(s,o))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.t(new B.bqu(s))
x=t.pop()
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$Ky,w)},
A(d){var x,w,v,u=this,t=null,s=y.p
s=A.a([A.dg(!1,t,!0,new A.Z(C.Ai,A.ai(A.a([A.c8(u.d?C.tX:C.kG,C.b6,t,18),C.fW,D.b11],s),C.j,C.f,C.h,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new B.bqw(u),t,t,t,t,t,t,t)],s)
if(u.d){x=A.ab(8)
s.push(A.at(t,A.rt(u.ga9k(),D.aRd,t,C.o),C.m,t,t,new A.ap(L.r2,t,t,x,t,t,C.u),t,t,D.a8G,C.ez,t,t,1/0))}if(u.f)s.push(D.b_7)
else{x=A.pE(t,t,t,t,t,t,t,t,t,t,t,C.Uh,C.L,t,t,t,t,C.la,t,t)
w=u.e
v=w?t:u.gaON()
s.push(A.h9(w?D.aNg:D.aeR,D.aZS,v,x))}x=u.r
if(x!=null)s.push(A.i(x,t,t,t,t,t,D.Vi,t,t,t))
return new A.Z(C.aA,A.ad(s,C.B,C.f,C.h),t)}}
var z=a.updateTypes(["aa<~>()","~()","A(mE)","aa<Gt>()","aa<Gr>()","aa<Gs>()","Q<mE>()","A(q8)","bo(nF)","Az(z)","Ax(z)","A(m0)","Ay(z)","A(Fa)"])
B.aVg.prototype={
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
m=B.c_B("network",A.f(o))
throw A.p(m)
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:226}
B.aVj.prototype={
$1(d){var x=null
return A.bsl(A.ch(d,"persist",x,x,x,x))},
$S:951}
B.aVi.prototype={
$0(){var x=0,w=A.o(y.C),v,u=this,t,s,r,q,p,o,n,m,l
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:q=u.a
n=A
m=A
l=A
x=4
return A.d(q.pk(),$async$$0)
case 4:x=3
return A.d(n.e3(m.cs(l.ch(e,"loadModel",A.bsS(new B.aVh(u.b)),u.c,u.d,null)),y.m),$async$$0)
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
v=new B.Gr(o,t,s,r,q.pj(p,"threads"),q.mX(p,"isolated"),q.pj(p,"warmMs"))
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+4}
B.aVh.prototype={
$2(d,e){this.a.$2(C.d.ar(d),C.d.ar(e))},
$S:952}
B.aVn.prototype={
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
u.onLevel=A.f6(new B.aVl(v.e))
u.onAutoStop=A.f6(new B.aVm(v.f))
x=5
return A.d(A.e3(A.cs(A.ch(s,"startRecording",u,null,null,null)),y.O),$async$$0)
case 5:return A.m(null,w)}})
return A.n($async$$0,w)},
$S:2}
B.aVl.prototype={
$1(d){return this.a.$1(d)},
$S:61}
B.aVm.prototype={
$1(d){return this.a.$1(d)},
$S:9}
B.aVo.prototype={
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
v=new B.Gs(r,A.dm(r.seconds))
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+5}
B.aVq.prototype={
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
return A.d(q.e3(p.cs(o.ch(e,"transcribe",t.audio,t.rate,s.a8d(u.c),null)),y.m),$async$$0)
case 3:v=r.abp(e)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+3}
B.aVp.prototype={
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
return A.d(r.e3(q.cs(p.ch(e,"transcribeUrl",u.b,t.a8d(u.c),null,null)),y.m),$async$$0)
case 3:v=s.abp(e)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+3}
B.aVk.prototype={
$1(d){return d},
$S:29}
B.aMF.prototype={
$0(){var x,w,v,u,t=this.a,s=A.bW(t.a.length,D.pW,!1,y.G)
for(t=t.b,x=t.length,w=0;w<x;++w){v=t[w]
u=v.a
if(u!=null)s[u]=v.d}return s},
$S:z+6}
B.aME.prototype={
$1(d){return d===D.h2},
$S:z+2}
B.bsN.prototype={
$2(d,e){var x,w=e.length
if(d.length<w)return!1
for(x=0;x<w;++x)if(B.bxq(e[x],d[x])<0.75)return!1
return!0},
$S:953}
B.buf.prototype={
$1(d){return d.length!==0},
$S:12}
B.aVt.prototype={
$1(d){return d.a===D.e0},
$S:z+7}
B.aVu.prototype={
$1(d){return C.e.ba(d,1000)},
$S:64}
B.aVr.prototype={
$1(d){return C.d.bU(d)},
$S:954}
B.aVv.prototype={
$0(){var x=0,w=A.o(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$$0=A.k(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d(A.ic("mt.tutor.settings"),$async$$0)
case 7:r=a3
if(r!=null){k=y.P.a(C.a3.eW(r,null))
j=A.bn(k.h(0,"n"))
j=j==null?null:C.d.bU(j)
j=C.e.cz(j==null?2:j,1,5)
i=C.b.m(D.D1,k.h(0,"r"))?A.ex(k.h(0,"r")):1
h=A.hy(k.h(0,"auto"))
g=A.hy(k.h(0,"hide"))
k=A.hy(k.h(0,"in"))
s.a.b=new B.Rj(j,i,h!==!1,g===!0,k===!0)}u=2
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
return A.d(A.ic("mt.tutor.progress"),$async$$0)
case 12:q=a3
if(q!=null)s.a.c=B.bAw(y.P.a(C.a3.eW(q,null)))
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
return A.d(A.ic("mt.tutor.last"),$async$$0)
case 17:p=a3
if(p!=null){o=y.P.a(C.a3.eW(p,null))
n=C.d.bU(A.dr(J.b5(o,"s")))
m=C.d.bU(A.dr(J.b5(o,"f")))
l=C.d.bU(A.dr(J.b5(o,"t")))
if(B.bO2(n,m)&&B.bO2(n,l)&&m<=l)s.a.z=new A.bQ(n,m,l)}u=2
x=16
break
case 14:u=13
a0=t.pop()
x=16
break
case 13:x=2
break
case 16:k=s.a
if(k.b.e&&k.a.a0x()){k.a.afB()
x=1
break}a1=k
x=18
return A.d(k.a.Ha(),$async$$0)
case 18:a1.d=a3
k.e=!0
k.X()
if(k.b.e)k.zI()
k.uu()
case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:106}
B.aVw.prototype={
$2(d,e){var x=this.a
x.r=d
x.w=e
x.X()},
$S:955}
B.aVx.prototype={
$2(d,e){return C.e.ba(A.eD(A.f(d),null,null),1000)===this.a},
$S:956}
B.bhX.prototype={
$1(d){var x=0,w=A.o(y.a),v=this,u,t
var $async$$1=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.d(u.d.a.AR(),$async$$1)
case 2:t=f
if(u.c!=null)u.t(new B.bhW(u,t))
return A.m(null,w)}})
return A.n($async$$1,w)},
$S:957}
B.bhW.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bhY.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bhV(x,d))},
$S:z+8}
B.bhV.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bhZ.prototype={
$1(d){},
$S:21}
B.bhJ.prototype={
$0(){},
$S:0}
B.bhP.prototype={
$1(d){var x=this.c,w=this.a.w
w.toString
return new B.Az(this.b,x.a,x.b,w,null)},
$S:z+9}
B.bhQ.prototype={
$0(){},
$S:0}
B.bhT.prototype={
$0(){var x=y.z
return A.al(this.a,!1).cW(A.cW(new B.bhS(),null,x),x)},
$S:0}
B.bhS.prototype={
$1(d){return D.b38},
$S:z+10}
B.bhU.prototype={
$0(){return B.bNO(this.a)},
$S:0}
B.bhM.prototype={
$0(){var x=this.b
return this.a.vg(x.a,x.b,x.c)},
$S:0}
B.bhN.prototype={
$1(d){return this.a.t(new B.bhL())},
$S:9}
B.bhL.prototype={
$0(){},
$S:0}
B.bhO.prototype={
$0(){var x=this.a
return x.t(new B.bhK(x))},
$S:0}
B.bhK.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.bhR.prototype={
$0(){return this.a.aOL(this.b)},
$S:0}
B.bwp.prototype={
$1(d){return new A.iX(new B.bwm(this.a,this.b,this.c),null)},
$S:49}
B.bwm.prototype={
$2(d,e){var x,w,v=null,u=this.b,t=new B.bwo(u,e),s=this.a,r=new B.bwn(s,e),q=A.i(G.jF(this.c),v,v,v,v,v,C.lB,v,v,v),p=A.i("\u0647\u062a\u0633\u0645\u0651\u0639 \u0623\u0646\u0647\u064a \u0622\u064a\u0627\u062a\u061f ("+E.aW(u)+" \u0622\u064a\u0629)",v,v,v,v,v,C.ah,v,v,v),o=y.p,n=A.a([],o)
if(u<=30)n.push(r.$3("\u0627\u0644\u0633\u0648\u0631\u0629 \u0643\u0644\u0647\u0627",1,u))
x=u<5
w=E.aW(x?u:5)
x=x?u:5
n.push(r.$3("\u0623\u0648\u0644 "+w+" \u0622\u064a\u0627\u062a",1,x))
x=s.a
if(x>1){x=E.aW(x)
w=s.a
n.push(r.$3("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+x,w,C.e.cz(w+4,1,u)))}u=A.a([q,C.aR,p,C.T,A.dx(n,C.aK,6,8),C.K,A.ai(A.a([t.$3("\u0645\u0646",s.b,new B.bwh(s)),D.aNc,t.$3("\u0644\u062d\u062f",s.c,new B.bwi(s))],o),C.j,C.f,C.h,0,v,v)],o)
if(s.c-s.b>=10)u.push(D.aBn)
u.push(C.aJ)
u.push(A.fH(D.b1j,v,new B.bwj(s,d),A.ik(C.r,C.a5,D.aN3,v,v,v,v)))
return A.dI(!0,new A.Z(C.Ap,A.ad(u,C.aa,C.f,C.X),v),C.L,!0)},
$S:333}
B.bwo.prototype={
$3(d,e,f){var x,w,v,u=null,t=A.i(d,u,u,u,u,u,C.fj,u,u,u),s=A.a([],y.I)
for(x=this.a,w=y.r,v=1;v<=x;++v)s.push(new A.d_(v,A.i("\u0622\u064a\u0629 "+E.aW(v),u,u,u,u,u,u,u,u,u),C.ar,u,w))
return A.aQ(A.ad(A.a([t,S.D0(C.dc,!0,s,320,new B.bwl(this.b,f),D.aUY,e,y.S)],y.p),C.B,C.f,C.h),1)},
$S:959}
B.bwl.prototype={
$1(d){return d==null?null:this.a.$1(new B.bwk(this.b,d))},
$S:52}
B.bwk.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bwn.prototype={
$3(d,e,f){var x=null
return A.bDV(x,A.i(d,x,x,x,x,x,x,x,x,x),new B.bwg(this.a,this.b,e,f))},
$S:960}
B.bwg.prototype={
$0(){var x=this
return x.b.$1(new B.bwf(x.a,x.c,x.d))},
$S:0}
B.bwf.prototype={
$0(){var x=this.a
x.b=this.b
x.c=this.c},
$S:0}
B.bwh.prototype={
$1(d){var x=this.a
x.b=d
if(x.c<d)x.c=d},
$S:31}
B.bwi.prototype={
$1(d){var x=this.a
x.c=d
if(x.b>d)x.b=d},
$S:31}
B.bwj.prototype={
$0(){var x=this.a
return A.al(this.b,!1).bd(new A.R(x.b,x.c))},
$S:0}
B.bpO.prototype={
$0(){},
$S:0}
B.bq3.prototype={
$0(){var x=this.a
x.e=this.b
x.f=D.jV
x.w=x.r=null
x.x=!1
x.ch=x.ax=x.as=null},
$S:0}
B.bq7.prototype={
$0(){var x=this.a
return x.f=x.r!=null?D.h8:D.jV},
$S:0}
B.bq8.prototype={
$0(){var x=this.a
x.f=D.q6
x.as=null},
$S:0}
B.bq9.prototype={
$0(){var x=this.a
x.f=this.b
if(!this.c&&x.as==null)x.as=null},
$S:0}
B.bqb.prototype={
$0(){var x=this.a
x.f=D.q7
x.as=null
x.y=0
x.z=new A.b_(Date.now(),0,!1)
x.ax=null},
$S:0}
B.bqc.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bqa())},
$S:34}
B.bqa.prototype={
$0(){},
$S:0}
B.bqe.prototype={
$1(d){return this.a.y=d},
$S:61}
B.bqd.prototype={
$1(d){return this.a.yn()},
$S:9}
B.bqf.prototype={
$0(){var x,w=this.a
w.f=w.r!=null?D.h8:D.jV
x=this.b
w.as=B.Jd(x)
w.at=x},
$S:0}
B.bqh.prototype={
$0(){var x=this.a
x.f=D.lX
x.ay=Date.now()},
$S:0}
B.bqi.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bqg())},
$S:34}
B.bqg.prototype={
$0(){},
$S:0}
B.bq2.prototype={
$0(){var x=this.a
x.f=x.r!=null?D.h8:D.jV
x.as=this.b
x.at=this.c},
$S:0}
B.bq4.prototype={
$0(){var x=this.b
x.r=this.c
x.w=this.a.a
x.f=D.h8
x.x=!1},
$S:0}
B.bpW.prototype={
$0(){var x=this.a
x.f=D.lX
x.ay=Date.now()
x.as=null},
$S:0}
B.bpX.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bpV())},
$S:34}
B.bpV.prototype={
$0(){},
$S:0}
B.bpY.prototype={
$1(d){return d.d!==D.h2},
$S:z+11}
B.bpZ.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.bqn.prototype={
$0(){return B.bNO(this.a)},
$S:0}
B.bqo.prototype={
$1(d){var x=this.a.d
return x.oU(x.b.aem(d))},
$S:5}
B.bqp.prototype={
$0(){var x=y.z
return A.al(this.b,!1).cW(A.cW(new B.bqm(this.a),null,x),x)},
$S:0}
B.bqm.prototype={
$1(d){var x=this.a.a
return new B.Ay(x.c,x.d,x.e,x.f,null)},
$S:z+12}
B.bqq.prototype={
$0(){this.a.d.a.b23()
this.b.R(y.q).f.aO(D.aNJ)},
$S:0}
B.bq1.prototype={
$2(d,e){return C.bA},
$S:45}
B.bq0.prototype={
$2(d,e){var x,w,v,u=null,t=this.a,s=t.a,r=s.d+e
switch(t.d.c.YN(s.c,r).a.a){case 2:s=F.c7
break
case 1:s=D.cZ
break
case 0:s=N.hj
break
default:s=u}x=A.ab(16)
w=t.f===D.lX?u:new B.bq_(t,r)
v=s.bx(0.25)
if(r===t.gi6())s=C.i
s=A.cT(s,r===t.gi6()?2:1)
return A.dg(!1,x,!0,A.at(C.Y,A.i(E.aW(r),u,u,u,u,u,D.aVF,u,u,u),C.m,u,u,new A.ap(v,u,s,u,u,u,C.cp),u,u,u,u,u,u,36),u,!0,u,u,u,u,u,u,u,u,u,u,u,w,u,u,u,u,u,u,u)},
$S:115}
B.bq_.prototype={
$0(){return this.a.Si(this.b)},
$S:0}
B.bq6.prototype={
$0(){var x=this.a
return x.t(new B.bq5(x))},
$S:0}
B.bq5.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bqj.prototype={
$1(d){return d===D.pU},
$S:z+2}
B.bqk.prototype={
$1(d){return d===D.pV},
$S:z+2}
B.bql.prototype={
$1(d){return d===D.pW},
$S:z+2}
B.bpP.prototype={
$0(){var x=this.b!=null&&!this.c?1:null
return this.a.Kx(x)},
$S:0}
B.bpQ.prototype={
$1(d){var x=this.a.d
return x.oU(x.b.aTt(d.ga1(d)))},
$S:99}
B.bpS.prototype={
$1(d){return d.m(0,C.J)?C.a5:C.i},
$S:4}
B.bpR.prototype={
$1(d){return d.m(0,C.J)?C.r:C.O},
$S:4}
B.bpT.prototype={
$0(){var x=this.a
return x.Si(x.gi6()+1)},
$S:0}
B.bpU.prototype={
$0(){var x=this.a
return x.Si(x.gi6()+1)},
$S:0}
B.bpx.prototype={
$0(){},
$S:0}
B.bpG.prototype={
$0(){var x=this.a
x.e=this.b
x.Q=null
x.x=0
x.z=new A.b_(Date.now(),0,!1)},
$S:0}
B.bpH.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bpF())},
$S:34}
B.bpF.prototype={
$0(){},
$S:0}
B.bpJ.prototype={
$1(d){return this.a.x=d},
$S:61}
B.bpI.prototype={
$1(d){return this.a.BI(this.b,!1)},
$S:9}
B.bpK.prototype={
$0(){var x,w=this.a
w.e=null
x=this.b
w.Q=B.Jd(x)
w.as=x},
$S:0}
B.bpB.prototype={
$0(){var x=this.a
x.e=null
x.r.D(0,this.b)},
$S:0}
B.bpC.prototype={
$0(){var x,w=this.a,v=this.b
w.r.I(0,v)
x=this.c
w.w.n(0,v,B.Jd(x))
w.as=x},
$S:0}
B.bpD.prototype={
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
return A.d(n.a.ajK(s.b,B.BO(G.Ja(l,m,k.vo(l,m)).b).length),$async$$1)
case 6:r=f
l=o.a
k=l.f
l=l.c
q=B.bM5(G.Ja(l,m,k.vo(l,m)).b,r.a)
if(C.c.ai(q.c).length!==0){l=n.c
k=o.a.c
j=q.gqr()
l.aiP(k,m,n.b.a,j)}n.x3()
if(o.c!=null)o.t(new B.bpy(o,m,q))
t.push(5)
x=4
break
case 3:v=2
h=u.pop()
o=A.Y(h)
if(o instanceof B.kL){p=o
o=s.a
if(o.c!=null)o.t(new B.bpz(o,s.c,p))}else throw h
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
o=s.a
if(o.c!=null)o.t(new B.bpA(o,s.c))
x=t.pop()
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$$1,w)},
$S:183}
B.bpy.prototype={
$0(){var x=this.c
this.a.f.n(0,this.b,x)
return x},
$S:0}
B.bpz.prototype={
$0(){var x=this.a,w=this.c
x.w.n(0,this.b,B.Jd(w))
x.as=w},
$S:0}
B.bpA.prototype={
$0(){return this.a.r.I(0,this.b)},
$S:0}
B.bpE.prototype={
$0(){var x=this.a
x.f.ae(0)
x.w.ae(0)
x.as=null},
$S:0}
B.bpL.prototype={
$1(d){return d.gqr()},
$S:z+13}
B.bpM.prototype={
$0(){return this.a.BI(this.b,!0)},
$S:0}
B.bpN.prototype={
$0(){return this.a.Di(this.b)},
$S:0}
B.bpo.prototype={
$0(){},
$S:0}
B.bpv.prototype={
$2(d,e){return d+this.a.YE(e)},
$S:98}
B.bpw.prototype={
$2(d,e){return d+H.c9[e-1].a[1]},
$S:98}
B.bpu.prototype={
$0(){return this.a.HU(this.b)},
$S:0}
B.bpt.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.b,o=A.i(G.jF(p),q,q,q,q,q,C.lB,q,q,q),n=y.p,m=A.a([],n)
for(x=this.c,w=this.a,v=w.d,u=p*1000,t=1;t<=x;++t){s=new A.ba(10,10)
r=v.c.a.h(0,u+t)
switch((r==null?$.pZ():r).a.a){case 2:r=F.c7.bx(0.35)
break
case 1:r=D.cZ.bx(0.35)
break
case 0:r=C.zd
break
default:r=q}m.push(A.at(C.Y,A.i(E.aW(t),q,q,q,q,q,I.V8,q,q,q),C.m,q,q,new A.ap(r,q,q,new A.d2(s,s,s,s),q,q,C.u),q,38,q,q,q,q,38))}return A.dI(!0,new A.Z(C.iJ,A.ad(A.a([o,C.aR,D.b_N,C.T,new A.ef(D.Zq,A.hH(A.dx(m,C.aK,6,6),q,C.t,q,q,C.x),q),C.ak,A.bH(D.b0M,q,q,q,new B.bps(w,d,p),q,q)],n),C.aa,C.f,C.X),q),C.L,!0)},
$S:53}
B.bps.prototype={
$0(){var x=0,w=A.o(y.H),v=this,u,t
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:u=v.b
t=v.c
x=4
return A.d(A.eb(null,new B.bpr(t),u,y.y),$async$$0)
case 4:x=e===!0?2:3
break
case 2:x=5
return A.d(v.a.d.FH(t),$async$$0)
case 5:if(u.e!=null)A.al(u,!1).eo()
case 3:return A.m(null,w)}})
return A.n($async$$0,w)},
$S:2}
B.bpr.prototype={
$1(d){var x=null,w=A.i("\u0647\u062a\u0628\u062f\u0623 "+G.jF(this.a)+" \u0645\u0646 \u0627\u0644\u0623\u0648\u0644.",x,x,x,x,x,x,x,x,x)
return A.ec(A.a([A.bH(C.x_,x,x,x,new B.bpp(d),x,x),A.bH(D.b1S,x,x,x,new B.bpq(d),x,x)],y.p),w,D.b1w)},
$S:14}
B.bpp.prototype={
$0(){A.al(this.a,!1).bd(!1)
return null},
$S:0}
B.bpq.prototype={
$0(){A.al(this.a,!1).bd(!0)
return null},
$S:0}
B.bx7.prototype={
$1(d){var x=this.a
return new A.jQ(new B.bx6(x),null,x,null)},
$S:961}
B.bx6.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.a,r=s.b,q=A.a([],y.n)
for(x=y.c,w=1;w<=5;++w)q.push(new A.ey(w,t,A.i(E.aW(w),t,t,t,t,t,t,t,t,t),x))
x=y.S
v=y.b
u=y.p
x=A.a([D.aXu,C.ak,D.b0I,C.V,A.vz(new B.bx1(s,r),q,A.cV([r.a],x),!1,A.jG(t,t,t,new A.b4(new B.bx2(),v),t,t,t,t,new A.b4(new B.bx3(),v),t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),x),C.K,A.rC(C.r,C.L,t,new B.bx4(s,r),D.b_u,D.b2k,r.c),A.rC(C.r,C.L,t,new B.bx5(s,r),t,D.aWR,r.d)],u)
s=s.x
if(s!=null)C.b.E(x,A.a([C.aR,A.i("\u0627\u0644\u0645\u0639\u0627\u0644\u062c: "+s.glH(),t,t,t,t,t,C.ah,t,C.aF,t)],u))
x.push(C.K)
x.push(D.W_)
return A.dI(!0,A.hH(A.ad(x,C.aa,C.f,C.h),t,C.t,C.iJ,t,C.x),C.L,!0)},
$S:962}
B.bx1.prototype={
$1(d){return this.a.oU(this.b.aTq(d.ga1(d)))},
$S:99}
B.bx3.prototype={
$1(d){return d.m(0,C.J)?C.a5:C.i},
$S:4}
B.bx2.prototype={
$1(d){return d.m(0,C.J)?C.r:C.O},
$S:4}
B.bx4.prototype={
$1(d){return this.a.oU(this.b.aSU(d))},
$S:5}
B.bx5.prototype={
$1(d){return this.a.oU(this.b.aem(d))},
$S:5}
B.aVf.prototype={
$0(){return A.e9(A.bO(this.a,0,null),C.bF,null)},
$S:0}
B.bxj.prototype={
$1(d){var x,w=A.aO("https?://",!0,!1)
w=A.bR(d,w,"")
x=A.aO("www\\.",!0,!1)
return A.BP(A.bR(w,x,"www[.]"),A.aO("([A-Za-z0-9-]+)\\.(com|net|org|io|xyz|ru|info|me|link)\\b",!1,!1),new B.bxk(),null)},
$S:29}
B.bxk.prototype={
$1(d){return A.f(d.h(0,1))+"[.]"+A.f(d.h(0,2))},
$S:60}
B.bqr.prototype={
$0(){var x=this.a
x.e=!0
x.r=null},
$S:0}
B.bqs.prototype={
$0(){return this.a.f=!0},
$S:0}
B.bqt.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bqu.prototype={
$0(){return this.a.e=!1},
$S:0}
B.bqw.prototype={
$0(){var x=this.a
return x.t(new B.bqv(x))},
$S:0}
B.bqv.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.bxi.prototype={
$1(d){return d==null?"\u2013":A.f(d)},
$S:165};(function installTearOffs(){var x=a._instance_0u
x(B.ac9.prototype,"gaYX","aYY",1)
var w
x(w=B.Rk.prototype,"gaZc","zI",0)
x(w,"garI","uu",0)
x(w=B.Vf.prototype,"gn6","vf",1)
x(w,"gaHN","Jj",0)
x(w=B.Xf.prototype,"gn6","vf",1)
x(w,"gaK_","JA",0)
x(w,"gaNy","yn",0)
x(w,"gawn","HR",0)
x(w=B.Xe.prototype,"gn6","vf",1)
x(w,"gaKC","aKD",1)
x(B.Xd.prototype,"gn6","vf",1)
x(B.Xg.prototype,"gaON","Ky",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.ac9,B.Rl,B.Gr,B.Gt,B.Gs,B.kL,B.OB,B.m0,B.Fa,B.q8,B.aca,B.Rj])
x(A.ki,[B.aVg,B.aVi,B.aVn,B.aVo,B.aVq,B.aVp,B.aMF,B.aVv,B.bhW,B.bhV,B.bhJ,B.bhQ,B.bhT,B.bhU,B.bhM,B.bhL,B.bhO,B.bhK,B.bhR,B.bwk,B.bwg,B.bwf,B.bwj,B.bpO,B.bq3,B.bq7,B.bq8,B.bq9,B.bqb,B.bqa,B.bqf,B.bqh,B.bqg,B.bq2,B.bq4,B.bpW,B.bpV,B.bpZ,B.bqn,B.bqp,B.bqq,B.bq_,B.bq6,B.bq5,B.bpP,B.bpT,B.bpU,B.bpx,B.bpG,B.bpF,B.bpK,B.bpB,B.bpC,B.bpy,B.bpz,B.bpA,B.bpE,B.bpM,B.bpN,B.bpo,B.bpu,B.bps,B.bpp,B.bpq,B.aVf,B.bqr,B.bqs,B.bqt,B.bqu,B.bqw,B.bqv])
x(A.hW,[B.aVj,B.aVl,B.aVm,B.aVk,B.aME,B.buf,B.aVt,B.aVu,B.aVr,B.bhX,B.bhY,B.bhZ,B.bhP,B.bhS,B.bhN,B.bwp,B.bwo,B.bwl,B.bwn,B.bwh,B.bwi,B.bqc,B.bqe,B.bqd,B.bqi,B.bpX,B.bpY,B.bqo,B.bqm,B.bqj,B.bqk,B.bql,B.bpQ,B.bpS,B.bpR,B.bpH,B.bpJ,B.bpI,B.bpD,B.bpL,B.bpt,B.bpr,B.bx7,B.bx1,B.bx3,B.bx2,B.bx4,B.bx5,B.bxj,B.bxk,B.bxi])
x(A.n6,[B.aVh,B.bsN,B.aVw,B.aVx,B.bwm,B.bq1,B.bq0,B.bpv,B.bpw,B.bx6])
x(A.B_,[B.mE,B.C8,B.Eh,B.Bh])
w(B.Rk,A.hf)
x(A.P,[B.vd,B.Az,B.Ay,B.Ax,B.AA])
x(A.U,[B.Vf,B.Xf,B.Xe,B.Xd,B.Xg])
x(A.a5,[B.Ei,B.T2,B.AN,B.ac8])})()
A.oi(b.typeUniverse,JSON.parse('{"kL":{"bp":[]},"Az":{"P":[],"e":[]},"Ay":{"P":[],"e":[]},"Ax":{"P":[],"e":[]},"AA":{"P":[],"e":[]},"Rk":{"ar":[]},"vd":{"P":[],"e":[]},"Vf":{"U":["vd"]},"Ei":{"a5":[],"e":[]},"T2":{"a5":[],"e":[]},"Xf":{"U":["Az"]},"AN":{"a5":[],"e":[]},"Xe":{"U":["Ay"]},"Xd":{"U":["Ax"]},"ac8":{"a5":[],"e":[]},"Xg":{"U":["AA"]}}'))
var y=(function rtii(){var x=A.a3
return{u:x("q8"),c:x("ey<t>"),r:x("d_<t>"),k:x("y<m0>"),n:x("y<ey<t>>"),I:x("y<d_<t>>"),R:x("y<h0>"),Z:x("y<az<h,@>>"),d:x("y<OB>"),s:x("y<h>"),p:x("y<e>"),t:x("y<t>"),m:x("bj"),j:x("Q<@>"),L:x("Q<t>"),P:x("az<h,@>"),f:x("az<@,@>"),x:x("ak<h,t>"),a:x("bo"),K:x("N"),B:x("Fa"),l:x("+(t,t)"),e:x("cD<m0>"),N:x("h"),C:x("Gr"),D:x("Gs"),X:x("Rl"),_:x("Gt"),U:x("aF<h>"),G:x("mE"),q:x("of"),b:x("b4<H?>"),y:x("A"),i:x("K"),z:x("@"),S:x("t"),A:x("bj?"),Y:x("az<@,@>?"),O:x("N?"),M:x("+quota,usage(t,t)?"),o:x("dd"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.m4=new B.C8(0,"none")
D.m5=new B.C8(1,"learning")
D.e0=new B.C8(2,"memorized")
D.Zq=new A.as(0,1/0,0,320)
D.dH=new A.H(1,0.9725490196078431,0.44313725490196076,0.44313725490196076,C.l)
D.Zz=new A.ap(D.dH,null,null,null,null,null,C.cp)
D.cZ=new A.H(1,0.984313725490196,0.7490196078431373,0.1411764705882353,C.l)
D.acX=new A.a4(C.BV,null,C.b6,null,null,null)
D.b1y=new A.r("\u0627\u0644\u0646\u0635 \u0645\u062e\u0641\u064a \u2014 \u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.ek,null,null,null,null,null,null,null,null)
D.aRD=new A.v(!0,C.eZ,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b_P=new A.r("(\u062f\u0648\u0633 \u0647\u0646\u0627 \u0644\u0648 \u0639\u0627\u064a\u0632 \u062a\u0628\u0635)",null,D.aRD,null,null,null,null,null,null,null,null)
D.arS=x([D.acX,C.V,D.b1y,D.b_P],y.p)
D.a56=new A.j9(C.x,C.f,C.h,C.j,null,C.b4,null,0,D.arS,null)
D.a8x=new A.a_(0,18,0,18)
D.a8B=new A.a_(0,26,0,26)
D.a8G=new A.a_(0,4,0,6)
D.a8V=new A.a_(14,12,14,14)
D.a9s=new A.a_(3,0,0,0)
D.abH=new A.a2(63251,"MaterialIcons",null,!1)
D.ni=new A.a2(63677,"MaterialIcons",null,!1)
D.acc=new A.a2(983256,"MaterialIcons",null,!1)
D.aca=new A.a2(983209,"MaterialIcons",null,!1)
D.acF=new A.a4(D.aca,28,C.r,null,null,null)
D.ad7=new A.a4(C.BE,null,N.hj,null,null,null)
D.aby=new A.a2(62961,"MaterialIcons",null,!1)
D.adp=new A.a4(D.aby,null,null,null,null,null)
D.abF=new A.a2(63199,"MaterialIcons",null,!1)
D.adq=new A.a4(D.abF,null,null,null,null,null)
D.adt=new A.a4(C.hw,null,C.eZ,null,null,null)
D.adv=new A.a4(C.kK,44,C.i,null,null,null)
D.adM=new A.a4(D.ni,null,D.dH,null,null,null)
D.adV=new A.a4(C.tW,null,D.dH,null,null,null)
D.ae4=new A.a4(C.BA,null,null,null,null,null)
D.ae5=new A.a4(D.ni,null,null,null,null,null)
D.Ch=new A.a4(C.nn,null,null,null,null,null)
D.aem=new A.a4(C.kH,20,D.cZ,null,null,null)
D.aez=new A.a4(C.nk,30,C.r,null,null,null)
D.aeR=new A.a4(C.nl,16,C.r,null,null,null)
D.abU=new A.a2(63520,"MaterialIcons",null,!1)
D.af5=new A.a4(D.abU,null,null,null,null,null)
D.afa=new A.a4(C.kJ,null,null,null,null,null)
D.afg=new A.a4(C.Bq,null,null,null,null,null)
D.D1=x([1,3,5],y.t)
D.DP=x(["\u0627\u0639\u0648\u0630","\u0628\u0627\u0644\u0644\u0647","\u0645\u0646","\u0627\u0644\u0634\u064a\u0637\u0627\u0646","\u0627\u0644\u0631\u062c\u064a\u0645"],y.s)
D.aBR=new A.Z(C.hr,T.qI,null)
D.aoE=x([D.aBR],y.p)
D.aFb=new A.R(C.iX,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0629 \u0628\u0635\u0648\u062a \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062d\u0635\u0631\u064a (\u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645) \u0645\u0631\u0629 \u0623\u0648 \u0663 \u0623\u0648 \u0665 \u0645\u0631\u0627\u062a.")
D.aF3=new A.R(D.ni,"\u0633\u0645\u0651\u0639\u0647\u0627 \u0645\u0646 \u062d\u0641\u0638\u0643 \u2014 \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0644\u0648\u0651\u0646\u0644\u0643 \u0643\u0644 \u0643\u0644\u0645\u0629: \u0623\u062e\u0636\u0631 \u0635\u062d\u060c \u0623\u0635\u0641\u0631 \u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0623\u062d\u0645\u0631 \u063a\u0644\u0637.")
D.aFo=new A.R(C.fy,"\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0645\u0627 \u062a\u0633\u0645\u0651\u0639\u0647\u0627 \u0635\u062d \u0645\u0631\u062a\u064a\u0646 \u0648\u0631\u0627 \u0628\u0639\u0636 (\u062a\u0642\u062f\u0631 \u062a\u063a\u064a\u0651\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a).")
D.ac0=new A.a2(63625,"MaterialIcons",null,!1)
D.aFx=new A.R(D.ac0,"\u0643\u0644 \u062f\u0647 \u0628\u064a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u2014 \u0635\u0648\u062a\u0643 \u0645\u0634 \u0628\u064a\u062a\u0631\u0641\u0639 \u0639\u0644\u0649 \u0623\u064a \u0633\u064a\u0631\u0641\u0631.")
D.aqi=x([D.aFb,D.aF3,D.aFo,D.aFx],A.a3("y<+(a2,h)>"))
D.asf=x([D.m4,D.m5,D.e0],A.a3("y<C8>"))
D.Ik=x(["\u0628\u0633\u0645","\u0627\u0644\u0644\u0647","\u0627\u0644\u0631\u062d\u0645\u0646","\u0627\u0644\u0631\u062d\u064a\u0645"],y.s)
D.ayY=new B.Eh(0,"idle")
D.Ou=new B.Eh(1,"loading")
D.hO=new B.Eh(2,"ready")
D.ayZ=new B.Eh(3,"failed")
D.a9p=new A.a_(2,6,2,4)
D.aSy=new A.v(!0,C.r,null,null,null,null,14,C.W,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b2l=new A.r("\u0627\u0628\u062f\u0623 \u0645\u0646 \u0647\u0646\u0627 \u2014 \u0627\u0644\u0641\u0627\u062a\u062d\u0629 \u0648\u062c\u0632\u0621 \u0639\u0645\u0651",null,D.aSy,null,null,null,null,null,null,null,null)
D.aB4=new A.Z(D.a9p,D.b2l,null)
D.b29=new A.r("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.ek,null,null,null,null,null,null,null,null)
D.aoW=x([O.pj,C.aq,D.b29],y.p)
D.aKI=new A.ip(C.ax,C.ca,C.h,C.j,null,C.b4,null,0,D.aoW,null)
D.aBm=new A.Z(Q.rJ,D.aKI,null)
D.wQ=new A.v(!0,D.cZ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b2g=new A.r("\u0646\u0635\u064a\u062d\u0629: \u0627\u062d\u0641\u0638 \u0663\u2013\u0665 \u0622\u064a\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0631\u0629 \u0623\u0633\u0647\u0644.",null,D.wQ,null,null,null,null,null,null,null,null)
D.aBn=new A.Z(C.fx,D.b2g,null)
D.b2_=new A.r("\u0644\u0633\u0647 \u0645\u0633\u0645\u0651\u0639\u062a\u0634 \u0623\u064a \u0622\u064a\u0629 \u2014 \u0627\u0628\u062f\u0623 \u0628\u0633\u0648\u0631\u0629 \u0642\u0635\u064a\u0631\u0629 \u0645\u0646 \u062c\u0632\u0621 \u0639\u0645\u0651.",null,C.ah,C.ad,null,null,null,null,null,null,null)
D.aBu=new A.Z(C.C,D.b2_,null)
D.adK=new A.a4(C.dd,18,F.c7,null,null,null)
D.aYi=new A.r("\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u062c\u0627\u0647\u0632 \u064a\u0633\u0645\u0639\u0643",null,C.lC,null,null,null,null,null,null,null,null)
D.aqH=x([D.adK,C.bA,D.aYi],y.p)
D.aKM=new A.ip(C.ax,C.f,C.h,C.j,null,C.b4,null,0,D.aqH,null)
D.aBJ=new A.Z(C.aA,D.aKM,null)
D.a9m=new A.a_(2,0,2,8)
D.b_U=new A.r("\u0627\u0644\u0633\u0648\u0631 \u0627\u0644\u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u060c \u0645\u0646 \u0627\u0644\u0646\u0627\u0633 \u0644\u062d\u062f \u0627\u0644\u0646\u0628\u0623.",null,C.ah,null,null,null,null,null,null,null,null)
D.aBL=new A.Z(D.a9m,D.b_U,null)
D.aeX=new A.a4(C.hx,30,C.r,null,null,null)
D.b0V=new A.r("\u0633\u0645\u0651\u0639\u060c \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0642\u0648\u0644\u0643 \u0635\u062d \u0648\u0644\u0627 \u063a\u0644\u0637",null,C.lB,null,null,null,null,null,null,null,null)
D.a9Y=new A.dB(1,C.aS,D.b0V,null)
D.an7=x([D.aeX,C.aV,D.a9Y],y.p)
D.aKH=new A.ip(C.ax,C.f,C.h,C.j,null,C.b4,null,0,D.an7,null)
D.aeH=new A.a4(C.fy,18,F.c7,null,null,null)
D.Vt=new A.v(!0,F.c7,null,null,null,null,12,C.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZQ=new A.r("\u0645\u062d\u0641\u0648\u0638\u0629",null,D.Vt,null,null,null,null,null,null,null,null)
D.anC=x([D.aeH,C.fW,D.aZQ],y.p)
D.aKJ=new A.ip(C.ax,C.f,C.X,C.j,null,C.b4,null,0,D.anC,null)
D.aMT=new A.G(0,30)
D.pi=new A.G(1/0,54)
D.aN3=new A.G(1/0,48)
D.aN6=new A.G(1/0,50)
D.aN9=new A.G(1/0,52)
D.aNc=new A.cr(16,null,null,null)
D.aNg=new A.cr(14,14,O.yJ,null)
D.b0S=new A.r("safe mode / no-gpu flags cleared (reload)",null,null,null,null,null,null,null,null,null,null)
D.aNJ=new A.hK(D.b0S,null,null,null,null,null,null,null,null,null,null,null,null,C.z,!1,null,null,null,C.k,null)
D.aRd=new A.v(!0,C.a8,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRM=new A.v(!0,C.r,null,null,null,null,null,C.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.i9=new A.v(!0,C.i,null,"AmiriQuranMT",null,null,28,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.wN=new A.v(!0,D.dH,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSz=new A.v(!0,C.i,null,null,null,null,15,C.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aT7=new A.v(!0,F.c7,null,null,null,null,null,C.W,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vi=new A.v(!0,D.dH,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUF=new A.v(!0,D.cZ,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUL=new A.v(!0,C.r,null,null,null,null,24,C.W,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUY=new A.v(!0,C.i,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVF=new A.v(!0,C.i,null,null,null,null,12,C.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWn=new A.r("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u062e\u0631 \u0645\u0631\u0629",null,C.fj,null,null,null,null,null,null,null,null)
D.aWR=new A.r("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643 (\u062e\u0628\u0651\u064a \u0627\u0644\u0646\u0635)",null,C.cT,null,null,null,null,null,null,null,null)
D.aXd=new A.r("\u2022 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641: \u0645\u0634\u0631\u0648\u0639 \u062a\u0646\u0632\u064a\u0644 Tanzil (\u062a\u0631\u062e\u064a\u0635 CC BY 3.0).",null,C.ah,null,null,null,null,null,null,null,null)
D.aXu=new A.r("\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,C.lB,null,null,null,null,null,null,null,null)
D.aXv=new A.r("\u062e\u0628\u0651\u064a \u0646\u0635 \u0627\u0644\u0622\u064a\u0629 \u0648\u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.ah,null,null,null,null,null,null,null,null)
D.aSN=new A.v(!0,C.i,null,null,null,null,null,C.W,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXy=new A.r("\u0627\u0644\u0645\u0635\u0627\u062f\u0631",null,D.aSN,null,null,null,null,null,null,null,null)
D.aXF=new A.r("\u0639\u062f\u0651\u064a \u0644\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.ek,null,null,null,null,null,null,null,null)
D.aYf=new A.r("reset safe mode / WebGPU ban",null,C.fh,null,null,null,null,null,null,null,null)
D.aYg=new A.r("\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.cE,null,null,null,null,null,null,null,null)
D.aYN=new A.r("\u0645\u0645\u0643\u0646 \u062a\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 \u062f\u0644\u0648\u0642\u062a\u064a \u0644\u062d\u062f \u0645\u0627 \u064a\u062e\u0644\u0635.",null,C.ah,null,null,null,null,null,null,null,null)
D.aYO=new A.r("\u0623\u0648\u0644 \u0645\u0631\u0629 \u0628\u0633: \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,K.b0,null,null,null,null,null,null,null,null)
D.aZy=new A.r("\u062c\u0631\u0651\u0628 \u0639\u0644\u0649 \u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a (\u0644\u0644\u062a\u062c\u0631\u0628\u0629)",null,null,null,null,null,null,null,null,null,null)
D.aZS=new A.r("\u0627\u0628\u0639\u062a \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,C.Vu,null,null,null,null,null,null,null,null)
D.aTM=new A.v(!0,F.c7,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b_7=new A.r("\u0648\u0635\u0644\u062a\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2014 \u0634\u0643\u0631\u064b\u0627\u060c \u0647\u0646\u0628\u0635 \u0639\u0644\u064a\u0647\u0627.",null,D.aTM,null,null,null,null,null,null,null,null)
D.b_l=new A.r("\u062e\u0644\u0635\u062a",null,C.i8,null,null,null,null,null,null,null,null)
D.b_q=new A.r("\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629",null,D.wQ,null,null,null,null,null,null,null,null)
D.b_u=new A.r("\u0628\u0639\u062f \u062d\u0648\u0627\u0644\u064a \u062b\u0627\u0646\u064a\u0629 \u0633\u0643\u0648\u062a",null,C.ah,null,null,null,null,null,null,null,null)
D.b_N=new A.r("\u0623\u062e\u0636\u0631: \u0645\u062d\u0641\u0648\u0638\u0629 \u2014 \u0623\u0635\u0641\u0631: \u0628\u062a\u0631\u0627\u062c\u0639\u0647\u0627 \u2014 \u0631\u0645\u0627\u062f\u064a: \u0644\u0633\u0647",null,C.ah,null,null,null,null,null,null,null,null)
D.b_W=new A.r("\u0645\u0641\u064a\u0634 \u0633\u0648\u0631\u0629 \u0628\u0627\u0644\u0627\u0633\u0645 \u062f\u0647",null,C.ah,null,null,null,null,null,null,null,null)
D.b04=new A.r("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643",null,I.lD,null,null,null,null,null,null,null,null)
D.b0I=new A.r("\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f \u0643\u0627\u0645 \u062a\u0633\u0645\u064a\u0639 \u0635\u062d \u0648\u0631\u0627 \u0628\u0639\u0636\u061f",null,I.lD,null,null,null,null,null,null,null,null)
D.aTp=new A.v(!0,D.dH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b0M=new A.r("\u0627\u0628\u062f\u0623 \u0627\u0644\u0633\u0648\u0631\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644",null,D.aTp,null,null,null,null,null,null,null,null)
D.aSS=new A.v(!0,C.b6,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,C.fY,null,null,null,null,null,null,null,null)
D.b11=new A.r("\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aSS,null,null,null,null,null,null,null,null)
D.b14=new A.r("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636",null,K.b0,null,null,null,null,null,null,null,null)
D.b1j=new A.r("\u064a\u0644\u0627 \u0646\u0628\u062f\u0623",null,C.cl,null,null,null,null,null,null,null,null)
D.b1w=new A.r("\u062a\u0645\u0633\u062d \u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0633\u0648\u0631\u0629 \u062f\u064a\u061f",null,null,null,null,null,null,null,null,null,null)
D.b1A=new A.r("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.pE,null,null,null,null,null,null,null,null)
D.b1E=new A.r("\u0633\u0645\u0651\u0639\u0647\u0645 \u062a\u0627\u0646\u064a",null,null,null,null,null,null,null,null,null,null)
D.b1S=new A.r("\u0627\u0645\u0633\u062d",null,null,null,null,null,null,null,null,null,null)
D.b1T=new A.r("\u2022 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: whisper-base-ar-quran \u0645\u0646 Tarteel (\u062a\u0631\u062e\u064a\u0635 Apache-2.0)\u060c \u0628\u0635\u064a\u063a\u0629 ONNX \u0645\u0646 \u0645\u0634\u0631\u0648\u0639 Basira\u060c \u0648\u0628\u064a\u0634\u062a\u063a\u0644 \u062c\u0648\u0651\u0647 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0628\u0645\u0643\u062a\u0628\u0629 Transformers.js.",null,C.ah,null,null,null,null,null,null,null,null)
D.b1U=new A.r("\u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647 \u0630\u0627\u0643\u0631\u062a\u0647 \u0642\u0644\u064a\u0644\u0629 \u2014 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0645\u0643\u0646 \u064a\u0643\u0648\u0646 \u0628\u0637\u064a\u0621 \u0639\u0644\u064a\u0647.",null,D.wQ,null,null,null,null,null,null,null,null)
D.b2k=new A.r("\u0648\u0642\u0651\u0641 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0644\u0648\u062d\u062f\u0647 \u0644\u0645\u0627 \u0623\u0633\u0643\u062a",null,C.cT,null,null,null,null,null,null,null,null)
D.b2z=new A.r("\u2022 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: \u0627\u0644\u0634\u064a\u062e \u0645\u062d\u0645\u0648\u062f \u062e\u0644\u064a\u0644 \u0627\u0644\u062d\u0635\u0631\u064a \u2014 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645\u060c \u0645\u0646 everyayah.com.",null,C.ah,null,null,null,null,null,null,null,null)
D.b2O=new A.r("\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0627\u0628\u062f\u0623",null,C.cE,null,null,null,null,null,null,null,null)
D.W_=new B.ac8(null)
D.b38=new B.Ax(null)
D.b39=new B.Rj(2,1,!0,!1,!1)
D.W0=new B.Rl(!1,!1,!1,!1,!1,0)
D.h2=new B.mE(0,"ok")
D.pU=new B.mE(1,"near")
D.pV=new B.mE(2,"wrong")
D.pW=new B.mE(3,"missing")
D.Wo=new B.mE(4,"extra")
D.abQ=new A.a2(63456,"MaterialIcons",null,!1)
D.b8w=new B.AN(D.cZ,D.abQ,"\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629","\u0642\u0631\u0651\u0628 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0646\u0643 \u0648\u0627\u0642\u0631\u0627 \u0628\u0635\u0648\u062a \u0648\u0627\u0636\u062d \u0641\u064a \u0645\u0643\u0627\u0646 \u0647\u0627\u062f\u064a\u060c \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a.",null)
D.b8R=new B.T2(!1,null)
D.xo=new B.T2(!0,null)
D.jV=new B.Bh(0,"idle")
D.q6=new B.Bh(1,"playing")
D.q7=new B.Bh(2,"recording")
D.lX=new B.Bh(3,"thinking")
D.h8=new B.Bh(4,"result")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ccP","bCR",()=>new B.ac9())
x($,"cg_","bRA",()=>A.aO("\u0640[\u064b-\u0652]*\u0670",!0,!1))
x($,"cg0","bRB",()=>A.aO("\u0640[\u064b-\u0652]*[\u06e6\u06e7]",!0,!1))
x($,"cgb","bRJ",()=>A.aO("\u0648\u0670",!0,!1))
x($,"cfz","bRh",()=>A.aO("[\u0648\u064a\u0649][\u064b-\u0652]*[\u0654]",!0,!1))
x($,"ce4","bQj",()=>A.aO("\u0627[\u0654\u0655]",!0,!1))
x($,"cfb","bR0",()=>A.aO("[\u0654\u0655]",!0,!1))
x($,"ce5","bQk",()=>A.aO("[\u0622\u0623\u0625\u0671\u0672\u0673]",!0,!1))
x($,"ceb","bQp",()=>A.aO("[\u0624\u0626]",!0,!1))
x($,"cfd","bR2",()=>A.aO("[\u064b-\u065f\u0670\u06d6-\u06ed\u08d3-\u08ff\u0640]",!0,!1))
x($,"cfE","bRk",()=>A.aO("[\u06dd\u06de\u0660-\u0669\u06f0-\u06f90-9]",!0,!1))
x($,"cfk","bR8",()=>A.aO("[^\u0621-\u064a\\s]",!0,!1))
x($,"cfZ","bDr",()=>A.aO("\\s+",!0,!1))
x($,"ca6","pZ",()=>B.bSE(D.m4,0,A.byB(0,!0)))
x($,"ccQ","Jj",()=>new B.Rk($.bCR(),D.b39,B.c_C(),D.ayY,$.a7()))})()};
(a=>{a["3BUk+g6gxV/1WGs4uP4OFkdmqqk="]=a.current})($__dart_deferred_initializers__);