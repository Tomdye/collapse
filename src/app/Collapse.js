define ([	"dojo/_base/declare",
			"dijit/_WidgetBase",
    		"dijit/_TemplatedMixin",
    		"dojo/text!./templates/Collapse.html"
], function(declare, _WidgetBase, _TemplatedMixin, template) {
	return declare("Collapse", [_WidgetBase, _TemplatedMixin], {
		
		templateString: template,
		
		postCreate : function () {
			this.inherited(arguments);
			console.log("Collapse Started!");
		}

	})	
});