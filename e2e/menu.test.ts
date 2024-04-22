import {by, device, expect, element} from 'detox'

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  it('should have home screen', async () => {
    await expect(element(by.id('_homescreen'))).toBeVisible()
  })
  it('press crew and go to crew screen', async () => {
    await expect(element(by.id('_homescreen'))).toBeVisible()
    await element(by.id('_btnHomeScreen_1')).tap()
    await expect(element(by.id('_welcome'))).not.toBeVisible()
    await expect(element(by.id('_elearning_1'))).toBeVisible()
    await element(by.id('_btn_1_goback')).tap()
  })

  it('press new letter and go to letter screen', async () => {
    await expect(element(by.id('_homescreen'))).toBeVisible()
    await element(by.id('_btnHomeScreen_2')).tap()
    await expect(element(by.id('_welcome'))).not.toBeVisible()
    await expect(element(by.id('_elearning_2'))).toBeVisible()
    await element(by.id('_btn_2_goback')).tap()
  })

  it('press elearning and go to elearning screen', async () => {
    await expect(element(by.id('_homescreen'))).toBeVisible()
    await element(by.id('_btnHomeScreen_3')).tap()
    await expect(element(by.id('_welcome'))).not.toBeVisible()
    await expect(element(by.id('_elearning_3'))).toBeVisible()
    await element(by.id('_btn_3_goback')).tap()
  })
  it('press GP accident and go to GP accident screen', async () => {
    await expect(element(by.id('_homescreen'))).toBeVisible()
    await element(by.id('_btnHomeScreen_4')).tap()
    await expect(element(by.id('_welcome'))).not.toBeVisible()
    await expect(element(by.id('_elearning_4'))).toBeVisible()
    await element(by.id('_btn_4_goback')).tap()
  })
  it('press company history screen and go to company history screen screen', async () => {
    await expect(element(by.id('_homescreen'))).toBeVisible()
    await element(by.id('_btnHomeScreen_6')).tap()
    await expect(element(by.id('_welcome'))).not.toBeVisible()
    await expect(element(by.id('_elearning_6'))).toBeVisible()
    await element(by.id('_btn_6_goback')).tap()
  })
  it('press group company and go to group company screen', async () => {
    await expect(element(by.id('_homescreen'))).toBeVisible()
    await element(by.id('_btnHomeScreen_7')).tap()
    await expect(element(by.id('_welcome'))).not.toBeVisible()
    await expect(element(by.id('_topTabCompanyScreen'))).toBeVisible()
    await element(by.id('_topTabCompany_goback')).tap()
  })
  it('press salary and go to salary screen', async () => {
    await expect(element(by.id('_homescreen'))).toBeVisible()
    await element(by.id('_btnHomeScreen_9')).tap()
    await expect(element(by.id('_welcome'))).not.toBeVisible()
    await expect(element(by.id('_salaryScreen'))).toBeVisible()
    await element(by.id('_inputPasswordSalary')).clearText()
    await element(by.id('_inputPasswordSalary')).typeText('123456789')
    await expect(element(by.id('_btnConfirmPWSalary'))).toBeVisible()
    await element(by.id('_btnConfirmPWSalary')).tap()
    await expect(element(by.id('_detailSalaryScreen'))).toBeVisible()
    await element(by.id('_backDetailSalary_goback')).tap()
    await element(by.id('_salary_btn_goback')).tap()
  })
  it('press meeting and go to meeting screen', async () => {
    await expect(element(by.id('_homescreen'))).toBeVisible()
    await element(by.id('_btnHomeScreen_10')).tap()
    await expect(element(by.id('_welcome'))).not.toBeVisible()
    await expect(element(by.id('_toptabMeetingVideo'))).toBeVisible()
    await element(by.id('_meetingVideo_goback')).tap()
  })
  it('press schedule and go to schedule screen', async () => {
    await expect(element(by.id('_homescreen'))).toBeVisible()
    await element(by.id('_btnHomeScreen_11')).tap()
    await expect(element(by.id('_welcome'))).not.toBeVisible()
    await expect(element(by.id('_elearning_11'))).toBeVisible()
    await element(by.id('_btn_11_goback')).tap()
  })
  it('press notice and go to notice screen', async () => {
    await expect(element(by.id('_homescreen'))).toBeVisible()
    await element(by.id('_btnHomeScreen_12')).tap()
    await expect(element(by.id('_welcome'))).not.toBeVisible()
    await expect(element(by.id('_elearning_12'))).toBeVisible()
    await element(by.id('_btn_12_goback')).tap()
  })

  it('press dpos and go to dpos screen', async () => {
    await expect(element(by.id('_homescreen'))).toBeVisible()
    await element(by.id('_btnHomeScreen_5')).tap()
    await expect(element(by.id('_welcome'))).not.toBeVisible()
  })
})
