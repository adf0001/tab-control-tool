# tab-control-tool
dom tab control tool

# Install
```
npm install tab-control-tool
```

# Usage & Api
```javascript

var tab_control_tool = require("tab-control-tool");

//.getSelected(groupId)			//groupId: any groupId, or any tab id
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

//.init(tabPairArray, tabSelected, elGroup)
var groupId = tab_control_tool.init({ 'spTab1': 'divTab1', 'spTab2': 'divTab2' }, 'spTab1');

```
