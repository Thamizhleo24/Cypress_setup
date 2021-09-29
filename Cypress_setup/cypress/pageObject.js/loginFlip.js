/// <reference types="cypress" />

class LoginPage
{
visit()
    {
        cy.visit('https://www.flipkart.com/');
    };
    submit()
    {       
        const button = cy.get('._1_3w1N').click();
        button.click();
    }
fillEmail(value)
    {
        const field=cy.get(':nth-child(1) > ._2IX_2-');
        field.clear();
        field.type(value);
        return this
    };
fillPass(value)
    {
        const field=cy.get(':nth-child(2) > ._2IX_2-');
        field.clear();
        field.type(value);
        return this
    }
    submit1()
    {
        const button1 = cy.get('._1D1L_j > ._2KpZ6l');
        button1.click();
    }
    
};

export default LoginPage