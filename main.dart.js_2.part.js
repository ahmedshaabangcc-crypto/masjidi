((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,C={
bXh(d){var x,w,v,u,t=d.length
if(t<18||d[0]!==31||d[1]!==139||d[2]!==8)throw B.o(A.a79)
x=d[3]
w=(x&4)!==0?10+(2+((d[10]|d[11]<<8)>>>0)):10
if((x&8)!==0){for(;v=w+1,d[w]!==0;w=v);w=v}if((x&16)!==0){for(;v=w+1,d[w]!==0;w=v);w=v}if((x&2)!==0)w+=2
u=(d[t-4]|d[t-3]<<8|d[t-2]<<16|d[t-1]<<24)>>>0
t=u>0?u:65536
return new C.b0O(d,w,new Uint8Array(t)).agF()},
afL(d,e,f,g){var x,w,v,u,t,s,r,q,p,o
for(x=d.a,w=x.$flags|0,v=0;v<16;++v){w&2&&B.ao(x)
x[v]=0}for(u=0;u<g;++u){t=e[f+u]
s=x[t]
w&2&&B.ao(x)
x[t]=s+1}r=B.c_(16,0,!1,y.S)
for(q=1;q<15;q=p){p=q+1
r[p]=r[q]+x[q]}for(x=d.b,w=x.$flags|0,u=0;u<g;++u){o=e[f+u]
if(o!==0){t=r[o]
r[o]=t+1
w&2&&B.ao(x)
x[t]=u}}},
FA:function FA(d,e){this.a=d
this.b=e},
b0O:function b0O(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0},
aGN(){var x=$.bqB
return x==null?$.bqB=new C.aGO().$0():x},
bNE(d){var x,w,v,u,t,s,r,q,p,o,n,m=J.kY(114,y.a)
for(x=y.N,w=0;w<114;++w)m[w]=B.c_(A.cp[w].a[1],"",!1,x)
v=new B.d2("")
for(x=d.split("\n"),u=x.length,t=0;t<u;++t){s=x[t]
r=D.c.ha(s,"\r")?D.c.X(s,0,s.length-1):s
if(r.length===0)continue
if(D.c.bI(r,"#")){v.a+=r+"\n"
continue}q=D.c.f3(r,"|")
p=q<0?-1:D.c.ix(r,"|",q+1)
if(p<0)continue
o=B.fR(D.c.X(r,0,q),null)
n=B.fR(D.c.X(r,q+1,p),null)
if(o==null||n==null||o<1||o>114||n<1||n>m[o-1].length)continue
m[o-1][n-1]=D.c.c5(r,p+1)}x=v.a
return new C.nc(m,D.c.EZ(x.charCodeAt(0)==0?x:x))},
H3(d,e,f){var x,w,v
if(d===1||d===9||e!==1)return new B.G8(null,f)
x=B.a(f.split(" "),y.s)
if(x.length>4){w=y.N
v=B.fh(x,0,B.ih(4,"count",y.S),w).aU(0," ")
if(C.bn1(v)===$.bG7())return new B.G8(v,B.fh(x,4,null,w).aU(0," "))}return new B.G8(null,f)},
bn1(d){var x,w,v,u=new B.d2("")
for(x=new B.N9(d);x.u();){w=x.d
v=!0
if(!(w>=1611&&w<=1631))if(w!==1648)v=w>=1750&&w<=1773||w===1600
if(v)continue
A:{if(1570===w||1571===w||1573===w||1649===w){v=B.e9(1575)
u.a+=v
break A}if(1577===w){v=B.e9(1607)
u.a+=v
break A}if(1609===w){v=B.e9(1610)
u.a+=v
break A}v=B.e9(w)
u.a+=v}}x=u.a
return D.c.aw(x.charCodeAt(0)==0?x:x).toLowerCase()},
bDz(d){var x,w,v,u,t,s,r={},q=C.bn1(C.bVC(d))
r.a=q
r.a=D.c.aw(D.c.h_(q,B.b3("^\u0633\u0648\u0631\u0647\\s*",!0,!1),""))
x=y.t
w=B.a([],x)
for(v=1;v<=114;++v)w.push(v)
u=r.a
if(u.length===0)return w
t=B.fR(u,null)
if(t!=null)return t>=1&&t<=114?B.a([t],x):D.t5
x=r.a
u=B.b3("[\\s'\\-]",!0,!1)
s=y.Z
x=B.a_(new B.aO(w,new C.bnF(r,B.c7(x,u,"")),s),s.i("L.E"))
return x},
bVC(d){return B.H4(d,B.b3("[\u0660-\u0669]",!0,!1),new C.blG(),null)},
nc:function nc(d,e){this.a=d
this.b=e},
aGO:function aGO(){},
bnF:function bnF(d,e){this.a=d
this.b=e},
blG:function blG(){},
bqA(){var x=$.by0
return x==null?$.by0=new C.aGK().$0():x},
jd(d){return"\u0633\u0648\u0631\u0629 "+A.cp[d-1].a[0]},
aGK:function aGK(){},
bmt(d){return C.bXi(d)},
bXi(d){var x=0,w=B.n(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$bmt=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length<2||d[0]!==31||d[1]!==139){v=D.ag.bS(d)
x=1
break}u=4
k=b.G
s=k.DecompressionStream
r=k.Response
x=s!=null&&r!=null?7:8
break
case 7:k=y.g
j=y.o
q=B.xg(k.a(s),"gzip",null,j)
p=B.xg(k.a(r),d,null,j)
o=B.cv(p.body)
n=B.cv(B.d9(o,"pipeThrough",q,null,null,null))
m=B.xg(r,n,null,j)
x=9
return B.d(B.eb(B.cv(B.d9(m,"text",null,null,null,null)),y.N),$async$bmt)
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
case 6:v=D.ag.bS(C.bXh(d))
x=1
break
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$bmt,w)}},A
J=c[1]
B=c[0]
D=c[2]
C=a.updateHolder(c[11],C)
A=c[27]
C.FA.prototype={}
C.b0O.prototype={
lR(d){var x,w,v,u,t=this,s=t.e
for(x=t.a,w=x.length;v=t.f,v<d;){u=t.b
if(u>=w)throw B.o(A.a7_)
t.b=u+1
s=(s|D.e.O5(x[u],v))>>>0
t.f=v+8}t.e=D.e.SD(s,d)
t.f=v-d
return(s&D.e.Sz(1,d)-1)>>>0},
RZ(d){var x,w=this,v=w.d,u=w.c,t=u.length
if(v===t){x=new Uint8Array(t*2)
D.a2.hA(x,0,v,u)
w.c=x
v=x}else v=u
u=w.d++
v.$flags&2&&B.ao(v)
v[u]=d},
bS(d){var x,w,v,u,t,s
for(x=d.a,w=0,v=0,u=0,t=1;t<16;++t){w=(w|this.lR(1))>>>0
s=x[t]
if(w-s<v)return d.b[u+(w-v)]
u+=s
v=v+s<<1>>>0
w=w<<1}throw B.o(A.a76)},
abl(d,e){var x,w,v,u,t,s=this
for(;;){x=s.bS(d)
if(x<256)s.RZ(x)
else if(x===256)return
else{x-=257
if(x>=29)throw B.o(A.a72)
w=A.anJ[x]+s.lR(A.aeo[x])
v=s.bS(e)
u=A.anR[v]+s.lR(A.ahE[v])
if(u>s.d)throw B.o(A.a78)
for(t=0;t<w;++t)s.RZ(s.c[s.d-u])}}},
agF(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=B.cl(),f=B.cl(),e=y.S,d=h.a,a0=!1
do{x=h.lR(1)
w=h.lR(2)
if(w===0){v=h.f=h.e=0
u=h.b
t=(d[u]|d[u+1]<<8)>>>0
h.b=u+4
for(;v<t;++v)h.RZ(d[h.b++])}else if(w===1){if(!a0){s=B.c_(318,0,!1,e)
for(r=0;r<144;++r)s[r]=8
for(r=144;r<256;++r)s[r]=9
for(r=256;r<280;++r)s[r]=7
for(r=280;r<288;++r)s[r]=8
for(r=288;r<318;++r)s[r]=5
u=new Int16Array(16)
g.sf1(new C.FA(u,new Int16Array(288)))
u=new Int16Array(16)
f.sf1(new C.FA(u,new Int16Array(30)))
C.afL(g.bb(),s,0,288)
C.afL(f.bb(),s,288,30)
a0=!0}h.abl(g.bb(),f.bb())}else if(w===2){q=h.lR(5)+257
p=h.lR(5)+1
o=h.lR(4)+4
s=B.c_(320,0,!1,e)
for(v=0;v<o;++v)s[A.ani[v]]=h.lR(3)
u=new Int16Array(16)
n=new C.FA(u,new Int16Array(288))
u=new Int16Array(16)
m=new C.FA(u,new Int16Array(30))
C.afL(n,s,0,19)
for(u=q+p,l=0;l<u;){k=h.bS(n)
if(k<16){j=l+1
s[l]=k
l=j}else{if(k===16){if(l===0)throw B.o(A.a74)
t=s[l-1]
k=3+h.lR(2)}else{k=k===17?3+h.lR(3):11+h.lR(7)
t=0}if(l+k>u)throw B.o(A.a73)
for(;i=k-1,k>0;k=i,l=j){j=l+1
s[l]=t}}}C.afL(n,s,0,q)
C.afL(m,s,q,p)
h.abl(n,m)}else throw B.o(A.a70)}while(x===0)
e=h.c
d=h.d
return e.length===d?e:B.ze(e,0,d)}}
C.nc.prototype={
uE(d,e){return this.a[d-1][e-1]}}
var z=a.updateTypes(["a6<nc>()"])
C.aGO.prototype={
$0(){var x=0,w=B.n(y.x),v,u=2,t=[],s,r,q,p,o
var $async$$0=B.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return B.d($.Ap().hK("assets/quran/quran-uthmani.txt.gz"),$async$$0)
case 7:s=e
x=8
return B.d(C.bmt(J.eS(J.bu6(s),s.byteOffset,s.byteLength)),$async$$0)
case 8:r=e
q=C.bNE(r)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
$.bqB=null
throw o
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$0,w)},
$S:z+0}
C.bnF.prototype={
$1(d){var x=d-1,w=C.bn1(A.cp[x].a[0]),v=this.a
if(D.c.n(w,v.a)||D.c.n(D.c.h_(w,B.b3("^\u0627\u0644",!0,!1),""),v.a))return!0
x=A.cp[x].a[3]
v=B.b3("[\\s'\\-]",!0,!1)
return D.c.n(B.c7(x.toLowerCase(),v,""),this.b)},
$S:75}
C.blG.prototype={
$1(d){var x=d.h(0,0)
x.toString
return""+(x.charCodeAt(0)-1632)},
$S:61}
C.aGK.prototype={
$0(){var x=0,w=B.n(y.y),v,u=2,t=[],s,r,q,p
var $async$$0=B.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=new B.a0t("AmiriQuranMT",B.a([],y.m))
r.aag($.Ap().hK("assets/quran/AmiriQuran-Regular.ttf"))
s=r
x=7
return B.d(s.rO(),$async$$0)
case 7:$.by1=!0
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
$S:137};(function inheritance(){var x=a.inheritMany
x(B.N,[C.FA,C.b0O,C.nc])
x(B.lJ,[C.aGO,C.aGK])
x(B.ik,[C.bnF,C.blG])})()
var y=(function rtii(){var x=B.a9
return{m:x("y<a6<jD>>"),s:x("y<h>"),t:x("y<v>"),o:x("bi"),g:x("h5"),a:x("P<h>"),x:x("nc"),N:x("h"),Z:x("aO<v>"),y:x("C"),S:x("v")}})();(function constants(){var x=a.makeConstList
A.xt=new B.I(0.25882352941176473,0,0,0,D.k)
A.yA=new B.a1(12,10,12,10)
A.a7_=new B.e3("truncated deflate stream",null,null)
A.a70=new B.e3("bad block type",null,null)
A.a72=new B.e3("bad length symbol",null,null)
A.a73=new B.e3("too many lengths",null,null)
A.a74=new B.e3("repeat with no first length",null,null)
A.a76=new B.e3("bad huffman code",null,null)
A.a78=new B.e3("distance too far back",null,null)
A.a79=new B.e3("not a gzip stream",null,null)
A.aeo=x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],y.t)
A.ahE=x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],y.t)
A.aCg=new B.az(["\u0627\u0644\u0641\u0627\u062a\u062d\u0629",7,!0,"Al-Faatiha"])
A.aB7=new B.az(["\u0627\u0644\u0628\u0642\u0631\u0629",286,!1,"Al-Baqara"])
A.aAR=new B.az(["\u0622\u0644 \u0639\u0645\u0631\u0627\u0646",200,!1,"Aal-i-Imraan"])
A.aBv=new B.az(["\u0627\u0644\u0646\u0633\u0627\u0621",176,!1,"An-Nisaa"])
A.aBH=new B.az(["\u0627\u0644\u0645\u0627\u0626\u062f\u0629",120,!1,"Al-Maaida"])
A.aAx=new B.az(["\u0627\u0644\u0623\u0646\u0639\u0627\u0645",165,!0,"Al-An'aam"])
A.aB5=new B.az(["\u0627\u0644\u0623\u0639\u0631\u0627\u0641",206,!0,"Al-A'raaf"])
A.aB6=new B.az(["\u0627\u0644\u0623\u0646\u0641\u0627\u0644",75,!1,"Al-Anfaal"])
A.aCk=new B.az(["\u0627\u0644\u062a\u0648\u0628\u0629",129,!1,"At-Tawba"])
A.aAt=new B.az(["\u064a\u0648\u0646\u0633",109,!0,"Yunus"])
A.aC2=new B.az(["\u0647\u0648\u062f",123,!0,"Hud"])
A.aBV=new B.az(["\u064a\u0648\u0633\u0641",111,!0,"Yusuf"])
A.aBj=new B.az(["\u0627\u0644\u0631\u0639\u062f",43,!1,"Ar-Ra'd"])
A.aCa=new B.az(["\u0627\u0628\u0631\u0627\u0647\u064a\u0645",52,!0,"Ibrahim"])
A.aBr=new B.az(["\u0627\u0644\u062d\u062c\u0631",99,!0,"Al-Hijr"])
A.aCv=new B.az(["\u0627\u0644\u0646\u062d\u0644",128,!0,"An-Nahl"])
A.aAv=new B.az(["\u0627\u0644\u0625\u0633\u0631\u0627\u0621",111,!0,"Al-Israa"])
A.aCm=new B.az(["\u0627\u0644\u0643\u0647\u0641",110,!0,"Al-Kahf"])
A.aBb=new B.az(["\u0645\u0631\u064a\u0645",98,!0,"Maryam"])
A.aBK=new B.az(["\u0637\u0647",135,!0,"Taa-Haa"])
A.aC8=new B.az(["\u0627\u0644\u0623\u0646\u0628\u064a\u0627\u0621",112,!0,"Al-Anbiyaa"])
A.aAP=new B.az(["\u0627\u0644\u062d\u062c",78,!1,"Al-Hajj"])
A.aCh=new B.az(["\u0627\u0644\u0645\u0624\u0645\u0646\u0648\u0646",118,!0,"Al-Muminoon"])
A.aBm=new B.az(["\u0627\u0644\u0646\u0648\u0631",64,!1,"An-Noor"])
A.aBL=new B.az(["\u0627\u0644\u0641\u0631\u0642\u0627\u0646",77,!0,"Al-Furqaan"])
A.aBS=new B.az(["\u0627\u0644\u0634\u0639\u0631\u0627\u0621",227,!0,"Ash-Shu'araa"])
A.aBo=new B.az(["\u0627\u0644\u0646\u0645\u0644",93,!0,"An-Naml"])
A.aAN=new B.az(["\u0627\u0644\u0642\u0635\u0635",88,!0,"Al-Qasas"])
A.aAz=new B.az(["\u0627\u0644\u0639\u0646\u0643\u0628\u0648\u062a",69,!0,"Al-Ankaboot"])
A.aCu=new B.az(["\u0627\u0644\u0631\u0648\u0645",60,!0,"Ar-Room"])
A.aC3=new B.az(["\u0644\u0642\u0645\u0627\u0646",34,!0,"Luqman"])
A.aCb=new B.az(["\u0627\u0644\u0633\u062c\u062f\u0629",30,!0,"As-Sajda"])
A.aAs=new B.az(["\u0627\u0644\u0623\u062d\u0632\u0627\u0628",73,!1,"Al-Ahzaab"])
A.aB1=new B.az(["\u0633\u0628\u0625",54,!0,"Saba"])
A.aBi=new B.az(["\u0641\u0627\u0637\u0631",45,!0,"Faatir"])
A.aAy=new B.az(["\u064a\u0633",83,!0,"Yaseen"])
A.aBM=new B.az(["\u0627\u0644\u0635\u0627\u0641\u0627\u062a",182,!0,"As-Saaffaat"])
A.aAZ=new B.az(["\u0635",88,!0,"Saad"])
A.aBg=new B.az(["\u0627\u0644\u0632\u0645\u0631",75,!0,"Az-Zumar"])
A.aBk=new B.az(["\u063a\u0627\u0641\u0631",85,!0,"Al-Ghaafir"])
A.aBy=new B.az(["\u0641\u0635\u0644\u062a",54,!0,"Fussilat"])
A.aBl=new B.az(["\u0627\u0644\u0634\u0648\u0631\u0649",53,!0,"Ash-Shura"])
A.aAB=new B.az(["\u0627\u0644\u0632\u062e\u0631\u0641",89,!0,"Az-Zukhruf"])
A.aAH=new B.az(["\u0627\u0644\u062f\u062e\u0627\u0646",59,!0,"Ad-Dukhaan"])
A.aCc=new B.az(["\u0627\u0644\u062c\u0627\u062b\u064a\u0629",37,!0,"Al-Jaathiya"])
A.aBZ=new B.az(["\u0627\u0644\u0623\u062d\u0642\u0627\u0641",35,!0,"Al-Ahqaf"])
A.aBh=new B.az(["\u0645\u062d\u0645\u062f",38,!1,"Muhammad"])
A.aBq=new B.az(["\u0627\u0644\u0641\u062a\u062d",29,!1,"Al-Fath"])
A.aCl=new B.az(["\u0627\u0644\u062d\u062c\u0631\u0627\u062a",18,!1,"Al-Hujuraat"])
A.aBA=new B.az(["\u0642",45,!0,"Qaaf"])
A.aAX=new B.az(["\u0627\u0644\u0630\u0627\u0631\u064a\u0627\u062a",60,!0,"Adh-Dhaariyat"])
A.aBd=new B.az(["\u0627\u0644\u0637\u0648\u0631",49,!0,"At-Tur"])
A.aC1=new B.az(["\u0627\u0644\u0646\u062c\u0645",62,!0,"An-Najm"])
A.aCi=new B.az(["\u0627\u0644\u0642\u0645\u0631",55,!0,"Al-Qamar"])
A.aCr=new B.az(["\u0627\u0644\u0631\u062d\u0645\u0646",78,!1,"Ar-Rahmaan"])
A.aBf=new B.az(["\u0627\u0644\u0648\u0627\u0642\u0639\u0629",96,!0,"Al-Waaqia"])
A.aBQ=new B.az(["\u0627\u0644\u062d\u062f\u064a\u062f",29,!1,"Al-Hadid"])
A.aBE=new B.az(["\u0627\u0644\u0645\u062c\u0627\u062f\u0644\u0629",22,!1,"Al-Mujaadila"])
A.aAp=new B.az(["\u0627\u0644\u062d\u0634\u0631",24,!1,"Al-Hashr"])
A.aAK=new B.az(["\u0627\u0644\u0645\u0645\u062a\u062d\u0646\u0629",13,!1,"Al-Mumtahana"])
A.aAV=new B.az(["\u0627\u0644\u0635\u0641",14,!1,"As-Saff"])
A.aAF=new B.az(["\u0627\u0644\u062c\u0645\u0639\u0629",11,!1,"Al-Jumu'a"])
A.aBB=new B.az(["\u0627\u0644\u0645\u0646\u0627\u0641\u0642\u0648\u0646",11,!1,"Al-Munaafiqoon"])
A.aAL=new B.az(["\u0627\u0644\u062a\u063a\u0627\u0628\u0646",18,!1,"At-Taghaabun"])
A.aCx=new B.az(["\u0627\u0644\u0637\u0644\u0627\u0642",12,!1,"At-Talaaq"])
A.aCf=new B.az(["\u0627\u0644\u062a\u062d\u0631\u064a\u0645",12,!1,"At-Tahrim"])
A.aCt=new B.az(["\u0627\u0644\u0645\u0644\u0643",30,!0,"Al-Mulk"])
A.aBe=new B.az(["\u0627\u0644\u0642\u0644\u0645",52,!0,"Al-Qalam"])
A.aCq=new B.az(["\u0627\u0644\u062d\u0627\u0642\u0629",52,!0,"Al-Haaqqa"])
A.aBN=new B.az(["\u0627\u0644\u0645\u0639\u0627\u0631\u062c",44,!0,"Al-Ma'aarij"])
A.aB8=new B.az(["\u0646\u0648\u062d",28,!0,"Nooh"])
A.aBz=new B.az(["\u0627\u0644\u062c\u0646",28,!0,"Al-Jinn"])
A.aCo=new B.az(["\u0627\u0644\u0645\u0632\u0645\u0644",20,!0,"Al-Muzzammil"])
A.aCs=new B.az(["\u0627\u0644\u0645\u062f\u062b\u0631",56,!0,"Al-Muddaththir"])
A.aBG=new B.az(["\u0627\u0644\u0642\u064a\u0627\u0645\u0629",40,!0,"Al-Qiyaama"])
A.aBu=new B.az(["\u0627\u0644\u0627\u0646\u0633\u0627\u0646",31,!1,"Al-Insaan"])
A.aAw=new B.az(["\u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a",50,!0,"Al-Mursalaat"])
A.aBx=new B.az(["\u0627\u0644\u0646\u0628\u0625",40,!0,"An-Naba"])
A.aBR=new B.az(["\u0627\u0644\u0646\u0627\u0632\u0639\u0627\u062a",46,!0,"An-Naazi'aat"])
A.aC0=new B.az(["\u0639\u0628\u0633",42,!0,"Abasa"])
A.aBa=new B.az(["\u0627\u0644\u062a\u0643\u0648\u064a\u0631",29,!0,"At-Takwir"])
A.aB4=new B.az(["\u0627\u0644\u0625\u0646\u0641\u0637\u0627\u0631",19,!0,"Al-Infitaar"])
A.aBC=new B.az(["\u0627\u0644\u0645\u0637\u0641\u0641\u064a\u0646",36,!0,"Al-Mutaffifin"])
A.aBW=new B.az(["\u0627\u0644\u0625\u0646\u0634\u0642\u0627\u0642",25,!0,"Al-Inshiqaaq"])
A.aBT=new B.az(["\u0627\u0644\u0628\u0631\u0648\u062c",22,!0,"Al-Burooj"])
A.aBw=new B.az(["\u0627\u0644\u0637\u0627\u0631\u0642",17,!0,"At-Taariq"])
A.aAM=new B.az(["\u0627\u0644\u0623\u0639\u0644\u0649",19,!0,"Al-A'laa"])
A.aB9=new B.az(["\u0627\u0644\u063a\u0627\u0634\u064a\u0629",26,!0,"Al-Ghaashiya"])
A.aC4=new B.az(["\u0627\u0644\u0641\u062c\u0631",30,!0,"Al-Fajr"])
A.aBF=new B.az(["\u0627\u0644\u0628\u0644\u062f",20,!0,"Al-Balad"])
A.aB3=new B.az(["\u0627\u0644\u0634\u0645\u0633",15,!0,"Ash-Shams"])
A.aB2=new B.az(["\u0627\u0644\u0644\u064a\u0644",21,!0,"Al-Lail"])
A.aB_=new B.az(["\u0627\u0644\u0636\u062d\u0649",11,!0,"Ad-Dhuhaa"])
A.aAY=new B.az(["\u0627\u0644\u0634\u0631\u062d",8,!0,"Ash-Sharh"])
A.aAT=new B.az(["\u0627\u0644\u062a\u064a\u0646",8,!0,"At-Tin"])
A.aBO=new B.az(["\u0627\u0644\u0639\u0644\u0642",19,!0,"Al-Alaq"])
A.aAE=new B.az(["\u0627\u0644\u0642\u062f\u0631",5,!0,"Al-Qadr"])
A.aCp=new B.az(["\u0627\u0644\u0628\u064a\u0646\u0629",8,!1,"Al-Bayyina"])
A.aAq=new B.az(["\u0627\u0644\u0632\u0644\u0632\u0644\u0629",8,!1,"Az-Zalzala"])
A.aBp=new B.az(["\u0627\u0644\u0639\u0627\u062f\u064a\u0627\u062a",11,!0,"Al-Aadiyaat"])
A.aAC=new B.az(["\u0627\u0644\u0642\u0627\u0631\u0639\u0629",11,!0,"Al-Qaari'a"])
A.aAA=new B.az(["\u0627\u0644\u062a\u0643\u0627\u062b\u0631",8,!0,"At-Takaathur"])
A.aAG=new B.az(["\u0627\u0644\u0639\u0635\u0631",3,!0,"Al-Asr"])
A.aAO=new B.az(["\u0627\u0644\u0647\u0645\u0632\u0629",9,!0,"Al-Humaza"])
A.aAQ=new B.az(["\u0627\u0644\u0641\u064a\u0644",5,!0,"Al-Fil"])
A.aBP=new B.az(["\u0642\u0631\u064a\u0634",4,!0,"Quraish"])
A.aAD=new B.az(["\u0627\u0644\u0645\u0627\u0639\u0648\u0646",7,!0,"Al-Maa'un"])
A.aC7=new B.az(["\u0627\u0644\u0643\u0648\u062b\u0631",3,!0,"Al-Kawthar"])
A.aBU=new B.az(["\u0627\u0644\u0643\u0627\u0641\u0631\u0648\u0646",6,!0,"Al-Kaafiroon"])
A.aC5=new B.az(["\u0627\u0644\u0646\u0635\u0631",3,!1,"An-Nasr"])
A.aCw=new B.az(["\u0627\u0644\u0645\u0633\u062f",5,!0,"Al-Masad"])
A.aCd=new B.az(["\u0627\u0644\u0625\u062e\u0644\u0627\u0635",4,!0,"Al-Ikhlaas"])
A.aBn=new B.az(["\u0627\u0644\u0641\u0644\u0642",5,!0,"Al-Falaq"])
A.aBJ=new B.az(["\u0627\u0644\u0646\u0627\u0633",6,!0,"An-Naas"])
A.cp=x([A.aCg,A.aB7,A.aAR,A.aBv,A.aBH,A.aAx,A.aB5,A.aB6,A.aCk,A.aAt,A.aC2,A.aBV,A.aBj,A.aCa,A.aBr,A.aCv,A.aAv,A.aCm,A.aBb,A.aBK,A.aC8,A.aAP,A.aCh,A.aBm,A.aBL,A.aBS,A.aBo,A.aAN,A.aAz,A.aCu,A.aC3,A.aCb,A.aAs,A.aB1,A.aBi,A.aAy,A.aBM,A.aAZ,A.aBg,A.aBk,A.aBy,A.aBl,A.aAB,A.aAH,A.aCc,A.aBZ,A.aBh,A.aBq,A.aCl,A.aBA,A.aAX,A.aBd,A.aC1,A.aCi,A.aCr,A.aBf,A.aBQ,A.aBE,A.aAp,A.aAK,A.aAV,A.aAF,A.aBB,A.aAL,A.aCx,A.aCf,A.aCt,A.aBe,A.aCq,A.aBN,A.aB8,A.aBz,A.aCo,A.aCs,A.aBG,A.aBu,A.aAw,A.aBx,A.aBR,A.aC0,A.aBa,A.aB4,A.aBC,A.aBW,A.aBT,A.aBw,A.aAM,A.aB9,A.aC4,A.aBF,A.aB3,A.aB2,A.aB_,A.aAY,A.aAT,A.aBO,A.aAE,A.aCp,A.aAq,A.aBp,A.aAC,A.aAA,A.aAG,A.aAO,A.aAQ,A.aBP,A.aAD,A.aC7,A.aBU,A.aC5,A.aCw,A.aCd,A.aBn,A.aBJ],B.a9("y<+(h,v,C,h)>"))
A.ani=x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],y.t)
A.anJ=x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],y.t)
A.anR=x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],y.t)
A.v2=new B.fi(" ",null,null,D.bk,null,null,null,null,null,null,null)})();(function staticFields(){$.bqB=null
$.by0=null
$.by1=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c2Z","bG7",()=>C.bn1("\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650"))})()};
(a=>{a["3oGwsLXC2b84UHTvmdZj/xdSeio="]=a.current})($__dart_deferred_initializers__);