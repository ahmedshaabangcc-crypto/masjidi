((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,Q,R,H,N,G,O,S,T,K,L,B={aZZ:function aZZ(d,e){this.a=d
this.b=e},Ys:function Ys(d,e,f){this.d=d
this.r=e
this.a=f},aVL:function aVL(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4){var _=this
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
_.dy=a4},aVM:function aVM(d){this.a=d},
bX9(d){var x,w,v,u,t,s
if(d instanceof B.kF)return d
try{x=A.co(d)
w=x.code
v=x.message
u=w==null?"failed":A.aa(w)
t=v==null?"":A.aa(v)
return new B.kF(u,t)}catch(s){u=A.f(d)
return new B.kF("failed",u)}},
ab8:function ab8(){this.b=this.a=null},
aTB:function aTB(d){this.a=d},
aTE:function aTE(){},
aTD:function aTD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aTC:function aTC(d){this.a=d},
aTI:function aTI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aTG:function aTG(d){this.a=d},
aTH:function aTH(d){this.a=d},
aTJ:function aTJ(d){this.a=d},
aTL:function aTL(d,e,f){this.a=d
this.b=e
this.c=f},
aTK:function aTK(d,e,f){this.a=d
this.b=e
this.c=f},
aTF:function aTF(){},
bXa(d,e){return new B.kF(d,e)},
QE:function QE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.w=i},
FN:function FN(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i
_.w=j},
FP:function FP(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
FO:function FO(d,e){this.a=d
this.b=e},
kF:function kF(d,e){this.a=d
this.b=e},
bJN(d){var x,w=$.bOf()
w=A.bS(d,w,"\u0627")
x=$.bOg()
w=A.bS(w,x,"\u064a")
x=$.bOo()
w=A.bS(w,x,"\u0627")
x=$.bMZ()
w=A.bS(w,x,"\u0627")
x=$.bNX()
w=A.bS(w,x,"\u0621")
x=$.bNG()
w=A.bS(w,x,"\u0621")
x=$.bN_()
w=A.bS(w,x,"\u0627")
x=$.bN4()
w=A.bS(w,x,"\u0621")
w=A.bS(w,"\u0649","\u064a")
w=A.bS(w,"\u0629","\u0647")
x=$.bNI()
w=A.bS(w,x,"")
x=$.bO_()
w=A.bS(w,x," ")
x=$.bNO()
w=A.bS(w,x," ")
x=$.bA6()
return C.c.ap(A.bS(w,x," "))},
c0A(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.length,k=e.length
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
bug(d,e){var x,w,v,u,t,s
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
s=1-B.c0A(d,e)/u
return s>=1?0.99:s},
Be(d){var x,w,v,u,t,s,r,q=A.a([],y.d)
for(x=C.c.qP(d,$.bA6()),w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.length===0)continue
t=B.bJN(u)
s=A.bS(t," ","")
if(s.length===0){if(q.length!==0){r=q.pop()
q.push(new B.NX(r.a+" "+u,r.b))}continue}q.push(new B.NX(u,s))}return q},
c_m(d,e){var x,w,v,u,t=new B.bpO(),s=A.a([],y.s)
for(x=A.fb(e,0,A.i2(5,"count",y.S),A.ae(e).c),w=x.$ti,x=new A.bN(x,x.gK(0),w.i("bN<aI.E>")),w=w.i("aI.E");x.u();){v=x.d
s.push((v==null?w.a(v):v).b)}u=!t.$2(s,D.D4)&&t.$2(d,D.D4)?C.b.iq(d,5):d
return!t.$2(s,D.Hx)&&t.$2(u,D.Hx)?C.b.iq(u,4):u},
bIM(d,e){var x=B.Be(d),w=B.bJN(e),v=y.U
v=A.a2(new A.aE(A.a(w.split(" "),y.s),new B.brh(),v),v.i("M.E"))
return new B.Ev(x,B.bZA(x,B.c_m(v,x)),w)},
bZA(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=A.a([],y.s)
for(x=a5.length,w=0;w<a5.length;a5.length===x||(0,A.B)(a5),++w)a4.push(a5[w].b)
v=a4.length
u=a6.length
t=u+1
x=(v+1)*t
s=y.i
r=A.c3(x,0,!1,s)
q=A.c3(x,0,!1,y.S)
p=A.c3(v*(u===0?1:u),0,!1,s)
for(o=0;o<v;++o)for(x=o*u,n=0;n<u;++n)p[x+n]=B.bug(a4[o],a6[n])
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
e=2}if(n>=2&&r[h-2]<g&&B.bug(a4[m],a6[n-2]+a6[n-1])>=1){g=r[h-2]
e=3}if(s&&r[i+n-1]<g&&B.bug(a4[j]+a4[m],a6[n-1])>=1){g=r[i+n-1]
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
if(a2>=1)m=D.h1
else m=a2>=0.6?D.ps:D.pt
a1.push(new B.lT(o,x,s,m))
break
case 1:--o
a1.push(new B.lT(o,a4[o],null,D.pu))
break
case 2:--n
a1.push(new B.lT(null,null,a6[n],D.VE))
break
case 3:--o
a3=n-2
a1.push(new B.lT(o,a4[o],a6[a3]+" "+a6[n-1],D.h1))
n=a3
break
default:x=o-1;--n
a1.push(new B.lT(x,a4[x],a6[n],D.h1))
o-=2
a1.push(new B.lT(o,a4[o],a6[n],D.h1))}}a4=y.e
a4=A.a2(new A.cG(a1,a4),a4.i("aI.E"))
return a4},
mu:function mu(d,e){this.a=d
this.b=e},
NX:function NX(d,e){this.a=d
this.b=e},
lT:function lT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ev:function Ev(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
aL8:function aL8(d){this.a=d},
aL7:function aL7(){},
bpO:function bpO(){},
brh:function brh(){},
bPi(d,e,f){return new B.pT(d,e,f)},
c1p(d){var x
A:{if("memorized"===d){x=D.dY
break A}if("learning"===d){x=D.lS
break A}x=D.lR
break A}return x},
bKK(d,e){return d>=1&&d<=114&&e>=1&&e<=I.c1[d-1].a[1]},
bXb(){var x=y.S
return new B.ab9(A.x(x,y.u),A.aD(x))},
aTN(d){var x=d.kh()
return C.c.dl(C.e.j(A.cF(x)),4,"0")+"-"+C.c.dl(C.e.j(A.cg(x)),2,"0")+"-"+C.c.dl(C.e.j(A.cv(x)),2,"0")},
bFU(d){var x=y.x,w=A.a2(new A.aj(A.a(d.split("-"),y.s),A.c2F(),x),x.i("aI.E"))
return B.aTN(A.jz(w[0],w[1],w[2]-1,12,0,0,0))},
bxf(d){var x,w,v,u,t,s,r,q,p=y.S,o=A.x(p,y.u),n=A.aD(p),m=new B.ab9(o,n),l=d.h(0,"rows")
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
o.n(0,u,new B.pT(D.aq4[r],C.d.bT(A.dl(v.h(t,1))),new A.b6(A.ki(C.d.bT(A.dl(v.h(t,2))),0,!0),0,!0)))}q=d.h(0,"dirty")
if(y.j.b(q)){x=J.buR(q,y.o)
p=A.nf(x,new B.aTM(),x.$ti.i("M.E"),p)
n.E(0,new A.aE(p,o.gVM(),A.w(p).i("aE<M.E>")))}m.c=A.W(d.h(0,"last"))
p=A.bK(d.h(0,"streak"))
p=p==null?null:C.d.bT(p)
p=m.d=p==null?0:p
o=A.bK(d.h(0,"best"))
o=o==null?null:C.d.bT(o)
m.e=o==null?p:o
return m},
aqf(d,e){return"https://everyayah.com/data/Husary_Muallim_128kbps/"+C.c.dl(C.e.j(d),3,"0")+C.c.dl(C.e.j(e),3,"0")+".mp3"},
Bw:function Bw(d,e){this.a=d
this.b=e},
pT:function pT(d,e,f){this.a=d
this.b=e
this.c=f},
ab9:function ab9(d,e){var _=this
_.a=d
_.b=e
_.c=null
_.e=_.d=0},
aTO:function aTO(){},
aTP:function aTP(){},
aTM:function aTM(){},
QC:function QC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bUK(){return new B.uV(null)},
c54(d,e){var x,w,v,u,t={},s=I.c1[e-1].a[1],r=$.IC().c
t.a=1
x=r.a
w=e*1000
v=1
for(;;){if(v<=s){v=x.h(0,w+v)
v=(v==null?$.pI():v).a===D.dY}else v=!1
if(!v)break
v=++t.a}x=t.a
if(x>s){t.a=1
u=1}else u=x
x=s<=10
if(x)u=1
t.b=u
t.c=x?s:C.e.cw(u+4,1,s)
return A.fv(C.d6,new B.btd(t,s,e),d,!0,null,null,!1,y.l)},
byW(d){return A.d2(0,0,0,0,0,C.e.cw(C.d.an(6+d*1.2),25,90))},
bxV(d){return E.aZ(C.e.bc(d,60))+":"+C.c.dl(E.aZ(C.e.af(d,60)),2,"\u0660")},
bKv(d){return A.fv(C.d6,new B.btW($.IC()),d,!0,null,null,!1,y.H)},
Iv(d){var x,w=d.a
A:{if("timeout"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0627\u062a\u0623\u062e\u0631 \u0623\u0648\u064a \u0648\u0645\u0631\u062f\u0651\u0634\u060c \u0641\u0648\u0642\u0651\u0641\u0646\u0627\u0647 \u0648\u062c\u0631\u0651\u0628\u0646\u0627 \u062a\u0627\u0646\u064a \u0628\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0623\u062e\u0641 \u0648\u0645\u0646\u0641\u0639\u0634. \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}if("crashed"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0642\u0641 \u0641\u062c\u0623\u0629 (\u063a\u0627\u0644\u0628\u064b\u0627 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0634 \u0645\u0643\u0641\u064a\u0629). \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}x=d.gjM()
break A}return x},
c6m(d,e,f){var x,w=new B.bu9(),v=w.$1(f),u=w.$1("\xab\u0627\u0644\u0645\u062d\u0641\u0651\u0638\xbb \u0645\u0634\u0643\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 ("+e+")\n"+d.a+": "+d.b+"\n"),t=1990-u.length
if(v.length>t)v=t<=1?"":C.c.Y(v,0,t-1)+"\u2026"
x=u+v
return x.length>1990?C.c.Y(x,0,1990):x},
bKF(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
try{x=y.P.a(C.a_.eS(a4,null))
s=y.Y
r=s.a(J.b5(x,"rec"))
w=r==null?C.ed:r
q=s.a(J.b5(x,"last"))
v=q==null?C.ed:q
u=new B.bu8()
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
a0=J.bk(t)!==0?" \xb7 recovered from "+A.f(t):""
a1=J.c(J.b5(x,"safe"),!0)?" \xb7 safe mode":""
a2=J.c(J.b5(x,"nogpu"),!0)?" \xb7 no-gpu":""
return"record "+s+" s ("+p+", "+o+" Hz, peak "+n+", "+m+") \u2192 stop/decode "+l+" ms \u2192 resample "+k+" ms \u2192 infer "+j+" ms (mel "+i+", enc "+h+", dec "+g+") \u2192 wall "+f+" ms \xb7 "+e+" \xd7"+d+a0+a1+a2}catch(a3){return""}},
Dz:function Dz(d,e){this.a=d
this.b=e},
QD:function QD(d,e,f,g,h){var _=this
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
aTQ:function aTQ(d){this.a=d},
aTR:function aTR(d){this.a=d},
aTS:function aTS(d){this.a=d},
uV:function uV(d){this.a=d},
Uq:function Uq(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.w=_.r=null},
bf0:function bf0(d){this.a=d},
bf_:function bf_(d,e){this.a=d
this.b=e},
bf1:function bf1(d){this.a=d},
beZ:function beZ(d,e){this.a=d
this.b=e},
bf2:function bf2(){},
beN:function beN(){},
beT:function beT(d,e,f){this.a=d
this.b=e
this.c=f},
beU:function beU(){},
beX:function beX(d){this.a=d},
beW:function beW(){},
beY:function beY(d){this.a=d},
beQ:function beQ(d,e){this.a=d
this.b=e},
beR:function beR(d){this.a=d},
beP:function beP(){},
beS:function beS(d){this.a=d},
beO:function beO(d){this.a=d},
beV:function beV(d,e){this.a=d
this.b=e},
DA:function DA(d,e,f){this.c=d
this.d=e
this.a=f},
Sg:function Sg(d,e){this.c=d
this.a=e},
btd:function btd(d,e,f){this.a=d
this.b=e
this.c=f},
bta:function bta(d,e,f){this.a=d
this.b=e
this.c=f},
btc:function btc(d,e){this.a=d
this.b=e},
bt9:function bt9(d,e){this.a=d
this.b=e},
bt8:function bt8(d,e){this.a=d
this.b=e},
btb:function btb(d,e){this.a=d
this.b=e},
bt4:function bt4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bt3:function bt3(d,e,f){this.a=d
this.b=e
this.c=f},
bt5:function bt5(d){this.a=d},
bt6:function bt6(d){this.a=d},
bt7:function bt7(d,e){this.a=d
this.b=e},
AJ:function AJ(d,e){this.a=d
this.b=e},
A_:function A_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Wo:function Wo(d,e){var _=this
_.d=d
_.e=$
_.f=e
_.w=_.r=null
_.x=!1
_.y=0
_.ax=_.at=_.as=_.Q=_.z=null
_.ay=0
_.c=_.a=_.ch=null},
bmP:function bmP(){},
bn4:function bn4(d,e){this.a=d
this.b=e},
bn8:function bn8(d){this.a=d},
bn9:function bn9(d){this.a=d},
bna:function bna(d,e,f){this.a=d
this.b=e
this.c=f},
bnc:function bnc(d){this.a=d},
bnd:function bnd(d){this.a=d},
bnb:function bnb(){},
bnf:function bnf(d){this.a=d},
bne:function bne(d){this.a=d},
bng:function bng(d,e){this.a=d
this.b=e},
bni:function bni(d){this.a=d},
bnj:function bnj(d){this.a=d},
bnh:function bnh(){},
bn3:function bn3(d,e,f){this.a=d
this.b=e
this.c=f},
bn5:function bn5(d,e,f){this.a=d
this.b=e
this.c=f},
bmX:function bmX(d){this.a=d},
bmY:function bmY(d){this.a=d},
bmW:function bmW(){},
bmZ:function bmZ(){},
bn_:function bn_(d,e){this.a=d
this.b=e},
bno:function bno(d){this.a=d},
bnp:function bnp(d){this.a=d},
bnq:function bnq(d,e){this.a=d
this.b=e},
bnn:function bnn(d){this.a=d},
bnr:function bnr(d,e){this.a=d
this.b=e},
bn2:function bn2(){},
bn1:function bn1(d){this.a=d},
bn0:function bn0(d,e){this.a=d
this.b=e},
bn7:function bn7(d){this.a=d},
bn6:function bn6(d){this.a=d},
bnk:function bnk(){},
bnl:function bnl(){},
bnm:function bnm(){},
bmQ:function bmQ(d,e,f){this.a=d
this.b=e
this.c=f},
bmR:function bmR(d){this.a=d},
bmT:function bmT(){},
bmS:function bmS(){},
bmU:function bmU(d){this.a=d},
bmV:function bmV(d){this.a=d},
Ae:function Ae(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
zZ:function zZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Wn:function Wn(d,e,f,g,h){var _=this
_.d=d
_.e=null
_.f=e
_.r=f
_.w=g
_.x=0
_.as=_.Q=_.z=_.y=null
_.at=h
_.c=_.a=null},
bmy:function bmy(){},
bmH:function bmH(d,e){this.a=d
this.b=e},
bmI:function bmI(d){this.a=d},
bmG:function bmG(){},
bmK:function bmK(d){this.a=d},
bmJ:function bmJ(d,e){this.a=d
this.b=e},
bmL:function bmL(d,e){this.a=d
this.b=e},
bmC:function bmC(d,e){this.a=d
this.b=e},
bmD:function bmD(d,e,f){this.a=d
this.b=e
this.c=f},
bmE:function bmE(d,e,f){this.a=d
this.b=e
this.c=f},
bmz:function bmz(d,e,f){this.a=d
this.b=e
this.c=f},
bmA:function bmA(d,e,f){this.a=d
this.b=e
this.c=f},
bmB:function bmB(d,e){this.a=d
this.b=e},
bmF:function bmF(d){this.a=d},
bmM:function bmM(){},
bmN:function bmN(d,e){this.a=d
this.b=e},
bmO:function bmO(d,e){this.a=d
this.b=e},
zY:function zY(d){this.a=d},
Wm:function Wm(d){this.d=d
this.c=this.a=null},
bmp:function bmp(){},
bmw:function bmw(d){this.a=d},
bmx:function bmx(){},
bmv:function bmv(d,e){this.a=d
this.b=e},
bmu:function bmu(d,e,f){this.a=d
this.b=e
this.c=f},
bmt:function bmt(d,e,f){this.a=d
this.b=e
this.c=f},
bms:function bms(d){this.a=d},
bmq:function bmq(d){this.a=d},
bmr:function bmr(d){this.a=d},
btW:function btW(d){this.a=d},
btV:function btV(d){this.a=d},
btQ:function btQ(d,e){this.a=d
this.b=e},
btS:function btS(){},
btR:function btR(){},
btT:function btT(d,e){this.a=d
this.b=e},
btU:function btU(d,e){this.a=d
this.b=e},
ab7:function ab7(d){this.a=d},
aTA:function aTA(d){this.a=d},
bu9:function bu9(){},
bua:function bua(){},
A0:function A0(d,e,f){this.c=d
this.d=e
this.a=f},
Wp:function Wp(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.r=null},
bns:function bns(d){this.a=d},
bnt:function bnt(d){this.a=d},
bnu:function bnu(d,e){this.a=d
this.b=e},
bnv:function bnv(d){this.a=d},
bnx:function bnx(d){this.a=d},
bnw:function bnw(d){this.a=d},
bu8:function bu8(){}},D,P,I,E,F
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
B.aZZ.prototype={
M(){return"_ChipVariant."+this.b}}
B.Ys.prototype={
C(d){var x=null
A.T(d)
return A.aJH(!1,x,C.fq,x,x,x,x,C.m,x,new B.aVL(d,!0,D.jK,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,C.oA,x,x,x,x,x,x,x,x),x,x,x,x,x,x,x,x,!0,this.d,x,x,x,x,x,this.r,x,x,x,!1,x,x,x,x,x,x,x,!0,x,x)}}
B.aVL.prototype={
gp_(){var x,w=this,v=w.go
if(v===$){x=A.T(w.fr)
w.go!==$&&A.aC()
v=w.go=x.ax}return v},
gdU(){if(this.fy===D.jK)var x=0
else x=this.fx?1:0
return x},
gwg(){return 1},
gfW(){var x,w=this,v=w.id
if(v===$){x=A.T(w.fr)
w.id!==$&&A.aC()
v=w.id=x.ok}x=v.as
if(x==null)x=null
else x=x.cB(w.fx?w.gp_().k3:w.gp_().k3)
return x},
gcL(){return new A.b3(new B.aVM(this),y.b)},
gcb(){if(this.fy===D.jK)var x=C.O
else{x=this.gp_().x1
if(x==null)x=C.x}return x},
gcp(){return C.O},
grN(){return null},
gvr(){return null},
gem(){var x,w,v=this
if(v.fy===D.jK)if(v.fx){x=v.gp_()
w=x.to
if(w==null){w=x.p
x=w==null?x.k3:w}else x=w
x=new A.b4(x,1,C.B,-1)}else{x=v.gp_().k3
x=new A.b4(A.az(31,x.v()>>>16&255,x.v()>>>8&255,x.v()&255),1,C.B,-1)}else x=C.jW
return x},
ghs(){var x=null
return new A.dI(18,x,x,x,x,this.fx?this.gp_().b:this.gp_().k3,x,x,x)},
gcN(){return C.ew},
gtn(){var x=this.gfW(),w=x==null?null:x.r
if(w==null)w=14
x=A.bX(this.fr,C.bn)
x=x==null?null:x.gdd()
x=A.ot(C.iG,C.dn,A.C((x==null?C.aV:x).ba(w)/14-1,0,1))
x.toString
return x}}
B.ab8.prototype={
pe(){var x=this,w=x.a
if(w!=null)return A.dH(w,y.m)
w=x.b
return w==null?x.b=new B.aTB(x).$0():w},
r8(d,e){return this.ayx(d,e,e)},
ayx(d,e,f){var x=0,w=A.n(f),v,u=2,t=[],s,r,q,p
var $async$r8=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d(d.$0(),$async$r8)
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
r=B.bX9(s)
throw A.p(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$r8,w)},
mP(d,e){var x=A.hr(d[e])
if(x==null)x=null
return x===!0},
GW(){var x=0,w=A.n(y.X),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$GW=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
h=A
g=A
x=7
return A.d(s.pe(),$async$GW)
case 7:r=h.co(g.ce(e,"support",null,null,null,null))
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
if(k!=null)C.d.an(k)
v=new B.QE(q,p,o,n,m,l)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=D.Vf
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$GW,w)},
AC(){var x=0,w=A.n(y.M),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$AC=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=A
l=A
k=A
x=8
return A.d(s.pe(),$async$AC)
case 8:x=7
return A.d(m.dY(l.co(k.ce(e,"storage",null,null,null,null)),y.A),$async$AC)
case 7:r=e
if(r==null){v=null
x=1
break}q=C.d.an(A.dg(r.quota))
p=C.d.an(A.dg(r.usage))
v=new A.akj(q,p)
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
return A.m($async$AC,w)},
b_6(){var x=y.K
A.Ln(this.pe().bI(new B.aTE(),x),x)},
pd(d,e){var x=A.jq(d[e])
x=x==null?null:C.d.an(x)
return x==null?0:x},
aXC(d,e,f){return this.r8(new B.aTD(this,d,e,f),y.C)},
ga9q(){var x,w
try{x=A.jr(b.G.sessionStorage)
return x}catch(w){return null}},
gag3(){var x=A.hr(b.G.mogtama3yTutorIsolated)
if(x==null)x=null
return x===!0},
a_X(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
try{m=b.G
l=A.hr(m.crossOriginIsolated)
if(l==null)l=f
if(l===!0)return!1
if(this.gag3())return!1
l=A.hr(m.isSecureContext)
if(l==null)l=f
if(l!==!0)return!1
x=A.co(m.navigator)
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
l=this.ga9q()
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
aeJ(){var x,w,v,u,t,s,r=null
try{x=this.ga9q()
if(x!=null)A.ce(x,"setItem","mt.tutor.iso",""+Date.now(),r,r)}catch(w){}x=b.G
v=A.co(x.location)
u=A.aa(v.hash)
t=A.aa(v.search)
s=A.bU(A.aa(A.co(x.document).baseURI),0,r).W("tutor/").j(0)
x=u.length===0?"#/masjid/tools/tutor":u
A.ce(v,"replace",s+t+x,r,r,r)},
aXm(){var x,w=null,v=b.G,u=A.co(v.history),t=A.jq(u.length),s=t==null?w:t
if((s==null?0:s)>1)A.ce(u,"back",w,w,w,w)
else{x=A.aa(A.co(v.document).baseURI)
A.ce(A.co(v.location),"replace",A.bU(x,0,w).W("./").j(0)+"#/",w,w,w)}},
a08(d,e,f,g,h){return this.r8(new B.aTI(this,e,d,f,h,g),y.H)},
a0b(){return this.r8(new B.aTJ(this),y.D)},
Vp(){var x=null,w=this.a
if(w!=null)A.ce(w,"cancelRecording",x,x,x,x)},
aaD(d){var x,w,v=this,u=A.W(d.text)
if(u==null)u=null
if(u==null)u=""
x=v.pd(d,"ms")
w=A.jq(d.seconds)
if(w==null)w=null
if(w==null)w=0
return new B.FP(u,x,w,v.pd(d,"frames"),v.pd(d,"tokens"),v.mP(d,"retried"),v.pd(d,"encMs"),v.pd(d,"decMs"),v.pd(d,"featMs"))},
a7w(d){var x={}
x.words=d
return x},
aiS(d,e){return this.r8(new B.aTL(this,d,e),y._)},
b1h(d,e){return this.r8(new B.aTK(this,d,e),y._)},
Fb(d,e){return this.b_b(d,e)},
b_b(d,e){var x=0,w=A.n(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Fb=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=p==null?7:9
break
case 7:x=10
return A.d(s.pe(),$async$Fb)
case 10:x=8
break
case 9:g=p
case 8:r=g
o=A.ae(d).i("aj<1,h>")
o=A.a2(new A.aj(d,new B.aTF(),o),o.i("aI.E"))
x=11
return A.d(A.dY(A.co(A.ce(r,"play",o,e,null,null)),y.y),$async$Fb)
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
return A.m($async$Fb,w)},
GC(){var x=null,w=this.a
if(w!=null)A.ce(w,"stopPlayback",x,x,x,x)},
DS(){var x,w,v,u=null
try{w=this.a
x=w==null?u:A.aa(A.ce(w,"diag",u,u,u,u))
w=x
if(w==null)w=u
if(w==null)w="{}"
return w}catch(v){return"{}"}},
b0r(){var x,w,v=null
try{x=this.a
if(x!=null)A.ce(x,"resetDevice",v,v,v,v)}catch(w){}},
YI(d){var x=this.a
if(x!=null)A.ce(x,"prefetch",d,null,null,null)}}
B.QE.prototype={}
B.FN.prototype={
gly(){var x=this.f,w=x>0?"CPU \xd7"+x:""
x=this.a
if(x==="webgpu")return"WebGPU"
if(C.c.m(x,"webgpu"))return"WebGPU + "+w
return w.length===0?x:w}}
B.FP.prototype={
gLD(){var x=this,w=C.d.aA(x.d/100,0),v=x.f?" (retried on 30 s)":""
return"window "+w+" s, "+x.e+" tokens"+v+", mel "+x.x+" ms, encoder "+x.r+" ms, decoder "+x.w+" ms"}}
B.FO.prototype={}
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
B.mu.prototype={
M(){return"WordStatus."+this.b}}
B.NX.prototype={}
B.lT.prototype={
j(d){var x,w=this.b
if(w==null)w=""
x=this.c
if(x==null)x=""
return this.d.b+":"+w+"->"+x}}
B.Ev.prototype={
gGA(){var x,w=this,v=w.d
if(v===$){x=new B.aL8(w).$0()
w.d!==$&&A.aC()
w.d=x
v=x}return v},
gE7(){var x,w,v,u,t,s=A.a([],y.s)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.d===D.VE&&u.c!=null){t=u.c
t.toString
s.push(t)}}return s},
gaYs(){return J.ob(this.gGA(),new B.aL7()).gK(0)},
gqk(){var x=this.a
return x.length!==0&&this.gaYs()===x.length&&this.gE7().length===0}}
B.Bw.prototype={
M(){return"AyahStatus."+this.b}}
B.pT.prototype={}
B.ab9.prototype={
Yh(d,e){var x=this.a.h(0,d*1000+e)
return x==null?$.pI():x},
aHV(d){var x=this,w=B.aTN(d),v=x.c
if(v===w)return
v=v!=null&&v===B.bFU(w)?x.d+1:1
x.d=v
if(v>x.e)x.e=v
x.c=w},
adX(){var x=Date.now(),w=B.aTN(new A.b6(x,0,!1))
x=this.c
return x===w||x===B.bFU(w)?this.d:0},
ahX(d,e,f,g){var x=this,w=new A.b6(Date.now(),0,!1),v=x.Yh(d,e),u=g?C.e.cw(v.b+1,0,100):0,t=g&&u>=f?D.dY:D.lS,s=new B.pT(t,u,w.hx()),r=d*1000+e
x.a.n(0,r,s)
x.b.D(0,r)
x.aHV(w)
return s},
Y8(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.c1[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pI():s).a===D.dY)++u}return u},
aXk(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.c1[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pI():s).a===D.lS)++u}return u},
gah7(){var x=this.a,w=A.w(x).i("c6<2>")
return new A.aE(new A.c6(x,w),new B.aTO(),w.i("aE<M.E>")).gK(0)},
galZ(){var x=this.a,w=A.w(x).i("bf<1>")
w=A.nf(new A.bf(x,w),new B.aTP(),w.i("M.E"),y.S)
w=A.en(w,A.w(w).i("M.E"))
x=A.a2(w,A.w(w).c)
C.b.l6(x)
return x},
cT(){var x,w,v,u,t,s=this,r=y.N,q=A.x(r,y.L)
for(x=s.a,x=new A.dJ(x,A.w(x).i("dJ<1,2>")).ga0(0),w=y.t;x.u();){v=x.d
u=v.a
t=v.b
q.n(0,""+u,A.a([t.a.a,t.b,t.c.a],w))}x=s.b
x=A.a2(x,A.w(x).c)
return A.K(["v",1,"rows",q,"dirty",x,"last",s.c,"streak",s.d,"best",s.e],r,y.z)},
aTn(){var x,w,v,u,t,s,r,q,p,o=A.a([],y.Z)
for(x=this.b,x=A.bx3(x,300,A.w(x).c),x=new A.Fx(J.aF(x.a),x.b,A.w(x).i("Fx<1>")),w=y.N,v=y.z,u=this.a;x.u();){t=x.gL()
s=C.e.bc(t,1000)
t=C.e.af(t,1000)
r=s*1000+t
q=u.h(0,r)
q=(q==null?$.pI():q).a===D.dY?"memorized":"learning"
p=u.h(0,r)
if(p==null)p=$.pI()
r=u.h(0,r)
o.push(A.K(["surah",s,"ayah",t,"status",q,"perfect_count",p.b,"updated_at",(r==null?$.pI():r).c.iQ()],w,v))}return o},
aXU(d){var x,w,v,u,t,s,r
for(x=d.length,w=this.a,v=this.b,u=0;u<d.length;d.length===x||(0,A.B)(d),++u){t=d[u]
s=A.et(t.h(0,"surah"))*1000+A.et(t.h(0,"ayah"))
r=w.h(0,C.e.bc(s,1000)*1000+C.e.af(s,1000))
if((r==null?$.pI():r).c.iQ()===t.h(0,"updated_at"))v.I(0,s)}},
aY1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
n=B.c1p(s.h(0,"status"))
if(n===D.lR)continue
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
v.n(0,r,new B.pT(n,C.e.cw(l==null?0:l,0,100),o.hx()))
w.I(0,r)
t=!0}return t}}
B.QC.prototype={
DH(d,e,f,g,h){var x=this,w=g==null?x.a:g,v=h==null?x.b:h,u=d==null?x.c:d,t=e==null?x.d:e
return new B.QC(w,v,u,t,f==null?x.e:f)},
aRS(d){var x=null
return this.DH(x,x,d,x,x)},
adx(d){var x=null
return this.DH(x,d,x,x,x)},
aRW(d){var x=null
return this.DH(x,x,x,x,d)},
aRm(d){var x=null
return this.DH(d,x,x,x,x)},
aRT(d){var x=null
return this.DH(x,x,x,d,x)},
cT(){var x=this
return A.K(["n",x.a,"r",x.b,"auto",x.c,"hide",x.d,"in",x.e],y.N,y.z)}}
B.Dz.prototype={
M(){return"ModelState."+this.b}}
B.QD.prototype={
XC(){var x=this.Q
return x==null?this.Q=new B.aTQ(this).$0():x},
oQ(d){return this.akw(d)},
akw(d){var x=0,w=A.n(y.H),v=this
var $async$oQ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v.b=d
v.X()
x=2
return A.d(A.i4("mt.tutor.settings",C.a_.hp(d.cT(),null)),$async$oQ)
case 2:return A.l(null,w)}})
return A.m($async$oQ,w)},
wQ(){var x=0,w=A.n(y.H),v=this,u
var $async$wQ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.X()
x=2
return A.d(A.i4("mt.tutor.progress",C.a_.hp(v.c.cT(),null)),$async$wQ)
case 2:u=v.as
if(u!=null)u.aG()
v.as=A.cC(C.D,v.gaqO())
return A.l(null,w)}})
return A.m($async$wQ,w)},
Gl(d,e,f){return this.al8(d,e,f)},
al8(d,e,f){var x=0,w=A.n(y.H),v=this
var $async$Gl=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:v.z=new A.bJ(d,e,f)
x=2
return A.d(A.i4("mt.tutor.last",C.a_.hp(A.K(["s",d,"f",e,"t",f],y.N,y.S),null)),$async$Gl)
case 2:return A.l(null,w)}})
return A.m($async$Gl,w)},
zt(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$zt=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=s.f
if(n===D.NC||n===D.hM){x=1
break}s.f=D.NC
s.y=null
s.X()
u=4
n=A.jZ().gek().h(0,"tutor_device")
if(n==null)n="auto"
p=A.jZ().gek().h(0,"tutor_threads")
p=A.f9(p==null?"":p,null)
if(p==null)p=0
x=7
return A.d(s.a.aXC(new B.aTR(s),n,p),$async$zt)
case 7:s.x=e
s.f=D.hM
n=A.jZ().gek().h(0,"debug")
if(n==="1"){n=s.x
n.toString
r=n
A.t9().$1("[tutor] model ready: "+r.a+" "+r.b+" threads="+r.f+" isolated="+r.r+" in "+r.c+" ms (warm-up "+r.w+" ms, cached before: "+r.d+")")}u=2
x=6
break
case 4:u=3
m=t.pop()
n=A.Y(m)
if(n instanceof B.kF){q=n
s.f=D.awy
s.y=q
n=A.jZ().gek().h(0,"debug")
if(n==="1")A.t9().$1("[tutor] model failed: "+A.f(q))}else throw m
x=6
break
case 3:x=2
break
case 6:s.X()
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$zt,w)},
un(){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$un=A.j(function(a0,a1){if(a0===1){t.push(a1)
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
return A.d(p.cS("quran_tutor_progress").h_("surah, ayah, status, perfect_count, updated_at"),$async$un)
case 7:o=a1
n=r.c.aY1(o)
m=0,k=y.N,i=y.z
case 8:if(!(m<25)){x=10
break}l=r.c.aTn()
if(J.bk(l)===0){x=10
break}h=p
g=A.K(["p_rows",l],k,i)
f=h.CW
f===$&&A.b()
f.b.E(0,A.lZ(h.x,k,k))
x=11
return A.d(f.b0O("quran_tutor_save",!1,g,i),$async$un)
case 11:r.c.aXU(l)
case 9:++m
x=8
break
case 10:x=12
return A.d(A.i4("mt.tutor.progress",C.a_.hp(r.c.cT(),null)),$async$un)
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
return A.m($async$un,w)},
Fq(d){return this.b0t(d)},
b0t(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$Fq=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:p=B.bxf(t.c.cT()).cT()
y.f.a(p.h(0,"rows")).dE(0,new B.aTS(d))
t.c=B.bxf(p)
x=2
return A.d(t.wQ(),$async$Fq)
case 2:v=4
s=$.a9().b
s===$&&A.b()
r=s.gc_().e.a
x=(r==null?null:r.r)!=null?7:8
break
case 7:r=y.z
x=9
return A.d(s.bg("quran_tutor_reset",A.K(["p_surah",d],y.N,r),r),$async$Fq)
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
return A.m($async$Fq,w)}}
B.uV.prototype={
V(){var x=$.IC()
return new B.Uq(x,new A.bc(C.W,$.a7()))}}
B.Uq.prototype={
ab(){var x,w,v=this
v.ar()
x=v.d
x.a4(v.gn0())
w=y.a
x.XC().bI(new B.bf0(v),w)
H.aJC().bI(new B.bf1(v),w).ho(new B.bf2())
A.Ln(H.bwG(),y.y)},
v6(){if(this.c!=null)this.t(new B.beN())},
l(){var x,w=this
w.d.R(w.gn0())
x=w.e
x.p$=$.a7()
x.T$=0
w.aq()},
J2(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$J2=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.d
x=3
return A.d(s.oQ(s.b.aRS(!0)),$async$J2)
case 3:t=s.a
t.b_6()
if(t.a_X()){t.aeJ()
x=1
break}s.zt()
case 1:return A.l(v,w)}})
return A.m($async$J2,w)},
v7(d,e,f){return this.aGo(d,e,f)},
aNg(d){return this.v7(d,null,null)},
aGo(d,e,f){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$v7=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:if(u.w==null){u.c.U(y.q).f.bd(A.bR(null,null,null,null,null,C.l,null,A.o("\u0644\u062d\u0638\u0629\u2026 \u0628\u0646\u062c\u0647\u0651\u0632 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641",null,null,null,null,null,null,null,null),null,C.D,null,null,null,null,null,null,null,null,null,null))
x=1
break}x=e!=null&&f!=null?3:5
break
case 3:t=new A.Q(e,f)
x=4
break
case 5:s=u.c
s.toString
x=6
return A.d(B.c54(s,d),$async$v7)
case 6:t=h
case 4:if(t==null||u.c==null){x=1
break}x=7
return A.d(u.d.Gl(d,t.a,t.b),$async$v7)
case 7:s=u.c
if(s==null){x=1
break}r=y.z
x=8
return A.d(A.ak(s,!1).cr(A.cm(new B.beT(u,d,t),null,r),r),$async$v7)
case 8:if(u.c!=null)u.t(new B.beU())
case 1:return A.l(v,w)}})
return A.m($async$v7,w)},
C(d){var x=null,w=this.d,v=w.b,u=A.a([],y.p),t=w.a
if(t.gag3()&&!A.ak(d,!1).Vm())u.push(A.cJ(x,x,x,x,D.ad3,x,x,t.gaXl(),x,x,x,"\u0631\u062c\u0648\u0639 \u0644\u0645\u0633\u062c\u062f\u064a",x))
t=v.e
if(t)u.push(A.cJ(x,x,x,x,D.ae0,x,x,new B.beX(d),x,x,x,"\u062a\u0642\u062f\u0651\u0645\u064a",x))
u.push(A.cJ(x,x,x,x,D.Bx,x,x,new B.beY(d),x,x,x,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",x))
if(!w.e)w=D.amO
else w=t?this.aCN():this.aDd()
return M.vC(u,w,"\u0627\u0644\u0645\u062d\u0641\u0651\u0638")},
aDd(){var x,w,v,u,t,s,r,q,p=null,o=this.d.d
if(o==null)o=D.Vf
x=this.r
w=x==null?p:x.a-x.b
if(!(o.a&&o.b))v="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u062f\u0639\u0645 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638. \u062c\u0631\u0651\u0628 \u0623\u062d\u062f\u062b \u0646\u0633\u062e\u0629 \u0645\u0646 Chrome (\u0623\u0646\u062f\u0631\u0648\u064a\u062f) \u0623\u0648 Safari (\u0622\u064a\u0641\u0648\u0646)."
else if(!o.f)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0641\u062a\u062d \u0639\u0644\u0649 https \u0639\u0634\u0627\u0646 \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0627\u064a\u0643."
else v=!o.c||!o.d?"\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u0633\u0645\u062d \u0628\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0646 \u0627\u0644\u0645\u0627\u064a\u0643.":p
x=y.p
u=A.a([D.aHX,C.ar],x)
for(t=0;t<4;++t){s=D.aok[t]
u.push(new A.a4(C.by,A.al(A.a([A.c7(s.a,C.a6,p,18),C.aq,new A.dG(1,C.aX,A.o(s.b,p,p,p,p,G.Ud,p,p,p),p)],x),C.z,C.f,C.h,0,p),p))}u=A.af(u,C.z,C.f,C.h)
s=A.a([D.aZk,C.P,A.o("\u0647\u0646\u062d\u0645\u0651\u0644 \u0645\u0644\u0641 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 (\u062d\u0648\u0627\u0644\u064a "+E.aZ(105)+" \u0645\u064a\u062c\u0627) \u0648\u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0648\u0628\u0639\u062f \u0643\u062f\u0647 \u0628\u064a\u0641\u062a\u062d \u0645\u0646 \u063a\u064a\u0631 \u062a\u062d\u0645\u064a\u0644. \u064a\u064f\u0641\u0636\u0651\u0644 \u062a\u0643\u0648\u0646 \u0639\u0644\u0649 Wi-Fi.",p,p,p,p,F.ag,p,p,p)],x)
if(w!=null){r=w<3e8
q=r?"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0645\u062a\u0635\u0641\u062d \u0642\u0644\u064a\u0644\u0629 ("+E.aZ(C.d.an(w/1e6))+" \u0645\u064a\u062c\u0627) \u2014 \u0641\u0636\u0651\u064a \u0634\u0648\u064a\u0629 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0623\u0648\u0644.":"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629: \u0643\u0641\u0627\u064a\u0629 \u2713"
C.b.E(s,A.a([C.P,A.o(q,p,p,p,p,A.cB(p,p,r?D.cW:C.cj,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x))}r=o.w
if(r>0&&r<3)C.b.E(s,A.a([C.P,D.aYS],x))
x=A.a([new E.cT(u,C.ad,C.ay,p,!0,p),new E.cT(A.af(s,C.z,C.f,C.h),C.ad,C.ay,p,!1,p),D.b50,C.P],x)
if(v!=null)x.push(new E.cT(A.o(v,p,p,p,p,D.aQV,p,p,p),C.ad,C.ay,p,!1,p))
else x.push(A.jE(D.aco,D.aUc,this.gaGx(),A.jF(C.q,C.a4,D.aKu,p,p,p,p)))
x.push(C.aL)
x.push(D.Ve)
return x},
aCN(){var x,w,v=this,u=null,t=v.d,s=t.c,r=v.e,q=C.c.ap(r.a.a),p=q.length===0,o=p?C.u4:H.bKn(q),n=t.z,m=A.aS(v.aa_(C.hu,E.aZ(s.gah7())+" \u0622\u064a\u0629","\u062d\u0641\u0638\u062a\u0647\u0627"),1),l=E.aZ(s.adX()),k=s.c,j=Date.now()
k=k===B.aTN(new A.b6(j,0,!1))?"\u0648\u0631\u0627 \u0628\u0639\u0636 \u2014 \u0643\u0645\u0651\u0644!":"\u0633\u0645\u0651\u0639 \u0627\u0644\u0646\u0647\u0627\u0631\u062f\u0647 \u0639\u0634\u0627\u0646 \u062a\u0643\u0645\u0651\u0644"
j=y.p
k=A.a([new B.DA(t,!1,u),A.al(A.a([m,C.aq,A.aS(v.aa_(C.AW,l+" \u064a\u0648\u0645",k),1)],j),C.j,C.f,C.h,0,u),C.R],j)
if(n!=null){t=H.jt(n.a)
m=n.b
l=n.c
m=m===l?"\u0622\u064a\u0629 "+E.aZ(m):"\u0627\u0644\u0622\u064a\u0627\u062a "+E.aZ(m)+"\u2013"+E.aZ(l)
k.push(new E.cT(A.al(A.a([D.adx,C.aY,A.aS(A.af(A.a([D.aSB,A.o(t+" \u2014 "+m,u,u,u,u,F.aZ,u,u,u)],j),C.z,C.f,C.h),1),Q.kH],j),C.j,C.f,C.h,0,u),C.ad,C.ay,new B.beQ(v,n),!0,u))}t=C.i.bJ(0.08)
k.push(A.bG(u,C.J,!1,u,!0,C.l,u,A.bL(),r,u,u,u,u,u,2,A.fB(u,new A.ea(4,A.ac(14),C.v),u,u,u,u,u,u,!0,u,u,u,u,u,u,t,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,C.p9,"\u0639\u0627\u064a\u0632 \u062a\u062d\u0641\u0638 \u0633\u0648\u0631\u0629 \u0625\u064a\u0647\u061f",u,u,u,u,u,u,u,u,u,!0,!0,!1,u,C.n4,u,u,u,u,u,u,u,u,u,u,u,u),C.t,!0,u,!0,u,!1,u,C.L,u,u,u,u,u,u,u,u,u,1,u,u,!1,"\u2022",u,new B.beR(v),u,u,u,!1,u,u,!1,u,!0,u,C.H,u,u,u,u,u,u,u,u,u,u,u,C.cP,!0,C.y,u,C.Q,u,u,u,u))
k.push(C.R)
if(!p){t=A.a([],j)
if(o.length===0)t.push(D.aWD)
for(r=o.length,x=0;x<o.length;o.length===r||(0,A.B)(o),++x)t.push(v.K1(o[x]))
C.b.E(k,t)}else{t=A.a([D.ayM,D.azd,v.K1(1)],j)
for(w=114;w>=78;--w)t.push(v.K1(w))
t.push(C.P)
r=v.f
p=A.c7(r?C.tw:C.kC,C.a6,u,u)
t.push(A.hn(p,A.o(r?"\u0627\u062e\u0641\u064a \u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631":"\u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631 (\u0627\u0644\u0628\u0642\u0631\u0629 \u0644\u062d\u062f \u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a)",u,u,u,u,C.ek,u,u,u),new B.beS(v),u))
if(v.f)for(w=2;w<=77;++w)t.push(v.K1(w))
C.b.E(k,t)}k.push(C.ar)
k.push(D.wX)
return k},
aa_(d,e,f){var x=null,w=y.p
return new E.cT(A.al(A.a([A.c7(d,C.q,x,x),C.aq,A.aS(A.af(A.a([A.o(e,x,x,x,x,F.aZ,x,x,x),A.o(f,1,C.am,x,x,D.aPH,x,x,x)],w),C.z,C.f,C.h),1)],w),C.j,C.f,C.h,0,x),C.ad,C.G,x,!1,x)},
K1(d){var x,w=null,v=this.d.c,u=I.c1[d-1].a[1],t=v.Y8(d),s=t/u,r=y.p,q=A.bu(A.hm(C.V,A.a([A.bva(C.e1,G.bY,w,w,w,w,w,3,s,w),A.o(E.aZ(d),w,w,w,w,R.UE,w,w,w)],r),C.l,C.cb,w),36,36),p=A.o(H.jt(d),w,w,w,w,D.aMC,w,w,w)
if(t===0)x=E.aZ(u)+" \u0622\u064a\u0629"
else x=t===u?"\u0645\u062d\u0641\u0648\u0638\u0629 \u0643\u0644\u0647\u0627 \u2713":"\u062d\u0641\u0638\u062a "+E.aZ(t)+" \u0645\u0646 "+E.aZ(u)
r=A.a([q,C.i2,A.aS(A.af(A.a([p,A.o(x,w,w,w,w,A.cB(w,w,t===u?G.bY:C.cj,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),C.z,C.f,C.h),1)],r)
if(s>0&&s<1)r.push(A.o(E.aZ(C.d.an(s*100))+"\u066a",w,w,w,w,D.Ur,w,w,w))
r.push(D.acr)
return new E.cT(A.al(r,C.j,C.f,C.h,0,w),L.zL,C.ev,new B.beV(this,d),!1,w)}}
B.DA.prototype={
C(d){var x,w,v,u,t,s,r=null,q=this.c
switch(q.f.a){case 2:if(this.d)return C.aE
return D.ayE
case 3:x=q.y
x=A.a([A.o(x==null?"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0634\u063a\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638":B.Iv(x),r,r,r,r,D.wl,r,r,r)],y.p)
w=q.y
if(w!=null)x.push(new B.A0(w,"model load",r))
x.push(C.P)
x.push(new A.xy(C.VX,!1,q.gaXB(),r,r,r,r,C.m,r,!1,r,!0,r,C.pd,r))
return new E.cT(A.af(x,C.z,C.f,C.h),C.ad,C.ay,r,!1,r)
case 0:case 1:v=q.w
u=q.r
q=v>0
t=q?C.d.cw(u/v,0,1):r
s=q&&u<v
q=A.o(s?"\u0628\u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026 "+E.aZ(C.d.an(u/1e6))+" \u0645\u0646 "+E.aZ(C.d.an(v/1e6))+" \u0645\u064a\u062c\u0627":"\u0628\u0646\u062c\u0647\u0651\u0632 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026",r,r,r,r,C.wn,r,r,r)
x=A.ac(8)
w=y.p
x=A.a([q,C.S,A.mT(x,A.Dc(C.e1,C.q,7,s?t:r),C.bq)],w)
if(!this.d)C.b.E(x,A.a([C.P,D.aUF],w))
return new E.cT(A.af(x,C.z,C.f,C.h),C.ad,C.ay,r,!1,r)}}}
B.Sg.prototype={
C(d){var x=null,w=D.cW.bJ(0.1),v=A.ac(14),u=A.cX(D.cW.bJ(0.4),1)
return A.aA(x,A.al(A.a([D.adk,C.aq,A.aS(A.o(this.c?"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0627\u0644\u062a\u062c\u0648\u064a\u062f.":"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0623\u062d\u0643\u0627\u0645 \u0627\u0644\u062a\u062c\u0648\u064a\u062f. \u0627\u0642\u0631\u0627 \u0639\u0644\u0649 \u0634\u064a\u062e \u0623\u0648 \u0645\u062d\u0641\u0651\u0638 \u0641\u064a \u0645\u0633\u062c\u062f\u0643 \u0643\u0645\u0627\u0646.",x,x,x,x,D.Uy,x,x,x),1)],y.p),C.z,C.f,C.h,0,x),C.m,x,x,new A.as(w,x,u,v,x,x,C.r),x,x,C.ay,C.aR,x,x,x)}}
B.AJ.prototype={
M(){return"_Phase."+this.b}}
B.A_.prototype={
V(){return new B.Wo($.IC(),D.jR)}}
B.Wo.prototype={
gi4(){var x=this.e
return x===$?this.e=this.a.d:x},
gyb(){var x,w=this.a,v=w.f
w=w.c
x=this.gi4()
return H.Is(w,x,v.ve(w,x)).b},
ab(){var x,w=this
w.ar()
x=w.d
x.a4(w.gn0())
x.XC()
x.a.YI(B.aqf(w.a.c,w.gi4()))},
v6(){if(this.c!=null)this.t(new B.bmP())},
l(){var x,w=this,v=w.d
v.R(w.gn0())
x=w.Q
if(x!=null)x.aG()
v=v.a
v.GC()
v.Vp()
w.aq()},
RQ(d){var x,w,v=this
if(v.f===D.pG)v.d.a.Vp()
x=v.d.a
x.GC()
w=v.Q
if(w!=null)w.aG()
v.t(new B.bn4(v,d))
x.YI(B.aqf(v.a.c,d))
w=v.a
if(d<w.e)x.YI(B.aqf(w.c,d+1))},
Kf(d){return this.aDN(d)},
aDN(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$Kf=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f===D.pF){u.d.a.GC()
u.t(new B.bn8(u))
x=1
break}t=u.r!=null?D.h7:D.jR
u.t(new B.bn9(u))
s=u.d
r=A.a([B.aqf(u.a.c,u.gi4())],y.s)
q=d==null?s.b.b:d
x=3
return A.d(s.a.Fb(r,q),$async$Kf)
case 3:p=f
if(u.c==null||u.f!==D.pF){x=1
break}u.t(new B.bna(u,t,p))
case 1:return A.l(v,w)}})
return A.m($async$Kf,w)},
Jj(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Jj=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.d
if(l.f!==D.hM){x=1
break}p=l.a
p.GC()
r=B.Be(s.gyb()).length
s.t(new B.bnc(s))
o=s.Q
if(o!=null)o.aG()
s.Q=A.mq(C.fu,new B.bnd(s))
u=4
o=B.byW(r)
n=A.d2(0,0,0,350*r,0,0)
x=7
return A.d(p.a08(l.b.c,o,n,new B.bne(s),new B.bnf(s)),$async$Jj)
case 7:u=2
x=6
break
case 4:u=3
k=t.pop()
l=A.Y(k)
if(l instanceof B.kF){q=l
l=s.Q
if(l!=null)l.aG()
if(s.c!=null)s.t(new B.bng(s,q))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Jj,w)},
y7(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$y7=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.f!==D.pG){x=1
break}m=s.Q
if(m!=null)m.aG()
s.t(new B.bni(s))
s.Q=A.mq(C.hn,new B.bnj(s))
l=new A.zu()
$.Bh()
l.mM()
r=l
u=4
m=s.d.a
x=7
return A.d(m.a0b(),$async$y7)
case 7:q=e
if(q.b<0.8){s.aNf("\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0642\u0635\u064a\u0631 \u0623\u0648\u064a \u2014 \u062f\u0648\u0633 \xab\u0633\u0645\u0651\u0639\xbb \u0648\u0627\u0642\u0631\u0627 \u0627\u0644\u0622\u064a\u0629 \u0643\u0644\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb.")
x=1
break}x=8
return A.d(m.aiS(q,B.Be(s.gyb()).length),$async$y7)
case 8:p=e
s.ch=A.d2(0,0,r.gWJ(),0,0,0)
k=A.jZ().gek().h(0,"debug")
if(k==="1"){o=B.bKF(m.DS())
A.t9().$1("[tutor] "+s.a.c+":"+s.gi4()+" audio="+C.d.aA(q.b,1)+"s infer="+p.b+"ms total="+r.gyT()+"ms "+p.gLD()+" text="+p.a)
A.t9().$1("[tutor] stages: "+A.f(o))
s.ax="\u062a\u0633\u062c\u064a\u0644\u0643 "+C.d.aA(p.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(p.b/1000,2)+" \u062b\n"+p.gLD()+"\n"+A.f(o)+"\n"+p.a}s.a5k(p.a)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.Y(i)
if(m instanceof B.kF){n=m
m=A.jZ().gek().h(0,"debug")
if(m==="1")A.t9().$1("[tutor] check failed: "+A.f(n)+"\n"+s.d.a.DS())
s.Ug(B.Iv(n),n)}else throw i
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$y7,w)},
Ug(d,e){var x=this,w=x.Q
if(w!=null)w.aG()
if(x.c==null)return
x.t(new B.bn3(x,d,e))},
aNf(d){return this.Ug(d,null)},
a5k(d){var x,w,v,u,t,s=this,r={},q=s.Q
if(q!=null)q.aG()
if(s.c==null)return
x=B.bIM(s.gyb(),d)
r.a=null
if(C.c.ap(x.c).length!==0){q=s.d
w=q.c
v=s.a.c
u=s.gi4()
t=x.gqk()
r.a=w.ahX(v,u,q.b.a,t)
q.wQ()}s.t(new B.bn5(r,s,x))},
Hz(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Hz=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:g=s.d
if(g.f!==D.hM){x=1
break}s.t(new B.bmX(s))
l=s.Q
if(l!=null)l.aG()
s.Q=A.mq(C.hn,new B.bmY(s))
k=new A.zu()
$.Bh()
k.mM()
r=k
u=4
l=g.a
x=7
return A.d(l.b1h(B.aqf(s.a.c,s.gi4()),B.Be(s.gyb()).length),$async$Hz)
case 7:q=e
p=B.bKF(l.DS())
o="\u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a "+C.d.aA(q.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(q.b/1000,2)+" \u062b (\u0627\u0644\u0643\u0644 "+C.d.aA(r.gyT()/1000,2)+" \u062b)\n"+q.gLD()+"\n"+A.f(p)+"\n"+q.a
A.t9().$1("[tutor-debug] "+s.a.c+":"+s.gi4()+" audio="+C.d.aA(q.c,1)+"s infer="+q.b+"ms total="+r.gyT()+"ms "+q.gLD()+" text="+q.a)
A.t9().$1("[tutor-debug] stages: "+A.f(p))
s.ch=A.d2(0,0,r.gWJ(),0,0,0)
s.a5k(q.a)
n=s.r
if(n!=null){l=n.gqk()
j=n.b
i=A.ae(j).i("aE<1>")
j=A.a2(new A.aE(j,new B.bmZ(),i),i.i("M.E"))
A.t9().$1("[tutor-debug] perfect="+l+" ops="+A.f(j))}s.t(new B.bn_(s,o))
u=2
x=6
break
case 4:u=3
f=t.pop()
l=A.Y(f)
if(l instanceof B.kF){m=l
A.t9().$1("[tutor-debug] failed: "+A.f(m)+"\n"+g.a.DS())
s.Ug(B.Iv(m),m)}else throw f
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Hz,w)},
gT9(){var x,w,v
for(x=this.a.d,w=this.d;v=this.a,x<=v.e;++x){v=w.c.a.h(0,v.c*1000+x)
if((v==null?$.pI():v).a!==D.dY)return!1}return!0},
C(d){var x,w=this,v=null,u=w.d,t=u.c.Yh(w.a.c,w.gi4()),s=u.b,r=s.d&&!w.x&&w.f!==D.h7,q=H.jt(w.a.c),p=y.p,o=A.a([A.cJ(v,v,v,v,D.Bx,v,v,new B.bno(d),v,v,v,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",v)],p),n=w.aw9(),m=A.o("\u0622\u064a\u0629 "+E.aZ(w.gi4()),v,v,v,v,C.jE,v,v,v),l=E.aZ(w.gi4()-w.a.d+1),k=w.a
s=A.a([A.al(A.a([m,C.bI,A.o("("+l+" \u0645\u0646 "+E.aZ(k.e-k.d+1)+")",v,v,v,v,F.ag,v,v,v),C.dv,w.aHa(t,s.a)],p),C.j,C.f,C.h,0,v),C.R],p)
if(r)s.push(w.aCI())
else{m=w.r
if(m!=null){l=w.f
l=l!==D.pG&&l!==D.lI}else l=!1
if(l)s.push(w.aul(m))
else s.push(A.o(w.gyb()+" \ufd3f"+E.aZ(w.gi4())+"\ufd3e",v,v,v,v,D.i8,C.ac,C.aN,v))}s=A.a([new B.DA(u,!0,v),n,C.S,new E.cT(A.af(s,C.ak,C.f,C.h),D.a7L,C.ay,v,!1,v)],p)
n=w.r
if(n!=null&&w.f===D.h7)s.push(w.aOy(n))
if(w.r!=null&&w.f===D.h7&&w.ch!=null){x=C.d.an(C.e.bc(w.ch.a,1000)/100)
s.push(new A.a4(C.by,A.o("\u0627\u062a\u0631\u0627\u062c\u0639 \u0641\u064a "+(E.aZ(C.e.bc(x,10))+"\u066b"+E.aZ(C.e.af(x,10)))+" \u062b",v,v,v,v,F.ag,C.ac,v,v),v))}n=w.as
if(n!=null)s.push(new A.a4(C.ay,A.o(n,v,v,v,v,D.wl,v,v,v),v))
if(w.as!=null&&w.at!=null){n=w.at
n.toString
s.push(new B.A0(n,"check "+w.a.c+":"+w.gi4(),v))}s.push(w.auL())
s.push(C.ar)
s.push(A.rm(C.q,C.G,v,new B.bnp(w),D.aTp,D.aVC,u.b.d))
n=w.a
if(n.e>n.d){n=w.gT9()
s.push(new E.cT(A.al(A.a([D.abB,C.aY,A.aS(A.af(A.a([D.aWl,A.o(w.gT9()?"\u062d\u0641\u0638\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u0633\u0645\u0651\u0639\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636 \u0645\u0646 \u063a\u064a\u0631 \u0645\u0627 \u062a\u0634\u0648\u0641\u0647\u0627":"\u0644\u0645\u0627 \u062a\u062e\u0644\u0651\u0635 \u0627\u0644\u0622\u064a\u0627\u062a \u0648\u0627\u062d\u062f\u0629 \u0648\u0627\u062d\u062f\u0629\u060c \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0644\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636",v,v,v,v,F.ag,v,v,v)],p),C.z,C.f,C.h),1),Q.kH],p),C.j,C.f,C.h,0,v),C.ad,C.ay,new B.bnq(w,d),n,v))}n=A.jZ().gek().h(0,"debug")
if(n==="1"){p=A.a([C.S,A.f6(D.acn,D.aVj,u.f===D.hM&&w.f!==D.lI?w.gavk():v,v)],p)
n=w.ax
if(n!=null)p.push(new A.a4(C.iE,A.EU(n,F.ag,v,v),v))
n=u.x
if(n!=null){m=n.a
l=n.b
n=n.gly()
u=u.x
p.push(A.o("model: "+m+" "+l+" \u2014 "+n+", isolated "+u.r+", load "+u.c+" ms (warm-up "+u.w+" ms)",v,v,v,v,F.ag,v,v,v))}p.push(A.bO(D.aVY,v,v,v,new B.bnr(w,d),v,v))
C.b.E(s,p)}s.push(C.S)
s.push(D.wX)
return M.vC(o,s,q)},
aw9(){var x=this.a,w=x.e-x.d+1
if(w===1)return C.aE
return A.bu(A.oT(new B.bn1(this),w,null,C.az,new B.bn2()),36,null)},
aHa(d,e){var x,w,v,u,t,s,r,q=null
if(d.a===D.dY)return D.aI3
x=d.b
w=E.aZ(x)
v=E.aZ(e)
u=A.a([],y.p)
for(t=0;t<e;++t){s=t<x
r=s?C.d7:D.ab8
u.push(new A.a4(D.a8l,A.c7(r,s?G.bY:C.eU,q,16),q))}return A.aTp(A.al(u,C.j,C.f,C.Y,0,q),q,"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637 \u0648\u0631\u0627 \u0628\u0639\u0636: "+w+" \u0645\u0646 "+v,q,q)},
aCI(){var x=null
return A.dk(!1,A.ac(12),!0,A.aA(x,D.a4d,C.m,x,x,new A.as(L.qC,x,x,A.ac(12),x,x,C.r),x,x,x,D.a7s,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bn7(this),x,x,x,x,x,x,x)},
aul(d){var x,w,v,u,t,s=null,r=A.a([],y.R)
for(x=d.a,w=0;w<x.length;++w){v=J.b5(d.gGA(),w)
A:{if(D.h1===v){u=D.i8.cB(G.bY)
break A}if(D.ps===v){u=D.i8.W_(D.cW,C.fT,D.cW)
break A}if(D.pt===v){u=D.i8.W_(D.dB,C.fT,D.dB)
break A}u=D.i8.W_(C.eU,C.p2,C.c5)
break A}t=x[w]
r.push(new A.f_(t.a,s,s,C.bd,s,s,s,s,s,s,u))
r.push(L.wf)}x=E.aZ(this.gi4())
r.push(A.dQ(s,s,s,s,s,s,s,s,s,D.i8.cB(C.a6),"\ufd3f"+x+"\ufd3e"))
return A.Q1(A.dQ(r,s,s,s,s,s,s,s,s,s,s),s,C.ac,C.aN)},
aOy(d){var x,w,v,u,t,s,r=this.w
if(C.c.ap(d.c).length===0)return D.b4G
if(d.gqk()){x=r==null
if((x?null:r.a)===D.dY&&r.b===this.d.b.a)x="\u0627\u0644\u0622\u064a\u0629 \u062f\u064a \u0627\u062a\u062d\u0641\u0638\u062a! \u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0627\u0644\u0644\u064a \u0628\u0639\u062f\u0647\u0627."
else x=!x&&r.a!==D.dY?"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637. \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0645\u0627\u0646 "+E.aZ(this.d.b.a-r.b)+" \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629.":"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637."
return new B.Ae(G.bY,C.d7,"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713",x,null)}x=d.gGA()
w=J.d0(x)
v=w.hY(x,new B.bnk()).gK(0)
u=w.hY(x,new B.bnl()).gK(0)
t=w.hY(x,new B.bnm()).gK(0)
x=A.a([],y.s)
if(u>0)x.push(E.aZ(u)+" \u063a\u0644\u0637")
if(v>0)x.push(E.aZ(v)+" \u0631\u0627\u062c\u0639\u0647\u0627")
if(t>0)x.push(E.aZ(t)+" \u0646\u0627\u0642\u0635\u0629")
if(d.gE7().length!==0)x.push(E.aZ(d.gE7().length)+" \u0632\u064a\u0627\u062f\u0629")
w=u+t>0?D.dB:D.cW
x=C.b.aK(x," \u2022 ")
s=d.gE7().length!==0?"\n\u0632\u064a\u0627\u062f\u0629: "+C.b.aK(d.gE7(),"\u060c "):""
return new B.Ae(w,C.kF,"\u0642\u0631\u0628\u062a! \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0644\u0648\u0651\u0646\u0629",x+"\n\u0627\u0644\u0623\u0635\u0641\u0631: \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u062f\u064a \u2014 \u0627\u0644\u0623\u062d\u0645\u0631: \u063a\u0644\u0637 \u2014 \u0627\u0644\u0631\u0645\u0627\u062f\u064a \u0627\u0644\u0645\u0634\u0637\u0648\u0628: \u0646\u0633\u064a\u062a\u0647\u0627."+s,null)},
auL(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d,g=h.f===D.hM,f=j.f
switch(f.a){case 2:if(j.z==null)x=0
else{f=Date.now()
w=j.z
w.toString
x=C.e.bc(new A.b6(f,0,!1).dJ(w).a,1e6)}v=C.e.bc(B.byW(B.Be(j.gyb()).length).a,1e6)
f=j.gaM4()
w=96+26*j.y
u=D.dB.bJ(0.25)
w=A.lc(i,A.bAA(C.V,A.aA(i,D.act,C.m,i,i,D.YF,i,84,i,i,i,i,84),i,new A.as(u,i,i,i,i,i,C.cx),C.zz,i,w,w),C.t,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,f,i,i,i,i,i,i)
u=A.o("\u0628\u0646\u0633\u062c\u0651\u0644\u2026 "+B.bxV(x)+" / "+B.bxV(v),i,i,i,i,K.ls,i,i,i)
return A.af(A.a([w,C.S,u,A.o(h.b.c?"\u0644\u0645\u0627 \u062a\u062e\u0644\u0635 \u0627\u0633\u0643\u062a \u062b\u0627\u0646\u064a\u0629 \u0623\u0648 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb":"\u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb \u0644\u0645\u0627 \u062a\u062e\u0644\u0635",i,i,i,i,F.ag,i,i,i),A.bO(D.aYR,i,i,i,f,i,i)],y.p),C.j,C.f,C.h)
case 3:t=C.d.e3((Date.now()-j.ay)/1000)
if(t<8)h="\u062b\u0648\u0627\u0646\u064a \u0648\u0646\u0642\u0648\u0644\u0643"
else h=t<25?"\u0644\u0633\u0647 \u0634\u063a\u0627\u0644\u064a\u0646 \u2014 \u0627\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0628\u062a\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0643\u062a\u0631 ("+E.aZ(t)+" \u062b)":"\u0648\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0637\u0648\u0644 \u0645\u0646 \u0627\u0644\u0639\u0627\u062f\u064a \u2014 \u0644\u0648 \u0639\u0644\u0651\u0642 \u0647\u0646\u0639\u064a\u062f \u062a\u0634\u063a\u064a\u0644\u0647 \u0644\u0648\u062d\u062f\u0646\u0627 ("+E.aZ(t)+" \u062b)"
return new A.a4(D.a7p,A.af(A.a([C.qq,C.ar,D.aUW,A.o(h,i,i,i,i,F.ag,C.ac,i,i)],y.p),C.j,C.f,C.h),i)
default:s=f===D.pF
r=j.r
f=r==null
w=!f
q=w&&r.gqk()
u=A.c7(s?C.kG:K.Bc,i,i,i)
if(s)p="\u0648\u0642\u0651\u0641"
else p=w&&!q?"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u062d":"\u0627\u0633\u0645\u0639"
p=A.o(p,i,i,i,i,i,i,i,i)
o=A.jF(i,i,D.aKr,i,i,i,i)
u=A.aS(new A.xy(C.VX,!0,new B.bmQ(j,r,q),i,i,i,o,C.m,i,!1,i,!0,i,new A.SL(p,u,o,i,i),i),1)
p=A.a([],y.n)
for(o=y.c,n=0;n<3;++n){m=D.Ch[n]
p.push(new A.ep(m,i,A.o("\xd7"+E.aZ(m),i,i,i,i,i,i,i,i),o))}o=y.S
l=y.b
k=y.p
o=A.al(A.a([u,C.aq,A.vf(new B.bmR(j),p,A.cR([h.b.b],o),!1,A.jw(i,i,i,new A.b3(new B.bmS(),l),i,i,i,i,new A.b3(new B.bmT(),l),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,C.di),o)],k),C.j,C.f,C.h,0,i)
h=g&&!s?j.gaID():i
u=A.c7(f?D.mX:C.kF,i,i,i)
if(g)f=f?"\u0633\u0645\u0651\u0639":"\u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a"
else f="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
f=A.o(f,i,i,i,i,C.cB,i,i,i)
p=q?N.hi:C.q
h=A.a([o,C.R,A.jE(u,f,h,A.jF(p,q?C.i:C.a4,D.oV,i,i,i,i))],k)
if(w&&j.gi4()<j.a.e)C.b.E(h,A.a([C.S,q?A.jE(D.aec,D.aY5,new B.bmU(j),A.jF(G.bY,C.a4,D.oV,i,i,i,i)):A.bO(D.aTv,i,i,i,new B.bmV(j),i,i)],k))
if(w){f=j.gi4()
w=j.a
u=w.e
f=f===u&&q&&u>w.d}else f=!1
if(f)h.push(new A.a4(C.mB,A.o(j.gT9()?"\u062e\u0644\u0651\u0635\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u062c\u0631\u0651\u0628 \xab\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636\xbb \u062a\u062d\u062a.":"\u062e\u0644\u0635\u062a \u0622\u062e\u0631 \u0622\u064a\u0629 \u2014 \u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0644\u0633\u0647 (\u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0635\u0641\u0631\u0627 \u0641\u0648\u0642).",i,i,i,i,K.pc,C.ac,i,i),i))
return A.af(h,C.ak,C.f,C.h)}}}
B.Ae.prototype={
C(d){var x=this,w=null,v=x.c,u=v.bJ(0.12),t=A.ac(14),s=A.cX(v.bJ(0.5),1),r=y.p
return A.aA(w,A.al(A.a([A.c7(x.d,v,w,w),C.aq,A.aS(A.af(A.a([A.o(x.e,w,w,w,w,A.cB(w,w,v,w,w,w,w,w,w,w,w,15,w,w,C.a3,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),C.vJ,A.o(x.f,w,w,w,w,D.Uy,w,w,w)],r),C.z,C.f,C.h),1)],r),C.z,C.f,C.h,0,w),C.m,w,w,new A.as(u,w,s,t,w,w,C.r),w,w,C.ay,C.aR,w,w,w)}}
B.zZ.prototype={
V(){var x=y.S
return new B.Wn($.IC(),A.x(x,y.B),A.aD(x),A.x(x,y.N),A.dH(null,y.H))}}
B.Wn.prototype={
ab(){this.ar()
this.d.a4(this.gn0())},
v6(){if(this.c!=null)this.t(new B.bmy())},
l(){var x,w=this,v=w.d
v.R(w.gn0())
x=w.y
if(x!=null)x.aG()
v.a.Vp()
w.aq()},
CZ(d){return this.aLU(d)},
aLU(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m
var $async$CZ=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.t(new B.bmH(t,d))
r=t.y
if(r!=null)r.aG()
t.y=A.mq(C.fu,new B.bmI(t))
v=3
r=t.d
q=t.a
p=q.f
q=q.c
q=B.byW(B.Be(H.Is(q,d,p.ve(q,d)).b).length)
p=t.a
o=p.f
p=p.c
p=A.d2(0,0,0,350*B.Be(H.Is(p,d,o.ve(p,d)).b).length,0,0)
x=6
return A.d(r.a.a08(r.b.c,q,p,new B.bmJ(t,d),new B.bmK(t)),$async$CZ)
case 6:v=1
x=5
break
case 3:v=2
m=u.pop()
r=A.Y(m)
if(r instanceof B.kF){s=r
r=t.y
if(r!=null)r.aG()
if(t.c!=null)t.t(new B.bmL(t,s))}else throw m
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$CZ,w)},
Bt(d,e){return this.ax9(d,e)},
ax9(d,e){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Bt=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.e!==d){x=1
break}o=s.y
if(o!=null)o.aG()
s.t(new B.bmC(s,d))
n=d<s.a.e?d+1:null
r=s.d.a.a0b()
if(e&&n!=null)s.CZ(n)
q=null
u=4
x=7
return A.d(r,$async$Bt)
case 7:q=g
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.Y(l)
if(o instanceof B.kF){p=o
s.t(new B.bmD(s,d,p))}else throw l
x=6
break
case 3:x=2
break
case 6:if(q!=null){o=q
s.at=s.at.bI(new B.bmE(s,o,d),y.H)}case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Bt,w)},
gaF7(){var x,w,v,u,t=this
for(x=t.a.d,w=t.f,v=t.r,u=t.w;x<=t.a.e;++x)if(!w.aw(x)&&!v.m(0,x)&&!u.aw(x)&&x!==t.e)return x
return null},
aJg(){this.t(new B.bmF(this))},
C(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q.f===D.hM,o=s.e,n=s.gaF7(),m=s.f,l=m.a,k=s.w.a,j=s.a,i=l+k===j.e-j.d+1&&s.r.a===0&&o==null
l=A.w(m).i("c6<2>")
x=new A.aE(new A.c6(m,l),new B.bmM(),l.i("aE<M.E>")).gK(0)
l=H.jt(s.a.c)
m=y.p
q=A.a([new B.DA(q,!0,r),A.o("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 "+E.aZ(s.a.d)+" \u0644\u062d\u062f "+E.aZ(s.a.e)+" \u0645\u0646 \u062d\u0641\u0638\u0643\u060c \u0622\u064a\u0629 \u0622\u064a\u0629: \u0628\u0639\u062f \u0643\u0644 \u0622\u064a\u0629 \u062f\u0648\u0633 \xab\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629\xbb \u0648\u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0637\u0648\u0644 \u2014 \u0647\u0646\u0635\u062d\u0651\u062d \u0648\u0625\u0646\u062a \u0628\u062a\u0642\u0631\u0627.",r,r,r,r,F.ag,r,r,r),C.R],m)
for(w=s.a.d;w<=s.a.e;++w)q.push(s.aNh(w))
q.push(C.S)
k=s.Q
if(k!=null)q.push(A.o(k,r,r,r,r,D.wl,r,r,r))
k=s.as
if(k!=null){j=s.a
q.push(new B.A0(k,"review "+j.c+":"+j.d+"-"+j.e,r))}k=o==null
if(!k){j=E.aZ(o)
if(s.z==null)v=0
else{v=Date.now()
u=s.z
u.toString
u=C.e.bc(new A.b6(v,0,!1).dJ(u).a,1e6)
v=u}v=A.o("\u0628\u0646\u0633\u062c\u0651\u0644 \u0622\u064a\u0629 "+j+"\u2026 "+B.bxV(v),r,r,r,r,K.ls,C.ac,r,r)
j=A.mT(A.ac(6),A.Dc(C.e1,D.dB,6,s.x),C.bq)
u=o<s.a.e
t=A.c7(u?P.B7:C.kG,r,r,r)
C.b.E(q,A.a([v,C.P,j,C.R,A.jE(t,A.o(u?"\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629":"\u062e\u0644\u0635\u062a",r,r,r,r,C.cB,r,r,r),new B.bmN(s,o),A.jF(C.q,C.a4,D.oV,r,r,r,r))],m))}else if(n!=null){j=p?new B.bmO(s,n):r
if(!p)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
else v=n===s.a.d?"\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0633\u0645\u064a\u0639":"\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+E.aZ(n)
q.push(A.jE(D.ad4,A.o(v,r,r,r,r,C.cB,r,r,r),j,A.jF(C.q,C.a4,D.oV,r,r,r,r)))}if(s.r.a!==0&&k)q.push(D.ayS)
if(i){k=s.a
k=x===k.e-k.d+1
j=k?G.bY:D.cW
v=k?C.mV:C.kF
if(k)k="\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713 \u0633\u0645\u0651\u0639\u062a\u0647\u0645 \u0643\u0644\u0647\u0645 \u0635\u062d"
else{k=E.aZ(x)
u=s.a
u=k+" \u0645\u0646 "+E.aZ(u.e-u.d+1)+" \u0622\u064a\u0627\u062a \u0645\u0638\u0628\u0648\u0637\u0629"
k=u}u=s.a
u=x===u.e-u.d+1?"\u0631\u0628\u0646\u0627 \u064a\u062b\u0628\u0651\u062a\u0647\u0627 \u0641\u064a \u0642\u0644\u0628\u0643.":"\u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0641\u064a\u0647\u0627 \u0623\u0644\u0648\u0627\u0646 \u0648\u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a."
C.b.E(q,A.a([new B.Ae(j,v,k,u,r),A.f6(D.ae7,D.aYs,s.gaJf(),r)],m))}q.push(C.R)
q.push(D.wX)
return M.vC(r,q,"\u0633\u0645\u0651\u0639 "+l)},
aNh(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.f.h(0,d),i=l.w.h(0,d)
if(l.e===d)x=D.acL
else if(l.r.m(0,d))x=O.oW
else if(i!=null)x=D.acU
else if(j!=null){w=j.gqk()?C.d7:D.aaC
x=A.c7(w,j.gqk()?G.bY:D.cW,k,k)}else x=D.ac3
w=y.p
v=A.a([A.al(A.a([A.o("\u0622\u064a\u0629 "+E.aZ(d),k,k,k,k,D.aQi,k,k,k),C.dv,x],w),C.j,C.f,C.h,0,k)],w)
if(i!=null)v.push(A.o(i,k,k,k,k,D.Uu,k,k,k))
if(j!=null&&!j.gqk()){u=y.R
t=A.a([],u)
for(s=j.a,r=0;r<s.length;++r){q=s[r]
p=j.gGA()
o=J.br(p)
n=o.h(p,r)
A:{if(D.h1===n){m=G.bY
break A}if(D.ps===n){m=D.cW
break A}if(D.pt===n){m=D.dB
break A}m=C.eU
break A}m=D.i8.aSq(m,o.h(p,r)===D.pu?C.p2:k,22)
C.b.E(t,A.a([new A.f_(q.a,k,k,C.bd,k,k,k,k,k,k,m),L.wf],u))}w=A.a([C.aS,A.Q1(A.dQ(t,k,k,k,k,k,k,k,k,k,k),k,C.ac,C.aN)],w)
if(C.c.ap(j.c).length===0)w.push(D.aW2)
C.b.E(v,w)}return new E.cT(A.af(v,C.ak,C.f,C.h),C.eY,C.ev,k,!1,k)}}
B.zY.prototype={
V(){return new B.Wm($.IC())}}
B.Wm.prototype={
ab(){this.ar()
var x=this.d
x.a4(this.gn0())
x.XC()},
v6(){if(this.c!=null)this.t(new B.bmp())},
l(){this.d.R(this.gn0())
this.aq()},
C(d){var x,w,v,u,t,s=this,r=null,q=s.d.c,p=q.galZ(),o=A.a([],y.t)
for(x=78;x<=114;++x)o.push(x)
w=C.b.nk(o,0,new B.bmw(q))
v=C.b.nk(o,0,new B.bmx())
o=y.p
o=A.a([A.al(A.a([A.aS(s.Q1(E.aZ(q.gah7()),"\u0622\u064a\u0629 \u0645\u062d\u0641\u0648\u0638\u0629"),1),C.aq,A.aS(s.Q1(E.aZ(q.adX()),"\u064a\u0648\u0645 \u0648\u0631\u0627 \u0628\u0639\u0636"),1),C.aq,A.aS(s.Q1(E.aZ(q.e),"\u0623\u0637\u0648\u0644 \u0633\u0644\u0633\u0644\u0629"),1)],o),C.j,C.f,C.h,0,r),C.R,new E.cT(A.af(A.a([A.o("\u062c\u0632\u0621 \u0639\u0645\u0651: "+E.aZ(C.d.an(w*100/v))+"\u066a",r,r,r,r,F.aZ,r,r,r),C.P,A.mT(A.ac(6),A.Dc(C.e1,G.bY,8,w/v),C.bq),C.aS,A.o(E.aZ(w)+" \u0645\u0646 "+E.aZ(v)+" \u0622\u064a\u0629",r,r,r,r,F.ag,r,r,r)],o),C.z,C.f,C.h),C.ad,C.ay,r,!1,r)],o)
if(p.length===0)o.push(D.az0)
for(u=p.length,t=0;t<p.length;p.length===u||(0,A.B)(p),++t)o.push(s.aNj(p[t]))
o.push(C.S)
u=$.a9().b
u===$&&A.b()
u=u.gc_().e.a
o.push(A.o((u==null?r:u.r)!=null?"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643 \u0648\u064a\u0638\u0647\u0631 \u0639\u0644\u0649 \u0623\u064a \u062c\u0647\u0627\u0632 \u062a\u062f\u062e\u0644 \u0645\u0646\u0647.":"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647. \u0633\u062c\u0651\u0644 \u062f\u062e\u0648\u0644 \u0639\u0634\u0627\u0646 \u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643.",r,r,r,r,F.ag,r,r,r))
return M.vC(r,o,"\u062a\u0642\u062f\u0651\u0645\u064a \u0641\u064a \u0627\u0644\u062d\u0641\u0638")},
Q1(d,e){var x=null
return new E.cT(A.af(A.a([A.o(d,x,x,x,x,D.aQ4,x,x,x),A.o(e,x,x,x,x,C.UK,C.ac,x,x)],y.p),C.j,C.f,C.h),C.ad,C.G,x,!1,x)},
aNj(d){var x=null,w=this.d.c,v=I.c1[d-1].a[1],u=w.Y8(d),t=w.aXk(d),s=y.p,r=A.al(A.a([A.aS(A.o(H.jt(d),x,x,x,x,F.aZ,x,x,x),1),A.o(E.aZ(C.d.an(u*100/v))+"\u066a",x,x,x,x,D.aQW,x,x,x)],s),C.j,C.f,C.h,0,x),q=A.mT(A.ac(6),A.Dc(C.e1,G.bY,7,u/v),C.bq),p=E.aZ(u),o=E.aZ(v),n=t>0?" \u2022 \u0628\u062a\u0631\u0627\u062c\u0639 "+E.aZ(t):""
return new E.cT(A.af(A.a([r,C.P,q,C.aS,A.o("\u0645\u062d\u0641\u0648\u0638 "+p+" \u0645\u0646 "+o+n,x,x,x,x,F.ag,x,x,x)],s),C.z,C.f,C.h),C.ad,C.ay,new B.bmv(this,d),!1,x)},
HC(d){return this.avB(d)},
avB(d){var x=0,w=A.n(y.H),v=this,u,t
var $async$HC=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=I.c1[d-1].a[1]
t=v.c
t.toString
x=2
return A.d(A.fv(C.d6,new B.bmu(v,d,u),t,!0,null,null,!1,y.H),$async$HC)
case 2:return A.l(null,w)}})
return A.m($async$HC,w)}}
B.ab7.prototype={
Ke(d,e){var x=null,w=A.zF(x,x,x,x,x,x,x,x,x,x,x,D.aKd,C.G,x,x,x,x,C.l2,x,x)
return A.bO(A.o(d,x,x,x,x,C.jD,x,x,x),x,x,x,new B.aTA(e),x,w)},
C(d){var x=this,w=y.p
return new E.cT(A.af(A.a([D.aXW,C.P,D.aYQ,A.es(A.a([x.Ke("tarteel-ai/whisper-base-ar-quran","https://huggingface.co/tarteel-ai/whisper-base-ar-quran"),x.Ke("iqbalaesthetic/Basira","https://huggingface.co/iqbalaesthetic/Basira")],w),C.b6,0,12),D.aTf,x.Ke("tanzil.net","https://tanzil.net"),D.aZE,x.Ke("everyayah.com","https://everyayah.com")],w),C.z,C.f,C.h),C.ad,C.ay,null,!1,null)}}
B.A0.prototype={
V(){return new B.Wp()}}
B.Wp.prototype={
ga8B(){var x=this.a
return B.c6m(x.c,x.d,$.bzw().DS())},
Kg(){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k
var $async$Kg=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.t(new B.bns(s))
v=3
r=A.btq()
n=s.ga8B()
m=y.N
q=A.x(m,m)
J.fN(q,"app","masjid")
J.fN(q,"path","tutor \u203a "+s.a.d)
if(r!=null){m=r.length>160?C.c.Y(r,0,160):r
J.fN(q,"ua",m)}x=6
return A.d(A.a24(n,null,C.Ai,q),$async$Kg)
case 6:if(s.c!=null)s.t(new B.bnt(s))
t.push(5)
x=4
break
case 3:v=2
k=u.pop()
p=A.Y(k)
o=p instanceof A.d6?p.a:"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0628\u0639\u062a \u2014 \u0627\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0646\u062a \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
if(s.c!=null)s.t(new B.bnu(s,o))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.t(new B.bnv(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Kg,w)},
C(d){var x,w,v,u=this,t=null,s=y.p
s=A.a([A.dk(!1,t,!0,new A.a4(C.zK,A.al(A.a([A.c7(u.d?C.tw:C.kC,C.c5,t,18),C.fQ,D.aZd],s),C.j,C.f,C.h,0,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,new B.bnx(u),t,t,t,t,t,t,t)],s)
if(u.d){x=A.ac(8)
s.push(A.aA(t,A.EU(u.ga8B(),D.aN0,t,C.o),C.m,t,t,new A.as(L.qC,t,t,x,t,t,C.r),t,t,D.a7x,C.ew,t,t,1/0))}if(u.f)s.push(D.aTm)
else{x=A.zF(t,t,t,t,t,t,t,t,t,t,t,C.Tl,C.G,t,t,t,t,C.l2,t,t)
w=u.e
v=w?t:u.gaNi()
s.push(A.hn(w?D.aKB:D.adO,D.aXo,v,x))}x=u.r
if(x!=null)s.push(A.o(x,t,t,t,t,D.Uu,t,t,t))
return new A.a4(C.ay,A.af(s,C.z,C.f,C.h),t)}}
var z=a.updateTypes(["ab<~>()","~()","A(mu)","ab<FP>()","ab<FN>()","ab<FO>()","R<mu>()","A(pT)","bl(nt)","A_(z)","zY(z)","A(lT)","zZ(z)","A(Ev)"])
B.aVM.prototype={
$1(d){var x,w
if(d.m(0,C.A)){x=this.a
if(x.fy===D.jK)x=null
else{x=x.gp_().k3
x=A.az(31,x.v()>>>16&255,x.v()>>>8&255,x.v()&255)}return x}x=this.a
if(x.fy===D.jK)x=null
else{x=x.gp_()
w=x.p3
x=w==null?x.k2:w}return x},
$S:24}
B.aTB.prototype={
$0(){var x=0,w=A.n(y.m),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=A.aa(A.co(b.G.document).baseURI)
q=A.bU(r,0,null).W("quran_tutor/tutor.js?v=3").j(0)
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
m=B.bXa("network",A.f(o))
throw A.p(m)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:231}
B.aTE.prototype={
$1(d){var x=null
return A.bpm(A.ce(d,"persist",x,x,x,x))},
$S:907}
B.aTD.prototype={
$0(){var x=0,w=A.n(y.C),v,u=this,t,s,r,q,p,o,n,m,l
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.a
n=A
m=A
l=A
x=4
return A.d(q.pe(),$async$$0)
case 4:x=3
return A.d(n.dY(m.co(l.ce(e,"loadModel",A.bpT(new B.aTC(u.b)),u.c,u.d,null)),y.m),$async$$0)
case 3:p=e
o=A.W(p.device)
if(o==null)o=null
if(o==null)o=""
t=A.W(p.dtype)
if(t==null)t=null
if(t==null)t=""
s=q.pd(p,"ms")
r=q.mP(p,"cached")
A.W(p.backend)
v=new B.FN(o,t,s,r,q.pd(p,"threads"),q.mP(p,"isolated"),q.pd(p,"warmMs"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+4}
B.aTC.prototype={
$2(d,e){this.a.$2(C.d.an(d),C.d.an(e))},
$S:908}
B.aTI.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=v.a
s=t.a
x=s==null?2:3
break
case 2:x=4
return A.d(t.pe(),$async$$0)
case 4:s=e
case 3:u={}
u.maxMs=C.e.bc(v.b.a,1000)
u.autoStop=v.c
u.minMs=C.e.bc(v.d.a,1000)
u.onLevel=A.f1(new B.aTG(v.e))
u.onAutoStop=A.f1(new B.aTH(v.f))
x=5
return A.d(A.dY(A.co(A.ce(s,"startRecording",u,null,null,null)),y.O),$async$$0)
case 5:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.aTG.prototype={
$1(d){return this.a.$1(d)},
$S:57}
B.aTH.prototype={
$1(d){return this.a.$1(d)},
$S:9}
B.aTJ.prototype={
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
return A.d(t.pe(),$async$$0)
case 7:x=5
break
case 6:e=s
case 5:x=3
return A.d(q.dY(p.co(o.ce(e,"stopRecording",null,null,null,null)),y.m),$async$$0)
case 3:r=e
v=new B.FO(r,A.dg(r.seconds))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+5}
B.aTL.prototype={
$0(){var x=0,w=A.n(y._),v,u=this,t,s,r,q,p,o
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.b.a
s=u.a
r=s
q=A
p=A
o=A
x=4
return A.d(s.pe(),$async$$0)
case 4:x=3
return A.d(q.dY(p.co(o.ce(e,"transcribe",t.audio,t.rate,s.a7w(u.c),null)),y.m),$async$$0)
case 3:v=r.aaD(e)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+3}
B.aTK.prototype={
$0(){var x=0,w=A.n(y._),v,u=this,t,s,r,q,p
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t
r=A
q=A
p=A
x=4
return A.d(t.pe(),$async$$0)
case 4:x=3
return A.d(r.dY(q.co(p.ce(e,"transcribeUrl",u.b,t.a7w(u.c),null,null)),y.m),$async$$0)
case 3:v=s.aaD(e)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+3}
B.aTF.prototype={
$1(d){return d},
$S:31}
B.aL8.prototype={
$0(){var x,w,v,u,t=this.a,s=A.c3(t.a.length,D.pu,!1,y.G)
for(t=t.b,x=t.length,w=0;w<x;++w){v=t[w]
u=v.a
if(u!=null)s[u]=v.d}return s},
$S:z+6}
B.aL7.prototype={
$1(d){return d===D.h1},
$S:z+2}
B.bpO.prototype={
$2(d,e){var x,w=e.length
if(d.length<w)return!1
for(x=0;x<w;++x)if(B.bug(e[x],d[x])<0.75)return!1
return!0},
$S:909}
B.brh.prototype={
$1(d){return d.length!==0},
$S:12}
B.aTO.prototype={
$1(d){return d.a===D.dY},
$S:z+7}
B.aTP.prototype={
$1(d){return C.e.bc(d,1000)},
$S:64}
B.aTM.prototype={
$1(d){return C.d.bT(d)},
$S:910}
B.aTQ.prototype={
$0(){var x=0,w=A.n(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$$0=A.j(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d(A.i3("mt.tutor.settings"),$async$$0)
case 7:r=a3
if(r!=null){k=y.P.a(C.a_.eS(r,null))
j=A.bK(k.h(0,"n"))
j=j==null?null:C.d.bT(j)
j=C.e.cw(j==null?2:j,1,5)
i=C.b.m(D.Ch,k.h(0,"r"))?A.et(k.h(0,"r")):1
h=A.hr(k.h(0,"auto"))
g=A.hr(k.h(0,"hide"))
k=A.hr(k.h(0,"in"))
s.a.b=new B.QC(j,i,h!==!1,g===!0,k===!0)}u=2
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
return A.d(A.i3("mt.tutor.progress"),$async$$0)
case 12:q=a3
if(q!=null)s.a.c=B.bxf(y.P.a(C.a_.eS(q,null)))
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
return A.d(A.i3("mt.tutor.last"),$async$$0)
case 17:p=a3
if(p!=null){o=y.P.a(C.a_.eS(p,null))
n=C.d.bT(A.dl(J.b5(o,"s")))
m=C.d.bT(A.dl(J.b5(o,"f")))
l=C.d.bT(A.dl(J.b5(o,"t")))
if(B.bKK(n,m)&&B.bKK(n,l)&&m<=l)s.a.z=new A.bJ(n,m,l)}u=2
x=16
break
case 14:u=13
a0=t.pop()
x=16
break
case 13:x=2
break
case 16:k=s.a
if(k.b.e&&k.a.a_X()){k.a.aeJ()
x=1
break}a1=k
x=18
return A.d(k.a.GW(),$async$$0)
case 18:a1.d=a3
k.e=!0
k.X()
if(k.b.e)k.zt()
k.un()
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:102}
B.aTR.prototype={
$2(d,e){var x=this.a
x.r=d
x.w=e
x.X()},
$S:911}
B.aTS.prototype={
$2(d,e){return C.e.bc(A.eu(A.f(d),null,null),1000)===this.a},
$S:912}
B.bf0.prototype={
$1(d){var x=0,w=A.n(y.a),v=this,u,t
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.d(u.d.a.AC(),$async$$1)
case 2:t=f
if(u.c!=null)u.t(new B.bf_(u,t))
return A.l(null,w)}})
return A.m($async$$1,w)},
$S:913}
B.bf_.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bf1.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.beZ(x,d))},
$S:z+8}
B.beZ.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bf2.prototype={
$1(d){},
$S:22}
B.beN.prototype={
$0(){},
$S:0}
B.beT.prototype={
$1(d){var x=this.c,w=this.a.w
w.toString
return new B.A_(this.b,x.a,x.b,w,null)},
$S:z+9}
B.beU.prototype={
$0(){},
$S:0}
B.beX.prototype={
$0(){var x=y.z
return A.ak(this.a,!1).cr(A.cm(new B.beW(),null,x),x)},
$S:0}
B.beW.prototype={
$1(d){return D.b_i},
$S:z+10}
B.beY.prototype={
$0(){return B.bKv(this.a)},
$S:0}
B.beQ.prototype={
$0(){var x=this.b
return this.a.v7(x.a,x.b,x.c)},
$S:0}
B.beR.prototype={
$1(d){return this.a.t(new B.beP())},
$S:9}
B.beP.prototype={
$0(){},
$S:0}
B.beS.prototype={
$0(){var x=this.a
return x.t(new B.beO(x))},
$S:0}
B.beO.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.beV.prototype={
$0(){return this.a.aNg(this.b)},
$S:0}
B.btd.prototype={
$1(d){return new A.iR(new B.bta(this.a,this.b,this.c),null)},
$S:50}
B.bta.prototype={
$2(d,e){var x,w,v=null,u=this.b,t=new B.btc(u,e),s=this.a,r=new B.btb(s,e),q=A.o(H.jt(this.c),v,v,v,v,C.p6,v,v,v),p=A.o("\u0647\u062a\u0633\u0645\u0651\u0639 \u0623\u0646\u0647\u064a \u0622\u064a\u0627\u062a\u061f ("+E.aZ(u)+" \u0622\u064a\u0629)",v,v,v,v,F.ag,v,v,v),o=y.p,n=A.a([],o)
if(u<=30)n.push(r.$3("\u0627\u0644\u0633\u0648\u0631\u0629 \u0643\u0644\u0647\u0627",1,u))
x=u<5
w=E.aZ(x?u:5)
x=x?u:5
n.push(r.$3("\u0623\u0648\u0644 "+w+" \u0622\u064a\u0627\u062a",1,x))
x=s.a
if(x>1){x=E.aZ(x)
w=s.a
n.push(r.$3("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+x,w,C.e.cw(w+4,1,u)))}u=A.a([q,C.aS,p,C.R,A.es(n,C.b6,6,8),C.S,A.al(A.a([t.$3("\u0645\u0646",s.b,new B.bt5(s)),D.aKx,t.$3("\u0644\u062d\u062f",s.c,new B.bt6(s))],o),C.j,C.f,C.h,0,v)],o)
if(s.c-s.b>=10)u.push(D.ayV)
u.push(C.aL)
u.push(A.jD(D.aUB,new B.bt7(s,d),A.jF(C.q,C.a4,D.aKo,v,v,v,v)))
return A.dL(!0,new A.a4(C.zQ,A.af(u,C.ak,C.f,C.Y),v),C.G,!0)},
$S:226}
B.btc.prototype={
$3(d,e,f){var x,w,v,u=null,t=A.o(d,u,u,u,u,C.ia,u,u,u),s=A.a([],y.I)
for(x=this.a,w=y.r,v=1;v<=x;++v)s.push(new A.cZ(v,A.o("\u0622\u064a\u0629 "+E.aZ(v),u,u,u,u,u,u,u,u),C.aB,u,w))
return A.aS(A.af(A.a([t,S.Ck(C.d6,!0,s,320,new B.bt9(this.b,f),D.aRd,e,y.S)],y.p),C.z,C.f,C.h),1)},
$S:915}
B.bt9.prototype={
$1(d){return d==null?null:this.a.$1(new B.bt8(this.b,d))},
$S:53}
B.bt8.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.btb.prototype={
$3(d,e,f){var x=null
return new B.Ys(A.o(d,x,x,x,x,x,x,x,x),new B.bt4(this.a,this.b,e,f),x)},
$S:916}
B.bt4.prototype={
$0(){var x=this
return x.b.$1(new B.bt3(x.a,x.c,x.d))},
$S:0}
B.bt3.prototype={
$0(){var x=this.a
x.b=this.b
x.c=this.c},
$S:0}
B.bt5.prototype={
$1(d){var x=this.a
x.b=d
if(x.c<d)x.c=d},
$S:32}
B.bt6.prototype={
$1(d){var x=this.a
x.c=d
if(x.b>d)x.b=d},
$S:32}
B.bt7.prototype={
$0(){var x=this.a
return A.ak(this.b,!1).bi(new A.Q(x.b,x.c))},
$S:0}
B.bmP.prototype={
$0(){},
$S:0}
B.bn4.prototype={
$0(){var x=this.a
x.e=this.b
x.f=D.jR
x.w=x.r=null
x.x=!1
x.ch=x.ax=x.as=null},
$S:0}
B.bn8.prototype={
$0(){var x=this.a
return x.f=x.r!=null?D.h7:D.jR},
$S:0}
B.bn9.prototype={
$0(){var x=this.a
x.f=D.pF
x.as=null},
$S:0}
B.bna.prototype={
$0(){var x=this.a
x.f=this.b
if(!this.c&&x.as==null)x.as=null},
$S:0}
B.bnc.prototype={
$0(){var x=this.a
x.f=D.pG
x.as=null
x.y=0
x.z=new A.b6(Date.now(),0,!1)
x.ax=null},
$S:0}
B.bnd.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bnb())},
$S:40}
B.bnb.prototype={
$0(){},
$S:0}
B.bnf.prototype={
$1(d){return this.a.y=d},
$S:57}
B.bne.prototype={
$1(d){return this.a.y7()},
$S:9}
B.bng.prototype={
$0(){var x,w=this.a
w.f=w.r!=null?D.h7:D.jR
x=this.b
w.as=B.Iv(x)
w.at=x},
$S:0}
B.bni.prototype={
$0(){var x=this.a
x.f=D.lI
x.ay=Date.now()},
$S:0}
B.bnj.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bnh())},
$S:40}
B.bnh.prototype={
$0(){},
$S:0}
B.bn3.prototype={
$0(){var x=this.a
x.f=x.r!=null?D.h7:D.jR
x.as=this.b
x.at=this.c},
$S:0}
B.bn5.prototype={
$0(){var x=this.b
x.r=this.c
x.w=this.a.a
x.f=D.h7
x.x=!1},
$S:0}
B.bmX.prototype={
$0(){var x=this.a
x.f=D.lI
x.ay=Date.now()
x.as=null},
$S:0}
B.bmY.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bmW())},
$S:40}
B.bmW.prototype={
$0(){},
$S:0}
B.bmZ.prototype={
$1(d){return d.d!==D.h1},
$S:z+11}
B.bn_.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.bno.prototype={
$0(){return B.bKv(this.a)},
$S:0}
B.bnp.prototype={
$1(d){var x=this.a.d
return x.oQ(x.b.adx(d))},
$S:5}
B.bnq.prototype={
$0(){var x=y.z
return A.ak(this.b,!1).cr(A.cm(new B.bnn(this.a),null,x),x)},
$S:0}
B.bnn.prototype={
$1(d){var x=this.a.a
return new B.zZ(x.c,x.d,x.e,x.f,null)},
$S:z+12}
B.bnr.prototype={
$0(){this.a.d.a.b0r()
this.b.U(y.q).f.bd(D.aL2)},
$S:0}
B.bn2.prototype={
$2(d,e){return C.bI},
$S:48}
B.bn1.prototype={
$2(d,e){var x,w,v,u=null,t=this.a,s=t.a,r=s.d+e
switch(t.d.c.Yh(s.c,r).a.a){case 2:s=G.bY
break
case 1:s=D.cW
break
case 0:s=N.hi
break
default:s=u}x=A.ac(18)
w=t.f===D.lI?u:new B.bn0(t,r)
v=s.bJ(0.25)
if(r===t.gi4())s=C.i
s=A.cX(s,r===t.gi4()?2:1)
return A.dk(!1,x,!0,A.aA(C.V,A.o(E.aZ(r),u,u,u,u,D.aOe,u,u,u),C.m,u,u,new A.as(v,u,s,u,u,u,C.cx),u,u,u,u,u,u,36),u,!0,u,u,u,u,u,u,u,u,u,u,w,u,u,u,u,u,u,u)},
$S:127}
B.bn0.prototype={
$0(){return this.a.RQ(this.b)},
$S:0}
B.bn7.prototype={
$0(){var x=this.a
return x.t(new B.bn6(x))},
$S:0}
B.bn6.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bnk.prototype={
$1(d){return d===D.ps},
$S:z+2}
B.bnl.prototype={
$1(d){return d===D.pt},
$S:z+2}
B.bnm.prototype={
$1(d){return d===D.pu},
$S:z+2}
B.bmQ.prototype={
$0(){var x=this.b!=null&&!this.c?1:null
return this.a.Kf(x)},
$S:0}
B.bmR.prototype={
$1(d){var x=this.a.d
return x.oQ(x.b.aRW(d.ga7(d)))},
$S:105}
B.bmT.prototype={
$1(d){return d.m(0,C.E)?C.a4:C.i},
$S:4}
B.bmS.prototype={
$1(d){return d.m(0,C.E)?C.q:C.O},
$S:4}
B.bmU.prototype={
$0(){var x=this.a
return x.RQ(x.gi4()+1)},
$S:0}
B.bmV.prototype={
$0(){var x=this.a
return x.RQ(x.gi4()+1)},
$S:0}
B.bmy.prototype={
$0(){},
$S:0}
B.bmH.prototype={
$0(){var x=this.a
x.e=this.b
x.Q=null
x.x=0
x.z=new A.b6(Date.now(),0,!1)},
$S:0}
B.bmI.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bmG())},
$S:40}
B.bmG.prototype={
$0(){},
$S:0}
B.bmK.prototype={
$1(d){return this.a.x=d},
$S:57}
B.bmJ.prototype={
$1(d){return this.a.Bt(this.b,!1)},
$S:9}
B.bmL.prototype={
$0(){var x,w=this.a
w.e=null
x=this.b
w.Q=B.Iv(x)
w.as=x},
$S:0}
B.bmC.prototype={
$0(){var x=this.a
x.e=null
x.r.D(0,this.b)},
$S:0}
B.bmD.prototype={
$0(){var x,w=this.a,v=this.b
w.r.I(0,v)
x=this.c
w.w.n(0,v,B.Iv(x))
w.as=x},
$S:0}
B.bmE.prototype={
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
return A.d(n.a.aiS(s.b,B.Be(H.Is(l,m,k.ve(l,m)).b).length),$async$$1)
case 6:r=f
l=o.a
k=l.f
l=l.c
q=B.bIM(H.Is(l,m,k.ve(l,m)).b,r.a)
if(C.c.ap(q.c).length!==0){l=n.c
k=o.a.c
j=q.gqk()
l.ahX(k,m,n.b.a,j)}n.wQ()
if(o.c!=null)o.t(new B.bmz(o,m,q))
t.push(5)
x=4
break
case 3:v=2
h=u.pop()
o=A.Y(h)
if(o instanceof B.kF){p=o
o=s.a
if(o.c!=null)o.t(new B.bmA(o,s.c,p))}else throw h
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
o=s.a
if(o.c!=null)o.t(new B.bmB(o,s.c))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$$1,w)},
$S:142}
B.bmz.prototype={
$0(){var x=this.c
this.a.f.n(0,this.b,x)
return x},
$S:0}
B.bmA.prototype={
$0(){var x=this.a,w=this.c
x.w.n(0,this.b,B.Iv(w))
x.as=w},
$S:0}
B.bmB.prototype={
$0(){return this.a.r.I(0,this.b)},
$S:0}
B.bmF.prototype={
$0(){var x=this.a
x.f.ah(0)
x.w.ah(0)
x.as=null},
$S:0}
B.bmM.prototype={
$1(d){return d.gqk()},
$S:z+13}
B.bmN.prototype={
$0(){return this.a.Bt(this.b,!0)},
$S:0}
B.bmO.prototype={
$0(){return this.a.CZ(this.b)},
$S:0}
B.bmp.prototype={
$0(){},
$S:0}
B.bmw.prototype={
$2(d,e){return d+this.a.Y8(e)},
$S:104}
B.bmx.prototype={
$2(d,e){return d+I.c1[e-1].a[1]},
$S:104}
B.bmv.prototype={
$0(){return this.a.HC(this.b)},
$S:0}
B.bmu.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.b,o=A.o(H.jt(p),q,q,q,q,C.p6,q,q,q),n=y.p,m=A.a([],n)
for(x=this.c,w=this.a,v=w.d,u=p*1000,t=1;t<=x;++t){s=new A.bb(10,10)
r=v.c.a.h(0,u+t)
switch((r==null?$.pI():r).a.a){case 2:r=G.bY.bJ(0.35)
break
case 1:r=D.cW.bJ(0.35)
break
case 0:r=C.yI
break
default:r=q}m.push(A.aA(C.V,A.o(E.aZ(t),q,q,q,q,K.Ui,q,q,q),C.m,q,q,new A.as(r,q,q,new A.dh(s,s,s,s),q,q,C.r),q,38,q,q,q,q,38))}return A.dL(!0,new A.a4(C.iF,A.af(A.a([o,C.aS,D.aWt,C.R,new A.em(D.Yx,A.hW(A.es(m,C.b6,6,6),q,C.t,q,q,C.w),q),C.ar,A.bO(D.aXp,q,q,q,new B.bmt(w,d,p),q,q)],n),C.ak,C.f,C.Y),q),C.G,!0)},
$S:52}
B.bmt.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.b
t=v.c
x=4
return A.d(A.ev(null,new B.bms(t),u,y.y),$async$$0)
case 4:x=e===!0?2:3
break
case 2:x=5
return A.d(v.a.d.Fq(t),$async$$0)
case 5:if(u.e!=null)A.ak(u,!1).ev()
case 3:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.bms.prototype={
$1(d){var x=null,w=A.o("\u0647\u062a\u0628\u062f\u0623 "+H.jt(this.a)+" \u0645\u0646 \u0627\u0644\u0623\u0648\u0644.",x,x,x,x,x,x,x,x)
return A.ey(A.a([A.bO(C.wz,x,x,x,new B.bmq(d),x,x),A.bO(D.aYP,x,x,x,new B.bmr(d),x,x)],y.p),w,D.aYi)},
$S:19}
B.bmq.prototype={
$0(){A.ak(this.a,!1).bi(!1)
return null},
$S:0}
B.bmr.prototype={
$0(){A.ak(this.a,!1).bi(!0)
return null},
$S:0}
B.btW.prototype={
$1(d){var x=this.a
return new A.jJ(new B.btV(x),null,x,null)},
$S:917}
B.btV.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.a,r=s.b,q=A.a([],y.n)
for(x=y.c,w=1;w<=5;++w)q.push(new A.ep(w,t,A.o(E.aZ(w),t,t,t,t,t,t,t,t),x))
x=y.S
v=y.b
u=y.p
x=A.a([D.aTd,C.ar,D.aXF,C.P,A.vf(new B.btQ(s,r),q,A.cR([r.a],x),!1,A.jw(t,t,t,new A.b3(new B.btR(),v),t,t,t,t,new A.b3(new B.btS(),v),t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),x),C.S,A.rm(C.q,C.G,t,new B.btT(s,r),D.aW6,D.aZm,r.c),A.rm(C.q,C.G,t,new B.btU(s,r),t,D.aSX,r.d)],u)
s=s.x
if(s!=null)C.b.E(x,A.a([C.aS,A.o("\u0627\u0644\u0645\u0639\u0627\u0644\u062c: "+s.gly(),t,t,t,t,F.ag,t,C.aN,t)],u))
x.push(C.S)
x.push(D.Ve)
return A.dL(!0,A.hW(A.af(x,C.ak,C.f,C.h),t,C.t,C.iF,t,C.w),C.G,!0)},
$S:918}
B.btQ.prototype={
$1(d){return this.a.oQ(this.b.aRT(d.ga7(d)))},
$S:105}
B.btS.prototype={
$1(d){return d.m(0,C.E)?C.a4:C.i},
$S:4}
B.btR.prototype={
$1(d){return d.m(0,C.E)?C.q:C.O},
$S:4}
B.btT.prototype={
$1(d){return this.a.oQ(this.b.aRm(d))},
$S:5}
B.btU.prototype={
$1(d){return this.a.oQ(this.b.adx(d))},
$S:5}
B.aTA.prototype={
$0(){return A.eF(A.bU(this.a,0,null),C.c_,null)},
$S:0}
B.bu9.prototype={
$1(d){var x,w=A.aP("https?://",!0,!1)
w=A.bS(d,w,"")
x=A.aP("www\\.",!0,!1)
return A.Bf(A.bS(w,x,"www[.]"),A.aP("([A-Za-z0-9-]+)\\.(com|net|org|io|xyz|ru|info|me|link)\\b",!1,!1),new B.bua(),null)},
$S:31}
B.bua.prototype={
$1(d){return A.f(d.h(0,1))+"[.]"+A.f(d.h(0,2))},
$S:59}
B.bns.prototype={
$0(){var x=this.a
x.e=!0
x.r=null},
$S:0}
B.bnt.prototype={
$0(){return this.a.f=!0},
$S:0}
B.bnu.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bnv.prototype={
$0(){return this.a.e=!1},
$S:0}
B.bnx.prototype={
$0(){var x=this.a
return x.t(new B.bnw(x))},
$S:0}
B.bnw.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.bu8.prototype={
$1(d){return d==null?"\u2013":A.f(d)},
$S:196};(function installTearOffs(){var x=a._instance_0u
x(B.ab8.prototype,"gaXl","aXm",1)
var w
x(w=B.QD.prototype,"gaXB","zt",0)
x(w,"gaqO","un",0)
x(w=B.Uq.prototype,"gn0","v6",1)
x(w,"gaGx","J2",0)
x(w=B.Wo.prototype,"gn0","v6",1)
x(w,"gaID","Jj",0)
x(w,"gaM4","y7",0)
x(w,"gavk","Hz",0)
x(w=B.Wn.prototype,"gn0","v6",1)
x(w,"gaJf","aJg",1)
x(B.Wm.prototype,"gn0","v6",1)
x(B.Wp.prototype,"gaNi","Kg",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.Ar,[B.aZZ,B.mu,B.Bw,B.Dz,B.AJ])
x(A.a6,[B.Ys,B.DA,B.Sg,B.Ae,B.ab7])
w(B.aVL,A.x8)
x(A.hK,[B.aVM,B.aTE,B.aTG,B.aTH,B.aTF,B.aL7,B.brh,B.aTO,B.aTP,B.aTM,B.bf0,B.bf1,B.bf2,B.beT,B.beW,B.beR,B.btd,B.btc,B.bt9,B.btb,B.bt5,B.bt6,B.bnd,B.bnf,B.bne,B.bnj,B.bmY,B.bmZ,B.bnp,B.bnn,B.bnk,B.bnl,B.bnm,B.bmR,B.bmT,B.bmS,B.bmI,B.bmK,B.bmJ,B.bmE,B.bmM,B.bmu,B.bms,B.btW,B.btQ,B.btS,B.btR,B.btT,B.btU,B.bu9,B.bua,B.bu8])
x(A.N,[B.ab8,B.QE,B.FN,B.FP,B.FO,B.kF,B.NX,B.lT,B.Ev,B.pT,B.ab9,B.QC])
x(A.ke,[B.aTB,B.aTD,B.aTI,B.aTJ,B.aTL,B.aTK,B.aL8,B.aTQ,B.bf_,B.beZ,B.beN,B.beU,B.beX,B.beY,B.beQ,B.beP,B.beS,B.beO,B.beV,B.bt8,B.bt4,B.bt3,B.bt7,B.bmP,B.bn4,B.bn8,B.bn9,B.bna,B.bnc,B.bnb,B.bng,B.bni,B.bnh,B.bn3,B.bn5,B.bmX,B.bmW,B.bn_,B.bno,B.bnq,B.bnr,B.bn0,B.bn7,B.bn6,B.bmQ,B.bmU,B.bmV,B.bmy,B.bmH,B.bmG,B.bmL,B.bmC,B.bmD,B.bmz,B.bmA,B.bmB,B.bmF,B.bmN,B.bmO,B.bmp,B.bmv,B.bmt,B.bmq,B.bmr,B.aTA,B.bns,B.bnt,B.bnu,B.bnv,B.bnx,B.bnw])
x(A.mV,[B.aTC,B.bpO,B.aTR,B.aTS,B.bta,B.bn2,B.bn1,B.bmw,B.bmx,B.btV])
w(B.QD,A.h9)
x(A.P,[B.uV,B.A_,B.zZ,B.zY,B.A0])
x(A.S,[B.Uq,B.Wo,B.Wn,B.Wm,B.Wp])})()
A.o4(b.typeUniverse,JSON.parse('{"Ys":{"a6":[],"e":[]},"kF":{"bm":[]},"A_":{"P":[],"e":[]},"zZ":{"P":[],"e":[]},"zY":{"P":[],"e":[]},"A0":{"P":[],"e":[]},"QD":{"ar":[]},"uV":{"P":[],"e":[]},"Uq":{"S":["uV"]},"DA":{"a6":[],"e":[]},"Sg":{"a6":[],"e":[]},"Wo":{"S":["A_"]},"Ae":{"a6":[],"e":[]},"Wn":{"S":["zZ"]},"Wm":{"S":["zY"]},"ab7":{"a6":[],"e":[]},"Wp":{"S":["A0"]}}'))
var y=(function rtii(){var x=A.a1
return{u:x("pT"),c:x("ep<v>"),r:x("cZ<v>"),k:x("y<lT>"),n:x("y<ep<v>>"),I:x("y<cZ<v>>"),R:x("y<fX>"),Z:x("y<aJ<h,@>>"),d:x("y<NX>"),s:x("y<h>"),p:x("y<e>"),t:x("y<v>"),m:x("bh"),j:x("R<@>"),L:x("R<v>"),P:x("aJ<h,@>"),f:x("aJ<@,@>"),x:x("aj<h,v>"),a:x("bl"),K:x("N"),B:x("Ev"),l:x("+(v,v)"),e:x("cG<lT>"),N:x("h"),C:x("FN"),D:x("FO"),X:x("QE"),_:x("FP"),U:x("aE<h>"),G:x("mu"),q:x("o1"),b:x("b3<H?>"),y:x("A"),i:x("J"),z:x("@"),S:x("v"),A:x("bh?"),Y:x("aJ<@,@>?"),O:x("N?"),M:x("+quota,usage(v,v)?"),o:x("eG"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.lR=new B.Bw(0,"none")
D.lS=new B.Bw(1,"learning")
D.dY=new B.Bw(2,"memorized")
D.Yx=new A.av(0,1/0,0,320)
D.dB=new A.H(1,0.9725490196078431,0.44313725490196076,0.44313725490196076,C.k)
D.YF=new A.as(D.dB,null,null,null,null,null,C.cx)
D.cW=new A.H(1,0.984313725490196,0.7490196078431373,0.1411764705882353,C.k)
D.adm=new A.a0(C.Bb,null,C.c5,null,null,null)
D.aYm=new A.r("\u0627\u0644\u0646\u0635 \u0645\u062e\u0641\u064a \u2014 \u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.ek,null,null,null,null,null,null,null,null)
D.aNu=new A.t(!0,C.eU,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWu=new A.r("(\u062f\u0648\u0633 \u0647\u0646\u0627 \u0644\u0648 \u0639\u0627\u064a\u0632 \u062a\u0628\u0635)",null,D.aNu,null,null,null,null,null,null,null,null)
D.ap2=x([D.adm,C.P,D.aYm,D.aWu],y.p)
D.a4d=new A.j2(C.w,C.f,C.h,C.j,null,C.b1,null,0,D.ap2,null)
D.a7p=new A.Z(0,18,0,18)
D.a7s=new A.Z(0,26,0,26)
D.a7x=new A.Z(0,4,0,6)
D.a7L=new A.Z(14,12,14,14)
D.a8l=new A.Z(3,0,0,0)
D.aaC=new A.a3(63251,"MaterialIcons",null,!1)
D.mX=new A.a3(63677,"MaterialIcons",null,!1)
D.ab8=new A.a3(983256,"MaterialIcons",null,!1)
D.ab6=new A.a3(983209,"MaterialIcons",null,!1)
D.abB=new A.a0(D.ab6,28,C.q,null,null,null)
D.ac3=new A.a0(C.AZ,null,N.hi,null,null,null)
D.aas=new A.a3(62961,"MaterialIcons",null,!1)
D.acn=new A.a0(D.aas,null,null,null,null,null)
D.aaA=new A.a3(63199,"MaterialIcons",null,!1)
D.aco=new A.a0(D.aaA,null,null,null,null,null)
D.acr=new A.a0(C.iR,null,C.eU,null,null,null)
D.act=new A.a0(C.kG,44,C.i,null,null,null)
D.acL=new A.a0(D.mX,null,D.dB,null,null,null)
D.acU=new A.a0(C.tv,null,D.dB,null,null,null)
D.ad3=new A.a0(C.AU,null,null,null,null,null)
D.ad4=new A.a0(D.mX,null,null,null,null,null)
D.Bx=new A.a0(C.n0,null,null,null,null,null)
D.adk=new A.a0(C.kD,20,D.cW,null,null,null)
D.adx=new A.a0(C.mZ,30,C.q,null,null,null)
D.adO=new A.a0(C.n_,16,C.q,null,null,null)
D.aaP=new A.a3(63520,"MaterialIcons",null,!1)
D.ae0=new A.a0(D.aaP,null,null,null,null,null)
D.ae7=new A.a0(C.kF,null,null,null,null,null)
D.aao=new A.a3(62842,"MaterialIcons",null,!0)
D.aec=new A.a0(D.aao,null,null,null,null,null)
D.Ch=x([1,3,5],y.t)
D.D4=x(["\u0627\u0639\u0648\u0630","\u0628\u0627\u0644\u0644\u0647","\u0645\u0646","\u0627\u0644\u0634\u064a\u0637\u0627\u0646","\u0627\u0644\u0631\u062c\u064a\u0645"],y.s)
D.azi=new A.a4(C.kv,T.qh,null)
D.amO=x([D.azi],y.p)
D.aCy=new A.Q(C.iT,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0629 \u0628\u0635\u0648\u062a \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062d\u0635\u0631\u064a (\u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645) \u0645\u0631\u0629 \u0623\u0648 \u0663 \u0623\u0648 \u0665 \u0645\u0631\u0627\u062a.")
D.aCq=new A.Q(D.mX,"\u0633\u0645\u0651\u0639\u0647\u0627 \u0645\u0646 \u062d\u0641\u0638\u0643 \u2014 \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0644\u0648\u0651\u0646\u0644\u0643 \u0643\u0644 \u0643\u0644\u0645\u0629: \u0623\u062e\u0636\u0631 \u0635\u062d\u060c \u0623\u0635\u0641\u0631 \u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0623\u062d\u0645\u0631 \u063a\u0644\u0637.")
D.aCL=new A.Q(C.hu,"\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0645\u0627 \u062a\u0633\u0645\u0651\u0639\u0647\u0627 \u0635\u062d \u0645\u0631\u062a\u064a\u0646 \u0648\u0631\u0627 \u0628\u0639\u0636 (\u062a\u0642\u062f\u0631 \u062a\u063a\u064a\u0651\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a).")
D.aaW=new A.a3(63625,"MaterialIcons",null,!1)
D.aCU=new A.Q(D.aaW,"\u0643\u0644 \u062f\u0647 \u0628\u064a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u2014 \u0635\u0648\u062a\u0643 \u0645\u0634 \u0628\u064a\u062a\u0631\u0641\u0639 \u0639\u0644\u0649 \u0623\u064a \u0633\u064a\u0631\u0641\u0631.")
D.aok=x([D.aCy,D.aCq,D.aCL,D.aCU],A.a1("y<+(a3,h)>"))
D.aq4=x([D.lR,D.lS,D.dY],A.a1("y<Bw>"))
D.Hx=x(["\u0628\u0633\u0645","\u0627\u0644\u0644\u0647","\u0627\u0644\u0631\u062d\u0645\u0646","\u0627\u0644\u0631\u062d\u064a\u0645"],y.s)
D.awx=new B.Dz(0,"idle")
D.NC=new B.Dz(1,"loading")
D.hM=new B.Dz(2,"ready")
D.awy=new B.Dz(3,"failed")
D.acJ=new A.a0(C.d7,18,G.bY,null,null,null)
D.aZ0=new A.r("\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u062c\u0627\u0647\u0632 \u064a\u0633\u0645\u0639\u0643",null,K.pc,null,null,null,null,null,null,null,null)
D.am1=x([D.acJ,C.bI,D.aZ0],y.p)
D.aI6=new A.iN(C.az,C.f,C.h,C.j,null,C.b1,null,0,D.am1,null)
D.ayE=new A.a4(C.ay,D.aI6,null)
D.a8i=new A.Z(2,6,2,4)
D.aN8=new A.t(!0,C.q,null,null,null,null,14,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTb=new A.r("\u0627\u0628\u062f\u0623 \u0645\u0646 \u0647\u0646\u0627 \u2014 \u0627\u0644\u0641\u0627\u062a\u062d\u0629 \u0648\u062c\u0632\u0621 \u0639\u0645\u0651",null,D.aN8,null,null,null,null,null,null,null,null)
D.ayM=new A.a4(D.a8i,D.aTb,null)
D.aZ8=new A.r("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.ek,null,null,null,null,null,null,null,null)
D.an3=x([O.oW,C.aq,D.aZ8],y.p)
D.aI4=new A.iN(C.az,C.cn,C.h,C.j,null,C.b1,null,0,D.an3,null)
D.ayS=new A.a4(P.rk,D.aI4,null)
D.ws=new A.t(!0,D.cW,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZh=new A.r("\u0646\u0635\u064a\u062d\u0629: \u0627\u062d\u0641\u0638 \u0663\u2013\u0665 \u0622\u064a\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0631\u0629 \u0623\u0633\u0647\u0644.",null,D.ws,null,null,null,null,null,null,null,null)
D.ayV=new A.a4(C.fv,D.aZh,null)
D.aYX=new A.r("\u0644\u0633\u0647 \u0645\u0633\u0645\u0651\u0639\u062a\u0634 \u0623\u064a \u0622\u064a\u0629 \u2014 \u0627\u0628\u062f\u0623 \u0628\u0633\u0648\u0631\u0629 \u0642\u0635\u064a\u0631\u0629 \u0645\u0646 \u062c\u0632\u0621 \u0639\u0645\u0651.",null,F.ag,C.ac,null,null,null,null,null,null,null)
D.az0=new A.a4(C.H,D.aYX,null)
D.a8f=new A.Z(2,0,2,8)
D.aWC=new A.r("\u0627\u0644\u0633\u0648\u0631 \u0627\u0644\u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u060c \u0645\u0646 \u0627\u0644\u0646\u0627\u0633 \u0644\u062d\u062f \u0627\u0644\u0646\u0628\u0623.",null,F.ag,null,null,null,null,null,null,null,null)
D.azd=new A.a4(D.a8f,D.aWC,null)
D.adV=new A.a0(C.ht,30,C.q,null,null,null)
D.aRL=new A.t(!0,C.i,null,null,null,null,17,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZF=new A.r("\u0633\u0645\u0651\u0639\u060c \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0642\u0648\u0644\u0643 \u0635\u062d \u0648\u0644\u0627 \u063a\u0644\u0637",null,D.aRL,null,null,null,null,null,null,null,null)
D.a8V=new A.dG(1,C.aX,D.aZF,null)
D.anf=x([D.adV,C.aY,D.a8V],y.p)
D.aHX=new A.iN(C.az,C.f,C.h,C.j,null,C.b1,null,0,D.anf,null)
D.adE=new A.a0(C.hu,18,G.bY,null,null,null)
D.Ur=new A.t(!0,G.bY,null,null,null,null,12,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYH=new A.r("\u0645\u062d\u0641\u0648\u0638\u0629",null,D.Ur,null,null,null,null,null,null,null,null)
D.amp=x([D.adE,C.fQ,D.aYH],y.p)
D.aI3=new A.iN(C.az,C.f,C.Y,C.j,null,C.b1,null,0,D.amp,null)
D.aKd=new A.G(0,30)
D.oV=new A.G(1/0,54)
D.aKo=new A.G(1/0,48)
D.aKr=new A.G(1/0,50)
D.aKu=new A.G(1/0,52)
D.aKx=new A.cs(16,null,null,null)
D.aKB=new A.cs(14,14,O.yd,null)
D.aXw=new A.r("safe mode / no-gpu flags cleared (reload)",null,null,null,null,null,null,null,null,null,null)
D.aL2=new A.hY(D.aXw,null,null,null,null,null,null,null,null,null,null,null,null,C.D,!1,null,null,null,C.l,null)
D.aMC=new A.t(!0,C.i,null,null,null,null,14.5,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aN0=new A.t(!0,C.a6,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.wl=new A.t(!0,D.dB,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOe=new A.t(!0,C.i,null,null,null,null,12,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.i8=new A.t(!0,C.i,null,"AmiriQuranMT",null,null,27,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPH=new A.t(!0,C.cj,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Uu=new A.t(!0,D.dB,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQ4=new A.t(!0,C.q,null,null,null,null,24,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Uy=new A.t(!0,C.i,null,null,null,null,12.5,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQi=new A.t(!0,C.q,null,null,null,null,null,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQV=new A.t(!0,D.cW,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQW=new A.t(!0,G.bY,null,null,null,null,null,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRd=new A.t(!0,C.i,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSB=new A.r("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u062e\u0631 \u0645\u0631\u0629",null,C.ia,null,null,null,null,null,null,null,null)
D.aSX=new A.r("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643 (\u062e\u0628\u0651\u064a \u0627\u0644\u0646\u0635)",null,C.cP,null,null,null,null,null,null,null,null)
D.aTd=new A.r("\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,C.p6,null,null,null,null,null,null,null,null)
D.aTf=new A.r("\u2022 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641: \u0645\u0634\u0631\u0648\u0639 \u062a\u0646\u0632\u064a\u0644 Tanzil (\u062a\u0631\u062e\u064a\u0635 CC BY 3.0).",null,F.ag,null,null,null,null,null,null,null,null)
D.aOc=new A.t(!0,G.bY,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTm=new A.r("\u0648\u0635\u0644\u062a\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2014 \u0634\u0643\u0631\u064b\u0627\u060c \u0647\u0646\u0628\u0635 \u0639\u0644\u064a\u0647\u0627.",null,D.aOc,null,null,null,null,null,null,null,null)
D.aTp=new A.r("\u062e\u0628\u0651\u064a \u0646\u0635 \u0627\u0644\u0622\u064a\u0629 \u0648\u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,F.ag,null,null,null,null,null,null,null,null)
D.aTv=new A.r("\u0639\u062f\u0651\u064a \u0644\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.ek,null,null,null,null,null,null,null,null)
D.aUc=new A.r("\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0627\u0628\u062f\u0623",null,C.cB,null,null,null,null,null,null,null,null)
D.aUB=new A.r("\u064a\u0644\u0627 \u0646\u0628\u062f\u0623",null,C.cS,null,null,null,null,null,null,null,null)
D.aUF=new A.r("\u0645\u0645\u0643\u0646 \u062a\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 \u062f\u0644\u0648\u0642\u062a\u064a \u0644\u062d\u062f \u0645\u0627 \u064a\u062e\u0644\u0635.",null,F.ag,null,null,null,null,null,null,null,null)
D.aUW=new A.r("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.UJ,null,null,null,null,null,null,null,null)
D.aVj=new A.r("\u062c\u0631\u0651\u0628 \u0639\u0644\u0649 \u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a (\u0644\u0644\u062a\u062c\u0631\u0628\u0629)",null,null,null,null,null,null,null,null,null,null)
D.aVC=new A.r("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643",null,K.ls,null,null,null,null,null,null,null,null)
D.aVY=new A.r("reset safe mode / WebGPU ban",null,P.Ue,null,null,null,null,null,null,null,null)
D.aW2=new A.r("\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629",null,D.ws,null,null,null,null,null,null,null,null)
D.aW6=new A.r("\u0628\u0639\u062f \u062d\u0648\u0627\u0644\u064a \u062b\u0627\u0646\u064a\u0629 \u0633\u0643\u0648\u062a",null,F.ag,null,null,null,null,null,null,null,null)
D.aWl=new A.r("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636",null,F.aZ,null,null,null,null,null,null,null,null)
D.aWt=new A.r("\u0623\u062e\u0636\u0631: \u0645\u062d\u0641\u0648\u0638\u0629 \u2014 \u0623\u0635\u0641\u0631: \u0628\u062a\u0631\u0627\u062c\u0639\u0647\u0627 \u2014 \u0631\u0645\u0627\u062f\u064a: \u0644\u0633\u0647",null,F.ag,null,null,null,null,null,null,null,null)
D.aWD=new A.r("\u0645\u0641\u064a\u0634 \u0633\u0648\u0631\u0629 \u0628\u0627\u0644\u0627\u0633\u0645 \u062f\u0647",null,F.ag,null,null,null,null,null,null,null,null)
D.aRN=new A.t(!0,C.q,null,null,null,null,12.5,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXo=new A.r("\u0627\u0628\u0639\u062a \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aRN,null,null,null,null,null,null,null,null)
D.aPr=new A.t(!0,D.dB,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXp=new A.r("\u0627\u0628\u062f\u0623 \u0627\u0644\u0633\u0648\u0631\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644",null,D.aPr,null,null,null,null,null,null,null,null)
D.aXF=new A.r("\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f \u0643\u0627\u0645 \u062a\u0633\u0645\u064a\u0639 \u0635\u062d \u0648\u0631\u0627 \u0628\u0639\u0636\u061f",null,K.ls,null,null,null,null,null,null,null,null)
D.aMo=new A.t(!0,C.i,null,null,null,null,null,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXW=new A.r("\u0627\u0644\u0645\u0635\u0627\u062f\u0631",null,D.aMo,null,null,null,null,null,null,null,null)
D.aY5=new A.r("\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.cB,null,null,null,null,null,null,null,null)
D.aYi=new A.r("\u062a\u0645\u0633\u062d \u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0633\u0648\u0631\u0629 \u062f\u064a\u061f",null,null,null,null,null,null,null,null,null,null)
D.aYs=new A.r("\u0633\u0645\u0651\u0639\u0647\u0645 \u062a\u0627\u0646\u064a",null,null,null,null,null,null,null,null,null,null)
D.aYP=new A.r("\u0627\u0645\u0633\u062d",null,null,null,null,null,null,null,null,null,null)
D.aYQ=new A.r("\u2022 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: whisper-base-ar-quran \u0645\u0646 Tarteel (\u062a\u0631\u062e\u064a\u0635 Apache-2.0)\u060c \u0628\u0635\u064a\u063a\u0629 ONNX \u0645\u0646 \u0645\u0634\u0631\u0648\u0639 Basira\u060c \u0648\u0628\u064a\u0634\u062a\u063a\u0644 \u062c\u0648\u0651\u0647 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0628\u0645\u0643\u062a\u0628\u0629 Transformers.js.",null,F.ag,null,null,null,null,null,null,null,null)
D.aYR=new A.r("\u062e\u0644\u0635\u062a",null,C.jE,null,null,null,null,null,null,null,null)
D.aYS=new A.r("\u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647 \u0630\u0627\u0643\u0631\u062a\u0647 \u0642\u0644\u064a\u0644\u0629 \u2014 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0645\u0643\u0646 \u064a\u0643\u0648\u0646 \u0628\u0637\u064a\u0621 \u0639\u0644\u064a\u0647.",null,D.ws,null,null,null,null,null,null,null,null)
D.aQk=new A.t(!0,C.cj,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,C.fT,null,null,null,null,null,null,null,null)
D.aZd=new A.r("\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aQk,null,null,null,null,null,null,null,null)
D.aZk=new A.r("\u0623\u0648\u0644 \u0645\u0631\u0629 \u0628\u0633: \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,F.aZ,null,null,null,null,null,null,null,null)
D.aZm=new A.r("\u0648\u0642\u0651\u0641 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0644\u0648\u062d\u062f\u0647 \u0644\u0645\u0627 \u0623\u0633\u0643\u062a",null,C.cP,null,null,null,null,null,null,null,null)
D.aZE=new A.r("\u2022 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: \u0627\u0644\u0634\u064a\u062e \u0645\u062d\u0645\u0648\u062f \u062e\u0644\u064a\u0644 \u0627\u0644\u062d\u0635\u0631\u064a \u2014 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645\u060c \u0645\u0646 everyayah.com.",null,F.ag,null,null,null,null,null,null,null,null)
D.Ve=new B.ab7(null)
D.b_i=new B.zY(null)
D.b_j=new B.QC(2,1,!0,!1,!1)
D.Vf=new B.QE(!1,!1,!1,!1,!1,0)
D.h1=new B.mu(0,"ok")
D.ps=new B.mu(1,"near")
D.pt=new B.mu(2,"wrong")
D.pu=new B.mu(3,"missing")
D.VE=new B.mu(4,"extra")
D.aaL=new A.a3(63456,"MaterialIcons",null,!1)
D.b4G=new B.Ae(D.cW,D.aaL,"\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629","\u0642\u0631\u0651\u0628 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0646\u0643 \u0648\u0627\u0642\u0631\u0627 \u0628\u0635\u0648\u062a \u0648\u0627\u0636\u062d \u0641\u064a \u0645\u0643\u0627\u0646 \u0647\u0627\u062f\u064a\u060c \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a.",null)
D.jK=new B.aZZ(0,"flat")
D.b50=new B.Sg(!1,null)
D.wX=new B.Sg(!0,null)
D.jR=new B.AJ(0,"idle")
D.pF=new B.AJ(1,"playing")
D.pG=new B.AJ(2,"recording")
D.lI=new B.AJ(3,"thinking")
D.h7=new B.AJ(4,"result")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c9k","bzw",()=>new B.ab8())
x($,"ccu","bOf",()=>A.aP("\u0640[\u064b-\u0652]*\u0670",!0,!1))
x($,"ccv","bOg",()=>A.aP("\u0640[\u064b-\u0652]*[\u06e6\u06e7]",!0,!1))
x($,"ccG","bOo",()=>A.aP("\u0648\u0670",!0,!1))
x($,"cc3","bNX",()=>A.aP("[\u0648\u064a\u0649][\u064b-\u0652]*[\u0654]",!0,!1))
x($,"caA","bMZ",()=>A.aP("\u0627[\u0654\u0655]",!0,!1))
x($,"cbH","bNG",()=>A.aP("[\u0654\u0655]",!0,!1))
x($,"caB","bN_",()=>A.aP("[\u0622\u0623\u0625\u0671\u0672\u0673]",!0,!1))
x($,"caH","bN4",()=>A.aP("[\u0624\u0626]",!0,!1))
x($,"cbJ","bNI",()=>A.aP("[\u064b-\u065f\u0670\u06d6-\u06ed\u08d3-\u08ff\u0640]",!0,!1))
x($,"cc8","bO_",()=>A.aP("[\u06dd\u06de\u0660-\u0669\u06f0-\u06f90-9]",!0,!1))
x($,"cbQ","bNO",()=>A.aP("[^\u0621-\u064a\\s]",!0,!1))
x($,"cct","bA6",()=>A.aP("\\s+",!0,!1))
x($,"c6F","pI",()=>B.bPi(D.lR,0,A.bvp(0,!0)))
x($,"c9l","IC",()=>new B.QD($.bzw(),D.b_j,B.bXb(),D.awx,$.a7()))})()};
(a=>{a["gvCU1ABpc5xVnOFZZx8PtzGQrSc="]=a.current})($__dart_deferred_initializers__);