describe('Buy Pokemon', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should succeed to buy', () => {
    cy.get('[data-testid=btnAddCart]').eq(0).click()

    cy.get('.MuiBackdrop-root').click()

    cy.get('[data-testid=btnAddCart]').eq(1).click()

    expect(cy.get('.MuiListItem-container').should('have.length', 2))

    cy.get('[data-testid=btnFinish]').click()

    expect(cy.get('#swal2-title').contains('Revisão do pedido'))
    expect(cy.get('#swal2-content').contains('Você escolheu 2 Pokemón.O valor total é de R$ 206,00.'))

    cy.get('.swal2-confirm').click()

    expect(cy.get('#swal2-title').contains('Obrigado pela compra!'))
    expect(cy.get('#swal2-content').contains('Você ganhou R$ 20,60 (10%) de cashback!'))
  })

  it('should succeed to search', () => {
    const name = 'bulbasaur'
    cy.get('input[placeholder="Procurar..."]').type(name).should('have.value', name)

    cy.get('form').submit()

    cy.get('h1').contains(name)

    cy.get('[data-testid=btnAddCart]').click()

    expect(cy.get('.MuiListItem-container').should('have.length', 1))

    cy.get('[data-testid=btnFinish]').click()

    expect(cy.get('#swal2-title').contains('Revisão do pedido'))
    expect(cy.get('#swal2-content').contains('Você escolheu 1 Pokemón.O valor total é de R$ 64,00.'))

    cy.get('.swal2-confirm').click()

    expect(cy.get('#swal2-title').contains('Obrigado pela compra!'))
    expect(cy.get('#swal2-content').contains('Você ganhou R$ 6,40 (10%) de cashback!'))
  })

  it('should succeed change type', () => {
    cy.get('button[role=tab]').contains('normal').click()

    cy.get('[data-testid=btnViewDetails] h5').eq(0).contains('pidgey')
  })

  it('should succeed pagination', () => {
    expect(cy.get('[data-testid=btnViewDetails]').should('have.length', 24))

    cy.get('[data-testid=btnLoadMore]').click()
    cy.wait(5000)

    expect(cy.get('[data-testid=btnViewDetails]').should('have.length', 48))
  })

  it('should succeed to recover cart after reload', () => {
    cy.get('[data-testid=btnAddCart]').eq(0).click()

    expect(cy.get('.MuiListItem-container').should('have.length', 1))

    cy.reload()

    cy.get('[data-testid=btnToggleDrawer').click()

    expect(cy.get('.MuiListItem-container').should('have.length', 1))

    cy.get('.MuiBackdrop-root').click()

    cy.get('[data-testid=btnAddCart]').eq(1).click()

    expect(cy.get('.MuiListItem-container').should('have.length', 2))
  })
})
