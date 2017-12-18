describe('Test todo-react-mobx app', function() {
	it('Should start out with one item', function() {	
		cy.visit('/');
		cy.contains('simon')
			.should('have.length', 1);
	});

	it('Should delete an item', function() {		
		cy.contains('simon')
			.click();
		
		cy.get('.list')
			.children()
			.should('have.length', 0);
		
		cy.debug();
	});
	
	it('Should add an item', function() {		
		cy.get('[type=text]')
			.type('foo{enter}');
			
		cy.contains('foo');
	});

	it('Should add a 2nd item', function() {		
		cy.get('[type=text]')
			.type('bar{enter}');
			
		cy.contains('bar');
	});

	it('Should keep a running title after add', function() {
		cy.contains('2');
	});

	it('Should keep a running title after delete', function() {
		cy.contains('bar')
			.click();
			
		cy.contains(1);	
	});

	it('Should have a total of 0 when list is empty', function() {
		cy.contains('foo')
			.click();
			
		cy.contains(0);	
	});

	it('Should go to mobx page', function() {
		cy.contains('Mobx')
			.click();
			
		cy.contains('Eat')
			.contains('Shower')
			.contains('Sleep');	
	});	
});
