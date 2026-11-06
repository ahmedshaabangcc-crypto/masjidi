((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,P,R,H,N,G,O,S,T,K,L,B={
c_h(d){var x,w,v,u,t,s
if(d instanceof B.kO)return d
try{x=A.cp(d)
w=x.code
v=x.message
u=w==null?"failed":A.a8(w)
t=v==null?"":A.a8(v)
return new B.kO(u,t)}catch(s){u=A.h(d)
return new B.kO("failed",u)}},
acb:function acb(){this.b=this.a=null},
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
c_i(d,e){return new B.kO(d,e)},
Rl:function Rl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.w=i},
Gq:function Gq(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i
_.w=j},
Gs:function Gs(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Gr:function Gr(d,e){this.a=d
this.b=e},
kO:function kO(d,e){this.a=d
this.b=e},
bMP(d){var x,w=$.bRi()
w=A.bY(d,w,"\u0627")
x=$.bRj()
w=A.bY(w,x,"\u064a")
x=$.bRr()
w=A.bY(w,x,"\u0627")
x=$.bQ1()
w=A.bY(w,x,"\u0627")
x=$.bR_()
w=A.bY(w,x,"\u0621")
x=$.bQJ()
w=A.bY(w,x,"\u0621")
x=$.bQ2()
w=A.bY(w,x,"\u0627")
x=$.bQ7()
w=A.bY(w,x,"\u0621")
w=A.bY(w,"\u0649","\u064a")
w=A.bY(w,"\u0629","\u0647")
x=$.bQL()
w=A.bY(w,x,"")
x=$.bR2()
w=A.bY(w,x," ")
x=$.bQR()
w=A.bY(w,x," ")
x=$.bD6()
return C.c.al(A.bY(w,x," "))},
c3J(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.length,k=e.length
if(l===0)return k
if(k===0)return l
x=k+1
w=y.S
v=J.ky(x,w)
for(u=0;u<x;++u)v[u]=u
t=A.bQ(x,0,!1,w)
for(s=1;s<=l;++s,r=t,t=v,v=r){t[0]=s
for(w=s-1,u=1;u<=k;++u){q=u-1
p=d.charCodeAt(w)===e.charCodeAt(q)?0:1
o=v[u]+1
n=t[q]+1
m=v[q]+p
if(o<n)q=o<m?o:m
else q=n<m?n:m
t[u]=q}}return v[k]},
bx8(d,e){var x,w,v,u,t,s
if(d===e)return 1
x=A.aQ("[\u0627\u0621]",!0,!1)
w=A.bY(d,x,"")
x=A.aQ("[\u0627\u0621]",!0,!1)
v=A.bY(e,x,"")
if(w.length!==0&&w===v)return 1
u=d.length
t=e.length
u=u>t?u:t
if(u===0)return 1
s=1-B.c3J(d,e)/u
return s>=1?0.99:s},
BM(d){var x,w,v,u,t,s,r,q=A.a([],y.d)
for(x=C.c.qY(d,$.bD6()),w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.length===0)continue
t=B.bMP(u)
s=A.bY(t," ","")
if(s.length===0){if(q.length!==0){r=q.pop()
q.push(new B.OD(r.a+" "+u,r.b))}continue}q.push(new B.OD(u,s))}return q},
c2v(d,e){var x,w,v,u,t=new B.bsr(),s=A.a([],y.s)
for(x=A.eR(e,0,A.i9(5,"count",y.S),A.ae(e).c),w=x.$ti,x=new A.bT(x,x.gL(0),w.i("bT<aG.E>")),w=w.i("aG.E");x.u();){v=x.d
s.push((v==null?w.a(v):v).b)}u=!t.$2(s,D.DH)&&t.$2(d,D.DH)?C.b.it(d,5):d
return!t.$2(s,D.I9)&&t.$2(u,D.I9)?C.b.it(u,4):u},
bLO(d,e){var x=B.BM(d),w=B.bMP(e),v=y.U
v=A.a0(new A.aH(A.a(w.split(" "),y.s),new B.btV(),v),v.i("M.E"))
return new B.F9(x,B.c1J(x,B.c2v(v,x)),w)},
c1J(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=A.a([],y.s)
for(x=a5.length,w=0;w<a5.length;a5.length===x||(0,A.B)(a5),++w)a4.push(a5[w].b)
v=a4.length
u=a6.length
t=u+1
x=(v+1)*t
s=y.i
r=A.bQ(x,0,!1,s)
q=A.bQ(x,0,!1,y.S)
p=A.bQ(v*(u===0?1:u),0,!1,s)
for(o=0;o<v;++o)for(x=o*u,n=0;n<u;++n)p[x+n]=B.bx8(a4[o],a6[n])
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
e=2}if(n>=2&&r[h-2]<g&&B.bx8(a4[m],a6[n-2]+a6[n-1])>=1){g=r[h-2]
e=3}if(s&&r[i+n-1]<g&&B.bx8(a4[j]+a4[m],a6[n-1])>=1){g=r[i+n-1]
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
if(a2>=1)m=D.h4
else m=a2>=0.6?D.pN:D.pO
a1.push(new B.m1(o,x,s,m))
break
case 1:--o
a1.push(new B.m1(o,a4[o],null,D.pP))
break
case 2:--n
a1.push(new B.m1(null,null,a6[n],D.Wj))
break
case 3:--o
a3=n-2
a1.push(new B.m1(o,a4[o],a6[a3]+" "+a6[n-1],D.h4))
n=a3
break
default:x=o-1;--n
a1.push(new B.m1(x,a4[x],a6[n],D.h4))
o-=2
a1.push(new B.m1(o,a4[o],a6[n],D.h4))}}a4=y.e
a4=A.a0(new A.cC(a1,a4),a4.i("aG.E"))
return a4},
mE:function mE(d,e){this.a=d
this.b=e},
OD:function OD(d,e){this.a=d
this.b=e},
m1:function m1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
F9:function F9(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
aMD:function aMD(d){this.a=d},
aMC:function aMC(){},
bsr:function bsr(){},
btV:function btV(){},
bSm(d,e,f){return new B.q9(d,e,f)},
c4y(d){var x
A:{if("memorized"===d){x=D.e0
break A}if("learning"===d){x=D.m0
break A}x=D.m_
break A}return x},
bNM(d,e){return d>=1&&d<=114&&e>=1&&e<=I.c7[d-1].a[1]},
c_j(){var x=y.S
return new B.acc(A.x(x,y.u),A.aF(x))},
aVs(d){var x=d.io()
return C.c.dt(C.e.j(A.cK(x)),4,"0")+"-"+C.c.dt(C.e.j(A.ci(x)),2,"0")+"-"+C.c.dt(C.e.j(A.cA(x)),2,"0")},
bIV(d){var x=y.x,w=A.a0(new A.aj(A.a(d.split("-"),y.s),A.c5P(),x),x.i("aG.E"))
return B.aVs(A.jI(w[0],w[1],w[2]-1,12,0,0,0))},
bAc(d){var x,w,v,u,t,s,r,q,p=y.S,o=A.x(p,y.u),n=A.aF(p),m=new B.acc(o,n),l=d.h(0,"rows")
if(y.f.b(l))for(x=l.gdv(),x=x.ga_(x),w=y.j;x.u();){v=x.gK()
u=A.f1(A.h(v.a),null)
t=v.b
v=!0
if(u!=null)if(w.b(t))if(J.bf(t)>=3){v=C.e.ba(u,1000)
s=C.e.ah(u,1000)
v=!(v>=1&&v<=114&&s>=1&&s<=I.c7[v-1].a[1])}if(v)continue
v=J.bp(t)
r=C.d.bU(A.dp(v.h(t,0)))
if(r<0||r>=3)continue
o.n(0,u,new B.q9(D.arp[r],C.d.bU(A.dp(v.h(t,1))),new A.b1(A.kq(C.d.bU(A.dp(v.h(t,2))),0,!0),0,!0)))}q=d.h(0,"dirty")
if(y.j.b(q)){x=J.bxJ(q,y.o)
p=A.no(x,new B.aVr(),x.$ti.i("M.E"),p)
n.E(0,new A.aH(p,o.gWe(),A.w(p).i("aH<M.E>")))}m.c=A.O(d.h(0,"last"))
p=A.bm(d.h(0,"streak"))
p=p==null?null:C.d.bU(p)
p=m.d=p==null?0:p
o=A.bm(d.h(0,"best"))
o=o==null?null:C.d.bU(o)
m.e=o==null?p:o
return m},
aro(d,e){return"https://everyayah.com/data/Husary_Muallim_128kbps/"+C.c.dt(C.e.j(d),3,"0")+C.c.dt(C.e.j(e),3,"0")+".mp3"},
C5:function C5(d,e){this.a=d
this.b=e},
q9:function q9(d,e,f){this.a=d
this.b=e
this.c=f},
acc:function acc(d,e){var _=this
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
bXQ(){return new B.vb(null)},
c8e(d,e){var x,w,v,u,t={},s=I.c7[e-1].a[1],r=$.Ji().c
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
t.c=x?s:C.e.cA(u+4,1,s)
return A.fA(C.dc,new B.bw5(t,s,e),d,!0,null,null,!1,y.l)},
bBW(d){return A.d6(0,0,0,0,0,C.e.cA(C.d.ar(6+d*1.2),25,90))},
bAT(d){return E.aZ(C.e.ba(d,60))+":"+C.c.dt(E.aZ(C.e.ah(d,60)),2,"\u0660")},
bNx(d){return A.fA(C.dc,new B.bwO($.Ji()),d,!0,null,null,!1,y.H)},
Jb(d){var x,w=d.a
A:{if("timeout"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0627\u062a\u0623\u062e\u0631 \u0623\u0648\u064a \u0648\u0645\u0631\u062f\u0651\u0634\u060c \u0641\u0648\u0642\u0651\u0641\u0646\u0627\u0647 \u0648\u062c\u0631\u0651\u0628\u0646\u0627 \u062a\u0627\u0646\u064a \u0628\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0623\u062e\u0641 \u0648\u0645\u0646\u0641\u0639\u0634. \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}if("crashed"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0642\u0641 \u0641\u062c\u0623\u0629 (\u063a\u0627\u0644\u0628\u064b\u0627 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0634 \u0645\u0643\u0641\u064a\u0629). \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}x=d.gjT()
break A}return x},
c9w(d,e,f){var x,w=new B.bx1(),v=w.$1(f),u=w.$1("\xab\u0627\u0644\u0645\u062d\u0641\u0651\u0638\xbb \u0645\u0634\u0643\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 ("+e+")\n"+d.a+": "+d.b+"\n"),t=1990-u.length
if(v.length>t)v=t<=1?"":C.c.Y(v,0,t-1)+"\u2026"
x=u+v
return x.length>1990?C.c.Y(x,0,1990):x},
bNH(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
try{x=y.P.a(C.a1.eV(a4,null))
s=y.Y
r=s.a(J.b4(x,"rec"))
w=r==null?C.cE:r
q=s.a(J.b4(x,"last"))
v=q==null?C.cE:q
u=new B.bx0()
s=J.b4(v,"recovered")
t=A.h(s==null?"":s)
s=A.h(u.$1(J.b4(w,"wall")))
p=A.h(u.$1(J.b4(w,"source")))
o=A.h(u.$1(J.b4(w,"ctxRate")))
n=A.h(u.$1(J.b4(w,"pcmPeak")))
m=A.h(u.$1(J.b4(w,"ctxState")))
l=A.h(u.$1(J.b4(w,"stopMs")))
k=A.h(u.$1(J.b4(v,"prepMs")))
j=A.h(u.$1(J.b4(v,"ms")))
i=A.h(u.$1(J.b4(v,"featMs")))
h=A.h(u.$1(J.b4(v,"encMs")))
g=A.h(u.$1(J.b4(v,"decMs")))
f=A.h(u.$1(J.b4(v,"wallMs")))
e=A.h(u.$1(J.b4(v,"backend")))
d=A.h(u.$1(J.b4(v,"threads")))
a0=J.bf(t)!==0?" \xb7 recovered from "+A.h(t):""
a1=J.c(J.b4(x,"safe"),!0)?" \xb7 safe mode":""
a2=J.c(J.b4(x,"nogpu"),!0)?" \xb7 no-gpu":""
return"record "+s+" s ("+p+", "+o+" Hz, peak "+n+", "+m+") \u2192 stop/decode "+l+" ms \u2192 resample "+k+" ms \u2192 infer "+j+" ms (mel "+i+", enc "+h+", dec "+g+") \u2192 wall "+f+" ms \xb7 "+e+" \xd7"+d+a0+a1+a2}catch(a3){return""}},
Ed:function Ed(d,e){this.a=d
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
vb:function vb(d){this.a=d},
Vf:function Vf(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.w=_.r=null},
bhC:function bhC(d){this.a=d},
bhB:function bhB(d,e){this.a=d
this.b=e},
bhD:function bhD(d){this.a=d},
bhA:function bhA(d,e){this.a=d
this.b=e},
bhE:function bhE(){},
bho:function bho(){},
bhu:function bhu(d,e,f){this.a=d
this.b=e
this.c=f},
bhv:function bhv(){},
bhy:function bhy(d){this.a=d},
bhx:function bhx(){},
bhz:function bhz(d){this.a=d},
bhr:function bhr(d,e){this.a=d
this.b=e},
bhs:function bhs(d){this.a=d},
bhq:function bhq(){},
bht:function bht(d){this.a=d},
bhp:function bhp(d){this.a=d},
bhw:function bhw(d,e){this.a=d
this.b=e},
Ee:function Ee(d,e,f){this.c=d
this.d=e
this.a=f},
T3:function T3(d,e){this.c=d
this.a=e},
bw5:function bw5(d,e,f){this.a=d
this.b=e
this.c=f},
bw2:function bw2(d,e,f){this.a=d
this.b=e
this.c=f},
bw4:function bw4(d,e){this.a=d
this.b=e},
bw1:function bw1(d,e){this.a=d
this.b=e},
bw0:function bw0(d,e){this.a=d
this.b=e},
bw3:function bw3(d,e){this.a=d
this.b=e},
bvX:function bvX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bvW:function bvW(d,e,f){this.a=d
this.b=e
this.c=f},
bvY:function bvY(d){this.a=d},
bvZ:function bvZ(d){this.a=d},
bw_:function bw_(d,e){this.a=d
this.b=e},
Be:function Be(d,e){this.a=d
this.b=e},
Av:function Av(d,e,f,g,h){var _=this
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
bpt:function bpt(){},
bpJ:function bpJ(d,e){this.a=d
this.b=e},
bpN:function bpN(d){this.a=d},
bpO:function bpO(d){this.a=d},
bpP:function bpP(d,e,f){this.a=d
this.b=e
this.c=f},
bpR:function bpR(d){this.a=d},
bpS:function bpS(d){this.a=d},
bpQ:function bpQ(){},
bpU:function bpU(d){this.a=d},
bpT:function bpT(d){this.a=d},
bpV:function bpV(d,e){this.a=d
this.b=e},
bpX:function bpX(d){this.a=d},
bpY:function bpY(d){this.a=d},
bpW:function bpW(){},
bpI:function bpI(d,e,f){this.a=d
this.b=e
this.c=f},
bpK:function bpK(d,e,f){this.a=d
this.b=e
this.c=f},
bpB:function bpB(d){this.a=d},
bpC:function bpC(d){this.a=d},
bpA:function bpA(){},
bpD:function bpD(){},
bpE:function bpE(d,e){this.a=d
this.b=e},
bq2:function bq2(d){this.a=d},
bq3:function bq3(d){this.a=d},
bq4:function bq4(d,e){this.a=d
this.b=e},
bq1:function bq1(d){this.a=d},
bq5:function bq5(d,e){this.a=d
this.b=e},
bpH:function bpH(){},
bpG:function bpG(d){this.a=d},
bpF:function bpF(d,e){this.a=d
this.b=e},
bpM:function bpM(d){this.a=d},
bpL:function bpL(d){this.a=d},
bpZ:function bpZ(){},
bq_:function bq_(){},
bq0:function bq0(){},
bpu:function bpu(d,e,f){this.a=d
this.b=e
this.c=f},
bpv:function bpv(d){this.a=d},
bpx:function bpx(){},
bpw:function bpw(){},
bpy:function bpy(d){this.a=d},
bpz:function bpz(d){this.a=d},
AK:function AK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Au:function Au(d,e,f,g,h){var _=this
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
bpc:function bpc(){},
bpl:function bpl(d,e){this.a=d
this.b=e},
bpm:function bpm(d){this.a=d},
bpk:function bpk(){},
bpo:function bpo(d){this.a=d},
bpn:function bpn(d,e){this.a=d
this.b=e},
bpp:function bpp(d,e){this.a=d
this.b=e},
bpg:function bpg(d,e){this.a=d
this.b=e},
bph:function bph(d,e,f){this.a=d
this.b=e
this.c=f},
bpi:function bpi(d,e,f){this.a=d
this.b=e
this.c=f},
bpd:function bpd(d,e,f){this.a=d
this.b=e
this.c=f},
bpe:function bpe(d,e,f){this.a=d
this.b=e
this.c=f},
bpf:function bpf(d,e){this.a=d
this.b=e},
bpj:function bpj(d){this.a=d},
bpq:function bpq(){},
bpr:function bpr(d,e){this.a=d
this.b=e},
bps:function bps(d,e){this.a=d
this.b=e},
At:function At(d){this.a=d},
Xd:function Xd(d){this.d=d
this.c=this.a=null},
bp3:function bp3(){},
bpa:function bpa(d){this.a=d},
bpb:function bpb(){},
bp9:function bp9(d,e){this.a=d
this.b=e},
bp8:function bp8(d,e,f){this.a=d
this.b=e
this.c=f},
bp7:function bp7(d,e,f){this.a=d
this.b=e
this.c=f},
bp6:function bp6(d){this.a=d},
bp4:function bp4(d){this.a=d},
bp5:function bp5(d){this.a=d},
bwO:function bwO(d){this.a=d},
bwN:function bwN(d){this.a=d},
bwI:function bwI(d,e){this.a=d
this.b=e},
bwK:function bwK(){},
bwJ:function bwJ(){},
bwL:function bwL(d,e){this.a=d
this.b=e},
bwM:function bwM(d,e){this.a=d
this.b=e},
aca:function aca(d){this.a=d},
aVf:function aVf(d){this.a=d},
bx1:function bx1(){},
bx2:function bx2(){},
Aw:function Aw(d,e,f){this.c=d
this.d=e
this.a=f},
Xg:function Xg(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.r=null},
bq6:function bq6(d){this.a=d},
bq7:function bq7(d){this.a=d},
bq8:function bq8(d,e){this.a=d
this.b=e},
bq9:function bq9(d){this.a=d},
bqb:function bqb(d){this.a=d},
bqa:function bqa(d){this.a=d},
bx0:function bx0(){}},D,Q,I,E,F
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
B.acb.prototype={
pk(){var x=this,w=x.a
if(w!=null)return A.dN(w,y.m)
w=x.b
return w==null?x.b=new B.aVg(x).$0():w},
rj(d,e){return this.azr(d,e,e)},
azr(d,e,f){var x=0,w=A.o(f),v,u=2,t=[],s,r,q,p
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
r=B.c_h(s)
throw A.p(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$rj,w)},
mW(d,e){var x=A.hy(d[e])
if(x==null)x=null
return x===!0},
Hb(){var x=0,w=A.o(y.X),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Hb=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
h=A
g=A
x=7
return A.d(s.pk(),$async$Hb)
case 7:r=h.cp(g.cg(e,"support",null,null,null,null))
q=s.mW(r,"worker")
p=s.mW(r,"wasm")
o=s.mW(r,"mic")
n=s.mW(r,"audio")
s.mW(r,"webgpu")
m=s.mW(r,"secure")
s.mW(r,"ios")
l=A.jA(r.memory)
if(l==null)l=null
if(l==null)l=0
s.mW(r,"isolated")
k=A.jA(r.cores)
if(k!=null)C.d.ar(k)
v=new B.Rl(q,p,o,n,m,l)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=D.VV
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$Hb,w)},
AS(){var x=0,w=A.o(y.M),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$AS=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=A
l=A
k=A
x=8
return A.d(s.pk(),$async$AS)
case 8:x=7
return A.d(m.e2(l.cp(k.cg(e,"storage",null,null,null,null)),y.A),$async$AS)
case 7:r=e
if(r==null){v=null
x=1
break}q=C.d.ar(A.dl(r.quota))
p=C.d.ar(A.dl(r.usage))
v=new A.alp(q,p)
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
b0p(){var x=y.K
A.M_(this.pk().bM(new B.aVj(),x),x)},
pj(d,e){var x=A.jA(d[e])
x=x==null?null:C.d.ar(x)
return x==null?0:x},
aYW(d,e,f){return this.rj(new B.aVi(this,d,e,f),y.C)},
gaa1(){var x,w
try{x=A.jB(b.G.sessionStorage)
return x}catch(w){return null}},
gagK(){var x=A.hy(b.G.mogtama3yTutorIsolated)
if(x==null)x=null
return x===!0},
a0q(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
try{m=b.G
l=A.hy(m.crossOriginIsolated)
if(l==null)l=f
if(l===!0)return!1
if(this.gagK())return!1
l=A.hy(m.isSecureContext)
if(l==null)l=f
if(l!==!0)return!1
x=A.cp(m.navigator)
if(!("serviceWorker" in x))return!1
w=A.a8(x.userAgent)
l=A.jA(x.maxTouchPoints)
k=l==null?f:l
v=k==null?0:k
l=A.O(x.platform)
j=l==null?f:l
u=j==null?"":j
l=A.aQ("iPad|iPhone|iPod",!0,!1)
if(!l.b.test(w))i=J.c(u,"MacIntel")&&v>1
else i=!0
t=i
l=A.aQ("Chrome/|Chromium/|Firefox/|Edg/",!0,!1)
s=l.b.test(w)
if(t||!s)return!1
l=A.jA(x.hardwareConcurrency)
h=l==null?f:l
r=h==null?0:h
if(r>0&&r<3)return!1
q=Date.now()
l=this.gaa1()
l=l==null?f:A.O(A.cg(l,"getItem","mt.tutor.iso",f,f,f))
if(l==null)l=f
p=A.f1(l==null?"":l,f)
if(p!=null&&q-p<3e4)return!1
o=A.jB(m.localStorage)
m=o
m=m==null?f:A.O(A.cg(m,"getItem","mt.tutor.noiso",f,f,f))
if(m==null)m=f
n=A.f1(m==null?"":m,f)
if(n!=null&&q-n<2592e5)return!1
return!0}catch(g){return!1}},
afp(){var x,w,v,u,t,s,r=null
try{x=this.gaa1()
if(x!=null)A.cg(x,"setItem","mt.tutor.iso",""+Date.now(),r,r)}catch(w){}x=b.G
v=A.cp(x.location)
u=A.a8(v.hash)
t=A.a8(v.search)
s=A.bO(A.a8(A.cp(x.document).baseURI),0,r).W("tutor/").j(0)
x=u.length===0?"#/masjid/tools/tutor":u
A.cg(v,"replace",s+t+x,r,r,r)},
aYF(){var x,w=null,v=b.G,u=A.cp(v.history),t=A.jA(u.length),s=t==null?w:t
if((s==null?0:s)>1)A.cg(u,"back",w,w,w,w)
else{x=A.a8(A.cp(v.document).baseURI)
A.cg(A.cp(v.location),"replace",A.bO(x,0,w).W("./").j(0)+"#/",w,w,w)}},
a0C(d,e,f,g,h){return this.rj(new B.aVn(this,e,d,f,h,g),y.H)},
a0F(){return this.rj(new B.aVo(this),y.D)},
VS(){var x=null,w=this.a
if(w!=null)A.cg(w,"cancelRecording",x,x,x,x)},
abf(d){var x,w,v=this,u=A.O(d.text)
if(u==null)u=null
if(u==null)u=""
x=v.pj(d,"ms")
w=A.jA(d.seconds)
if(w==null)w=null
if(w==null)w=0
return new B.Gs(u,x,w,v.pj(d,"frames"),v.pj(d,"tokens"),v.mW(d,"retried"),v.pj(d,"encMs"),v.pj(d,"decMs"),v.pj(d,"featMs"))},
a84(d){var x={}
x.words=d
return x},
ajA(d,e){return this.rj(new B.aVq(this,d,e),y._)},
b2z(d,e){return this.rj(new B.aVp(this,d,e),y._)},
Ft(d,e){return this.b0u(d,e)},
b0u(d,e){var x=0,w=A.o(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Ft=A.k(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=p==null?7:9
break
case 7:x=10
return A.d(s.pk(),$async$Ft)
case 10:x=8
break
case 9:g=p
case 8:r=g
o=A.ae(d).i("aj<1,f>")
o=A.a0(new A.aj(d,new B.aVk(),o),o.i("aG.E"))
x=11
return A.d(A.e2(A.cp(A.cg(r,"play",o,e,null,null)),y.y),$async$Ft)
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
return A.n($async$Ft,w)},
GS(){var x=null,w=this.a
if(w!=null)A.cg(w,"stopPlayback",x,x,x,x)},
Ea(){var x,w,v,u=null
try{w=this.a
x=w==null?u:A.a8(A.cg(w,"diag",u,u,u,u))
w=x
if(w==null)w=u
if(w==null)w="{}"
return w}catch(v){return"{}"}},
b1K(){var x,w,v=null
try{x=this.a
if(x!=null)A.cg(x,"resetDevice",v,v,v,v)}catch(w){}},
Z8(d){var x=this.a
if(x!=null)A.cg(x,"prefetch",d,null,null,null)}}
B.Rl.prototype={}
B.Gq.prototype={
glH(){var x=this.f,w=x>0?"CPU \xd7"+x:""
x=this.a
if(x==="webgpu")return"WebGPU"
if(C.c.m(x,"webgpu"))return"WebGPU + "+w
return w.length===0?x:w}}
B.Gs.prototype={
gLX(){var x=this,w=C.d.aA(x.d/100,0),v=x.f?" (retried on 30 s)":""
return"window "+w+" s, "+x.e+" tokens"+v+", mel "+x.x+" ms, encoder "+x.r+" ms, decoder "+x.w+" ms"}}
B.Gr.prototype={}
B.kO.prototype={
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
$ibo:1}
B.mE.prototype={
N(){return"WordStatus."+this.b}}
B.OD.prototype={}
B.m1.prototype={
j(d){var x,w=this.b
if(w==null)w=""
x=this.c
if(x==null)x=""
return this.d.b+":"+w+"->"+x}}
B.F9.prototype={
gGQ(){var x,w=this,v=w.d
if(v===$){x=new B.aMD(w).$0()
w.d!==$&&A.aE()
w.d=x
v=x}return v},
gEr(){var x,w,v,u,t,s=A.a([],y.s)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.d===D.Wj&&u.c!=null){t=u.c
t.toString
s.push(t)}}return s},
gaZM(){return J.om(this.gGQ(),new B.aMC()).gL(0)},
gqs(){var x=this.a
return x.length!==0&&this.gaZM()===x.length&&this.gEr().length===0}}
B.C5.prototype={
N(){return"AyahStatus."+this.b}}
B.q9.prototype={}
B.acc.prototype={
YI(d,e){var x=this.a.h(0,d*1000+e)
return x==null?$.pZ():x},
aJ1(d){var x=this,w=B.aVs(d),v=x.c
if(v===w)return
v=v!=null&&v===B.bIV(w)?x.d+1:1
x.d=v
if(v>x.e)x.e=v
x.c=w},
aeC(){var x=Date.now(),w=B.aVs(new A.b1(x,0,!1))
x=this.c
return x===w||x===B.bIV(w)?this.d:0},
aiF(d,e,f,g){var x=this,w=new A.b1(Date.now(),0,!1),v=x.YI(d,e),u=g?C.e.cA(v.b+1,0,100):0,t=g&&u>=f?D.e0:D.m0,s=new B.q9(t,u,w.hA()),r=d*1000+e
x.a.n(0,r,s)
x.b.D(0,r)
x.aJ1(w)
return s},
Yz(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.c7[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pZ():s).a===D.e0)++u}return u},
aYD(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.c7[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pZ():s).a===D.m0)++u}return u},
gahO(){var x=this.a,w=A.w(x).i("c7<2>")
return new A.aH(new A.c7(x,w),new B.aVt(),w.i("aH<M.E>")).gL(0)},
gamF(){var x=this.a,w=A.w(x).i("bh<1>")
w=A.no(new A.bh(x,w),new B.aVu(),w.i("M.E"),y.S)
w=A.et(w,A.w(w).i("M.E"))
x=A.a0(w,A.w(w).c)
C.b.lc(x)
return x},
cV(){var x,w,v,u,t,s=this,r=y.N,q=A.x(r,y.L)
for(x=s.a,x=new A.dP(x,A.w(x).i("dP<1,2>")).ga_(0),w=y.t;x.u();){v=x.d
u=v.a
t=v.b
q.n(0,""+u,A.a([t.a.a,t.b,t.c.a],w))}x=s.b
x=A.a0(x,A.w(x).c)
return A.K(["v",1,"rows",q,"dirty",x,"last",s.c,"streak",s.d,"best",s.e],r,y.z)},
aUE(){var x,w,v,u,t,s,r,q,p,o=A.a([],y.Z)
for(x=this.b,x=A.bA0(x,300,A.w(x).c),x=new A.Ga(J.ay(x.a),x.b,A.w(x).i("Ga<1>")),w=y.N,v=y.z,u=this.a;x.u();){t=x.gK()
s=C.e.ba(t,1000)
t=C.e.ah(t,1000)
r=s*1000+t
q=u.h(0,r)
q=(q==null?$.pZ():q).a===D.e0?"memorized":"learning"
p=u.h(0,r)
if(p==null)p=$.pZ()
r=u.h(0,r)
o.push(A.K(["surah",s,"ayah",t,"status",q,"perfect_count",p.b,"updated_at",(r==null?$.pZ():r).c.iX()],w,v))}return o},
aZd(d){var x,w,v,u,t,s,r
for(x=d.length,w=this.a,v=this.b,u=0;u<d.length;d.length===x||(0,A.B)(d),++u){t=d[u]
s=A.ev(t.h(0,"surah"))*1000+A.ev(t.h(0,"ayah"))
r=w.h(0,C.e.ba(s,1000)*1000+C.e.ah(s,1000))
if((r==null?$.pZ():r).c.iX()===t.h(0,"updated_at"))v.I(0,s)}},
aZl(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(x=J.ay(d),w=this.b,v=this.a,u=y.f,t=!1;x.u();){s=x.gK()
if(!u.b(s))continue
r=A.bm(s.h(0,"surah"))
q=r==null?null:C.d.bU(r)
r=A.bm(s.h(0,"ayah"))
p=r==null?null:C.d.bU(r)
o=A.fn(A.h(s.h(0,"updated_at")))
r=!0
if(q!=null)if(p!=null)if(o!=null)r=!(q>=1&&q<=114&&p>=1&&p<=I.c7[q-1].a[1])
if(r)continue
n=B.c4y(s.h(0,"status"))
if(n===D.m_)continue
r=q*1000+p
m=v.h(0,r)
if(m!=null){l=m.c
k=o.a
j=l.a
if(k<=j)l=k===j&&o.b>l.b
else l=!0
l=!l}else l=!1
if(l)continue
l=A.bm(s.h(0,"perfect_count"))
l=l==null?null:C.d.bU(l)
v.n(0,r,new B.q9(n,C.e.cA(l==null?0:l,0,100),o.hA()))
w.I(0,r)
t=!0}return t}}
B.Rj.prototype={
E_(d,e,f,g,h){var x=this,w=g==null?x.a:g,v=h==null?x.b:h,u=d==null?x.c:d,t=e==null?x.d:e
return new B.Rj(w,v,u,t,f==null?x.e:f)},
aT6(d){var x=null
return this.E_(x,x,d,x,x)},
aec(d){var x=null
return this.E_(x,d,x,x,x)},
aTa(d){var x=null
return this.E_(x,x,x,x,d)},
aSB(d){var x=null
return this.E_(d,x,x,x,x)},
aT7(d){var x=null
return this.E_(x,x,x,d,x)},
cV(){var x=this
return A.K(["n",x.a,"r",x.b,"auto",x.c,"hide",x.d,"in",x.e],y.N,y.z)}}
B.Ed.prototype={
N(){return"ModelState."+this.b}}
B.Rk.prototype={
Y3(){var x=this.Q
return x==null?this.Q=new B.aVv(this).$0():x},
oU(d){return this.alb(d)},
alb(d){var x=0,w=A.o(y.H),v=this
var $async$oU=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:v.b=d
v.X()
x=2
return A.d(A.ib("mt.tutor.settings",C.a1.ht(d.cV(),null)),$async$oU)
case 2:return A.m(null,w)}})
return A.n($async$oU,w)},
x3(){var x=0,w=A.o(y.H),v=this,u
var $async$x3=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:v.X()
x=2
return A.d(A.ib("mt.tutor.progress",C.a1.ht(v.c.cV(),null)),$async$x3)
case 2:u=v.as
if(u!=null)u.aF()
v.as=A.cE(C.y,v.garx())
return A.m(null,w)}})
return A.n($async$x3,w)},
GB(d,e,f){return this.alR(d,e,f)},
alR(d,e,f){var x=0,w=A.o(y.H),v=this
var $async$GB=A.k(function(g,h){if(g===1)return A.l(h,w)
for(;;)switch(x){case 0:v.z=new A.bP(d,e,f)
x=2
return A.d(A.ib("mt.tutor.last",C.a1.ht(A.K(["s",d,"f",e,"t",f],y.N,y.S),null)),$async$GB)
case 2:return A.m(null,w)}})
return A.n($async$GB,w)},
zI(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$zI=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=s.f
if(n===D.Oh||n===D.hP){x=1
break}s.f=D.Oh
s.y=null
s.X()
u=4
n=A.k6().gep().h(0,"tutor_device")
if(n==null)n="auto"
p=A.k6().gep().h(0,"tutor_threads")
p=A.f1(p==null?"":p,null)
if(p==null)p=0
x=7
return A.d(s.a.aYW(new B.aVw(s),n,p),$async$zI)
case 7:s.x=e
s.f=D.hP
n=A.k6().gep().h(0,"debug")
if(n==="1"){n=s.x
n.toString
r=n
A.tr().$1("[tutor] model ready: "+r.a+" "+r.b+" threads="+r.f+" isolated="+r.r+" in "+r.c+" ms (warm-up "+r.w+" ms, cached before: "+r.d+")")}u=2
x=6
break
case 4:u=3
m=t.pop()
n=A.Y(m)
if(n instanceof B.kO){q=n
s.f=D.axX
s.y=q
n=A.k6().gep().h(0,"debug")
if(n==="1")A.tr().$1("[tutor] model failed: "+A.h(q))}else throw m
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
try{k=$.ac().b
k===$&&A.b()
k=k.gc2().e.a
q=(k==null?null:k.r)!=null}catch(d){x=1
break}if(!q){x=1
break}r.at=!0
u=4
k=$.ac().b
k===$&&A.b()
p=k
x=7
return A.d(p.cT("quran_tutor_progress").h2("surah, ayah, status, perfect_count, updated_at"),$async$ut)
case 7:o=a1
n=r.c.aZl(o)
m=0,k=y.N,i=y.z
case 8:if(!(m<25)){x=10
break}l=r.c.aUE()
if(J.bf(l)===0){x=10
break}h=p
g=A.K(["p_rows",l],k,i)
f=h.CW
f===$&&A.b()
f.b.E(0,A.m9(h.x,k,k))
x=11
return A.d(f.b26("quran_tutor_save",!1,g,i),$async$ut)
case 11:r.c.aZd(l)
case 9:++m
x=8
break
case 10:x=12
return A.d(A.ib("mt.tutor.progress",C.a1.ht(r.c.cV(),null)),$async$ut)
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
FI(d){return this.b1M(d)},
b1M(d){var x=0,w=A.o(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$FI=A.k(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:p=B.bAc(t.c.cV()).cV()
y.f.a(p.h(0,"rows")).dJ(0,new B.aVx(d))
t.c=B.bAc(p)
x=2
return A.d(t.x3(),$async$FI)
case 2:v=4
s=$.ac().b
s===$&&A.b()
r=s.gc2().e.a
x=(r==null?null:r.r)!=null?7:8
break
case 7:r=y.z
x=9
return A.d(s.bi("quran_tutor_reset",A.K(["p_surah",d],y.N,r),r),$async$FI)
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
return A.n($async$FI,w)}}
B.vb.prototype={
V(){var x=$.Ji()
return new B.Vf(x,new A.b7(C.U,$.a7()))}}
B.Vf.prototype={
aa(){var x,w,v=this
v.ao()
x=v.d
x.a5(v.gn5())
w=y.a
x.Y3().bM(new B.bhC(v),w)
H.aL6().bM(new B.bhD(v),w).hr(new B.bhE())
A.M_(H.bzD(),y.y)},
ve(){if(this.c!=null)this.t(new B.bho())},
l(){var x,w=this
w.d.S(w.gn5())
x=w.e
x.p$=$.a7()
x.U$=0
w.aq()},
Jj(){var x=0,w=A.o(y.H),v,u=this,t,s
var $async$Jj=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:s=u.d
x=3
return A.d(s.oU(s.b.aT6(!0)),$async$Jj)
case 3:t=s.a
t.b0p()
if(t.a0q()){t.afp()
x=1
break}s.zI()
case 1:return A.m(v,w)}})
return A.n($async$Jj,w)},
vf(d,e,f){return this.aHp(d,e,f)},
aOs(d){return this.vf(d,null,null)},
aHp(d,e,f){var x=0,w=A.o(y.H),v,u=this,t,s,r
var $async$vf=A.k(function(g,h){if(g===1)return A.l(h,w)
for(;;)switch(x){case 0:if(u.w==null){u.c.R(y.q).f.aT(A.by(null,null,null,null,null,C.k,null,A.j("\u0644\u062d\u0638\u0629\u2026 \u0628\u0646\u062c\u0647\u0651\u0632 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641",null,null,null,null,null,null,null,null,null),null,C.y,null,null,null,null,null,null,null,null,null,null))
x=1
break}x=e!=null&&f!=null?3:5
break
case 3:t=new A.R(e,f)
x=4
break
case 5:s=u.c
s.toString
x=6
return A.d(B.c8e(s,d),$async$vf)
case 6:t=h
case 4:if(t==null||u.c==null){x=1
break}x=7
return A.d(u.d.GB(d,t.a,t.b),$async$vf)
case 7:s=u.c
if(s==null){x=1
break}r=y.z
x=8
return A.d(A.al(s,!1).cU(A.cU(new B.bhu(u,d,t),null,r),r),$async$vf)
case 8:if(u.c!=null)u.t(new B.bhv())
case 1:return A.m(v,w)}})
return A.n($async$vf,w)},
A(d){var x=null,w=this.d,v=w.b,u=A.a([],y.p),t=w.a
if(t.gagK()&&!A.al(d,!1).VP())u.push(A.cw(x,x,x,x,D.ae8,x,x,t.gaYE(),x,x,x,"\u0631\u062c\u0648\u0639 \u0644\u0645\u0633\u062c\u062f\u064a",x))
t=v.e
if(t)u.push(A.cw(x,x,x,x,D.af7,x,x,new B.bhy(d),x,x,x,"\u062a\u0642\u062f\u0651\u0645\u064a",x))
u.push(A.cw(x,x,x,x,D.Ca,x,x,new B.bhz(d),x,x,x,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",x))
if(!w.e)w=D.ao4
else w=t?this.aDK():this.aEa()
return M.vX(u,w,"\u0627\u0644\u0645\u062d\u0641\u0651\u0638")},
aEa(){var x,w,v,u,t,s,r,q,p=null,o=this.d.d
if(o==null)o=D.VV
x=this.r
w=x==null?p:x.a-x.b
if(!(o.a&&o.b))v="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u062f\u0639\u0645 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638. \u062c\u0631\u0651\u0628 \u0623\u062d\u062f\u062b \u0646\u0633\u062e\u0629 \u0645\u0646 Chrome (\u0623\u0646\u062f\u0631\u0648\u064a\u062f) \u0623\u0648 Safari (\u0622\u064a\u0641\u0648\u0646)."
else if(!o.f)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0641\u062a\u062d \u0639\u0644\u0649 https \u0639\u0634\u0627\u0646 \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0627\u064a\u0643."
else v=!o.c||!o.d?"\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u0633\u0645\u062d \u0628\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0646 \u0627\u0644\u0645\u0627\u064a\u0643.":p
x=y.p
u=A.a([D.aJy,C.an],x)
for(t=0;t<4;++t){s=D.apC[t]
u.push(new A.a_(C.bC,A.ak(A.a([A.c6(s.a,C.a6,p,18),C.as,new A.dE(1,C.aU,A.j(s.b,p,p,p,p,p,G.UV,p,p,p),p)],x),C.A,C.f,C.h,0,p,p),p))}u=A.ad(u,C.A,C.f,C.h)
s=A.a([D.b02,C.T,A.j("\u0647\u0646\u062d\u0645\u0651\u0644 \u0645\u0644\u0641 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 (\u062d\u0648\u0627\u0644\u064a "+E.aZ(105)+" \u0645\u064a\u062c\u0627) \u0648\u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0648\u0628\u0639\u062f \u0643\u062f\u0647 \u0628\u064a\u0641\u062a\u062d \u0645\u0646 \u063a\u064a\u0631 \u062a\u062d\u0645\u064a\u0644. \u064a\u064f\u0641\u0636\u0651\u0644 \u062a\u0643\u0648\u0646 \u0639\u0644\u0649 Wi-Fi.",p,p,p,p,p,F.ak,p,p,p)],x)
if(w!=null){r=w<3e8
q=r?"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0645\u062a\u0635\u0641\u062d \u0642\u0644\u064a\u0644\u0629 ("+E.aZ(C.d.ar(w/1e6))+" \u0645\u064a\u062c\u0627) \u2014 \u0641\u0636\u0651\u064a \u0634\u0648\u064a\u0629 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0623\u0648\u0644.":"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629: \u0643\u0641\u0627\u064a\u0629 \u2713"
C.b.E(s,A.a([C.T,A.j(q,p,p,p,p,p,A.cy(p,p,r?D.d0:C.cr,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x))}r=o.w
if(r>0&&r<3)C.b.E(s,A.a([C.T,D.b_A],x))
x=A.a([new E.cW(u,C.af,C.aA,p,!0,p),new E.cW(A.ad(s,C.A,C.f,C.h),C.af,C.aA,p,!1,p),D.b6S,C.T],x)
if(v!=null)x.push(new E.cW(A.j(v,p,p,p,p,p,D.aSC,p,p,p),C.af,C.aA,p,!1,p))
else x.push(A.jM(D.ads,D.aVU,this.gaHz(),A.ij(C.p,C.a5,D.aM5,p,p,p,p)))
x.push(C.aJ)
x.push(D.VU)
return x},
aDK(){var x,w,v=this,u=null,t=v.d,s=t.c,r=v.e,q=C.c.al(r.a.a),p=q.length===0,o=p?C.um:H.bNp(q),n=t.z,m=A.aP(v.aaC(C.fy,E.aZ(s.gahO())+" \u0622\u064a\u0629","\u062d\u0641\u0638\u062a\u0647\u0627"),1),l=E.aZ(s.aeC()),k=s.c,j=Date.now()
k=k===B.aVs(new A.b1(j,0,!1))?"\u0648\u0631\u0627 \u0628\u0639\u0636 \u2014 \u0643\u0645\u0651\u0644!":"\u0633\u0645\u0651\u0639 \u0627\u0644\u0646\u0647\u0627\u0631\u062f\u0647 \u0639\u0634\u0627\u0646 \u062a\u0643\u0645\u0651\u0644"
j=y.p
k=A.a([new B.Ee(t,!1,u),A.ak(A.a([m,C.as,A.aP(v.aaC(C.Bv,l+" \u064a\u0648\u0645",k),1)],j),C.j,C.f,C.h,0,u,u),C.S],j)
if(n!=null){t=H.jD(n.a)
m=n.b
l=n.c
m=m===l?"\u0622\u064a\u0629 "+E.aZ(m):"\u0627\u0644\u0622\u064a\u0627\u062a "+E.aZ(m)+"\u2013"+E.aZ(l)
k.push(new E.cW(A.ak(A.a([D.aeE,C.aV,A.aP(A.ad(A.a([D.aUi,A.j(t+" \u2014 "+m,u,u,u,u,u,F.b_,u,u,u)],j),C.A,C.f,C.h),1),P.kO],j),C.j,C.f,C.h,0,u,u),C.af,C.aA,new B.bhr(v,n),!0,u))}t=C.i.bo(0.08)
k.push(A.bA(u,C.E,!1,u,!0,C.k,u,A.bC(),r,u,u,u,u,u,2,A.fo(u,new A.ei(4,A.aa(14),C.v),u,u,u,u,u,u,!0,u,u,u,u,u,u,t,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,C.pu,"\u0639\u0627\u064a\u0632 \u062a\u062d\u0641\u0638 \u0633\u0648\u0631\u0629 \u0625\u064a\u0647\u061f",u,u,u,u,u,u,u,u,u,!0,!0,!1,u,C.np,u,u,u,u,u,u,u,u,u,u,u,u),C.t,!0,u,!0,u,!1,u,C.G,u,u,u,u,u,u,u,u,u,1,u,u,!1,"\u2022",u,new B.bhs(v),u,u,u,!1,u,u,!1,u,!0,u,C.C,u,u,u,u,u,u,u,u,u,u,u,C.cW,!0,C.x,u,C.K,u,u,u,u))
k.push(C.S)
if(!p){t=A.a([],j)
if(o.length===0)t.push(D.aYn)
for(r=o.length,x=0;x<o.length;o.length===r||(0,A.B)(o),++x)t.push(v.Ki(o[x]))
C.b.E(k,t)}else{t=A.a([D.aAe,D.aAI,v.Ki(1)],j)
for(w=114;w>=78;--w)t.push(v.Ki(w))
t.push(C.T)
r=v.f
p=A.c6(r?C.tO:C.kI,C.a6,u,u)
t.push(A.hu(p,A.j(r?"\u0627\u062e\u0641\u064a \u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631":"\u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631 (\u0627\u0644\u0628\u0642\u0631\u0629 \u0644\u062d\u062f \u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a)",u,u,u,u,u,C.ek,u,u,u),new B.bht(v),u))
if(v.f)for(w=2;w<=77;++w)t.push(v.Ki(w))
C.b.E(k,t)}k.push(C.an)
k.push(D.xm)
return k},
aaC(d,e,f){var x=null,w=y.p
return new E.cW(A.ak(A.a([A.c6(d,C.p,x,x),C.as,A.aP(A.ad(A.a([A.j(e,x,x,x,x,x,F.b_,x,x,x),A.j(f,x,1,C.ag,x,x,D.aRp,x,x,x)],w),C.A,C.f,C.h),1)],w),C.j,C.f,C.h,0,x,x),C.af,C.J,x,!1,x)},
Ki(d){var x,w=null,v=this.d.c,u=I.c7[d-1].a[1],t=v.Yz(d),s=t/u,r=y.p,q=A.bk(A.h7(C.W,A.a([A.by3(C.dI,G.c4,w,w,w,w,w,3,s,w),A.j(E.aZ(d),w,w,w,w,w,R.Vk,w,w,w)],r),C.k,C.cb,w),36,36),p=A.j(H.jD(d),w,w,w,w,w,D.aOi,w,w,w)
if(t===0)x=E.aZ(u)+" \u0622\u064a\u0629"
else x=t===u?"\u0645\u062d\u0641\u0648\u0638\u0629 \u0643\u0644\u0647\u0627 \u2713":"\u062d\u0641\u0638\u062a "+E.aZ(t)+" \u0645\u0646 "+E.aZ(u)
r=A.a([q,C.fT,A.aP(A.ad(A.a([p,A.j(x,w,w,w,w,w,A.cy(w,w,t===u?G.c4:C.cr,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),C.A,C.f,C.h),1)],r)
if(s>0&&s<1)r.push(A.j(E.aZ(C.d.ar(s*100))+"\u066a",w,w,w,w,w,D.V6,w,w,w))
r.push(D.adv)
return new E.cW(A.ak(r,C.j,C.f,C.h,0,w,w),L.Ae,C.ew,new B.bhw(this,d),!1,w)}}
B.Ee.prototype={
A(d){var x,w,v,u,t,s,r=null,q=this.c
switch(q.f.a){case 2:if(this.d)return C.aE
return D.aA6
case 3:x=q.y
x=A.a([A.j(x==null?"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0634\u063a\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638":B.Jb(x),r,r,r,r,r,D.wH,r,r,r)],y.p)
w=q.y
if(w!=null)x.push(new B.Aw(w,"model load",r))
x.push(C.T)
x.push(A.bFb(C.lF,r,q.gaYV()))
return new E.cW(A.ad(x,C.A,C.f,C.h),C.af,C.aA,r,!1,r)
case 0:case 1:v=q.w
u=q.r
q=v>0
t=q?C.d.cA(u/v,0,1):r
s=q&&u<v
q=A.j(s?"\u0628\u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026 "+E.aZ(C.d.ar(u/1e6))+" \u0645\u0646 "+E.aZ(C.d.ar(v/1e6))+" \u0645\u064a\u062c\u0627":"\u0628\u0646\u062c\u0647\u0651\u0632 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026",r,r,r,r,r,C.wK,r,r,r)
x=A.aa(8)
w=y.p
x=A.a([q,C.Q,A.n1(x,A.DQ(C.dI,C.p,7,s?t:r),C.bm)],w)
if(!this.d)C.b.E(x,A.a([C.T,D.aWn],w))
return new E.cW(A.ad(x,C.A,C.f,C.h),C.af,C.aA,r,!1,r)}}}
B.T3.prototype={
A(d){var x=null,w=D.d0.bo(0.1),v=A.aa(14),u=A.cR(D.d0.bo(0.4),1)
return A.au(x,A.ak(A.a([D.aeq,C.as,A.aP(A.j(this.c?"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0627\u0644\u062a\u062c\u0648\u064a\u062f.":"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0623\u062d\u0643\u0627\u0645 \u0627\u0644\u062a\u062c\u0648\u064a\u062f. \u0627\u0642\u0631\u0627 \u0639\u0644\u0649 \u0634\u064a\u062e \u0623\u0648 \u0645\u062d\u0641\u0651\u0638 \u0641\u064a \u0645\u0633\u062c\u062f\u0643 \u0643\u0645\u0627\u0646.",x,x,x,x,x,D.Vc,x,x,x),1)],y.p),C.A,C.f,C.h,0,x,x),C.m,x,x,new A.ap(w,x,u,v,x,x,C.r),x,x,C.aA,C.aT,x,x,x)}}
B.Be.prototype={
N(){return"_Phase."+this.b}}
B.Av.prototype={
V(){return new B.Xf($.Ji(),D.jX)}}
B.Xf.prototype={
gi7(){var x=this.e
return x===$?this.e=this.a.d:x},
gyp(){var x,w=this.a,v=w.f
w=w.c
x=this.gi7()
return H.J8(w,x,v.vn(w,x)).b},
aa(){var x,w=this
w.ao()
x=w.d
x.a5(w.gn5())
x.Y3()
x.a.Z8(B.aro(w.a.c,w.gi7()))},
ve(){if(this.c!=null)this.t(new B.bpt())},
l(){var x,w=this,v=w.d
v.S(w.gn5())
x=w.Q
if(x!=null)x.aF()
v=v.a
v.GS()
v.VS()
w.aq()},
Sg(d){var x,w,v=this
if(v.f===D.q0)v.d.a.VS()
x=v.d.a
x.GS()
w=v.Q
if(w!=null)w.aF()
v.t(new B.bpJ(v,d))
x.Z8(B.aro(v.a.c,d))
w=v.a
if(d<w.e)x.Z8(B.aro(w.c,d+1))},
Kw(d){return this.aEL(d)},
aEL(d){var x=0,w=A.o(y.H),v,u=this,t,s,r,q,p
var $async$Kw=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:if(u.f===D.q_){u.d.a.GS()
u.t(new B.bpN(u))
x=1
break}t=u.r!=null?D.ha:D.jX
u.t(new B.bpO(u))
s=u.d
r=A.a([B.aro(u.a.c,u.gi7())],y.s)
q=d==null?s.b.b:d
x=3
return A.d(s.a.Ft(r,q),$async$Kw)
case 3:p=f
if(u.c==null||u.f!==D.q_){x=1
break}u.t(new B.bpP(u,t,p))
case 1:return A.m(v,w)}})
return A.n($async$Kw,w)},
JA(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$JA=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.d
if(l.f!==D.hP){x=1
break}p=l.a
p.GS()
r=B.BM(s.gyp()).length
s.t(new B.bpR(s))
o=s.Q
if(o!=null)o.aF()
s.Q=A.kN(C.fw,new B.bpS(s))
u=4
o=B.bBW(r)
n=A.d6(0,0,0,350*r,0,0)
x=7
return A.d(p.a0C(l.b.c,o,n,new B.bpT(s),new B.bpU(s)),$async$JA)
case 7:u=2
x=6
break
case 4:u=3
k=t.pop()
l=A.Y(k)
if(l instanceof B.kO){q=l
l=s.Q
if(l!=null)l.aF()
if(s.c!=null)s.t(new B.bpV(s,q))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$JA,w)},
yl(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$yl=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.f!==D.q0){x=1
break}m=s.Q
if(m!=null)m.aF()
s.t(new B.bpX(s))
s.Q=A.kN(C.hq,new B.bpY(s))
l=new A.A_()
$.BP()
l.mS()
r=l
u=4
m=s.d.a
x=7
return A.d(m.a0F(),$async$yl)
case 7:q=e
if(q.b<0.8){s.aOr("\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0642\u0635\u064a\u0631 \u0623\u0648\u064a \u2014 \u062f\u0648\u0633 \xab\u0633\u0645\u0651\u0639\xbb \u0648\u0627\u0642\u0631\u0627 \u0627\u0644\u0622\u064a\u0629 \u0643\u0644\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb.")
x=1
break}x=8
return A.d(m.ajA(q,B.BM(s.gyp()).length),$async$yl)
case 8:p=e
s.ch=A.d6(0,0,r.gX9(),0,0,0)
k=A.k6().gep().h(0,"debug")
if(k==="1"){o=B.bNH(m.Ea())
A.tr().$1("[tutor] "+s.a.c+":"+s.gi7()+" audio="+C.d.aA(q.b,1)+"s infer="+p.b+"ms total="+r.gz5()+"ms "+p.gLX()+" text="+p.a)
A.tr().$1("[tutor] stages: "+A.h(o))
s.ax="\u062a\u0633\u062c\u064a\u0644\u0643 "+C.d.aA(p.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(p.b/1000,2)+" \u062b\n"+p.gLX()+"\n"+A.h(o)+"\n"+p.a}s.a5R(p.a)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.Y(i)
if(m instanceof B.kO){n=m
m=A.k6().gep().h(0,"debug")
if(m==="1")A.tr().$1("[tutor] check failed: "+A.h(n)+"\n"+s.d.a.Ea())
s.UJ(B.Jb(n),n)}else throw i
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$yl,w)},
UJ(d,e){var x=this,w=x.Q
if(w!=null)w.aF()
if(x.c==null)return
x.t(new B.bpI(x,d,e))},
aOr(d){return this.UJ(d,null)},
a5R(d){var x,w,v,u,t,s=this,r={},q=s.Q
if(q!=null)q.aF()
if(s.c==null)return
x=B.bLO(s.gyp(),d)
r.a=null
if(C.c.al(x.c).length!==0){q=s.d
w=q.c
v=s.a.c
u=s.gi7()
t=x.gqs()
r.a=w.aiF(v,u,q.b.a,t)
q.x3()}s.t(new B.bpK(r,s,x))},
HR(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$HR=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:g=s.d
if(g.f!==D.hP){x=1
break}s.t(new B.bpB(s))
l=s.Q
if(l!=null)l.aF()
s.Q=A.kN(C.hq,new B.bpC(s))
k=new A.A_()
$.BP()
k.mS()
r=k
u=4
l=g.a
x=7
return A.d(l.b2z(B.aro(s.a.c,s.gi7()),B.BM(s.gyp()).length),$async$HR)
case 7:q=e
p=B.bNH(l.Ea())
o="\u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a "+C.d.aA(q.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(q.b/1000,2)+" \u062b (\u0627\u0644\u0643\u0644 "+C.d.aA(r.gz5()/1000,2)+" \u062b)\n"+q.gLX()+"\n"+A.h(p)+"\n"+q.a
A.tr().$1("[tutor-debug] "+s.a.c+":"+s.gi7()+" audio="+C.d.aA(q.c,1)+"s infer="+q.b+"ms total="+r.gz5()+"ms "+q.gLX()+" text="+q.a)
A.tr().$1("[tutor-debug] stages: "+A.h(p))
s.ch=A.d6(0,0,r.gX9(),0,0,0)
s.a5R(q.a)
n=s.r
if(n!=null){l=n.gqs()
j=n.b
i=A.ae(j).i("aH<1>")
j=A.a0(new A.aH(j,new B.bpD(),i),i.i("M.E"))
A.tr().$1("[tutor-debug] perfect="+l+" ops="+A.h(j))}s.t(new B.bpE(s,o))
u=2
x=6
break
case 4:u=3
f=t.pop()
l=A.Y(f)
if(l instanceof B.kO){m=l
A.tr().$1("[tutor-debug] failed: "+A.h(m)+"\n"+g.a.Ea())
s.UJ(B.Jb(m),m)}else throw f
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$HR,w)},
gTC(){var x,w,v
for(x=this.a.d,w=this.d;v=this.a,x<=v.e;++x){v=w.c.a.h(0,v.c*1000+x)
if((v==null?$.pZ():v).a!==D.e0)return!1}return!0},
A(d){var x,w=this,v=null,u=w.d,t=u.c.YI(w.a.c,w.gi7()),s=u.b,r=s.d&&!w.x&&w.f!==D.ha,q=H.jD(w.a.c),p=y.p,o=A.a([A.cw(v,v,v,v,D.Ca,v,v,new B.bq2(d),v,v,v,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",v)],p),n=w.awY(),m=A.j("\u0622\u064a\u0629 "+E.aZ(w.gi7()),v,v,v,v,v,C.jK,v,v,v),l=E.aZ(w.gi7()-w.a.d+1),k=w.a
s=A.a([A.ak(A.a([m,C.by,A.j("("+l+" \u0645\u0646 "+E.aZ(k.e-k.d+1)+")",v,v,v,v,v,F.ak,v,v,v),C.d5,w.aId(t,s.a)],p),C.j,C.f,C.h,0,v,v),C.S],p)
if(r)s.push(w.aDF())
else{m=w.r
if(m!=null){l=w.f
l=l!==D.q0&&l!==D.lS}else l=!1
if(l)s.push(w.av9(m))
else s.push(A.j(w.gyp()+" \ufd3f"+E.aZ(w.gi7())+"\ufd3e",v,v,v,v,v,D.ia,C.ad,C.aF,v))}s=A.a([new B.Ee(u,!0,v),n,C.Q,new E.cW(A.ad(s,C.ab,C.f,C.h),D.a8S,C.aA,v,!1,v)],p)
n=w.r
if(n!=null&&w.f===D.ha)s.push(w.aPK(n))
if(w.r!=null&&w.f===D.ha&&w.ch!=null){x=C.d.ar(C.e.ba(w.ch.a,1000)/100)
s.push(new A.a_(C.bC,A.j("\u0627\u062a\u0631\u0627\u062c\u0639 \u0641\u064a "+(E.aZ(C.e.ba(x,10))+"\u066b"+E.aZ(C.e.ah(x,10)))+" \u062b",v,v,v,v,v,F.ak,C.ad,v,v),v))}n=w.as
if(n!=null)s.push(new A.a_(C.aA,A.j(n,v,v,v,v,v,D.wH,v,v,v),v))
if(w.as!=null&&w.at!=null){n=w.at
n.toString
s.push(new B.Aw(n,"check "+w.a.c+":"+w.gi7(),v))}s.push(w.avA())
s.push(C.an)
s.push(A.rE(C.p,C.J,v,new B.bq3(w),D.aV6,D.aXm,u.b.d))
n=w.a
if(n.e>n.d){n=w.gTC()
s.push(new E.cW(A.ak(A.a([D.acG,C.aV,A.aP(A.ad(A.a([D.aY5,A.j(w.gTC()?"\u062d\u0641\u0638\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u0633\u0645\u0651\u0639\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636 \u0645\u0646 \u063a\u064a\u0631 \u0645\u0627 \u062a\u0634\u0648\u0641\u0647\u0627":"\u0644\u0645\u0627 \u062a\u062e\u0644\u0651\u0635 \u0627\u0644\u0622\u064a\u0627\u062a \u0648\u0627\u062d\u062f\u0629 \u0648\u0627\u062d\u062f\u0629\u060c \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0644\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636",v,v,v,v,v,F.ak,v,v,v)],p),C.A,C.f,C.h),1),P.kO],p),C.j,C.f,C.h,0,v,v),C.af,C.aA,new B.bq4(w,d),n,v))}n=A.k6().gep().h(0,"debug")
if(n==="1"){p=A.a([C.Q,A.eO(D.adr,D.aX3,u.f===D.hP&&w.f!==D.lS?w.gaw8():v,v)],p)
n=w.ax
if(n!=null)p.push(new A.a_(C.iJ,A.vA(n,F.ak,v,v),v))
n=u.x
if(n!=null){m=n.a
l=n.b
n=n.glH()
u=u.x
p.push(A.j("model: "+m+" "+l+" \u2014 "+n+", isolated "+u.r+", load "+u.c+" ms (warm-up "+u.w+" ms)",v,v,v,v,v,F.ak,v,v,v))}p.push(A.bH(D.aXI,v,v,v,new B.bq5(w,d),v,v))
C.b.E(s,p)}s.push(C.Q)
s.push(D.xm)
return M.vX(o,s,q)},
awY(){var x=this.a,w=x.e-x.d+1
if(w===1)return C.aE
return A.bk(A.p7(new B.bpG(this),w,null,C.az,new B.bpH()),36,null)},
aId(d,e){var x,w,v,u,t,s,r,q=null
if(d.a===D.e0)return D.aJF
x=d.b
w=E.aZ(x)
v=E.aZ(e)
u=A.a([],y.p)
for(t=0;t<e;++t){s=t<x
r=s?C.dd:D.acd
u.push(new A.a_(D.a9r,A.c6(r,s?G.c4:C.eX,q,16),q))}return A.Rc(A.ak(u,C.j,C.f,C.V,0,q,q),q,"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637 \u0648\u0631\u0627 \u0628\u0639\u0636: "+w+" \u0645\u0646 "+v,q,q)},
aDF(){var x=null
return A.de(!1,A.aa(12),!0,A.au(x,D.a53,C.m,x,x,new A.ap(L.qX,x,x,A.aa(12),x,x,C.r),x,x,x,D.a8y,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,x,new B.bpM(this),x,x,x,x,x,x,x)},
av9(d){var x,w,v,u,t,s=null,r=A.a([],y.R)
for(x=d.a,w=0;w<x.length;++w){v=J.b4(d.gGQ(),w)
A:{if(D.h4===v){u=D.ia.cB(G.c4)
break A}if(D.pN===v){u=D.ia.Wr(D.d0,C.fX,D.d0)
break A}if(D.pO===v){u=D.ia.Wr(D.dH,C.fX,D.dH)
break A}u=D.ia.Wr(C.eX,C.pm,C.c3)
break A}t=x[w]
r.push(new A.f3(t.a,s,s,C.be,s,s,s,s,s,s,u))
r.push(L.wy)}x=E.aZ(this.gi7())
r.push(A.dV(s,s,s,s,s,s,s,s,s,D.ia.cB(C.a6),"\ufd3f"+x+"\ufd3e"))
return A.QI(A.dV(r,s,s,s,s,s,s,s,s,s,s),s,C.ad,C.aF)},
aPK(d){var x,w,v,u,t,s,r=this.w
if(C.c.al(d.c).length===0)return D.b6x
if(d.gqs()){x=r==null
if((x?null:r.a)===D.e0&&r.b===this.d.b.a)x="\u0627\u0644\u0622\u064a\u0629 \u062f\u064a \u0627\u062a\u062d\u0641\u0638\u062a! \u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0627\u0644\u0644\u064a \u0628\u0639\u062f\u0647\u0627."
else x=!x&&r.a!==D.e0?"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637. \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0645\u0627\u0646 "+E.aZ(this.d.b.a-r.b)+" \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629.":"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637."
return new B.AK(G.c4,C.dd,"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713",x,null)}x=d.gGQ()
w=J.d3(x)
v=w.hP(x,new B.bpZ()).gL(0)
u=w.hP(x,new B.bq_()).gL(0)
t=w.hP(x,new B.bq0()).gL(0)
x=A.a([],y.s)
if(u>0)x.push(E.aZ(u)+" \u063a\u0644\u0637")
if(v>0)x.push(E.aZ(v)+" \u0631\u0627\u062c\u0639\u0647\u0627")
if(t>0)x.push(E.aZ(t)+" \u0646\u0627\u0642\u0635\u0629")
if(d.gEr().length!==0)x.push(E.aZ(d.gEr().length)+" \u0632\u064a\u0627\u062f\u0629")
w=u+t>0?D.dH:D.d0
x=C.b.aK(x," \u2022 ")
s=d.gEr().length!==0?"\n\u0632\u064a\u0627\u062f\u0629: "+C.b.aK(d.gEr(),"\u060c "):""
return new B.AK(w,C.kL,"\u0642\u0631\u0628\u062a! \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0644\u0648\u0651\u0646\u0629",x+"\n\u0627\u0644\u0623\u0635\u0641\u0631: \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u062f\u064a \u2014 \u0627\u0644\u0623\u062d\u0645\u0631: \u063a\u0644\u0637 \u2014 \u0627\u0644\u0631\u0645\u0627\u062f\u064a \u0627\u0644\u0645\u0634\u0637\u0648\u0628: \u0646\u0633\u064a\u062a\u0647\u0627."+s,null)},
avA(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d,g=h.f===D.hP,f=j.f
switch(f.a){case 2:if(j.z==null)x=0
else{f=Date.now()
w=j.z
w.toString
x=C.e.ba(new A.b1(f,0,!1).dM(w).a,1e6)}v=C.e.ba(B.bBW(B.BM(j.gyp()).length).a,1e6)
f=j.gaNf()
w=96+26*j.y
u=D.dH.bo(0.25)
w=A.jf(i,A.bDB(C.W,A.au(i,D.adx,C.m,i,i,D.Zs,i,84,i,i,i,i,84),i,new A.ap(u,i,i,i,i,i,C.co),C.A0,i,w,w),C.t,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,f,i,i,i,i,i,i)
u=A.j("\u0628\u0646\u0633\u062c\u0651\u0644\u2026 "+B.bAT(x)+" / "+B.bAT(v),i,i,i,i,i,K.lA,i,i,i)
return A.ad(A.a([w,C.Q,u,A.j(h.b.c?"\u0644\u0645\u0627 \u062a\u062e\u0644\u0635 \u0627\u0633\u0643\u062a \u062b\u0627\u0646\u064a\u0629 \u0623\u0648 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb":"\u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb \u0644\u0645\u0627 \u062a\u062e\u0644\u0635",i,i,i,i,i,F.ak,i,i,i),A.bH(D.b_z,i,i,i,f,i,i)],y.p),C.j,C.f,C.h)
case 3:t=C.d.e6((Date.now()-j.ay)/1000)
if(t<8)h="\u062b\u0648\u0627\u0646\u064a \u0648\u0646\u0642\u0648\u0644\u0643"
else h=t<25?"\u0644\u0633\u0647 \u0634\u063a\u0627\u0644\u064a\u0646 \u2014 \u0627\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0628\u062a\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0643\u062a\u0631 ("+E.aZ(t)+" \u062b)":"\u0648\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0637\u0648\u0644 \u0645\u0646 \u0627\u0644\u0639\u0627\u062f\u064a \u2014 \u0644\u0648 \u0639\u0644\u0651\u0642 \u0647\u0646\u0639\u064a\u062f \u062a\u0634\u063a\u064a\u0644\u0647 \u0644\u0648\u062d\u062f\u0646\u0627 ("+E.aZ(t)+" \u062b)"
return new A.a_(D.a8u,A.ad(A.a([C.qL,C.an,D.aWF,A.j(h,i,i,i,i,i,F.ak,C.ad,i,i)],y.p),C.j,C.f,C.h),i)
default:s=f===D.q_
r=j.r
f=r==null
w=!f
q=w&&r.gqs()
u=A.c6(s?C.kM:K.BR,i,i,i)
if(s)p="\u0648\u0642\u0651\u0641"
else p=w&&!q?"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u062d":"\u0627\u0633\u0645\u0639"
p=A.j(p,i,i,i,i,i,i,i,i,i)
o=A.ij(i,i,D.aM2,i,i,i,i)
u=A.aP(new A.xZ(C.WB,!0,new B.bpu(j,r,q),i,i,i,o,C.m,i,!1,i,!0,i,new A.TA(p,u,o,i,i),i),1)
p=A.a([],y.n)
for(o=y.c,n=0;n<3;++n){m=D.CU[n]
p.push(new A.ex(m,i,A.j("\xd7"+E.aZ(m),i,i,i,i,i,i,i,i,i),o))}o=y.S
l=y.b
k=y.p
o=A.ak(A.a([u,C.as,A.vx(new B.bpv(j),p,A.cT([h.b.b],o),!1,A.jF(i,i,i,new A.b3(new B.bpw(),l),i,i,i,i,new A.b3(new B.bpx(),l),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,C.dq),o)],k),C.j,C.f,C.h,0,i,i)
h=g&&!s?j.gaJK():i
u=A.c6(f?D.ne:C.kL,i,i,i)
if(g)f=f?"\u0633\u0645\u0651\u0639":"\u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a"
else f="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
f=A.j(f,i,i,i,i,i,C.cG,i,i,i)
p=q?N.hl:C.p
h=A.a([o,C.S,A.jM(u,f,h,A.ij(p,q?C.i:C.a5,D.pd,i,i,i,i))],k)
if(w&&j.gi7()<j.a.e)C.b.E(h,A.a([C.Q,q?A.jM(D.afh,D.aZQ,new B.bpy(j),A.ij(G.c4,C.a5,D.pd,i,i,i,i)):A.bH(D.aVc,i,i,i,new B.bpz(j),i,i)],k))
if(w){f=j.gi7()
w=j.a
u=w.e
f=f===u&&q&&u>w.d}else f=!1
if(f)h.push(new A.a_(C.mP,A.j(j.gTC()?"\u062e\u0644\u0651\u0635\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u062c\u0631\u0651\u0628 \xab\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636\xbb \u062a\u062d\u062a.":"\u062e\u0644\u0635\u062a \u0622\u062e\u0631 \u0622\u064a\u0629 \u2014 \u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0644\u0633\u0647 (\u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0635\u0641\u0631\u0627 \u0641\u0648\u0642).",i,i,i,i,i,K.px,C.ad,i,i),i))
return A.ad(h,C.ab,C.f,C.h)}}}
B.AK.prototype={
A(d){var x=this,w=null,v=x.c,u=v.bo(0.12),t=A.aa(14),s=A.cR(v.bo(0.5),1),r=y.p
return A.au(w,A.ak(A.a([A.c6(x.d,v,w,w),C.as,A.aP(A.ad(A.a([A.j(x.e,w,w,w,w,w,A.cy(w,w,v,w,w,w,w,w,w,w,w,15,w,w,C.a3,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),C.pf,A.j(x.f,w,w,w,w,w,D.Vc,w,w,w)],r),C.A,C.f,C.h),1)],r),C.A,C.f,C.h,0,w,w),C.m,w,w,new A.ap(u,w,s,t,w,w,C.r),w,w,C.aA,C.aT,w,w,w)}}
B.Au.prototype={
V(){var x=y.S
return new B.Xe($.Ji(),A.x(x,y.B),A.aF(x),A.x(x,y.N),A.dN(null,y.H))}}
B.Xe.prototype={
aa(){this.ao()
this.d.a5(this.gn5())},
ve(){if(this.c!=null)this.t(new B.bpc())},
l(){var x,w=this,v=w.d
v.S(w.gn5())
x=w.y
if(x!=null)x.aF()
v.a.VS()
w.aq()},
Di(d){return this.aN4(d)},
aN4(d){var x=0,w=A.o(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m
var $async$Di=A.k(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.t(new B.bpl(t,d))
r=t.y
if(r!=null)r.aF()
t.y=A.kN(C.fw,new B.bpm(t))
v=3
r=t.d
q=t.a
p=q.f
q=q.c
q=B.bBW(B.BM(H.J8(q,d,p.vn(q,d)).b).length)
p=t.a
o=p.f
p=p.c
p=A.d6(0,0,0,350*B.BM(H.J8(p,d,o.vn(p,d)).b).length,0,0)
x=6
return A.d(r.a.a0C(r.b.c,q,p,new B.bpn(t,d),new B.bpo(t)),$async$Di)
case 6:v=1
x=5
break
case 3:v=2
m=u.pop()
r=A.Y(m)
if(r instanceof B.kO){s=r
r=t.y
if(r!=null)r.aF()
if(t.c!=null)t.t(new B.bpp(t,s))}else throw m
x=5
break
case 2:x=1
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$Di,w)},
BK(d,e){return this.ay3(d,e)},
ay3(d,e){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$BK=A.k(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.e!==d){x=1
break}o=s.y
if(o!=null)o.aF()
s.t(new B.bpg(s,d))
n=d<s.a.e?d+1:null
r=s.d.a.a0F()
if(e&&n!=null)s.Di(n)
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
if(o instanceof B.kO){p=o
s.t(new B.bph(s,d,p))}else throw l
x=6
break
case 3:x=2
break
case 6:if(q!=null){o=q
s.at=s.at.bM(new B.bpi(s,o,d),y.H)}case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$BK,w)},
gaG8(){var x,w,v,u,t=this
for(x=t.a.d,w=t.f,v=t.r,u=t.w;x<=t.a.e;++x)if(!w.aw(x)&&!v.m(0,x)&&!u.aw(x)&&x!==t.e)return x
return null},
aKn(){this.t(new B.bpj(this))},
A(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q.f===D.hP,o=s.e,n=s.gaG8(),m=s.f,l=m.a,k=s.w.a,j=s.a,i=l+k===j.e-j.d+1&&s.r.a===0&&o==null
l=A.w(m).i("c7<2>")
x=new A.aH(new A.c7(m,l),new B.bpq(),l.i("aH<M.E>")).gL(0)
l=H.jD(s.a.c)
m=y.p
q=A.a([new B.Ee(q,!0,r),A.j("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 "+E.aZ(s.a.d)+" \u0644\u062d\u062f "+E.aZ(s.a.e)+" \u0645\u0646 \u062d\u0641\u0638\u0643\u060c \u0622\u064a\u0629 \u0622\u064a\u0629: \u0628\u0639\u062f \u0643\u0644 \u0622\u064a\u0629 \u062f\u0648\u0633 \xab\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629\xbb \u0648\u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0637\u0648\u0644 \u2014 \u0647\u0646\u0635\u062d\u0651\u062d \u0648\u0625\u0646\u062a \u0628\u062a\u0642\u0631\u0627.",r,r,r,r,r,F.ak,r,r,r),C.S],m)
for(w=s.a.d;w<=s.a.e;++w)q.push(s.aOt(w))
q.push(C.Q)
k=s.Q
if(k!=null)q.push(A.j(k,r,r,r,r,r,D.wH,r,r,r))
k=s.as
if(k!=null){j=s.a
q.push(new B.Aw(k,"review "+j.c+":"+j.d+"-"+j.e,r))}k=o==null
if(!k){j=E.aZ(o)
if(s.z==null)v=0
else{v=Date.now()
u=s.z
u.toString
u=C.e.ba(new A.b1(v,0,!1).dM(u).a,1e6)
v=u}v=A.j("\u0628\u0646\u0633\u062c\u0651\u0644 \u0622\u064a\u0629 "+j+"\u2026 "+B.bAT(v),r,r,r,r,r,K.lA,C.ad,r,r)
j=A.n1(A.aa(6),A.DQ(C.dI,D.dH,6,s.x),C.bm)
u=o<s.a.e
t=A.c6(u?Q.BK:C.kM,r,r,r)
C.b.E(q,A.a([v,C.T,j,C.S,A.jM(t,A.j(u?"\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629":"\u062e\u0644\u0635\u062a",r,r,r,r,r,C.cG,r,r,r),new B.bpr(s,o),A.ij(C.p,C.a5,D.pd,r,r,r,r))],m))}else if(n!=null){j=p?new B.bps(s,n):r
if(!p)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
else v=n===s.a.d?"\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0633\u0645\u064a\u0639":"\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+E.aZ(n)
q.push(A.jM(D.ae9,A.j(v,r,r,r,r,r,C.cG,r,r,r),j,A.ij(C.p,C.a5,D.pd,r,r,r,r)))}if(s.r.a!==0&&k)q.push(D.aAl)
if(i){k=s.a
k=x===k.e-k.d+1
j=k?G.c4:D.d0
v=k?C.na:C.kL
if(k)k="\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713 \u0633\u0645\u0651\u0639\u062a\u0647\u0645 \u0643\u0644\u0647\u0645 \u0635\u062d"
else{k=E.aZ(x)
u=s.a
u=k+" \u0645\u0646 "+E.aZ(u.e-u.d+1)+" \u0622\u064a\u0627\u062a \u0645\u0638\u0628\u0648\u0637\u0629"
k=u}u=s.a
u=x===u.e-u.d+1?"\u0631\u0628\u0646\u0627 \u064a\u062b\u0628\u0651\u062a\u0647\u0627 \u0641\u064a \u0642\u0644\u0628\u0643.":"\u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0641\u064a\u0647\u0627 \u0623\u0644\u0648\u0627\u0646 \u0648\u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a."
C.b.E(q,A.a([new B.AK(j,v,k,u,r),A.eO(D.afc,D.b_b,s.gaKm(),r)],m))}q.push(C.S)
q.push(D.xm)
return M.vX(r,q,"\u0633\u0645\u0651\u0639 "+l)},
aOt(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.f.h(0,d),i=l.w.h(0,d)
if(l.e===d)x=D.adP
else if(l.r.m(0,d))x=O.pe
else if(i!=null)x=D.adY
else if(j!=null){w=j.gqs()?C.dd:D.abI
x=A.c6(w,j.gqs()?G.c4:D.d0,k,k)}else x=D.ad8
w=y.p
v=A.a([A.ak(A.a([A.j("\u0622\u064a\u0629 "+E.aZ(d),k,k,k,k,k,D.aS0,k,k,k),C.d5,x],w),C.j,C.f,C.h,0,k,k)],w)
if(i!=null)v.push(A.j(i,k,k,k,k,k,D.V9,k,k,k))
if(j!=null&&!j.gqs()){u=y.R
t=A.a([],u)
for(s=j.a,r=0;r<s.length;++r){q=s[r]
p=j.gGQ()
o=J.bp(p)
n=o.h(p,r)
A:{if(D.h4===n){m=G.c4
break A}if(D.pN===n){m=D.d0
break A}if(D.pO===n){m=D.dH
break A}m=C.eX
break A}m=D.ia.aTF(m,o.h(p,r)===D.pP?C.pm:k,22)
C.b.E(t,A.a([new A.f3(q.a,k,k,C.be,k,k,k,k,k,k,m),L.wy],u))}w=A.a([C.aR,A.QI(A.dV(t,k,k,k,k,k,k,k,k,k,k),k,C.ad,C.aF)],w)
if(C.c.al(j.c).length===0)w.push(D.aXN)
C.b.E(v,w)}return new E.cW(A.ad(v,C.ab,C.f,C.h),C.f1,C.ew,k,!1,k)}}
B.At.prototype={
V(){return new B.Xd($.Ji())}}
B.Xd.prototype={
aa(){this.ao()
var x=this.d
x.a5(this.gn5())
x.Y3()},
ve(){if(this.c!=null)this.t(new B.bp3())},
l(){this.d.S(this.gn5())
this.aq()},
A(d){var x,w,v,u,t,s=this,r=null,q=s.d.c,p=q.gamF(),o=A.a([],y.t)
for(x=78;x<=114;++x)o.push(x)
w=C.b.kd(o,0,new B.bpa(q))
v=C.b.kd(o,0,new B.bpb())
o=y.p
o=A.a([A.ak(A.a([A.aP(s.Qs(E.aZ(q.gahO()),"\u0622\u064a\u0629 \u0645\u062d\u0641\u0648\u0638\u0629"),1),C.as,A.aP(s.Qs(E.aZ(q.aeC()),"\u064a\u0648\u0645 \u0648\u0631\u0627 \u0628\u0639\u0636"),1),C.as,A.aP(s.Qs(E.aZ(q.e),"\u0623\u0637\u0648\u0644 \u0633\u0644\u0633\u0644\u0629"),1)],o),C.j,C.f,C.h,0,r,r),C.S,new E.cW(A.ad(A.a([A.j("\u062c\u0632\u0621 \u0639\u0645\u0651: "+E.aZ(C.d.ar(w*100/v))+"\u066a",r,r,r,r,r,F.b_,r,r,r),C.T,A.n1(A.aa(6),A.DQ(C.dI,G.c4,8,w/v),C.bm),C.aR,A.j(E.aZ(w)+" \u0645\u0646 "+E.aZ(v)+" \u0622\u064a\u0629",r,r,r,r,r,F.ak,r,r,r)],o),C.A,C.f,C.h),C.af,C.aA,r,!1,r)],o)
if(p.length===0)o.push(D.aAu)
for(u=p.length,t=0;t<p.length;p.length===u||(0,A.B)(p),++t)o.push(s.aOv(p[t]))
o.push(C.Q)
u=$.ac().b
u===$&&A.b()
u=u.gc2().e.a
o.push(A.j((u==null?r:u.r)!=null?"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643 \u0648\u064a\u0638\u0647\u0631 \u0639\u0644\u0649 \u0623\u064a \u062c\u0647\u0627\u0632 \u062a\u062f\u062e\u0644 \u0645\u0646\u0647.":"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647. \u0633\u062c\u0651\u0644 \u062f\u062e\u0648\u0644 \u0639\u0634\u0627\u0646 \u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643.",r,r,r,r,r,F.ak,r,r,r))
return M.vX(r,o,"\u062a\u0642\u062f\u0651\u0645\u064a \u0641\u064a \u0627\u0644\u062d\u0641\u0638")},
Qs(d,e){var x=null
return new E.cW(A.ad(A.a([A.j(d,x,x,x,x,x,D.aRN,x,x,x),A.j(e,x,x,x,x,x,C.Vq,C.ad,x,x)],y.p),C.j,C.f,C.h),C.af,C.J,x,!1,x)},
aOv(d){var x=null,w=this.d.c,v=I.c7[d-1].a[1],u=w.Yz(d),t=w.aYD(d),s=y.p,r=A.ak(A.a([A.aP(A.j(H.jD(d),x,x,x,x,x,F.b_,x,x,x),1),A.j(E.aZ(C.d.ar(u*100/v))+"\u066a",x,x,x,x,x,D.aSD,x,x,x)],s),C.j,C.f,C.h,0,x,x),q=A.n1(A.aa(6),A.DQ(C.dI,G.c4,7,u/v),C.bm),p=E.aZ(u),o=E.aZ(v),n=t>0?" \u2022 \u0628\u062a\u0631\u0627\u062c\u0639 "+E.aZ(t):""
return new E.cW(A.ad(A.a([r,C.T,q,C.aR,A.j("\u0645\u062d\u0641\u0648\u0638 "+p+" \u0645\u0646 "+o+n,x,x,x,x,x,F.ak,x,x,x)],s),C.A,C.f,C.h),C.af,C.aA,new B.bp9(this,d),!1,x)},
HU(d){return this.awp(d)},
awp(d){var x=0,w=A.o(y.H),v=this,u,t
var $async$HU=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:u=I.c7[d-1].a[1]
t=v.c
t.toString
x=2
return A.d(A.fA(C.dc,new B.bp8(v,d,u),t,!0,null,null,!1,y.H),$async$HU)
case 2:return A.m(null,w)}})
return A.n($async$HU,w)}}
B.aca.prototype={
Kv(d,e){var x=null,w=A.pF(x,x,x,x,x,x,x,x,x,x,x,D.aLP,C.J,x,x,x,x,C.lb,x,x)
return A.bH(A.j(d,x,x,x,x,x,C.jJ,x,x,x),x,x,x,new B.aVf(e),x,w)},
A(d){var x=this,w=y.p
return new E.cW(A.ad(A.a([D.aZF,C.T,D.b_y,A.dC(A.a([x.Kv("tarteel-ai/whisper-base-ar-quran","https://huggingface.co/tarteel-ai/whisper-base-ar-quran"),x.Kv("iqbalaesthetic/Basira","https://huggingface.co/iqbalaesthetic/Basira")],w),C.aM,0,12),D.aUX,x.Kv("tanzil.net","https://tanzil.net"),D.b0m,x.Kv("everyayah.com","https://everyayah.com")],w),C.A,C.f,C.h),C.af,C.aA,null,!1,null)}}
B.Aw.prototype={
V(){return new B.Xg()}}
B.Xg.prototype={
ga9b(){var x=this.a
return B.c9w(x.c,x.d,$.bCw().Ea())},
Kx(){var x=0,w=A.o(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k
var $async$Kx=A.k(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.t(new B.bq6(s))
v=3
r=A.bwi()
n=s.ga9b()
m=y.N
q=A.x(m,m)
J.fR(q,"app","masjid")
J.fR(q,"path","tutor \u203a "+s.a.d)
if(r!=null){m=r.length>160?C.c.Y(r,0,160):r
J.fR(q,"ua",m)}x=6
return A.d(A.a35(n,null,C.AO,q),$async$Kx)
case 6:if(s.c!=null)s.t(new B.bq7(s))
t.push(5)
x=4
break
case 3:v=2
k=u.pop()
p=A.Y(k)
o=p instanceof A.cX?p.a:"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0628\u0639\u062a \u2014 \u0627\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0646\u062a \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
if(s.c!=null)s.t(new B.bq8(s,o))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.t(new B.bq9(s))
x=t.pop()
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$Kx,w)},
A(d){var x,w,v,u=this,t=null,s=y.p
s=A.a([A.de(!1,t,!0,new A.a_(C.Ad,A.ak(A.a([A.c6(u.d?C.tO:C.kI,C.c3,t,18),C.fU,D.b_X],s),C.j,C.f,C.h,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new B.bqb(u),t,t,t,t,t,t,t)],s)
if(u.d){x=A.aa(8)
s.push(A.au(t,A.vA(u.ga9b(),D.aOI,t,C.n),C.m,t,t,new A.ap(L.qX,t,t,x,t,t,C.r),t,t,D.a8D,C.ex,t,t,1/0))}if(u.f)s.push(D.aV3)
else{x=A.pF(t,t,t,t,t,t,t,t,t,t,t,C.U4,C.J,t,t,t,t,C.lb,t,t)
w=u.e
v=w?t:u.gaOu()
s.push(A.hu(w?D.aMc:D.aeW,D.aZ9,v,x))}x=u.r
if(x!=null)s.push(A.j(x,t,t,t,t,t,D.V9,t,t,t))
return new A.a_(C.aA,A.ad(s,C.A,C.f,C.h),t)}}
var z=a.updateTypes(["ab<~>()","~()","A(mE)","ab<Gs>()","ab<Gq>()","ab<Gr>()","Q<mE>()","A(q9)","bn(nC)","Av(z)","At(z)","A(m1)","Au(z)","A(F9)"])
B.aVg.prototype={
$0(){var x=0,w=A.o(y.m),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$$0=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=A.a8(A.cp(b.G.document).baseURI)
q=A.bO(r,0,null).W("quran_tutor/tutor.js?v=3").j(0)
x=7
return A.d(A.e2(import(q),y.m),$async$$0)
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
m=B.c_i("network",A.h(o))
throw A.p(m)
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:276}
B.aVj.prototype={
$1(d){var x=null
return A.bs_(A.cg(d,"persist",x,x,x,x))},
$S:953}
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
return A.d(n.e2(m.cp(l.cg(e,"loadModel",A.bsw(new B.aVh(u.b)),u.c,u.d,null)),y.m),$async$$0)
case 3:p=e
o=A.O(p.device)
if(o==null)o=null
if(o==null)o=""
t=A.O(p.dtype)
if(t==null)t=null
if(t==null)t=""
s=q.pj(p,"ms")
r=q.mW(p,"cached")
A.O(p.backend)
v=new B.Gq(o,t,s,r,q.pj(p,"threads"),q.mW(p,"isolated"),q.pj(p,"warmMs"))
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+4}
B.aVh.prototype={
$2(d,e){this.a.$2(C.d.ar(d),C.d.ar(e))},
$S:954}
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
u.onLevel=A.f5(new B.aVl(v.e))
u.onAutoStop=A.f5(new B.aVm(v.f))
x=5
return A.d(A.e2(A.cp(A.cg(s,"startRecording",u,null,null,null)),y.O),$async$$0)
case 5:return A.m(null,w)}})
return A.n($async$$0,w)},
$S:2}
B.aVl.prototype={
$1(d){return this.a.$1(d)},
$S:59}
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
return A.d(q.e2(p.cp(o.cg(e,"stopRecording",null,null,null,null)),y.m),$async$$0)
case 3:r=e
v=new B.Gr(r,A.dl(r.seconds))
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
return A.d(q.e2(p.cp(o.cg(e,"transcribe",t.audio,t.rate,s.a84(u.c),null)),y.m),$async$$0)
case 3:v=r.abf(e)
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
return A.d(r.e2(q.cp(p.cg(e,"transcribeUrl",u.b,t.a84(u.c),null,null)),y.m),$async$$0)
case 3:v=s.abf(e)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+3}
B.aVk.prototype={
$1(d){return d},
$S:29}
B.aMD.prototype={
$0(){var x,w,v,u,t=this.a,s=A.bQ(t.a.length,D.pP,!1,y.G)
for(t=t.b,x=t.length,w=0;w<x;++w){v=t[w]
u=v.a
if(u!=null)s[u]=v.d}return s},
$S:z+6}
B.aMC.prototype={
$1(d){return d===D.h4},
$S:z+2}
B.bsr.prototype={
$2(d,e){var x,w=e.length
if(d.length<w)return!1
for(x=0;x<w;++x)if(B.bx8(e[x],d[x])<0.75)return!1
return!0},
$S:955}
B.btV.prototype={
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
$S:956}
B.aVv.prototype={
$0(){var x=0,w=A.o(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$$0=A.k(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d(A.ia("mt.tutor.settings"),$async$$0)
case 7:r=a3
if(r!=null){k=y.P.a(C.a1.eV(r,null))
j=A.bm(k.h(0,"n"))
j=j==null?null:C.d.bU(j)
j=C.e.cA(j==null?2:j,1,5)
i=C.b.m(D.CU,k.h(0,"r"))?A.ev(k.h(0,"r")):1
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
return A.d(A.ia("mt.tutor.progress"),$async$$0)
case 12:q=a3
if(q!=null)s.a.c=B.bAc(y.P.a(C.a1.eV(q,null)))
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
return A.d(A.ia("mt.tutor.last"),$async$$0)
case 17:p=a3
if(p!=null){o=y.P.a(C.a1.eV(p,null))
n=C.d.bU(A.dp(J.b4(o,"s")))
m=C.d.bU(A.dp(J.b4(o,"f")))
l=C.d.bU(A.dp(J.b4(o,"t")))
if(B.bNM(n,m)&&B.bNM(n,l)&&m<=l)s.a.z=new A.bP(n,m,l)}u=2
x=16
break
case 14:u=13
a0=t.pop()
x=16
break
case 13:x=2
break
case 16:k=s.a
if(k.b.e&&k.a.a0q()){k.a.afp()
x=1
break}a1=k
x=18
return A.d(k.a.Hb(),$async$$0)
case 18:a1.d=a3
k.e=!0
k.X()
if(k.b.e)k.zI()
k.ut()
case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:95}
B.aVw.prototype={
$2(d,e){var x=this.a
x.r=d
x.w=e
x.X()},
$S:957}
B.aVx.prototype={
$2(d,e){return C.e.ba(A.eC(A.h(d),null,null),1000)===this.a},
$S:958}
B.bhC.prototype={
$1(d){var x=0,w=A.o(y.a),v=this,u,t
var $async$$1=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.d(u.d.a.AS(),$async$$1)
case 2:t=f
if(u.c!=null)u.t(new B.bhB(u,t))
return A.m(null,w)}})
return A.n($async$$1,w)},
$S:959}
B.bhB.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bhD.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bhA(x,d))},
$S:z+8}
B.bhA.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bhE.prototype={
$1(d){},
$S:22}
B.bho.prototype={
$0(){},
$S:0}
B.bhu.prototype={
$1(d){var x=this.c,w=this.a.w
w.toString
return new B.Av(this.b,x.a,x.b,w,null)},
$S:z+9}
B.bhv.prototype={
$0(){},
$S:0}
B.bhy.prototype={
$0(){var x=y.z
return A.al(this.a,!1).cU(A.cU(new B.bhx(),null,x),x)},
$S:0}
B.bhx.prototype={
$1(d){return D.b12},
$S:z+10}
B.bhz.prototype={
$0(){return B.bNx(this.a)},
$S:0}
B.bhr.prototype={
$0(){var x=this.b
return this.a.vf(x.a,x.b,x.c)},
$S:0}
B.bhs.prototype={
$1(d){return this.a.t(new B.bhq())},
$S:9}
B.bhq.prototype={
$0(){},
$S:0}
B.bht.prototype={
$0(){var x=this.a
return x.t(new B.bhp(x))},
$S:0}
B.bhp.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.bhw.prototype={
$0(){return this.a.aOs(this.b)},
$S:0}
B.bw5.prototype={
$1(d){return new A.iY(new B.bw2(this.a,this.b,this.c),null)},
$S:52}
B.bw2.prototype={
$2(d,e){var x,w,v=null,u=this.b,t=new B.bw4(u,e),s=this.a,r=new B.bw3(s,e),q=A.j(H.jD(this.c),v,v,v,v,v,C.pr,v,v,v),p=A.j("\u0647\u062a\u0633\u0645\u0651\u0639 \u0623\u0646\u0647\u064a \u0622\u064a\u0627\u062a\u061f ("+E.aZ(u)+" \u0622\u064a\u0629)",v,v,v,v,v,F.ak,v,v,v),o=y.p,n=A.a([],o)
if(u<=30)n.push(r.$3("\u0627\u0644\u0633\u0648\u0631\u0629 \u0643\u0644\u0647\u0627",1,u))
x=u<5
w=E.aZ(x?u:5)
x=x?u:5
n.push(r.$3("\u0623\u0648\u0644 "+w+" \u0622\u064a\u0627\u062a",1,x))
x=s.a
if(x>1){x=E.aZ(x)
w=s.a
n.push(r.$3("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+x,w,C.e.cA(w+4,1,u)))}u=A.a([q,C.aR,p,C.S,A.dC(n,C.aM,6,8),C.Q,A.ak(A.a([t.$3("\u0645\u0646",s.b,new B.bvY(s)),D.aM8,t.$3("\u0644\u062d\u062f",s.c,new B.bvZ(s))],o),C.j,C.f,C.h,0,v,v)],o)
if(s.c-s.b>=10)u.push(D.aAo)
u.push(C.aJ)
u.push(A.hk(D.aWj,v,new B.bw_(s,d),A.ij(C.p,C.a5,D.aM_,v,v,v,v)))
return A.dH(!0,new A.a_(C.Aj,A.ad(u,C.ab,C.f,C.V),v),C.J,!0)},
$S:334}
B.bw4.prototype={
$3(d,e,f){var x,w,v,u=null,t=A.j(d,u,u,u,u,u,C.ic,u,u,u),s=A.a([],y.I)
for(x=this.a,w=y.r,v=1;v<=x;++v)s.push(new A.d0(v,A.j("\u0622\u064a\u0629 "+E.aZ(v),u,u,u,u,u,u,u,u,u),C.av,u,w))
return A.aP(A.ad(A.a([t,S.CY(C.dc,!0,s,320,new B.bw1(this.b,f),D.aSV,e,y.S)],y.p),C.A,C.f,C.h),1)},
$S:961}
B.bw1.prototype={
$1(d){return d==null?null:this.a.$1(new B.bw0(this.b,d))},
$S:53}
B.bw0.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bw3.prototype={
$3(d,e,f){var x=null
return A.bDA(x,A.j(d,x,x,x,x,x,x,x,x,x),new B.bvX(this.a,this.b,e,f))},
$S:962}
B.bvX.prototype={
$0(){var x=this
return x.b.$1(new B.bvW(x.a,x.c,x.d))},
$S:0}
B.bvW.prototype={
$0(){var x=this.a
x.b=this.b
x.c=this.c},
$S:0}
B.bvY.prototype={
$1(d){var x=this.a
x.b=d
if(x.c<d)x.c=d},
$S:31}
B.bvZ.prototype={
$1(d){var x=this.a
x.c=d
if(x.b>d)x.b=d},
$S:31}
B.bw_.prototype={
$0(){var x=this.a
return A.al(this.b,!1).be(new A.R(x.b,x.c))},
$S:0}
B.bpt.prototype={
$0(){},
$S:0}
B.bpJ.prototype={
$0(){var x=this.a
x.e=this.b
x.f=D.jX
x.w=x.r=null
x.x=!1
x.ch=x.ax=x.as=null},
$S:0}
B.bpN.prototype={
$0(){var x=this.a
return x.f=x.r!=null?D.ha:D.jX},
$S:0}
B.bpO.prototype={
$0(){var x=this.a
x.f=D.q_
x.as=null},
$S:0}
B.bpP.prototype={
$0(){var x=this.a
x.f=this.b
if(!this.c&&x.as==null)x.as=null},
$S:0}
B.bpR.prototype={
$0(){var x=this.a
x.f=D.q0
x.as=null
x.y=0
x.z=new A.b1(Date.now(),0,!1)
x.ax=null},
$S:0}
B.bpS.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bpQ())},
$S:35}
B.bpQ.prototype={
$0(){},
$S:0}
B.bpU.prototype={
$1(d){return this.a.y=d},
$S:59}
B.bpT.prototype={
$1(d){return this.a.yl()},
$S:9}
B.bpV.prototype={
$0(){var x,w=this.a
w.f=w.r!=null?D.ha:D.jX
x=this.b
w.as=B.Jb(x)
w.at=x},
$S:0}
B.bpX.prototype={
$0(){var x=this.a
x.f=D.lS
x.ay=Date.now()},
$S:0}
B.bpY.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bpW())},
$S:35}
B.bpW.prototype={
$0(){},
$S:0}
B.bpI.prototype={
$0(){var x=this.a
x.f=x.r!=null?D.ha:D.jX
x.as=this.b
x.at=this.c},
$S:0}
B.bpK.prototype={
$0(){var x=this.b
x.r=this.c
x.w=this.a.a
x.f=D.ha
x.x=!1},
$S:0}
B.bpB.prototype={
$0(){var x=this.a
x.f=D.lS
x.ay=Date.now()
x.as=null},
$S:0}
B.bpC.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bpA())},
$S:35}
B.bpA.prototype={
$0(){},
$S:0}
B.bpD.prototype={
$1(d){return d.d!==D.h4},
$S:z+11}
B.bpE.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.bq2.prototype={
$0(){return B.bNx(this.a)},
$S:0}
B.bq3.prototype={
$1(d){var x=this.a.d
return x.oU(x.b.aec(d))},
$S:5}
B.bq4.prototype={
$0(){var x=y.z
return A.al(this.b,!1).cU(A.cU(new B.bq1(this.a),null,x),x)},
$S:0}
B.bq1.prototype={
$1(d){var x=this.a.a
return new B.Au(x.c,x.d,x.e,x.f,null)},
$S:z+12}
B.bq5.prototype={
$0(){this.a.d.a.b1K()
this.b.R(y.q).f.aT(D.aMF)},
$S:0}
B.bpH.prototype={
$2(d,e){return C.by},
$S:48}
B.bpG.prototype={
$2(d,e){var x,w,v,u=null,t=this.a,s=t.a,r=s.d+e
switch(t.d.c.YI(s.c,r).a.a){case 2:s=G.c4
break
case 1:s=D.d0
break
case 0:s=N.hl
break
default:s=u}x=A.aa(18)
w=t.f===D.lS?u:new B.bpF(t,r)
v=s.bo(0.25)
if(r===t.gi7())s=C.i
s=A.cR(s,r===t.gi7()?2:1)
return A.de(!1,x,!0,A.au(C.W,A.j(E.aZ(r),u,u,u,u,u,D.aPW,u,u,u),C.m,u,u,new A.ap(v,u,s,u,u,u,C.co),u,u,u,u,u,u,36),u,!0,u,u,u,u,u,u,u,u,u,u,u,w,u,u,u,u,u,u,u)},
$S:128}
B.bpF.prototype={
$0(){return this.a.Sg(this.b)},
$S:0}
B.bpM.prototype={
$0(){var x=this.a
return x.t(new B.bpL(x))},
$S:0}
B.bpL.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bpZ.prototype={
$1(d){return d===D.pN},
$S:z+2}
B.bq_.prototype={
$1(d){return d===D.pO},
$S:z+2}
B.bq0.prototype={
$1(d){return d===D.pP},
$S:z+2}
B.bpu.prototype={
$0(){var x=this.b!=null&&!this.c?1:null
return this.a.Kw(x)},
$S:0}
B.bpv.prototype={
$1(d){var x=this.a.d
return x.oU(x.b.aTa(d.ga3(d)))},
$S:89}
B.bpx.prototype={
$1(d){return d.m(0,C.I)?C.a5:C.i},
$S:4}
B.bpw.prototype={
$1(d){return d.m(0,C.I)?C.p:C.L},
$S:4}
B.bpy.prototype={
$0(){var x=this.a
return x.Sg(x.gi7()+1)},
$S:0}
B.bpz.prototype={
$0(){var x=this.a
return x.Sg(x.gi7()+1)},
$S:0}
B.bpc.prototype={
$0(){},
$S:0}
B.bpl.prototype={
$0(){var x=this.a
x.e=this.b
x.Q=null
x.x=0
x.z=new A.b1(Date.now(),0,!1)},
$S:0}
B.bpm.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bpk())},
$S:35}
B.bpk.prototype={
$0(){},
$S:0}
B.bpo.prototype={
$1(d){return this.a.x=d},
$S:59}
B.bpn.prototype={
$1(d){return this.a.BK(this.b,!1)},
$S:9}
B.bpp.prototype={
$0(){var x,w=this.a
w.e=null
x=this.b
w.Q=B.Jb(x)
w.as=x},
$S:0}
B.bpg.prototype={
$0(){var x=this.a
x.e=null
x.r.D(0,this.b)},
$S:0}
B.bph.prototype={
$0(){var x,w=this.a,v=this.b
w.r.I(0,v)
x=this.c
w.w.n(0,v,B.Jb(x))
w.as=x},
$S:0}
B.bpi.prototype={
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
return A.d(n.a.ajA(s.b,B.BM(H.J8(l,m,k.vn(l,m)).b).length),$async$$1)
case 6:r=f
l=o.a
k=l.f
l=l.c
q=B.bLO(H.J8(l,m,k.vn(l,m)).b,r.a)
if(C.c.al(q.c).length!==0){l=n.c
k=o.a.c
j=q.gqs()
l.aiF(k,m,n.b.a,j)}n.x3()
if(o.c!=null)o.t(new B.bpd(o,m,q))
t.push(5)
x=4
break
case 3:v=2
h=u.pop()
o=A.Y(h)
if(o instanceof B.kO){p=o
o=s.a
if(o.c!=null)o.t(new B.bpe(o,s.c,p))}else throw h
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
o=s.a
if(o.c!=null)o.t(new B.bpf(o,s.c))
x=t.pop()
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$$1,w)},
$S:148}
B.bpd.prototype={
$0(){var x=this.c
this.a.f.n(0,this.b,x)
return x},
$S:0}
B.bpe.prototype={
$0(){var x=this.a,w=this.c
x.w.n(0,this.b,B.Jb(w))
x.as=w},
$S:0}
B.bpf.prototype={
$0(){return this.a.r.I(0,this.b)},
$S:0}
B.bpj.prototype={
$0(){var x=this.a
x.f.ad(0)
x.w.ad(0)
x.as=null},
$S:0}
B.bpq.prototype={
$1(d){return d.gqs()},
$S:z+13}
B.bpr.prototype={
$0(){return this.a.BK(this.b,!0)},
$S:0}
B.bps.prototype={
$0(){return this.a.Di(this.b)},
$S:0}
B.bp3.prototype={
$0(){},
$S:0}
B.bpa.prototype={
$2(d,e){return d+this.a.Yz(e)},
$S:103}
B.bpb.prototype={
$2(d,e){return d+I.c7[e-1].a[1]},
$S:103}
B.bp9.prototype={
$0(){return this.a.HU(this.b)},
$S:0}
B.bp8.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.b,o=A.j(H.jD(p),q,q,q,q,q,C.pr,q,q,q),n=y.p,m=A.a([],n)
for(x=this.c,w=this.a,v=w.d,u=p*1000,t=1;t<=x;++t){s=new A.ba(10,10)
r=v.c.a.h(0,u+t)
switch((r==null?$.pZ():r).a.a){case 2:r=G.c4.bo(0.35)
break
case 1:r=D.d0.bo(0.35)
break
case 0:r=C.z8
break
default:r=q}m.push(A.au(C.W,A.j(E.aZ(t),q,q,q,q,q,K.UZ,q,q,q),C.m,q,q,new A.ap(r,q,q,new A.d_(s,s,s,s),q,q,C.r),q,38,q,q,q,q,38))}return A.dH(!0,new A.a_(C.iK,A.ad(A.a([o,C.aR,D.aYd,C.S,new A.ed(D.Zj,A.hH(A.dC(m,C.aM,6,6),q,C.t,q,q,C.w),q),C.an,A.bH(D.aZa,q,q,q,new B.bp7(w,d,p),q,q)],n),C.ab,C.f,C.V),q),C.J,!0)},
$S:49}
B.bp7.prototype={
$0(){var x=0,w=A.o(y.H),v=this,u,t
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:u=v.b
t=v.c
x=4
return A.d(A.e9(null,new B.bp6(t),u,y.y),$async$$0)
case 4:x=e===!0?2:3
break
case 2:x=5
return A.d(v.a.d.FI(t),$async$$0)
case 5:if(u.e!=null)A.al(u,!1).eo()
case 3:return A.m(null,w)}})
return A.n($async$$0,w)},
$S:2}
B.bp6.prototype={
$1(d){var x=null,w=A.j("\u0647\u062a\u0628\u062f\u0623 "+H.jD(this.a)+" \u0645\u0646 \u0627\u0644\u0623\u0648\u0644.",x,x,x,x,x,x,x,x,x)
return A.ea(A.a([A.bH(C.wY,x,x,x,new B.bp4(d),x,x),A.bH(D.b_x,x,x,x,new B.bp5(d),x,x)],y.p),w,D.b_2)},
$S:15}
B.bp4.prototype={
$0(){A.al(this.a,!1).be(!1)
return null},
$S:0}
B.bp5.prototype={
$0(){A.al(this.a,!1).be(!0)
return null},
$S:0}
B.bwO.prototype={
$1(d){var x=this.a
return new A.jR(new B.bwN(x),null,x,null)},
$S:963}
B.bwN.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.a,r=s.b,q=A.a([],y.n)
for(x=y.c,w=1;w<=5;++w)q.push(new A.ex(w,t,A.j(E.aZ(w),t,t,t,t,t,t,t,t,t),x))
x=y.S
v=y.b
u=y.p
x=A.a([D.aUU,C.an,D.aZp,C.T,A.vx(new B.bwI(s,r),q,A.cT([r.a],x),!1,A.jF(t,t,t,new A.b3(new B.bwJ(),v),t,t,t,t,new A.b3(new B.bwK(),v),t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),x),C.Q,A.rE(C.p,C.J,t,new B.bwL(s,r),D.aXR,D.b04,r.c),A.rE(C.p,C.J,t,new B.bwM(s,r),t,D.aUE,r.d)],u)
s=s.x
if(s!=null)C.b.E(x,A.a([C.aR,A.j("\u0627\u0644\u0645\u0639\u0627\u0644\u062c: "+s.glH(),t,t,t,t,t,F.ak,t,C.aF,t)],u))
x.push(C.Q)
x.push(D.VU)
return A.dH(!0,A.hH(A.ad(x,C.ab,C.f,C.h),t,C.t,C.iK,t,C.w),C.J,!0)},
$S:964}
B.bwI.prototype={
$1(d){return this.a.oU(this.b.aT7(d.ga3(d)))},
$S:89}
B.bwK.prototype={
$1(d){return d.m(0,C.I)?C.a5:C.i},
$S:4}
B.bwJ.prototype={
$1(d){return d.m(0,C.I)?C.p:C.L},
$S:4}
B.bwL.prototype={
$1(d){return this.a.oU(this.b.aSB(d))},
$S:5}
B.bwM.prototype={
$1(d){return this.a.oU(this.b.aec(d))},
$S:5}
B.aVf.prototype={
$0(){return A.ej(A.bO(this.a,0,null),C.bL,null)},
$S:0}
B.bx1.prototype={
$1(d){var x,w=A.aQ("https?://",!0,!1)
w=A.bY(d,w,"")
x=A.aQ("www\\.",!0,!1)
return A.BN(A.bY(w,x,"www[.]"),A.aQ("([A-Za-z0-9-]+)\\.(com|net|org|io|xyz|ru|info|me|link)\\b",!1,!1),new B.bx2(),null)},
$S:29}
B.bx2.prototype={
$1(d){return A.h(d.h(0,1))+"[.]"+A.h(d.h(0,2))},
$S:57}
B.bq6.prototype={
$0(){var x=this.a
x.e=!0
x.r=null},
$S:0}
B.bq7.prototype={
$0(){return this.a.f=!0},
$S:0}
B.bq8.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bq9.prototype={
$0(){return this.a.e=!1},
$S:0}
B.bqb.prototype={
$0(){var x=this.a
return x.t(new B.bqa(x))},
$S:0}
B.bqa.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.bx0.prototype={
$1(d){return d==null?"\u2013":A.h(d)},
$S:142};(function installTearOffs(){var x=a._instance_0u
x(B.acb.prototype,"gaYE","aYF",1)
var w
x(w=B.Rk.prototype,"gaYV","zI",0)
x(w,"garx","ut",0)
x(w=B.Vf.prototype,"gn5","ve",1)
x(w,"gaHz","Jj",0)
x(w=B.Xf.prototype,"gn5","ve",1)
x(w,"gaJK","JA",0)
x(w,"gaNf","yl",0)
x(w,"gaw8","HR",0)
x(w=B.Xe.prototype,"gn5","ve",1)
x(w,"gaKm","aKn",1)
x(B.Xd.prototype,"gn5","ve",1)
x(B.Xg.prototype,"gaOu","Kx",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.acb,B.Rl,B.Gq,B.Gs,B.Gr,B.kO,B.OD,B.m1,B.F9,B.q9,B.acc,B.Rj])
x(A.kl,[B.aVg,B.aVi,B.aVn,B.aVo,B.aVq,B.aVp,B.aMD,B.aVv,B.bhB,B.bhA,B.bho,B.bhv,B.bhy,B.bhz,B.bhr,B.bhq,B.bht,B.bhp,B.bhw,B.bw0,B.bvX,B.bvW,B.bw_,B.bpt,B.bpJ,B.bpN,B.bpO,B.bpP,B.bpR,B.bpQ,B.bpV,B.bpX,B.bpW,B.bpI,B.bpK,B.bpB,B.bpA,B.bpE,B.bq2,B.bq4,B.bq5,B.bpF,B.bpM,B.bpL,B.bpu,B.bpy,B.bpz,B.bpc,B.bpl,B.bpk,B.bpp,B.bpg,B.bph,B.bpd,B.bpe,B.bpf,B.bpj,B.bpr,B.bps,B.bp3,B.bp9,B.bp7,B.bp4,B.bp5,B.aVf,B.bq6,B.bq7,B.bq8,B.bq9,B.bqb,B.bqa])
x(A.hV,[B.aVj,B.aVl,B.aVm,B.aVk,B.aMC,B.btV,B.aVt,B.aVu,B.aVr,B.bhC,B.bhD,B.bhE,B.bhu,B.bhx,B.bhs,B.bw5,B.bw4,B.bw1,B.bw3,B.bvY,B.bvZ,B.bpS,B.bpU,B.bpT,B.bpY,B.bpC,B.bpD,B.bq3,B.bq1,B.bpZ,B.bq_,B.bq0,B.bpv,B.bpx,B.bpw,B.bpm,B.bpo,B.bpn,B.bpi,B.bpq,B.bp8,B.bp6,B.bwO,B.bwI,B.bwK,B.bwJ,B.bwL,B.bwM,B.bx1,B.bx2,B.bx0])
x(A.n2,[B.aVh,B.bsr,B.aVw,B.aVx,B.bw2,B.bpH,B.bpG,B.bpa,B.bpb,B.bwN])
x(A.AX,[B.mE,B.C5,B.Ed,B.Be])
w(B.Rk,A.he)
x(A.P,[B.vb,B.Av,B.Au,B.At,B.Aw])
x(A.U,[B.Vf,B.Xf,B.Xe,B.Xd,B.Xg])
x(A.a5,[B.Ee,B.T3,B.AK,B.aca])})()
A.oe(b.typeUniverse,JSON.parse('{"kO":{"bo":[]},"Av":{"P":[],"e":[]},"Au":{"P":[],"e":[]},"At":{"P":[],"e":[]},"Aw":{"P":[],"e":[]},"Rk":{"as":[]},"vb":{"P":[],"e":[]},"Vf":{"U":["vb"]},"Ee":{"a5":[],"e":[]},"T3":{"a5":[],"e":[]},"Xf":{"U":["Av"]},"AK":{"a5":[],"e":[]},"Xe":{"U":["Au"]},"Xd":{"U":["At"]},"aca":{"a5":[],"e":[]},"Xg":{"U":["Aw"]}}'))
var y=(function rtii(){var x=A.a3
return{u:x("q9"),c:x("ex<u>"),r:x("d0<u>"),k:x("y<m1>"),n:x("y<ex<u>>"),I:x("y<d0<u>>"),R:x("y<h0>"),Z:x("y<aB<f,@>>"),d:x("y<OD>"),s:x("y<f>"),p:x("y<e>"),t:x("y<u>"),m:x("bi"),j:x("Q<@>"),L:x("Q<u>"),P:x("aB<f,@>"),f:x("aB<@,@>"),x:x("aj<f,u>"),a:x("bn"),K:x("N"),B:x("F9"),l:x("+(u,u)"),e:x("cC<m1>"),N:x("f"),C:x("Gq"),D:x("Gr"),X:x("Rl"),_:x("Gs"),U:x("aH<f>"),G:x("mE"),q:x("ob"),b:x("b3<H?>"),y:x("A"),i:x("J"),z:x("@"),S:x("u"),A:x("bi?"),Y:x("aB<@,@>?"),O:x("N?"),M:x("+quota,usage(u,u)?"),o:x("db"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.m_=new B.C5(0,"none")
D.m0=new B.C5(1,"learning")
D.e0=new B.C5(2,"memorized")
D.Zj=new A.at(0,1/0,0,320)
D.dH=new A.H(1,0.9725490196078431,0.44313725490196076,0.44313725490196076,C.l)
D.Zs=new A.ap(D.dH,null,null,null,null,null,C.co)
D.d0=new A.H(1,0.984313725490196,0.7490196078431373,0.1411764705882353,C.l)
D.aes=new A.a4(C.BQ,null,C.c3,null,null,null)
D.b_5=new A.r("\u0627\u0644\u0646\u0635 \u0645\u062e\u0641\u064a \u2014 \u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.ek,null,null,null,null,null,null,null,null)
D.aPb=new A.t(!0,C.eX,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYe=new A.r("(\u062f\u0648\u0633 \u0647\u0646\u0627 \u0644\u0648 \u0639\u0627\u064a\u0632 \u062a\u0628\u0635)",null,D.aPb,null,null,null,null,null,null,null,null)
D.aqn=x([D.aes,C.T,D.b_5,D.aYe],y.p)
D.a53=new A.j8(C.w,C.f,C.h,C.j,null,C.b2,null,0,D.aqn,null)
D.a8u=new A.Z(0,18,0,18)
D.a8y=new A.Z(0,26,0,26)
D.a8D=new A.Z(0,4,0,6)
D.a8S=new A.Z(14,12,14,14)
D.a9r=new A.Z(3,0,0,0)
D.abI=new A.a2(63251,"MaterialIcons",null,!1)
D.ne=new A.a2(63677,"MaterialIcons",null,!1)
D.acd=new A.a2(983256,"MaterialIcons",null,!1)
D.acb=new A.a2(983209,"MaterialIcons",null,!1)
D.acG=new A.a4(D.acb,28,C.p,null,null,null)
D.ad8=new A.a4(C.By,null,N.hl,null,null,null)
D.abz=new A.a2(62961,"MaterialIcons",null,!1)
D.adr=new A.a4(D.abz,null,null,null,null,null)
D.abG=new A.a2(63199,"MaterialIcons",null,!1)
D.ads=new A.a4(D.abG,null,null,null,null,null)
D.adv=new A.a4(C.hx,null,C.eX,null,null,null)
D.adx=new A.a4(C.kM,44,C.i,null,null,null)
D.adP=new A.a4(D.ne,null,D.dH,null,null,null)
D.adY=new A.a4(C.tN,null,D.dH,null,null,null)
D.ae8=new A.a4(C.Bu,null,null,null,null,null)
D.ae9=new A.a4(D.ne,null,null,null,null,null)
D.Ca=new A.a4(C.nj,null,null,null,null,null)
D.aeq=new A.a4(C.kJ,20,D.d0,null,null,null)
D.aeE=new A.a4(C.ng,30,C.p,null,null,null)
D.aeW=new A.a4(C.nh,16,C.p,null,null,null)
D.abV=new A.a2(63520,"MaterialIcons",null,!1)
D.af7=new A.a4(D.abV,null,null,null,null,null)
D.afc=new A.a4(C.kL,null,null,null,null,null)
D.afh=new A.a4(C.Bj,null,null,null,null,null)
D.CU=x([1,3,5],y.t)
D.DH=x(["\u0627\u0639\u0648\u0630","\u0628\u0627\u0644\u0644\u0647","\u0645\u0646","\u0627\u0644\u0634\u064a\u0637\u0627\u0646","\u0627\u0644\u0631\u062c\u064a\u0645"],y.s)
D.aAO=new A.a_(C.hs,T.qC,null)
D.ao4=x([D.aAO],y.p)
D.aE7=new A.R(C.iY,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0629 \u0628\u0635\u0648\u062a \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062d\u0635\u0631\u064a (\u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645) \u0645\u0631\u0629 \u0623\u0648 \u0663 \u0623\u0648 \u0665 \u0645\u0631\u0627\u062a.")
D.aE_=new A.R(D.ne,"\u0633\u0645\u0651\u0639\u0647\u0627 \u0645\u0646 \u062d\u0641\u0638\u0643 \u2014 \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0644\u0648\u0651\u0646\u0644\u0643 \u0643\u0644 \u0643\u0644\u0645\u0629: \u0623\u062e\u0636\u0631 \u0635\u062d\u060c \u0623\u0635\u0641\u0631 \u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0623\u062d\u0645\u0631 \u063a\u0644\u0637.")
D.aEk=new A.R(C.fy,"\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0645\u0627 \u062a\u0633\u0645\u0651\u0639\u0647\u0627 \u0635\u062d \u0645\u0631\u062a\u064a\u0646 \u0648\u0631\u0627 \u0628\u0639\u0636 (\u062a\u0642\u062f\u0631 \u062a\u063a\u064a\u0651\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a).")
D.ac1=new A.a2(63625,"MaterialIcons",null,!1)
D.aEt=new A.R(D.ac1,"\u0643\u0644 \u062f\u0647 \u0628\u064a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u2014 \u0635\u0648\u062a\u0643 \u0645\u0634 \u0628\u064a\u062a\u0631\u0641\u0639 \u0639\u0644\u0649 \u0623\u064a \u0633\u064a\u0631\u0641\u0631.")
D.apC=x([D.aE7,D.aE_,D.aEk,D.aEt],A.a3("y<+(a2,f)>"))
D.arp=x([D.m_,D.m0,D.e0],A.a3("y<C5>"))
D.I9=x(["\u0628\u0633\u0645","\u0627\u0644\u0644\u0647","\u0627\u0644\u0631\u062d\u0645\u0646","\u0627\u0644\u0631\u062d\u064a\u0645"],y.s)
D.axW=new B.Ed(0,"idle")
D.Oh=new B.Ed(1,"loading")
D.hP=new B.Ed(2,"ready")
D.axX=new B.Ed(3,"failed")
D.adN=new A.a4(C.dd,18,G.c4,null,null,null)
D.b_J=new A.r("\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u062c\u0627\u0647\u0632 \u064a\u0633\u0645\u0639\u0643",null,K.px,null,null,null,null,null,null,null,null)
D.ani=x([D.adN,C.by,D.b_J],y.p)
D.aJI=new A.io(C.az,C.f,C.h,C.j,null,C.b2,null,0,D.ani,null)
D.aA6=new A.a_(C.aA,D.aJI,null)
D.a9o=new A.Z(2,6,2,4)
D.aOQ=new A.t(!0,C.p,null,null,null,null,14,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUS=new A.r("\u0627\u0628\u062f\u0623 \u0645\u0646 \u0647\u0646\u0627 \u2014 \u0627\u0644\u0641\u0627\u062a\u062d\u0629 \u0648\u062c\u0632\u0621 \u0639\u0645\u0651",null,D.aOQ,null,null,null,null,null,null,null,null)
D.aAe=new A.a_(D.a9o,D.aUS,null)
D.b_S=new A.r("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.ek,null,null,null,null,null,null,null,null)
D.aok=x([O.pe,C.as,D.b_S],y.p)
D.aJG=new A.io(C.az,C.c8,C.h,C.j,null,C.b2,null,0,D.aok,null)
D.aAl=new A.a_(Q.rD,D.aJG,null)
D.wP=new A.t(!0,D.d0,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b0_=new A.r("\u0646\u0635\u064a\u062d\u0629: \u0627\u062d\u0641\u0638 \u0663\u2013\u0665 \u0622\u064a\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0631\u0629 \u0623\u0633\u0647\u0644.",null,D.wP,null,null,null,null,null,null,null,null)
D.aAo=new A.a_(C.fx,D.b0_,null)
D.b_F=new A.r("\u0644\u0633\u0647 \u0645\u0633\u0645\u0651\u0639\u062a\u0634 \u0623\u064a \u0622\u064a\u0629 \u2014 \u0627\u0628\u062f\u0623 \u0628\u0633\u0648\u0631\u0629 \u0642\u0635\u064a\u0631\u0629 \u0645\u0646 \u062c\u0632\u0621 \u0639\u0645\u0651.",null,F.ak,C.ad,null,null,null,null,null,null,null)
D.aAu=new A.a_(C.C,D.b_F,null)
D.a9l=new A.Z(2,0,2,8)
D.aYm=new A.r("\u0627\u0644\u0633\u0648\u0631 \u0627\u0644\u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u060c \u0645\u0646 \u0627\u0644\u0646\u0627\u0633 \u0644\u062d\u062f \u0627\u0644\u0646\u0628\u0623.",null,F.ak,null,null,null,null,null,null,null,null)
D.aAI=new A.a_(D.a9l,D.aYm,null)
D.af1=new A.a4(C.hy,30,C.p,null,null,null)
D.aTs=new A.t(!0,C.i,null,null,null,null,17,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b0n=new A.r("\u0633\u0645\u0651\u0639\u060c \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0642\u0648\u0644\u0643 \u0635\u062d \u0648\u0644\u0627 \u063a\u0644\u0637",null,D.aTs,null,null,null,null,null,null,null,null)
D.aa1=new A.dE(1,C.aU,D.b0n,null)
D.aox=x([D.af1,C.aV,D.aa1],y.p)
D.aJy=new A.io(C.az,C.f,C.h,C.j,null,C.b2,null,0,D.aox,null)
D.aeM=new A.a4(C.fy,18,G.c4,null,null,null)
D.V6=new A.t(!0,G.c4,null,null,null,null,12,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b_q=new A.r("\u0645\u062d\u0641\u0648\u0638\u0629",null,D.V6,null,null,null,null,null,null,null,null)
D.anG=x([D.aeM,C.fU,D.b_q],y.p)
D.aJF=new A.io(C.az,C.f,C.V,C.j,null,C.b2,null,0,D.anG,null)
D.aLP=new A.G(0,30)
D.pd=new A.G(1/0,54)
D.aM_=new A.G(1/0,48)
D.aM2=new A.G(1/0,50)
D.aM5=new A.G(1/0,52)
D.aM8=new A.cr(16,null,null,null)
D.aMc=new A.cr(14,14,O.yF,null)
D.aZh=new A.r("safe mode / no-gpu flags cleared (reload)",null,null,null,null,null,null,null,null,null,null)
D.aMF=new A.hK(D.aZh,null,null,null,null,null,null,null,null,null,null,null,null,C.y,!1,null,null,null,C.k,null)
D.aOi=new A.t(!0,C.i,null,null,null,null,14.5,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOI=new A.t(!0,C.a6,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.wH=new A.t(!0,D.dH,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPW=new A.t(!0,C.i,null,null,null,null,12,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ia=new A.t(!0,C.i,null,"AmiriQuranMT",null,null,27,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRp=new A.t(!0,C.cr,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.V9=new A.t(!0,D.dH,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRN=new A.t(!0,C.p,null,null,null,null,24,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vc=new A.t(!0,C.i,null,null,null,null,12.5,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aS0=new A.t(!0,C.p,null,null,null,null,null,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSC=new A.t(!0,D.d0,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSD=new A.t(!0,G.c4,null,null,null,null,null,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSV=new A.t(!0,C.i,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUi=new A.r("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u062e\u0631 \u0645\u0631\u0629",null,C.ic,null,null,null,null,null,null,null,null)
D.aUE=new A.r("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643 (\u062e\u0628\u0651\u064a \u0627\u0644\u0646\u0635)",null,C.cW,null,null,null,null,null,null,null,null)
D.aUU=new A.r("\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,C.pr,null,null,null,null,null,null,null,null)
D.aUX=new A.r("\u2022 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641: \u0645\u0634\u0631\u0648\u0639 \u062a\u0646\u0632\u064a\u0644 Tanzil (\u062a\u0631\u062e\u064a\u0635 CC BY 3.0).",null,F.ak,null,null,null,null,null,null,null,null)
D.aPU=new A.t(!0,G.c4,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aV3=new A.r("\u0648\u0635\u0644\u062a\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2014 \u0634\u0643\u0631\u064b\u0627\u060c \u0647\u0646\u0628\u0635 \u0639\u0644\u064a\u0647\u0627.",null,D.aPU,null,null,null,null,null,null,null,null)
D.aV6=new A.r("\u062e\u0628\u0651\u064a \u0646\u0635 \u0627\u0644\u0622\u064a\u0629 \u0648\u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,F.ak,null,null,null,null,null,null,null,null)
D.aVc=new A.r("\u0639\u062f\u0651\u064a \u0644\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.ek,null,null,null,null,null,null,null,null)
D.aVU=new A.r("\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0627\u0628\u062f\u0623",null,C.cG,null,null,null,null,null,null,null,null)
D.aWj=new A.r("\u064a\u0644\u0627 \u0646\u0628\u062f\u0623",null,C.cH,null,null,null,null,null,null,null,null)
D.aWn=new A.r("\u0645\u0645\u0643\u0646 \u062a\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 \u062f\u0644\u0648\u0642\u062a\u064a \u0644\u062d\u062f \u0645\u0627 \u064a\u062e\u0644\u0635.",null,F.ak,null,null,null,null,null,null,null,null)
D.aWF=new A.r("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.wQ,null,null,null,null,null,null,null,null)
D.aX3=new A.r("\u062c\u0631\u0651\u0628 \u0639\u0644\u0649 \u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a (\u0644\u0644\u062a\u062c\u0631\u0628\u0629)",null,null,null,null,null,null,null,null,null,null)
D.aXm=new A.r("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643",null,K.lA,null,null,null,null,null,null,null,null)
D.aXI=new A.r("reset safe mode / WebGPU ban",null,C.wD,null,null,null,null,null,null,null,null)
D.aXN=new A.r("\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629",null,D.wP,null,null,null,null,null,null,null,null)
D.aXR=new A.r("\u0628\u0639\u062f \u062d\u0648\u0627\u0644\u064a \u062b\u0627\u0646\u064a\u0629 \u0633\u0643\u0648\u062a",null,F.ak,null,null,null,null,null,null,null,null)
D.aY5=new A.r("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636",null,F.b_,null,null,null,null,null,null,null,null)
D.aYd=new A.r("\u0623\u062e\u0636\u0631: \u0645\u062d\u0641\u0648\u0638\u0629 \u2014 \u0623\u0635\u0641\u0631: \u0628\u062a\u0631\u0627\u062c\u0639\u0647\u0627 \u2014 \u0631\u0645\u0627\u062f\u064a: \u0644\u0633\u0647",null,F.ak,null,null,null,null,null,null,null,null)
D.aYn=new A.r("\u0645\u0641\u064a\u0634 \u0633\u0648\u0631\u0629 \u0628\u0627\u0644\u0627\u0633\u0645 \u062f\u0647",null,F.ak,null,null,null,null,null,null,null,null)
D.aTu=new A.t(!0,C.p,null,null,null,null,12.5,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZ9=new A.r("\u0627\u0628\u0639\u062a \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aTu,null,null,null,null,null,null,null,null)
D.aR9=new A.t(!0,D.dH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZa=new A.r("\u0627\u0628\u062f\u0623 \u0627\u0644\u0633\u0648\u0631\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644",null,D.aR9,null,null,null,null,null,null,null,null)
D.aZp=new A.r("\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f \u0643\u0627\u0645 \u062a\u0633\u0645\u064a\u0639 \u0635\u062d \u0648\u0631\u0627 \u0628\u0639\u0636\u061f",null,K.lA,null,null,null,null,null,null,null,null)
D.aO4=new A.t(!0,C.i,null,null,null,null,null,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZF=new A.r("\u0627\u0644\u0645\u0635\u0627\u062f\u0631",null,D.aO4,null,null,null,null,null,null,null,null)
D.aZQ=new A.r("\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.cG,null,null,null,null,null,null,null,null)
D.b_2=new A.r("\u062a\u0645\u0633\u062d \u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0633\u0648\u0631\u0629 \u062f\u064a\u061f",null,null,null,null,null,null,null,null,null,null)
D.b_b=new A.r("\u0633\u0645\u0651\u0639\u0647\u0645 \u062a\u0627\u0646\u064a",null,null,null,null,null,null,null,null,null,null)
D.b_x=new A.r("\u0627\u0645\u0633\u062d",null,null,null,null,null,null,null,null,null,null)
D.b_y=new A.r("\u2022 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: whisper-base-ar-quran \u0645\u0646 Tarteel (\u062a\u0631\u062e\u064a\u0635 Apache-2.0)\u060c \u0628\u0635\u064a\u063a\u0629 ONNX \u0645\u0646 \u0645\u0634\u0631\u0648\u0639 Basira\u060c \u0648\u0628\u064a\u0634\u062a\u063a\u0644 \u062c\u0648\u0651\u0647 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0628\u0645\u0643\u062a\u0628\u0629 Transformers.js.",null,F.ak,null,null,null,null,null,null,null,null)
D.b_z=new A.r("\u062e\u0644\u0635\u062a",null,C.jK,null,null,null,null,null,null,null,null)
D.b_A=new A.r("\u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647 \u0630\u0627\u0643\u0631\u062a\u0647 \u0642\u0644\u064a\u0644\u0629 \u2014 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0645\u0643\u0646 \u064a\u0643\u0648\u0646 \u0628\u0637\u064a\u0621 \u0639\u0644\u064a\u0647.",null,D.wP,null,null,null,null,null,null,null,null)
D.aS2=new A.t(!0,C.cr,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,C.fX,null,null,null,null,null,null,null,null)
D.b_X=new A.r("\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aS2,null,null,null,null,null,null,null,null)
D.b02=new A.r("\u0623\u0648\u0644 \u0645\u0631\u0629 \u0628\u0633: \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,F.b_,null,null,null,null,null,null,null,null)
D.b04=new A.r("\u0648\u0642\u0651\u0641 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0644\u0648\u062d\u062f\u0647 \u0644\u0645\u0627 \u0623\u0633\u0643\u062a",null,C.cW,null,null,null,null,null,null,null,null)
D.b0m=new A.r("\u2022 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: \u0627\u0644\u0634\u064a\u062e \u0645\u062d\u0645\u0648\u062f \u062e\u0644\u064a\u0644 \u0627\u0644\u062d\u0635\u0631\u064a \u2014 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645\u060c \u0645\u0646 everyayah.com.",null,F.ak,null,null,null,null,null,null,null,null)
D.VU=new B.aca(null)
D.b12=new B.At(null)
D.b13=new B.Rj(2,1,!0,!1,!1)
D.VV=new B.Rl(!1,!1,!1,!1,!1,0)
D.h4=new B.mE(0,"ok")
D.pN=new B.mE(1,"near")
D.pO=new B.mE(2,"wrong")
D.pP=new B.mE(3,"missing")
D.Wj=new B.mE(4,"extra")
D.abR=new A.a2(63456,"MaterialIcons",null,!1)
D.b6x=new B.AK(D.d0,D.abR,"\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629","\u0642\u0631\u0651\u0628 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0646\u0643 \u0648\u0627\u0642\u0631\u0627 \u0628\u0635\u0648\u062a \u0648\u0627\u0636\u062d \u0641\u064a \u0645\u0643\u0627\u0646 \u0647\u0627\u062f\u064a\u060c \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a.",null)
D.b6S=new B.T3(!1,null)
D.xm=new B.T3(!0,null)
D.jX=new B.Be(0,"idle")
D.q_=new B.Be(1,"playing")
D.q0=new B.Be(2,"recording")
D.lS=new B.Be(3,"thinking")
D.ha=new B.Be(4,"result")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ccv","bCw",()=>new B.acb())
x($,"cfG","bRi",()=>A.aQ("\u0640[\u064b-\u0652]*\u0670",!0,!1))
x($,"cfH","bRj",()=>A.aQ("\u0640[\u064b-\u0652]*[\u06e6\u06e7]",!0,!1))
x($,"cfS","bRr",()=>A.aQ("\u0648\u0670",!0,!1))
x($,"cff","bR_",()=>A.aQ("[\u0648\u064a\u0649][\u064b-\u0652]*[\u0654]",!0,!1))
x($,"cdL","bQ1",()=>A.aQ("\u0627[\u0654\u0655]",!0,!1))
x($,"ceS","bQJ",()=>A.aQ("[\u0654\u0655]",!0,!1))
x($,"cdM","bQ2",()=>A.aQ("[\u0622\u0623\u0625\u0671\u0672\u0673]",!0,!1))
x($,"cdS","bQ7",()=>A.aQ("[\u0624\u0626]",!0,!1))
x($,"ceU","bQL",()=>A.aQ("[\u064b-\u065f\u0670\u06d6-\u06ed\u08d3-\u08ff\u0640]",!0,!1))
x($,"cfk","bR2",()=>A.aQ("[\u06dd\u06de\u0660-\u0669\u06f0-\u06f90-9]",!0,!1))
x($,"cf0","bQR",()=>A.aQ("[^\u0621-\u064a\\s]",!0,!1))
x($,"cfF","bD6",()=>A.aQ("\\s+",!0,!1))
x($,"c9P","pZ",()=>B.bSm(D.m_,0,A.byj(0,!0)))
x($,"ccw","Ji",()=>new B.Rk($.bCw(),D.b13,B.c_j(),D.axW,$.a7()))})()};
(a=>{a["93DK1ZtXujYBCxzzPQZIExfaUWw="]=a.current})($__dart_deferred_initializers__);