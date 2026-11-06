((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aLd(){var x=$.bA6
return x==null?$.bA6=new B.aLe().$0():x},
bYh(d){var x,w,v,u,t,s,r,q,p,o,n,m=J.kz(114,y.B)
for(x=y.w,w=0;w<114;++w)m[w]=A.bR(D.c7[w].a[1],"",!1,x)
v=new A.db("")
for(x=d.split("\n"),u=x.length,t=0;t<u;++t){s=x[t]
r=C.c.h9(s,"\r")?C.c.Y(s,0,s.length-1):s
if(r.length===0)continue
if(C.c.bA(r,"#")){v.a+=r+"\n"
continue}q=C.c.f7(r,"|")
p=q<0?-1:C.c.iO(r,"|",q+1)
if(p<0)continue
o=A.f2(C.c.Y(r,0,q),null)
n=A.f2(C.c.Y(r,q+1,p),null)
if(o==null||n==null||o<1||o>114||n<1||n>m[o-1].length)continue
m[o-1][n-1]=C.c.bZ(r,p+1)}x=v.a
return new B.nF(m,C.c.G0(x.charCodeAt(0)==0?x:x))},
Je(d,e,f){var x,w,v
if(d===1||d===9||e!==1)return new A.Ia(null,f)
x=A.a(f.split(" "),y.x)
if(x.length>4){w=y.w
v=A.eS(x,0,A.ic(4,"count",y.C),w).aJ(0," ")
if(B.bw1(v)===$.bQx())return new A.Ia(v,A.eS(x,4,null,w).aJ(0," "))}return new A.Ia(null,f)},
bw1(d){var x,w,v,u=new A.db("")
for(x=new A.Fq(d);x.u();){w=x.d
v=!0
if(!(w>=1611&&w<=1631))if(w!==1648)v=w>=1750&&w<=1773||w===1600
if(v)continue
A:{if(1570===w||1571===w||1573===w||1649===w){v=A.e1(1575)
u.a+=v
break A}if(1577===w){v=A.e1(1607)
u.a+=v
break A}if(1609===w){v=A.e1(1610)
u.a+=v
break A}v=A.e1(w)
u.a+=v}}x=u.a
return C.c.ak(x.charCodeAt(0)==0?x:x).toLowerCase()},
bNR(d){var x,w,v,u,t,s,r={},q=B.bw1(B.c5p(d))
r.a=q
r.a=C.c.ak(C.c.fO(q,A.aP("^\u0633\u0648\u0631\u0647\\s*",!0,!1),""))
x=y.r
w=A.a([],x)
for(v=1;v<=114;++v)w.push(v)
u=r.a
if(u.length===0)return w
t=A.f2(u,null)
if(t!=null)return t>=1&&t<=114?A.a([t],x):C.uw
x=r.a
u=A.aP("[\\s'\\-]",!0,!1)
s=y.a
x=A.a0(new A.aG(w,new B.bwP(r,A.bS(x,u,"")),s),s.i("M.E"))
return x},
c5p(d){return A.BR(d,A.aP("[\u0660-\u0669]",!0,!1),new B.buf(),null)},
nF:function nF(d,e){this.a=d
this.b=e},
aLe:function aLe(){},
bwP:function bwP(d,e){this.a=d
this.b=e},
buf:function buf(){},
bA5(){var x=$.bHT
return x==null?$.bHT=new B.aLa().$0():x},
jG(d){return"\u0633\u0648\u0631\u0629 "+D.c7[d-1].a[0]},
aLa:function aLa(){}},E,F,D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[13],B)
E=c[37]
F=c[14]
D=c[28]
B.nF.prototype={
vn(d,e){return this.a[d-1][e-1]}}
var z=a.updateTypes(["ab<nF>()"])
B.aLe.prototype={
$0(){var x=0,w=A.o(y.u),v,u=2,t=[],s,r,q,p,o
var $async$$0=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d($.x_().hN("assets/quran/quran-uthmani.txt.gz"),$async$$0)
case 7:s=e
x=8
return A.d(F.arr(J.eX(J.bDT(s),s.byteOffset,s.byteLength)),$async$$0)
case 8:r=e
q=B.bYh(r)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
$.bA6=null
throw o
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:z+0}
B.bwP.prototype={
$1(d){var x=d-1,w=B.bw1(D.c7[x].a[0]),v=this.a
if(C.c.m(w,v.a)||C.c.m(C.c.fO(w,A.aP("^\u0627\u0644",!0,!1),""),v.a))return!0
x=D.c7[x].a[3]
v=A.aP("[\\s'\\-]",!0,!1)
return C.c.m(A.bS(x.toLowerCase(),v,""),this.b)},
$S:68}
B.buf.prototype={
$1(d){var x=d.h(0,0)
x.toString
return""+(x.charCodeAt(0)-1632)},
$S:57}
B.aLa.prototype={
$0(){var x=0,w=A.o(y.e),v,u=2,t=[],s,r,q,p
var $async$$0=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=new A.a3p("AmiriQuranMT",A.a([],y.p))
r.acU($.x_().hN("assets/quran/AmiriQuran-Regular.ttf"))
s=r
x=7
return A.d(s.tw(),$async$$0)
case 7:$.bHU=!0
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
$S:144};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.nF,A.N)
w(A.km,[B.aLe,B.aLa])
w(A.hX,[B.bwP,B.buf])})()
var y={p:A.a3("y<ab<k5>>"),x:A.a3("y<h>"),r:A.a3("y<u>"),B:A.a3("Q<h>"),u:A.a3("nF"),w:A.a3("h"),a:A.a3("aG<u>"),e:A.a3("A"),C:A.a3("u")};(function constants(){E.r4=new A.H(0.25882352941176473,0,0,0,C.l)
E.Ao=new A.Z(12,10,12,10)
E.wJ=new A.f4(" ",null,null,C.be,null,null,null,null,null,null,null)})();(function staticFields(){$.bA6=null
$.bHT=null
$.bHU=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cei","bQx",()=>B.bw1("\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650"))})()};
(a=>{a["/VlET5vECUI8fBfOAm2NKflooUc="]=a.current})($__dart_deferred_initializers__);