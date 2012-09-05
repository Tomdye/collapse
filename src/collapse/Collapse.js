define ([	"dojo/_base/declare",
			"dijit/_WidgetBase",
    		"dijit/_TemplatedMixin",
    		"dojo/json",
    		"dojo/text!./templates/Collapse.html",
    		"dojo/text!./data/puzzles/Puzzle1.json",
    		"collapse/Grid"
], function(declare, _WidgetBase, _TemplatedMixin, json, template, puzzle1, Grid) {
	return declare("Collapse", [_WidgetBase, _TemplatedMixin], {
		
		templateString: template,
		widgetsInTemplate: true,

		Grid : null,

		postCreate : function () {
			this.inherited(arguments);
			
			var puzzle = json.parse(puzzle1);
			

			this.Grid = new Grid({"data": puzzle.grid}).placeAt(this.domNode);
		}

	})	
});