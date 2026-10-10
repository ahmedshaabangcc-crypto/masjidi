((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
c_1(d){var x,w,v,u,t=d.length
if(t<18||d[0]!==31||d[1]!==139||d[2]!==8)throw A.o(C.a7U)
x=d[3]
w=(x&4)!==0?10+(2+((d[10]|d[11]<<8)>>>0)):10
if((x&8)!==0){for(;v=w+1,d[w]!==0;w=v);w=v}if((x&16)!==0){for(;v=w+1,d[w]!==0;w=v);w=v}if((x&2)!==0)w+=2
u=(d[t-4]|d[t-3]<<8|d[t-2]<<16|d[t-1]<<24)>>>0
t=u>0?u:65536
return new B.b1N(d,w,new Uint8Array(t)).ah8()},
agi(d,e,f,g){var x,w,v,u,t,s,r,q,p,o
for(x=d.a,w=x.$flags|0,v=0;v<16;++v){w&2&&A.aq(x)
x[v]=0}for(u=0;u<g;++u){t=e[f+u]
s=x[t]
w&2&&A.aq(x)
x[t]=s+1}r=A.c2(16,0,!1,y.S)
for(q=1;q<15;q=p){p=q+1
r[p]=r[q]+x[q]}for(x=d.b,w=x.$flags|0,u=0;u<g;++u){o=e[f+u]
if(o!==0){t=r[o]
r[o]=t+1
w&2&&A.aq(x)
x[t]=u}}},
FV:function FV(d,e){this.a=d
this.b=e},
b1N:function b1N(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0},
aHK(){var x=$.bsV
return x==null?$.bsV=new B.aHL().$0():x},
bQh(d){var x,w,v,u,t,s,r,q,p,o,n,m=J.l7(114,y.a)
for(x=y.N,w=0;w<114;++w)m[w]=A.c2(E.bW[w].a[1],"",!1,x)
v=new A.d7("")
for(x=d.split("\n"),u=x.length,t=0;t<u;++t){s=x[t]
r=D.c.fW(s,"\r")?D.c.X(s,0,s.length-1):s
if(r.length===0)continue
if(D.c.bB(r,"#")){v.a+=r+"\n"
continue}q=D.c.eV(r,"|")
p=q<0?-1:D.c.iy(r,"|",q+1)
if(p<0)continue
o=A.fb(D.c.X(r,0,q),null)
n=A.fb(D.c.X(r,q+1,p),null)
if(o==null||n==null||o<1||o>114||n<1||n>m[o-1].length)continue
m[o-1][n-1]=D.c.c3(r,p+1)}x=v.a
return new B.ni(m,D.c.Fa(x.charCodeAt(0)==0?x:x))},
Ht(d,e,f){var x,w,v
if(d===1||d===9||e!==1)return new A.Gt(null,f)
x=A.a(f.split(" "),y.s)
if(x.length>4){w=y.N
v=A.fe(x,0,A.ik(4,"count",y.S),w).aM(0," ")
if(B.bp2(v)===$.bIJ())return new A.Gt(v,A.fe(x,4,null,w).aM(0," "))}return new A.Gt(null,f)},
bp2(d){var x,w,v,u=new A.d7("")
for(x=new A.NF(d);x.u();){w=x.d
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
return D.c.aq(x.charCodeAt(0)==0?x:x).toLowerCase()},
bGa(d){var x,w,v,u,t,s,r={},q=B.bp2(B.bYh(d))
r.a=q
r.a=D.c.aq(D.c.h3(q,A.aZ("^\u0633\u0648\u0631\u0647\\s*",!0,!1),""))
x=y.t
w=A.a([],x)
for(v=1;v<=114;++v)w.push(v)
u=r.a
if(u.length===0)return w
t=A.fb(u,null)
if(t!=null)return t>=1&&t<=114?A.a([t],x):D.to
x=r.a
u=A.aZ("[\\s'\\-]",!0,!1)
s=y.Z
x=A.a0(new A.aO(w,new B.bpN(r,A.bY(x,u,"")),s),s.i("L.E"))
return x},
bYh(d){return A.Hu(d,A.aZ("[\u0660-\u0669]",!0,!1),new B.bnE(),null)},
ni:function ni(d,e){this.a=d
this.b=e},
aHL:function aHL(){},
bpN:function bpN(d,e){this.a=d
this.b=e},
bnE:function bnE(){},
bsU(){var x=$.bAw
return x==null?$.bAw=new B.aHH().$0():x},
jj(d){return"\u0633\u0648\u0631\u0629 "+E.bW[d-1].a[0]},
aHH:function aHH(){},
bou(d){return B.c_2(d)},
c_2(d){var x=0,w=A.n(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$bou=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length<2||d[0]!==31||d[1]!==139){v=D.aj.bU(d)
x=1
break}u=4
k=b.G
s=k.DecompressionStream
r=k.Response
x=s!=null&&r!=null?7:8
break
case 7:k=y.g
j=y.o
q=A.qg(k.a(s),"gzip",null,j)
p=A.qg(k.a(r),d,null,j)
o=A.cm(p.body)
n=A.cm(A.cw(o,"pipeThrough",q,null,null,null))
m=A.qg(r,n,null,j)
x=9
return A.d(A.e6(A.cm(A.cw(m,"text",null,null,null,null)),y.N),$async$bou)
case 9:l=f
v=l
x=1
break
case 8:u=2
x=6
break
case 4:u=3
h=t.pop()
x=6
break
case 3:x=2
break
case 6:v=D.aj.bU(B.c_1(d))
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$bou,w)}},C,E
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[13],B)
C=c[37]
E=c[29]
B.FV.prototype={}
B.b1N.prototype={
lT(d){var x,w,v,u,t=this,s=t.e
for(x=t.a,w=x.length;v=t.f,v<d;){u=t.b
if(u>=w)throw A.o(C.a7K)
t.b=u+1
s=(s|D.e.Oo(x[u],v))>>>0
t.f=v+8}t.e=D.e.T_(s,d)
t.f=v-d
return(s&D.e.SW(1,d)-1)>>>0},
Sl(d){var x,w=this,v=w.d,u=w.c,t=u.length
if(v===t){x=new Uint8Array(t*2)
D.a5.hC(x,0,v,u)
w.c=x
v=x}else v=u
u=w.d++
v.$flags&2&&A.aq(v)
v[u]=d},
bU(d){var x,w,v,u,t,s
for(x=d.a,w=0,v=0,u=0,t=1;t<16;++t){w=(w|this.lT(1))>>>0
s=x[t]
if(w-s<v)return d.b[u+(w-v)]
u+=s
v=v+s<<1>>>0
w=w<<1}throw A.o(C.a7R)},
abL(d,e){var x,w,v,u,t,s=this
for(;;){x=s.bU(d)
if(x<256)s.Sl(x)
else if(x===256)return
else{x-=257
if(x>=29)throw A.o(C.a7N)
w=C.aoJ[x]+s.lT(C.afl[x])
v=s.bU(e)
u=C.aoR[v]+s.lT(C.aiD[v])
if(u>s.d)throw A.o(C.a7T)
for(t=0;t<w;++t)s.Sl(s.c[s.d-u])}}},
ah8(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.cp(),f=A.cp(),e=y.S,d=h.a,a0=!1
do{x=h.lT(1)
w=h.lT(2)
if(w===0){v=h.f=h.e=0
u=h.b
t=(d[u]|d[u+1]<<8)>>>0
h.b=u+4
for(;v<t;++v)h.Sl(d[h.b++])}else if(w===1){if(!a0){s=A.c2(318,0,!1,e)
for(r=0;r<144;++r)s[r]=8
for(r=144;r<256;++r)s[r]=9
for(r=256;r<280;++r)s[r]=7
for(r=280;r<288;++r)s[r]=8
for(r=288;r<318;++r)s[r]=5
u=new Int16Array(16)
g.sf3(new B.FV(u,new Int16Array(288)))
u=new Int16Array(16)
f.sf3(new B.FV(u,new Int16Array(30)))
B.agi(g.bc(),s,0,288)
B.agi(f.bc(),s,288,30)
a0=!0}h.abL(g.bc(),f.bc())}else if(w===2){q=h.lT(5)+257
p=h.lT(5)+1
o=h.lT(4)+4
s=A.c2(320,0,!1,e)
for(v=0;v<o;++v)s[C.aoh[v]]=h.lT(3)
u=new Int16Array(16)
n=new B.FV(u,new Int16Array(288))
u=new Int16Array(16)
m=new B.FV(u,new Int16Array(30))
B.agi(n,s,0,19)
for(u=q+p,l=0;l<u;){k=h.bU(n)
if(k<16){j=l+1
s[l]=k
l=j}else{if(k===16){if(l===0)throw A.o(C.a7P)
t=s[l-1]
k=3+h.lT(2)}else{k=k===17?3+h.lT(3):11+h.lT(7)
t=0}if(l+k>u)throw A.o(C.a7O)
for(;i=k-1,k>0;k=i,l=j){j=l+1
s[l]=t}}}B.agi(n,s,0,q)
B.agi(m,s,q,p)
h.abL(n,m)}else throw A.o(C.a7L)}while(x===0)
e=h.c
d=h.d
return e.length===d?e:A.zt(e,0,d)}}
B.ni.prototype={
uN(d,e){return this.a[d-1][e-1]}}
var z=a.updateTypes(["a8<ni>()"])
B.aHL.prototype={
$0(){var x=0,w=A.n(y.x),v,u=2,t=[],s,r,q,p,o
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d($.AE().hL("assets/quran/quran-uthmani.txt.gz"),$async$$0)
case 7:s=e
x=8
return A.d(B.bou(J.eX(J.bwz(s),s.byteOffset,s.byteLength)),$async$$0)
case 8:r=e
q=B.bQh(r)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
$.bsV=null
throw o
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:z+0}
B.bpN.prototype={
$1(d){var x=d-1,w=B.bp2(E.bW[x].a[0]),v=this.a
if(D.c.m(w,v.a)||D.c.m(D.c.h3(w,A.aZ("^\u0627\u0644",!0,!1),""),v.a))return!0
x=E.bW[x].a[3]
v=A.aZ("[\\s'\\-]",!0,!1)
return D.c.m(A.bY(x.toLowerCase(),v,""),this.b)},
$S:60}
B.bnE.prototype={
$1(d){var x=d.h(0,0)
x.toString
return""+(x.charCodeAt(0)-1632)},
$S:65}
B.aHH.prototype={
$0(){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=new A.a0V("AmiriQuranMT",A.a([],y.m))
r.aaF($.AE().hL("assets/quran/AmiriQuran-Regular.ttf"))
s=r
x=7
return A.d(s.rW(),$async$$0)
case 7:$.bAx=!0
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
$S:189};(function inheritance(){var x=a.inheritMany
x(A.N,[B.FV,B.b1N,B.ni])
x(A.jZ,[B.aHL,B.aHH])
x(A.hF,[B.bpN,B.bnE])})()
var y=(function rtii(){var x=A.a7
return{m:x("y<a8<jI>>"),s:x("y<h>"),t:x("y<v>"),o:x("bf"),g:x("fO"),a:x("P<h>"),x:x("ni"),N:x("h"),Z:x("aO<v>"),y:x("B"),S:x("v")}})();(function constants(){var x=a.makeConstList
C.xM=new A.I(0.25882352941176473,0,0,0,D.k)
C.yU=new A.a_(12,10,12,10)
C.a7K=new A.e3("truncated deflate stream",null,null)
C.a7L=new A.e3("bad block type",null,null)
C.a7N=new A.e3("bad length symbol",null,null)
C.a7O=new A.e3("too many lengths",null,null)
C.a7P=new A.e3("repeat with no first length",null,null)
C.a7R=new A.e3("bad huffman code",null,null)
C.a7T=new A.e3("distance too far back",null,null)
C.a7U=new A.e3("not a gzip stream",null,null)
C.afl=x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],y.t)
C.aiD=x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],y.t)
C.aoh=x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],y.t)
C.aoJ=x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],y.t)
C.aoR=x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],y.t)
C.vr=new A.fj(" ",null,null,D.bl,null,null,null,null,null,null,null)})();(function staticFields(){$.bsV=null
$.bAw=null
$.bAx=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c5Q","bIJ",()=>B.bp2("\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650"))})()};
(a=>{a["R55Oo3Qg65azxZMzpUDFPMaPRnQ="]=a.current})($__dart_deferred_initializers__);