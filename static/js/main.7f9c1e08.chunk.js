(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{22:function(e,t,i){},24:function(e,t,i){},25:function(e,t,i){},26:function(e,t,i){},27:function(e,t,i){},28:function(e,t,i){},49:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),r=i(16),c=i.n(r),d=(i(22),i(6)),s=i.n(d),o=i(17),b=i(4),l=(i(24),i(25),i(26),i(27),i(28),i.p+"static/media/logo.fe899a86.png"),h=[{name:"ALABAMA",abbreviation:"AL"},{name:"ALASKA",abbreviation:"AK"},{name:"AMERICAN SAMOA",abbreviation:"AS"},{name:"ARIZONA",abbreviation:"AZ"},{name:"ARKANSAS",abbreviation:"AR"},{name:"CALIFORNIA",abbreviation:"CA"},{name:"COLORADO",abbreviation:"CO"},{name:"CONNECTICUT",abbreviation:"CT"},{name:"DELAWARE",abbreviation:"DE"},{name:"DISTRICT OF COLUMBIA",abbreviation:"DC"},{name:"FEDERATED STATES OF MICRONESIA",abbreviation:"FM"},{name:"FLORIDA",abbreviation:"FL"},{name:"GEORGIA",abbreviation:"GA"},{name:"GUAM",abbreviation:"GU"},{name:"HAWAII",abbreviation:"HI"},{name:"IDAHO",abbreviation:"ID"},{name:"ILLINOIS",abbreviation:"IL"},{name:"INDIANA",abbreviation:"IN"},{name:"IOWA",abbreviation:"IA"},{name:"KANSAS",abbreviation:"KS"},{name:"KENTUCKY",abbreviation:"KY"},{name:"LOUISIANA",abbreviation:"LA"},{name:"MAINE",abbreviation:"ME"},{name:"MARSHALL ISLANDS",abbreviation:"MH"},{name:"MARYLAND",abbreviation:"MD"},{name:"MASSACHUSETTS",abbreviation:"MA"},{name:"MICHIGAN",abbreviation:"MI"},{name:"MINNESOTA",abbreviation:"MN"},{name:"MISSISSIPPI",abbreviation:"MS"},{name:"MISSOURI",abbreviation:"MO"},{name:"MONTANA",abbreviation:"MT"},{name:"NEBRASKA",abbreviation:"NE"},{name:"NEVADA",abbreviation:"NV"},{name:"NEW HAMPSHIRE",abbreviation:"NH"},{name:"NEW JERSEY",abbreviation:"NJ"},{name:"NEW MEXICO",abbreviation:"NM"},{name:"NEW YORK",abbreviation:"NY"},{name:"NORTH CAROLINA",abbreviation:"NC"},{name:"NORTH DAKOTA",abbreviation:"ND"},{name:"NORTHERN MARIANA ISLANDS",abbreviation:"MP"},{name:"OHIO",abbreviation:"OH"},{name:"OKLAHOMA",abbreviation:"OK"},{name:"OREGON",abbreviation:"OR"},{name:"PALAU",abbreviation:"PW"},{name:"PENNSYLVANIA",abbreviation:"PA"},{name:"PUERTO RICO",abbreviation:"PR"},{name:"RHODE ISLAND",abbreviation:"RI"},{name:"SOUTH CAROLINA",abbreviation:"SC"},{name:"SOUTH DAKOTA",abbreviation:"SD"},{name:"TENNESSEE",abbreviation:"TN"},{name:"TEXAS",abbreviation:"TX"},{name:"UTAH",abbreviation:"UT"},{name:"VERMONT",abbreviation:"VT"},{name:"VIRGIN ISLANDS",abbreviation:"VI"},{name:"VIRGINIA",abbreviation:"VA"},{name:"WASHINGTON",abbreviation:"WA"},{name:"WEST VIRGINIA",abbreviation:"WV"},{name:"WISCONSIN",abbreviation:"WI"},{name:"WYOMING",abbreviation:"WY"}],j=i(0),m=function(e){var t=e.time,i=e.name,a=e.country,n=e.icon,r=e.desc,c=e.high,d=e.low,s=e.humidity,o=e.uv,b=e.wind,l=e.pressure,h=e.visibility,m=e.temp,u=e.sunrise,O=e.sunset;return Object(j.jsxs)("div",{id:"current-weather-div",children:[Object(j.jsxs)("h2",{className:"smaller-header",children:["Current Weather in ",i,", ",a]}),Object(j.jsxs)("p",{children:["As of ",t]}),Object(j.jsxs)("div",{id:"temp-icon",children:[Object(j.jsxs)("h2",{id:"temp",children:[m,"\xb0 F"]}),Object(j.jsx)("img",{src:n,id:"icon",alt:"Weather icon."})]}),Object(j.jsx)("p",{children:r}),Object(j.jsxs)("div",{id:"table-parent",children:[Object(j.jsx)("table",{id:"left-table",children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"High / Low"}),Object(j.jsxs)("td",{children:[c,"\xb0 / ",d,"\xb0"]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Humidity"}),Object(j.jsxs)("td",{children:[s,"%"]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"UV Index"}),Object(j.jsx)("td",{children:o})]})]})}),Object(j.jsx)("table",{children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Wind Speed"}),Object(j.jsxs)("td",{children:[b," mph"]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Pressure"}),Object(j.jsxs)("td",{children:[l.toFixed(2)," inHg"]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Visibility"}),Object(j.jsxs)("td",{children:[(621371e-9*h).toFixed(2)," miles"]})]})]})})]}),Object(j.jsxs)("p",{children:["Sunrise: ",u," Sunset: ",O]})]})},u=function(e){var t=e.search,i=e.handleSearch,a=e.handleClick,n=e.showErr;return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{value:t,type:"text",placeholder:"City, State or City, Country",onChange:i}),Object(j.jsx)("input",{type:"button",value:"Search",onClick:a}),n&&Object(j.jsxs)("label",{children:["Sorry, we can't seem to find the city you're looking for.",Object(j.jsx)("br",{}),'Try using the format "City, State" or "City, Country."']})]})},O=function(e){var t=e.id,i=e.date,a=e.icon,n=e.high,r=e.low,c=e.desc;return Object(j.jsxs)("div",{className:"daily-weather",id:t,children:[Object(j.jsx)("p",{children:i}),Object(j.jsx)("img",{src:a,className:"icon",alt:"Weather icon."}),Object(j.jsxs)("p",{children:[n," / ",r," \xb0F"]}),Object(j.jsx)("p",{children:c})]})},p=function(e){var t=e.name,i=e.day,a=e.date,n=e.high,r=e.low,c=e.icon,d=e.desc,s=e.humidity,o=e.uv,b=e.wind,l=e.pressure,h=e.dewPoint;return Object(j.jsxs)("div",{id:"next-week-div",children:[Object(j.jsxs)("h2",{className:"smaller-header",children:["Weather in ",t," on ",i]}),Object(j.jsx)("p",{children:a}),Object(j.jsxs)("h2",{children:[n,"\xb0 / ",r,"\xb0 F"]}),Object(j.jsx)("img",{src:c,alt:"Weather icon."}),Object(j.jsx)("p",{children:d}),Object(j.jsxs)("div",{id:"table-parent",children:[Object(j.jsx)("table",{id:"left-table",children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"High / Low"}),Object(j.jsxs)("td",{children:[n,"\xb0 / ",r,"\xb0"]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Humidity"}),Object(j.jsxs)("td",{children:[s,"%"]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"UV Index"}),Object(j.jsx)("td",{children:o})]})]})}),Object(j.jsx)("table",{children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Wind Speed"}),Object(j.jsxs)("td",{children:[b," mph"]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Pressure"}),Object(j.jsxs)("td",{children:[(.03*l).toFixed(2)," inHg"]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Dew Point"}),Object(j.jsxs)("td",{children:[Math.round(h),"\xb0F"]})]})]})})]})]})},x=i(7),v=i.n(x),y=i(3),A=i.n(y),w="30fef87c8108b55220f5b853e7f92317";var M=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),i=t[0],n=t[1],r=Object(a.useState)(""),c=Object(b.a)(r,2),d=c[0],x=c[1],y=Object(a.useState)([]),M=Object(b.a)(y,2),g=M[0],f=M[1],S=Object(a.useState)([]),I=Object(b.a)(S,2),N=I[0],C=I[1],D=Object(a.useState)(1),E=Object(b.a)(D,2),T=E[0],L=E[1],R=Object(a.useState)(!1),H=Object(b.a)(R,2),W=H[0],F=H[1],P=Object(a.useState)(!1),U=Object(b.a)(P,2),K=U[0],V=U[1],Y=Object(a.useState)(!1),k=Object(b.a)(Y,2),G=k[0],B=k[1],_=Object(a.useState)(!1),J=Object(b.a)(_,2),X=J[0],z=J[1],Z=Object(a.useState)(!1),q=Object(b.a)(Z,2),Q=q[0],$=q[1],ee=function(){var e=Object(o.a)(s.a.mark((function e(){var t,i,a,n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.openweathermap.org/data/2.5/weather?q=".concat(d,"&appid=").concat(w,"&units=imperial"),e.next=4,v.a.get(t);case 4:return i=e.sent,a=i.data.coord.lat,n=i.data.coord.lon,r="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(a,"&lon=").concat(n,"&exclude=current,hourly&appid=").concat(w,"&units=imperial"),e.next=10,v.a.get(r);case 10:c=e.sent,f((function(){return i.data})),C((function(){return c.data})),F((function(){return!0})),V((function(){return!0})),G&&B((function(){return!1})),$((function(){return!1})),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),404===e.t0.response.status&&(W?$((function(){return!0})):z((function(){return!0})));case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}(),te=function(e){if(n((function(){return e.target.value})),e.target.value.split(",")[1]&&e.target.value.split(",").length<3){var t=e.target.value.split(",")[1].toLowerCase().trim();(h.some((function(e){return e.name.toLowerCase().includes(t)}))||h.some((function(e){return e.abbreviation.toLowerCase().includes(t)})))&&x((function(){return"".concat(e.target.value,", us")}))}else x((function(){return e.target.value}))},ie=function(e){e.preventDefault(),ee(),n("")},ae=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};return Object(j.jsxs)("div",{id:"app-parent",children:[Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("img",{src:l,alt:"Weather Logo"})}),Object(j.jsx)("li",{children:"MyWeather"}),Object(j.jsx)("li",{children:W&&Object(j.jsx)(u,{search:i,handleSearch:te,handleClick:ie,showErr:Q})})]})}),!W&&Object(j.jsxs)("div",{id:"App",children:[Object(j.jsx)("h1",{children:"Worldwide Weather at Your Fingertips"}),Object(j.jsx)("p",{children:"Please enter a city"}),Object(j.jsx)(u,{search:i,handleSearch:te,handleClick:ie}),X&&Object(j.jsxs)("p",{children:["Sorry, we can't seem to find the city you're looking for.",Object(j.jsx)("br",{}),'Try using the format "City, State" or "City, Country."']})]}),W&&Object(j.jsxs)("div",{id:"all-weather-parent",children:[K&&Object(j.jsxs)("div",{id:"display",children:[Object(j.jsx)(m,{time:A.a.unix(g.dt).format("LT"),name:g.name,country:g.sys.country,icon:"http://openweathermap.org/img/wn/".concat(g.weather[0].icon,"@2x.png"),desc:ae(g.weather[0].description),high:Math.round(g.main.temp_max),low:Math.round(g.main.temp_min),humidity:g.main.humidity,uv:Math.round(N.daily[0].uvi),wind:N.daily[0].wind_speed,pressure:.03*g.main.pressure,visibility:Math.round(g.visibility),temp:Math.round(g.main.temp),sunrise:A.a.unix(g.sys.sunrise).utcOffset(g.timezone/60).format("LT"),sunset:A.a.unix(g.sys.sunset).utcOffset(g.timezone/60).format("LT")}),Object(j.jsx)(p,{name:g.name,day:A.a.unix(N.daily[T].dt).format("dddd"),date:A.a.unix(N.daily[T].dt).format("MMM DD, YYYY"),high:Math.round(N.daily[T].temp.max),low:Math.round(N.daily[T].temp.min),desc:ae(N.daily[T].weather[0].description),icon:"http://openweathermap.org/img/wn/".concat(N.daily[T].weather[0].icon,"@2x.png"),humidity:N.daily[T].humidity,uv:N.daily[T].uvi,wind:N.daily[T].wind_speed,pressure:N.daily[T].pressure,dewPoint:N.daily[T].dew_point})]}),Object(j.jsx)("div",{id:"forecast-div",children:Object(j.jsx)("h2",{className:"smaller-header",children:"7-day forecast"})}),Object(j.jsxs)("div",{className:"next-week-parent",onClick:function(e){e.preventDefault(),B((function(){return!0})),e.target.id?L((function(){return e.target.id})):L((function(){return 1}))},children:[Object(j.jsx)(O,{id:1,date:A.a.unix(N.daily[1].dt).format("ddd, MMM DD"),icon:"http://openweathermap.org/img/wn/".concat(N.daily[1].weather[0].icon,"@2x.png"),high:Math.round(N.daily[1].temp.max),low:Math.round(N.daily[1].temp.min),desc:N.daily[1].weather[0].description}),Object(j.jsx)(O,{id:2,date:A.a.unix(N.daily[2].dt).format("ddd, MMM DD"),icon:"http://openweathermap.org/img/wn/".concat(N.daily[2].weather[0].icon,"@2x.png"),high:Math.round(N.daily[2].temp.max),low:Math.round(N.daily[2].temp.min),desc:N.daily[2].weather[0].description}),Object(j.jsx)(O,{id:3,date:A.a.unix(N.daily[3].dt).format("ddd, MMM DD"),icon:"http://openweathermap.org/img/wn/".concat(N.daily[3].weather[0].icon,"@2x.png"),high:Math.round(N.daily[3].temp.max),low:Math.round(N.daily[3].temp.min),desc:N.daily[3].weather[0].description}),Object(j.jsx)(O,{id:4,date:A.a.unix(N.daily[4].dt).format("ddd, MMM DD"),icon:"http://openweathermap.org/img/wn/".concat(N.daily[4].weather[0].icon,"@2x.png"),high:Math.round(N.daily[4].temp.max),low:Math.round(N.daily[4].temp.min),desc:N.daily[4].weather[0].description}),Object(j.jsx)(O,{id:5,date:A.a.unix(N.daily[5].dt).format("ddd, MMM DD"),icon:"http://openweathermap.org/img/wn/".concat(N.daily[5].weather[0].icon,"@2x.png"),high:Math.round(N.daily[5].temp.max),low:Math.round(N.daily[5].temp.min),desc:N.daily[5].weather[0].description}),Object(j.jsx)(O,{id:6,date:A.a.unix(N.daily[6].dt).format("ddd, MMM DD"),icon:"http://openweathermap.org/img/wn/".concat(N.daily[6].weather[0].icon,"@2x.png"),high:Math.round(N.daily[6].temp.max),low:Math.round(N.daily[6].temp.min),desc:N.daily[6].weather[0].description}),Object(j.jsx)(O,{id:7,date:A.a.unix(N.daily[7].dt).format("ddd, MMM DD"),icon:"http://openweathermap.org/img/wn/".concat(N.daily[7].weather[0].icon,"@2x.png"),high:Math.round(N.daily[7].temp.max),low:Math.round(N.daily[7].temp.min),desc:N.daily[7].weather[0].description})]})]}),W&&Object(j.jsx)("div",{id:"gray-div"})]})},g=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,50)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;i(e),a(e),n(e),r(e),c(e)}))};c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root")),g()}},[[49,1,2]]]);
//# sourceMappingURL=main.7f9c1e08.chunk.js.map