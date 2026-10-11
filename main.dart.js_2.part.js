((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aI3(){var x=$.btr
return x==null?$.btr=new B.aI4().$0():x},
bQR(d){var x,w,v,u,t,s,r,q,p,o,n,m=J.la(114,y.B)
for(x=y.w,w=0;w<114;++w)m[w]=A.c2(D.bX[w].a[1],"",!1,x)
v=new A.d6("")
for(x=d.split("\n"),u=x.length,t=0;t<u;++t){s=x[t]
r=C.c.fW(s,"\r")?C.c.W(s,0,s.length-1):s
if(r.length===0)continue
if(C.c.bB(r,"#")){v.a+=r+"\n"
continue}q=C.c.eW(r,"|")
p=q<0?-1:C.c.ix(r,"|",q+1)
if(p<0)continue
o=A.fb(C.c.W(r,0,q),null)
n=A.fb(C.c.W(r,q+1,p),null)
if(o==null||n==null||o<1||o>114||n<1||n>m[o-1].length)continue
m[o-1][n-1]=C.c.c3(r,p+1)}x=v.a
return new B.nj(m,C.c.Fb(x.charCodeAt(0)==0?x:x))},
HD(d,e,f){var x,w,v
if(d===1||d===9||e!==1)return new A.GE(null,f)
x=A.a(f.split(" "),y.x)
if(x.length>4){w=y.w
v=A.fe(x,0,A.il(4,"count",y.C),w).aM(0," ")
if(B.bpt(v)===$.bJi())return new A.GE(v,A.fe(x,4,null,w).aM(0," "))}return new A.GE(null,f)},
bpt(d){var x,w,v,u=new A.d6("")
for(x=new A.NP(d);x.u();){w=x.d
v=!0
if(!(w>=1611&&w<=1631))if(w!==1648)v=w>=1750&&w<=1773||w===1600
if(v)continue
A:{if(1570===w||1571===w||1573===w||1649===w){v=A.ea(1575)
u.a+=v
break A}if(1577===w){v=A.ea(1607)
u.a+=v
break A}if(1609===w){v=A.ea(1610)
u.a+=v
break A}v=A.ea(w)
u.a+=v}}x=u.a
return C.c.ao(x.charCodeAt(0)==0?x:x).toLowerCase()},
bGJ(d){var x,w,v,u,t,s,r={},q=B.bpt(B.bYR(d))
r.a=q
r.a=C.c.ao(C.c.h3(q,A.aX("^\u0633\u0648\u0631\u0647\\s*",!0,!1),""))
x=y.r
w=A.a([],x)
for(v=1;v<=114;++v)w.push(v)
u=r.a
if(u.length===0)return w
t=A.fb(u,null)
if(t!=null)return t>=1&&t<=114?A.a([t],x):C.tt
x=r.a
u=A.aX("[\\s'\\-]",!0,!1)
s=y.a
x=A.a0(new A.aO(w,new B.bqd(r,A.bM(x,u,"")),s),s.i("L.E"))
return x},
bYR(d){return A.AI(d,A.aX("[\u0660-\u0669]",!0,!1),new B.bo5(),null)},
nj:function nj(d,e){this.a=d
this.b=e},
aI4:function aI4(){},
bqd:function bqd(d,e){this.a=d
this.b=e},
bo5:function bo5(){},
btq(){var x=$.bB3
return x==null?$.bB3=new B.aI0().$0():x},
jk(d){return"\u0633\u0648\u0631\u0629 "+D.bX[d-1].a[0]},
aI0:function aI0(){}},E,F,D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[13],B)
E=c[39]
F=c[14]
D=c[30]
B.nj.prototype={
uN(d,e){return this.a[d-1][e-1]}}
var z=a.updateTypes(["a8<nj>()"])
B.aI4.prototype={
$0(){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d($.wg().hz("assets/quran/quran-uthmani.txt.gz"),$async$$0)
case 7:s=e
x=8
return A.d(F.aoU(J.eN(J.bx5(s),s.byteOffset,s.byteLength)),$async$$0)
case 8:r=e
q=B.bQR(r)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
$.btr=null
throw o
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:z+0}
B.bqd.prototype={
$1(d){var x=d-1,w=B.bpt(D.bX[x].a[0]),v=this.a
if(C.c.m(w,v.a)||C.c.m(C.c.h3(w,A.aX("^\u0627\u0644",!0,!1),""),v.a))return!0
x=D.bX[x].a[3]
v=A.aX("[\\s'\\-]",!0,!1)
return C.c.m(A.bM(x.toLowerCase(),v,""),this.b)},
$S:67}
B.bo5.prototype={
$1(d){var x=d.h(0,0)
x.toString
return""+(x.charCodeAt(0)-1632)},
$S:60}
B.aI0.prototype={
$0(){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=new A.a16("AmiriQuranMT",A.a([],y.p))
r.aaJ($.wg().hz("assets/quran/AmiriQuran-Regular.ttf"))
s=r
x=7
return A.d(s.rW(),$async$$0)
case 7:$.bB4=!0
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
$S:188};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.nj,A.N)
w(A.k0,[B.aI4,B.aI0])
w(A.hF,[B.bqd,B.bo5])})()
var y={p:A.a1("y<a8<jJ>>"),x:A.a1("y<i>"),r:A.a1("y<v>"),B:A.a1("P<i>"),u:A.a1("nj"),w:A.a1("i"),a:A.a1("aO<v>"),e:A.a1("B"),C:A.a1("v")};(function constants(){E.qk=new A.I(0.25882352941176473,0,0,0,C.k)
E.z0=new A.a_(12,10,12,10)
E.vv=new A.fj(" ",null,null,C.bl,null,null,null,null,null,null,null)})();(function staticFields(){$.btr=null
$.bB3=null
$.bB4=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c6r","bJi",()=>B.bpt("\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650"))})()};
(a=>{a["7OycqYmSzL38RwF0liQbXxBpH9I="]=a.current})($__dart_deferred_initializers__);