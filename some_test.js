
Feature('Some');

Scenario('test something', ({I}) => {
  I.amOnPage('/');
  I.wait(5);
  I.see('鯨魚先生');
  I.see('30 天與 Docker 做好朋友');
});
