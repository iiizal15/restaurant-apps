/* eslint-disable no-undef */
Feature('Faving Restaurant');

Scenario('Menyukai salah satu restaurant dan membatalkannya', async ({ I }) => {
  I.amOnPage('/');
  I.wait(2);
  I.seeElement('.card-link-button');
  await I.grabTextFrom(locate('.card-link-button').first());
  I.click(locate('.card-link-button').first());
  I.wait(2);
  I.click('#favButton');
  I.amOnPage('/#/favorite');
  I.click(locate('.card-link-button').first());
  I.wait(2);

  I.seeElement('#favButton');
  I.click('#favButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement('.card-link-button');
});
