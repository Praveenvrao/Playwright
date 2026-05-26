import {test, expect, Locator, Page} from "@playwright/test";

test("Verifying the CSS Locator", async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    const Searchbox:Locator = page.locator("css=input#small-searchterms"); //tagname#id
    await Searchbox.fill("Computer");
    const Searchbutton:Locator = page.locator("css=input.button-1").first(); //tagname.classname
    await Searchbutton.click();
    const Searchbox2:Locator = page.locator("input.search-box-text[type='text']"); //tagname.classname[attributename='attributevalue']
    await Searchbox2.fill("Books");
    const Searchbutton2:Locator = page.locator("input[value='Search']").first(); //tagname[attributename='attributevalue']
    await Searchbutton2.click();
    const Searchresult:Locator = page.locator("strong.result"); //tagname.classname
    const Searchresulttext:any = await Searchresult.textContent();
    console.log("Search result is: "+ Searchresulttext);
    await page.screenshot({path: 'test-results/screenshot.png'});

}) 

test("Verifying CSS Locators in cricbuzz", async ({page})=>{
    await page.goto("https://www.cricbuzz.com/");
    const Schedule: Locator = page.getByText('Schedule').first();
    await Schedule.click();
    await page.screenshot({path: 'test-results/screenshots/schedule.png'});
    const T20Leages: Locator = page.getByRole('link', {name :'T20 Leagues'}).first();
    await T20Leages.click();
    await page.screenshot({path: 'test-results/screenshots/t20leagues.png'});
    const T20Blast: Locator = page.locator("(//a[contains(@title,'T20 Blast 2026')][normalize-space()='T20 Blast 2026'])[2]");
    await expect(T20Blast).toBeVisible();
    await T20Blast.click();
    await page.screenshot({path: 'test-results/screenshots/t20blast2026.png'});

})