sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/jhah/hr/zhr/test/integration/pages/VarListList",
	"com/jhah/hr/zhr/test/integration/pages/VarListObjectPage",
	"com/jhah/hr/zhr/test/integration/pages/VisitorDetailsObjectPage"
], function (JourneyRunner, VarListList, VarListObjectPage, VisitorDetailsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/jhah/hr/zhr') + '/test/flp.html#app-preview',
        pages: {
			onTheVarListList: VarListList,
			onTheVarListObjectPage: VarListObjectPage,
			onTheVisitorDetailsObjectPage: VisitorDetailsObjectPage
        },
        async: true
    });

    return runner;
});

