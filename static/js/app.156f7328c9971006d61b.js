webpackJsonp([1,0],[function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var n=a(4),i=s(n),r=a(18),o=s(r),l=a(22),c=s(l),d=a(21),p=s(d),u=a(5),m=s(u),v=a(19),f=s(v),_=a(30),h=s(_),g=a(36),w=s(g);i.default.use(h.default),i.default.use(w.default);var x=[{path:"/",component:o.default},{path:"/signup",component:c.default},{path:"/login",component:p.default},{path:"/payment",component:m.default},{path:"/confirmation",component:f.default}],y=new w.default({routes:x});new i.default({router:y}).$mount("#app")},,function(e,t,a){e.exports=a.p+"static/img/logo.bcc08bc.png"},,,function(e,t,a){a(16);var s=a(1)(a(10),a(28),null,null);e.exports=s.exports},function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(20),i=s(n),r=a(17);s(r);t.default={name:"app",components:{Home:i.default}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"confirm"}},function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(4);s(n);t.default={methods:{tosignup:function(){this.$router.push("/signup")},tologin:function(){this.$router.push("/login")}}}},function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var a=new XMLHttpRequest;a.withCredentials=!0,a.addEventListener("readystatechange",function(){if(4===this.readyState){var e=JSON.parse(this.responseText);JSON.parse(e.paid)?window.location.href="/#/confirmation":window.location.href="/#/payment"}}),a.open("GET","https://anvil-payments.herokuapp.com/api/profile"),a.setRequestHeader("content-type","application/x-www-form-urlencoded"),a.setRequestHeader("authorization","Bearer "+e),a.setRequestHeader("cache-control","no-cache"),a.setRequestHeader("postman-token","13020f98-4f23-3ade-48a9-b13b25d89129"),a.send(t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(4),r=(s(i),a(5)),o=s(r);t.default={name:"login",components:{Payment:o.default},data:function(){return{credentials:{email:"",password:""},authenticated:!1}},methods:{submit:function(){var e="password="+this.credentials.password+"&email="+this.credentials.email,t=new XMLHttpRequest;t.withCredentials=!0,t.addEventListener("readystatechange",function(){if(4===this.readyState){var t=JSON.parse(this.responseText);"Missing credentials"===t.message?window.alert("Please fill in all boxes"):"Password is wrong"===t.message?window.alert("Invalid password"):"User not found"===t.message?window.alert("Invalid email and/or password"):(localStorage.setItem("token",t.token),n(localStorage.getItem("token"),e))}}),t.open("POST","https://anvil-payments.herokuapp.com/api/login"),t.setRequestHeader("content-type","application/x-www-form-urlencoded"),t.setRequestHeader("cache-control","no-cache"),t.setRequestHeader("postman-token","bd076ec3-bcc4-2eb2-5105-95d5456accf3"),t.send(e)}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"payment",data:function(){return{details:{number:"",cvc:"",exp_month:"",exp_year:"",zip:""}}},methods:{submit:function(){if(Stripe.card.validateCardNumber(this.details.number))if(Stripe.card.validateExpiry(this.details.exp_month+"/"+this.details.exp_year))if(Stripe.card.validateCVC(this.details.cvc))if(""===this.details.zip)window.alert("Please put in a zip");else{var e={number:this.details.number,cvc:this.details.cvc,exp_month:this.details.exp_month,exp_year:this.details.exp_year,address_zip:this.details.zip},t=this.details.exp_month+this.details.exp_year,a=this.details.number,s=this.details.cvc,n=this.details.zip;Stripe.card.createToken(e,function(e,i){if(i.error)console.log("Error: "),console.log(i.error);else{var r=i.id;localStorage.setItem("stripe_token",r);var o="card="+a+"&cvc="+s+"&bzip="+n+"&exp="+t+"&stripe_token="+r,l=new XMLHttpRequest;l.withCredentials=!0,l.addEventListener("readystatechange",function(){if(4===this.readyState){JSON.parse(this.responseText);window.location.href="/#/confirmation"}}),l.open("POST","https://anvil-payments.herokuapp.com/api/pay"),l.setRequestHeader("content-type","application/x-www-form-urlencoded"),l.setRequestHeader("authorization","Bearer "+localStorage.getItem("token")),l.setRequestHeader("cache-control","no-cache"),l.setRequestHeader("postman-token","1ccc32a1-078d-bab1-0e49-a3242c3c4ad0"),l.send(o)}})}else window.alert("Please put in a correct CVC");else window.alert("Please put in a correct expiration date");else window.alert("Please put in a correct credit card number")}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"signup",data:function(){return{credentials:{email:"",password:"",first_name:"",last_name:"",confirm_pass:""}}},methods:{submit:function(){if(""===this.credentials.first_name||""==this.credentials.last_name)window.alert("Please enter your name");else if(""===this.credentials.email)window.alert("Please enter your email");else if(""===this.credentials.password)window.alert("Please enter password");else if(""===this.credentials.confirm_pass)window.alert("Please confirm your password");else if(this.credentials.password!==this.credentials.confirm_pass)window.alert("Passwords do not match");else{var e="password="+this.credentials.password+"&email="+this.credentials.email+"&name="+this.credentials.first_name+"&nameLast="+this.credentials.last_name,t=new XMLHttpRequest;t.withCredentials=!0,t.addEventListener("readystatechange",function(){if(4===this.readyState){var e=JSON.parse(this.responseText);localStorage.setItem("token",e.token),window.location.href="/#/payment"}}),t.open("POST","https://anvil-payments.herokuapp.com/api/register"),t.setRequestHeader("content-type","application/x-www-form-urlencoded"),t.setRequestHeader("cache-control","no-cache"),t.setRequestHeader("postman-token","88efa6a2-5c23-4a60-e6e0-168aa00917d1"),t.send(e)}}}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,function(e,t,a){a(13);var s=a(1)(a(6),a(25),null,null);e.exports=s.exports},function(e,t,a){a(12);var s=a(1)(a(7),a(23),null,null);e.exports=s.exports},function(e,t,a){a(14);var s=a(1)(a(8),a(26),null,null);e.exports=s.exports},function(e,t,a){var s=a(1)(a(9),a(24),null,null);e.exports=s.exports},function(e,t,a){a(15);var s=a(1)(a(11),a(27),null,null);e.exports=s.exports},function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"confirm"}},[s("img",{attrs:{src:a(2)}}),e._v(" "),s("div",{staticClass:"col-md-6 col-md-offset-3",staticStyle:{"margin-top":"200px"}},[s("p",[e._v("Payment confirmed!")]),e._v(" "),s("p",{staticStyle:{"font-size":"30px"}},[e._v("Thanks for joining The Anvil!")])])])}]}},function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"login"}},[s("img",{attrs:{src:a(2)}}),e._v(" "),s("div",{staticClass:"container"},[e._m(0),e._v(" "),s("div",{staticClass:"col-md-8 col-md-offset-2",staticStyle:{"margin-top":"50px","text-align":"center"}},[s("div",{staticClass:"col-md-offset-4"},[s("div",{staticClass:"form-group"},[s("p",[e._v("Email: ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.email,expression:"credentials.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"email@email.com"},domProps:{value:e._s(e.credentials.email)},on:{input:function(t){t.target.composing||(e.credentials.email=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("p",[e._v("Password: ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter your password"},domProps:{value:e._s(e.credentials.password)},on:{input:function(t){t.target.composing||(e.credentials.password=t.target.value)}}})])]),e._v(" "),s("div",{staticStyle:{"margin-top":"30px"}},[s("button",{staticClass:"btn btn-warning",on:{click:e.submit}},[e._v("\n                    Submit\n                ")])])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-6 col-md-offset-3"},[a("h1",[e._v("Login")])])}]}},function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("img",{attrs:{src:a(2)}}),e._v(" "),s("home")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"home"}},[e._m(0),e._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"col-md-offset-3 col-md-6",attrs:{id:"buttons"}},[a("p",[a("button",{staticClass:"btn btn-warning link",attrs:{type:"button"},on:{click:e.tosignup}},[e._v("\n                    Sign up\n            ")])]),e._v(" "),a("p",[a("button",{staticClass:"btn btn-warning link",attrs:{type:"button"},on:{click:e.tologin}},[e._v("\n                    Login\n            ")])])])]),e._v(" "),a("router-view")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"col-md-6 col-md-offset-3",attrs:{id:"message"}},[a("p",[e._v("\n            Welcome to the Anvil Payment System! Sign up today and pay only $5\n            on your first month (that's 50% off!) at The Anvil! After your\n            first month, you will be charged $10 per month, starting mid March.\n        ")]),e._v(" "),a("br"),e._v(" "),a("p",[a("b",[e._v("NOTE:")]),e._v(" If you sign up, you will have to input your credit card number\n            so proceed with caution\n        ")])])])}]}},function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"signup"}},[s("img",{attrs:{src:a(2)}}),e._v(" "),s("div",{staticClass:"container"},[e._m(0),e._v(" "),s("div",{staticClass:"col-md-8 col-md-offset-2",staticStyle:{"margin-top":"50px","text-align":"center"}},[s("div",{staticClass:"col-md-offset-4"},[s("div",{staticClass:"form-group"},[s("p",[e._v("First Name: ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.first_name,expression:"credentials.first_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"First Name"},domProps:{value:e._s(e.credentials.first_name)},on:{input:function(t){t.target.composing||(e.credentials.first_name=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("p",[e._v("Last Name: ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.last_name,expression:"credentials.last_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Last Name"},domProps:{value:e._s(e.credentials.last_name)},on:{input:function(t){t.target.composing||(e.credentials.last_name=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("p",[e._v("Email: ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.email,expression:"credentials.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"email@email.com"},domProps:{value:e._s(e.credentials.email)},on:{input:function(t){t.target.composing||(e.credentials.email=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("p",[e._v("Password: ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter your password"},domProps:{value:e._s(e.credentials.password)},on:{input:function(t){t.target.composing||(e.credentials.password=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("p",[e._v("Confirm Password: ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.confirm_pass,expression:"credentials.confirm_pass"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm your password"},domProps:{value:e._s(e.credentials.confirm_pass)},on:{input:function(t){t.target.composing||(e.credentials.confirm_pass=t.target.value)}}})])]),e._v(" "),s("div",{staticStyle:{"margin-top":"30px"}},[s("button",{staticClass:"btn btn-warning",on:{click:e.submit}},[e._v("\n                    Submit\n                ")])])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-6 col-md-offset-3"},[a("h1",[e._v("Sign Up")])])}]}},function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"payment"}},[s("img",{attrs:{src:a(2)}}),e._v(" "),s("div",{staticClass:"container"},[e._m(0),e._v(" "),s("div",{staticClass:"col-md-8 col-md-offset-2",staticStyle:{"margin-top":"50px"}},[s("div",{staticClass:"col-md-offset-4"},[s("div",{staticClass:"form-group"},[s("p",[e._v("Card Number: ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.details.number,expression:"details.number"}],staticClass:"form-control",attrs:{type:"text",maxlength:"16",placeholder:"Card Number"},domProps:{value:e._s(e.details.number)},on:{input:function(t){t.target.composing||(e.details.number=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("p",[e._v("Expiration Date: ")]),e._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.details.exp_month,expression:"details.exp_month"}],staticClass:"form-control exp",attrs:{type:"text",maxlength:"2",placeholder:"MM"},domProps:{value:e._s(e.details.exp_month)},on:{input:function(t){t.target.composing||(e.details.exp_month=t.target.value)}}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.details.exp_year,expression:"details.exp_year"}],staticClass:"form-control exp",attrs:{type:"text",maxlength:"2",placeholder:"YY"},domProps:{value:e._s(e.details.exp_year)},on:{input:function(t){t.target.composing||(e.details.exp_year=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"form-group",staticStyle:{clear:"left"}},[s("p",[e._v("CVC: ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.details.cvc,expression:"details.cvc"}],staticClass:"form-control",attrs:{type:"text",maxlength:"3",placeholder:"CVC"},domProps:{value:e._s(e.details.cvc)},on:{input:function(t){t.target.composing||(e.details.cvc=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("p",[e._v("Zip Code: ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.details.zip,expression:"details.zip"}],staticClass:"form-control",attrs:{type:"text",maxlength:"5",placeholder:"Zip Code (e.g. 47906)"},domProps:{value:e._s(e.details.zip)},on:{input:function(t){t.target.composing||(e.details.zip=t.target.value)}}})])]),e._v(" "),s("div",{staticStyle:{"margin-top":"30px"}},[s("button",{staticClass:"btn btn-warning submit",on:{click:e.submit}},[e._v("Submit")])])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-6 col-md-offset-3"},[a("h1",[e._v("Payment")])])}]}}]);
//# sourceMappingURL=app.156f7328c9971006d61b.js.map