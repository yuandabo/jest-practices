/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe("Form", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="form"]').click();

    // The new url should include "/about"
    cy.url().should("include", "/form");

    // The new page should contain an h1 with "About page"
    cy.get("label").contains("Username");

    // 验证提交成功
    cy.get("button").contains("提交").click();
    cy.get("span").contains("用户名不能为空");

    // 模拟输入
    cy.get("#username-input").type("test");
    cy.get("button").contains("提交").click();
    cy.get("span").contains("提交成功");
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
