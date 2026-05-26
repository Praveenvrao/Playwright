import {test, expect, Locator} from "@playwright/test";

// This test verifies the Playwright Actions
test("Verify Playwright Actions", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const Name:Locator = page.locator("css=#name");
    await expect(Name).toBeVisible();
    await expect(Name).toBeEnabled();
    await Name.fill("John Bairstow");
    const PlaceHolder: string | null = await Name.getAttribute("placeholder");
    console.log("The placeholder value is : "+ PlaceHolder);
    // expect(await Name.inputValue()).toBe("John Bairstow");
    const EnteredName: string = await Name.inputValue();
    console.log("The entered name is : "+ EnteredName);
    expect(EnteredName).toBe("John Bairstow");

    await page.waitForTimeout(2000);
    await page.screenshot({path: 'test-results/screenshots/PWActions_Name.png'});

    
    
})