﻿(function (factory) {
    if (typeof define === 'function') {
    	if(define.amd) {
	        define(['common/metastore', 'jslet', 'mock/employee-mock'], factory);
	    } else {
	    	define(function(require, exports, module) {
	    		module.exports = factory();
	    	});
	    }
    } else {
    	factory();
    }
})(function () {
	/********************************** 定义数据集 ************************************************/
	//datasetMetaStore定义在公共js:common/datasetmetastore.js中
	var getMeta = datasetMetaStore.getDatasetMeta;
	//创建“性别”数据集
    var dsGender = new jslet.data.Dataset(getMeta('gender'));

    //创建“职位”
    var dsPosition = new jslet.data.Dataset(getMeta('position'));
    
    //创建“职位”
    var dsCurrency = new jslet.data.Dataset(getMeta('currency'));
    
    //创建“称呼”，称呼有性别之分
    var dsSalutation = new jslet.data.Dataset(getMeta('salutation'));

    //创建“省份”数据集
    var dsProvince = new jslet.data.Dataset(getMeta('province'));

    //创建“部门”数据集
    var dsDept = new jslet.data.Dataset(getMeta('department'));

    //创建“员工信息”数据集
    var dsEmployee = new jslet.data.Dataset(getMeta('employee'));
	dsEmployee.enableContextRule();
	
	/********************************** 结束定义数据集 ************************************************/
	
	//绑定按钮事件
	$('#btnQuery').click(function() {
		dsEmployee.query();	
	});
	$('#btnAppend').click(function() {
		dsEmployee.appendRecord();	
	});
	$('#btnDelete').click(function() {
		dsEmployee.deleteRecord();	
	});
	$('#btnSave').click(function() {
		dsEmployee.submit();	
	});
	$('#btnImport').click(function() {
		var importDlg = new jslet.ui.ImportDialog('employee');
		importDlg.show();
	});
	$('#btnExport').click(function() {
		var exportDlg = new jslet.ui.ExportDialog('employee');
		exportDlg.show('employee.xlsx');
	});

	$('#btnInputSetting').click(function() {
		jslet.ui.defaultInputSettingDialog.show('employee');
	});
	$('#btnBatchEdit').click(function() {
	    var dialog = new jslet.ui.BatchEditDialog('employee');
	    dialog.show();
	});

	var template = $('#reportTemplate').text();

	$('#btnPreview').click(function() {
		jslet.defaultReport.preview('employee', 'rptEmployee', '员工表', template);
	});

	$('#btnPrint').click(function() {
		jslet.defaultReport.print('employee', 'rptEmployee', '员工表', template);
	});

	$('#btnDesign').click(function() {
		jslet.defaultReport.design('employee', 'rptEmployee', '员工表', template);
	});

	$('#btnChart').click(function() {
		var chartDlg = new jslet.ui.ChartDialog('employee', {categoryField: 'name'});
		chartDlg.show();
	});

	//创建控件，创建完成后，查询数据
	jslet.ui.install(function() {
		dsEmployee.query();
	});
});
