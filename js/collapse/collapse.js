define ([	"dojo/_base/declare",
			"dijit/_WidgetBase",
    		"dijit/_TemplatedMixin",
    		"dojo/text!./templates/collapse.html"
], function(declare, _WidgetBase, _TemplatedMixin, template) {
	return declare("collapse", [_WidgetBase, _TemplatedMixin], {
		
		templateString: template,
		
		postCreate : function () {
			this.inherited(arguments);
		}

	})	
});