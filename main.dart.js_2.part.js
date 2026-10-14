((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aJt(){var x=$.bw_
return x==null?$.bw_=new B.aJu().$0():x},
bTU(d){var x,w,v,u,t,s,r,q,p,o,n,m=J.lh(114,y.B)
for(x=y.w,w=0;w<114;++w)m[w]=A.c3(D.bZ[w].a[1],"",!1,x)
v=new A.d6("")
for(x=d.split("\n"),u=x.length,t=0;t<u;++t){s=x[t]
r=C.c.h5(s,"\r")?C.c.Y(s,0,s.length-1):s
if(r.length===0)continue
if(C.c.bz(r,"#")){v.a+=r+"\n"
continue}q=C.c.ff(r,"|")
p=q<0?-1:C.c.iH(r,"|",q+1)
if(p<0)continue
o=A.f7(C.c.Y(r,0,q),null)
n=A.f7(C.c.Y(r,q+1,p),null)
if(o==null||n==null||o<1||o>114||n<1||n>m[o-1].length)continue
m[o-1][n-1]=C.c.bW(r,p+1)}x=v.a
return new B.ns(m,C.c.FB(x.charCodeAt(0)==0?x:x))},
Il(d,e,f){var x,w,v
if(d===1||d===9||e!==1)return new A.Hj(null,f)
x=A.a(f.split(" "),y.x)
if(x.length>4){w=y.w
v=A.fj(x,0,A.ir(4,"count",y.C),w).aO(0," ")
if(B.bs_(v)===$.bMf())return new A.Hj(v,A.fj(x,4,null,w).aO(0," "))}return new A.Hj(null,f)},
bs_(d){var x,w,v,u=new A.d6("")
for(x=new A.ED(d);x.u();){w=x.d
v=!0
if(!(w>=1611&&w<=1631))if(w!==1648)v=w>=1750&&w<=1773||w===1600
if(v)continue
A:{if(1570===w||1571===w||1573===w||1649===w){v=A.dV(1575)
u.a+=v
break A}if(1577===w){v=A.dV(1607)
u.a+=v
break A}if(1609===w){v=A.dV(1610)
u.a+=v
break A}v=A.dV(w)
u.a+=v}}x=u.a
return C.c.ap(x.charCodeAt(0)==0?x:x).toLowerCase()},
bJB(d){var x,w,v,u,t,s,r={},q=B.bs_(B.c0Y(d))
r.a=q
r.a=C.c.ap(C.c.fZ(q,A.aP("^\u0633\u0648\u0631\u0647\\s*",!0,!1),""))
x=y.r
w=A.a([],x)
for(v=1;v<=114;++v)w.push(v)
u=r.a
if(u.length===0)return w
t=A.f7(u,null)
if(t!=null)return t>=1&&t<=114?A.a([t],x):C.tT
x=r.a
u=A.aP("[\\s'\\-]",!0,!1)
s=y.a
x=A.a1(new A.aD(w,new B.bsN(r,A.bQ(x,u,"")),s),s.i("L.E"))
return x},
c0Y(d){return A.B9(d,A.aP("[\u0660-\u0669]",!0,!1),new B.bqu(),null)},
ns:function ns(d,e){this.a=d
this.b=e},
aJu:function aJu(){},
bsN:function bsN(d,e){this.a=d
this.b=e},
bqu:function bqu(){},
bvZ(){var x=$.bDH
return x==null?$.bDH=new B.aJq().$0():x},
js(d){return"\u0633\u0648\u0631\u0629 "+D.bZ[d-1].a[0]},
aJq:function aJq(){}},E,F,D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[13],B)
E=c[37]
F=c[14]
D=c[28]
B.ns.prototype={
vb(d,e){return this.a[d-1][e-1]}}
var z=a.updateTypes(["a9<ns>()"])
B.aJu.prototype={
$0(){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d($.wz().hL("assets/quran/quran-uthmani.txt.gz"),$async$$0)
case 7:s=e
x=8
return A.d(F.aq6(J.eR(J.bzK(s),s.byteOffset,s.byteLength)),$async$$0)
case 8:r=e
q=B.bTU(r)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
$.bw_=null
throw o
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:z+0}
B.bsN.prototype={
$1(d){var x=d-1,w=B.bs_(D.bZ[x].a[0]),v=this.a
if(C.c.m(w,v.a)||C.c.m(C.c.fZ(w,A.aP("^\u0627\u0644",!0,!1),""),v.a))return!0
x=D.bZ[x].a[3]
v=A.aP("[\\s'\\-]",!0,!1)
return C.c.m(A.bQ(x.toLowerCase(),v,""),this.b)},
$S:61}
B.bqu.prototype={
$1(d){var x=d.h(0,0)
x.toString
return""+(x.charCodeAt(0)-1632)},
$S:57}
B.aJq.prototype={
$0(){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=new A.a28("AmiriQuranMT",A.a([],y.p))
r.ac4($.wz().hL("assets/quran/AmiriQuran-Regular.ttf"))
s=r
x=7
return A.d(s.tn(),$async$$0)
case 7:$.bDI=!0
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
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:201};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ns,A.N)
w(A.kb,[B.aJu,B.aJq])
w(A.hJ,[B.bsN,B.bqu])})()
var y={p:A.a0("y<a9<jV>>"),x:A.a0("y<h>"),r:A.a0("y<v>"),B:A.a0("R<h>"),u:A.a0("ns"),w:A.a0("h"),a:A.a0("aD<v>"),e:A.a0("A"),C:A.a0("v")};(function constants(){E.qC=new A.H(0.25882352941176473,0,0,0,C.k)
E.zx=new A.a_(12,10,12,10)
E.w3=new A.fn(" ",null,null,C.bn,null,null,null,null,null,null,null)})();(function staticFields(){$.bw_=null
$.bDH=null
$.bDI=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c9N","bMf",()=>B.bs_("\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650"))})()};
(a=>{a["TBRfH2bRw5YJ4f0bijhqa5R7cr4="]=a.current})($__dart_deferred_initializers__);