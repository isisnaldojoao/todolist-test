

describe('Task´s', () => {

    beforeEach(() =>{
        cy.visit('http://127.0.0.1:5500/index.html')
    });

    it('Add input', () => {
      // Acessa o site

      createTask("Teste automação","Estudos")
      cy.get('ul').should('contain',"Teste automação")

      
    });

    it('Add output', () => {

        createTask("Freelance","")

        cy.get('ul').should('contain',"Freelance")

      });

    it('Remove output',()=>{
        createTask("Freelance","")

        cy.contains("ul","Freelance")// Reference
            .parent() // element father
            .find('svg') // element children
            .click()

        cy.get('ul').should('have.length',0)

    })

  });

function createTask(task,option){
    cy.get('.task').click()

      cy.get('#inTodo').type(task)
      cy.get('#taskOptions').select(option)
      cy.get('button').click()

}

