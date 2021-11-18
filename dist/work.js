webpackJsonp([1],{148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),a=n.n(r),l=n(18),s=n.n(l),i=n(19),o=n.n(i),c=n(20),d=n.n(c),u=n(0),f=n(152),h=n(178),p=n(61),_=n.n(p),m=_.a.home,k=function(e){function t(e){a()(this,t);var n=o()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isFiltersOpen:!1},n.handleDrawerState=n.handleDrawerState.bind(n),n.handleWindowResize=n.handleWindowResize.bind(n),n}return d()(t,e),s()(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleWindowResize",value:function(e){window.innerWidth<=700&&this.setState({isFiltersOpen:!1})}},{key:"handleDrawerState",value:function(){this.setState({isFiltersOpen:!this.state.isFiltersOpen})}},{key:"render",value:function(){return u.default.createElement("div",{className:"pt-content-card__work-container flex flex-dc"},u.default.createElement(f.a,{icon:"folder",title:m.work,handleDrawerState:this.handleDrawerState,isFiltersOpen:this.state.isFiltersOpen}),u.default.createElement(h.a,{handleDrawerState:this.handleDrawerState,isFiltersOpen:this.state.isFiltersOpen}))}}]),t}(u.default.PureComponent);t.default=k},151:function(e,t,n){"use strict";var r=n(17),a=n.n(r),l=n(18),s=n.n(l),i=n(19),o=n.n(i),c=n(20),d=n.n(c),u=n(0),f=function(e){function t(){return a()(this,t),o()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d()(t,e),s()(t,[{key:"render",value:function(){var e=this.props.iconColor?{fill:this.props.iconColor}:null;return u.default.createElement("svg",{style:e,viewBox:"0 0 24 24"},u.default.createElement("use",{xlinkHref:"assets/icons.svg#"+this.props.iconName}))}}]),t}(u.default.PureComponent);t.a=f},152:function(e,t,n){"use strict";var r=n(17),a=n.n(r),l=n(18),s=n.n(l),i=n(19),o=n.n(i),c=n(20),d=n.n(c),u=n(0),f=n(27),h=n(151),p=n(61),_=n.n(p),m=_.a.misc,k=function(e){function t(){return a()(this,t),o()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d()(t,e),s()(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"pt-content-card__header pt-content-card__header--nav flex flex-cross-center"},u.default.createElement(f.Link,{to:"/",title:m.back},u.default.createElement("div",{className:"pt-content-card__header--nav__icon flex flex-full-center"},u.default.createElement(h.a,{iconName:"arrow-left"}))),u.default.createElement("div",{className:"pt-content-card__header--nav__title flex flex-full-center"},u.default.createElement(h.a,{iconName:this.props.icon}),u.default.createElement("h2",{className:"ta-c"},this.props.title)),this.props.handleDrawerState?u.default.createElement("button",{style:{pointerEvents:this.props.isFiltersOpen?"none":""},className:"pt-content-card__header--nav__icon flex-full-center pointer",onClick:this.props.handleDrawerState},u.default.createElement(h.a,{iconName:"filter"})):null)}}]),t}(u.default.PureComponent);t.a=k},178:function(e,t,n){"use strict";var r=n(17),a=n.n(r),l=n(18),s=n.n(l),i=n(19),o=n.n(i),c=n(20),d=n.n(c),u=n(0),f=n(179),h=n(181),p=n(151),_=n(62),m=n(61),k=n.n(m),v=k.a.work,g=function(e){function t(e){a()(this,t);var n=o()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={filters:n.generateFilters(),projects:_.projects},n.handleFilterChange=n.handleFilterChange.bind(n),n.handleAllFilterChange=n.handleAllFilterChange.bind(n),n.getFilteredWorkItems=n.getFilteredWorkItems.bind(n),n}return d()(t,e),s()(t,[{key:"generateFilters",value:function(){var e={};return _.projects.forEach(function(t){t.categories.forEach(function(t){Object.keys(e).includes(t)||(e[t]=!0)})}),e}},{key:"getFilteredWorkItems",value:function(){var e=this;return this.state.projects.length?this.state.projects.map(function(t,n){var r=!1;if(t.categories.forEach(function(t){e.state.filters[t]&&(r=!0)}),r)return u.default.createElement(h.a,{key:n,work:t})}):u.default.createElement("p",{className:"no-projects-text flex flex-dc flex-cross-center"},u.default.createElement(p.a,{iconName:"person"}),v.no_projects)}},{key:"handleFilterChange",value:function(e,t){var n=Object.assign({},this.state.filters);n[e]=t,this.setState({filters:n})}},{key:"handleAllFilterChange",value:function(e,t){var n=Object.assign({},this.state.filters);Object.keys(this.state.filters).forEach(function(e){n[e]=t}),this.setState({filters:n})}},{key:"render",value:function(){var e={};return this.state.projects.length<=0&&(e={display:"flex",justifyContent:"center",alignItems:"center"}),u.default.createElement("div",{className:"pt-content-card__body pt-content-card__body__work flex flex-cross-center"},this.state.projects.length>0&&u.default.createElement(f.a,{filters:this.state.filters,handleFilterChange:this.handleFilterChange,handleAllFilterChange:this.handleAllFilterChange,isFiltersOpen:this.props.isFiltersOpen,handleDrawerState:this.props.handleDrawerState}),u.default.createElement("div",{className:"pt-content-card__body__work-filters__overlay "+(this.props.isFiltersOpen?"filters-open":""),onClick:this.props.handleDrawerState}),u.default.createElement("div",{className:"pt-content-card__body__work-items",style:e},this.getFilteredWorkItems()))}}]),t}(u.default.PureComponent);t.a=g},179:function(e,t,n){"use strict";var r=n(17),a=n.n(r),l=n(18),s=n.n(l),i=n(19),o=n.n(i),c=n(20),d=n.n(c),u=n(0),f=n(180),h=n(151),p=n(61),_=n.n(p),m=_.a.work,k=function(e){function t(e){a()(this,t);var n=o()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.allFiltersAreChecked=n.allFiltersAreChecked.bind(n),n}return d()(t,e),s()(t,[{key:"allFiltersAreChecked",value:function(){var e=this,t=!0;return Object.keys(this.props.filters).forEach(function(n){e.props.filters[n]||(t=!1)}),t}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.filters).map(function(t,n){return u.default.createElement(f.a,{key:n,name:t,handleFilterChange:e.props.handleFilterChange,value:e.props.filters[t]})});return u.default.createElement("div",{className:"pt-content-card__body__work-filters "+(this.props.isFiltersOpen?"filters-open":"")},u.default.createElement("p",{className:"flex flex-cross-center flex-sa"},u.default.createElement("button",{className:"pt-content-card__header--nav__icon flex-full-center pointer",onClick:this.props.handleDrawerState},u.default.createElement(h.a,{iconName:"close"})),m.categories),u.default.createElement("ul",{className:"pt-content-card__body__work-filters__list flex flex-dc"},u.default.createElement(f.a,{name:m.category_all,value:this.allFiltersAreChecked(),handleFilterChange:this.props.handleAllFilterChange}),t))}}]),t}(u.default.PureComponent);t.a=k},180:function(e,t,n){"use strict";var r=n(17),a=n.n(r),l=n(18),s=n.n(l),i=n(19),o=n.n(i),c=n(20),d=n.n(c),u=n(0),f=n(70),h=function(e){function t(e){a()(this,t);var n=o()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=n.handleChange.bind(n),n}return d()(t,e),s()(t,[{key:"handleChange",value:function(e){this.props.handleFilterChange(this.props.name,!this.props.value)}},{key:"render",value:function(){return u.default.createElement("li",{className:"md__checkbox",title:this.props.name+" projects"},u.default.createElement("label",{className:"flex flex-cross-center pointer"},u.default.createElement("input",{type:"checkbox",onChange:this.handleChange,checked:this.props.value}),u.default.createElement("span",{className:"md__checkbox-material"},u.default.createElement("span",{className:"md__checkbox-check"})),u.default.createElement("span",{className:"md__checkbox-material__text"},this.props.name),u.default.createElement(f,null)))}}]),t}(u.default.PureComponent);t.a=h},181:function(e,t,n){"use strict";var r=n(17),a=n.n(r),l=n(18),s=n.n(l),i=n(19),o=n.n(i),c=n(20),d=n.n(c),u=n(0),f=n(151),h=n(61),p=n.n(h),_=n(62),m=p.a.work,k=function(e){function t(e){a()(this,t);var n=o()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getLinkTags=n.getLinkTags.bind(n),n}return d()(t,e),s()(t,[{key:"getLinkTags",value:function(){var e=[];return this.props.work.siteUrl&&(e[e.length]=u.default.createElement("a",{href:this.props.work.siteUrl,key:e.length,target:"_blank",rel:"noopener",title:this.props.work.title+" Website",className:"flex flex-dc flex-full-center"},u.default.createElement(f.a,{iconName:"web"}),u.default.createElement("p",null,m.website))),this.props.work.sourceCodeUrl&&(e[e.length]=u.default.createElement("a",{href:this.props.work.sourceCodeUrl,key:e.length,target:"_blank",rel:"noopener",title:this.props.work.title+" Source Code",className:"flex flex-dc flex-full-center"},u.default.createElement(f.a,{iconName:"code"}),u.default.createElement("p",null,m.source))),e}},{key:"render",value:function(){var e=this.props.work.categories.map(function(e,t){return u.default.createElement("span",{key:t},e)}),t=this.getLinkTags();return u.default.createElement("div",{className:"pt-content-card__body__work-items__item flex"},u.default.createElement("div",{className:"pt-content-card__body__work-items__item__image flex flex-full-center"},u.default.createElement("img",{src:this.props.work.img||_.missingProjectIcon,alt:this.props.work.title+" Icon"})),u.default.createElement("div",{className:"pt-content-card__body__work-items__item__data flex flex-dc flex-sb"},u.default.createElement("h4",null,this.props.work.title),u.default.createElement("p",null,this.props.work.description),u.default.createElement("div",{className:"pt-content-card__body__work-items__item__data__tags"},e)),this.props.work.sourceCodeUrl||this.props.work.siteUrl?u.default.createElement("div",{className:"pt-content-card__body__work-items__item__buttons flex flex-dc"},t):null)}}]),t}(u.default.PureComponent);t.a=k}});