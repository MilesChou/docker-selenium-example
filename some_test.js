
Feature('Some');

Scenario('test something', (I) => {
  I.amOnPage('/');
  I.wait(5);
  I.see('Miles');
  I.see('A Developer Notes');
  I.amOnPage('/selenium-docker-example/')
  I.wait(5);
  I.see('Selenium');
});
