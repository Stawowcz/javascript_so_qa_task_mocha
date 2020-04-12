const emailCreateUrl = "email_create";  
const submitCreateUrl = "SubmitCreate";
const loginEmailUrl = "email";
const loginPassUrl = "passwd";
const invalidEmailAdress = "1@!@!sssssss";
const createAccountUrl = "http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation";
const mrUrl = "id_gender1";
const mrsUrl = "id_gender2";
const customerFirstNameIdUrl = "customer_firstname";
const customerLastNameIdUrl = "customer_lastname";
const createEmailIdUrl = "email";
const createPassIdUrl = "passwd";
const daysArrowIdUrl = "days";
const monthArrowIdUrl = "months";
const yearArrorIdUrl = "years";
const newsellerIdUrl = "uniform-newsletter";
const optinIdUrl = "optin";
const firstNameIdUrl = "firstname";
const lastNameIdUrl = "lastname";
const companyIdUrl = "company";
const adressIdUrl = "address1";
const adress2IdUrl = "address2";
const cityIdUrl = "city";
const stateIdUrl = "id_state";
const postcodeIdUrl = "postcode";
const countryIdUrl = "id_country";
const adInfoIdUrl = "other";
const phoneIdUrl = "phone";
const phoneMobileIdUrl = "phone_mobile";
const myAddresIdUrl = "alias";
const ragisterIdUrl = "submitAccount";
const submitLoginIdUrl = "SubmitLogin";
const forgotPassEmailId = "email";
const forgotPassEmailXpathsBtnUrl = "/html/body/div/div[2]/div/div[3]/div/div/form/fieldset/p/button";
const forgotYourPaswordLinkUrl = "Forgot your password?";
const homeButtonXpathUrl = "/html/body/div/div[2]/div/div[3]/div/ul/li/a";
const loggedUserXpath = "/html/body/div/div[1]/header/div[2]/div/div/nav/div[1]/a";
const signOutXpathUrl = "/html/body/div/div[1]/header/div[2]/div/div/nav/div[2]/a";
const errorsValueAllFieldsEmptyUrl ="/html/body/div/div[2]/div/div[3]/div/div/p";
const autehenticationTitleUrl = "/html/body/div/div[2]/div/div[3]/div/div[1]/ol/li";
const emailIsRequiredUrl = "/html/body/div/div[2]/div/div[3]/div/div[1]/ol/li";
const invalidEmailInPasRetrUrl = "/html/body/div/div[2]/div/div[3]/div/div/div/ol/li";
const confirmationEmailTextUrl = "/html/body/div/div[2]/div/div[3]/div/div/p";
const yourPersonalInformationUrl = "/html/body/div/div[2]/div/div[3]/div/div/form/div[1]/h3";
const validFieldEmailAlreadyCreatedUrl = "/html/body/div/div[2]/div/div[3]/div/div/div[1]/form/div/div[1]/ol/li";
const eightErrorsUrl = "/html/body/div/div[2]/div/div[3]/div/div/p";
const myAccountXpathUrl = "/html/body/div/div[2]/div/div[3]/div/h1";
const tenErrorsUrl = "/html/body/div/div[2]/div/div[3]/div/div/p";
const enterEmailAccountUrl = "/html/body/div/div[2]/div/div[3]/div/div/div[1]/form/div/p";
const hereYouCanManageUrl = "/html/body/div/div[2]/div/div[3]/div/p";
const createEmailpatternUrl = "/html/body/div/div[2]/div/div[3]/div/div/div[1]/form/div/div[2]/label";
const registerEmailPatternUrl = "/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/div[1]/label";
const registerPasswordPatternUrl = "/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/div[2]/label";
const oneErrorUrl = "/html/body/div/div[2]/div/div[3]/div/div/p";
const youMustResgisterYourAccountUrl = "//*[@id='center_column']/div/ol/li";
const emailFieldInputUrl = "/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/div[1]/input";
const signInButtonUrl = "/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/p[2]/button/span";
const passwordFieldInputUrl = "//*[@id='passwd']";
const hereYouCanManageText = "Welcome to your account. Here you can manage all of your personal information and orders.";
const invalidEmailText = "Invalid email address.";
const invalidPasswordText = "Invalid password.";
const passwordRequiredText = "Password is required.";
const emailRequiredText = "An email address required.";
const confirmationEmailText = "A confirmation email has been sent to your address: jstawowcz@gmail.com"; 
const signInText = "Sign in";
const signOutText = "Sign out";
const authenticationFailedText = "Authentication failed.";
const thereAre8ErrorsText = "There are 8 errors";
const yourPersonalInfoText = "YOUR PERSONAL INFORMATION";
const createEmailPatternText = "Email address";
const registerPasswordPatternText = "Password";
const alreadyRagisteredEmailFieldUrl = "/html/body/div/div[2]/div/div[3]/div/div/div[1]/form/div/div[1]/ol/li";
const alreadyRagisteredEmailVieldText = "An account using this email address has already been registered. Please enter a valid password or request a new one.";
const {Builder, By, Key, until, after, before, } = require("selenium-webdriver");
assert = require('assert');
const myAccountText = "MY ACCOUNT";
const oneErrorText = "There is 1 error";
const youMustRegisterAccountText = "You must register at least one phone number.";
const tenErrorsText = "There are 10 errors";
const pleaseEnterText = "Please enter your email address to create an account.";
const signInButtonText = "Sign in";

// First step before registration form
// Check if Email fields is visible
// Check if framses are highlighted in red if it is empty
// Check if frames are highlighted in blue if it is fullfiled properly
// Check if frames are highlighted in blue when cursor in on it 
// Check if placeholder are red when it is empty automated
async function testCase1() {
    let driver = new Builder().forBrowser("chrome").build();
    try {
        driver.get("http://automationpractice.com/");
        await driver.manage().window().maximize();
        await driver.findElement(By.xpath("/html/body/div/div[1]/header/div[2]/div/div/nav/div[1]/a")).click();
        await driver.executeScript("window.scrollTo(0, 300)");
        await driver.findElement(By.id(emailCreateUrl)).click();
        await driver.findElement(By.id(loginEmailUrl)).click();
        await driver.findElement(By.id(loginPassUrl)).click();
        await driver.getTitle().then(function(title) {
            console.log("The title is: " + title);
        });
        await createPicture("tastcase1.png", driver);
        await validation(driver, "label", createEmailPatternText, createEmailPatternText, createEmailpatternUrl);
        await validation(driver, "label", createEmailPatternText, createEmailPatternText, registerEmailPatternUrl);
        validation(driver, "label", registerPasswordPatternText, registerPasswordPatternText, registerPasswordPatternUrl);
    } catch(err) {
        await handleError(err, driver);
    } finally {
        driver.quit();    
    }
}

// Click create an account with good email address, automated in test case2
async function testCase2() {
    let driver = new Builder().forBrowser("chrome").build();
    try {
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300)");
        await driver.findElement(By.id(emailCreateUrl)).sendKeys("jakudsbtest123@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await createPicture("tastcase2.png", driver);
        await driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
        validation(driver, "p", yourPersonalInfoText, "Your personal info...", yourPersonalInformationUrl);
    } catch (err) {
        await handleError(err, driver);
    }
     finally {
        driver.quit();
     }
}

// #Click create an account with already used email address,

async function testCase3() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.id(emailCreateUrl)).sendKeys("jstawowcz@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.wait(until.elementLocated(By.xpath(validFieldEmailAlreadyCreatedUrl)), 5000);
        await createPicture("tastcase3.png", driver);
        validation(driver, "p", alreadyRagisteredEmailVieldText, alreadyRagisteredEmailVieldText, alreadyRagisteredEmailFieldUrl);
    } catch(err) {
        await handleError(err, driver)
    } finally {
        driver.quit();
    }
}

// Click create an account without email,
async function testCase4() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.id(emailCreateUrl)).sendKeys("");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.wait(until.elementLocated(By.xpath(validFieldEmailAlreadyCreatedUrl)), 5000);
        await createPicture("tastcase4.png", driver);
        validation(driver, "li", invalidEmailText, "Invalid email adress...", validFieldEmailAlreadyCreatedUrl);
    } catch(err) {
        await handleError(err, driver);
    } finally {
        driver.quit();
    }   
}

//    Click create an account with invalid email address, to do
async function testCase5() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.id(emailCreateUrl)).sendKeys(invalidEmailAdress);
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.wait(until.elementLocated(By.xpath(validFieldEmailAlreadyCreatedUrl)), 5000);
        await createPicture("tastcase5.png", driver);
        validation(driver, "li", invalidEmailText, invalidEmailText, validFieldEmailAlreadyCreatedUrl);
    } catch(err) {
        await handleError(err, driver);
    } finally {
        driver.quit();
    }
}

// Second step
// Check if all fields are visibled in form like firstname, lastname, password, to do
// Check if all required fields has star stamp,
// Check if all placeholder are empty by default expect this that you fullfiled previously, automate
// Check if it is confirm password label
async function testCase6() {
    let driver = new Builder().forBrowser("chrome").build();
    try {
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300)");
        await driver.findElement(By.id(emailCreateUrl)).sendKeys("jjakdddubtest123@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.executeScript("window.scrollTo(0, 300)");
        await createPicture("tastcase6.png", driver);
        await driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
        await validation(driver, "h3", yourPersonalInfoText, yourPersonalInfoText, yourPersonalInformationUrl);
        await createPicture("tastcase6_1.png", driver);
        await driver.executeScript("window.scrollTo(0, 700)");
        await createPicture("tastcase6_2.png", driver);
        await driver.executeScript("window.scrollTo(0, 1200)");
        await createPicture("tastcase6_3.png", driver);
        await driver.executeScript("window.scrollTo(0, 1600)");
        createPicture("tastcase6_4.png", driver);
    } catch (err) {
        await handleError(err, driver);
    } finally {
        driver.quit();
    }
}

// Check if the frames are highlighted in blue when they are fullfield
// Check if it was unsuccessfull registration after left all fields empty,
// #Check if "Sign up for our newsletter!", "Receive special offers from our partners!
// " works are clickable (to automate) automated in test_case7
// Check if registration message is visible after click on register button,
// Check if there are proper validation message after left empty all fields,
async function testCase7() {
    let driver = new Builder().forBrowser("chrome").build()
    try {
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300)");
        await driver.findElement(By.id(emailCreateUrl)).sendKeys("jakubtesdddt123@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.executeScript("window.scrollTo(0, 300)");
        await driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
        await createPicture("tastcase7.png", driver);
        await validation(driver, "h3", yourPersonalInfoText, yourPersonalInfoText, yourPersonalInformationUrl);
        await driver.findElement(By.id(mrUrl)).click();
        await driver.findElement(By.id(mrsUrl)).click();
        await driver.findElement(By.id(customerFirstNameIdUrl)).click();
        await driver.findElement(By.id(customerLastNameIdUrl)).click();
        await driver.findElement(By.id(createEmailIdUrl)).click();
        await driver.findElement(By.id(createPassIdUrl)).click();
        await driver.findElement(By.id(daysArrowIdUrl)).click();
        await driver.findElement(By.id(monthArrowIdUrl)).click();
        await driver.findElement(By.id(yearArrorIdUrl)).click();
        await driver.findElement(By.id(newsellerIdUrl)).click();
        await driver.findElement(By.id(optinIdUrl)).click();
        await driver.findElement(By.id(firstNameIdUrl)).click();
        await driver.findElement(By.id(lastNameIdUrl)).click();
        await driver.findElement(By.id(companyIdUrl)).click();
        await driver.findElement(By.id(adressIdUrl)).click();
        await driver.findElement(By.id(adress2IdUrl)).click();
        await driver.findElement(By.id(cityIdUrl)).click();
        await driver.findElement(By.id(stateIdUrl)).click();
        await driver.findElement(By.id(postcodeIdUrl)).click();
        await driver.findElement(By.id(countryIdUrl)).click();
        await driver.findElement(By.id(adInfoIdUrl)).click();
        await driver.findElement(By.id(phoneIdUrl)).click();
        await driver.findElement(By.id(phoneMobileIdUrl)).click();
        await driver.findElement(By.id(myAddresIdUrl)).click();
        await driver.findElement(By.id(ragisterIdUrl)).click();
        await validation(driver, "h3", thereAre8ErrorsText, thereAre8ErrorsText, eightErrorsUrl);
        createPicture("tastcase7_1.png", driver);
    } catch (err) {
        await handleError(err, driver);
    }
      finally {
        driver.quit();
    }
}

// CHeck if combobox is expended down when cursos is on it,
// Check if password is encrypted, 
// Check if data prosesses to server after fullfilling all fields and signup is successull
async function testCase8() {
    let driver = new Builder().forBrowser("chrome").build();
    try {
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300)");
        await driver.findElement(By.id(emailCreateUrl)).sendKeys("jjffggdd123@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.executeScript("window.scrollTo(0, 300)");
        await driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
        await createPicture("tastcase8.png", driver);
        await validation(driver, "h3", yourPersonalInfoText, yourPersonalInfoText, yourPersonalInformationUrl);
        await driver.findElement(By.id(mrUrl)).click();
        await driver.findElement(By.id(customerFirstNameIdUrl)).sendKeys("Jan");
        await driver.findElement(By.id(customerLastNameIdUrl)).sendKeys("Jankowski");
        await driver.findElement(By.id(createPassIdUrl)).sendKeys("k1234");
        await createPicture("tastcase8_1.png", driver);
        await driver.findElement(By.css("option[value='5']")).click();
        await driver.findElement(By.css("#months > option:nth-child(2)")).click();
        await driver.findElement(By.id(yearArrorIdUrl)).sendKeys(2000);
        await driver.findElement(By.id(newsellerIdUrl)).click();
        await driver.findElement(By.id(optinIdUrl)).click();
        await driver.findElement(By.id(companyIdUrl)).sendKeys("Dobra");
        await driver.findElement(By.id(adressIdUrl)).sendKeys("Boleslawiecka 1");
        await driver.findElement(By.id(adress2IdUrl)).sendKeys("Boleslawiecka 2");
        await driver.findElement(By.id(cityIdUrl)).sendKeys("Wroclaw");
        await driver.findElement(By.id(stateIdUrl)).sendKeys("option[value='5']");
        await driver.findElement(By.id(postcodeIdUrl)).sendKeys(55555);
        await driver.findElement(By.id(adInfoIdUrl)).sendKeys("Additional info");
        await driver.findElement(By.id(phoneIdUrl)).sendKeys("222222222");
        await driver.findElement(By.id(phoneMobileIdUrl)).sendKeys("222222222");
        await driver.findElement(By.id(ragisterIdUrl)).click();
        await createPicture("tastcase8_2.png", driver);
        validation(driver, "h3", myAccountText, myAccountText, myAccountXpathUrl);
    } catch (err) {
        await handleError(err, driver);    
    }
      finally {
        driver.quit();
    }
}

//Check if it was successfull registration after fullfiling all fields except this without requireds star stamp
async function testCase9() {
    let driver = new Builder().forBrowser("chrome").build();
    try {
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300)");
        await driver.findElement(By.id(emailCreateUrl)).sendKeys("jjqwqw23@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.executeScript("window.scrollTo(0, 300)");
        await driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
        await createPicture("tastcase9.png", driver);
        await validation(driver, "h3", yourPersonalInfoText, yourPersonalInfoText, yourPersonalInformationUrl);
        await driver.findElement(By.id(customerFirstNameIdUrl)).sendKeys("Jan");
        await driver.findElement(By.id(customerLastNameIdUrl)).sendKeys("Jankowski");
        await driver.findElement(By.id(createPassIdUrl)).sendKeys("k1234");
        await driver.findElement(By.id(adressIdUrl)).sendKeys("Boleslawiecka 1");
        await driver.findElement(By.id(cityIdUrl)).sendKeys("Wroclaw");
        await driver.findElement(By.id(stateIdUrl)).sendKeys("option[value='5']");
        await driver.findElement(By.id(postcodeIdUrl)).sendKeys(55555);
        await driver.findElement(By.id(phoneIdUrl)).sendKeys("222222222");
        await driver.findElement(By.id(phoneMobileIdUrl)).sendKeys("222222222");
        await driver.findElement(By.id(ragisterIdUrl)).click();
        await createPicture("tastcase9_1.png", driver);
        validation(driver, "h3", myAccountText, myAccountText, myAccountXpathUrl);
    } catch (err) {
        await handleError(err, driver);    
    }
      finally {
        driver.quit();
    }
}

// Check if login are going to be unssuccessfylly without any of required field
async function testCase10() {
    let driver =  new Builder().forBrowser("chrome").build();
    try {
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300)");
        await driver.findElement(By.id(emailCreateUrl)).sendKeys("jjaadddeeddddddakkksdubtteWstt123@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.executeScript("window.scrollTo(0, 300)");
        await driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
        await createPicture("tastcase10.png", driver);
        await validation(driver, "h3", yourPersonalInfoText, yourPersonalInfoText, yourPersonalInformationUrl);
        await driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
        await driver.findElement(By.id(mrUrl)).click();
        await driver.findElement(By.id(customerFirstNameIdUrl)).sendKeys("Jan");
        await driver.findElement(By.id(customerLastNameIdUrl)).sendKeys("Jankowski");
        await driver.findElement(By.id(createPassIdUrl)).sendKeys("k1234");
        await driver.findElement(By.css("option[value='5']")).click();
        await driver.findElement(By.css("#months > option:nth-child(2)")).click();
        await driver.findElement(By.id(yearArrorIdUrl)).sendKeys(2000);
        await driver.findElement(By.id(newsellerIdUrl)).click();
        await driver.findElement(By.id(optinIdUrl)).click();
        await driver.findElement(By.id(companyIdUrl)).sendKeys("Dobra");
        await driver.findElement(By.id(adressIdUrl)).sendKeys("Boleslawiecka 1");
        await driver.findElement(By.id(adress2IdUrl)).sendKeys("Boleslawiecka 2");
        await driver.findElement(By.id(cityIdUrl)).sendKeys("Wroclaw");
        await driver.findElement(By.id(stateIdUrl)).sendKeys("option[value='5']");
        await driver.findElement(By.id(postcodeIdUrl)).sendKeys(55555);
        await driver.findElement(By.id(adInfoIdUrl)).sendKeys("Additional info");
        await driver.findElement(By.id(ragisterIdUrl)).click();
        await createPicture("tastcase10_1.png", driver);
        await validation(driver, "li", oneErrorText, oneErrorText, oneErrorUrl);
        validation(driver, "li", youMustRegisterAccountText, youMustRegisterAccountText, youMustResgisterYourAccountUrl);
    } catch (err) {
        await handleError(err, driver);    
    } finally {
        driver.quit();
    }
}

// Check if registration is unsuccessfull with password less than 5 position
// Verify that digit in last name and first name  cause an error
// Check if registration is unsuccessfull with wrong format mobile phone
// Check if registration is unsuccessfull with wrong format of postcode
async function testCase11() {
    let driver = new Builder().forBrowser("chrome").build();
    try {
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300)");
        await driver.findElement(By.id(emailCreateUrl)).sendKeys("###$!jakub1234567@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.executeScript("window.scrollTo(0, 300)");
        await driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
        await createPicture("tastcase11.png", driver);
        await validation(driver, "p", yourPersonalInfoText, yourPersonalInfoText, yourPersonalInformationUrl);
        await driver.findElement(By.id(mrUrl)).click();
        await driver.findElement(By.id(customerFirstNameIdUrl)).sendKeys("Jan5");
        await driver.findElement(By.id(customerLastNameIdUrl)).sendKeys("Jankowski5");
        await driver.findElement(By.id(createPassIdUrl)).sendKeys("k#12");
        await driver.findElement(By.css("option[value='5']")).click();
        await driver.findElement(By.css("#months > option:nth-child(2)")).click();
        await driver.findElement(By.id(yearArrorIdUrl)).sendKeys(2000);
        await driver.findElement(By.id(newsellerIdUrl)).click();
        await driver.findElement(By.id(optinIdUrl)).click();
        await driver.findElement(By.id(companyIdUrl)).sendKeys("%Dobra");
        await driver.findElement(By.id(adressIdUrl)).sendKeys("$$Boleslawiecka 1");
        await driver.findElement(By.id(adress2IdUrl)).sendKeys("@#Boleslawiecka 2");
        await driver.findElement(By.id(cityIdUrl)).sendKeys("!@12Wroclaw");
        await driver.findElement(By.id(stateIdUrl)).sendKeys("option[value='5']");
        await driver.findElement(By.id(postcodeIdUrl)).sendKeys("@55555");
        await driver.findElement(By.id(adInfoIdUrl)).sendKeys("################@2121Additional info");
        await driver.findElement(By.id(phoneIdUrl)).sendKeys("@22222222");
        await driver.findElement(By.id(phoneMobileIdUrl)).sendKeys("222-222-22@");
        await driver.findElement(By.id(ragisterIdUrl)).click();
        await createPicture("tastcase11_1.png", driver);
        validation(driver, "p", tenErrorsText, tenErrorsText, tenErrorsUrl);
    } catch (err) {
        await handleError(err, driver);    
    }
      finally {
        driver.quit();
    }
}

// Check if there is not difference with letter size in all fields, automated in test_case12
async function testCase12() {
    let driver = new Builder().forBrowser("chrome").build();
    try {
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300)");
        await driver.findElement(By.id(emailCreateUrl)).sendKeys("JEJQQ3@MAIL.COM");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.executeScript("window.scrollTo(0, 300)");
        await driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
        await validation(driver, "p", yourPersonalInfoText, yourPersonalInfoText, yourPersonalInformationUrl);
        await driver.findElement(By.id(mrUrl)).click();
        await driver.findElement(By.id(customerFirstNameIdUrl)).sendKeys("JAN");
        await driver.findElement(By.id(customerLastNameIdUrl)).sendKeys("JANKOWSKI");
        await driver.findElement(By.id(createPassIdUrl)).sendKeys("K1234");
        await driver.findElement(By.css("option[value='5']")).click();
        await driver.findElement(By.css("#months > option:nth-child(2)")).click();
        await driver.findElement(By.id(yearArrorIdUrl)).sendKeys(2000);
        await driver.findElement(By.id(newsellerIdUrl)).click();
        await driver.findElement(By.id(optinIdUrl)).click();
        await driver.findElement(By.id(companyIdUrl)).sendKeys("DOBRA");
        await driver.findElement(By.id(adressIdUrl)).sendKeys("BOLESLAWIECKA 1");
        await driver.findElement(By.id(adress2IdUrl)).sendKeys("BOLESLAWIECKA 2");
        await driver.findElement(By.id(cityIdUrl)).sendKeys("WROCLAW");
        await driver.findElement(By.id(stateIdUrl)).sendKeys("option[value='5']");
        await driver.findElement(By.id(postcodeIdUrl)).sendKeys(55555);
        await driver.findElement(By.id(adInfoIdUrl)).sendKeys("AADDITIONAL INFO");
        await driver.findElement(By.id(phoneIdUrl)).sendKeys("222222222");
        await driver.findElement(By.id(phoneMobileIdUrl)).sendKeys("222222222");
        await driver.findElement(By.id(ragisterIdUrl)).click();
        await createPicture("tastcase12_1.png", driver);
        validation(driver, "h3", myAccountText, myAccountText, myAccountXpathUrl);
    } catch (err) {
        await handleError(err, driver);    
    }
      finally {
        driver.quit()
    }
}

// Check if the system distinguishes capital and small letter in already used email, 
async function testCase13() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.id(emailCreateUrl)).sendKeys("jstawowcz@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.wait(until.elementLocated(By.xpath(validFieldEmailAlreadyCreatedUrl)), 5000);
        await createPicture("tastcase13.png", driver);
        await validation(driver, "li", alreadyRagisteredEmailVieldText, alreadyRagisteredEmailVieldText, alreadyRagisteredEmailFieldUrl);
        await driver.findElement(By.id(emailCreateUrl)).clear();
        await driver.findElement(By.id(emailCreateUrl)).sendKeys("JSTAWOWCZ@GMAIL.COM");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.wait(until.elementLocated(By.xpath(validFieldEmailAlreadyCreatedUrl)), 3000);
        await createPicture("tastcase13_1.png", driver);
        validation(driver, "li", alreadyRagisteredEmailVieldText, alreadyRagisteredEmailVieldText, alreadyRagisteredEmailFieldUrl);
    } catch(err) {
        await handleError(err, driver);
    } finally {
        driver.quit();
    }
}

// SIGNIN TEST
// Check if cursor is focus on email placeholder,
// Check if form contains element like username password, sign in button, forgot your password,
// Check if all fields are empty and unmarked by default
async function testCase14() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await createPicture("tastcase14.png", driver);
        await validation(driver, "li", pleaseEnterText, pleaseEnterText, enterEmailAccountUrl);
        await validation(driver, "label", createEmailPatternText, createEmailPatternText, createEmailpatternUrl);
        await validation(driver, "label", createEmailPatternText, createEmailPatternText + "in registration", registerEmailPatternUrl);
        await validation(driver, "label", registerPasswordPatternText, registerPasswordPatternText, registerPasswordPatternUrl);
        await validation(driver, "input", "", createEmailPatternText + " input", emailFieldInputUrl);
        await validation(driver, "input", "", registerPasswordPatternText + " input", passwordFieldInputUrl);
        validation(driver, "span", signInButtonText, signInButtonText + " button", signInButtonUrl);
    } catch(err) {
        await handleError(err, driver);
    } finally {
        driver.quit();
    }
}

// Check if user is able to login with valid credential
async function testCase15() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.findElement(By.id(loginPassUrl)).sendKeys("k1234");
        await driver.findElement(By.id(submitLoginIdUrl)).click();
        await createPicture("tastcase15.png", driver);
        validation(driver, "p", hereYouCanManageText, hereYouCanManageText, hereYouCanManageUrl);
    } catch(err) {
        await handleError(err, driver);
    } finally {
        driver.quit()
    }
}

// Check if user is unable to login with invalid credential
async function testCase16() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.findElement(By.id(loginPassUrl)).sendKeys("k123");
        await driver.findElement(By.id(submitLoginIdUrl)).click();
        await createPicture("tastcase16.png", driver);
        validation(driver, "li", invalidEmailText, invalidEmailText, autehenticationTitleUrl);
    } catch(err) {
        await handleError(err, driver);
    } finally {
        driver.quit();
    }
}

// Check if user is unable to login with proper username and invalid password automated in test_case17
async function testCase17() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.findElement(By.id(loginPassUrl)).sendKeys("k123");
        await driver.findElement(By.id(submitLoginIdUrl)).click();
        await createPicture("tastcase17.png", driver);
        validation(driver, "li", invalidPasswordText, invalidPasswordText, autehenticationTitleUrl);
    } catch(err) {
        await handleError(err, driver);
    } finally {
        driver.quit()
    }
}

// Check if user is unable to login with invalid username and proper password
async function testCase18() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.findElement(By.id(loginPassUrl)).sendKeys("k1234");
        await driver.findElement(By.id(submitLoginIdUrl)).click();
        await createPicture("tastcase18.png", driver);
        validation(driver, "li", invalidEmailText, invalidEmailText, autehenticationTitleUrl);
    } catch(err) {
        await handleError(err, driver);
    } finally {
        driver.quit();
    }
}

// Check if user is unable to login with proper username and empty password
async function testCase19() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.findElement(By.id(loginPassUrl)).sendKeys("");
        await driver.findElement(By.id(submitLoginIdUrl)).click();
        await createPicture("tastcase19.png", driver);
        validation(driver, "li", passwordRequiredText, passwordRequiredText, autehenticationTitleUrl);
    } catch(err) {
        await handleError(err, driver)
    } finally {
        driver.quit()
    }
}

// Check if user is unable to login with empty email and proper password

async function testCase20() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.id(loginEmailUrl)).sendKeys("");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.findElement(By.id(loginPassUrl)).sendKeys("k1234");
        await driver.findElement(By.id(submitLoginIdUrl)).click();
        await createPicture("tastcase20.png", driver);
        validation(driver, "li", emailRequiredText, emailRequiredText, autehenticationTitleUrl);
    } catch(err) {
        await handleError(err, driver);
    } finally {
        driver.quit();
    }
}

// Check if space are not allowed in password
async function testCase21() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.findElement(By.id(loginPassUrl)).sendKeys(" k123 ");
        await driver.findElement(By.id(submitLoginIdUrl)).click();
        await createPicture("tastcase21.png", driver);
        validation(driver, "li", invalidPasswordText, invalidPasswordText, autehenticationTitleUrl);
    } catch(err) {
        await handleError(err, driver);
    } finally {
        driver.quit();
    }
}

// Check if validation field is as excepted when email field is empty in retrieving password form
// Check if all fields and button are clickable in retrieving password form
async function testCase22() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.linkText(forgotYourPaswordLinkUrl)).click();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.id(forgotPassEmailId)).click();
        await driver.findElement(By.xpath(forgotPassEmailXpathsBtnUrl)).click();
        await driver.executeScript("window.scrollTo(0, 300);");
        await createPicture("tastcase22.png", driver);
        validation(driver, "li", invalidEmailText, invalidEmailText, invalidEmailInPasRetrUrl);
    } catch(err) {
        await handleError(err, driver);
    } finally {
        driver.quit();
    }
}

// Check if confirmation email of changing password was sent. 
async function testCase23() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.linkText(forgotYourPaswordLinkUrl)).click();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.id(forgotPassEmailId)).sendKeys("jstawowcz@gmail.com");
        await driver.findElement(By.xpath(forgotPassEmailXpathsBtnUrl)).click();
        await driver.executeScript("window.scrollTo(0, 300);");
        await createPicture("tastcase23.png", driver);
        validation(driver, "p", confirmationEmailText, confirmationEmailText, confirmationEmailTextUrl);
    } catch(err) {
        await handleError(err, driver);
    } finally {
        driver.quit();
    }
}

// Check if user is still log in  after clicking refresh button automated in test_cas24 
// Check if user is still log in after clicking back and forward button browser button  automated in test_case24
// Check if user is still log in after clicking home button 
async function testCase24() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.findElement(By.id(loginPassUrl)).sendKeys("k1234");
        await driver.findElement(By.id(submitLoginIdUrl)).click();
        await driver.wait(until.elementLocated(By.xpath(hereYouCanManageUrl)), 1000);
        validation(driver, "p", hereYouCanManageText, hereYouCanManageText, hereYouCanManageUrl);
        driver.navigate().refresh();
        await driver.wait(until.elementLocated(By.xpath(hereYouCanManageUrl)), 1000);
        validation(driver, "p", hereYouCanManageText, hereYouCanManageText, hereYouCanManageUrl);
        await driver.navigate().back();
        await driver.navigate().forward();
        await driver.wait(until.elementLocated(By.xpath(hereYouCanManageUrl)), 1000);
        await validation(driver, "p", hereYouCanManageText, hereYouCanManageText, hereYouCanManageUrl);
        await driver.findElement(By.xpath(homeButtonXpathUrl)).click();
        await driver.findElement(By.xpath(loggedUserXpath)).click();
        await driver.wait(until.elementLocated(By.xpath(hereYouCanManageUrl)), 3000);
        await validation(driver, "p", hereYouCanManageText, hereYouCanManageText, hereYouCanManageUrl);
        createPicture("tastcase24.png", driver);
    } catch(err) {
        await handleError(err, driver);
    } finally {
        driver.quit();
    }
}

// Check if user is still log out after clicking log out button
// Check if user  after log out is not log in when clicking back
async function testCase25() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.findElement(By.id(loginPassUrl)).sendKeys("k1234");
        await driver.findElement(By.id(submitLoginIdUrl)).click();
        await validation(driver, "p", hereYouCanManageText, hereYouCanManageText, hereYouCanManageUrl);
        await driver.findElement(By.xpath(signOutXpathUrl)).click();
        validation(driver, "a", signInText, signInText + " button is visible you are signed out...", loggedUserXpath);
        await driver.navigate().back();
        await validation(driver, "a", signInText, signInText + " button is visible you are signed out...", loggedUserXpath);
        createPicture("tastcase25.png", driver);
    } catch(err) {
        await handleError(err, driver);
    } finally {
        driver.quit();
    }
}

// #Check if user is still log in after closing of explorer failed
async function testCase26() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.findElement(By.id(loginPassUrl)).sendKeys("k1234");
        await driver.findElement(By.id(submitLoginIdUrl)).click();
        await createPicture("tastcase26.png", driver);
        validation(driver, "p", hereYouCanManageText, hereYouCanManageText, hereYouCanManageUrl);
        await driver.quit();
        let driver2 = new Builder().forBrowser("chrome").build();
        await driver2.get(createAccountUrl);
        await driver2.manage().window().maximize();
        await validation(driver, "a", signOutText,  signOutText + " button is visible you are signed in...", signOutXpathUrl);
        createPicture("tastcase26_1.png", driver);
    } catch(err) {
        await handleError(err, driver);
    } finally {
        driver.quit();
    }
}

// Check if password is case sensitive
async function testCase27() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.findElement(By.id(loginPassUrl)).sendKeys("K1234");
        await driver.findElement(By.id(submitLoginIdUrl)).click();
        await createPicture("tastcase27.png", driver);
        validation(driver, "li", authenticationFailedText, authenticationFailedText, autehenticationTitleUrl);
    } catch(err) {
        await handleError(err, driver);
    } finally {
        driver.quit();
    }
}

// Check tab in signin
async function testCase28() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.id(emailCreateUrl)).click();
        await driver.findElement(By.id(emailCreateUrl)).sendKeys(Key.TAB);
        await driver.findElement(By.id(submitCreateUrl)).sendKeys(Key.TAB);
        await driver.findElement(By.id(loginEmailUrl)).sendKeys(Key.TAB);
        await driver.findElement(By.id(loginPassUrl)).sendKeys(Key.TAB);
        await driver.findElement(By.linkText(forgotYourPaswordLinkUrl)).sendKeys(Key.TAB);
        await driver.findElement(By.id(submitLoginIdUrl)).sendKeys(Key.ENTER);
        await validation(driver, "li", emailRequiredText, emailRequiredText, emailIsRequiredUrl);
        createPicture("tastcase28.png", driver);
    } catch(err) {
        await handleError(err, driver);
    } finally {
        driver.quit();
    }
}

// CHeck tab in in registration form
async function testCase29(){
    let driver = new Builder().forBrowser("chrome").build();
    try {
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300)");
        await driver.findElement(By.id(emailCreateUrl)).sendKeys("jstawowcz121@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await createPicture("tastcase29.png", driver);
        await driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
        validation(driver, "p", yourPersonalInfoText, yourPersonalInfoText, yourPersonalInformationUrl);
        driver.findElement(By.id(mrUrl)).click();
        for(i=0; i<23; i++) {
            driver.actions().sendKeys(Key.TAB).perform()
            if (i == 22) {
                driver.actions().sendKeys(Key.ENTER).perform()
            }
        }
        validation(driver, "li", thereAre8ErrorsText, thereAre8ErrorsText, errorsValueAllFieldsEmptyUrl);
        await driver.executeScript("window.scrollTo(0, 300)");
        createPicture("tastcase29_1.png", driver);
    } catch (err) {
        await handleError(err, driver);
    }
     finally {
        driver.quit()
    }
}

// Click ENTER on in login form instead of click on (submitLoginIdUrl).click()
async function testCase30() {
    let driver = new Builder().forBrowser("chrome").build();
    try { 
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300);");
        await driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).click();
        await driver.findElement(By.id(loginPassUrl)).sendKeys("k1234");
        await driver.findElement(By.id(submitLoginIdUrl)).sendKeys(Key.ENTER);
        await createPicture("tastcase30.png", driver);
        validation(driver, "p", hereYouCanManageText, hereYouCanManageText, hereYouCanManageUrl);
    } catch(err) {
        await handleError(err, driver);
    } finally {
        driver.quit();
    }
}

// Click ENTER on create an account instead of click on (submitCreateUrl).click()
async function testCase31() {
    let driver = new Builder().forBrowser("chrome").build();
    try {
        driver.get(createAccountUrl);
        await driver.manage().window().maximize();
        await driver.executeScript("window.scrollTo(0, 300)");
        await driver.findElement(By.id(emailCreateUrl)).sendKeys("jakuddddbtest123@gmail.com");
        await driver.findElement(By.id(submitCreateUrl)).sendKeys(Key.ENTER);
        await createPicture("tastcase31.png", driver);
        await driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
        validation(driver, "p", yourPersonalInfoText, yourPersonalInfoText, yourPersonalInformationUrl);
    } catch (err) {
        await handleError(err, driver);
    }
     finally {
        driver.quit()
     }
}

function handleError(err, driver) {
    console.error('Something went wrong!\n', err.stack, '\n');
    driver.quit();
}

function createPicture(name, driver) {
    driver.takeScreenshot().then(
        function(image, err) {
            require('fs').writeFile(name, image, 'base64', function(err) {
                console.log(err);
            });
        }
    );
}

async function validation(driver, aTag, pText, aLog, element){
    state = driver.findElement(By.xpath(element));
    if (state.isDisplayed) {
        state.then(aTag => aTag.getText())
        .then(text => assert(text === pText,
        console.log(aLog + " is displayed")))
    }
}

testCase25()