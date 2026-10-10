((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,C={
bU1(d){var x,w,v,u,t=d.length
if(t<18||d[0]!==31||d[1]!==139||d[2]!==8)throw B.j(A.a5F)
x=d[3]
w=(x&4)!==0?10+(2+((d[10]|d[11]<<8)>>>0)):10
if((x&8)!==0){for(;v=w+1,d[w]!==0;w=v);w=v}if((x&16)!==0){for(;v=w+1,d[w]!==0;w=v);w=v}if((x&2)!==0)w+=2
u=(d[t-4]|d[t-3]<<8|d[t-2]<<16|d[t-1]<<24)>>>0
t=u>0?u:65536
return new C.b_q(d,w,new Uint8Array(t)).ag2()},
aeZ(d,e,f,g){var x,w,v,u,t,s,r,q,p,o
for(x=d.a,w=x.$flags|0,v=0;v<16;++v){w&2&&B.an(x)
x[v]=0}for(u=0;u<g;++u){t=e[f+u]
s=x[t]
w&2&&B.an(x)
x[t]=s+1}r=B.bV(16,0,!1,y.S)
for(q=1;q<15;q=p){p=q+1
r[p]=r[q]+x[q]}for(x=d.b,w=x.$flags|0,u=0;u<g;++u){o=e[f+u]
if(o!==0){t=r[o]
r[o]=t+1
w&2&&B.an(x)
x[t]=u}}},
F5:function F5(d,e){this.a=d
this.b=e},
b_q:function b_q(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0},
aFJ(){var x=$.bnR
return x==null?$.bnR=new C.aFK().$0():x},
bKv(d){var x,w,v,u,t,s,r,q,p,o,n,m=J.kJ(114,y.a)
for(x=y.N,w=0;w<114;++w)m[w]=B.bV(A.ci[w].a[1],"",!1,x)
v=new B.cQ("")
for(x=d.split("\n"),u=x.length,t=0;t<u;++t){s=x[t]
r=D.c.h7(s,"\r")?D.c.Y(s,0,s.length-1):s
if(r.length===0)continue
if(D.c.bN(r,"#")){v.a+=r+"\n"
continue}q=D.c.f9(r,"|")
p=q<0?-1:D.c.iv(r,"|",q+1)
if(p<0)continue
o=B.hR(D.c.Y(r,0,q),null)
n=B.hR(D.c.Y(r,q+1,p),null)
if(o==null||n==null||o<1||o>114||n<1||n>m[o-1].length)continue
m[o-1][n-1]=D.c.c7(r,p+1)}x=v.a
return new C.mU(m,D.c.EL(x.charCodeAt(0)==0?x:x))},
ann(d,e,f){var x,w,v
if(d===1||d===9||e!==1)return new B.FE(null,f)
x=B.b(f.split(" "),y.s)
if(x.length>4){w=y.N
v=B.fK(x,0,B.iZ(4,"count",y.S),w).b2(0," ")
if(C.bky(v)===$.bD5())return new B.FE(v,B.fK(x,4,null,w).b2(0," "))}return new B.FE(null,f)},
bky(d){var x,w,v,u=new B.cQ("")
for(x=new B.MF(d);x.u();){w=x.d
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
return D.c.aF(x.charCodeAt(0)==0?x:x).toLowerCase()},
bAC(d){var x,w,v,u,t,s,r={},q=C.bky(C.bSn(d))
r.a=q
r.a=D.c.aF(D.c.fY(q,B.bg("^\u0633\u0648\u0631\u0647\\s*",!0,!1),""))
x=y.t
w=B.b([],x)
for(v=1;v<=114;++v)w.push(v)
u=r.a
if(u.length===0)return w
t=B.hR(u,null)
if(t!=null)return t>=1&&t<=114?B.b([t],x):D.rP
x=r.a
u=B.bg("[\\s'\\-]",!0,!1)
s=y.Z
x=B.a_(new B.aV(w,new C.bl1(r,B.c4(x,u,"")),s),s.i("L.E"))
return x},
bSn(d){return B.Gz(d,B.bg("[\u0660-\u0669]",!0,!1),new C.bjg(),null)},
mU:function mU(d,e){this.a=d
this.b=e},
aFK:function aFK(){},
bl1:function bl1(d,e){this.a=d
this.b=e},
bjg:function bjg(){},
bnQ(){var x=$.bv9
return x==null?$.bv9=new C.aFG().$0():x},
j0(d){return"\u0633\u0648\u0631\u0629 "+A.ci[d-1].a[0]},
aFG:function aFG(){},
bk0(d){return C.bU2(d)},
bU2(d){var x=0,w=B.o(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$bk0=B.k(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length<2||d[0]!==31||d[1]!==139){v=D.ai.bQ(d)
x=1
break}u=4
k=b.G
s=k.DecompressionStream
r=k.Response
x=s!=null&&r!=null?7:8
break
case 7:k=y.g
j=y.o
q=B.a0Y(k.a(s),"gzip",j)
p=B.a0Y(k.a(r),d,j)
o=B.e5(p.body)
n=B.eM(o,"pipeThrough",q,null,j)
m=B.a0Y(r,n,j)
x=9
return B.e(B.e6(B.eM(m,"text",null,null,j),y.N),$async$bk0)
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
case 6:v=D.ai.bQ(C.bU1(d))
x=1
break
case 1:return B.m(v,w)
case 2:return B.l(t.at(-1),w)}})
return B.n($async$bk0,w)}},A
J=c[1]
B=c[0]
D=c[2]
C=a.updateHolder(c[10],C)
A=c[27]
C.F5.prototype={}
C.b_q.prototype={
lL(d){var x,w,v,u,t=this,s=t.e
for(x=t.a,w=x.length;v=t.f,v<d;){u=t.b
if(u>=w)throw B.j(A.a5v)
t.b=u+1
s=(s|D.e.NJ(x[u],v))>>>0
t.f=v+8}t.e=D.e.Sc(s,d)
t.f=v-d
return(s&D.e.S8(1,d)-1)>>>0},
Rx(d){var x,w=this,v=w.d,u=w.c,t=u.length
if(v===t){x=new Uint8Array(t*2)
D.a0.hx(x,0,v,u)
w.c=x
v=x}else v=u
u=w.d++
v.$flags&2&&B.an(v)
v[u]=d},
bQ(d){var x,w,v,u,t,s
for(x=d.a,w=0,v=0,u=0,t=1;t<16;++t){w=(w|this.lL(1))>>>0
s=x[t]
if(w-s<v)return d.b[u+(w-v)]
u+=s
v=v+s<<1>>>0
w=w<<1}throw B.j(A.a5C)},
aaR(d,e){var x,w,v,u,t,s=this
for(;;){x=s.bQ(d)
if(x<256)s.Rx(x)
else if(x===256)return
else{x-=257
if(x>=29)throw B.j(A.a5y)
w=A.alR[x]+s.lL(A.acE[x])
v=s.bQ(e)
u=A.alZ[v]+s.lL(A.afQ[v])
if(u>s.d)throw B.j(A.a5E)
for(t=0;t<w;++t)s.Rx(s.c[s.d-u])}}},
ag2(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=B.cg(),f=B.cg(),e=y.S,d=h.a,a0=!1
do{x=h.lL(1)
w=h.lL(2)
if(w===0){v=h.f=h.e=0
u=h.b
t=(d[u]|d[u+1]<<8)>>>0
h.b=u+4
for(;v<t;++v)h.Rx(d[h.b++])}else if(w===1){if(!a0){s=B.bV(318,0,!1,e)
for(r=0;r<144;++r)s[r]=8
for(r=144;r<256;++r)s[r]=9
for(r=256;r<280;++r)s[r]=7
for(r=280;r<288;++r)s[r]=8
for(r=288;r<318;++r)s[r]=5
u=new Int16Array(16)
g.seX(new C.F5(u,new Int16Array(288)))
u=new Int16Array(16)
f.seX(new C.F5(u,new Int16Array(30)))
C.aeZ(g.b9(),s,0,288)
C.aeZ(f.b9(),s,288,30)
a0=!0}h.aaR(g.b9(),f.b9())}else if(w===2){q=h.lL(5)+257
p=h.lL(5)+1
o=h.lL(4)+4
s=B.bV(320,0,!1,e)
for(v=0;v<o;++v)s[A.alq[v]]=h.lL(3)
u=new Int16Array(16)
n=new C.F5(u,new Int16Array(288))
u=new Int16Array(16)
m=new C.F5(u,new Int16Array(30))
C.aeZ(n,s,0,19)
for(u=q+p,l=0;l<u;){k=h.bQ(n)
if(k<16){j=l+1
s[l]=k
l=j}else{if(k===16){if(l===0)throw B.j(A.a5A)
t=s[l-1]
k=3+h.lL(2)}else{k=k===17?3+h.lL(3):11+h.lL(7)
t=0}if(l+k>u)throw B.j(A.a5z)
for(;i=k-1,k>0;k=i,l=j){j=l+1
s[l]=t}}}C.aeZ(n,s,0,q)
C.aeZ(m,s,q,p)
h.aaR(n,m)}else throw B.j(A.a5w)}while(x===0)
e=h.c
d=h.d
return e.length===d?e:B.yN(e,0,d)}}
C.mU.prototype={
Cx(d,e){return this.a[d-1][e-1]}}
var z=a.updateTypes(["a4<mU>()"])
C.aFK.prototype={
$0(){var x=0,w=B.o(y.x),v,u=2,t=[],s,r,q,p,o
var $async$$0=B.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return B.e($.zU().hG("assets/quran/quran-uthmani.txt.gz"),$async$$0)
case 7:s=e
x=8
return B.e(C.bk0(J.eK(J.brh(s),s.byteOffset,s.byteLength)),$async$$0)
case 8:r=e
q=C.bKv(r)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
$.bnR=null
throw o
x=6
break
case 3:x=2
break
case 6:case 1:return B.m(v,w)
case 2:return B.l(t.at(-1),w)}})
return B.n($async$$0,w)},
$S:z+0}
C.bl1.prototype={
$1(d){var x=d-1,w=C.bky(A.ci[x].a[0]),v=this.a
if(D.c.n(w,v.a)||D.c.n(D.c.fY(w,B.bg("^\u0627\u0644",!0,!1),""),v.a))return!0
x=A.ci[x].a[3]
v=B.bg("[\\s'\\-]",!0,!1)
return D.c.n(B.c4(x.toLowerCase(),v,""),this.b)},
$S:67}
C.bjg.prototype={
$1(d){var x=d.h(0,0)
x.toString
return""+(x.charCodeAt(0)-1632)},
$S:55}
C.aFG.prototype={
$0(){var x=0,w=B.o(y.y),v,u=2,t=[],s,r,q,p
var $async$$0=B.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=new B.a_O("AmiriQuranMT",B.b([],y.m))
r.a9L($.zU().hG("assets/quran/AmiriQuran-Regular.ttf"))
s=r
x=7
return B.e(s.rE(),$async$$0)
case 7:$.bva=!0
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
case 6:case 1:return B.m(v,w)
case 2:return B.l(t.at(-1),w)}})
return B.n($async$$0,w)},
$S:145};(function inheritance(){var x=a.inheritMany
x(B.M,[C.F5,C.b_q,C.mU])
x(B.mi,[C.aFK,C.aFG])
x(B.iH,[C.bl1,C.bjg])})()
var y=(function rtii(){var x=B.aj
return{m:x("y<a4<jo>>"),s:x("y<i>"),t:x("y<v>"),o:x("bi"),g:x("fZ"),a:x("Q<i>"),x:x("mU"),N:x("i"),Z:x("aV<v>"),y:x("F"),S:x("v")}})();(function constants(){var x=a.makeConstList
A.x5=new B.I(0.25882352941176473,0,0,0,D.j)
A.yb=new B.a2(12,10,12,10)
A.a5v=new B.dU("truncated deflate stream",null,null)
A.a5w=new B.dU("bad block type",null,null)
A.a5y=new B.dU("bad length symbol",null,null)
A.a5z=new B.dU("too many lengths",null,null)
A.a5A=new B.dU("repeat with no first length",null,null)
A.a5C=new B.dU("bad huffman code",null,null)
A.a5E=new B.dU("distance too far back",null,null)
A.a5F=new B.dU("not a gzip stream",null,null)
A.acE=x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],y.t)
A.afQ=x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],y.t)
A.az4=new B.aO(["\u0627\u0644\u0641\u0627\u062a\u062d\u0629",7,!0,"Al-Faatiha"])
A.ay6=new B.aO(["\u0627\u0644\u0628\u0642\u0631\u0629",286,!1,"Al-Baqara"])
A.axU=new B.aO(["\u0622\u0644 \u0639\u0645\u0631\u0627\u0646",200,!1,"Aal-i-Imraan"])
A.ayr=new B.aO(["\u0627\u0644\u0646\u0633\u0627\u0621",176,!1,"An-Nisaa"])
A.ayC=new B.aO(["\u0627\u0644\u0645\u0627\u0626\u062f\u0629",120,!1,"Al-Maaida"])
A.axC=new B.aO(["\u0627\u0644\u0623\u0646\u0639\u0627\u0645",165,!0,"Al-An'aam"])
A.ay4=new B.aO(["\u0627\u0644\u0623\u0639\u0631\u0627\u0641",206,!0,"Al-A'raaf"])
A.ay5=new B.aO(["\u0627\u0644\u0623\u0646\u0641\u0627\u0644",75,!1,"Al-Anfaal"])
A.az7=new B.aO(["\u0627\u0644\u062a\u0648\u0628\u0629",129,!1,"At-Tawba"])
A.axz=new B.aO(["\u064a\u0648\u0646\u0633",109,!0,"Yunus"])
A.ayU=new B.aO(["\u0647\u0648\u062f",123,!0,"Hud"])
A.ayP=new B.aO(["\u064a\u0648\u0633\u0641",111,!0,"Yusuf"])
A.ayh=new B.aO(["\u0627\u0644\u0631\u0639\u062f",43,!1,"Ar-Ra'd"])
A.az_=new B.aO(["\u0627\u0628\u0631\u0627\u0647\u064a\u0645",52,!0,"Ibrahim"])
A.ayp=new B.aO(["\u0627\u0644\u062d\u062c\u0631",99,!0,"Al-Hijr"])
A.azh=new B.aO(["\u0627\u0644\u0646\u062d\u0644",128,!0,"An-Nahl"])
A.axA=new B.aO(["\u0627\u0644\u0625\u0633\u0631\u0627\u0621",111,!0,"Al-Israa"])
A.az9=new B.aO(["\u0627\u0644\u0643\u0647\u0641",110,!0,"Al-Kahf"])
A.aya=new B.aO(["\u0645\u0631\u064a\u0645",98,!0,"Maryam"])
A.ayE=new B.aO(["\u0637\u0647",135,!0,"Taa-Haa"])
A.ayZ=new B.aO(["\u0627\u0644\u0623\u0646\u0628\u064a\u0627\u0621",112,!0,"Al-Anbiyaa"])
A.axS=new B.aO(["\u0627\u0644\u062d\u062c",78,!1,"Al-Hajj"])
A.az5=new B.aO(["\u0627\u0644\u0645\u0624\u0645\u0646\u0648\u0646",118,!0,"Al-Muminoon"])
A.ayk=new B.aO(["\u0627\u0644\u0646\u0648\u0631",64,!1,"An-Noor"])
A.ayF=new B.aO(["\u0627\u0644\u0641\u0631\u0642\u0627\u0646",77,!0,"Al-Furqaan"])
A.ayM=new B.aO(["\u0627\u0644\u0634\u0639\u0631\u0627\u0621",227,!0,"Ash-Shu'araa"])
A.aym=new B.aO(["\u0627\u0644\u0646\u0645\u0644",93,!0,"An-Naml"])
A.axQ=new B.aO(["\u0627\u0644\u0642\u0635\u0635",88,!0,"Al-Qasas"])
A.axE=new B.aO(["\u0627\u0644\u0639\u0646\u0643\u0628\u0648\u062a",69,!0,"Al-Ankaboot"])
A.azg=new B.aO(["\u0627\u0644\u0631\u0648\u0645",60,!0,"Ar-Room"])
A.ayV=new B.aO(["\u0644\u0642\u0645\u0627\u0646",34,!0,"Luqman"])
A.az0=new B.aO(["\u0627\u0644\u0633\u062c\u062f\u0629",30,!0,"As-Sajda"])
A.axy=new B.aO(["\u0627\u0644\u0623\u062d\u0632\u0627\u0628",73,!1,"Al-Ahzaab"])
A.ay0=new B.aO(["\u0633\u0628\u0625",54,!0,"Saba"])
A.ayg=new B.aO(["\u0641\u0627\u0637\u0631",45,!0,"Faatir"])
A.axD=new B.aO(["\u064a\u0633",83,!0,"Yaseen"])
A.ayG=new B.aO(["\u0627\u0644\u0635\u0627\u0641\u0627\u062a",182,!0,"As-Saaffaat"])
A.axZ=new B.aO(["\u0635",88,!0,"Saad"])
A.aye=new B.aO(["\u0627\u0644\u0632\u0645\u0631",75,!0,"Az-Zumar"])
A.ayi=new B.aO(["\u063a\u0627\u0641\u0631",85,!0,"Al-Ghaafir"])
A.ayu=new B.aO(["\u0641\u0635\u0644\u062a",54,!0,"Fussilat"])
A.ayj=new B.aO(["\u0627\u0644\u0634\u0648\u0631\u0649",53,!0,"Ash-Shura"])
A.axG=new B.aO(["\u0627\u0644\u0632\u062e\u0631\u0641",89,!0,"Az-Zukhruf"])
A.axM=new B.aO(["\u0627\u0644\u062f\u062e\u0627\u0646",59,!0,"Ad-Dukhaan"])
A.az1=new B.aO(["\u0627\u0644\u062c\u0627\u062b\u064a\u0629",37,!0,"Al-Jaathiya"])
A.ayR=new B.aO(["\u0627\u0644\u0623\u062d\u0642\u0627\u0641",35,!0,"Al-Ahqaf"])
A.ayf=new B.aO(["\u0645\u062d\u0645\u062f",38,!1,"Muhammad"])
A.ayo=new B.aO(["\u0627\u0644\u0641\u062a\u062d",29,!1,"Al-Fath"])
A.az8=new B.aO(["\u0627\u0644\u062d\u062c\u0631\u0627\u062a",18,!1,"Al-Hujuraat"])
A.ayw=new B.aO(["\u0642",45,!0,"Qaaf"])
A.axX=new B.aO(["\u0627\u0644\u0630\u0627\u0631\u064a\u0627\u062a",60,!0,"Adh-Dhaariyat"])
A.ayb=new B.aO(["\u0627\u0644\u0637\u0648\u0631",49,!0,"At-Tur"])
A.ayT=new B.aO(["\u0627\u0644\u0646\u062c\u0645",62,!0,"An-Najm"])
A.az6=new B.aO(["\u0627\u0644\u0642\u0645\u0631",55,!0,"Al-Qamar"])
A.azd=new B.aO(["\u0627\u0644\u0631\u062d\u0645\u0646",78,!1,"Ar-Rahmaan"])
A.ayd=new B.aO(["\u0627\u0644\u0648\u0627\u0642\u0639\u0629",96,!0,"Al-Waaqia"])
A.ayK=new B.aO(["\u0627\u0644\u062d\u062f\u064a\u062f",29,!1,"Al-Hadid"])
A.ayz=new B.aO(["\u0627\u0644\u0645\u062c\u0627\u062f\u0644\u0629",22,!1,"Al-Mujaadila"])
A.axw=new B.aO(["\u0627\u0644\u062d\u0634\u0631",24,!1,"Al-Hashr"])
A.axN=new B.aO(["\u0627\u0644\u0645\u0645\u062a\u062d\u0646\u0629",13,!1,"Al-Mumtahana"])
A.axW=new B.aO(["\u0627\u0644\u0635\u0641",14,!1,"As-Saff"])
A.axK=new B.aO(["\u0627\u0644\u062c\u0645\u0639\u0629",11,!1,"Al-Jumu'a"])
A.ayx=new B.aO(["\u0627\u0644\u0645\u0646\u0627\u0641\u0642\u0648\u0646",11,!1,"Al-Munaafiqoon"])
A.axO=new B.aO(["\u0627\u0644\u062a\u063a\u0627\u0628\u0646",18,!1,"At-Taghaabun"])
A.azj=new B.aO(["\u0627\u0644\u0637\u0644\u0627\u0642",12,!1,"At-Talaaq"])
A.az3=new B.aO(["\u0627\u0644\u062a\u062d\u0631\u064a\u0645",12,!1,"At-Tahrim"])
A.azf=new B.aO(["\u0627\u0644\u0645\u0644\u0643",30,!0,"Al-Mulk"])
A.ayc=new B.aO(["\u0627\u0644\u0642\u0644\u0645",52,!0,"Al-Qalam"])
A.azc=new B.aO(["\u0627\u0644\u062d\u0627\u0642\u0629",52,!0,"Al-Haaqqa"])
A.ayH=new B.aO(["\u0627\u0644\u0645\u0639\u0627\u0631\u062c",44,!0,"Al-Ma'aarij"])
A.ay7=new B.aO(["\u0646\u0648\u062d",28,!0,"Nooh"])
A.ayv=new B.aO(["\u0627\u0644\u062c\u0646",28,!0,"Al-Jinn"])
A.aza=new B.aO(["\u0627\u0644\u0645\u0632\u0645\u0644",20,!0,"Al-Muzzammil"])
A.aze=new B.aO(["\u0627\u0644\u0645\u062f\u062b\u0631",56,!0,"Al-Muddaththir"])
A.ayB=new B.aO(["\u0627\u0644\u0642\u064a\u0627\u0645\u0629",40,!0,"Al-Qiyaama"])
A.ayq=new B.aO(["\u0627\u0644\u0627\u0646\u0633\u0627\u0646",31,!1,"Al-Insaan"])
A.axB=new B.aO(["\u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a",50,!0,"Al-Mursalaat"])
A.ayt=new B.aO(["\u0627\u0644\u0646\u0628\u0625",40,!0,"An-Naba"])
A.ayL=new B.aO(["\u0627\u0644\u0646\u0627\u0632\u0639\u0627\u062a",46,!0,"An-Naazi'aat"])
A.ayS=new B.aO(["\u0639\u0628\u0633",42,!0,"Abasa"])
A.ay9=new B.aO(["\u0627\u0644\u062a\u0643\u0648\u064a\u0631",29,!0,"At-Takwir"])
A.ay3=new B.aO(["\u0627\u0644\u0625\u0646\u0641\u0637\u0627\u0631",19,!0,"Al-Infitaar"])
A.ayy=new B.aO(["\u0627\u0644\u0645\u0637\u0641\u0641\u064a\u0646",36,!0,"Al-Mutaffifin"])
A.ayQ=new B.aO(["\u0627\u0644\u0625\u0646\u0634\u0642\u0627\u0642",25,!0,"Al-Inshiqaaq"])
A.ayN=new B.aO(["\u0627\u0644\u0628\u0631\u0648\u062c",22,!0,"Al-Burooj"])
A.ays=new B.aO(["\u0627\u0644\u0637\u0627\u0631\u0642",17,!0,"At-Taariq"])
A.axP=new B.aO(["\u0627\u0644\u0623\u0639\u0644\u0649",19,!0,"Al-A'laa"])
A.ay8=new B.aO(["\u0627\u0644\u063a\u0627\u0634\u064a\u0629",26,!0,"Al-Ghaashiya"])
A.ayW=new B.aO(["\u0627\u0644\u0641\u062c\u0631",30,!0,"Al-Fajr"])
A.ayA=new B.aO(["\u0627\u0644\u0628\u0644\u062f",20,!0,"Al-Balad"])
A.ay2=new B.aO(["\u0627\u0644\u0634\u0645\u0633",15,!0,"Ash-Shams"])
A.ay1=new B.aO(["\u0627\u0644\u0644\u064a\u0644",21,!0,"Al-Lail"])
A.ay_=new B.aO(["\u0627\u0644\u0636\u062d\u0649",11,!0,"Ad-Dhuhaa"])
A.axY=new B.aO(["\u0627\u0644\u0634\u0631\u062d",8,!0,"Ash-Sharh"])
A.axV=new B.aO(["\u0627\u0644\u062a\u064a\u0646",8,!0,"At-Tin"])
A.ayI=new B.aO(["\u0627\u0644\u0639\u0644\u0642",19,!0,"Al-Alaq"])
A.axJ=new B.aO(["\u0627\u0644\u0642\u062f\u0631",5,!0,"Al-Qadr"])
A.azb=new B.aO(["\u0627\u0644\u0628\u064a\u0646\u0629",8,!1,"Al-Bayyina"])
A.axx=new B.aO(["\u0627\u0644\u0632\u0644\u0632\u0644\u0629",8,!1,"Az-Zalzala"])
A.ayn=new B.aO(["\u0627\u0644\u0639\u0627\u062f\u064a\u0627\u062a",11,!0,"Al-Aadiyaat"])
A.axH=new B.aO(["\u0627\u0644\u0642\u0627\u0631\u0639\u0629",11,!0,"Al-Qaari'a"])
A.axF=new B.aO(["\u0627\u0644\u062a\u0643\u0627\u062b\u0631",8,!0,"At-Takaathur"])
A.axL=new B.aO(["\u0627\u0644\u0639\u0635\u0631",3,!0,"Al-Asr"])
A.axR=new B.aO(["\u0627\u0644\u0647\u0645\u0632\u0629",9,!0,"Al-Humaza"])
A.axT=new B.aO(["\u0627\u0644\u0641\u064a\u0644",5,!0,"Al-Fil"])
A.ayJ=new B.aO(["\u0642\u0631\u064a\u0634",4,!0,"Quraish"])
A.axI=new B.aO(["\u0627\u0644\u0645\u0627\u0639\u0648\u0646",7,!0,"Al-Maa'un"])
A.ayY=new B.aO(["\u0627\u0644\u0643\u0648\u062b\u0631",3,!0,"Al-Kawthar"])
A.ayO=new B.aO(["\u0627\u0644\u0643\u0627\u0641\u0631\u0648\u0646",6,!0,"Al-Kaafiroon"])
A.ayX=new B.aO(["\u0627\u0644\u0646\u0635\u0631",3,!1,"An-Nasr"])
A.azi=new B.aO(["\u0627\u0644\u0645\u0633\u062f",5,!0,"Al-Masad"])
A.az2=new B.aO(["\u0627\u0644\u0625\u062e\u0644\u0627\u0635",4,!0,"Al-Ikhlaas"])
A.ayl=new B.aO(["\u0627\u0644\u0641\u0644\u0642",5,!0,"Al-Falaq"])
A.ayD=new B.aO(["\u0627\u0644\u0646\u0627\u0633",6,!0,"An-Naas"])
A.ci=x([A.az4,A.ay6,A.axU,A.ayr,A.ayC,A.axC,A.ay4,A.ay5,A.az7,A.axz,A.ayU,A.ayP,A.ayh,A.az_,A.ayp,A.azh,A.axA,A.az9,A.aya,A.ayE,A.ayZ,A.axS,A.az5,A.ayk,A.ayF,A.ayM,A.aym,A.axQ,A.axE,A.azg,A.ayV,A.az0,A.axy,A.ay0,A.ayg,A.axD,A.ayG,A.axZ,A.aye,A.ayi,A.ayu,A.ayj,A.axG,A.axM,A.az1,A.ayR,A.ayf,A.ayo,A.az8,A.ayw,A.axX,A.ayb,A.ayT,A.az6,A.azd,A.ayd,A.ayK,A.ayz,A.axw,A.axN,A.axW,A.axK,A.ayx,A.axO,A.azj,A.az3,A.azf,A.ayc,A.azc,A.ayH,A.ay7,A.ayv,A.aza,A.aze,A.ayB,A.ayq,A.axB,A.ayt,A.ayL,A.ayS,A.ay9,A.ay3,A.ayy,A.ayQ,A.ayN,A.ays,A.axP,A.ay8,A.ayW,A.ayA,A.ay2,A.ay1,A.ay_,A.axY,A.axV,A.ayI,A.axJ,A.azb,A.axx,A.ayn,A.axH,A.axF,A.axL,A.axR,A.axT,A.ayJ,A.axI,A.ayY,A.ayO,A.ayX,A.azi,A.az2,A.ayl,A.ayD],B.aj("y<+(i,v,F,i)>"))
A.alq=x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],y.t)
A.alR=x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],y.t)
A.alZ=x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],y.t)
A.uJ=new B.f6(" ",null,null,D.bj,null,null,null,null,null,null,null)})();(function staticFields(){$.bnR=null
$.bv9=null
$.bva=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c_s","bD5",()=>C.bky("\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650"))})()};
(a=>{a["vEICDWllpliM9WnZ0k3U8r9sMhA="]=a.current})($__dart_deferred_initializers__);