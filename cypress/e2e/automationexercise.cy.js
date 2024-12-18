describe('automationexercise', () => {
  it('Test Case 12: Add Products in Cart', () => {
    cy.visit('http://automationexercise.com')

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
cy.visit('http://automationexercise.com')
// 3. Verify that home page is visible successfully
cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")
// 4. Click 'Products' button
 cy.get('.shop-menu > .nav > :nth-child(2) > a').should("include.text","Products").click()
// // 5. Hover over first product and click 'Add to cart'
cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
// // 6. Click 'Continue Shopping' button
cy.get('.modal-footer > .btn').click()
// // 7. Hover over second product and click 'Add to cart'
cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
// // 8. Click 'View Cart' button
cy.get('u').click()
// // 9. Verify both products are added to Cart
cy.contains("Blue Top").should("be.visible")
cy.contains("Men Tshirt").should("be.visible")
// // 10. Verify their prices, quantity and total price
cy.get('#product-1 > .cart_price > p').should("have.text","Rs. 500")
cy.get('#product-2 > .cart_price > p').should("have.text","Rs. 400")
cy.get('#product-1 > .cart_quantity > .disabled').should("contain",1)
cy.get('#product-2 > .cart_quantity > .disabled').should("contain",1)
})

it('test10', () => {
  cy.visit('http://automationexercise.com')

  // 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
cy.visit('http://automationexercise.com')
// 3. Verify that home page is visible successfully
cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")
  // 4. Scroll down to footer
  // 5. Verify text 'SUBSCRIPTION'
  cy.get('.single-widget > h2').should("contain","Subscription")
  // 6. Enter email address in input and click arrow button
  cy.get('#susbscribe_email').type("nin0@gmail.com")
  cy.get('#subscribe > .fa').click()
  // 7. Verify success message 'You have been successfully subscribed!' is visible
  cy.get('.alert-success').should("have.text","You have been successfully subscribed!")
})

it('test16', () => {
  cy.visit('http://automationexercise.com')

// 1. Launch browser
/cy.visit('http://automationexercise.com')
// 3. Verify that home page is visible successfully
cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")
// 4. Click 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
// 5. Fill email, password and click 'Login' button
cy.get('[data-qa="login-email"]').type("ghu@gmail.com")
cy.get('[data-qa="login-password"]').type("123")
cy.get('[data-qa="login-button"]').click()
// 6. Verify 'Logged in as username' at top
cy.get(':nth-child(10) > a').should("contain","ghughu")
// 7. Add products to cart
cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
cy.get('.modal-footer > .btn').click()
// 8. Click 'Cart' button
cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
// 9. Verify that cart page is displayed
cy.get('.active').should("contain","Shopping Cart")
// 10. Click Proceed To Checkout
cy.get('.col-sm-6 > .btn').click()
// 11. Verify Address Details and Review Your Order
cy.get(':nth-child(2) > .heading').should("contain","Address Details")
// 12. Enter description in comment text area and click 'Place Order'
cy.get('.form-control').type("please, deliver on time")
cy.get(':nth-child(7) > .btn').click()
// 13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
cy.get('[data-qa="name-on-card"]').type("nino")
cy.get('[data-qa="card-number"]').type(123456789)
cy.get('[data-qa="cvc"]').type(123)
cy.get('[data-qa="expiry-month"]').type("11")
cy.get('[data-qa="expiry-year"]').type("2024")
// 14. Click 'Pay and Confirm Order' button
cy.get('[data-qa="pay-button"]').click()
// 15. Verify success message 'Your order has been placed successfully!'
cy.get('[data-qa="order-placed"] > b').should("contain","Order Placed!")

})
})
