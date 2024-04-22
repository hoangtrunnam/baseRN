import {by, device, expect, element} from 'detox'

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  it('should have home screen', async () => {
    await expect(element(by.id('_homescreen'))).toBeVisible()
  })
  it('scroll to bottom and see all news', async () => {
    await element(by.id('_listDashboard')).scrollTo('bottom')
    await element(by.id('_itemNew_22')).tap()
    await expect(element(by.id('_homescreen'))).not.toBeVisible()
    await element(by.id('_detailNew_goback')).tap()

    await waitFor(element(by.text('一覧を見る')))
      .toBeVisible()
      .whileElement(by.id('_listDashboard'))
      .scroll(300, 'up', 0.7, 0.7)
    await element(by.id('_btnShowAllNews')).tap()
    await expect(element(by.id('_listAllNewsScreen'))).toBeVisible()
    await element(by.id('_listAllNews')).scrollTo('bottom')
  })
})
