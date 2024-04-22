import {by, device, expect, element} from 'detox'

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  it('should have welcome screen', async () => {
    await expect(element(by.id('_welcome'))).toBeVisible()
  })
  it('Press Login with no input  & PW', async () => {
    await expect(element(by.id('_welcome'))).toBeVisible()
    await element(by.id('_userId')).typeText('')
    await element(by.id('_password')).typeText('')
    await element(by.id('_password')).tapReturnKey()
    await element(by.id('_loginButton')).tap()
  })
  it('Input wrong phone number', async () => {
    await expect(element(by.id('_welcome'))).toBeVisible()
    await element(by.id('_userId')).typeText('ABCD')
    await element(by.id('_password')).typeText('12345678')
    await element(by.id('_password')).tapReturnKey()
    await element(by.id('_loginButton')).tap()
  })
  it('Input wrong password', async () => {
    await expect(element(by.id('_welcome'))).toBeVisible()
    await element(by.id('_userId')).clearText()
    await element(by.id('_password')).clearText()
    await element(by.id('_userId')).typeText('0985005942')
    await element(by.id('_password')).typeText('12345678')
    await element(by.id('_password')).tapReturnKey()
    await element(by.id('_loginButton')).tap()
  })
})
