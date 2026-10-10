((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
c_g(d){var x,w,v,u,t=d.length
if(t<18||d[0]!==31||d[1]!==139||d[2]!==8)throw A.o(C.a7X)
x=d[3]
w=(x&4)!==0?10+(2+((d[10]|d[11]<<8)>>>0)):10
if((x&8)!==0){for(;v=w+1,d[w]!==0;w=v);w=v}if((x&16)!==0){for(;v=w+1,d[w]!==0;w=v);w=v}if((x&2)!==0)w+=2
u=(d[t-4]|d[t-3]<<8|d[t-2]<<16|d[t-1]<<24)>>>0
t=u>0?u:65536
return new B.b1Q(d,w,new Uint8Array(t)).ahb()},
agm(d,e,f,g){var x,w,v,u,t,s,r,q,p,o
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
FZ:function FZ(d,e){this.a=d
this.b=e},
b1Q:function b1Q(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0},
aHN(){var x=$.bt7
return x==null?$.bt7=new B.aHO().$0():x},
bQw(d){var x,w,v,u,t,s,r,q,p,o,n,m=J.l7(114,y.a)
for(x=y.N,w=0;w<114;++w)m[w]=A.c2(E.bW[w].a[1],"",!1,x)
v=new A.d7("")
for(x=d.split("\n"),u=x.length,t=0;t<u;++t){s=x[t]
r=D.c.fW(s,"\r")?D.c.X(s,0,s.length-1):s
if(r.length===0)continue
if(D.c.bB(r,"#")){v.a+=r+"\n"
continue}q=D.c.eV(r,"|")
p=q<0?-1:D.c.ix(r,"|",q+1)
if(p<0)continue
o=A.fb(D.c.X(r,0,q),null)
n=A.fb(D.c.X(r,q+1,p),null)
if(o==null||n==null||o<1||o>114||n<1||n>m[o-1].length)continue
m[o-1][n-1]=D.c.c3(r,p+1)}x=v.a
return new B.ni(m,D.c.Fb(x.charCodeAt(0)==0?x:x))},
Hw(d,e,f){var x,w,v
if(d===1||d===9||e!==1)return new A.Gx(null,f)
x=A.a(f.split(" "),y.s)
if(x.length>4){w=y.N
v=A.fe(x,0,A.il(4,"count",y.S),w).aM(0," ")
if(B.bpc(v)===$.bIY())return new A.Gx(v,A.fe(x,4,null,w).aM(0," "))}return new A.Gx(null,f)},
bpc(d){var x,w,v,u=new A.d7("")
for(x=new A.NI(d);x.u();){w=x.d
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
bGp(d){var x,w,v,u,t,s,r={},q=B.bpc(B.bYw(d))
r.a=q
r.a=D.c.aq(D.c.h3(q,A.aX("^\u0633\u0648\u0631\u0647\\s*",!0,!1),""))
x=y.t
w=A.a([],x)
for(v=1;v<=114;++v)w.push(v)
u=r.a
if(u.length===0)return w
t=A.fb(u,null)
if(t!=null)return t>=1&&t<=114?A.a([t],x):D.tr
x=r.a
u=A.aX("[\\s'\\-]",!0,!1)
s=y.Z
x=A.a0(new A.aO(w,new B.bpX(r,A.bS(x,u,"")),s),s.i("L.E"))
return x},
bYw(d){return A.AD(d,A.aX("[\u0660-\u0669]",!0,!1),new B.bnO(),null)},
ni:function ni(d,e){this.a=d
this.b=e},
aHO:function aHO(){},
bpX:function bpX(d,e){this.a=d
this.b=e},
bnO:function bnO(){},
bt6(){var x=$.bAK
return x==null?$.bAK=new B.aHK().$0():x},
jj(d){return"\u0633\u0648\u0631\u0629 "+E.bW[d-1].a[0]},
aHK:function aHK(){},
boE(d){return B.c_h(d)},
c_h(d){var x=0,w=A.n(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$boE=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length<2||d[0]!==31||d[1]!==139){v=D.ak.bU(d)
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
n=A.cm(A.co(o,"pipeThrough",q,null,null,null))
m=A.qg(r,n,null,j)
x=9
return A.d(A.e6(A.cm(A.co(m,"text",null,null,null,null)),y.N),$async$boE)
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
case 6:v=D.ak.bU(B.c_g(d))
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$boE,w)}},C,E
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[13],B)
C=c[37]
E=c[29]
B.FZ.prototype={}
B.b1Q.prototype={
lT(d){var x,w,v,u,t=this,s=t.e
for(x=t.a,w=x.length;v=t.f,v<d;){u=t.b
if(u>=w)throw A.o(C.a7N)
t.b=u+1
s=(s|D.e.Oq(x[u],v))>>>0
t.f=v+8}t.e=D.e.T1(s,d)
t.f=v-d
return(s&D.e.SY(1,d)-1)>>>0},
Sn(d){var x,w=this,v=w.d,u=w.c,t=u.length
if(v===t){x=new Uint8Array(t*2)
D.a5.hB(x,0,v,u)
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
w=w<<1}throw A.o(C.a7U)},
abO(d,e){var x,w,v,u,t,s=this
for(;;){x=s.bU(d)
if(x<256)s.Sn(x)
else if(x===256)return
else{x-=257
if(x>=29)throw A.o(C.a7Q)
w=C.aoN[x]+s.lT(C.afp[x])
v=s.bU(e)
u=C.aoV[v]+s.lT(C.aiH[v])
if(u>s.d)throw A.o(C.a7W)
for(t=0;t<w;++t)s.Sn(s.c[s.d-u])}}},
ahb(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.cr(),f=A.cr(),e=y.S,d=h.a,a0=!1
do{x=h.lT(1)
w=h.lT(2)
if(w===0){v=h.f=h.e=0
u=h.b
t=(d[u]|d[u+1]<<8)>>>0
h.b=u+4
for(;v<t;++v)h.Sn(d[h.b++])}else if(w===1){if(!a0){s=A.c2(318,0,!1,e)
for(r=0;r<144;++r)s[r]=8
for(r=144;r<256;++r)s[r]=9
for(r=256;r<280;++r)s[r]=7
for(r=280;r<288;++r)s[r]=8
for(r=288;r<318;++r)s[r]=5
u=new Int16Array(16)
g.sf4(new B.FZ(u,new Int16Array(288)))
u=new Int16Array(16)
f.sf4(new B.FZ(u,new Int16Array(30)))
B.agm(g.bc(),s,0,288)
B.agm(f.bc(),s,288,30)
a0=!0}h.abO(g.bc(),f.bc())}else if(w===2){q=h.lT(5)+257
p=h.lT(5)+1
o=h.lT(4)+4
s=A.c2(320,0,!1,e)
for(v=0;v<o;++v)s[C.aol[v]]=h.lT(3)
u=new Int16Array(16)
n=new B.FZ(u,new Int16Array(288))
u=new Int16Array(16)
m=new B.FZ(u,new Int16Array(30))
B.agm(n,s,0,19)
for(u=q+p,l=0;l<u;){k=h.bU(n)
if(k<16){j=l+1
s[l]=k
l=j}else{if(k===16){if(l===0)throw A.o(C.a7S)
t=s[l-1]
k=3+h.lT(2)}else{k=k===17?3+h.lT(3):11+h.lT(7)
t=0}if(l+k>u)throw A.o(C.a7R)
for(;i=k-1,k>0;k=i,l=j){j=l+1
s[l]=t}}}B.agm(n,s,0,q)
B.agm(m,s,q,p)
h.abO(n,m)}else throw A.o(C.a7O)}while(x===0)
e=h.c
d=h.d
return e.length===d?e:A.zv(e,0,d)}}
B.ni.prototype={
uN(d,e){return this.a[d-1][e-1]}}
var z=a.updateTypes(["a8<ni>()"])
B.aHO.prototype={
$0(){var x=0,w=A.n(y.x),v,u=2,t=[],s,r,q,p,o
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.d($.AH().hK("assets/quran/quran-uthmani.txt.gz"),$async$$0)
case 7:s=e
x=8
return A.d(B.boE(J.eX(J.bwN(s),s.byteOffset,s.byteLength)),$async$$0)
case 8:r=e
q=B.bQw(r)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
$.bt7=null
throw o
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:z+0}
B.bpX.prototype={
$1(d){var x=d-1,w=B.bpc(E.bW[x].a[0]),v=this.a
if(D.c.m(w,v.a)||D.c.m(D.c.h3(w,A.aX("^\u0627\u0644",!0,!1),""),v.a))return!0
x=E.bW[x].a[3]
v=A.aX("[\\s'\\-]",!0,!1)
return D.c.m(A.bS(x.toLowerCase(),v,""),this.b)},
$S:67}
B.bnO.prototype={
$1(d){var x=d.h(0,0)
x.toString
return""+(x.charCodeAt(0)-1632)},
$S:60}
B.aHK.prototype={
$0(){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=new A.a1_("AmiriQuranMT",A.a([],y.m))
r.aaI($.AH().hK("assets/quran/AmiriQuran-Regular.ttf"))
s=r
x=7
return A.d(s.rW(),$async$$0)
case 7:$.bAL=!0
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
$S:188};(function inheritance(){var x=a.inheritMany
x(A.N,[B.FZ,B.b1Q,B.ni])
x(A.k_,[B.aHO,B.aHK])
x(A.hF,[B.bpX,B.bnO])})()
var y=(function rtii(){var x=A.a7
return{m:x("y<a8<jI>>"),s:x("y<i>"),t:x("y<v>"),o:x("bg"),g:x("fP"),a:x("P<i>"),x:x("ni"),N:x("i"),Z:x("aO<v>"),y:x("B"),S:x("v")}})();(function constants(){var x=a.makeConstList
C.qf=new A.I(0.25882352941176473,0,0,0,D.k)
C.yX=new A.a_(12,10,12,10)
C.a7N=new A.e3("truncated deflate stream",null,null)
C.a7O=new A.e3("bad block type",null,null)
C.a7Q=new A.e3("bad length symbol",null,null)
C.a7R=new A.e3("too many lengths",null,null)
C.a7S=new A.e3("repeat with no first length",null,null)
C.a7U=new A.e3("bad huffman code",null,null)
C.a7W=new A.e3("distance too far back",null,null)
C.a7X=new A.e3("not a gzip stream",null,null)
C.afp=x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],y.t)
C.aiH=x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],y.t)
C.aol=x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],y.t)
C.aoN=x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],y.t)
C.aoV=x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],y.t)
C.vt=new A.fj(" ",null,null,D.bl,null,null,null,null,null,null,null)})();(function staticFields(){$.bt7=null
$.bAK=null
$.bAL=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c64","bIY",()=>B.bpc("\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650"))})()};
(a=>{a["I/hdmEjM1ZNgkwLnpMTSpshYhLo="]=a.current})($__dart_deferred_initializers__);