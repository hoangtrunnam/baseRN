import {by, device, expect, element} from 'detox'

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })
  it('should have welcome screen', async () => {
    await expect(element(by.id('_homescreen'))).toBeVisible()
  })
  it('press drawer icon and go to drawer screen', async () => {
    await element(by.id('_drawerIcon')).tap()
    await element(by.id('_drawerScrollView')).scroll(500, 'down', NaN, 0.85)

    await waitFor(element(by.id('_btnManualPdf')))
      .toBeVisible()
      .withTimeout(3000)
    await element(by.id('_btnManualPdf')).tap()

    await expect(element(by.id('_listPdfScreen'))).toBeVisible()
    await element(by.id('_itemPdf_1')).tap()
    await expect(element(by.id('_detailPdfScreen'))).toBeVisible()
    await element(by.id('_pdfBack_goback')).tap()

    await element(by.id('_itemPdf_2')).tap()
    await expect(element(by.id('_detailPdfScreen'))).toBeVisible()
    await element(by.id('_pdfBack_goback')).tap()

    await element(by.id('_itemPdf_3')).tap()
    await expect(element(by.id('_detailPdfScreen'))).toBeVisible()
    await element(by.id('_pdfBack_goback')).tap()

    await element(by.id('_itemPdf_4')).tap()
    await expect(element(by.id('_detailPdfScreen'))).toBeVisible()
    await element(by.id('_pdfBack_goback')).tap()

    await element(by.id('_itemPdf_5')).tap()
    await expect(element(by.id('_detailPdfScreen'))).toBeVisible()
    await element(by.id('_pdfBack_goback')).tap()

    await element(by.id('_itemPdf_6')).tap()
    await expect(element(by.id('_detailPdfScreen'))).toBeVisible()
    await element(by.id('_pdfBack_goback')).tap()

    await element(by.id('_itemPdf_7')).tap()
    await expect(element(by.id('_detailPdfScreen'))).toBeVisible()
    await element(by.id('_pdfBack_goback')).tap()

    await element(by.id('_itemPdf_8')).tap()
    await expect(element(by.id('_detailPdfScreen'))).toBeVisible()
    await element(by.id('_pdfBack_goback')).tap()

    await element(by.id('_itemPdf_9')).tap()
    await expect(element(by.id('_detailPdfScreen'))).toBeVisible()
    await element(by.id('_pdfBack_goback')).tap()

    await element(by.id('_itemPdf_14')).tap()
    await expect(element(by.id('_detailPdfScreen'))).toBeVisible()
    await element(by.id('_pdfBack_goback')).tap()

    await element(by.id('_itemPdf_15')).tap()
    await expect(element(by.id('_detailPdfScreen'))).toBeVisible()
    await element(by.id('_pdfBack_goback')).tap()
  })

  it('question for admin', async () => {
    await element(by.id('_listPdfBack_goback')).tap()

    await waitFor(element(by.id('_drawerHelpButton')))
      .toBeVisible()
      .withTimeout(3000)
    await element(by.id('_drawerHelpButton')).tap()
    await element(by.id('_dropdown')).tap()
    const itemToSelect = 'アプリ不具合報告'
    await waitFor(element(by.text(itemToSelect)))
      .toBeVisible()
      .withTimeout(4000)

    await element(by.text(itemToSelect)).tap()

    await element(by.id('_yourOption')).clearText()
    await element(by.id('_yourOption')).typeText('i have an error in video screen')
    await element(by.id('_yourOption')).tapReturnKey()

    await expect(element(by.id('_confirmButton'))).toBeVisible()
    await element(by.id('_confirmButton')).tap()
  })

  it('confirm question for admin', async () => {
    await expect(element(by.id('_confirmHelpScreen'))).toBeVisible()

    await expect(element(by.id('_sentHelpBtn'))).toBeVisible()
    await element(by.id('_sentHelpBtn')).tap()
    await expect(element(by.id('_confirmHelpScreen'))).not.toBeVisible()
  })

  it('sent question success', async () => {
    await expect(element(by.id('_successScreen'))).toBeVisible()

    await expect(element(by.id('_backToHome'))).toBeVisible()
    await element(by.id('_backToHome')).tap()
    await expect(element(by.id('_successScreen'))).not.toBeVisible()
  })
})
