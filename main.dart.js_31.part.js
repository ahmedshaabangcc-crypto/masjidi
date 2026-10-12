((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,Q,S,H,N,G,O,R,T,U,K,L,B={aY4:function aY4(d,e){this.a=d
this.b=e},Xs:function Xs(d,e,f){this.d=d
this.r=e
this.a=f},aUh:function aUh(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4){var _=this
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
_.dy=a4},aUi:function aUi(d){this.a=d},
bTK(d){var x,w,v,u,t,s
if(d instanceof B.kv)return d
try{x=A.co(d)
w=x.code
v=x.message
u=w==null?"failed":A.aa(w)
t=v==null?"":A.aa(v)
return new B.kv(u,t)}catch(s){u=A.f(d)
return new B.kv("failed",u)}},
aa_:function aa_(){this.b=this.a=null},
aSa:function aSa(d){this.a=d},
aSd:function aSd(){},
aSc:function aSc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aSb:function aSb(d){this.a=d},
aSh:function aSh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aSf:function aSf(d){this.a=d},
aSg:function aSg(d){this.a=d},
aSi:function aSi(d){this.a=d},
aSk:function aSk(d,e,f){this.a=d
this.b=e
this.c=f},
aSj:function aSj(d,e,f){this.a=d
this.b=e
this.c=f},
aSe:function aSe(){},
bTL(d,e){return new B.kv(d,e)},
PO:function PO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.w=i},
F7:function F7(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i
_.w=j},
F9:function F9(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
F8:function F8(d,e){this.a=d
this.b=e},
kv:function kv(d,e){this.a=d
this.b=e},
bGD(d){var x,w=$.bL_()
w=A.bM(d,w,"\u0627")
x=$.bL0()
w=A.bM(w,x,"\u064a")
x=$.bL8()
w=A.bM(w,x,"\u0627")
x=$.bJJ()
w=A.bM(w,x,"\u0627")
x=$.bKH()
w=A.bM(w,x,"\u0621")
x=$.bKq()
w=A.bM(w,x,"\u0621")
x=$.bJK()
w=A.bM(w,x,"\u0627")
x=$.bJP()
w=A.bM(w,x,"\u0621")
w=A.bM(w,"\u0649","\u064a")
w=A.bM(w,"\u0629","\u0647")
x=$.bKs()
w=A.bM(w,x,"")
x=$.bKK()
w=A.bM(w,x," ")
x=$.bKy()
w=A.bM(w,x," ")
x=$.bxe()
return C.c.ao(A.bM(w,x," "))},
bYb(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.length,k=e.length
if(l===0)return k
if(k===0)return l
x=k+1
w=y.S
v=J.lb(x,w)
for(u=0;u<x;++u)v[u]=u
t=A.c2(x,0,!1,w)
for(s=1;s<=l;++s,r=t,t=v,v=r){t[0]=s
for(w=s-1,u=1;u<=k;++u){q=u-1
p=d.charCodeAt(w)===e.charCodeAt(q)?0:1
o=v[u]+1
n=t[q]+1
m=v[q]+p
if(o<n)q=o<m?o:m
else q=n<m?n:m
t[u]=q}}return v[k]},
brp(d,e){var x,w,v,u,t,s
if(d===e)return 1
x=A.aP("[\u0627\u0621]",!0,!1)
w=A.bM(d,x,"")
x=A.aP("[\u0627\u0621]",!0,!1)
v=A.bM(e,x,"")
if(w.length!==0&&w===v)return 1
u=d.length
t=e.length
u=u>t?u:t
if(u===0)return 1
s=1-B.bYb(d,e)/u
return s>=1?0.99:s},
AJ(d){var x,w,v,u,t,s,r,q=A.a([],y.d)
for(x=C.c.qk(d,$.bxe()),w=x.length,v=0;v<x.length;x.length===w||(0,A.A)(x),++v){u=x[v]
if(u.length===0)continue
t=B.bGD(u)
s=A.bM(t," ","")
if(s.length===0){if(q.length!==0){r=q.pop()
q.push(new B.N6(r.a+" "+u,r.b))}continue}q.push(new B.N6(u,s))}return q},
bWZ(d,e){var x,w,v,u,t=new B.bn4(),s=A.a([],y.s)
for(x=A.fe(e,0,A.il(5,"count",y.S),A.ad(e).c),w=x.$ti,x=new A.bQ(x,x.gK(0),w.i("bQ<aJ.E>")),w=w.i("aJ.E");x.u();){v=x.d
s.push((v==null?w.a(v):v).b)}u=!t.$2(s,D.Cl)&&t.$2(d,D.Cl)?C.b.iH(d,5):d
return!t.$2(s,D.GN)&&t.$2(u,D.GN)?C.b.iH(u,4):u},
bFI(d,e){var x=B.AJ(d),w=B.bGD(e),v=y.U
v=A.a0(new A.aO(A.a(w.split(" "),y.s),new B.bos(),v),v.i("L.E"))
return new B.DP(x,B.bWc(x,B.bWZ(v,x)),w)},
bWc(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=A.a([],y.s)
for(x=a5.length,w=0;w<a5.length;a5.length===x||(0,A.A)(a5),++w)a4.push(a5[w].b)
v=a4.length
u=a6.length
t=u+1
x=(v+1)*t
s=y.i
r=A.c2(x,0,!1,s)
q=A.c2(x,0,!1,y.S)
p=A.c2(v*(u===0?1:u),0,!1,s)
for(o=0;o<v;++o)for(x=o*u,n=0;n<u;++n)p[x+n]=B.brp(a4[o],a6[n])
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
e=2}if(n>=2&&r[h-2]<g&&B.brp(a4[m],a6[n-2]+a6[n-1])>=1){g=r[h-2]
e=3}if(s&&r[i+n-1]<g&&B.brp(a4[j]+a4[m],a6[n-1])>=1){g=r[i+n-1]
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
if(a2>=1)m=D.fR
else m=a2>=0.6?D.pb:D.pc
a1.push(new B.lO(o,x,s,m))
break
case 1:--o
a1.push(new B.lO(o,a4[o],null,D.pd))
break
case 2:--n
a1.push(new B.lO(null,null,a6[n],D.V5))
break
case 3:--o
a3=n-2
a1.push(new B.lO(o,a4[o],a6[a3]+" "+a6[n-1],D.fR))
n=a3
break
default:x=o-1;--n
a1.push(new B.lO(x,a4[x],a6[n],D.fR))
o-=2
a1.push(new B.lO(o,a4[o],a6[n],D.fR))}}a4=y.e
a4=A.a0(new A.cL(a1,a4),a4.i("aJ.E"))
return a4},
ml:function ml(d,e){this.a=d
this.b=e},
N6:function N6(d,e){this.a=d
this.b=e},
lO:function lO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
DP:function DP(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
aJJ:function aJJ(d){this.a=d},
aJI:function aJI(){},
bn4:function bn4(){},
bos:function bos(){},
bLZ(d,e,f){return new B.pH(d,e,f)},
bYZ(d){var x
A:{if("memorized"===d){x=D.dR
break A}if("learning"===d){x=D.lA
break A}x=D.lz
break A}return x},
bHy(d,e){return d>=1&&d<=114&&e>=1&&e<=I.bY[d-1].a[1]},
bTM(){var x=y.S
return new B.aa0(A.x(x,y.u),A.aC(x))},
aSm(d){var x=d.kS()
return C.c.da(C.e.j(A.cF(x)),4,"0")+"-"+C.c.da(C.e.j(A.cd(x)),2,"0")+"-"+C.c.da(C.e.j(A.cy(x)),2,"0")},
bCZ(d){var x=y.x,w=A.a0(new A.aj(A.a(d.split("-"),y.s),A.c_b(),x),x.i("aJ.E"))
return B.aSm(A.jr(w[0],w[1],w[2]-1,12,0,0,0))},
bup(d){var x,w,v,u,t,s,r,q,p=y.S,o=A.x(p,y.u),n=A.aC(p),m=new B.aa0(o,n),l=d.h(0,"rows")
if(y.f.b(l))for(x=l.gdI(),x=x.ga5(x),w=y.j;x.u();){v=x.gL()
u=A.f2(A.f(v.a),null)
t=v.b
v=!0
if(u!=null)if(w.b(t))if(J.bi(t)>=3){v=C.e.b7(u,1000)
s=C.e.ae(u,1000)
v=!(v>=1&&v<=114&&s>=1&&s<=I.bY[v-1].a[1])}if(v)continue
v=J.bs(t)
r=C.d.bS(A.dw(v.h(t,0)))
if(r<0||r>=3)continue
o.n(0,u,new B.pH(D.aoB[r],C.d.bS(A.dw(v.h(t,1))),new A.ba(A.kW(C.d.bS(A.dw(v.h(t,2))),0,!0),0,!0)))}q=d.h(0,"dirty")
if(y.j.b(q)){x=J.bs1(q,y.o)
p=A.n5(x,new B.aSl(),x.$ti.i("L.E"),p)
n.E(0,new A.aO(p,o.gV1(),A.w(p).i("aO<L.E>")))}m.c=A.X(d.h(0,"last"))
p=A.bU(d.h(0,"streak"))
p=p==null?null:C.d.bS(p)
p=m.d=p==null?0:p
o=A.bU(d.h(0,"best"))
o=o==null?null:C.d.bS(o)
m.e=o==null?p:o
return m},
ap_(d,e){return"https://everyayah.com/data/Husary_Muallim_128kbps/"+C.c.da(C.e.j(d),3,"0")+C.c.da(C.e.j(e),3,"0")+".mp3"},
B_:function B_(d,e){this.a=d
this.b=e},
pH:function pH(d,e,f){this.a=d
this.b=e
this.c=f},
aa0:function aa0(d,e){var _=this
_.a=d
_.b=e
_.c=null
_.e=_.d=0},
aSn:function aSn(){},
aSo:function aSo(){},
aSl:function aSl(){},
PM:function PM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bRn(){return new B.uD(null)},
c1B(d,e){var x,w,v,u,t={},s=I.bY[e-1].a[1],r=$.HM().c
t.a=1
x=r.a
w=e*1000
v=1
for(;;){if(v<=s){v=x.h(0,w+v)
v=(v==null?$.pw():v).a===D.dR}else v=!1
if(!v)break
v=++t.a}x=t.a
if(x>s){t.a=1
u=1}else u=x
x=s<=10
if(x)u=1
t.b=u
t.c=x?s:C.e.co(u+4,1,s)
return A.fE(C.d3,new B.bqm(t,s,e),d,!0,null,null,!1,y.l)},
bw7(d){return A.d_(0,0,0,0,0,C.e.co(C.d.ar(6+d*1.2),25,90))},
bv7(d){return E.aW(C.e.b7(d,60))+":"+C.c.da(E.aW(C.e.ae(d,60)),2,"\u0660")},
bHj(d){return A.fE(C.d3,new B.br3($.HM()),d,!0,null,null,!1,y.H)},
HH(d){var x,w=d.a
A:{if("timeout"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0627\u062a\u0623\u062e\u0631 \u0623\u0648\u064a \u0648\u0645\u0631\u062f\u0651\u0634\u060c \u0641\u0648\u0642\u0651\u0641\u0646\u0627\u0647 \u0648\u062c\u0631\u0651\u0628\u0646\u0627 \u062a\u0627\u0646\u064a \u0628\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0623\u062e\u0641 \u0648\u0645\u0646\u0641\u0639\u0634. \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}if("crashed"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0642\u0641 \u0641\u062c\u0623\u0629 (\u063a\u0627\u0644\u0628\u064b\u0627 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0634 \u0645\u0643\u0641\u064a\u0629). \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}x=d.gjA()
break A}return x},
c2S(d,e,f){var x,w=new B.brh(),v=w.$1(f),u=w.$1("\xab\u0627\u0644\u0645\u062d\u0641\u0651\u0638\xbb \u0645\u0634\u0643\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 ("+e+")\n"+d.a+": "+d.b+"\n"),t=1990-u.length
if(v.length>t)v=t<=1?"":C.c.W(v,0,t-1)+"\u2026"
x=u+v
return x.length>1990?C.c.W(x,0,1990):x},
bHt(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
try{x=y.P.a(C.Z.eU(a4,null))
s=y.Y
r=s.a(J.b7(x,"rec"))
w=r==null?C.eY:r
q=s.a(J.b7(x,"last"))
v=q==null?C.eY:q
u=new B.brg()
s=J.b7(v,"recovered")
t=A.f(s==null?"":s)
s=A.f(u.$1(J.b7(w,"wall")))
p=A.f(u.$1(J.b7(w,"source")))
o=A.f(u.$1(J.b7(w,"ctxRate")))
n=A.f(u.$1(J.b7(w,"pcmPeak")))
m=A.f(u.$1(J.b7(w,"ctxState")))
l=A.f(u.$1(J.b7(w,"stopMs")))
k=A.f(u.$1(J.b7(v,"prepMs")))
j=A.f(u.$1(J.b7(v,"ms")))
i=A.f(u.$1(J.b7(v,"featMs")))
h=A.f(u.$1(J.b7(v,"encMs")))
g=A.f(u.$1(J.b7(v,"decMs")))
f=A.f(u.$1(J.b7(v,"wallMs")))
e=A.f(u.$1(J.b7(v,"backend")))
d=A.f(u.$1(J.b7(v,"threads")))
a0=J.bi(t)!==0?" \xb7 recovered from "+A.f(t):""
a1=J.c(J.b7(x,"safe"),!0)?" \xb7 safe mode":""
a2=J.c(J.b7(x,"nogpu"),!0)?" \xb7 no-gpu":""
return"record "+s+" s ("+p+", "+o+" Hz, peak "+n+", "+m+") \u2192 stop/decode "+l+" ms \u2192 resample "+k+" ms \u2192 infer "+j+" ms (mel "+i+", enc "+h+", dec "+g+") \u2192 wall "+f+" ms \xb7 "+e+" \xd7"+d+a0+a1+a2}catch(a3){return""}},
CZ:function CZ(d,e){this.a=d
this.b=e},
PN:function PN(d,e,f,g,h){var _=this
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
aSp:function aSp(d){this.a=d},
aSq:function aSq(d){this.a=d},
aSr:function aSr(d){this.a=d},
uD:function uD(d){this.a=d},
Tv:function Tv(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.w=_.r=null},
bcF:function bcF(d){this.a=d},
bcE:function bcE(d,e){this.a=d
this.b=e},
bcG:function bcG(d){this.a=d},
bcD:function bcD(d,e){this.a=d
this.b=e},
bcH:function bcH(){},
bcr:function bcr(){},
bcx:function bcx(d,e,f){this.a=d
this.b=e
this.c=f},
bcy:function bcy(){},
bcB:function bcB(d){this.a=d},
bcA:function bcA(){},
bcC:function bcC(d){this.a=d},
bcu:function bcu(d,e){this.a=d
this.b=e},
bcv:function bcv(d){this.a=d},
bct:function bct(){},
bcw:function bcw(d){this.a=d},
bcs:function bcs(d){this.a=d},
bcz:function bcz(d,e){this.a=d
this.b=e},
D_:function D_(d,e,f){this.c=d
this.d=e
this.a=f},
Rm:function Rm(d,e){this.c=d
this.a=e},
bqm:function bqm(d,e,f){this.a=d
this.b=e
this.c=f},
bqj:function bqj(d,e,f){this.a=d
this.b=e
this.c=f},
bql:function bql(d,e){this.a=d
this.b=e},
bqi:function bqi(d,e){this.a=d
this.b=e},
bqh:function bqh(d,e){this.a=d
this.b=e},
bqk:function bqk(d,e){this.a=d
this.b=e},
bqd:function bqd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqc:function bqc(d,e,f){this.a=d
this.b=e
this.c=f},
bqe:function bqe(d){this.a=d},
bqf:function bqf(d){this.a=d},
bqg:function bqg(d,e){this.a=d
this.b=e},
Ae:function Ae(d,e){this.a=d
this.b=e},
zz:function zz(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Vp:function Vp(d,e){var _=this
_.d=d
_.e=$
_.f=e
_.w=_.r=null
_.x=!1
_.y=0
_.ax=_.at=_.as=_.Q=_.z=null
_.ay=0
_.c=_.a=_.ch=null},
bk5:function bk5(){},
bkl:function bkl(d,e){this.a=d
this.b=e},
bkp:function bkp(d){this.a=d},
bkq:function bkq(d){this.a=d},
bkr:function bkr(d,e,f){this.a=d
this.b=e
this.c=f},
bkt:function bkt(d){this.a=d},
bku:function bku(d){this.a=d},
bks:function bks(){},
bkw:function bkw(d){this.a=d},
bkv:function bkv(d){this.a=d},
bkx:function bkx(d,e){this.a=d
this.b=e},
bkz:function bkz(d){this.a=d},
bkA:function bkA(d){this.a=d},
bky:function bky(){},
bkk:function bkk(d,e,f){this.a=d
this.b=e
this.c=f},
bkm:function bkm(d,e,f){this.a=d
this.b=e
this.c=f},
bkd:function bkd(d){this.a=d},
bke:function bke(d){this.a=d},
bkc:function bkc(){},
bkf:function bkf(){},
bkg:function bkg(d,e){this.a=d
this.b=e},
bkF:function bkF(d){this.a=d},
bkG:function bkG(d){this.a=d},
bkH:function bkH(d,e){this.a=d
this.b=e},
bkE:function bkE(d){this.a=d},
bkI:function bkI(d,e){this.a=d
this.b=e},
bkj:function bkj(){},
bki:function bki(d){this.a=d},
bkh:function bkh(d,e){this.a=d
this.b=e},
bko:function bko(d){this.a=d},
bkn:function bkn(d){this.a=d},
bkB:function bkB(){},
bkC:function bkC(){},
bkD:function bkD(){},
bk6:function bk6(d,e,f){this.a=d
this.b=e
this.c=f},
bk7:function bk7(d){this.a=d},
bk9:function bk9(){},
bk8:function bk8(){},
bka:function bka(d){this.a=d},
bkb:function bkb(d){this.a=d},
zM:function zM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
zy:function zy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Vo:function Vo(d,e,f,g,h){var _=this
_.d=d
_.e=null
_.f=e
_.r=f
_.w=g
_.x=0
_.as=_.Q=_.z=_.y=null
_.at=h
_.c=_.a=null},
bjP:function bjP(){},
bjY:function bjY(d,e){this.a=d
this.b=e},
bjZ:function bjZ(d){this.a=d},
bjX:function bjX(){},
bk0:function bk0(d){this.a=d},
bk_:function bk_(d,e){this.a=d
this.b=e},
bk1:function bk1(d,e){this.a=d
this.b=e},
bjT:function bjT(d,e){this.a=d
this.b=e},
bjU:function bjU(d,e,f){this.a=d
this.b=e
this.c=f},
bjV:function bjV(d,e,f){this.a=d
this.b=e
this.c=f},
bjQ:function bjQ(d,e,f){this.a=d
this.b=e
this.c=f},
bjR:function bjR(d,e,f){this.a=d
this.b=e
this.c=f},
bjS:function bjS(d,e){this.a=d
this.b=e},
bjW:function bjW(d){this.a=d},
bk2:function bk2(){},
bk3:function bk3(d,e){this.a=d
this.b=e},
bk4:function bk4(d,e){this.a=d
this.b=e},
zx:function zx(d){this.a=d},
Vn:function Vn(d){this.d=d
this.c=this.a=null},
bjG:function bjG(){},
bjN:function bjN(d){this.a=d},
bjO:function bjO(){},
bjM:function bjM(d,e){this.a=d
this.b=e},
bjL:function bjL(d,e,f){this.a=d
this.b=e
this.c=f},
bjK:function bjK(d,e,f){this.a=d
this.b=e
this.c=f},
bjJ:function bjJ(d){this.a=d},
bjH:function bjH(d){this.a=d},
bjI:function bjI(d){this.a=d},
br3:function br3(d){this.a=d},
br2:function br2(d){this.a=d},
bqY:function bqY(d,e){this.a=d
this.b=e},
br_:function br_(){},
bqZ:function bqZ(){},
br0:function br0(d,e){this.a=d
this.b=e},
br1:function br1(d,e){this.a=d
this.b=e},
a9Z:function a9Z(d){this.a=d},
aS9:function aS9(d){this.a=d},
brh:function brh(){},
bri:function bri(){},
zA:function zA(d,e,f){this.c=d
this.d=e
this.a=f},
Vq:function Vq(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.r=null},
bkJ:function bkJ(d){this.a=d},
bkK:function bkK(d){this.a=d},
bkL:function bkL(d,e){this.a=d
this.b=e},
bkM:function bkM(d){this.a=d},
bkO:function bkO(d){this.a=d},
bkN:function bkN(d){this.a=d},
brg:function brg(){}},D,P,I,E,F
J=c[1]
A=c[0]
C=c[2]
M=c[15]
Q=c[19]
S=c[21]
H=c[13]
N=c[30]
G=c[35]
O=c[34]
R=c[23]
T=c[10]
U=c[32]
K=c[38]
L=c[40]
B=a.updateHolder(c[8],B)
D=c[41]
P=c[28]
I=c[29]
E=c[16]
F=c[18]
B.aY4.prototype={
M(){return"_ChipVariant."+this.b}}
B.Xs.prototype={
C(d){var x=null
A.U(d)
return A.aIg(!1,x,C.fg,x,x,x,x,C.m,x,new B.aUh(d,!0,D.jz,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,C.oj,x,x,x,x,x,x,x,x),x,x,x,x,x,x,x,x,!0,this.d,x,x,x,x,x,this.r,x,x,x,!1,x,x,x,x,x,x,x,!0,x,x)}}
B.aUh.prototype={
goC(){var x,w=this,v=w.go
if(v===$){x=A.U(w.fr)
w.go!==$&&A.aB()
v=w.go=x.ax}return v},
gdH(){if(this.fy===D.jz)var x=0
else x=this.fx?1:0
return x},
gvQ(){return 1},
gfN(){var x,w=this,v=w.id
if(v===$){x=A.U(w.fr)
w.id!==$&&A.aB()
v=w.id=x.ok}x=v.as
if(x==null)x=null
else x=x.cq(w.fx?w.goC().k3:w.goC().k3)
return x},
gcA(){return new A.bd(new B.aUi(this),y.b)},
gc2(){if(this.fy===D.jz)var x=C.R
else{x=this.goC().x1
if(x==null)x=C.y}return x},
gcg(){return C.R},
grf(){return null},
guZ(){return null},
ge9(){var x,w,v=this
if(v.fy===D.jz)if(v.fx){x=v.goC()
w=x.to
if(w==null){w=x.p
x=w==null?x.k3:w}else x=w
x=new A.b5(x,1,C.B,-1)}else{x=v.goC().k3
x=new A.b5(A.aH(31,x.B()>>>16&255,x.B()>>>8&255,x.B()&255),1,C.B,-1)}else x=C.pS
return x},
ghg(){var x=null
return new A.dD(18,x,x,x,x,this.fx?this.goC().b:this.goC().k3,x,x,x)},
gcC(){return C.eq},
grV(){var x=this.gfN(),w=x==null?null:x.r
if(w==null)w=14
x=A.bZ(this.fr,C.bj)
x=x==null?null:x.gd4()
x=A.og(C.iu,C.dk,A.C((x==null?C.aV:x).b4(w)/14-1,0,1))
x.toString
return x}}
B.aa_.prototype={
oM(){var x=this,w=x.a
if(w!=null)return A.dC(w,y.m)
w=x.b
return w==null?x.b=new B.aSa(x).$0():w},
qF(d,e){return this.ax1(d,e,e)},
ax1(d,e,f){var x=0,w=A.n(f),v,u=2,t=[],s,r,q,p
var $async$qF=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d(d.$0(),$async$qF)
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
r=B.bTK(s)
throw A.o(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$qF,w)},
mB(d,e){var x=A.hz(d[e])
if(x==null)x=null
return x===!0},
Gq(){var x=0,w=A.n(y.X),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Gq=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
h=A
g=A
x=7
return A.d(s.oM(),$async$Gq)
case 7:r=h.co(g.cb(e,"support",null,null,null,null))
q=s.mB(r,"worker")
p=s.mB(r,"wasm")
o=s.mB(r,"mic")
n=s.mB(r,"audio")
s.mB(r,"webgpu")
m=s.mB(r,"secure")
s.mB(r,"ios")
l=A.kG(r.memory)
if(l==null)l=null
if(l==null)l=0
s.mB(r,"isolated")
k=A.kG(r.cores)
if(k!=null)C.d.ar(k)
v=new B.PO(q,p,o,n,m,l)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=D.UG
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Gq,w)},
Aj(){var x=0,w=A.n(y.M),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Aj=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=A
l=A
k=A
x=8
return A.d(s.oM(),$async$Aj)
case 8:x=7
return A.d(m.e1(l.co(k.cb(e,"storage",null,null,null,null)),y.A),$async$Aj)
case 7:r=e
if(r==null){v=null
x=1
break}q=C.d.ar(A.dc(r.quota))
p=C.d.ar(A.dc(r.usage))
v=new A.aj5(q,p)
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
return A.m($async$Aj,w)},
aXS(){var x=y.K
A.KA(this.oM().bA(new B.aSd(),x),x)},
oL(d,e){var x=A.kG(d[e])
x=x==null?null:C.d.ar(x)
return x==null?0:x},
aVn(d,e,f){return this.qF(new B.aSc(this,d,e,f),y.C)},
ga87(){var x,w
try{x=A.jj(b.G.sessionStorage)
return x}catch(w){return null}},
gaeI(){var x=A.hz(b.G.mogtama3yTutorIsolated)
if(x==null)x=null
return x===!0},
a_5(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
try{m=b.G
l=A.hz(m.crossOriginIsolated)
if(l==null)l=f
if(l===!0)return!1
if(this.gaeI())return!1
l=A.hz(m.isSecureContext)
if(l==null)l=f
if(l!==!0)return!1
x=A.co(m.navigator)
if(!("serviceWorker" in x))return!1
w=A.aa(x.userAgent)
l=A.kG(x.maxTouchPoints)
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
l=A.kG(x.hardwareConcurrency)
h=l==null?f:l
r=h==null?0:h
if(r>0&&r<3)return!1
q=Date.now()
l=this.ga87()
l=l==null?f:A.X(A.cb(l,"getItem","mt.tutor.iso",f,f,f))
if(l==null)l=f
p=A.f2(l==null?"":l,f)
if(p!=null&&q-p<3e4)return!1
o=A.jj(m.localStorage)
m=o
m=m==null?f:A.X(A.cb(m,"getItem","mt.tutor.noiso",f,f,f))
if(m==null)m=f
n=A.f2(m==null?"":m,f)
if(n!=null&&q-n<2592e5)return!1
return!0}catch(g){return!1}},
adn(){var x,w,v,u,t,s,r=null
try{x=this.ga87()
if(x!=null)A.cb(x,"setItem","mt.tutor.iso",""+Date.now(),r,r)}catch(w){}x=b.G
v=A.co(x.location)
u=A.aa(v.hash)
t=A.aa(v.search)
s=A.bT(A.aa(A.co(x.document).baseURI),0,r).X("tutor/").j(0)
x=u.length===0?"#/masjid/tools/tutor":u
A.cb(v,"replace",s+t+x,r,r,r)},
aV7(){var x,w=null,v=b.G,u=A.co(v.history),t=A.kG(u.length),s=t==null?w:t
if((s==null?0:s)>1)A.cb(u,"back",w,w,w,w)
else{x=A.aa(A.co(v.document).baseURI)
A.cb(A.co(v.location),"replace",A.bT(x,0,w).X("./").j(0)+"#/",w,w,w)}},
a_g(d,e,f,g,h){return this.qF(new B.aSh(this,e,d,f,h,g),y.H)},
a_j(){return this.qF(new B.aSi(this),y.D)},
UF(){var x=null,w=this.a
if(w!=null)A.cb(w,"cancelRecording",x,x,x,x)},
a9j(d){var x,w,v=this,u=A.X(d.text)
if(u==null)u=null
if(u==null)u=""
x=v.oL(d,"ms")
w=A.kG(d.seconds)
if(w==null)w=null
if(w==null)w=0
return new B.F9(u,x,w,v.oL(d,"frames"),v.oL(d,"tokens"),v.mB(d,"retried"),v.oL(d,"encMs"),v.oL(d,"decMs"),v.oL(d,"featMs"))},
a6l(d){var x={}
x.words=d
return x},
ahD(d,e){return this.qF(new B.aSk(this,d,e),y._)},
b__(d,e){return this.qF(new B.aSj(this,d,e),y._)},
EJ(d,e){return this.aXW(d,e)},
aXW(d,e){var x=0,w=A.n(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$EJ=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=p==null?7:9
break
case 7:x=10
return A.d(s.oM(),$async$EJ)
case 10:x=8
break
case 9:g=p
case 8:r=g
o=A.ad(d).i("aj<1,i>")
o=A.a0(new A.aj(d,new B.aSe(),o),o.i("aJ.E"))
x=11
return A.d(A.e1(A.co(A.cb(r,"play",o,e,null,null)),y.y),$async$EJ)
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
return A.m($async$EJ,w)},
G7(){var x=null,w=this.a
if(w!=null)A.cb(w,"stopPlayback",x,x,x,x)},
Dt(){var x,w,v,u=null
try{w=this.a
x=w==null?u:A.aa(A.cb(w,"diag",u,u,u,u))
w=x
if(w==null)w=u
if(w==null)w="{}"
return w}catch(v){return"{}"}},
aZ9(){var x,w,v=null
try{x=this.a
if(x!=null)A.cb(x,"resetDevice",v,v,v,v)}catch(w){}},
XW(d){var x=this.a
if(x!=null)A.cb(x,"prefetch",d,null,null,null)}}
B.PO.prototype={}
B.F7.prototype={
glm(){var x=this.f,w=x>0?"CPU \xd7"+x:""
x=this.a
if(x==="webgpu")return"WebGPU"
if(C.c.m(x,"webgpu"))return"WebGPU + "+w
return w.length===0?x:w}}
B.F9.prototype={
gL_(){var x=this,w=C.d.au(x.d/100,0),v=x.f?" (retried on 30 s)":""
return"window "+w+" s, "+x.e+" tokens"+v+", mel "+x.x+" ms, encoder "+x.r+" ms, decoder "+x.w+" ms"}}
B.F8.prototype={}
B.kv.prototype={
gjA(){var x,w=this.a
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
$ibn:1}
B.ml.prototype={
M(){return"WordStatus."+this.b}}
B.N6.prototype={}
B.lO.prototype={
j(d){var x,w=this.b
if(w==null)w=""
x=this.c
if(x==null)x=""
return this.d.b+":"+w+"->"+x}}
B.DP.prototype={
gG6(){var x,w=this,v=w.d
if(v===$){x=new B.aJJ(w).$0()
w.d!==$&&A.aB()
w.d=x
v=x}return v},
gDJ(){var x,w,v,u,t,s=A.a([],y.s)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,A.A)(x),++v){u=x[v]
if(u.d===D.V5&&u.c!=null){t=u.c
t.toString
s.push(t)}}return s},
gaWd(){return J.o1(this.gG6(),new B.aJI()).gK(0)},
gpT(){var x=this.a
return x.length!==0&&this.gaWd()===x.length&&this.gDJ().length===0}}
B.B_.prototype={
M(){return"AyahStatus."+this.b}}
B.pH.prototype={}
B.aa0.prototype={
Xw(d,e){var x=this.a.h(0,d*1000+e)
return x==null?$.pw():x},
aGg(d){var x=this,w=B.aSm(d),v=x.c
if(v===w)return
v=v!=null&&v===B.bCZ(w)?x.d+1:1
x.d=v
if(v>x.e)x.e=v
x.c=w},
acz(){var x=Date.now(),w=B.aSm(new A.ba(x,0,!1))
x=this.c
return x===w||x===B.bCZ(w)?this.d:0},
agJ(d,e,f,g){var x=this,w=new A.ba(Date.now(),0,!1),v=x.Xw(d,e),u=g?C.e.co(v.b+1,0,100):0,t=g&&u>=f?D.dR:D.lA,s=new B.pH(t,u,w.j3()),r=d*1000+e
x.a.n(0,r,s)
x.b.D(0,r)
x.aGg(w)
return s},
Xn(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.bY[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pw():s).a===D.dR)++u}return u},
aV5(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.bY[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pw():s).a===D.lA)++u}return u},
gafP(){var x=this.a,w=A.w(x).i("c4<2>")
return new A.aO(new A.c4(x,w),new B.aSn(),w.i("aO<L.E>")).gK(0)},
gakI(){var x=this.a,w=A.w(x).i("bf<1>")
w=A.n5(new A.bf(x,w),new B.aSo(),w.i("L.E"),y.S)
w=A.ek(w,A.w(w).i("L.E"))
x=A.a0(w,A.w(w).c)
C.b.kW(x)
return x},
cV(){var x,w,v,u,t,s=this,r=y.N,q=A.x(r,y.L)
for(x=s.a,x=new A.dS(x,A.w(x).i("dS<1,2>")).ga5(0),w=y.t;x.u();){v=x.d
u=v.a
t=v.b
q.n(0,""+u,A.a([t.a.a,t.b,t.c.a],w))}x=s.b
x=A.a0(x,A.w(x).c)
return A.M(["v",1,"rows",q,"dirty",x,"last",s.c,"streak",s.d,"best",s.e],r,y.z)},
aRb(){var x,w,v,u,t,s,r,q,p,o=A.a([],y.Z)
for(x=this.b,x=A.bud(x,300,A.w(x).c),x=new A.ER(J.aG(x.a),x.b,A.w(x).i("ER<1>")),w=y.N,v=y.z,u=this.a;x.u();){t=x.gL()
s=C.e.b7(t,1000)
t=C.e.ae(t,1000)
r=s*1000+t
q=u.h(0,r)
q=(q==null?$.pw():q).a===D.dR?"memorized":"learning"
p=u.h(0,r)
if(p==null)p=$.pw()
r=u.h(0,r)
o.push(A.M(["surah",s,"ayah",t,"status",q,"perfect_count",p.b,"updated_at",(r==null?$.pw():r).c.jB()],w,v))}return o},
aVF(d){var x,w,v,u,t,s,r
for(x=d.length,w=this.a,v=this.b,u=0;u<d.length;d.length===x||(0,A.A)(d),++u){t=d[u]
s=A.em(t.h(0,"surah"))*1000+A.em(t.h(0,"ayah"))
r=w.h(0,C.e.b7(s,1000)*1000+C.e.ae(s,1000))
if((r==null?$.pw():r).c.jB()===t.h(0,"updated_at"))v.I(0,s)}},
aVN(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(x=J.aG(d),w=this.b,v=this.a,u=y.f,t=!1;x.u();){s=x.gL()
if(!u.b(s))continue
r=A.bU(s.h(0,"surah"))
q=r==null?null:C.d.bS(r)
r=A.bU(s.h(0,"ayah"))
p=r==null?null:C.d.bS(r)
o=A.hJ(A.f(s.h(0,"updated_at")))
r=!0
if(q!=null)if(p!=null)if(o!=null)r=!(q>=1&&q<=114&&p>=1&&p<=I.bY[q-1].a[1])
if(r)continue
n=B.bYZ(s.h(0,"status"))
if(n===D.lz)continue
r=q*1000+p
m=v.h(0,r)
if(m!=null){l=m.c
k=o.a
j=l.a
if(k<=j)l=k===j&&o.b>l.b
else l=!0
l=!l}else l=!1
if(l)continue
l=A.bU(s.h(0,"perfect_count"))
l=l==null?null:C.d.bS(l)
v.n(0,r,new B.pH(n,C.e.co(l==null?0:l,0,100),o.j3()))
w.I(0,r)
t=!0}return t}}
B.PM.prototype={
Di(d,e,f,g,h){var x=this,w=g==null?x.a:g,v=h==null?x.b:h,u=d==null?x.c:d,t=e==null?x.d:e
return new B.PM(w,v,u,t,f==null?x.e:f)},
aPJ(d){var x=null
return this.Di(x,x,d,x,x)},
aca(d){var x=null
return this.Di(x,d,x,x,x)},
aPN(d){var x=null
return this.Di(x,x,x,x,d)},
aPe(d){var x=null
return this.Di(d,x,x,x,x)},
aPK(d){var x=null
return this.Di(x,x,x,d,x)},
cV(){var x=this
return A.M(["n",x.a,"r",x.b,"auto",x.c,"hide",x.d,"in",x.e],y.N,y.z)}}
B.CZ.prototype={
M(){return"ModelState."+this.b}}
B.PN.prototype={
WR(){var x=this.Q
return x==null?this.Q=new B.aSp(this).$0():x},
os(d){return this.ajh(d)},
ajh(d){var x=0,w=A.n(y.H),v=this
var $async$os=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v.b=d
v.a_()
x=2
return A.d(A.io("mt.tutor.settings",C.Z.hw(d.cV(),null)),$async$os)
case 2:return A.l(null,w)}})
return A.m($async$os,w)},
wp(){var x=0,w=A.n(y.H),v=this,u
var $async$wp=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a_()
x=2
return A.d(A.io("mt.tutor.progress",C.Z.hw(v.c.cV(),null)),$async$wp)
case 2:u=v.as
if(u!=null)u.aG()
v.as=A.cC(C.E,v.gapv())
return A.l(null,w)}})
return A.m($async$wp,w)},
FS(d,e,f){return this.ajU(d,e,f)},
ajU(d,e,f){var x=0,w=A.n(y.H),v=this
var $async$FS=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:v.z=new A.bo(d,e,f)
x=2
return A.d(A.io("mt.tutor.last",C.Z.hw(A.M(["s",d,"f",e,"t",f],y.N,y.S),null)),$async$FS)
case 2:return A.l(null,w)}})
return A.m($async$FS,w)},
za(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$za=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=s.f
if(n===D.MO||n===D.hA){x=1
break}s.f=D.MO
s.y=null
s.a_()
u=4
n=A.jO().geq().h(0,"tutor_device")
if(n==null)n="auto"
p=A.jO().geq().h(0,"tutor_threads")
p=A.f2(p==null?"":p,null)
if(p==null)p=0
x=7
return A.d(s.a.aVn(new B.aSq(s),n,p),$async$za)
case 7:s.x=e
s.f=D.hA
n=A.jO().geq().h(0,"debug")
if(n==="1"){n=s.x
n.toString
r=n
A.rT().$1("[tutor] model ready: "+r.a+" "+r.b+" threads="+r.f+" isolated="+r.r+" in "+r.c+" ms (warm-up "+r.w+" ms, cached before: "+r.d+")")}u=2
x=6
break
case 4:u=3
m=t.pop()
n=A.Y(m)
if(n instanceof B.kv){q=n
s.f=D.av_
s.y=q
n=A.jO().geq().h(0,"debug")
if(n==="1")A.rT().$1("[tutor] model failed: "+A.f(q))}else throw m
x=6
break
case 3:x=2
break
case 6:s.a_()
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$za,w)},
tX(){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$tX=A.j(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:if(r.at){x=1
break}q=null
try{k=$.ab().b
k===$&&A.b()
k=k.gbR().e.a
q=(k==null?null:k.r)!=null}catch(d){x=1
break}if(!q){x=1
break}r.at=!0
u=4
k=$.ab().b
k===$&&A.b()
p=k
x=7
return A.d(p.cR("quran_tutor_progress").hm("surah, ayah, status, perfect_count, updated_at"),$async$tX)
case 7:o=a1
n=r.c.aVN(o)
m=0,k=y.N,i=y.z
case 8:if(!(m<25)){x=10
break}l=r.c.aRb()
if(J.bi(l)===0){x=10
break}h=p
g=A.M(["p_rows",l],k,i)
f=h.CW
f===$&&A.b()
f.b.E(0,A.lU(h.x,k,k))
x=11
return A.d(f.aZw("quran_tutor_save",!1,g,i),$async$tX)
case 11:r.c.aVF(l)
case 9:++m
x=8
break
case 10:x=12
return A.d(A.io("mt.tutor.progress",C.Z.hw(r.c.cV(),null)),$async$tX)
case 12:if(n)r.a_()
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
return A.m($async$tX,w)},
EW(d){return this.aZb(d)},
aZb(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$EW=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:p=B.bup(t.c.cV()).cV()
y.f.a(p.h(0,"rows")).dt(0,new B.aSr(d))
t.c=B.bup(p)
x=2
return A.d(t.wp(),$async$EW)
case 2:v=4
s=$.ab().b
s===$&&A.b()
r=s.gbR().e.a
x=(r==null?null:r.r)!=null?7:8
break
case 7:r=y.z
x=9
return A.d(s.bd("quran_tutor_reset",A.M(["p_surah",d],y.N,r),r),$async$EW)
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
return A.m($async$EW,w)}}
B.uD.prototype={
V(){var x=$.HM()
return new B.Tv(x,new A.b4(C.M,$.a7()))}}
B.Tv.prototype={
ag(){var x,w,v=this
v.ap()
x=v.d
x.a7(v.gmN())
w=y.a
x.WR().bA(new B.bcF(v),w)
H.aIb().bA(new B.bcG(v),w).hF(new B.bcH())
A.KA(H.btS(),y.y)},
uE(){if(this.c!=null)this.t(new B.bcr())},
l(){var x,w=this
w.d.S(w.gmN())
x=w.e
x.p$=$.a7()
x.T$=0
w.az()},
Iu(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Iu=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.d
x=3
return A.d(s.os(s.b.aPJ(!0)),$async$Iu)
case 3:t=s.a
t.aXS()
if(t.a_5()){t.adn()
x=1
break}s.za()
case 1:return A.l(v,w)}})
return A.m($async$Iu,w)},
uF(d,e,f){return this.aEN(d,e,f)},
aLl(d){return this.uF(d,null,null)},
aEN(d,e,f){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$uF=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:if(u.w==null){u.c.U(y.q).f.ba(A.bS(null,null,null,null,null,C.l,null,A.p("\u0644\u062d\u0638\u0629\u2026 \u0628\u0646\u062c\u0647\u0651\u0632 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641",null,null,null,null,null,null,null,null),null,C.E,null,null,null,null,null,null,null,null,null,null))
x=1
break}x=e!=null&&f!=null?3:5
break
case 3:t=new A.P(e,f)
x=4
break
case 5:s=u.c
s.toString
x=6
return A.d(B.c1B(s,d),$async$uF)
case 6:t=h
case 4:if(t==null||u.c==null){x=1
break}x=7
return A.d(u.d.FS(d,t.a,t.b),$async$uF)
case 7:s=u.c
if(s==null){x=1
break}r=y.z
x=8
return A.d(A.ao(s,!1).cm(A.cm(new B.bcx(u,d,t),null,r),r),$async$uF)
case 8:if(u.c!=null)u.t(new B.bcy())
case 1:return A.l(v,w)}})
return A.m($async$uF,w)},
C(d){var x=null,w=this.d,v=w.b,u=A.a([],y.p),t=w.a
if(t.gaeI()&&!A.ao(d,!1).UC())u.push(A.cJ(x,x,x,x,D.abK,x,x,t.gaV6(),x,x,x,"\u0631\u062c\u0648\u0639 \u0644\u0645\u0633\u062c\u062f\u064a",x))
t=v.e
if(t)u.push(A.cJ(x,x,x,x,D.acD,x,x,new B.bcB(d),x,x,x,"\u062a\u0642\u062f\u0651\u0645\u064a",x))
u.push(A.cJ(x,x,x,x,D.AQ,x,x,new B.bcC(d),x,x,x,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",x))
if(!w.e)w=D.all
else w=t?this.aBg():this.aBH()
return M.vi(u,w,"\u0627\u0644\u0645\u062d\u0641\u0651\u0638")},
aBH(){var x,w,v,u,t,s,r,q,p=null,o=this.d.d
if(o==null)o=D.UG
x=this.r
w=x==null?p:x.a-x.b
if(!(o.a&&o.b))v="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u062f\u0639\u0645 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638. \u062c\u0631\u0651\u0628 \u0623\u062d\u062f\u062b \u0646\u0633\u062e\u0629 \u0645\u0646 Chrome (\u0623\u0646\u062f\u0631\u0648\u064a\u062f) \u0623\u0648 Safari (\u0622\u064a\u0641\u0648\u0646)."
else if(!o.f)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0641\u062a\u062d \u0639\u0644\u0649 https \u0639\u0634\u0627\u0646 \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0627\u064a\u0643."
else v=!o.c||!o.d?"\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u0633\u0645\u062d \u0628\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0646 \u0627\u0644\u0645\u0627\u064a\u0643.":p
x=y.p
u=A.a([D.aGa,C.as],x)
for(t=0;t<4;++t){s=D.amR[t]
u.push(new A.a8(C.by,A.ak(A.a([A.c7(s.a,C.a8,p,18),C.ap,new A.dM(1,C.aX,A.p(s.b,p,p,p,p,G.TI,p,p,p),p)],x),C.z,C.f,C.h,0,p),p))}u=A.ah(u,C.z,C.f,C.h)
s=A.a([D.aX_,C.Q,A.p("\u0647\u0646\u062d\u0645\u0651\u0644 \u0645\u0644\u0641 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 (\u062d\u0648\u0627\u0644\u064a "+E.aW(105)+" \u0645\u064a\u062c\u0627) \u0648\u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0648\u0628\u0639\u062f \u0643\u062f\u0647 \u0628\u064a\u0641\u062a\u062d \u0645\u0646 \u063a\u064a\u0631 \u062a\u062d\u0645\u064a\u0644. \u064a\u064f\u0641\u0636\u0651\u0644 \u062a\u0643\u0648\u0646 \u0639\u0644\u0649 Wi-Fi.",p,p,p,p,F.ai,p,p,p)],x)
if(w!=null){r=w<3e8
q=r?"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0645\u062a\u0635\u0641\u062d \u0642\u0644\u064a\u0644\u0629 ("+E.aW(C.d.ar(w/1e6))+" \u0645\u064a\u062c\u0627) \u2014 \u0641\u0636\u0651\u064a \u0634\u0648\u064a\u0629 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0623\u0648\u0644.":"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629: \u0643\u0641\u0627\u064a\u0629 \u2713"
C.b.E(s,A.a([C.Q,A.p(q,p,p,p,p,A.cB(p,p,r?D.cS:C.ca,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x))}r=o.w
if(r>0&&r<3)C.b.E(s,A.a([C.Q,D.aWy],x))
x=A.a([new E.cT(u,C.ah,C.ay,p,!0,p),new E.cT(A.ah(s,C.z,C.f,C.h),C.ah,C.ay,p,!1,p),D.b2B,C.Q],x)
if(v!=null)x.push(new E.cT(A.p(v,p,p,p,p,D.aOY,p,p,p),C.ah,C.ay,p,!1,p))
else x.push(A.ka(D.ab5,D.aS6,this.gaEW(),A.kb(C.q,C.a5,D.aIB,p,p)))
x.push(C.aK)
x.push(D.UF)
return x},
aBg(){var x,w,v=this,u=null,t=v.d,s=t.c,r=v.e,q=C.c.ao(r.a.a),p=q.length===0,o=p?C.ty:H.bHc(q),n=t.z,m=A.aR(v.a8H(C.hi,E.aW(s.gafP())+" \u0622\u064a\u0629","\u062d\u0641\u0638\u062a\u0647\u0627"),1),l=E.aW(s.acz()),k=s.c,j=Date.now()
k=k===B.aSm(new A.ba(j,0,!1))?"\u0648\u0631\u0627 \u0628\u0639\u0636 \u2014 \u0643\u0645\u0651\u0644!":"\u0633\u0645\u0651\u0639 \u0627\u0644\u0646\u0647\u0627\u0631\u062f\u0647 \u0639\u0634\u0627\u0646 \u062a\u0643\u0645\u0651\u0644"
j=y.p
k=A.a([new B.D_(t,!1,u),A.ak(A.a([m,C.ap,A.aR(v.a8H(C.Ag,l+" \u064a\u0648\u0645",k),1)],j),C.j,C.f,C.h,0,u),C.N],j)
if(n!=null){t=H.jl(n.a)
m=n.b
l=n.c
m=m===l?"\u0622\u064a\u0629 "+E.aW(m):"\u0627\u0644\u0622\u064a\u0627\u062a "+E.aW(m)+"\u2013"+E.aW(l)
k.push(new E.cT(A.ak(A.a([D.acb,C.aY,A.aR(A.ah(A.a([D.aQD,A.p(t+" \u2014 "+m,u,u,u,u,F.b0,u,u,u)],j),C.z,C.f,C.h),1),Q.kq],j),C.j,C.f,C.h,0,u),C.ah,C.ay,new B.bcu(v,n),!0,u))}t=C.i.bQ(0.08)
k.push(A.bD(u,C.F,!1,u,!0,C.l,u,A.bI(),r,u,u,u,u,u,2,A.hq(u,new A.e6(4,A.ac(14),C.w),u,u,u,u,u,u,!0,u,u,u,u,u,u,t,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,C.oV,"\u0639\u0627\u064a\u0632 \u062a\u062d\u0641\u0638 \u0633\u0648\u0631\u0629 \u0625\u064a\u0647\u061f",u,u,u,u,u,u,u,u,u,!0,!0,!1,u,C.mO,u,u,u,u,u,u,u,u,u,u,u,u),C.r,!0,u,!0,u,!1,u,C.G,u,u,u,u,u,u,u,u,u,1,u,u,!1,"\u2022",u,new B.bcv(v),u,u,u,!1,u,u,!1,u,!0,u,C.D,u,u,u,u,u,u,u,u,u,u,u,C.dd,!0,C.x,u,C.L,u,u,u,u))
k.push(C.N)
if(!p){t=A.a([],j)
if(o.length===0)t.push(D.aUr)
for(r=o.length,x=0;x<o.length;o.length===r||(0,A.A)(o),++x)t.push(v.Jp(o[x]))
C.b.E(k,t)}else{t=A.a([D.ax7,D.axw,v.Jp(1)],j)
for(w=114;w>=78;--w)t.push(v.Jp(w))
t.push(C.Q)
r=v.f
p=A.c7(r?C.t_:C.mE,C.a8,u,u)
t.push(A.i9(p,A.p(r?"\u0627\u062e\u0641\u064a \u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631":"\u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631 (\u0627\u0644\u0628\u0642\u0631\u0629 \u0644\u062d\u062f \u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a)",u,u,u,u,C.ed,u,u,u),new B.bcw(v),u))
if(v.f)for(w=2;w<=77;++w)t.push(v.Jp(w))
C.b.E(k,t)}k.push(C.as)
k.push(D.wh)
return k},
a8H(d,e,f){var x=null,w=y.p
return new E.cT(A.ak(A.a([A.c7(d,C.q,x,x),C.ap,A.aR(A.ah(A.a([A.p(e,x,x,x,x,F.b0,x,x,x),A.p(f,1,C.ak,x,x,D.aNK,x,x,x)],w),C.z,C.f,C.h),1)],w),C.j,C.f,C.h,0,x),C.ah,C.J,x,!1,x)},
Jp(d){var x,w=null,v=this.d.c,u=I.bY[d-1].a[1],t=v.Xn(d),s=t/u,r=y.p,q=A.bA(A.hg(C.W,A.a([A.bsk(C.dV,G.bW,w,w,w,w,w,3,s,w),A.p(E.aW(d),w,w,w,w,S.U4,w,w,w)],r),C.l,C.c5,w),36,36),p=A.p(H.jl(d),w,w,w,w,D.aKE,w,w,w)
if(t===0)x=E.aW(u)+" \u0622\u064a\u0629"
else x=t===u?"\u0645\u062d\u0641\u0648\u0638\u0629 \u0643\u0644\u0647\u0627 \u2713":"\u062d\u0641\u0638\u062a "+E.aW(t)+" \u0645\u0646 "+E.aW(u)
r=A.a([q,C.hM,A.aR(A.ah(A.a([p,A.p(x,w,w,w,w,A.cB(w,w,t===u?G.bW:C.ca,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),C.z,C.f,C.h),1)],r)
if(s>0&&s<1)r.push(A.p(E.aW(C.d.ar(s*100))+"\u066a",w,w,w,w,D.TU,w,w,w))
r.push(D.ab9)
return new E.cT(A.ak(r,C.j,C.f,C.h,0,w),K.z5,C.eP,new B.bcz(this,d),!1,w)}}
B.D_.prototype={
C(d){var x,w,v,u,t,s,r=null,q=this.c
switch(q.f.a){case 2:if(this.d)return C.aD
return D.ax_
case 3:x=q.y
x=A.a([A.p(x==null?"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0634\u063a\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638":B.HH(x),r,r,r,r,D.vG,r,r,r)],y.p)
w=q.y
if(w!=null)x.push(new B.zA(w,"model load",r))
x.push(C.Q)
x.push(new A.xb(C.Vn,!1,q.gaVm(),r,r,r,r,C.m,r,!1,r,!0,r,C.oY,r))
return new E.cT(A.ah(x,C.z,C.f,C.h),C.ah,C.ay,r,!1,r)
case 0:case 1:v=q.w
u=q.r
q=v>0
t=q?C.d.co(u/v,0,1):r
s=q&&u<v
q=A.p(s?"\u0628\u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026 "+E.aW(C.d.ar(u/1e6))+" \u0645\u0646 "+E.aW(C.d.ar(v/1e6))+" \u0645\u064a\u062c\u0627":"\u0628\u0646\u062c\u0647\u0651\u0632 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026",r,r,r,r,C.vI,r,r,r)
x=A.ac(8)
w=y.p
x=A.a([q,C.P,A.mI(x,A.CC(C.dV,C.q,7,s?t:r),C.bt)],w)
if(!this.d)C.b.E(x,A.a([C.Q,D.aSw],w))
return new E.cT(A.ah(x,C.z,C.f,C.h),C.ah,C.ay,r,!1,r)}}}
B.Rm.prototype={
C(d){var x=null,w=D.cS.bQ(0.1),v=A.ac(14),u=A.d2(D.cS.bQ(0.4),1)
return A.aA(x,A.ak(A.a([D.ac_,C.ap,A.aR(A.p(this.c?"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0627\u0644\u062a\u062c\u0648\u064a\u062f.":"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0623\u062d\u0643\u0627\u0645 \u0627\u0644\u062a\u062c\u0648\u064a\u062f. \u0627\u0642\u0631\u0627 \u0639\u0644\u0649 \u0634\u064a\u062e \u0623\u0648 \u0645\u062d\u0641\u0651\u0638 \u0641\u064a \u0645\u0633\u062c\u062f\u0643 \u0643\u0645\u0627\u0646.",x,x,x,x,D.U0,x,x,x),1)],y.p),C.z,C.f,C.h,0,x),C.m,x,x,new A.ar(w,x,u,v,x,x,C.t),x,x,C.ay,C.aS,x,x,x)}}
B.Ae.prototype={
M(){return"_Phase."+this.b}}
B.zz.prototype={
V(){return new B.Vp($.HM(),D.jH)}}
B.Vp.prototype={
ghV(){var x=this.e
return x===$?this.e=this.a.d:x},
gxM(){var x,w=this.a,v=w.f
w=w.c
x=this.ghV()
return H.HF(w,x,v.uN(w,x)).b},
ag(){var x,w=this
w.ap()
x=w.d
x.a7(w.gmN())
x.WR()
x.a.XW(B.ap_(w.a.c,w.ghV()))},
uE(){if(this.c!=null)this.t(new B.bk5())},
l(){var x,w=this,v=w.d
v.S(w.gmN())
x=w.Q
if(x!=null)x.aG()
v=v.a
v.G7()
v.UF()
w.az()},
R5(d){var x,w,v=this
if(v.f===D.pp)v.d.a.UF()
x=v.d.a
x.G7()
w=v.Q
if(w!=null)w.aG()
v.t(new B.bkl(v,d))
x.XW(B.ap_(v.a.c,d))
w=v.a
if(d<w.e)x.XW(B.ap_(w.c,d+1))},
JD(d){return this.aCg(d)},
aCg(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$JD=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f===D.po){u.d.a.G7()
u.t(new B.bkp(u))
x=1
break}t=u.r!=null?D.fX:D.jH
u.t(new B.bkq(u))
s=u.d
r=A.a([B.ap_(u.a.c,u.ghV())],y.s)
q=d==null?s.b.b:d
x=3
return A.d(s.a.EJ(r,q),$async$JD)
case 3:p=f
if(u.c==null||u.f!==D.po){x=1
break}u.t(new B.bkr(u,t,p))
case 1:return A.l(v,w)}})
return A.m($async$JD,w)},
II(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$II=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.d
if(l.f!==D.hA){x=1
break}p=l.a
p.G7()
r=B.AJ(s.gxM()).length
s.t(new B.bkt(s))
o=s.Q
if(o!=null)o.aG()
s.Q=A.mh(C.fl,new B.bku(s))
u=4
o=B.bw7(r)
n=A.d_(0,0,0,350*r,0,0)
x=7
return A.d(p.a_g(l.b.c,o,n,new B.bkv(s),new B.bkw(s)),$async$II)
case 7:u=2
x=6
break
case 4:u=3
k=t.pop()
l=A.Y(k)
if(l instanceof B.kv){q=l
l=s.Q
if(l!=null)l.aG()
if(s.c!=null)s.t(new B.bkx(s,q))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$II,w)},
xI(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$xI=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.f!==D.pp){x=1
break}m=s.Q
if(m!=null)m.aG()
s.t(new B.bkz(s))
s.Q=A.mh(C.ha,new B.bkA(s))
l=new A.z5()
$.AM()
l.my()
r=l
u=4
m=s.d.a
x=7
return A.d(m.a_j(),$async$xI)
case 7:q=e
if(q.b<0.8){s.aLk("\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0642\u0635\u064a\u0631 \u0623\u0648\u064a \u2014 \u062f\u0648\u0633 \xab\u0633\u0645\u0651\u0639\xbb \u0648\u0627\u0642\u0631\u0627 \u0627\u0644\u0622\u064a\u0629 \u0643\u0644\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb.")
x=1
break}x=8
return A.d(m.ahD(q,B.AJ(s.gxM()).length),$async$xI)
case 8:p=e
s.ch=A.d_(0,0,r.gVZ(),0,0,0)
k=A.jO().geq().h(0,"debug")
if(k==="1"){o=B.bHt(m.Dt())
A.rT().$1("[tutor] "+s.a.c+":"+s.ghV()+" audio="+C.d.au(q.b,1)+"s infer="+p.b+"ms total="+r.gyx()+"ms "+p.gL_()+" text="+p.a)
A.rT().$1("[tutor] stages: "+A.f(o))
s.ax="\u062a\u0633\u062c\u064a\u0644\u0643 "+C.d.au(p.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.au(p.b/1000,2)+" \u062b\n"+p.gL_()+"\n"+A.f(o)+"\n"+p.a}s.a4e(p.a)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.Y(i)
if(m instanceof B.kv){n=m
m=A.jO().geq().h(0,"debug")
if(m==="1")A.rT().$1("[tutor] check failed: "+A.f(n)+"\n"+s.d.a.Dt())
s.Tx(B.HH(n),n)}else throw i
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$xI,w)},
Tx(d,e){var x=this,w=x.Q
if(w!=null)w.aG()
if(x.c==null)return
x.t(new B.bkk(x,d,e))},
aLk(d){return this.Tx(d,null)},
a4e(d){var x,w,v,u,t,s=this,r={},q=s.Q
if(q!=null)q.aG()
if(s.c==null)return
x=B.bFI(s.gxM(),d)
r.a=null
if(C.c.ao(x.c).length!==0){q=s.d
w=q.c
v=s.a.c
u=s.ghV()
t=x.gpT()
r.a=w.agJ(v,u,q.b.a,t)
q.wp()}s.t(new B.bkm(r,s,x))},
H3(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$H3=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:g=s.d
if(g.f!==D.hA){x=1
break}s.t(new B.bkd(s))
l=s.Q
if(l!=null)l.aG()
s.Q=A.mh(C.ha,new B.bke(s))
k=new A.z5()
$.AM()
k.my()
r=k
u=4
l=g.a
x=7
return A.d(l.b__(B.ap_(s.a.c,s.ghV()),B.AJ(s.gxM()).length),$async$H3)
case 7:q=e
p=B.bHt(l.Dt())
o="\u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a "+C.d.au(q.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.au(q.b/1000,2)+" \u062b (\u0627\u0644\u0643\u0644 "+C.d.au(r.gyx()/1000,2)+" \u062b)\n"+q.gL_()+"\n"+A.f(p)+"\n"+q.a
A.rT().$1("[tutor-debug] "+s.a.c+":"+s.ghV()+" audio="+C.d.au(q.c,1)+"s infer="+q.b+"ms total="+r.gyx()+"ms "+q.gL_()+" text="+q.a)
A.rT().$1("[tutor-debug] stages: "+A.f(p))
s.ch=A.d_(0,0,r.gVZ(),0,0,0)
s.a4e(q.a)
n=s.r
if(n!=null){l=n.gpT()
j=n.b
i=A.ad(j).i("aO<1>")
j=A.a0(new A.aO(j,new B.bkf(),i),i.i("L.E"))
A.rT().$1("[tutor-debug] perfect="+l+" ops="+A.f(j))}s.t(new B.bkg(s,o))
u=2
x=6
break
case 4:u=3
f=t.pop()
l=A.Y(f)
if(l instanceof B.kv){m=l
A.rT().$1("[tutor-debug] failed: "+A.f(m)+"\n"+g.a.Dt())
s.Tx(B.HH(m),m)}else throw f
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$H3,w)},
gSr(){var x,w,v
for(x=this.a.d,w=this.d;v=this.a,x<=v.e;++x){v=w.c.a.h(0,v.c*1000+x)
if((v==null?$.pw():v).a!==D.dR)return!1}return!0},
C(d){var x,w=this,v=null,u=w.d,t=u.c.Xw(w.a.c,w.ghV()),s=u.b,r=s.d&&!w.x&&w.f!==D.fX,q=H.jl(w.a.c),p=y.p,o=A.a([A.cJ(v,v,v,v,D.AQ,v,v,new B.bkF(d),v,v,v,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",v)],p),n=w.auE(),m=A.p("\u0622\u064a\u0629 "+E.aW(w.ghV()),v,v,v,v,R.ld,v,v,v),l=E.aW(w.ghV()-w.a.d+1),k=w.a
s=A.a([A.ak(A.a([m,C.bK,A.p("("+l+" \u0645\u0646 "+E.aW(k.e-k.d+1)+")",v,v,v,v,F.ai,v,v,v),C.dt,w.aFy(t,s.a)],p),C.j,C.f,C.h,0,v),C.N],p)
if(r)s.push(w.aBb())
else{m=w.r
if(m!=null){l=w.f
l=l!==D.pp&&l!==D.ls}else l=!1
if(l)s.push(w.asU(m))
else s.push(A.p(w.gxM()+" \ufd3f"+E.aW(w.ghV())+"\ufd3e",v,v,v,v,D.hU,C.ae,C.aL,v))}s=A.a([new B.D_(u,!0,v),n,C.P,new E.cT(A.ah(s,C.am,C.f,C.h),D.a6z,C.ay,v,!1,v)],p)
n=w.r
if(n!=null&&w.f===D.fX)s.push(w.aMy(n))
if(w.r!=null&&w.f===D.fX&&w.ch!=null){x=C.d.ar(C.e.b7(w.ch.a,1000)/100)
s.push(new A.a8(C.by,A.p("\u0627\u062a\u0631\u0627\u062c\u0639 \u0641\u064a "+(E.aW(C.e.b7(x,10))+"\u066b"+E.aW(C.e.ae(x,10)))+" \u062b",v,v,v,v,F.ai,C.ae,v,v),v))}n=w.as
if(n!=null)s.push(new A.a8(C.ay,A.p(n,v,v,v,v,D.vG,v,v,v),v))
if(w.as!=null&&w.at!=null){n=w.at
n.toString
s.push(new B.zA(n,"check "+w.a.c+":"+w.ghV(),v))}s.push(w.ati())
s.push(C.as)
s.push(A.r7(C.q,C.J,v,new B.bkG(w),D.aRo,D.aTt,u.b.d))
n=w.a
if(n.e>n.d){n=w.gSr()
s.push(new E.cT(A.ak(A.a([D.aao,C.aY,A.aR(A.ah(A.a([D.aUb,A.p(w.gSr()?"\u062d\u0641\u0638\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u0633\u0645\u0651\u0639\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636 \u0645\u0646 \u063a\u064a\u0631 \u0645\u0627 \u062a\u0634\u0648\u0641\u0647\u0627":"\u0644\u0645\u0627 \u062a\u062e\u0644\u0651\u0635 \u0627\u0644\u0622\u064a\u0627\u062a \u0648\u0627\u062d\u062f\u0629 \u0648\u0627\u062d\u062f\u0629\u060c \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0644\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636",v,v,v,v,F.ai,v,v,v)],p),C.z,C.f,C.h),1),Q.kq],p),C.j,C.f,C.h,0,v),C.ah,C.ay,new B.bkH(w,d),n,v))}n=A.jO().geq().h(0,"debug")
if(n==="1"){p=A.a([C.P,A.fU(D.ab4,D.aT9,u.f===D.hA&&w.f!==D.ls?w.gatR():v,v)],p)
n=w.ax
if(n!=null)p.push(new A.a8(C.is,A.Ed(n,F.ai,v,v),v))
n=u.x
if(n!=null){m=n.a
l=n.b
n=n.glm()
u=u.x
p.push(A.p("model: "+m+" "+l+" \u2014 "+n+", isolated "+u.r+", load "+u.c+" ms (warm-up "+u.w+" ms)",v,v,v,v,F.ai,v,v,v))}p.push(A.bW(D.aTO,v,v,v,new B.bkI(w,d),v,v))
C.b.E(s,p)}s.push(C.P)
s.push(D.wh)
return M.vi(o,s,q)},
auE(){var x=this.a,w=x.e-x.d+1
if(w===1)return C.aD
return A.bA(A.qp(new B.bki(this),w,null,C.aA,new B.bkj()),36,null)},
aFy(d,e){var x,w,v,u,t,s,r,q=null
if(d.a===D.dR)return D.aGf
x=d.b
w=E.aW(x)
v=E.aW(e)
u=A.a([],y.p)
for(t=0;t<e;++t){s=t<x
r=s?C.cT:D.a9W
u.push(new A.a8(D.a79,A.c7(r,s?G.bW:C.eK,q,16),q))}return A.bum(A.ak(u,C.j,C.f,C.a_,0,q),q,"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637 \u0648\u0631\u0627 \u0628\u0639\u0636: "+w+" \u0645\u0646 "+v,q,q)},
aBb(){var x=null
return A.du(!1,A.ac(12),!0,A.aA(x,D.a3c,C.m,x,x,new A.ar(K.qm,x,x,A.ac(12),x,x,C.t),x,x,x,D.a6h,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bko(this),x,x,x,x,x,x,x)},
asU(d){var x,w,v,u,t,s=null,r=A.a([],y.R)
for(x=d.a,w=0;w<x.length;++w){v=J.b7(d.gG6(),w)
A:{if(D.fR===v){u=D.hU.cq(G.bW)
break A}if(D.pb===v){u=D.hU.Vg(D.cS,C.fJ,D.cS)
break A}if(D.pc===v){u=D.hU.Vg(D.dA,C.fJ,D.dA)
break A}u=D.hU.Vg(C.eK,C.oN,C.cs)
break A}t=x[w]
r.push(new A.fj(t.a,s,s,C.bl,s,s,s,s,s,s,u))
r.push(K.vB)}x=E.aW(this.ghV())
r.push(A.dO(s,s,s,s,s,s,s,s,s,D.hU.cq(C.a8),"\ufd3f"+x+"\ufd3e"))
return A.a9C(A.dO(r,s,s,s,s,s,s,s,s,s,s),s,C.ae,C.aL)},
aMy(d){var x,w,v,u,t,s,r=this.w
if(C.c.ao(d.c).length===0)return D.b2g
if(d.gpT()){x=r==null
if((x?null:r.a)===D.dR&&r.b===this.d.b.a)x="\u0627\u0644\u0622\u064a\u0629 \u062f\u064a \u0627\u062a\u062d\u0641\u0638\u062a! \u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0627\u0644\u0644\u064a \u0628\u0639\u062f\u0647\u0627."
else x=!x&&r.a!==D.dR?"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637. \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0645\u0627\u0646 "+E.aW(this.d.b.a-r.b)+" \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629.":"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637."
return new B.zM(G.bW,C.cT,"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713",x,null)}x=d.gG6()
w=J.d1(x)
v=w.hO(x,new B.bkB()).gK(0)
u=w.hO(x,new B.bkC()).gK(0)
t=w.hO(x,new B.bkD()).gK(0)
x=A.a([],y.s)
if(u>0)x.push(E.aW(u)+" \u063a\u0644\u0637")
if(v>0)x.push(E.aW(v)+" \u0631\u0627\u062c\u0639\u0647\u0627")
if(t>0)x.push(E.aW(t)+" \u0646\u0627\u0642\u0635\u0629")
if(d.gDJ().length!==0)x.push(E.aW(d.gDJ().length)+" \u0632\u064a\u0627\u062f\u0629")
w=u+t>0?D.dA:D.cS
x=C.b.aM(x," \u2022 ")
s=d.gDJ().length!==0?"\n\u0632\u064a\u0627\u062f\u0629: "+C.b.aM(d.gDJ(),"\u060c "):""
return new B.zM(w,C.kp,"\u0642\u0631\u0628\u062a! \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0644\u0648\u0651\u0646\u0629",x+"\n\u0627\u0644\u0623\u0635\u0641\u0631: \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u062f\u064a \u2014 \u0627\u0644\u0623\u062d\u0645\u0631: \u063a\u0644\u0637 \u2014 \u0627\u0644\u0631\u0645\u0627\u062f\u064a \u0627\u0644\u0645\u0634\u0637\u0648\u0628: \u0646\u0633\u064a\u062a\u0647\u0627."+s,null)},
ati(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d,g=h.f===D.hA,f=j.f
switch(f.a){case 2:if(j.z==null)x=0
else{f=Date.now()
w=j.z
w.toString
x=C.e.b7(new A.ba(f,0,!1).dG(w).a,1e6)}v=C.e.b7(B.bw7(B.AJ(j.gxM()).length).a,1e6)
f=j.gaKd()
w=96+26*j.y
u=D.dA.bQ(0.25)
w=A.l3(i,A.bxK(C.W,A.aA(i,D.abb,C.m,i,i,D.XG,i,84,i,i,i,i,84),i,new A.ar(u,i,i,i,i,i,C.cr),C.yT,i,w,w),C.r,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,f,i,i,i,i,i,i)
u=A.p("\u0628\u0646\u0633\u062c\u0651\u0644\u2026 "+B.bv7(x)+" / "+B.bv7(v),i,i,i,i,L.lb,i,i,i)
return A.ah(A.a([w,C.P,u,A.p(h.b.c?"\u0644\u0645\u0627 \u062a\u062e\u0644\u0635 \u0627\u0633\u0643\u062a \u062b\u0627\u0646\u064a\u0629 \u0623\u0648 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb":"\u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb \u0644\u0645\u0627 \u062a\u062e\u0644\u0635",i,i,i,i,F.ai,i,i,i),A.bW(D.aWx,i,i,i,f,i,i)],y.p),C.j,C.f,C.h)
case 3:t=C.d.dT((Date.now()-j.ay)/1000)
if(t<8)h="\u062b\u0648\u0627\u0646\u064a \u0648\u0646\u0642\u0648\u0644\u0643"
else h=t<25?"\u0644\u0633\u0647 \u0634\u063a\u0627\u0644\u064a\u0646 \u2014 \u0627\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0628\u062a\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0643\u062a\u0631 ("+E.aW(t)+" \u062b)":"\u0648\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0637\u0648\u0644 \u0645\u0646 \u0627\u0644\u0639\u0627\u062f\u064a \u2014 \u0644\u0648 \u0639\u0644\u0651\u0642 \u0647\u0646\u0639\u064a\u062f \u062a\u0634\u063a\u064a\u0644\u0647 \u0644\u0648\u062d\u062f\u0646\u0627 ("+E.aW(t)+" \u062b)"
return new A.a8(D.a6e,A.ah(A.a([C.qa,C.as,D.aSO,A.p(h,i,i,i,i,F.ai,C.ae,i,i)],y.p),C.j,C.f,C.h),i)
default:s=f===D.po
r=j.r
f=r==null
w=!f
q=w&&r.gpT()
u=A.c7(s?D.ta:L.Aw,i,i,i)
if(s)p="\u0648\u0642\u0651\u0641"
else p=w&&!q?"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u062d":"\u0627\u0633\u0645\u0639"
p=A.p(p,i,i,i,i,i,i,i,i)
o=A.kb(i,i,D.aIy,i,i)
u=A.aR(new A.xb(C.Vn,!0,new B.bk6(j,r,q),i,i,i,o,C.m,i,!1,i,!0,i,new A.RQ(p,u,o,i,i),i),1)
p=A.a([],y.n)
for(o=y.c,n=0;n<3;++n){m=D.Bz[n]
p.push(new A.eh(m,i,A.p("\xd7"+E.aW(m),i,i,i,i,i,i,i,i),o))}o=y.S
l=y.b
k=y.p
o=A.ak(A.a([u,C.ap,A.uY(new B.bk7(j),p,A.cP([h.b.b],o),!1,A.jo(i,i,i,new A.bd(new B.bk8(),l),i,i,i,i,new A.bd(new B.bk9(),l),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,C.df),o)],k),C.j,C.f,C.h,0,i)
h=g&&!s?j.gaGQ():i
u=A.c7(f?D.mH:C.kp,i,i,i)
if(g)f=f?"\u0633\u0645\u0651\u0639":"\u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a"
else f="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
f=A.p(f,i,i,i,i,C.cx,i,i,i)
p=q?N.h6:C.q
h=A.a([o,C.N,A.ka(u,f,h,A.kb(p,q?C.i:C.a5,D.oE,i,i))],k)
if(w&&j.ghV()<j.a.e)C.b.E(h,A.a([C.P,q?A.ka(D.acO,D.aVQ,new B.bka(j),A.kb(G.bW,C.a5,D.oE,i,i)):A.bW(D.aRs,i,i,i,new B.bkb(j),i,i)],k))
if(w){f=j.ghV()
w=j.a
u=w.e
f=f===u&&q&&u>w.d}else f=!1
if(f)h.push(new A.a8(C.qV,A.p(j.gSr()?"\u062e\u0644\u0651\u0635\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u062c\u0631\u0651\u0628 \xab\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636\xbb \u062a\u062d\u062a.":"\u062e\u0644\u0635\u062a \u0622\u062e\u0631 \u0622\u064a\u0629 \u2014 \u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0644\u0633\u0647 (\u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0635\u0641\u0631\u0627 \u0641\u0648\u0642).",i,i,i,i,D.U7,C.ae,i,i),i))
return A.ah(h,C.am,C.f,C.h)}}}
B.zM.prototype={
C(d){var x=this,w=null,v=x.c,u=v.bQ(0.12),t=A.ac(14),s=A.d2(v.bQ(0.5),1),r=y.p
return A.aA(w,A.ak(A.a([A.c7(x.d,v,w,w),C.ap,A.aR(A.ah(A.a([A.p(x.e,w,w,w,w,A.cB(w,w,v,w,w,w,w,w,w,w,w,15,w,w,C.a0,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),C.v5,A.p(x.f,w,w,w,w,D.U0,w,w,w)],r),C.z,C.f,C.h),1)],r),C.z,C.f,C.h,0,w),C.m,w,w,new A.ar(u,w,s,t,w,w,C.t),w,w,C.ay,C.aS,w,w,w)}}
B.zy.prototype={
V(){var x=y.S
return new B.Vo($.HM(),A.x(x,y.B),A.aC(x),A.x(x,y.N),A.dC(null,y.H))}}
B.Vo.prototype={
ag(){this.ap()
this.d.a7(this.gmN())},
uE(){if(this.c!=null)this.t(new B.bjP())},
l(){var x,w=this,v=w.d
v.S(w.gmN())
x=w.y
if(x!=null)x.aG()
v.a.UF()
w.az()},
CD(d){return this.aK2(d)},
aK2(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m
var $async$CD=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.t(new B.bjY(t,d))
r=t.y
if(r!=null)r.aG()
t.y=A.mh(C.fl,new B.bjZ(t))
v=3
r=t.d
q=t.a
p=q.f
q=q.c
q=B.bw7(B.AJ(H.HF(q,d,p.uN(q,d)).b).length)
p=t.a
o=p.f
p=p.c
p=A.d_(0,0,0,350*B.AJ(H.HF(p,d,o.uN(p,d)).b).length,0,0)
x=6
return A.d(r.a.a_g(r.b.c,q,p,new B.bk_(t,d),new B.bk0(t)),$async$CD)
case 6:v=1
x=5
break
case 3:v=2
m=u.pop()
r=A.Y(m)
if(r instanceof B.kv){s=r
r=t.y
if(r!=null)r.aG()
if(t.c!=null)t.t(new B.bk1(t,s))}else throw m
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$CD,w)},
Ba(d,e){return this.avE(d,e)},
avE(d,e){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Ba=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.e!==d){x=1
break}o=s.y
if(o!=null)o.aG()
s.t(new B.bjT(s,d))
n=d<s.a.e?d+1:null
r=s.d.a.a_j()
if(e&&n!=null)s.CD(n)
q=null
u=4
x=7
return A.d(r,$async$Ba)
case 7:q=g
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.Y(l)
if(o instanceof B.kv){p=o
s.t(new B.bjU(s,d,p))}else throw l
x=6
break
case 3:x=2
break
case 6:if(q!=null){o=q
s.at=s.at.bA(new B.bjV(s,o,d),y.H)}case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ba,w)},
gaDy(){var x,w,v,u,t=this
for(x=t.a.d,w=t.f,v=t.r,u=t.w;x<=t.a.e;++x)if(!w.aA(x)&&!v.m(0,x)&&!u.aA(x)&&x!==t.e)return x
return null},
aHt(){this.t(new B.bjW(this))},
C(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q.f===D.hA,o=s.e,n=s.gaDy(),m=s.f,l=m.a,k=s.w.a,j=s.a,i=l+k===j.e-j.d+1&&s.r.a===0&&o==null
l=A.w(m).i("c4<2>")
x=new A.aO(new A.c4(m,l),new B.bk2(),l.i("aO<L.E>")).gK(0)
l=H.jl(s.a.c)
m=y.p
q=A.a([new B.D_(q,!0,r),A.p("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 "+E.aW(s.a.d)+" \u0644\u062d\u062f "+E.aW(s.a.e)+" \u0645\u0646 \u062d\u0641\u0638\u0643\u060c \u0622\u064a\u0629 \u0622\u064a\u0629: \u0628\u0639\u062f \u0643\u0644 \u0622\u064a\u0629 \u062f\u0648\u0633 \xab\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629\xbb \u0648\u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0637\u0648\u0644 \u2014 \u0647\u0646\u0635\u062d\u0651\u062d \u0648\u0625\u0646\u062a \u0628\u062a\u0642\u0631\u0627.",r,r,r,r,F.ai,r,r,r),C.N],m)
for(w=s.a.d;w<=s.a.e;++w)q.push(s.aLm(w))
q.push(C.P)
k=s.Q
if(k!=null)q.push(A.p(k,r,r,r,r,D.vG,r,r,r))
k=s.as
if(k!=null){j=s.a
q.push(new B.zA(k,"review "+j.c+":"+j.d+"-"+j.e,r))}k=o==null
if(!k){j=E.aW(o)
if(s.z==null)v=0
else{v=Date.now()
u=s.z
u.toString
u=C.e.b7(new A.ba(v,0,!1).dG(u).a,1e6)
v=u}v=A.p("\u0628\u0646\u0633\u062c\u0651\u0644 \u0622\u064a\u0629 "+j+"\u2026 "+B.bv7(v),r,r,r,r,L.lb,C.ae,r,r)
j=A.mI(A.ac(6),A.CC(C.dV,D.dA,6,s.x),C.bt)
u=o<s.a.e
t=A.c7(u?P.As:D.ta,r,r,r)
C.b.E(q,A.a([v,C.Q,j,C.N,A.ka(t,A.p(u?"\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629":"\u062e\u0644\u0635\u062a",r,r,r,r,C.cx,r,r,r),new B.bk3(s,o),A.kb(C.q,C.a5,D.oE,r,r))],m))}else if(n!=null){j=p?new B.bk4(s,n):r
if(!p)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
else v=n===s.a.d?"\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0633\u0645\u064a\u0639":"\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+E.aW(n)
q.push(A.ka(D.abL,A.p(v,r,r,r,r,C.cx,r,r,r),j,A.kb(C.q,C.a5,D.oE,r,r)))}if(s.r.a!==0&&k)q.push(D.axc)
if(i){k=s.a
k=x===k.e-k.d+1
j=k?G.bW:D.cS
v=k?C.mD:C.kp
if(k)k="\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713 \u0633\u0645\u0651\u0639\u062a\u0647\u0645 \u0643\u0644\u0647\u0645 \u0635\u062d"
else{k=E.aW(x)
u=s.a
u=k+" \u0645\u0646 "+E.aW(u.e-u.d+1)+" \u0622\u064a\u0627\u062a \u0645\u0638\u0628\u0648\u0637\u0629"
k=u}u=s.a
u=x===u.e-u.d+1?"\u0631\u0628\u0646\u0627 \u064a\u062b\u0628\u0651\u062a\u0647\u0627 \u0641\u064a \u0642\u0644\u0628\u0643.":"\u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0641\u064a\u0647\u0627 \u0623\u0644\u0648\u0627\u0646 \u0648\u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a."
C.b.E(q,A.a([new B.zM(j,v,k,u,r),A.fU(D.acJ,D.aWa,s.gaHs(),r)],m))}q.push(C.N)
q.push(D.wh)
return M.vi(r,q,"\u0633\u0645\u0651\u0639 "+l)},
aLm(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.f.h(0,d),i=l.w.h(0,d)
if(l.e===d)x=D.abs
else if(l.r.m(0,d))x=O.oF
else if(i!=null)x=D.abB
else if(j!=null){w=j.gpT()?C.cT:D.a9o
x=A.c7(w,j.gpT()?G.bW:D.cS,k,k)}else x=D.aaM
w=y.p
v=A.a([A.ak(A.a([A.p("\u0622\u064a\u0629 "+E.aW(d),k,k,k,k,D.aOk,k,k,k),C.dt,x],w),C.j,C.f,C.h,0,k)],w)
if(i!=null)v.push(A.p(i,k,k,k,k,D.TX,k,k,k))
if(j!=null&&!j.gpT()){u=y.R
t=A.a([],u)
for(s=j.a,r=0;r<s.length;++r){q=s[r]
p=j.gG6()
o=J.bs(p)
n=o.h(p,r)
A:{if(D.fR===n){m=G.bW
break A}if(D.pb===n){m=D.cS
break A}if(D.pc===n){m=D.dA
break A}m=C.eK
break A}m=D.hU.aQe(m,o.h(p,r)===D.pd?C.oN:k,22)
C.b.E(t,A.a([new A.fj(q.a,k,k,C.bl,k,k,k,k,k,k,m),K.vB],u))}w=A.a([C.aT,A.a9C(A.dO(t,k,k,k,k,k,k,k,k,k,k),k,C.ae,C.aL)],w)
if(C.c.ao(j.c).length===0)w.push(D.aTT)
C.b.E(v,w)}return new E.cT(A.ah(v,C.am,C.f,C.h),C.eQ,C.eP,k,!1,k)}}
B.zx.prototype={
V(){return new B.Vn($.HM())}}
B.Vn.prototype={
ag(){this.ap()
var x=this.d
x.a7(this.gmN())
x.WR()},
uE(){if(this.c!=null)this.t(new B.bjG())},
l(){this.d.S(this.gmN())
this.az()},
C(d){var x,w,v,u,t,s=this,r=null,q=s.d.c,p=q.gakI(),o=A.a([],y.t)
for(x=78;x<=114;++x)o.push(x)
w=C.b.n0(o,0,new B.bjN(q))
v=C.b.n0(o,0,new B.bjO())
o=y.p
o=A.a([A.ak(A.a([A.aR(s.Pj(E.aW(q.gafP()),"\u0622\u064a\u0629 \u0645\u062d\u0641\u0648\u0638\u0629"),1),C.ap,A.aR(s.Pj(E.aW(q.acz()),"\u064a\u0648\u0645 \u0648\u0631\u0627 \u0628\u0639\u0636"),1),C.ap,A.aR(s.Pj(E.aW(q.e),"\u0623\u0637\u0648\u0644 \u0633\u0644\u0633\u0644\u0629"),1)],o),C.j,C.f,C.h,0,r),C.N,new E.cT(A.ah(A.a([A.p("\u062c\u0632\u0621 \u0639\u0645\u0651: "+E.aW(C.d.ar(w*100/v))+"\u066a",r,r,r,r,F.b0,r,r,r),C.Q,A.mI(A.ac(6),A.CC(C.dV,G.bW,8,w/v),C.bt),C.aT,A.p(E.aW(w)+" \u0645\u0646 "+E.aW(v)+" \u0622\u064a\u0629",r,r,r,r,F.ai,r,r,r)],o),C.z,C.f,C.h),C.ah,C.ay,r,!1,r)],o)
if(p.length===0)o.push(D.axk)
for(u=p.length,t=0;t<p.length;p.length===u||(0,A.A)(p),++t)o.push(s.aLo(p[t]))
o.push(C.P)
u=$.ab().b
u===$&&A.b()
u=u.gbR().e.a
o.push(A.p((u==null?r:u.r)!=null?"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643 \u0648\u064a\u0638\u0647\u0631 \u0639\u0644\u0649 \u0623\u064a \u062c\u0647\u0627\u0632 \u062a\u062f\u062e\u0644 \u0645\u0646\u0647.":"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647. \u0633\u062c\u0651\u0644 \u062f\u062e\u0648\u0644 \u0639\u0634\u0627\u0646 \u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643.",r,r,r,r,F.ai,r,r,r))
return M.vi(r,o,"\u062a\u0642\u062f\u0651\u0645\u064a \u0641\u064a \u0627\u0644\u062d\u0641\u0638")},
Pj(d,e){var x=null
return new E.cT(A.ah(A.a([A.p(d,x,x,x,x,D.aO6,x,x,x),A.p(e,x,x,x,x,C.Ub,C.ae,x,x)],y.p),C.j,C.f,C.h),C.ah,C.J,x,!1,x)},
aLo(d){var x=null,w=this.d.c,v=I.bY[d-1].a[1],u=w.Xn(d),t=w.aV5(d),s=y.p,r=A.ak(A.a([A.aR(A.p(H.jl(d),x,x,x,x,F.b0,x,x,x),1),A.p(E.aW(C.d.ar(u*100/v))+"\u066a",x,x,x,x,D.aOZ,x,x,x)],s),C.j,C.f,C.h,0,x),q=A.mI(A.ac(6),A.CC(C.dV,G.bW,7,u/v),C.bt),p=E.aW(u),o=E.aW(v),n=t>0?" \u2022 \u0628\u062a\u0631\u0627\u062c\u0639 "+E.aW(t):""
return new E.cT(A.ah(A.a([r,C.Q,q,C.aT,A.p("\u0645\u062d\u0641\u0648\u0638 "+p+" \u0645\u0646 "+o+n,x,x,x,x,F.ai,x,x,x)],s),C.z,C.f,C.h),C.ah,C.ay,new B.bjM(this,d),!1,x)},
H6(d){return this.au5(d)},
au5(d){var x=0,w=A.n(y.H),v=this,u,t
var $async$H6=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=I.bY[d-1].a[1]
t=v.c
t.toString
x=2
return A.d(A.fE(C.d3,new B.bjL(v,d,u),t,!0,null,null,!1,y.H),$async$H6)
case 2:return A.l(null,w)}})
return A.m($async$H6,w)}}
B.a9Z.prototype={
JC(d,e){var x=null,w=A.zg(x,x,x,x,x,x,x,x,x,x,x,D.aIj,C.J,x,x,x,x,C.nY,x,x)
return A.bW(A.p(d,x,x,x,x,C.js,x,x,x),x,x,x,new B.aS9(e),x,w)},
C(d){var x=this,w=y.p
return new E.cT(A.ah(A.a([D.aVH,C.Q,D.aWw,A.eU(A.a([x.JC("tarteel-ai/whisper-base-ar-quran","https://huggingface.co/tarteel-ai/whisper-base-ar-quran"),x.JC("iqbalaesthetic/Basira","https://huggingface.co/iqbalaesthetic/Basira")],w),0,12),D.aRf,x.JC("tanzil.net","https://tanzil.net"),D.aXk,x.JC("everyayah.com","https://everyayah.com")],w),C.z,C.f,C.h),C.ah,C.ay,null,!1,null)}}
B.zA.prototype={
V(){return new B.Vq()}}
B.Vq.prototype={
ga7k(){var x=this.a
return B.c2S(x.c,x.d,$.bwG().Dt())},
JE(){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k
var $async$JE=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.t(new B.bkJ(s))
v=3
r=A.bqz()
n=s.ga7k()
m=y.N
q=A.x(m,m)
J.fF(q,"app","masjid")
J.fF(q,"path","tutor \u203a "+s.a.d)
if(r!=null){m=r.length>160?C.c.W(r,0,160):r
J.fF(q,"ua",m)}x=6
return A.d(A.a0Y(n,null,C.zD,q),$async$JE)
case 6:if(s.c!=null)s.t(new B.bkK(s))
t.push(5)
x=4
break
case 3:v=2
k=u.pop()
p=A.Y(k)
o=p instanceof A.d4?p.a:"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0628\u0639\u062a \u2014 \u0627\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0646\u062a \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
if(s.c!=null)s.t(new B.bkL(s,o))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.t(new B.bkM(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$JE,w)},
C(d){var x,w,v,u=this,t=null,s=y.p
s=A.a([A.du(!1,t,!0,new A.a8(C.z4,A.ak(A.a([A.c7(u.d?C.t_:C.mE,C.cs,t,18),C.hN,D.aWT],s),C.j,C.f,C.h,0,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,new B.bkO(u),t,t,t,t,t,t,t)],s)
if(u.d){x=A.ac(8)
s.push(A.aA(t,A.Ed(u.ga7k(),D.aL2,t,C.o),C.m,t,t,new A.ar(K.qm,t,t,x,t,t,C.t),t,t,D.a6m,C.eq,t,t,1/0))}if(u.f)s.push(D.aRl)
else{x=A.zg(t,t,t,t,t,t,t,t,t,t,t,C.SO,C.J,t,t,t,t,C.nY,t,t)
w=u.e
v=w?t:u.gaLn()
s.push(A.i9(w?D.aII:D.acr,D.aVa,v,x))}x=u.r
if(x!=null)s.push(A.p(x,t,t,t,t,D.TX,t,t,t))
return new A.a8(C.ay,A.ah(s,C.z,C.f,C.h),t)}}
var z=a.updateTypes(["a9<~>()","~()","B(ml)","a9<F9>()","a9<F7>()","a9<F8>()","Q<ml>()","B(pH)","bj(nk)","zz(z)","zx(z)","B(lO)","zy(z)","B(DP)"])
B.aUi.prototype={
$1(d){var x,w
if(d.m(0,C.C)){x=this.a
if(x.fy===D.jz)x=null
else{x=x.goC().k3
x=A.aH(31,x.B()>>>16&255,x.B()>>>8&255,x.B()&255)}return x}x=this.a
if(x.fy===D.jz)x=null
else{x=x.goC()
w=x.p3
x=w==null?x.k2:w}return x},
$S:29}
B.aSa.prototype={
$0(){var x=0,w=A.n(y.m),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=A.aa(A.co(b.G.document).baseURI)
q=A.bT(r,0,null).X("quran_tutor/tutor.js?v=3").j(0)
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
m=B.bTL("network",A.f(o))
throw A.o(m)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:299}
B.aSd.prototype={
$1(d){var x=null
return A.bmD(A.cb(d,"persist",x,x,x,x))},
$S:896}
B.aSc.prototype={
$0(){var x=0,w=A.n(y.C),v,u=this,t,s,r,q,p,o,n,m,l
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.a
n=A
m=A
l=A
x=4
return A.d(q.oM(),$async$$0)
case 4:x=3
return A.d(n.e1(m.co(l.cb(e,"loadModel",A.bn9(new B.aSb(u.b)),u.c,u.d,null)),y.m),$async$$0)
case 3:p=e
o=A.X(p.device)
if(o==null)o=null
if(o==null)o=""
t=A.X(p.dtype)
if(t==null)t=null
if(t==null)t=""
s=q.oL(p,"ms")
r=q.mB(p,"cached")
A.X(p.backend)
v=new B.F7(o,t,s,r,q.oL(p,"threads"),q.mB(p,"isolated"),q.oL(p,"warmMs"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+4}
B.aSb.prototype={
$2(d,e){this.a.$2(C.d.ar(d),C.d.ar(e))},
$S:897}
B.aSh.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=v.a
s=t.a
x=s==null?2:3
break
case 2:x=4
return A.d(t.oM(),$async$$0)
case 4:s=e
case 3:u={}
u.maxMs=C.e.b7(v.b.a,1000)
u.autoStop=v.c
u.minMs=C.e.b7(v.d.a,1000)
u.onLevel=A.eV(new B.aSf(v.e))
u.onAutoStop=A.eV(new B.aSg(v.f))
x=5
return A.d(A.e1(A.co(A.cb(s,"startRecording",u,null,null,null)),y.O),$async$$0)
case 5:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.aSf.prototype={
$1(d){return this.a.$1(d)},
$S:54}
B.aSg.prototype={
$1(d){return this.a.$1(d)},
$S:12}
B.aSi.prototype={
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
return A.d(t.oM(),$async$$0)
case 7:x=5
break
case 6:e=s
case 5:x=3
return A.d(q.e1(p.co(o.cb(e,"stopRecording",null,null,null,null)),y.m),$async$$0)
case 3:r=e
v=new B.F8(r,A.dc(r.seconds))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+5}
B.aSk.prototype={
$0(){var x=0,w=A.n(y._),v,u=this,t,s,r,q,p,o
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.b.a
s=u.a
r=s
q=A
p=A
o=A
x=4
return A.d(s.oM(),$async$$0)
case 4:x=3
return A.d(q.e1(p.co(o.cb(e,"transcribe",t.audio,t.rate,s.a6l(u.c),null)),y.m),$async$$0)
case 3:v=r.a9j(e)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+3}
B.aSj.prototype={
$0(){var x=0,w=A.n(y._),v,u=this,t,s,r,q,p
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t
r=A
q=A
p=A
x=4
return A.d(t.oM(),$async$$0)
case 4:x=3
return A.d(r.e1(q.co(p.cb(e,"transcribeUrl",u.b,t.a6l(u.c),null,null)),y.m),$async$$0)
case 3:v=s.a9j(e)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+3}
B.aSe.prototype={
$1(d){return d},
$S:24}
B.aJJ.prototype={
$0(){var x,w,v,u,t=this.a,s=A.c2(t.a.length,D.pd,!1,y.G)
for(t=t.b,x=t.length,w=0;w<x;++w){v=t[w]
u=v.a
if(u!=null)s[u]=v.d}return s},
$S:z+6}
B.aJI.prototype={
$1(d){return d===D.fR},
$S:z+2}
B.bn4.prototype={
$2(d,e){var x,w=e.length
if(d.length<w)return!1
for(x=0;x<w;++x)if(B.brp(e[x],d[x])<0.75)return!1
return!0},
$S:898}
B.bos.prototype={
$1(d){return d.length!==0},
$S:11}
B.aSn.prototype={
$1(d){return d.a===D.dR},
$S:z+7}
B.aSo.prototype={
$1(d){return C.e.b7(d,1000)},
$S:76}
B.aSl.prototype={
$1(d){return C.d.bS(d)},
$S:899}
B.aSp.prototype={
$0(){var x=0,w=A.n(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$$0=A.j(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d(A.iR("mt.tutor.settings"),$async$$0)
case 7:r=a3
if(r!=null){k=y.P.a(C.Z.eU(r,null))
j=A.bU(k.h(0,"n"))
j=j==null?null:C.d.bS(j)
j=C.e.co(j==null?2:j,1,5)
i=C.b.m(D.Bz,k.h(0,"r"))?A.em(k.h(0,"r")):1
h=A.hz(k.h(0,"auto"))
g=A.hz(k.h(0,"hide"))
k=A.hz(k.h(0,"in"))
s.a.b=new B.PM(j,i,h!==!1,g===!0,k===!0)}u=2
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
return A.d(A.iR("mt.tutor.progress"),$async$$0)
case 12:q=a3
if(q!=null)s.a.c=B.bup(y.P.a(C.Z.eU(q,null)))
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
return A.d(A.iR("mt.tutor.last"),$async$$0)
case 17:p=a3
if(p!=null){o=y.P.a(C.Z.eU(p,null))
n=C.d.bS(A.dw(J.b7(o,"s")))
m=C.d.bS(A.dw(J.b7(o,"f")))
l=C.d.bS(A.dw(J.b7(o,"t")))
if(B.bHy(n,m)&&B.bHy(n,l)&&m<=l)s.a.z=new A.bo(n,m,l)}u=2
x=16
break
case 14:u=13
a0=t.pop()
x=16
break
case 13:x=2
break
case 16:k=s.a
if(k.b.e&&k.a.a_5()){k.a.adn()
x=1
break}a1=k
x=18
return A.d(k.a.Gq(),$async$$0)
case 18:a1.d=a3
k.e=!0
k.a_()
if(k.b.e)k.za()
k.tX()
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:94}
B.aSq.prototype={
$2(d,e){var x=this.a
x.r=d
x.w=e
x.a_()},
$S:900}
B.aSr.prototype={
$2(d,e){return C.e.b7(A.en(A.f(d),null,null),1000)===this.a},
$S:901}
B.bcF.prototype={
$1(d){var x=0,w=A.n(y.a),v=this,u,t
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.d(u.d.a.Aj(),$async$$1)
case 2:t=f
if(u.c!=null)u.t(new B.bcE(u,t))
return A.l(null,w)}})
return A.m($async$$1,w)},
$S:902}
B.bcE.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bcG.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bcD(x,d))},
$S:z+8}
B.bcD.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bcH.prototype={
$1(d){},
$S:22}
B.bcr.prototype={
$0(){},
$S:0}
B.bcx.prototype={
$1(d){var x=this.c,w=this.a.w
w.toString
return new B.zz(this.b,x.a,x.b,w,null)},
$S:z+9}
B.bcy.prototype={
$0(){},
$S:0}
B.bcB.prototype={
$0(){var x=y.z
return A.ao(this.a,!1).cm(A.cm(new B.bcA(),null,x),x)},
$S:0}
B.bcA.prototype={
$1(d){return D.aXX},
$S:z+10}
B.bcC.prototype={
$0(){return B.bHj(this.a)},
$S:0}
B.bcu.prototype={
$0(){var x=this.b
return this.a.uF(x.a,x.b,x.c)},
$S:0}
B.bcv.prototype={
$1(d){return this.a.t(new B.bct())},
$S:12}
B.bct.prototype={
$0(){},
$S:0}
B.bcw.prototype={
$0(){var x=this.a
return x.t(new B.bcs(x))},
$S:0}
B.bcs.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.bcz.prototype={
$0(){return this.a.aLl(this.b)},
$S:0}
B.bqm.prototype={
$1(d){return new A.ja(new B.bqj(this.a,this.b,this.c),null)},
$S:60}
B.bqj.prototype={
$2(d,e){var x,w,v=null,u=this.b,t=new B.bql(u,e),s=this.a,r=new B.bqk(s,e),q=A.p(H.jl(this.c),v,v,v,v,C.oS,v,v,v),p=A.p("\u0647\u062a\u0633\u0645\u0651\u0639 \u0623\u0646\u0647\u064a \u0622\u064a\u0627\u062a\u061f ("+E.aW(u)+" \u0622\u064a\u0629)",v,v,v,v,F.ai,v,v,v),o=y.p,n=A.a([],o)
if(u<=30)n.push(r.$3("\u0627\u0644\u0633\u0648\u0631\u0629 \u0643\u0644\u0647\u0627",1,u))
x=u<5
w=E.aW(x?u:5)
x=x?u:5
n.push(r.$3("\u0623\u0648\u0644 "+w+" \u0622\u064a\u0627\u062a",1,x))
x=s.a
if(x>1){x=E.aW(x)
w=s.a
n.push(r.$3("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+x,w,C.e.co(w+4,1,u)))}u=A.a([q,C.aT,p,C.N,A.eU(n,6,8),C.P,A.ak(A.a([t.$3("\u0645\u0646",s.b,new B.bqe(s)),D.aIE,t.$3("\u0644\u062d\u062f",s.c,new B.bqf(s))],o),C.j,C.f,C.h,0,v)],o)
if(s.c-s.b>=10)u.push(D.axf)
u.push(C.aK)
u.push(A.ju(D.aSs,new B.bqg(s,d),A.kb(C.q,C.a5,D.aIv,v,v)))
return A.dN(!0,new A.a8(C.za,A.ah(u,C.am,C.f,C.a_),v),C.J,!0)},
$S:325}
B.bql.prototype={
$3(d,e,f){var x,w,v,u=null,t=A.p(d,u,u,u,u,C.hX,u,u,u),s=A.a([],y.I)
for(x=this.a,w=y.r,v=1;v<=x;++v)s.push(new A.cZ(v,A.p("\u0622\u064a\u0629 "+E.aW(v),u,u,u,u,u,u,u,u),C.aH,u,w))
return A.aR(A.ah(A.a([t,T.BM(C.d3,!0,s,320,new B.bqi(this.b,f),D.aPg,e,y.S)],y.p),C.z,C.f,C.h),1)},
$S:904}
B.bqi.prototype={
$1(d){return d==null?null:this.a.$1(new B.bqh(this.b,d))},
$S:52}
B.bqh.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bqk.prototype={
$3(d,e,f){var x=null
return new B.Xs(A.p(d,x,x,x,x,x,x,x,x),new B.bqd(this.a,this.b,e,f),x)},
$S:905}
B.bqd.prototype={
$0(){var x=this
return x.b.$1(new B.bqc(x.a,x.c,x.d))},
$S:0}
B.bqc.prototype={
$0(){var x=this.a
x.b=this.b
x.c=this.c},
$S:0}
B.bqe.prototype={
$1(d){var x=this.a
x.b=d
if(x.c<d)x.c=d},
$S:31}
B.bqf.prototype={
$1(d){var x=this.a
x.c=d
if(x.b>d)x.b=d},
$S:31}
B.bqg.prototype={
$0(){var x=this.a
return A.ao(this.b,!1).bq(new A.P(x.b,x.c))},
$S:0}
B.bk5.prototype={
$0(){},
$S:0}
B.bkl.prototype={
$0(){var x=this.a
x.e=this.b
x.f=D.jH
x.w=x.r=null
x.x=!1
x.ch=x.ax=x.as=null},
$S:0}
B.bkp.prototype={
$0(){var x=this.a
return x.f=x.r!=null?D.fX:D.jH},
$S:0}
B.bkq.prototype={
$0(){var x=this.a
x.f=D.po
x.as=null},
$S:0}
B.bkr.prototype={
$0(){var x=this.a
x.f=this.b
if(!this.c&&x.as==null)x.as=null},
$S:0}
B.bkt.prototype={
$0(){var x=this.a
x.f=D.pp
x.as=null
x.y=0
x.z=new A.ba(Date.now(),0,!1)
x.ax=null},
$S:0}
B.bku.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bks())},
$S:39}
B.bks.prototype={
$0(){},
$S:0}
B.bkw.prototype={
$1(d){return this.a.y=d},
$S:54}
B.bkv.prototype={
$1(d){return this.a.xI()},
$S:12}
B.bkx.prototype={
$0(){var x,w=this.a
w.f=w.r!=null?D.fX:D.jH
x=this.b
w.as=B.HH(x)
w.at=x},
$S:0}
B.bkz.prototype={
$0(){var x=this.a
x.f=D.ls
x.ay=Date.now()},
$S:0}
B.bkA.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bky())},
$S:39}
B.bky.prototype={
$0(){},
$S:0}
B.bkk.prototype={
$0(){var x=this.a
x.f=x.r!=null?D.fX:D.jH
x.as=this.b
x.at=this.c},
$S:0}
B.bkm.prototype={
$0(){var x=this.b
x.r=this.c
x.w=this.a.a
x.f=D.fX
x.x=!1},
$S:0}
B.bkd.prototype={
$0(){var x=this.a
x.f=D.ls
x.ay=Date.now()
x.as=null},
$S:0}
B.bke.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bkc())},
$S:39}
B.bkc.prototype={
$0(){},
$S:0}
B.bkf.prototype={
$1(d){return d.d!==D.fR},
$S:z+11}
B.bkg.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.bkF.prototype={
$0(){return B.bHj(this.a)},
$S:0}
B.bkG.prototype={
$1(d){var x=this.a.d
return x.os(x.b.aca(d))},
$S:5}
B.bkH.prototype={
$0(){var x=y.z
return A.ao(this.b,!1).cm(A.cm(new B.bkE(this.a),null,x),x)},
$S:0}
B.bkE.prototype={
$1(d){var x=this.a.a
return new B.zy(x.c,x.d,x.e,x.f,null)},
$S:z+12}
B.bkI.prototype={
$0(){this.a.d.a.aZ9()
this.b.U(y.q).f.ba(D.aJ7)},
$S:0}
B.bkj.prototype={
$2(d,e){return C.bK},
$S:51}
B.bki.prototype={
$2(d,e){var x,w,v,u=null,t=this.a,s=t.a,r=s.d+e
switch(t.d.c.Xw(s.c,r).a.a){case 2:s=G.bW
break
case 1:s=D.cS
break
case 0:s=N.h6
break
default:s=u}x=A.ac(18)
w=t.f===D.ls?u:new B.bkh(t,r)
v=s.bQ(0.25)
if(r===t.ghV())s=C.i
s=A.d2(s,r===t.ghV()?2:1)
return A.du(!1,x,!0,A.aA(C.W,A.p(E.aW(r),u,u,u,u,D.aMh,u,u,u),C.m,u,u,new A.ar(v,u,s,u,u,u,C.cr),u,u,u,u,u,u,36),u,!0,u,u,u,u,u,u,u,u,u,u,w,u,u,u,u,u,u,u)},
$S:124}
B.bkh.prototype={
$0(){return this.a.R5(this.b)},
$S:0}
B.bko.prototype={
$0(){var x=this.a
return x.t(new B.bkn(x))},
$S:0}
B.bkn.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bkB.prototype={
$1(d){return d===D.pb},
$S:z+2}
B.bkC.prototype={
$1(d){return d===D.pc},
$S:z+2}
B.bkD.prototype={
$1(d){return d===D.pd},
$S:z+2}
B.bk6.prototype={
$0(){var x=this.b!=null&&!this.c?1:null
return this.a.JD(x)},
$S:0}
B.bk7.prototype={
$1(d){var x=this.a.d
return x.os(x.b.aPN(d.ga6(d)))},
$S:102}
B.bk9.prototype={
$1(d){return d.m(0,C.V)?C.a5:C.i},
$S:4}
B.bk8.prototype={
$1(d){return d.m(0,C.V)?C.q:C.R},
$S:4}
B.bka.prototype={
$0(){var x=this.a
return x.R5(x.ghV()+1)},
$S:0}
B.bkb.prototype={
$0(){var x=this.a
return x.R5(x.ghV()+1)},
$S:0}
B.bjP.prototype={
$0(){},
$S:0}
B.bjY.prototype={
$0(){var x=this.a
x.e=this.b
x.Q=null
x.x=0
x.z=new A.ba(Date.now(),0,!1)},
$S:0}
B.bjZ.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bjX())},
$S:39}
B.bjX.prototype={
$0(){},
$S:0}
B.bk0.prototype={
$1(d){return this.a.x=d},
$S:54}
B.bk_.prototype={
$1(d){return this.a.Ba(this.b,!1)},
$S:12}
B.bk1.prototype={
$0(){var x,w=this.a
w.e=null
x=this.b
w.Q=B.HH(x)
w.as=x},
$S:0}
B.bjT.prototype={
$0(){var x=this.a
x.e=null
x.r.D(0,this.b)},
$S:0}
B.bjU.prototype={
$0(){var x,w=this.a,v=this.b
w.r.I(0,v)
x=this.c
w.w.n(0,v,B.HH(x))
w.as=x},
$S:0}
B.bjV.prototype={
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
return A.d(n.a.ahD(s.b,B.AJ(H.HF(l,m,k.uN(l,m)).b).length),$async$$1)
case 6:r=f
l=o.a
k=l.f
l=l.c
q=B.bFI(H.HF(l,m,k.uN(l,m)).b,r.a)
if(C.c.ao(q.c).length!==0){l=n.c
k=o.a.c
j=q.gpT()
l.agJ(k,m,n.b.a,j)}n.wp()
if(o.c!=null)o.t(new B.bjQ(o,m,q))
t.push(5)
x=4
break
case 3:v=2
h=u.pop()
o=A.Y(h)
if(o instanceof B.kv){p=o
o=s.a
if(o.c!=null)o.t(new B.bjR(o,s.c,p))}else throw h
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
o=s.a
if(o.c!=null)o.t(new B.bjS(o,s.c))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$$1,w)},
$S:189}
B.bjQ.prototype={
$0(){var x=this.c
this.a.f.n(0,this.b,x)
return x},
$S:0}
B.bjR.prototype={
$0(){var x=this.a,w=this.c
x.w.n(0,this.b,B.HH(w))
x.as=w},
$S:0}
B.bjS.prototype={
$0(){return this.a.r.I(0,this.b)},
$S:0}
B.bjW.prototype={
$0(){var x=this.a
x.f.af(0)
x.w.af(0)
x.as=null},
$S:0}
B.bk2.prototype={
$1(d){return d.gpT()},
$S:z+13}
B.bk3.prototype={
$0(){return this.a.Ba(this.b,!0)},
$S:0}
B.bk4.prototype={
$0(){return this.a.CD(this.b)},
$S:0}
B.bjG.prototype={
$0(){},
$S:0}
B.bjN.prototype={
$2(d,e){return d+this.a.Xn(e)},
$S:101}
B.bjO.prototype={
$2(d,e){return d+I.bY[e-1].a[1]},
$S:101}
B.bjM.prototype={
$0(){return this.a.H6(this.b)},
$S:0}
B.bjL.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.b,o=A.p(H.jl(p),q,q,q,q,C.oS,q,q,q),n=y.p,m=A.a([],n)
for(x=this.c,w=this.a,v=w.d,u=p*1000,t=1;t<=x;++t){s=new A.bb(10,10)
r=v.c.a.h(0,u+t)
switch((r==null?$.pw():r).a.a){case 2:r=G.bW.bQ(0.35)
break
case 1:r=D.cS.bQ(0.35)
break
case 0:r=C.y_
break
default:r=q}m.push(A.aA(C.W,A.p(E.aW(t),q,q,q,q,D.aLF,q,q,q),C.m,q,q,new A.ar(r,q,q,new A.dh(s,s,s,s),q,q,C.t),q,38,q,q,q,q,38))}return A.dN(!0,new A.a8(C.it,A.ah(A.a([o,C.aT,D.aUj,C.N,new A.ed(D.Xy,A.i6(A.eU(m,6,6),q,C.r,q,q,C.v),q),C.as,A.bW(D.aVc,q,q,q,new B.bjK(w,d,p),q,q)],n),C.am,C.f,C.a_),q),C.J,!0)},
$S:48}
B.bjK.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.b
t=v.c
x=4
return A.d(A.eL(null,new B.bjJ(t),u,y.y),$async$$0)
case 4:x=e===!0?2:3
break
case 2:x=5
return A.d(v.a.d.EW(t),$async$$0)
case 5:if(u.e!=null)A.ao(u,!1).ei()
case 3:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.bjJ.prototype={
$1(d){var x=null,w=A.p("\u0647\u062a\u0628\u062f\u0623 "+H.jl(this.a)+" \u0645\u0646 \u0627\u0644\u0623\u0648\u0644.",x,x,x,x,x,x,x,x)
return A.eO(A.a([A.bW(C.vU,x,x,x,new B.bjH(d),x,x),A.bW(D.aWv,x,x,x,new B.bjI(d),x,x)],y.p),w,D.aW1)},
$S:19}
B.bjH.prototype={
$0(){A.ao(this.a,!1).bq(!1)
return null},
$S:0}
B.bjI.prototype={
$0(){A.ao(this.a,!1).bq(!0)
return null},
$S:0}
B.br3.prototype={
$1(d){var x=this.a
return new A.jy(new B.br2(x),null,x,null)},
$S:906}
B.br2.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.a,r=s.b,q=A.a([],y.n)
for(x=y.c,w=1;w<=5;++w)q.push(new A.eh(w,t,A.p(E.aW(w),t,t,t,t,t,t,t,t),x))
x=y.S
v=y.b
u=y.p
x=A.a([D.aRd,C.as,D.aVs,C.Q,A.uY(new B.bqY(s,r),q,A.cP([r.a],x),!1,A.jo(t,t,t,new A.bd(new B.bqZ(),v),t,t,t,t,new A.bd(new B.br_(),v),t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),x),C.P,A.r7(C.q,C.J,t,new B.br0(s,r),D.aTX,D.aX1,r.c),A.r7(C.q,C.J,t,new B.br1(s,r),t,D.aR_,r.d)],u)
s=s.x
if(s!=null)C.b.E(x,A.a([C.aT,A.p("\u0627\u0644\u0645\u0639\u0627\u0644\u062c: "+s.glm(),t,t,t,t,F.ai,t,C.aL,t)],u))
x.push(C.P)
x.push(D.UF)
return A.dN(!0,A.i6(A.ah(x,C.am,C.f,C.h),t,C.r,C.it,t,C.v),C.J,!0)},
$S:907}
B.bqY.prototype={
$1(d){return this.a.os(this.b.aPK(d.ga6(d)))},
$S:102}
B.br_.prototype={
$1(d){return d.m(0,C.V)?C.a5:C.i},
$S:4}
B.bqZ.prototype={
$1(d){return d.m(0,C.V)?C.q:C.R},
$S:4}
B.br0.prototype={
$1(d){return this.a.os(this.b.aPe(d))},
$S:5}
B.br1.prototype={
$1(d){return this.a.os(this.b.aca(d))},
$S:5}
B.aS9.prototype={
$0(){return A.eX(A.bT(this.a,0,null),C.c2,null)},
$S:0}
B.brh.prototype={
$1(d){var x,w=A.aP("https?://",!0,!1)
w=A.bM(d,w,"")
x=A.aP("www\\.",!0,!1)
return A.AK(A.bM(w,x,"www[.]"),A.aP("([A-Za-z0-9-]+)\\.(com|net|org|io|xyz|ru|info|me|link)\\b",!1,!1),new B.bri(),null)},
$S:24}
B.bri.prototype={
$1(d){return A.f(d.h(0,1))+"[.]"+A.f(d.h(0,2))},
$S:58}
B.bkJ.prototype={
$0(){var x=this.a
x.e=!0
x.r=null},
$S:0}
B.bkK.prototype={
$0(){return this.a.f=!0},
$S:0}
B.bkL.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bkM.prototype={
$0(){return this.a.e=!1},
$S:0}
B.bkO.prototype={
$0(){var x=this.a
return x.t(new B.bkN(x))},
$S:0}
B.bkN.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.brg.prototype={
$1(d){return d==null?"\u2013":A.f(d)},
$S:179};(function installTearOffs(){var x=a._instance_0u
x(B.aa_.prototype,"gaV6","aV7",1)
var w
x(w=B.PN.prototype,"gaVm","za",0)
x(w,"gapv","tX",0)
x(w=B.Tv.prototype,"gmN","uE",1)
x(w,"gaEW","Iu",0)
x(w=B.Vp.prototype,"gmN","uE",1)
x(w,"gaGQ","II",0)
x(w,"gaKd","xI",0)
x(w,"gatR","H3",0)
x(w=B.Vo.prototype,"gmN","uE",1)
x(w,"gaHs","aHt",1)
x(B.Vn.prototype,"gmN","uE",1)
x(B.Vq.prototype,"gaLn","JE",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.FU,[B.aY4,B.ml,B.B_,B.CZ,B.Ae])
x(A.a5,[B.Xs,B.D_,B.Rm,B.zM,B.a9Z])
w(B.aUh,A.wM)
x(A.hG,[B.aUi,B.aSd,B.aSf,B.aSg,B.aSe,B.aJI,B.bos,B.aSn,B.aSo,B.aSl,B.bcF,B.bcG,B.bcH,B.bcx,B.bcA,B.bcv,B.bqm,B.bql,B.bqi,B.bqk,B.bqe,B.bqf,B.bku,B.bkw,B.bkv,B.bkA,B.bke,B.bkf,B.bkG,B.bkE,B.bkB,B.bkC,B.bkD,B.bk7,B.bk9,B.bk8,B.bjZ,B.bk0,B.bk_,B.bjV,B.bk2,B.bjL,B.bjJ,B.br3,B.bqY,B.br_,B.bqZ,B.br0,B.br1,B.brh,B.bri,B.brg])
x(A.N,[B.aa_,B.PO,B.F7,B.F9,B.F8,B.kv,B.N6,B.lO,B.DP,B.pH,B.aa0,B.PM])
x(A.k3,[B.aSa,B.aSc,B.aSh,B.aSi,B.aSk,B.aSj,B.aJJ,B.aSp,B.bcE,B.bcD,B.bcr,B.bcy,B.bcB,B.bcC,B.bcu,B.bct,B.bcw,B.bcs,B.bcz,B.bqh,B.bqd,B.bqc,B.bqg,B.bk5,B.bkl,B.bkp,B.bkq,B.bkr,B.bkt,B.bks,B.bkx,B.bkz,B.bky,B.bkk,B.bkm,B.bkd,B.bkc,B.bkg,B.bkF,B.bkH,B.bkI,B.bkh,B.bko,B.bkn,B.bk6,B.bka,B.bkb,B.bjP,B.bjY,B.bjX,B.bk1,B.bjT,B.bjU,B.bjQ,B.bjR,B.bjS,B.bjW,B.bk3,B.bk4,B.bjG,B.bjM,B.bjK,B.bjH,B.bjI,B.aS9,B.bkJ,B.bkK,B.bkL,B.bkM,B.bkO,B.bkN])
x(A.ob,[B.aSb,B.bn4,B.aSq,B.aSr,B.bqj,B.bkj,B.bki,B.bjN,B.bjO,B.br2])
w(B.PN,A.hn)
x(A.S,[B.uD,B.zz,B.zy,B.zx,B.zA])
x(A.T,[B.Tv,B.Vp,B.Vo,B.Vn,B.Vq])})()
A.nV(b.typeUniverse,JSON.parse('{"Xs":{"a5":[],"e":[]},"kv":{"bn":[]},"zz":{"S":[],"e":[]},"zy":{"S":[],"e":[]},"zx":{"S":[],"e":[]},"zA":{"S":[],"e":[]},"PN":{"au":[]},"uD":{"S":[],"e":[]},"Tv":{"T":["uD"]},"D_":{"a5":[],"e":[]},"Rm":{"a5":[],"e":[]},"Vp":{"T":["zz"]},"zM":{"a5":[],"e":[]},"Vo":{"T":["zy"]},"Vn":{"T":["zx"]},"a9Z":{"a5":[],"e":[]},"Vq":{"T":["zA"]}}'))
var y=(function rtii(){var x=A.a1
return{u:x("pH"),c:x("eh<v>"),r:x("cZ<v>"),k:x("y<lO>"),n:x("y<eh<v>>"),I:x("y<cZ<v>>"),R:x("y<fO>"),Z:x("y<aD<i,@>>"),d:x("y<N6>"),s:x("y<i>"),p:x("y<e>"),t:x("y<v>"),m:x("bh"),j:x("Q<@>"),L:x("Q<v>"),P:x("aD<i,@>"),f:x("aD<@,@>"),x:x("aj<i,v>"),a:x("bj"),K:x("N"),B:x("DP"),l:x("+(v,v)"),e:x("cL<lO>"),N:x("i"),C:x("F7"),D:x("F8"),X:x("PO"),_:x("F9"),U:x("aO<i>"),G:x("ml"),q:x("nS"),b:x("bd<I?>"),y:x("B"),i:x("J"),z:x("@"),S:x("v"),A:x("bh?"),Y:x("aD<@,@>?"),O:x("N?"),M:x("+quota,usage(v,v)?"),o:x("ew"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.lz=new B.B_(0,"none")
D.lA=new B.B_(1,"learning")
D.dR=new B.B_(2,"memorized")
D.Xy=new A.aw(0,1/0,0,320)
D.dA=new A.I(1,0.9725490196078431,0.44313725490196076,0.44313725490196076,C.k)
D.XG=new A.ar(D.dA,null,null,null,null,null,C.cr)
D.cS=new A.I(1,0.984313725490196,0.7490196078431373,0.1411764705882353,C.k)
D.aa9=new A.a2(983698,"MaterialIcons",null,!1)
D.ac1=new A.a4(D.aa9,null,C.cs,null,null,null)
D.aW4=new A.t("\u0627\u0644\u0646\u0635 \u0645\u062e\u0641\u064a \u2014 \u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.ed,null,null,null,null,null,null,null,null)
D.aLw=new A.r(!0,C.eK,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUk=new A.t("(\u062f\u0648\u0633 \u0647\u0646\u0627 \u0644\u0648 \u0639\u0627\u064a\u0632 \u062a\u0628\u0635)",null,D.aLw,null,null,null,null,null,null,null,null)
D.anA=x([D.ac1,C.Q,D.aW4,D.aUk],y.p)
D.a3c=new A.iX(C.v,C.f,C.h,C.j,null,C.b7,null,0,D.anA,null)
D.a6e=new A.a_(0,18,0,18)
D.a6h=new A.a_(0,26,0,26)
D.a6m=new A.a_(0,4,0,6)
D.a6z=new A.a_(14,12,14,14)
D.a79=new A.a_(3,0,0,0)
D.a9o=new A.a2(63251,"MaterialIcons",null,!1)
D.mH=new A.a2(63677,"MaterialIcons",null,!1)
D.a9W=new A.a2(983256,"MaterialIcons",null,!1)
D.ta=new A.a2(983516,"MaterialIcons",null,!1)
D.a9U=new A.a2(983209,"MaterialIcons",null,!1)
D.aao=new A.a4(D.a9U,28,C.q,null,null,null)
D.aaM=new A.a4(C.Aj,null,N.h6,null,null,null)
D.a9e=new A.a2(62961,"MaterialIcons",null,!1)
D.ab4=new A.a4(D.a9e,null,null,null,null,null)
D.a9n=new A.a2(63199,"MaterialIcons",null,!1)
D.ab5=new A.a4(D.a9n,null,null,null,null,null)
D.ab9=new A.a4(C.iF,null,C.eK,null,null,null)
D.abb=new A.a4(D.ta,44,C.i,null,null,null)
D.abs=new A.a4(D.mH,null,D.dA,null,null,null)
D.abB=new A.a4(C.rZ,null,D.dA,null,null,null)
D.abK=new A.a4(C.Ae,null,null,null,null,null)
D.abL=new A.a4(D.mH,null,null,null,null,null)
D.AQ=new A.a4(C.mK,null,null,null,null,null)
D.ac_=new A.a4(C.mG,20,D.cS,null,null,null)
D.acb=new A.a4(C.mI,30,C.q,null,null,null)
D.acr=new A.a4(C.mJ,16,C.q,null,null,null)
D.a9B=new A.a2(63520,"MaterialIcons",null,!1)
D.acD=new A.a4(D.a9B,null,null,null,null,null)
D.acJ=new A.a4(C.kp,null,null,null,null,null)
D.a9a=new A.a2(62842,"MaterialIcons",null,!0)
D.acO=new A.a4(D.a9a,null,null,null,null,null)
D.Bz=x([1,3,5],y.t)
D.Cl=x(["\u0627\u0639\u0648\u0630","\u0628\u0627\u0644\u0644\u0647","\u0645\u0646","\u0627\u0644\u0634\u064a\u0637\u0627\u0646","\u0627\u0644\u0631\u062c\u064a\u0645"],y.s)
D.axA=new A.a8(C.mj,U.q1,null)
D.all=x([D.axA],y.p)
D.aAQ=new A.P(C.iH,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0629 \u0628\u0635\u0648\u062a \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062d\u0635\u0631\u064a (\u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645) \u0645\u0631\u0629 \u0623\u0648 \u0663 \u0623\u0648 \u0665 \u0645\u0631\u0627\u062a.")
D.aAI=new A.P(D.mH,"\u0633\u0645\u0651\u0639\u0647\u0627 \u0645\u0646 \u062d\u0641\u0638\u0643 \u2014 \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0644\u0648\u0651\u0646\u0644\u0643 \u0643\u0644 \u0643\u0644\u0645\u0629: \u0623\u062e\u0636\u0631 \u0635\u062d\u060c \u0623\u0635\u0641\u0631 \u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0623\u062d\u0645\u0631 \u063a\u0644\u0637.")
D.aB2=new A.P(C.hi,"\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0645\u0627 \u062a\u0633\u0645\u0651\u0639\u0647\u0627 \u0635\u062d \u0645\u0631\u062a\u064a\u0646 \u0648\u0631\u0627 \u0628\u0639\u0636 (\u062a\u0642\u062f\u0631 \u062a\u063a\u064a\u0651\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a).")
D.a9I=new A.a2(63625,"MaterialIcons",null,!1)
D.aBb=new A.P(D.a9I,"\u0643\u0644 \u062f\u0647 \u0628\u064a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u2014 \u0635\u0648\u062a\u0643 \u0645\u0634 \u0628\u064a\u062a\u0631\u0641\u0639 \u0639\u0644\u0649 \u0623\u064a \u0633\u064a\u0631\u0641\u0631.")
D.amR=x([D.aAQ,D.aAI,D.aB2,D.aBb],A.a1("y<+(a2,i)>"))
D.aoB=x([D.lz,D.lA,D.dR],A.a1("y<B_>"))
D.GN=x(["\u0628\u0633\u0645","\u0627\u0644\u0644\u0647","\u0627\u0644\u0631\u062d\u0645\u0646","\u0627\u0644\u0631\u062d\u064a\u0645"],y.s)
D.auZ=new B.CZ(0,"idle")
D.MO=new B.CZ(1,"loading")
D.hA=new B.CZ(2,"ready")
D.av_=new B.CZ(3,"failed")
D.abq=new A.a4(C.cT,18,G.bW,null,null,null)
D.U7=new A.r(!0,C.a8,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWH=new A.t("\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u062c\u0627\u0647\u0632 \u064a\u0633\u0645\u0639\u0643",null,D.U7,null,null,null,null,null,null,null,null)
D.aky=x([D.abq,C.bK,D.aWH],y.p)
D.aGi=new A.jH(C.aA,C.f,C.h,C.j,null,C.b7,null,0,D.aky,null)
D.ax_=new A.a8(C.ay,D.aGi,null)
D.a76=new A.a_(2,6,2,4)
D.aLa=new A.r(!0,C.q,null,null,null,null,14,C.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRc=new A.t("\u0627\u0628\u062f\u0623 \u0645\u0646 \u0647\u0646\u0627 \u2014 \u0627\u0644\u0641\u0627\u062a\u062d\u0629 \u0648\u062c\u0632\u0621 \u0639\u0645\u0651",null,D.aLa,null,null,null,null,null,null,null,null)
D.ax7=new A.a8(D.a76,D.aRc,null)
D.aWP=new A.t("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.ed,null,null,null,null,null,null,null,null)
D.alB=x([O.oF,C.ap,D.aWP],y.p)
D.aGg=new A.jH(C.aA,C.ch,C.h,C.j,null,C.b7,null,0,D.alB,null)
D.axc=new A.a8(P.qT,D.aGg,null)
D.vN=new A.r(!0,D.cS,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWX=new A.t("\u0646\u0635\u064a\u062d\u0629: \u0627\u062d\u0641\u0638 \u0663\u2013\u0665 \u0622\u064a\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0631\u0629 \u0623\u0633\u0647\u0644.",null,D.vN,null,null,null,null,null,null,null,null)
D.axf=new A.a8(C.hc,D.aWX,null)
D.aWD=new A.t("\u0644\u0633\u0647 \u0645\u0633\u0645\u0651\u0639\u062a\u0634 \u0623\u064a \u0622\u064a\u0629 \u2014 \u0627\u0628\u062f\u0623 \u0628\u0633\u0648\u0631\u0629 \u0642\u0635\u064a\u0631\u0629 \u0645\u0646 \u062c\u0632\u0621 \u0639\u0645\u0651.",null,F.ai,C.ae,null,null,null,null,null,null,null)
D.axk=new A.a8(C.D,D.aWD,null)
D.a73=new A.a_(2,0,2,8)
D.aUq=new A.t("\u0627\u0644\u0633\u0648\u0631 \u0627\u0644\u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u060c \u0645\u0646 \u0627\u0644\u0646\u0627\u0633 \u0644\u062d\u062f \u0627\u0644\u0646\u0628\u0623.",null,F.ai,null,null,null,null,null,null,null,null)
D.axw=new A.a8(D.a73,D.aUq,null)
D.acy=new A.a4(C.hh,30,C.q,null,null,null)
D.aPN=new A.r(!0,C.i,null,null,null,null,17,C.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXl=new A.t("\u0633\u0645\u0651\u0639\u060c \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0642\u0648\u0644\u0643 \u0635\u062d \u0648\u0644\u0627 \u063a\u0644\u0637",null,D.aPN,null,null,null,null,null,null,null,null)
D.a7J=new A.dM(1,C.aX,D.aXl,null)
D.alN=x([D.acy,C.aY,D.a7J],y.p)
D.aGa=new A.jH(C.aA,C.f,C.h,C.j,null,C.b7,null,0,D.alN,null)
D.ach=new A.a4(C.hi,18,G.bW,null,null,null)
D.TU=new A.r(!0,G.bW,null,null,null,null,12,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWo=new A.t("\u0645\u062d\u0641\u0648\u0638\u0629",null,D.TU,null,null,null,null,null,null,null,null)
D.akW=x([D.ach,C.hN,D.aWo],y.p)
D.aGf=new A.jH(C.aA,C.f,C.a_,C.j,null,C.b7,null,0,D.akW,null)
D.aIj=new A.G(0,30)
D.oE=new A.G(1/0,54)
D.aIv=new A.G(1/0,48)
D.aIy=new A.G(1/0,50)
D.aIB=new A.G(1/0,52)
D.aIE=new A.cr(16,null,null,null)
D.aII=new A.cr(14,14,O.xv,null)
D.aVj=new A.t("safe mode / no-gpu flags cleared (reload)",null,null,null,null,null,null,null,null,null,null)
D.aJ7=new A.iJ(D.aVj,null,null,null,null,null,null,null,null,null,null,null,null,C.E,!1,null,null,null,C.l,null)
D.aKE=new A.r(!0,C.i,null,null,null,null,14.5,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aL2=new A.r(!0,C.a8,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLF=new A.r(!0,C.i,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.vG=new A.r(!0,D.dA,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aMh=new A.r(!0,C.i,null,null,null,null,12,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hU=new A.r(!0,C.i,null,"AmiriQuranMT",null,null,27,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNK=new A.r(!0,C.ca,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.TX=new A.r(!0,D.dA,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aO6=new A.r(!0,C.q,null,null,null,null,24,C.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.U0=new A.r(!0,C.i,null,null,null,null,12.5,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOk=new A.r(!0,C.q,null,null,null,null,null,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOY=new A.r(!0,D.cS,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOZ=new A.r(!0,G.bW,null,null,null,null,null,C.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPg=new A.r(!0,C.i,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQD=new A.t("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u062e\u0631 \u0645\u0631\u0629",null,C.hX,null,null,null,null,null,null,null,null)
D.aR_=new A.t("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643 (\u062e\u0628\u0651\u064a \u0627\u0644\u0646\u0635)",null,C.dd,null,null,null,null,null,null,null,null)
D.aRd=new A.t("\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,C.oS,null,null,null,null,null,null,null,null)
D.aRf=new A.t("\u2022 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641: \u0645\u0634\u0631\u0648\u0639 \u062a\u0646\u0632\u064a\u0644 Tanzil (\u062a\u0631\u062e\u064a\u0635 CC BY 3.0).",null,F.ai,null,null,null,null,null,null,null,null)
D.aMf=new A.r(!0,G.bW,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRl=new A.t("\u0648\u0635\u0644\u062a\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2014 \u0634\u0643\u0631\u064b\u0627\u060c \u0647\u0646\u0628\u0635 \u0639\u0644\u064a\u0647\u0627.",null,D.aMf,null,null,null,null,null,null,null,null)
D.aRo=new A.t("\u062e\u0628\u0651\u064a \u0646\u0635 \u0627\u0644\u0622\u064a\u0629 \u0648\u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,F.ai,null,null,null,null,null,null,null,null)
D.aRs=new A.t("\u0639\u062f\u0651\u064a \u0644\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.ed,null,null,null,null,null,null,null,null)
D.aS6=new A.t("\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0627\u0628\u062f\u0623",null,C.cx,null,null,null,null,null,null,null,null)
D.aSs=new A.t("\u064a\u0644\u0627 \u0646\u0628\u062f\u0623",null,C.cO,null,null,null,null,null,null,null,null)
D.aSw=new A.t("\u0645\u0645\u0643\u0646 \u062a\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 \u062f\u0644\u0648\u0642\u062a\u064a \u0644\u062d\u062f \u0645\u0627 \u064a\u062e\u0644\u0635.",null,F.ai,null,null,null,null,null,null,null,null)
D.aSO=new A.t("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.Ua,null,null,null,null,null,null,null,null)
D.aT9=new A.t("\u062c\u0631\u0651\u0628 \u0639\u0644\u0649 \u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a (\u0644\u0644\u062a\u062c\u0631\u0628\u0629)",null,null,null,null,null,null,null,null,null,null)
D.aTt=new A.t("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643",null,L.lb,null,null,null,null,null,null,null,null)
D.aTO=new A.t("reset safe mode / WebGPU ban",null,P.TJ,null,null,null,null,null,null,null,null)
D.aTT=new A.t("\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629",null,D.vN,null,null,null,null,null,null,null,null)
D.aTX=new A.t("\u0628\u0639\u062f \u062d\u0648\u0627\u0644\u064a \u062b\u0627\u0646\u064a\u0629 \u0633\u0643\u0648\u062a",null,F.ai,null,null,null,null,null,null,null,null)
D.aUb=new A.t("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636",null,F.b0,null,null,null,null,null,null,null,null)
D.aUj=new A.t("\u0623\u062e\u0636\u0631: \u0645\u062d\u0641\u0648\u0638\u0629 \u2014 \u0623\u0635\u0641\u0631: \u0628\u062a\u0631\u0627\u062c\u0639\u0647\u0627 \u2014 \u0631\u0645\u0627\u062f\u064a: \u0644\u0633\u0647",null,F.ai,null,null,null,null,null,null,null,null)
D.aUr=new A.t("\u0645\u0641\u064a\u0634 \u0633\u0648\u0631\u0629 \u0628\u0627\u0644\u0627\u0633\u0645 \u062f\u0647",null,F.ai,null,null,null,null,null,null,null,null)
D.aPP=new A.r(!0,C.q,null,null,null,null,12.5,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVa=new A.t("\u0627\u0628\u0639\u062a \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aPP,null,null,null,null,null,null,null,null)
D.aNu=new A.r(!0,D.dA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVc=new A.t("\u0627\u0628\u062f\u0623 \u0627\u0644\u0633\u0648\u0631\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644",null,D.aNu,null,null,null,null,null,null,null,null)
D.aVs=new A.t("\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f \u0643\u0627\u0645 \u062a\u0633\u0645\u064a\u0639 \u0635\u062d \u0648\u0631\u0627 \u0628\u0639\u0636\u061f",null,L.lb,null,null,null,null,null,null,null,null)
D.aKt=new A.r(!0,C.i,null,null,null,null,null,C.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVH=new A.t("\u0627\u0644\u0645\u0635\u0627\u062f\u0631",null,D.aKt,null,null,null,null,null,null,null,null)
D.aVQ=new A.t("\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.cx,null,null,null,null,null,null,null,null)
D.aW1=new A.t("\u062a\u0645\u0633\u062d \u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0633\u0648\u0631\u0629 \u062f\u064a\u061f",null,null,null,null,null,null,null,null,null,null)
D.aWa=new A.t("\u0633\u0645\u0651\u0639\u0647\u0645 \u062a\u0627\u0646\u064a",null,null,null,null,null,null,null,null,null,null)
D.aWv=new A.t("\u0627\u0645\u0633\u062d",null,null,null,null,null,null,null,null,null,null)
D.aWw=new A.t("\u2022 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: whisper-base-ar-quran \u0645\u0646 Tarteel (\u062a\u0631\u062e\u064a\u0635 Apache-2.0)\u060c \u0628\u0635\u064a\u063a\u0629 ONNX \u0645\u0646 \u0645\u0634\u0631\u0648\u0639 Basira\u060c \u0648\u0628\u064a\u0634\u062a\u063a\u0644 \u062c\u0648\u0651\u0647 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0628\u0645\u0643\u062a\u0628\u0629 Transformers.js.",null,F.ai,null,null,null,null,null,null,null,null)
D.aWx=new A.t("\u062e\u0644\u0635\u062a",null,R.ld,null,null,null,null,null,null,null,null)
D.aWy=new A.t("\u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647 \u0630\u0627\u0643\u0631\u062a\u0647 \u0642\u0644\u064a\u0644\u0629 \u2014 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0645\u0643\u0646 \u064a\u0643\u0648\u0646 \u0628\u0637\u064a\u0621 \u0639\u0644\u064a\u0647.",null,D.vN,null,null,null,null,null,null,null,null)
D.aOm=new A.r(!0,C.ca,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,C.fJ,null,null,null,null,null,null,null,null)
D.aWT=new A.t("\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aOm,null,null,null,null,null,null,null,null)
D.aX_=new A.t("\u0623\u0648\u0644 \u0645\u0631\u0629 \u0628\u0633: \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,F.b0,null,null,null,null,null,null,null,null)
D.aX1=new A.t("\u0648\u0642\u0651\u0641 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0644\u0648\u062d\u062f\u0647 \u0644\u0645\u0627 \u0623\u0633\u0643\u062a",null,C.dd,null,null,null,null,null,null,null,null)
D.aXk=new A.t("\u2022 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: \u0627\u0644\u0634\u064a\u062e \u0645\u062d\u0645\u0648\u062f \u062e\u0644\u064a\u0644 \u0627\u0644\u062d\u0635\u0631\u064a \u2014 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645\u060c \u0645\u0646 everyayah.com.",null,F.ai,null,null,null,null,null,null,null,null)
D.UF=new B.a9Z(null)
D.aXX=new B.zx(null)
D.aXY=new B.PM(2,1,!0,!1,!1)
D.UG=new B.PO(!1,!1,!1,!1,!1,0)
D.fR=new B.ml(0,"ok")
D.pb=new B.ml(1,"near")
D.pc=new B.ml(2,"wrong")
D.pd=new B.ml(3,"missing")
D.V5=new B.ml(4,"extra")
D.a9x=new A.a2(63456,"MaterialIcons",null,!1)
D.b2g=new B.zM(D.cS,D.a9x,"\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629","\u0642\u0631\u0651\u0628 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0646\u0643 \u0648\u0627\u0642\u0631\u0627 \u0628\u0635\u0648\u062a \u0648\u0627\u0636\u062d \u0641\u064a \u0645\u0643\u0627\u0646 \u0647\u0627\u062f\u064a\u060c \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a.",null)
D.jz=new B.aY4(0,"flat")
D.b2B=new B.Rm(!1,null)
D.wh=new B.Rm(!0,null)
D.jH=new B.Ae(0,"idle")
D.po=new B.Ae(1,"playing")
D.pp=new B.Ae(2,"recording")
D.ls=new B.Ae(3,"thinking")
D.fX=new B.Ae(4,"result")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c5P","bwG",()=>new B.aa_())
x($,"c8S","bL_",()=>A.aP("\u0640[\u064b-\u0652]*\u0670",!0,!1))
x($,"c8T","bL0",()=>A.aP("\u0640[\u064b-\u0652]*[\u06e6\u06e7]",!0,!1))
x($,"c93","bL8",()=>A.aP("\u0648\u0670",!0,!1))
x($,"c8r","bKH",()=>A.aP("[\u0648\u064a\u0649][\u064b-\u0652]*[\u0654]",!0,!1))
x($,"c6Z","bJJ",()=>A.aP("\u0627[\u0654\u0655]",!0,!1))
x($,"c84","bKq",()=>A.aP("[\u0654\u0655]",!0,!1))
x($,"c7_","bJK",()=>A.aP("[\u0622\u0623\u0625\u0671\u0672\u0673]",!0,!1))
x($,"c75","bJP",()=>A.aP("[\u0624\u0626]",!0,!1))
x($,"c86","bKs",()=>A.aP("[\u064b-\u065f\u0670\u06d6-\u06ed\u08d3-\u08ff\u0640]",!0,!1))
x($,"c8w","bKK",()=>A.aP("[\u06dd\u06de\u0660-\u0669\u06f0-\u06f90-9]",!0,!1))
x($,"c8d","bKy",()=>A.aP("[^\u0621-\u064a\\s]",!0,!1))
x($,"c8R","bxe",()=>A.aP("\\s+",!0,!1))
x($,"c39","pw",()=>B.bLZ(D.lz,0,A.bsz(0,!0)))
x($,"c5Q","HM",()=>new B.PN($.bwG(),D.aXY,B.bTM(),D.auZ,$.a7()))})()};
(a=>{a["0Sy6lwdq1fCnKlwDTljR06vDb5I="]=a.current})($__dart_deferred_initializers__);