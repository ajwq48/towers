webpackJsonp([1],{NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),o=s("Gu7T"),i=s.n(o),r={name:"HelloWorld",data:function(){return{sides:[4,5,2,2,1,2,1,2,2,4,4,2,2,1,2,1,2,3,3,4],solutionIndex:0}},methods:{pN:function(e){if(1===e)return[[1]];var t=[];return this.pN(e-1).forEach(function(s){for(var n=0;n<e;n++){var o=s.slice();o.splice(n,0,e),t.push(o)}}),t},generateBoard:function(e,t){if(1===t)return e.map(function(e){return[e]});var s=[];return this.generateBoard(e,t-1).forEach(function(t){e.forEach(function(e){if([0,1,2,3,4].every(function(s){return t.every(function(t){return t[s]!==e[s]})})){var n=t.slice();n.push(e),s.push(n)}})}),s},towerCount:function(e){for(var t=0,s=0,n=0;n<e.length;n++)e[n]>t&&(t=e[n],s++);return s},transpose:function(e){return e[0].map(function(t,s){return e.map(function(e){return e[s]})})}},computed:{board:function(){var e=this.pN(5);return this.generateBoard(e,5)},towers:function(){var e=this;return this.board.reduce(function(t,s){var n=[].concat(i()(s.map(e.towerCount)),i()(s.map(function(t){return e.towerCount(t.slice().reverse())})),i()(e.transpose(s).map(e.towerCount)),i()(e.transpose(s).map(function(t){return e.towerCount(t.slice().reverse())}))).join("");return t.hasOwnProperty(n)||(t[n]=[]),t[n].push(s),t},{})},towerSolution:function(){return this.towers[this.sides.join("")]},towerSolutionsList:function(){return this.towerSolution?[].concat(i()(new Array(this.towerSolution.length).keys())):[]},selectedSolution:function(){return this.towerSolution?this.towerSolution[this.solutionIndex]:[[],[],[],[],[]]}},towerSolution:{towerSolutionsList:function(e){this.solutionIndex=e[0]}}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{align:"center"}},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.solutionIndex,expression:"solutionIndex"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.solutionIndex=t.target.multiple?s:s[0]}}},e._l(e.towerSolutionsList,function(t){return s("option",{domProps:{value:t}},[e._v("Solution "+e._s(t+1))])})),e._v(" "),s("table",[s("tr",[s("td"),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[10],expression:"sides[10]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[10]},on:{input:function(t){t.target.composing||e.$set(e.sides,10,t.target.value)}}})]),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[11],expression:"sides[11]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[11]},on:{input:function(t){t.target.composing||e.$set(e.sides,11,t.target.value)}}})]),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[12],expression:"sides[12]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[12]},on:{input:function(t){t.target.composing||e.$set(e.sides,12,t.target.value)}}})]),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[13],expression:"sides[13]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[13]},on:{input:function(t){t.target.composing||e.$set(e.sides,13,t.target.value)}}})]),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[14],expression:"sides[14]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[14]},on:{input:function(t){t.target.composing||e.$set(e.sides,14,t.target.value)}}})]),e._v(" "),s("td")]),e._v(" "),s("tr",[s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[0],expression:"sides[0]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[0]},on:{input:function(t){t.target.composing||e.$set(e.sides,0,t.target.value)}}})]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[0][0]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[0][1]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[0][2]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[0][3]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[0][4]))]),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[5],expression:"sides[5]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[5]},on:{input:function(t){t.target.composing||e.$set(e.sides,5,t.target.value)}}})])]),e._v(" "),s("tr",[s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[1],expression:"sides[1]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[1]},on:{input:function(t){t.target.composing||e.$set(e.sides,1,t.target.value)}}})]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[1][0]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[1][1]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[1][2]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[1][3]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[1][4]))]),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[6],expression:"sides[6]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[6]},on:{input:function(t){t.target.composing||e.$set(e.sides,6,t.target.value)}}})])]),e._v(" "),s("tr",[s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[2],expression:"sides[2]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[2]},on:{input:function(t){t.target.composing||e.$set(e.sides,2,t.target.value)}}})]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[2][0]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[2][1]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[2][2]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[2][3]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[2][4]))]),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[7],expression:"sides[7]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[7]},on:{input:function(t){t.target.composing||e.$set(e.sides,7,t.target.value)}}})])]),e._v(" "),s("tr",[s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[3],expression:"sides[3]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[3]},on:{input:function(t){t.target.composing||e.$set(e.sides,3,t.target.value)}}})]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[3][0]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[3][1]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[3][2]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[3][3]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[3][4]))]),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[8],expression:"sides[8]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[8]},on:{input:function(t){t.target.composing||e.$set(e.sides,8,t.target.value)}}})])]),e._v(" "),s("tr",[s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[4],expression:"sides[4]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[4]},on:{input:function(t){t.target.composing||e.$set(e.sides,4,t.target.value)}}})]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[4][0]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[4][1]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[4][2]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[4][3]))]),e._v(" "),s("td",[e._v(e._s(e.selectedSolution[4][4]))]),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[9],expression:"sides[9]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[9]},on:{input:function(t){t.target.composing||e.$set(e.sides,9,t.target.value)}}})])]),e._v(" "),s("tr",[s("td"),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[15],expression:"sides[15]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[15]},on:{input:function(t){t.target.composing||e.$set(e.sides,15,t.target.value)}}})]),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[16],expression:"sides[16]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[16]},on:{input:function(t){t.target.composing||e.$set(e.sides,16,t.target.value)}}})]),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[17],expression:"sides[17]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[17]},on:{input:function(t){t.target.composing||e.$set(e.sides,17,t.target.value)}}})]),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[18],expression:"sides[18]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[18]},on:{input:function(t){t.target.composing||e.$set(e.sides,18,t.target.value)}}})]),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sides[19],expression:"sides[19]"}],attrs:{type:"number",min:"1",max:"5",number:""},domProps:{value:e.sides[19]},on:{input:function(t){t.target.composing||e.$set(e.sides,19,t.target.value)}}})]),e._v(" "),s("td")])])])},staticRenderFns:[]};var a={name:"App",components:{HelloWorld:s("VU/8")(r,u,!1,function(e){s("qMII")},"data-v-1e209a0c",null).exports}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("HelloWorld"),this._v("\n  Join Soccermoms today\n")],1)},staticRenderFns:[]};var m=s("VU/8")(a,d,!1,function(e){s("egU1")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:m},template:"<App/>"})},egU1:function(e,t){},qMII:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.a804fcae7a5aa1fc7424.js.map