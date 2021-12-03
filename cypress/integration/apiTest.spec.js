/// <reference types="cypress" />

describe('Api Testing',() => {
  
    // it('Array Object',( ) => {
    //     let a;
    //     const b = 1;
    //     let c = 1;
    //     let d = 0.5;
    //     let e = 'pop';
    //     let f = true;

    //  let arrayObject = [1,'mai','qa',true]
    //  cy.log(arrayObject[0])

    //  let jsonOject = {
    //      id:1,
    //      name: 'mai',
    //      name: 'qa'
    //  }
      
    //  cy.log(jsonOject.id)
    //  cy.log(jsonOject.name)
    //  cy.log(jsonOject['name']);

     it('Product Object',( ) => {
        let products = [
            {
                id: 1,
                name: 'iphone',
                price: 50000
            },
            {
                id: 2,
                name: 'android',
                price: 25000
            }
        ]
        cy.log(products[0].id)
        
        cy.log(products[1].name)

     })

     it('Get method', () => {
        cy.request({
            url:'https://jsonplaceholder.typicode.com/posts',
            method:'GET',
            body:'',
            headers:{
                "content-type":"application/json"
            }
        }).then(response => {
          //  cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.statusText).to.equal('OK')
            expect(response.body[0].title).to.include('provident')
        })
    }) 

    it.only('Post Method', () => {
        cy.request({
            url:'https://jsonplaceholder.typicode.com/posts',
            method:'POST',
            body:'{ "name": "mai"}',
            headers:{
                "content-type":"application/json"
            }
        }).then(response => {
            expect(response.status).to.equal(201)
            expect(response.body.name).to.equal('mai')
            expect(response.body.id).to.match(/[0-9]{3}/)
        })
    }) 

})

