(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(13),s=a.n(l),i=a(4),o=a(5),r=a(8),m=a(6),u=a(7),h=a(29),d=a(30),p=a(28),E=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Bienvenido "),c.a.createElement("p",null,"\xa1Saca tu vestido del closet, contribuye al mundo con la reutilizaci\xf3n!, The Dresser te ayudar\xe1."),c.a.createElement("p",null,"Gana dinero sin salir de tu casa"),c.a.createElement("p",null,"\xa1Luce siempre diferente!"))}}]),t}(n.Component),b=a(2),g=window.$,f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={contactEmail:"",contactPass:"",contactName:"",contactLastName:""},a._handleSubmit=a._handleSubmit.bind(Object(b.a)(Object(b.a)(a))),a._handleChange=a._handleChange.bind(Object(b.a)(Object(b.a)(a))),a._handleChangePass=a._handleChangePass.bind(Object(b.a)(Object(b.a)(a))),a._handleChangeName=a._handleChangeName.bind(Object(b.a)(Object(b.a)(a))),a._handleChangeLastName=a._handleChangeLastName.bind(Object(b.a)(Object(b.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"_handleChange",value:function(e){this.setState({contactEmail:e.target.value})}},{key:"_handleChangePass",value:function(e){this.setState({contactPass:e.target.value})}},{key:"_handleChangeName",value:function(e){this.setState({contactName:e.target.value})}},{key:"_handleChangeLastName",value:function(e){this.setState({contactLastName:e.target.value})}},{key:"_handleSubmit",value:function(e){e.preventDefault(),this.setState({contactEmail:"",contactPass:"",contactName:"",contactLastName:""}),g.ajax({url:"https://apptd.herokuapp.com/auth/signup",type:"POST",data:{email:this.state.contactEmail,password:this.state.contactPass,name:this.state.contactName,lastname:this.state.contactLastName},cache:!1,success:function(e){this.setState({contactEmail:"success",contactPass:""}),console.log("success",e),localStorage.setItem("id_token",e.token)}.bind(this),error:function(e,t,a){console.log(e,t),console.log(a),this.setState({contactEmail:"danger",contactPass:""}),console.log(this.state.contactEmail+this.state.contactPass+"fail")}.bind(this)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"contact",id:"contact"},c.a.createElement("div",{className:"filter"},c.a.createElement("h2",null,"Completa tus datos"),c.a.createElement("form",{className:"form",onSubmit:this._handleSubmit,id:"formContact"},c.a.createElement("label",null,"Nombre:"),c.a.createElement("input",{id:"formName",type:"text",placeholder:"Nombre",name:"formName",value:this.state.contactName,onChange:this._handleChangeName,required:!0}),c.a.createElement("label",null,"Apellido:"),c.a.createElement("input",{id:"formLastName",type:"text",placeholder:"Apellido",name:"formLastName",value:this.state.contactLastName,onChange:this._handleChangeLastName,required:!0}),c.a.createElement("p",null),c.a.createElement("label",null,"Correo Electr\xf3nico:"),c.a.createElement("input",{id:"formEmail",type:"email",placeholder:"Correo electr\xf3nico",name:"formEmail",value:this.state.contactEmail,onChange:this._handleChange,required:!0}),c.a.createElement("label",null,"Contrase\xf1a:"),c.a.createElement("input",{type:"password",placeholder:"Contrase\xf1a",id:"formPass",name:"formPass",value:this.state.contactPass,onChange:this._handleChangePass,required:!0}),c.a.createElement("p",null,c.a.createElement("input",{type:"submit",value:"Crear Cuenta",className:"btn--cta",id:"btn-submit"})))))}}]),t}(n.Component),C=window.$,v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={contactEmail:"",contactPass:""},a._handleSubmit=a._handleSubmit.bind(Object(b.a)(Object(b.a)(a))),a._handleChangeEmail=a._handleChangeEmail.bind(Object(b.a)(Object(b.a)(a))),a._handleChangePass=a._handleChangePass.bind(Object(b.a)(Object(b.a)(a))),a._handlePushSignup=a._handlePushSignup.bind(Object(b.a)(Object(b.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"_handleChangeEmail",value:function(e){this.setState({contactEmail:e.target.value})}},{key:"_handleChangePass",value:function(e){this.setState({contactPass:e.target.value})}},{key:"_handlePushSignup",value:function(e){this.props.history.push("/signin")}},{key:"_handleSubmit",value:function(e){e.preventDefault(),this.setState({contactEmail:"",contactPass:""}),C.ajax({url:"https://apptd.herokuapp.com/auth/signin",type:"POST",data:{email:this.state.contactEmail,password:this.state.contactPass},cache:!1,success:function(e){this.setState({contactEmail:"success",contactPass:""}),console.log("success",e),localStorage.setItem("id_token",e.token)}.bind(this),error:function(e,t,a){console.log(e,t),console.log(a),this.setState({contactEmail:"danger",contactPass:""}),console.log(this.state.contactEmail+this.state.contactPass+"fail")}.bind(this)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"contact",id:"contact"},c.a.createElement("div",{className:"filter"},c.a.createElement("h2",null,"Inicia sesi\xf3n"),c.a.createElement("form",{className:"form",onSubmit:this._handleSubmit,id:"formContact"},c.a.createElement("label",null,"Correo Electr\xf3nico:"),c.a.createElement("input",{id:"formEmail",type:"email",placeholder:"Correo electr\xf3nico",name:"formEmail",value:this.state.contactEmail,onChange:this._handleChangeEmail,required:!0}),c.a.createElement("label",null,"Contrase\xf1a:"),c.a.createElement("input",{type:"password",id:"formPass",placeholder:"Contrase\xf1a",name:"formPass",value:this.state.contactPass,onChange:this._handleChangePass,required:!0}),c.a.createElement("p",null,c.a.createElement("input",{type:"submit",value:"Iniciar Sesi\xf3n",className:"btn--cta",id:"btn-submit"})),c.a.createElement("p",null,c.a.createElement(d.a,{to:"/signup"},"Crea una cuenta")),c.a.createElement("p",null,c.a.createElement(d.a,{to:"/forgotpass"},"Olvid\xe9 mi contrase\xf1a")))))}}]),t}(n.Component),j=window.$,O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={contactEmail:""},a._handleSubmit=a._handleSubmit.bind(Object(b.a)(Object(b.a)(a))),a._handleChangeEmail=a._handleChangeEmail.bind(Object(b.a)(Object(b.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"_handleChangeEmail",value:function(e){this.setState({contactEmail:e.target.value})}},{key:"_handleSubmit",value:function(e){e.preventDefault(),this.setState({contactEmail:""}),j.ajax({type:"POST",data:{email:this.state.contactEmail},cache:!1,success:function(e){this.setState({contactEmail:"success"}),console.log("success",e),localStorage.setItem("id_token",e.token)}.bind(this),error:function(e,t,a){console.log(e,t),console.log(a),this.setState({contactEmail:"danger",contactPass:""}),console.log(this.state.contactEmail+this.state.contactPass+"fail")}.bind(this)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"contact",id:"contact"},c.a.createElement("div",{className:"filter"},c.a.createElement("h2",null,"Recupera tu contrase\xf1a"),c.a.createElement("form",{className:"form",onSubmit:this._handleSubmit,id:"formContact"},c.a.createElement("label",null,"Correo Electr\xf3nico:"),c.a.createElement("input",{id:"formEmail",type:"email",placeholder:"Correo electr\xf3nico",name:"formEmail",value:this.state.contactEmail,onChange:this._handleChangeEmail,required:!0}),c.a.createElement("p",null,c.a.createElement("input",{type:"submit",value:"Enviar correo",className:"btn--cta",id:"btn-submit"})))))}}]),t}(n.Component),_=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Carga tus prendas"),c.a.createElement("p",null,"Im\xe1genes jpg \xf3 png"),c.a.createElement("div",{id:"contenedor"},c.a.createElement("div",{className:"recontenedordrop"},c.a.createElement("div",{className:"dropArea"},c.a.createElement("div",{id:"myId",className:"dropzone"}," ")))))}},{key:"componentWillUnmount",value:function(){}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,null,c.a.createElement("div",null,c.a.createElement("h1",null,"The Dresser "),c.a.createElement(d.a,{to:"/Signin"},"Iniciar Sesi\xf3n"),c.a.createElement("ul",{className:"header"},c.a.createElement("li",null,c.a.createElement(d.a,{to:"/"},"Inicio")),c.a.createElement("li",null,c.a.createElement(d.a,{to:"/signup"},"Crear Cuenta")),c.a.createElement("li",null,c.a.createElement(d.a,{to:"/uploadfiles"},"Cargar Archivos"))),c.a.createElement("div",{className:"content"},c.a.createElement(p.a,{exact:!0,path:"/",component:E}),c.a.createElement(p.a,{path:"/signup",component:f}),c.a.createElement(p.a,{path:"/signin",component:v}),c.a.createElement(p.a,{path:"/forgotpass",component:O}),c.a.createElement(p.a,{path:"/uploadfiles",component:_}))))}}]),t}(n.Component);a(25);s.a.render(c.a.createElement(S,null),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.b90cf985.chunk.js.map