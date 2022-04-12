import puppeteer from 'puppeteer'

describe('app.js',()=>{

    it('contains input box',async()=>{
        let browser = await puppeteer.launch({headless:false})
        let page = await browser.newPage()
        await page.goto('http://localhost:3000')
        let el = await page.waitForSelector('.search')
        // await page.focus('.search')
        await el.type('delhi',{delay:300})
        // await el.keyboard.press('Enter')
        await el.press('Enter')
        await page.screenshot({path:'./screenshot1.png',fullPage:true})
        await page.waitForTimeout(2000)
        await el.type('meerut',{delay:500})
        await page.screenshot({path:'./screenshot2.png',fullPage:true})

    })
    // expect('.main-container').toContain('delhi')
})

jest.setTimeout(30000)
