import{a as j,b as f,c as K}from"./chunk-JR7XJC2U.js";import{a as R}from"./chunk-HEC4VNOU.js";import{F as I,G as H,ma as V,na as w}from"./chunk-3G7OGPR6.js";import{c as X,j as W,p as O,q as B,r as N,u as P}from"./chunk-HQDSJWD4.js";import{$a as h,Da as _,Ia as c,Mb as A,P as C,Sa as e,Sb as L,Ta as i,W as M,X as y,Ya as F,bb as b,dc as D,mb as t,mc as k,na as r,nb as p,oa as S,rb as x,sb as T,tb as E,vb as v}from"./chunk-GEO6TNI5.js";import{f as q}from"./chunk-TMEVGU2Q.js";var Q=q(K());function z(m,s){if(m&1&&(e(0,"option",11),t(1),i()),m&2){let o=s.$implicit;c("value",o),r(),p(o)}}function U(m,s){if(m&1&&(e(0,"option",11),t(1),i()),m&2){let o=s.$implicit;c("value",o),r(),p(o)}}function Y(m,s){if(m&1&&(e(0,"option",11),t(1),i()),m&2){let o=s.$implicit;c("value",o),r(),p(o)}}function Z(m,s){if(m&1&&(e(0,"option",11),t(1),i()),m&2){let o=s.$implicit;c("value",o),r(),p(o)}}function $(m,s){if(m&1&&(e(0,"option",11),t(1),i()),m&2){let o=s.$implicit;c("value",o),r(),p(o)}}function tt(m,s){if(m&1){let o=F();e(0,"tr"),t(1,`
              `),e(2,"td"),t(3),i(),t(4,`
              `),e(5,"td"),t(6),i(),t(7,`
              `),e(8,"td"),t(9),i(),t(10,`
              `),e(11,"td"),t(12),i(),t(13,`
              `),e(14,"td"),t(15),i(),t(16,`
              `),e(17,"td"),t(18),i(),t(19,`
              `),e(20,"td"),t(21),i(),t(22,`
              `),e(23,"td"),t(24),i(),t(25,`
              `),e(26,"td"),t(27,`
                `),e(28,"img",12),h("click",function(){let l=M(o).$implicit,n=b();return y(n.onImageClick(l))}),i(),t(29,`
              `),i(),t(30,`
            `),i()}if(m&2){let o=s.$implicit;r(3),p(o.loaiHTML),r(3),p(o.doiTuongHTML),r(3),p(o.doiTuongAnh),r(3),p(o.dauViec),r(3),p(o.maTram),r(3),p(o.khoangThoiGian),r(3),p(o.ketQua),r(3),p(o.doChinhXac)}}var Tt=(()=>{let s=class s{constructor(a,l){this.router=a,this.dataService=l,this.inputField1="",this.inputField2="",this.inputField3="",this.inputField4="",this.inputField5="",this.dataset={},this.transformedData=[],this.filteredData=[]}ngAfterViewInit(){this.dataset=this.dataService.getData(),setTimeout(()=>{this.transformDataset()})}transformDataset(){this.dataset.html_type&&Array.isArray(this.dataset.html_type)&&(this.transformedData=this.dataset.html_type.map((a,l)=>({loaiHTML:a,doiTuongHTML:this.dataset.html_object[l],doiTuongAnh:this.dataset.object_station[l]||"",dauViec:this.dataset.task_code[l],maTram:this.dataset.station_code[l],khoangThoiGian:this.dataset.created_at[l],ketQua:this.dataset.result[l].toString(),doChinhXac:this.dataset.confidence_score[l].toString(),anh:this.parseJsonArray(this.dataset.urls[l])})),this.filteredData=[...this.transformedData])}filterTable(){this.filteredData=this.transformedData.filter(a=>(!this.inputField1||a.loaiHTML===this.inputField1||this.inputField1==="")&&(!this.inputField2||a.doiTuongHTML===this.inputField2||this.inputField2==="")&&(!this.inputField3||a.doiTuongAnh===this.inputField3||this.inputField3==="")&&(!this.inputField4||a.dauViec===this.inputField4||this.inputField4==="")&&(!this.inputField5||a.maTram===this.inputField5||this.inputField5===""))}distinctValues(a){return[...new Set(this.transformedData.map(l=>l[a]))]}parseJsonArray(a){try{return a?JSON.parse(a):[]}catch(l){return console.error("Failed to parse JSON:",l,"Input:",a),[]}}onImageClick(a){let l={loaiHTML:a.loaiHTML,doiTuongHTML:a.doiTuongHTML,doiTuongAnh:a.doiTuongAnh,dauViec:a.dauViec,ketQua:a.ketQua,doChinhXac:a.doChinhXac,khoangThoiGian:a.khoangThoiGian,imagePaths:a.anh.join(",")};this.router.navigate(["base/cards"],{queryParams:l})}exportReport(){let a=[["Lo\u1EA1i HTML","\u0110\u1ED1i t\u01B0\u1EE3ng HTML","\u0110\u1ED1i t\u01B0\u1EE3ng \u1EA3nh ch\u1EE5p","\u0110\u1EA7u vi\u1EC7c","M\xE3 tr\u1EA1m","K\u1EBFt qu\u1EA3","\u0110\u1ED9 ch\xEDnh x\xE1c"]],l=this.transformedData.map(g=>[g.loaiHTML,g.doiTuongHTML,g.doiTuongAnh,g.dauViec,g.maTram,g.ketQua,g.doChinhXac]),n=a.concat(l),u=f.aoa_to_sheet(n),d=f.book_new();f.book_append_sheet(d,u,"Report");let G=j(d,{bookType:"xlsx",type:"array"}),J=new Blob([G],{type:"application/octet-stream"});(0,Q.saveAs)(J,"report.xlsx")}};s.\u0275fac=function(l){return new(l||s)(S(D),S(R))},s.\u0275cmp=C({type:s,selectors:[["app-tables"]],standalone:!0,features:[v],decls:115,vars:11,consts:[[1,"justify-content-center","mb-3"],["xs","2"],[1,"form-control",3,"ngModelChange","ngModel"],["value",""],[3,"value",4,"ngFor","ngForOf"],["xs","12"],[1,"mb-4"],[1,"table"],[4,"ngFor","ngForOf"],["xs","12",1,"text-end"],[1,"btn","btn-primary",3,"click"],[3,"value"],["src","./assets/images/image_icon.png","alt","Image",2,"width","24px","height","24px","cursor","pointer",3,"click"]],template:function(l,n){l&1&&(e(0,"c-row",0),t(1,`
  `),e(2,"c-col",1),t(3,`
    `),e(4,"select",2),E("ngModelChange",function(d){return T(n.inputField1,d)||(n.inputField1=d),d}),h("ngModelChange",function(){return n.filterTable()}),t(5,`
      `),e(6,"option",3),t(7,"T\u1EA5t c\u1EA3"),i(),t(8,`
      `),_(9,z,2,2,"option",4),t(10,`
    `),i(),t(11,`
  `),i(),t(12,`

  `),e(13,"c-col",1),t(14,`
    `),e(15,"select",2),E("ngModelChange",function(d){return T(n.inputField2,d)||(n.inputField2=d),d}),h("ngModelChange",function(){return n.filterTable()}),t(16,`
      `),e(17,"option",3),t(18,"T\u1EA5t c\u1EA3"),i(),t(19,`
      `),_(20,U,2,2,"option",4),t(21,`
    `),i(),t(22,`
  `),i(),t(23,`

  `),e(24,"c-col",1),t(25,`
    `),e(26,"select",2),E("ngModelChange",function(d){return T(n.inputField3,d)||(n.inputField3=d),d}),h("ngModelChange",function(){return n.filterTable()}),t(27,`
      `),e(28,"option",3),t(29,"T\u1EA5t c\u1EA3"),i(),t(30,`
      `),_(31,Y,2,2,"option",4),t(32,`
    `),i(),t(33,`
  `),i(),t(34,`

  `),e(35,"c-col",1),t(36,`
    `),e(37,"select",2),E("ngModelChange",function(d){return T(n.inputField4,d)||(n.inputField4=d),d}),h("ngModelChange",function(){return n.filterTable()}),t(38,`
      `),e(39,"option",3),t(40,"T\u1EA5t c\u1EA3"),i(),t(41,`
      `),_(42,Z,2,2,"option",4),t(43,`
    `),i(),t(44,`
  `),i(),t(45,`

  `),e(46,"c-col",1),t(47,`
    `),e(48,"select",2),E("ngModelChange",function(d){return T(n.inputField5,d)||(n.inputField5=d),d}),h("ngModelChange",function(){return n.filterTable()}),t(49,`
      `),e(50,"option",3),t(51,"T\u1EA5t c\u1EA3"),i(),t(52,`
      `),_(53,$,2,2,"option",4),t(54,`
    `),i(),t(55,`
  `),i(),t(56,`
`),i(),e(57,"c-row"),t(58,`
  `),e(59,"c-col",5),t(60,`
    `),e(61,"c-card",6),t(62,`
      `),e(63,"c-card-body"),t(64,`
        `),e(65,"table",7),t(66,`
          `),e(67,"thead"),t(68,`
            `),e(69,"tr"),t(70,`
              `),e(71,"th"),t(72,"Lo\u1EA1i HTML"),i(),t(73,`
              `),e(74,"th"),t(75,"\u0110\u1ED1i t\u01B0\u1EE3ng HTML"),i(),t(76,`
              `),e(77,"th"),t(78,"\u0110\u1ED1i t\u01B0\u1EE3ng \u1EA3nh ch\u1EE5p"),i(),t(79,`
              `),e(80,"th"),t(81,"\u0110\u1EA7u vi\u1EC7c"),i(),t(82,`
              `),e(83,"th"),t(84,"M\xE3 tr\u1EA1m"),i(),t(85,`
              `),e(86,"th"),t(87,"Time"),i(),t(88,`
              `),e(89,"th"),t(90,"K\u1EBFt qu\u1EA3"),i(),t(91,`
              `),e(92,"th"),t(93,"\u0110\u1ED9 ch\xEDnh x\xE1c"),i(),t(94,`
              `),e(95,"th"),t(96,"\u1EA2nh"),i(),t(97,`
            `),i(),t(98,`
          `),i(),t(99,`
          `),e(100,"tbody"),t(101,`
            `),_(102,tt,31,8,"tr",8),t(103,`
          `),i(),t(104,`
        `),i(),t(105,`
      `),i(),t(106,`
    `),i(),t(107,`
  `),i(),t(108,`
  `),e(109,"c-col",9),t(110,`
    `),e(111,"button",10),h("click",function(){return n.exportReport()}),t(112,"Xu\u1EA5t b\xE1o c\xE1o"),i(),t(113,`
  `),i(),t(114,`
`),i()),l&2&&(r(4),x("ngModel",n.inputField1),r(5),c("ngForOf",n.distinctValues("loaiHTML")),r(6),x("ngModel",n.inputField2),r(5),c("ngForOf",n.distinctValues("doiTuongHTML")),r(6),x("ngModel",n.inputField3),r(5),c("ngForOf",n.distinctValues("doiTuongAnh")),r(6),x("ngModel",n.inputField4),r(5),c("ngForOf",n.distinctValues("dauViec")),r(6),x("ngModel",n.inputField5),r(5),c("ngForOf",n.distinctValues("maTram")),r(49),c("ngForOf",n.filteredData))},dependencies:[w,V,I,H,P,B,N,O,X,W,k,L,A]});let m=s;return m})();export{Tt as TablesComponent};
