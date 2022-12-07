describe('Cypress tests for Show more feature', () => {
  beforeEach(() => {
    cy.visit('https://www.menshealth.com/grooming/a39982447/mens-health-2022-grooming-awards');
    
    // website label
    cy.get('div.nav-bar-container a[aria-label].nav-logo').as('labelSite');

    // selectors are utilizing hard coded data-node-id which is not a recomended practice and is not scalable/repeatable
    // collaboration is needed with dev team to arrive at more sensible way of identifying this selector
    // so that it is scalable accross not just various item categories in this website but other brands as well    
    cy.get('div[data-node-id="7"] button').as('btnShowMore');
    cy.get('div[data-node-id="7"] div[data-embed="embed-product"]').as('itemProducts');   
  });
  
  it('can perform loading', () => {
    // presently hard-coded label value needs to populate dynamically through test data configuration
    let labelSite = 'Men\'s Health';

    cy.get('@labelSite').should('be.visible');
    cy.get('@labelSite').invoke('attr', 'aria-label').should('eq', labelSite);    
  })

  it('can check that item category with Show more button visible is passing display use cases', () => {
    // max number of items to be displayed per iteration
    const ITEMS_IN_SINGLE_DISPLAY = 10;

    // this variable represents number of items present in the database against a given item category
    // collaboration is needed with dev team to figure out best way to get this number dynamically
    // possibly sifting through the graphql output?
    let itemsInCategory = 17;

    cy.get('@btnShowMore').should('be.visible');
    // verify that total item are more than single display requirement
    expect(itemsInCategory).to.be.greaterThan(ITEMS_IN_SINGLE_DISPLAY);

    // verify that single display count is as expected
    cy.get('@itemProducts').should('have.length', ITEMS_IN_SINGLE_DISPLAY);

  })

  it('can check that item category with Show more button visible will disappear after required clicks', () => {
    const ITEMS_IN_SINGLE_DISPLAY = 10;
    let itemsInCategory = 17;

     if(itemsInCategory>ITEMS_IN_SINGLE_DISPLAY){
      let numberOfClicks = Math.floor(itemsInCategory/ITEMS_IN_SINGLE_DISPLAY);
      for(let i=0; i<numberOfClicks; i++){
        cy.get('@btnShowMore').click();

        if((i+1) === numberOfClicks){
          cy.get('@itemProducts').should('have.length', itemsInCategory);
        }
        else{
          let itemsDisplayed = ITEMS_IN_SINGLE_DISPLAY*(i+2);
          cy.get('@itemProducts').should('have.length', itemsDisplayed);
        }
        cy.get('@btnShowMore').should('not.exist');
      }
     }    
  })
  
});