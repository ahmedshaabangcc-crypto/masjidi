((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,P,R,H,N,G,O,S,T,K,L,B={
c_w(d){var x,w,v,u,t,s
if(d instanceof B.kL)return d
try{x=A.cs(d)
w=x.code
v=x.message
u=w==null?"failed":A.a8(w)
t=v==null?"":A.a8(v)
return new B.kL(u,t)}catch(s){u=A.f(d)
return new B.kL("failed",u)}},
ac7:function ac7(){this.b=this.a=null},
aVf:function aVf(d){this.a=d},
aVi:function aVi(){},
aVh:function aVh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aVg:function aVg(d){this.a=d},
aVm:function aVm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aVk:function aVk(d){this.a=d},
aVl:function aVl(d){this.a=d},
aVn:function aVn(d){this.a=d},
aVp:function aVp(d,e,f){this.a=d
this.b=e
this.c=f},
aVo:function aVo(d,e,f){this.a=d
this.b=e
this.c=f},
aVj:function aVj(){},
c_x(d,e){return new B.kL(d,e)},
Rj:function Rj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.w=i},
Gp:function Gp(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i
_.w=j},
Gr:function Gr(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Gq:function Gq(d,e){this.a=d
this.b=e},
kL:function kL(d,e){this.a=d
this.b=e},
bN1(d){var x,w=$.bRw()
w=A.bR(d,w,"\u0627")
x=$.bRx()
w=A.bR(w,x,"\u064a")
x=$.bRF()
w=A.bR(w,x,"\u0627")
x=$.bQf()
w=A.bR(w,x,"\u0627")
x=$.bRd()
w=A.bR(w,x,"\u0621")
x=$.bQX()
w=A.bR(w,x,"\u0621")
x=$.bQg()
w=A.bR(w,x,"\u0627")
x=$.bQl()
w=A.bR(w,x,"\u0621")
w=A.bR(w,"\u0649","\u064a")
w=A.bR(w,"\u0629","\u0647")
x=$.bQZ()
w=A.bR(w,x,"")
x=$.bRg()
w=A.bR(w,x," ")
x=$.bR4()
w=A.bR(w,x," ")
x=$.bDn()
return C.c.ai(A.bR(w,x," "))},
c3X(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.length,k=e.length
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
bxm(d,e){var x,w,v,u,t,s
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
s=1-B.c3X(d,e)/u
return s>=1?0.99:s},
BN(d){var x,w,v,u,t,s,r,q=A.a([],y.d)
for(x=C.c.qY(d,$.bDn()),w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.length===0)continue
t=B.bN1(u)
s=A.bR(t," ","")
if(s.length===0){if(q.length!==0){r=q.pop()
q.push(new B.OA(r.a+" "+u,r.b))}continue}q.push(new B.OA(u,s))}return q},
c2J(d,e){var x,w,v,u,t=new B.bsJ(),s=A.a([],y.s)
for(x=A.eS(e,0,A.ib(5,"count",y.S),A.ae(e).c),w=x.$ti,x=new A.bU(x,x.gL(0),w.i("bU<aG.E>")),w=w.i("aG.E");x.u();){v=x.d
s.push((v==null?w.a(v):v).b)}u=!t.$2(s,D.DX)&&t.$2(d,D.DX)?C.b.ir(d,5):d
return!t.$2(s,D.Is)&&t.$2(u,D.Is)?C.b.ir(u,4):u},
bM1(d,e){var x=B.BN(d),w=B.bN1(e),v=y.U
v=A.a0(new A.aF(A.a(w.split(" "),y.s),new B.bub(),v),v.i("M.E"))
return new B.F8(x,B.c1X(x,B.c2J(v,x)),w)},
c1X(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=A.a([],y.s)
for(x=a5.length,w=0;w<a5.length;a5.length===x||(0,A.B)(a5),++w)a4.push(a5[w].b)
v=a4.length
u=a6.length
t=u+1
x=(v+1)*t
s=y.i
r=A.bW(x,0,!1,s)
q=A.bW(x,0,!1,y.S)
p=A.bW(v*(u===0?1:u),0,!1,s)
for(o=0;o<v;++o)for(x=o*u,n=0;n<u;++n)p[x+n]=B.bxm(a4[o],a6[n])
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
e=2}if(n>=2&&r[h-2]<g&&B.bxm(a4[m],a6[n-2]+a6[n-1])>=1){g=r[h-2]
e=3}if(s&&r[i+n-1]<g&&B.bxm(a4[j]+a4[m],a6[n-1])>=1){g=r[i+n-1]
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
a1.push(new B.m0(o,x,s,m))
break
case 1:--o
a1.push(new B.m0(o,a4[o],null,D.pX))
break
case 2:--n
a1.push(new B.m0(null,null,a6[n],D.WC))
break
case 3:--o
a3=n-2
a1.push(new B.m0(o,a4[o],a6[a3]+" "+a6[n-1],D.h7))
n=a3
break
default:x=o-1;--n
a1.push(new B.m0(x,a4[x],a6[n],D.h7))
o-=2
a1.push(new B.m0(o,a4[o],a6[n],D.h7))}}a4=y.e
a4=A.a0(new A.cD(a1,a4),a4.i("aG.E"))
return a4},
mF:function mF(d,e){this.a=d
this.b=e},
OA:function OA(d,e){this.a=d
this.b=e},
m0:function m0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
F8:function F8(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
aMD:function aMD(d){this.a=d},
aMC:function aMC(){},
bsJ:function bsJ(){},
bub:function bub(){},
bSA(d,e,f){return new B.q7(d,e,f)},
c4M(d){var x
A:{if("memorized"===d){x=D.e1
break A}if("learning"===d){x=D.m5
break A}x=D.m4
break A}return x},
bNZ(d,e){return d>=1&&d<=114&&e>=1&&e<=I.c8[d-1].a[1]},
c_y(){var x=y.S
return new B.ac8(A.x(x,y.u),A.aE(x))},
aVr(d){var x=d.il()
return C.c.ds(C.e.j(A.cL(x)),4,"0")+"-"+C.c.ds(C.e.j(A.cj(x)),2,"0")+"-"+C.c.ds(C.e.j(A.cB(x)),2,"0")},
bJa(d){var x=y.x,w=A.a0(new A.ak(A.a(d.split("-"),y.s),A.c62(),x),x.i("aG.E"))
return B.aVr(A.jJ(w[0],w[1],w[2]-1,12,0,0,0))},
bAs(d){var x,w,v,u,t,s,r,q,p=y.S,o=A.x(p,y.u),n=A.aE(p),m=new B.ac8(o,n),l=d.h(0,"rows")
if(y.f.b(l))for(x=l.gdv(),x=x.ga_(x),w=y.j;x.u();){v=x.gK()
u=A.f2(A.f(v.a),null)
t=v.b
v=!0
if(u!=null)if(w.b(t))if(J.be(t)>=3){v=C.e.ba(u,1000)
s=C.e.ah(u,1000)
v=!(v>=1&&v<=114&&s>=1&&s<=I.c8[v-1].a[1])}if(v)continue
v=J.bs(t)
r=C.d.bU(A.dr(v.h(t,0)))
if(r<0||r>=3)continue
o.n(0,u,new B.q7(D.asu[r],C.d.bU(A.dr(v.h(t,1))),new A.b_(A.kn(C.d.bU(A.dr(v.h(t,2))),0,!0),0,!0)))}q=d.h(0,"dirty")
if(y.j.b(q)){x=J.bxX(q,y.o)
p=A.nq(x,new B.aVq(),x.$ti.i("M.E"),p)
n.E(0,new A.aF(p,o.gWk(),A.w(p).i("aF<M.E>")))}m.c=A.O(d.h(0,"last"))
p=A.bn(d.h(0,"streak"))
p=p==null?null:C.d.bU(p)
p=m.d=p==null?0:p
o=A.bn(d.h(0,"best"))
o=o==null?null:C.d.bU(o)
m.e=o==null?p:o
return m},
arl(d,e){return"https://everyayah.com/data/Husary_Muallim_128kbps/"+C.c.ds(C.e.j(d),3,"0")+C.c.ds(C.e.j(e),3,"0")+".mp3"},
C6:function C6(d,e){this.a=d
this.b=e},
q7:function q7(d,e,f){this.a=d
this.b=e
this.c=f},
ac8:function ac8(d,e){var _=this
_.a=d
_.b=e
_.c=null
_.e=_.d=0},
aVs:function aVs(){},
aVt:function aVt(){},
aVq:function aVq(){},
Rh:function Rh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bY5(){return new B.vc(null)},
c8t(d,e){var x,w,v,u,t={},s=I.c8[e-1].a[1],r=$.Ji().c
t.a=1
x=r.a
w=e*1000
v=1
for(;;){if(v<=s){v=x.h(0,w+v)
v=(v==null?$.pY():v).a===D.e1}else v=!1
if(!v)break
v=++t.a}x=t.a
if(x>s){t.a=1
u=1}else u=x
x=s<=10
if(x)u=1
t.b=u
t.c=x?s:C.e.cz(u+4,1,s)
return A.fA(C.de,new B.bwl(t,s,e),d,!0,null,null,!1,y.l)},
bCc(d){return A.d7(0,0,0,0,0,C.e.cz(C.d.ar(6+d*1.2),25,90))},
bB9(d){return E.aW(C.e.ba(d,60))+":"+C.c.ds(E.aW(C.e.ah(d,60)),2,"\u0660")},
bNK(d){return A.fA(C.de,new B.bx3($.Ji()),d,!0,null,null,!1,y.H)},
Jb(d){var x,w=d.a
A:{if("timeout"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0627\u062a\u0623\u062e\u0631 \u0623\u0648\u064a \u0648\u0645\u0631\u062f\u0651\u0634\u060c \u0641\u0648\u0642\u0651\u0641\u0646\u0627\u0647 \u0648\u062c\u0631\u0651\u0628\u0646\u0627 \u062a\u0627\u0646\u064a \u0628\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0623\u062e\u0641 \u0648\u0645\u0646\u0641\u0639\u0634. \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}if("crashed"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0642\u0641 \u0641\u062c\u0623\u0629 (\u063a\u0627\u0644\u0628\u064b\u0627 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0634 \u0645\u0643\u0641\u064a\u0629). \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}x=d.gjS()
break A}return x},
c9K(d,e,f){var x,w=new B.bxf(),v=w.$1(f),u=w.$1("\xab\u0627\u0644\u0645\u062d\u0641\u0651\u0638\xbb \u0645\u0634\u0643\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 ("+e+")\n"+d.a+": "+d.b+"\n"),t=1990-u.length
if(v.length>t)v=t<=1?"":C.c.Y(v,0,t-1)+"\u2026"
x=u+v
return x.length>1990?C.c.Y(x,0,1990):x},
bNU(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
try{x=y.P.a(C.a1.eW(a4,null))
s=y.Y
r=s.a(J.b5(x,"rec"))
w=r==null?C.cF:r
q=s.a(J.b5(x,"last"))
v=q==null?C.cF:q
u=new B.bxe()
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
Ef:function Ef(d,e){this.a=d
this.b=e},
Ri:function Ri(d,e,f,g,h){var _=this
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
aVu:function aVu(d){this.a=d},
aVv:function aVv(d){this.a=d},
aVw:function aVw(d){this.a=d},
vc:function vc(d){this.a=d},
Vd:function Vd(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.w=_.r=null},
bhT:function bhT(d){this.a=d},
bhS:function bhS(d,e){this.a=d
this.b=e},
bhU:function bhU(d){this.a=d},
bhR:function bhR(d,e){this.a=d
this.b=e},
bhV:function bhV(){},
bhF:function bhF(){},
bhL:function bhL(d,e,f){this.a=d
this.b=e
this.c=f},
bhM:function bhM(){},
bhP:function bhP(d){this.a=d},
bhO:function bhO(){},
bhQ:function bhQ(d){this.a=d},
bhI:function bhI(d,e){this.a=d
this.b=e},
bhJ:function bhJ(d){this.a=d},
bhH:function bhH(){},
bhK:function bhK(d){this.a=d},
bhG:function bhG(d){this.a=d},
bhN:function bhN(d,e){this.a=d
this.b=e},
Eg:function Eg(d,e,f){this.c=d
this.d=e
this.a=f},
T0:function T0(d,e){this.c=d
this.a=e},
bwl:function bwl(d,e,f){this.a=d
this.b=e
this.c=f},
bwi:function bwi(d,e,f){this.a=d
this.b=e
this.c=f},
bwk:function bwk(d,e){this.a=d
this.b=e},
bwh:function bwh(d,e){this.a=d
this.b=e},
bwg:function bwg(d,e){this.a=d
this.b=e},
bwj:function bwj(d,e){this.a=d
this.b=e},
bwc:function bwc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bwb:function bwb(d,e,f){this.a=d
this.b=e
this.c=f},
bwd:function bwd(d){this.a=d},
bwe:function bwe(d){this.a=d},
bwf:function bwf(d,e){this.a=d
this.b=e},
Bg:function Bg(d,e){this.a=d
this.b=e},
Ax:function Ax(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Xd:function Xd(d,e){var _=this
_.d=d
_.e=$
_.f=e
_.w=_.r=null
_.x=!1
_.y=0
_.ax=_.at=_.as=_.Q=_.z=null
_.ay=0
_.c=_.a=_.ch=null},
bpK:function bpK(){},
bq_:function bq_(d,e){this.a=d
this.b=e},
bq3:function bq3(d){this.a=d},
bq4:function bq4(d){this.a=d},
bq5:function bq5(d,e,f){this.a=d
this.b=e
this.c=f},
bq7:function bq7(d){this.a=d},
bq8:function bq8(d){this.a=d},
bq6:function bq6(){},
bqa:function bqa(d){this.a=d},
bq9:function bq9(d){this.a=d},
bqb:function bqb(d,e){this.a=d
this.b=e},
bqd:function bqd(d){this.a=d},
bqe:function bqe(d){this.a=d},
bqc:function bqc(){},
bpZ:function bpZ(d,e,f){this.a=d
this.b=e
this.c=f},
bq0:function bq0(d,e,f){this.a=d
this.b=e
this.c=f},
bpS:function bpS(d){this.a=d},
bpT:function bpT(d){this.a=d},
bpR:function bpR(){},
bpU:function bpU(){},
bpV:function bpV(d,e){this.a=d
this.b=e},
bqj:function bqj(d){this.a=d},
bqk:function bqk(d){this.a=d},
bql:function bql(d,e){this.a=d
this.b=e},
bqi:function bqi(d){this.a=d},
bqm:function bqm(d,e){this.a=d
this.b=e},
bpY:function bpY(){},
bpX:function bpX(d){this.a=d},
bpW:function bpW(d,e){this.a=d
this.b=e},
bq2:function bq2(d){this.a=d},
bq1:function bq1(d){this.a=d},
bqf:function bqf(){},
bqg:function bqg(){},
bqh:function bqh(){},
bpL:function bpL(d,e,f){this.a=d
this.b=e
this.c=f},
bpM:function bpM(d){this.a=d},
bpO:function bpO(){},
bpN:function bpN(){},
bpP:function bpP(d){this.a=d},
bpQ:function bpQ(d){this.a=d},
AM:function AM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Aw:function Aw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Xc:function Xc(d,e,f,g,h){var _=this
_.d=d
_.e=null
_.f=e
_.r=f
_.w=g
_.x=0
_.as=_.Q=_.z=_.y=null
_.at=h
_.c=_.a=null},
bpt:function bpt(){},
bpC:function bpC(d,e){this.a=d
this.b=e},
bpD:function bpD(d){this.a=d},
bpB:function bpB(){},
bpF:function bpF(d){this.a=d},
bpE:function bpE(d,e){this.a=d
this.b=e},
bpG:function bpG(d,e){this.a=d
this.b=e},
bpx:function bpx(d,e){this.a=d
this.b=e},
bpy:function bpy(d,e,f){this.a=d
this.b=e
this.c=f},
bpz:function bpz(d,e,f){this.a=d
this.b=e
this.c=f},
bpu:function bpu(d,e,f){this.a=d
this.b=e
this.c=f},
bpv:function bpv(d,e,f){this.a=d
this.b=e
this.c=f},
bpw:function bpw(d,e){this.a=d
this.b=e},
bpA:function bpA(d){this.a=d},
bpH:function bpH(){},
bpI:function bpI(d,e){this.a=d
this.b=e},
bpJ:function bpJ(d,e){this.a=d
this.b=e},
Av:function Av(d){this.a=d},
Xb:function Xb(d){this.d=d
this.c=this.a=null},
bpk:function bpk(){},
bpr:function bpr(d){this.a=d},
bps:function bps(){},
bpq:function bpq(d,e){this.a=d
this.b=e},
bpp:function bpp(d,e,f){this.a=d
this.b=e
this.c=f},
bpo:function bpo(d,e,f){this.a=d
this.b=e
this.c=f},
bpn:function bpn(d){this.a=d},
bpl:function bpl(d){this.a=d},
bpm:function bpm(d){this.a=d},
bx3:function bx3(d){this.a=d},
bx2:function bx2(d){this.a=d},
bwY:function bwY(d,e){this.a=d
this.b=e},
bx_:function bx_(){},
bwZ:function bwZ(){},
bx0:function bx0(d,e){this.a=d
this.b=e},
bx1:function bx1(d,e){this.a=d
this.b=e},
ac6:function ac6(d){this.a=d},
aVe:function aVe(d){this.a=d},
bxf:function bxf(){},
bxg:function bxg(){},
Ay:function Ay(d,e,f){this.c=d
this.d=e
this.a=f},
Xe:function Xe(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.r=null},
bqn:function bqn(d){this.a=d},
bqo:function bqo(d){this.a=d},
bqp:function bqp(d,e){this.a=d
this.b=e},
bqq:function bqq(d){this.a=d},
bqs:function bqs(d){this.a=d},
bqr:function bqr(d){this.a=d},
bxe:function bxe(){}},D,Q,I,E,F
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
B.ac7.prototype={
pk(){var x=this,w=x.a
if(w!=null)return A.dN(w,y.m)
w=x.b
return w==null?x.b=new B.aVf(x).$0():w},
ri(d,e){return this.azF(d,e,e)},
azF(d,e,f){var x=0,w=A.o(f),v,u=2,t=[],s,r,q,p
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
r=B.c_w(s)
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
v=new B.Rj(q,p,o,n,m,l)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=D.We
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
v=new A.alm(q,p)
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
b0G(){var x=y.K
A.Dn(this.pk().bT(new B.aVi(),x),x)},
pj(d,e){var x=A.jC(d[e])
x=x==null?null:C.d.ar(x)
return x==null?0:x},
aZa(d,e,f){return this.ri(new B.aVh(this,d,e,f),y.C)},
gaa9(){var x,w
try{x=A.jD(b.G.sessionStorage)
return x}catch(w){return null}},
gagU(){var x=A.hy(b.G.mogtama3yTutorIsolated)
if(x==null)x=null
return x===!0},
a0x(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
try{m=b.G
l=A.hy(m.crossOriginIsolated)
if(l==null)l=f
if(l===!0)return!1
if(this.gagU())return!1
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
l=this.gaa9()
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
afA(){var x,w,v,u,t,s,r=null
try{x=this.gaa9()
if(x!=null)A.ch(x,"setItem","mt.tutor.iso",""+Date.now(),r,r)}catch(w){}x=b.G
v=A.cs(x.location)
u=A.a8(v.hash)
t=A.a8(v.search)
s=A.bO(A.a8(A.cs(x.document).baseURI),0,r).W("tutor/").j(0)
x=u.length===0?"#/masjid/tools/tutor":u
A.ch(v,"replace",s+t+x,r,r,r)},
aYV(){var x,w=null,v=b.G,u=A.cs(v.history),t=A.jC(u.length),s=t==null?w:t
if((s==null?0:s)>1)A.ch(u,"back",w,w,w,w)
else{x=A.a8(A.cs(v.document).baseURI)
A.ch(A.cs(v.location),"replace",A.bO(x,0,w).W("./").j(0)+"#/",w,w,w)}},
a0J(d,e,f,g,h){return this.ri(new B.aVm(this,e,d,f,h,g),y.H)},
a0M(){return this.ri(new B.aVn(this),y.D)},
VX(){var x=null,w=this.a
if(w!=null)A.ch(w,"cancelRecording",x,x,x,x)},
abo(d){var x,w,v=this,u=A.O(d.text)
if(u==null)u=null
if(u==null)u=""
x=v.pj(d,"ms")
w=A.jC(d.seconds)
if(w==null)w=null
if(w==null)w=0
return new B.Gr(u,x,w,v.pj(d,"frames"),v.pj(d,"tokens"),v.mX(d,"retried"),v.pj(d,"encMs"),v.pj(d,"decMs"),v.pj(d,"featMs"))},
a8c(d){var x={}
x.words=d
return x},
ajJ(d,e){return this.ri(new B.aVp(this,d,e),y._)},
b2Q(d,e){return this.ri(new B.aVo(this,d,e),y._)},
Fs(d,e){return this.b0L(d,e)},
b0L(d,e){var x=0,w=A.o(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m
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
o=A.a0(new A.ak(d,new B.aVj(),o),o.i("aG.E"))
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
b20(){var x,w,v=null
try{x=this.a
if(x!=null)A.ch(x,"resetDevice",v,v,v,v)}catch(w){}},
Zd(d){var x=this.a
if(x!=null)A.ch(x,"prefetch",d,null,null,null)}}
B.Rj.prototype={}
B.Gp.prototype={
glH(){var x=this.f,w=x>0?"CPU \xd7"+x:""
x=this.a
if(x==="webgpu")return"WebGPU"
if(C.c.m(x,"webgpu"))return"WebGPU + "+w
return w.length===0?x:w}}
B.Gr.prototype={
gLX(){var x=this,w=C.d.aA(x.d/100,0),v=x.f?" (retried on 30 s)":""
return"window "+w+" s, "+x.e+" tokens"+v+", mel "+x.x+" ms, encoder "+x.r+" ms, decoder "+x.w+" ms"}}
B.Gq.prototype={}
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
$ibo:1}
B.mF.prototype={
N(){return"WordStatus."+this.b}}
B.OA.prototype={}
B.m0.prototype={
j(d){var x,w=this.b
if(w==null)w=""
x=this.c
if(x==null)x=""
return this.d.b+":"+w+"->"+x}}
B.F8.prototype={
gGP(){var x,w=this,v=w.d
if(v===$){x=new B.aMD(w).$0()
w.d!==$&&A.aD()
w.d=x
v=x}return v},
gEs(){var x,w,v,u,t,s=A.a([],y.s)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.d===D.WC&&u.c!=null){t=u.c
t.toString
s.push(t)}}return s},
gb_1(){return J.on(this.gGP(),new B.aMC()).gL(0)},
gqr(){var x=this.a
return x.length!==0&&this.gb_1()===x.length&&this.gEs().length===0}}
B.C6.prototype={
N(){return"AyahStatus."+this.b}}
B.q7.prototype={}
B.ac8.prototype={
YN(d,e){var x=this.a.h(0,d*1000+e)
return x==null?$.pY():x},
aJe(d){var x=this,w=B.aVr(d),v=x.c
if(v===w)return
v=v!=null&&v===B.bJa(w)?x.d+1:1
x.d=v
if(v>x.e)x.e=v
x.c=w},
aeM(){var x=Date.now(),w=B.aVr(new A.b_(x,0,!1))
x=this.c
return x===w||x===B.bJa(w)?this.d:0},
aiO(d,e,f,g){var x=this,w=new A.b_(Date.now(),0,!1),v=x.YN(d,e),u=g?C.e.cz(v.b+1,0,100):0,t=g&&u>=f?D.e1:D.m5,s=new B.q7(t,u,w.hA()),r=d*1000+e
x.a.n(0,r,s)
x.b.D(0,r)
x.aJe(w)
return s},
YE(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.c8[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pY():s).a===D.e1)++u}return u},
aYT(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.c8[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pY():s).a===D.m5)++u}return u},
gahY(){var x=this.a,w=A.w(x).i("c9<2>")
return new A.aF(new A.c9(x,w),new B.aVs(),w.i("aF<M.E>")).gL(0)},
gamO(){var x=this.a,w=A.w(x).i("bi<1>")
w=A.nq(new A.bi(x,w),new B.aVt(),w.i("M.E"),y.S)
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
aUU(){var x,w,v,u,t,s,r,q,p,o=A.a([],y.Z)
for(x=this.b,x=A.bAg(x,300,A.w(x).c),x=new A.G9(J.au(x.a),x.b,A.w(x).i("G9<1>")),w=y.N,v=y.z,u=this.a;x.u();){t=x.gK()
s=C.e.ba(t,1000)
t=C.e.ah(t,1000)
r=s*1000+t
q=u.h(0,r)
q=(q==null?$.pY():q).a===D.e1?"memorized":"learning"
p=u.h(0,r)
if(p==null)p=$.pY()
r=u.h(0,r)
o.push(A.J(["surah",s,"ayah",t,"status",q,"perfect_count",p.b,"updated_at",(r==null?$.pY():r).c.iW()],w,v))}return o},
aZs(d){var x,w,v,u,t,s,r
for(x=d.length,w=this.a,v=this.b,u=0;u<d.length;d.length===x||(0,A.B)(d),++u){t=d[u]
s=A.ex(t.h(0,"surah"))*1000+A.ex(t.h(0,"ayah"))
r=w.h(0,C.e.ba(s,1000)*1000+C.e.ah(s,1000))
if((r==null?$.pY():r).c.iW()===t.h(0,"updated_at"))v.I(0,s)}},
aZA(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(x=J.au(d),w=this.b,v=this.a,u=y.f,t=!1;x.u();){s=x.gK()
if(!u.b(s))continue
r=A.bn(s.h(0,"surah"))
q=r==null?null:C.d.bU(r)
r=A.bn(s.h(0,"ayah"))
p=r==null?null:C.d.bU(r)
o=A.fo(A.f(s.h(0,"updated_at")))
r=!0
if(q!=null)if(p!=null)if(o!=null)r=!(q>=1&&q<=114&&p>=1&&p<=I.c8[q-1].a[1])
if(r)continue
n=B.c4M(s.h(0,"status"))
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
v.n(0,r,new B.q7(n,C.e.cz(l==null?0:l,0,100),o.hA()))
w.I(0,r)
t=!0}return t}}
B.Rh.prototype={
E0(d,e,f,g,h){var x=this,w=g==null?x.a:g,v=h==null?x.b:h,u=d==null?x.c:d,t=e==null?x.d:e
return new B.Rh(w,v,u,t,f==null?x.e:f)},
aTn(d){var x=null
return this.E0(x,x,d,x,x)},
ael(d){var x=null
return this.E0(x,d,x,x,x)},
aTr(d){var x=null
return this.E0(x,x,x,x,d)},
aSS(d){var x=null
return this.E0(d,x,x,x,x)},
aTo(d){var x=null
return this.E0(x,x,x,d,x)},
cP(){var x=this
return A.J(["n",x.a,"r",x.b,"auto",x.c,"hide",x.d,"in",x.e],y.N,y.z)}}
B.Ef.prototype={
N(){return"ModelState."+this.b}}
B.Ri.prototype={
Y7(){var x=this.Q
return x==null?this.Q=new B.aVu(this).$0():x},
oU(d){return this.alk(d)},
alk(d){var x=0,w=A.o(y.H),v=this
var $async$oU=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:v.b=d
v.X()
x=2
return A.d(A.id("mt.tutor.settings",C.a1.ht(d.cP(),null)),$async$oU)
case 2:return A.m(null,w)}})
return A.n($async$oU,w)},
x3(){var x=0,w=A.o(y.H),v=this,u
var $async$x3=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:v.X()
x=2
return A.d(A.id("mt.tutor.progress",C.a1.ht(v.c.cP(),null)),$async$x3)
case 2:u=v.as
if(u!=null)u.aE()
v.as=A.cF(C.z,v.garG())
return A.m(null,w)}})
return A.n($async$x3,w)},
GA(d,e,f){return this.am_(d,e,f)},
am_(d,e,f){var x=0,w=A.o(y.H),v=this
var $async$GA=A.k(function(g,h){if(g===1)return A.l(h,w)
for(;;)switch(x){case 0:v.z=new A.bQ(d,e,f)
x=2
return A.d(A.id("mt.tutor.last",C.a1.ht(A.J(["s",d,"f",e,"t",f],y.N,y.S),null)),$async$GA)
case 2:return A.m(null,w)}})
return A.n($async$GA,w)},
zI(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$zI=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=s.f
if(n===D.OC||n===D.hS){x=1
break}s.f=D.OC
s.y=null
s.X()
u=4
n=A.k3().gep().h(0,"tutor_device")
if(n==null)n="auto"
p=A.k3().gep().h(0,"tutor_threads")
p=A.f2(p==null?"":p,null)
if(p==null)p=0
x=7
return A.d(s.a.aZa(new B.aVv(s),n,p),$async$zI)
case 7:s.x=e
s.f=D.hS
n=A.k3().gep().h(0,"debug")
if(n==="1"){n=s.x
n.toString
r=n
A.tp().$1("[tutor] model ready: "+r.a+" "+r.b+" threads="+r.f+" isolated="+r.r+" in "+r.c+" ms (warm-up "+r.w+" ms, cached before: "+r.d+")")}u=2
x=6
break
case 4:u=3
m=t.pop()
n=A.Y(m)
if(n instanceof B.kL){q=n
s.f=D.azf
s.y=q
n=A.k3().gep().h(0,"debug")
if(n==="1")A.tp().$1("[tutor] model failed: "+A.f(q))}else throw m
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
return A.d(p.cU("quran_tutor_progress").h4("surah, ayah, status, perfect_count, updated_at"),$async$ut)
case 7:o=a1
n=r.c.aZA(o)
m=0,k=y.N,i=y.z
case 8:if(!(m<25)){x=10
break}l=r.c.aUU()
if(J.be(l)===0){x=10
break}h=p
g=A.J(["p_rows",l],k,i)
f=h.CW
f===$&&A.b()
f.b.E(0,A.m8(h.x,k,k))
x=11
return A.d(f.b2n("quran_tutor_save",!1,g,i),$async$ut)
case 11:r.c.aZs(l)
case 9:++m
x=8
break
case 10:x=12
return A.d(A.id("mt.tutor.progress",C.a1.ht(r.c.cP(),null)),$async$ut)
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
FH(d){return this.b22(d)},
b22(d){var x=0,w=A.o(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$FH=A.k(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:p=B.bAs(t.c.cP()).cP()
y.f.a(p.h(0,"rows")).dK(0,new B.aVw(d))
t.c=B.bAs(p)
x=2
return A.d(t.x3(),$async$FH)
case 2:v=4
s=$.ad().b
s===$&&A.b()
r=s.gc2().e.a
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
B.vc.prototype={
V(){var x=$.Ji()
return new B.Vd(x,new A.aX(C.M,$.a7()))}}
B.Vd.prototype={
aa(){var x,w,v=this
v.ao()
x=v.d
x.a5(v.gn6())
w=y.a
x.Y7().bT(new B.bhT(v),w)
H.aL4().bT(new B.bhU(v),w).hr(new B.bhV())
A.Dn(H.bzT(),y.y)},
ve(){if(this.c!=null)this.t(new B.bhF())},
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
return A.d(s.oU(s.b.aTn(!0)),$async$Jj)
case 3:t=s.a
t.b0G()
if(t.a0x()){t.afA()
x=1
break}s.zI()
case 1:return A.m(v,w)}})
return A.n($async$Jj,w)},
vf(d,e,f){return this.aHB(d,e,f)},
aOJ(d){return this.vf(d,null,null)},
aHB(d,e,f){var x=0,w=A.o(y.H),v,u=this,t,s,r
var $async$vf=A.k(function(g,h){if(g===1)return A.l(h,w)
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
return A.d(B.c8t(s,d),$async$vf)
case 6:t=h
case 4:if(t==null||u.c==null){x=1
break}x=7
return A.d(u.d.GA(d,t.a,t.b),$async$vf)
case 7:s=u.c
if(s==null){x=1
break}r=y.z
x=8
return A.d(A.al(s,!1).cV(A.cW(new B.bhL(u,d,t),null,r),r),$async$vf)
case 8:if(u.c!=null)u.t(new B.bhM())
case 1:return A.m(v,w)}})
return A.n($async$vf,w)},
A(d){var x=null,w=this.d,v=w.b,u=A.a([],y.p),t=w.a
if(t.gagU()&&!A.al(d,!1).VU())u.push(A.ct(x,x,x,x,D.aek,x,x,t.gaYU(),x,x,x,"\u0631\u062c\u0648\u0639 \u0644\u0645\u0633\u062c\u062f\u064a",x))
t=v.e
if(t)u.push(A.ct(x,x,x,x,D.afj,x,x,new B.bhP(d),x,x,x,"\u062a\u0642\u062f\u0651\u0645\u064a",x))
u.push(A.ct(x,x,x,x,D.Cp,x,x,new B.bhQ(d),x,x,x,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",x))
if(!w.e)w=D.aoR
else w=t?this.aDY():this.aEm()
return M.vX(u,w,"\u0627\u0644\u0645\u062d\u0641\u0651\u0638")},
aEm(){var x,w,v,u,t,s,r,q,p=null,o=this.d.d
if(o==null)o=D.We
x=this.r
w=x==null?p:x.a-x.b
if(!(o.a&&o.b))v="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u062f\u0639\u0645 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638. \u062c\u0631\u0651\u0628 \u0623\u062d\u062f\u062b \u0646\u0633\u062e\u0629 \u0645\u0646 Chrome (\u0623\u0646\u062f\u0631\u0648\u064a\u062f) \u0623\u0648 Safari (\u0622\u064a\u0641\u0648\u0646)."
else if(!o.f)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0641\u062a\u062d \u0639\u0644\u0649 https \u0639\u0634\u0627\u0646 \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0627\u064a\u0643."
else v=!o.c||!o.d?"\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u0633\u0645\u062d \u0628\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0646 \u0627\u0644\u0645\u0627\u064a\u0643.":p
x=y.p
u=A.a([D.aKV,C.aj],x)
for(t=0;t<4;++t){s=D.aqy[t]
u.push(new A.Z(C.bD,A.ai(A.a([A.c8(s.a,C.a4,p,18),C.ar,new A.dB(1,C.aS,A.i(s.b,p,p,p,p,p,G.Ve,p,p,p),p)],x),C.B,C.f,C.h,0,p,p),p))}u=A.ac(u,C.B,C.f,C.h)
s=A.a([D.b34,C.U,A.i("\u0647\u0646\u062d\u0645\u0651\u0644 \u0645\u0644\u0641 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 (\u062d\u0648\u0627\u0644\u064a "+E.aW(105)+" \u0645\u064a\u062c\u0627) \u0648\u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0648\u0628\u0639\u062f \u0643\u062f\u0647 \u0628\u064a\u0641\u062a\u062d \u0645\u0646 \u063a\u064a\u0631 \u062a\u062d\u0645\u064a\u0644. \u064a\u064f\u0641\u0636\u0651\u0644 \u062a\u0643\u0648\u0646 \u0639\u0644\u0649 Wi-Fi.",p,p,p,p,p,F.al,p,p,p)],x)
if(w!=null){r=w<3e8
q=r?"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0645\u062a\u0635\u0641\u062d \u0642\u0644\u064a\u0644\u0629 ("+E.aW(C.d.ar(w/1e6))+" \u0645\u064a\u062c\u0627) \u2014 \u0641\u0636\u0651\u064a \u0634\u0648\u064a\u0629 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0623\u0648\u0644.":"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629: \u0643\u0641\u0627\u064a\u0629 \u2713"
C.b.E(s,A.a([C.U,A.i(q,p,p,p,p,p,A.cz(p,p,r?D.d0:C.cs,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x))}r=o.w
if(r>0&&r<3)C.b.E(s,A.a([C.U,D.b2C],x))
x=A.a([new E.cZ(u,C.af,C.aA,p,!0,p),new E.cZ(A.ac(s,C.B,C.f,C.h),C.af,C.aA,p,!1,p),D.b9P,C.U],x)
if(v!=null)x.push(new E.cZ(A.i(v,p,p,p,p,p,D.aVy,p,p,p),C.af,C.aA,p,!1,p))
else x.push(A.jg(D.adF,p,D.aYT,this.gaHL(),A.ik(C.q,C.a3,D.aNs,p,p,p,p)))
x.push(C.aJ)
x.push(D.Wd)
return x},
aDY(){var x,w,v=this,u=null,t=v.d,s=t.c,r=v.e,q=C.c.ai(r.a.a),p=q.length===0,o=p?C.uw:H.bNC(q),n=t.z,m=A.aQ(v.aaL(C.fy,E.aW(s.gahY())+" \u0622\u064a\u0629","\u062d\u0641\u0638\u062a\u0647\u0627"),1),l=E.aW(s.aeM()),k=s.c,j=Date.now()
k=k===B.aVr(new A.b_(j,0,!1))?"\u0648\u0631\u0627 \u0628\u0639\u0636 \u2014 \u0643\u0645\u0651\u0644!":"\u0633\u0645\u0651\u0639 \u0627\u0644\u0646\u0647\u0627\u0631\u062f\u0647 \u0639\u0634\u0627\u0646 \u062a\u0643\u0645\u0651\u0644"
j=y.p
k=A.a([new B.Eg(t,!1,u),A.ai(A.a([m,C.ar,A.aQ(v.aaL(C.BJ,l+" \u064a\u0648\u0645",k),1)],j),C.j,C.f,C.h,0,u,u),C.S],j)
if(n!=null){t=H.jF(n.a)
m=n.b
l=n.c
m=m===l?"\u0622\u064a\u0629 "+E.aW(m):"\u0627\u0644\u0622\u064a\u0627\u062a "+E.aW(m)+"\u2013"+E.aW(l)
k.push(new E.cZ(A.ai(A.a([D.aeQ,C.aV,A.aQ(A.ac(A.a([D.aXe,A.i(t+" \u2014 "+m,u,u,u,u,u,F.b_,u,u,u)],j),C.B,C.f,C.h),1),P.kU],j),C.j,C.f,C.h,0,u,u),C.af,C.aA,new B.bhI(v,n),!0,u))}t=C.i.bs(0.08)
k.push(A.bt(u,C.n,!1,u,!0,C.k,u,A.bx(),r,u,u,u,u,u,2,A.fp(u,new A.ej(4,A.aa(14),C.w),u,u,u,u,u,u,!0,u,u,u,u,u,u,t,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,C.pC,"\u0639\u0627\u064a\u0632 \u062a\u062d\u0641\u0638 \u0633\u0648\u0631\u0629 \u0625\u064a\u0647\u061f",u,u,u,u,u,u,u,u,u,!0,!0,!1,u,C.nr,u,u,u,u,u,u,u,u,u,u,u,u),C.t,!0,u,!0,u,!1,u,C.E,u,u,u,u,u,u,u,u,u,1,u,u,!1,"\u2022",u,new B.bhJ(v),u,u,u,!1,u,u,!1,u,!0,u,C.C,u,u,u,u,u,u,u,u,u,u,u,C.cW,!0,C.y,u,C.G,u,u,u,u))
k.push(C.S)
if(!p){t=A.a([],j)
if(o.length===0)t.push(D.b0n)
for(r=o.length,x=0;x<o.length;o.length===r||(0,A.B)(o),++x)t.push(v.Kj(o[x]))
C.b.E(k,t)}else{t=A.a([D.aBy,D.aC1,v.Kj(1)],j)
for(w=114;w>=78;--w)t.push(v.Kj(w))
t.push(C.U)
r=v.f
p=A.c8(r?C.tX:C.kM,C.a4,u,u)
t.push(A.h9(p,A.i(r?"\u0627\u062e\u0641\u064a \u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631":"\u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631 (\u0627\u0644\u0628\u0642\u0631\u0629 \u0644\u062d\u062f \u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a)",u,u,u,u,u,C.el,u,u,u),new B.bhK(v),u))
if(v.f)for(w=2;w<=77;++w)t.push(v.Kj(w))
C.b.E(k,t)}k.push(C.aj)
k.push(D.xx)
return k},
aaL(d,e,f){var x=null,w=y.p
return new E.cZ(A.ai(A.a([A.c8(d,C.q,x,x),C.ar,A.aQ(A.ac(A.a([A.i(e,x,x,x,x,x,F.b_,x,x,x),A.i(f,x,1,C.ag,x,x,D.aUk,x,x,x)],w),C.B,C.f,C.h),1)],w),C.j,C.f,C.h,0,x,x),C.af,C.L,x,!1,x)},
Kj(d){var x,w=null,v=this.d.c,u=I.c8[d-1].a[1],t=v.YE(d),s=t/u,r=y.p,q=A.bl(A.h7(C.W,A.a([A.byh(C.dI,G.c6,w,w,w,w,w,3,s,w),A.i(E.aW(d),w,w,w,w,w,R.VE,w,w,w)],r),C.k,C.cd,w),36,36),p=A.i(H.jF(d),w,w,w,w,w,D.aRd,w,w,w)
if(t===0)x=E.aW(u)+" \u0622\u064a\u0629"
else x=t===u?"\u0645\u062d\u0641\u0648\u0638\u0629 \u0643\u0644\u0647\u0627 \u2713":"\u062d\u0641\u0638\u062a "+E.aW(t)+" \u0645\u0646 "+E.aW(u)
r=A.a([q,C.fW,A.aQ(A.ac(A.a([p,A.i(x,w,w,w,w,w,A.cz(w,w,t===u?G.c6:C.cs,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),C.B,C.f,C.h),1)],r)
if(s>0&&s<1)r.push(A.i(E.aW(C.d.ar(s*100))+"\u066a",w,w,w,w,w,D.Vq,w,w,w))
r.push(D.adI)
return new E.cZ(A.ai(r,C.j,C.f,C.h,0,w,w),L.Ar,C.ex,new B.bhN(this,d),!1,w)}}
B.Eg.prototype={
A(d){var x,w,v,u,t,s,r=null,q=this.c
switch(q.f.a){case 2:if(this.d)return C.aE
return D.aBq
case 3:x=q.y
x=A.a([A.i(x==null?"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0634\u063a\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638":B.Jb(x),r,r,r,r,r,D.wS,r,r,r)],y.p)
w=q.y
if(w!=null)x.push(new B.Ay(w,"model load",r))
x.push(C.U)
x.push(A.bFs(C.lK,r,q.gaZ9()))
return new E.cZ(A.ac(x,C.B,C.f,C.h),C.af,C.aA,r,!1,r)
case 0:case 1:v=q.w
u=q.r
q=v>0
t=q?C.d.cz(u/v,0,1):r
s=q&&u<v
q=A.i(s?"\u0628\u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026 "+E.aW(C.d.ar(u/1e6))+" \u0645\u0646 "+E.aW(C.d.ar(v/1e6))+" \u0645\u064a\u062c\u0627":"\u0628\u0646\u062c\u0647\u0651\u0632 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026",r,r,r,r,r,C.wV,r,r,r)
x=A.aa(8)
w=y.p
x=A.a([q,C.K,A.n5(x,A.DS(C.dI,C.q,7,s?t:r),C.bn)],w)
if(!this.d)C.b.E(x,A.a([C.U,D.aZm],w))
return new E.cZ(A.ac(x,C.B,C.f,C.h),C.af,C.aA,r,!1,r)}}}
B.T0.prototype={
A(d){var x=null,w=D.d0.bs(0.1),v=A.aa(14),u=A.cT(D.d0.bs(0.4),1)
return A.at(x,A.ai(A.a([D.aeC,C.ar,A.aQ(A.i(this.c?"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0627\u0644\u062a\u062c\u0648\u064a\u062f.":"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0623\u062d\u0643\u0627\u0645 \u0627\u0644\u062a\u062c\u0648\u064a\u062f. \u0627\u0642\u0631\u0627 \u0639\u0644\u0649 \u0634\u064a\u062e \u0623\u0648 \u0645\u062d\u0641\u0651\u0638 \u0641\u064a \u0645\u0633\u062c\u062f\u0643 \u0643\u0645\u0627\u0646.",x,x,x,x,x,D.Vw,x,x,x),1)],y.p),C.B,C.f,C.h,0,x,x),C.m,x,x,new A.ap(w,x,u,v,x,x,C.u),x,x,C.aA,C.aU,x,x,x)}}
B.Bg.prototype={
N(){return"_Phase."+this.b}}
B.Ax.prototype={
V(){return new B.Xd($.Ji(),D.k0)}}
B.Xd.prototype={
gi6(){var x=this.e
return x===$?this.e=this.a.d:x},
gyr(){var x,w=this.a,v=w.f
w=w.c
x=this.gi6()
return H.J8(w,x,v.vn(w,x)).b},
aa(){var x,w=this
w.ao()
x=w.d
x.a5(w.gn6())
x.Y7()
x.a.Zd(B.arl(w.a.c,w.gi6()))},
ve(){if(this.c!=null)this.t(new B.bpK())},
l(){var x,w=this,v=w.d
v.S(w.gn6())
x=w.Q
if(x!=null)x.aE()
v=v.a
v.GR()
v.VX()
w.aq()},
Si(d){var x,w,v=this
if(v.f===D.q8)v.d.a.VX()
x=v.d.a
x.GR()
w=v.Q
if(w!=null)w.aE()
v.t(new B.bq_(v,d))
x.Zd(B.arl(v.a.c,d))
w=v.a
if(d<w.e)x.Zd(B.arl(w.c,d+1))},
Kx(d){return this.aEX(d)},
aEX(d){var x=0,w=A.o(y.H),v,u=this,t,s,r,q,p
var $async$Kx=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:if(u.f===D.q7){u.d.a.GR()
u.t(new B.bq3(u))
x=1
break}t=u.r!=null?D.hd:D.k0
u.t(new B.bq4(u))
s=u.d
r=A.a([B.arl(u.a.c,u.gi6())],y.s)
q=d==null?s.b.b:d
x=3
return A.d(s.a.Fs(r,q),$async$Kx)
case 3:p=f
if(u.c==null||u.f!==D.q7){x=1
break}u.t(new B.bq5(u,t,p))
case 1:return A.m(v,w)}})
return A.n($async$Kx,w)},
JA(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$JA=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.d
if(l.f!==D.hS){x=1
break}p=l.a
p.GR()
r=B.BN(s.gyr()).length
s.t(new B.bq7(s))
o=s.Q
if(o!=null)o.aE()
s.Q=A.kK(C.fw,new B.bq8(s))
u=4
o=B.bCc(r)
n=A.d7(0,0,0,350*r,0,0)
x=7
return A.d(p.a0J(l.b.c,o,n,new B.bq9(s),new B.bqa(s)),$async$JA)
case 7:u=2
x=6
break
case 4:u=3
k=t.pop()
l=A.Y(k)
if(l instanceof B.kL){q=l
l=s.Q
if(l!=null)l.aE()
if(s.c!=null)s.t(new B.bqb(s,q))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$JA,w)},
yn(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$yn=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.f!==D.q8){x=1
break}m=s.Q
if(m!=null)m.aE()
s.t(new B.bqd(s))
s.Q=A.kK(C.ht,new B.bqe(s))
l=new A.A1()
$.BQ()
l.mS()
r=l
u=4
m=s.d.a
x=7
return A.d(m.a0M(),$async$yn)
case 7:q=e
if(q.b<0.8){s.aOI("\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0642\u0635\u064a\u0631 \u0623\u0648\u064a \u2014 \u062f\u0648\u0633 \xab\u0633\u0645\u0651\u0639\xbb \u0648\u0627\u0642\u0631\u0627 \u0627\u0644\u0622\u064a\u0629 \u0643\u0644\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb.")
x=1
break}x=8
return A.d(m.ajJ(q,B.BN(s.gyr()).length),$async$yn)
case 8:p=e
s.ch=A.d7(0,0,r.gXd(),0,0,0)
k=A.k3().gep().h(0,"debug")
if(k==="1"){o=B.bNU(m.Eb())
A.tp().$1("[tutor] "+s.a.c+":"+s.gi6()+" audio="+C.d.aA(q.b,1)+"s infer="+p.b+"ms total="+r.gz5()+"ms "+p.gLX()+" text="+p.a)
A.tp().$1("[tutor] stages: "+A.f(o))
s.ax="\u062a\u0633\u062c\u064a\u0644\u0643 "+C.d.aA(p.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(p.b/1000,2)+" \u062b\n"+p.gLX()+"\n"+A.f(o)+"\n"+p.a}s.a5Z(p.a)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.Y(i)
if(m instanceof B.kL){n=m
m=A.k3().gep().h(0,"debug")
if(m==="1")A.tp().$1("[tutor] check failed: "+A.f(n)+"\n"+s.d.a.Eb())
s.UM(B.Jb(n),n)}else throw i
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
x.t(new B.bpZ(x,d,e))},
aOI(d){return this.UM(d,null)},
a5Z(d){var x,w,v,u,t,s=this,r={},q=s.Q
if(q!=null)q.aE()
if(s.c==null)return
x=B.bM1(s.gyr(),d)
r.a=null
if(C.c.ai(x.c).length!==0){q=s.d
w=q.c
v=s.a.c
u=s.gi6()
t=x.gqr()
r.a=w.aiO(v,u,q.b.a,t)
q.x3()}s.t(new B.bq0(r,s,x))},
HR(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$HR=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:g=s.d
if(g.f!==D.hS){x=1
break}s.t(new B.bpS(s))
l=s.Q
if(l!=null)l.aE()
s.Q=A.kK(C.ht,new B.bpT(s))
k=new A.A1()
$.BQ()
k.mS()
r=k
u=4
l=g.a
x=7
return A.d(l.b2Q(B.arl(s.a.c,s.gi6()),B.BN(s.gyr()).length),$async$HR)
case 7:q=e
p=B.bNU(l.Eb())
o="\u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a "+C.d.aA(q.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(q.b/1000,2)+" \u062b (\u0627\u0644\u0643\u0644 "+C.d.aA(r.gz5()/1000,2)+" \u062b)\n"+q.gLX()+"\n"+A.f(p)+"\n"+q.a
A.tp().$1("[tutor-debug] "+s.a.c+":"+s.gi6()+" audio="+C.d.aA(q.c,1)+"s infer="+q.b+"ms total="+r.gz5()+"ms "+q.gLX()+" text="+q.a)
A.tp().$1("[tutor-debug] stages: "+A.f(p))
s.ch=A.d7(0,0,r.gXd(),0,0,0)
s.a5Z(q.a)
n=s.r
if(n!=null){l=n.gqr()
j=n.b
i=A.ae(j).i("aF<1>")
j=A.a0(new A.aF(j,new B.bpU(),i),i.i("M.E"))
A.tp().$1("[tutor-debug] perfect="+l+" ops="+A.f(j))}s.t(new B.bpV(s,o))
u=2
x=6
break
case 4:u=3
f=t.pop()
l=A.Y(f)
if(l instanceof B.kL){m=l
A.tp().$1("[tutor-debug] failed: "+A.f(m)+"\n"+g.a.Eb())
s.UM(B.Jb(m),m)}else throw f
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$HR,w)},
gTF(){var x,w,v
for(x=this.a.d,w=this.d;v=this.a,x<=v.e;++x){v=w.c.a.h(0,v.c*1000+x)
if((v==null?$.pY():v).a!==D.e1)return!1}return!0},
A(d){var x,w=this,v=null,u=w.d,t=u.c.YN(w.a.c,w.gi6()),s=u.b,r=s.d&&!w.x&&w.f!==D.hd,q=H.jF(w.a.c),p=y.p,o=A.a([A.ct(v,v,v,v,D.Cp,v,v,new B.bqj(d),v,v,v,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",v)],p),n=w.axa(),m=A.i("\u0622\u064a\u0629 "+E.aW(w.gi6()),v,v,v,v,v,C.jO,v,v,v),l=E.aW(w.gi6()-w.a.d+1),k=w.a
s=A.a([A.ai(A.a([m,C.bz,A.i("("+l+" \u0645\u0646 "+E.aW(k.e-k.d+1)+")",v,v,v,v,v,F.al,v,v,v),C.d6,w.aIq(t,s.a)],p),C.j,C.f,C.h,0,v,v),C.S],p)
if(r)s.push(w.aDT())
else{m=w.r
if(m!=null){l=w.f
l=l!==D.q8&&l!==D.lX}else l=!1
if(l)s.push(w.avn(m))
else s.push(A.i(w.gyr()+" \ufd3f"+E.aW(w.gi6())+"\ufd3e",v,v,v,v,v,D.ic,C.ad,C.aF,v))}s=A.a([new B.Eg(u,!0,v),n,C.K,new E.cZ(A.ac(s,C.aa,C.f,C.h),D.a99,C.aA,v,!1,v)],p)
n=w.r
if(n!=null&&w.f===D.hd)s.push(w.aQ0(n))
if(w.r!=null&&w.f===D.hd&&w.ch!=null){x=C.d.ar(C.e.ba(w.ch.a,1000)/100)
s.push(new A.Z(C.bD,A.i("\u0627\u062a\u0631\u0627\u062c\u0639 \u0641\u064a "+(E.aW(C.e.ba(x,10))+"\u066b"+E.aW(C.e.ah(x,10)))+" \u062b",v,v,v,v,v,F.al,C.ad,v,v),v))}n=w.as
if(n!=null)s.push(new A.Z(C.aA,A.i(n,v,v,v,v,v,D.wS,v,v,v),v))
if(w.as!=null&&w.at!=null){n=w.at
n.toString
s.push(new B.Ay(n,"check "+w.a.c+":"+w.gi6(),v))}s.push(w.avN())
s.push(C.aj)
s.push(A.rB(C.q,C.L,v,new B.bqk(w),D.aY4,D.b_l,u.b.d))
n=w.a
if(n.e>n.d){n=w.gTF()
s.push(new E.cZ(A.ai(A.a([D.acU,C.aV,A.aQ(A.ac(A.a([D.b04,A.i(w.gTF()?"\u062d\u0641\u0638\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u0633\u0645\u0651\u0639\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636 \u0645\u0646 \u063a\u064a\u0631 \u0645\u0627 \u062a\u0634\u0648\u0641\u0647\u0627":"\u0644\u0645\u0627 \u062a\u062e\u0644\u0651\u0635 \u0627\u0644\u0622\u064a\u0627\u062a \u0648\u0627\u062d\u062f\u0629 \u0648\u0627\u062d\u062f\u0629\u060c \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0644\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636",v,v,v,v,v,F.al,v,v,v)],p),C.B,C.f,C.h),1),P.kU],p),C.j,C.f,C.h,0,v,v),C.af,C.aA,new B.bql(w,d),n,v))}n=A.k3().gep().h(0,"debug")
if(n==="1"){p=A.a([C.K,A.eF(D.adE,D.b_2,u.f===D.hS&&w.f!==D.lX?w.gawl():v,v)],p)
n=w.ax
if(n!=null)p.push(new A.Z(C.hv,A.rs(n,F.al,v,v),v))
n=u.x
if(n!=null){m=n.a
l=n.b
n=n.glH()
u=u.x
p.push(A.i("model: "+m+" "+l+" \u2014 "+n+", isolated "+u.r+", load "+u.c+" ms (warm-up "+u.w+" ms)",v,v,v,v,v,F.al,v,v,v))}p.push(A.bH(D.b_H,v,v,v,new B.bqm(w,d),v,v))
C.b.E(s,p)}s.push(C.K)
s.push(D.xx)
return M.vX(o,s,q)},
axa(){var x=this.a,w=x.e-x.d+1
if(w===1)return C.aE
return A.bl(A.p7(new B.bpX(this),w,null,C.ay,new B.bpY()),36,null)},
aIq(d,e){var x,w,v,u,t,s,r,q=null
if(d.a===D.e1)return D.aL1
x=d.b
w=E.aW(x)
v=E.aW(e)
u=A.a([],y.p)
for(t=0;t<e;++t){s=t<x
r=s?C.df:D.acr
u.push(new A.Z(D.a9H,A.c8(r,s?G.c6:C.eZ,q,16),q))}return A.Ra(A.ai(u,C.j,C.f,C.V,0,q,q),q,"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637 \u0648\u0631\u0627 \u0628\u0639\u0636: "+w+" \u0645\u0646 "+v,q,q)},
aDT(){var x=null
return A.dg(!1,A.aa(12),!0,A.at(x,D.a5l,C.m,x,x,new A.ap(L.r4,x,x,A.aa(12),x,x,C.u),x,x,x,D.a8Q,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,x,new B.bq2(this),x,x,x,x,x,x,x)},
avn(d){var x,w,v,u,t,s=null,r=A.a([],y.R)
for(x=d.a,w=0;w<x.length;++w){v=J.b5(d.gGP(),w)
A:{if(D.h7===v){u=D.ic.cA(G.c6)
break A}if(D.pV===v){u=D.ic.Wx(D.d0,C.fZ,D.d0)
break A}if(D.pW===v){u=D.ic.Wx(D.dH,C.fZ,D.dH)
break A}u=D.ic.Wx(C.eZ,C.pr,C.c5)
break A}t=x[w]
r.push(new A.f4(t.a,s,s,C.bf,s,s,s,s,s,s,u))
r.push(L.wK)}x=E.aW(this.gi6())
r.push(A.dX(s,s,s,s,s,s,s,s,s,D.ic.cA(C.a4),"\ufd3f"+x+"\ufd3e"))
return A.QG(A.dX(r,s,s,s,s,s,s,s,s,s,s),s,C.ad,C.aF)},
aQ0(d){var x,w,v,u,t,s,r=this.w
if(C.c.ai(d.c).length===0)return D.b9u
if(d.gqr()){x=r==null
if((x?null:r.a)===D.e1&&r.b===this.d.b.a)x="\u0627\u0644\u0622\u064a\u0629 \u062f\u064a \u0627\u062a\u062d\u0641\u0638\u062a! \u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0627\u0644\u0644\u064a \u0628\u0639\u062f\u0647\u0627."
else x=!x&&r.a!==D.e1?"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637. \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0645\u0627\u0646 "+E.aW(this.d.b.a-r.b)+" \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629.":"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637."
return new B.AM(G.c6,C.df,"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713",x,null)}x=d.gGP()
w=J.d5(x)
v=w.hO(x,new B.bqf()).gL(0)
u=w.hO(x,new B.bqg()).gL(0)
t=w.hO(x,new B.bqh()).gL(0)
x=A.a([],y.s)
if(u>0)x.push(E.aW(u)+" \u063a\u0644\u0637")
if(v>0)x.push(E.aW(v)+" \u0631\u0627\u062c\u0639\u0647\u0627")
if(t>0)x.push(E.aW(t)+" \u0646\u0627\u0642\u0635\u0629")
if(d.gEs().length!==0)x.push(E.aW(d.gEs().length)+" \u0632\u064a\u0627\u062f\u0629")
w=u+t>0?D.dH:D.d0
x=C.b.aJ(x," \u2022 ")
s=d.gEs().length!==0?"\n\u0632\u064a\u0627\u062f\u0629: "+C.b.aJ(d.gEs(),"\u060c "):""
return new B.AM(w,C.kP,"\u0642\u0631\u0628\u062a! \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0644\u0648\u0651\u0646\u0629",x+"\n\u0627\u0644\u0623\u0635\u0641\u0631: \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u062f\u064a \u2014 \u0627\u0644\u0623\u062d\u0645\u0631: \u063a\u0644\u0637 \u2014 \u0627\u0644\u0631\u0645\u0627\u062f\u064a \u0627\u0644\u0645\u0634\u0637\u0648\u0628: \u0646\u0633\u064a\u062a\u0647\u0627."+s,null)},
avN(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d,g=h.f===D.hS,f=j.f
switch(f.a){case 2:if(j.z==null)x=0
else{f=Date.now()
w=j.z
w.toString
x=C.e.ba(new A.b_(f,0,!1).dG(w).a,1e6)}v=C.e.ba(B.bCc(B.BN(j.gyr()).length).a,1e6)
f=j.gaNw()
w=96+26*j.y
u=D.dH.bs(0.25)
w=A.ji(i,A.bDS(C.W,A.at(i,D.adK,C.m,i,i,D.ZN,i,84,i,i,i,i,84),i,new A.ap(u,i,i,i,i,i,C.cp),C.Ad,i,w,w),C.t,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,f,i,i,i,i,i,i)
u=A.i("\u0628\u0646\u0633\u062c\u0651\u0644\u2026 "+B.bB9(x)+" / "+B.bB9(v),i,i,i,i,i,K.lF,i,i,i)
return A.ac(A.a([w,C.K,u,A.i(h.b.c?"\u0644\u0645\u0627 \u062a\u062e\u0644\u0635 \u0627\u0633\u0643\u062a \u062b\u0627\u0646\u064a\u0629 \u0623\u0648 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb":"\u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb \u0644\u0645\u0627 \u062a\u062e\u0644\u0635",i,i,i,i,i,F.al,i,i,i),A.bH(D.b2B,i,i,i,f,i,i)],y.p),C.j,C.f,C.h)
case 3:t=C.d.e6((Date.now()-j.ay)/1000)
if(t<8)h="\u062b\u0648\u0627\u0646\u064a \u0648\u0646\u0642\u0648\u0644\u0643"
else h=t<25?"\u0644\u0633\u0647 \u0634\u063a\u0627\u0644\u064a\u0646 \u2014 \u0627\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0628\u062a\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0643\u062a\u0631 ("+E.aW(t)+" \u062b)":"\u0648\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0637\u0648\u0644 \u0645\u0646 \u0627\u0644\u0639\u0627\u062f\u064a \u2014 \u0644\u0648 \u0639\u0644\u0651\u0642 \u0647\u0646\u0639\u064a\u062f \u062a\u0634\u063a\u064a\u0644\u0647 \u0644\u0648\u062d\u062f\u0646\u0627 ("+E.aW(t)+" \u062b)"
return new A.Z(D.a8M,A.ac(A.a([C.qT,C.aj,D.aZE,A.i(h,i,i,i,i,i,F.al,C.ad,i,i)],y.p),C.j,C.f,C.h),i)
default:s=f===D.q7
r=j.r
f=r==null
w=!f
q=w&&r.gqr()
u=A.c8(s?C.kQ:K.C3,i,i,i)
if(s)p="\u0648\u0642\u0651\u0641"
else p=w&&!q?"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u062d":"\u0627\u0633\u0645\u0639"
p=A.i(p,i,i,i,i,i,i,i,i,i)
o=A.ik(i,i,D.aNp,i,i,i,i)
u=A.aQ(new A.xZ(C.WU,!0,new B.bpL(j,r,q),i,i,i,o,C.m,i,!1,i,!0,i,new A.Ty(p,u,o,i,i),i),1)
p=A.a([],y.n)
for(o=y.c,n=0;n<3;++n){m=D.D9[n]
p.push(new A.ey(m,i,A.i("\xd7"+E.aW(m),i,i,i,i,i,i,i,i,i),o))}o=y.S
l=y.b
k=y.p
o=A.ai(A.a([u,C.ar,A.vy(new B.bpM(j),p,A.cV([h.b.b],o),!1,A.jG(i,i,i,new A.b4(new B.bpN(),l),i,i,i,i,new A.b4(new B.bpO(),l),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,C.dr),o)],k),C.j,C.f,C.h,0,i,i)
h=g&&!s?j.gaJY():i
u=A.c8(f?D.ni:C.kP,i,i,i)
if(g)f=f?"\u0633\u0645\u0651\u0639":"\u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a"
else f="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
f=A.i(f,i,i,i,i,i,C.cG,i,i,i)
p=q?N.ho:C.q
h=A.a([o,C.S,A.jg(u,i,f,h,A.ik(p,q?C.i:C.a3,D.ph,i,i,i,i))],k)
if(w&&j.gi6()<j.a.e)C.b.E(h,A.a([C.K,q?A.jg(D.afu,i,D.b1S,new B.bpP(j),A.ik(G.c6,C.a3,D.ph,i,i,i,i)):A.bH(D.aYa,i,i,i,new B.bpQ(j),i,i)],k))
if(w){f=j.gi6()
w=j.a
u=w.e
f=f===u&&q&&u>w.d}else f=!1
if(f)h.push(new A.Z(C.mT,A.i(j.gTF()?"\u062e\u0644\u0651\u0635\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u062c\u0631\u0651\u0628 \xab\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636\xbb \u062a\u062d\u062a.":"\u062e\u0644\u0635\u062a \u0622\u062e\u0631 \u0622\u064a\u0629 \u2014 \u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0644\u0633\u0647 (\u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0635\u0641\u0631\u0627 \u0641\u0648\u0642).",i,i,i,i,i,K.pF,C.ad,i,i),i))
return A.ac(h,C.aa,C.f,C.h)}}}
B.AM.prototype={
A(d){var x=this,w=null,v=x.c,u=v.bs(0.12),t=A.aa(14),s=A.cT(v.bs(0.5),1),r=y.p
return A.at(w,A.ai(A.a([A.c8(x.d,v,w,w),C.ar,A.aQ(A.ac(A.a([A.i(x.e,w,w,w,w,w,A.cz(w,w,v,w,w,w,w,w,w,w,w,15,w,w,C.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),C.pj,A.i(x.f,w,w,w,w,w,D.Vw,w,w,w)],r),C.B,C.f,C.h),1)],r),C.B,C.f,C.h,0,w,w),C.m,w,w,new A.ap(u,w,s,t,w,w,C.u),w,w,C.aA,C.aU,w,w,w)}}
B.Aw.prototype={
V(){var x=y.S
return new B.Xc($.Ji(),A.x(x,y.B),A.aE(x),A.x(x,y.N),A.dN(null,y.H))}}
B.Xc.prototype={
aa(){this.ao()
this.d.a5(this.gn6())},
ve(){if(this.c!=null)this.t(new B.bpt())},
l(){var x,w=this,v=w.d
v.S(w.gn6())
x=w.y
if(x!=null)x.aE()
v.a.VX()
w.aq()},
Di(d){return this.aNl(d)},
aNl(d){var x=0,w=A.o(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m
var $async$Di=A.k(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.t(new B.bpC(t,d))
r=t.y
if(r!=null)r.aE()
t.y=A.kK(C.fw,new B.bpD(t))
v=3
r=t.d
q=t.a
p=q.f
q=q.c
q=B.bCc(B.BN(H.J8(q,d,p.vn(q,d)).b).length)
p=t.a
o=p.f
p=p.c
p=A.d7(0,0,0,350*B.BN(H.J8(p,d,o.vn(p,d)).b).length,0,0)
x=6
return A.d(r.a.a0J(r.b.c,q,p,new B.bpE(t,d),new B.bpF(t)),$async$Di)
case 6:v=1
x=5
break
case 3:v=2
m=u.pop()
r=A.Y(m)
if(r instanceof B.kL){s=r
r=t.y
if(r!=null)r.aE()
if(t.c!=null)t.t(new B.bpG(t,s))}else throw m
x=5
break
case 2:x=1
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$Di,w)},
BI(d,e){return this.ayg(d,e)},
ayg(d,e){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$BI=A.k(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.e!==d){x=1
break}o=s.y
if(o!=null)o.aE()
s.t(new B.bpx(s,d))
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
s.t(new B.bpy(s,d,p))}else throw l
x=6
break
case 3:x=2
break
case 6:if(q!=null){o=q
s.at=s.at.bT(new B.bpz(s,o,d),y.H)}case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$BI,w)},
gaGk(){var x,w,v,u,t=this
for(x=t.a.d,w=t.f,v=t.r,u=t.w;x<=t.a.e;++x)if(!w.aw(x)&&!v.m(0,x)&&!u.aw(x)&&x!==t.e)return x
return null},
aKB(){this.t(new B.bpA(this))},
A(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q.f===D.hS,o=s.e,n=s.gaGk(),m=s.f,l=m.a,k=s.w.a,j=s.a,i=l+k===j.e-j.d+1&&s.r.a===0&&o==null
l=A.w(m).i("c9<2>")
x=new A.aF(new A.c9(m,l),new B.bpH(),l.i("aF<M.E>")).gL(0)
l=H.jF(s.a.c)
m=y.p
q=A.a([new B.Eg(q,!0,r),A.i("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 "+E.aW(s.a.d)+" \u0644\u062d\u062f "+E.aW(s.a.e)+" \u0645\u0646 \u062d\u0641\u0638\u0643\u060c \u0622\u064a\u0629 \u0622\u064a\u0629: \u0628\u0639\u062f \u0643\u0644 \u0622\u064a\u0629 \u062f\u0648\u0633 \xab\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629\xbb \u0648\u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0637\u0648\u0644 \u2014 \u0647\u0646\u0635\u062d\u0651\u062d \u0648\u0625\u0646\u062a \u0628\u062a\u0642\u0631\u0627.",r,r,r,r,r,F.al,r,r,r),C.S],m)
for(w=s.a.d;w<=s.a.e;++w)q.push(s.aOK(w))
q.push(C.K)
k=s.Q
if(k!=null)q.push(A.i(k,r,r,r,r,r,D.wS,r,r,r))
k=s.as
if(k!=null){j=s.a
q.push(new B.Ay(k,"review "+j.c+":"+j.d+"-"+j.e,r))}k=o==null
if(!k){j=E.aW(o)
if(s.z==null)v=0
else{v=Date.now()
u=s.z
u.toString
u=C.e.ba(new A.b_(v,0,!1).dG(u).a,1e6)
v=u}v=A.i("\u0628\u0646\u0633\u062c\u0651\u0644 \u0622\u064a\u0629 "+j+"\u2026 "+B.bB9(v),r,r,r,r,r,K.lF,C.ad,r,r)
j=A.n5(A.aa(6),A.DS(C.dI,D.dH,6,s.x),C.bn)
u=o<s.a.e
t=A.c8(u?Q.BY:C.kQ,r,r,r)
C.b.E(q,A.a([v,C.U,j,C.S,A.jg(t,r,A.i(u?"\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629":"\u062e\u0644\u0635\u062a",r,r,r,r,r,C.cG,r,r,r),new B.bpI(s,o),A.ik(C.q,C.a3,D.ph,r,r,r,r))],m))}else if(n!=null){j=p?new B.bpJ(s,n):r
if(!p)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
else v=n===s.a.d?"\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0633\u0645\u064a\u0639":"\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+E.aW(n)
q.push(A.jg(D.ael,r,A.i(v,r,r,r,r,r,C.cG,r,r,r),j,A.ik(C.q,C.a3,D.ph,r,r,r,r)))}if(s.r.a!==0&&k)q.push(D.aBF)
if(i){k=s.a
k=x===k.e-k.d+1
j=k?G.c6:D.d0
v=k?C.ne:C.kP
if(k)k="\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713 \u0633\u0645\u0651\u0639\u062a\u0647\u0645 \u0643\u0644\u0647\u0645 \u0635\u062d"
else{k=E.aW(x)
u=s.a
u=k+" \u0645\u0646 "+E.aW(u.e-u.d+1)+" \u0622\u064a\u0627\u062a \u0645\u0638\u0628\u0648\u0637\u0629"
k=u}u=s.a
u=x===u.e-u.d+1?"\u0631\u0628\u0646\u0627 \u064a\u062b\u0628\u0651\u062a\u0647\u0627 \u0641\u064a \u0642\u0644\u0628\u0643.":"\u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0641\u064a\u0647\u0627 \u0623\u0644\u0648\u0627\u0646 \u0648\u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a."
C.b.E(q,A.a([new B.AM(j,v,k,u,r),A.eF(D.afo,D.b2d,s.gaKA(),r)],m))}q.push(C.S)
q.push(D.xx)
return M.vX(r,q,"\u0633\u0645\u0651\u0639 "+l)},
aOK(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.f.h(0,d),i=l.w.h(0,d)
if(l.e===d)x=D.ae1
else if(l.r.m(0,d))x=O.pi
else if(i!=null)x=D.aea
else if(j!=null){w=j.gqr()?C.df:D.abW
x=A.c8(w,j.gqr()?G.c6:D.d0,k,k)}else x=D.adl
w=y.p
v=A.a([A.ai(A.a([A.i("\u0622\u064a\u0629 "+E.aW(d),k,k,k,k,k,D.aUX,k,k,k),C.d6,x],w),C.j,C.f,C.h,0,k,k)],w)
if(i!=null)v.push(A.i(i,k,k,k,k,k,D.Vt,k,k,k))
if(j!=null&&!j.gqr()){u=y.R
t=A.a([],u)
for(s=j.a,r=0;r<s.length;++r){q=s[r]
p=j.gGP()
o=J.bs(p)
n=o.h(p,r)
A:{if(D.h7===n){m=G.c6
break A}if(D.pV===n){m=D.d0
break A}if(D.pW===n){m=D.dH
break A}m=C.eZ
break A}m=D.ic.aTW(m,o.h(p,r)===D.pX?C.pr:k,22)
C.b.E(t,A.a([new A.f4(q.a,k,k,C.bf,k,k,k,k,k,k,m),L.wK],u))}w=A.a([C.aR,A.QG(A.dX(t,k,k,k,k,k,k,k,k,k,k),k,C.ad,C.aF)],w)
if(C.c.ai(j.c).length===0)w.push(D.b_M)
C.b.E(v,w)}return new E.cZ(A.ac(v,C.aa,C.f,C.h),C.f3,C.ex,k,!1,k)}}
B.Av.prototype={
V(){return new B.Xb($.Ji())}}
B.Xb.prototype={
aa(){this.ao()
var x=this.d
x.a5(this.gn6())
x.Y7()},
ve(){if(this.c!=null)this.t(new B.bpk())},
l(){this.d.S(this.gn6())
this.aq()},
A(d){var x,w,v,u,t,s=this,r=null,q=s.d.c,p=q.gamO(),o=A.a([],y.t)
for(x=78;x<=114;++x)o.push(x)
w=C.b.kW(o,0,new B.bpr(q))
v=C.b.kW(o,0,new B.bps())
o=y.p
o=A.a([A.ai(A.a([A.aQ(s.Qt(E.aW(q.gahY()),"\u0622\u064a\u0629 \u0645\u062d\u0641\u0648\u0638\u0629"),1),C.ar,A.aQ(s.Qt(E.aW(q.aeM()),"\u064a\u0648\u0645 \u0648\u0631\u0627 \u0628\u0639\u0636"),1),C.ar,A.aQ(s.Qt(E.aW(q.e),"\u0623\u0637\u0648\u0644 \u0633\u0644\u0633\u0644\u0629"),1)],o),C.j,C.f,C.h,0,r,r),C.S,new E.cZ(A.ac(A.a([A.i("\u062c\u0632\u0621 \u0639\u0645\u0651: "+E.aW(C.d.ar(w*100/v))+"\u066a",r,r,r,r,r,F.b_,r,r,r),C.U,A.n5(A.aa(6),A.DS(C.dI,G.c6,8,w/v),C.bn),C.aR,A.i(E.aW(w)+" \u0645\u0646 "+E.aW(v)+" \u0622\u064a\u0629",r,r,r,r,r,F.al,r,r,r)],o),C.B,C.f,C.h),C.af,C.aA,r,!1,r)],o)
if(p.length===0)o.push(D.aBO)
for(u=p.length,t=0;t<p.length;p.length===u||(0,A.B)(p),++t)o.push(s.aOM(p[t]))
o.push(C.K)
u=$.ad().b
u===$&&A.b()
u=u.gc2().e.a
o.push(A.i((u==null?r:u.r)!=null?"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643 \u0648\u064a\u0638\u0647\u0631 \u0639\u0644\u0649 \u0623\u064a \u062c\u0647\u0627\u0632 \u062a\u062f\u062e\u0644 \u0645\u0646\u0647.":"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647. \u0633\u062c\u0651\u0644 \u062f\u062e\u0648\u0644 \u0639\u0634\u0627\u0646 \u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643.",r,r,r,r,r,F.al,r,r,r))
return M.vX(r,o,"\u062a\u0642\u062f\u0651\u0645\u064a \u0641\u064a \u0627\u0644\u062d\u0641\u0638")},
Qt(d,e){var x=null
return new E.cZ(A.ac(A.a([A.i(d,x,x,x,x,x,D.aUJ,x,x,x),A.i(e,x,x,x,x,x,C.VK,C.ad,x,x)],y.p),C.j,C.f,C.h),C.af,C.L,x,!1,x)},
aOM(d){var x=null,w=this.d.c,v=I.c8[d-1].a[1],u=w.YE(d),t=w.aYT(d),s=y.p,r=A.ai(A.a([A.aQ(A.i(H.jF(d),x,x,x,x,x,F.b_,x,x,x),1),A.i(E.aW(C.d.ar(u*100/v))+"\u066a",x,x,x,x,x,D.aVz,x,x,x)],s),C.j,C.f,C.h,0,x,x),q=A.n5(A.aa(6),A.DS(C.dI,G.c6,7,u/v),C.bn),p=E.aW(u),o=E.aW(v),n=t>0?" \u2022 \u0628\u062a\u0631\u0627\u062c\u0639 "+E.aW(t):""
return new E.cZ(A.ac(A.a([r,C.U,q,C.aR,A.i("\u0645\u062d\u0641\u0648\u0638 "+p+" \u0645\u0646 "+o+n,x,x,x,x,x,F.al,x,x,x)],s),C.B,C.f,C.h),C.af,C.aA,new B.bpq(this,d),!1,x)},
HU(d){return this.awC(d)},
awC(d){var x=0,w=A.o(y.H),v=this,u,t
var $async$HU=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:u=I.c8[d-1].a[1]
t=v.c
t.toString
x=2
return A.d(A.fA(C.de,new B.bpp(v,d,u),t,!0,null,null,!1,y.H),$async$HU)
case 2:return A.m(null,w)}})
return A.n($async$HU,w)}}
B.ac6.prototype={
Kw(d,e){var x=null,w=A.pD(x,x,x,x,x,x,x,x,x,x,x,D.aNb,C.L,x,x,x,x,C.lg,x,x)
return A.bH(A.i(d,x,x,x,x,x,C.jN,x,x,x),x,x,x,new B.aVe(e),x,w)},
A(d){var x=this,w=y.p
return new E.cZ(A.ac(A.a([D.b1H,C.U,D.b2A,A.dx(A.a([x.Kw("tarteel-ai/whisper-base-ar-quran","https://huggingface.co/tarteel-ai/whisper-base-ar-quran"),x.Kw("iqbalaesthetic/Basira","https://huggingface.co/iqbalaesthetic/Basira")],w),C.aK,0,12),D.aXU,x.Kw("tanzil.net","https://tanzil.net"),D.b3q,x.Kw("everyayah.com","https://everyayah.com")],w),C.B,C.f,C.h),C.af,C.aA,null,!1,null)}}
B.Ay.prototype={
V(){return new B.Xe()}}
B.Xe.prototype={
ga9j(){var x=this.a
return B.c9K(x.c,x.d,$.bCN().Eb())},
Ky(){var x=0,w=A.o(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k
var $async$Ky=A.k(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.t(new B.bqn(s))
v=3
r=A.bwy()
n=s.ga9j()
m=y.N
q=A.x(m,m)
J.fU(q,"app","masjid")
J.fU(q,"path","tutor \u203a "+s.a.d)
if(r!=null){m=r.length>160?C.c.Y(r,0,160):r
J.fU(q,"ua",m)}x=6
return A.d(A.a30(n,null,C.B1,q),$async$Ky)
case 6:if(s.c!=null)s.t(new B.bqo(s))
t.push(5)
x=4
break
case 3:v=2
k=u.pop()
p=A.Y(k)
o=p instanceof A.cR?p.a:"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0628\u0639\u062a \u2014 \u0627\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0646\u062a \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
if(s.c!=null)s.t(new B.bqp(s,o))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.t(new B.bqq(s))
x=t.pop()
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$Ky,w)},
A(d){var x,w,v,u=this,t=null,s=y.p
s=A.a([A.dg(!1,t,!0,new A.Z(C.Aq,A.ai(A.a([A.c8(u.d?C.tX:C.kM,C.c5,t,18),C.fX,D.b2Z],s),C.j,C.f,C.h,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new B.bqs(u),t,t,t,t,t,t,t)],s)
if(u.d){x=A.aa(8)
s.push(A.at(t,A.rs(u.ga9j(),D.aRD,t,C.o),C.m,t,t,new A.ap(L.r4,t,t,x,t,t,C.u),t,t,D.a8V,C.ey,t,t,1/0))}if(u.f)s.push(D.aY1)
else{x=A.pD(t,t,t,t,t,t,t,t,t,t,t,C.Uo,C.L,t,t,t,t,C.lg,t,t)
w=u.e
v=w?t:u.gaOL()
s.push(A.h9(w?D.aNz:D.af7,D.b1b,v,x))}x=u.r
if(x!=null)s.push(A.i(x,t,t,t,t,t,D.Vt,t,t,t))
return new A.Z(C.aA,A.ac(s,C.B,C.f,C.h),t)}}
var z=a.updateTypes(["ab<~>()","~()","A(mF)","ab<Gr>()","ab<Gp>()","ab<Gq>()","Q<mF>()","A(q7)","bq(nF)","Ax(z)","Av(z)","A(m0)","Aw(z)","A(F8)"])
B.aVf.prototype={
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
m=B.c_x("network",A.f(o))
throw A.p(m)
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:285}
B.aVi.prototype={
$1(d){var x=null
return A.bsh(A.ch(d,"persist",x,x,x,x))},
$S:950}
B.aVh.prototype={
$0(){var x=0,w=A.o(y.C),v,u=this,t,s,r,q,p,o,n,m,l
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:q=u.a
n=A
m=A
l=A
x=4
return A.d(q.pk(),$async$$0)
case 4:x=3
return A.d(n.e3(m.cs(l.ch(e,"loadModel",A.bsO(new B.aVg(u.b)),u.c,u.d,null)),y.m),$async$$0)
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
v=new B.Gp(o,t,s,r,q.pj(p,"threads"),q.mX(p,"isolated"),q.pj(p,"warmMs"))
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+4}
B.aVg.prototype={
$2(d,e){this.a.$2(C.d.ar(d),C.d.ar(e))},
$S:951}
B.aVm.prototype={
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
u.onLevel=A.f6(new B.aVk(v.e))
u.onAutoStop=A.f6(new B.aVl(v.f))
x=5
return A.d(A.e3(A.cs(A.ch(s,"startRecording",u,null,null,null)),y.O),$async$$0)
case 5:return A.m(null,w)}})
return A.n($async$$0,w)},
$S:2}
B.aVk.prototype={
$1(d){return this.a.$1(d)},
$S:60}
B.aVl.prototype={
$1(d){return this.a.$1(d)},
$S:9}
B.aVn.prototype={
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
v=new B.Gq(r,A.dm(r.seconds))
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+5}
B.aVp.prototype={
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
return A.d(q.e3(p.cs(o.ch(e,"transcribe",t.audio,t.rate,s.a8c(u.c),null)),y.m),$async$$0)
case 3:v=r.abo(e)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+3}
B.aVo.prototype={
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
return A.d(r.e3(q.cs(p.ch(e,"transcribeUrl",u.b,t.a8c(u.c),null,null)),y.m),$async$$0)
case 3:v=s.abo(e)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+3}
B.aVj.prototype={
$1(d){return d},
$S:31}
B.aMD.prototype={
$0(){var x,w,v,u,t=this.a,s=A.bW(t.a.length,D.pX,!1,y.G)
for(t=t.b,x=t.length,w=0;w<x;++w){v=t[w]
u=v.a
if(u!=null)s[u]=v.d}return s},
$S:z+6}
B.aMC.prototype={
$1(d){return d===D.h7},
$S:z+2}
B.bsJ.prototype={
$2(d,e){var x,w=e.length
if(d.length<w)return!1
for(x=0;x<w;++x)if(B.bxm(e[x],d[x])<0.75)return!1
return!0},
$S:952}
B.bub.prototype={
$1(d){return d.length!==0},
$S:12}
B.aVs.prototype={
$1(d){return d.a===D.e1},
$S:z+7}
B.aVt.prototype={
$1(d){return C.e.ba(d,1000)},
$S:62}
B.aVq.prototype={
$1(d){return C.d.bU(d)},
$S:953}
B.aVu.prototype={
$0(){var x=0,w=A.o(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$$0=A.k(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d(A.ic("mt.tutor.settings"),$async$$0)
case 7:r=a3
if(r!=null){k=y.P.a(C.a1.eW(r,null))
j=A.bn(k.h(0,"n"))
j=j==null?null:C.d.bU(j)
j=C.e.cz(j==null?2:j,1,5)
i=C.b.m(D.D9,k.h(0,"r"))?A.ex(k.h(0,"r")):1
h=A.hy(k.h(0,"auto"))
g=A.hy(k.h(0,"hide"))
k=A.hy(k.h(0,"in"))
s.a.b=new B.Rh(j,i,h!==!1,g===!0,k===!0)}u=2
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
if(q!=null)s.a.c=B.bAs(y.P.a(C.a1.eW(q,null)))
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
if(p!=null){o=y.P.a(C.a1.eW(p,null))
n=C.d.bU(A.dr(J.b5(o,"s")))
m=C.d.bU(A.dr(J.b5(o,"f")))
l=C.d.bU(A.dr(J.b5(o,"t")))
if(B.bNZ(n,m)&&B.bNZ(n,l)&&m<=l)s.a.z=new A.bQ(n,m,l)}u=2
x=16
break
case 14:u=13
a0=t.pop()
x=16
break
case 13:x=2
break
case 16:k=s.a
if(k.b.e&&k.a.a0x()){k.a.afA()
x=1
break}a1=k
x=18
return A.d(k.a.Ha(),$async$$0)
case 18:a1.d=a3
k.e=!0
k.X()
if(k.b.e)k.zI()
k.ut()
case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:103}
B.aVv.prototype={
$2(d,e){var x=this.a
x.r=d
x.w=e
x.X()},
$S:954}
B.aVw.prototype={
$2(d,e){return C.e.ba(A.eD(A.f(d),null,null),1000)===this.a},
$S:955}
B.bhT.prototype={
$1(d){var x=0,w=A.o(y.a),v=this,u,t
var $async$$1=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.d(u.d.a.AR(),$async$$1)
case 2:t=f
if(u.c!=null)u.t(new B.bhS(u,t))
return A.m(null,w)}})
return A.n($async$$1,w)},
$S:956}
B.bhS.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bhU.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bhR(x,d))},
$S:z+8}
B.bhR.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bhV.prototype={
$1(d){},
$S:22}
B.bhF.prototype={
$0(){},
$S:0}
B.bhL.prototype={
$1(d){var x=this.c,w=this.a.w
w.toString
return new B.Ax(this.b,x.a,x.b,w,null)},
$S:z+9}
B.bhM.prototype={
$0(){},
$S:0}
B.bhP.prototype={
$0(){var x=y.z
return A.al(this.a,!1).cV(A.cW(new B.bhO(),null,x),x)},
$S:0}
B.bhO.prototype={
$1(d){return D.b46},
$S:z+10}
B.bhQ.prototype={
$0(){return B.bNK(this.a)},
$S:0}
B.bhI.prototype={
$0(){var x=this.b
return this.a.vf(x.a,x.b,x.c)},
$S:0}
B.bhJ.prototype={
$1(d){return this.a.t(new B.bhH())},
$S:9}
B.bhH.prototype={
$0(){},
$S:0}
B.bhK.prototype={
$0(){var x=this.a
return x.t(new B.bhG(x))},
$S:0}
B.bhG.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.bhN.prototype={
$0(){return this.a.aOJ(this.b)},
$S:0}
B.bwl.prototype={
$1(d){return new A.iX(new B.bwi(this.a,this.b,this.c),null)},
$S:53}
B.bwi.prototype={
$2(d,e){var x,w,v=null,u=this.b,t=new B.bwk(u,e),s=this.a,r=new B.bwj(s,e),q=A.i(H.jF(this.c),v,v,v,v,v,C.pz,v,v,v),p=A.i("\u0647\u062a\u0633\u0645\u0651\u0639 \u0623\u0646\u0647\u064a \u0622\u064a\u0627\u062a\u061f ("+E.aW(u)+" \u0622\u064a\u0629)",v,v,v,v,v,F.al,v,v,v),o=y.p,n=A.a([],o)
if(u<=30)n.push(r.$3("\u0627\u0644\u0633\u0648\u0631\u0629 \u0643\u0644\u0647\u0627",1,u))
x=u<5
w=E.aW(x?u:5)
x=x?u:5
n.push(r.$3("\u0623\u0648\u0644 "+w+" \u0622\u064a\u0627\u062a",1,x))
x=s.a
if(x>1){x=E.aW(x)
w=s.a
n.push(r.$3("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+x,w,C.e.cz(w+4,1,u)))}u=A.a([q,C.aR,p,C.S,A.dx(n,C.aK,6,8),C.K,A.ai(A.a([t.$3("\u0645\u0646",s.b,new B.bwd(s)),D.aNv,t.$3("\u0644\u062d\u062f",s.c,new B.bwe(s))],o),C.j,C.f,C.h,0,v,v)],o)
if(s.c-s.b>=10)u.push(D.aBI)
u.push(C.aJ)
u.push(A.fH(D.aZi,v,new B.bwf(s,d),A.ik(C.q,C.a3,D.aNm,v,v,v,v)))
return A.dI(!0,new A.Z(C.Ax,A.ac(u,C.aa,C.f,C.V),v),C.L,!0)},
$S:334}
B.bwk.prototype={
$3(d,e,f){var x,w,v,u=null,t=A.i(d,u,u,u,u,u,C.ie,u,u,u),s=A.a([],y.I)
for(x=this.a,w=y.r,v=1;v<=x;++v)s.push(new A.d0(v,A.i("\u0622\u064a\u0629 "+E.aW(v),u,u,u,u,u,u,u,u,u),C.as,u,w))
return A.aQ(A.ac(A.a([t,S.CZ(C.de,!0,s,320,new B.bwh(this.b,f),D.aVR,e,y.S)],y.p),C.B,C.f,C.h),1)},
$S:958}
B.bwh.prototype={
$1(d){return d==null?null:this.a.$1(new B.bwg(this.b,d))},
$S:49}
B.bwg.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bwj.prototype={
$3(d,e,f){var x=null
return A.bDR(x,A.i(d,x,x,x,x,x,x,x,x,x),new B.bwc(this.a,this.b,e,f))},
$S:959}
B.bwc.prototype={
$0(){var x=this
return x.b.$1(new B.bwb(x.a,x.c,x.d))},
$S:0}
B.bwb.prototype={
$0(){var x=this.a
x.b=this.b
x.c=this.c},
$S:0}
B.bwd.prototype={
$1(d){var x=this.a
x.b=d
if(x.c<d)x.c=d},
$S:30}
B.bwe.prototype={
$1(d){var x=this.a
x.c=d
if(x.b>d)x.b=d},
$S:30}
B.bwf.prototype={
$0(){var x=this.a
return A.al(this.b,!1).bd(new A.R(x.b,x.c))},
$S:0}
B.bpK.prototype={
$0(){},
$S:0}
B.bq_.prototype={
$0(){var x=this.a
x.e=this.b
x.f=D.k0
x.w=x.r=null
x.x=!1
x.ch=x.ax=x.as=null},
$S:0}
B.bq3.prototype={
$0(){var x=this.a
return x.f=x.r!=null?D.hd:D.k0},
$S:0}
B.bq4.prototype={
$0(){var x=this.a
x.f=D.q7
x.as=null},
$S:0}
B.bq5.prototype={
$0(){var x=this.a
x.f=this.b
if(!this.c&&x.as==null)x.as=null},
$S:0}
B.bq7.prototype={
$0(){var x=this.a
x.f=D.q8
x.as=null
x.y=0
x.z=new A.b_(Date.now(),0,!1)
x.ax=null},
$S:0}
B.bq8.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bq6())},
$S:34}
B.bq6.prototype={
$0(){},
$S:0}
B.bqa.prototype={
$1(d){return this.a.y=d},
$S:60}
B.bq9.prototype={
$1(d){return this.a.yn()},
$S:9}
B.bqb.prototype={
$0(){var x,w=this.a
w.f=w.r!=null?D.hd:D.k0
x=this.b
w.as=B.Jb(x)
w.at=x},
$S:0}
B.bqd.prototype={
$0(){var x=this.a
x.f=D.lX
x.ay=Date.now()},
$S:0}
B.bqe.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bqc())},
$S:34}
B.bqc.prototype={
$0(){},
$S:0}
B.bpZ.prototype={
$0(){var x=this.a
x.f=x.r!=null?D.hd:D.k0
x.as=this.b
x.at=this.c},
$S:0}
B.bq0.prototype={
$0(){var x=this.b
x.r=this.c
x.w=this.a.a
x.f=D.hd
x.x=!1},
$S:0}
B.bpS.prototype={
$0(){var x=this.a
x.f=D.lX
x.ay=Date.now()
x.as=null},
$S:0}
B.bpT.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bpR())},
$S:34}
B.bpR.prototype={
$0(){},
$S:0}
B.bpU.prototype={
$1(d){return d.d!==D.h7},
$S:z+11}
B.bpV.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.bqj.prototype={
$0(){return B.bNK(this.a)},
$S:0}
B.bqk.prototype={
$1(d){var x=this.a.d
return x.oU(x.b.ael(d))},
$S:5}
B.bql.prototype={
$0(){var x=y.z
return A.al(this.b,!1).cV(A.cW(new B.bqi(this.a),null,x),x)},
$S:0}
B.bqi.prototype={
$1(d){var x=this.a.a
return new B.Aw(x.c,x.d,x.e,x.f,null)},
$S:z+12}
B.bqm.prototype={
$0(){this.a.d.a.b20()
this.b.R(y.q).f.aO(D.aO1)},
$S:0}
B.bpY.prototype={
$2(d,e){return C.bz},
$S:48}
B.bpX.prototype={
$2(d,e){var x,w,v,u=null,t=this.a,s=t.a,r=s.d+e
switch(t.d.c.YN(s.c,r).a.a){case 2:s=G.c6
break
case 1:s=D.d0
break
case 0:s=N.ho
break
default:s=u}x=A.aa(18)
w=t.f===D.lX?u:new B.bpW(t,r)
v=s.bs(0.25)
if(r===t.gi6())s=C.i
s=A.cT(s,r===t.gi6()?2:1)
return A.dg(!1,x,!0,A.at(C.W,A.i(E.aW(r),u,u,u,u,u,D.aSR,u,u,u),C.m,u,u,new A.ap(v,u,s,u,u,u,C.cp),u,u,u,u,u,u,36),u,!0,u,u,u,u,u,u,u,u,u,u,u,w,u,u,u,u,u,u,u)},
$S:127}
B.bpW.prototype={
$0(){return this.a.Si(this.b)},
$S:0}
B.bq2.prototype={
$0(){var x=this.a
return x.t(new B.bq1(x))},
$S:0}
B.bq1.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bqf.prototype={
$1(d){return d===D.pV},
$S:z+2}
B.bqg.prototype={
$1(d){return d===D.pW},
$S:z+2}
B.bqh.prototype={
$1(d){return d===D.pX},
$S:z+2}
B.bpL.prototype={
$0(){var x=this.b!=null&&!this.c?1:null
return this.a.Kx(x)},
$S:0}
B.bpM.prototype={
$1(d){var x=this.a.d
return x.oU(x.b.aTr(d.ga1(d)))},
$S:106}
B.bpO.prototype={
$1(d){return d.m(0,C.J)?C.a3:C.i},
$S:4}
B.bpN.prototype={
$1(d){return d.m(0,C.J)?C.q:C.N},
$S:4}
B.bpP.prototype={
$0(){var x=this.a
return x.Si(x.gi6()+1)},
$S:0}
B.bpQ.prototype={
$0(){var x=this.a
return x.Si(x.gi6()+1)},
$S:0}
B.bpt.prototype={
$0(){},
$S:0}
B.bpC.prototype={
$0(){var x=this.a
x.e=this.b
x.Q=null
x.x=0
x.z=new A.b_(Date.now(),0,!1)},
$S:0}
B.bpD.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bpB())},
$S:34}
B.bpB.prototype={
$0(){},
$S:0}
B.bpF.prototype={
$1(d){return this.a.x=d},
$S:60}
B.bpE.prototype={
$1(d){return this.a.BI(this.b,!1)},
$S:9}
B.bpG.prototype={
$0(){var x,w=this.a
w.e=null
x=this.b
w.Q=B.Jb(x)
w.as=x},
$S:0}
B.bpx.prototype={
$0(){var x=this.a
x.e=null
x.r.D(0,this.b)},
$S:0}
B.bpy.prototype={
$0(){var x,w=this.a,v=this.b
w.r.I(0,v)
x=this.c
w.w.n(0,v,B.Jb(x))
w.as=x},
$S:0}
B.bpz.prototype={
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
return A.d(n.a.ajJ(s.b,B.BN(H.J8(l,m,k.vn(l,m)).b).length),$async$$1)
case 6:r=f
l=o.a
k=l.f
l=l.c
q=B.bM1(H.J8(l,m,k.vn(l,m)).b,r.a)
if(C.c.ai(q.c).length!==0){l=n.c
k=o.a.c
j=q.gqr()
l.aiO(k,m,n.b.a,j)}n.x3()
if(o.c!=null)o.t(new B.bpu(o,m,q))
t.push(5)
x=4
break
case 3:v=2
h=u.pop()
o=A.Y(h)
if(o instanceof B.kL){p=o
o=s.a
if(o.c!=null)o.t(new B.bpv(o,s.c,p))}else throw h
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
o=s.a
if(o.c!=null)o.t(new B.bpw(o,s.c))
x=t.pop()
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$$1,w)},
$S:148}
B.bpu.prototype={
$0(){var x=this.c
this.a.f.n(0,this.b,x)
return x},
$S:0}
B.bpv.prototype={
$0(){var x=this.a,w=this.c
x.w.n(0,this.b,B.Jb(w))
x.as=w},
$S:0}
B.bpw.prototype={
$0(){return this.a.r.I(0,this.b)},
$S:0}
B.bpA.prototype={
$0(){var x=this.a
x.f.ad(0)
x.w.ad(0)
x.as=null},
$S:0}
B.bpH.prototype={
$1(d){return d.gqr()},
$S:z+13}
B.bpI.prototype={
$0(){return this.a.BI(this.b,!0)},
$S:0}
B.bpJ.prototype={
$0(){return this.a.Di(this.b)},
$S:0}
B.bpk.prototype={
$0(){},
$S:0}
B.bpr.prototype={
$2(d,e){return d+this.a.YE(e)},
$S:105}
B.bps.prototype={
$2(d,e){return d+I.c8[e-1].a[1]},
$S:105}
B.bpq.prototype={
$0(){return this.a.HU(this.b)},
$S:0}
B.bpp.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.b,o=A.i(H.jF(p),q,q,q,q,q,C.pz,q,q,q),n=y.p,m=A.a([],n)
for(x=this.c,w=this.a,v=w.d,u=p*1000,t=1;t<=x;++t){s=new A.b9(10,10)
r=v.c.a.h(0,u+t)
switch((r==null?$.pY():r).a.a){case 2:r=G.c6.bs(0.35)
break
case 1:r=D.d0.bs(0.35)
break
case 0:r=C.zl
break
default:r=q}m.push(A.at(C.W,A.i(E.aW(t),q,q,q,q,q,K.Vi,q,q,q),C.m,q,q,new A.ap(r,q,q,new A.d_(s,s,s,s),q,q,C.u),q,38,q,q,q,q,38))}return A.dI(!0,new A.Z(C.iM,A.ac(A.a([o,C.aR,D.b0d,C.S,new A.ef(D.ZE,A.hH(A.dx(m,C.aK,6,6),q,C.t,q,q,C.x),q),C.aj,A.bH(D.b1c,q,q,q,new B.bpo(w,d,p),q,q)],n),C.aa,C.f,C.V),q),C.L,!0)},
$S:52}
B.bpo.prototype={
$0(){var x=0,w=A.o(y.H),v=this,u,t
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:u=v.b
t=v.c
x=4
return A.d(A.eb(null,new B.bpn(t),u,y.y),$async$$0)
case 4:x=e===!0?2:3
break
case 2:x=5
return A.d(v.a.d.FH(t),$async$$0)
case 5:if(u.e!=null)A.al(u,!1).eo()
case 3:return A.m(null,w)}})
return A.n($async$$0,w)},
$S:2}
B.bpn.prototype={
$1(d){var x=null,w=A.i("\u0647\u062a\u0628\u062f\u0623 "+H.jF(this.a)+" \u0645\u0646 \u0627\u0644\u0623\u0648\u0644.",x,x,x,x,x,x,x,x,x)
return A.ec(A.a([A.bH(C.x8,x,x,x,new B.bpl(d),x,x),A.bH(D.b2z,x,x,x,new B.bpm(d),x,x)],y.p),w,D.b24)},
$S:14}
B.bpl.prototype={
$0(){A.al(this.a,!1).bd(!1)
return null},
$S:0}
B.bpm.prototype={
$0(){A.al(this.a,!1).bd(!0)
return null},
$S:0}
B.bx3.prototype={
$1(d){var x=this.a
return new A.jQ(new B.bx2(x),null,x,null)},
$S:960}
B.bx2.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.a,r=s.b,q=A.a([],y.n)
for(x=y.c,w=1;w<=5;++w)q.push(new A.ey(w,t,A.i(E.aW(w),t,t,t,t,t,t,t,t,t),x))
x=y.S
v=y.b
u=y.p
x=A.a([D.aXR,C.aj,D.b1r,C.U,A.vy(new B.bwY(s,r),q,A.cV([r.a],x),!1,A.jG(t,t,t,new A.b4(new B.bwZ(),v),t,t,t,t,new A.b4(new B.bx_(),v),t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),x),C.K,A.rB(C.q,C.L,t,new B.bx0(s,r),D.b_Q,D.b36,r.c),A.rB(C.q,C.L,t,new B.bx1(s,r),t,D.aXA,r.d)],u)
s=s.x
if(s!=null)C.b.E(x,A.a([C.aR,A.i("\u0627\u0644\u0645\u0639\u0627\u0644\u062c: "+s.glH(),t,t,t,t,t,F.al,t,C.aF,t)],u))
x.push(C.K)
x.push(D.Wd)
return A.dI(!0,A.hH(A.ac(x,C.aa,C.f,C.h),t,C.t,C.iM,t,C.x),C.L,!0)},
$S:961}
B.bwY.prototype={
$1(d){return this.a.oU(this.b.aTo(d.ga1(d)))},
$S:106}
B.bx_.prototype={
$1(d){return d.m(0,C.J)?C.a3:C.i},
$S:4}
B.bwZ.prototype={
$1(d){return d.m(0,C.J)?C.q:C.N},
$S:4}
B.bx0.prototype={
$1(d){return this.a.oU(this.b.aSS(d))},
$S:5}
B.bx1.prototype={
$1(d){return this.a.oU(this.b.ael(d))},
$S:5}
B.aVe.prototype={
$0(){return A.e9(A.bO(this.a,0,null),C.bE,null)},
$S:0}
B.bxf.prototype={
$1(d){var x,w=A.aO("https?://",!0,!1)
w=A.bR(d,w,"")
x=A.aO("www\\.",!0,!1)
return A.BO(A.bR(w,x,"www[.]"),A.aO("([A-Za-z0-9-]+)\\.(com|net|org|io|xyz|ru|info|me|link)\\b",!1,!1),new B.bxg(),null)},
$S:31}
B.bxg.prototype={
$1(d){return A.f(d.h(0,1))+"[.]"+A.f(d.h(0,2))},
$S:57}
B.bqn.prototype={
$0(){var x=this.a
x.e=!0
x.r=null},
$S:0}
B.bqo.prototype={
$0(){return this.a.f=!0},
$S:0}
B.bqp.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bqq.prototype={
$0(){return this.a.e=!1},
$S:0}
B.bqs.prototype={
$0(){var x=this.a
return x.t(new B.bqr(x))},
$S:0}
B.bqr.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.bxe.prototype={
$1(d){return d==null?"\u2013":A.f(d)},
$S:142};(function installTearOffs(){var x=a._instance_0u
x(B.ac7.prototype,"gaYU","aYV",1)
var w
x(w=B.Ri.prototype,"gaZ9","zI",0)
x(w,"garG","ut",0)
x(w=B.Vd.prototype,"gn6","ve",1)
x(w,"gaHL","Jj",0)
x(w=B.Xd.prototype,"gn6","ve",1)
x(w,"gaJY","JA",0)
x(w,"gaNw","yn",0)
x(w,"gawl","HR",0)
x(w=B.Xc.prototype,"gn6","ve",1)
x(w,"gaKA","aKB",1)
x(B.Xb.prototype,"gn6","ve",1)
x(B.Xe.prototype,"gaOL","Ky",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.ac7,B.Rj,B.Gp,B.Gr,B.Gq,B.kL,B.OA,B.m0,B.F8,B.q7,B.ac8,B.Rh])
x(A.ki,[B.aVf,B.aVh,B.aVm,B.aVn,B.aVp,B.aVo,B.aMD,B.aVu,B.bhS,B.bhR,B.bhF,B.bhM,B.bhP,B.bhQ,B.bhI,B.bhH,B.bhK,B.bhG,B.bhN,B.bwg,B.bwc,B.bwb,B.bwf,B.bpK,B.bq_,B.bq3,B.bq4,B.bq5,B.bq7,B.bq6,B.bqb,B.bqd,B.bqc,B.bpZ,B.bq0,B.bpS,B.bpR,B.bpV,B.bqj,B.bql,B.bqm,B.bpW,B.bq2,B.bq1,B.bpL,B.bpP,B.bpQ,B.bpt,B.bpC,B.bpB,B.bpG,B.bpx,B.bpy,B.bpu,B.bpv,B.bpw,B.bpA,B.bpI,B.bpJ,B.bpk,B.bpq,B.bpo,B.bpl,B.bpm,B.aVe,B.bqn,B.bqo,B.bqp,B.bqq,B.bqs,B.bqr])
x(A.hW,[B.aVi,B.aVk,B.aVl,B.aVj,B.aMC,B.bub,B.aVs,B.aVt,B.aVq,B.bhT,B.bhU,B.bhV,B.bhL,B.bhO,B.bhJ,B.bwl,B.bwk,B.bwh,B.bwj,B.bwd,B.bwe,B.bq8,B.bqa,B.bq9,B.bqe,B.bpT,B.bpU,B.bqk,B.bqi,B.bqf,B.bqg,B.bqh,B.bpM,B.bpO,B.bpN,B.bpD,B.bpF,B.bpE,B.bpz,B.bpH,B.bpp,B.bpn,B.bx3,B.bwY,B.bx_,B.bwZ,B.bx0,B.bx1,B.bxf,B.bxg,B.bxe])
x(A.n7,[B.aVg,B.bsJ,B.aVv,B.aVw,B.bwi,B.bpY,B.bpX,B.bpr,B.bps,B.bx2])
x(A.AZ,[B.mF,B.C6,B.Ef,B.Bg])
w(B.Ri,A.hf)
x(A.P,[B.vc,B.Ax,B.Aw,B.Av,B.Ay])
x(A.U,[B.Vd,B.Xd,B.Xc,B.Xb,B.Xe])
x(A.a5,[B.Eg,B.T0,B.AM,B.ac6])})()
A.oh(b.typeUniverse,JSON.parse('{"kL":{"bo":[]},"Ax":{"P":[],"e":[]},"Aw":{"P":[],"e":[]},"Av":{"P":[],"e":[]},"Ay":{"P":[],"e":[]},"Ri":{"ar":[]},"vc":{"P":[],"e":[]},"Vd":{"U":["vc"]},"Eg":{"a5":[],"e":[]},"T0":{"a5":[],"e":[]},"Xd":{"U":["Ax"]},"AM":{"a5":[],"e":[]},"Xc":{"U":["Aw"]},"Xb":{"U":["Av"]},"ac6":{"a5":[],"e":[]},"Xe":{"U":["Ay"]}}'))
var y=(function rtii(){var x=A.a3
return{u:x("q7"),c:x("ey<u>"),r:x("d0<u>"),k:x("y<m0>"),n:x("y<ey<u>>"),I:x("y<d0<u>>"),R:x("y<h0>"),Z:x("y<az<h,@>>"),d:x("y<OA>"),s:x("y<h>"),p:x("y<e>"),t:x("y<u>"),m:x("bj"),j:x("Q<@>"),L:x("Q<u>"),P:x("az<h,@>"),f:x("az<@,@>"),x:x("ak<h,u>"),a:x("bq"),K:x("N"),B:x("F8"),l:x("+(u,u)"),e:x("cD<m0>"),N:x("h"),C:x("Gp"),D:x("Gq"),X:x("Rj"),_:x("Gr"),U:x("aF<h>"),G:x("mF"),q:x("oe"),b:x("b4<H?>"),y:x("A"),i:x("K"),z:x("@"),S:x("u"),A:x("bj?"),Y:x("az<@,@>?"),O:x("N?"),M:x("+quota,usage(u,u)?"),o:x("dd"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.m4=new B.C6(0,"none")
D.m5=new B.C6(1,"learning")
D.e1=new B.C6(2,"memorized")
D.ZE=new A.as(0,1/0,0,320)
D.dH=new A.H(1,0.9725490196078431,0.44313725490196076,0.44313725490196076,C.l)
D.ZN=new A.ap(D.dH,null,null,null,null,null,C.cp)
D.d0=new A.H(1,0.984313725490196,0.7490196078431373,0.1411764705882353,C.l)
D.aeE=new A.a4(C.C2,null,C.c5,null,null,null)
D.b27=new A.r("\u0627\u0644\u0646\u0635 \u0645\u062e\u0641\u064a \u2014 \u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.el,null,null,null,null,null,null,null,null)
D.aS6=new A.t(!0,C.eZ,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b0e=new A.r("(\u062f\u0648\u0633 \u0647\u0646\u0627 \u0644\u0648 \u0639\u0627\u064a\u0632 \u062a\u0628\u0635)",null,D.aS6,null,null,null,null,null,null,null,null)
D.arm=x([D.aeE,C.U,D.b27,D.b0e],y.p)
D.a5l=new A.j9(C.x,C.f,C.h,C.j,null,C.b3,null,0,D.arm,null)
D.a8M=new A.a_(0,18,0,18)
D.a8Q=new A.a_(0,26,0,26)
D.a8V=new A.a_(0,4,0,6)
D.a99=new A.a_(14,12,14,14)
D.a9H=new A.a_(3,0,0,0)
D.abW=new A.a2(63251,"MaterialIcons",null,!1)
D.ni=new A.a2(63677,"MaterialIcons",null,!1)
D.acr=new A.a2(983256,"MaterialIcons",null,!1)
D.acp=new A.a2(983209,"MaterialIcons",null,!1)
D.acU=new A.a4(D.acp,28,C.q,null,null,null)
D.adl=new A.a4(C.BM,null,N.ho,null,null,null)
D.abN=new A.a2(62961,"MaterialIcons",null,!1)
D.adE=new A.a4(D.abN,null,null,null,null,null)
D.abU=new A.a2(63199,"MaterialIcons",null,!1)
D.adF=new A.a4(D.abU,null,null,null,null,null)
D.adI=new A.a4(C.hA,null,C.eZ,null,null,null)
D.adK=new A.a4(C.kQ,44,C.i,null,null,null)
D.ae1=new A.a4(D.ni,null,D.dH,null,null,null)
D.aea=new A.a4(C.tW,null,D.dH,null,null,null)
D.aek=new A.a4(C.BI,null,null,null,null,null)
D.ael=new A.a4(D.ni,null,null,null,null,null)
D.Cp=new A.a4(C.nn,null,null,null,null,null)
D.aeC=new A.a4(C.kN,20,D.d0,null,null,null)
D.aeQ=new A.a4(C.nk,30,C.q,null,null,null)
D.af7=new A.a4(C.nl,16,C.q,null,null,null)
D.ac8=new A.a2(63520,"MaterialIcons",null,!1)
D.afj=new A.a4(D.ac8,null,null,null,null,null)
D.afo=new A.a4(C.kP,null,null,null,null,null)
D.afu=new A.a4(C.By,null,null,null,null,null)
D.D9=x([1,3,5],y.t)
D.DX=x(["\u0627\u0639\u0648\u0630","\u0628\u0627\u0644\u0644\u0647","\u0645\u0646","\u0627\u0644\u0634\u064a\u0637\u0627\u0646","\u0627\u0644\u0631\u062c\u064a\u0645"],y.s)
D.aC7=new A.Z(C.hw,T.qK,null)
D.aoR=x([D.aC7],y.p)
D.aFs=new A.R(C.j_,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0629 \u0628\u0635\u0648\u062a \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062d\u0635\u0631\u064a (\u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645) \u0645\u0631\u0629 \u0623\u0648 \u0663 \u0623\u0648 \u0665 \u0645\u0631\u0627\u062a.")
D.aFk=new A.R(D.ni,"\u0633\u0645\u0651\u0639\u0647\u0627 \u0645\u0646 \u062d\u0641\u0638\u0643 \u2014 \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0644\u0648\u0651\u0646\u0644\u0643 \u0643\u0644 \u0643\u0644\u0645\u0629: \u0623\u062e\u0636\u0631 \u0635\u062d\u060c \u0623\u0635\u0641\u0631 \u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0623\u062d\u0645\u0631 \u063a\u0644\u0637.")
D.aFF=new A.R(C.fy,"\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0645\u0627 \u062a\u0633\u0645\u0651\u0639\u0647\u0627 \u0635\u062d \u0645\u0631\u062a\u064a\u0646 \u0648\u0631\u0627 \u0628\u0639\u0636 (\u062a\u0642\u062f\u0631 \u062a\u063a\u064a\u0651\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a).")
D.acf=new A.a2(63625,"MaterialIcons",null,!1)
D.aFO=new A.R(D.acf,"\u0643\u0644 \u062f\u0647 \u0628\u064a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u2014 \u0635\u0648\u062a\u0643 \u0645\u0634 \u0628\u064a\u062a\u0631\u0641\u0639 \u0639\u0644\u0649 \u0623\u064a \u0633\u064a\u0631\u0641\u0631.")
D.aqy=x([D.aFs,D.aFk,D.aFF,D.aFO],A.a3("y<+(a2,h)>"))
D.asu=x([D.m4,D.m5,D.e1],A.a3("y<C6>"))
D.Is=x(["\u0628\u0633\u0645","\u0627\u0644\u0644\u0647","\u0627\u0644\u0631\u062d\u0645\u0646","\u0627\u0644\u0631\u062d\u064a\u0645"],y.s)
D.aze=new B.Ef(0,"idle")
D.OC=new B.Ef(1,"loading")
D.hS=new B.Ef(2,"ready")
D.azf=new B.Ef(3,"failed")
D.ae_=new A.a4(C.df,18,G.c6,null,null,null)
D.b2L=new A.r("\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u062c\u0627\u0647\u0632 \u064a\u0633\u0645\u0639\u0643",null,K.pF,null,null,null,null,null,null,null,null)
D.anZ=x([D.ae_,C.bz,D.b2L],y.p)
D.aL4=new A.ip(C.ay,C.f,C.h,C.j,null,C.b3,null,0,D.anZ,null)
D.aBq=new A.Z(C.aA,D.aL4,null)
D.a9E=new A.a_(2,6,2,4)
D.aRL=new A.t(!0,C.q,null,null,null,null,14,C.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXP=new A.r("\u0627\u0628\u062f\u0623 \u0645\u0646 \u0647\u0646\u0627 \u2014 \u0627\u0644\u0641\u0627\u062a\u062d\u0629 \u0648\u062c\u0632\u0621 \u0639\u0645\u0651",null,D.aRL,null,null,null,null,null,null,null,null)
D.aBy=new A.Z(D.a9E,D.aXP,null)
D.b2U=new A.r("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.el,null,null,null,null,null,null,null,null)
D.ap9=x([O.pi,C.ar,D.b2U],y.p)
D.aL2=new A.ip(C.ay,C.c9,C.h,C.j,null,C.b3,null,0,D.ap9,null)
D.aBF=new A.Z(Q.rL,D.aL2,null)
D.x_=new A.t(!0,D.d0,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b31=new A.r("\u0646\u0635\u064a\u062d\u0629: \u0627\u062d\u0641\u0638 \u0663\u2013\u0665 \u0622\u064a\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0631\u0629 \u0623\u0633\u0647\u0644.",null,D.x_,null,null,null,null,null,null,null,null)
D.aBI=new A.Z(C.fx,D.b31,null)
D.b2H=new A.r("\u0644\u0633\u0647 \u0645\u0633\u0645\u0651\u0639\u062a\u0634 \u0623\u064a \u0622\u064a\u0629 \u2014 \u0627\u0628\u062f\u0623 \u0628\u0633\u0648\u0631\u0629 \u0642\u0635\u064a\u0631\u0629 \u0645\u0646 \u062c\u0632\u0621 \u0639\u0645\u0651.",null,F.al,C.ad,null,null,null,null,null,null,null)
D.aBO=new A.Z(C.C,D.b2H,null)
D.a9B=new A.a_(2,0,2,8)
D.b0m=new A.r("\u0627\u0644\u0633\u0648\u0631 \u0627\u0644\u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u060c \u0645\u0646 \u0627\u0644\u0646\u0627\u0633 \u0644\u062d\u062f \u0627\u0644\u0646\u0628\u0623.",null,F.al,null,null,null,null,null,null,null,null)
D.aC1=new A.Z(D.a9B,D.b0m,null)
D.afd=new A.a4(C.hB,30,C.q,null,null,null)
D.aWo=new A.t(!0,C.i,null,null,null,null,17,C.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b3r=new A.r("\u0633\u0645\u0651\u0639\u060c \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0642\u0648\u0644\u0643 \u0635\u062d \u0648\u0644\u0627 \u063a\u0644\u0637",null,D.aWo,null,null,null,null,null,null,null,null)
D.aah=new A.dB(1,C.aS,D.b3r,null)
D.apm=x([D.afd,C.aV,D.aah],y.p)
D.aKV=new A.ip(C.ay,C.f,C.h,C.j,null,C.b3,null,0,D.apm,null)
D.aeY=new A.a4(C.fy,18,G.c6,null,null,null)
D.Vq=new A.t(!0,G.c6,null,null,null,null,12,C.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b2s=new A.r("\u0645\u062d\u0641\u0648\u0638\u0629",null,D.Vq,null,null,null,null,null,null,null,null)
D.aoo=x([D.aeY,C.fX,D.b2s],y.p)
D.aL1=new A.ip(C.ay,C.f,C.V,C.j,null,C.b3,null,0,D.aoo,null)
D.aNb=new A.G(0,30)
D.ph=new A.G(1/0,54)
D.aNm=new A.G(1/0,48)
D.aNp=new A.G(1/0,50)
D.aNs=new A.G(1/0,52)
D.aNv=new A.cr(16,null,null,null)
D.aNz=new A.cr(14,14,O.yS,null)
D.b1j=new A.r("safe mode / no-gpu flags cleared (reload)",null,null,null,null,null,null,null,null,null,null)
D.aO1=new A.hK(D.b1j,null,null,null,null,null,null,null,null,null,null,null,null,C.z,!1,null,null,null,C.k,null)
D.aRd=new A.t(!0,C.i,null,null,null,null,14.5,C.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRD=new A.t(!0,C.a4,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.wS=new A.t(!0,D.dH,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSR=new A.t(!0,C.i,null,null,null,null,12,C.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ic=new A.t(!0,C.i,null,"AmiriQuranMT",null,null,27,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUk=new A.t(!0,C.cs,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vt=new A.t(!0,D.dH,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUJ=new A.t(!0,C.q,null,null,null,null,24,C.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vw=new A.t(!0,C.i,null,null,null,null,12.5,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUX=new A.t(!0,C.q,null,null,null,null,null,C.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVy=new A.t(!0,D.d0,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVz=new A.t(!0,G.c6,null,null,null,null,null,C.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVR=new A.t(!0,C.i,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXe=new A.r("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u062e\u0631 \u0645\u0631\u0629",null,C.ie,null,null,null,null,null,null,null,null)
D.aXA=new A.r("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643 (\u062e\u0628\u0651\u064a \u0627\u0644\u0646\u0635)",null,C.cW,null,null,null,null,null,null,null,null)
D.aXR=new A.r("\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,C.pz,null,null,null,null,null,null,null,null)
D.aXU=new A.r("\u2022 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641: \u0645\u0634\u0631\u0648\u0639 \u062a\u0646\u0632\u064a\u0644 Tanzil (\u062a\u0631\u062e\u064a\u0635 CC BY 3.0).",null,F.al,null,null,null,null,null,null,null,null)
D.aSP=new A.t(!0,G.c6,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aY1=new A.r("\u0648\u0635\u0644\u062a\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2014 \u0634\u0643\u0631\u064b\u0627\u060c \u0647\u0646\u0628\u0635 \u0639\u0644\u064a\u0647\u0627.",null,D.aSP,null,null,null,null,null,null,null,null)
D.aY4=new A.r("\u062e\u0628\u0651\u064a \u0646\u0635 \u0627\u0644\u0622\u064a\u0629 \u0648\u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,F.al,null,null,null,null,null,null,null,null)
D.aYa=new A.r("\u0639\u062f\u0651\u064a \u0644\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.el,null,null,null,null,null,null,null,null)
D.aYT=new A.r("\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0627\u0628\u062f\u0623",null,C.cG,null,null,null,null,null,null,null,null)
D.aZi=new A.r("\u064a\u0644\u0627 \u0646\u0628\u062f\u0623",null,C.cH,null,null,null,null,null,null,null,null)
D.aZm=new A.r("\u0645\u0645\u0643\u0646 \u062a\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 \u062f\u0644\u0648\u0642\u062a\u064a \u0644\u062d\u062f \u0645\u0627 \u064a\u062e\u0644\u0635.",null,F.al,null,null,null,null,null,null,null,null)
D.aZE=new A.r("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.x0,null,null,null,null,null,null,null,null)
D.b_2=new A.r("\u062c\u0631\u0651\u0628 \u0639\u0644\u0649 \u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a (\u0644\u0644\u062a\u062c\u0631\u0628\u0629)",null,null,null,null,null,null,null,null,null,null)
D.b_l=new A.r("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643",null,K.lF,null,null,null,null,null,null,null,null)
D.b_H=new A.r("reset safe mode / WebGPU ban",null,C.wO,null,null,null,null,null,null,null,null)
D.b_M=new A.r("\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629",null,D.x_,null,null,null,null,null,null,null,null)
D.b_Q=new A.r("\u0628\u0639\u062f \u062d\u0648\u0627\u0644\u064a \u062b\u0627\u0646\u064a\u0629 \u0633\u0643\u0648\u062a",null,F.al,null,null,null,null,null,null,null,null)
D.b04=new A.r("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636",null,F.b_,null,null,null,null,null,null,null,null)
D.b0d=new A.r("\u0623\u062e\u0636\u0631: \u0645\u062d\u0641\u0648\u0638\u0629 \u2014 \u0623\u0635\u0641\u0631: \u0628\u062a\u0631\u0627\u062c\u0639\u0647\u0627 \u2014 \u0631\u0645\u0627\u062f\u064a: \u0644\u0633\u0647",null,F.al,null,null,null,null,null,null,null,null)
D.b0n=new A.r("\u0645\u0641\u064a\u0634 \u0633\u0648\u0631\u0629 \u0628\u0627\u0644\u0627\u0633\u0645 \u062f\u0647",null,F.al,null,null,null,null,null,null,null,null)
D.aWq=new A.t(!0,C.q,null,null,null,null,12.5,C.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b1b=new A.r("\u0627\u0628\u0639\u062a \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aWq,null,null,null,null,null,null,null,null)
D.aU4=new A.t(!0,D.dH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b1c=new A.r("\u0627\u0628\u062f\u0623 \u0627\u0644\u0633\u0648\u0631\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644",null,D.aU4,null,null,null,null,null,null,null,null)
D.b1r=new A.r("\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f \u0643\u0627\u0645 \u062a\u0633\u0645\u064a\u0639 \u0635\u062d \u0648\u0631\u0627 \u0628\u0639\u0636\u061f",null,K.lF,null,null,null,null,null,null,null,null)
D.aR_=new A.t(!0,C.i,null,null,null,null,null,C.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b1H=new A.r("\u0627\u0644\u0645\u0635\u0627\u062f\u0631",null,D.aR_,null,null,null,null,null,null,null,null)
D.b1S=new A.r("\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.cG,null,null,null,null,null,null,null,null)
D.b24=new A.r("\u062a\u0645\u0633\u062d \u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0633\u0648\u0631\u0629 \u062f\u064a\u061f",null,null,null,null,null,null,null,null,null,null)
D.b2d=new A.r("\u0633\u0645\u0651\u0639\u0647\u0645 \u062a\u0627\u0646\u064a",null,null,null,null,null,null,null,null,null,null)
D.b2z=new A.r("\u0627\u0645\u0633\u062d",null,null,null,null,null,null,null,null,null,null)
D.b2A=new A.r("\u2022 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: whisper-base-ar-quran \u0645\u0646 Tarteel (\u062a\u0631\u062e\u064a\u0635 Apache-2.0)\u060c \u0628\u0635\u064a\u063a\u0629 ONNX \u0645\u0646 \u0645\u0634\u0631\u0648\u0639 Basira\u060c \u0648\u0628\u064a\u0634\u062a\u063a\u0644 \u062c\u0648\u0651\u0647 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0628\u0645\u0643\u062a\u0628\u0629 Transformers.js.",null,F.al,null,null,null,null,null,null,null,null)
D.b2B=new A.r("\u062e\u0644\u0635\u062a",null,C.jO,null,null,null,null,null,null,null,null)
D.b2C=new A.r("\u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647 \u0630\u0627\u0643\u0631\u062a\u0647 \u0642\u0644\u064a\u0644\u0629 \u2014 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0645\u0643\u0646 \u064a\u0643\u0648\u0646 \u0628\u0637\u064a\u0621 \u0639\u0644\u064a\u0647.",null,D.x_,null,null,null,null,null,null,null,null)
D.aUZ=new A.t(!0,C.cs,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,C.fZ,null,null,null,null,null,null,null,null)
D.b2Z=new A.r("\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aUZ,null,null,null,null,null,null,null,null)
D.b34=new A.r("\u0623\u0648\u0644 \u0645\u0631\u0629 \u0628\u0633: \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,F.b_,null,null,null,null,null,null,null,null)
D.b36=new A.r("\u0648\u0642\u0651\u0641 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0644\u0648\u062d\u062f\u0647 \u0644\u0645\u0627 \u0623\u0633\u0643\u062a",null,C.cW,null,null,null,null,null,null,null,null)
D.b3q=new A.r("\u2022 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: \u0627\u0644\u0634\u064a\u062e \u0645\u062d\u0645\u0648\u062f \u062e\u0644\u064a\u0644 \u0627\u0644\u062d\u0635\u0631\u064a \u2014 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645\u060c \u0645\u0646 everyayah.com.",null,F.al,null,null,null,null,null,null,null,null)
D.Wd=new B.ac6(null)
D.b46=new B.Av(null)
D.b47=new B.Rh(2,1,!0,!1,!1)
D.We=new B.Rj(!1,!1,!1,!1,!1,0)
D.h7=new B.mF(0,"ok")
D.pV=new B.mF(1,"near")
D.pW=new B.mF(2,"wrong")
D.pX=new B.mF(3,"missing")
D.WC=new B.mF(4,"extra")
D.ac4=new A.a2(63456,"MaterialIcons",null,!1)
D.b9u=new B.AM(D.d0,D.ac4,"\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629","\u0642\u0631\u0651\u0628 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0646\u0643 \u0648\u0627\u0642\u0631\u0627 \u0628\u0635\u0648\u062a \u0648\u0627\u0636\u062d \u0641\u064a \u0645\u0643\u0627\u0646 \u0647\u0627\u062f\u064a\u060c \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a.",null)
D.b9P=new B.T0(!1,null)
D.xx=new B.T0(!0,null)
D.k0=new B.Bg(0,"idle")
D.q7=new B.Bg(1,"playing")
D.q8=new B.Bg(2,"recording")
D.lX=new B.Bg(3,"thinking")
D.hd=new B.Bg(4,"result")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ccK","bCN",()=>new B.ac7())
x($,"cfV","bRw",()=>A.aO("\u0640[\u064b-\u0652]*\u0670",!0,!1))
x($,"cfW","bRx",()=>A.aO("\u0640[\u064b-\u0652]*[\u06e6\u06e7]",!0,!1))
x($,"cg6","bRF",()=>A.aO("\u0648\u0670",!0,!1))
x($,"cfu","bRd",()=>A.aO("[\u0648\u064a\u0649][\u064b-\u0652]*[\u0654]",!0,!1))
x($,"ce_","bQf",()=>A.aO("\u0627[\u0654\u0655]",!0,!1))
x($,"cf6","bQX",()=>A.aO("[\u0654\u0655]",!0,!1))
x($,"ce0","bQg",()=>A.aO("[\u0622\u0623\u0625\u0671\u0672\u0673]",!0,!1))
x($,"ce6","bQl",()=>A.aO("[\u0624\u0626]",!0,!1))
x($,"cf8","bQZ",()=>A.aO("[\u064b-\u065f\u0670\u06d6-\u06ed\u08d3-\u08ff\u0640]",!0,!1))
x($,"cfz","bRg",()=>A.aO("[\u06dd\u06de\u0660-\u0669\u06f0-\u06f90-9]",!0,!1))
x($,"cff","bR4",()=>A.aO("[^\u0621-\u064a\\s]",!0,!1))
x($,"cfU","bDn",()=>A.aO("\\s+",!0,!1))
x($,"ca1","pY",()=>B.bSA(D.m4,0,A.byx(0,!0)))
x($,"ccL","Ji",()=>new B.Ri($.bCN(),D.b47,B.c_y(),D.aze,$.a7()))})()};
(a=>{a["mGTDLN3b+3s9KYSneDijE97fQbk="]=a.current})($__dart_deferred_initializers__);