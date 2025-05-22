// https://on.cypress.io/api

describe('Form Test', () => {
  it('visits the form url and input value and submit', () => {
    cy.visit('/form')
    cy.contains('h1', 'This is an form page')
    cy.get('label').contains('Username')

    // 验证提交成功
    cy.get('button').contains('提交').click()
    cy.get('span').contains('用户名不能为空')

    // 模拟输入
    cy.get('#username-input').type('test')
    cy.get('button').contains('提交').click()
    cy.get('span').contains('提交成功')
  })
})
