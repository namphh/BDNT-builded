import{F as b,G as P,ma as M,na as R}from"./chunk-3G7OGPR6.js";import{a as k}from"./chunk-TDN6OWID.js";import{Da as d,E as u,Ia as s,Mb as E,Nb as T,P as f,Sa as n,Sb as y,Ta as e,Ua as x,Wb as S,Xb as v,bb as C,bc as I,ka as h,mb as t,na as o,oa as g,ob as c,vb as _}from"./chunk-GEO6TNI5.js";function F(a,l){if(a&1&&(n(0,"c-col",5),t(1,`
            `),x(2,"img",6),t(3,`
          `),e()),a&2){let p=l.$implicit;o(2),s("src",p,h)}}function H(a,l){a&1&&(n(0,"p"),t(1,"No images available."),e())}function L(a,l){if(a&1&&(n(0,"c-col",5),t(1,`
            `),x(2,"img",7),t(3,`
          `),e()),a&2){let p=l.$implicit;o(2),s("src",p,h)}}function A(a,l){if(a&1&&(n(0,"c-row"),t(1,`
          `),d(2,L,4,1,"c-col",3),t(3,`
        `),e()),a&2){let p=C();o(2),s("ngForOf",p.imgResult)}}function V(a,l){a&1&&(n(0,"p"),t(1,"No result images available."),e())}var $=(()=>{let l=class l{constructor(m,r){this.route=m,this.http=r,this.loaiHTML="",this.doiTuongHTML="",this.doiTuongAnh="",this.mayeucau="",this.dauViec="",this.madauViec="",this.ketQua="",this.doChinhXac="",this.khoangThoiGian="",this.imagePaths=[],this.tasks=[],this.imgResult=[],this.APIURL=`${k.server}/`,this.route.queryParams.subscribe(i=>{if(this.loaiHTML=i.loaiHTML||"",this.doiTuongHTML=i.doiTuongHTML||"",this.doiTuongAnh=i.doiTuongAnh||"",this.mayeucau=i.mayeucau||"",this.dauViec=i.dauViec||"",this.madauViec=i.madauViec||"",this.ketQua=i.ketQua||"",this.doChinhXac=i.doChinhXac||"",this.khoangThoiGian=i.khoangThoiGian||"",i.imagePaths){let w=i.imagePaths.replace(/[\[\]"]/g,"");this.imagePaths=w.split(",").map(O=>`assets/${O.trim()}`)}else this.imagePaths=[]})}createFormData(){let m=new FormData;return m.append("request_id",this.mayeucau),m.append("task_code",this.madauViec),m}query_all(m){return this.http.post(this.APIURL+"get_results",m).pipe(u(r=>{this.tasks=r.data.images||[],this.imgResult=this.tasks.map(i=>"data:image/jpeg;base64,"+i)}))}ngOnInit(){console.log(this.mayeucau),console.log(this.madauViec),console.log(this.imagePaths);let m=this.createFormData();this.query_all(m).subscribe(()=>{})}};l.\u0275fac=function(r){return new(r||l)(g(I),g(S))},l.\u0275cmp=f({type:l,selectors:[["app-cards"]],standalone:!0,features:[_],decls:82,vars:11,consts:[["xs","4"],[1,"mb-4"],["xs","8"],["xs","4","class","mb-3",4,"ngFor","ngForOf"],[4,"ngIf"],["xs","4",1,"mb-3"],["alt","Image",2,"width","100%","height","auto",3,"src"],["alt","Result Image",2,"width","100%","height","auto",3,"src"]],template:function(r,i){r&1&&(n(0,"c-row"),t(1,`
  `),n(2,"c-col",0),t(3,`
    `),n(4,"c-card",1),t(5,`
      `),n(6,"c-card-body"),t(7,`
        `),n(8,"p")(9,"strong"),t(10,"Infra Type:"),e(),t(11),e(),t(12,`
        `),n(13,"p")(14,"strong"),t(15,"Infra Object:"),e(),t(16),e(),t(17,`
        `),n(18,"p")(19,"strong"),t(20,"Object Station Name:"),e(),t(21),e(),t(22,`
        `),n(23,"p")(24,"strong"),t(25,"Task:"),e(),t(26),e(),t(27,`
        `),n(28,"p")(29,"strong"),t(30,"Result:"),e(),t(31),e(),t(32,`
        `),n(33,"p")(34,"strong"),t(35,"Reliability:"),e(),t(36),e(),t(37,`
        `),n(38,"p")(39,"strong"),t(40,"Created At:"),e(),t(41),e(),t(42,`
      `),e(),t(43,`
    `),e(),t(44,`
  `),e(),t(45,`

  `),n(46,"c-col",2),t(47,`
    `),t(48,`
    `),n(49,"c-card",1),t(50,`
      `),n(51,"c-card-body"),t(52,`
        `),n(53,"h5"),t(54,"Images"),e(),t(55,`
        `),n(56,"c-row"),t(57,`
          `),d(58,F,4,1,"c-col",3),t(59,`
        `),e(),t(60,`
        `),d(61,H,2,0,"p",4),t(62," "),t(63,`
      `),e(),t(64,`
    `),e(),t(65,`

    `),t(66,`
    `),n(67,"c-card",1),t(68,`
      `),n(69,"c-card-body"),t(70,`
        `),n(71,"h5"),t(72,"Image Results"),e(),t(73,`
        `),d(74,A,4,1,"c-row",4),t(75,`
        `),d(76,V,2,0,"p",4),t(77," "),t(78,`
      `),e(),t(79,`
    `),e(),t(80,`
  `),e(),t(81,`
`),e()),r&2&&(o(11),c(" ",i.loaiHTML,""),o(5),c(" ",i.doiTuongHTML,""),o(5),c(" ",i.doiTuongAnh,""),o(5),c(" ",i.dauViec,""),o(5),c(" ",i.ketQua,""),o(5),c(" ",i.doChinhXac,""),o(5),c(" ",i.khoangThoiGian,""),o(17),s("ngForOf",i.imagePaths),o(3),s("ngIf",i.imagePaths.length===0),o(13),s("ngIf",i.imgResult.length>0),o(2),s("ngIf",i.imgResult.length===0))},dependencies:[y,E,T,R,M,b,P,v],styles:["[_nghost-%COMP%]   .legend[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:x-small}.title-container[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.title-text[_ngcontent-%COMP%]{font-size:2rem;text-align:center;font-weight:700;color:#333}"]});let a=l;return a})();export{$ as a};
