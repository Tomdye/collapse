define ([	"dojo/_base/declare",
			"dojo/dom-construct",
			"dojo/on",
			"dojo/_base/lang"
], function(declare, domConstruct, on, lang) {
	return declare("Block", [], {
		
		baseClass: "block",
		domNode : null,

		constructor : function (blockClass, parentNode) {
			this.domNode = domConstruct.create("div", {"class": this.baseClass + " " + blockClass}, parentNode);

			on(this.domNode, "click", lang.hitch(this, "_onClick"));
		},

		_onClick : function (evt) {
			this.destroy();
		}

	})	
});