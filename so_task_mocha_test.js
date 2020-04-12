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
const homeButtonXpathUrl = "/html/body/div/div[2]/div/div[3]/div/ul/li/a"
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
const {Builder, By, Key, until, } = require("selenium-webdriver");
const { describe, it, before, after } = require("selenium-webdriver/testing");
assert = require('assert');
const myAccountText = "MY ACCOUNT";
const oneErrorText = "There is 1 error";
const youMustRegisterAccountText = "You must register at least one phone number.";
const tenErrorsText = "There are 10 errors";
const pleaseEnterText = "Please enter your email address to create an account.";
const signInButtonText = "Sign in";
let driver;

describe('library app scenerio', function() {
    this.timeout(50000);
    beforeEach(function() {
        driver = new Builder().forBrowser("chrome").build();
        driver.get(createAccountUrl);
    });

    afterEach(function() {
        driver.quit(); 
    });

    it("TEST CASE 1: \
    First step before registration form; \
    Check if Email fields is visible; \
    Check if framses are highlighted in red if it is empty; \
    Check if frames are highlighted in blue if it is fullfiled properly; \
    Check if frames are highlighted in blue when cursor in on it; \
    Check if placeholder are red when it is empty automated", function() {
        try {
            driver.get("http://automationpractice.com/");
            driver.manage().window().maximize();
            driver.findElement(By.xpath(loggedUserXpath)).click();
            driver.executeScript("window.scrollTo(0, 300)");
            driver.findElement(By.id(emailCreateUrl)).click();
            driver.findElement(By.id(loginEmailUrl)).click();
            driver.findElement(By.id(loginPassUrl)).click();
            driver.getTitle().then(function(title) {
                console.log("The title is: " + title);
            });
            createPicture("tastcase1.png", driver);
            validation(driver, "label", createEmailPatternText, createEmailPatternText, createEmailpatternUrl);
            validation(driver, "label", createEmailPatternText, createEmailPatternText, registerEmailPatternUrl);
            validation(driver, "label", registerPasswordPatternText, registerPasswordPatternText, registerPasswordPatternUrl);
        } catch(err) {
            handleError(err, driver);
        }
    });

    it("TEST CASE 2: \
    Click create an account with good email address ", function() {
        try {
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300)");
            driver.findElement(By.id(emailCreateUrl)).sendKeys("jakudsbtest123@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            createPicture("tastcase2.png", driver);
            driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
            validation(driver, "p", yourPersonalInfoText, "Your personal info...", yourPersonalInformationUrl);
        } catch (err) {
            handleError(err, driver);
        }
    });

    it("TEST CASE 3: Click create an account with already used email address", function() {
        try { 
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.id(emailCreateUrl)).sendKeys("jstawowcz@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.wait(until.elementLocated(By.xpath(validFieldEmailAlreadyCreatedUrl)), 5000);
            createPicture("tastcase3.png", driver);
            validation(driver, "p", alreadyRagisteredEmailVieldText, alreadyRagisteredEmailVieldText, alreadyRagisteredEmailFieldUrl);
        } catch(err) {
             handleError(err, driver);
        } 
    });

    it("TEST CASE 4: Click create an account without email", function() {
        try { 
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.id(emailCreateUrl)).sendKeys("");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.wait(until.elementLocated(By.xpath(validFieldEmailAlreadyCreatedUrl)), 5000);
            createPicture("tastcase4.png", driver);
            validation(driver, "li", invalidEmailText, invalidEmailText, validFieldEmailAlreadyCreatedUrl);
        } catch(err) {
            handleError(err, driver);
        } 
    });

    it("TEST CASE 5: Click create an account with invalid email address", function() {
        try { 
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.id(emailCreateUrl)).sendKeys(invalidEmailAdress);
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.wait(until.elementLocated(By.xpath(validFieldEmailAlreadyCreatedUrl)), 5000);
            createPicture("tastcase5.png", driver);
            validation(driver, "li", invalidEmailText, invalidEmailText, validFieldEmailAlreadyCreatedUrl);
        } catch(err) {
            handleError(err, driver);
        } 
    });

    it("TEST CASE 6: Second step;\
    Check if all fields are visibled in form like firstname, lastname, password;\
    Check if all required fields has star stamp;\
    Check if all placeholder are empty by default expect this that you fullfiled previously;\
    Check if it is confirm password label", function() {
        try {
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300)");
            driver.findElement(By.id(emailCreateUrl)).sendKeys("jjakdddubtest123@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.executeScript("window.scrollTo(0, 300)");
            createPicture("tastcase6.png", driver);
            driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
            validation(driver, "h3", yourPersonalInfoText, yourPersonalInfoText, yourPersonalInformationUrl);
            createPicture("tastcase6_1.png", driver);
            driver.executeScript("window.scrollTo(0, 700)");
            createPicture("tastcase6_2.png", driver);
            driver.executeScript("window.scrollTo(0, 1200)");
            createPicture("tastcase6_3.png", driver);
            driver.executeScript("window.scrollTo(0, 1600)");
            createPicture("tastcase6_4.png", driver);
        } catch (err) {
            handleError(err, driver);
        } 
    });

    it("TEST CASE 7: Check if the frames are highlighted in blue when they are fullfield;\
    Check if it was unsuccessfull registration after left all fields empty;\
    Check if 'Sign up for our newsletter!'', 'Receive special offers from our partners!'works are clickable;\
    Check if registration message is visible after click on register button;\
    Check if there are proper validation message after left empty all fields", function() {
        try {
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300)");
            driver.findElement(By.id(emailCreateUrl)).sendKeys("jakubtesdddt123@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.executeScript("window.scrollTo(0, 300)");
            driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
            createPicture("tastcase7.png", driver);
            validation(driver, "h3", yourPersonalInfoText, yourPersonalInfoText, yourPersonalInformationUrl);
            driver.findElement(By.id(mrUrl)).click();
            driver.findElement(By.id(mrsUrl)).click();
            driver.findElement(By.id(customerFirstNameIdUrl)).click();
            driver.findElement(By.id(customerLastNameIdUrl)).click();
            driver.findElement(By.id(createEmailIdUrl)).click();
            driver.findElement(By.id(createPassIdUrl)).click();
            driver.findElement(By.id(daysArrowIdUrl)).click();
            driver.findElement(By.id(monthArrowIdUrl)).click();
            driver.findElement(By.id(yearArrorIdUrl)).click();
            driver.findElement(By.id(newsellerIdUrl)).click();
            driver.findElement(By.id(optinIdUrl)).click();
            driver.findElement(By.id(firstNameIdUrl)).click();
            driver.findElement(By.id(lastNameIdUrl)).click();
            driver.findElement(By.id(companyIdUrl)).click();
            driver.findElement(By.id(adressIdUrl)).click();
            driver.findElement(By.id(adress2IdUrl)).click();
            driver.findElement(By.id(cityIdUrl)).click();
            driver.findElement(By.id(stateIdUrl)).click();
            driver.findElement(By.id(postcodeIdUrl)).click();
            driver.findElement(By.id(countryIdUrl)).click();
            driver.findElement(By.id(adInfoIdUrl)).click();
            driver.findElement(By.id(phoneIdUrl)).click();
            driver.findElement(By.id(phoneMobileIdUrl)).click();
            driver.findElement(By.id(myAddresIdUrl)).click();
            driver.findElement(By.id(ragisterIdUrl)).click();
            validation(driver, "h3", thereAre8ErrorsText, thereAre8ErrorsText, eightErrorsUrl);
            createPicture("tastcase7_1.png", driver);
        } catch (err) {
            handleError(err, driver);
        }
    });

    it("TEST CASE 8: CHeck if combobox is expended down when cursos is on it;\
    Check if password is encrypted;\
    Check if data prosesses to server after fullfilling all fields and signup is successull", function() {
        try {
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300)");
            driver.findElement(By.id(emailCreateUrl)).sendKeys("jjaddddQQQSLLSdd123@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.executeScript("window.scrollTo(0, 300)");
            driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
            createPicture("tastcase8.png", driver);
            validation(driver, "h3", yourPersonalInfoText, yourPersonalInfoText, yourPersonalInformationUrl);
            driver.findElement(By.id(mrUrl)).click();
            driver.findElement(By.id(customerFirstNameIdUrl)).sendKeys("Jan");
            driver.findElement(By.id(customerLastNameIdUrl)).sendKeys("Jankowski");
            driver.findElement(By.id(createPassIdUrl)).sendKeys("k1234");
            createPicture("tastcase8_1.png", driver);
            driver.findElement(By.css("option[value='5']")).click();
            driver.findElement(By.css("#months > option:nth-child(2)")).click();
            driver.findElement(By.id(yearArrorIdUrl)).sendKeys(2000);
            driver.findElement(By.id(newsellerIdUrl)).click();
            driver.findElement(By.id(optinIdUrl)).click();
            driver.findElement(By.id(companyIdUrl)).sendKeys("Dobra");
            driver.findElement(By.id(adressIdUrl)).sendKeys("Boleslawiecka 1");
            driver.findElement(By.id(adress2IdUrl)).sendKeys("Boleslawiecka 2");
            driver.findElement(By.id(cityIdUrl)).sendKeys("Wroclaw");
            driver.findElement(By.id(stateIdUrl)).sendKeys("option[value='5']");
            driver.findElement(By.id(postcodeIdUrl)).sendKeys(55555);
            driver.findElement(By.id(adInfoIdUrl)).sendKeys("Additional info");
            driver.findElement(By.id(phoneIdUrl)).sendKeys("222222222");
            driver.findElement(By.id(phoneMobileIdUrl)).sendKeys("222222222");
            driver.findElement(By.id(ragisterIdUrl)).click();
            acreatePicture("tastcase8_2.png", driver);
            validation(driver, "h3", myAccountText, myAccountText, myAccountXpathUrl);
        } catch (err) {
             handleError(err, driver);    
        }
    });

    it("TEST CASE 9: Check if it was successfull\
     registration after fullfiling all fields except this without requireds star stamp", function() {
        try {
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300)");
            driver.findElement(By.id(emailCreateUrl)).sendKeys("KsSssrrtt123@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.executeScript("window.scrollTo(0, 300)");
            driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
            createPicture("tastcase9.png", driver);
            validation(driver, "h3", yourPersonalInfoText, yourPersonalInfoText, yourPersonalInformationUrl);
            driver.findElement(By.id(customerFirstNameIdUrl)).sendKeys("Jan");
            driver.findElement(By.id(customerLastNameIdUrl)).sendKeys("Jankowski");
            driver.findElement(By.id(createPassIdUrl)).sendKeys("k1234");
            driver.findElement(By.id(adressIdUrl)).sendKeys("Boleslawiecka 1");
            driver.findElement(By.id(cityIdUrl)).sendKeys("Wroclaw");
            driver.findElement(By.id(stateIdUrl)).sendKeys("option[value='5']");
            driver.findElement(By.id(postcodeIdUrl)).sendKeys(55555);
            driver.findElement(By.id(phoneIdUrl)).sendKeys("222222222");
            driver.findElement(By.id(phoneMobileIdUrl)).sendKeys("222222222");
            driver.findElement(By.id(ragisterIdUrl)).click();
            createPicture("tastcase9_1.png", driver);
            validation(driver, "h3", myAccountText, myAccountText, myAccountXpathUrl);
        } catch (err) {
            handleError(err, driver);    
        }
    });

    it("TEST CASE 10: Check if login are going to be unssuccessfully without any of required field", function() {
        try {
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300)");
            driver.findElement(By.id(emailCreateUrl)).sendKeys("jjaadddeedsdddddddakkksdubtteWstt123@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.executeScript("window.scrollTo(0, 300)");
            driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
            createPicture("tastcase10.png", driver);
            validation(driver, "h3", yourPersonalInfoText, yourPersonalInfoText, yourPersonalInformationUrl);
            driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
            driver.findElement(By.id(mrUrl)).click();
            driver.findElement(By.id(customerFirstNameIdUrl)).sendKeys("Jan");
            driver.findElement(By.id(customerLastNameIdUrl)).sendKeys("Jankowski");
            driver.findElement(By.id(createPassIdUrl)).sendKeys("k1234");
            driver.findElement(By.css("option[value='5']")).click();
            driver.findElement(By.css("#months > option:nth-child(2)")).click();
            driver.findElement(By.id(yearArrorIdUrl)).sendKeys(2000);
            driver.findElement(By.id(newsellerIdUrl)).click();
            driver.findElement(By.id(optinIdUrl)).click();
            driver.findElement(By.id(companyIdUrl)).sendKeys("Dobra");
            driver.findElement(By.id(adressIdUrl)).sendKeys("Boleslawiecka 1");
            driver.findElement(By.id(adress2IdUrl)).sendKeys("Boleslawiecka 2");
            driver.findElement(By.id(cityIdUrl)).sendKeys("Wroclaw");
            driver.findElement(By.id(stateIdUrl)).sendKeys("option[value='5']");
            driver.findElement(By.id(postcodeIdUrl)).sendKeys(55555);
            driver.findElement(By.id(adInfoIdUrl)).sendKeys("Additional info");
            driver.findElement(By.id(ragisterIdUrl)).click();
            createPicture("tastcase10_1.png", driver);
            validation(driver, "li", oneErrorText, oneErrorText, oneErrorUrl);
            validation(driver, "li", youMustRegisterAccountText, youMustRegisterAccountText, youMustResgisterYourAccountUrl);
        } catch (err) {
            handleError(err, driver);    
        }
   });

    it("TEST CASE 11: Check if registration is unsuccessfull with password less than 5 position;\
    Verify that digit in last name and first name  causes an error;\
    Check if registration is unsuccessfull with wrong format mobile phone;\
    Check if registration is unsuccessfull with wrong format of postcode", function() {
        try {
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300)");
            driver.findElement(By.id(emailCreateUrl)).sendKeys("###$!jakub1234567@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.executeScript("window.scrollTo(0, 300)");
            driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
            createPicture("tastcase11.png", driver);
            validation(driver, "p", yourPersonalInfoText, yourPersonalInfoText, yourPersonalInformationUrl);
            driver.findElement(By.id(mrUrl)).click();
            driver.findElement(By.id(customerFirstNameIdUrl)).sendKeys("Jan5");
            driver.findElement(By.id(customerLastNameIdUrl)).sendKeys("Jankowski5");
            driver.findElement(By.id(createPassIdUrl)).sendKeys("k#12");
            driver.findElement(By.css("option[value='5']")).click();
            driver.findElement(By.css("#months > option:nth-child(2)")).click();
            driver.findElement(By.id(yearArrorIdUrl)).sendKeys(2000);
            driver.findElement(By.id(newsellerIdUrl)).click();
            driver.findElement(By.id(optinIdUrl)).click();
            driver.findElement(By.id(companyIdUrl)).sendKeys("%Dobra");
            driver.findElement(By.id(adressIdUrl)).sendKeys("$$Boleslawiecka 1");
            driver.findElement(By.id(adress2IdUrl)).sendKeys("@#Boleslawiecka 2");
            driver.findElement(By.id(cityIdUrl)).sendKeys("!@12Wroclaw");
            driver.findElement(By.id(stateIdUrl)).sendKeys("option[value='5']");
            driver.findElement(By.id(postcodeIdUrl)).sendKeys("@55555");
            driver.findElement(By.id(adInfoIdUrl)).sendKeys("################@2121Additional info");
            driver.findElement(By.id(phoneIdUrl)).sendKeys("@22222222");
            driver.findElement(By.id(phoneMobileIdUrl)).sendKeys("222-222-22@");
            driver.findElement(By.id(ragisterIdUrl)).click();
            createPicture("tastcase11_1.png", driver);
            validation(driver, "p", tenErrorsText, tenErrorsText, tenErrorsUrl);
        } catch (err) {
            handleError(err, driver);    
        }
    });

    it("TEST CASE 12: Check if there is not difference with letter size in all fields", function() {
        try {
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300)");
            driver.findElement(By.id(emailCreateUrl)).sendKeys("JQSSsasAAJ3@MAIL.COM");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.executeScript("window.scrollTo(0, 300)");
            driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
            validation(driver, "p", yourPersonalInfoText, yourPersonalInfoText, yourPersonalInformationUrl);
            driver.findElement(By.id(mrUrl)).click();
            driver.findElement(By.id(customerFirstNameIdUrl)).sendKeys("JAN");
            driver.findElement(By.id(customerLastNameIdUrl)).sendKeys("JANKOWSKI");
            driver.findElement(By.id(createPassIdUrl)).sendKeys("K1234");
            driver.findElement(By.css("option[value='5']")).click();
            driver.findElement(By.css("#months > option:nth-child(2)")).click();
            driver.findElement(By.id(yearArrorIdUrl)).sendKeys(2000);
            driver.findElement(By.id(newsellerIdUrl)).click();
            driver.findElement(By.id(optinIdUrl)).click();
            driver.findElement(By.id(companyIdUrl)).sendKeys("DOBRA");
            driver.findElement(By.id(adressIdUrl)).sendKeys("BOLESLAWIECKA 1");
            driver.findElement(By.id(adress2IdUrl)).sendKeys("BOLESLAWIECKA 2");
            driver.findElement(By.id(cityIdUrl)).sendKeys("WROCLAW");
            driver.findElement(By.id(stateIdUrl)).sendKeys("option[value='5']");
            driver.findElement(By.id(postcodeIdUrl)).sendKeys(55555);
            driver.findElement(By.id(adInfoIdUrl)).sendKeys("AADDITIONAL INFO");
            driver.findElement(By.id(phoneIdUrl)).sendKeys("222222222");
            driver.findElement(By.id(phoneMobileIdUrl)).sendKeys("222222222");
            driver.findElement(By.id(ragisterIdUrl)).click();
            createPicture("tastcase12_1.png", driver);
            validation(driver, "h3", myAccountText, myAccountText, myAccountXpathUrl);
        } catch (err) {
            handleError(err, driver);    
        }
    });

    it("TEST CASE 13: Check if the system distinguishes capital and small letter in already used email,", function() {
        try { 
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.id(emailCreateUrl)).sendKeys("jstawowcz@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.wait(until.elementLocated(By.xpath(validFieldEmailAlreadyCreatedUrl)), 5000);
            createPicture("tastcase13.png", driver);
            validation(driver, "li", alreadyRagisteredEmailVieldText, alreadyRagisteredEmailVieldText, alreadyRagisteredEmailFieldUrl);
            driver.findElement(By.id(emailCreateUrl)).clear();
            driver.findElement(By.id(emailCreateUrl)).sendKeys("JSTAWOWCZ@GMAIL.COM");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.wait(until.elementLocated(By.xpath(validFieldEmailAlreadyCreatedUrl)), 3000);
            createPicture("tastcase13_1.png", driver);
            validation(driver, "li", alreadyRagisteredEmailVieldText, alreadyRagisteredEmailVieldText, alreadyRagisteredEmailFieldUrl);
        } catch(err) {
            handleError(err, driver);
        }
    });

    it("TEST CASE 14: SIGNIN TEST;\
    Check if cursor is focus on email placeholder;\
    Check if form contains element like username password, sign in button, forgot your password;\
    Check if all fields are empty and unmarked by default", function() {
        try { 
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            createPicture("tastcase14.png", driver);
            validation(driver, "li", pleaseEnterText, pleaseEnterText, enterEmailAccountUrl);
            validation(driver, "label", createEmailPatternText, createEmailPatternText, createEmailpatternUrl);
            validation(driver, "label", createEmailPatternText, createEmailPatternText + "in registration", registerEmailPatternUrl);
            validation(driver, "label", registerPasswordPatternText, registerPasswordPatternText, registerPasswordPatternUrl);
            validation(driver, "input", "", createEmailPatternText + " input", emailFieldInputUrl);
            validation(driver, "input", "", registerPasswordPatternText + " input", passwordFieldInputUrl);
            validation(driver, "span", signInButtonText, signInButtonText + " button", signInButtonUrl);
        } catch(err) {
            handleError(err, driver);
        }
    });

    it("TEST CASE 15: Check if user is able to login with valid credential", function() {
        try { 
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.findElement(By.id(loginPassUrl)).sendKeys("k1234");
            driver.findElement(By.id(submitLoginIdUrl)).click();
            createPicture("tastcase15.png", driver);
            validation(driver, "p", hereYouCanManageText, hereYouCanManageText, hereYouCanManageUrl);
        } catch(err) {
            handleError(err, driver);
        } 
    });

    it("TEST CASE 16: Check if user is unable to login with invalid credential", function() {
        try { 
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.findElement(By.id(loginPassUrl)).sendKeys("k123");
            driver.findElement(By.id(submitLoginIdUrl)).click();
            createPicture("tastcase16.png", driver);
            validation(driver, "li", invalidEmailText, invalidEmailText, autehenticationTitleUrl);
        } catch(err) {
            handleError(err, driver);
        }
    });

    it("TEST CASE 17: Check if user is unable to login with proper username and invalid password", function() {
        try { 
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.findElement(By.id(loginPassUrl)).sendKeys("k123");
            driver.findElement(By.id(submitLoginIdUrl)).click();
            createPicture("tastcase17.png", driver);
            validation(driver, "li", invalidPasswordText, invalidPasswordText, autehenticationTitleUrl);
        } catch(err) {
            handleError(err, driver);
        }
    });

    it("TEST CASE 18: Check if user is unable to login with invalid username and proper password", function() {
        try { 
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.findElement(By.id(loginPassUrl)).sendKeys("k1234");
            driver.findElement(By.id(submitLoginIdUrl)).click();
            createPicture("tastcase18.png", driver);
            validation(driver, "li", invalidEmailText, invalidEmailText, autehenticationTitleUrl);
        } catch(err) {
            handleError(err, driver);
        } 
    });

    it("TEST CASE 19: Check if user is unable to login with proper username and empty password", function() {
        try { 
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.findElement(By.id(loginPassUrl)).sendKeys("");
            driver.findElement(By.id(submitLoginIdUrl)).click();
            createPicture("tastcase19.png", driver);
            validation(driver, "li", passwordRequiredText, passwordRequiredText, autehenticationTitleUrl);
        } catch(err) {
            handleError(err, driver);
        }
    });

    it("TEST CASE 20: Check if user is unable to login with empty email and proper password", function() {
        try { 
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.id(loginEmailUrl)).sendKeys("");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.findElement(By.id(loginPassUrl)).sendKeys("k1234");
            driver.findElement(By.id(submitLoginIdUrl)).click();
            createPicture("tastcase20.png", driver);
            validation(driver, "li", emailRequiredText, emailRequiredText, autehenticationTitleUrl);
        } catch(err) {
            handleError(err, driver);
        }
    });

    it("TEST CASE 21: Check if space are not allowed in password", function() {
        try { 
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.findElement(By.id(loginPassUrl)).sendKeys(" k123 ");
            driver.findElement(By.id(submitLoginIdUrl)).click();
            createPicture("tastcase21.png", driver);
            validation(driver, "li", invalidPasswordText, invalidPasswordText, autehenticationTitleUrl);
        } catch(err) {
            handleError(err, driver);
        } 
    });

    it("TEST CASE 22: Check if validation field is as excepted when email field is empty in retrieving password form;\
    Check if all fields and button are clickable in retrieving password form", function() {
        try { 
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.linkText(forgotYourPaswordLinkUrl)).click();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.id(forgotPassEmailId)).click();
            driver.findElement(By.xpath(forgotPassEmailXpathsBtnUrl)).click();
            driver.executeScript("window.scrollTo(0, 300);");
            createPicture("tastcase22.png", driver);
            validation(driver, "li", invalidEmailText, invalidEmailText, invalidEmailInPasRetrUrl);
        } catch(err) {
            handleError(err, driver);
        } 
    });

    it("TEST CASE 23: Check if confirmation email of changing password was sent", function() {
        try { 
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.linkText(forgotYourPaswordLinkUrl)).click();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.id(forgotPassEmailId)).sendKeys("jstawowcz@gmail.com");
            driver.findElement(By.xpath(forgotPassEmailXpathsBtnUrl)).click();
            driver.executeScript("window.scrollTo(0, 300);");
            createPicture("tastcase23.png", driver);
            validation(driver, "p", confirmationEmailText, confirmationEmailText, confirmationEmailTextUrl);
        } catch(err) {
            handleError(err, driver);
        } 
    });

    it("TEST CASE 24: Check if user is still log in after clicking refresh button;\
    Check if user is still log in after clicking back and forward button browser button;\
    Check if user is still log in after clicking home button", function() {
        try { 
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.findElement(By.id(loginPassUrl)).sendKeys("k1234");
            driver.findElement(By.id(submitLoginIdUrl)).click();
            driver.wait(until.elementLocated(By.xpath(hereYouCanManageUrl)), 1000);
            validation(driver, "p", hereYouCanManageText, hereYouCanManageText, hereYouCanManageUrl);
            driver.navigate().refresh();
            driver.wait(until.elementLocated(By.xpath(hereYouCanManageUrl)), 1000);
            validation(driver, "p", hereYouCanManageText, hereYouCanManageText, hereYouCanManageUrl);
            driver.navigate().back();
            driver.navigate().forward();
            driver.wait(until.elementLocated(By.xpath(hereYouCanManageUrl)), 1000);
            validation(driver, "p", hereYouCanManageText, hereYouCanManageText, hereYouCanManageUrl);
            driver.findElement(By.xpath(homeButtonXpathUrl)).click();
            driver.findElement(By.xpath(loggedUserXpath)).click();
            driver.wait(until.elementLocated(By.xpath(hereYouCanManageUrl)), 3000);
            validation(driver, "p", hereYouCanManageText, hereYouCanManageText, hereYouCanManageUrl);
            createPicture("tastcase24.png", driver);
        } catch(err) {
            handleError(err, driver);
        } 
    });

    it("TEST CASE 25: Check if user is still log out after clicking log out button;\
    Check if user  after log out is not log in when clicking back", function() {
        try { 
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.findElement(By.id(loginPassUrl)).sendKeys("k1234");
            driver.findElement(By.id(submitLoginIdUrl)).click();
            validation(driver, "p", hereYouCanManageText, hereYouCanManageText, hereYouCanManageUrl);
            driver.findElement(By.xpath(signOutXpathUrl)).click();
            validation(driver, "a", signInText, signInText + " button is visible you are signed out...", loggedUserXpath);
            driver.navigate().back();
            validation(driver, "a", signInText, signInText + " button is visible you are signed out...", loggedUserXpath);
            createPicture("tastcase25.png", driver);
        } catch(err) {
            handleError(err, driver);
        } 
    });

    it("TEST CASE 26: Check if user is still log in after closing of explorer IT IS FAILING", function() {
        try { 
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.findElement(By.id(loginPassUrl)).sendKeys("k1234");
            driver.findElement(By.id(submitLoginIdUrl)).click();
            createPicture("tastcase26.png", driver);
            validation(driver, "p", hereYouCanManageText, hereYouCanManageText, hereYouCanManageUrl);
            driver.quit();
            let driver2 = new Builder().forBrowser("chrome").build();
            driver2.get(createAccountUrl);
            driver2.manage().window().maximize();
            validation(driver, "a", signOutText,  signOutText + " button is visible you are signed in...", signOutXpathUrl);
            createPicture("tastcase26_1.png", driver);
        } catch(err) {
            handleError(err, driver);
        }
    });

    it("TEST CASE 27: Check if password is case sensitive", function() {
        try { 
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.findElement(By.id(loginPassUrl)).sendKeys("K1234");
            driver.findElement(By.id(submitLoginIdUrl)).click();
            createPicture("tastcase27.png", driver);
            validation(driver, "li", authenticationFailedText, authenticationFailedText, autehenticationTitleUrl);
        } catch(err) {
            handleError(err, driver);
        } 
    });

    it("TEST CASE 28: Check tab in signin", function() {
        try { 
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.id(emailCreateUrl)).click();
            driver.findElement(By.id(emailCreateUrl)).sendKeys(Key.TAB);
            driver.findElement(By.id(submitCreateUrl)).sendKeys(Key.TAB);
            driver.findElement(By.id(loginEmailUrl)).sendKeys(Key.TAB);
            driver.findElement(By.id(loginPassUrl)).sendKeys(Key.TAB);
            driver.findElement(By.linkText(forgotYourPaswordLinkUrl)).sendKeys(Key.TAB);
            driver.findElement(By.id(submitLoginIdUrl)).sendKeys(Key.ENTER);
            validation(driver, "li", emailRequiredText, emailRequiredText, emailIsRequiredUrl);
            createPicture("tastcase28.png", driver);
        } catch(err) {
            handleError(err, driver);
        }  
    });

    it("TEST CASE 29: CHeck tab in registration form", function() {
        try {
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300)");
            driver.findElement(By.id(emailCreateUrl)).sendKeys("jstawowcz121@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            createPicture("tastcase29.png", driver);
            driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
            validation(driver, "p", yourPersonalInfoText, yourPersonalInfoText, yourPersonalInformationUrl);
            driver.findElement(By.id(mrUrl)).click();
            for(i=0; i<23; i++) {
                driver.actions().sendKeys(Key.TAB).perform();
                if (i == 22) {
                    driver.actions().sendKeys(Key.ENTER).perform();
                }
            }
            driver.wait(until.elementLocated(By.xpath(errorsValueAllFieldsEmptyUrl)), 3000);
            validation(driver, "li", thereAre8ErrorsText, thereAre8ErrorsText, errorsValueAllFieldsEmptyUrl);
            driver.executeScript("window.scrollTo(0, 300)");
            createPicture("tastcase29_1.png", driver);
        } catch (err) {
            handleError(err, driver);
        } 
    });

    it("TEST CASE 30: Click ENTER on login form instead of click on (submitLoginIdUrl).click()", function() {
        try { 
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300);");
            driver.findElement(By.id(loginEmailUrl)).sendKeys("jakub123@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).click();
            driver.findElement(By.id(loginPassUrl)).sendKeys("k1234");
            driver.findElement(By.id(submitLoginIdUrl)).sendKeys(Key.ENTER);
            createPicture("tastcase30.png", driver);
            validation(driver, "p", hereYouCanManageText, hereYouCanManageText, hereYouCanManageUrl);
        } catch(err) {
            handleError(err, driver);
        } 
    });

    it("TEST CASE 31: Click ENTER on create an account instead of click on (submitCreateUrl).click()", function() {
        try {
            driver.get(createAccountUrl);
            driver.manage().window().maximize();
            driver.executeScript("window.scrollTo(0, 300)");
            driver.findElement(By.id(emailCreateUrl)).sendKeys("jakuddddbtest123@gmail.com");
            driver.findElement(By.id(submitCreateUrl)).sendKeys(Key.ENTER);
            createPicture("tastcase31.png", driver);
            driver.wait(until.elementLocated(By.xpath(yourPersonalInformationUrl)), 3000);
            validation(driver, "p", yourPersonalInfoText, yourPersonalInfoText, yourPersonalInformationUrl);
        } catch (err) {
            handleError(err, driver);
        }
    });

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

function validation(driver, aTag, pText, aLog, element){
    state = driver.findElement(By.xpath(element));
    if (state.isDisplayed) {
        state.then(aTag => aTag.getText())
        .then(text => assert(text === pText,
        console.log(aLog + " is displayed")))
        }
}

});
