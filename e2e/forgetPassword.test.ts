import {by, device, expect, element} from 'detox'

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  it('should have welcome screen', async () => {
    await expect(element(by.id('_welcome'))).toBeVisible()
  })
  it('press text to go to forgot pw screen', async () => {
    await expect(element(by.id('_welcome'))).toBeVisible()
    await element(by.id('_forgetPW')).tap()
    await expect(element(by.id('_welcome'))).not.toBeVisible()
    await expect(element(by.id('_forgotPwscreen'))).toBeVisible()
  })
  it('Input wrong phone number ', async () => {
    await element(by.id('_inputPhoneNumber')).typeText('1')
    await element(by.id('_buttonConfirm')).tap()
    await expect(element(by.id('_forgotPwscreen'))).not.toBeVisible()
    await waitFor(element(by.id('_resendCode')))
      .toBeVisible()
      .withTimeout(20000)
    await element(by.id('_resendCode')).tap()
  })
  it('Input wrong OTP', async () => {
    await element(by.id('_otpCodeScreenBtnBack_goback')).tap()
    await element(by.id('_inputPhoneNumber')).clearText()
    await element(by.id('_inputPhoneNumber')).typeText('0985005942')
    await element(by.id('_buttonConfirm')).tap()
    await expect(element(by.id('_forgotPwscreen'))).not.toBeVisible()
    await element(by.id('_optInput')).typeText('123465')
    await element(by.id('_optInput')).clearText()
    await element(by.id('_optInput')).typeText('000000')
  })
  it('Input correct OTP', async () => {
    await element(by.id('_optInput')).clearText()
    await element(by.id('_optInput')).typeText('123456')
    await expect(element(by.id('_otpCodeScreen'))).not.toBeVisible()
  })
  it('change password fail', async () => {
    await element(by.id('_inputPW')).clearText()
    await element(by.id('_inputPW')).typeText('123456')
    await element(by.id('_reInputPW')).clearText()
    await element(by.id('_reInputPW')).typeText('123456')
  })

  it('change password success', async () => {
    await element(by.id('_inputPW')).clearText()
    await element(by.id('_inputPW')).typeText('123456789')
    await element(by.id('_reInputPW')).clearText()
    await element(by.id('_reInputPW')).typeText('123456789')
    await expect(element(by.id('_btnResetPW'))).toBeVisible()
    await element(by.id('_btnResetPW')).tap()
  })
})
