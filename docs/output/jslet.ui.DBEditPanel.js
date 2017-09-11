Ext.data.JsonP.jslet_ui_DBEditPanel({"tagname":"class","name":"jslet.ui.DBEditPanel","autodetected":{},"files":[{"filename":"jslet.dbeditpanel.js","href":"jslet.dbeditpanel.html#jslet-ui-DBEditPanel"}],"extends":"jslet.ui.DBControl","members":[{"name":"columnCount","tagname":"property","owner":"jslet.ui.DBEditPanel","id":"property-columnCount","meta":{}},{"name":"dataset","tagname":"property","owner":"jslet.ui.DBControl","id":"property-dataset","meta":{}},{"name":"excludeFields","tagname":"property","owner":"jslet.ui.DBEditPanel","id":"property-excludeFields","meta":{}},{"name":"hasLabel","tagname":"property","owner":"jslet.ui.DBEditPanel","id":"property-hasLabel","meta":{}},{"name":"includeFields","tagname":"property","owner":"jslet.ui.DBEditPanel","id":"property-includeFields","meta":{}},{"name":"labelCols","tagname":"property","owner":"jslet.ui.DBEditPanel","id":"property-labelCols","meta":{}},{"name":"layout","tagname":"property","owner":"jslet.ui.DBEditPanel","id":"property-layout","meta":{}},{"name":"onlySpecifiedFields","tagname":"property","owner":"jslet.ui.DBEditPanel","id":"property-onlySpecifiedFields","meta":{}},{"name":"addChildControl","tagname":"method","owner":"jslet.ui.Control","id":"method-addChildControl","meta":{"protected":true}},{"name":"afterBind","tagname":"method","owner":"jslet.ui.Control","id":"method-afterBind","meta":{"protected":true}},{"name":"beforeBind","tagname":"method","owner":"jslet.ui.DBControl","id":"method-beforeBind","meta":{"protected":true}},{"name":"bind","tagname":"method","owner":"jslet.ui.DBEditPanel","id":"method-bind","meta":{"protected":true}},{"name":"checkRequiredProperty","tagname":"method","owner":"jslet.ui.DBControl","id":"method-checkRequiredProperty","meta":{"protected":true}},{"name":"destroy","tagname":"method","owner":"jslet.ui.DBControl","id":"method-destroy","meta":{}},{"name":"doLookupChanged","tagname":"method","owner":"jslet.ui.DBControl","id":"method-doLookupChanged","meta":{"protected":true}},{"name":"doMetaChanged","tagname":"method","owner":"jslet.ui.DBEditPanel","id":"method-doMetaChanged","meta":{"protected":true}},{"name":"doUIChanged","tagname":"method","owner":"jslet.ui.Control","id":"method-doUIChanged","meta":{"protected":true}},{"name":"doValueChanged","tagname":"method","owner":"jslet.ui.DBControl","id":"method-doValueChanged","meta":{"protected":true}},{"name":"getDatasetInParentElement","tagname":"method","owner":"jslet.ui.DBControl","id":"method-getDatasetInParentElement","meta":{"private":true}},{"name":"initialize","tagname":"method","owner":"jslet.ui.DBEditPanel","id":"method-initialize","meta":{"protected":true}},{"name":"isValidTemplateTag","tagname":"method","owner":"jslet.ui.DBEditPanel","id":"method-isValidTemplateTag","meta":{"protected":true}},{"name":"refreshControl","tagname":"method","owner":"jslet.ui.DBControl","id":"method-refreshControl","meta":{"protected":true}},{"name":"removeAllChildControls","tagname":"method","owner":"jslet.ui.Control","id":"method-removeAllChildControls","meta":{"protected":true}},{"name":"renderAll","tagname":"method","owner":"jslet.ui.DBEditPanel","id":"method-renderAll","meta":{"chainable":true}},{"name":"setParams","tagname":"method","owner":"jslet.ui.DBControl","id":"method-setParams","meta":{"protected":true}}],"alternateClassNames":[],"aliases":{},"id":"class-jslet.ui.DBEditPanel","short_doc":"DBEditPanel is a container control used for user to input data. ...","classIcon":"icon-class","superclasses":["jslet.ui.Control","jslet.ui.DBControl"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='docClass'>jslet.ui.Control</a><div class='subclass '><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='docClass'>jslet.ui.DBControl</a><div class='subclass '><strong>jslet.ui.DBEditPanel</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/jslet.dbeditpanel.html#jslet-ui-DBEditPanel' target='_blank'>jslet.dbeditpanel.js</a></div></pre><div class='doc-contents'><p>DBEditPanel is a container control used for user to input data.\nExample:</p>\n\n<pre class='inline-example '><code>var jsletParam = {type:\"DBEditPanel\",dataset:\"employee\",columnCount:3};\n\n//1. Declaring:\n  &lt;div id='ctrlId' data-jslet='type:\"DBEditPanel\",dataset:\"employee\",columnCount:3' /&gt;\n  or\n  &lt;div data-jslet='jsletParam' /&gt;\n\n//2. Binding\n  &lt;div id=\"ctrlId\"  /&gt;\n  //Js snippet\n  var el = document.getElementById('ctrlId');\n  <a href=\"#!/api/jslet.ui-method-bindControl\" rel=\"jslet.ui-method-bindControl\" class=\"docClass\">jslet.ui.bindControl</a>(el, jsletParam);\n\n//3. Create dynamically\n  <a href=\"#!/api/jslet.ui-method-createControl\" rel=\"jslet.ui-method-createControl\" class=\"docClass\">jslet.ui.createControl</a>(jsletParam, document.body);\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-columnCount' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBEditPanel'>jslet.ui.DBEditPanel</span><br/><a href='source/jslet.dbeditpanel.html#jslet-ui-DBEditPanel-property-columnCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBEditPanel-property-columnCount' class='name expandable'>columnCount</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Set or get column count. ...</div><div class='long'><p>Set or get column count.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>columnCount</span> : Integer | undefined<div class='sub-desc'><p>Column count.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | undefined</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='property-dataset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-property-dataset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-property-dataset' class='name expandable'>dataset</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Dataset which to link to control. ...</div><div class='long'><p>Dataset which to link to control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dataset</span> : String | undefined<div class='sub-desc'><p>Dataset name.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | <a href=\"#!/api/jslet.data.Dataset\" rel=\"jslet.data.Dataset\" class=\"docClass\">jslet.data.Dataset</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='property-excludeFields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBEditPanel'>jslet.ui.DBEditPanel</span><br/><a href='source/jslet.dbeditpanel.html#jslet-ui-DBEditPanel-property-excludeFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBEditPanel-property-excludeFields' class='name expandable'>excludeFields</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Specify which fields are not displayed in edit panel. ...</div><div class='long'><p>Specify which fields are not displayed in edit panel.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>includeFields</span> : String[] | undefined<div class='sub-desc'><p>Field names which are not displayed in edit panel.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | String[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='property-hasLabel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBEditPanel'>jslet.ui.DBEditPanel</span><br/><a href='source/jslet.dbeditpanel.html#jslet-ui-DBEditPanel-property-hasLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBEditPanel-property-hasLabel' class='name expandable'>hasLabel</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Identify whether it exists the field label part. ...</div><div class='long'><p>Identify whether it exists the field label part.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>hasLabel</span> : Boolean | undefined<div class='sub-desc'><p>True - exists field label part, false - otherwise.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='property-includeFields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBEditPanel'>jslet.ui.DBEditPanel</span><br/><a href='source/jslet.dbeditpanel.html#jslet-ui-DBEditPanel-property-includeFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBEditPanel-property-includeFields' class='name expandable'>includeFields</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Specify which fields are displayed in edit panel. ...</div><div class='long'><p>Specify which fields are displayed in edit panel.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>includeFields</span> : String[] | undefined<div class='sub-desc'><p>Field names which are displayed in edit panel.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | String[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='property-labelCols' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBEditPanel'>jslet.ui.DBEditPanel</span><br/><a href='source/jslet.dbeditpanel.html#jslet-ui-DBEditPanel-property-labelCols' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBEditPanel-property-labelCols' class='name expandable'>labelCols</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Set or get display column count of field label. ...</div><div class='long'><p>Set or get display column count of field label. According to Bootstrap document, this property is in range: [1,11].</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>labelCols</span> : Integer | undefined<div class='sub-desc'><p>The display column count of field label.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | undefined</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='property-layout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBEditPanel'>jslet.ui.DBEditPanel</span><br/><a href='source/jslet.dbeditpanel.html#jslet-ui-DBEditPanel-property-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBEditPanel-property-layout' class='name expandable'>layout</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Set or get editing field's layout. ...</div><div class='long'><p>Set or get editing field's layout.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layout</span> : Object[] | undefined<div class='sub-desc'><p>Editing fields setting.</p>\n<ul><li><span class='pre'>field</span> : String<div class='sub-desc'><p>Field name.</p>\n</div></li><li><span class='pre'>labelCols</span> : Integer<div class='sub-desc'><p>Label display column, range: [1, 3].</p>\n</div></li><li><span class='pre'>dataCols</span> : Integer<div class='sub-desc'><p>Edit control display column, range: [1, 11].</p>\n</div></li><li><span class='pre'>inFirstCol</span> : Boolean<div class='sub-desc'><p>Display field at first column.</p>\n</div></li><li><span class='pre'>showLine</span> : Boolean<div class='sub-desc'><p>Display line separator.</p>\n</div></li><li><span class='pre'>visible</span> : Boolean<div class='sub-desc'><p>The field is visible or not.</p>\n</div></li><li><span class='pre'>height</span> : String | Number<div class='sub-desc'><p>The height of the edit field, if the value is numberic, the unit is 'px'.</p>\n</div></li><li><span class='pre'>prefix</span> : <a href=\"#!/api/jslet.ui.FieldControlAddon\" rel=\"jslet.ui.FieldControlAddon\" class=\"docClass\">jslet.ui.FieldControlAddon</a>[]<div class='sub-desc'><p>The prefix part of the field.</p>\n</div></li><li><span class='pre'>suffix</span> : <a href=\"#!/api/jslet.ui.FieldControlAddon\" rel=\"jslet.ui.FieldControlAddon\" class=\"docClass\">jslet.ui.FieldControlAddon</a>[]<div class='sub-desc'><p>The suffix part of the field.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | Object[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='property-onlySpecifiedFields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBEditPanel'>jslet.ui.DBEditPanel</span><br/><a href='source/jslet.dbeditpanel.html#jslet-ui-DBEditPanel-property-onlySpecifiedFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBEditPanel-property-onlySpecifiedFields' class='name expandable'>onlySpecifiedFields</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Identify whether it only displays the fields which specified by \"fields\" property. ...</div><div class='long'><p>Identify whether it only displays the fields which specified by \"fields\" property.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onlySpecifiedFields</span> : Boolean | undefined<div class='sub-desc'><p>True - only display the specified fields, false - otherwise.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addChildControl' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-addChildControl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-addChildControl' class='name expandable'>addChildControl</a>( <span class='pre'>childCtrl</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Add child control into this control. ...</div><div class='long'><p>Add child control into this control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>childCtrl</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-afterBind' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-afterBind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-afterBind' class='name expandable'>afterBind</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>After bind. ...</div><div class='long'><p>After bind.</p>\n</div></div></div><div id='method-beforeBind' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-beforeBind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-beforeBind' class='name expandable'>beforeBind</a>( <span class='pre'>$super</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Call this method before binding parameters to a HTML element, you can rewrite this in your owner control. ...</div><div class='long'><p>Call this method before binding parameters to a HTML element, you can rewrite this in your owner control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-beforeBind\" rel=\"jslet.ui.Control-method-beforeBind\" class=\"docClass\">jslet.ui.Control.beforeBind</a></p></div></div></div><div id='method-bind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBEditPanel'>jslet.ui.DBEditPanel</span><br/><a href='source/jslet.dbeditpanel.html#jslet-ui-DBEditPanel-method-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBEditPanel-method-bind' class='name expandable'>bind</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-bind\" rel=\"jslet.ui.Control-method-bind\" class=\"docClass\">jslet.ui.Control.bind</a></p></div></div></div><div id='method-checkRequiredProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-checkRequiredProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-checkRequiredProperty' class='name expandable'>checkRequiredProperty</a>( <span class='pre'>$super</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-checkRequiredProperty\" rel=\"jslet.ui.Control-method-checkRequiredProperty\" class=\"docClass\">jslet.ui.Control.checkRequiredProperty</a></p></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-destroy' class='name expandable'>destroy</a>( <span class='pre'>$super</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-destroy\" rel=\"jslet.ui.Control-method-destroy\" class=\"docClass\">jslet.ui.Control.destroy</a></p></div></div></div><div id='method-doLookupChanged' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-doLookupChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-doLookupChanged' class='name expandable'>doLookupChanged</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Refresh UI when field lookup value is changed. ...</div><div class='long'><p>Refresh UI when field lookup value is changed.</p>\n</div></div></div><div id='method-doMetaChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBEditPanel'>jslet.ui.DBEditPanel</span><br/><a href='source/jslet.dbeditpanel.html#jslet-ui-DBEditPanel-method-doMetaChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBEditPanel-method-doMetaChanged' class='name expandable'>doMetaChanged</a>( <span class='pre'>$super, metaName</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>metaName</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.DBControl-method-doMetaChanged\" rel=\"jslet.ui.DBControl-method-doMetaChanged\" class=\"docClass\">jslet.ui.DBControl.doMetaChanged</a></p></div></div></div><div id='method-doUIChanged' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-doUIChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-doUIChanged' class='name expandable'>doUIChanged</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Refresh dataset when user changed the value. ...</div><div class='long'><p>Refresh dataset when user changed the value.</p>\n</div></div></div><div id='method-doValueChanged' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-doValueChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-doValueChanged' class='name expandable'>doValueChanged</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Refresh UI when field value is changed. ...</div><div class='long'><p>Refresh UI when field value is changed.</p>\n</div></div></div><div id='method-getDatasetInParentElement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-getDatasetInParentElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-getDatasetInParentElement' class='name expandable'>getDatasetInParentElement</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBEditPanel'>jslet.ui.DBEditPanel</span><br/><a href='source/jslet.dbeditpanel.html#jslet-ui-DBEditPanel-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBEditPanel-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>$super, el, params</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>el</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>params</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.DBControl-method-initialize\" rel=\"jslet.ui.DBControl-method-initialize\" class=\"docClass\">jslet.ui.DBControl.initialize</a></p></div></div></div><div id='method-isValidTemplateTag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBEditPanel'>jslet.ui.DBEditPanel</span><br/><a href='source/jslet.dbeditpanel.html#jslet-ui-DBEditPanel-method-isValidTemplateTag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBEditPanel-method-isValidTemplateTag' class='name expandable'>isValidTemplateTag</a>( <span class='pre'>el</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-refreshControl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-refreshControl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-refreshControl' class='name expandable'>refreshControl</a>( <span class='pre'>evt</span> ) : Boolean<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Refresh control when data changed. ...</div><div class='long'><p>Refresh control when data changed.\nThere are three type changes: meta changed, data changed, lookup data changed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : <a href=\"#!/api/jslet.data.RefreshEvent\" rel=\"jslet.data.RefreshEvent\" class=\"docClass\">jslet.data.RefreshEvent</a><div class='sub-desc'><p>jslet refresh event object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>if refresh successfully, return true, otherwise false.</p>\n</div></li></ul></div></div></div><div id='method-removeAllChildControls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-removeAllChildControls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-removeAllChildControls' class='name expandable'>removeAllChildControls</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Remove all child controls from this control. ...</div><div class='long'><p>Remove all child controls from this control.</p>\n</div></div></div><div id='method-renderAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBEditPanel'>jslet.ui.DBEditPanel</span><br/><a href='source/jslet.dbeditpanel.html#jslet-ui-DBEditPanel-method-renderAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBEditPanel-method-renderAll' class='name expandable'>renderAll</a>( <span class='pre'></span> ) : <a href=\"#!/api/jslet.ui.DBEditPanel\" rel=\"jslet.ui.DBEditPanel\" class=\"docClass\">jslet.ui.DBEditPanel</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jslet.ui.DBEditPanel\" rel=\"jslet.ui.DBEditPanel\" class=\"docClass\">jslet.ui.DBEditPanel</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-renderAll\" rel=\"jslet.ui.Control-method-renderAll\" class=\"docClass\">jslet.ui.Control.renderAll</a></p></div></div></div><div id='method-setParams' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-setParams' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-setParams' class='name expandable'>setParams</a>( <span class='pre'>$super, ctrlParams</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>ctrlParams</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-setParams\" rel=\"jslet.ui.Control-method-setParams\" class=\"docClass\">jslet.ui.Control.setParams</a></p></div></div></div></div></div></div></div>","meta":{}});