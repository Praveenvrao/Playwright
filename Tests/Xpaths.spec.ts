import {test, expect, Locator} from "@playwright/test";

test("Verifying the type of locators", async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    const Products: Locator=page.locator("//h2/a[contains(@href,'computer')]");
    const Productcount= await Products.count();
    console.log("Total Computer products are: "+ Productcount);
    const ProductList: string[]= await Products.allTextContents();
    console.log("List of all Products are : "+ProductList);
    await Products.nth(3).click();
    await expect(page.getByRole('heading', {name: 'Simple Computer'})).toBeVisible();
    const Comparelist: Locator = page.getByRole('button',{name: 'Add to compare list'}).first();
    await Comparelist.click();
    const Books: Locator = page.getByRole("link", {name: "Books"}).nth(1);
    await Books.click();
    await expect(page.getByRole('heading', {name: 'Books'})).toBeVisible();
    const CI:Locator = page.getByRole('link', {name: 'Computing and Internet'}).first();
    await CI.click();
    await expect(page.locator('h1',{hasText: 'Computing and Internet'})).toBeVisible();
    await Comparelist.click();
    const Compareproductlist: Locator = page.getByRole('link', {name:'Compare products list'});
    await Compareproductlist.click();
    await expect(page.getByRole('heading', {name: 'Compare products'})).toBeVisible();
    const Productnames:Locator = page.locator("//tr[@class='product-name']/td/a");
    const Productnameslist:string[]= await Productnames.allTextContents();
    console.log("Products added to compare list are: " + Productnameslist);
})