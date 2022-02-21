
//global variable, for html page, refer tpsvr @ npm.
tab_control_tool = require("../tab-control-tool.js");

module.exports = {

	"tab-control": function (done) {
		document.getElementById('divResult2').innerHTML =
			"<div class='ht tab-group'>" +
			"	<span class='ht tab-item selected' id='spTab1'>Tab1</span>" +
			"	<span class='ht tab-item' id='spTab2'>Tab2</span>" +
			"</div>" +
			"<div id='divTab1'><b>tab1 content</b></div>" +
			"<div id='divTab2' style='display:none;'><i>tab2 content</i></div>" +
			"<button onclick=\"alert(tab_control_tool.getSelected('spTab1'))\">get</button>" +
			"<button onclick=\"alert(tab_control_tool.getSelected('spTab2'))\">get2</button>" +
			"";

		var groupId = tab_control_tool.init({ 'spTab1': 'divTab1', 'spTab2': 'divTab2' }, 'spTab1');

		return 'ui test, groupId=' + groupId;
	},
	"tab-control/pairArray": function (done) {
		document.getElementById('divResult2').innerHTML =
			"<div class='ht tab-group'>" +
			"	<span class='ht tab-item selected' id='spTab1'>Tab1</span>" +
			"	<span class='ht tab-item' id='spTab2'>Tab2</span>" +
			"</div>" +
			"<div id='divTab1'><b>tab1 content</b></div>" +
			"<div id='divTab2' style='display:none;'><i>tab2 content</i></div>" +
			"<button onclick=\"alert(tab_control_tool.getSelected('spTab1'))\">get</button>" +
			"<button onclick=\"alert(tab_control_tool.getSelected('spTab2'))\">get2</button>" +
			"";

		var groupId = tab_control_tool(['spTab1', 'divTab1', ['spTab2', 'divTab2']], 'spTab1');

		return 'ui test, groupId=' + groupId;
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('tab_control_tool', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
