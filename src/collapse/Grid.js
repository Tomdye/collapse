define ([	"dojo/_base/declare",
			"dijit/_WidgetBase",
    		"dijit/_TemplatedMixin",
    		"dojo/_base/lang",
    		"dojo/on",
    		"dojo/query",
    		"dojo/dom-construct",
    		"dojo/text!./templates/Grid.html"
], function(declare, _WidgetBase, _TemplatedMixin, lang, on, query, domConstruct, template) {
	return declare("Grid", [_WidgetBase, _TemplatedMixin], {
		
		templateString: template,
		_blocks : [],

		postCreate : function () {
			this.inherited(arguments);
			
			on(this.domNode, ".block:click", lang.hitch(this, "_onBlockClick"));
		},

		_setDataAttr : function (data) {
			for (var i = 0, len = data.length; i < len; i += 1) {
				var rowArray = data[i].split(" ");
				for (var j = 0, len2 = rowArray.length; j < len2; j += 1) {
					var block = domConstruct.create("div", {"class": "block " + rowArray[j]}, this.domNode);
					this._blocks.push(block);
				}
			}
		},

		_onBlockClick : function (evt) {
			domConstruct.destroy(evt.target);
		}

	})	
});