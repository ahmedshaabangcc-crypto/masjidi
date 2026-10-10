((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,C={
bVa(d){var x,w,v,u,t=d.length
if(t<18||d[0]!==31||d[1]!==139||d[2]!==8)throw B.o(A.a5W)
x=d[3]
w=(x&4)!==0?10+(2+((d[10]|d[11]<<8)>>>0)):10
if((x&8)!==0){for(;v=w+1,d[w]!==0;w=v);w=v}if((x&16)!==0){for(;v=w+1,d[w]!==0;w=v);w=v}if((x&2)!==0)w+=2
u=(d[t-4]|d[t-3]<<8|d[t-2]<<16|d[t-1]<<24)>>>0
t=u>0?u:65536
return new C.b_G(d,w,new Uint8Array(t)).aga()},
afa(d,e,f,g){var x,w,v,u,t,s,r,q,p,o
for(x=d.a,w=x.$flags|0,v=0;v<16;++v){w&2&&B.an(x)
x[v]=0}for(u=0;u<g;++u){t=e[f+u]
s=x[t]
w&2&&B.an(x)
x[t]=s+1}r=B.bX(16,0,!1,y.S)
for(q=1;q<15;q=p){p=q+1
r[p]=r[q]+x[q]}for(x=d.b,w=x.$flags|0,u=0;u<g;++u){o=e[f+u]
if(o!==0){t=r[o]
r[o]=t+1
w&2&&B.an(x)
x[t]=u}}},
Fa:function Fa(d,e){this.a=d
this.b=e},
b_G:function b_G(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0},
aFZ(){var x=$.boU
return x==null?$.boU=new C.aG_().$0():x},
bLD(d){var x,w,v,u,t,s,r,q,p,o,n,m=J.kL(114,y.a)
for(x=y.N,w=0;w<114;++w)m[w]=B.bX(A.ck[w].a[1],"",!1,x)
v=new B.cT("")
for(x=d.split("\n"),u=x.length,t=0;t<u;++t){s=x[t]
r=D.c.h8(s,"\r")?D.c.Y(s,0,s.length-1):s
if(r.length===0)continue
if(D.c.bN(r,"#")){v.a+=r+"\n"
continue}q=D.c.fb(r,"|")
p=q<0?-1:D.c.iw(r,"|",q+1)
if(p<0)continue
o=B.hT(D.c.Y(r,0,q),null)
n=B.hT(D.c.Y(r,q+1,p),null)
if(o==null||n==null||o<1||o>114||n<1||n>m[o-1].length)continue
m[o-1][n-1]=D.c.c7(r,p+1)}x=v.a
return new C.mX(m,D.c.ER(x.charCodeAt(0)==0?x:x))},
anA(d,e,f){var x,w,v
if(d===1||d===9||e!==1)return new B.FJ(null,f)
x=B.a(f.split(" "),y.s)
if(x.length>4){w=y.N
v=B.fK(x,0,B.j0(4,"count",y.S),w).b1(0," ")
if(C.blA(v)===$.bEc())return new B.FJ(v,B.fK(x,4,null,w).b1(0," "))}return new B.FJ(null,f)},
blA(d){var x,w,v,u=new B.cT("")
for(x=new B.ML(d);x.u();){w=x.d
v=!0
if(!(w>=1611&&w<=1631))if(w!==1648)v=w>=1750&&w<=1773||w===1600
if(v)continue
A:{if(1570===w||1571===w||1573===w||1649===w){v=B.e3(1575)
u.a+=v
break A}if(1577===w){v=B.e3(1607)
u.a+=v
break A}if(1609===w){v=B.e3(1610)
u.a+=v
break A}v=B.e3(w)
u.a+=v}}x=u.a
return D.c.aE(x.charCodeAt(0)==0?x:x).toLowerCase()},
bBJ(d){var x,w,v,u,t,s,r={},q=C.blA(C.bTv(d))
r.a=q
r.a=D.c.aE(D.c.fY(q,B.bg("^\u0633\u0648\u0631\u0647\\s*",!0,!1),""))
x=y.t
w=B.a([],x)
for(v=1;v<=114;++v)w.push(v)
u=r.a
if(u.length===0)return w
t=B.hT(u,null)
if(t!=null)return t>=1&&t<=114?B.a([t],x):D.rU
x=r.a
u=B.bg("[\\s'\\-]",!0,!1)
s=y.Z
x=B.a0(new B.aU(w,new C.bm4(r,B.c5(x,u,"")),s),s.i("L.E"))
return x},
bTv(d){return B.GE(d,B.bg("[\u0660-\u0669]",!0,!1),new C.bki(),null)},
mX:function mX(d,e){this.a=d
this.b=e},
aG_:function aG_(){},
bm4:function bm4(d,e){this.a=d
this.b=e},
bki:function bki(){},
boT(){var x=$.bwd
return x==null?$.bwd=new C.aFW().$0():x},
j2(d){return"\u0633\u0648\u0631\u0629 "+A.ck[d-1].a[0]},
aFW:function aFW(){},
bl2(d){return C.bVb(d)},
bVb(d){var x=0,w=B.n(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$bl2=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length<2||d[0]!==31||d[1]!==139){v=D.ag.bR(d)
x=1
break}u=4
k=b.G
s=k.DecompressionStream
r=k.Response
x=s!=null&&r!=null?7:8
break
case 7:k=y.g
j=y.o
q=B.a16(k.a(s),"gzip",j)
p=B.a16(k.a(r),d,j)
o=B.e5(p.body)
n=B.eN(o,"pipeThrough",q,null,j)
m=B.a16(r,n,j)
x=9
return B.e(B.e6(B.eN(m,"text",null,null,j),y.N),$async$bl2)
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
case 6:v=D.ag.bR(C.bVa(d))
x=1
break
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$bl2,w)}},A
J=c[1]
B=c[0]
D=c[2]
C=a.updateHolder(c[10],C)
A=c[27]
C.Fa.prototype={}
C.b_G.prototype={
lO(d){var x,w,v,u,t=this,s=t.e
for(x=t.a,w=x.length;v=t.f,v<d;){u=t.b
if(u>=w)throw B.o(A.a5M)
t.b=u+1
s=(s|D.e.NR(x[u],v))>>>0
t.f=v+8}t.e=D.e.Sl(s,d)
t.f=v-d
return(s&D.e.Sh(1,d)-1)>>>0},
RH(d){var x,w=this,v=w.d,u=w.c,t=u.length
if(v===t){x=new Uint8Array(t*2)
D.a1.hy(x,0,v,u)
w.c=x
v=x}else v=u
u=w.d++
v.$flags&2&&B.an(v)
v[u]=d},
bR(d){var x,w,v,u,t,s
for(x=d.a,w=0,v=0,u=0,t=1;t<16;++t){w=(w|this.lO(1))>>>0
s=x[t]
if(w-s<v)return d.b[u+(w-v)]
u+=s
v=v+s<<1>>>0
w=w<<1}throw B.o(A.a5T)},
ab_(d,e){var x,w,v,u,t,s=this
for(;;){x=s.bR(d)
if(x<256)s.RH(x)
else if(x===256)return
else{x-=257
if(x>=29)throw B.o(A.a5P)
w=A.amg[x]+s.lO(A.ad2[x])
v=s.bR(e)
u=A.amo[v]+s.lO(A.age[v])
if(u>s.d)throw B.o(A.a5V)
for(t=0;t<w;++t)s.RH(s.c[s.d-u])}}},
aga(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=B.ci(),f=B.ci(),e=y.S,d=h.a,a0=!1
do{x=h.lO(1)
w=h.lO(2)
if(w===0){v=h.f=h.e=0
u=h.b
t=(d[u]|d[u+1]<<8)>>>0
h.b=u+4
for(;v<t;++v)h.RH(d[h.b++])}else if(w===1){if(!a0){s=B.bX(318,0,!1,e)
for(r=0;r<144;++r)s[r]=8
for(r=144;r<256;++r)s[r]=9
for(r=256;r<280;++r)s[r]=7
for(r=280;r<288;++r)s[r]=8
for(r=288;r<318;++r)s[r]=5
u=new Int16Array(16)
g.seY(new C.Fa(u,new Int16Array(288)))
u=new Int16Array(16)
f.seY(new C.Fa(u,new Int16Array(30)))
C.afa(g.b9(),s,0,288)
C.afa(f.b9(),s,288,30)
a0=!0}h.ab_(g.b9(),f.b9())}else if(w===2){q=h.lO(5)+257
p=h.lO(5)+1
o=h.lO(4)+4
s=B.bX(320,0,!1,e)
for(v=0;v<o;++v)s[A.alQ[v]]=h.lO(3)
u=new Int16Array(16)
n=new C.Fa(u,new Int16Array(288))
u=new Int16Array(16)
m=new C.Fa(u,new Int16Array(30))
C.afa(n,s,0,19)
for(u=q+p,l=0;l<u;){k=h.bR(n)
if(k<16){j=l+1
s[l]=k
l=j}else{if(k===16){if(l===0)throw B.o(A.a5R)
t=s[l-1]
k=3+h.lO(2)}else{k=k===17?3+h.lO(3):11+h.lO(7)
t=0}if(l+k>u)throw B.o(A.a5Q)
for(;i=k-1,k>0;k=i,l=j){j=l+1
s[l]=t}}}C.afa(n,s,0,q)
C.afa(m,s,q,p)
h.ab_(n,m)}else throw B.o(A.a5N)}while(x===0)
e=h.c
d=h.d
return e.length===d?e:B.yT(e,0,d)}}
C.mX.prototype={
CE(d,e){return this.a[d-1][e-1]}}
var z=a.updateTypes(["a6<mX>()"])
C.aG_.prototype={
$0(){var x=0,w=B.n(y.x),v,u=2,t=[],s,r,q,p,o
var $async$$0=B.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return B.e($.A_().hI("assets/quran/quran-uthmani.txt.gz"),$async$$0)
case 7:s=e
x=8
return B.e(C.bl2(J.eK(J.bsl(s),s.byteOffset,s.byteLength)),$async$$0)
case 8:r=e
q=C.bLD(r)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
$.boU=null
throw o
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$0,w)},
$S:z+0}
C.bm4.prototype={
$1(d){var x=d-1,w=C.blA(A.ck[x].a[0]),v=this.a
if(D.c.m(w,v.a)||D.c.m(D.c.fY(w,B.bg("^\u0627\u0644",!0,!1),""),v.a))return!0
x=A.ck[x].a[3]
v=B.bg("[\\s'\\-]",!0,!1)
return D.c.m(B.c5(x.toLowerCase(),v,""),this.b)},
$S:75}
C.bki.prototype={
$1(d){var x=d.h(0,0)
x.toString
return""+(x.charCodeAt(0)-1632)},
$S:63}
C.aFW.prototype={
$0(){var x=0,w=B.n(y.y),v,u=2,t=[],s,r,q,p
var $async$$0=B.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=new B.a_X("AmiriQuranMT",B.a([],y.m))
r.a9U($.A_().hI("assets/quran/AmiriQuran-Regular.ttf"))
s=r
x=7
return B.e(s.rG(),$async$$0)
case 7:$.bwe=!0
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
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$0,w)},
$S:138};(function inheritance(){var x=a.inheritMany
x(B.M,[C.Fa,C.b_G,C.mX])
x(B.mk,[C.aG_,C.aFW])
x(B.iI,[C.bm4,C.bki])})()
var y=(function rtii(){var x=B.al
return{m:x("y<a6<jq>>"),s:x("y<i>"),t:x("y<v>"),o:x("bi"),g:x("fZ"),a:x("Q<i>"),x:x("mX"),N:x("i"),Z:x("aU<v>"),y:x("F"),S:x("v")}})();(function constants(){var x=a.makeConstList
A.x9=new B.I(0.25882352941176473,0,0,0,D.k)
A.yf=new B.a2(12,10,12,10)
A.a5M=new B.dY("truncated deflate stream",null,null)
A.a5N=new B.dY("bad block type",null,null)
A.a5P=new B.dY("bad length symbol",null,null)
A.a5Q=new B.dY("too many lengths",null,null)
A.a5R=new B.dY("repeat with no first length",null,null)
A.a5T=new B.dY("bad huffman code",null,null)
A.a5V=new B.dY("distance too far back",null,null)
A.a5W=new B.dY("not a gzip stream",null,null)
A.ad2=x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],y.t)
A.age=x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],y.t)
A.azz=new B.aP(["\u0627\u0644\u0641\u0627\u062a\u062d\u0629",7,!0,"Al-Faatiha"])
A.ayB=new B.aP(["\u0627\u0644\u0628\u0642\u0631\u0629",286,!1,"Al-Baqara"])
A.ayo=new B.aP(["\u0622\u0644 \u0639\u0645\u0631\u0627\u0646",200,!1,"Aal-i-Imraan"])
A.ayW=new B.aP(["\u0627\u0644\u0646\u0633\u0627\u0621",176,!1,"An-Nisaa"])
A.az6=new B.aP(["\u0627\u0644\u0645\u0627\u0626\u062f\u0629",120,!1,"Al-Maaida"])
A.ay6=new B.aP(["\u0627\u0644\u0623\u0646\u0639\u0627\u0645",165,!0,"Al-An'aam"])
A.ayz=new B.aP(["\u0627\u0644\u0623\u0639\u0631\u0627\u0641",206,!0,"Al-A'raaf"])
A.ayA=new B.aP(["\u0627\u0644\u0623\u0646\u0641\u0627\u0644",75,!1,"Al-Anfaal"])
A.azC=new B.aP(["\u0627\u0644\u062a\u0648\u0628\u0629",129,!1,"At-Tawba"])
A.ay3=new B.aP(["\u064a\u0648\u0646\u0633",109,!0,"Yunus"])
A.azo=new B.aP(["\u0647\u0648\u062f",123,!0,"Hud"])
A.azj=new B.aP(["\u064a\u0648\u0633\u0641",111,!0,"Yusuf"])
A.ayM=new B.aP(["\u0627\u0644\u0631\u0639\u062f",43,!1,"Ar-Ra'd"])
A.azu=new B.aP(["\u0627\u0628\u0631\u0627\u0647\u064a\u0645",52,!0,"Ibrahim"])
A.ayU=new B.aP(["\u0627\u0644\u062d\u062c\u0631",99,!0,"Al-Hijr"])
A.azM=new B.aP(["\u0627\u0644\u0646\u062d\u0644",128,!0,"An-Nahl"])
A.ay4=new B.aP(["\u0627\u0644\u0625\u0633\u0631\u0627\u0621",111,!0,"Al-Israa"])
A.azE=new B.aP(["\u0627\u0644\u0643\u0647\u0641",110,!0,"Al-Kahf"])
A.ayF=new B.aP(["\u0645\u0631\u064a\u0645",98,!0,"Maryam"])
A.az8=new B.aP(["\u0637\u0647",135,!0,"Taa-Haa"])
A.azt=new B.aP(["\u0627\u0644\u0623\u0646\u0628\u064a\u0627\u0621",112,!0,"Al-Anbiyaa"])
A.aym=new B.aP(["\u0627\u0644\u062d\u062c",78,!1,"Al-Hajj"])
A.azA=new B.aP(["\u0627\u0644\u0645\u0624\u0645\u0646\u0648\u0646",118,!0,"Al-Muminoon"])
A.ayP=new B.aP(["\u0627\u0644\u0646\u0648\u0631",64,!1,"An-Noor"])
A.az9=new B.aP(["\u0627\u0644\u0641\u0631\u0642\u0627\u0646",77,!0,"Al-Furqaan"])
A.azg=new B.aP(["\u0627\u0644\u0634\u0639\u0631\u0627\u0621",227,!0,"Ash-Shu'araa"])
A.ayR=new B.aP(["\u0627\u0644\u0646\u0645\u0644",93,!0,"An-Naml"])
A.ayk=new B.aP(["\u0627\u0644\u0642\u0635\u0635",88,!0,"Al-Qasas"])
A.ay8=new B.aP(["\u0627\u0644\u0639\u0646\u0643\u0628\u0648\u062a",69,!0,"Al-Ankaboot"])
A.azL=new B.aP(["\u0627\u0644\u0631\u0648\u0645",60,!0,"Ar-Room"])
A.azp=new B.aP(["\u0644\u0642\u0645\u0627\u0646",34,!0,"Luqman"])
A.azv=new B.aP(["\u0627\u0644\u0633\u062c\u062f\u0629",30,!0,"As-Sajda"])
A.ay2=new B.aP(["\u0627\u0644\u0623\u062d\u0632\u0627\u0628",73,!1,"Al-Ahzaab"])
A.ayv=new B.aP(["\u0633\u0628\u0625",54,!0,"Saba"])
A.ayL=new B.aP(["\u0641\u0627\u0637\u0631",45,!0,"Faatir"])
A.ay7=new B.aP(["\u064a\u0633",83,!0,"Yaseen"])
A.aza=new B.aP(["\u0627\u0644\u0635\u0627\u0641\u0627\u062a",182,!0,"As-Saaffaat"])
A.ayt=new B.aP(["\u0635",88,!0,"Saad"])
A.ayJ=new B.aP(["\u0627\u0644\u0632\u0645\u0631",75,!0,"Az-Zumar"])
A.ayN=new B.aP(["\u063a\u0627\u0641\u0631",85,!0,"Al-Ghaafir"])
A.ayZ=new B.aP(["\u0641\u0635\u0644\u062a",54,!0,"Fussilat"])
A.ayO=new B.aP(["\u0627\u0644\u0634\u0648\u0631\u0649",53,!0,"Ash-Shura"])
A.aya=new B.aP(["\u0627\u0644\u0632\u062e\u0631\u0641",89,!0,"Az-Zukhruf"])
A.ayg=new B.aP(["\u0627\u0644\u062f\u062e\u0627\u0646",59,!0,"Ad-Dukhaan"])
A.azw=new B.aP(["\u0627\u0644\u062c\u0627\u062b\u064a\u0629",37,!0,"Al-Jaathiya"])
A.azl=new B.aP(["\u0627\u0644\u0623\u062d\u0642\u0627\u0641",35,!0,"Al-Ahqaf"])
A.ayK=new B.aP(["\u0645\u062d\u0645\u062f",38,!1,"Muhammad"])
A.ayT=new B.aP(["\u0627\u0644\u0641\u062a\u062d",29,!1,"Al-Fath"])
A.azD=new B.aP(["\u0627\u0644\u062d\u062c\u0631\u0627\u062a",18,!1,"Al-Hujuraat"])
A.az0=new B.aP(["\u0642",45,!0,"Qaaf"])
A.ayr=new B.aP(["\u0627\u0644\u0630\u0627\u0631\u064a\u0627\u062a",60,!0,"Adh-Dhaariyat"])
A.ayG=new B.aP(["\u0627\u0644\u0637\u0648\u0631",49,!0,"At-Tur"])
A.azn=new B.aP(["\u0627\u0644\u0646\u062c\u0645",62,!0,"An-Najm"])
A.azB=new B.aP(["\u0627\u0644\u0642\u0645\u0631",55,!0,"Al-Qamar"])
A.azI=new B.aP(["\u0627\u0644\u0631\u062d\u0645\u0646",78,!1,"Ar-Rahmaan"])
A.ayI=new B.aP(["\u0627\u0644\u0648\u0627\u0642\u0639\u0629",96,!0,"Al-Waaqia"])
A.aze=new B.aP(["\u0627\u0644\u062d\u062f\u064a\u062f",29,!1,"Al-Hadid"])
A.az3=new B.aP(["\u0627\u0644\u0645\u062c\u0627\u062f\u0644\u0629",22,!1,"Al-Mujaadila"])
A.ay0=new B.aP(["\u0627\u0644\u062d\u0634\u0631",24,!1,"Al-Hashr"])
A.ayh=new B.aP(["\u0627\u0644\u0645\u0645\u062a\u062d\u0646\u0629",13,!1,"Al-Mumtahana"])
A.ayq=new B.aP(["\u0627\u0644\u0635\u0641",14,!1,"As-Saff"])
A.aye=new B.aP(["\u0627\u0644\u062c\u0645\u0639\u0629",11,!1,"Al-Jumu'a"])
A.az1=new B.aP(["\u0627\u0644\u0645\u0646\u0627\u0641\u0642\u0648\u0646",11,!1,"Al-Munaafiqoon"])
A.ayi=new B.aP(["\u0627\u0644\u062a\u063a\u0627\u0628\u0646",18,!1,"At-Taghaabun"])
A.azO=new B.aP(["\u0627\u0644\u0637\u0644\u0627\u0642",12,!1,"At-Talaaq"])
A.azy=new B.aP(["\u0627\u0644\u062a\u062d\u0631\u064a\u0645",12,!1,"At-Tahrim"])
A.azK=new B.aP(["\u0627\u0644\u0645\u0644\u0643",30,!0,"Al-Mulk"])
A.ayH=new B.aP(["\u0627\u0644\u0642\u0644\u0645",52,!0,"Al-Qalam"])
A.azH=new B.aP(["\u0627\u0644\u062d\u0627\u0642\u0629",52,!0,"Al-Haaqqa"])
A.azb=new B.aP(["\u0627\u0644\u0645\u0639\u0627\u0631\u062c",44,!0,"Al-Ma'aarij"])
A.ayC=new B.aP(["\u0646\u0648\u062d",28,!0,"Nooh"])
A.az_=new B.aP(["\u0627\u0644\u062c\u0646",28,!0,"Al-Jinn"])
A.azF=new B.aP(["\u0627\u0644\u0645\u0632\u0645\u0644",20,!0,"Al-Muzzammil"])
A.azJ=new B.aP(["\u0627\u0644\u0645\u062f\u062b\u0631",56,!0,"Al-Muddaththir"])
A.az5=new B.aP(["\u0627\u0644\u0642\u064a\u0627\u0645\u0629",40,!0,"Al-Qiyaama"])
A.ayV=new B.aP(["\u0627\u0644\u0627\u0646\u0633\u0627\u0646",31,!1,"Al-Insaan"])
A.ay5=new B.aP(["\u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a",50,!0,"Al-Mursalaat"])
A.ayY=new B.aP(["\u0627\u0644\u0646\u0628\u0625",40,!0,"An-Naba"])
A.azf=new B.aP(["\u0627\u0644\u0646\u0627\u0632\u0639\u0627\u062a",46,!0,"An-Naazi'aat"])
A.azm=new B.aP(["\u0639\u0628\u0633",42,!0,"Abasa"])
A.ayE=new B.aP(["\u0627\u0644\u062a\u0643\u0648\u064a\u0631",29,!0,"At-Takwir"])
A.ayy=new B.aP(["\u0627\u0644\u0625\u0646\u0641\u0637\u0627\u0631",19,!0,"Al-Infitaar"])
A.az2=new B.aP(["\u0627\u0644\u0645\u0637\u0641\u0641\u064a\u0646",36,!0,"Al-Mutaffifin"])
A.azk=new B.aP(["\u0627\u0644\u0625\u0646\u0634\u0642\u0627\u0642",25,!0,"Al-Inshiqaaq"])
A.azh=new B.aP(["\u0627\u0644\u0628\u0631\u0648\u062c",22,!0,"Al-Burooj"])
A.ayX=new B.aP(["\u0627\u0644\u0637\u0627\u0631\u0642",17,!0,"At-Taariq"])
A.ayj=new B.aP(["\u0627\u0644\u0623\u0639\u0644\u0649",19,!0,"Al-A'laa"])
A.ayD=new B.aP(["\u0627\u0644\u063a\u0627\u0634\u064a\u0629",26,!0,"Al-Ghaashiya"])
A.azq=new B.aP(["\u0627\u0644\u0641\u062c\u0631",30,!0,"Al-Fajr"])
A.az4=new B.aP(["\u0627\u0644\u0628\u0644\u062f",20,!0,"Al-Balad"])
A.ayx=new B.aP(["\u0627\u0644\u0634\u0645\u0633",15,!0,"Ash-Shams"])
A.ayw=new B.aP(["\u0627\u0644\u0644\u064a\u0644",21,!0,"Al-Lail"])
A.ayu=new B.aP(["\u0627\u0644\u0636\u062d\u0649",11,!0,"Ad-Dhuhaa"])
A.ays=new B.aP(["\u0627\u0644\u0634\u0631\u062d",8,!0,"Ash-Sharh"])
A.ayp=new B.aP(["\u0627\u0644\u062a\u064a\u0646",8,!0,"At-Tin"])
A.azc=new B.aP(["\u0627\u0644\u0639\u0644\u0642",19,!0,"Al-Alaq"])
A.ayd=new B.aP(["\u0627\u0644\u0642\u062f\u0631",5,!0,"Al-Qadr"])
A.azG=new B.aP(["\u0627\u0644\u0628\u064a\u0646\u0629",8,!1,"Al-Bayyina"])
A.ay1=new B.aP(["\u0627\u0644\u0632\u0644\u0632\u0644\u0629",8,!1,"Az-Zalzala"])
A.ayS=new B.aP(["\u0627\u0644\u0639\u0627\u062f\u064a\u0627\u062a",11,!0,"Al-Aadiyaat"])
A.ayb=new B.aP(["\u0627\u0644\u0642\u0627\u0631\u0639\u0629",11,!0,"Al-Qaari'a"])
A.ay9=new B.aP(["\u0627\u0644\u062a\u0643\u0627\u062b\u0631",8,!0,"At-Takaathur"])
A.ayf=new B.aP(["\u0627\u0644\u0639\u0635\u0631",3,!0,"Al-Asr"])
A.ayl=new B.aP(["\u0627\u0644\u0647\u0645\u0632\u0629",9,!0,"Al-Humaza"])
A.ayn=new B.aP(["\u0627\u0644\u0641\u064a\u0644",5,!0,"Al-Fil"])
A.azd=new B.aP(["\u0642\u0631\u064a\u0634",4,!0,"Quraish"])
A.ayc=new B.aP(["\u0627\u0644\u0645\u0627\u0639\u0648\u0646",7,!0,"Al-Maa'un"])
A.azs=new B.aP(["\u0627\u0644\u0643\u0648\u062b\u0631",3,!0,"Al-Kawthar"])
A.azi=new B.aP(["\u0627\u0644\u0643\u0627\u0641\u0631\u0648\u0646",6,!0,"Al-Kaafiroon"])
A.azr=new B.aP(["\u0627\u0644\u0646\u0635\u0631",3,!1,"An-Nasr"])
A.azN=new B.aP(["\u0627\u0644\u0645\u0633\u062f",5,!0,"Al-Masad"])
A.azx=new B.aP(["\u0627\u0644\u0625\u062e\u0644\u0627\u0635",4,!0,"Al-Ikhlaas"])
A.ayQ=new B.aP(["\u0627\u0644\u0641\u0644\u0642",5,!0,"Al-Falaq"])
A.az7=new B.aP(["\u0627\u0644\u0646\u0627\u0633",6,!0,"An-Naas"])
A.ck=x([A.azz,A.ayB,A.ayo,A.ayW,A.az6,A.ay6,A.ayz,A.ayA,A.azC,A.ay3,A.azo,A.azj,A.ayM,A.azu,A.ayU,A.azM,A.ay4,A.azE,A.ayF,A.az8,A.azt,A.aym,A.azA,A.ayP,A.az9,A.azg,A.ayR,A.ayk,A.ay8,A.azL,A.azp,A.azv,A.ay2,A.ayv,A.ayL,A.ay7,A.aza,A.ayt,A.ayJ,A.ayN,A.ayZ,A.ayO,A.aya,A.ayg,A.azw,A.azl,A.ayK,A.ayT,A.azD,A.az0,A.ayr,A.ayG,A.azn,A.azB,A.azI,A.ayI,A.aze,A.az3,A.ay0,A.ayh,A.ayq,A.aye,A.az1,A.ayi,A.azO,A.azy,A.azK,A.ayH,A.azH,A.azb,A.ayC,A.az_,A.azF,A.azJ,A.az5,A.ayV,A.ay5,A.ayY,A.azf,A.azm,A.ayE,A.ayy,A.az2,A.azk,A.azh,A.ayX,A.ayj,A.ayD,A.azq,A.az4,A.ayx,A.ayw,A.ayu,A.ays,A.ayp,A.azc,A.ayd,A.azG,A.ay1,A.ayS,A.ayb,A.ay9,A.ayf,A.ayl,A.ayn,A.azd,A.ayc,A.azs,A.azi,A.azr,A.azN,A.azx,A.ayQ,A.az7],B.al("y<+(i,v,F,i)>"))
A.alQ=x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],y.t)
A.amg=x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],y.t)
A.amo=x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],y.t)
A.uM=new B.fb(" ",null,null,D.bj,null,null,null,null,null,null,null)})();(function staticFields(){$.boU=null
$.bwd=null
$.bwe=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c0D","bEc",()=>C.blA("\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650"))})()};
(a=>{a["/okBp0Omvr2rceBUjuf07stIYUI="]=a.current})($__dart_deferred_initializers__);