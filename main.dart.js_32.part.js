((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,R,T,H,O,G,N,P,S,U,K,V,L,B={aXX:function aXX(d,e){this.a=d
this.b=e},Xo:function Xo(d,e,f){this.d=d
this.r=e
this.a=f},aU9:function aU9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4){var _=this
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
_.dy=a4},aUa:function aUa(d){this.a=d},
bTe(d){var x,w,v,u,t,s
if(d instanceof B.kv)return d
try{x=A.cn(d)
w=x.code
v=x.message
u=w==null?"failed":A.a9(w)
t=v==null?"":A.a9(v)
return new B.kv(u,t)}catch(s){u=A.f(d)
return new B.kv("failed",u)}},
a9V:function a9V(){this.b=this.a=null},
aS2:function aS2(d){this.a=d},
aS5:function aS5(){},
aS4:function aS4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aS3:function aS3(d){this.a=d},
aS9:function aS9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aS7:function aS7(d){this.a=d},
aS8:function aS8(d){this.a=d},
aSa:function aSa(d){this.a=d},
aSc:function aSc(d,e,f){this.a=d
this.b=e
this.c=f},
aSb:function aSb(d,e,f){this.a=d
this.b=e
this.c=f},
aS6:function aS6(){},
bTf(d,e){return new B.kv(d,e)},
PL:function PL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.w=i},
F5:function F5(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i
_.w=j},
F7:function F7(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
F6:function F6(d,e){this.a=d
this.b=e},
kv:function kv(d,e){this.a=d
this.b=e},
bG8(d){var x,w=$.bKu()
w=A.bM(d,w,"\u0627")
x=$.bKv()
w=A.bM(w,x,"\u064a")
x=$.bKD()
w=A.bM(w,x,"\u0627")
x=$.bJe()
w=A.bM(w,x,"\u0627")
x=$.bKb()
w=A.bM(w,x,"\u0621")
x=$.bJV()
w=A.bM(w,x,"\u0621")
x=$.bJf()
w=A.bM(w,x,"\u0627")
x=$.bJk()
w=A.bM(w,x,"\u0621")
w=A.bM(w,"\u0649","\u064a")
w=A.bM(w,"\u0629","\u0647")
x=$.bJX()
w=A.bM(w,x,"")
x=$.bKe()
w=A.bM(w,x," ")
x=$.bK2()
w=A.bM(w,x," ")
x=$.bwK()
return C.c.ao(A.bM(w,x," "))},
bXF(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.length,k=e.length
if(l===0)return k
if(k===0)return l
x=k+1
w=y.S
v=J.la(x,w)
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
bqZ(d,e){var x,w,v,u,t,s
if(d===e)return 1
x=A.aX("[\u0627\u0621]",!0,!1)
w=A.bM(d,x,"")
x=A.aX("[\u0627\u0621]",!0,!1)
v=A.bM(e,x,"")
if(w.length!==0&&w===v)return 1
u=d.length
t=e.length
u=u>t?u:t
if(u===0)return 1
s=1-B.bXF(d,e)/u
return s>=1?0.99:s},
AH(d){var x,w,v,u,t,s,r,q=A.a([],y.d)
for(x=C.c.qk(d,$.bwK()),w=x.length,v=0;v<x.length;x.length===w||(0,A.A)(x),++v){u=x[v]
if(u.length===0)continue
t=B.bG8(u)
s=A.bM(t," ","")
if(s.length===0){if(q.length!==0){r=q.pop()
q.push(new B.N3(r.a+" "+u,r.b))}continue}q.push(new B.N3(u,s))}return q},
bWt(d,e){var x,w,v,u,t=new B.bmL(),s=A.a([],y.s)
for(x=A.fe(e,0,A.il(5,"count",y.S),A.ad(e).c),w=x.$ti,x=new A.bQ(x,x.gK(0),w.i("bQ<aJ.E>")),w=w.i("aJ.E");x.u();){v=x.d
s.push((v==null?w.a(v):v).b)}u=!t.$2(s,D.Cc)&&t.$2(d,D.Cc)?C.b.iH(d,5):d
return!t.$2(s,D.GE)&&t.$2(u,D.GE)?C.b.iH(u,4):u},
bFe(d,e){var x=B.AH(d),w=B.bG8(e),v=y.U
v=A.a0(new A.aO(A.a(w.split(" "),y.s),new B.bo7(),v),v.i("L.E"))
return new B.DM(x,B.bVH(x,B.bWt(v,x)),w)},
bVH(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=A.a([],y.s)
for(x=a5.length,w=0;w<a5.length;a5.length===x||(0,A.A)(a5),++w)a4.push(a5[w].b)
v=a4.length
u=a6.length
t=u+1
x=(v+1)*t
s=y.i
r=A.c2(x,0,!1,s)
q=A.c2(x,0,!1,y.S)
p=A.c2(v*(u===0?1:u),0,!1,s)
for(o=0;o<v;++o)for(x=o*u,n=0;n<u;++n)p[x+n]=B.bqZ(a4[o],a6[n])
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
e=2}if(n>=2&&r[h-2]<g&&B.bqZ(a4[m],a6[n-2]+a6[n-1])>=1){g=r[h-2]
e=3}if(s&&r[i+n-1]<g&&B.bqZ(a4[j]+a4[m],a6[n-1])>=1){g=r[i+n-1]
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
else m=a2>=0.6?D.p9:D.pa
a1.push(new B.lO(o,x,s,m))
break
case 1:--o
a1.push(new B.lO(o,a4[o],null,D.pb))
break
case 2:--n
a1.push(new B.lO(null,null,a6[n],D.UT))
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
a4=A.a0(new A.cJ(a1,a4),a4.i("aJ.E"))
return a4},
mk:function mk(d,e){this.a=d
this.b=e},
N3:function N3(d,e){this.a=d
this.b=e},
lO:function lO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
DM:function DM(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
aJB:function aJB(d){this.a=d},
aJA:function aJA(){},
bmL:function bmL(){},
bo7:function bo7(){},
bLt(d,e,f){return new B.pG(d,e,f)},
bYs(d){var x
A:{if("memorized"===d){x=D.dR
break A}if("learning"===d){x=D.lw
break A}x=D.lv
break A}return x},
bH3(d,e){return d>=1&&d<=114&&e>=1&&e<=I.bX[d-1].a[1]},
bTg(){var x=y.S
return new B.a9W(A.x(x,y.u),A.aC(x))},
aSe(d){var x=d.kS()
return C.c.da(C.e.j(A.cE(x)),4,"0")+"-"+C.c.da(C.e.j(A.cd(x)),2,"0")+"-"+C.c.da(C.e.j(A.cy(x)),2,"0")},
bCv(d){var x=y.x,w=A.a0(new A.aj(A.a(d.split("-"),y.s),A.bZE(),x),x.i("aJ.E"))
return B.aSe(A.jq(w[0],w[1],w[2]-1,12,0,0,0))},
btY(d){var x,w,v,u,t,s,r,q,p=y.S,o=A.x(p,y.u),n=A.aC(p),m=new B.a9W(o,n),l=d.h(0,"rows")
if(y.f.b(l))for(x=l.gdI(),x=x.ga5(x),w=y.j;x.u();){v=x.gL()
u=A.fb(A.f(v.a),null)
t=v.b
v=!0
if(u!=null)if(w.b(t))if(J.bi(t)>=3){v=C.e.b7(u,1000)
s=C.e.ae(u,1000)
v=!(v>=1&&v<=114&&s>=1&&s<=I.bX[v-1].a[1])}if(v)continue
v=J.bs(t)
r=C.d.bS(A.dw(v.h(t,0)))
if(r<0||r>=3)continue
o.n(0,u,new B.pG(D.aoc[r],C.d.bS(A.dw(v.h(t,1))),new A.bb(A.kV(C.d.bS(A.dw(v.h(t,2))),0,!0),0,!0)))}q=d.h(0,"dirty")
if(y.j.b(q)){x=J.brB(q,y.o)
p=A.n4(x,new B.aSd(),x.$ti.i("L.E"),p)
n.E(0,new A.aO(p,o.gUZ(),A.w(p).i("aO<L.E>")))}m.c=A.X(d.h(0,"last"))
p=A.bU(d.h(0,"streak"))
p=p==null?null:C.d.bS(p)
p=m.d=p==null?0:p
o=A.bU(d.h(0,"best"))
o=o==null?null:C.d.bS(o)
m.e=o==null?p:o
return m},
aoV(d,e){return"https://everyayah.com/data/Husary_Muallim_128kbps/"+C.c.da(C.e.j(d),3,"0")+C.c.da(C.e.j(e),3,"0")+".mp3"},
AY:function AY(d,e){this.a=d
this.b=e},
pG:function pG(d,e,f){this.a=d
this.b=e
this.c=f},
a9W:function a9W(d,e){var _=this
_.a=d
_.b=e
_.c=null
_.e=_.d=0},
aSf:function aSf(){},
aSg:function aSg(){},
aSd:function aSd(){},
PJ:function PJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bQS(){return new B.uC(null)},
c1_(d,e){var x,w,v,u,t={},s=I.bX[e-1].a[1],r=$.HK().c
t.a=1
x=r.a
w=e*1000
v=1
for(;;){if(v<=s){v=x.h(0,w+v)
v=(v==null?$.pv():v).a===D.dR}else v=!1
if(!v)break
v=++t.a}x=t.a
if(x>s){t.a=1
u=1}else u=x
x=s<=10
if(x)u=1
t.b=u
t.c=x?s:C.e.co(u+4,1,s)
return A.h2(N.dh,new B.bpY(t,s,e),d,!0,null,null,!1,y.l)},
bvF(d){return A.d_(0,0,0,0,0,C.e.co(C.d.ar(6+d*1.2),25,90))},
buG(d){return E.aU(C.e.b7(d,60))+":"+C.c.da(E.aU(C.e.ae(d,60)),2,"\u0660")},
bGQ(d){return A.h2(N.dh,new B.bqD($.HK()),d,!0,null,null,!1,y.H)},
HF(d){var x,w=d.a
A:{if("timeout"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0627\u062a\u0623\u062e\u0631 \u0623\u0648\u064a \u0648\u0645\u0631\u062f\u0651\u0634\u060c \u0641\u0648\u0642\u0651\u0641\u0646\u0627\u0647 \u0648\u062c\u0631\u0651\u0628\u0646\u0627 \u062a\u0627\u0646\u064a \u0628\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0623\u062e\u0641 \u0648\u0645\u0646\u0641\u0639\u0634. \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}if("crashed"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0642\u0641 \u0641\u062c\u0623\u0629 (\u063a\u0627\u0644\u0628\u064b\u0627 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0634 \u0645\u0643\u0641\u064a\u0629). \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}x=d.gjA()
break A}return x},
c2f(d,e,f){var x,w=new B.bqR(),v=w.$1(f),u=w.$1("\xab\u0627\u0644\u0645\u062d\u0641\u0651\u0638\xbb \u0645\u0634\u0643\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 ("+e+")\n"+d.a+": "+d.b+"\n"),t=1990-u.length
if(v.length>t)v=t<=1?"":C.c.W(v,0,t-1)+"\u2026"
x=u+v
return x.length>1990?C.c.W(x,0,1990):x},
bGZ(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
try{x=y.P.a(C.Z.eU(a4,null))
s=y.Y
r=s.a(J.b6(x,"rec"))
w=r==null?C.eY:r
q=s.a(J.b6(x,"last"))
v=q==null?C.eY:q
u=new B.bqQ()
s=J.b6(v,"recovered")
t=A.f(s==null?"":s)
s=A.f(u.$1(J.b6(w,"wall")))
p=A.f(u.$1(J.b6(w,"source")))
o=A.f(u.$1(J.b6(w,"ctxRate")))
n=A.f(u.$1(J.b6(w,"pcmPeak")))
m=A.f(u.$1(J.b6(w,"ctxState")))
l=A.f(u.$1(J.b6(w,"stopMs")))
k=A.f(u.$1(J.b6(v,"prepMs")))
j=A.f(u.$1(J.b6(v,"ms")))
i=A.f(u.$1(J.b6(v,"featMs")))
h=A.f(u.$1(J.b6(v,"encMs")))
g=A.f(u.$1(J.b6(v,"decMs")))
f=A.f(u.$1(J.b6(v,"wallMs")))
e=A.f(u.$1(J.b6(v,"backend")))
d=A.f(u.$1(J.b6(v,"threads")))
a0=J.bi(t)!==0?" \xb7 recovered from "+A.f(t):""
a1=J.c(J.b6(x,"safe"),!0)?" \xb7 safe mode":""
a2=J.c(J.b6(x,"nogpu"),!0)?" \xb7 no-gpu":""
return"record "+s+" s ("+p+", "+o+" Hz, peak "+n+", "+m+") \u2192 stop/decode "+l+" ms \u2192 resample "+k+" ms \u2192 infer "+j+" ms (mel "+i+", enc "+h+", dec "+g+") \u2192 wall "+f+" ms \xb7 "+e+" \xd7"+d+a0+a1+a2}catch(a3){return""}},
CW:function CW(d,e){this.a=d
this.b=e},
PK:function PK(d,e,f,g,h){var _=this
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
aSh:function aSh(d){this.a=d},
aSi:function aSi(d){this.a=d},
aSj:function aSj(d){this.a=d},
uC:function uC(d){this.a=d},
Tr:function Tr(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.w=_.r=null},
bcl:function bcl(d){this.a=d},
bck:function bck(d,e){this.a=d
this.b=e},
bcm:function bcm(d){this.a=d},
bcj:function bcj(d,e){this.a=d
this.b=e},
bcn:function bcn(){},
bc7:function bc7(){},
bcd:function bcd(d,e,f){this.a=d
this.b=e
this.c=f},
bce:function bce(){},
bch:function bch(d){this.a=d},
bcg:function bcg(){},
bci:function bci(d){this.a=d},
bca:function bca(d,e){this.a=d
this.b=e},
bcb:function bcb(d){this.a=d},
bc9:function bc9(){},
bcc:function bcc(d){this.a=d},
bc8:function bc8(d){this.a=d},
bcf:function bcf(d,e){this.a=d
this.b=e},
CX:function CX(d,e,f){this.c=d
this.d=e
this.a=f},
Rj:function Rj(d,e){this.c=d
this.a=e},
bpY:function bpY(d,e,f){this.a=d
this.b=e
this.c=f},
bpV:function bpV(d,e,f){this.a=d
this.b=e
this.c=f},
bpX:function bpX(d,e){this.a=d
this.b=e},
bpU:function bpU(d,e){this.a=d
this.b=e},
bpT:function bpT(d,e){this.a=d
this.b=e},
bpW:function bpW(d,e){this.a=d
this.b=e},
bpP:function bpP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bpO:function bpO(d,e,f){this.a=d
this.b=e
this.c=f},
bpQ:function bpQ(d){this.a=d},
bpR:function bpR(d){this.a=d},
bpS:function bpS(d,e){this.a=d
this.b=e},
Ac:function Ac(d,e){this.a=d
this.b=e},
zx:function zx(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Vl:function Vl(d,e){var _=this
_.d=d
_.e=$
_.f=e
_.w=_.r=null
_.x=!1
_.y=0
_.ax=_.at=_.as=_.Q=_.z=null
_.ay=0
_.c=_.a=_.ch=null},
bjM:function bjM(){},
bk1:function bk1(d,e){this.a=d
this.b=e},
bk5:function bk5(d){this.a=d},
bk6:function bk6(d){this.a=d},
bk7:function bk7(d,e,f){this.a=d
this.b=e
this.c=f},
bk9:function bk9(d){this.a=d},
bka:function bka(d){this.a=d},
bk8:function bk8(){},
bkc:function bkc(d){this.a=d},
bkb:function bkb(d){this.a=d},
bkd:function bkd(d,e){this.a=d
this.b=e},
bkf:function bkf(d){this.a=d},
bkg:function bkg(d){this.a=d},
bke:function bke(){},
bk0:function bk0(d,e,f){this.a=d
this.b=e
this.c=f},
bk2:function bk2(d,e,f){this.a=d
this.b=e
this.c=f},
bjU:function bjU(d){this.a=d},
bjV:function bjV(d){this.a=d},
bjT:function bjT(){},
bjW:function bjW(){},
bjX:function bjX(d,e){this.a=d
this.b=e},
bkl:function bkl(d){this.a=d},
bkm:function bkm(d){this.a=d},
bkn:function bkn(d,e){this.a=d
this.b=e},
bkk:function bkk(d){this.a=d},
bko:function bko(d,e){this.a=d
this.b=e},
bk_:function bk_(){},
bjZ:function bjZ(d){this.a=d},
bjY:function bjY(d,e){this.a=d
this.b=e},
bk4:function bk4(d){this.a=d},
bk3:function bk3(d){this.a=d},
bkh:function bkh(){},
bki:function bki(){},
bkj:function bkj(){},
bjN:function bjN(d,e,f){this.a=d
this.b=e
this.c=f},
bjO:function bjO(d){this.a=d},
bjQ:function bjQ(){},
bjP:function bjP(){},
bjR:function bjR(d){this.a=d},
bjS:function bjS(d){this.a=d},
zK:function zK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
zw:function zw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Vk:function Vk(d,e,f,g,h){var _=this
_.d=d
_.e=null
_.f=e
_.r=f
_.w=g
_.x=0
_.as=_.Q=_.z=_.y=null
_.at=h
_.c=_.a=null},
bjv:function bjv(){},
bjE:function bjE(d,e){this.a=d
this.b=e},
bjF:function bjF(d){this.a=d},
bjD:function bjD(){},
bjH:function bjH(d){this.a=d},
bjG:function bjG(d,e){this.a=d
this.b=e},
bjI:function bjI(d,e){this.a=d
this.b=e},
bjz:function bjz(d,e){this.a=d
this.b=e},
bjA:function bjA(d,e,f){this.a=d
this.b=e
this.c=f},
bjB:function bjB(d,e,f){this.a=d
this.b=e
this.c=f},
bjw:function bjw(d,e,f){this.a=d
this.b=e
this.c=f},
bjx:function bjx(d,e,f){this.a=d
this.b=e
this.c=f},
bjy:function bjy(d,e){this.a=d
this.b=e},
bjC:function bjC(d){this.a=d},
bjJ:function bjJ(){},
bjK:function bjK(d,e){this.a=d
this.b=e},
bjL:function bjL(d,e){this.a=d
this.b=e},
zv:function zv(d){this.a=d},
Vj:function Vj(d){this.d=d
this.c=this.a=null},
bjm:function bjm(){},
bjt:function bjt(d){this.a=d},
bju:function bju(){},
bjs:function bjs(d,e){this.a=d
this.b=e},
bjr:function bjr(d,e,f){this.a=d
this.b=e
this.c=f},
bjq:function bjq(d,e,f){this.a=d
this.b=e
this.c=f},
bjp:function bjp(d){this.a=d},
bjn:function bjn(d){this.a=d},
bjo:function bjo(d){this.a=d},
bqD:function bqD(d){this.a=d},
bqC:function bqC(d){this.a=d},
bqx:function bqx(d,e){this.a=d
this.b=e},
bqz:function bqz(){},
bqy:function bqy(){},
bqA:function bqA(d,e){this.a=d
this.b=e},
bqB:function bqB(d,e){this.a=d
this.b=e},
a9U:function a9U(d){this.a=d},
aS1:function aS1(d){this.a=d},
bqR:function bqR(){},
bqS:function bqS(){},
zy:function zy(d,e,f){this.c=d
this.d=e
this.a=f},
Vm:function Vm(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.r=null},
bkp:function bkp(d){this.a=d},
bkq:function bkq(d){this.a=d},
bkr:function bkr(d,e){this.a=d
this.b=e},
bks:function bks(d){this.a=d},
bku:function bku(d){this.a=d},
bkt:function bkt(d){this.a=d},
bqQ:function bqQ(){}},D,Q,I,E,F
J=c[1]
A=c[0]
C=c[2]
M=c[15]
R=c[19]
T=c[21]
H=c[13]
O=c[31]
G=c[36]
N=c[24]
P=c[35]
S=c[23]
U=c[10]
K=c[39]
V=c[33]
L=c[41]
B=a.updateHolder(c[8],B)
D=c[42]
Q=c[29]
I=c[30]
E=c[16]
F=c[18]
B.aXX.prototype={
M(){return"_ChipVariant."+this.b}}
B.Xo.prototype={
D(d){var x=null
A.T(d)
return A.aI8(!1,x,C.fg,x,x,x,x,C.m,x,new B.aU9(d,!0,D.jx,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,C.og,x,x,x,x,x,x,x,x),x,x,x,x,x,x,x,x,!0,this.d,x,x,x,x,x,this.r,x,x,x,!1,x,x,x,x,x,x,x,!0,x,x)}}
B.aU9.prototype={
goC(){var x,w=this,v=w.go
if(v===$){x=A.T(w.fr)
w.go!==$&&A.aB()
v=w.go=x.ax}return v},
gdH(){if(this.fy===D.jx)var x=0
else x=this.fx?1:0
return x},
gvQ(){return 1},
gfN(){var x,w=this,v=w.id
if(v===$){x=A.T(w.fr)
w.id!==$&&A.aB()
v=w.id=x.ok}x=v.as
if(x==null)x=null
else x=x.cq(w.fx?w.goC().k3:w.goC().k3)
return x},
gcA(){return new A.bd(new B.aUa(this),y.b)},
gc2(){if(this.fy===D.jx)var x=C.Q
else{x=this.goC().x1
if(x==null)x=C.y}return x},
gcg(){return C.Q},
grf(){return null},
guZ(){return null},
ge9(){var x,w,v=this
if(v.fy===D.jx)if(v.fx){x=v.goC()
w=x.to
if(w==null){w=x.p
x=w==null?x.k3:w}else x=w
x=new A.b7(x,1,C.A,-1)}else{x=v.goC().k3
x=new A.b7(A.aH(31,x.B()>>>16&255,x.B()>>>8&255,x.B()&255),1,C.A,-1)}else x=C.pQ
return x},
ghg(){var x=null
return new A.dC(18,x,x,x,x,this.fx?this.goC().b:this.goC().k3,x,x,x)},
gcC(){return C.ep},
grV(){var x=this.gfN(),w=x==null?null:x.r
if(w==null)w=14
x=A.bY(this.fr,C.bj)
x=x==null?null:x.gd4()
x=A.of(C.is,C.dj,A.C((x==null?C.aV:x).b4(w)/14-1,0,1))
x.toString
return x}}
B.a9V.prototype={
oN(){var x=this,w=x.a
if(w!=null)return A.dB(w,y.m)
w=x.b
return w==null?x.b=new B.aS2(x).$0():w},
qF(d,e){return this.awS(d,e,e)},
awS(d,e,f){var x=0,w=A.n(f),v,u=2,t=[],s,r,q,p
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
r=B.bTe(s)
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
return A.d(s.oN(),$async$Gq)
case 7:r=h.cn(g.cb(e,"support",null,null,null,null))
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
v=new B.PL(q,p,o,n,m,l)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=D.Uu
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
return A.d(s.oN(),$async$Aj)
case 8:x=7
return A.d(m.e6(l.cn(k.cb(e,"storage",null,null,null,null)),y.A),$async$Aj)
case 7:r=e
if(r==null){v=null
x=1
break}q=C.d.ar(A.db(r.quota))
p=C.d.ar(A.db(r.usage))
v=new A.aj0(q,p)
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
aXB(){var x=y.K
A.Ky(this.oN().bA(new B.aS5(),x),x)},
oM(d,e){var x=A.kG(d[e])
x=x==null?null:C.d.ar(x)
return x==null?0:x},
aV9(d,e,f){return this.qF(new B.aS4(this,d,e,f),y.C)},
ga80(){var x,w
try{x=A.ji(b.G.sessionStorage)
return x}catch(w){return null}},
gaeB(){var x=A.hz(b.G.mogtama3yTutorIsolated)
if(x==null)x=null
return x===!0},
a_2(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
try{m=b.G
l=A.hz(m.crossOriginIsolated)
if(l==null)l=f
if(l===!0)return!1
if(this.gaeB())return!1
l=A.hz(m.isSecureContext)
if(l==null)l=f
if(l!==!0)return!1
x=A.cn(m.navigator)
if(!("serviceWorker" in x))return!1
w=A.a9(x.userAgent)
l=A.kG(x.maxTouchPoints)
k=l==null?f:l
v=k==null?0:k
l=A.X(x.platform)
j=l==null?f:l
u=j==null?"":j
l=A.aX("iPad|iPhone|iPod",!0,!1)
if(!l.b.test(w))i=J.c(u,"MacIntel")&&v>1
else i=!0
t=i
l=A.aX("Chrome/|Chromium/|Firefox/|Edg/",!0,!1)
s=l.b.test(w)
if(t||!s)return!1
l=A.kG(x.hardwareConcurrency)
h=l==null?f:l
r=h==null?0:h
if(r>0&&r<3)return!1
q=Date.now()
l=this.ga80()
l=l==null?f:A.X(A.cb(l,"getItem","mt.tutor.iso",f,f,f))
if(l==null)l=f
p=A.fb(l==null?"":l,f)
if(p!=null&&q-p<3e4)return!1
o=A.ji(m.localStorage)
m=o
m=m==null?f:A.X(A.cb(m,"getItem","mt.tutor.noiso",f,f,f))
if(m==null)m=f
n=A.fb(m==null?"":m,f)
if(n!=null&&q-n<2592e5)return!1
return!0}catch(g){return!1}},
adg(){var x,w,v,u,t,s,r=null
try{x=this.ga80()
if(x!=null)A.cb(x,"setItem","mt.tutor.iso",""+Date.now(),r,r)}catch(w){}x=b.G
v=A.cn(x.location)
u=A.a9(v.hash)
t=A.a9(v.search)
s=A.bT(A.a9(A.cn(x.document).baseURI),0,r).X("tutor/").j(0)
x=u.length===0?"#/masjid/tools/tutor":u
A.cb(v,"replace",s+t+x,r,r,r)},
aUU(){var x,w=null,v=b.G,u=A.cn(v.history),t=A.kG(u.length),s=t==null?w:t
if((s==null?0:s)>1)A.cb(u,"back",w,w,w,w)
else{x=A.a9(A.cn(v.document).baseURI)
A.cb(A.cn(v.location),"replace",A.bT(x,0,w).X("./").j(0)+"#/",w,w,w)}},
a_d(d,e,f,g,h){return this.qF(new B.aS9(this,e,d,f,h,g),y.H)},
a_g(){return this.qF(new B.aSa(this),y.D)},
UC(){var x=null,w=this.a
if(w!=null)A.cb(w,"cancelRecording",x,x,x,x)},
a9c(d){var x,w,v=this,u=A.X(d.text)
if(u==null)u=null
if(u==null)u=""
x=v.oM(d,"ms")
w=A.kG(d.seconds)
if(w==null)w=null
if(w==null)w=0
return new B.F7(u,x,w,v.oM(d,"frames"),v.oM(d,"tokens"),v.mB(d,"retried"),v.oM(d,"encMs"),v.oM(d,"decMs"),v.oM(d,"featMs"))},
a6e(d){var x={}
x.words=d
return x},
ahw(d,e){return this.qF(new B.aSc(this,d,e),y._)},
aZI(d,e){return this.qF(new B.aSb(this,d,e),y._)},
EJ(d,e){return this.aXE(d,e)},
aXE(d,e){var x=0,w=A.n(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$EJ=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=p==null?7:9
break
case 7:x=10
return A.d(s.oN(),$async$EJ)
case 10:x=8
break
case 9:g=p
case 8:r=g
o=A.ad(d).i("aj<1,i>")
o=A.a0(new A.aj(d,new B.aS6(),o),o.i("aJ.E"))
x=11
return A.d(A.e6(A.cn(A.cb(r,"play",o,e,null,null)),y.y),$async$EJ)
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
x=w==null?u:A.a9(A.cb(w,"diag",u,u,u,u))
w=x
if(w==null)w=u
if(w==null)w="{}"
return w}catch(v){return"{}"}},
aYS(){var x,w,v=null
try{x=this.a
if(x!=null)A.cb(x,"resetDevice",v,v,v,v)}catch(w){}},
XT(d){var x=this.a
if(x!=null)A.cb(x,"prefetch",d,null,null,null)}}
B.PL.prototype={}
B.F5.prototype={
gll(){var x=this.f,w=x>0?"CPU \xd7"+x:""
x=this.a
if(x==="webgpu")return"WebGPU"
if(C.c.m(x,"webgpu"))return"WebGPU + "+w
return w.length===0?x:w}}
B.F7.prototype={
gKY(){var x=this,w=C.d.au(x.d/100,0),v=x.f?" (retried on 30 s)":""
return"window "+w+" s, "+x.e+" tokens"+v+", mel "+x.x+" ms, encoder "+x.r+" ms, decoder "+x.w+" ms"}}
B.F6.prototype={}
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
B.mk.prototype={
M(){return"WordStatus."+this.b}}
B.N3.prototype={}
B.lO.prototype={
j(d){var x,w=this.b
if(w==null)w=""
x=this.c
if(x==null)x=""
return this.d.b+":"+w+"->"+x}}
B.DM.prototype={
gG6(){var x,w=this,v=w.d
if(v===$){x=new B.aJB(w).$0()
w.d!==$&&A.aB()
w.d=x
v=x}return v},
gDJ(){var x,w,v,u,t,s=A.a([],y.s)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,A.A)(x),++v){u=x[v]
if(u.d===D.UT&&u.c!=null){t=u.c
t.toString
s.push(t)}}return s},
gaVZ(){return J.o0(this.gG6(),new B.aJA()).gK(0)},
gpT(){var x=this.a
return x.length!==0&&this.gaVZ()===x.length&&this.gDJ().length===0}}
B.AY.prototype={
M(){return"AyahStatus."+this.b}}
B.pG.prototype={}
B.a9W.prototype={
Xt(d,e){var x=this.a.h(0,d*1000+e)
return x==null?$.pv():x},
aG5(d){var x=this,w=B.aSe(d),v=x.c
if(v===w)return
v=v!=null&&v===B.bCv(w)?x.d+1:1
x.d=v
if(v>x.e)x.e=v
x.c=w},
acs(){var x=Date.now(),w=B.aSe(new A.bb(x,0,!1))
x=this.c
return x===w||x===B.bCv(w)?this.d:0},
agC(d,e,f,g){var x=this,w=new A.bb(Date.now(),0,!1),v=x.Xt(d,e),u=g?C.e.co(v.b+1,0,100):0,t=g&&u>=f?D.dR:D.lw,s=new B.pG(t,u,w.j3()),r=d*1000+e
x.a.n(0,r,s)
x.b.C(0,r)
x.aG5(w)
return s},
Xk(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.bX[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pv():s).a===D.dR)++u}return u},
aUS(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.bX[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pv():s).a===D.lw)++u}return u},
gafI(){var x=this.a,w=A.w(x).i("c4<2>")
return new A.aO(new A.c4(x,w),new B.aSf(),w.i("aO<L.E>")).gK(0)},
gakB(){var x=this.a,w=A.w(x).i("bf<1>")
w=A.n4(new A.bf(x,w),new B.aSg(),w.i("L.E"),y.S)
w=A.ek(w,A.w(w).i("L.E"))
x=A.a0(w,A.w(w).c)
C.b.kW(x)
return x},
cV(){var x,w,v,u,t,s=this,r=y.N,q=A.x(r,y.L)
for(x=s.a,x=new A.dR(x,A.w(x).i("dR<1,2>")).ga5(0),w=y.t;x.u();){v=x.d
u=v.a
t=v.b
q.n(0,""+u,A.a([t.a.a,t.b,t.c.a],w))}x=s.b
x=A.a0(x,A.w(x).c)
return A.M(["v",1,"rows",q,"dirty",x,"last",s.c,"streak",s.d,"best",s.e],r,y.z)},
aQY(){var x,w,v,u,t,s,r,q,p,o=A.a([],y.Z)
for(x=this.b,x=A.btM(x,300,A.w(x).c),x=new A.EO(J.aG(x.a),x.b,A.w(x).i("EO<1>")),w=y.N,v=y.z,u=this.a;x.u();){t=x.gL()
s=C.e.b7(t,1000)
t=C.e.ae(t,1000)
r=s*1000+t
q=u.h(0,r)
q=(q==null?$.pv():q).a===D.dR?"memorized":"learning"
p=u.h(0,r)
if(p==null)p=$.pv()
r=u.h(0,r)
o.push(A.M(["surah",s,"ayah",t,"status",q,"perfect_count",p.b,"updated_at",(r==null?$.pv():r).c.jB()],w,v))}return o},
aVr(d){var x,w,v,u,t,s,r
for(x=d.length,w=this.a,v=this.b,u=0;u<d.length;d.length===x||(0,A.A)(d),++u){t=d[u]
s=A.el(t.h(0,"surah"))*1000+A.el(t.h(0,"ayah"))
r=w.h(0,C.e.b7(s,1000)*1000+C.e.ae(s,1000))
if((r==null?$.pv():r).c.jB()===t.h(0,"updated_at"))v.I(0,s)}},
aVz(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(x=J.aG(d),w=this.b,v=this.a,u=y.f,t=!1;x.u();){s=x.gL()
if(!u.b(s))continue
r=A.bU(s.h(0,"surah"))
q=r==null?null:C.d.bS(r)
r=A.bU(s.h(0,"ayah"))
p=r==null?null:C.d.bS(r)
o=A.hI(A.f(s.h(0,"updated_at")))
r=!0
if(q!=null)if(p!=null)if(o!=null)r=!(q>=1&&q<=114&&p>=1&&p<=I.bX[q-1].a[1])
if(r)continue
n=B.bYs(s.h(0,"status"))
if(n===D.lv)continue
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
v.n(0,r,new B.pG(n,C.e.co(l==null?0:l,0,100),o.j3()))
w.I(0,r)
t=!0}return t}}
B.PJ.prototype={
Di(d,e,f,g,h){var x=this,w=g==null?x.a:g,v=h==null?x.b:h,u=d==null?x.c:d,t=e==null?x.d:e
return new B.PJ(w,v,u,t,f==null?x.e:f)},
aPv(d){var x=null
return this.Di(x,x,d,x,x)},
ac3(d){var x=null
return this.Di(x,d,x,x,x)},
aPz(d){var x=null
return this.Di(x,x,x,x,d)},
aP0(d){var x=null
return this.Di(d,x,x,x,x)},
aPw(d){var x=null
return this.Di(x,x,x,d,x)},
cV(){var x=this
return A.M(["n",x.a,"r",x.b,"auto",x.c,"hide",x.d,"in",x.e],y.N,y.z)}}
B.CW.prototype={
M(){return"ModelState."+this.b}}
B.PK.prototype={
WO(){var x=this.Q
return x==null?this.Q=new B.aSh(this).$0():x},
os(d){return this.aja(d)},
aja(d){var x=0,w=A.n(y.H),v=this
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
if(u!=null)u.aI()
v.as=A.cK(C.F,v.gapo())
return A.l(null,w)}})
return A.m($async$wp,w)},
FS(d,e,f){return this.ajN(d,e,f)},
ajN(d,e,f){var x=0,w=A.n(y.H),v=this
var $async$FS=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:v.z=new A.bo(d,e,f)
x=2
return A.d(A.io("mt.tutor.last",C.Z.hw(A.M(["s",d,"f",e,"t",f],y.N,y.S),null)),$async$FS)
case 2:return A.l(null,w)}})
return A.m($async$FS,w)},
za(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$za=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=s.f
if(n===D.MF||n===D.hz){x=1
break}s.f=D.MF
s.y=null
s.a_()
u=4
n=A.jL().geq().h(0,"tutor_device")
if(n==null)n="auto"
p=A.jL().geq().h(0,"tutor_threads")
p=A.fb(p==null?"":p,null)
if(p==null)p=0
x=7
return A.d(s.a.aV9(new B.aSi(s),n,p),$async$za)
case 7:s.x=e
s.f=D.hz
n=A.jL().geq().h(0,"debug")
if(n==="1"){n=s.x
n.toString
r=n
A.rS().$1("[tutor] model ready: "+r.a+" "+r.b+" threads="+r.f+" isolated="+r.r+" in "+r.c+" ms (warm-up "+r.w+" ms, cached before: "+r.d+")")}u=2
x=6
break
case 4:u=3
m=t.pop()
n=A.Y(m)
if(n instanceof B.kv){q=n
s.f=D.auB
s.y=q
n=A.jL().geq().h(0,"debug")
if(n==="1")A.rS().$1("[tutor] model failed: "+A.f(q))}else throw m
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
try{k=$.aa().b
k===$&&A.b()
k=k.gbR().e.a
q=(k==null?null:k.r)!=null}catch(d){x=1
break}if(!q){x=1
break}r.at=!0
u=4
k=$.aa().b
k===$&&A.b()
p=k
x=7
return A.d(p.cR("quran_tutor_progress").hm("surah, ayah, status, perfect_count, updated_at"),$async$tX)
case 7:o=a1
n=r.c.aVz(o)
m=0,k=y.N,i=y.z
case 8:if(!(m<25)){x=10
break}l=r.c.aQY()
if(J.bi(l)===0){x=10
break}h=p
g=A.M(["p_rows",l],k,i)
f=h.CW
f===$&&A.b()
f.b.E(0,A.lU(h.x,k,k))
x=11
return A.d(f.aZe("quran_tutor_save",!1,g,i),$async$tX)
case 11:r.c.aVr(l)
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
EW(d){return this.aYU(d)},
aYU(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$EW=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:p=B.btY(t.c.cV()).cV()
y.f.a(p.h(0,"rows")).dt(0,new B.aSj(d))
t.c=B.btY(p)
x=2
return A.d(t.wp(),$async$EW)
case 2:v=4
s=$.aa().b
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
B.uC.prototype={
V(){var x=$.HK()
return new B.Tr(x,new A.b4(C.M,$.a7()))}}
B.Tr.prototype={
ag(){var x,w,v=this
v.aq()
x=v.d
x.a7(v.gmN())
w=y.a
x.WO().bA(new B.bcl(v),w)
H.aI3().bA(new B.bcm(v),w).hF(new B.bcn())
A.Ky(H.btq(),y.y)},
uE(){if(this.c!=null)this.t(new B.bc7())},
l(){var x,w=this
w.d.S(w.gmN())
x=w.e
x.p$=$.a7()
x.T$=0
w.aA()},
Is(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Is=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.d
x=3
return A.d(s.os(s.b.aPv(!0)),$async$Is)
case 3:t=s.a
t.aXB()
if(t.a_2()){t.adg()
x=1
break}s.za()
case 1:return A.l(v,w)}})
return A.m($async$Is,w)},
uF(d,e,f){return this.aEC(d,e,f)},
aL7(d){return this.uF(d,null,null)},
aEC(d,e,f){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$uF=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:if(u.w==null){u.c.U(y.q).f.ba(A.bS(null,null,null,null,null,C.l,null,A.p("\u0644\u062d\u0638\u0629\u2026 \u0628\u0646\u062c\u0647\u0651\u0632 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641",null,null,null,null,null,null,null,null),null,C.F,null,null,null,null,null,null,null,null,null,null))
x=1
break}x=e!=null&&f!=null?3:5
break
case 3:t=new A.Q(e,f)
x=4
break
case 5:s=u.c
s.toString
x=6
return A.d(B.c1_(s,d),$async$uF)
case 6:t=h
case 4:if(t==null||u.c==null){x=1
break}x=7
return A.d(u.d.FS(d,t.a,t.b),$async$uF)
case 7:s=u.c
if(s==null){x=1
break}r=y.z
x=8
return A.d(A.ao(s,!1).cm(A.cm(new B.bcd(u,d,t),null,r),r),$async$uF)
case 8:if(u.c!=null)u.t(new B.bce())
case 1:return A.l(v,w)}})
return A.m($async$uF,w)},
D(d){var x=null,w=this.d,v=w.b,u=A.a([],y.p),t=w.a
if(t.gaeB()&&!A.ao(d,!1).Uz())u.push(A.cN(x,x,x,x,D.abl,x,x,t.gaUT(),x,x,x,"\u0631\u062c\u0648\u0639 \u0644\u0645\u0633\u062c\u062f\u064a",x))
t=v.e
if(t)u.push(A.cN(x,x,x,x,D.acd,x,x,new B.bch(d),x,x,x,"\u062a\u0642\u062f\u0651\u0645\u064a",x))
u.push(A.cN(x,x,x,x,D.AL,x,x,new B.bci(d),x,x,x,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",x))
if(!w.e)w=D.akW
else w=t?this.aB6():this.aBw()
return M.vh(u,w,"\u0627\u0644\u0645\u062d\u0641\u0651\u0638")},
aBw(){var x,w,v,u,t,s,r,q,p=null,o=this.d.d
if(o==null)o=D.Uu
x=this.r
w=x==null?p:x.a-x.b
if(!(o.a&&o.b))v="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u062f\u0639\u0645 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638. \u062c\u0631\u0651\u0628 \u0623\u062d\u062f\u062b \u0646\u0633\u062e\u0629 \u0645\u0646 Chrome (\u0623\u0646\u062f\u0631\u0648\u064a\u062f) \u0623\u0648 Safari (\u0622\u064a\u0641\u0648\u0646)."
else if(!o.f)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0641\u062a\u062d \u0639\u0644\u0649 https \u0639\u0634\u0627\u0646 \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0627\u064a\u0643."
else v=!o.c||!o.d?"\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u0633\u0645\u062d \u0628\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0646 \u0627\u0644\u0645\u0627\u064a\u0643.":p
x=y.p
u=A.a([D.aFL,C.as],x)
for(t=0;t<4;++t){s=D.amr[t]
u.push(new A.ab(C.by,A.an(A.a([A.c8(s.a,C.a8,p,18),C.ap,new A.dL(1,C.aX,A.p(s.b,p,p,p,p,G.Tw,p,p,p),p)],x),C.B,C.f,C.h,0,p),p))}u=A.ah(u,C.B,C.f,C.h)
s=A.a([D.aWw,C.S,A.p("\u0647\u0646\u062d\u0645\u0651\u0644 \u0645\u0644\u0641 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 (\u062d\u0648\u0627\u0644\u064a "+E.aU(105)+" \u0645\u064a\u062c\u0627) \u0648\u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0648\u0628\u0639\u062f \u0643\u062f\u0647 \u0628\u064a\u0641\u062a\u062d \u0645\u0646 \u063a\u064a\u0631 \u062a\u062d\u0645\u064a\u0644. \u064a\u064f\u0641\u0636\u0651\u0644 \u062a\u0643\u0648\u0646 \u0639\u0644\u0649 Wi-Fi.",p,p,p,p,F.ai,p,p,p)],x)
if(w!=null){r=w<3e8
q=r?"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0645\u062a\u0635\u0641\u062d \u0642\u0644\u064a\u0644\u0629 ("+E.aU(C.d.ar(w/1e6))+" \u0645\u064a\u062c\u0627) \u2014 \u0641\u0636\u0651\u064a \u0634\u0648\u064a\u0629 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0623\u0648\u0644.":"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629: \u0643\u0641\u0627\u064a\u0629 \u2713"
C.b.E(s,A.a([C.S,A.p(q,p,p,p,p,A.cB(p,p,r?D.cS:C.cs,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x))}r=o.w
if(r>0&&r<3)C.b.E(s,A.a([C.S,D.aW4],x))
x=A.a([new E.cT(u,C.ah,C.ay,p,!0,p),new E.cT(A.ah(s,C.B,C.f,C.h),C.ah,C.ay,p,!1,p),D.b22,C.S],x)
if(v!=null)x.push(new E.cT(A.p(v,p,p,p,p,D.aOu,p,p,p),C.ah,C.ay,p,!1,p))
else x.push(A.k8(D.aaH,D.aRD,this.gaEL(),A.k9(C.q,C.a7,D.aIc,p,p)))
x.push(C.aN)
x.push(D.Ut)
return x},
aB6(){var x,w,v=this,u=null,t=v.d,s=t.c,r=v.e,q=C.c.ao(r.a.a),p=q.length===0,o=p?C.tt:H.bGJ(q),n=t.z,m=A.aV(v.a8A(C.hi,E.aU(s.gafI())+" \u0622\u064a\u0629","\u062d\u0641\u0638\u062a\u0647\u0627"),1),l=E.aU(s.acs()),k=s.c,j=Date.now()
k=k===B.aSe(new A.bb(j,0,!1))?"\u0648\u0631\u0627 \u0628\u0639\u0636 \u2014 \u0643\u0645\u0651\u0644!":"\u0633\u0645\u0651\u0639 \u0627\u0644\u0646\u0647\u0627\u0631\u062f\u0647 \u0639\u0634\u0627\u0646 \u062a\u0643\u0645\u0651\u0644"
j=y.p
k=A.a([new B.CX(t,!1,u),A.an(A.a([m,C.ap,A.aV(v.a8A(C.Ab,l+" \u064a\u0648\u0645",k),1)],j),C.j,C.f,C.h,0,u),C.N],j)
if(n!=null){t=H.jk(n.a)
m=n.b
l=n.c
m=m===l?"\u0622\u064a\u0629 "+E.aU(m):"\u0627\u0644\u0622\u064a\u0627\u062a "+E.aU(m)+"\u2013"+E.aU(l)
k.push(new E.cT(A.an(A.a([D.abM,C.aZ,A.aV(A.ah(A.a([D.aQ9,A.p(t+" \u2014 "+m,u,u,u,u,F.b0,u,u,u)],j),C.B,C.f,C.h),1),R.ko],j),C.j,C.f,C.h,0,u),C.ah,C.ay,new B.bca(v,n),!0,u))}t=C.i.bQ(0.08)
k.push(A.bD(u,C.E,!1,u,!0,C.l,u,A.bI(),r,u,u,u,u,u,2,A.hq(u,new A.e5(4,A.ac(14),C.w),u,u,u,u,u,u,!0,u,u,u,u,u,u,t,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,C.oS,"\u0639\u0627\u064a\u0632 \u062a\u062d\u0641\u0638 \u0633\u0648\u0631\u0629 \u0625\u064a\u0647\u061f",u,u,u,u,u,u,u,u,u,!0,!0,!1,u,C.mL,u,u,u,u,u,u,u,u,u,u,u,u),C.r,!0,u,!0,u,!1,u,C.G,u,u,u,u,u,u,u,u,u,1,u,u,!1,"\u2022",u,new B.bcb(v),u,u,u,!1,u,u,!1,u,!0,u,C.D,u,u,u,u,u,u,u,u,u,u,u,C.dc,!0,C.x,u,C.J,u,u,u,u))
k.push(C.N)
if(!p){t=A.a([],j)
if(o.length===0)t.push(D.aTY)
for(r=o.length,x=0;x<o.length;o.length===r||(0,A.A)(o),++x)t.push(v.Jn(o[x]))
C.b.E(k,t)}else{t=A.a([D.awJ,D.ax6,v.Jn(1)],j)
for(w=114;w>=78;--w)t.push(v.Jn(w))
t.push(C.S)
r=v.f
p=A.c8(r?C.rX:C.mB,C.a8,u,u)
t.push(A.i9(p,A.p(r?"\u0627\u062e\u0641\u064a \u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631":"\u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631 (\u0627\u0644\u0628\u0642\u0631\u0629 \u0644\u062d\u062f \u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a)",u,u,u,u,C.ed,u,u,u),new B.bcc(v),u))
if(v.f)for(w=2;w<=77;++w)t.push(v.Jn(w))
C.b.E(k,t)}k.push(C.as)
k.push(D.wc)
return k},
a8A(d,e,f){var x=null,w=y.p
return new E.cT(A.an(A.a([A.c8(d,C.q,x,x),C.ap,A.aV(A.ah(A.a([A.p(e,x,x,x,x,F.b0,x,x,x),A.p(f,1,C.ak,x,x,D.aNh,x,x,x)],w),C.B,C.f,C.h),1)],w),C.j,C.f,C.h,0,x),C.ah,C.K,x,!1,x)},
Jn(d){var x,w=null,v=this.d.c,u=I.bX[d-1].a[1],t=v.Xk(d),s=t/u,r=y.p,q=A.bB(A.hg(C.W,A.a([A.brU(C.dV,G.bV,w,w,w,w,w,3,s,w),A.p(E.aU(d),w,w,w,w,T.TT,w,w,w)],r),C.l,C.c5,w),36,36),p=A.p(H.jk(d),w,w,w,w,D.aKf,w,w,w)
if(t===0)x=E.aU(u)+" \u0622\u064a\u0629"
else x=t===u?"\u0645\u062d\u0641\u0648\u0638\u0629 \u0643\u0644\u0647\u0627 \u2713":"\u062d\u0641\u0638\u062a "+E.aU(t)+" \u0645\u0646 "+E.aU(u)
r=A.a([q,C.jg,A.aV(A.ah(A.a([p,A.p(x,w,w,w,w,A.cB(w,w,t===u?G.bV:C.cs,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),C.B,C.f,C.h),1)],r)
if(s>0&&s<1)r.push(A.p(E.aU(C.d.ar(s*100))+"\u066a",w,w,w,w,D.TI,w,w,w))
r.push(D.aaL)
return new E.cT(A.an(r,C.j,C.f,C.h,0,w),K.z0,C.eP,new B.bcf(this,d),!1,w)}}
B.CX.prototype={
D(d){var x,w,v,u,t,s,r=null,q=this.c
switch(q.f.a){case 2:if(this.d)return C.aJ
return D.awB
case 3:x=q.y
x=A.a([A.p(x==null?"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0634\u063a\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638":B.HF(x),r,r,r,r,D.vB,r,r,r)],y.p)
w=q.y
if(w!=null)x.push(new B.zy(w,"model load",r))
x.push(C.S)
x.push(new A.xa(C.Va,!1,q.gaV8(),r,r,r,r,C.m,r,!1,r,!0,r,C.oW,r))
return new E.cT(A.ah(x,C.B,C.f,C.h),C.ah,C.ay,r,!1,r)
case 0:case 1:v=q.w
u=q.r
q=v>0
t=q?C.d.co(u/v,0,1):r
s=q&&u<v
q=A.p(s?"\u0628\u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026 "+E.aU(C.d.ar(u/1e6))+" \u0645\u0646 "+E.aU(C.d.ar(v/1e6))+" \u0645\u064a\u062c\u0627":"\u0628\u0646\u062c\u0647\u0651\u0632 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026",r,r,r,r,C.vD,r,r,r)
x=A.ac(8)
w=y.p
x=A.a([q,C.P,A.mH(x,A.Cz(C.dV,C.q,7,s?t:r),C.bt)],w)
if(!this.d)C.b.E(x,A.a([C.S,D.aS2],w))
return new E.cT(A.ah(x,C.B,C.f,C.h),C.ah,C.ay,r,!1,r)}}}
B.Rj.prototype={
D(d){var x=null,w=D.cS.bQ(0.1),v=A.ac(14),u=A.d1(D.cS.bQ(0.4),1)
return A.aA(x,A.an(A.a([D.abA,C.ap,A.aV(A.p(this.c?"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0627\u0644\u062a\u062c\u0648\u064a\u062f.":"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0623\u062d\u0643\u0627\u0645 \u0627\u0644\u062a\u062c\u0648\u064a\u062f. \u0627\u0642\u0631\u0627 \u0639\u0644\u0649 \u0634\u064a\u062e \u0623\u0648 \u0645\u062d\u0641\u0651\u0638 \u0641\u064a \u0645\u0633\u062c\u062f\u0643 \u0643\u0645\u0627\u0646.",x,x,x,x,D.TP,x,x,x),1)],y.p),C.B,C.f,C.h,0,x),C.m,x,x,new A.au(w,x,u,v,x,x,C.t),x,x,C.ay,C.aS,x,x,x)}}
B.Ac.prototype={
M(){return"_Phase."+this.b}}
B.zx.prototype={
V(){return new B.Vl($.HK(),D.jF)}}
B.Vl.prototype={
ghV(){var x=this.e
return x===$?this.e=this.a.d:x},
gxM(){var x,w=this.a,v=w.f
w=w.c
x=this.ghV()
return H.HD(w,x,v.uN(w,x)).b},
ag(){var x,w=this
w.aq()
x=w.d
x.a7(w.gmN())
x.WO()
x.a.XT(B.aoV(w.a.c,w.ghV()))},
uE(){if(this.c!=null)this.t(new B.bjM())},
l(){var x,w=this,v=w.d
v.S(w.gmN())
x=w.Q
if(x!=null)x.aI()
v=v.a
v.G7()
v.UC()
w.aA()},
R3(d){var x,w,v=this
if(v.f===D.pn)v.d.a.UC()
x=v.d.a
x.G7()
w=v.Q
if(w!=null)w.aI()
v.t(new B.bk1(v,d))
x.XT(B.aoV(v.a.c,d))
w=v.a
if(d<w.e)x.XT(B.aoV(w.c,d+1))},
JB(d){return this.aC5(d)},
aC5(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$JB=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f===D.pm){u.d.a.G7()
u.t(new B.bk5(u))
x=1
break}t=u.r!=null?D.fX:D.jF
u.t(new B.bk6(u))
s=u.d
r=A.a([B.aoV(u.a.c,u.ghV())],y.s)
q=d==null?s.b.b:d
x=3
return A.d(s.a.EJ(r,q),$async$JB)
case 3:p=f
if(u.c==null||u.f!==D.pm){x=1
break}u.t(new B.bk7(u,t,p))
case 1:return A.l(v,w)}})
return A.m($async$JB,w)},
IG(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$IG=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.d
if(l.f!==D.hz){x=1
break}p=l.a
p.G7()
r=B.AH(s.gxM()).length
s.t(new B.bk9(s))
o=s.Q
if(o!=null)o.aI()
s.Q=A.nB(C.fl,new B.bka(s))
u=4
o=B.bvF(r)
n=A.d_(0,0,0,350*r,0,0)
x=7
return A.d(p.a_d(l.b.c,o,n,new B.bkb(s),new B.bkc(s)),$async$IG)
case 7:u=2
x=6
break
case 4:u=3
k=t.pop()
l=A.Y(k)
if(l instanceof B.kv){q=l
l=s.Q
if(l!=null)l.aI()
if(s.c!=null)s.t(new B.bkd(s,q))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$IG,w)},
xI(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$xI=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.f!==D.pn){x=1
break}m=s.Q
if(m!=null)m.aI()
s.t(new B.bkf(s))
s.Q=A.nB(C.ha,new B.bkg(s))
l=new A.z4()
$.AK()
l.my()
r=l
u=4
m=s.d.a
x=7
return A.d(m.a_g(),$async$xI)
case 7:q=e
if(q.b<0.8){s.aL6("\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0642\u0635\u064a\u0631 \u0623\u0648\u064a \u2014 \u062f\u0648\u0633 \xab\u0633\u0645\u0651\u0639\xbb \u0648\u0627\u0642\u0631\u0627 \u0627\u0644\u0622\u064a\u0629 \u0643\u0644\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb.")
x=1
break}x=8
return A.d(m.ahw(q,B.AH(s.gxM()).length),$async$xI)
case 8:p=e
s.ch=A.d_(0,0,r.gVW(),0,0,0)
k=A.jL().geq().h(0,"debug")
if(k==="1"){o=B.bGZ(m.Dt())
A.rS().$1("[tutor] "+s.a.c+":"+s.ghV()+" audio="+C.d.au(q.b,1)+"s infer="+p.b+"ms total="+r.gyx()+"ms "+p.gKY()+" text="+p.a)
A.rS().$1("[tutor] stages: "+A.f(o))
s.ax="\u062a\u0633\u062c\u064a\u0644\u0643 "+C.d.au(p.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.au(p.b/1000,2)+" \u062b\n"+p.gKY()+"\n"+A.f(o)+"\n"+p.a}s.a49(p.a)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.Y(i)
if(m instanceof B.kv){n=m
m=A.jL().geq().h(0,"debug")
if(m==="1")A.rS().$1("[tutor] check failed: "+A.f(n)+"\n"+s.d.a.Dt())
s.Tu(B.HF(n),n)}else throw i
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$xI,w)},
Tu(d,e){var x=this,w=x.Q
if(w!=null)w.aI()
if(x.c==null)return
x.t(new B.bk0(x,d,e))},
aL6(d){return this.Tu(d,null)},
a49(d){var x,w,v,u,t,s=this,r={},q=s.Q
if(q!=null)q.aI()
if(s.c==null)return
x=B.bFe(s.gxM(),d)
r.a=null
if(C.c.ao(x.c).length!==0){q=s.d
w=q.c
v=s.a.c
u=s.ghV()
t=x.gpT()
r.a=w.agC(v,u,q.b.a,t)
q.wp()}s.t(new B.bk2(r,s,x))},
H2(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$H2=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:g=s.d
if(g.f!==D.hz){x=1
break}s.t(new B.bjU(s))
l=s.Q
if(l!=null)l.aI()
s.Q=A.nB(C.ha,new B.bjV(s))
k=new A.z4()
$.AK()
k.my()
r=k
u=4
l=g.a
x=7
return A.d(l.aZI(B.aoV(s.a.c,s.ghV()),B.AH(s.gxM()).length),$async$H2)
case 7:q=e
p=B.bGZ(l.Dt())
o="\u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a "+C.d.au(q.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.au(q.b/1000,2)+" \u062b (\u0627\u0644\u0643\u0644 "+C.d.au(r.gyx()/1000,2)+" \u062b)\n"+q.gKY()+"\n"+A.f(p)+"\n"+q.a
A.rS().$1("[tutor-debug] "+s.a.c+":"+s.ghV()+" audio="+C.d.au(q.c,1)+"s infer="+q.b+"ms total="+r.gyx()+"ms "+q.gKY()+" text="+q.a)
A.rS().$1("[tutor-debug] stages: "+A.f(p))
s.ch=A.d_(0,0,r.gVW(),0,0,0)
s.a49(q.a)
n=s.r
if(n!=null){l=n.gpT()
j=n.b
i=A.ad(j).i("aO<1>")
j=A.a0(new A.aO(j,new B.bjW(),i),i.i("L.E"))
A.rS().$1("[tutor-debug] perfect="+l+" ops="+A.f(j))}s.t(new B.bjX(s,o))
u=2
x=6
break
case 4:u=3
f=t.pop()
l=A.Y(f)
if(l instanceof B.kv){m=l
A.rS().$1("[tutor-debug] failed: "+A.f(m)+"\n"+g.a.Dt())
s.Tu(B.HF(m),m)}else throw f
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$H2,w)},
gSp(){var x,w,v
for(x=this.a.d,w=this.d;v=this.a,x<=v.e;++x){v=w.c.a.h(0,v.c*1000+x)
if((v==null?$.pv():v).a!==D.dR)return!1}return!0},
D(d){var x,w=this,v=null,u=w.d,t=u.c.Xt(w.a.c,w.ghV()),s=u.b,r=s.d&&!w.x&&w.f!==D.fX,q=H.jk(w.a.c),p=y.p,o=A.a([A.cN(v,v,v,v,D.AL,v,v,new B.bkl(d),v,v,v,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",v)],p),n=w.auu(),m=A.p("\u0622\u064a\u0629 "+E.aU(w.ghV()),v,v,v,v,S.la,v,v,v),l=E.aU(w.ghV()-w.a.d+1),k=w.a
s=A.a([A.an(A.a([m,C.bK,A.p("("+l+" \u0645\u0646 "+E.aU(k.e-k.d+1)+")",v,v,v,v,F.ai,v,v,v),C.ds,w.aFn(t,s.a)],p),C.j,C.f,C.h,0,v),C.N],p)
if(r)s.push(w.aB1())
else{m=w.r
if(m!=null){l=w.f
l=l!==D.pn&&l!==D.lo}else l=!1
if(l)s.push(w.asM(m))
else s.push(A.p(w.gxM()+" \ufd3f"+E.aU(w.ghV())+"\ufd3e",v,v,v,v,D.hS,C.ae,C.aK,v))}s=A.a([new B.CX(u,!0,v),n,C.P,new E.cT(A.ah(s,C.am,C.f,C.h),D.a6h,C.ay,v,!1,v)],p)
n=w.r
if(n!=null&&w.f===D.fX)s.push(w.aMk(n))
if(w.r!=null&&w.f===D.fX&&w.ch!=null){x=C.d.ar(C.e.b7(w.ch.a,1000)/100)
s.push(new A.ab(C.by,A.p("\u0627\u062a\u0631\u0627\u062c\u0639 \u0641\u064a "+(E.aU(C.e.b7(x,10))+"\u066b"+E.aU(C.e.ae(x,10)))+" \u062b",v,v,v,v,F.ai,C.ae,v,v),v))}n=w.as
if(n!=null)s.push(new A.ab(C.ay,A.p(n,v,v,v,v,D.vB,v,v,v),v))
if(w.as!=null&&w.at!=null){n=w.at
n.toString
s.push(new B.zy(n,"check "+w.a.c+":"+w.ghV(),v))}s.push(w.ata())
s.push(C.as)
s.push(A.r6(C.q,C.K,v,new B.bkm(w),D.aQV,D.aT_,u.b.d))
n=w.a
if(n.e>n.d){n=w.gSp()
s.push(new E.cT(A.an(A.a([D.aa0,C.aZ,A.aV(A.ah(A.a([D.aTI,A.p(w.gSp()?"\u062d\u0641\u0638\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u0633\u0645\u0651\u0639\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636 \u0645\u0646 \u063a\u064a\u0631 \u0645\u0627 \u062a\u0634\u0648\u0641\u0647\u0627":"\u0644\u0645\u0627 \u062a\u062e\u0644\u0651\u0635 \u0627\u0644\u0622\u064a\u0627\u062a \u0648\u0627\u062d\u062f\u0629 \u0648\u0627\u062d\u062f\u0629\u060c \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0644\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636",v,v,v,v,F.ai,v,v,v)],p),C.B,C.f,C.h),1),R.ko],p),C.j,C.f,C.h,0,v),C.ah,C.ay,new B.bkn(w,d),n,v))}n=A.jL().geq().h(0,"debug")
if(n==="1"){p=A.a([C.P,A.fT(D.aaG,D.aSG,u.f===D.hz&&w.f!==D.lo?w.gatJ():v,v)],p)
n=w.ax
if(n!=null)p.push(new A.ab(C.iq,A.Ea(n,F.ai,v,v),v))
n=u.x
if(n!=null){m=n.a
l=n.b
n=n.gll()
u=u.x
p.push(A.p("model: "+m+" "+l+" \u2014 "+n+", isolated "+u.r+", load "+u.c+" ms (warm-up "+u.w+" ms)",v,v,v,v,F.ai,v,v,v))}p.push(A.bZ(D.aTk,v,v,new B.bko(w,d),v,v))
C.b.E(s,p)}s.push(C.P)
s.push(D.wc)
return M.vh(o,s,q)},
auu(){var x=this.a,w=x.e-x.d+1
if(w===1)return C.aJ
return A.bB(A.qo(new B.bjZ(this),w,null,C.aA,new B.bk_()),36,null)},
aFn(d,e){var x,w,v,u,t,s,r,q=null
if(d.a===D.dR)return D.aFQ
x=d.b
w=E.aU(x)
v=E.aU(e)
u=A.a([],y.p)
for(t=0;t<e;++t){s=t<x
r=s?C.cT:D.a9z
u.push(new A.ab(D.a6Q,A.c8(r,s?G.bV:C.eJ,q,16),q))}return A.btV(A.an(u,C.j,C.f,C.a_,0,q),q,"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637 \u0648\u0631\u0627 \u0628\u0639\u0636: "+w+" \u0645\u0646 "+v,q,q)},
aB1(){var x=null
return A.dt(!1,A.ac(12),!0,A.aA(x,D.a2W,C.m,x,x,new A.au(K.qk,x,x,A.ac(12),x,x,C.t),x,x,x,D.a60,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bk4(this),x,x,x,x,x,x,x)},
asM(d){var x,w,v,u,t,s=null,r=A.a([],y.R)
for(x=d.a,w=0;w<x.length;++w){v=J.b6(d.gG6(),w)
A:{if(D.fR===v){u=D.hS.cq(G.bV)
break A}if(D.p9===v){u=D.hS.Vd(D.cS,C.fJ,D.cS)
break A}if(D.pa===v){u=D.hS.Vd(D.dA,C.fJ,D.dA)
break A}u=D.hS.Vd(C.eJ,C.oL,C.cr)
break A}t=x[w]
r.push(new A.fj(t.a,s,s,C.bl,s,s,s,s,s,s,u))
r.push(K.vv)}x=E.aU(this.ghV())
r.push(A.dM(s,s,s,s,s,s,s,s,s,D.hS.cq(C.a8),"\ufd3f"+x+"\ufd3e"))
return A.a9x(A.dM(r,s,s,s,s,s,s,s,s,s,s),s,C.ae,C.aK)},
aMk(d){var x,w,v,u,t,s,r=this.w
if(C.c.ao(d.c).length===0)return D.b1I
if(d.gpT()){x=r==null
if((x?null:r.a)===D.dR&&r.b===this.d.b.a)x="\u0627\u0644\u0622\u064a\u0629 \u062f\u064a \u0627\u062a\u062d\u0641\u0638\u062a! \u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0627\u0644\u0644\u064a \u0628\u0639\u062f\u0647\u0627."
else x=!x&&r.a!==D.dR?"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637. \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0645\u0627\u0646 "+E.aU(this.d.b.a-r.b)+" \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629.":"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637."
return new B.zK(G.bV,C.cT,"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713",x,null)}x=d.gG6()
w=J.d0(x)
v=w.hO(x,new B.bkh()).gK(0)
u=w.hO(x,new B.bki()).gK(0)
t=w.hO(x,new B.bkj()).gK(0)
x=A.a([],y.s)
if(u>0)x.push(E.aU(u)+" \u063a\u0644\u0637")
if(v>0)x.push(E.aU(v)+" \u0631\u0627\u062c\u0639\u0647\u0627")
if(t>0)x.push(E.aU(t)+" \u0646\u0627\u0642\u0635\u0629")
if(d.gDJ().length!==0)x.push(E.aU(d.gDJ().length)+" \u0632\u064a\u0627\u062f\u0629")
w=u+t>0?D.dA:D.cS
x=C.b.aM(x," \u2022 ")
s=d.gDJ().length!==0?"\n\u0632\u064a\u0627\u062f\u0629: "+C.b.aM(d.gDJ(),"\u060c "):""
return new B.zK(w,C.kn,"\u0642\u0631\u0628\u062a! \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0644\u0648\u0651\u0646\u0629",x+"\n\u0627\u0644\u0623\u0635\u0641\u0631: \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u062f\u064a \u2014 \u0627\u0644\u0623\u062d\u0645\u0631: \u063a\u0644\u0637 \u2014 \u0627\u0644\u0631\u0645\u0627\u062f\u064a \u0627\u0644\u0645\u0634\u0637\u0648\u0628: \u0646\u0633\u064a\u062a\u0647\u0627."+s,null)},
ata(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d,g=h.f===D.hz,f=j.f
switch(f.a){case 2:if(j.z==null)x=0
else{f=Date.now()
w=j.z
w.toString
x=C.e.b7(new A.bb(f,0,!1).dG(w).a,1e6)}v=C.e.b7(B.bvF(B.AH(j.gxM()).length).a,1e6)
f=j.gaK_()
w=96+26*j.y
u=D.dA.bQ(0.25)
w=A.l2(i,A.bxf(C.W,A.aA(i,D.aaN,C.m,i,i,D.Xq,i,84,i,i,i,i,84),i,new A.au(u,i,i,i,i,i,C.cq),C.yO,i,w,w),C.r,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,f,i,i,i,i,i,i)
u=A.p("\u0628\u0646\u0633\u062c\u0651\u0644\u2026 "+B.buG(x)+" / "+B.buG(v),i,i,i,i,L.l8,i,i,i)
return A.ah(A.a([w,C.P,u,A.p(h.b.c?"\u0644\u0645\u0627 \u062a\u062e\u0644\u0635 \u0627\u0633\u0643\u062a \u062b\u0627\u0646\u064a\u0629 \u0623\u0648 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb":"\u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb \u0644\u0645\u0627 \u062a\u062e\u0644\u0635",i,i,i,i,F.ai,i,i,i),A.bZ(D.aW3,i,i,f,i,i)],y.p),C.j,C.f,C.h)
case 3:t=C.d.dS((Date.now()-j.ay)/1000)
if(t<8)h="\u062b\u0648\u0627\u0646\u064a \u0648\u0646\u0642\u0648\u0644\u0643"
else h=t<25?"\u0644\u0633\u0647 \u0634\u063a\u0627\u0644\u064a\u0646 \u2014 \u0627\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0628\u062a\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0643\u062a\u0631 ("+E.aU(t)+" \u062b)":"\u0648\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0637\u0648\u0644 \u0645\u0646 \u0627\u0644\u0639\u0627\u062f\u064a \u2014 \u0644\u0648 \u0639\u0644\u0651\u0642 \u0647\u0646\u0639\u064a\u062f \u062a\u0634\u063a\u064a\u0644\u0647 \u0644\u0648\u062d\u062f\u0646\u0627 ("+E.aU(t)+" \u062b)"
return new A.ab(D.a5Y,A.ah(A.a([C.q8,C.as,D.aSk,A.p(h,i,i,i,i,F.ai,C.ae,i,i)],y.p),C.j,C.f,C.h),i)
default:s=f===D.pm
r=j.r
f=r==null
w=!f
q=w&&r.gpT()
u=A.c8(s?D.t7:L.Ar,i,i,i)
if(s)p="\u0648\u0642\u0651\u0641"
else p=w&&!q?"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u062d":"\u0627\u0633\u0645\u0639"
p=A.p(p,i,i,i,i,i,i,i,i)
o=A.k9(i,i,D.aI9,i,i)
u=A.aV(new A.xa(C.Va,!0,new B.bjN(j,r,q),i,i,i,o,C.m,i,!1,i,!0,i,new A.RN(p,u,o,i,i),i),1)
p=A.a([],y.n)
for(o=y.c,n=0;n<3;++n){m=D.Bq[n]
p.push(new A.eg(m,i,A.p("\xd7"+E.aU(m),i,i,i,i,i,i,i,i),o))}o=y.S
l=y.b
k=y.p
o=A.an(A.a([u,C.ap,A.uX(new B.bjO(j),p,A.cP([h.b.b],o),!1,A.jn(i,i,i,new A.bd(new B.bjP(),l),i,i,i,i,new A.bd(new B.bjQ(),l),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,C.dv),o)],k),C.j,C.f,C.h,0,i)
h=g&&!s?j.gaGF():i
u=A.c8(f?D.mE:C.kn,i,i,i)
if(g)f=f?"\u0633\u0645\u0651\u0639":"\u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a"
else f="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
f=A.p(f,i,i,i,i,C.cx,i,i,i)
p=q?O.h6:C.q
h=A.a([o,C.N,A.k8(u,f,h,A.k9(p,q?C.i:C.a7,D.oB,i,i))],k)
if(w&&j.ghV()<j.a.e)C.b.E(h,A.a([C.P,q?A.k8(D.aco,D.aVm,new B.bjR(j),A.k9(G.bV,C.a7,D.oB,i,i)):A.bZ(D.aQZ,i,i,new B.bjS(j),i,i)],k))
if(w){f=j.ghV()
w=j.a
u=w.e
f=f===u&&q&&u>w.d}else f=!1
if(f)h.push(new A.ab(C.qS,A.p(j.gSp()?"\u062e\u0644\u0651\u0635\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u062c\u0631\u0651\u0628 \xab\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636\xbb \u062a\u062d\u062a.":"\u062e\u0644\u0635\u062a \u0622\u062e\u0631 \u0622\u064a\u0629 \u2014 \u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0644\u0633\u0647 (\u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0635\u0641\u0631\u0627 \u0641\u0648\u0642).",i,i,i,i,D.TW,C.ae,i,i),i))
return A.ah(h,C.am,C.f,C.h)}}}
B.zK.prototype={
D(d){var x=this,w=null,v=x.c,u=v.bQ(0.12),t=A.ac(14),s=A.d1(v.bQ(0.5),1),r=y.p
return A.aA(w,A.an(A.a([A.c8(x.d,v,w,w),C.ap,A.aV(A.ah(A.a([A.p(x.e,w,w,w,w,A.cB(w,w,v,w,w,w,w,w,w,w,w,15,w,w,C.a2,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),C.v_,A.p(x.f,w,w,w,w,D.TP,w,w,w)],r),C.B,C.f,C.h),1)],r),C.B,C.f,C.h,0,w),C.m,w,w,new A.au(u,w,s,t,w,w,C.t),w,w,C.ay,C.aS,w,w,w)}}
B.zw.prototype={
V(){var x=y.S
return new B.Vk($.HK(),A.x(x,y.B),A.aC(x),A.x(x,y.N),A.dB(null,y.H))}}
B.Vk.prototype={
ag(){this.aq()
this.d.a7(this.gmN())},
uE(){if(this.c!=null)this.t(new B.bjv())},
l(){var x,w=this,v=w.d
v.S(w.gmN())
x=w.y
if(x!=null)x.aI()
v.a.UC()
w.aA()},
CD(d){return this.aJP(d)},
aJP(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m
var $async$CD=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.t(new B.bjE(t,d))
r=t.y
if(r!=null)r.aI()
t.y=A.nB(C.fl,new B.bjF(t))
v=3
r=t.d
q=t.a
p=q.f
q=q.c
q=B.bvF(B.AH(H.HD(q,d,p.uN(q,d)).b).length)
p=t.a
o=p.f
p=p.c
p=A.d_(0,0,0,350*B.AH(H.HD(p,d,o.uN(p,d)).b).length,0,0)
x=6
return A.d(r.a.a_d(r.b.c,q,p,new B.bjG(t,d),new B.bjH(t)),$async$CD)
case 6:v=1
x=5
break
case 3:v=2
m=u.pop()
r=A.Y(m)
if(r instanceof B.kv){s=r
r=t.y
if(r!=null)r.aI()
if(t.c!=null)t.t(new B.bjI(t,s))}else throw m
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$CD,w)},
Ba(d,e){return this.avu(d,e)},
avu(d,e){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Ba=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.e!==d){x=1
break}o=s.y
if(o!=null)o.aI()
s.t(new B.bjz(s,d))
n=d<s.a.e?d+1:null
r=s.d.a.a_g()
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
s.t(new B.bjA(s,d,p))}else throw l
x=6
break
case 3:x=2
break
case 6:if(q!=null){o=q
s.at=s.at.bA(new B.bjB(s,o,d),y.H)}case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ba,w)},
gaDn(){var x,w,v,u,t=this
for(x=t.a.d,w=t.f,v=t.r,u=t.w;x<=t.a.e;++x)if(!w.az(x)&&!v.m(0,x)&&!u.az(x)&&x!==t.e)return x
return null},
aHh(){this.t(new B.bjC(this))},
D(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q.f===D.hz,o=s.e,n=s.gaDn(),m=s.f,l=m.a,k=s.w.a,j=s.a,i=l+k===j.e-j.d+1&&s.r.a===0&&o==null
l=A.w(m).i("c4<2>")
x=new A.aO(new A.c4(m,l),new B.bjJ(),l.i("aO<L.E>")).gK(0)
l=H.jk(s.a.c)
m=y.p
q=A.a([new B.CX(q,!0,r),A.p("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 "+E.aU(s.a.d)+" \u0644\u062d\u062f "+E.aU(s.a.e)+" \u0645\u0646 \u062d\u0641\u0638\u0643\u060c \u0622\u064a\u0629 \u0622\u064a\u0629: \u0628\u0639\u062f \u0643\u0644 \u0622\u064a\u0629 \u062f\u0648\u0633 \xab\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629\xbb \u0648\u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0637\u0648\u0644 \u2014 \u0647\u0646\u0635\u062d\u0651\u062d \u0648\u0625\u0646\u062a \u0628\u062a\u0642\u0631\u0627.",r,r,r,r,F.ai,r,r,r),C.N],m)
for(w=s.a.d;w<=s.a.e;++w)q.push(s.aL8(w))
q.push(C.P)
k=s.Q
if(k!=null)q.push(A.p(k,r,r,r,r,D.vB,r,r,r))
k=s.as
if(k!=null){j=s.a
q.push(new B.zy(k,"review "+j.c+":"+j.d+"-"+j.e,r))}k=o==null
if(!k){j=E.aU(o)
if(s.z==null)v=0
else{v=Date.now()
u=s.z
u.toString
u=C.e.b7(new A.bb(v,0,!1).dG(u).a,1e6)
v=u}v=A.p("\u0628\u0646\u0633\u062c\u0651\u0644 \u0622\u064a\u0629 "+j+"\u2026 "+B.buG(v),r,r,r,r,L.l8,C.ae,r,r)
j=A.mH(A.ac(6),A.Cz(C.dV,D.dA,6,s.x),C.bt)
u=o<s.a.e
t=A.c8(u?Q.An:D.t7,r,r,r)
C.b.E(q,A.a([v,C.S,j,C.N,A.k8(t,A.p(u?"\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629":"\u062e\u0644\u0635\u062a",r,r,r,r,C.cx,r,r,r),new B.bjK(s,o),A.k9(C.q,C.a7,D.oB,r,r))],m))}else if(n!=null){j=p?new B.bjL(s,n):r
if(!p)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
else v=n===s.a.d?"\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0633\u0645\u064a\u0639":"\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+E.aU(n)
q.push(A.k8(D.abm,A.p(v,r,r,r,r,C.cx,r,r,r),j,A.k9(C.q,C.a7,D.oB,r,r)))}if(s.r.a!==0&&k)q.push(D.awO)
if(i){k=s.a
k=x===k.e-k.d+1
j=k?G.bV:D.cS
v=k?C.mA:C.kn
if(k)k="\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713 \u0633\u0645\u0651\u0639\u062a\u0647\u0645 \u0643\u0644\u0647\u0645 \u0635\u062d"
else{k=E.aU(x)
u=s.a
u=k+" \u0645\u0646 "+E.aU(u.e-u.d+1)+" \u0622\u064a\u0627\u062a \u0645\u0638\u0628\u0648\u0637\u0629"
k=u}u=s.a
u=x===u.e-u.d+1?"\u0631\u0628\u0646\u0627 \u064a\u062b\u0628\u0651\u062a\u0647\u0627 \u0641\u064a \u0642\u0644\u0628\u0643.":"\u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0641\u064a\u0647\u0627 \u0623\u0644\u0648\u0627\u0646 \u0648\u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a."
C.b.E(q,A.a([new B.zK(j,v,k,u,r),A.fT(D.acj,D.aVH,s.gaHg(),r)],m))}q.push(C.N)
q.push(D.wc)
return M.vh(r,q,"\u0633\u0645\u0651\u0639 "+l)},
aL8(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.f.h(0,d),i=l.w.h(0,d)
if(l.e===d)x=D.ab3
else if(l.r.m(0,d))x=P.oC
else if(i!=null)x=D.abc
else if(j!=null){w=j.gpT()?C.cT:D.a92
x=A.c8(w,j.gpT()?G.bV:D.cS,k,k)}else x=D.aao
w=y.p
v=A.a([A.an(A.a([A.p("\u0622\u064a\u0629 "+E.aU(d),k,k,k,k,D.aNS,k,k,k),C.ds,x],w),C.j,C.f,C.h,0,k)],w)
if(i!=null)v.push(A.p(i,k,k,k,k,D.TL,k,k,k))
if(j!=null&&!j.gpT()){u=y.R
t=A.a([],u)
for(s=j.a,r=0;r<s.length;++r){q=s[r]
p=j.gG6()
o=J.bs(p)
n=o.h(p,r)
A:{if(D.fR===n){m=G.bV
break A}if(D.p9===n){m=D.cS
break A}if(D.pa===n){m=D.dA
break A}m=C.eJ
break A}m=D.hS.aQ0(m,o.h(p,r)===D.pb?C.oL:k,22)
C.b.E(t,A.a([new A.fj(q.a,k,k,C.bl,k,k,k,k,k,k,m),K.vv],u))}w=A.a([C.aT,A.a9x(A.dM(t,k,k,k,k,k,k,k,k,k,k),k,C.ae,C.aK)],w)
if(C.c.ao(j.c).length===0)w.push(D.aTp)
C.b.E(v,w)}return new E.cT(A.ah(v,C.am,C.f,C.h),C.eQ,C.eP,k,!1,k)}}
B.zv.prototype={
V(){return new B.Vj($.HK())}}
B.Vj.prototype={
ag(){this.aq()
var x=this.d
x.a7(this.gmN())
x.WO()},
uE(){if(this.c!=null)this.t(new B.bjm())},
l(){this.d.S(this.gmN())
this.aA()},
D(d){var x,w,v,u,t,s=this,r=null,q=s.d.c,p=q.gakB(),o=A.a([],y.t)
for(x=78;x<=114;++x)o.push(x)
w=C.b.n0(o,0,new B.bjt(q))
v=C.b.n0(o,0,new B.bju())
o=y.p
o=A.a([A.an(A.a([A.aV(s.Ph(E.aU(q.gafI()),"\u0622\u064a\u0629 \u0645\u062d\u0641\u0648\u0638\u0629"),1),C.ap,A.aV(s.Ph(E.aU(q.acs()),"\u064a\u0648\u0645 \u0648\u0631\u0627 \u0628\u0639\u0636"),1),C.ap,A.aV(s.Ph(E.aU(q.e),"\u0623\u0637\u0648\u0644 \u0633\u0644\u0633\u0644\u0629"),1)],o),C.j,C.f,C.h,0,r),C.N,new E.cT(A.ah(A.a([A.p("\u062c\u0632\u0621 \u0639\u0645\u0651: "+E.aU(C.d.ar(w*100/v))+"\u066a",r,r,r,r,F.b0,r,r,r),C.S,A.mH(A.ac(6),A.Cz(C.dV,G.bV,8,w/v),C.bt),C.aT,A.p(E.aU(w)+" \u0645\u0646 "+E.aU(v)+" \u0622\u064a\u0629",r,r,r,r,F.ai,r,r,r)],o),C.B,C.f,C.h),C.ah,C.ay,r,!1,r)],o)
if(p.length===0)o.push(D.awV)
for(u=p.length,t=0;t<p.length;p.length===u||(0,A.A)(p),++t)o.push(s.aLa(p[t]))
o.push(C.P)
u=$.aa().b
u===$&&A.b()
u=u.gbR().e.a
o.push(A.p((u==null?r:u.r)!=null?"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643 \u0648\u064a\u0638\u0647\u0631 \u0639\u0644\u0649 \u0623\u064a \u062c\u0647\u0627\u0632 \u062a\u062f\u062e\u0644 \u0645\u0646\u0647.":"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647. \u0633\u062c\u0651\u0644 \u062f\u062e\u0648\u0644 \u0639\u0634\u0627\u0646 \u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643.",r,r,r,r,F.ai,r,r,r))
return M.vh(r,o,"\u062a\u0642\u062f\u0651\u0645\u064a \u0641\u064a \u0627\u0644\u062d\u0641\u0638")},
Ph(d,e){var x=null
return new E.cT(A.ah(A.a([A.p(d,x,x,x,x,D.aNE,x,x,x),A.p(e,x,x,x,x,C.U_,C.ae,x,x)],y.p),C.j,C.f,C.h),C.ah,C.K,x,!1,x)},
aLa(d){var x=null,w=this.d.c,v=I.bX[d-1].a[1],u=w.Xk(d),t=w.aUS(d),s=y.p,r=A.an(A.a([A.aV(A.p(H.jk(d),x,x,x,x,F.b0,x,x,x),1),A.p(E.aU(C.d.ar(u*100/v))+"\u066a",x,x,x,x,D.aOv,x,x,x)],s),C.j,C.f,C.h,0,x),q=A.mH(A.ac(6),A.Cz(C.dV,G.bV,7,u/v),C.bt),p=E.aU(u),o=E.aU(v),n=t>0?" \u2022 \u0628\u062a\u0631\u0627\u062c\u0639 "+E.aU(t):""
return new E.cT(A.ah(A.a([r,C.S,q,C.aT,A.p("\u0645\u062d\u0641\u0648\u0638 "+p+" \u0645\u0646 "+o+n,x,x,x,x,F.ai,x,x,x)],s),C.B,C.f,C.h),C.ah,C.ay,new B.bjs(this,d),!1,x)},
H5(d){return this.atY(d)},
atY(d){var x=0,w=A.n(y.H),v=this,u,t
var $async$H5=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=I.bX[d-1].a[1]
t=v.c
t.toString
x=2
return A.d(A.h2(N.dh,new B.bjr(v,d,u),t,!0,null,null,!1,y.H),$async$H5)
case 2:return A.l(null,w)}})
return A.m($async$H5,w)}}
B.a9U.prototype={
JA(d,e){var x=null,w=A.EP(x,x,x,x,x,x,x,x,x,x,x,D.aHU,C.K,x,x,x,x,C.nV,x,x)
return A.bZ(A.p(d,x,x,x,x,C.jq,x,x,x),x,x,new B.aS1(e),x,w)},
D(d){var x=this,w=y.p
return new E.cT(A.ah(A.a([D.aVd,C.S,D.aW2,A.f2(A.a([x.JA("tarteel-ai/whisper-base-ar-quran","https://huggingface.co/tarteel-ai/whisper-base-ar-quran"),x.JA("iqbalaesthetic/Basira","https://huggingface.co/iqbalaesthetic/Basira")],w),0,12),D.aQM,x.JA("tanzil.net","https://tanzil.net"),D.aWR,x.JA("everyayah.com","https://everyayah.com")],w),C.B,C.f,C.h),C.ah,C.ay,null,!1,null)}}
B.zy.prototype={
V(){return new B.Vm()}}
B.Vm.prototype={
ga7d(){var x=this.a
return B.c2f(x.c,x.d,$.bwc().Dt())},
JC(){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k
var $async$JC=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.t(new B.bkp(s))
v=3
r=A.bGD()
n=s.ga7d()
m=y.N
q=A.x(m,m)
J.fE(q,"app","masjid")
J.fE(q,"path","tutor \u203a "+s.a.d)
if(r!=null){m=r.length>160?C.c.W(r,0,160):r
J.fE(q,"ua",m)}x=6
return A.d(A.a0U(n,null,C.zy,q),$async$JC)
case 6:if(s.c!=null)s.t(new B.bkq(s))
t.push(5)
x=4
break
case 3:v=2
k=u.pop()
p=A.Y(k)
o=p instanceof A.d3?p.a:"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0628\u0639\u062a \u2014 \u0627\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0646\u062a \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
if(s.c!=null)s.t(new B.bkr(s,o))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.t(new B.bks(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$JC,w)},
D(d){var x,w,v,u=this,t=null,s=y.p
s=A.a([A.dt(!1,t,!0,new A.ab(C.z_,A.an(A.a([A.c8(u.d?C.rX:C.mB,C.cr,t,18),C.hL,D.aWp],s),C.j,C.f,C.h,0,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,new B.bku(u),t,t,t,t,t,t,t)],s)
if(u.d){x=A.ac(8)
s.push(A.aA(t,A.Ea(u.ga7d(),D.aKE,t,C.o),C.m,t,t,new A.au(K.qk,t,t,x,t,t,C.t),t,t,D.a64,C.ep,t,t,1/0))}if(u.f)s.push(D.aQS)
else{x=A.EP(t,t,t,t,t,t,t,t,t,t,t,D.aHV,C.K,t,t,t,t,C.nV,t,t)
w=u.e
v=w?t:u.gaL9()
s.push(A.i9(w?D.aIj:D.ac1,D.aUH,v,x))}x=u.r
if(x!=null)s.push(A.p(x,t,t,t,t,D.TL,t,t,t))
return new A.ab(C.ay,A.ah(s,C.B,C.f,C.h),t)}}
var z=a.updateTypes(["a8<~>()","~()","B(mk)","a8<F7>()","a8<F5>()","a8<F6>()","P<mk>()","B(pG)","bj(nj)","zx(z)","zv(z)","B(lO)","zw(z)","B(DM)"])
B.aUa.prototype={
$1(d){var x,w
if(d.m(0,C.C)){x=this.a
if(x.fy===D.jx)x=null
else{x=x.goC().k3
x=A.aH(31,x.B()>>>16&255,x.B()>>>8&255,x.B()&255)}return x}x=this.a
if(x.fy===D.jx)x=null
else{x=x.goC()
w=x.p3
x=w==null?x.k2:w}return x},
$S:27}
B.aS2.prototype={
$0(){var x=0,w=A.n(y.m),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=A.a9(A.cn(b.G.document).baseURI)
q=A.bT(r,0,null).X("quran_tutor/tutor.js?v=3").j(0)
x=7
return A.d(A.e6(import(q),y.m),$async$$0)
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
m=B.bTf("network",A.f(o))
throw A.o(m)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:299}
B.aS5.prototype={
$1(d){var x=null
return A.bmj(A.cb(d,"persist",x,x,x,x))},
$S:892}
B.aS4.prototype={
$0(){var x=0,w=A.n(y.C),v,u=this,t,s,r,q,p,o,n,m,l
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.a
n=A
m=A
l=A
x=4
return A.d(q.oN(),$async$$0)
case 4:x=3
return A.d(n.e6(m.cn(l.cb(e,"loadModel",A.bmQ(new B.aS3(u.b)),u.c,u.d,null)),y.m),$async$$0)
case 3:p=e
o=A.X(p.device)
if(o==null)o=null
if(o==null)o=""
t=A.X(p.dtype)
if(t==null)t=null
if(t==null)t=""
s=q.oM(p,"ms")
r=q.mB(p,"cached")
A.X(p.backend)
v=new B.F5(o,t,s,r,q.oM(p,"threads"),q.mB(p,"isolated"),q.oM(p,"warmMs"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+4}
B.aS3.prototype={
$2(d,e){this.a.$2(C.d.ar(d),C.d.ar(e))},
$S:893}
B.aS9.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=v.a
s=t.a
x=s==null?2:3
break
case 2:x=4
return A.d(t.oN(),$async$$0)
case 4:s=e
case 3:u={}
u.maxMs=C.e.b7(v.b.a,1000)
u.autoStop=v.c
u.minMs=C.e.b7(v.d.a,1000)
u.onLevel=A.eU(new B.aS7(v.e))
u.onAutoStop=A.eU(new B.aS8(v.f))
x=5
return A.d(A.e6(A.cn(A.cb(s,"startRecording",u,null,null,null)),y.O),$async$$0)
case 5:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.aS7.prototype={
$1(d){return this.a.$1(d)},
$S:57}
B.aS8.prototype={
$1(d){return this.a.$1(d)},
$S:12}
B.aSa.prototype={
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
return A.d(t.oN(),$async$$0)
case 7:x=5
break
case 6:e=s
case 5:x=3
return A.d(q.e6(p.cn(o.cb(e,"stopRecording",null,null,null,null)),y.m),$async$$0)
case 3:r=e
v=new B.F6(r,A.db(r.seconds))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+5}
B.aSc.prototype={
$0(){var x=0,w=A.n(y._),v,u=this,t,s,r,q,p,o
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.b.a
s=u.a
r=s
q=A
p=A
o=A
x=4
return A.d(s.oN(),$async$$0)
case 4:x=3
return A.d(q.e6(p.cn(o.cb(e,"transcribe",t.audio,t.rate,s.a6e(u.c),null)),y.m),$async$$0)
case 3:v=r.a9c(e)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+3}
B.aSb.prototype={
$0(){var x=0,w=A.n(y._),v,u=this,t,s,r,q,p
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t
r=A
q=A
p=A
x=4
return A.d(t.oN(),$async$$0)
case 4:x=3
return A.d(r.e6(q.cn(p.cb(e,"transcribeUrl",u.b,t.a6e(u.c),null,null)),y.m),$async$$0)
case 3:v=s.a9c(e)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+3}
B.aS6.prototype={
$1(d){return d},
$S:25}
B.aJB.prototype={
$0(){var x,w,v,u,t=this.a,s=A.c2(t.a.length,D.pb,!1,y.G)
for(t=t.b,x=t.length,w=0;w<x;++w){v=t[w]
u=v.a
if(u!=null)s[u]=v.d}return s},
$S:z+6}
B.aJA.prototype={
$1(d){return d===D.fR},
$S:z+2}
B.bmL.prototype={
$2(d,e){var x,w=e.length
if(d.length<w)return!1
for(x=0;x<w;++x)if(B.bqZ(e[x],d[x])<0.75)return!1
return!0},
$S:894}
B.bo7.prototype={
$1(d){return d.length!==0},
$S:11}
B.aSf.prototype={
$1(d){return d.a===D.dR},
$S:z+7}
B.aSg.prototype={
$1(d){return C.e.b7(d,1000)},
$S:72}
B.aSd.prototype={
$1(d){return C.d.bS(d)},
$S:895}
B.aSh.prototype={
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
i=C.b.m(D.Bq,k.h(0,"r"))?A.el(k.h(0,"r")):1
h=A.hz(k.h(0,"auto"))
g=A.hz(k.h(0,"hide"))
k=A.hz(k.h(0,"in"))
s.a.b=new B.PJ(j,i,h!==!1,g===!0,k===!0)}u=2
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
if(q!=null)s.a.c=B.btY(y.P.a(C.Z.eU(q,null)))
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
n=C.d.bS(A.dw(J.b6(o,"s")))
m=C.d.bS(A.dw(J.b6(o,"f")))
l=C.d.bS(A.dw(J.b6(o,"t")))
if(B.bH3(n,m)&&B.bH3(n,l)&&m<=l)s.a.z=new A.bo(n,m,l)}u=2
x=16
break
case 14:u=13
a0=t.pop()
x=16
break
case 13:x=2
break
case 16:k=s.a
if(k.b.e&&k.a.a_2()){k.a.adg()
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
$S:90}
B.aSi.prototype={
$2(d,e){var x=this.a
x.r=d
x.w=e
x.a_()},
$S:896}
B.aSj.prototype={
$2(d,e){return C.e.b7(A.eK(A.f(d),null,null),1000)===this.a},
$S:897}
B.bcl.prototype={
$1(d){var x=0,w=A.n(y.a),v=this,u,t
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.d(u.d.a.Aj(),$async$$1)
case 2:t=f
if(u.c!=null)u.t(new B.bck(u,t))
return A.l(null,w)}})
return A.m($async$$1,w)},
$S:898}
B.bck.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bcm.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bcj(x,d))},
$S:z+8}
B.bcj.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bcn.prototype={
$1(d){},
$S:22}
B.bc7.prototype={
$0(){},
$S:0}
B.bcd.prototype={
$1(d){var x=this.c,w=this.a.w
w.toString
return new B.zx(this.b,x.a,x.b,w,null)},
$S:z+9}
B.bce.prototype={
$0(){},
$S:0}
B.bch.prototype={
$0(){var x=y.z
return A.ao(this.a,!1).cm(A.cm(new B.bcg(),null,x),x)},
$S:0}
B.bcg.prototype={
$1(d){return D.aXt},
$S:z+10}
B.bci.prototype={
$0(){return B.bGQ(this.a)},
$S:0}
B.bca.prototype={
$0(){var x=this.b
return this.a.uF(x.a,x.b,x.c)},
$S:0}
B.bcb.prototype={
$1(d){return this.a.t(new B.bc9())},
$S:12}
B.bc9.prototype={
$0(){},
$S:0}
B.bcc.prototype={
$0(){var x=this.a
return x.t(new B.bc8(x))},
$S:0}
B.bc8.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.bcf.prototype={
$0(){return this.a.aL7(this.b)},
$S:0}
B.bpY.prototype={
$1(d){return new A.j9(new B.bpV(this.a,this.b,this.c),null)},
$S:54}
B.bpV.prototype={
$2(d,e){var x,w,v=null,u=this.b,t=new B.bpX(u,e),s=this.a,r=new B.bpW(s,e),q=A.p(H.jk(this.c),v,v,v,v,C.oQ,v,v,v),p=A.p("\u0647\u062a\u0633\u0645\u0651\u0639 \u0623\u0646\u0647\u064a \u0622\u064a\u0627\u062a\u061f ("+E.aU(u)+" \u0622\u064a\u0629)",v,v,v,v,F.ai,v,v,v),o=y.p,n=A.a([],o)
if(u<=30)n.push(r.$3("\u0627\u0644\u0633\u0648\u0631\u0629 \u0643\u0644\u0647\u0627",1,u))
x=u<5
w=E.aU(x?u:5)
x=x?u:5
n.push(r.$3("\u0623\u0648\u0644 "+w+" \u0622\u064a\u0627\u062a",1,x))
x=s.a
if(x>1){x=E.aU(x)
w=s.a
n.push(r.$3("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+x,w,C.e.co(w+4,1,u)))}u=A.a([q,C.aT,p,C.N,A.f2(n,6,8),C.P,A.an(A.a([t.$3("\u0645\u0646",s.b,new B.bpQ(s)),D.aIf,t.$3("\u0644\u062d\u062f",s.c,new B.bpR(s))],o),C.j,C.f,C.h,0,v)],o)
if(s.c-s.b>=10)u.push(D.awR)
u.push(C.aN)
u.push(A.k7(D.aRZ,new B.bpS(s,d),A.k9(C.q,C.a7,D.aI6,v,v)))
return A.dU(!0,new A.ab(C.z5,A.ah(u,C.am,C.f,C.a_),v),C.K,!0)},
$S:324}
B.bpX.prototype={
$3(d,e,f){var x,w,v,u=null,t=A.p(d,u,u,u,u,C.hV,u,u,u),s=A.a([],y.I)
for(x=this.a,w=y.r,v=1;v<=x;++v)s.push(new A.cZ(v,A.p("\u0622\u064a\u0629 "+E.aU(v),u,u,u,u,u,u,u,u),C.aG,u,w))
return A.aV(A.ah(A.a([t,U.BK(N.dh,!0,s,320,new B.bpU(this.b,f),D.aON,e,y.S)],y.p),C.B,C.f,C.h),1)},
$S:900}
B.bpU.prototype={
$1(d){return d==null?null:this.a.$1(new B.bpT(this.b,d))},
$S:48}
B.bpT.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bpW.prototype={
$3(d,e,f){var x=null
return new B.Xo(A.p(d,x,x,x,x,x,x,x,x),new B.bpP(this.a,this.b,e,f),x)},
$S:901}
B.bpP.prototype={
$0(){var x=this
return x.b.$1(new B.bpO(x.a,x.c,x.d))},
$S:0}
B.bpO.prototype={
$0(){var x=this.a
x.b=this.b
x.c=this.c},
$S:0}
B.bpQ.prototype={
$1(d){var x=this.a
x.b=d
if(x.c<d)x.c=d},
$S:31}
B.bpR.prototype={
$1(d){var x=this.a
x.c=d
if(x.b>d)x.b=d},
$S:31}
B.bpS.prototype={
$0(){var x=this.a
return A.ao(this.b,!1).bq(new A.Q(x.b,x.c))},
$S:0}
B.bjM.prototype={
$0(){},
$S:0}
B.bk1.prototype={
$0(){var x=this.a
x.e=this.b
x.f=D.jF
x.w=x.r=null
x.x=!1
x.ch=x.ax=x.as=null},
$S:0}
B.bk5.prototype={
$0(){var x=this.a
return x.f=x.r!=null?D.fX:D.jF},
$S:0}
B.bk6.prototype={
$0(){var x=this.a
x.f=D.pm
x.as=null},
$S:0}
B.bk7.prototype={
$0(){var x=this.a
x.f=this.b
if(!this.c&&x.as==null)x.as=null},
$S:0}
B.bk9.prototype={
$0(){var x=this.a
x.f=D.pn
x.as=null
x.y=0
x.z=new A.bb(Date.now(),0,!1)
x.ax=null},
$S:0}
B.bka.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bk8())},
$S:41}
B.bk8.prototype={
$0(){},
$S:0}
B.bkc.prototype={
$1(d){return this.a.y=d},
$S:57}
B.bkb.prototype={
$1(d){return this.a.xI()},
$S:12}
B.bkd.prototype={
$0(){var x,w=this.a
w.f=w.r!=null?D.fX:D.jF
x=this.b
w.as=B.HF(x)
w.at=x},
$S:0}
B.bkf.prototype={
$0(){var x=this.a
x.f=D.lo
x.ay=Date.now()},
$S:0}
B.bkg.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bke())},
$S:41}
B.bke.prototype={
$0(){},
$S:0}
B.bk0.prototype={
$0(){var x=this.a
x.f=x.r!=null?D.fX:D.jF
x.as=this.b
x.at=this.c},
$S:0}
B.bk2.prototype={
$0(){var x=this.b
x.r=this.c
x.w=this.a.a
x.f=D.fX
x.x=!1},
$S:0}
B.bjU.prototype={
$0(){var x=this.a
x.f=D.lo
x.ay=Date.now()
x.as=null},
$S:0}
B.bjV.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bjT())},
$S:41}
B.bjT.prototype={
$0(){},
$S:0}
B.bjW.prototype={
$1(d){return d.d!==D.fR},
$S:z+11}
B.bjX.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.bkl.prototype={
$0(){return B.bGQ(this.a)},
$S:0}
B.bkm.prototype={
$1(d){var x=this.a.d
return x.os(x.b.ac3(d))},
$S:5}
B.bkn.prototype={
$0(){var x=y.z
return A.ao(this.b,!1).cm(A.cm(new B.bkk(this.a),null,x),x)},
$S:0}
B.bkk.prototype={
$1(d){var x=this.a.a
return new B.zw(x.c,x.d,x.e,x.f,null)},
$S:z+12}
B.bko.prototype={
$0(){this.a.d.a.aYS()
this.b.U(y.q).f.ba(D.aIJ)},
$S:0}
B.bk_.prototype={
$2(d,e){return C.bK},
$S:50}
B.bjZ.prototype={
$2(d,e){var x,w,v,u=null,t=this.a,s=t.a,r=s.d+e
switch(t.d.c.Xt(s.c,r).a.a){case 2:s=G.bV
break
case 1:s=D.cS
break
case 0:s=O.h6
break
default:s=u}x=A.ac(18)
w=t.f===D.lo?u:new B.bjY(t,r)
v=s.bQ(0.25)
if(r===t.ghV())s=C.i
s=A.d1(s,r===t.ghV()?2:1)
return A.dt(!1,x,!0,A.aA(C.W,A.p(E.aU(r),u,u,u,u,D.aLQ,u,u,u),C.m,u,u,new A.au(v,u,s,u,u,u,C.cq),u,u,u,u,u,u,36),u,!0,u,u,u,u,u,u,u,u,u,u,w,u,u,u,u,u,u,u)},
$S:121}
B.bjY.prototype={
$0(){return this.a.R3(this.b)},
$S:0}
B.bk4.prototype={
$0(){var x=this.a
return x.t(new B.bk3(x))},
$S:0}
B.bk3.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bkh.prototype={
$1(d){return d===D.p9},
$S:z+2}
B.bki.prototype={
$1(d){return d===D.pa},
$S:z+2}
B.bkj.prototype={
$1(d){return d===D.pb},
$S:z+2}
B.bjN.prototype={
$0(){var x=this.b!=null&&!this.c?1:null
return this.a.JB(x)},
$S:0}
B.bjO.prototype={
$1(d){var x=this.a.d
return x.os(x.b.aPz(d.ga6(d)))},
$S:98}
B.bjQ.prototype={
$1(d){return d.m(0,C.V)?C.a7:C.i},
$S:4}
B.bjP.prototype={
$1(d){return d.m(0,C.V)?C.q:C.Q},
$S:4}
B.bjR.prototype={
$0(){var x=this.a
return x.R3(x.ghV()+1)},
$S:0}
B.bjS.prototype={
$0(){var x=this.a
return x.R3(x.ghV()+1)},
$S:0}
B.bjv.prototype={
$0(){},
$S:0}
B.bjE.prototype={
$0(){var x=this.a
x.e=this.b
x.Q=null
x.x=0
x.z=new A.bb(Date.now(),0,!1)},
$S:0}
B.bjF.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bjD())},
$S:41}
B.bjD.prototype={
$0(){},
$S:0}
B.bjH.prototype={
$1(d){return this.a.x=d},
$S:57}
B.bjG.prototype={
$1(d){return this.a.Ba(this.b,!1)},
$S:12}
B.bjI.prototype={
$0(){var x,w=this.a
w.e=null
x=this.b
w.Q=B.HF(x)
w.as=x},
$S:0}
B.bjz.prototype={
$0(){var x=this.a
x.e=null
x.r.C(0,this.b)},
$S:0}
B.bjA.prototype={
$0(){var x,w=this.a,v=this.b
w.r.I(0,v)
x=this.c
w.w.n(0,v,B.HF(x))
w.as=x},
$S:0}
B.bjB.prototype={
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
return A.d(n.a.ahw(s.b,B.AH(H.HD(l,m,k.uN(l,m)).b).length),$async$$1)
case 6:r=f
l=o.a
k=l.f
l=l.c
q=B.bFe(H.HD(l,m,k.uN(l,m)).b,r.a)
if(C.c.ao(q.c).length!==0){l=n.c
k=o.a.c
j=q.gpT()
l.agC(k,m,n.b.a,j)}n.wp()
if(o.c!=null)o.t(new B.bjw(o,m,q))
t.push(5)
x=4
break
case 3:v=2
h=u.pop()
o=A.Y(h)
if(o instanceof B.kv){p=o
o=s.a
if(o.c!=null)o.t(new B.bjx(o,s.c,p))}else throw h
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
o=s.a
if(o.c!=null)o.t(new B.bjy(o,s.c))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$$1,w)},
$S:176}
B.bjw.prototype={
$0(){var x=this.c
this.a.f.n(0,this.b,x)
return x},
$S:0}
B.bjx.prototype={
$0(){var x=this.a,w=this.c
x.w.n(0,this.b,B.HF(w))
x.as=w},
$S:0}
B.bjy.prototype={
$0(){return this.a.r.I(0,this.b)},
$S:0}
B.bjC.prototype={
$0(){var x=this.a
x.f.af(0)
x.w.af(0)
x.as=null},
$S:0}
B.bjJ.prototype={
$1(d){return d.gpT()},
$S:z+13}
B.bjK.prototype={
$0(){return this.a.Ba(this.b,!0)},
$S:0}
B.bjL.prototype={
$0(){return this.a.CD(this.b)},
$S:0}
B.bjm.prototype={
$0(){},
$S:0}
B.bjt.prototype={
$2(d,e){return d+this.a.Xk(e)},
$S:97}
B.bju.prototype={
$2(d,e){return d+I.bX[e-1].a[1]},
$S:97}
B.bjs.prototype={
$0(){return this.a.H5(this.b)},
$S:0}
B.bjr.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.b,o=A.p(H.jk(p),q,q,q,q,C.oQ,q,q,q),n=y.p,m=A.a([],n)
for(x=this.c,w=this.a,v=w.d,u=p*1000,t=1;t<=x;++t){s=new A.ba(10,10)
r=v.c.a.h(0,u+t)
switch((r==null?$.pv():r).a.a){case 2:r=G.bV.bQ(0.35)
break
case 1:r=D.cS.bQ(0.35)
break
case 0:r=C.xV
break
default:r=q}m.push(A.aA(C.W,A.p(E.aU(t),q,q,q,q,D.aLf,q,q,q),C.m,q,q,new A.au(r,q,q,new A.dg(s,s,s,s),q,q,C.t),q,38,q,q,q,q,38))}return A.dU(!0,new A.ab(C.ir,A.ah(A.a([o,C.aT,D.aTQ,C.N,new A.ei(D.Xi,A.i6(A.f2(m,6,6),q,C.r,q,q,C.v),q),C.as,A.bZ(D.aUJ,q,q,new B.bjq(w,d,p),q,q)],n),C.am,C.f,C.a_),q),C.K,!0)},
$S:47}
B.bjq.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.b
t=v.c
x=4
return A.d(A.eL(null,new B.bjp(t),u,y.y),$async$$0)
case 4:x=e===!0?2:3
break
case 2:x=5
return A.d(v.a.d.EW(t),$async$$0)
case 5:if(u.e!=null)A.ao(u,!1).ep()
case 3:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.bjp.prototype={
$1(d){var x=null,w=A.p("\u0647\u062a\u0628\u062f\u0623 "+H.jk(this.a)+" \u0645\u0646 \u0627\u0644\u0623\u0648\u0644.",x,x,x,x,x,x,x,x)
return A.eO(A.a([A.bZ(C.vP,x,x,new B.bjn(d),x,x),A.bZ(D.aW1,x,x,new B.bjo(d),x,x)],y.p),w,D.aVy)},
$S:21}
B.bjn.prototype={
$0(){A.ao(this.a,!1).bq(!1)
return null},
$S:0}
B.bjo.prototype={
$0(){A.ao(this.a,!1).bq(!0)
return null},
$S:0}
B.bqD.prototype={
$1(d){var x=this.a
return new A.kh(new B.bqC(x),null,x,null)},
$S:902}
B.bqC.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.a,r=s.b,q=A.a([],y.n)
for(x=y.c,w=1;w<=5;++w)q.push(new A.eg(w,t,A.p(E.aU(w),t,t,t,t,t,t,t,t),x))
x=y.S
v=y.b
u=y.p
x=A.a([D.aQK,C.as,D.aUZ,C.S,A.uX(new B.bqx(s,r),q,A.cP([r.a],x),!1,A.jn(t,t,t,new A.bd(new B.bqy(),v),t,t,t,t,new A.bd(new B.bqz(),v),t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),x),C.P,A.r6(C.q,C.K,t,new B.bqA(s,r),D.aTt,D.aWy,r.c),A.r6(C.q,C.K,t,new B.bqB(s,r),t,D.aQw,r.d)],u)
s=s.x
if(s!=null)C.b.E(x,A.a([C.aT,A.p("\u0627\u0644\u0645\u0639\u0627\u0644\u062c: "+s.gll(),t,t,t,t,F.ai,t,C.aK,t)],u))
x.push(C.P)
x.push(D.Ut)
return A.dU(!0,A.i6(A.ah(x,C.am,C.f,C.h),t,C.r,C.ir,t,C.v),C.K,!0)},
$S:903}
B.bqx.prototype={
$1(d){return this.a.os(this.b.aPw(d.ga6(d)))},
$S:98}
B.bqz.prototype={
$1(d){return d.m(0,C.V)?C.a7:C.i},
$S:4}
B.bqy.prototype={
$1(d){return d.m(0,C.V)?C.q:C.Q},
$S:4}
B.bqA.prototype={
$1(d){return this.a.os(this.b.aP0(d))},
$S:5}
B.bqB.prototype={
$1(d){return this.a.os(this.b.ac3(d))},
$S:5}
B.aS1.prototype={
$0(){return A.eW(A.bT(this.a,0,null),C.c2,null)},
$S:0}
B.bqR.prototype={
$1(d){var x,w=A.aX("https?://",!0,!1)
w=A.bM(d,w,"")
x=A.aX("www\\.",!0,!1)
return A.AI(A.bM(w,x,"www[.]"),A.aX("([A-Za-z0-9-]+)\\.(com|net|org|io|xyz|ru|info|me|link)\\b",!1,!1),new B.bqS(),null)},
$S:25}
B.bqS.prototype={
$1(d){return A.f(d.h(0,1))+"[.]"+A.f(d.h(0,2))},
$S:60}
B.bkp.prototype={
$0(){var x=this.a
x.e=!0
x.r=null},
$S:0}
B.bkq.prototype={
$0(){return this.a.f=!0},
$S:0}
B.bkr.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bks.prototype={
$0(){return this.a.e=!1},
$S:0}
B.bku.prototype={
$0(){var x=this.a
return x.t(new B.bkt(x))},
$S:0}
B.bkt.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.bqQ.prototype={
$1(d){return d==null?"\u2013":A.f(d)},
$S:193};(function installTearOffs(){var x=a._instance_0u
x(B.a9V.prototype,"gaUT","aUU",1)
var w
x(w=B.PK.prototype,"gaV8","za",0)
x(w,"gapo","tX",0)
x(w=B.Tr.prototype,"gmN","uE",1)
x(w,"gaEL","Is",0)
x(w=B.Vl.prototype,"gmN","uE",1)
x(w,"gaGF","IG",0)
x(w,"gaK_","xI",0)
x(w,"gatJ","H2",0)
x(w=B.Vk.prototype,"gmN","uE",1)
x(w,"gaHg","aHh",1)
x(B.Vj.prototype,"gmN","uE",1)
x(B.Vm.prototype,"gaL9","JC",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.FS,[B.aXX,B.mk,B.AY,B.CW,B.Ac])
x(A.a5,[B.Xo,B.CX,B.Rj,B.zK,B.a9U])
w(B.aU9,A.wL)
x(A.hF,[B.aUa,B.aS5,B.aS7,B.aS8,B.aS6,B.aJA,B.bo7,B.aSf,B.aSg,B.aSd,B.bcl,B.bcm,B.bcn,B.bcd,B.bcg,B.bcb,B.bpY,B.bpX,B.bpU,B.bpW,B.bpQ,B.bpR,B.bka,B.bkc,B.bkb,B.bkg,B.bjV,B.bjW,B.bkm,B.bkk,B.bkh,B.bki,B.bkj,B.bjO,B.bjQ,B.bjP,B.bjF,B.bjH,B.bjG,B.bjB,B.bjJ,B.bjr,B.bjp,B.bqD,B.bqx,B.bqz,B.bqy,B.bqA,B.bqB,B.bqR,B.bqS,B.bqQ])
x(A.N,[B.a9V,B.PL,B.F5,B.F7,B.F6,B.kv,B.N3,B.lO,B.DM,B.pG,B.a9W,B.PJ])
x(A.k0,[B.aS2,B.aS4,B.aS9,B.aSa,B.aSc,B.aSb,B.aJB,B.aSh,B.bck,B.bcj,B.bc7,B.bce,B.bch,B.bci,B.bca,B.bc9,B.bcc,B.bc8,B.bcf,B.bpT,B.bpP,B.bpO,B.bpS,B.bjM,B.bk1,B.bk5,B.bk6,B.bk7,B.bk9,B.bk8,B.bkd,B.bkf,B.bke,B.bk0,B.bk2,B.bjU,B.bjT,B.bjX,B.bkl,B.bkn,B.bko,B.bjY,B.bk4,B.bk3,B.bjN,B.bjR,B.bjS,B.bjv,B.bjE,B.bjD,B.bjI,B.bjz,B.bjA,B.bjw,B.bjx,B.bjy,B.bjC,B.bjK,B.bjL,B.bjm,B.bjs,B.bjq,B.bjn,B.bjo,B.aS1,B.bkp,B.bkq,B.bkr,B.bks,B.bku,B.bkt])
x(A.oa,[B.aS3,B.bmL,B.aSi,B.aSj,B.bpV,B.bk_,B.bjZ,B.bjt,B.bju,B.bqC])
w(B.PK,A.hn)
x(A.S,[B.uC,B.zx,B.zw,B.zv,B.zy])
x(A.U,[B.Tr,B.Vl,B.Vk,B.Vj,B.Vm])})()
A.nU(b.typeUniverse,JSON.parse('{"Xo":{"a5":[],"e":[]},"kv":{"bn":[]},"zx":{"S":[],"e":[]},"zw":{"S":[],"e":[]},"zv":{"S":[],"e":[]},"zy":{"S":[],"e":[]},"PK":{"at":[]},"uC":{"S":[],"e":[]},"Tr":{"U":["uC"]},"CX":{"a5":[],"e":[]},"Rj":{"a5":[],"e":[]},"Vl":{"U":["zx"]},"zK":{"a5":[],"e":[]},"Vk":{"U":["zw"]},"Vj":{"U":["zv"]},"a9U":{"a5":[],"e":[]},"Vm":{"U":["zy"]}}'))
var y=(function rtii(){var x=A.a1
return{u:x("pG"),c:x("eg<v>"),r:x("cZ<v>"),k:x("y<lO>"),n:x("y<eg<v>>"),I:x("y<cZ<v>>"),R:x("y<fN>"),Z:x("y<aD<i,@>>"),d:x("y<N3>"),s:x("y<i>"),p:x("y<e>"),t:x("y<v>"),m:x("bh"),j:x("P<@>"),L:x("P<v>"),P:x("aD<i,@>"),f:x("aD<@,@>"),x:x("aj<i,v>"),a:x("bj"),K:x("N"),B:x("DM"),l:x("+(v,v)"),e:x("cJ<lO>"),N:x("i"),C:x("F5"),D:x("F6"),X:x("PL"),_:x("F7"),U:x("aO<i>"),G:x("mk"),q:x("nR"),b:x("bd<I?>"),y:x("B"),i:x("J"),z:x("@"),S:x("v"),A:x("bh?"),Y:x("aD<@,@>?"),O:x("N?"),M:x("+quota,usage(v,v)?"),o:x("ev"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.lv=new B.AY(0,"none")
D.lw=new B.AY(1,"learning")
D.dR=new B.AY(2,"memorized")
D.Xi=new A.ax(0,1/0,0,320)
D.dA=new A.I(1,0.9725490196078431,0.44313725490196076,0.44313725490196076,C.k)
D.Xq=new A.au(D.dA,null,null,null,null,null,C.cq)
D.cS=new A.I(1,0.984313725490196,0.7490196078431373,0.1411764705882353,C.k)
D.a9N=new A.a3(983698,"MaterialIcons",null,!1)
D.abC=new A.a4(D.a9N,null,C.cr,null,null,null)
D.aVB=new A.t("\u0627\u0644\u0646\u0635 \u0645\u062e\u0641\u064a \u2014 \u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.ed,null,null,null,null,null,null,null,null)
D.aL6=new A.r(!0,C.eJ,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTR=new A.t("(\u062f\u0648\u0633 \u0647\u0646\u0627 \u0644\u0648 \u0639\u0627\u064a\u0632 \u062a\u0628\u0635)",null,D.aL6,null,null,null,null,null,null,null,null)
D.anb=x([D.abC,C.S,D.aVB,D.aTR],y.p)
D.a2W=new A.iX(C.v,C.f,C.h,C.j,null,C.b7,null,0,D.anb,null)
D.a5Y=new A.a_(0,18,0,18)
D.a60=new A.a_(0,26,0,26)
D.a64=new A.a_(0,4,0,6)
D.a6h=new A.a_(14,12,14,14)
D.a6Q=new A.a_(3,0,0,0)
D.a92=new A.a3(63251,"MaterialIcons",null,!1)
D.mE=new A.a3(63677,"MaterialIcons",null,!1)
D.a9z=new A.a3(983256,"MaterialIcons",null,!1)
D.t7=new A.a3(983516,"MaterialIcons",null,!1)
D.a9x=new A.a3(983209,"MaterialIcons",null,!1)
D.aa0=new A.a4(D.a9x,28,C.q,null,null,null)
D.aao=new A.a4(C.Ae,null,O.h6,null,null,null)
D.a8U=new A.a3(62961,"MaterialIcons",null,!1)
D.aaG=new A.a4(D.a8U,null,null,null,null,null)
D.a91=new A.a3(63199,"MaterialIcons",null,!1)
D.aaH=new A.a4(D.a91,null,null,null,null,null)
D.aaL=new A.a4(C.iD,null,C.eJ,null,null,null)
D.aaN=new A.a4(D.t7,44,C.i,null,null,null)
D.ab3=new A.a4(D.mE,null,D.dA,null,null,null)
D.abc=new A.a4(C.rW,null,D.dA,null,null,null)
D.abl=new A.a4(C.A9,null,null,null,null,null)
D.abm=new A.a4(D.mE,null,null,null,null,null)
D.AL=new A.a4(C.mH,null,null,null,null,null)
D.abA=new A.a4(C.mD,20,D.cS,null,null,null)
D.abM=new A.a4(C.mF,30,C.q,null,null,null)
D.ac1=new A.a4(C.mG,16,C.q,null,null,null)
D.a9f=new A.a3(63520,"MaterialIcons",null,!1)
D.acd=new A.a4(D.a9f,null,null,null,null,null)
D.acj=new A.a4(C.kn,null,null,null,null,null)
D.a8Q=new A.a3(62842,"MaterialIcons",null,!0)
D.aco=new A.a4(D.a8Q,null,null,null,null,null)
D.Bq=x([1,3,5],y.t)
D.Cc=x(["\u0627\u0639\u0648\u0630","\u0628\u0627\u0644\u0644\u0647","\u0645\u0646","\u0627\u0644\u0634\u064a\u0637\u0627\u0646","\u0627\u0644\u0631\u062c\u064a\u0645"],y.s)
D.axa=new A.ab(C.mg,V.q_,null)
D.akW=x([D.axa],y.p)
D.aAr=new A.Q(C.iE,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0629 \u0628\u0635\u0648\u062a \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062d\u0635\u0631\u064a (\u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645) \u0645\u0631\u0629 \u0623\u0648 \u0663 \u0623\u0648 \u0665 \u0645\u0631\u0627\u062a.")
D.aAj=new A.Q(D.mE,"\u0633\u0645\u0651\u0639\u0647\u0627 \u0645\u0646 \u062d\u0641\u0638\u0643 \u2014 \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0644\u0648\u0651\u0646\u0644\u0643 \u0643\u0644 \u0643\u0644\u0645\u0629: \u0623\u062e\u0636\u0631 \u0635\u062d\u060c \u0623\u0635\u0641\u0631 \u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0623\u062d\u0645\u0631 \u063a\u0644\u0637.")
D.aAE=new A.Q(C.hi,"\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0645\u0627 \u062a\u0633\u0645\u0651\u0639\u0647\u0627 \u0635\u062d \u0645\u0631\u062a\u064a\u0646 \u0648\u0631\u0627 \u0628\u0639\u0636 (\u062a\u0642\u062f\u0631 \u062a\u063a\u064a\u0651\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a).")
D.a9l=new A.a3(63625,"MaterialIcons",null,!1)
D.aAM=new A.Q(D.a9l,"\u0643\u0644 \u062f\u0647 \u0628\u064a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u2014 \u0635\u0648\u062a\u0643 \u0645\u0634 \u0628\u064a\u062a\u0631\u0641\u0639 \u0639\u0644\u0649 \u0623\u064a \u0633\u064a\u0631\u0641\u0631.")
D.amr=x([D.aAr,D.aAj,D.aAE,D.aAM],A.a1("y<+(a3,i)>"))
D.aoc=x([D.lv,D.lw,D.dR],A.a1("y<AY>"))
D.GE=x(["\u0628\u0633\u0645","\u0627\u0644\u0644\u0647","\u0627\u0644\u0631\u062d\u0645\u0646","\u0627\u0644\u0631\u062d\u064a\u0645"],y.s)
D.auA=new B.CW(0,"idle")
D.MF=new B.CW(1,"loading")
D.hz=new B.CW(2,"ready")
D.auB=new B.CW(3,"failed")
D.ab1=new A.a4(C.cT,18,G.bV,null,null,null)
D.TW=new A.r(!0,C.a8,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWd=new A.t("\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u062c\u0627\u0647\u0632 \u064a\u0633\u0645\u0639\u0643",null,D.TW,null,null,null,null,null,null,null,null)
D.ak8=x([D.ab1,C.bK,D.aWd],y.p)
D.aFT=new A.jE(C.aA,C.f,C.h,C.j,null,C.b7,null,0,D.ak8,null)
D.awB=new A.ab(C.ay,D.aFT,null)
D.a6N=new A.a_(2,6,2,4)
D.aKL=new A.r(!0,C.q,null,null,null,null,14,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQJ=new A.t("\u0627\u0628\u062f\u0623 \u0645\u0646 \u0647\u0646\u0627 \u2014 \u0627\u0644\u0641\u0627\u062a\u062d\u0629 \u0648\u062c\u0632\u0621 \u0639\u0645\u0651",null,D.aKL,null,null,null,null,null,null,null,null)
D.awJ=new A.ab(D.a6N,D.aQJ,null)
D.aWl=new A.t("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.ed,null,null,null,null,null,null,null,null)
D.alb=x([P.oC,C.ap,D.aWl],y.p)
D.aFR=new A.jE(C.aA,C.cg,C.h,C.j,null,C.b7,null,0,D.alb,null)
D.awO=new A.ab(Q.qQ,D.aFR,null)
D.vI=new A.r(!0,D.cS,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWt=new A.t("\u0646\u0635\u064a\u062d\u0629: \u0627\u062d\u0641\u0638 \u0663\u2013\u0665 \u0622\u064a\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0631\u0629 \u0623\u0633\u0647\u0644.",null,D.vI,null,null,null,null,null,null,null,null)
D.awR=new A.ab(C.hc,D.aWt,null)
D.aW9=new A.t("\u0644\u0633\u0647 \u0645\u0633\u0645\u0651\u0639\u062a\u0634 \u0623\u064a \u0622\u064a\u0629 \u2014 \u0627\u0628\u062f\u0623 \u0628\u0633\u0648\u0631\u0629 \u0642\u0635\u064a\u0631\u0629 \u0645\u0646 \u062c\u0632\u0621 \u0639\u0645\u0651.",null,F.ai,C.ae,null,null,null,null,null,null,null)
D.awV=new A.ab(C.D,D.aW9,null)
D.a6K=new A.a_(2,0,2,8)
D.aTX=new A.t("\u0627\u0644\u0633\u0648\u0631 \u0627\u0644\u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u060c \u0645\u0646 \u0627\u0644\u0646\u0627\u0633 \u0644\u062d\u062f \u0627\u0644\u0646\u0628\u0623.",null,F.ai,null,null,null,null,null,null,null,null)
D.ax6=new A.ab(D.a6K,D.aTX,null)
D.ac8=new A.a4(C.hh,30,C.q,null,null,null)
D.aPj=new A.r(!0,C.i,null,null,null,null,17,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWS=new A.t("\u0633\u0645\u0651\u0639\u060c \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0642\u0648\u0644\u0643 \u0635\u062d \u0648\u0644\u0627 \u063a\u0644\u0637",null,D.aPj,null,null,null,null,null,null,null,null)
D.a7p=new A.dL(1,C.aX,D.aWS,null)
D.aln=x([D.ac8,C.aZ,D.a7p],y.p)
D.aFL=new A.jE(C.aA,C.f,C.h,C.j,null,C.b7,null,0,D.aln,null)
D.abS=new A.a4(C.hi,18,G.bV,null,null,null)
D.TI=new A.r(!0,G.bV,null,null,null,null,12,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVV=new A.t("\u0645\u062d\u0641\u0648\u0638\u0629",null,D.TI,null,null,null,null,null,null,null,null)
D.akw=x([D.abS,C.hL,D.aVV],y.p)
D.aFQ=new A.jE(C.aA,C.f,C.a_,C.j,null,C.b7,null,0,D.akw,null)
D.aHU=new A.G(0,30)
D.aHV=new A.G(0,34)
D.oB=new A.G(1/0,54)
D.aI6=new A.G(1/0,48)
D.aI9=new A.G(1/0,50)
D.aIc=new A.G(1/0,52)
D.aIf=new A.cq(16,null,null,null)
D.aIj=new A.cq(14,14,P.xq,null)
D.aUQ=new A.t("safe mode / no-gpu flags cleared (reload)",null,null,null,null,null,null,null,null,null,null)
D.aIJ=new A.iJ(D.aUQ,null,null,null,null,null,null,null,null,null,null,null,null,C.F,!1,null,null,null,C.l,null)
D.aKf=new A.r(!0,C.i,null,null,null,null,14.5,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKE=new A.r(!0,C.a8,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLf=new A.r(!0,C.i,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.vB=new A.r(!0,D.dA,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLQ=new A.r(!0,C.i,null,null,null,null,12,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hS=new A.r(!0,C.i,null,"AmiriQuranMT",null,null,27,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNh=new A.r(!0,C.cs,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.TL=new A.r(!0,D.dA,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNE=new A.r(!0,C.q,null,null,null,null,24,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.TP=new A.r(!0,C.i,null,null,null,null,12.5,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNS=new A.r(!0,C.q,null,null,null,null,null,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOu=new A.r(!0,D.cS,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOv=new A.r(!0,G.bV,null,null,null,null,null,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aON=new A.r(!0,C.i,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQ9=new A.t("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u062e\u0631 \u0645\u0631\u0629",null,C.hV,null,null,null,null,null,null,null,null)
D.aQw=new A.t("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643 (\u062e\u0628\u0651\u064a \u0627\u0644\u0646\u0635)",null,C.dc,null,null,null,null,null,null,null,null)
D.aQK=new A.t("\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,C.oQ,null,null,null,null,null,null,null,null)
D.aQM=new A.t("\u2022 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641: \u0645\u0634\u0631\u0648\u0639 \u062a\u0646\u0632\u064a\u0644 Tanzil (\u062a\u0631\u062e\u064a\u0635 CC BY 3.0).",null,F.ai,null,null,null,null,null,null,null,null)
D.aLO=new A.r(!0,G.bV,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQS=new A.t("\u0648\u0635\u0644\u062a\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2014 \u0634\u0643\u0631\u064b\u0627\u060c \u0647\u0646\u0628\u0635 \u0639\u0644\u064a\u0647\u0627.",null,D.aLO,null,null,null,null,null,null,null,null)
D.aQV=new A.t("\u062e\u0628\u0651\u064a \u0646\u0635 \u0627\u0644\u0622\u064a\u0629 \u0648\u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,F.ai,null,null,null,null,null,null,null,null)
D.aQZ=new A.t("\u0639\u062f\u0651\u064a \u0644\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.ed,null,null,null,null,null,null,null,null)
D.aRD=new A.t("\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0627\u0628\u062f\u0623",null,C.cx,null,null,null,null,null,null,null,null)
D.aRZ=new A.t("\u064a\u0644\u0627 \u0646\u0628\u062f\u0623",null,C.cO,null,null,null,null,null,null,null,null)
D.aS2=new A.t("\u0645\u0645\u0643\u0646 \u062a\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 \u062f\u0644\u0648\u0642\u062a\u064a \u0644\u062d\u062f \u0645\u0627 \u064a\u062e\u0644\u0635.",null,F.ai,null,null,null,null,null,null,null,null)
D.aSk=new A.t("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.TZ,null,null,null,null,null,null,null,null)
D.aSG=new A.t("\u062c\u0631\u0651\u0628 \u0639\u0644\u0649 \u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a (\u0644\u0644\u062a\u062c\u0631\u0628\u0629)",null,null,null,null,null,null,null,null,null,null)
D.aT_=new A.t("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643",null,L.l8,null,null,null,null,null,null,null,null)
D.aTk=new A.t("reset safe mode / WebGPU ban",null,Q.Tx,null,null,null,null,null,null,null,null)
D.aTp=new A.t("\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629",null,D.vI,null,null,null,null,null,null,null,null)
D.aTt=new A.t("\u0628\u0639\u062f \u062d\u0648\u0627\u0644\u064a \u062b\u0627\u0646\u064a\u0629 \u0633\u0643\u0648\u062a",null,F.ai,null,null,null,null,null,null,null,null)
D.aTI=new A.t("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636",null,F.b0,null,null,null,null,null,null,null,null)
D.aTQ=new A.t("\u0623\u062e\u0636\u0631: \u0645\u062d\u0641\u0648\u0638\u0629 \u2014 \u0623\u0635\u0641\u0631: \u0628\u062a\u0631\u0627\u062c\u0639\u0647\u0627 \u2014 \u0631\u0645\u0627\u062f\u064a: \u0644\u0633\u0647",null,F.ai,null,null,null,null,null,null,null,null)
D.aTY=new A.t("\u0645\u0641\u064a\u0634 \u0633\u0648\u0631\u0629 \u0628\u0627\u0644\u0627\u0633\u0645 \u062f\u0647",null,F.ai,null,null,null,null,null,null,null,null)
D.aPl=new A.r(!0,C.q,null,null,null,null,12.5,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUH=new A.t("\u0627\u0628\u0639\u062a \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aPl,null,null,null,null,null,null,null,null)
D.aN2=new A.r(!0,D.dA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUJ=new A.t("\u0627\u0628\u062f\u0623 \u0627\u0644\u0633\u0648\u0631\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644",null,D.aN2,null,null,null,null,null,null,null,null)
D.aUZ=new A.t("\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f \u0643\u0627\u0645 \u062a\u0633\u0645\u064a\u0639 \u0635\u062d \u0648\u0631\u0627 \u0628\u0639\u0636\u061f",null,L.l8,null,null,null,null,null,null,null,null)
D.aK4=new A.r(!0,C.i,null,null,null,null,null,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVd=new A.t("\u0627\u0644\u0645\u0635\u0627\u062f\u0631",null,D.aK4,null,null,null,null,null,null,null,null)
D.aVm=new A.t("\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.cx,null,null,null,null,null,null,null,null)
D.aVy=new A.t("\u062a\u0645\u0633\u062d \u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0633\u0648\u0631\u0629 \u062f\u064a\u061f",null,null,null,null,null,null,null,null,null,null)
D.aVH=new A.t("\u0633\u0645\u0651\u0639\u0647\u0645 \u062a\u0627\u0646\u064a",null,null,null,null,null,null,null,null,null,null)
D.aW1=new A.t("\u0627\u0645\u0633\u062d",null,null,null,null,null,null,null,null,null,null)
D.aW2=new A.t("\u2022 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: whisper-base-ar-quran \u0645\u0646 Tarteel (\u062a\u0631\u062e\u064a\u0635 Apache-2.0)\u060c \u0628\u0635\u064a\u063a\u0629 ONNX \u0645\u0646 \u0645\u0634\u0631\u0648\u0639 Basira\u060c \u0648\u0628\u064a\u0634\u062a\u063a\u0644 \u062c\u0648\u0651\u0647 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0628\u0645\u0643\u062a\u0628\u0629 Transformers.js.",null,F.ai,null,null,null,null,null,null,null,null)
D.aW3=new A.t("\u062e\u0644\u0635\u062a",null,S.la,null,null,null,null,null,null,null,null)
D.aW4=new A.t("\u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647 \u0630\u0627\u0643\u0631\u062a\u0647 \u0642\u0644\u064a\u0644\u0629 \u2014 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0645\u0643\u0646 \u064a\u0643\u0648\u0646 \u0628\u0637\u064a\u0621 \u0639\u0644\u064a\u0647.",null,D.vI,null,null,null,null,null,null,null,null)
D.aNU=new A.r(!0,C.cs,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,C.fJ,null,null,null,null,null,null,null,null)
D.aWp=new A.t("\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aNU,null,null,null,null,null,null,null,null)
D.aWw=new A.t("\u0623\u0648\u0644 \u0645\u0631\u0629 \u0628\u0633: \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,F.b0,null,null,null,null,null,null,null,null)
D.aWy=new A.t("\u0648\u0642\u0651\u0641 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0644\u0648\u062d\u062f\u0647 \u0644\u0645\u0627 \u0623\u0633\u0643\u062a",null,C.dc,null,null,null,null,null,null,null,null)
D.aWR=new A.t("\u2022 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: \u0627\u0644\u0634\u064a\u062e \u0645\u062d\u0645\u0648\u062f \u062e\u0644\u064a\u0644 \u0627\u0644\u062d\u0635\u0631\u064a \u2014 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645\u060c \u0645\u0646 everyayah.com.",null,F.ai,null,null,null,null,null,null,null,null)
D.Ut=new B.a9U(null)
D.aXt=new B.zv(null)
D.aXu=new B.PJ(2,1,!0,!1,!1)
D.Uu=new B.PL(!1,!1,!1,!1,!1,0)
D.fR=new B.mk(0,"ok")
D.p9=new B.mk(1,"near")
D.pa=new B.mk(2,"wrong")
D.pb=new B.mk(3,"missing")
D.UT=new B.mk(4,"extra")
D.a9b=new A.a3(63456,"MaterialIcons",null,!1)
D.b1I=new B.zK(D.cS,D.a9b,"\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629","\u0642\u0631\u0651\u0628 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0646\u0643 \u0648\u0627\u0642\u0631\u0627 \u0628\u0635\u0648\u062a \u0648\u0627\u0636\u062d \u0641\u064a \u0645\u0643\u0627\u0646 \u0647\u0627\u062f\u064a\u060c \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a.",null)
D.jx=new B.aXX(0,"flat")
D.b22=new B.Rj(!1,null)
D.wc=new B.Rj(!0,null)
D.jF=new B.Ac(0,"idle")
D.pm=new B.Ac(1,"playing")
D.pn=new B.Ac(2,"recording")
D.lo=new B.Ac(3,"thinking")
D.fX=new B.Ac(4,"result")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c5c","bwc",()=>new B.a9V())
x($,"c8d","bKu",()=>A.aX("\u0640[\u064b-\u0652]*\u0670",!0,!1))
x($,"c8e","bKv",()=>A.aX("\u0640[\u064b-\u0652]*[\u06e6\u06e7]",!0,!1))
x($,"c8p","bKD",()=>A.aX("\u0648\u0670",!0,!1))
x($,"c7N","bKb",()=>A.aX("[\u0648\u064a\u0649][\u064b-\u0652]*[\u0654]",!0,!1))
x($,"c6m","bJe",()=>A.aX("\u0627[\u0654\u0655]",!0,!1))
x($,"c7q","bJV",()=>A.aX("[\u0654\u0655]",!0,!1))
x($,"c6n","bJf",()=>A.aX("[\u0622\u0623\u0625\u0671\u0672\u0673]",!0,!1))
x($,"c6t","bJk",()=>A.aX("[\u0624\u0626]",!0,!1))
x($,"c7s","bJX",()=>A.aX("[\u064b-\u065f\u0670\u06d6-\u06ed\u08d3-\u08ff\u0640]",!0,!1))
x($,"c7S","bKe",()=>A.aX("[\u06dd\u06de\u0660-\u0669\u06f0-\u06f90-9]",!0,!1))
x($,"c7z","bK2",()=>A.aX("[^\u0621-\u064a\\s]",!0,!1))
x($,"c8c","bwK",()=>A.aX("\\s+",!0,!1))
x($,"c2x","pv",()=>B.bLt(D.lv,0,A.bs8(0,!0)))
x($,"c5d","HK",()=>new B.PK($.bwc(),D.aXu,B.bTg(),D.auA,$.a7()))})()};
(a=>{a["0UX2sMidTuY/whPpVlO1M1Q5dgM="]=a.current})($__dart_deferred_initializers__);