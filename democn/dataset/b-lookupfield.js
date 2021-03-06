﻿(function (factory) {
    if (typeof define === 'function') {
    	if(define.amd) {
	        define(['common/metastore', 'jslet'], factory);
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
	//创建销售明细数据集
    var dsPaymentTerm = new jslet.data.Dataset(getMeta('paymentTerm'));
    var dsCustomer = new jslet.data.Dataset(getMeta('customer'));
    var dsDetail = new jslet.data.Dataset(getMeta('salesDetail'));
    var dsMaster = new jslet.data.Dataset(getMeta('salesMaster'));
    
    //Add data into detail dataset
    var detail1 = [{ "seqno": 1, "product": "P1", "qty": 2000, "price": 11.5 },
				{ "seqno": 2, "product": "P2", "qty": 1000, "price": 21.5 },
				{ "seqno": 3, "product": "P3", "qty": 3000, "price": 31.5 },
				{ "seqno": 4, "product": "P4", "qty": 5000, "price": 41.5 },
				{ "seqno": 5, "product": "P5", "qty": 8000, "price": 51.5}];

    var detail2 = [{ "seqno": 1, "product": "M1", "qty": 1, "price": 10001 },
    				{ "seqno": 2, "product": "M2", "qty": 2, "price": 30000}];

    //Add data into master dataset
    var dataList = [{ "saleid": "200901001", "saledate": new Date(2001, 1, 1), "customer": "02", "paymentterm": "02", "details": detail1 },
			{ "saleid": "200901002", "saledate": new Date(2001, 1, 1), "customer": "01", "paymentterm": "01", "details": detail2 },
			{ "saleid": "200901003", "saledate": new Date(2001, 1, 1), "customer": "02", "paymentterm": "02"}];
    dsMaster.records(dataList);

    
    jslet.ui.install();
    
    function setEditable() {
    	var dsObj = jslet.data.getDataset('salesDetail');
    	dsObj.getField('amount').readOnly(false);
    	jslet('#tblDetail').renderAll();
    	jslet.ui.info('“金额”字段已经可编辑，请用鼠标点击“金额”列，然后修改金额。');
    }
    
	jQuery('#btnSetEditable').on('click', setEditable);
});
