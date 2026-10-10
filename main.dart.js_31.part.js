((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,Q,S,G,N,M,O,R,T,U,I,K,B={aXI:function aXI(d,e){this.a=d
this.b=e},Xg:function Xg(d,e,f){this.d=d
this.r=e
this.a=f},aTV:function aTV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4){var _=this
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
_.dy=a4},aTW:function aTW(d){this.a=d},
bSU(d){var x,w,v,u,t,s
if(d instanceof B.ku)return d
try{x=A.cm(d)
w=x.code
v=x.message
u=w==null?"failed":A.a9(w)
t=v==null?"":A.a9(v)
return new B.ku(u,t)}catch(s){u=A.f(d)
return new B.ku("failed",u)}},
a9L:function a9L(){this.b=this.a=null},
aRN:function aRN(d){this.a=d},
aRQ:function aRQ(){},
aRP:function aRP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aRO:function aRO(d){this.a=d},
aRU:function aRU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aRS:function aRS(d){this.a=d},
aRT:function aRT(d){this.a=d},
aRV:function aRV(d){this.a=d},
aRX:function aRX(d,e,f){this.a=d
this.b=e
this.c=f},
aRW:function aRW(d,e,f){this.a=d
this.b=e
this.c=f},
aRR:function aRR(){},
bSV(d,e){return new B.ku(d,e)},
PF:function PF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.w=i},
EZ:function EZ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i
_.w=j},
F0:function F0(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
F_:function F_(d,e){this.a=d
this.b=e},
ku:function ku(d,e){this.a=d
this.b=e},
bFO(d){var x,w=$.bK9()
w=A.bS(d,w,"\u0627")
x=$.bKa()
w=A.bS(w,x,"\u064a")
x=$.bKi()
w=A.bS(w,x,"\u0627")
x=$.bIU()
w=A.bS(w,x,"\u0627")
x=$.bJR()
w=A.bS(w,x,"\u0621")
x=$.bJA()
w=A.bS(w,x,"\u0621")
x=$.bIV()
w=A.bS(w,x,"\u0627")
x=$.bJ_()
w=A.bS(w,x,"\u0621")
w=A.bS(w,"\u0649","\u064a")
w=A.bS(w,"\u0629","\u0647")
x=$.bJC()
w=A.bS(w,x,"")
x=$.bJU()
w=A.bS(w,x," ")
x=$.bJI()
w=A.bS(w,x," ")
x=$.bwr()
return C.c.aq(A.bS(w,x," "))},
bXk(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.length,k=e.length
if(l===0)return k
if(k===0)return l
x=k+1
w=y.S
v=J.l7(x,w)
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
bqI(d,e){var x,w,v,u,t,s
if(d===e)return 1
x=A.aX("[\u0627\u0621]",!0,!1)
w=A.bS(d,x,"")
x=A.aX("[\u0627\u0621]",!0,!1)
v=A.bS(e,x,"")
if(w.length!==0&&w===v)return 1
u=d.length
t=e.length
u=u>t?u:t
if(u===0)return 1
s=1-B.bXk(d,e)/u
return s>=1?0.99:s},
AC(d){var x,w,v,u,t,s,r,q=A.a([],y.d)
for(x=C.c.qj(d,$.bwr()),w=x.length,v=0;v<x.length;x.length===w||(0,A.A)(x),++v){u=x[v]
if(u.length===0)continue
t=B.bFO(u)
s=A.bS(t," ","")
if(s.length===0){if(q.length!==0){r=q.pop()
q.push(new B.MX(r.a+" "+u,r.b))}continue}q.push(new B.MX(u,s))}return q},
bW8(d,e){var x,w,v,u,t=new B.bmt(),s=A.a([],y.s)
for(x=A.fe(e,0,A.il(5,"count",y.S),A.ad(e).c),w=x.$ti,x=new A.bO(x,x.gK(0),w.i("bO<aI.E>")),w=w.i("aI.E");x.u();){v=x.d
s.push((v==null?w.a(v):v).b)}u=!t.$2(s,D.C8)&&t.$2(d,D.C8)?C.b.iH(d,5):d
return!t.$2(s,D.GA)&&t.$2(u,D.GA)?C.b.iH(u,4):u},
bEU(d,e){var x=B.AC(d),w=B.bFO(e),v=y.U
v=A.a0(new A.aO(A.a(w.split(" "),y.s),new B.bnQ(),v),v.i("L.E"))
return new B.DG(x,B.bVm(x,B.bW8(v,x)),w)},
bVm(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=A.a([],y.s)
for(x=a5.length,w=0;w<a5.length;a5.length===x||(0,A.A)(a5),++w)a4.push(a5[w].b)
v=a4.length
u=a6.length
t=u+1
x=(v+1)*t
s=y.i
r=A.c2(x,0,!1,s)
q=A.c2(x,0,!1,y.S)
p=A.c2(v*(u===0?1:u),0,!1,s)
for(o=0;o<v;++o)for(x=o*u,n=0;n<u;++n)p[x+n]=B.bqI(a4[o],a6[n])
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
e=2}if(n>=2&&r[h-2]<g&&B.bqI(a4[m],a6[n-2]+a6[n-1])>=1){g=r[h-2]
e=3}if(s&&r[i+n-1]<g&&B.bqI(a4[j]+a4[m],a6[n-1])>=1){g=r[i+n-1]
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
if(a2>=1)m=D.fP
else m=a2>=0.6?D.p4:D.p5
a1.push(new B.lM(o,x,s,m))
break
case 1:--o
a1.push(new B.lM(o,a4[o],null,D.p6))
break
case 2:--n
a1.push(new B.lM(null,null,a6[n],D.UN))
break
case 3:--o
a3=n-2
a1.push(new B.lM(o,a4[o],a6[a3]+" "+a6[n-1],D.fP))
n=a3
break
default:x=o-1;--n
a1.push(new B.lM(x,a4[x],a6[n],D.fP))
o-=2
a1.push(new B.lM(o,a4[o],a6[n],D.fP))}}a4=y.e
a4=A.a0(new A.cJ(a1,a4),a4.i("aI.E"))
return a4},
mk:function mk(d,e){this.a=d
this.b=e},
MX:function MX(d,e){this.a=d
this.b=e},
lM:function lM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
DG:function DG(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
aJk:function aJk(d){this.a=d},
aJj:function aJj(){},
bmt:function bmt(){},
bnQ:function bnQ(){},
bL8(d,e,f){return new B.pG(d,e,f)},
bY7(d){var x
A:{if("memorized"===d){x=D.dQ
break A}if("learning"===d){x=D.lu
break A}x=D.lt
break A}return x},
bGJ(d,e){return d>=1&&d<=114&&e>=1&&e<=H.bW[d-1].a[1]},
bSW(){var x=y.S
return new B.a9M(A.x(x,y.u),A.aC(x))},
aRZ(d){var x=d.kS()
return C.c.da(C.e.j(A.cD(x)),4,"0")+"-"+C.c.da(C.e.j(A.cc(x)),2,"0")+"-"+C.c.da(C.e.j(A.cy(x)),2,"0")},
bCb(d){var x=y.x,w=A.a0(new A.aj(A.a(d.split("-"),y.s),A.bZi(),x),x.i("aI.E"))
return B.aRZ(A.jp(w[0],w[1],w[2]-1,12,0,0,0))},
btE(d){var x,w,v,u,t,s,r,q,p=y.S,o=A.x(p,y.u),n=A.aC(p),m=new B.a9M(o,n),l=d.h(0,"rows")
if(y.f.b(l))for(x=l.gdH(),x=x.ga5(x),w=y.j;x.u();){v=x.gL()
u=A.fb(A.f(v.a),null)
t=v.b
v=!0
if(u!=null)if(w.b(t))if(J.bh(t)>=3){v=C.e.b7(u,1000)
s=C.e.ae(u,1000)
v=!(v>=1&&v<=114&&s>=1&&s<=H.bW[v-1].a[1])}if(v)continue
v=J.bs(t)
r=C.d.bS(A.dv(v.h(t,0)))
if(r<0||r>=3)continue
o.n(0,u,new B.pG(D.ao5[r],C.d.bS(A.dv(v.h(t,1))),new A.bl(A.lU(C.d.bS(A.dv(v.h(t,2))),0,!0),0,!0)))}q=d.h(0,"dirty")
if(y.j.b(q)){x=J.bri(q,y.o)
p=A.n3(x,new B.aRY(),x.$ti.i("L.E"),p)
n.E(0,new A.aO(p,o.gUY(),A.w(p).i("aO<L.E>")))}m.c=A.X(d.h(0,"last"))
p=A.bR(d.h(0,"streak"))
p=p==null?null:C.d.bS(p)
p=m.d=p==null?0:p
o=A.bR(d.h(0,"best"))
o=o==null?null:C.d.bS(o)
m.e=o==null?p:o
return m},
aoJ(d,e){return"https://everyayah.com/data/Husary_Muallim_128kbps/"+C.c.da(C.e.j(d),3,"0")+C.c.da(C.e.j(e),3,"0")+".mp3"},
AU:function AU(d,e){this.a=d
this.b=e},
pG:function pG(d,e,f){this.a=d
this.b=e
this.c=f},
a9M:function a9M(d,e){var _=this
_.a=d
_.b=e
_.c=null
_.e=_.d=0},
aS_:function aS_(){},
aS0:function aS0(){},
aRY:function aRY(){},
PD:function PD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bQx(){return new B.uz(null)},
c0E(d,e){var x,w,v,u,t={},s=H.bW[e-1].a[1],r=$.HD().c
t.a=1
x=r.a
w=e*1000
v=1
for(;;){if(v<=s){v=x.h(0,w+v)
v=(v==null?$.pv():v).a===D.dQ}else v=!1
if(!v)break
v=++t.a}x=t.a
if(x>s){t.a=1
u=1}else u=x
x=s<=10
if(x)u=1
t.b=u
t.c=x?s:C.e.co(u+4,1,s)
return A.h2(M.dg,new B.bpH(t,s,e),d,!0,null,null,!1,y.l)},
bvk(d){return A.cZ(0,0,0,0,0,C.e.co(C.d.aA(6+d*1.2),25,90))},
bum(d){return E.aW(C.e.b7(d,60))+":"+C.c.da(E.aW(C.e.ae(d,60)),2,"\u0660")},
bGw(d){return A.h2(M.dg,new B.bqm($.HD()),d,!0,null,null,!1,y.H)},
Hy(d){var x,w=d.a
A:{if("timeout"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0627\u062a\u0623\u062e\u0631 \u0623\u0648\u064a \u0648\u0645\u0631\u062f\u0651\u0634\u060c \u0641\u0648\u0642\u0651\u0641\u0646\u0627\u0647 \u0648\u062c\u0631\u0651\u0628\u0646\u0627 \u062a\u0627\u0646\u064a \u0628\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0623\u062e\u0641 \u0648\u0645\u0646\u0641\u0639\u0634. \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}if("crashed"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0642\u0641 \u0641\u062c\u0623\u0629 (\u063a\u0627\u0644\u0628\u064b\u0627 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0634 \u0645\u0643\u0641\u064a\u0629). \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}x=d.gjz()
break A}return x},
c1U(d,e,f){var x,w=new B.bqA(),v=w.$1(f),u=w.$1("\xab\u0627\u0644\u0645\u062d\u0641\u0651\u0638\xbb \u0645\u0634\u0643\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 ("+e+")\n"+d.a+": "+d.b+"\n"),t=1990-u.length
if(v.length>t)v=t<=1?"":C.c.X(v,0,t-1)+"\u2026"
x=u+v
return x.length>1990?C.c.X(x,0,1990):x},
bGE(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
try{x=y.P.a(C.Z.f2(a4,null))
s=y.Y
r=s.a(J.b6(x,"rec"))
w=r==null?C.eW:r
q=s.a(J.b6(x,"last"))
v=q==null?C.eW:q
u=new B.bqz()
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
a0=J.bh(t)!==0?" \xb7 recovered from "+A.f(t):""
a1=J.c(J.b6(x,"safe"),!0)?" \xb7 safe mode":""
a2=J.c(J.b6(x,"nogpu"),!0)?" \xb7 no-gpu":""
return"record "+s+" s ("+p+", "+o+" Hz, peak "+n+", "+m+") \u2192 stop/decode "+l+" ms \u2192 resample "+k+" ms \u2192 infer "+j+" ms (mel "+i+", enc "+h+", dec "+g+") \u2192 wall "+f+" ms \xb7 "+e+" \xd7"+d+a0+a1+a2}catch(a3){return""}},
CQ:function CQ(d,e){this.a=d
this.b=e},
PE:function PE(d,e,f,g,h){var _=this
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
aS1:function aS1(d){this.a=d},
aS2:function aS2(d){this.a=d},
aS3:function aS3(d){this.a=d},
uz:function uz(d){this.a=d},
Ti:function Ti(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.w=_.r=null},
bc3:function bc3(d){this.a=d},
bc2:function bc2(d,e){this.a=d
this.b=e},
bc4:function bc4(d){this.a=d},
bc1:function bc1(d,e){this.a=d
this.b=e},
bc5:function bc5(){},
bbQ:function bbQ(){},
bbW:function bbW(d,e,f){this.a=d
this.b=e
this.c=f},
bbX:function bbX(){},
bc_:function bc_(d){this.a=d},
bbZ:function bbZ(){},
bc0:function bc0(d){this.a=d},
bbT:function bbT(d,e){this.a=d
this.b=e},
bbU:function bbU(d){this.a=d},
bbS:function bbS(){},
bbV:function bbV(d){this.a=d},
bbR:function bbR(d){this.a=d},
bbY:function bbY(d,e){this.a=d
this.b=e},
CR:function CR(d,e,f){this.c=d
this.d=e
this.a=f},
Rd:function Rd(d,e){this.c=d
this.a=e},
bpH:function bpH(d,e,f){this.a=d
this.b=e
this.c=f},
bpE:function bpE(d,e,f){this.a=d
this.b=e
this.c=f},
bpG:function bpG(d,e){this.a=d
this.b=e},
bpD:function bpD(d,e){this.a=d
this.b=e},
bpC:function bpC(d,e){this.a=d
this.b=e},
bpF:function bpF(d,e){this.a=d
this.b=e},
bpy:function bpy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bpx:function bpx(d,e,f){this.a=d
this.b=e
this.c=f},
bpz:function bpz(d){this.a=d},
bpA:function bpA(d){this.a=d},
bpB:function bpB(d,e){this.a=d
this.b=e},
A8:function A8(d,e){this.a=d
this.b=e},
zt:function zt(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Vc:function Vc(d,e){var _=this
_.d=d
_.e=$
_.f=e
_.w=_.r=null
_.x=!1
_.y=0
_.ax=_.at=_.as=_.Q=_.z=null
_.ay=0
_.c=_.a=_.ch=null},
bju:function bju(){},
bjK:function bjK(d,e){this.a=d
this.b=e},
bjO:function bjO(d){this.a=d},
bjP:function bjP(d){this.a=d},
bjQ:function bjQ(d,e,f){this.a=d
this.b=e
this.c=f},
bjS:function bjS(d){this.a=d},
bjT:function bjT(d){this.a=d},
bjR:function bjR(){},
bjV:function bjV(d){this.a=d},
bjU:function bjU(d){this.a=d},
bjW:function bjW(d,e){this.a=d
this.b=e},
bjY:function bjY(d){this.a=d},
bjZ:function bjZ(d){this.a=d},
bjX:function bjX(){},
bjJ:function bjJ(d,e,f){this.a=d
this.b=e
this.c=f},
bjL:function bjL(d,e,f){this.a=d
this.b=e
this.c=f},
bjC:function bjC(d){this.a=d},
bjD:function bjD(d){this.a=d},
bjB:function bjB(){},
bjE:function bjE(){},
bjF:function bjF(d,e){this.a=d
this.b=e},
bk3:function bk3(d){this.a=d},
bk4:function bk4(d){this.a=d},
bk5:function bk5(d,e){this.a=d
this.b=e},
bk2:function bk2(d){this.a=d},
bk6:function bk6(d,e){this.a=d
this.b=e},
bjI:function bjI(){},
bjH:function bjH(d){this.a=d},
bjG:function bjG(d,e){this.a=d
this.b=e},
bjN:function bjN(d){this.a=d},
bjM:function bjM(d){this.a=d},
bk_:function bk_(){},
bk0:function bk0(){},
bk1:function bk1(){},
bjv:function bjv(d,e,f){this.a=d
this.b=e
this.c=f},
bjw:function bjw(d){this.a=d},
bjy:function bjy(){},
bjx:function bjx(){},
bjz:function bjz(d){this.a=d},
bjA:function bjA(d){this.a=d},
zG:function zG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
zs:function zs(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Vb:function Vb(d,e,f,g,h){var _=this
_.d=d
_.e=null
_.f=e
_.r=f
_.w=g
_.x=0
_.as=_.Q=_.z=_.y=null
_.at=h
_.c=_.a=null},
bjd:function bjd(){},
bjm:function bjm(d,e){this.a=d
this.b=e},
bjn:function bjn(d){this.a=d},
bjl:function bjl(){},
bjp:function bjp(d){this.a=d},
bjo:function bjo(d,e){this.a=d
this.b=e},
bjq:function bjq(d,e){this.a=d
this.b=e},
bjh:function bjh(d,e){this.a=d
this.b=e},
bji:function bji(d,e,f){this.a=d
this.b=e
this.c=f},
bjj:function bjj(d,e,f){this.a=d
this.b=e
this.c=f},
bje:function bje(d,e,f){this.a=d
this.b=e
this.c=f},
bjf:function bjf(d,e,f){this.a=d
this.b=e
this.c=f},
bjg:function bjg(d,e){this.a=d
this.b=e},
bjk:function bjk(d){this.a=d},
bjr:function bjr(){},
bjs:function bjs(d,e){this.a=d
this.b=e},
bjt:function bjt(d,e){this.a=d
this.b=e},
zr:function zr(d){this.a=d},
Va:function Va(d){this.d=d
this.c=this.a=null},
bj4:function bj4(){},
bjb:function bjb(d){this.a=d},
bjc:function bjc(){},
bja:function bja(d,e){this.a=d
this.b=e},
bj9:function bj9(d,e,f){this.a=d
this.b=e
this.c=f},
bj8:function bj8(d,e,f){this.a=d
this.b=e
this.c=f},
bj7:function bj7(d){this.a=d},
bj5:function bj5(d){this.a=d},
bj6:function bj6(d){this.a=d},
bqm:function bqm(d){this.a=d},
bql:function bql(d){this.a=d},
bqg:function bqg(d,e){this.a=d
this.b=e},
bqi:function bqi(){},
bqh:function bqh(){},
bqj:function bqj(d,e){this.a=d
this.b=e},
bqk:function bqk(d,e){this.a=d
this.b=e},
a9K:function a9K(d){this.a=d},
aRM:function aRM(d){this.a=d},
bqA:function bqA(){},
bqB:function bqB(){},
zu:function zu(d,e,f){this.c=d
this.d=e
this.a=f},
Vd:function Vd(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.r=null},
bk7:function bk7(d){this.a=d},
bk8:function bk8(d){this.a=d},
bk9:function bk9(d,e){this.a=d
this.b=e},
bka:function bka(d){this.a=d},
bkc:function bkc(d){this.a=d},
bkb:function bkb(d){this.a=d},
bqz:function bqz(){}},D,P,H,E,F
J=c[1]
A=c[0]
C=c[2]
L=c[14]
Q=c[18]
S=c[20]
G=c[13]
N=c[30]
M=c[23]
O=c[34]
R=c[22]
T=c[10]
U=c[32]
I=c[37]
K=c[39]
B=a.updateHolder(c[8],B)
D=c[40]
P=c[28]
H=c[29]
E=c[15]
F=c[17]
B.aXI.prototype={
M(){return"_ChipVariant."+this.b}}
B.Xg.prototype={
D(d){var x=null
A.T(d)
return A.aHS(!1,x,C.fd,x,x,x,x,C.m,x,new B.aTV(d,!0,D.jv,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,C.ob,x,x,x,x,x,x,x,x),x,x,x,x,x,x,x,x,!0,this.d,x,x,x,x,x,this.r,x,x,x,!1,x,x,x,x,x,x,x,!0,x,x)}}
B.aTV.prototype={
goB(){var x,w=this,v=w.go
if(v===$){x=A.T(w.fr)
w.go!==$&&A.aB()
v=w.go=x.ax}return v},
gdG(){if(this.fy===D.jv)var x=0
else x=this.fx?1:0
return x},
gvQ(){return 1},
gfN(){var x,w=this,v=w.id
if(v===$){x=A.T(w.fr)
w.id!==$&&A.aB()
v=w.id=x.ok}x=v.as
if(x==null)x=null
else x=x.cq(w.fx?w.goB().k3:w.goB().k3)
return x},
gcA(){return new A.bc(new B.aTW(this),y.b)},
gc2(){if(this.fy===D.jv)var x=C.Q
else{x=this.goB().x1
if(x==null)x=C.y}return x},
gcg(){return C.Q},
grf(){return null},
guZ(){return null},
ge9(){var x,w,v=this
if(v.fy===D.jv)if(v.fx){x=v.goB()
w=x.to
if(w==null){w=x.p
x=w==null?x.k3:w}else x=w
x=new A.b7(x,1,C.A,-1)}else{x=v.goB().k3
x=new A.b7(A.aG(31,x.B()>>>16&255,x.B()>>>8&255,x.B()&255),1,C.A,-1)}else x=C.pL
return x},
ghg(){var x=null
return new A.dC(18,x,x,x,x,this.fx?this.goB().b:this.goB().k3,x,x,x)},
gcC(){return C.eo},
grV(){var x=this.gfN(),w=x==null?null:x.r
if(w==null)w=14
x=A.bY(this.fr,C.bj)
x=x==null?null:x.gd4()
x=A.od(C.iq,C.di,A.C((x==null?C.aV:x).b4(w)/14-1,0,1))
x.toString
return x}}
B.a9L.prototype={
oM(){var x=this,w=x.a
if(w!=null)return A.dB(w,y.m)
w=x.b
return w==null?x.b=new B.aRN(x).$0():w},
qF(d,e){return this.awT(d,e,e)},
awT(d,e,f){var x=0,w=A.n(f),v,u=2,t=[],s,r,q,p
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
r=B.bSU(s)
throw A.o(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$qF,w)},
mA(d,e){var x=A.hz(d[e])
if(x==null)x=null
return x===!0},
Gq(){var x=0,w=A.n(y.X),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Gq=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
h=A
g=A
x=7
return A.d(s.oM(),$async$Gq)
case 7:r=h.cm(g.co(e,"support",null,null,null,null))
q=s.mA(r,"worker")
p=s.mA(r,"wasm")
o=s.mA(r,"mic")
n=s.mA(r,"audio")
s.mA(r,"webgpu")
m=s.mA(r,"secure")
s.mA(r,"ios")
l=A.kF(r.memory)
if(l==null)l=null
if(l==null)l=0
s.mA(r,"isolated")
k=A.kF(r.cores)
if(k!=null)C.d.aA(k)
v=new B.PF(q,p,o,n,m,l)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=D.Uo
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Gq,w)},
Ai(){var x=0,w=A.n(y.M),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Ai=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=A
l=A
k=A
x=8
return A.d(s.oM(),$async$Ai)
case 8:x=7
return A.d(m.e6(l.cm(k.co(e,"storage",null,null,null,null)),y.A),$async$Ai)
case 7:r=e
if(r==null){v=null
x=1
break}q=C.d.aA(A.d_(r.quota))
p=C.d.aA(A.d_(r.usage))
v=new A.aiQ(q,p)
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
return A.m($async$Ai,w)},
aXA(){var x=y.K
A.Kr(this.oM().bA(new B.aRQ(),x),x)},
oL(d,e){var x=A.kF(d[e])
x=x==null?null:C.d.aA(x)
return x==null?0:x},
aV8(d,e,f){return this.qF(new B.aRP(this,d,e,f),y.C)},
ga7Z(){var x,w
try{x=A.lD(b.G.sessionStorage)
return x}catch(w){return null}},
gaeA(){var x=A.hz(b.G.mogtama3yTutorIsolated)
if(x==null)x=null
return x===!0},
a_1(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
try{m=b.G
l=A.hz(m.crossOriginIsolated)
if(l==null)l=f
if(l===!0)return!1
if(this.gaeA())return!1
l=A.hz(m.isSecureContext)
if(l==null)l=f
if(l!==!0)return!1
x=A.cm(m.navigator)
if(!("serviceWorker" in x))return!1
w=A.a9(x.userAgent)
l=A.kF(x.maxTouchPoints)
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
l=A.kF(x.hardwareConcurrency)
h=l==null?f:l
r=h==null?0:h
if(r>0&&r<3)return!1
q=Date.now()
l=this.ga7Z()
l=l==null?f:A.X(A.co(l,"getItem","mt.tutor.iso",f,f,f))
if(l==null)l=f
p=A.fb(l==null?"":l,f)
if(p!=null&&q-p<3e4)return!1
o=A.lD(m.localStorage)
m=o
m=m==null?f:A.X(A.co(m,"getItem","mt.tutor.noiso",f,f,f))
if(m==null)m=f
n=A.fb(m==null?"":m,f)
if(n!=null&&q-n<2592e5)return!1
return!0}catch(g){return!1}},
adf(){var x,w,v,u,t,s,r=null
try{x=this.ga7Z()
if(x!=null)A.co(x,"setItem","mt.tutor.iso",""+Date.now(),r,r)}catch(w){}x=b.G
v=A.cm(x.location)
u=A.a9(v.hash)
t=A.a9(v.search)
s=A.bV(A.a9(A.cm(x.document).baseURI),0,r).W("tutor/").j(0)
x=u.length===0?"#/masjid/tools/tutor":u
A.co(v,"replace",s+t+x,r,r,r)},
aUT(){var x,w=null,v=b.G,u=A.cm(v.history),t=A.kF(u.length),s=t==null?w:t
if((s==null?0:s)>1)A.co(u,"back",w,w,w,w)
else{x=A.a9(A.cm(v.document).baseURI)
A.co(A.cm(v.location),"replace",A.bV(x,0,w).W("./").j(0)+"#/",w,w,w)}},
a_c(d,e,f,g,h){return this.qF(new B.aRU(this,e,d,f,h,g),y.H)},
a_f(){return this.qF(new B.aRV(this),y.D)},
UB(){var x=null,w=this.a
if(w!=null)A.co(w,"cancelRecording",x,x,x,x)},
a9b(d){var x,w,v=this,u=A.X(d.text)
if(u==null)u=null
if(u==null)u=""
x=v.oL(d,"ms")
w=A.kF(d.seconds)
if(w==null)w=null
if(w==null)w=0
return new B.F0(u,x,w,v.oL(d,"frames"),v.oL(d,"tokens"),v.mA(d,"retried"),v.oL(d,"encMs"),v.oL(d,"decMs"),v.oL(d,"featMs"))},
a6b(d){var x={}
x.words=d
return x},
ahv(d,e){return this.qF(new B.aRX(this,d,e),y._)},
aZH(d,e){return this.qF(new B.aRW(this,d,e),y._)},
EJ(d,e){return this.aXD(d,e)},
aXD(d,e){var x=0,w=A.n(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m
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
o=A.a0(new A.aj(d,new B.aRR(),o),o.i("aI.E"))
x=11
return A.d(A.e6(A.cm(A.co(r,"play",o,e,null,null)),y.y),$async$EJ)
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
if(w!=null)A.co(w,"stopPlayback",x,x,x,x)},
Dt(){var x,w,v,u=null
try{w=this.a
x=w==null?u:A.a9(A.co(w,"diag",u,u,u,u))
w=x
if(w==null)w=u
if(w==null)w="{}"
return w}catch(v){return"{}"}},
aYR(){var x,w,v=null
try{x=this.a
if(x!=null)A.co(x,"resetDevice",v,v,v,v)}catch(w){}},
XS(d){var x=this.a
if(x!=null)A.co(x,"prefetch",d,null,null,null)}}
B.PF.prototype={}
B.EZ.prototype={
gll(){var x=this.f,w=x>0?"CPU \xd7"+x:""
x=this.a
if(x==="webgpu")return"WebGPU"
if(C.c.m(x,"webgpu"))return"WebGPU + "+w
return w.length===0?x:w}}
B.F0.prototype={
gKX(){var x=this,w=C.d.ap(x.d/100,0),v=x.f?" (retried on 30 s)":""
return"window "+w+" s, "+x.e+" tokens"+v+", mel "+x.x+" ms, encoder "+x.r+" ms, decoder "+x.w+" ms"}}
B.F_.prototype={}
B.ku.prototype={
gjz(){var x,w=this.a
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
B.mk.prototype={
M(){return"WordStatus."+this.b}}
B.MX.prototype={}
B.lM.prototype={
j(d){var x,w=this.b
if(w==null)w=""
x=this.c
if(x==null)x=""
return this.d.b+":"+w+"->"+x}}
B.DG.prototype={
gG6(){var x,w=this,v=w.d
if(v===$){x=new B.aJk(w).$0()
w.d!==$&&A.aB()
w.d=x
v=x}return v},
gDJ(){var x,w,v,u,t,s=A.a([],y.s)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,A.A)(x),++v){u=x[v]
if(u.d===D.UN&&u.c!=null){t=u.c
t.toString
s.push(t)}}return s},
gaVY(){return J.nY(this.gG6(),new B.aJj()).gK(0)},
gpS(){var x=this.a
return x.length!==0&&this.gaVY()===x.length&&this.gDJ().length===0}}
B.AU.prototype={
M(){return"AyahStatus."+this.b}}
B.pG.prototype={}
B.a9M.prototype={
Xs(d,e){var x=this.a.h(0,d*1000+e)
return x==null?$.pv():x},
aG3(d){var x=this,w=B.aRZ(d),v=x.c
if(v===w)return
v=v!=null&&v===B.bCb(w)?x.d+1:1
x.d=v
if(v>x.e)x.e=v
x.c=w},
acr(){var x=Date.now(),w=B.aRZ(new A.bl(x,0,!1))
x=this.c
return x===w||x===B.bCb(w)?this.d:0},
agB(d,e,f,g){var x=this,w=new A.bl(Date.now(),0,!1),v=x.Xs(d,e),u=g?C.e.co(v.b+1,0,100):0,t=g&&u>=f?D.dQ:D.lu,s=new B.pG(t,u,w.j3()),r=d*1000+e
x.a.n(0,r,s)
x.b.C(0,r)
x.aG3(w)
return s},
Xj(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=H.bW[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pv():s).a===D.dQ)++u}return u},
aUR(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=H.bW[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pv():s).a===D.lu)++u}return u},
gafH(){var x=this.a,w=A.w(x).i("c5<2>")
return new A.aO(new A.c5(x,w),new B.aS_(),w.i("aO<L.E>")).gK(0)},
gakA(){var x=this.a,w=A.w(x).i("be<1>")
w=A.n3(new A.be(x,w),new B.aS0(),w.i("L.E"),y.S)
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
aQX(){var x,w,v,u,t,s,r,q,p,o=A.a([],y.Z)
for(x=this.b,x=A.bts(x,300,A.w(x).c),x=new A.EH(J.aM(x.a),x.b,A.w(x).i("EH<1>")),w=y.N,v=y.z,u=this.a;x.u();){t=x.gL()
s=C.e.b7(t,1000)
t=C.e.ae(t,1000)
r=s*1000+t
q=u.h(0,r)
q=(q==null?$.pv():q).a===D.dQ?"memorized":"learning"
p=u.h(0,r)
if(p==null)p=$.pv()
r=u.h(0,r)
o.push(A.M(["surah",s,"ayah",t,"status",q,"perfect_count",p.b,"updated_at",(r==null?$.pv():r).c.jA()],w,v))}return o},
aVq(d){var x,w,v,u,t,s,r
for(x=d.length,w=this.a,v=this.b,u=0;u<d.length;d.length===x||(0,A.A)(d),++u){t=d[u]
s=A.el(t.h(0,"surah"))*1000+A.el(t.h(0,"ayah"))
r=w.h(0,C.e.b7(s,1000)*1000+C.e.ae(s,1000))
if((r==null?$.pv():r).c.jA()===t.h(0,"updated_at"))v.I(0,s)}},
aVy(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(x=J.aM(d),w=this.b,v=this.a,u=y.f,t=!1;x.u();){s=x.gL()
if(!u.b(s))continue
r=A.bR(s.h(0,"surah"))
q=r==null?null:C.d.bS(r)
r=A.bR(s.h(0,"ayah"))
p=r==null?null:C.d.bS(r)
o=A.hI(A.f(s.h(0,"updated_at")))
r=!0
if(q!=null)if(p!=null)if(o!=null)r=!(q>=1&&q<=114&&p>=1&&p<=H.bW[q-1].a[1])
if(r)continue
n=B.bY7(s.h(0,"status"))
if(n===D.lt)continue
r=q*1000+p
m=v.h(0,r)
if(m!=null){l=m.c
k=o.a
j=l.a
if(k<=j)l=k===j&&o.b>l.b
else l=!0
l=!l}else l=!1
if(l)continue
l=A.bR(s.h(0,"perfect_count"))
l=l==null?null:C.d.bS(l)
v.n(0,r,new B.pG(n,C.e.co(l==null?0:l,0,100),o.j3()))
w.I(0,r)
t=!0}return t}}
B.PD.prototype={
Di(d,e,f,g,h){var x=this,w=g==null?x.a:g,v=h==null?x.b:h,u=d==null?x.c:d,t=e==null?x.d:e
return new B.PD(w,v,u,t,f==null?x.e:f)},
aPu(d){var x=null
return this.Di(x,x,d,x,x)},
ac2(d){var x=null
return this.Di(x,d,x,x,x)},
aPy(d){var x=null
return this.Di(x,x,x,x,d)},
aP_(d){var x=null
return this.Di(d,x,x,x,x)},
aPv(d){var x=null
return this.Di(x,x,x,d,x)},
cV(){var x=this
return A.M(["n",x.a,"r",x.b,"auto",x.c,"hide",x.d,"in",x.e],y.N,y.z)}}
B.CQ.prototype={
M(){return"ModelState."+this.b}}
B.PE.prototype={
WN(){var x=this.Q
return x==null?this.Q=new B.aS1(this).$0():x},
or(d){return this.aj9(d)},
aj9(d){var x=0,w=A.n(y.H),v=this
var $async$or=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v.b=d
v.a_()
x=2
return A.d(A.io("mt.tutor.settings",C.Z.hw(d.cV(),null)),$async$or)
case 2:return A.l(null,w)}})
return A.m($async$or,w)},
wp(){var x=0,w=A.n(y.H),v=this,u
var $async$wp=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a_()
x=2
return A.d(A.io("mt.tutor.progress",C.Z.hw(v.c.cV(),null)),$async$wp)
case 2:u=v.as
if(u!=null)u.aI()
v.as=A.cQ(C.H,v.gapn())
return A.l(null,w)}})
return A.m($async$wp,w)},
FS(d,e,f){return this.ajM(d,e,f)},
ajM(d,e,f){var x=0,w=A.n(y.H),v=this
var $async$FS=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:v.z=new A.bn(d,e,f)
x=2
return A.d(A.io("mt.tutor.last",C.Z.hw(A.M(["s",d,"f",e,"t",f],y.N,y.S),null)),$async$FS)
case 2:return A.l(null,w)}})
return A.m($async$FS,w)},
z9(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$z9=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=s.f
if(n===D.MB||n===D.hx){x=1
break}s.f=D.MB
s.y=null
s.a_()
u=4
n=A.jK().geq().h(0,"tutor_device")
if(n==null)n="auto"
p=A.jK().geq().h(0,"tutor_threads")
p=A.fb(p==null?"":p,null)
if(p==null)p=0
x=7
return A.d(s.a.aV8(new B.aS2(s),n,p),$async$z9)
case 7:s.x=e
s.f=D.hx
n=A.jK().geq().h(0,"debug")
if(n==="1"){n=s.x
n.toString
r=n
A.rP().$1("[tutor] model ready: "+r.a+" "+r.b+" threads="+r.f+" isolated="+r.r+" in "+r.c+" ms (warm-up "+r.w+" ms, cached before: "+r.d+")")}u=2
x=6
break
case 4:u=3
m=t.pop()
n=A.Y(m)
if(n instanceof B.ku){q=n
s.f=D.auu
s.y=q
n=A.jK().geq().h(0,"debug")
if(n==="1")A.rP().$1("[tutor] model failed: "+A.f(q))}else throw m
x=6
break
case 3:x=2
break
case 6:s.a_()
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$z9,w)},
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
n=r.c.aVy(o)
m=0,k=y.N,i=y.z
case 8:if(!(m<25)){x=10
break}l=r.c.aQX()
if(J.bh(l)===0){x=10
break}h=p
g=A.M(["p_rows",l],k,i)
f=h.CW
f===$&&A.b()
f.b.E(0,A.lS(h.x,k,k))
x=11
return A.d(f.aZd("quran_tutor_save",!1,g,i),$async$tX)
case 11:r.c.aVq(l)
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
EW(d){return this.aYT(d)},
aYT(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$EW=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:p=B.btE(t.c.cV()).cV()
y.f.a(p.h(0,"rows")).dt(0,new B.aS3(d))
t.c=B.btE(p)
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
B.uz.prototype={
V(){var x=$.HD()
return new B.Ti(x,new A.b4(C.L,$.a5()))}}
B.Ti.prototype={
ag(){var x,w,v=this
v.ar()
x=v.d
x.a8(v.gmM())
w=y.a
x.WN().bA(new B.bc3(v),w)
G.aHN().bA(new B.bc4(v),w).hE(new B.bc5())
A.Kr(G.bt6(),y.y)},
uE(){if(this.c!=null)this.t(new B.bbQ())},
l(){var x,w=this
w.d.S(w.gmM())
x=w.e
x.p$=$.a5()
x.T$=0
w.az()},
Ir(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Ir=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.d
x=3
return A.d(s.or(s.b.aPu(!0)),$async$Ir)
case 3:t=s.a
t.aXA()
if(t.a_1()){t.adf()
x=1
break}s.z9()
case 1:return A.l(v,w)}})
return A.m($async$Ir,w)},
uF(d,e,f){return this.aEA(d,e,f)},
aL5(d){return this.uF(d,null,null)},
aEA(d,e,f){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$uF=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:if(u.w==null){u.c.U(y.q).f.bb(A.bU(null,null,null,null,null,C.l,null,A.p("\u0644\u062d\u0638\u0629\u2026 \u0628\u0646\u062c\u0647\u0651\u0632 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641",null,null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
x=1
break}x=e!=null&&f!=null?3:5
break
case 3:t=new A.R(e,f)
x=4
break
case 5:s=u.c
s.toString
x=6
return A.d(B.c0E(s,d),$async$uF)
case 6:t=h
case 4:if(t==null||u.c==null){x=1
break}x=7
return A.d(u.d.FS(d,t.a,t.b),$async$uF)
case 7:s=u.c
if(s==null){x=1
break}r=y.z
x=8
return A.d(A.ao(s,!1).cm(A.cl(new B.bbW(u,d,t),null,r),r),$async$uF)
case 8:if(u.c!=null)u.t(new B.bbX())
case 1:return A.l(v,w)}})
return A.m($async$uF,w)},
D(d){var x=null,w=this.d,v=w.b,u=A.a([],y.p),t=w.a
if(t.gaeA()&&!A.ao(d,!1).Uy())u.push(A.cM(x,x,x,x,D.abf,x,x,t.gaUS(),x,x,x,"\u0631\u062c\u0648\u0639 \u0644\u0645\u0633\u062c\u062f\u064a",x))
t=v.e
if(t)u.push(A.cM(x,x,x,x,D.ac7,x,x,new B.bc_(d),x,x,x,"\u062a\u0642\u062f\u0651\u0645\u064a",x))
u.push(A.cM(x,x,x,x,D.AH,x,x,new B.bc0(d),x,x,x,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",x))
if(!w.e)w=D.akP
else w=t?this.aB7():this.aBx()
return L.ve(u,w,"\u0627\u0644\u0645\u062d\u0641\u0651\u0638")},
aBx(){var x,w,v,u,t,s,r,q,p=null,o=this.d.d
if(o==null)o=D.Uo
x=this.r
w=x==null?p:x.a-x.b
if(!(o.a&&o.b))v="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u062f\u0639\u0645 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638. \u062c\u0631\u0651\u0628 \u0623\u062d\u062f\u062b \u0646\u0633\u062e\u0629 \u0645\u0646 Chrome (\u0623\u0646\u062f\u0631\u0648\u064a\u062f) \u0623\u0648 Safari (\u0622\u064a\u0641\u0648\u0646)."
else if(!o.f)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0641\u062a\u062d \u0639\u0644\u0649 https \u0639\u0634\u0627\u0646 \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0627\u064a\u0643."
else v=!o.c||!o.d?"\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u0633\u0645\u062d \u0628\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0646 \u0627\u0644\u0645\u0627\u064a\u0643.":p
x=y.p
u=A.a([D.aFD,C.as],x)
for(t=0;t<4;++t){s=D.amk[t]
u.push(new A.ab(C.bF,A.an(A.a([A.c8(s.a,C.a8,p,18),C.ap,new A.dL(1,C.aX,A.p(s.b,p,p,p,p,D.aKp,p,p,p),p)],x),C.B,C.f,C.h,0,p),p))}u=A.ah(u,C.B,C.f,C.h)
s=A.a([D.aWp,C.S,A.p("\u0647\u0646\u062d\u0645\u0651\u0644 \u0645\u0644\u0641 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 (\u062d\u0648\u0627\u0644\u064a "+E.aW(105)+" \u0645\u064a\u062c\u0627) \u0648\u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0648\u0628\u0639\u062f \u0643\u062f\u0647 \u0628\u064a\u0641\u062a\u062d \u0645\u0646 \u063a\u064a\u0631 \u062a\u062d\u0645\u064a\u0644. \u064a\u064f\u0641\u0636\u0651\u0644 \u062a\u0643\u0648\u0646 \u0639\u0644\u0649 Wi-Fi.",p,p,p,p,F.ai,p,p,p)],x)
if(w!=null){r=w<3e8
q=r?"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0645\u062a\u0635\u0641\u062d \u0642\u0644\u064a\u0644\u0629 ("+E.aW(C.d.aA(w/1e6))+" \u0645\u064a\u062c\u0627) \u2014 \u0641\u0636\u0651\u064a \u0634\u0648\u064a\u0629 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0623\u0648\u0644.":"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629: \u0643\u0641\u0627\u064a\u0629 \u2713"
C.b.E(s,A.a([C.S,A.p(q,p,p,p,p,A.cE(p,p,r?D.cR:C.cr,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x))}r=o.w
if(r>0&&r<3)C.b.E(s,A.a([C.S,D.aVY],x))
x=A.a([new E.cW(u,C.ag,C.ay,p,!0,p),new E.cW(A.ah(s,C.B,C.f,C.h),C.ag,C.ay,p,!1,p),D.b1W,C.S],x)
if(v!=null)x.push(new E.cW(A.p(v,p,p,p,p,D.aOn,p,p,p),C.ag,C.ay,p,!1,p))
else x.push(A.k7(D.aaB,D.aRv,this.gaEJ(),A.k8(C.q,C.a7,D.aI5,p,p)))
x.push(C.aN)
x.push(D.Un)
return x},
aB7(){var x,w,v=this,u=null,t=v.d,s=t.c,r=v.e,q=C.c.aq(r.a.a),p=q.length===0,o=p?C.tr:G.bGp(q),n=t.z,m=A.aV(v.a8y(C.hg,E.aW(s.gafH())+" \u0622\u064a\u0629","\u062d\u0641\u0638\u062a\u0647\u0627"),1),l=E.aW(s.acr()),k=s.c,j=Date.now()
k=k===B.aRZ(new A.bl(j,0,!1))?"\u0648\u0631\u0627 \u0628\u0639\u0636 \u2014 \u0643\u0645\u0651\u0644!":"\u0633\u0645\u0651\u0639 \u0627\u0644\u0646\u0647\u0627\u0631\u062f\u0647 \u0639\u0634\u0627\u0646 \u062a\u0643\u0645\u0651\u0644"
j=y.p
k=A.a([new B.CR(t,!1,u),A.an(A.a([m,C.ap,A.aV(v.a8y(C.A7,l+" \u064a\u0648\u0645",k),1)],j),C.j,C.f,C.h,0,u),C.O],j)
if(n!=null){t=G.jj(n.a)
m=n.b
l=n.c
m=m===l?"\u0622\u064a\u0629 "+E.aW(m):"\u0627\u0644\u0622\u064a\u0627\u062a "+E.aW(m)+"\u2013"+E.aW(l)
k.push(new E.cW(A.an(A.a([D.abG,C.b0,A.aV(A.ah(A.a([D.aQ2,A.p(t+" \u2014 "+m,u,u,u,u,F.b_,u,u,u)],j),C.B,C.f,C.h),1),Q.km],j),C.j,C.f,C.h,0,u),C.ag,C.ay,new B.bbT(v,n),!0,u))}t=C.i.bQ(0.08)
k.push(A.bD(u,C.E,!1,u,!0,C.l,u,A.bI(),r,u,u,u,u,u,2,A.hq(u,new A.e5(4,A.ac(14),C.w),u,u,u,u,u,u,!0,u,u,u,u,u,u,t,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,C.oN,"\u0639\u0627\u064a\u0632 \u062a\u062d\u0641\u0638 \u0633\u0648\u0631\u0629 \u0625\u064a\u0647\u061f",u,u,u,u,u,u,u,u,u,!0,!0,!1,u,C.mG,u,u,u,u,u,u,u,u,u,u,u,u),C.r,!0,u,!0,u,!1,u,C.F,u,u,u,u,u,u,u,u,u,1,u,u,!1,"\u2022",u,new B.bbU(v),u,u,u,!1,u,u,!1,u,!0,u,C.D,u,u,u,u,u,u,u,u,u,u,u,C.db,!0,C.x,u,C.J,u,u,u,u))
k.push(C.O)
if(!p){t=A.a([],j)
if(o.length===0)t.push(D.aTQ)
for(r=o.length,x=0;x<o.length;o.length===r||(0,A.A)(o),++x)t.push(v.Jm(o[x]))
C.b.E(k,t)}else{t=A.a([D.awD,D.ax0,v.Jm(1)],j)
for(w=114;w>=78;--w)t.push(v.Jm(w))
t.push(C.S)
r=v.f
p=A.c8(r?C.rV:C.mw,C.a8,u,u)
t.push(A.i9(p,A.p(r?"\u0627\u062e\u0641\u064a \u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631":"\u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631 (\u0627\u0644\u0628\u0642\u0631\u0629 \u0644\u062d\u062f \u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a)",u,u,u,u,C.ec,u,u,u),new B.bbV(v),u))
if(v.f)for(w=2;w<=77;++w)t.push(v.Jm(w))
C.b.E(k,t)}k.push(C.as)
k.push(D.wa)
return k},
a8y(d,e,f){var x=null,w=y.p
return new E.cW(A.an(A.a([A.c8(d,C.q,x,x),C.ap,A.aV(A.ah(A.a([A.p(e,x,x,x,x,F.b_,x,x,x),A.p(f,1,C.al,x,x,D.aNa,x,x,x)],w),C.B,C.f,C.h),1)],w),C.j,C.f,C.h,0,x),C.ag,C.K,x,!1,x)},
Jm(d){var x,w=null,v=this.d.c,u=H.bW[d-1].a[1],t=v.Xj(d),s=t/u,r=y.p,q=A.bB(A.hf(C.W,A.a([A.brB(C.dU,D.c9,w,w,w,w,w,3,s,w),A.p(E.aW(d),w,w,w,w,S.TN,w,w,w)],r),C.l,C.c4,w),36,36),p=A.p(G.jj(d),w,w,w,w,D.aK7,w,w,w)
if(t===0)x=E.aW(u)+" \u0622\u064a\u0629"
else x=t===u?"\u0645\u062d\u0641\u0648\u0638\u0629 \u0643\u0644\u0647\u0627 \u2713":"\u062d\u0641\u0638\u062a "+E.aW(t)+" \u0645\u0646 "+E.aW(u)
r=A.a([q,C.je,A.aV(A.ah(A.a([p,A.p(x,w,w,w,w,A.cE(w,w,t===u?D.c9:C.cr,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),C.B,C.f,C.h),1)],r)
if(s>0&&s<1)r.push(A.p(E.aW(C.d.aA(s*100))+"\u066a",w,w,w,w,D.TC,w,w,w))
r.push(D.aaF)
return new E.cW(A.an(r,C.j,C.f,C.h,0,w),I.yX,C.eN,new B.bbY(this,d),!1,w)}}
B.CR.prototype={
D(d){var x,w,v,u,t,s,r=null,q=this.c
switch(q.f.a){case 2:if(this.d)return C.aJ
return D.awv
case 3:x=q.y
x=A.a([A.p(x==null?"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0634\u063a\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638":B.Hy(x),r,r,r,r,D.vz,r,r,r)],y.p)
w=q.y
if(w!=null)x.push(new B.zu(w,"model load",r))
x.push(C.S)
x.push(new A.x6(C.V4,!1,q.gaV7(),r,r,r,r,C.m,r,!1,r,!0,r,C.oR,r))
return new E.cW(A.ah(x,C.B,C.f,C.h),C.ag,C.ay,r,!1,r)
case 0:case 1:v=q.w
u=q.r
q=v>0
t=q?C.d.co(u/v,0,1):r
s=q&&u<v
q=A.p(s?"\u0628\u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026 "+E.aW(C.d.aA(u/1e6))+" \u0645\u0646 "+E.aW(C.d.aA(v/1e6))+" \u0645\u064a\u062c\u0627":"\u0628\u0646\u062c\u0647\u0651\u0632 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026",r,r,r,r,C.vB,r,r,r)
x=A.ac(8)
w=y.p
x=A.a([q,C.P,A.mH(x,A.Cu(C.dU,C.q,7,s?t:r),C.bt)],w)
if(!this.d)C.b.E(x,A.a([C.S,D.aRV],w))
return new E.cW(A.ah(x,C.B,C.f,C.h),C.ag,C.ay,r,!1,r)}}}
B.Rd.prototype={
D(d){var x=null,w=D.cR.bQ(0.1),v=A.ac(14),u=A.d2(D.cR.bQ(0.4),1)
return A.aA(x,A.an(A.a([D.abu,C.ap,A.aV(A.p(this.c?"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0627\u0644\u062a\u062c\u0648\u064a\u062f.":"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0623\u062d\u0643\u0627\u0645 \u0627\u0644\u062a\u062c\u0648\u064a\u062f. \u0627\u0642\u0631\u0627 \u0639\u0644\u0649 \u0634\u064a\u062e \u0623\u0648 \u0645\u062d\u0641\u0651\u0638 \u0641\u064a \u0645\u0633\u062c\u062f\u0643 \u0643\u0645\u0627\u0646.",x,x,x,x,D.TJ,x,x,x),1)],y.p),C.B,C.f,C.h,0,x),C.m,x,x,new A.at(w,x,u,v,x,x,C.t),x,x,C.ay,C.aS,x,x,x)}}
B.A8.prototype={
M(){return"_Phase."+this.b}}
B.zt.prototype={
V(){return new B.Vc($.HD(),D.jD)}}
B.Vc.prototype={
ghV(){var x=this.e
return x===$?this.e=this.a.d:x},
gxL(){var x,w=this.a,v=w.f
w=w.c
x=this.ghV()
return G.Hw(w,x,v.uN(w,x)).b},
ag(){var x,w=this
w.ar()
x=w.d
x.a8(w.gmM())
x.WN()
x.a.XS(B.aoJ(w.a.c,w.ghV()))},
uE(){if(this.c!=null)this.t(new B.bju())},
l(){var x,w=this,v=w.d
v.S(w.gmM())
x=w.Q
if(x!=null)x.aI()
v=v.a
v.G7()
v.UB()
w.az()},
R2(d){var x,w,v=this
if(v.f===D.pi)v.d.a.UB()
x=v.d.a
x.G7()
w=v.Q
if(w!=null)w.aI()
v.t(new B.bjK(v,d))
x.XS(B.aoJ(v.a.c,d))
w=v.a
if(d<w.e)x.XS(B.aoJ(w.c,d+1))},
JA(d){return this.aC6(d)},
aC6(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$JA=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f===D.ph){u.d.a.G7()
u.t(new B.bjO(u))
x=1
break}t=u.r!=null?D.fV:D.jD
u.t(new B.bjP(u))
s=u.d
r=A.a([B.aoJ(u.a.c,u.ghV())],y.s)
q=d==null?s.b.b:d
x=3
return A.d(s.a.EJ(r,q),$async$JA)
case 3:p=f
if(u.c==null||u.f!==D.ph){x=1
break}u.t(new B.bjQ(u,t,p))
case 1:return A.l(v,w)}})
return A.m($async$JA,w)},
IF(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$IF=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.d
if(l.f!==D.hx){x=1
break}p=l.a
p.G7()
r=B.AC(s.gxL()).length
s.t(new B.bjS(s))
o=s.Q
if(o!=null)o.aI()
s.Q=A.p9(C.fj,new B.bjT(s))
u=4
o=B.bvk(r)
n=A.cZ(0,0,0,350*r,0,0)
x=7
return A.d(p.a_c(l.b.c,o,n,new B.bjU(s),new B.bjV(s)),$async$IF)
case 7:u=2
x=6
break
case 4:u=3
k=t.pop()
l=A.Y(k)
if(l instanceof B.ku){q=l
l=s.Q
if(l!=null)l.aI()
if(s.c!=null)s.t(new B.bjW(s,q))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$IF,w)},
xK(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$xK=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.f!==D.pi){x=1
break}m=s.Q
if(m!=null)m.aI()
s.t(new B.bjY(s))
s.Q=A.p9(C.h8,new B.bjZ(s))
l=new A.z0()
$.AF()
l.qk()
r=l
u=4
m=s.d.a
x=7
return A.d(m.a_f(),$async$xK)
case 7:q=e
if(q.b<0.8){s.aL4("\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0642\u0635\u064a\u0631 \u0623\u0648\u064a \u2014 \u062f\u0648\u0633 \xab\u0633\u0645\u0651\u0639\xbb \u0648\u0627\u0642\u0631\u0627 \u0627\u0644\u0622\u064a\u0629 \u0643\u0644\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb.")
x=1
break}x=8
return A.d(m.ahv(q,B.AC(s.gxL()).length),$async$xK)
case 8:p=e
s.ch=A.cZ(0,0,r.gVV(),0,0,0)
k=A.jK().geq().h(0,"debug")
if(k==="1"){o=B.bGE(m.Dt())
A.rP().$1("[tutor] "+s.a.c+":"+s.ghV()+" audio="+C.d.ap(q.b,1)+"s infer="+p.b+"ms total="+r.gyw()+"ms "+p.gKX()+" text="+p.a)
A.rP().$1("[tutor] stages: "+A.f(o))
s.ax="\u062a\u0633\u062c\u064a\u0644\u0643 "+C.d.ap(p.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.ap(p.b/1000,2)+" \u062b\n"+p.gKX()+"\n"+A.f(o)+"\n"+p.a}s.a47(p.a)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.Y(i)
if(m instanceof B.ku){n=m
m=A.jK().geq().h(0,"debug")
if(m==="1")A.rP().$1("[tutor] check failed: "+A.f(n)+"\n"+s.d.a.Dt())
s.Tt(B.Hy(n),n)}else throw i
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$xK,w)},
Tt(d,e){var x=this,w=x.Q
if(w!=null)w.aI()
if(x.c==null)return
x.t(new B.bjJ(x,d,e))},
aL4(d){return this.Tt(d,null)},
a47(d){var x,w,v,u,t,s=this,r={},q=s.Q
if(q!=null)q.aI()
if(s.c==null)return
x=B.bEU(s.gxL(),d)
r.a=null
if(C.c.aq(x.c).length!==0){q=s.d
w=q.c
v=s.a.c
u=s.ghV()
t=x.gpS()
r.a=w.agB(v,u,q.b.a,t)
q.wp()}s.t(new B.bjL(r,s,x))},
H1(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$H1=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:g=s.d
if(g.f!==D.hx){x=1
break}s.t(new B.bjC(s))
l=s.Q
if(l!=null)l.aI()
s.Q=A.p9(C.h8,new B.bjD(s))
k=new A.z0()
$.AF()
k.qk()
r=k
u=4
l=g.a
x=7
return A.d(l.aZH(B.aoJ(s.a.c,s.ghV()),B.AC(s.gxL()).length),$async$H1)
case 7:q=e
p=B.bGE(l.Dt())
o="\u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a "+C.d.ap(q.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.ap(q.b/1000,2)+" \u062b (\u0627\u0644\u0643\u0644 "+C.d.ap(r.gyw()/1000,2)+" \u062b)\n"+q.gKX()+"\n"+A.f(p)+"\n"+q.a
A.rP().$1("[tutor-debug] "+s.a.c+":"+s.ghV()+" audio="+C.d.ap(q.c,1)+"s infer="+q.b+"ms total="+r.gyw()+"ms "+q.gKX()+" text="+q.a)
A.rP().$1("[tutor-debug] stages: "+A.f(p))
s.ch=A.cZ(0,0,r.gVV(),0,0,0)
s.a47(q.a)
n=s.r
if(n!=null){l=n.gpS()
j=n.b
i=A.ad(j).i("aO<1>")
j=A.a0(new A.aO(j,new B.bjE(),i),i.i("L.E"))
A.rP().$1("[tutor-debug] perfect="+l+" ops="+A.f(j))}s.t(new B.bjF(s,o))
u=2
x=6
break
case 4:u=3
f=t.pop()
l=A.Y(f)
if(l instanceof B.ku){m=l
A.rP().$1("[tutor-debug] failed: "+A.f(m)+"\n"+g.a.Dt())
s.Tt(B.Hy(m),m)}else throw f
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$H1,w)},
gSo(){var x,w,v
for(x=this.a.d,w=this.d;v=this.a,x<=v.e;++x){v=w.c.a.h(0,v.c*1000+x)
if((v==null?$.pv():v).a!==D.dQ)return!1}return!0},
D(d){var x,w=this,v=null,u=w.d,t=u.c.Xs(w.a.c,w.ghV()),s=u.b,r=s.d&&!w.x&&w.f!==D.fV,q=G.jj(w.a.c),p=y.p,o=A.a([A.cM(v,v,v,v,D.AH,v,v,new B.bk3(d),v,v,v,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",v)],p),n=w.auv(),m=A.p("\u0622\u064a\u0629 "+E.aW(w.ghV()),v,v,v,v,R.l8,v,v,v),l=E.aW(w.ghV()-w.a.d+1),k=w.a
s=A.a([A.an(A.a([m,C.bK,A.p("("+l+" \u0645\u0646 "+E.aW(k.e-k.d+1)+")",v,v,v,v,F.ai,v,v,v),C.dr,w.aFl(t,s.a)],p),C.j,C.f,C.h,0,v),C.O],p)
if(r)s.push(w.aB2())
else{m=w.r
if(m!=null){l=w.f
l=l!==D.pi&&l!==D.lm}else l=!1
if(l)s.push(w.asL(m))
else s.push(A.p(w.gxL()+" \ufd3f"+E.aW(w.ghV())+"\ufd3e",v,v,v,v,D.hQ,C.ah,C.aK,v))}s=A.a([new B.CR(u,!0,v),n,C.P,new E.cW(A.ah(s,C.am,C.f,C.h),D.a6c,C.ay,v,!1,v)],p)
n=w.r
if(n!=null&&w.f===D.fV)s.push(w.aMj(n))
if(w.r!=null&&w.f===D.fV&&w.ch!=null){x=C.d.aA(C.e.b7(w.ch.a,1000)/100)
s.push(new A.ab(C.bF,A.p("\u0627\u062a\u0631\u0627\u062c\u0639 \u0641\u064a "+(E.aW(C.e.b7(x,10))+"\u066b"+E.aW(C.e.ae(x,10)))+" \u062b",v,v,v,v,F.ai,C.ah,v,v),v))}n=w.as
if(n!=null)s.push(new A.ab(C.ay,A.p(n,v,v,v,v,D.vz,v,v,v),v))
if(w.as!=null&&w.at!=null){n=w.at
n.toString
s.push(new B.zu(n,"check "+w.a.c+":"+w.ghV(),v))}s.push(w.atb())
s.push(C.as)
s.push(A.r4(C.q,C.K,v,new B.bk4(w),D.aQN,D.aSS,u.b.d))
n=w.a
if(n.e>n.d){n=w.gSo()
s.push(new E.cW(A.an(A.a([D.a9V,C.b0,A.aV(A.ah(A.a([D.aTA,A.p(w.gSo()?"\u062d\u0641\u0638\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u0633\u0645\u0651\u0639\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636 \u0645\u0646 \u063a\u064a\u0631 \u0645\u0627 \u062a\u0634\u0648\u0641\u0647\u0627":"\u0644\u0645\u0627 \u062a\u062e\u0644\u0651\u0635 \u0627\u0644\u0622\u064a\u0627\u062a \u0648\u0627\u062d\u062f\u0629 \u0648\u0627\u062d\u062f\u0629\u060c \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0644\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636",v,v,v,v,F.ai,v,v,v)],p),C.B,C.f,C.h),1),Q.km],p),C.j,C.f,C.h,0,v),C.ag,C.ay,new B.bk5(w,d),n,v))}n=A.jK().geq().h(0,"debug")
if(n==="1"){p=A.a([C.P,A.fT(D.aaA,D.aSy,u.f===D.hx&&w.f!==D.lm?w.gatK():v,v)],p)
n=w.ax
if(n!=null)p.push(new A.ab(C.io,A.O_(n,F.ai,v),v))
n=u.x
if(n!=null){m=n.a
l=n.b
n=n.gll()
u=u.x
p.push(A.p("model: "+m+" "+l+" \u2014 "+n+", isolated "+u.r+", load "+u.c+" ms (warm-up "+u.w+" ms)",v,v,v,v,F.ai,v,v,v))}p.push(A.bZ(D.aTc,v,v,new B.bk6(w,d),v,v))
C.b.E(s,p)}s.push(C.P)
s.push(D.wa)
return L.ve(o,s,q)},
auv(){var x=this.a,w=x.e-x.d+1
if(w===1)return C.aJ
return A.bB(A.qm(new B.bjH(this),w,null,C.aA,new B.bjI()),36,null)},
aFl(d,e){var x,w,v,u,t,s,r,q=null
if(d.a===D.dQ)return D.aFI
x=d.b
w=E.aW(x)
v=E.aW(e)
u=A.a([],y.p)
for(t=0;t<e;++t){s=t<x
r=s?C.cS:D.a9t
u.push(new A.ab(D.a6L,A.c8(r,s?D.c9:C.fg,q,16),q))}return A.btB(A.an(u,C.j,C.f,C.a_,0,q),q,"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637 \u0648\u0631\u0627 \u0628\u0639\u0636: "+w+" \u0645\u0646 "+v,q,q)},
aB2(){var x=null
return A.ds(!1,A.ac(12),!0,A.aA(x,D.a2Q,C.m,x,x,new A.at(I.qf,x,x,A.ac(12),x,x,C.t),x,x,x,D.a5W,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bjN(this),x,x,x,x,x,x,x)},
asL(d){var x,w,v,u,t,s=null,r=A.a([],y.R)
for(x=d.a,w=0;w<x.length;++w){v=J.b6(d.gG6(),w)
A:{if(D.fP===v){u=D.hQ.cq(D.c9)
break A}if(D.p4===v){u=D.hQ.Vc(D.cR,C.fH,D.cR)
break A}if(D.p5===v){u=D.hQ.Vc(D.dz,C.fH,D.dz)
break A}u=D.hQ.Vc(C.fg,C.oG,C.cq)
break A}t=x[w]
r.push(new A.fj(t.a,s,s,C.bl,s,s,s,s,s,s,u))
r.push(I.vt)}x=E.aW(this.ghV())
r.push(A.dM(s,s,s,s,s,s,s,s,s,D.hQ.cq(C.a8),"\ufd3f"+x+"\ufd3e"))
return A.a9o(A.dM(r,s,s,s,s,s,s,s,s,s,s),s,C.ah,C.aK)},
aMj(d){var x,w,v,u,t,s,r=this.w
if(C.c.aq(d.c).length===0)return D.b1B
if(d.gpS()){x=r==null
if((x?null:r.a)===D.dQ&&r.b===this.d.b.a)x="\u0627\u0644\u0622\u064a\u0629 \u062f\u064a \u0627\u062a\u062d\u0641\u0638\u062a! \u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0627\u0644\u0644\u064a \u0628\u0639\u062f\u0647\u0627."
else x=!x&&r.a!==D.dQ?"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637. \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0645\u0627\u0646 "+E.aW(this.d.b.a-r.b)+" \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629.":"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637."
return new B.zG(D.c9,C.cS,"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713",x,null)}x=d.gG6()
w=J.d0(x)
v=w.hO(x,new B.bk_()).gK(0)
u=w.hO(x,new B.bk0()).gK(0)
t=w.hO(x,new B.bk1()).gK(0)
x=A.a([],y.s)
if(u>0)x.push(E.aW(u)+" \u063a\u0644\u0637")
if(v>0)x.push(E.aW(v)+" \u0631\u0627\u062c\u0639\u0647\u0627")
if(t>0)x.push(E.aW(t)+" \u0646\u0627\u0642\u0635\u0629")
if(d.gDJ().length!==0)x.push(E.aW(d.gDJ().length)+" \u0632\u064a\u0627\u062f\u0629")
w=u+t>0?D.dz:D.cR
x=C.b.aM(x," \u2022 ")
s=d.gDJ().length!==0?"\n\u0632\u064a\u0627\u062f\u0629: "+C.b.aM(d.gDJ(),"\u060c "):""
return new B.zG(w,C.kl,"\u0642\u0631\u0628\u062a! \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0644\u0648\u0651\u0646\u0629",x+"\n\u0627\u0644\u0623\u0635\u0641\u0631: \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u062f\u064a \u2014 \u0627\u0644\u0623\u062d\u0645\u0631: \u063a\u0644\u0637 \u2014 \u0627\u0644\u0631\u0645\u0627\u062f\u064a \u0627\u0644\u0645\u0634\u0637\u0648\u0628: \u0646\u0633\u064a\u062a\u0647\u0627."+s,null)},
atb(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d,g=h.f===D.hx,f=j.f
switch(f.a){case 2:if(j.z==null)x=0
else{f=Date.now()
w=j.z
w.toString
x=C.e.b7(new A.bl(f,0,!1).dR(w).a,1e6)}v=C.e.b7(B.bvk(B.AC(j.gxL()).length).a,1e6)
f=j.gaL8()
w=96+26*j.y
u=D.dz.bQ(0.25)
w=A.lY(i,A.bwY(C.W,A.aA(i,D.aaH,C.m,i,i,D.Xk,i,84,i,i,i,i,84),i,new A.at(u,i,i,i,i,i,C.cp),C.yM,i,w,w),C.r,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,f,i,i,i,i,i,i)
u=A.p("\u0628\u0646\u0633\u062c\u0651\u0644\u2026 "+B.bum(x)+" / "+B.bum(v),i,i,i,i,K.l6,i,i,i)
return A.ah(A.a([w,C.P,u,A.p(h.b.c?"\u0644\u0645\u0627 \u062a\u062e\u0644\u0635 \u0627\u0633\u0643\u062a \u062b\u0627\u0646\u064a\u0629 \u0623\u0648 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb":"\u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb \u0644\u0645\u0627 \u062a\u062e\u0644\u0635",i,i,i,i,F.ai,i,i,i),A.bZ(D.aVX,i,i,f,i,i)],y.p),C.j,C.f,C.h)
case 3:t=C.d.dS((Date.now()-j.ay)/1000)
if(t<8)h="\u062b\u0648\u0627\u0646\u064a \u0648\u0646\u0642\u0648\u0644\u0643"
else h=t<25?"\u0644\u0633\u0647 \u0634\u063a\u0627\u0644\u064a\u0646 \u2014 \u0627\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0628\u062a\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0643\u062a\u0631 ("+E.aW(t)+" \u062b)":"\u0648\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0637\u0648\u0644 \u0645\u0646 \u0627\u0644\u0639\u0627\u062f\u064a \u2014 \u0644\u0648 \u0639\u0644\u0651\u0642 \u0647\u0646\u0639\u064a\u062f \u062a\u0634\u063a\u064a\u0644\u0647 \u0644\u0648\u062d\u062f\u0646\u0627 ("+E.aW(t)+" \u062b)"
return new A.ab(D.a5T,A.ah(A.a([C.q3,C.as,D.aSc,A.p(h,i,i,i,i,F.ai,C.ah,i,i)],y.p),C.j,C.f,C.h),i)
default:s=f===D.ph
r=j.r
f=r==null
w=!f
q=w&&r.gpS()
u=A.c8(s?D.t5:K.An,i,i,i)
if(s)p="\u0648\u0642\u0651\u0641"
else p=w&&!q?"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u062d":"\u0627\u0633\u0645\u0639"
p=A.p(p,i,i,i,i,i,i,i,i)
o=A.k8(i,i,D.aI2,i,i)
u=A.aV(new A.x6(C.V4,!0,new B.bjv(j,r,q),i,i,i,o,C.m,i,!1,i,!0,i,new A.RG(p,u,o,i,i),i),1)
p=A.a([],y.n)
for(o=y.c,n=0;n<3;++n){m=D.Bm[n]
p.push(new A.eg(m,i,A.p("\xd7"+E.aW(m),i,i,i,i,i,i,i,i),o))}o=y.S
l=y.b
k=y.p
o=A.an(A.a([u,C.ap,A.uU(new B.bjw(j),p,A.cO([h.b.b],o),!1,A.jm(i,i,i,new A.bc(new B.bjx(),l),i,i,i,i,new A.bc(new B.bjy(),l),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,C.du),o)],k),C.j,C.f,C.h,0,i)
h=g&&!s?j.gaGD():i
u=A.c8(f?D.mz:C.kl,i,i,i)
if(g)f=f?"\u0633\u0645\u0651\u0639":"\u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a"
else f="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
f=A.p(f,i,i,i,i,C.cw,i,i,i)
p=q?N.h4:C.q
h=A.a([o,C.O,A.k7(u,f,h,A.k8(p,q?C.i:C.a7,D.ow,i,i))],k)
if(w&&j.ghV()<j.a.e)C.b.E(h,A.a([C.P,q?A.k7(D.aci,D.aVf,new B.bjz(j),A.k8(D.c9,C.a7,D.ow,i,i)):A.bZ(D.aQR,i,i,new B.bjA(j),i,i)],k))
if(w){f=j.ghV()
w=j.a
u=w.e
f=f===u&&q&&u>w.d}else f=!1
if(f)h.push(new A.ab(C.qQ,A.p(j.gSo()?"\u062e\u0644\u0651\u0635\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u062c\u0631\u0651\u0628 \xab\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636\xbb \u062a\u062d\u062a.":"\u062e\u0644\u0635\u062a \u0622\u062e\u0631 \u0622\u064a\u0629 \u2014 \u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0644\u0633\u0647 (\u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0635\u0641\u0631\u0627 \u0641\u0648\u0642).",i,i,i,i,D.TQ,C.ah,i,i),i))
return A.ah(h,C.am,C.f,C.h)}}}
B.zG.prototype={
D(d){var x=this,w=null,v=x.c,u=v.bQ(0.12),t=A.ac(14),s=A.d2(v.bQ(0.5),1),r=y.p
return A.aA(w,A.an(A.a([A.c8(x.d,v,w,w),C.ap,A.aV(A.ah(A.a([A.p(x.e,w,w,w,w,A.cE(w,w,v,w,w,w,w,w,w,w,w,15,w,w,C.a2,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),C.uY,A.p(x.f,w,w,w,w,D.TJ,w,w,w)],r),C.B,C.f,C.h),1)],r),C.B,C.f,C.h,0,w),C.m,w,w,new A.at(u,w,s,t,w,w,C.t),w,w,C.ay,C.aS,w,w,w)}}
B.zs.prototype={
V(){var x=y.S
return new B.Vb($.HD(),A.x(x,y.B),A.aC(x),A.x(x,y.N),A.dB(null,y.H))}}
B.Vb.prototype={
ag(){this.ar()
this.d.a8(this.gmM())},
uE(){if(this.c!=null)this.t(new B.bjd())},
l(){var x,w=this,v=w.d
v.S(w.gmM())
x=w.y
if(x!=null)x.aI()
v.a.UB()
w.az()},
CD(d){return this.aJN(d)},
aJN(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m
var $async$CD=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.t(new B.bjm(t,d))
r=t.y
if(r!=null)r.aI()
t.y=A.p9(C.fj,new B.bjn(t))
v=3
r=t.d
q=t.a
p=q.f
q=q.c
q=B.bvk(B.AC(G.Hw(q,d,p.uN(q,d)).b).length)
p=t.a
o=p.f
p=p.c
p=A.cZ(0,0,0,350*B.AC(G.Hw(p,d,o.uN(p,d)).b).length,0,0)
x=6
return A.d(r.a.a_c(r.b.c,q,p,new B.bjo(t,d),new B.bjp(t)),$async$CD)
case 6:v=1
x=5
break
case 3:v=2
m=u.pop()
r=A.Y(m)
if(r instanceof B.ku){s=r
r=t.y
if(r!=null)r.aI()
if(t.c!=null)t.t(new B.bjq(t,s))}else throw m
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$CD,w)},
Ba(d,e){return this.avv(d,e)},
avv(d,e){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Ba=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.e!==d){x=1
break}o=s.y
if(o!=null)o.aI()
s.t(new B.bjh(s,d))
n=d<s.a.e?d+1:null
r=s.d.a.a_f()
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
if(o instanceof B.ku){p=o
s.t(new B.bji(s,d,p))}else throw l
x=6
break
case 3:x=2
break
case 6:if(q!=null){o=q
s.at=s.at.bA(new B.bjj(s,o,d),y.H)}case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ba,w)},
gaDo(){var x,w,v,u,t=this
for(x=t.a.d,w=t.f,v=t.r,u=t.w;x<=t.a.e;++x)if(!w.aw(x)&&!v.m(0,x)&&!u.aw(x)&&x!==t.e)return x
return null},
aHf(){this.t(new B.bjk(this))},
D(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q.f===D.hx,o=s.e,n=s.gaDo(),m=s.f,l=m.a,k=s.w.a,j=s.a,i=l+k===j.e-j.d+1&&s.r.a===0&&o==null
l=A.w(m).i("c5<2>")
x=new A.aO(new A.c5(m,l),new B.bjr(),l.i("aO<L.E>")).gK(0)
l=G.jj(s.a.c)
m=y.p
q=A.a([new B.CR(q,!0,r),A.p("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 "+E.aW(s.a.d)+" \u0644\u062d\u062f "+E.aW(s.a.e)+" \u0645\u0646 \u062d\u0641\u0638\u0643\u060c \u0622\u064a\u0629 \u0622\u064a\u0629: \u0628\u0639\u062f \u0643\u0644 \u0622\u064a\u0629 \u062f\u0648\u0633 \xab\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629\xbb \u0648\u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0637\u0648\u0644 \u2014 \u0647\u0646\u0635\u062d\u0651\u062d \u0648\u0625\u0646\u062a \u0628\u062a\u0642\u0631\u0627.",r,r,r,r,F.ai,r,r,r),C.O],m)
for(w=s.a.d;w<=s.a.e;++w)q.push(s.aL6(w))
q.push(C.P)
k=s.Q
if(k!=null)q.push(A.p(k,r,r,r,r,D.vz,r,r,r))
k=s.as
if(k!=null){j=s.a
q.push(new B.zu(k,"review "+j.c+":"+j.d+"-"+j.e,r))}k=o==null
if(!k){j=E.aW(o)
if(s.z==null)v=0
else{v=Date.now()
u=s.z
u.toString
u=C.e.b7(new A.bl(v,0,!1).dR(u).a,1e6)
v=u}v=A.p("\u0628\u0646\u0633\u062c\u0651\u0644 \u0622\u064a\u0629 "+j+"\u2026 "+B.bum(v),r,r,r,r,K.l6,C.ah,r,r)
j=A.mH(A.ac(6),A.Cu(C.dU,D.dz,6,s.x),C.bt)
u=o<s.a.e
t=A.c8(u?P.Aj:D.t5,r,r,r)
C.b.E(q,A.a([v,C.S,j,C.O,A.k7(t,A.p(u?"\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629":"\u062e\u0644\u0635\u062a",r,r,r,r,C.cw,r,r,r),new B.bjs(s,o),A.k8(C.q,C.a7,D.ow,r,r))],m))}else if(n!=null){j=p?new B.bjt(s,n):r
if(!p)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
else v=n===s.a.d?"\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0633\u0645\u064a\u0639":"\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+E.aW(n)
q.push(A.k7(D.abg,A.p(v,r,r,r,r,C.cw,r,r,r),j,A.k8(C.q,C.a7,D.ow,r,r)))}if(s.r.a!==0&&k)q.push(D.awI)
if(i){k=s.a
k=x===k.e-k.d+1
j=k?D.c9:D.cR
v=k?C.mv:C.kl
if(k)k="\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713 \u0633\u0645\u0651\u0639\u062a\u0647\u0645 \u0643\u0644\u0647\u0645 \u0635\u062d"
else{k=E.aW(x)
u=s.a
u=k+" \u0645\u0646 "+E.aW(u.e-u.d+1)+" \u0622\u064a\u0627\u062a \u0645\u0638\u0628\u0648\u0637\u0629"
k=u}u=s.a
u=x===u.e-u.d+1?"\u0631\u0628\u0646\u0627 \u064a\u062b\u0628\u0651\u062a\u0647\u0627 \u0641\u064a \u0642\u0644\u0628\u0643.":"\u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0641\u064a\u0647\u0627 \u0623\u0644\u0648\u0627\u0646 \u0648\u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a."
C.b.E(q,A.a([new B.zG(j,v,k,u,r),A.fT(D.acd,D.aVA,s.gaHe(),r)],m))}q.push(C.O)
q.push(D.wa)
return L.ve(r,q,"\u0633\u0645\u0651\u0639 "+l)},
aL6(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.f.h(0,d),i=l.w.h(0,d)
if(l.e===d)x=D.aaY
else if(l.r.m(0,d))x=O.ox
else if(i!=null)x=D.ab6
else if(j!=null){w=j.gpS()?C.cS:D.a8X
x=A.c8(w,j.gpS()?D.c9:D.cR,k,k)}else x=D.aai
w=y.p
v=A.a([A.an(A.a([A.p("\u0622\u064a\u0629 "+E.aW(d),k,k,k,k,D.aNL,k,k,k),C.dr,x],w),C.j,C.f,C.h,0,k)],w)
if(i!=null)v.push(A.p(i,k,k,k,k,D.TF,k,k,k))
if(j!=null&&!j.gpS()){u=y.R
t=A.a([],u)
for(s=j.a,r=0;r<s.length;++r){q=s[r]
p=j.gG6()
o=J.bs(p)
n=o.h(p,r)
A:{if(D.fP===n){m=D.c9
break A}if(D.p4===n){m=D.cR
break A}if(D.p5===n){m=D.dz
break A}m=C.fg
break A}m=D.hQ.aQ_(m,o.h(p,r)===D.p6?C.oG:k,22)
C.b.E(t,A.a([new A.fj(q.a,k,k,C.bl,k,k,k,k,k,k,m),I.vt],u))}w=A.a([C.aT,A.a9o(A.dM(t,k,k,k,k,k,k,k,k,k,k),k,C.ah,C.aK)],w)
if(C.c.aq(j.c).length===0)w.push(D.aTh)
C.b.E(v,w)}return new E.cW(A.ah(v,C.am,C.f,C.h),C.eO,C.eN,k,!1,k)}}
B.zr.prototype={
V(){return new B.Va($.HD())}}
B.Va.prototype={
ag(){this.ar()
var x=this.d
x.a8(this.gmM())
x.WN()},
uE(){if(this.c!=null)this.t(new B.bj4())},
l(){this.d.S(this.gmM())
this.az()},
D(d){var x,w,v,u,t,s=this,r=null,q=s.d.c,p=q.gakA(),o=A.a([],y.t)
for(x=78;x<=114;++x)o.push(x)
w=C.b.n_(o,0,new B.bjb(q))
v=C.b.n_(o,0,new B.bjc())
o=y.p
o=A.a([A.an(A.a([A.aV(s.Pg(E.aW(q.gafH()),"\u0622\u064a\u0629 \u0645\u062d\u0641\u0648\u0638\u0629"),1),C.ap,A.aV(s.Pg(E.aW(q.acr()),"\u064a\u0648\u0645 \u0648\u0631\u0627 \u0628\u0639\u0636"),1),C.ap,A.aV(s.Pg(E.aW(q.e),"\u0623\u0637\u0648\u0644 \u0633\u0644\u0633\u0644\u0629"),1)],o),C.j,C.f,C.h,0,r),C.O,new E.cW(A.ah(A.a([A.p("\u062c\u0632\u0621 \u0639\u0645\u0651: "+E.aW(C.d.aA(w*100/v))+"\u066a",r,r,r,r,F.b_,r,r,r),C.S,A.mH(A.ac(6),A.Cu(C.dU,D.c9,8,w/v),C.bt),C.aT,A.p(E.aW(w)+" \u0645\u0646 "+E.aW(v)+" \u0622\u064a\u0629",r,r,r,r,F.ai,r,r,r)],o),C.B,C.f,C.h),C.ag,C.ay,r,!1,r)],o)
if(p.length===0)o.push(D.awP)
for(u=p.length,t=0;t<p.length;p.length===u||(0,A.A)(p),++t)o.push(s.aL9(p[t]))
o.push(C.P)
u=$.aa().b
u===$&&A.b()
u=u.gbR().e.a
o.push(A.p((u==null?r:u.r)!=null?"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643 \u0648\u064a\u0638\u0647\u0631 \u0639\u0644\u0649 \u0623\u064a \u062c\u0647\u0627\u0632 \u062a\u062f\u062e\u0644 \u0645\u0646\u0647.":"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647. \u0633\u062c\u0651\u0644 \u062f\u062e\u0648\u0644 \u0639\u0634\u0627\u0646 \u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643.",r,r,r,r,F.ai,r,r,r))
return L.ve(r,o,"\u062a\u0642\u062f\u0651\u0645\u064a \u0641\u064a \u0627\u0644\u062d\u0641\u0638")},
Pg(d,e){var x=null
return new E.cW(A.ah(A.a([A.p(d,x,x,x,x,D.aNx,x,x,x),A.p(e,x,x,x,x,C.TU,C.ah,x,x)],y.p),C.j,C.f,C.h),C.ag,C.K,x,!1,x)},
aL9(d){var x=null,w=this.d.c,v=H.bW[d-1].a[1],u=w.Xj(d),t=w.aUR(d),s=y.p,r=A.an(A.a([A.aV(A.p(G.jj(d),x,x,x,x,F.b_,x,x,x),1),A.p(E.aW(C.d.aA(u*100/v))+"\u066a",x,x,x,x,D.aOo,x,x,x)],s),C.j,C.f,C.h,0,x),q=A.mH(A.ac(6),A.Cu(C.dU,D.c9,7,u/v),C.bt),p=E.aW(u),o=E.aW(v),n=t>0?" \u2022 \u0628\u062a\u0631\u0627\u062c\u0639 "+E.aW(t):""
return new E.cW(A.ah(A.a([r,C.S,q,C.aT,A.p("\u0645\u062d\u0641\u0648\u0638 "+p+" \u0645\u0646 "+o+n,x,x,x,x,F.ai,x,x,x)],s),C.B,C.f,C.h),C.ag,C.ay,new B.bja(this,d),!1,x)},
H4(d){return this.atZ(d)},
atZ(d){var x=0,w=A.n(y.H),v=this,u,t
var $async$H4=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=H.bW[d-1].a[1]
t=v.c
t.toString
x=2
return A.d(A.h2(M.dg,new B.bj9(v,d,u),t,!0,null,null,!1,y.H),$async$H4)
case 2:return A.l(null,w)}})
return A.m($async$H4,w)}}
B.a9K.prototype={
Jz(d,e){var x=null,w=A.EI(x,x,x,x,x,x,x,x,x,x,x,D.aHM,C.K,x,x,x,x,C.nQ,x,x)
return A.bZ(A.p(d,x,x,x,x,C.jo,x,x,x),x,x,new B.aRM(e),x,w)},
D(d){var x=this,w=y.p
return new E.cW(A.ah(A.a([D.aV6,C.S,D.aVW,A.f2(A.a([x.Jz("tarteel-ai/whisper-base-ar-quran","https://huggingface.co/tarteel-ai/whisper-base-ar-quran"),x.Jz("iqbalaesthetic/Basira","https://huggingface.co/iqbalaesthetic/Basira")],w),0,12),D.aQE,x.Jz("tanzil.net","https://tanzil.net"),D.aWK,x.Jz("everyayah.com","https://everyayah.com")],w),C.B,C.f,C.h),C.ag,C.ay,null,!1,null)}}
B.zu.prototype={
V(){return new B.Vd()}}
B.Vd.prototype={
ga7b(){var x=this.a
return B.c1U(x.c,x.d,$.bvU().Dt())},
JB(){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k
var $async$JB=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.t(new B.bk7(s))
v=3
r=A.bGj()
n=s.ga7b()
m=y.N
q=A.x(m,m)
J.fE(q,"app","masjid")
J.fE(q,"path","tutor \u203a "+s.a.d)
if(r!=null){m=r.length>160?C.c.X(r,0,160):r
J.fE(q,"ua",m)}x=6
return A.d(A.a0N(n,null,C.zu,q),$async$JB)
case 6:if(s.c!=null)s.t(new B.bk8(s))
t.push(5)
x=4
break
case 3:v=2
k=u.pop()
p=A.Y(k)
o=p instanceof A.d4?p.a:"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0628\u0639\u062a \u2014 \u0627\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0646\u062a \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
if(s.c!=null)s.t(new B.bk9(s,o))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.t(new B.bka(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$JB,w)},
D(d){var x,w,v,u=this,t=null,s=y.p
s=A.a([A.ds(!1,t,!0,new A.ab(C.yW,A.an(A.a([A.c8(u.d?C.rV:C.mw,C.cq,t,18),C.hJ,D.aWi],s),C.j,C.f,C.h,0,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,new B.bkc(u),t,t,t,t,t,t,t)],s)
if(u.d){x=A.ac(8)
s.push(A.aA(t,A.O_(u.ga7b(),D.aKx,C.o),C.m,t,t,new A.at(I.qf,t,t,x,t,t,C.t),t,t,D.a6_,C.eo,t,t,1/0))}if(u.f)s.push(D.aQK)
else{x=A.EI(t,t,t,t,t,t,t,t,t,t,t,D.aHN,C.K,t,t,t,t,C.nQ,t,t)
w=u.e
v=w?t:u.gaL7()
s.push(A.i9(w?D.aIc:D.abW,D.aUz,v,x))}x=u.r
if(x!=null)s.push(A.p(x,t,t,t,t,D.TF,t,t,t))
return new A.ab(C.ay,A.ah(s,C.B,C.f,C.h),t)}}
var z=a.updateTypes(["a8<~>()","~()","B(mk)","a8<F0>()","a8<EZ>()","a8<F_>()","P<mk>()","B(pG)","bi(ni)","zt(z)","zr(z)","B(lM)","zs(z)","B(DG)"])
B.aTW.prototype={
$1(d){var x,w
if(d.m(0,C.C)){x=this.a
if(x.fy===D.jv)x=null
else{x=x.goB().k3
x=A.aG(31,x.B()>>>16&255,x.B()>>>8&255,x.B()&255)}return x}x=this.a
if(x.fy===D.jv)x=null
else{x=x.goB()
w=x.p3
x=w==null?x.k2:w}return x},
$S:27}
B.aRN.prototype={
$0(){var x=0,w=A.n(y.m),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=A.a9(A.cm(b.G.document).baseURI)
q=A.bV(r,0,null).W("quran_tutor/tutor.js?v=3").j(0)
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
m=B.bSV("network",A.f(o))
throw A.o(m)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:299}
B.aRQ.prototype={
$1(d){var x=null
return A.bm1(A.co(d,"persist",x,x,x,x))},
$S:892}
B.aRP.prototype={
$0(){var x=0,w=A.n(y.C),v,u=this,t,s,r,q,p,o,n,m,l
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.a
n=A
m=A
l=A
x=4
return A.d(q.oM(),$async$$0)
case 4:x=3
return A.d(n.e6(m.cm(l.co(e,"loadModel",A.bmy(new B.aRO(u.b)),u.c,u.d,null)),y.m),$async$$0)
case 3:p=e
o=A.X(p.device)
if(o==null)o=null
if(o==null)o=""
t=A.X(p.dtype)
if(t==null)t=null
if(t==null)t=""
s=q.oL(p,"ms")
r=q.mA(p,"cached")
A.X(p.backend)
v=new B.EZ(o,t,s,r,q.oL(p,"threads"),q.mA(p,"isolated"),q.oL(p,"warmMs"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+4}
B.aRO.prototype={
$2(d,e){this.a.$2(C.d.aA(d),C.d.aA(e))},
$S:893}
B.aRU.prototype={
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
u.onLevel=A.eT(new B.aRS(v.e))
u.onAutoStop=A.eT(new B.aRT(v.f))
x=5
return A.d(A.e6(A.cm(A.co(s,"startRecording",u,null,null,null)),y.O),$async$$0)
case 5:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.aRS.prototype={
$1(d){return this.a.$1(d)},
$S:52}
B.aRT.prototype={
$1(d){return this.a.$1(d)},
$S:12}
B.aRV.prototype={
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
return A.d(q.e6(p.cm(o.co(e,"stopRecording",null,null,null,null)),y.m),$async$$0)
case 3:r=e
v=new B.F_(r,A.d_(r.seconds))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+5}
B.aRX.prototype={
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
return A.d(q.e6(p.cm(o.co(e,"transcribe",t.audio,t.rate,s.a6b(u.c),null)),y.m),$async$$0)
case 3:v=r.a9b(e)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+3}
B.aRW.prototype={
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
return A.d(r.e6(q.cm(p.co(e,"transcribeUrl",u.b,t.a6b(u.c),null,null)),y.m),$async$$0)
case 3:v=s.a9b(e)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:z+3}
B.aRR.prototype={
$1(d){return d},
$S:25}
B.aJk.prototype={
$0(){var x,w,v,u,t=this.a,s=A.c2(t.a.length,D.p6,!1,y.G)
for(t=t.b,x=t.length,w=0;w<x;++w){v=t[w]
u=v.a
if(u!=null)s[u]=v.d}return s},
$S:z+6}
B.aJj.prototype={
$1(d){return d===D.fP},
$S:z+2}
B.bmt.prototype={
$2(d,e){var x,w=e.length
if(d.length<w)return!1
for(x=0;x<w;++x)if(B.bqI(e[x],d[x])<0.75)return!1
return!0},
$S:894}
B.bnQ.prototype={
$1(d){return d.length!==0},
$S:11}
B.aS_.prototype={
$1(d){return d.a===D.dQ},
$S:z+7}
B.aS0.prototype={
$1(d){return C.e.b7(d,1000)},
$S:72}
B.aRY.prototype={
$1(d){return C.d.bS(d)},
$S:895}
B.aS1.prototype={
$0(){var x=0,w=A.n(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$$0=A.j(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d(A.iR("mt.tutor.settings"),$async$$0)
case 7:r=a3
if(r!=null){k=y.P.a(C.Z.f2(r,null))
j=A.bR(k.h(0,"n"))
j=j==null?null:C.d.bS(j)
j=C.e.co(j==null?2:j,1,5)
i=C.b.m(D.Bm,k.h(0,"r"))?A.el(k.h(0,"r")):1
h=A.hz(k.h(0,"auto"))
g=A.hz(k.h(0,"hide"))
k=A.hz(k.h(0,"in"))
s.a.b=new B.PD(j,i,h!==!1,g===!0,k===!0)}u=2
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
if(q!=null)s.a.c=B.btE(y.P.a(C.Z.f2(q,null)))
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
if(p!=null){o=y.P.a(C.Z.f2(p,null))
n=C.d.bS(A.dv(J.b6(o,"s")))
m=C.d.bS(A.dv(J.b6(o,"f")))
l=C.d.bS(A.dv(J.b6(o,"t")))
if(B.bGJ(n,m)&&B.bGJ(n,l)&&m<=l)s.a.z=new A.bn(n,m,l)}u=2
x=16
break
case 14:u=13
a0=t.pop()
x=16
break
case 13:x=2
break
case 16:k=s.a
if(k.b.e&&k.a.a_1()){k.a.adf()
x=1
break}a1=k
x=18
return A.d(k.a.Gq(),$async$$0)
case 18:a1.d=a3
k.e=!0
k.a_()
if(k.b.e)k.z9()
k.tX()
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:90}
B.aS2.prototype={
$2(d,e){var x=this.a
x.r=d
x.w=e
x.a_()},
$S:896}
B.aS3.prototype={
$2(d,e){return C.e.b7(A.eK(A.f(d),null,null),1000)===this.a},
$S:897}
B.bc3.prototype={
$1(d){var x=0,w=A.n(y.a),v=this,u,t
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.d(u.d.a.Ai(),$async$$1)
case 2:t=f
if(u.c!=null)u.t(new B.bc2(u,t))
return A.l(null,w)}})
return A.m($async$$1,w)},
$S:898}
B.bc2.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bc4.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bc1(x,d))},
$S:z+8}
B.bc1.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bc5.prototype={
$1(d){},
$S:22}
B.bbQ.prototype={
$0(){},
$S:0}
B.bbW.prototype={
$1(d){var x=this.c,w=this.a.w
w.toString
return new B.zt(this.b,x.a,x.b,w,null)},
$S:z+9}
B.bbX.prototype={
$0(){},
$S:0}
B.bc_.prototype={
$0(){var x=y.z
return A.ao(this.a,!1).cm(A.cl(new B.bbZ(),null,x),x)},
$S:0}
B.bbZ.prototype={
$1(d){return D.aXm},
$S:z+10}
B.bc0.prototype={
$0(){return B.bGw(this.a)},
$S:0}
B.bbT.prototype={
$0(){var x=this.b
return this.a.uF(x.a,x.b,x.c)},
$S:0}
B.bbU.prototype={
$1(d){return this.a.t(new B.bbS())},
$S:12}
B.bbS.prototype={
$0(){},
$S:0}
B.bbV.prototype={
$0(){var x=this.a
return x.t(new B.bbR(x))},
$S:0}
B.bbR.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.bbY.prototype={
$0(){return this.a.aL5(this.b)},
$S:0}
B.bpH.prototype={
$1(d){return new A.j9(new B.bpE(this.a,this.b,this.c),null)},
$S:55}
B.bpE.prototype={
$2(d,e){var x,w,v=null,u=this.b,t=new B.bpG(u,e),s=this.a,r=new B.bpF(s,e),q=A.p(G.jj(this.c),v,v,v,v,C.oL,v,v,v),p=A.p("\u0647\u062a\u0633\u0645\u0651\u0639 \u0623\u0646\u0647\u064a \u0622\u064a\u0627\u062a\u061f ("+E.aW(u)+" \u0622\u064a\u0629)",v,v,v,v,F.ai,v,v,v),o=y.p,n=A.a([],o)
if(u<=30)n.push(r.$3("\u0627\u0644\u0633\u0648\u0631\u0629 \u0643\u0644\u0647\u0627",1,u))
x=u<5
w=E.aW(x?u:5)
x=x?u:5
n.push(r.$3("\u0623\u0648\u0644 "+w+" \u0622\u064a\u0627\u062a",1,x))
x=s.a
if(x>1){x=E.aW(x)
w=s.a
n.push(r.$3("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+x,w,C.e.co(w+4,1,u)))}u=A.a([q,C.aT,p,C.O,A.f2(n,6,8),C.P,A.an(A.a([t.$3("\u0645\u0646",s.b,new B.bpz(s)),D.aI8,t.$3("\u0644\u062d\u062f",s.c,new B.bpA(s))],o),C.j,C.f,C.h,0,v)],o)
if(s.c-s.b>=10)u.push(D.awL)
u.push(C.aN)
u.push(A.k6(D.aRR,new B.bpB(s,d),A.k8(C.q,C.a7,D.aI_,v,v)))
return A.dU(!0,new A.ab(C.z1,A.ah(u,C.am,C.f,C.a_),v),C.K,!0)},
$S:324}
B.bpG.prototype={
$3(d,e,f){var x,w,v,u=null,t=A.p(d,u,u,u,u,C.hT,u,u,u),s=A.a([],y.I)
for(x=this.a,w=y.r,v=1;v<=x;++v)s.push(new A.cY(v,A.p("\u0622\u064a\u0629 "+E.aW(v),u,u,u,u,u,u,u,u),C.aG,u,w))
return A.aV(A.ah(A.a([t,T.BF(M.dg,!0,s,320,new B.bpD(this.b,f),D.aOG,e,y.S)],y.p),C.B,C.f,C.h),1)},
$S:900}
B.bpD.prototype={
$1(d){return d==null?null:this.a.$1(new B.bpC(this.b,d))},
$S:48}
B.bpC.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bpF.prototype={
$3(d,e,f){var x=null
return new B.Xg(A.p(d,x,x,x,x,x,x,x,x),new B.bpy(this.a,this.b,e,f),x)},
$S:901}
B.bpy.prototype={
$0(){var x=this
return x.b.$1(new B.bpx(x.a,x.c,x.d))},
$S:0}
B.bpx.prototype={
$0(){var x=this.a
x.b=this.b
x.c=this.c},
$S:0}
B.bpz.prototype={
$1(d){var x=this.a
x.b=d
if(x.c<d)x.c=d},
$S:31}
B.bpA.prototype={
$1(d){var x=this.a
x.c=d
if(x.b>d)x.b=d},
$S:31}
B.bpB.prototype={
$0(){var x=this.a
return A.ao(this.b,!1).bq(new A.R(x.b,x.c))},
$S:0}
B.bju.prototype={
$0(){},
$S:0}
B.bjK.prototype={
$0(){var x=this.a
x.e=this.b
x.f=D.jD
x.w=x.r=null
x.x=!1
x.ch=x.ax=x.as=null},
$S:0}
B.bjO.prototype={
$0(){var x=this.a
return x.f=x.r!=null?D.fV:D.jD},
$S:0}
B.bjP.prototype={
$0(){var x=this.a
x.f=D.ph
x.as=null},
$S:0}
B.bjQ.prototype={
$0(){var x=this.a
x.f=this.b
if(!this.c&&x.as==null)x.as=null},
$S:0}
B.bjS.prototype={
$0(){var x=this.a
x.f=D.pi
x.as=null
x.y=0
x.z=new A.bl(Date.now(),0,!1)
x.ax=null},
$S:0}
B.bjT.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bjR())},
$S:43}
B.bjR.prototype={
$0(){},
$S:0}
B.bjV.prototype={
$1(d){return this.a.y=d},
$S:52}
B.bjU.prototype={
$1(d){return this.a.xK()},
$S:12}
B.bjW.prototype={
$0(){var x,w=this.a
w.f=w.r!=null?D.fV:D.jD
x=this.b
w.as=B.Hy(x)
w.at=x},
$S:0}
B.bjY.prototype={
$0(){var x=this.a
x.f=D.lm
x.ay=Date.now()},
$S:0}
B.bjZ.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bjX())},
$S:43}
B.bjX.prototype={
$0(){},
$S:0}
B.bjJ.prototype={
$0(){var x=this.a
x.f=x.r!=null?D.fV:D.jD
x.as=this.b
x.at=this.c},
$S:0}
B.bjL.prototype={
$0(){var x=this.b
x.r=this.c
x.w=this.a.a
x.f=D.fV
x.x=!1},
$S:0}
B.bjC.prototype={
$0(){var x=this.a
x.f=D.lm
x.ay=Date.now()
x.as=null},
$S:0}
B.bjD.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bjB())},
$S:43}
B.bjB.prototype={
$0(){},
$S:0}
B.bjE.prototype={
$1(d){return d.d!==D.fP},
$S:z+11}
B.bjF.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.bk3.prototype={
$0(){return B.bGw(this.a)},
$S:0}
B.bk4.prototype={
$1(d){var x=this.a.d
return x.or(x.b.ac2(d))},
$S:5}
B.bk5.prototype={
$0(){var x=y.z
return A.ao(this.b,!1).cm(A.cl(new B.bk2(this.a),null,x),x)},
$S:0}
B.bk2.prototype={
$1(d){var x=this.a.a
return new B.zs(x.c,x.d,x.e,x.f,null)},
$S:z+12}
B.bk6.prototype={
$0(){this.a.d.a.aYR()
this.b.U(y.q).f.bb(D.aIC)},
$S:0}
B.bjI.prototype={
$2(d,e){return C.bK},
$S:50}
B.bjH.prototype={
$2(d,e){var x,w,v,u=null,t=this.a,s=t.a,r=s.d+e
switch(t.d.c.Xs(s.c,r).a.a){case 2:s=D.c9
break
case 1:s=D.cR
break
case 0:s=N.h4
break
default:s=u}x=A.ac(18)
w=t.f===D.lm?u:new B.bjG(t,r)
v=s.bQ(0.25)
if(r===t.ghV())s=C.i
s=A.d2(s,r===t.ghV()?2:1)
return A.ds(!1,x,!0,A.aA(C.W,A.p(E.aW(r),u,u,u,u,D.aLJ,u,u,u),C.m,u,u,new A.at(v,u,s,u,u,u,C.cp),u,u,u,u,u,u,36),u,!0,u,u,u,u,u,u,u,u,u,u,w,u,u,u,u,u,u,u)},
$S:121}
B.bjG.prototype={
$0(){return this.a.R2(this.b)},
$S:0}
B.bjN.prototype={
$0(){var x=this.a
return x.t(new B.bjM(x))},
$S:0}
B.bjM.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bk_.prototype={
$1(d){return d===D.p4},
$S:z+2}
B.bk0.prototype={
$1(d){return d===D.p5},
$S:z+2}
B.bk1.prototype={
$1(d){return d===D.p6},
$S:z+2}
B.bjv.prototype={
$0(){var x=this.b!=null&&!this.c?1:null
return this.a.JA(x)},
$S:0}
B.bjw.prototype={
$1(d){var x=this.a.d
return x.or(x.b.aPy(d.ga6(d)))},
$S:98}
B.bjy.prototype={
$1(d){return d.m(0,C.V)?C.a7:C.i},
$S:4}
B.bjx.prototype={
$1(d){return d.m(0,C.V)?C.q:C.Q},
$S:4}
B.bjz.prototype={
$0(){var x=this.a
return x.R2(x.ghV()+1)},
$S:0}
B.bjA.prototype={
$0(){var x=this.a
return x.R2(x.ghV()+1)},
$S:0}
B.bjd.prototype={
$0(){},
$S:0}
B.bjm.prototype={
$0(){var x=this.a
x.e=this.b
x.Q=null
x.x=0
x.z=new A.bl(Date.now(),0,!1)},
$S:0}
B.bjn.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bjl())},
$S:43}
B.bjl.prototype={
$0(){},
$S:0}
B.bjp.prototype={
$1(d){return this.a.x=d},
$S:52}
B.bjo.prototype={
$1(d){return this.a.Ba(this.b,!1)},
$S:12}
B.bjq.prototype={
$0(){var x,w=this.a
w.e=null
x=this.b
w.Q=B.Hy(x)
w.as=x},
$S:0}
B.bjh.prototype={
$0(){var x=this.a
x.e=null
x.r.C(0,this.b)},
$S:0}
B.bji.prototype={
$0(){var x,w=this.a,v=this.b
w.r.I(0,v)
x=this.c
w.w.n(0,v,B.Hy(x))
w.as=x},
$S:0}
B.bjj.prototype={
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
return A.d(n.a.ahv(s.b,B.AC(G.Hw(l,m,k.uN(l,m)).b).length),$async$$1)
case 6:r=f
l=o.a
k=l.f
l=l.c
q=B.bEU(G.Hw(l,m,k.uN(l,m)).b,r.a)
if(C.c.aq(q.c).length!==0){l=n.c
k=o.a.c
j=q.gpS()
l.agB(k,m,n.b.a,j)}n.wp()
if(o.c!=null)o.t(new B.bje(o,m,q))
t.push(5)
x=4
break
case 3:v=2
h=u.pop()
o=A.Y(h)
if(o instanceof B.ku){p=o
o=s.a
if(o.c!=null)o.t(new B.bjf(o,s.c,p))}else throw h
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
o=s.a
if(o.c!=null)o.t(new B.bjg(o,s.c))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$$1,w)},
$S:176}
B.bje.prototype={
$0(){var x=this.c
this.a.f.n(0,this.b,x)
return x},
$S:0}
B.bjf.prototype={
$0(){var x=this.a,w=this.c
x.w.n(0,this.b,B.Hy(w))
x.as=w},
$S:0}
B.bjg.prototype={
$0(){return this.a.r.I(0,this.b)},
$S:0}
B.bjk.prototype={
$0(){var x=this.a
x.f.af(0)
x.w.af(0)
x.as=null},
$S:0}
B.bjr.prototype={
$1(d){return d.gpS()},
$S:z+13}
B.bjs.prototype={
$0(){return this.a.Ba(this.b,!0)},
$S:0}
B.bjt.prototype={
$0(){return this.a.CD(this.b)},
$S:0}
B.bj4.prototype={
$0(){},
$S:0}
B.bjb.prototype={
$2(d,e){return d+this.a.Xj(e)},
$S:97}
B.bjc.prototype={
$2(d,e){return d+H.bW[e-1].a[1]},
$S:97}
B.bja.prototype={
$0(){return this.a.H4(this.b)},
$S:0}
B.bj9.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.b,o=A.p(G.jj(p),q,q,q,q,C.oL,q,q,q),n=y.p,m=A.a([],n)
for(x=this.c,w=this.a,v=w.d,u=p*1000,t=1;t<=x;++t){s=new A.ba(10,10)
r=v.c.a.h(0,u+t)
switch((r==null?$.pv():r).a.a){case 2:r=D.c9.bQ(0.35)
break
case 1:r=D.cR.bQ(0.35)
break
case 0:r=C.xT
break
default:r=q}m.push(A.aA(C.W,A.p(E.aW(t),q,q,q,q,D.aL7,q,q,q),C.m,q,q,new A.at(r,q,q,new A.dg(s,s,s,s),q,q,C.t),q,38,q,q,q,q,38))}return A.dU(!0,new A.ab(C.ip,A.ah(A.a([o,C.aT,D.aTI,C.O,new A.ei(D.Xc,A.i6(A.f2(m,6,6),q,C.r,q,q,C.v),q),C.as,A.bZ(D.aUB,q,q,new B.bj8(w,d,p),q,q)],n),C.am,C.f,C.a_),q),C.K,!0)},
$S:47}
B.bj8.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.b
t=v.c
x=4
return A.d(A.eL(null,new B.bj7(t),u,y.y),$async$$0)
case 4:x=e===!0?2:3
break
case 2:x=5
return A.d(v.a.d.EW(t),$async$$0)
case 5:if(u.e!=null)A.ao(u,!1).ep()
case 3:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.bj7.prototype={
$1(d){var x=null,w=A.p("\u0647\u062a\u0628\u062f\u0623 "+G.jj(this.a)+" \u0645\u0646 \u0627\u0644\u0623\u0648\u0644.",x,x,x,x,x,x,x,x)
return A.eN(A.a([A.bZ(C.vN,x,x,new B.bj5(d),x,x),A.bZ(D.aVV,x,x,new B.bj6(d),x,x)],y.p),w,D.aVr)},
$S:21}
B.bj5.prototype={
$0(){A.ao(this.a,!1).bq(!1)
return null},
$S:0}
B.bj6.prototype={
$0(){A.ao(this.a,!1).bq(!0)
return null},
$S:0}
B.bqm.prototype={
$1(d){var x=this.a
return new A.kg(new B.bql(x),null,x,null)},
$S:902}
B.bql.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.a,r=s.b,q=A.a([],y.n)
for(x=y.c,w=1;w<=5;++w)q.push(new A.eg(w,t,A.p(E.aW(w),t,t,t,t,t,t,t,t),x))
x=y.S
v=y.b
u=y.p
x=A.a([D.aQC,C.as,D.aUS,C.S,A.uU(new B.bqg(s,r),q,A.cO([r.a],x),!1,A.jm(t,t,t,new A.bc(new B.bqh(),v),t,t,t,t,new A.bc(new B.bqi(),v),t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),x),C.P,A.r4(C.q,C.K,t,new B.bqj(s,r),D.aTl,D.aWr,r.c),A.r4(C.q,C.K,t,new B.bqk(s,r),t,D.aQp,r.d)],u)
s=s.x
if(s!=null)C.b.E(x,A.a([C.aT,A.p("\u0627\u0644\u0645\u0639\u0627\u0644\u062c: "+s.gll(),t,t,t,t,F.ai,t,C.aK,t)],u))
x.push(C.P)
x.push(D.Un)
return A.dU(!0,A.i6(A.ah(x,C.am,C.f,C.h),t,C.r,C.ip,t,C.v),C.K,!0)},
$S:903}
B.bqg.prototype={
$1(d){return this.a.or(this.b.aPv(d.ga6(d)))},
$S:98}
B.bqi.prototype={
$1(d){return d.m(0,C.V)?C.a7:C.i},
$S:4}
B.bqh.prototype={
$1(d){return d.m(0,C.V)?C.q:C.Q},
$S:4}
B.bqj.prototype={
$1(d){return this.a.or(this.b.aP_(d))},
$S:5}
B.bqk.prototype={
$1(d){return this.a.or(this.b.ac2(d))},
$S:5}
B.aRM.prototype={
$0(){return A.eV(A.bV(this.a,0,null),C.c1,null)},
$S:0}
B.bqA.prototype={
$1(d){var x,w=A.aX("https?://",!0,!1)
w=A.bS(d,w,"")
x=A.aX("www\\.",!0,!1)
return A.AD(A.bS(w,x,"www[.]"),A.aX("([A-Za-z0-9-]+)\\.(com|net|org|io|xyz|ru|info|me|link)\\b",!1,!1),new B.bqB(),null)},
$S:25}
B.bqB.prototype={
$1(d){return A.f(d.h(0,1))+"[.]"+A.f(d.h(0,2))},
$S:60}
B.bk7.prototype={
$0(){var x=this.a
x.e=!0
x.r=null},
$S:0}
B.bk8.prototype={
$0(){return this.a.f=!0},
$S:0}
B.bk9.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bka.prototype={
$0(){return this.a.e=!1},
$S:0}
B.bkc.prototype={
$0(){var x=this.a
return x.t(new B.bkb(x))},
$S:0}
B.bkb.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.bqz.prototype={
$1(d){return d==null?"\u2013":A.f(d)},
$S:193};(function installTearOffs(){var x=a._instance_0u
x(B.a9L.prototype,"gaUS","aUT",1)
var w
x(w=B.PE.prototype,"gaV7","z9",0)
x(w,"gapn","tX",0)
x(w=B.Ti.prototype,"gmM","uE",1)
x(w,"gaEJ","Ir",0)
x(w=B.Vc.prototype,"gmM","uE",1)
x(w,"gaGD","IF",0)
x(w,"gaL8","xK",0)
x(w,"gatK","H1",0)
x(w=B.Vb.prototype,"gmM","uE",1)
x(w,"gaHe","aHf",1)
x(B.Va.prototype,"gmM","uE",1)
x(B.Vd.prototype,"gaL7","JB",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.FL,[B.aXI,B.mk,B.AU,B.CQ,B.A8])
x(A.a6,[B.Xg,B.CR,B.Rd,B.zG,B.a9K])
w(B.aTV,A.wI)
x(A.hF,[B.aTW,B.aRQ,B.aRS,B.aRT,B.aRR,B.aJj,B.bnQ,B.aS_,B.aS0,B.aRY,B.bc3,B.bc4,B.bc5,B.bbW,B.bbZ,B.bbU,B.bpH,B.bpG,B.bpD,B.bpF,B.bpz,B.bpA,B.bjT,B.bjV,B.bjU,B.bjZ,B.bjD,B.bjE,B.bk4,B.bk2,B.bk_,B.bk0,B.bk1,B.bjw,B.bjy,B.bjx,B.bjn,B.bjp,B.bjo,B.bjj,B.bjr,B.bj9,B.bj7,B.bqm,B.bqg,B.bqi,B.bqh,B.bqj,B.bqk,B.bqA,B.bqB,B.bqz])
x(A.N,[B.a9L,B.PF,B.EZ,B.F0,B.F_,B.ku,B.MX,B.lM,B.DG,B.pG,B.a9M,B.PD])
x(A.k_,[B.aRN,B.aRP,B.aRU,B.aRV,B.aRX,B.aRW,B.aJk,B.aS1,B.bc2,B.bc1,B.bbQ,B.bbX,B.bc_,B.bc0,B.bbT,B.bbS,B.bbV,B.bbR,B.bbY,B.bpC,B.bpy,B.bpx,B.bpB,B.bju,B.bjK,B.bjO,B.bjP,B.bjQ,B.bjS,B.bjR,B.bjW,B.bjY,B.bjX,B.bjJ,B.bjL,B.bjC,B.bjB,B.bjF,B.bk3,B.bk5,B.bk6,B.bjG,B.bjN,B.bjM,B.bjv,B.bjz,B.bjA,B.bjd,B.bjm,B.bjl,B.bjq,B.bjh,B.bji,B.bje,B.bjf,B.bjg,B.bjk,B.bjs,B.bjt,B.bj4,B.bja,B.bj8,B.bj5,B.bj6,B.aRM,B.bk7,B.bk8,B.bk9,B.bka,B.bkc,B.bkb])
x(A.o8,[B.aRO,B.bmt,B.aS2,B.aS3,B.bpE,B.bjI,B.bjH,B.bjb,B.bjc,B.bql])
w(B.PE,A.hm)
x(A.S,[B.uz,B.zt,B.zs,B.zr,B.zu])
x(A.U,[B.Ti,B.Vc,B.Vb,B.Va,B.Vd])})()
A.nR(b.typeUniverse,JSON.parse('{"Xg":{"a6":[],"e":[]},"ku":{"bm":[]},"zt":{"S":[],"e":[]},"zs":{"S":[],"e":[]},"zr":{"S":[],"e":[]},"zu":{"S":[],"e":[]},"PE":{"au":[]},"uz":{"S":[],"e":[]},"Ti":{"U":["uz"]},"CR":{"a6":[],"e":[]},"Rd":{"a6":[],"e":[]},"Vc":{"U":["zt"]},"zG":{"a6":[],"e":[]},"Vb":{"U":["zs"]},"Va":{"U":["zr"]},"a9K":{"a6":[],"e":[]},"Vd":{"U":["zu"]}}'))
var y=(function rtii(){var x=A.a7
return{u:x("pG"),c:x("eg<v>"),r:x("cY<v>"),k:x("y<lM>"),n:x("y<eg<v>>"),I:x("y<cY<v>>"),R:x("y<fN>"),Z:x("y<aD<i,@>>"),d:x("y<MX>"),s:x("y<i>"),p:x("y<e>"),t:x("y<v>"),m:x("bg"),j:x("P<@>"),L:x("P<v>"),P:x("aD<i,@>"),f:x("aD<@,@>"),x:x("aj<i,v>"),a:x("bi"),K:x("N"),B:x("DG"),l:x("+(v,v)"),e:x("cJ<lM>"),N:x("i"),C:x("EZ"),D:x("F_"),X:x("PF"),_:x("F0"),U:x("aO<i>"),G:x("mk"),q:x("pl"),b:x("bc<I?>"),y:x("B"),i:x("J"),z:x("@"),S:x("v"),A:x("bg?"),Y:x("aD<@,@>?"),O:x("N?"),M:x("+quota,usage(v,v)?"),o:x("ev"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.lt=new B.AU(0,"none")
D.lu=new B.AU(1,"learning")
D.dQ=new B.AU(2,"memorized")
D.Xc=new A.ax(0,1/0,0,320)
D.dz=new A.I(1,0.9725490196078431,0.44313725490196076,0.44313725490196076,C.k)
D.Xk=new A.at(D.dz,null,null,null,null,null,C.cp)
D.cR=new A.I(1,0.984313725490196,0.7490196078431373,0.1411764705882353,C.k)
D.c9=new A.I(1,0.20392156862745098,0.8274509803921568,0.6,C.k)
D.a9H=new A.a3(983698,"MaterialIcons",null,!1)
D.abw=new A.a2(D.a9H,null,C.cq,null,null,null)
D.aVu=new A.t("\u0627\u0644\u0646\u0635 \u0645\u062e\u0641\u064a \u2014 \u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.ec,null,null,null,null,null,null,null,null)
D.aL_=new A.r(!0,C.fg,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTJ=new A.t("(\u062f\u0648\u0633 \u0647\u0646\u0627 \u0644\u0648 \u0639\u0627\u064a\u0632 \u062a\u0628\u0635)",null,D.aL_,null,null,null,null,null,null,null,null)
D.an4=x([D.abw,C.S,D.aVu,D.aTJ],y.p)
D.a2Q=new A.iX(C.v,C.f,C.h,C.j,null,C.b7,null,0,D.an4,null)
D.a5T=new A.a_(0,18,0,18)
D.a5W=new A.a_(0,26,0,26)
D.a6_=new A.a_(0,4,0,6)
D.a6c=new A.a_(14,12,14,14)
D.a6L=new A.a_(3,0,0,0)
D.a8X=new A.a3(63251,"MaterialIcons",null,!1)
D.mz=new A.a3(63677,"MaterialIcons",null,!1)
D.a9t=new A.a3(983256,"MaterialIcons",null,!1)
D.t5=new A.a3(983516,"MaterialIcons",null,!1)
D.a9r=new A.a3(983209,"MaterialIcons",null,!1)
D.a9V=new A.a2(D.a9r,28,C.q,null,null,null)
D.aai=new A.a2(C.Aa,null,N.h4,null,null,null)
D.a8O=new A.a3(62961,"MaterialIcons",null,!1)
D.aaA=new A.a2(D.a8O,null,null,null,null,null)
D.a8W=new A.a3(63199,"MaterialIcons",null,!1)
D.aaB=new A.a2(D.a8W,null,null,null,null,null)
D.aaF=new A.a2(C.iB,null,C.fg,null,null,null)
D.aaH=new A.a2(D.t5,44,C.i,null,null,null)
D.aaY=new A.a2(D.mz,null,D.dz,null,null,null)
D.ab6=new A.a2(C.rU,null,D.dz,null,null,null)
D.abf=new A.a2(C.A5,null,null,null,null,null)
D.abg=new A.a2(D.mz,null,null,null,null,null)
D.AH=new A.a2(C.mC,null,null,null,null,null)
D.abu=new A.a2(C.my,20,D.cR,null,null,null)
D.abG=new A.a2(C.mA,30,C.q,null,null,null)
D.abW=new A.a2(C.mB,16,C.q,null,null,null)
D.a99=new A.a3(63520,"MaterialIcons",null,!1)
D.ac7=new A.a2(D.a99,null,null,null,null,null)
D.acd=new A.a2(C.kl,null,null,null,null,null)
D.a8K=new A.a3(62842,"MaterialIcons",null,!0)
D.aci=new A.a2(D.a8K,null,null,null,null,null)
D.Bm=x([1,3,5],y.t)
D.C8=x(["\u0627\u0639\u0648\u0630","\u0628\u0627\u0644\u0644\u0647","\u0645\u0646","\u0627\u0644\u0634\u064a\u0637\u0627\u0646","\u0627\u0644\u0631\u062c\u064a\u0645"],y.s)
D.ax4=new A.ab(C.mb,U.pV,null)
D.akP=x([D.ax4],y.p)
D.aAj=new A.R(C.iC,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0629 \u0628\u0635\u0648\u062a \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062d\u0635\u0631\u064a (\u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645) \u0645\u0631\u0629 \u0623\u0648 \u0663 \u0623\u0648 \u0665 \u0645\u0631\u0627\u062a.")
D.aAb=new A.R(D.mz,"\u0633\u0645\u0651\u0639\u0647\u0627 \u0645\u0646 \u062d\u0641\u0638\u0643 \u2014 \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0644\u0648\u0651\u0646\u0644\u0643 \u0643\u0644 \u0643\u0644\u0645\u0629: \u0623\u062e\u0636\u0631 \u0635\u062d\u060c \u0623\u0635\u0641\u0631 \u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0623\u062d\u0645\u0631 \u063a\u0644\u0637.")
D.aAw=new A.R(C.hg,"\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0645\u0627 \u062a\u0633\u0645\u0651\u0639\u0647\u0627 \u0635\u062d \u0645\u0631\u062a\u064a\u0646 \u0648\u0631\u0627 \u0628\u0639\u0636 (\u062a\u0642\u062f\u0631 \u062a\u063a\u064a\u0651\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a).")
D.a9f=new A.a3(63625,"MaterialIcons",null,!1)
D.aAE=new A.R(D.a9f,"\u0643\u0644 \u062f\u0647 \u0628\u064a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u2014 \u0635\u0648\u062a\u0643 \u0645\u0634 \u0628\u064a\u062a\u0631\u0641\u0639 \u0639\u0644\u0649 \u0623\u064a \u0633\u064a\u0631\u0641\u0631.")
D.amk=x([D.aAj,D.aAb,D.aAw,D.aAE],A.a7("y<+(a3,i)>"))
D.ao5=x([D.lt,D.lu,D.dQ],A.a7("y<AU>"))
D.GA=x(["\u0628\u0633\u0645","\u0627\u0644\u0644\u0647","\u0627\u0644\u0631\u062d\u0645\u0646","\u0627\u0644\u0631\u062d\u064a\u0645"],y.s)
D.aut=new B.CQ(0,"idle")
D.MB=new B.CQ(1,"loading")
D.hx=new B.CQ(2,"ready")
D.auu=new B.CQ(3,"failed")
D.aaW=new A.a2(C.cS,18,D.c9,null,null,null)
D.TQ=new A.r(!0,C.a8,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW6=new A.t("\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u062c\u0627\u0647\u0632 \u064a\u0633\u0645\u0639\u0643",null,D.TQ,null,null,null,null,null,null,null,null)
D.ak1=x([D.aaW,C.bK,D.aW6],y.p)
D.aFL=new A.jD(C.aA,C.f,C.h,C.j,null,C.b7,null,0,D.ak1,null)
D.awv=new A.ab(C.ay,D.aFL,null)
D.a6I=new A.a_(2,6,2,4)
D.aKE=new A.r(!0,C.q,null,null,null,null,14,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQB=new A.t("\u0627\u0628\u062f\u0623 \u0645\u0646 \u0647\u0646\u0627 \u2014 \u0627\u0644\u0641\u0627\u062a\u062d\u0629 \u0648\u062c\u0632\u0621 \u0639\u0645\u0651",null,D.aKE,null,null,null,null,null,null,null,null)
D.awD=new A.ab(D.a6I,D.aQB,null)
D.aWe=new A.t("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.ec,null,null,null,null,null,null,null,null)
D.al4=x([O.ox,C.ap,D.aWe],y.p)
D.aFJ=new A.jD(C.aA,C.cf,C.h,C.j,null,C.b7,null,0,D.al4,null)
D.awI=new A.ab(P.qO,D.aFJ,null)
D.vG=new A.r(!0,D.cR,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWm=new A.t("\u0646\u0635\u064a\u062d\u0629: \u0627\u062d\u0641\u0638 \u0663\u2013\u0665 \u0622\u064a\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0631\u0629 \u0623\u0633\u0647\u0644.",null,D.vG,null,null,null,null,null,null,null,null)
D.awL=new A.ab(C.ha,D.aWm,null)
D.aW2=new A.t("\u0644\u0633\u0647 \u0645\u0633\u0645\u0651\u0639\u062a\u0634 \u0623\u064a \u0622\u064a\u0629 \u2014 \u0627\u0628\u062f\u0623 \u0628\u0633\u0648\u0631\u0629 \u0642\u0635\u064a\u0631\u0629 \u0645\u0646 \u062c\u0632\u0621 \u0639\u0645\u0651.",null,F.ai,C.ah,null,null,null,null,null,null,null)
D.awP=new A.ab(C.D,D.aW2,null)
D.a6F=new A.a_(2,0,2,8)
D.aTP=new A.t("\u0627\u0644\u0633\u0648\u0631 \u0627\u0644\u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u060c \u0645\u0646 \u0627\u0644\u0646\u0627\u0633 \u0644\u062d\u062f \u0627\u0644\u0646\u0628\u0623.",null,F.ai,null,null,null,null,null,null,null,null)
D.ax0=new A.ab(D.a6F,D.aTP,null)
D.ac2=new A.a2(C.hf,30,C.q,null,null,null)
D.aPc=new A.r(!0,C.i,null,null,null,null,17,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWL=new A.t("\u0633\u0645\u0651\u0639\u060c \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0642\u0648\u0644\u0643 \u0635\u062d \u0648\u0644\u0627 \u063a\u0644\u0637",null,D.aPc,null,null,null,null,null,null,null,null)
D.a7k=new A.dL(1,C.aX,D.aWL,null)
D.alg=x([D.ac2,C.b0,D.a7k],y.p)
D.aFD=new A.jD(C.aA,C.f,C.h,C.j,null,C.b7,null,0,D.alg,null)
D.abM=new A.a2(C.hg,18,D.c9,null,null,null)
D.TC=new A.r(!0,D.c9,null,null,null,null,12,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVO=new A.t("\u0645\u062d\u0641\u0648\u0638\u0629",null,D.TC,null,null,null,null,null,null,null,null)
D.akp=x([D.abM,C.hJ,D.aVO],y.p)
D.aFI=new A.jD(C.aA,C.f,C.a_,C.j,null,C.b7,null,0,D.akp,null)
D.aHM=new A.G(0,30)
D.aHN=new A.G(0,34)
D.ow=new A.G(1/0,54)
D.aI_=new A.G(1/0,48)
D.aI2=new A.G(1/0,50)
D.aI5=new A.G(1/0,52)
D.aI8=new A.cq(16,null,null,null)
D.aIc=new A.cq(14,14,O.xo,null)
D.aUJ=new A.t("safe mode / no-gpu flags cleared (reload)",null,null,null,null,null,null,null,null,null,null)
D.aIC=new A.iJ(D.aUJ,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.l,null)
D.aK7=new A.r(!0,C.i,null,null,null,null,14.5,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKp=new A.r(!0,C.i,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKx=new A.r(!0,C.a8,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aL7=new A.r(!0,C.i,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.vz=new A.r(!0,D.dz,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLJ=new A.r(!0,C.i,null,null,null,null,12,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hQ=new A.r(!0,C.i,null,"AmiriQuranMT",null,null,27,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNa=new A.r(!0,C.cr,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.TF=new A.r(!0,D.dz,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNx=new A.r(!0,C.q,null,null,null,null,24,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.TJ=new A.r(!0,C.i,null,null,null,null,12.5,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNL=new A.r(!0,C.q,null,null,null,null,null,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOn=new A.r(!0,D.cR,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOo=new A.r(!0,D.c9,null,null,null,null,null,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOG=new A.r(!0,C.i,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQ2=new A.t("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u062e\u0631 \u0645\u0631\u0629",null,C.hT,null,null,null,null,null,null,null,null)
D.aQp=new A.t("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643 (\u062e\u0628\u0651\u064a \u0627\u0644\u0646\u0635)",null,C.db,null,null,null,null,null,null,null,null)
D.aQC=new A.t("\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,C.oL,null,null,null,null,null,null,null,null)
D.aQE=new A.t("\u2022 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641: \u0645\u0634\u0631\u0648\u0639 \u062a\u0646\u0632\u064a\u0644 Tanzil (\u062a\u0631\u062e\u064a\u0635 CC BY 3.0).",null,F.ai,null,null,null,null,null,null,null,null)
D.aLH=new A.r(!0,D.c9,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQK=new A.t("\u0648\u0635\u0644\u062a\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2014 \u0634\u0643\u0631\u064b\u0627\u060c \u0647\u0646\u0628\u0635 \u0639\u0644\u064a\u0647\u0627.",null,D.aLH,null,null,null,null,null,null,null,null)
D.aQN=new A.t("\u062e\u0628\u0651\u064a \u0646\u0635 \u0627\u0644\u0622\u064a\u0629 \u0648\u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,F.ai,null,null,null,null,null,null,null,null)
D.aQR=new A.t("\u0639\u062f\u0651\u064a \u0644\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.ec,null,null,null,null,null,null,null,null)
D.aRv=new A.t("\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0627\u0628\u062f\u0623",null,C.cw,null,null,null,null,null,null,null,null)
D.aRR=new A.t("\u064a\u0644\u0627 \u0646\u0628\u062f\u0623",null,C.cN,null,null,null,null,null,null,null,null)
D.aRV=new A.t("\u0645\u0645\u0643\u0646 \u062a\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 \u062f\u0644\u0648\u0642\u062a\u064a \u0644\u062d\u062f \u0645\u0627 \u064a\u062e\u0644\u0635.",null,F.ai,null,null,null,null,null,null,null,null)
D.aSc=new A.t("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.TT,null,null,null,null,null,null,null,null)
D.aSy=new A.t("\u062c\u0631\u0651\u0628 \u0639\u0644\u0649 \u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a (\u0644\u0644\u062a\u062c\u0631\u0628\u0629)",null,null,null,null,null,null,null,null,null,null)
D.aSS=new A.t("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643",null,K.l6,null,null,null,null,null,null,null,null)
D.aTc=new A.t("reset safe mode / WebGPU ban",null,P.Tr,null,null,null,null,null,null,null,null)
D.aTh=new A.t("\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629",null,D.vG,null,null,null,null,null,null,null,null)
D.aTl=new A.t("\u0628\u0639\u062f \u062d\u0648\u0627\u0644\u064a \u062b\u0627\u0646\u064a\u0629 \u0633\u0643\u0648\u062a",null,F.ai,null,null,null,null,null,null,null,null)
D.aTA=new A.t("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636",null,F.b_,null,null,null,null,null,null,null,null)
D.aTI=new A.t("\u0623\u062e\u0636\u0631: \u0645\u062d\u0641\u0648\u0638\u0629 \u2014 \u0623\u0635\u0641\u0631: \u0628\u062a\u0631\u0627\u062c\u0639\u0647\u0627 \u2014 \u0631\u0645\u0627\u062f\u064a: \u0644\u0633\u0647",null,F.ai,null,null,null,null,null,null,null,null)
D.aTQ=new A.t("\u0645\u0641\u064a\u0634 \u0633\u0648\u0631\u0629 \u0628\u0627\u0644\u0627\u0633\u0645 \u062f\u0647",null,F.ai,null,null,null,null,null,null,null,null)
D.aPe=new A.r(!0,C.q,null,null,null,null,12.5,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUz=new A.t("\u0627\u0628\u0639\u062a \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aPe,null,null,null,null,null,null,null,null)
D.aMW=new A.r(!0,D.dz,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUB=new A.t("\u0627\u0628\u062f\u0623 \u0627\u0644\u0633\u0648\u0631\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644",null,D.aMW,null,null,null,null,null,null,null,null)
D.aUS=new A.t("\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f \u0643\u0627\u0645 \u062a\u0633\u0645\u064a\u0639 \u0635\u062d \u0648\u0631\u0627 \u0628\u0639\u0636\u061f",null,K.l6,null,null,null,null,null,null,null,null)
D.aJY=new A.r(!0,C.i,null,null,null,null,null,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aV6=new A.t("\u0627\u0644\u0645\u0635\u0627\u062f\u0631",null,D.aJY,null,null,null,null,null,null,null,null)
D.aVf=new A.t("\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.cw,null,null,null,null,null,null,null,null)
D.aVr=new A.t("\u062a\u0645\u0633\u062d \u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0633\u0648\u0631\u0629 \u062f\u064a\u061f",null,null,null,null,null,null,null,null,null,null)
D.aVA=new A.t("\u0633\u0645\u0651\u0639\u0647\u0645 \u062a\u0627\u0646\u064a",null,null,null,null,null,null,null,null,null,null)
D.aVV=new A.t("\u0627\u0645\u0633\u062d",null,null,null,null,null,null,null,null,null,null)
D.aVW=new A.t("\u2022 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: whisper-base-ar-quran \u0645\u0646 Tarteel (\u062a\u0631\u062e\u064a\u0635 Apache-2.0)\u060c \u0628\u0635\u064a\u063a\u0629 ONNX \u0645\u0646 \u0645\u0634\u0631\u0648\u0639 Basira\u060c \u0648\u0628\u064a\u0634\u062a\u063a\u0644 \u062c\u0648\u0651\u0647 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0628\u0645\u0643\u062a\u0628\u0629 Transformers.js.",null,F.ai,null,null,null,null,null,null,null,null)
D.aVX=new A.t("\u062e\u0644\u0635\u062a",null,R.l8,null,null,null,null,null,null,null,null)
D.aVY=new A.t("\u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647 \u0630\u0627\u0643\u0631\u062a\u0647 \u0642\u0644\u064a\u0644\u0629 \u2014 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0645\u0643\u0646 \u064a\u0643\u0648\u0646 \u0628\u0637\u064a\u0621 \u0639\u0644\u064a\u0647.",null,D.vG,null,null,null,null,null,null,null,null)
D.aNN=new A.r(!0,C.cr,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,C.fH,null,null,null,null,null,null,null,null)
D.aWi=new A.t("\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aNN,null,null,null,null,null,null,null,null)
D.aWp=new A.t("\u0623\u0648\u0644 \u0645\u0631\u0629 \u0628\u0633: \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,F.b_,null,null,null,null,null,null,null,null)
D.aWr=new A.t("\u0648\u0642\u0651\u0641 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0644\u0648\u062d\u062f\u0647 \u0644\u0645\u0627 \u0623\u0633\u0643\u062a",null,C.db,null,null,null,null,null,null,null,null)
D.aWK=new A.t("\u2022 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: \u0627\u0644\u0634\u064a\u062e \u0645\u062d\u0645\u0648\u062f \u062e\u0644\u064a\u0644 \u0627\u0644\u062d\u0635\u0631\u064a \u2014 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645\u060c \u0645\u0646 everyayah.com.",null,F.ai,null,null,null,null,null,null,null,null)
D.Un=new B.a9K(null)
D.aXm=new B.zr(null)
D.aXn=new B.PD(2,1,!0,!1,!1)
D.Uo=new B.PF(!1,!1,!1,!1,!1,0)
D.fP=new B.mk(0,"ok")
D.p4=new B.mk(1,"near")
D.p5=new B.mk(2,"wrong")
D.p6=new B.mk(3,"missing")
D.UN=new B.mk(4,"extra")
D.a95=new A.a3(63456,"MaterialIcons",null,!1)
D.b1B=new B.zG(D.cR,D.a95,"\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629","\u0642\u0631\u0651\u0628 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0646\u0643 \u0648\u0627\u0642\u0631\u0627 \u0628\u0635\u0648\u062a \u0648\u0627\u0636\u062d \u0641\u064a \u0645\u0643\u0627\u0646 \u0647\u0627\u062f\u064a\u060c \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a.",null)
D.jv=new B.aXI(0,"flat")
D.b1W=new B.Rd(!1,null)
D.wa=new B.Rd(!0,null)
D.jD=new B.A8(0,"idle")
D.ph=new B.A8(1,"playing")
D.pi=new B.A8(2,"recording")
D.lm=new B.A8(3,"thinking")
D.fV=new B.A8(4,"result")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c4Q","bvU",()=>new B.a9L())
x($,"c7R","bK9",()=>A.aX("\u0640[\u064b-\u0652]*\u0670",!0,!1))
x($,"c7S","bKa",()=>A.aX("\u0640[\u064b-\u0652]*[\u06e6\u06e7]",!0,!1))
x($,"c82","bKi",()=>A.aX("\u0648\u0670",!0,!1))
x($,"c7q","bJR",()=>A.aX("[\u0648\u064a\u0649][\u064b-\u0652]*[\u0654]",!0,!1))
x($,"c6_","bIU",()=>A.aX("\u0627[\u0654\u0655]",!0,!1))
x($,"c73","bJA",()=>A.aX("[\u0654\u0655]",!0,!1))
x($,"c60","bIV",()=>A.aX("[\u0622\u0623\u0625\u0671\u0672\u0673]",!0,!1))
x($,"c66","bJ_",()=>A.aX("[\u0624\u0626]",!0,!1))
x($,"c75","bJC",()=>A.aX("[\u064b-\u065f\u0670\u06d6-\u06ed\u08d3-\u08ff\u0640]",!0,!1))
x($,"c7v","bJU",()=>A.aX("[\u06dd\u06de\u0660-\u0669\u06f0-\u06f90-9]",!0,!1))
x($,"c7c","bJI",()=>A.aX("[^\u0621-\u064a\\s]",!0,!1))
x($,"c7Q","bwr",()=>A.aX("\\s+",!0,!1))
x($,"c2b","pv",()=>B.bL8(D.lt,0,A.brQ(0,!0)))
x($,"c4R","HD",()=>new B.PE($.bvU(),D.aXn,B.bSW(),D.aut,$.a5()))})()};
(a=>{a["UBXdAWKy6G8nb+OzxvPVhKjF01Y="]=a.current})($__dart_deferred_initializers__);