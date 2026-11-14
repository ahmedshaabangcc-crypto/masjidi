((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aL6(){var x=$.bzY
return x==null?$.bzY=new B.aL7().$0():x},
bY8(d){var x,w,v,u,t,s,r,q,p,o,n,m=J.kv(114,y.B)
for(x=y.w,w=0;w<114;++w)m[w]=A.bW(D.c9[w].a[1],"",!1,x)
v=new A.db("")
for(x=d.split("\n"),u=x.length,t=0;t<u;++t){s=x[t]
r=C.c.fY(s,"\r")?C.c.Y(s,0,s.length-1):s
if(r.length===0)continue
if(C.c.bA(r,"#")){v.a+=r+"\n"
continue}q=C.c.f6(r,"|")
p=q<0?-1:C.c.iN(r,"|",q+1)
if(p<0)continue
o=A.f2(C.c.Y(r,0,q),null)
n=A.f2(C.c.Y(r,q+1,p),null)
if(o==null||n==null||o<1||o>114||n<1||n>m[o-1].length)continue
m[o-1][n-1]=C.c.bZ(r,p+1)}x=v.a
return new B.nF(m,C.c.FX(x.charCodeAt(0)==0?x:x))},
Ja(d,e,f){var x,w,v
if(d===1||d===9||e!==1)return new A.I6(null,f)
x=A.a(f.split(" "),y.x)
if(x.length>4){w=y.w
v=A.eS(x,0,A.ib(4,"count",y.C),w).aJ(0," ")
if(B.bvW(v)===$.bQn())return new A.I6(v,A.eS(x,4,null,w).aJ(0," "))}return new A.I6(null,f)},
bvW(d){var x,w,v,u=new A.db("")
for(x=new A.Fn(d);x.u();){w=x.d
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
return C.c.ai(x.charCodeAt(0)==0?x:x).toLowerCase()},
bNG(d){var x,w,v,u,t,s,r={},q=B.bvW(B.c5e(d))
r.a=q
r.a=C.c.ai(C.c.fO(q,A.aO("^\u0633\u0648\u0631\u0647\\s*",!0,!1),""))
x=y.r
w=A.a([],x)
for(v=1;v<=114;++v)w.push(v)
u=r.a
if(u.length===0)return w
t=A.f2(u,null)
if(t!=null)return t>=1&&t<=114?A.a([t],x):C.uw
x=r.a
u=A.aO("[\\s'\\-]",!0,!1)
s=y.a
x=A.a0(new A.aF(w,new B.bwH(r,A.bR(x,u,"")),s),s.i("M.E"))
return x},
c5e(d){return A.BP(d,A.aO("[\u0660-\u0669]",!0,!1),new B.bu9(),null)},
nF:function nF(d,e){this.a=d
this.b=e},
aL7:function aL7(){},
bwH:function bwH(d,e){this.a=d
this.b=e},
bu9:function bu9(){},
bzX(){var x=$.bHL
return x==null?$.bHL=new B.aL3().$0():x},
jF(d){return"\u0633\u0648\u0631\u0629 "+D.c9[d-1].a[0]},
aL3:function aL3(){}},E,F,D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[13],B)
E=c[36]
F=c[14]
D=c[27]
B.nF.prototype={
vo(d,e){return this.a[d-1][e-1]}}
var z=a.updateTypes(["aa<nF>()"])
B.aL7.prototype={
$0(){var x=0,w=A.o(y.u),v,u=2,t=[],s,r,q,p,o
var $async$$0=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d($.wZ().kj("assets/quran/quran-uthmani.txt.gz"),$async$$0)
case 7:s=e
x=8
return A.d(F.arm(J.eX(J.bDL(s),s.byteOffset,s.byteLength)),$async$$0)
case 8:r=e
q=B.bY8(r)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
$.bzY=null
throw o
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:z+0}
B.bwH.prototype={
$1(d){var x=d-1,w=B.bvW(D.c9[x].a[0]),v=this.a
if(C.c.m(w,v.a)||C.c.m(C.c.fO(w,A.aO("^\u0627\u0644",!0,!1),""),v.a))return!0
x=D.c9[x].a[3]
v=A.aO("[\\s'\\-]",!0,!1)
return C.c.m(A.bR(x.toLowerCase(),v,""),this.b)},
$S:62}
B.bu9.prototype={
$1(d){var x=d.h(0,0)
x.toString
return""+(x.charCodeAt(0)-1632)},
$S:60}
B.aL3.prototype={
$0(){var x=0,w=A.o(y.e),v,u=2,t=[],s,r,q,p
var $async$$0=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=new A.a3i("AmiriQuranMT",A.a([],y.p))
r.acZ($.wZ().kj("assets/quran/AmiriQuran-Regular.ttf"))
s=r
x=7
return A.d(s.tw(),$async$$0)
case 7:$.bHM=!0
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
$S:181};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.nF,A.N)
w(A.ki,[B.aL7,B.aL3])
w(A.hW,[B.bwH,B.bu9])})()
var y={p:A.a3("y<aa<k2>>"),x:A.a3("y<h>"),r:A.a3("y<t>"),B:A.a3("Q<h>"),u:A.a3("nF"),w:A.a3("h"),a:A.a3("aF<t>"),e:A.a3("A"),C:A.a3("t")};(function constants(){E.r2=new A.H(0.25882352941176473,0,0,0,C.l)
E.Aj=new A.a_(12,10,12,10)
E.wJ=new A.f4(" ",null,null,C.bg,null,null,null,null,null,null,null)})();(function staticFields(){$.bzY=null
$.bHL=null
$.bHM=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ce9","bQn",()=>B.bvW("\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650"))})()};
(a=>{a["oUxc3mal9HFKHC7YJRJwQa6Dpbg="]=a.current})($__dart_deferred_initializers__);