
import {test, expect, Locator} from "@playwright/test"

/*test("Verify the Title",async ({page})=> {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

let titleword: string = await page.title();
console.log("Title", titleword);

await expect(page).toHaveTitle("OrangeHRM");

})

test("Verify the Page URL", async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    let pageurl:string = await page.url();
    await expect(page).toHaveURL("/orangehrmlive/");}
)*/

// test("Verify the Login Page", async ({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.getByPlaceholder("Username").fill("Admin");
//     await page.getByPlaceholder("Password").fill("admin123");
//     await page.getByRole("button", {name: "Login"}).click();
//     const dashboard:Locator = page.getByRole('heading', { name: 'Dashboard' });
//     await expect(dashboard).toBeVisible();
// })

/*test("Verify the Admin and Time page", async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", {name: "Login"}).click();
    const Admin:Locator = page.getByText("Admin");
    await expect(Admin).toBeVisible();
    Admin.click();
    const Time: Locator = page.getByAltText("Time");
    await expect(Time).toBeVisible();
    Time.click();
    const Timeheading: Locator = page.getByRole("heading", {name: "Time"});
    await expect(Timeheading).toBeVisible();
    const TimesheetHead: Locator = page.getByRole("heading", {name: "Timesheets"});
    await expect(TimesheetHead).toBeVisible();
    const Orangetitle: Locator = page.getByTitle("OrangeHRM");
    await expect(Orangetitle).toBeVisible();    
    
})*/

test("Verify the Admin click & Add User page", async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("//*[@name='username']").fill("Admin");
    await page.locator("//*[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await page.locator("//span[normalize-space()='Admin']").click();
    const SystemUsers: Locator = page.getByRole("heading", {name: "System Users"});
    await expect(SystemUsers).toBeVisible();
    await page.locator("//button[normalize-space()='Add']").click();
    const AddUser: Locator = page.getByRole("heading", {name: "Add User"});
    await expect(AddUser).toBeVisible();

})

