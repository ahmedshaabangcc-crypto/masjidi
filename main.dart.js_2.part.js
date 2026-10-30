((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aL3(){var x=$.bzn
return x==null?$.bzn=new B.aL4().$0():x},
bXy(d){var x,w,v,u,t,s,r,q,p,o,n,m=J.kx(114,y.B)
for(x=y.w,w=0;w<114;++w)m[w]=A.bP(D.c7[w].a[1],"",!1,x)
v=new A.d9("")
for(x=d.split("\n"),u=x.length,t=0;t<u;++t){s=x[t]
r=C.c.h9(s,"\r")?C.c.Y(s,0,s.length-1):s
if(r.length===0)continue
if(C.c.bA(r,"#")){v.a+=r+"\n"
continue}q=C.c.f7(r,"|")
p=q<0?-1:C.c.iN(r,"|",q+1)
if(p<0)continue
o=A.f0(C.c.Y(r,0,q),null)
n=A.f0(C.c.Y(r,q+1,p),null)
if(o==null||n==null||o<1||o>114||n<1||n>m[o-1].length)continue
m[o-1][n-1]=C.c.bZ(r,p+1)}x=v.a
return new B.nB(m,C.c.FW(x.charCodeAt(0)==0?x:x))},
J6(d,e,f){var x,w,v
if(d===1||d===9||e!==1)return new A.I3(null,f)
x=A.a(f.split(" "),y.x)
if(x.length>4){w=y.w
v=A.eQ(x,0,A.i9(4,"count",y.C),w).aK(0," ")
if(B.bvj(v)===$.bPP())return new A.I3(v,A.eQ(x,4,null,w).aK(0," "))}return new A.I3(null,f)},
bvj(d){var x,w,v,u=new A.d9("")
for(x=new A.Fk(d);x.u();){w=x.d
v=!0
if(!(w>=1611&&w<=1631))if(w!==1648)v=w>=1750&&w<=1773||w===1600
if(v)continue
A:{if(1570===w||1571===w||1573===w||1649===w){v=A.e0(1575)
u.a+=v
break A}if(1577===w){v=A.e0(1607)
u.a+=v
break A}if(1609===w){v=A.e0(1610)
u.a+=v
break A}v=A.e0(w)
u.a+=v}}x=u.a
return C.c.al(x.charCodeAt(0)==0?x:x).toLowerCase()},
bN8(d){var x,w,v,u,t,s,r={},q=B.bvj(B.c4G(d))
r.a=q
r.a=C.c.al(C.c.h1(q,A.aQ("^\u0633\u0648\u0631\u0647\\s*",!0,!1),""))
x=y.r
w=A.a([],x)
for(v=1;v<=114;++v)w.push(v)
u=r.a
if(u.length===0)return w
t=A.f0(u,null)
if(t!=null)return t>=1&&t<=114?A.a([t],x):C.uk
x=r.a
u=A.aQ("[\\s'\\-]",!0,!1)
s=y.a
x=A.a0(new A.aH(w,new B.bw6(r,A.bY(x,u,"")),s),s.i("M.E"))
return x},
c4G(d){return A.BL(d,A.aQ("[\u0660-\u0669]",!0,!1),new B.btz(),null)},
nB:function nB(d,e){this.a=d
this.b=e},
aL4:function aL4(){},
bw6:function bw6(d,e){this.a=d
this.b=e},
btz:function btz(){},
bzm(){var x=$.bHa
return x==null?$.bHa=new B.aL0().$0():x},
jD(d){return"\u0633\u0648\u0631\u0629 "+D.c7[d-1].a[0]},
aL0:function aL0(){}},E,F,D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[13],B)
E=c[37]
F=c[14]
D=c[28]
B.nB.prototype={
vm(d,e){return this.a[d-1][e-1]}}
var z=a.updateTypes(["ab<nB>()"])
B.aL4.prototype={
$0(){var x=0,w=A.o(y.u),v,u=2,t=[],s,r,q,p,o
var $async$$0=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d($.wX().hN("assets/quran/quran-uthmani.txt.gz"),$async$$0)
case 7:s=e
x=8
return A.d(F.arl(J.eV(J.bD9(s),s.byteOffset,s.byteLength)),$async$$0)
case 8:r=e
q=B.bXy(r)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
$.bzn=null
throw o
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:z+0}
B.bw6.prototype={
$1(d){var x=d-1,w=B.bvj(D.c7[x].a[0]),v=this.a
if(C.c.m(w,v.a)||C.c.m(C.c.h1(w,A.aQ("^\u0627\u0644",!0,!1),""),v.a))return!0
x=D.c7[x].a[3]
v=A.aQ("[\\s'\\-]",!0,!1)
return C.c.m(A.bY(x.toLowerCase(),v,""),this.b)},
$S:64}
B.btz.prototype={
$1(d){var x=d.h(0,0)
x.toString
return""+(x.charCodeAt(0)-1632)},
$S:56}
B.aL0.prototype={
$0(){var x=0,w=A.o(y.e),v,u=2,t=[],s,r,q,p
var $async$$0=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=new A.a3j("AmiriQuranMT",A.a([],y.p))
r.acN($.wX().hN("assets/quran/AmiriQuran-Regular.ttf"))
s=r
x=7
return A.d(s.tw(),$async$$0)
case 7:$.bHb=!0
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:143};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.nB,A.N)
w(A.kl,[B.aL4,B.aL0])
w(A.hU,[B.bw6,B.btz])})()
var y={p:A.a3("y<ab<k4>>"),x:A.a3("y<f>"),r:A.a3("y<u>"),B:A.a3("O<f>"),u:A.a3("nB"),w:A.a3("f"),a:A.a3("aH<u>"),e:A.a3("A"),C:A.a3("u")};(function constants(){E.qT=new A.H(0.25882352941176473,0,0,0,C.l)
E.A9=new A.Z(12,10,12,10)
E.ww=new A.f2(" ",null,null,C.be,null,null,null,null,null,null,null)})();(function staticFields(){$.bzn=null
$.bHa=null
$.bHb=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cdz","bPP",()=>B.bvj("\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650"))})()};
(a=>{a["6vZiLJLNsnsKGb7c++gJS8e3IRc="]=a.current})($__dart_deferred_initializers__);