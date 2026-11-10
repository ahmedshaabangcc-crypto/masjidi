((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aLf(){var x=$.bA7
return x==null?$.bA7=new B.aLg().$0():x},
bYk(d){var x,w,v,u,t,s,r,q,p,o,n,m=J.kz(114,y.B)
for(x=y.w,w=0;w<114;++w)m[w]=A.bR(D.c8[w].a[1],"",!1,x)
v=new A.db("")
for(x=d.split("\n"),u=x.length,t=0;t<u;++t){s=x[t]
r=C.c.fX(s,"\r")?C.c.Y(s,0,s.length-1):s
if(r.length===0)continue
if(C.c.bA(r,"#")){v.a+=r+"\n"
continue}q=C.c.f7(r,"|")
p=q<0?-1:C.c.iO(r,"|",q+1)
if(p<0)continue
o=A.f2(C.c.Y(r,0,q),null)
n=A.f2(C.c.Y(r,q+1,p),null)
if(o==null||n==null||o<1||o>114||n<1||n>m[o-1].length)continue
m[o-1][n-1]=C.c.bZ(r,p+1)}x=v.a
return new B.nI(m,C.c.G0(x.charCodeAt(0)==0?x:x))},
Jf(d,e,f){var x,w,v
if(d===1||d===9||e!==1)return new A.Ib(null,f)
x=A.a(f.split(" "),y.x)
if(x.length>4){w=y.w
v=A.eS(x,0,A.id(4,"count",y.C),w).aJ(0," ")
if(B.bw6(v)===$.bQA())return new A.Ib(v,A.eS(x,4,null,w).aJ(0," "))}return new A.Ib(null,f)},
bw6(d){var x,w,v,u=new A.db("")
for(x=new A.Fr(d);x.u();){w=x.d
v=!0
if(!(w>=1611&&w<=1631))if(w!==1648)v=w>=1750&&w<=1773||w===1600
if(v)continue
A:{if(1570===w||1571===w||1573===w||1649===w){v=A.dW(1575)
u.a+=v
break A}if(1577===w){v=A.dW(1607)
u.a+=v
break A}if(1609===w){v=A.dW(1610)
u.a+=v
break A}v=A.dW(w)
u.a+=v}}x=u.a
return C.c.aj(x.charCodeAt(0)==0?x:x).toLowerCase()},
bNT(d){var x,w,v,u,t,s,r={},q=B.bw6(B.c5t(d))
r.a=q
r.a=C.c.aj(C.c.fO(q,A.aO("^\u0633\u0648\u0631\u0647\\s*",!0,!1),""))
x=y.r
w=A.a([],x)
for(v=1;v<=114;++v)w.push(v)
u=r.a
if(u.length===0)return w
t=A.f2(u,null)
if(t!=null)return t>=1&&t<=114?A.a([t],x):C.ux
x=r.a
u=A.aO("[\\s'\\-]",!0,!1)
s=y.a
x=A.a0(new A.aG(w,new B.bwS(r,A.bS(x,u,"")),s),s.i("M.E"))
return x},
c5t(d){return A.BS(d,A.aO("[\u0660-\u0669]",!0,!1),new B.buk(),null)},
nI:function nI(d,e){this.a=d
this.b=e},
aLg:function aLg(){},
bwS:function bwS(d,e){this.a=d
this.b=e},
buk:function buk(){},
bA6(){var x=$.bHU
return x==null?$.bHU=new B.aLc().$0():x},
jG(d){return"\u0633\u0648\u0631\u0629 "+D.c8[d-1].a[0]},
aLc:function aLc(){}},E,F,D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[13],B)
E=c[37]
F=c[14]
D=c[28]
B.nI.prototype={
vn(d,e){return this.a[d-1][e-1]}}
var z=a.updateTypes(["ab<nI>()"])
B.aLg.prototype={
$0(){var x=0,w=A.o(y.u),v,u=2,t=[],s,r,q,p,o
var $async$$0=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d($.x1().hN("assets/quran/quran-uthmani.txt.gz"),$async$$0)
case 7:s=e
x=8
return A.d(F.art(J.eX(J.bDU(s),s.byteOffset,s.byteLength)),$async$$0)
case 8:r=e
q=B.bYk(r)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
$.bA7=null
throw o
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:z+0}
B.bwS.prototype={
$1(d){var x=d-1,w=B.bw6(D.c8[x].a[0]),v=this.a
if(C.c.m(w,v.a)||C.c.m(C.c.fO(w,A.aO("^\u0627\u0644",!0,!1),""),v.a))return!0
x=D.c8[x].a[3]
v=A.aO("[\\s'\\-]",!0,!1)
return C.c.m(A.bS(x.toLowerCase(),v,""),this.b)},
$S:62}
B.buk.prototype={
$1(d){var x=d.h(0,0)
x.toString
return""+(x.charCodeAt(0)-1632)},
$S:60}
B.aLc.prototype={
$0(){var x=0,w=A.o(y.e),v,u=2,t=[],s,r,q,p
var $async$$0=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=new A.a3o("AmiriQuranMT",A.a([],y.p))
r.ad_($.x1().hN("assets/quran/AmiriQuran-Regular.ttf"))
s=r
x=7
return A.d(s.tv(),$async$$0)
case 7:$.bHV=!0
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
$S:182};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.nI,A.N)
w(A.km,[B.aLg,B.aLc])
w(A.hX,[B.bwS,B.buk])})()
var y={p:A.a3("y<ab<k5>>"),x:A.a3("y<h>"),r:A.a3("y<u>"),B:A.a3("Q<h>"),u:A.a3("nI"),w:A.a3("h"),a:A.a3("aG<u>"),e:A.a3("A"),C:A.a3("u")};(function constants(){E.r5=new A.H(0.25882352941176473,0,0,0,C.l)
E.Aq=new A.Z(12,10,12,10)
E.wK=new A.f4(" ",null,null,C.be,null,null,null,null,null,null,null)})();(function staticFields(){$.bA7=null
$.bHU=null
$.bHV=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cem","bQA",()=>B.bw6("\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650"))})()};
(a=>{a["9rvX+2aV6hPlHtErsWy3nXBGcw4="]=a.current})($__dart_deferred_initializers__);