describe('Comunicacion entre Componentes Child to Parent', () => {
    it('Verifica que el mensaje enviado desde Child se muestra en Parent', () => {
        cy.visit('/comunicacion');
        // Se ingresa 'hola' en el input
        cy.get('input[type="text"]').type('hola');
        // Verificar que el input tenga el valor 'hola'
        cy.get('input[type="text"]').should('have.value', 'hola');
        // Click en el boton Enviar Mensaje
        cy.get('button').click();
        // Verifica que el input esta vacío después de mandar el mensaje
        cy.get('input[type="text"]').should('have.value', '');
        // Verifica que el mensaje se muestra en el componente Parent <p>
        cy.get('p').should('contain.text', 'hola');
    });
});