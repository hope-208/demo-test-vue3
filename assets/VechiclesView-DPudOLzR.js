import{_ as y,b as w,r as I,o as l,c as i,w as a,a as r,t as m,d as t,e as v,f as A,g as k,h as E,E as S,i as R,j as T,k as q,l as j,u as F,s as J,m as C,n as M,p as O,F as b,q as W,v as G,x as H,y as K,z as x,A as Q}from"./index-CnNvsLIR.js";/* empty css               */const X="/demo-test-vue3/assets/mersedes-CEvzyU0J.png",Y={name:"AutoCard",components:{Icon:w},props:["itemData"],data(){return{carItem:{vin:this.itemData.vin||"WDB 1400321A333419",photo:this.itemData.photo.url||"../assets/image/mersedes.png",angles_count:this.itemData.angles_count}}}},Z=v("img",{src:X},null,-1);function $(s,n,z,B,e,u){const c=A,_=k,p=I("icon"),h=E,g=S,d=R,f=T;return l(),i(f,{class:"auto-card","body-class":"auto-card__body",shadow:"hover"},{footer:a(()=>[e.carItem.angles_count<30?(l(),i(d,{key:0,class:"auto-card__status"},{default:a(()=>[r(m(e.carItem.angles_count)+"/30 ",1)]),_:1})):(l(),i(d,{key:1,type:"success",class:"auto-card__status"},{default:a(()=>[t(p,{name:"check",class:"auto-card__status-icon"}),r(m(e.carItem.angles_count)+"/30 ",1)]),_:1})),t(g,null,{default:a(()=>[r("3 days left")]),_:1})]),default:a(()=>[t(_,{class:"auto-card__img-container"},{default:a(()=>[t(_,{style:{margin:"0 auto"}},{default:a(()=>[t(c,{src:e.carItem.photo,alt:"Car's photo.",fit:"contain",class:"auto-card__img",lazy:"",loading:"lazy"},{error:a(()=>[Z]),_:1},8,["src"])]),_:1}),t(h,{class:"btn btn-text-2 auto-card__btn-more"},{icon:a(()=>[t(p,{name:"more_horizontal"})]),_:1})]),_:1}),t(g,{tag:"h2",class:"auto-card__title"},{default:a(()=>[r("Mercedes-Benz C-Class")]),_:1}),t(g,{class:"auto-card__desc"},{default:a(()=>[r(m(e.carItem.vin),1)]),_:1})]),_:1})}const D=y(Y,[["render",$]]),P=q.create({baseURL:"https://api.caiman-app.de/api"});P.interceptors.request.use(s=>s);P.interceptors.response.use(s=>s,s=>s.response.status===422?s.response:s.response.status===500?(j({title:"Ошибка сервера!",message:"Попробуйте позднее.",type:"error"}),!1):Promise.reject(s));const ee={name:"VechiclesView",components:{Icon:w,AutoCard:D},setup(){const s=F(),{countCars:n}=J(s);return{countCars:n}},mounted(){let s=this.getCars();this.carList=s.data},data(){return{placeholderSearchInput:"Search VIN",searchValue:"2323",currentPage:1,perPage:9,lastPage:1,allCars:1,loadingCars:!1,options:[{value:4},{value:6},{value:9},{value:12}],carList:[]}},methods:{async getCars(){this.loadingCars=!0,this.currentPage>this.lastPage&&(this.currentPage=this.lastPage),this.currentPage<1&&(this.currentPage=1);try{const s={search:this.searchValue,per_page:this.perPage,page:this.currentPage},{data:n}=await P({url:"/cars-test",method:"get",params:s});return this.carList=n.data,this.allCars=n.meta.total,this.countCars=this.allCars,this.lastPage=n.meta.last_page,this.loadingCars=!1,n}catch(s){this.loadingCars=!1,console.log(s)}},updateSearchValue(){this.currentPage=1,this.getCars()},increaseCount(){this.currentPage<this.lastPage&&(this.currentPage++,this.getCars())},decreaseCount(){this.currentPage!==1&&(this.currentPage--,this.getCars())}}},te={class:"panel-top"},ae={class:"view-page"};function se(s,n,z,B,e,u){const c=I("icon"),_=W,p=S,h=Q,g=G,d=E,f=D,L=H,V=k,N=K;return l(),C(b,null,[v("div",te,[t(_,{modelValue:e.searchValue,"onUpdate:modelValue":n[0]||(n[0]=o=>e.searchValue=o),class:"search text-body",placeholder:e.placeholderSearchInput,style:{"max-width":"354px"},onChange:u.updateSearchValue},{suffix:a(()=>[t(c,{name:"zoom",class:"search__icon"})]),_:1},8,["modelValue","placeholder","onChange"]),v("div",ae,[t(p,{tag:"p",class:"view-page__desc text-body"},{default:a(()=>[r("Select vehicles per page:")]),_:1}),t(g,{modelValue:e.perPage,"onUpdate:modelValue":n[1]||(n[1]=o=>e.perPage=o),class:"view-page__select text-body",disabled:"",onChange:u.updateSearchValue},{prefix:a(()=>[t(c,{name:"chevron_down",class:"view-page__select_arrow"})]),default:a(()=>[(l(!0),C(b,null,x(e.options,o=>(l(),i(h,{key:o.value,label:o.value,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),t(d,{class:"btn-primary btn btn-text-2 view-page__btn-add",type:"primary"},{icon:a(()=>[t(c,{name:"plus",class:"view-page__btn-add_icon"})]),default:a(()=>[r(" Add Vechicle ")]),_:1})]),M((l(),i(L,{class:"cars-container"},{default:a(()=>[(l(!0),C(b,null,x(e.carList,(o,U)=>(l(),i(f,{key:U,itemData:o},null,8,["itemData"]))),128))]),_:1})),[[N,e.loadingCars]]),e.allCars>0?(l(),i(V,{key:0,class:"pagination-container"},{default:a(()=>[t(p,{class:"text-body page-control__info"},{default:a(()=>[r("Showing "+m(e.perPage)+" out of "+m(e.allCars),1)]),_:1}),t(V,{class:"page-control"},{default:a(()=>[t(d,{class:"btn-default btn btn-text-2 page-control__btn",disabled:e.currentPage==1,onClick:u.decreaseCount},{icon:a(()=>[t(c,{name:"chevron_left",class:"pag__prew"})]),_:1},8,["disabled","onClick"]),t(_,{modelValue:e.currentPage,"onUpdate:modelValue":n[2]||(n[2]=o=>e.currentPage=o),class:"text-regular page-control__page-info",minlength:"1",maxlength:e.lastPage,onChange:u.getCars},null,8,["modelValue","maxlength","onChange"]),t(p,{tag:"span",class:"page-control__span"},{default:a(()=>[r("of")]),_:1}),t(_,{modelValue:e.lastPage,"onUpdate:modelValue":n[3]||(n[3]=o=>e.lastPage=o),class:"text-regular page-control__page-info",disabled:""},null,8,["modelValue"]),t(d,{class:"btn-default btn btn-text-2 page-control__btn",disabled:e.currentPage==e.lastPage,onClick:u.increaseCount},{icon:a(()=>[t(c,{name:"chevron_right",class:"pag__next"})]),_:1},8,["disabled","onClick"])]),_:1})]),_:1})):O("",!0)],64)}const le=y(ee,[["render",se]]);export{le as default};