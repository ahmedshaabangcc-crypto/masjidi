((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aJz(){var x=$.bwH
return x==null?$.bwH=new B.aJA().$0():x},
bUE(d){var x,w,v,u,t,s,r,q,p,o,n,m=J.lk(114,y.B)
for(x=y.w,w=0;w<114;++w)m[w]=A.c3(D.c1[w].a[1],"",!1,x)
v=new A.d7("")
for(x=d.split("\n"),u=x.length,t=0;t<u;++t){s=x[t]
r=C.c.h5(s,"\r")?C.c.Y(s,0,s.length-1):s
if(r.length===0)continue
if(C.c.bz(r,"#")){v.a+=r+"\n"
continue}q=C.c.f4(r,"|")
p=q<0?-1:C.c.iI(r,"|",q+1)
if(p<0)continue
o=A.f9(C.c.Y(r,0,q),null)
n=A.f9(C.c.Y(r,q+1,p),null)
if(o==null||n==null||o<1||o>114||n<1||n>m[o-1].length)continue
m[o-1][n-1]=C.c.bU(r,p+1)}x=v.a
return new B.nu(m,C.c.FE(x.charCodeAt(0)==0?x:x))},
Io(d,e,f){var x,w,v
if(d===1||d===9||e!==1)return new A.Hm(null,f)
x=A.a(f.split(" "),y.x)
if(x.length>4){w=y.w
v=A.fb(x,0,A.i1(4,"count",y.C),w).aK(0," ")
if(B.bsH(v)===$.bN_())return new A.Hm(v,A.fb(x,4,null,w).aK(0," "))}return new A.Hm(null,f)},
bsH(d){var x,w,v,u=new A.d7("")
for(x=new A.EF(d);x.u();){w=x.d
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
return C.c.an(x.charCodeAt(0)==0?x:x).toLowerCase()},
bKk(d){var x,w,v,u,t,s,r={},q=B.bsH(B.c1J(d))
r.a=q
r.a=C.c.an(C.c.fZ(q,A.aP("^\u0633\u0648\u0631\u0647\\s*",!0,!1),""))
x=y.r
w=A.a([],x)
for(v=1;v<=114;++v)w.push(v)
u=r.a
if(u.length===0)return w
t=A.f9(u,null)
if(t!=null)return t>=1&&t<=114?A.a([t],x):C.tW
x=r.a
u=A.aP("[\\s'\\-]",!0,!1)
s=y.a
x=A.a2(new A.aE(w,new B.btu(r,A.bT(x,u,"")),s),s.i("M.E"))
return x},
c1J(d){return A.Bd(d,A.aP("[\u0660-\u0669]",!0,!1),new B.bra(),null)},
nu:function nu(d,e){this.a=d
this.b=e},
aJA:function aJA(){},
btu:function btu(d,e){this.a=d
this.b=e},
bra:function bra(){},
bwG(){var x=$.bEo
return x==null?$.bEo=new B.aJw().$0():x},
jt(d){return"\u0633\u0648\u0631\u0629 "+D.c1[d-1].a[0]},
aJw:function aJw(){}},E,F,D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[13],B)
E=c[37]
F=c[14]
D=c[28]
B.nu.prototype={
vd(d,e){return this.a[d-1][e-1]}}
var z=a.updateTypes(["ab<nu>()"])
B.aJA.prototype={
$0(){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d($.wB().hL("assets/quran/quran-uthmani.txt.gz"),$async$$0)
case 7:s=e
x=8
return A.d(F.aqb(J.eT(J.bAq(s),s.byteOffset,s.byteLength)),$async$$0)
case 8:r=e
q=B.bUE(r)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
$.bwH=null
throw o
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:z+0}
B.btu.prototype={
$1(d){var x=d-1,w=B.bsH(D.c1[x].a[0]),v=this.a
if(C.c.m(w,v.a)||C.c.m(C.c.fZ(w,A.aP("^\u0627\u0644",!0,!1),""),v.a))return!0
x=D.c1[x].a[3]
v=A.aP("[\\s'\\-]",!0,!1)
return C.c.m(A.bT(x.toLowerCase(),v,""),this.b)},
$S:67}
B.bra.prototype={
$1(d){var x=d.h(0,0)
x.toString
return""+(x.charCodeAt(0)-1632)},
$S:59}
B.aJw.prototype={
$0(){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=new A.a2d("AmiriQuranMT",A.a([],y.p))
r.ac9($.wB().hL("assets/quran/AmiriQuran-Regular.ttf"))
s=r
x=7
return A.d(s.tp(),$async$$0)
case 7:$.bEp=!0
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
$S:192};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.nu,A.N)
w(A.ke,[B.aJA,B.aJw])
w(A.hK,[B.btu,B.bra])})()
var y={p:A.a1("y<ab<jX>>"),x:A.a1("y<h>"),r:A.a1("y<v>"),B:A.a1("R<h>"),u:A.a1("nu"),w:A.a1("h"),a:A.a1("aE<v>"),e:A.a1("A"),C:A.a1("v")};(function constants(){E.qD=new A.H(0.25882352941176473,0,0,0,C.k)
E.zA=new A.a_(12,10,12,10)
E.w5=new A.f_(" ",null,null,C.bd,null,null,null,null,null,null,null)})();(function staticFields(){$.bwH=null
$.bEo=null
$.bEp=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"caA","bN_",()=>B.bsH("\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650"))})()};
(a=>{a["faxz4Z3RdZ2h3I9Yeggn4sgLKA0="]=a.current})($__dart_deferred_initializers__);