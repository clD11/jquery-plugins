describe("when addEventListenerDoneTyping is called", function() {

	var html;	
	var observer = { callback: function () { return true; } };	

	function setupHTMLFixture() {
	    var HTMLFixture = setFixtures(
            "<div><input id='spec-input-element' type='text' placeholder='search' val='search term'/></div>");
	    return $(HTMLFixture);
	}

	beforeEach(function() {
	    html = setupHTMLFixture();
	    jasmine.clock().install();
	});

	afterEach(function () {
	    jasmine.clock().uninstall();
	});

	it("should invoke callback after given delay", function () {
	    spyOn(observer, "callback");

	    $("#spec-input-element").addEventListenerDoneTyping(1000,
            function () { observer.callback(); });

	    $("#spec-input-element").trigger("keyup");

	    expect(observer.callback).not.toHaveBeenCalled();
	    jasmine.clock().tick(2000);
	    expect(observer.callback).toHaveBeenCalled();
	});
});




