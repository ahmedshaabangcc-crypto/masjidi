((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aL6(){var x=$.bzE
return x==null?$.bzE=new B.aL7().$0():x},
bXP(d){var x,w,v,u,t,s,r,q,p,o,n,m=J.ky(114,y.B)
for(x=y.w,w=0;w<114;++w)m[w]=A.bQ(D.c7[w].a[1],"",!1,x)
v=new A.d9("")
for(x=d.split("\n"),u=x.length,t=0;t<u;++t){s=x[t]
r=C.c.h9(s,"\r")?C.c.Y(s,0,s.length-1):s
if(r.length===0)continue
if(C.c.bA(r,"#")){v.a+=r+"\n"
continue}q=C.c.f7(r,"|")
p=q<0?-1:C.c.iO(r,"|",q+1)
if(p<0)continue
o=A.f1(C.c.Y(r,0,q),null)
n=A.f1(C.c.Y(r,q+1,p),null)
if(o==null||n==null||o<1||o>114||n<1||n>m[o-1].length)continue
m[o-1][n-1]=C.c.bZ(r,p+1)}x=v.a
return new B.nC(m,C.c.FY(x.charCodeAt(0)==0?x:x))},
J8(d,e,f){var x,w,v
if(d===1||d===9||e!==1)return new A.I5(null,f)
x=A.a(f.split(" "),y.x)
if(x.length>4){w=y.w
v=A.eR(x,0,A.i9(4,"count",y.C),w).aK(0," ")
if(B.bvA(v)===$.bQ5())return new A.I5(v,A.eR(x,4,null,w).aK(0," "))}return new A.I5(null,f)},
bvA(d){var x,w,v,u=new A.d9("")
for(x=new A.Fm(d);x.u();){w=x.d
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
bNp(d){var x,w,v,u,t,s,r={},q=B.bvA(B.c4X(d))
r.a=q
r.a=C.c.al(C.c.h1(q,A.aQ("^\u0633\u0648\u0631\u0647\\s*",!0,!1),""))
x=y.r
w=A.a([],x)
for(v=1;v<=114;++v)w.push(v)
u=r.a
if(u.length===0)return w
t=A.f1(u,null)
if(t!=null)return t>=1&&t<=114?A.a([t],x):C.um
x=r.a
u=A.aQ("[\\s'\\-]",!0,!1)
s=y.a
x=A.a0(new A.aH(w,new B.bwn(r,A.bY(x,u,"")),s),s.i("M.E"))
return x},
c4X(d){return A.BN(d,A.aQ("[\u0660-\u0669]",!0,!1),new B.btP(),null)},
nC:function nC(d,e){this.a=d
this.b=e},
aL7:function aL7(){},
bwn:function bwn(d,e){this.a=d
this.b=e},
btP:function btP(){},
bzD(){var x=$.bHr
return x==null?$.bHr=new B.aL3().$0():x},
jD(d){return"\u0633\u0648\u0631\u0629 "+D.c7[d-1].a[0]},
aL3:function aL3(){}},E,F,D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[13],B)
E=c[37]
F=c[14]
D=c[28]
B.nC.prototype={
vn(d,e){return this.a[d-1][e-1]}}
var z=a.updateTypes(["ab<nC>()"])
B.aL7.prototype={
$0(){var x=0,w=A.o(y.u),v,u=2,t=[],s,r,q,p,o
var $async$$0=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d($.wZ().hN("assets/quran/quran-uthmani.txt.gz"),$async$$0)
case 7:s=e
x=8
return A.d(F.arn(J.eW(J.bDq(s),s.byteOffset,s.byteLength)),$async$$0)
case 8:r=e
q=B.bXP(r)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
$.bzE=null
throw o
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:z+0}
B.bwn.prototype={
$1(d){var x=d-1,w=B.bvA(D.c7[x].a[0]),v=this.a
if(C.c.m(w,v.a)||C.c.m(C.c.h1(w,A.aQ("^\u0627\u0644",!0,!1),""),v.a))return!0
x=D.c7[x].a[3]
v=A.aQ("[\\s'\\-]",!0,!1)
return C.c.m(A.bY(x.toLowerCase(),v,""),this.b)},
$S:68}
B.btP.prototype={
$1(d){var x=d.h(0,0)
x.toString
return""+(x.charCodeAt(0)-1632)},
$S:57}
B.aL3.prototype={
$0(){var x=0,w=A.o(y.e),v,u=2,t=[],s,r,q,p
var $async$$0=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=new A.a3l("AmiriQuranMT",A.a([],y.p))
r.acP($.wZ().hN("assets/quran/AmiriQuran-Regular.ttf"))
s=r
x=7
return A.d(s.tw(),$async$$0)
case 7:$.bHs=!0
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
x(B.nC,A.N)
w(A.kl,[B.aL7,B.aL3])
w(A.hV,[B.bwn,B.btP])})()
var y={p:A.a3("y<ab<k4>>"),x:A.a3("y<f>"),r:A.a3("y<u>"),B:A.a3("Q<f>"),u:A.a3("nC"),w:A.a3("f"),a:A.a3("aH<u>"),e:A.a3("A"),C:A.a3("u")};(function constants(){E.qX=new A.H(0.25882352941176473,0,0,0,C.l)
E.Ae=new A.Z(12,10,12,10)
E.wy=new A.f3(" ",null,null,C.be,null,null,null,null,null,null,null)})();(function staticFields(){$.bzE=null
$.bHr=null
$.bHs=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cdQ","bQ5",()=>B.bvA("\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650"))})()};
(a=>{a["SjxUKkmPipqcaR6pUlcYIjlScMA="]=a.current})($__dart_deferred_initializers__);