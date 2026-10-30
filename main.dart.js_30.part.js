((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,P,R,H,N,G,O,S,T,K,L,B={
c_0(d){var x,w,v,u,t,s
if(d instanceof B.kN)return d
try{x=A.cp(d)
w=x.code
v=x.message
u=w==null?"failed":A.a9(w)
t=v==null?"":A.a9(v)
return new B.kN(u,t)}catch(s){u=A.h(d)
return new B.kN("failed",u)}},
ac9:function ac9(){this.b=this.a=null},
aVd:function aVd(d){this.a=d},
aVg:function aVg(){},
aVf:function aVf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aVe:function aVe(d){this.a=d},
aVk:function aVk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aVi:function aVi(d){this.a=d},
aVj:function aVj(d){this.a=d},
aVl:function aVl(d){this.a=d},
aVn:function aVn(d,e,f){this.a=d
this.b=e
this.c=f},
aVm:function aVm(d,e,f){this.a=d
this.b=e
this.c=f},
aVh:function aVh(){},
c_1(d,e){return new B.kN(d,e)},
Ri:function Ri(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.w=i},
Go:function Go(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i
_.w=j},
Gq:function Gq(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Gp:function Gp(d,e){this.a=d
this.b=e},
kN:function kN(d,e){this.a=d
this.b=e},
bMy(d){var x,w=$.bR1()
w=A.bY(d,w,"\u0627")
x=$.bR2()
w=A.bY(w,x,"\u064a")
x=$.bRa()
w=A.bY(w,x,"\u0627")
x=$.bPL()
w=A.bY(w,x,"\u0627")
x=$.bQJ()
w=A.bY(w,x,"\u0621")
x=$.bQs()
w=A.bY(w,x,"\u0621")
x=$.bPM()
w=A.bY(w,x,"\u0627")
x=$.bPR()
w=A.bY(w,x,"\u0621")
w=A.bY(w,"\u0649","\u064a")
w=A.bY(w,"\u0629","\u0647")
x=$.bQu()
w=A.bY(w,x,"")
x=$.bQM()
w=A.bY(w,x," ")
x=$.bQA()
w=A.bY(w,x," ")
x=$.bCQ()
return C.c.al(A.bY(w,x," "))},
c3s(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.length,k=e.length
if(l===0)return k
if(k===0)return l
x=k+1
w=y.S
v=J.kx(x,w)
for(u=0;u<x;++u)v[u]=u
t=A.bP(x,0,!1,w)
for(s=1;s<=l;++s,r=t,t=v,v=r){t[0]=s
for(w=s-1,u=1;u<=k;++u){q=u-1
p=d.charCodeAt(w)===e.charCodeAt(q)?0:1
o=v[u]+1
n=t[q]+1
m=v[q]+p
if(o<n)q=o<m?o:m
else q=n<m?n:m
t[u]=q}}return v[k]},
bwS(d,e){var x,w,v,u,t,s
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
s=1-B.c3s(d,e)/u
return s>=1?0.99:s},
BK(d){var x,w,v,u,t,s,r,q=A.a([],y.d)
for(x=C.c.qY(d,$.bCQ()),w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.length===0)continue
t=B.bMy(u)
s=A.bY(t," ","")
if(s.length===0){if(q.length!==0){r=q.pop()
q.push(new B.OA(r.a+" "+u,r.b))}continue}q.push(new B.OA(u,s))}return q},
c2e(d,e){var x,w,v,u,t=new B.bsb(),s=A.a([],y.s)
for(x=A.eQ(e,0,A.i9(5,"count",y.S),A.ae(e).c),w=x.$ti,x=new A.bS(x,x.gL(0),w.i("bS<aG.E>")),w=w.i("aG.E");x.u();){v=x.d
s.push((v==null?w.a(v):v).b)}u=!t.$2(s,D.DA)&&t.$2(d,D.DA)?C.b.is(d,5):d
return!t.$2(s,D.I2)&&t.$2(u,D.I2)?C.b.is(u,4):u},
bLx(d,e){var x=B.BK(d),w=B.bMy(e),v=y.U
v=A.a0(new A.aH(A.a(w.split(" "),y.s),new B.btF(),v),v.i("M.E"))
return new B.F7(x,B.c1s(x,B.c2e(v,x)),w)},
c1s(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=A.a([],y.s)
for(x=a5.length,w=0;w<a5.length;a5.length===x||(0,A.B)(a5),++w)a4.push(a5[w].b)
v=a4.length
u=a6.length
t=u+1
x=(v+1)*t
s=y.i
r=A.bP(x,0,!1,s)
q=A.bP(x,0,!1,y.S)
p=A.bP(v*(u===0?1:u),0,!1,s)
for(o=0;o<v;++o)for(x=o*u,n=0;n<u;++n)p[x+n]=B.bwS(a4[o],a6[n])
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
e=2}if(n>=2&&r[h-2]<g&&B.bwS(a4[m],a6[n-2]+a6[n-1])>=1){g=r[h-2]
e=3}if(s&&r[i+n-1]<g&&B.bwS(a4[j]+a4[m],a6[n-1])>=1){g=r[i+n-1]
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
else m=a2>=0.6?D.pJ:D.pK
a1.push(new B.m1(o,x,s,m))
break
case 1:--o
a1.push(new B.m1(o,a4[o],null,D.pL))
break
case 2:--n
a1.push(new B.m1(null,null,a6[n],D.Wc))
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
mD:function mD(d,e){this.a=d
this.b=e},
OA:function OA(d,e){this.a=d
this.b=e},
m1:function m1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
F7:function F7(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
aMA:function aMA(d){this.a=d},
aMz:function aMz(){},
bsb:function bsb(){},
btF:function btF(){},
bS5(d,e,f){return new B.q7(d,e,f)},
c4h(d){var x
A:{if("memorized"===d){x=D.e0
break A}if("learning"===d){x=D.m_
break A}x=D.lZ
break A}return x},
bNv(d,e){return d>=1&&d<=114&&e>=1&&e<=I.c7[d-1].a[1]},
c_2(){var x=y.S
return new B.aca(A.x(x,y.u),A.aF(x))},
aVp(d){var x=d.iX()
return C.c.dt(C.e.j(A.cK(x)),4,"0")+"-"+C.c.dt(C.e.j(A.ch(x)),2,"0")+"-"+C.c.dt(C.e.j(A.cA(x)),2,"0")},
bIE(d){var x=y.x,w=A.a0(new A.aj(A.a(d.split("-"),y.s),A.c5y(),x),x.i("aG.E"))
return B.aVp(A.jI(w[0],w[1],w[2]-1,12,0,0,0))},
bzW(d){var x,w,v,u,t,s,r,q,p=y.S,o=A.x(p,y.u),n=A.aF(p),m=new B.aca(o,n),l=d.h(0,"rows")
if(y.f.b(l))for(x=l.gdC(),x=x.ga0(x),w=y.j;x.u();){v=x.gK()
u=A.f0(A.h(v.a),null)
t=v.b
v=!0
if(u!=null)if(w.b(t))if(J.bf(t)>=3){v=C.e.ba(u,1000)
s=C.e.ah(u,1000)
v=!(v>=1&&v<=114&&s>=1&&s<=I.c7[v-1].a[1])}if(v)continue
v=J.bq(t)
r=C.d.bU(A.dp(v.h(t,0)))
if(r<0||r>=3)continue
o.n(0,u,new B.q7(D.arh[r],C.d.bU(A.dp(v.h(t,1))),new A.b1(A.kp(C.d.bU(A.dp(v.h(t,2))),0,!0),0,!0)))}q=d.h(0,"dirty")
if(y.j.b(q)){x=J.bxs(q,y.o)
p=A.nn(x,new B.aVo(),x.$ti.i("M.E"),p)
n.E(0,new A.aH(p,o.gWc(),A.w(p).i("aH<M.E>")))}m.c=A.Q(d.h(0,"last"))
p=A.bm(d.h(0,"streak"))
p=p==null?null:C.d.bU(p)
p=m.d=p==null?0:p
o=A.bm(d.h(0,"best"))
o=o==null?null:C.d.bU(o)
m.e=o==null?p:o
return m},
arm(d,e){return"https://everyayah.com/data/Husary_Muallim_128kbps/"+C.c.dt(C.e.j(d),3,"0")+C.c.dt(C.e.j(e),3,"0")+".mp3"},
C3:function C3(d,e){this.a=d
this.b=e},
q7:function q7(d,e,f){this.a=d
this.b=e
this.c=f},
aca:function aca(d,e){var _=this
_.a=d
_.b=e
_.c=null
_.e=_.d=0},
aVq:function aVq(){},
aVr:function aVr(){},
aVo:function aVo(){},
Rg:function Rg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bXz(){return new B.vb(null)},
c7Y(d,e){var x,w,v,u,t={},s=I.c7[e-1].a[1],r=$.Jg().c
t.a=1
x=r.a
w=e*1000
v=1
for(;;){if(v<=s){v=x.h(0,w+v)
v=(v==null?$.pX():v).a===D.e0}else v=!1
if(!v)break
v=++t.a}x=t.a
if(x>s){t.a=1
u=1}else u=x
x=s<=10
if(x)u=1
t.b=u
t.c=x?s:C.e.cA(u+4,1,s)
return A.fz(C.dc,new B.bvP(t,s,e),d,!0,null,null,!1,y.l)},
bBF(d){return A.d5(0,0,0,0,0,C.e.cA(C.d.ar(6+d*1.2),25,90))},
bAC(d){return E.aZ(C.e.ba(d,60))+":"+C.c.dt(E.aZ(C.e.ah(d,60)),2,"\u0660")},
bNg(d){return A.fz(C.dc,new B.bwx($.Jg()),d,!0,null,null,!1,y.H)},
J9(d){var x,w=d.a
A:{if("timeout"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0627\u062a\u0623\u062e\u0631 \u0623\u0648\u064a \u0648\u0645\u0631\u062f\u0651\u0634\u060c \u0641\u0648\u0642\u0651\u0641\u0646\u0627\u0647 \u0648\u062c\u0631\u0651\u0628\u0646\u0627 \u062a\u0627\u0646\u064a \u0628\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0623\u062e\u0641 \u0648\u0645\u0646\u0641\u0639\u0634. \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}if("crashed"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0642\u0641 \u0641\u062c\u0623\u0629 (\u063a\u0627\u0644\u0628\u064b\u0627 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0634 \u0645\u0643\u0641\u064a\u0629). \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}x=d.gjT()
break A}return x},
c9f(d,e,f){var x,w=new B.bwL(),v=w.$1(f),u=w.$1("\xab\u0627\u0644\u0645\u062d\u0641\u0651\u0638\xbb \u0645\u0634\u0643\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 ("+e+")\n"+d.a+": "+d.b+"\n"),t=1990-u.length
if(v.length>t)v=t<=1?"":C.c.Y(v,0,t-1)+"\u2026"
x=u+v
return x.length>1990?C.c.Y(x,0,1990):x},
bNq(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
try{x=y.P.a(C.a1.eV(a4,null))
s=y.Y
r=s.a(J.b4(x,"rec"))
w=r==null?C.cE:r
q=s.a(J.b4(x,"last"))
v=q==null?C.cE:q
u=new B.bwK()
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
Eb:function Eb(d,e){this.a=d
this.b=e},
Rh:function Rh(d,e,f,g,h){var _=this
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
aVs:function aVs(d){this.a=d},
aVt:function aVt(d){this.a=d},
aVu:function aVu(d){this.a=d},
vb:function vb(d){this.a=d},
Vb:function Vb(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.w=_.r=null},
bhm:function bhm(d){this.a=d},
bhl:function bhl(d,e){this.a=d
this.b=e},
bhn:function bhn(d){this.a=d},
bhk:function bhk(d,e){this.a=d
this.b=e},
bho:function bho(){},
bh8:function bh8(){},
bhe:function bhe(d,e,f){this.a=d
this.b=e
this.c=f},
bhf:function bhf(){},
bhi:function bhi(d){this.a=d},
bhh:function bhh(){},
bhj:function bhj(d){this.a=d},
bhb:function bhb(d,e){this.a=d
this.b=e},
bhc:function bhc(d){this.a=d},
bha:function bha(){},
bhd:function bhd(d){this.a=d},
bh9:function bh9(d){this.a=d},
bhg:function bhg(d,e){this.a=d
this.b=e},
Ec:function Ec(d,e,f){this.c=d
this.d=e
this.a=f},
T_:function T_(d,e){this.c=d
this.a=e},
bvP:function bvP(d,e,f){this.a=d
this.b=e
this.c=f},
bvM:function bvM(d,e,f){this.a=d
this.b=e
this.c=f},
bvO:function bvO(d,e){this.a=d
this.b=e},
bvL:function bvL(d,e){this.a=d
this.b=e},
bvK:function bvK(d,e){this.a=d
this.b=e},
bvN:function bvN(d,e){this.a=d
this.b=e},
bvG:function bvG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bvF:function bvF(d,e,f){this.a=d
this.b=e
this.c=f},
bvH:function bvH(d){this.a=d},
bvI:function bvI(d){this.a=d},
bvJ:function bvJ(d,e){this.a=d
this.b=e},
Bc:function Bc(d,e){this.a=d
this.b=e},
At:function At(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Xb:function Xb(d,e){var _=this
_.d=d
_.e=$
_.f=e
_.w=_.r=null
_.x=!1
_.y=0
_.ax=_.at=_.as=_.Q=_.z=null
_.ay=0
_.c=_.a=_.ch=null},
bpd:function bpd(){},
bpt:function bpt(d,e){this.a=d
this.b=e},
bpx:function bpx(d){this.a=d},
bpy:function bpy(d){this.a=d},
bpz:function bpz(d,e,f){this.a=d
this.b=e
this.c=f},
bpB:function bpB(d){this.a=d},
bpC:function bpC(d){this.a=d},
bpA:function bpA(){},
bpE:function bpE(d){this.a=d},
bpD:function bpD(d){this.a=d},
bpF:function bpF(d,e){this.a=d
this.b=e},
bpH:function bpH(d){this.a=d},
bpI:function bpI(d){this.a=d},
bpG:function bpG(){},
bps:function bps(d,e,f){this.a=d
this.b=e
this.c=f},
bpu:function bpu(d,e,f){this.a=d
this.b=e
this.c=f},
bpl:function bpl(d){this.a=d},
bpm:function bpm(d){this.a=d},
bpk:function bpk(){},
bpn:function bpn(){},
bpo:function bpo(d,e){this.a=d
this.b=e},
bpN:function bpN(d){this.a=d},
bpO:function bpO(d){this.a=d},
bpP:function bpP(d,e){this.a=d
this.b=e},
bpM:function bpM(d){this.a=d},
bpQ:function bpQ(d,e){this.a=d
this.b=e},
bpr:function bpr(){},
bpq:function bpq(d){this.a=d},
bpp:function bpp(d,e){this.a=d
this.b=e},
bpw:function bpw(d){this.a=d},
bpv:function bpv(d){this.a=d},
bpJ:function bpJ(){},
bpK:function bpK(){},
bpL:function bpL(){},
bpe:function bpe(d,e,f){this.a=d
this.b=e
this.c=f},
bpf:function bpf(d){this.a=d},
bph:function bph(){},
bpg:function bpg(){},
bpi:function bpi(d){this.a=d},
bpj:function bpj(d){this.a=d},
AI:function AI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
As:function As(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Xa:function Xa(d,e,f,g,h){var _=this
_.d=d
_.e=null
_.f=e
_.r=f
_.w=g
_.x=0
_.as=_.Q=_.z=_.y=null
_.at=h
_.c=_.a=null},
boX:function boX(){},
bp5:function bp5(d,e){this.a=d
this.b=e},
bp6:function bp6(d){this.a=d},
bp4:function bp4(){},
bp8:function bp8(d){this.a=d},
bp7:function bp7(d,e){this.a=d
this.b=e},
bp9:function bp9(d,e){this.a=d
this.b=e},
bp0:function bp0(d,e){this.a=d
this.b=e},
bp1:function bp1(d,e,f){this.a=d
this.b=e
this.c=f},
bp2:function bp2(d,e,f){this.a=d
this.b=e
this.c=f},
boY:function boY(d,e,f){this.a=d
this.b=e
this.c=f},
boZ:function boZ(d,e,f){this.a=d
this.b=e
this.c=f},
bp_:function bp_(d,e){this.a=d
this.b=e},
bp3:function bp3(d){this.a=d},
bpa:function bpa(){},
bpb:function bpb(d,e){this.a=d
this.b=e},
bpc:function bpc(d,e){this.a=d
this.b=e},
Ar:function Ar(d){this.a=d},
X9:function X9(d){this.d=d
this.c=this.a=null},
boO:function boO(){},
boV:function boV(d){this.a=d},
boW:function boW(){},
boU:function boU(d,e){this.a=d
this.b=e},
boT:function boT(d,e,f){this.a=d
this.b=e
this.c=f},
boS:function boS(d,e,f){this.a=d
this.b=e
this.c=f},
boR:function boR(d){this.a=d},
boP:function boP(d){this.a=d},
boQ:function boQ(d){this.a=d},
bwx:function bwx(d){this.a=d},
bww:function bww(d){this.a=d},
bwr:function bwr(d,e){this.a=d
this.b=e},
bwt:function bwt(){},
bws:function bws(){},
bwu:function bwu(d,e){this.a=d
this.b=e},
bwv:function bwv(d,e){this.a=d
this.b=e},
ac8:function ac8(d){this.a=d},
aVc:function aVc(d){this.a=d},
bwL:function bwL(){},
bwM:function bwM(){},
Au:function Au(d,e,f){this.c=d
this.d=e
this.a=f},
Xc:function Xc(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.r=null},
bpR:function bpR(d){this.a=d},
bpS:function bpS(d){this.a=d},
bpT:function bpT(d,e){this.a=d
this.b=e},
bpU:function bpU(d){this.a=d},
bpW:function bpW(d){this.a=d},
bpV:function bpV(d){this.a=d},
bwK:function bwK(){}},D,Q,I,E,F
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
B.ac9.prototype={
pk(){var x=this,w=x.a
if(w!=null)return A.dN(w,y.m)
w=x.b
return w==null?x.b=new B.aVd(x).$0():w},
rj(d,e){return this.azp(d,e,e)},
azp(d,e,f){var x=0,w=A.o(f),v,u=2,t=[],s,r,q,p
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
r=B.c_0(s)
throw A.p(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$rj,w)},
mW(d,e){var x=A.hx(d[e])
if(x==null)x=null
return x===!0},
H9(){var x=0,w=A.o(y.X),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$H9=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
h=A
g=A
x=7
return A.d(s.pk(),$async$H9)
case 7:r=h.cp(g.cf(e,"support",null,null,null,null))
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
v=new B.Ri(q,p,o,n,m,l)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=D.VO
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$H9,w)},
AQ(){var x=0,w=A.o(y.M),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$AQ=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=A
l=A
k=A
x=8
return A.d(s.pk(),$async$AQ)
case 8:x=7
return A.d(m.e2(l.cp(k.cf(e,"storage",null,null,null,null)),y.A),$async$AQ)
case 7:r=e
if(r==null){v=null
x=1
break}q=C.d.ar(A.dl(r.quota))
p=C.d.ar(A.dl(r.usage))
v=new A.aln(q,p)
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
return A.n($async$AQ,w)},
b0k(){var x=y.K
A.LX(this.pk().bM(new B.aVg(),x),x)},
pj(d,e){var x=A.jA(d[e])
x=x==null?null:C.d.ar(x)
return x==null?0:x},
aYR(d,e,f){return this.rj(new B.aVf(this,d,e,f),y.C)},
gaa_(){var x,w
try{x=A.jB(b.G.sessionStorage)
return x}catch(w){return null}},
gagI(){var x=A.hx(b.G.mogtama3yTutorIsolated)
if(x==null)x=null
return x===!0},
a0o(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
try{m=b.G
l=A.hx(m.crossOriginIsolated)
if(l==null)l=f
if(l===!0)return!1
if(this.gagI())return!1
l=A.hx(m.isSecureContext)
if(l==null)l=f
if(l!==!0)return!1
x=A.cp(m.navigator)
if(!("serviceWorker" in x))return!1
w=A.a9(x.userAgent)
l=A.jA(x.maxTouchPoints)
k=l==null?f:l
v=k==null?0:k
l=A.Q(x.platform)
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
l=this.gaa_()
l=l==null?f:A.Q(A.cf(l,"getItem","mt.tutor.iso",f,f,f))
if(l==null)l=f
p=A.f0(l==null?"":l,f)
if(p!=null&&q-p<3e4)return!1
o=A.jB(m.localStorage)
m=o
m=m==null?f:A.Q(A.cf(m,"getItem","mt.tutor.noiso",f,f,f))
if(m==null)m=f
n=A.f0(m==null?"":m,f)
if(n!=null&&q-n<2592e5)return!1
return!0}catch(g){return!1}},
afn(){var x,w,v,u,t,s,r=null
try{x=this.gaa_()
if(x!=null)A.cf(x,"setItem","mt.tutor.iso",""+Date.now(),r,r)}catch(w){}x=b.G
v=A.cp(x.location)
u=A.a9(v.hash)
t=A.a9(v.search)
s=A.bT(A.a9(A.cp(x.document).baseURI),0,r).W("tutor/").j(0)
x=u.length===0?"#/masjid/tools/tutor":u
A.cf(v,"replace",s+t+x,r,r,r)},
aYA(){var x,w=null,v=b.G,u=A.cp(v.history),t=A.jA(u.length),s=t==null?w:t
if((s==null?0:s)>1)A.cf(u,"back",w,w,w,w)
else{x=A.a9(A.cp(v.document).baseURI)
A.cf(A.cp(v.location),"replace",A.bT(x,0,w).W("./").j(0)+"#/",w,w,w)}},
a0A(d,e,f,g,h){return this.rj(new B.aVk(this,e,d,f,h,g),y.H)},
a0D(){return this.rj(new B.aVl(this),y.D)},
VQ(){var x=null,w=this.a
if(w!=null)A.cf(w,"cancelRecording",x,x,x,x)},
abd(d){var x,w,v=this,u=A.Q(d.text)
if(u==null)u=null
if(u==null)u=""
x=v.pj(d,"ms")
w=A.jA(d.seconds)
if(w==null)w=null
if(w==null)w=0
return new B.Gq(u,x,w,v.pj(d,"frames"),v.pj(d,"tokens"),v.mW(d,"retried"),v.pj(d,"encMs"),v.pj(d,"decMs"),v.pj(d,"featMs"))},
a82(d){var x={}
x.words=d
return x},
ajy(d,e){return this.rj(new B.aVn(this,d,e),y._)},
b2u(d,e){return this.rj(new B.aVm(this,d,e),y._)},
Fr(d,e){return this.b0p(d,e)},
b0p(d,e){var x=0,w=A.o(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Fr=A.k(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=p==null?7:9
break
case 7:x=10
return A.d(s.pk(),$async$Fr)
case 10:x=8
break
case 9:g=p
case 8:r=g
o=A.ae(d).i("aj<1,f>")
o=A.a0(new A.aj(d,new B.aVh(),o),o.i("aG.E"))
x=11
return A.d(A.e2(A.cp(A.cf(r,"play",o,e,null,null)),y.y),$async$Fr)
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
return A.n($async$Fr,w)},
GQ(){var x=null,w=this.a
if(w!=null)A.cf(w,"stopPlayback",x,x,x,x)},
E8(){var x,w,v,u=null
try{w=this.a
x=w==null?u:A.a9(A.cf(w,"diag",u,u,u,u))
w=x
if(w==null)w=u
if(w==null)w="{}"
return w}catch(v){return"{}"}},
b1F(){var x,w,v=null
try{x=this.a
if(x!=null)A.cf(x,"resetDevice",v,v,v,v)}catch(w){}},
Z6(d){var x=this.a
if(x!=null)A.cf(x,"prefetch",d,null,null,null)}}
B.Ri.prototype={}
B.Go.prototype={
glH(){var x=this.f,w=x>0?"CPU \xd7"+x:""
x=this.a
if(x==="webgpu")return"WebGPU"
if(C.c.m(x,"webgpu"))return"WebGPU + "+w
return w.length===0?x:w}}
B.Gq.prototype={
gLV(){var x=this,w=C.d.aA(x.d/100,0),v=x.f?" (retried on 30 s)":""
return"window "+w+" s, "+x.e+" tokens"+v+", mel "+x.x+" ms, encoder "+x.r+" ms, decoder "+x.w+" ms"}}
B.Gp.prototype={}
B.kN.prototype={
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
B.mD.prototype={
N(){return"WordStatus."+this.b}}
B.OA.prototype={}
B.m1.prototype={
j(d){var x,w=this.b
if(w==null)w=""
x=this.c
if(x==null)x=""
return this.d.b+":"+w+"->"+x}}
B.F7.prototype={
gGO(){var x,w=this,v=w.d
if(v===$){x=new B.aMA(w).$0()
w.d!==$&&A.aE()
w.d=x
v=x}return v},
gEp(){var x,w,v,u,t,s=A.a([],y.s)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,A.B)(x),++v){u=x[v]
if(u.d===D.Wc&&u.c!=null){t=u.c
t.toString
s.push(t)}}return s},
gaZH(){return J.ol(this.gGO(),new B.aMz()).gL(0)},
gqs(){var x=this.a
return x.length!==0&&this.gaZH()===x.length&&this.gEp().length===0}}
B.C3.prototype={
N(){return"AyahStatus."+this.b}}
B.q7.prototype={}
B.aca.prototype={
YG(d,e){var x=this.a.h(0,d*1000+e)
return x==null?$.pX():x},
aIY(d){var x=this,w=B.aVp(d),v=x.c
if(v===w)return
v=v!=null&&v===B.bIE(w)?x.d+1:1
x.d=v
if(v>x.e)x.e=v
x.c=w},
aeA(){var x=Date.now(),w=B.aVp(new A.b1(x,0,!1))
x=this.c
return x===w||x===B.bIE(w)?this.d:0},
aiD(d,e,f,g){var x=this,w=new A.b1(Date.now(),0,!1),v=x.YG(d,e),u=g?C.e.cA(v.b+1,0,100):0,t=g&&u>=f?D.e0:D.m_,s=new B.q7(t,u,w.hA()),r=d*1000+e
x.a.n(0,r,s)
x.b.D(0,r)
x.aIY(w)
return s},
Yx(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.c7[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pX():s).a===D.e0)++u}return u},
aYy(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.c7[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.pX():s).a===D.m_)++u}return u},
gahM(){var x=this.a,w=A.w(x).i("c7<2>")
return new A.aH(new A.c7(x,w),new B.aVq(),w.i("aH<M.E>")).gL(0)},
gamD(){var x=this.a,w=A.w(x).i("bh<1>")
w=A.nn(new A.bh(x,w),new B.aVr(),w.i("M.E"),y.S)
w=A.es(w,A.w(w).i("M.E"))
x=A.a0(w,A.w(w).c)
C.b.lc(x)
return x},
cV(){var x,w,v,u,t,s=this,r=y.N,q=A.x(r,y.L)
for(x=s.a,x=new A.dP(x,A.w(x).i("dP<1,2>")).ga0(0),w=y.t;x.u();){v=x.d
u=v.a
t=v.b
q.n(0,""+u,A.a([t.a.a,t.b,t.c.a],w))}x=s.b
x=A.a0(x,A.w(x).c)
return A.K(["v",1,"rows",q,"dirty",x,"last",s.c,"streak",s.d,"best",s.e],r,y.z)},
aUz(){var x,w,v,u,t,s,r,q,p,o=A.a([],y.Z)
for(x=this.b,x=A.bzK(x,300,A.w(x).c),x=new A.G8(J.aA(x.a),x.b,A.w(x).i("G8<1>")),w=y.N,v=y.z,u=this.a;x.u();){t=x.gK()
s=C.e.ba(t,1000)
t=C.e.ah(t,1000)
r=s*1000+t
q=u.h(0,r)
q=(q==null?$.pX():q).a===D.e0?"memorized":"learning"
p=u.h(0,r)
if(p==null)p=$.pX()
r=u.h(0,r)
o.push(A.K(["surah",s,"ayah",t,"status",q,"perfect_count",p.b,"updated_at",(r==null?$.pX():r).c.iW()],w,v))}return o},
aZ8(d){var x,w,v,u,t,s,r
for(x=d.length,w=this.a,v=this.b,u=0;u<d.length;d.length===x||(0,A.B)(d),++u){t=d[u]
s=A.eu(t.h(0,"surah"))*1000+A.eu(t.h(0,"ayah"))
r=w.h(0,C.e.ba(s,1000)*1000+C.e.ah(s,1000))
if((r==null?$.pX():r).c.iW()===t.h(0,"updated_at"))v.I(0,s)}},
aZg(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(x=J.aA(d),w=this.b,v=this.a,u=y.f,t=!1;x.u();){s=x.gK()
if(!u.b(s))continue
r=A.bm(s.h(0,"surah"))
q=r==null?null:C.d.bU(r)
r=A.bm(s.h(0,"ayah"))
p=r==null?null:C.d.bU(r)
o=A.fF(A.h(s.h(0,"updated_at")))
r=!0
if(q!=null)if(p!=null)if(o!=null)r=!(q>=1&&q<=114&&p>=1&&p<=I.c7[q-1].a[1])
if(r)continue
n=B.c4h(s.h(0,"status"))
if(n===D.lZ)continue
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
v.n(0,r,new B.q7(n,C.e.cA(l==null?0:l,0,100),o.hA()))
w.I(0,r)
t=!0}return t}}
B.Rg.prototype={
DY(d,e,f,g,h){var x=this,w=g==null?x.a:g,v=h==null?x.b:h,u=d==null?x.c:d,t=e==null?x.d:e
return new B.Rg(w,v,u,t,f==null?x.e:f)},
aT1(d){var x=null
return this.DY(x,x,d,x,x)},
aea(d){var x=null
return this.DY(x,d,x,x,x)},
aT5(d){var x=null
return this.DY(x,x,x,x,d)},
aSw(d){var x=null
return this.DY(d,x,x,x,x)},
aT2(d){var x=null
return this.DY(x,x,x,d,x)},
cV(){var x=this
return A.K(["n",x.a,"r",x.b,"auto",x.c,"hide",x.d,"in",x.e],y.N,y.z)}}
B.Eb.prototype={
N(){return"ModelState."+this.b}}
B.Rh.prototype={
Y1(){var x=this.Q
return x==null?this.Q=new B.aVs(this).$0():x},
oU(d){return this.al9(d)},
al9(d){var x=0,w=A.o(y.H),v=this
var $async$oU=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:v.b=d
v.X()
x=2
return A.d(A.ib("mt.tutor.settings",C.a1.ht(d.cV(),null)),$async$oU)
case 2:return A.m(null,w)}})
return A.n($async$oU,w)},
x0(){var x=0,w=A.o(y.H),v=this,u
var $async$x0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:v.X()
x=2
return A.d(A.ib("mt.tutor.progress",C.a1.ht(v.c.cV(),null)),$async$x0)
case 2:u=v.as
if(u!=null)u.aF()
v.as=A.cE(C.A,v.garv())
return A.m(null,w)}})
return A.n($async$x0,w)},
Gz(d,e,f){return this.alP(d,e,f)},
alP(d,e,f){var x=0,w=A.o(y.H),v=this
var $async$Gz=A.k(function(g,h){if(g===1)return A.l(h,w)
for(;;)switch(x){case 0:v.z=new A.bO(d,e,f)
x=2
return A.d(A.ib("mt.tutor.last",C.a1.ht(A.K(["s",d,"f",e,"t",f],y.N,y.S),null)),$async$Gz)
case 2:return A.m(null,w)}})
return A.n($async$Gz,w)},
zG(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$zG=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=s.f
if(n===D.O9||n===D.hP){x=1
break}s.f=D.O9
s.y=null
s.X()
u=4
n=A.k6().gep().h(0,"tutor_device")
if(n==null)n="auto"
p=A.k6().gep().h(0,"tutor_threads")
p=A.f0(p==null?"":p,null)
if(p==null)p=0
x=7
return A.d(s.a.aYR(new B.aVt(s),n,p),$async$zG)
case 7:s.x=e
s.f=D.hP
n=A.k6().gep().h(0,"debug")
if(n==="1"){n=s.x
n.toString
r=n
A.tq().$1("[tutor] model ready: "+r.a+" "+r.b+" threads="+r.f+" isolated="+r.r+" in "+r.c+" ms (warm-up "+r.w+" ms, cached before: "+r.d+")")}u=2
x=6
break
case 4:u=3
m=t.pop()
n=A.Y(m)
if(n instanceof B.kN){q=n
s.f=D.axP
s.y=q
n=A.k6().gep().h(0,"debug")
if(n==="1")A.tq().$1("[tutor] model failed: "+A.h(q))}else throw m
x=6
break
case 3:x=2
break
case 6:s.X()
case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$zG,w)},
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
n=r.c.aZg(o)
m=0,k=y.N,i=y.z
case 8:if(!(m<25)){x=10
break}l=r.c.aUz()
if(J.bf(l)===0){x=10
break}h=p
g=A.K(["p_rows",l],k,i)
f=h.CW
f===$&&A.b()
f.b.E(0,A.m8(h.x,k,k))
x=11
return A.d(f.b21("quran_tutor_save",!1,g,i),$async$ut)
case 11:r.c.aZ8(l)
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
FG(d){return this.b1H(d)},
b1H(d){var x=0,w=A.o(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$FG=A.k(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:p=B.bzW(t.c.cV()).cV()
y.f.a(p.h(0,"rows")).dJ(0,new B.aVu(d))
t.c=B.bzW(p)
x=2
return A.d(t.x0(),$async$FG)
case 2:v=4
s=$.ac().b
s===$&&A.b()
r=s.gc2().e.a
x=(r==null?null:r.r)!=null?7:8
break
case 7:r=y.z
x=9
return A.d(s.bi("quran_tutor_reset",A.K(["p_surah",d],y.N,r),r),$async$FG)
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
return A.n($async$FG,w)}}
B.vb.prototype={
V(){var x=$.Jg()
return new B.Vb(x,new A.b7(C.U,$.a7()))}}
B.Vb.prototype={
aa(){var x,w,v=this
v.ap()
x=v.d
x.a5(v.gn5())
w=y.a
x.Y1().bM(new B.bhm(v),w)
H.aL3().bM(new B.bhn(v),w).hr(new B.bho())
A.LX(H.bzm(),y.y)},
vd(){if(this.c!=null)this.t(new B.bh8())},
l(){var x,w=this
w.d.R(w.gn5())
x=w.e
x.p$=$.a7()
x.U$=0
w.aq()},
Jh(){var x=0,w=A.o(y.H),v,u=this,t,s
var $async$Jh=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:s=u.d
x=3
return A.d(s.oU(s.b.aT1(!0)),$async$Jh)
case 3:t=s.a
t.b0k()
if(t.a0o()){t.afn()
x=1
break}s.zG()
case 1:return A.m(v,w)}})
return A.n($async$Jh,w)},
ve(d,e,f){return this.aHn(d,e,f)},
aOn(d){return this.ve(d,null,null)},
aHn(d,e,f){var x=0,w=A.o(y.H),v,u=this,t,s,r
var $async$ve=A.k(function(g,h){if(g===1)return A.l(h,w)
for(;;)switch(x){case 0:if(u.w==null){u.c.S(y.q).f.b3(A.bz(null,null,null,null,null,C.k,null,A.j("\u0644\u062d\u0638\u0629\u2026 \u0628\u0646\u062c\u0647\u0651\u0632 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641",null,null,null,null,null,null,null,null,null),null,C.A,null,null,null,null,null,null,null,null,null,null))
x=1
break}x=e!=null&&f!=null?3:5
break
case 3:t=new A.R(e,f)
x=4
break
case 5:s=u.c
s.toString
x=6
return A.d(B.c7Y(s,d),$async$ve)
case 6:t=h
case 4:if(t==null||u.c==null){x=1
break}x=7
return A.d(u.d.Gz(d,t.a,t.b),$async$ve)
case 7:s=u.c
if(s==null){x=1
break}r=y.z
x=8
return A.d(A.al(s,!1).cU(A.cU(new B.bhe(u,d,t),null,r),r),$async$ve)
case 8:if(u.c!=null)u.t(new B.bhf())
case 1:return A.m(v,w)}})
return A.n($async$ve,w)},
A(d){var x=null,w=this.d,v=w.b,u=A.a([],y.p),t=w.a
if(t.gagI()&&!A.al(d,!1).VN())u.push(A.cz(x,x,x,x,D.ae2,x,x,t.gaYz(),x,x,x,"\u0631\u062c\u0648\u0639 \u0644\u0645\u0633\u062c\u062f\u064a",x))
t=v.e
if(t)u.push(A.cz(x,x,x,x,D.af0,x,x,new B.bhi(d),x,x,x,"\u062a\u0642\u062f\u0651\u0645\u064a",x))
u.push(A.cz(x,x,x,x,D.C3,x,x,new B.bhj(d),x,x,x,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",x))
if(!w.e)w=D.anX
else w=t?this.aDI():this.aE8()
return M.vW(u,w,"\u0627\u0644\u0645\u062d\u0641\u0651\u0638")},
aE8(){var x,w,v,u,t,s,r,q,p=null,o=this.d.d
if(o==null)o=D.VO
x=this.r
w=x==null?p:x.a-x.b
if(!(o.a&&o.b))v="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u062f\u0639\u0645 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638. \u062c\u0631\u0651\u0628 \u0623\u062d\u062f\u062b \u0646\u0633\u062e\u0629 \u0645\u0646 Chrome (\u0623\u0646\u062f\u0631\u0648\u064a\u062f) \u0623\u0648 Safari (\u0622\u064a\u0641\u0648\u0646)."
else if(!o.f)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0641\u062a\u062d \u0639\u0644\u0649 https \u0639\u0634\u0627\u0646 \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0627\u064a\u0643."
else v=!o.c||!o.d?"\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u0633\u0645\u062d \u0628\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0646 \u0627\u0644\u0645\u0627\u064a\u0643.":p
x=y.p
u=A.a([D.aJr,C.ao],x)
for(t=0;t<4;++t){s=D.apu[t]
u.push(new A.a_(C.bC,A.ak(A.a([A.c6(s.a,C.a6,p,18),C.as,new A.dD(1,C.aU,A.j(s.b,p,p,p,p,p,G.UO,p,p,p),p)],x),C.z,C.f,C.h,0,p,p),p))}u=A.ad(u,C.z,C.f,C.h)
s=A.a([D.b_T,C.T,A.j("\u0647\u0646\u062d\u0645\u0651\u0644 \u0645\u0644\u0641 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 (\u062d\u0648\u0627\u0644\u064a "+E.aZ(105)+" \u0645\u064a\u062c\u0627) \u0648\u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0648\u0628\u0639\u062f \u0643\u062f\u0647 \u0628\u064a\u0641\u062a\u062d \u0645\u0646 \u063a\u064a\u0631 \u062a\u062d\u0645\u064a\u0644. \u064a\u064f\u0641\u0636\u0651\u0644 \u062a\u0643\u0648\u0646 \u0639\u0644\u0649 Wi-Fi.",p,p,p,p,p,F.ak,p,p,p)],x)
if(w!=null){r=w<3e8
q=r?"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0645\u062a\u0635\u0641\u062d \u0642\u0644\u064a\u0644\u0629 ("+E.aZ(C.d.ar(w/1e6))+" \u0645\u064a\u062c\u0627) \u2014 \u0641\u0636\u0651\u064a \u0634\u0648\u064a\u0629 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0623\u0648\u0644.":"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629: \u0643\u0641\u0627\u064a\u0629 \u2713"
C.b.E(s,A.a([C.T,A.j(q,p,p,p,p,p,A.cw(p,p,r?D.d0:C.cr,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x))}r=o.w
if(r>0&&r<3)C.b.E(s,A.a([C.T,D.b_q],x))
x=A.a([new E.cW(u,C.af,C.aA,p,!0,p),new E.cW(A.ad(s,C.z,C.f,C.h),C.af,C.aA,p,!1,p),D.b6H,C.T],x)
if(v!=null)x.push(new E.cW(A.j(v,p,p,p,p,p,D.aSv,p,p,p),C.af,C.aA,p,!1,p))
else x.push(A.jM(D.adn,D.aVN,this.gaHx(),A.iH(C.p,C.a5,D.aLZ,p,p,p,p)))
x.push(C.aJ)
x.push(D.VN)
return x},
aDI(){var x,w,v=this,u=null,t=v.d,s=t.c,r=v.e,q=C.c.al(r.a.a),p=q.length===0,o=p?C.uk:H.bN8(q),n=t.z,m=A.aP(v.aaA(C.fx,E.aZ(s.gahM())+" \u0622\u064a\u0629","\u062d\u0641\u0638\u062a\u0647\u0627"),1),l=E.aZ(s.aeA()),k=s.c,j=Date.now()
k=k===B.aVp(new A.b1(j,0,!1))?"\u0648\u0631\u0627 \u0628\u0639\u0636 \u2014 \u0643\u0645\u0651\u0644!":"\u0633\u0645\u0651\u0639 \u0627\u0644\u0646\u0647\u0627\u0631\u062f\u0647 \u0639\u0634\u0627\u0646 \u062a\u0643\u0645\u0651\u0644"
j=y.p
k=A.a([new B.Ec(t,!1,u),A.ak(A.a([m,C.as,A.aP(v.aaA(C.Bp,l+" \u064a\u0648\u0645",k),1)],j),C.j,C.f,C.h,0,u,u),C.R],j)
if(n!=null){t=H.jD(n.a)
m=n.b
l=n.c
m=m===l?"\u0622\u064a\u0629 "+E.aZ(m):"\u0627\u0644\u0622\u064a\u0627\u062a "+E.aZ(m)+"\u2013"+E.aZ(l)
k.push(new E.cW(A.ak(A.a([D.aex,C.aV,A.aP(A.ad(A.a([D.aUb,A.j(t+" \u2014 "+m,u,u,u,u,u,F.b_,u,u,u)],j),C.z,C.f,C.h),1),P.kN],j),C.j,C.f,C.h,0,u,u),C.af,C.aA,new B.bhb(v,n),!0,u))}t=C.i.bo(0.08)
k.push(A.bA(u,C.E,!1,u,!0,C.k,u,A.bF(),r,u,u,u,u,u,2,A.fn(u,new A.eg(4,A.aa(14),C.v),u,u,u,u,u,u,!0,u,u,u,u,u,u,t,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,C.pr,"\u0639\u0627\u064a\u0632 \u062a\u062d\u0641\u0638 \u0633\u0648\u0631\u0629 \u0625\u064a\u0647\u061f",u,u,u,u,u,u,u,u,u,!0,!0,!1,u,C.nn,u,u,u,u,u,u,u,u,u,u,u,u),C.t,!0,u,!0,u,!1,u,C.H,u,u,u,u,u,u,u,u,u,1,u,u,!1,"\u2022",u,new B.bhc(v),u,u,u,!1,u,u,!1,u,!0,u,C.D,u,u,u,u,u,u,u,u,u,u,u,C.cW,!0,C.x,u,C.K,u,u,u,u))
k.push(C.R)
if(!p){t=A.a([],j)
if(o.length===0)t.push(D.aYf)
for(r=o.length,x=0;x<o.length;o.length===r||(0,A.B)(o),++x)t.push(v.Kg(o[x]))
C.b.E(k,t)}else{t=A.a([D.aA7,D.aAB,v.Kg(1)],j)
for(w=114;w>=78;--w)t.push(v.Kg(w))
t.push(C.T)
r=v.f
p=A.c6(r?C.tL:C.kH,C.a6,u,u)
t.push(A.ht(p,A.j(r?"\u0627\u062e\u0641\u064a \u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631":"\u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631 (\u0627\u0644\u0628\u0642\u0631\u0629 \u0644\u062d\u062f \u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a)",u,u,u,u,u,C.ek,u,u,u),new B.bhd(v),u))
if(v.f)for(w=2;w<=77;++w)t.push(v.Kg(w))
C.b.E(k,t)}k.push(C.ao)
k.push(D.xj)
return k},
aaA(d,e,f){var x=null,w=y.p
return new E.cW(A.ak(A.a([A.c6(d,C.p,x,x),C.as,A.aP(A.ad(A.a([A.j(e,x,x,x,x,x,F.b_,x,x,x),A.j(f,x,1,C.ag,x,x,D.aRi,x,x,x)],w),C.z,C.f,C.h),1)],w),C.j,C.f,C.h,0,x,x),C.af,C.J,x,!1,x)},
Kg(d){var x,w=null,v=this.d.c,u=I.c7[d-1].a[1],t=v.Yx(d),s=t/u,r=y.p,q=A.bk(A.h6(C.W,A.a([A.bxN(C.dI,G.c4,w,w,w,w,w,3,s,w),A.j(E.aZ(d),w,w,w,w,w,R.Vd,w,w,w)],r),C.k,C.cb,w),36,36),p=A.j(H.jD(d),w,w,w,w,w,D.aOb,w,w,w)
if(t===0)x=E.aZ(u)+" \u0622\u064a\u0629"
else x=t===u?"\u0645\u062d\u0641\u0648\u0638\u0629 \u0643\u0644\u0647\u0627 \u2713":"\u062d\u0641\u0638\u062a "+E.aZ(t)+" \u0645\u0646 "+E.aZ(u)
r=A.a([q,C.fT,A.aP(A.ad(A.a([p,A.j(x,w,w,w,w,w,A.cw(w,w,t===u?G.c4:C.cr,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),C.z,C.f,C.h),1)],r)
if(s>0&&s<1)r.push(A.j(E.aZ(C.d.ar(s*100))+"\u066a",w,w,w,w,w,D.V_,w,w,w))
r.push(D.adq)
return new E.cW(A.ak(r,C.j,C.f,C.h,0,w,w),L.A9,C.ew,new B.bhg(this,d),!1,w)}}
B.Ec.prototype={
A(d){var x,w,v,u,t,s,r=null,q=this.c
switch(q.f.a){case 2:if(this.d)return C.aE
return D.azZ
case 3:x=q.y
x=A.a([A.j(x==null?"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0634\u063a\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638":B.J9(x),r,r,r,r,r,D.wE,r,r,r)],y.p)
w=q.y
if(w!=null)x.push(new B.Au(w,"model load",r))
x.push(C.T)
x.push(A.bEV(C.lE,r,q.gaYQ()))
return new E.cW(A.ad(x,C.z,C.f,C.h),C.af,C.aA,r,!1,r)
case 0:case 1:v=q.w
u=q.r
q=v>0
t=q?C.d.cA(u/v,0,1):r
s=q&&u<v
q=A.j(s?"\u0628\u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026 "+E.aZ(C.d.ar(u/1e6))+" \u0645\u0646 "+E.aZ(C.d.ar(v/1e6))+" \u0645\u064a\u062c\u0627":"\u0628\u0646\u062c\u0647\u0651\u0632 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026",r,r,r,r,r,C.wH,r,r,r)
x=A.aa(8)
w=y.p
x=A.a([q,C.S,A.n1(x,A.DO(C.dI,C.p,7,s?t:r),C.bl)],w)
if(!this.d)C.b.E(x,A.a([C.T,D.aWg],w))
return new E.cW(A.ad(x,C.z,C.f,C.h),C.af,C.aA,r,!1,r)}}}
B.T_.prototype={
A(d){var x=null,w=D.d0.bo(0.1),v=A.aa(14),u=A.cR(D.d0.bo(0.4),1)
return A.au(x,A.ak(A.a([D.aek,C.as,A.aP(A.j(this.c?"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0627\u0644\u062a\u062c\u0648\u064a\u062f.":"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0623\u062d\u0643\u0627\u0645 \u0627\u0644\u062a\u062c\u0648\u064a\u062f. \u0627\u0642\u0631\u0627 \u0639\u0644\u0649 \u0634\u064a\u062e \u0623\u0648 \u0645\u062d\u0641\u0651\u0638 \u0641\u064a \u0645\u0633\u062c\u062f\u0643 \u0643\u0645\u0627\u0646.",x,x,x,x,x,D.V5,x,x,x),1)],y.p),C.z,C.f,C.h,0,x,x),C.m,x,x,new A.ap(w,x,u,v,x,x,C.r),x,x,C.aA,C.aT,x,x,x)}}
B.Bc.prototype={
N(){return"_Phase."+this.b}}
B.At.prototype={
V(){return new B.Xb($.Jg(),D.jX)}}
B.Xb.prototype={
gi7(){var x=this.e
return x===$?this.e=this.a.d:x},
gyn(){var x,w=this.a,v=w.f
w=w.c
x=this.gi7()
return H.J6(w,x,v.vm(w,x)).b},
aa(){var x,w=this
w.ap()
x=w.d
x.a5(w.gn5())
x.Y1()
x.a.Z6(B.arm(w.a.c,w.gi7()))},
vd(){if(this.c!=null)this.t(new B.bpd())},
l(){var x,w=this,v=w.d
v.R(w.gn5())
x=w.Q
if(x!=null)x.aF()
v=v.a
v.GQ()
v.VQ()
w.aq()},
Se(d){var x,w,v=this
if(v.f===D.pX)v.d.a.VQ()
x=v.d.a
x.GQ()
w=v.Q
if(w!=null)w.aF()
v.t(new B.bpt(v,d))
x.Z6(B.arm(v.a.c,d))
w=v.a
if(d<w.e)x.Z6(B.arm(w.c,d+1))},
Ku(d){return this.aEJ(d)},
aEJ(d){var x=0,w=A.o(y.H),v,u=this,t,s,r,q,p
var $async$Ku=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:if(u.f===D.pW){u.d.a.GQ()
u.t(new B.bpx(u))
x=1
break}t=u.r!=null?D.ha:D.jX
u.t(new B.bpy(u))
s=u.d
r=A.a([B.arm(u.a.c,u.gi7())],y.s)
q=d==null?s.b.b:d
x=3
return A.d(s.a.Fr(r,q),$async$Ku)
case 3:p=f
if(u.c==null||u.f!==D.pW){x=1
break}u.t(new B.bpz(u,t,p))
case 1:return A.m(v,w)}})
return A.n($async$Ku,w)},
Jy(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Jy=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.d
if(l.f!==D.hP){x=1
break}p=l.a
p.GQ()
r=B.BK(s.gyn()).length
s.t(new B.bpB(s))
o=s.Q
if(o!=null)o.aF()
s.Q=A.kM(C.fv,new B.bpC(s))
u=4
o=B.bBF(r)
n=A.d5(0,0,0,350*r,0,0)
x=7
return A.d(p.a0A(l.b.c,o,n,new B.bpD(s),new B.bpE(s)),$async$Jy)
case 7:u=2
x=6
break
case 4:u=3
k=t.pop()
l=A.Y(k)
if(l instanceof B.kN){q=l
l=s.Q
if(l!=null)l.aF()
if(s.c!=null)s.t(new B.bpF(s,q))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$Jy,w)},
yj(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$yj=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.f!==D.pX){x=1
break}m=s.Q
if(m!=null)m.aF()
s.t(new B.bpH(s))
s.Q=A.kM(C.hq,new B.bpI(s))
l=new A.zY()
$.BN()
l.mS()
r=l
u=4
m=s.d.a
x=7
return A.d(m.a0D(),$async$yj)
case 7:q=e
if(q.b<0.8){s.aOm("\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0642\u0635\u064a\u0631 \u0623\u0648\u064a \u2014 \u062f\u0648\u0633 \xab\u0633\u0645\u0651\u0639\xbb \u0648\u0627\u0642\u0631\u0627 \u0627\u0644\u0622\u064a\u0629 \u0643\u0644\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb.")
x=1
break}x=8
return A.d(m.ajy(q,B.BK(s.gyn()).length),$async$yj)
case 8:p=e
s.ch=A.d5(0,0,r.gX7(),0,0,0)
k=A.k6().gep().h(0,"debug")
if(k==="1"){o=B.bNq(m.E8())
A.tq().$1("[tutor] "+s.a.c+":"+s.gi7()+" audio="+C.d.aA(q.b,1)+"s infer="+p.b+"ms total="+r.gz3()+"ms "+p.gLV()+" text="+p.a)
A.tq().$1("[tutor] stages: "+A.h(o))
s.ax="\u062a\u0633\u062c\u064a\u0644\u0643 "+C.d.aA(p.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(p.b/1000,2)+" \u062b\n"+p.gLV()+"\n"+A.h(o)+"\n"+p.a}s.a5P(p.a)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.Y(i)
if(m instanceof B.kN){n=m
m=A.k6().gep().h(0,"debug")
if(m==="1")A.tq().$1("[tutor] check failed: "+A.h(n)+"\n"+s.d.a.E8())
s.UH(B.J9(n),n)}else throw i
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$yj,w)},
UH(d,e){var x=this,w=x.Q
if(w!=null)w.aF()
if(x.c==null)return
x.t(new B.bps(x,d,e))},
aOm(d){return this.UH(d,null)},
a5P(d){var x,w,v,u,t,s=this,r={},q=s.Q
if(q!=null)q.aF()
if(s.c==null)return
x=B.bLx(s.gyn(),d)
r.a=null
if(C.c.al(x.c).length!==0){q=s.d
w=q.c
v=s.a.c
u=s.gi7()
t=x.gqs()
r.a=w.aiD(v,u,q.b.a,t)
q.x0()}s.t(new B.bpu(r,s,x))},
HP(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$HP=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:g=s.d
if(g.f!==D.hP){x=1
break}s.t(new B.bpl(s))
l=s.Q
if(l!=null)l.aF()
s.Q=A.kM(C.hq,new B.bpm(s))
k=new A.zY()
$.BN()
k.mS()
r=k
u=4
l=g.a
x=7
return A.d(l.b2u(B.arm(s.a.c,s.gi7()),B.BK(s.gyn()).length),$async$HP)
case 7:q=e
p=B.bNq(l.E8())
o="\u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a "+C.d.aA(q.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.d.aA(q.b/1000,2)+" \u062b (\u0627\u0644\u0643\u0644 "+C.d.aA(r.gz3()/1000,2)+" \u062b)\n"+q.gLV()+"\n"+A.h(p)+"\n"+q.a
A.tq().$1("[tutor-debug] "+s.a.c+":"+s.gi7()+" audio="+C.d.aA(q.c,1)+"s infer="+q.b+"ms total="+r.gz3()+"ms "+q.gLV()+" text="+q.a)
A.tq().$1("[tutor-debug] stages: "+A.h(p))
s.ch=A.d5(0,0,r.gX7(),0,0,0)
s.a5P(q.a)
n=s.r
if(n!=null){l=n.gqs()
j=n.b
i=A.ae(j).i("aH<1>")
j=A.a0(new A.aH(j,new B.bpn(),i),i.i("M.E"))
A.tq().$1("[tutor-debug] perfect="+l+" ops="+A.h(j))}s.t(new B.bpo(s,o))
u=2
x=6
break
case 4:u=3
f=t.pop()
l=A.Y(f)
if(l instanceof B.kN){m=l
A.tq().$1("[tutor-debug] failed: "+A.h(m)+"\n"+g.a.E8())
s.UH(B.J9(m),m)}else throw f
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$HP,w)},
gTA(){var x,w,v
for(x=this.a.d,w=this.d;v=this.a,x<=v.e;++x){v=w.c.a.h(0,v.c*1000+x)
if((v==null?$.pX():v).a!==D.e0)return!1}return!0},
A(d){var x,w=this,v=null,u=w.d,t=u.c.YG(w.a.c,w.gi7()),s=u.b,r=s.d&&!w.x&&w.f!==D.ha,q=H.jD(w.a.c),p=y.p,o=A.a([A.cz(v,v,v,v,D.C3,v,v,new B.bpN(d),v,v,v,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",v)],p),n=w.awW(),m=A.j("\u0622\u064a\u0629 "+E.aZ(w.gi7()),v,v,v,v,v,C.jK,v,v,v),l=E.aZ(w.gi7()-w.a.d+1),k=w.a
s=A.a([A.ak(A.a([m,C.by,A.j("("+l+" \u0645\u0646 "+E.aZ(k.e-k.d+1)+")",v,v,v,v,v,F.ak,v,v,v),C.d5,w.aIb(t,s.a)],p),C.j,C.f,C.h,0,v,v),C.R],p)
if(r)s.push(w.aDD())
else{m=w.r
if(m!=null){l=w.f
l=l!==D.pX&&l!==D.lR}else l=!1
if(l)s.push(w.av7(m))
else s.push(A.j(w.gyn()+" \ufd3f"+E.aZ(w.gi7())+"\ufd3e",v,v,v,v,v,D.ia,C.ac,C.aF,v))}s=A.a([new B.Ec(u,!0,v),n,C.S,new E.cW(A.ad(s,C.ad,C.f,C.h),D.a8M,C.aA,v,!1,v)],p)
n=w.r
if(n!=null&&w.f===D.ha)s.push(w.aPF(n))
if(w.r!=null&&w.f===D.ha&&w.ch!=null){x=C.d.ar(C.e.ba(w.ch.a,1000)/100)
s.push(new A.a_(C.bC,A.j("\u0627\u062a\u0631\u0627\u062c\u0639 \u0641\u064a "+(E.aZ(C.e.ba(x,10))+"\u066b"+E.aZ(C.e.ah(x,10)))+" \u062b",v,v,v,v,v,F.ak,C.ac,v,v),v))}n=w.as
if(n!=null)s.push(new A.a_(C.aA,A.j(n,v,v,v,v,v,D.wE,v,v,v),v))
if(w.as!=null&&w.at!=null){n=w.at
n.toString
s.push(new B.Au(n,"check "+w.a.c+":"+w.gi7(),v))}s.push(w.avy())
s.push(C.ao)
s.push(A.rC(C.p,C.J,v,new B.bpO(w),D.aV_,D.aXe,u.b.d))
n=w.a
if(n.e>n.d){n=w.gTA()
s.push(new E.cW(A.ak(A.a([D.acB,C.aV,A.aP(A.ad(A.a([D.aXY,A.j(w.gTA()?"\u062d\u0641\u0638\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u0633\u0645\u0651\u0639\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636 \u0645\u0646 \u063a\u064a\u0631 \u0645\u0627 \u062a\u0634\u0648\u0641\u0647\u0627":"\u0644\u0645\u0627 \u062a\u062e\u0644\u0651\u0635 \u0627\u0644\u0622\u064a\u0627\u062a \u0648\u0627\u062d\u062f\u0629 \u0648\u0627\u062d\u062f\u0629\u060c \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0644\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636",v,v,v,v,v,F.ak,v,v,v)],p),C.z,C.f,C.h),1),P.kN],p),C.j,C.f,C.h,0,v,v),C.af,C.aA,new B.bpP(w,d),n,v))}n=A.k6().gep().h(0,"debug")
if(n==="1"){p=A.a([C.S,A.f9(D.adm,D.aWW,u.f===D.hP&&w.f!==D.lR?w.gaw6():v,v)],p)
n=w.ax
if(n!=null)p.push(new A.a_(C.iJ,A.zK(n,F.ak,v,v),v))
n=u.x
if(n!=null){m=n.a
l=n.b
n=n.glH()
u=u.x
p.push(A.j("model: "+m+" "+l+" \u2014 "+n+", isolated "+u.r+", load "+u.c+" ms (warm-up "+u.w+" ms)",v,v,v,v,v,F.ak,v,v,v))}p.push(A.bH(D.aXA,v,v,v,new B.bpQ(w,d),v,v))
C.b.E(s,p)}s.push(C.S)
s.push(D.xj)
return M.vW(o,s,q)},
awW(){var x=this.a,w=x.e-x.d+1
if(w===1)return C.aE
return A.bk(A.p6(new B.bpq(this),w,null,C.az,new B.bpr()),36,null)},
aIb(d,e){var x,w,v,u,t,s,r,q=null
if(d.a===D.e0)return D.aJy
x=d.b
w=E.aZ(x)
v=E.aZ(e)
u=A.a([],y.p)
for(t=0;t<e;++t){s=t<x
r=s?C.dd:D.ac8
u.push(new A.a_(D.a9l,A.c6(r,s?G.c4:C.eX,q,16),q))}return A.R9(A.ak(u,C.j,C.f,C.V,0,q,q),q,"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637 \u0648\u0631\u0627 \u0628\u0639\u0636: "+w+" \u0645\u0646 "+v,q,q)},
aDD(){var x=null
return A.de(!1,A.aa(12),!0,A.au(x,D.a4X,C.m,x,x,new A.ap(L.qT,x,x,A.aa(12),x,x,C.r),x,x,x,D.a8r,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,x,new B.bpw(this),x,x,x,x,x,x,x)},
av7(d){var x,w,v,u,t,s=null,r=A.a([],y.R)
for(x=d.a,w=0;w<x.length;++w){v=J.b4(d.gGO(),w)
A:{if(D.h4===v){u=D.ia.cB(G.c4)
break A}if(D.pJ===v){u=D.ia.Wp(D.d0,C.fX,D.d0)
break A}if(D.pK===v){u=D.ia.Wp(D.dH,C.fX,D.dH)
break A}u=D.ia.Wp(C.eX,C.pk,C.c3)
break A}t=x[w]
r.push(new A.f2(t.a,s,s,C.be,s,s,s,s,s,s,u))
r.push(L.ww)}x=E.aZ(this.gi7())
r.push(A.dV(s,s,s,s,s,s,s,s,s,D.ia.cB(C.a6),"\ufd3f"+x+"\ufd3e"))
return A.QF(A.dV(r,s,s,s,s,s,s,s,s,s,s),s,C.ac,C.aF)},
aPF(d){var x,w,v,u,t,s,r=this.w
if(C.c.al(d.c).length===0)return D.b6m
if(d.gqs()){x=r==null
if((x?null:r.a)===D.e0&&r.b===this.d.b.a)x="\u0627\u0644\u0622\u064a\u0629 \u062f\u064a \u0627\u062a\u062d\u0641\u0638\u062a! \u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0627\u0644\u0644\u064a \u0628\u0639\u062f\u0647\u0627."
else x=!x&&r.a!==D.e0?"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637. \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0645\u0627\u0646 "+E.aZ(this.d.b.a-r.b)+" \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629.":"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637."
return new B.AI(G.c4,C.dd,"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713",x,null)}x=d.gGO()
w=J.d2(x)
v=w.hP(x,new B.bpJ()).gL(0)
u=w.hP(x,new B.bpK()).gL(0)
t=w.hP(x,new B.bpL()).gL(0)
x=A.a([],y.s)
if(u>0)x.push(E.aZ(u)+" \u063a\u0644\u0637")
if(v>0)x.push(E.aZ(v)+" \u0631\u0627\u062c\u0639\u0647\u0627")
if(t>0)x.push(E.aZ(t)+" \u0646\u0627\u0642\u0635\u0629")
if(d.gEp().length!==0)x.push(E.aZ(d.gEp().length)+" \u0632\u064a\u0627\u062f\u0629")
w=u+t>0?D.dH:D.d0
x=C.b.aK(x," \u2022 ")
s=d.gEp().length!==0?"\n\u0632\u064a\u0627\u062f\u0629: "+C.b.aK(d.gEp(),"\u060c "):""
return new B.AI(w,C.kK,"\u0642\u0631\u0628\u062a! \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0644\u0648\u0651\u0646\u0629",x+"\n\u0627\u0644\u0623\u0635\u0641\u0631: \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u062f\u064a \u2014 \u0627\u0644\u0623\u062d\u0645\u0631: \u063a\u0644\u0637 \u2014 \u0627\u0644\u0631\u0645\u0627\u062f\u064a \u0627\u0644\u0645\u0634\u0637\u0648\u0628: \u0646\u0633\u064a\u062a\u0647\u0627."+s,null)},
avy(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d,g=h.f===D.hP,f=j.f
switch(f.a){case 2:if(j.z==null)x=0
else{f=Date.now()
w=j.z
w.toString
x=C.e.ba(new A.b1(f,0,!1).dM(w).a,1e6)}v=C.e.ba(B.bBF(B.BK(j.gyn()).length).a,1e6)
f=j.gaNa()
w=96+26*j.y
u=D.dH.bo(0.25)
w=A.jf(i,A.bDk(C.W,A.au(i,D.ads,C.m,i,i,D.Zk,i,84,i,i,i,i,84),i,new A.ap(u,i,i,i,i,i,C.co),C.zX,i,w,w),C.t,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,f,i,i,i,i,i,i)
u=A.j("\u0628\u0646\u0633\u062c\u0651\u0644\u2026 "+B.bAC(x)+" / "+B.bAC(v),i,i,i,i,i,K.lz,i,i,i)
return A.ad(A.a([w,C.S,u,A.j(h.b.c?"\u0644\u0645\u0627 \u062a\u062e\u0644\u0635 \u0627\u0633\u0643\u062a \u062b\u0627\u0646\u064a\u0629 \u0623\u0648 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb":"\u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb \u0644\u0645\u0627 \u062a\u062e\u0644\u0635",i,i,i,i,i,F.ak,i,i,i),A.bH(D.b_p,i,i,i,f,i,i)],y.p),C.j,C.f,C.h)
case 3:t=C.d.e6((Date.now()-j.ay)/1000)
if(t<8)h="\u062b\u0648\u0627\u0646\u064a \u0648\u0646\u0642\u0648\u0644\u0643"
else h=t<25?"\u0644\u0633\u0647 \u0634\u063a\u0627\u0644\u064a\u0646 \u2014 \u0627\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0628\u062a\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0643\u062a\u0631 ("+E.aZ(t)+" \u062b)":"\u0648\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0637\u0648\u0644 \u0645\u0646 \u0627\u0644\u0639\u0627\u062f\u064a \u2014 \u0644\u0648 \u0639\u0644\u0651\u0642 \u0647\u0646\u0639\u064a\u062f \u062a\u0634\u063a\u064a\u0644\u0647 \u0644\u0648\u062d\u062f\u0646\u0627 ("+E.aZ(t)+" \u062b)"
return new A.a_(D.a8n,A.ad(A.a([C.qH,C.ao,D.aWy,A.j(h,i,i,i,i,i,F.ak,C.ac,i,i)],y.p),C.j,C.f,C.h),i)
default:s=f===D.pW
r=j.r
f=r==null
w=!f
q=w&&r.gqs()
u=A.c6(s?C.kL:K.BK,i,i,i)
if(s)p="\u0648\u0642\u0651\u0641"
else p=w&&!q?"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u062d":"\u0627\u0633\u0645\u0639"
p=A.j(p,i,i,i,i,i,i,i,i,i)
o=A.iH(i,i,D.aLW,i,i,i,i)
u=A.aP(new A.xW(C.Wu,!0,new B.bpe(j,r,q),i,i,i,o,C.m,i,!1,i,!0,i,new A.Tw(p,u,o,i,i),i),1)
p=A.a([],y.n)
for(o=y.c,n=0;n<3;++n){m=D.CN[n]
p.push(new A.ex(m,i,A.j("\xd7"+E.aZ(m),i,i,i,i,i,i,i,i,i),o))}o=y.S
l=y.b
k=y.p
o=A.ak(A.a([u,C.as,A.vx(new B.bpf(j),p,A.cT([h.b.b],o),!1,A.jF(i,i,i,new A.b3(new B.bpg(),l),i,i,i,i,new A.b3(new B.bph(),l),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,C.dp),o)],k),C.j,C.f,C.h,0,i,i)
h=g&&!s?j.gaJG():i
u=A.c6(f?D.nd:C.kK,i,i,i)
if(g)f=f?"\u0633\u0645\u0651\u0639":"\u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a"
else f="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
f=A.j(f,i,i,i,i,i,C.cG,i,i,i)
p=q?N.hl:C.p
h=A.a([o,C.R,A.jM(u,f,h,A.iH(p,q?C.i:C.a5,D.pb,i,i,i,i))],k)
if(w&&j.gi7()<j.a.e)C.b.E(h,A.a([C.S,q?A.jM(D.afa,D.aZG,new B.bpi(j),A.iH(G.c4,C.a5,D.pb,i,i,i,i)):A.bH(D.aV5,i,i,i,new B.bpj(j),i,i)],k))
if(w){f=j.gi7()
w=j.a
u=w.e
f=f===u&&q&&u>w.d}else f=!1
if(f)h.push(new A.a_(C.mO,A.j(j.gTA()?"\u062e\u0644\u0651\u0635\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u062c\u0631\u0651\u0628 \xab\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636\xbb \u062a\u062d\u062a.":"\u062e\u0644\u0635\u062a \u0622\u062e\u0631 \u0622\u064a\u0629 \u2014 \u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0644\u0633\u0647 (\u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0635\u0641\u0631\u0627 \u0641\u0648\u0642).",i,i,i,i,i,K.pu,C.ac,i,i),i))
return A.ad(h,C.ad,C.f,C.h)}}}
B.AI.prototype={
A(d){var x=this,w=null,v=x.c,u=v.bo(0.12),t=A.aa(14),s=A.cR(v.bo(0.5),1),r=y.p
return A.au(w,A.ak(A.a([A.c6(x.d,v,w,w),C.as,A.aP(A.ad(A.a([A.j(x.e,w,w,w,w,w,A.cw(w,w,v,w,w,w,w,w,w,w,w,15,w,w,C.a3,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),C.pd,A.j(x.f,w,w,w,w,w,D.V5,w,w,w)],r),C.z,C.f,C.h),1)],r),C.z,C.f,C.h,0,w,w),C.m,w,w,new A.ap(u,w,s,t,w,w,C.r),w,w,C.aA,C.aT,w,w,w)}}
B.As.prototype={
V(){var x=y.S
return new B.Xa($.Jg(),A.x(x,y.B),A.aF(x),A.x(x,y.N),A.dN(null,y.H))}}
B.Xa.prototype={
aa(){this.ap()
this.d.a5(this.gn5())},
vd(){if(this.c!=null)this.t(new B.boX())},
l(){var x,w=this,v=w.d
v.R(w.gn5())
x=w.y
if(x!=null)x.aF()
v.a.VQ()
w.aq()},
Dg(d){return this.aN_(d)},
aN_(d){var x=0,w=A.o(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m
var $async$Dg=A.k(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.t(new B.bp5(t,d))
r=t.y
if(r!=null)r.aF()
t.y=A.kM(C.fv,new B.bp6(t))
v=3
r=t.d
q=t.a
p=q.f
q=q.c
q=B.bBF(B.BK(H.J6(q,d,p.vm(q,d)).b).length)
p=t.a
o=p.f
p=p.c
p=A.d5(0,0,0,350*B.BK(H.J6(p,d,o.vm(p,d)).b).length,0,0)
x=6
return A.d(r.a.a0A(r.b.c,q,p,new B.bp7(t,d),new B.bp8(t)),$async$Dg)
case 6:v=1
x=5
break
case 3:v=2
m=u.pop()
r=A.Y(m)
if(r instanceof B.kN){s=r
r=t.y
if(r!=null)r.aF()
if(t.c!=null)t.t(new B.bp9(t,s))}else throw m
x=5
break
case 2:x=1
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$Dg,w)},
BI(d,e){return this.ay1(d,e)},
ay1(d,e){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$BI=A.k(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.e!==d){x=1
break}o=s.y
if(o!=null)o.aF()
s.t(new B.bp0(s,d))
n=d<s.a.e?d+1:null
r=s.d.a.a0D()
if(e&&n!=null)s.Dg(n)
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
if(o instanceof B.kN){p=o
s.t(new B.bp1(s,d,p))}else throw l
x=6
break
case 3:x=2
break
case 6:if(q!=null){o=q
s.at=s.at.bM(new B.bp2(s,o,d),y.H)}case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$BI,w)},
gaG6(){var x,w,v,u,t=this
for(x=t.a.d,w=t.f,v=t.r,u=t.w;x<=t.a.e;++x)if(!w.aw(x)&&!v.m(0,x)&&!u.aw(x)&&x!==t.e)return x
return null},
aKj(){this.t(new B.bp3(this))},
A(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q.f===D.hP,o=s.e,n=s.gaG6(),m=s.f,l=m.a,k=s.w.a,j=s.a,i=l+k===j.e-j.d+1&&s.r.a===0&&o==null
l=A.w(m).i("c7<2>")
x=new A.aH(new A.c7(m,l),new B.bpa(),l.i("aH<M.E>")).gL(0)
l=H.jD(s.a.c)
m=y.p
q=A.a([new B.Ec(q,!0,r),A.j("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 "+E.aZ(s.a.d)+" \u0644\u062d\u062f "+E.aZ(s.a.e)+" \u0645\u0646 \u062d\u0641\u0638\u0643\u060c \u0622\u064a\u0629 \u0622\u064a\u0629: \u0628\u0639\u062f \u0643\u0644 \u0622\u064a\u0629 \u062f\u0648\u0633 \xab\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629\xbb \u0648\u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0637\u0648\u0644 \u2014 \u0647\u0646\u0635\u062d\u0651\u062d \u0648\u0625\u0646\u062a \u0628\u062a\u0642\u0631\u0627.",r,r,r,r,r,F.ak,r,r,r),C.R],m)
for(w=s.a.d;w<=s.a.e;++w)q.push(s.aOo(w))
q.push(C.S)
k=s.Q
if(k!=null)q.push(A.j(k,r,r,r,r,r,D.wE,r,r,r))
k=s.as
if(k!=null){j=s.a
q.push(new B.Au(k,"review "+j.c+":"+j.d+"-"+j.e,r))}k=o==null
if(!k){j=E.aZ(o)
if(s.z==null)v=0
else{v=Date.now()
u=s.z
u.toString
u=C.e.ba(new A.b1(v,0,!1).dM(u).a,1e6)
v=u}v=A.j("\u0628\u0646\u0633\u062c\u0651\u0644 \u0622\u064a\u0629 "+j+"\u2026 "+B.bAC(v),r,r,r,r,r,K.lz,C.ac,r,r)
j=A.n1(A.aa(6),A.DO(C.dI,D.dH,6,s.x),C.bl)
u=o<s.a.e
t=A.c6(u?Q.BD:C.kL,r,r,r)
C.b.E(q,A.a([v,C.T,j,C.R,A.jM(t,A.j(u?"\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629":"\u062e\u0644\u0635\u062a",r,r,r,r,r,C.cG,r,r,r),new B.bpb(s,o),A.iH(C.p,C.a5,D.pb,r,r,r,r))],m))}else if(n!=null){j=p?new B.bpc(s,n):r
if(!p)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
else v=n===s.a.d?"\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0633\u0645\u064a\u0639":"\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+E.aZ(n)
q.push(A.jM(D.ae3,A.j(v,r,r,r,r,r,C.cG,r,r,r),j,A.iH(C.p,C.a5,D.pb,r,r,r,r)))}if(s.r.a!==0&&k)q.push(D.aAe)
if(i){k=s.a
k=x===k.e-k.d+1
j=k?G.c4:D.d0
v=k?C.n9:C.kK
if(k)k="\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713 \u0633\u0645\u0651\u0639\u062a\u0647\u0645 \u0643\u0644\u0647\u0645 \u0635\u062d"
else{k=E.aZ(x)
u=s.a
u=k+" \u0645\u0646 "+E.aZ(u.e-u.d+1)+" \u0622\u064a\u0627\u062a \u0645\u0638\u0628\u0648\u0637\u0629"
k=u}u=s.a
u=x===u.e-u.d+1?"\u0631\u0628\u0646\u0627 \u064a\u062b\u0628\u0651\u062a\u0647\u0627 \u0641\u064a \u0642\u0644\u0628\u0643.":"\u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0641\u064a\u0647\u0627 \u0623\u0644\u0648\u0627\u0646 \u0648\u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a."
C.b.E(q,A.a([new B.AI(j,v,k,u,r),A.f9(D.af5,D.b_1,s.gaKi(),r)],m))}q.push(C.R)
q.push(D.xj)
return M.vW(r,q,"\u0633\u0645\u0651\u0639 "+l)},
aOo(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.f.h(0,d),i=l.w.h(0,d)
if(l.e===d)x=D.adK
else if(l.r.m(0,d))x=O.pc
else if(i!=null)x=D.adT
else if(j!=null){w=j.gqs()?C.dd:D.abC
x=A.c6(w,j.gqs()?G.c4:D.d0,k,k)}else x=D.ad3
w=y.p
v=A.a([A.ak(A.a([A.j("\u0622\u064a\u0629 "+E.aZ(d),k,k,k,k,k,D.aRU,k,k,k),C.d5,x],w),C.j,C.f,C.h,0,k,k)],w)
if(i!=null)v.push(A.j(i,k,k,k,k,k,D.V2,k,k,k))
if(j!=null&&!j.gqs()){u=y.R
t=A.a([],u)
for(s=j.a,r=0;r<s.length;++r){q=s[r]
p=j.gGO()
o=J.bq(p)
n=o.h(p,r)
A:{if(D.h4===n){m=G.c4
break A}if(D.pJ===n){m=D.d0
break A}if(D.pK===n){m=D.dH
break A}m=C.eX
break A}m=D.ia.aTA(m,o.h(p,r)===D.pL?C.pk:k,22)
C.b.E(t,A.a([new A.f2(q.a,k,k,C.be,k,k,k,k,k,k,m),L.ww],u))}w=A.a([C.aQ,A.QF(A.dV(t,k,k,k,k,k,k,k,k,k,k),k,C.ac,C.aF)],w)
if(C.c.al(j.c).length===0)w.push(D.aXF)
C.b.E(v,w)}return new E.cW(A.ad(v,C.ad,C.f,C.h),C.f1,C.ew,k,!1,k)}}
B.Ar.prototype={
V(){return new B.X9($.Jg())}}
B.X9.prototype={
aa(){this.ap()
var x=this.d
x.a5(this.gn5())
x.Y1()},
vd(){if(this.c!=null)this.t(new B.boO())},
l(){this.d.R(this.gn5())
this.aq()},
A(d){var x,w,v,u,t,s=this,r=null,q=s.d.c,p=q.gamD(),o=A.a([],y.t)
for(x=78;x<=114;++x)o.push(x)
w=C.b.kd(o,0,new B.boV(q))
v=C.b.kd(o,0,new B.boW())
o=y.p
o=A.a([A.ak(A.a([A.aP(s.Qq(E.aZ(q.gahM()),"\u0622\u064a\u0629 \u0645\u062d\u0641\u0648\u0638\u0629"),1),C.as,A.aP(s.Qq(E.aZ(q.aeA()),"\u064a\u0648\u0645 \u0648\u0631\u0627 \u0628\u0639\u0636"),1),C.as,A.aP(s.Qq(E.aZ(q.e),"\u0623\u0637\u0648\u0644 \u0633\u0644\u0633\u0644\u0629"),1)],o),C.j,C.f,C.h,0,r,r),C.R,new E.cW(A.ad(A.a([A.j("\u062c\u0632\u0621 \u0639\u0645\u0651: "+E.aZ(C.d.ar(w*100/v))+"\u066a",r,r,r,r,r,F.b_,r,r,r),C.T,A.n1(A.aa(6),A.DO(C.dI,G.c4,8,w/v),C.bl),C.aQ,A.j(E.aZ(w)+" \u0645\u0646 "+E.aZ(v)+" \u0622\u064a\u0629",r,r,r,r,r,F.ak,r,r,r)],o),C.z,C.f,C.h),C.af,C.aA,r,!1,r)],o)
if(p.length===0)o.push(D.aAn)
for(u=p.length,t=0;t<p.length;p.length===u||(0,A.B)(p),++t)o.push(s.aOq(p[t]))
o.push(C.S)
u=$.ac().b
u===$&&A.b()
u=u.gc2().e.a
o.push(A.j((u==null?r:u.r)!=null?"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643 \u0648\u064a\u0638\u0647\u0631 \u0639\u0644\u0649 \u0623\u064a \u062c\u0647\u0627\u0632 \u062a\u062f\u062e\u0644 \u0645\u0646\u0647.":"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647. \u0633\u062c\u0651\u0644 \u062f\u062e\u0648\u0644 \u0639\u0634\u0627\u0646 \u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643.",r,r,r,r,r,F.ak,r,r,r))
return M.vW(r,o,"\u062a\u0642\u062f\u0651\u0645\u064a \u0641\u064a \u0627\u0644\u062d\u0641\u0638")},
Qq(d,e){var x=null
return new E.cW(A.ad(A.a([A.j(d,x,x,x,x,x,D.aRG,x,x,x),A.j(e,x,x,x,x,x,C.Vj,C.ac,x,x)],y.p),C.j,C.f,C.h),C.af,C.J,x,!1,x)},
aOq(d){var x=null,w=this.d.c,v=I.c7[d-1].a[1],u=w.Yx(d),t=w.aYy(d),s=y.p,r=A.ak(A.a([A.aP(A.j(H.jD(d),x,x,x,x,x,F.b_,x,x,x),1),A.j(E.aZ(C.d.ar(u*100/v))+"\u066a",x,x,x,x,x,D.aSw,x,x,x)],s),C.j,C.f,C.h,0,x,x),q=A.n1(A.aa(6),A.DO(C.dI,G.c4,7,u/v),C.bl),p=E.aZ(u),o=E.aZ(v),n=t>0?" \u2022 \u0628\u062a\u0631\u0627\u062c\u0639 "+E.aZ(t):""
return new E.cW(A.ad(A.a([r,C.T,q,C.aQ,A.j("\u0645\u062d\u0641\u0648\u0638 "+p+" \u0645\u0646 "+o+n,x,x,x,x,x,F.ak,x,x,x)],s),C.z,C.f,C.h),C.af,C.aA,new B.boU(this,d),!1,x)},
HS(d){return this.awn(d)},
awn(d){var x=0,w=A.o(y.H),v=this,u,t
var $async$HS=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:u=I.c7[d-1].a[1]
t=v.c
t.toString
x=2
return A.d(A.fz(C.dc,new B.boT(v,d,u),t,!0,null,null,!1,y.H),$async$HS)
case 2:return A.m(null,w)}})
return A.n($async$HS,w)}}
B.ac8.prototype={
Kt(d,e){var x=null,w=A.rG(x,x,x,x,x,x,x,x,x,x,x,D.aLI,C.J,x,x,x,x,C.la,x,x)
return A.bH(A.j(d,x,x,x,x,x,C.jJ,x,x,x),x,x,x,new B.aVc(e),x,w)},
A(d){var x=this,w=y.p
return new E.cW(A.ad(A.a([D.aZw,C.T,D.b_o,A.dI(A.a([x.Kt("tarteel-ai/whisper-base-ar-quran","https://huggingface.co/tarteel-ai/whisper-base-ar-quran"),x.Kt("iqbalaesthetic/Basira","https://huggingface.co/iqbalaesthetic/Basira")],w),C.aR,0,12),D.aUQ,x.Kt("tanzil.net","https://tanzil.net"),D.b0c,x.Kt("everyayah.com","https://everyayah.com")],w),C.z,C.f,C.h),C.af,C.aA,null,!1,null)}}
B.Au.prototype={
V(){return new B.Xc()}}
B.Xc.prototype={
ga99(){var x=this.a
return B.c9f(x.c,x.d,$.bCf().E8())},
Kv(){var x=0,w=A.o(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k
var $async$Kv=A.k(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.t(new B.bpR(s))
v=3
r=A.bw1()
n=s.ga99()
m=y.N
q=A.x(m,m)
J.fR(q,"app","masjid")
J.fR(q,"path","tutor \u203a "+s.a.d)
if(r!=null){m=r.length>160?C.c.Y(r,0,160):r
J.fR(q,"ua",m)}x=6
return A.d(A.a33(n,null,C.AJ,q),$async$Kv)
case 6:if(s.c!=null)s.t(new B.bpS(s))
t.push(5)
x=4
break
case 3:v=2
k=u.pop()
p=A.Y(k)
o=p instanceof A.cZ?p.a:"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0628\u0639\u062a \u2014 \u0627\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0646\u062a \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
if(s.c!=null)s.t(new B.bpT(s,o))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.t(new B.bpU(s))
x=t.pop()
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$Kv,w)},
A(d){var x,w,v,u=this,t=null,s=y.p
s=A.a([A.de(!1,t,!0,new A.a_(C.A8,A.ak(A.a([A.c6(u.d?C.tL:C.kH,C.c3,t,18),C.fU,D.b_N],s),C.j,C.f,C.h,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new B.bpW(u),t,t,t,t,t,t,t)],s)
if(u.d){x=A.aa(8)
s.push(A.au(t,A.zK(u.ga99(),D.aOB,t,C.n),C.m,t,t,new A.ap(L.qT,t,t,x,t,t,C.r),t,t,D.a8x,C.ex,t,t,1/0))}if(u.f)s.push(D.aUX)
else{x=A.rG(t,t,t,t,t,t,t,t,t,t,t,C.TW,C.J,t,t,t,t,C.la,t,t)
w=u.e
v=w?t:u.gaOp()
s.push(A.ht(w?D.aM5:D.aeP,D.aZ0,v,x))}x=u.r
if(x!=null)s.push(A.j(x,t,t,t,t,t,D.V2,t,t,t))
return new A.a_(C.aA,A.ad(s,C.z,C.f,C.h),t)}}
var z=a.updateTypes(["ab<~>()","~()","A(mD)","ab<Gq>()","ab<Go>()","ab<Gp>()","O<mD>()","A(q7)","bn(nB)","At(z)","Ar(z)","A(m1)","As(z)","A(F7)"])
B.aVd.prototype={
$0(){var x=0,w=A.o(y.m),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$$0=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=A.a9(A.cp(b.G.document).baseURI)
q=A.bT(r,0,null).W("quran_tutor/tutor.js?v=3").j(0)
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
m=B.c_1("network",A.h(o))
throw A.p(m)
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:303}
B.aVg.prototype={
$1(d){var x=null
return A.brK(A.cf(d,"persist",x,x,x,x))},
$S:952}
B.aVf.prototype={
$0(){var x=0,w=A.o(y.C),v,u=this,t,s,r,q,p,o,n,m,l
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:q=u.a
n=A
m=A
l=A
x=4
return A.d(q.pk(),$async$$0)
case 4:x=3
return A.d(n.e2(m.cp(l.cf(e,"loadModel",A.bsg(new B.aVe(u.b)),u.c,u.d,null)),y.m),$async$$0)
case 3:p=e
o=A.Q(p.device)
if(o==null)o=null
if(o==null)o=""
t=A.Q(p.dtype)
if(t==null)t=null
if(t==null)t=""
s=q.pj(p,"ms")
r=q.mW(p,"cached")
A.Q(p.backend)
v=new B.Go(o,t,s,r,q.pj(p,"threads"),q.mW(p,"isolated"),q.pj(p,"warmMs"))
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+4}
B.aVe.prototype={
$2(d,e){this.a.$2(C.d.ar(d),C.d.ar(e))},
$S:953}
B.aVk.prototype={
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
u.onLevel=A.f4(new B.aVi(v.e))
u.onAutoStop=A.f4(new B.aVj(v.f))
x=5
return A.d(A.e2(A.cp(A.cf(s,"startRecording",u,null,null,null)),y.O),$async$$0)
case 5:return A.m(null,w)}})
return A.n($async$$0,w)},
$S:2}
B.aVi.prototype={
$1(d){return this.a.$1(d)},
$S:58}
B.aVj.prototype={
$1(d){return this.a.$1(d)},
$S:9}
B.aVl.prototype={
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
return A.d(q.e2(p.cp(o.cf(e,"stopRecording",null,null,null,null)),y.m),$async$$0)
case 3:r=e
v=new B.Gp(r,A.dl(r.seconds))
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+5}
B.aVn.prototype={
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
return A.d(q.e2(p.cp(o.cf(e,"transcribe",t.audio,t.rate,s.a82(u.c),null)),y.m),$async$$0)
case 3:v=r.abd(e)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+3}
B.aVm.prototype={
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
return A.d(r.e2(q.cp(p.cf(e,"transcribeUrl",u.b,t.a82(u.c),null,null)),y.m),$async$$0)
case 3:v=s.abd(e)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:z+3}
B.aVh.prototype={
$1(d){return d},
$S:32}
B.aMA.prototype={
$0(){var x,w,v,u,t=this.a,s=A.bP(t.a.length,D.pL,!1,y.G)
for(t=t.b,x=t.length,w=0;w<x;++w){v=t[w]
u=v.a
if(u!=null)s[u]=v.d}return s},
$S:z+6}
B.aMz.prototype={
$1(d){return d===D.h4},
$S:z+2}
B.bsb.prototype={
$2(d,e){var x,w=e.length
if(d.length<w)return!1
for(x=0;x<w;++x)if(B.bwS(e[x],d[x])<0.75)return!1
return!0},
$S:954}
B.btF.prototype={
$1(d){return d.length!==0},
$S:12}
B.aVq.prototype={
$1(d){return d.a===D.e0},
$S:z+7}
B.aVr.prototype={
$1(d){return C.e.ba(d,1000)},
$S:65}
B.aVo.prototype={
$1(d){return C.d.bU(d)},
$S:955}
B.aVs.prototype={
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
i=C.b.m(D.CN,k.h(0,"r"))?A.eu(k.h(0,"r")):1
h=A.hx(k.h(0,"auto"))
g=A.hx(k.h(0,"hide"))
k=A.hx(k.h(0,"in"))
s.a.b=new B.Rg(j,i,h!==!1,g===!0,k===!0)}u=2
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
if(q!=null)s.a.c=B.bzW(y.P.a(C.a1.eV(q,null)))
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
if(B.bNv(n,m)&&B.bNv(n,l)&&m<=l)s.a.z=new A.bO(n,m,l)}u=2
x=16
break
case 14:u=13
a0=t.pop()
x=16
break
case 13:x=2
break
case 16:k=s.a
if(k.b.e&&k.a.a0o()){k.a.afn()
x=1
break}a1=k
x=18
return A.d(k.a.H9(),$async$$0)
case 18:a1.d=a3
k.e=!0
k.X()
if(k.b.e)k.zG()
k.ut()
case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:106}
B.aVt.prototype={
$2(d,e){var x=this.a
x.r=d
x.w=e
x.X()},
$S:956}
B.aVu.prototype={
$2(d,e){return C.e.ba(A.eC(A.h(d),null,null),1000)===this.a},
$S:957}
B.bhm.prototype={
$1(d){var x=0,w=A.o(y.a),v=this,u,t
var $async$$1=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.d(u.d.a.AQ(),$async$$1)
case 2:t=f
if(u.c!=null)u.t(new B.bhl(u,t))
return A.m(null,w)}})
return A.n($async$$1,w)},
$S:958}
B.bhl.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bhn.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bhk(x,d))},
$S:z+8}
B.bhk.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bho.prototype={
$1(d){},
$S:22}
B.bh8.prototype={
$0(){},
$S:0}
B.bhe.prototype={
$1(d){var x=this.c,w=this.a.w
w.toString
return new B.At(this.b,x.a,x.b,w,null)},
$S:z+9}
B.bhf.prototype={
$0(){},
$S:0}
B.bhi.prototype={
$0(){var x=y.z
return A.al(this.a,!1).cU(A.cU(new B.bhh(),null,x),x)},
$S:0}
B.bhh.prototype={
$1(d){return D.b0T},
$S:z+10}
B.bhj.prototype={
$0(){return B.bNg(this.a)},
$S:0}
B.bhb.prototype={
$0(){var x=this.b
return this.a.ve(x.a,x.b,x.c)},
$S:0}
B.bhc.prototype={
$1(d){return this.a.t(new B.bha())},
$S:9}
B.bha.prototype={
$0(){},
$S:0}
B.bhd.prototype={
$0(){var x=this.a
return x.t(new B.bh9(x))},
$S:0}
B.bh9.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.bhg.prototype={
$0(){return this.a.aOn(this.b)},
$S:0}
B.bvP.prototype={
$1(d){return new A.iY(new B.bvM(this.a,this.b,this.c),null)},
$S:51}
B.bvM.prototype={
$2(d,e){var x,w,v=null,u=this.b,t=new B.bvO(u,e),s=this.a,r=new B.bvN(s,e),q=A.j(H.jD(this.c),v,v,v,v,v,C.po,v,v,v),p=A.j("\u0647\u062a\u0633\u0645\u0651\u0639 \u0623\u0646\u0647\u064a \u0622\u064a\u0627\u062a\u061f ("+E.aZ(u)+" \u0622\u064a\u0629)",v,v,v,v,v,F.ak,v,v,v),o=y.p,n=A.a([],o)
if(u<=30)n.push(r.$3("\u0627\u0644\u0633\u0648\u0631\u0629 \u0643\u0644\u0647\u0627",1,u))
x=u<5
w=E.aZ(x?u:5)
x=x?u:5
n.push(r.$3("\u0623\u0648\u0644 "+w+" \u0622\u064a\u0627\u062a",1,x))
x=s.a
if(x>1){x=E.aZ(x)
w=s.a
n.push(r.$3("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+x,w,C.e.cA(w+4,1,u)))}u=A.a([q,C.aQ,p,C.R,A.dI(n,C.aR,6,8),C.S,A.ak(A.a([t.$3("\u0645\u0646",s.b,new B.bvH(s)),D.aM1,t.$3("\u0644\u062d\u062f",s.c,new B.bvI(s))],o),C.j,C.f,C.h,0,v,v)],o)
if(s.c-s.b>=10)u.push(D.aAh)
u.push(C.aJ)
u.push(A.hZ(D.aWc,v,new B.bvJ(s,d),A.iH(C.p,C.a5,D.aLT,v,v,v,v)))
return A.dG(!0,new A.a_(C.Ae,A.ad(u,C.ad,C.f,C.V),v),C.J,!0)},
$S:333}
B.bvO.prototype={
$3(d,e,f){var x,w,v,u=null,t=A.j(d,u,u,u,u,u,C.ic,u,u,u),s=A.a([],y.I)
for(x=this.a,w=y.r,v=1;v<=x;++v)s.push(new A.d0(v,A.j("\u0622\u064a\u0629 "+E.aZ(v),u,u,u,u,u,u,u,u,u),C.av,u,w))
return A.aP(A.ad(A.a([t,S.CW(C.dc,!0,s,320,new B.bvL(this.b,f),D.aSO,e,y.S)],y.p),C.z,C.f,C.h),1)},
$S:960}
B.bvL.prototype={
$1(d){return d==null?null:this.a.$1(new B.bvK(this.b,d))},
$S:50}
B.bvK.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bvN.prototype={
$3(d,e,f){var x=null
return A.bDj(x,A.j(d,x,x,x,x,x,x,x,x,x),new B.bvG(this.a,this.b,e,f))},
$S:961}
B.bvG.prototype={
$0(){var x=this
return x.b.$1(new B.bvF(x.a,x.c,x.d))},
$S:0}
B.bvF.prototype={
$0(){var x=this.a
x.b=this.b
x.c=this.c},
$S:0}
B.bvH.prototype={
$1(d){var x=this.a
x.b=d
if(x.c<d)x.c=d},
$S:31}
B.bvI.prototype={
$1(d){var x=this.a
x.c=d
if(x.b>d)x.b=d},
$S:31}
B.bvJ.prototype={
$0(){var x=this.a
return A.al(this.b,!1).bf(new A.R(x.b,x.c))},
$S:0}
B.bpd.prototype={
$0(){},
$S:0}
B.bpt.prototype={
$0(){var x=this.a
x.e=this.b
x.f=D.jX
x.w=x.r=null
x.x=!1
x.ch=x.ax=x.as=null},
$S:0}
B.bpx.prototype={
$0(){var x=this.a
return x.f=x.r!=null?D.ha:D.jX},
$S:0}
B.bpy.prototype={
$0(){var x=this.a
x.f=D.pW
x.as=null},
$S:0}
B.bpz.prototype={
$0(){var x=this.a
x.f=this.b
if(!this.c&&x.as==null)x.as=null},
$S:0}
B.bpB.prototype={
$0(){var x=this.a
x.f=D.pX
x.as=null
x.y=0
x.z=new A.b1(Date.now(),0,!1)
x.ax=null},
$S:0}
B.bpC.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bpA())},
$S:34}
B.bpA.prototype={
$0(){},
$S:0}
B.bpE.prototype={
$1(d){return this.a.y=d},
$S:58}
B.bpD.prototype={
$1(d){return this.a.yj()},
$S:9}
B.bpF.prototype={
$0(){var x,w=this.a
w.f=w.r!=null?D.ha:D.jX
x=this.b
w.as=B.J9(x)
w.at=x},
$S:0}
B.bpH.prototype={
$0(){var x=this.a
x.f=D.lR
x.ay=Date.now()},
$S:0}
B.bpI.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bpG())},
$S:34}
B.bpG.prototype={
$0(){},
$S:0}
B.bps.prototype={
$0(){var x=this.a
x.f=x.r!=null?D.ha:D.jX
x.as=this.b
x.at=this.c},
$S:0}
B.bpu.prototype={
$0(){var x=this.b
x.r=this.c
x.w=this.a.a
x.f=D.ha
x.x=!1},
$S:0}
B.bpl.prototype={
$0(){var x=this.a
x.f=D.lR
x.ay=Date.now()
x.as=null},
$S:0}
B.bpm.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bpk())},
$S:34}
B.bpk.prototype={
$0(){},
$S:0}
B.bpn.prototype={
$1(d){return d.d!==D.h4},
$S:z+11}
B.bpo.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.bpN.prototype={
$0(){return B.bNg(this.a)},
$S:0}
B.bpO.prototype={
$1(d){var x=this.a.d
return x.oU(x.b.aea(d))},
$S:5}
B.bpP.prototype={
$0(){var x=y.z
return A.al(this.b,!1).cU(A.cU(new B.bpM(this.a),null,x),x)},
$S:0}
B.bpM.prototype={
$1(d){var x=this.a.a
return new B.As(x.c,x.d,x.e,x.f,null)},
$S:z+12}
B.bpQ.prototype={
$0(){this.a.d.a.b1F()
this.b.S(y.q).f.b3(D.aMy)},
$S:0}
B.bpr.prototype={
$2(d,e){return C.by},
$S:47}
B.bpq.prototype={
$2(d,e){var x,w,v,u=null,t=this.a,s=t.a,r=s.d+e
switch(t.d.c.YG(s.c,r).a.a){case 2:s=G.c4
break
case 1:s=D.d0
break
case 0:s=N.hl
break
default:s=u}x=A.aa(18)
w=t.f===D.lR?u:new B.bpp(t,r)
v=s.bo(0.25)
if(r===t.gi7())s=C.i
s=A.cR(s,r===t.gi7()?2:1)
return A.de(!1,x,!0,A.au(C.W,A.j(E.aZ(r),u,u,u,u,u,D.aPP,u,u,u),C.m,u,u,new A.ap(v,u,s,u,u,u,C.co),u,u,u,u,u,u,36),u,!0,u,u,u,u,u,u,u,u,u,u,u,w,u,u,u,u,u,u,u)},
$S:128}
B.bpp.prototype={
$0(){return this.a.Se(this.b)},
$S:0}
B.bpw.prototype={
$0(){var x=this.a
return x.t(new B.bpv(x))},
$S:0}
B.bpv.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bpJ.prototype={
$1(d){return d===D.pJ},
$S:z+2}
B.bpK.prototype={
$1(d){return d===D.pK},
$S:z+2}
B.bpL.prototype={
$1(d){return d===D.pL},
$S:z+2}
B.bpe.prototype={
$0(){var x=this.b!=null&&!this.c?1:null
return this.a.Ku(x)},
$S:0}
B.bpf.prototype={
$1(d){var x=this.a.d
return x.oU(x.b.aT5(d.ga3(d)))},
$S:94}
B.bph.prototype={
$1(d){return d.m(0,C.I)?C.a5:C.i},
$S:4}
B.bpg.prototype={
$1(d){return d.m(0,C.I)?C.p:C.L},
$S:4}
B.bpi.prototype={
$0(){var x=this.a
return x.Se(x.gi7()+1)},
$S:0}
B.bpj.prototype={
$0(){var x=this.a
return x.Se(x.gi7()+1)},
$S:0}
B.boX.prototype={
$0(){},
$S:0}
B.bp5.prototype={
$0(){var x=this.a
x.e=this.b
x.Q=null
x.x=0
x.z=new A.b1(Date.now(),0,!1)},
$S:0}
B.bp6.prototype={
$1(d){var x=this.a
if(x.c!=null)x.t(new B.bp4())},
$S:34}
B.bp4.prototype={
$0(){},
$S:0}
B.bp8.prototype={
$1(d){return this.a.x=d},
$S:58}
B.bp7.prototype={
$1(d){return this.a.BI(this.b,!1)},
$S:9}
B.bp9.prototype={
$0(){var x,w=this.a
w.e=null
x=this.b
w.Q=B.J9(x)
w.as=x},
$S:0}
B.bp0.prototype={
$0(){var x=this.a
x.e=null
x.r.D(0,this.b)},
$S:0}
B.bp1.prototype={
$0(){var x,w=this.a,v=this.b
w.r.I(0,v)
x=this.c
w.w.n(0,v,B.J9(x))
w.as=x},
$S:0}
B.bp2.prototype={
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
return A.d(n.a.ajy(s.b,B.BK(H.J6(l,m,k.vm(l,m)).b).length),$async$$1)
case 6:r=f
l=o.a
k=l.f
l=l.c
q=B.bLx(H.J6(l,m,k.vm(l,m)).b,r.a)
if(C.c.al(q.c).length!==0){l=n.c
k=o.a.c
j=q.gqs()
l.aiD(k,m,n.b.a,j)}n.x0()
if(o.c!=null)o.t(new B.boY(o,m,q))
t.push(5)
x=4
break
case 3:v=2
h=u.pop()
o=A.Y(h)
if(o instanceof B.kN){p=o
o=s.a
if(o.c!=null)o.t(new B.boZ(o,s.c,p))}else throw h
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
o=s.a
if(o.c!=null)o.t(new B.bp_(o,s.c))
x=t.pop()
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$$1,w)},
$S:149}
B.boY.prototype={
$0(){var x=this.c
this.a.f.n(0,this.b,x)
return x},
$S:0}
B.boZ.prototype={
$0(){var x=this.a,w=this.c
x.w.n(0,this.b,B.J9(w))
x.as=w},
$S:0}
B.bp_.prototype={
$0(){return this.a.r.I(0,this.b)},
$S:0}
B.bp3.prototype={
$0(){var x=this.a
x.f.ad(0)
x.w.ad(0)
x.as=null},
$S:0}
B.bpa.prototype={
$1(d){return d.gqs()},
$S:z+13}
B.bpb.prototype={
$0(){return this.a.BI(this.b,!0)},
$S:0}
B.bpc.prototype={
$0(){return this.a.Dg(this.b)},
$S:0}
B.boO.prototype={
$0(){},
$S:0}
B.boV.prototype={
$2(d,e){return d+this.a.Yx(e)},
$S:97}
B.boW.prototype={
$2(d,e){return d+I.c7[e-1].a[1]},
$S:97}
B.boU.prototype={
$0(){return this.a.HS(this.b)},
$S:0}
B.boT.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.b,o=A.j(H.jD(p),q,q,q,q,q,C.po,q,q,q),n=y.p,m=A.a([],n)
for(x=this.c,w=this.a,v=w.d,u=p*1000,t=1;t<=x;++t){s=new A.ba(10,10)
r=v.c.a.h(0,u+t)
switch((r==null?$.pX():r).a.a){case 2:r=G.c4.bo(0.35)
break
case 1:r=D.d0.bo(0.35)
break
case 0:r=C.z4
break
default:r=q}m.push(A.au(C.W,A.j(E.aZ(t),q,q,q,q,q,K.US,q,q,q),C.m,q,q,new A.ap(r,q,q,new A.d_(s,s,s,s),q,q,C.r),q,38,q,q,q,q,38))}return A.dG(!0,new A.a_(C.iK,A.ad(A.a([o,C.aQ,D.aY5,C.R,new A.eb(D.Zb,A.hG(A.dI(m,C.aR,6,6),q,C.t,q,q,C.w),q),C.ao,A.bH(D.aZ1,q,q,q,new B.boS(w,d,p),q,q)],n),C.ad,C.f,C.V),q),C.J,!0)},
$S:49}
B.boS.prototype={
$0(){var x=0,w=A.o(y.H),v=this,u,t
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:u=v.b
t=v.c
x=4
return A.d(A.eh(null,new B.boR(t),u,y.y),$async$$0)
case 4:x=e===!0?2:3
break
case 2:x=5
return A.d(v.a.d.FG(t),$async$$0)
case 5:if(u.e!=null)A.al(u,!1).eo()
case 3:return A.m(null,w)}})
return A.n($async$$0,w)},
$S:2}
B.boR.prototype={
$1(d){var x=null,w=A.j("\u0647\u062a\u0628\u062f\u0623 "+H.jD(this.a)+" \u0645\u0646 \u0627\u0644\u0623\u0648\u0644.",x,x,x,x,x,x,x,x,x)
return A.ei(A.a([A.bH(C.wV,x,x,x,new B.boP(d),x,x),A.bH(D.b_n,x,x,x,new B.boQ(d),x,x)],y.p),w,D.aZT)},
$S:15}
B.boP.prototype={
$0(){A.al(this.a,!1).bf(!1)
return null},
$S:0}
B.boQ.prototype={
$0(){A.al(this.a,!1).bf(!0)
return null},
$S:0}
B.bwx.prototype={
$1(d){var x=this.a
return new A.jR(new B.bww(x),null,x,null)},
$S:962}
B.bww.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.a,r=s.b,q=A.a([],y.n)
for(x=y.c,w=1;w<=5;++w)q.push(new A.ex(w,t,A.j(E.aZ(w),t,t,t,t,t,t,t,t,t),x))
x=y.S
v=y.b
u=y.p
x=A.a([D.aUN,C.ao,D.aZg,C.T,A.vx(new B.bwr(s,r),q,A.cT([r.a],x),!1,A.jF(t,t,t,new A.b3(new B.bws(),v),t,t,t,t,new A.b3(new B.bwt(),v),t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),x),C.S,A.rC(C.p,C.J,t,new B.bwu(s,r),D.aXJ,D.b_V,r.c),A.rC(C.p,C.J,t,new B.bwv(s,r),t,D.aUx,r.d)],u)
s=s.x
if(s!=null)C.b.E(x,A.a([C.aQ,A.j("\u0627\u0644\u0645\u0639\u0627\u0644\u062c: "+s.glH(),t,t,t,t,t,F.ak,t,C.aF,t)],u))
x.push(C.S)
x.push(D.VN)
return A.dG(!0,A.hG(A.ad(x,C.ad,C.f,C.h),t,C.t,C.iK,t,C.w),C.J,!0)},
$S:963}
B.bwr.prototype={
$1(d){return this.a.oU(this.b.aT2(d.ga3(d)))},
$S:94}
B.bwt.prototype={
$1(d){return d.m(0,C.I)?C.a5:C.i},
$S:4}
B.bws.prototype={
$1(d){return d.m(0,C.I)?C.p:C.L},
$S:4}
B.bwu.prototype={
$1(d){return this.a.oU(this.b.aSw(d))},
$S:5}
B.bwv.prototype={
$1(d){return this.a.oU(this.b.aea(d))},
$S:5}
B.aVc.prototype={
$0(){return A.ev(A.bT(this.a,0,null),C.bR,null)},
$S:0}
B.bwL.prototype={
$1(d){var x,w=A.aQ("https?://",!0,!1)
w=A.bY(d,w,"")
x=A.aQ("www\\.",!0,!1)
return A.BL(A.bY(w,x,"www[.]"),A.aQ("([A-Za-z0-9-]+)\\.(com|net|org|io|xyz|ru|info|me|link)\\b",!1,!1),new B.bwM(),null)},
$S:32}
B.bwM.prototype={
$1(d){return A.h(d.h(0,1))+"[.]"+A.h(d.h(0,2))},
$S:56}
B.bpR.prototype={
$0(){var x=this.a
x.e=!0
x.r=null},
$S:0}
B.bpS.prototype={
$0(){return this.a.f=!0},
$S:0}
B.bpT.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bpU.prototype={
$0(){return this.a.e=!1},
$S:0}
B.bpW.prototype={
$0(){var x=this.a
return x.t(new B.bpV(x))},
$S:0}
B.bpV.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.bwK.prototype={
$1(d){return d==null?"\u2013":A.h(d)},
$S:141};(function installTearOffs(){var x=a._instance_0u
x(B.ac9.prototype,"gaYz","aYA",1)
var w
x(w=B.Rh.prototype,"gaYQ","zG",0)
x(w,"garv","ut",0)
x(w=B.Vb.prototype,"gn5","vd",1)
x(w,"gaHx","Jh",0)
x(w=B.Xb.prototype,"gn5","vd",1)
x(w,"gaJG","Jy",0)
x(w,"gaNa","yj",0)
x(w,"gaw6","HP",0)
x(w=B.Xa.prototype,"gn5","vd",1)
x(w,"gaKi","aKj",1)
x(B.X9.prototype,"gn5","vd",1)
x(B.Xc.prototype,"gaOp","Kv",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.ac9,B.Ri,B.Go,B.Gq,B.Gp,B.kN,B.OA,B.m1,B.F7,B.q7,B.aca,B.Rg])
x(A.kl,[B.aVd,B.aVf,B.aVk,B.aVl,B.aVn,B.aVm,B.aMA,B.aVs,B.bhl,B.bhk,B.bh8,B.bhf,B.bhi,B.bhj,B.bhb,B.bha,B.bhd,B.bh9,B.bhg,B.bvK,B.bvG,B.bvF,B.bvJ,B.bpd,B.bpt,B.bpx,B.bpy,B.bpz,B.bpB,B.bpA,B.bpF,B.bpH,B.bpG,B.bps,B.bpu,B.bpl,B.bpk,B.bpo,B.bpN,B.bpP,B.bpQ,B.bpp,B.bpw,B.bpv,B.bpe,B.bpi,B.bpj,B.boX,B.bp5,B.bp4,B.bp9,B.bp0,B.bp1,B.boY,B.boZ,B.bp_,B.bp3,B.bpb,B.bpc,B.boO,B.boU,B.boS,B.boP,B.boQ,B.aVc,B.bpR,B.bpS,B.bpT,B.bpU,B.bpW,B.bpV])
x(A.hU,[B.aVg,B.aVi,B.aVj,B.aVh,B.aMz,B.btF,B.aVq,B.aVr,B.aVo,B.bhm,B.bhn,B.bho,B.bhe,B.bhh,B.bhc,B.bvP,B.bvO,B.bvL,B.bvN,B.bvH,B.bvI,B.bpC,B.bpE,B.bpD,B.bpI,B.bpm,B.bpn,B.bpO,B.bpM,B.bpJ,B.bpK,B.bpL,B.bpf,B.bph,B.bpg,B.bp6,B.bp8,B.bp7,B.bp2,B.bpa,B.boT,B.boR,B.bwx,B.bwr,B.bwt,B.bws,B.bwu,B.bwv,B.bwL,B.bwM,B.bwK])
x(A.n2,[B.aVe,B.bsb,B.aVt,B.aVu,B.bvM,B.bpr,B.bpq,B.boV,B.boW,B.bww])
x(A.AV,[B.mD,B.C3,B.Eb,B.Bc])
w(B.Rh,A.hd)
x(A.P,[B.vb,B.At,B.As,B.Ar,B.Au])
x(A.U,[B.Vb,B.Xb,B.Xa,B.X9,B.Xc])
x(A.a4,[B.Ec,B.T_,B.AI,B.ac8])})()
A.od(b.typeUniverse,JSON.parse('{"kN":{"bo":[]},"At":{"P":[],"e":[]},"As":{"P":[],"e":[]},"Ar":{"P":[],"e":[]},"Au":{"P":[],"e":[]},"Rh":{"as":[]},"vb":{"P":[],"e":[]},"Vb":{"U":["vb"]},"Ec":{"a4":[],"e":[]},"T_":{"a4":[],"e":[]},"Xb":{"U":["At"]},"AI":{"a4":[],"e":[]},"Xa":{"U":["As"]},"X9":{"U":["Ar"]},"ac8":{"a4":[],"e":[]},"Xc":{"U":["Au"]}}'))
var y=(function rtii(){var x=A.a3
return{u:x("q7"),c:x("ex<u>"),r:x("d0<u>"),k:x("y<m1>"),n:x("y<ex<u>>"),I:x("y<d0<u>>"),R:x("y<h_>"),Z:x("y<aB<f,@>>"),d:x("y<OA>"),s:x("y<f>"),p:x("y<e>"),t:x("y<u>"),m:x("bi"),j:x("O<@>"),L:x("O<u>"),P:x("aB<f,@>"),f:x("aB<@,@>"),x:x("aj<f,u>"),a:x("bn"),K:x("N"),B:x("F7"),l:x("+(u,u)"),e:x("cC<m1>"),N:x("f"),C:x("Go"),D:x("Gp"),X:x("Ri"),_:x("Gq"),U:x("aH<f>"),G:x("mD"),q:x("oa"),b:x("b3<H?>"),y:x("A"),i:x("J"),z:x("@"),S:x("u"),A:x("bi?"),Y:x("aB<@,@>?"),O:x("N?"),M:x("+quota,usage(u,u)?"),o:x("db"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.lZ=new B.C3(0,"none")
D.m_=new B.C3(1,"learning")
D.e0=new B.C3(2,"memorized")
D.Zb=new A.at(0,1/0,0,320)
D.dH=new A.H(1,0.9725490196078431,0.44313725490196076,0.44313725490196076,C.l)
D.Zk=new A.ap(D.dH,null,null,null,null,null,C.co)
D.d0=new A.H(1,0.984313725490196,0.7490196078431373,0.1411764705882353,C.l)
D.aem=new A.a5(C.BJ,null,C.c3,null,null,null)
D.aZW=new A.t("\u0627\u0644\u0646\u0635 \u0645\u062e\u0641\u064a \u2014 \u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.ek,null,null,null,null,null,null,null,null)
D.aP4=new A.r(!0,C.eX,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aY6=new A.t("(\u062f\u0648\u0633 \u0647\u0646\u0627 \u0644\u0648 \u0639\u0627\u064a\u0632 \u062a\u0628\u0635)",null,D.aP4,null,null,null,null,null,null,null,null)
D.aqf=x([D.aem,C.T,D.aZW,D.aY6],y.p)
D.a4X=new A.j8(C.w,C.f,C.h,C.j,null,C.b2,null,0,D.aqf,null)
D.a8n=new A.Z(0,18,0,18)
D.a8r=new A.Z(0,26,0,26)
D.a8x=new A.Z(0,4,0,6)
D.a8M=new A.Z(14,12,14,14)
D.a9l=new A.Z(3,0,0,0)
D.abC=new A.a2(63251,"MaterialIcons",null,!1)
D.nd=new A.a2(63677,"MaterialIcons",null,!1)
D.ac8=new A.a2(983256,"MaterialIcons",null,!1)
D.ac6=new A.a2(983209,"MaterialIcons",null,!1)
D.acB=new A.a5(D.ac6,28,C.p,null,null,null)
D.ad3=new A.a5(C.Bs,null,N.hl,null,null,null)
D.abs=new A.a2(62961,"MaterialIcons",null,!1)
D.adm=new A.a5(D.abs,null,null,null,null,null)
D.abA=new A.a2(63199,"MaterialIcons",null,!1)
D.adn=new A.a5(D.abA,null,null,null,null,null)
D.adq=new A.a5(C.hx,null,C.eX,null,null,null)
D.ads=new A.a5(C.kL,44,C.i,null,null,null)
D.adK=new A.a5(D.nd,null,D.dH,null,null,null)
D.adT=new A.a5(C.tK,null,D.dH,null,null,null)
D.ae2=new A.a5(C.Bo,null,null,null,null,null)
D.ae3=new A.a5(D.nd,null,null,null,null,null)
D.C3=new A.a5(C.ni,null,null,null,null,null)
D.aek=new A.a5(C.kI,20,D.d0,null,null,null)
D.aex=new A.a5(C.nf,30,C.p,null,null,null)
D.aeP=new A.a5(C.ng,16,C.p,null,null,null)
D.abP=new A.a2(63520,"MaterialIcons",null,!1)
D.af0=new A.a5(D.abP,null,null,null,null,null)
D.af5=new A.a5(C.kK,null,null,null,null,null)
D.afa=new A.a5(C.Be,null,null,null,null,null)
D.CN=x([1,3,5],y.t)
D.DA=x(["\u0627\u0639\u0648\u0630","\u0628\u0627\u0644\u0644\u0647","\u0645\u0646","\u0627\u0644\u0634\u064a\u0637\u0627\u0646","\u0627\u0644\u0631\u062c\u064a\u0645"],y.s)
D.aAH=new A.a_(C.hs,T.qy,null)
D.anX=x([D.aAH],y.p)
D.aE0=new A.R(C.iY,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0629 \u0628\u0635\u0648\u062a \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062d\u0635\u0631\u064a (\u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645) \u0645\u0631\u0629 \u0623\u0648 \u0663 \u0623\u0648 \u0665 \u0645\u0631\u0627\u062a.")
D.aDT=new A.R(D.nd,"\u0633\u0645\u0651\u0639\u0647\u0627 \u0645\u0646 \u062d\u0641\u0638\u0643 \u2014 \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0644\u0648\u0651\u0646\u0644\u0643 \u0643\u0644 \u0643\u0644\u0645\u0629: \u0623\u062e\u0636\u0631 \u0635\u062d\u060c \u0623\u0635\u0641\u0631 \u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0623\u062d\u0645\u0631 \u063a\u0644\u0637.")
D.aEd=new A.R(C.fx,"\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0645\u0627 \u062a\u0633\u0645\u0651\u0639\u0647\u0627 \u0635\u062d \u0645\u0631\u062a\u064a\u0646 \u0648\u0631\u0627 \u0628\u0639\u0636 (\u062a\u0642\u062f\u0631 \u062a\u063a\u064a\u0651\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a).")
D.abW=new A.a2(63625,"MaterialIcons",null,!1)
D.aEm=new A.R(D.abW,"\u0643\u0644 \u062f\u0647 \u0628\u064a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u2014 \u0635\u0648\u062a\u0643 \u0645\u0634 \u0628\u064a\u062a\u0631\u0641\u0639 \u0639\u0644\u0649 \u0623\u064a \u0633\u064a\u0631\u0641\u0631.")
D.apu=x([D.aE0,D.aDT,D.aEd,D.aEm],A.a3("y<+(a2,f)>"))
D.arh=x([D.lZ,D.m_,D.e0],A.a3("y<C3>"))
D.I2=x(["\u0628\u0633\u0645","\u0627\u0644\u0644\u0647","\u0627\u0644\u0631\u062d\u0645\u0646","\u0627\u0644\u0631\u062d\u064a\u0645"],y.s)
D.axO=new B.Eb(0,"idle")
D.O9=new B.Eb(1,"loading")
D.hP=new B.Eb(2,"ready")
D.axP=new B.Eb(3,"failed")
D.adI=new A.a5(C.dd,18,G.c4,null,null,null)
D.b_z=new A.t("\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u062c\u0627\u0647\u0632 \u064a\u0633\u0645\u0639\u0643",null,K.pu,null,null,null,null,null,null,null,null)
D.ana=x([D.adI,C.by,D.b_z],y.p)
D.aJB=new A.im(C.az,C.f,C.h,C.j,null,C.b2,null,0,D.ana,null)
D.azZ=new A.a_(C.aA,D.aJB,null)
D.a9i=new A.Z(2,6,2,4)
D.aOJ=new A.r(!0,C.p,null,null,null,null,14,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUL=new A.t("\u0627\u0628\u062f\u0623 \u0645\u0646 \u0647\u0646\u0627 \u2014 \u0627\u0644\u0641\u0627\u062a\u062d\u0629 \u0648\u062c\u0632\u0621 \u0639\u0645\u0651",null,D.aOJ,null,null,null,null,null,null,null,null)
D.aA7=new A.a_(D.a9i,D.aUL,null)
D.b_I=new A.t("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.ek,null,null,null,null,null,null,null,null)
D.aoc=x([O.pc,C.as,D.b_I],y.p)
D.aJz=new A.im(C.az,C.c8,C.h,C.j,null,C.b2,null,0,D.aoc,null)
D.aAe=new A.a_(Q.rA,D.aJz,null)
D.wM=new A.r(!0,D.d0,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b_Q=new A.t("\u0646\u0635\u064a\u062d\u0629: \u0627\u062d\u0641\u0638 \u0663\u2013\u0665 \u0622\u064a\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0631\u0629 \u0623\u0633\u0647\u0644.",null,D.wM,null,null,null,null,null,null,null,null)
D.aAh=new A.a_(C.fw,D.b_Q,null)
D.b_v=new A.t("\u0644\u0633\u0647 \u0645\u0633\u0645\u0651\u0639\u062a\u0634 \u0623\u064a \u0622\u064a\u0629 \u2014 \u0627\u0628\u062f\u0623 \u0628\u0633\u0648\u0631\u0629 \u0642\u0635\u064a\u0631\u0629 \u0645\u0646 \u062c\u0632\u0621 \u0639\u0645\u0651.",null,F.ak,C.ac,null,null,null,null,null,null,null)
D.aAn=new A.a_(C.D,D.b_v,null)
D.a9f=new A.Z(2,0,2,8)
D.aYe=new A.t("\u0627\u0644\u0633\u0648\u0631 \u0627\u0644\u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u060c \u0645\u0646 \u0627\u0644\u0646\u0627\u0633 \u0644\u062d\u062f \u0627\u0644\u0646\u0628\u0623.",null,F.ak,null,null,null,null,null,null,null,null)
D.aAB=new A.a_(D.a9f,D.aYe,null)
D.aeV=new A.a5(C.hy,30,C.p,null,null,null)
D.aTl=new A.r(!0,C.i,null,null,null,null,17,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b0d=new A.t("\u0633\u0645\u0651\u0639\u060c \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0642\u0648\u0644\u0643 \u0635\u062d \u0648\u0644\u0627 \u063a\u0644\u0637",null,D.aTl,null,null,null,null,null,null,null,null)
D.a9W=new A.dD(1,C.aU,D.b0d,null)
D.aop=x([D.aeV,C.aV,D.a9W],y.p)
D.aJr=new A.im(C.az,C.f,C.h,C.j,null,C.b2,null,0,D.aop,null)
D.aeF=new A.a5(C.fx,18,G.c4,null,null,null)
D.V_=new A.r(!0,G.c4,null,null,null,null,12,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b_g=new A.t("\u0645\u062d\u0641\u0648\u0638\u0629",null,D.V_,null,null,null,null,null,null,null,null)
D.any=x([D.aeF,C.fU,D.b_g],y.p)
D.aJy=new A.im(C.az,C.f,C.V,C.j,null,C.b2,null,0,D.any,null)
D.aLI=new A.G(0,30)
D.pb=new A.G(1/0,54)
D.aLT=new A.G(1/0,48)
D.aLW=new A.G(1/0,50)
D.aLZ=new A.G(1/0,52)
D.aM1=new A.cq(16,null,null,null)
D.aM5=new A.cq(14,14,O.yB,null)
D.aZ8=new A.t("safe mode / no-gpu flags cleared (reload)",null,null,null,null,null,null,null,null,null,null)
D.aMy=new A.hJ(D.aZ8,null,null,null,null,null,null,null,null,null,null,null,null,C.A,!1,null,null,null,C.k,null)
D.aOb=new A.r(!0,C.i,null,null,null,null,14.5,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOB=new A.r(!0,C.a6,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.wE=new A.r(!0,D.dH,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPP=new A.r(!0,C.i,null,null,null,null,12,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ia=new A.r(!0,C.i,null,"AmiriQuranMT",null,null,27,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRi=new A.r(!0,C.cr,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.V2=new A.r(!0,D.dH,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRG=new A.r(!0,C.p,null,null,null,null,24,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.V5=new A.r(!0,C.i,null,null,null,null,12.5,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRU=new A.r(!0,C.p,null,null,null,null,null,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSv=new A.r(!0,D.d0,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSw=new A.r(!0,G.c4,null,null,null,null,null,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSO=new A.r(!0,C.i,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUb=new A.t("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u062e\u0631 \u0645\u0631\u0629",null,C.ic,null,null,null,null,null,null,null,null)
D.aUx=new A.t("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643 (\u062e\u0628\u0651\u064a \u0627\u0644\u0646\u0635)",null,C.cW,null,null,null,null,null,null,null,null)
D.aUN=new A.t("\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,C.po,null,null,null,null,null,null,null,null)
D.aUQ=new A.t("\u2022 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641: \u0645\u0634\u0631\u0648\u0639 \u062a\u0646\u0632\u064a\u0644 Tanzil (\u062a\u0631\u062e\u064a\u0635 CC BY 3.0).",null,F.ak,null,null,null,null,null,null,null,null)
D.aPN=new A.r(!0,G.c4,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUX=new A.t("\u0648\u0635\u0644\u062a\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2014 \u0634\u0643\u0631\u064b\u0627\u060c \u0647\u0646\u0628\u0635 \u0639\u0644\u064a\u0647\u0627.",null,D.aPN,null,null,null,null,null,null,null,null)
D.aV_=new A.t("\u062e\u0628\u0651\u064a \u0646\u0635 \u0627\u0644\u0622\u064a\u0629 \u0648\u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,F.ak,null,null,null,null,null,null,null,null)
D.aV5=new A.t("\u0639\u062f\u0651\u064a \u0644\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.ek,null,null,null,null,null,null,null,null)
D.aVN=new A.t("\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0627\u0628\u062f\u0623",null,C.cG,null,null,null,null,null,null,null,null)
D.aWc=new A.t("\u064a\u0644\u0627 \u0646\u0628\u062f\u0623",null,C.cH,null,null,null,null,null,null,null,null)
D.aWg=new A.t("\u0645\u0645\u0643\u0646 \u062a\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 \u062f\u0644\u0648\u0642\u062a\u064a \u0644\u062d\u062f \u0645\u0627 \u064a\u062e\u0644\u0635.",null,F.ak,null,null,null,null,null,null,null,null)
D.aWy=new A.t("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.wN,null,null,null,null,null,null,null,null)
D.aWW=new A.t("\u062c\u0631\u0651\u0628 \u0639\u0644\u0649 \u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a (\u0644\u0644\u062a\u062c\u0631\u0628\u0629)",null,null,null,null,null,null,null,null,null,null)
D.aXe=new A.t("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643",null,K.lz,null,null,null,null,null,null,null,null)
D.aXA=new A.t("reset safe mode / WebGPU ban",null,C.wA,null,null,null,null,null,null,null,null)
D.aXF=new A.t("\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629",null,D.wM,null,null,null,null,null,null,null,null)
D.aXJ=new A.t("\u0628\u0639\u062f \u062d\u0648\u0627\u0644\u064a \u062b\u0627\u0646\u064a\u0629 \u0633\u0643\u0648\u062a",null,F.ak,null,null,null,null,null,null,null,null)
D.aXY=new A.t("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636",null,F.b_,null,null,null,null,null,null,null,null)
D.aY5=new A.t("\u0623\u062e\u0636\u0631: \u0645\u062d\u0641\u0648\u0638\u0629 \u2014 \u0623\u0635\u0641\u0631: \u0628\u062a\u0631\u0627\u062c\u0639\u0647\u0627 \u2014 \u0631\u0645\u0627\u062f\u064a: \u0644\u0633\u0647",null,F.ak,null,null,null,null,null,null,null,null)
D.aYf=new A.t("\u0645\u0641\u064a\u0634 \u0633\u0648\u0631\u0629 \u0628\u0627\u0644\u0627\u0633\u0645 \u062f\u0647",null,F.ak,null,null,null,null,null,null,null,null)
D.aTn=new A.r(!0,C.p,null,null,null,null,12.5,C.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZ0=new A.t("\u0627\u0628\u0639\u062a \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aTn,null,null,null,null,null,null,null,null)
D.aR2=new A.r(!0,D.dH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZ1=new A.t("\u0627\u0628\u062f\u0623 \u0627\u0644\u0633\u0648\u0631\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644",null,D.aR2,null,null,null,null,null,null,null,null)
D.aZg=new A.t("\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f \u0643\u0627\u0645 \u062a\u0633\u0645\u064a\u0639 \u0635\u062d \u0648\u0631\u0627 \u0628\u0639\u0636\u061f",null,K.lz,null,null,null,null,null,null,null,null)
D.aNY=new A.r(!0,C.i,null,null,null,null,null,C.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZw=new A.t("\u0627\u0644\u0645\u0635\u0627\u062f\u0631",null,D.aNY,null,null,null,null,null,null,null,null)
D.aZG=new A.t("\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.cG,null,null,null,null,null,null,null,null)
D.aZT=new A.t("\u062a\u0645\u0633\u062d \u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0633\u0648\u0631\u0629 \u062f\u064a\u061f",null,null,null,null,null,null,null,null,null,null)
D.b_1=new A.t("\u0633\u0645\u0651\u0639\u0647\u0645 \u062a\u0627\u0646\u064a",null,null,null,null,null,null,null,null,null,null)
D.b_n=new A.t("\u0627\u0645\u0633\u062d",null,null,null,null,null,null,null,null,null,null)
D.b_o=new A.t("\u2022 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: whisper-base-ar-quran \u0645\u0646 Tarteel (\u062a\u0631\u062e\u064a\u0635 Apache-2.0)\u060c \u0628\u0635\u064a\u063a\u0629 ONNX \u0645\u0646 \u0645\u0634\u0631\u0648\u0639 Basira\u060c \u0648\u0628\u064a\u0634\u062a\u063a\u0644 \u062c\u0648\u0651\u0647 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0628\u0645\u0643\u062a\u0628\u0629 Transformers.js.",null,F.ak,null,null,null,null,null,null,null,null)
D.b_p=new A.t("\u062e\u0644\u0635\u062a",null,C.jK,null,null,null,null,null,null,null,null)
D.b_q=new A.t("\u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647 \u0630\u0627\u0643\u0631\u062a\u0647 \u0642\u0644\u064a\u0644\u0629 \u2014 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0645\u0643\u0646 \u064a\u0643\u0648\u0646 \u0628\u0637\u064a\u0621 \u0639\u0644\u064a\u0647.",null,D.wM,null,null,null,null,null,null,null,null)
D.aRW=new A.r(!0,C.cr,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,C.fX,null,null,null,null,null,null,null,null)
D.b_N=new A.t("\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.aRW,null,null,null,null,null,null,null,null)
D.b_T=new A.t("\u0623\u0648\u0644 \u0645\u0631\u0629 \u0628\u0633: \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,F.b_,null,null,null,null,null,null,null,null)
D.b_V=new A.t("\u0648\u0642\u0651\u0641 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0644\u0648\u062d\u062f\u0647 \u0644\u0645\u0627 \u0623\u0633\u0643\u062a",null,C.cW,null,null,null,null,null,null,null,null)
D.b0c=new A.t("\u2022 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: \u0627\u0644\u0634\u064a\u062e \u0645\u062d\u0645\u0648\u062f \u062e\u0644\u064a\u0644 \u0627\u0644\u062d\u0635\u0631\u064a \u2014 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645\u060c \u0645\u0646 everyayah.com.",null,F.ak,null,null,null,null,null,null,null,null)
D.VN=new B.ac8(null)
D.b0T=new B.Ar(null)
D.b0U=new B.Rg(2,1,!0,!1,!1)
D.VO=new B.Ri(!1,!1,!1,!1,!1,0)
D.h4=new B.mD(0,"ok")
D.pJ=new B.mD(1,"near")
D.pK=new B.mD(2,"wrong")
D.pL=new B.mD(3,"missing")
D.Wc=new B.mD(4,"extra")
D.abL=new A.a2(63456,"MaterialIcons",null,!1)
D.b6m=new B.AI(D.d0,D.abL,"\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629","\u0642\u0631\u0651\u0628 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0646\u0643 \u0648\u0627\u0642\u0631\u0627 \u0628\u0635\u0648\u062a \u0648\u0627\u0636\u062d \u0641\u064a \u0645\u0643\u0627\u0646 \u0647\u0627\u062f\u064a\u060c \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a.",null)
D.b6H=new B.T_(!1,null)
D.xj=new B.T_(!0,null)
D.jX=new B.Bc(0,"idle")
D.pW=new B.Bc(1,"playing")
D.pX=new B.Bc(2,"recording")
D.lR=new B.Bc(3,"thinking")
D.ha=new B.Bc(4,"result")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cce","bCf",()=>new B.ac9())
x($,"cfp","bR1",()=>A.aQ("\u0640[\u064b-\u0652]*\u0670",!0,!1))
x($,"cfq","bR2",()=>A.aQ("\u0640[\u064b-\u0652]*[\u06e6\u06e7]",!0,!1))
x($,"cfB","bRa",()=>A.aQ("\u0648\u0670",!0,!1))
x($,"ceZ","bQJ",()=>A.aQ("[\u0648\u064a\u0649][\u064b-\u0652]*[\u0654]",!0,!1))
x($,"cdu","bPL",()=>A.aQ("\u0627[\u0654\u0655]",!0,!1))
x($,"ceB","bQs",()=>A.aQ("[\u0654\u0655]",!0,!1))
x($,"cdv","bPM",()=>A.aQ("[\u0622\u0623\u0625\u0671\u0672\u0673]",!0,!1))
x($,"cdB","bPR",()=>A.aQ("[\u0624\u0626]",!0,!1))
x($,"ceD","bQu",()=>A.aQ("[\u064b-\u065f\u0670\u06d6-\u06ed\u08d3-\u08ff\u0640]",!0,!1))
x($,"cf3","bQM",()=>A.aQ("[\u06dd\u06de\u0660-\u0669\u06f0-\u06f90-9]",!0,!1))
x($,"ceK","bQA",()=>A.aQ("[^\u0621-\u064a\\s]",!0,!1))
x($,"cfo","bCQ",()=>A.aQ("\\s+",!0,!1))
x($,"c9y","pX",()=>B.bS5(D.lZ,0,A.by2(0,!0)))
x($,"ccf","Jg",()=>new B.Rh($.bCf(),D.b0U,B.c_2(),D.axO,$.a7()))})()};
(a=>{a["EC7tBWdtx5FLXN7gAA28TPgSCCs="]=a.current})($__dart_deferred_initializers__);