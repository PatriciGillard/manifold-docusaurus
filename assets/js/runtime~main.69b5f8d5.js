!function(){"use strict";var e,a,f,c,d,b={},t={};function n(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(f.exports,f,f.exports,n),f.loaded=!0,f.exports}n.m=b,n.c=t,e=[],n.O=function(a,f,c,d){if(!f){var b=1/0;for(o=0;o<e.length;o++){f=e[o][0],c=e[o][1],d=e[o][2];for(var t=!0,r=0;r<f.length;r++)(!1&d||b>=d)&&Object.keys(n.O).every((function(e){return n.O[e](f[r])}))?f.splice(r--,1):(t=!1,d<b&&(b=d));t&&(e.splice(o--,1),a=c())}return a}d=d||0;for(var o=e.length;o>0&&e[o-1][2]>d;o--)e[o]=e[o-1];e[o]=[f,c,d]},n.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(a,{a:a}),a},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);n.r(d);var b={};a=a||[null,f({}),f([]),f(f)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((function(a){b[a]=function(){return e[a]}}));return b.default=function(){return e},n.d(d,b),d},n.d=function(e,a){for(var f in a)n.o(a,f)&&!n.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(a,f){return n.f[f](e,a),a}),[]))},n.u=function(e){return"assets/js/"+({46:"f9f2bf65",53:"935f2afb",60:"6cac418a",140:"e437b252",155:"cf600f10",213:"dc964b1a",244:"125670df",252:"e56f5feb",261:"b65c8aa5",290:"1cdc0337",340:"12d4a64f",386:"bad46b57",523:"470f13e8",524:"c555672b",531:"4838e201",532:"57677a90",542:"80e3d15f",577:"4e86b4b0",663:"24504e17",867:"757d4829",912:"71dfb53c",1019:"e323d878",1047:"1cb9701f",1054:"5d085b14",1101:"42740665",1115:"34f6bd98",1172:"1e414b27",1213:"e6cd2068",1310:"541b1a64",1315:"c78563b6",1339:"9921137c",1372:"1db64337",1382:"5dd8512b",1438:"0941d86d",1534:"38bae52a",1561:"bc12798f",1590:"080cd984",1713:"3b19a55b",1724:"ad2398c4",1727:"1207808c",1754:"5a4416b9",1933:"31fb080f",1987:"2cd3b2f4",2082:"fa938d6a",2148:"a22d72a3",2219:"411826ed",2238:"4887cd4f",2250:"a1cb3534",2306:"005ece64",2336:"98599f51",2388:"dd42501c",2419:"1c621534",2497:"c6d1107f",2534:"0f03ea8c",2568:"8b5af15a",2583:"2b45fbc5",2622:"daa71e97",2639:"8561710a",2691:"d9c2913d",2699:"51e6f39b",2738:"9c5c7610",2747:"e71e838e",2803:"713de6fa",2858:"95bf0010",2861:"78f70019",2917:"5952b09a",2996:"d12075c4",2997:"5600f714",3074:"6cefb007",3089:"a6aa9e1f",3117:"565bb307",3121:"c833aa87",3145:"f259cb5e",3184:"972c9515",3218:"00de55ac",3306:"05b6f0fa",3315:"1a45670c",3319:"ed528032",3420:"1f0188c1",3436:"947a65ad",3451:"6274d8b1",3497:"5b54b4b6",3505:"e2432d4a",3566:"3b58cd11",3590:"3b595b2a",3650:"85c7384d",3777:"8c4815a3",3780:"8e192df1",3865:"9d3cd5e3",3870:"76535fca",3888:"4bea2224",3990:"8a3714d1",4028:"4792b2df",4088:"1e1c2795",4091:"4ba4bcb7",4115:"7775f8e0",4158:"2c32ea21",4195:"c4f5d8e4",4237:"e3e3bb5a",4295:"3d7760d9",4309:"e6af6b7d",4318:"a506f062",4381:"009a07b2",4416:"d152a708",4477:"8ae4bf93",4536:"900c8774",4617:"9da6b23a",4632:"22780084",4721:"48957373",4826:"ab8d6c09",4911:"f8e5d2b5",4947:"a8ec06fc",4968:"41010705",4983:"aa94937e",5061:"6d574886",5082:"c64a26e8",5201:"db32a50f",5206:"b5db1d8e",5325:"e20281f9",5327:"f28ef033",5421:"b6209d74",5438:"2e80c228",5506:"24292bee",5524:"6db6401d",5632:"6d85b6df",5703:"9698a720",5771:"1a349082",5778:"89975620",5791:"0e16bb9e",5806:"666934cf",5859:"e8f0fe7a",5896:"18fd052f",5935:"3609b74c",5992:"57fe89a2",6042:"fb4c8fe3",6052:"7e720c87",6060:"9f943f65",6065:"1338faaf",6073:"cc37ef3b",6103:"ccc49370",6112:"4b7f436b",6149:"b6074f77",6192:"ad73cf65",6221:"49fc7dbc",6227:"c39ef374",6286:"c9432231",6316:"693ef520",6394:"e104436d",6559:"a5d3ae67",6570:"4158420b",6657:"f446fdf7",6737:"280a5f0d",6797:"4886b6d5",6813:"a8409ee8",6977:"7a6f72af",7036:"d99b6c62",7060:"fb1c7cc7",7109:"dac46797",7126:"343dacc4",7156:"02207c5e",7209:"71023cc4",7288:"0111eae1",7418:"36879da1",7462:"f10b34a9",7463:"0302a835",7539:"06a8490d",7613:"1c896800",7707:"405f8f10",7766:"4eb90a36",7791:"debf8b86",7863:"4fded3c6",7872:"7b9bf7cf",7918:"17896441",7964:"c310a310",7993:"a525b11f",8002:"2a1099ff",8021:"c5ac5a4a",8024:"ebbea38b",8025:"667f1eae",8044:"e6197a87",8048:"b8a7e7ff",8116:"5aab3b0a",8162:"c5f3e2aa",8231:"85a6b3cb",8243:"f0457358",8285:"72465f37",8295:"b9faae25",8308:"26e79c49",8395:"e12dd66f",8434:"28dc1144",8493:"1ba0ab13",8511:"2243a3aa",8518:"42033a98",8526:"439e84ef",8537:"afce49a3",8541:"f598894f",8574:"8910d4fa",8578:"eb6147b6",8583:"52855ff7",8586:"5ff41a42",8614:"e59acca8",8631:"703a55dd",8641:"a88a3683",8714:"f3917b15",8808:"9fae60f4",8850:"209926f7",8866:"790d25e5",8873:"4e380694",8887:"bb83effd",8975:"0c9fa262",8982:"2453980a",8989:"0c93e961",9027:"1b24a69e",9049:"72b8d205",9071:"b82e196e",9096:"400ca3d2",9145:"38454abc",9208:"4b34be89",9235:"810d5f5e",9484:"f97a23ef",9514:"1be78505",9568:"41ef5806",9600:"5570d3ef",9627:"4187b1c7",9639:"3ae627b3",9666:"3c33d937",9693:"e15f9616",9703:"77a9019d",9758:"5b53d2e9",9777:"b21534fe",9786:"3209c35a",9923:"48bac902",9937:"4344fd87",9982:"774819e4"}[e]||e)+"."+{46:"c29e45a9",53:"d3a720dc",60:"97e8e7b3",140:"4df4c773",155:"ffc6420f",213:"a3381e7b",244:"670aa7d2",252:"729cc635",261:"aed00a77",290:"1f2e4546",336:"3fc68ae7",340:"36430419",386:"0a500ae9",523:"314527d0",524:"5a9342ca",531:"c500ef92",532:"76af1001",542:"55fa7b3b",577:"cf775963",663:"00465ce2",867:"0ee5dcd7",912:"423bd683",1019:"02a59434",1047:"fc7b2509",1054:"a9df4a0c",1101:"1bf70436",1115:"226c01ba",1172:"e201020c",1213:"2eb68cd8",1310:"35faf3f2",1315:"03c49ae6",1339:"7e3b382b",1372:"13f76d6e",1382:"a728e534",1438:"ba0dbcee",1534:"05c2bdfb",1561:"e2ca19a4",1584:"0ae47f7d",1590:"e1abf4fc",1713:"8f585f20",1724:"be98f69f",1727:"b1187d34",1754:"d3a2bfce",1933:"0d24299e",1987:"05e878d5",2082:"c937c6bb",2148:"24a3457e",2219:"2f312119",2238:"4693a5fe",2250:"d2d1950f",2306:"dd56e0da",2336:"6781fea5",2388:"560c558d",2419:"5821438c",2497:"375579e3",2534:"b700c6b7",2568:"fbde0ab1",2583:"2cd70f36",2622:"5a7bf33b",2639:"b0345f05",2691:"32461ddf",2699:"5f72be2b",2738:"c2bda9f3",2747:"ce03ce51",2803:"bbcbc12c",2858:"f718e339",2861:"78b676af",2917:"0858b7d1",2996:"5143978c",2997:"5267414a",3074:"5e8445ae",3089:"78106da7",3117:"972eb2c5",3121:"7b353d62",3145:"4cf56223",3184:"d4206368",3218:"57461d1b",3306:"6d43a027",3315:"c487d21a",3319:"704a8516",3420:"c0364fb4",3436:"ff8f99a0",3451:"1227fb56",3497:"998a1db7",3505:"9ce5fead",3566:"01c92da3",3590:"d5018eb2",3616:"b19c0f39",3650:"b3012828",3763:"650c5c62",3777:"c436db09",3780:"7d7a197e",3865:"1a30137e",3870:"37a32736",3888:"9b3c541f",3990:"d6296936",4028:"05d8c0c9",4088:"7edc4e7a",4091:"5da2d8c9",4115:"db074003",4158:"8226e862",4195:"9633cbad",4237:"cfede69c",4295:"4602c5a5",4309:"f0e2b648",4318:"ebd26646",4381:"8654c5a2",4416:"bbdaee6f",4477:"2b0770ab",4494:"340d058d",4536:"22890ed8",4617:"9dbcf90b",4632:"265e9536",4721:"ca08d781",4826:"704d514c",4911:"70ffc415",4947:"b974f69e",4968:"b6291fb2",4983:"e262ac90",5061:"48a35a3b",5082:"01ded7be",5201:"1fb25b65",5206:"a6137ced",5256:"f14d1814",5325:"33537f97",5327:"beac3cf3",5421:"e6b3ce5d",5438:"ad57fb83",5506:"4f66d776",5524:"81430572",5632:"c2deda02",5681:"1791f1aa",5703:"097e6652",5771:"735bce8b",5778:"82417d90",5791:"a1f8721a",5806:"e1c2ffc3",5859:"b509ddcf",5896:"d76af3b7",5935:"516977af",5992:"5ed30fee",6042:"35f46614",6052:"091c3d26",6060:"37768f21",6065:"ffd650e6",6073:"544fdc2c",6103:"6c150caf",6112:"0456e513",6149:"5352a763",6192:"b337d13e",6221:"08c8172d",6227:"664b67e9",6286:"8006887f",6316:"1e2f4587",6394:"52e8e76d",6559:"5d5805ac",6570:"ea8d3da8",6655:"87f726d5",6657:"5f81b602",6737:"de685b82",6797:"ec0ef1e7",6813:"39afeb91",6945:"934b1b1b",6977:"08ef22cd",7036:"322668c0",7060:"a48b2ee6",7109:"f56ed335",7126:"5fe566ef",7156:"c1e7096a",7209:"c30b8d2d",7288:"3aa4adb6",7418:"d4e00264",7462:"27e3864b",7463:"17fd8e38",7539:"5ec97d56",7613:"063cda1c",7707:"1cca168f",7766:"78f050d7",7791:"b7ac7b66",7863:"618c8efc",7872:"5bb9fa41",7918:"eb0eb0a2",7964:"51ede588",7993:"7f8d783b",8002:"51411924",8021:"d8813aa4",8024:"5ca06e8c",8025:"7efdf029",8044:"07b0ca9a",8048:"a84b1f42",8116:"d5bd204c",8162:"be8e477b",8231:"d29b645a",8243:"5e551e43",8285:"43104c5a",8295:"37f2baad",8308:"061eb5f6",8395:"511973b4",8434:"9cb27054",8483:"0152e780",8493:"6738fd71",8511:"8a9ae400",8518:"eca728b4",8526:"cf2c6468",8537:"afd33f9a",8541:"cded83ef",8574:"11defea0",8578:"050809fd",8583:"e1e94917",8586:"a5df6a1e",8614:"aafce309",8631:"c685eabc",8641:"f18817e1",8714:"90c8e4d9",8808:"4630512f",8850:"cc87bfca",8866:"99e0ee52",8873:"894c604a",8887:"0c3d19cc",8975:"d6f8c155",8982:"70321526",8989:"07533264",9027:"3a530806",9049:"2ecd84d8",9071:"f971e4bf",9096:"d82b54d8",9145:"1d636941",9208:"aac840a8",9235:"b6133048",9343:"4cac66ad",9484:"15bc17c8",9514:"e662175d",9568:"f5972e78",9600:"6bd5bcd3",9627:"65ed9e20",9639:"2a306101",9666:"1f368ee2",9693:"3d7551f3",9703:"0a61d6da",9758:"0c603b7f",9777:"190f3f14",9786:"453de2ab",9923:"15af7d9d",9937:"b8a69124",9982:"3878e89f"}[e]+".js"},n.miniCssF=function(e){return"assets/css/styles.7e14c969.css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c={},d="manifold-docusaurus:",n.l=function(e,a,f,b){if(c[e])c[e].push(a);else{var t,r;if(void 0!==f)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==d+f){t=i;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",d+f),t.src=e),c[e]=[a];var s=function(a,f){t.onerror=t.onload=null,clearTimeout(l);var d=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((function(e){return e(f)})),a)return a(f)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=s.bind(null,t.onerror),t.onload=s.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/manifold-docusaurus/",n.gca=function(e){return e={17896441:"7918",22780084:"4632",41010705:"4968",42740665:"1101",48957373:"4721",89975620:"5778",f9f2bf65:"46","935f2afb":"53","6cac418a":"60",e437b252:"140",cf600f10:"155",dc964b1a:"213","125670df":"244",e56f5feb:"252",b65c8aa5:"261","1cdc0337":"290","12d4a64f":"340",bad46b57:"386","470f13e8":"523",c555672b:"524","4838e201":"531","57677a90":"532","80e3d15f":"542","4e86b4b0":"577","24504e17":"663","757d4829":"867","71dfb53c":"912",e323d878:"1019","1cb9701f":"1047","5d085b14":"1054","34f6bd98":"1115","1e414b27":"1172",e6cd2068:"1213","541b1a64":"1310",c78563b6:"1315","9921137c":"1339","1db64337":"1372","5dd8512b":"1382","0941d86d":"1438","38bae52a":"1534",bc12798f:"1561","080cd984":"1590","3b19a55b":"1713",ad2398c4:"1724","1207808c":"1727","5a4416b9":"1754","31fb080f":"1933","2cd3b2f4":"1987",fa938d6a:"2082",a22d72a3:"2148","411826ed":"2219","4887cd4f":"2238",a1cb3534:"2250","005ece64":"2306","98599f51":"2336",dd42501c:"2388","1c621534":"2419",c6d1107f:"2497","0f03ea8c":"2534","8b5af15a":"2568","2b45fbc5":"2583",daa71e97:"2622","8561710a":"2639",d9c2913d:"2691","51e6f39b":"2699","9c5c7610":"2738",e71e838e:"2747","713de6fa":"2803","95bf0010":"2858","78f70019":"2861","5952b09a":"2917",d12075c4:"2996","5600f714":"2997","6cefb007":"3074",a6aa9e1f:"3089","565bb307":"3117",c833aa87:"3121",f259cb5e:"3145","972c9515":"3184","00de55ac":"3218","05b6f0fa":"3306","1a45670c":"3315",ed528032:"3319","1f0188c1":"3420","947a65ad":"3436","6274d8b1":"3451","5b54b4b6":"3497",e2432d4a:"3505","3b58cd11":"3566","3b595b2a":"3590","85c7384d":"3650","8c4815a3":"3777","8e192df1":"3780","9d3cd5e3":"3865","76535fca":"3870","4bea2224":"3888","8a3714d1":"3990","4792b2df":"4028","1e1c2795":"4088","4ba4bcb7":"4091","7775f8e0":"4115","2c32ea21":"4158",c4f5d8e4:"4195",e3e3bb5a:"4237","3d7760d9":"4295",e6af6b7d:"4309",a506f062:"4318","009a07b2":"4381",d152a708:"4416","8ae4bf93":"4477","900c8774":"4536","9da6b23a":"4617",ab8d6c09:"4826",f8e5d2b5:"4911",a8ec06fc:"4947",aa94937e:"4983","6d574886":"5061",c64a26e8:"5082",db32a50f:"5201",b5db1d8e:"5206",e20281f9:"5325",f28ef033:"5327",b6209d74:"5421","2e80c228":"5438","24292bee":"5506","6db6401d":"5524","6d85b6df":"5632","9698a720":"5703","1a349082":"5771","0e16bb9e":"5791","666934cf":"5806",e8f0fe7a:"5859","18fd052f":"5896","3609b74c":"5935","57fe89a2":"5992",fb4c8fe3:"6042","7e720c87":"6052","9f943f65":"6060","1338faaf":"6065",cc37ef3b:"6073",ccc49370:"6103","4b7f436b":"6112",b6074f77:"6149",ad73cf65:"6192","49fc7dbc":"6221",c39ef374:"6227",c9432231:"6286","693ef520":"6316",e104436d:"6394",a5d3ae67:"6559","4158420b":"6570",f446fdf7:"6657","280a5f0d":"6737","4886b6d5":"6797",a8409ee8:"6813","7a6f72af":"6977",d99b6c62:"7036",fb1c7cc7:"7060",dac46797:"7109","343dacc4":"7126","02207c5e":"7156","71023cc4":"7209","0111eae1":"7288","36879da1":"7418",f10b34a9:"7462","0302a835":"7463","06a8490d":"7539","1c896800":"7613","405f8f10":"7707","4eb90a36":"7766",debf8b86:"7791","4fded3c6":"7863","7b9bf7cf":"7872",c310a310:"7964",a525b11f:"7993","2a1099ff":"8002",c5ac5a4a:"8021",ebbea38b:"8024","667f1eae":"8025",e6197a87:"8044",b8a7e7ff:"8048","5aab3b0a":"8116",c5f3e2aa:"8162","85a6b3cb":"8231",f0457358:"8243","72465f37":"8285",b9faae25:"8295","26e79c49":"8308",e12dd66f:"8395","28dc1144":"8434","1ba0ab13":"8493","2243a3aa":"8511","42033a98":"8518","439e84ef":"8526",afce49a3:"8537",f598894f:"8541","8910d4fa":"8574",eb6147b6:"8578","52855ff7":"8583","5ff41a42":"8586",e59acca8:"8614","703a55dd":"8631",a88a3683:"8641",f3917b15:"8714","9fae60f4":"8808","209926f7":"8850","790d25e5":"8866","4e380694":"8873",bb83effd:"8887","0c9fa262":"8975","2453980a":"8982","0c93e961":"8989","1b24a69e":"9027","72b8d205":"9049",b82e196e:"9071","400ca3d2":"9096","38454abc":"9145","4b34be89":"9208","810d5f5e":"9235",f97a23ef:"9484","1be78505":"9514","41ef5806":"9568","5570d3ef":"9600","4187b1c7":"9627","3ae627b3":"9639","3c33d937":"9666",e15f9616:"9693","77a9019d":"9703","5b53d2e9":"9758",b21534fe:"9777","3209c35a":"9786","48bac902":"9923","4344fd87":"9937","774819e4":"9982"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,3312:0};n.f.j=function(a,f){var c=n.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1303|3312)$/.test(a))e[a]=0;else{var d=new Promise((function(f,d){c=e[a]=[f,d]}));f.push(c[2]=d);var b=n.p+n.u(a),t=new Error;n.l(b,(function(f){if(n.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var d=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,c[1](t)}}),"chunk-"+a,a)}},n.O.j=function(a){return 0===e[a]};var a=function(a,f){var c,d,b=f[0],t=f[1],r=f[2],o=0;for(c in t)n.o(t,c)&&(n.m[c]=t[c]);if(r)var u=r(n);for(a&&a(f);o<b.length;o++)d=b[o],n.o(e,d)&&e[d]&&e[d][0](),e[b[o]]=0;return n.O(u)},f=self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))}()}();