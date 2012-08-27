var dojoConfig = {
	async : true,
	parseOnLoad : false,
	debug: true 
};

if (dojoConfig.debug === true) {
	dojoConfig.packages = [
		{	name: "local",
			location: "/~dyet/collapse" },
		{	name: "um",
			location: "/~dyet/collapse/js/um" }
	];
}
else {
	dojoConfig.packages = [
		{	name: "local",
			location: "/collapse" },
		{	name: "um",
			location: "/collapse/js/um" }
	];
}