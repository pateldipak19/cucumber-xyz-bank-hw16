$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featureFile/bank.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Test",
  "description": "\r\nAs a user I want to verify xyz bank account functionalities",
  "id": "bank-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2836496900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User as a bank manager should able to add customer successfully",
  "description": "",
  "id": "bank-test;user-as-a-bank-manager-should-able-to-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Bank Manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter First name \"Dipak\" to First Name field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Last Name \"Patel\" to Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter Postcode \"HA2 8FG\" to Postcode Field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am able to see popup display with \"Customer added successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.match({
  "location": "BankStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 56904700,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 268917700,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 200789000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dipak",
      "offset": 20
    }
  ],
  "location": "BankStepdefs.iEnterFirstNameToFirstNameField(String)"
});
formatter.result({
  "duration": 1096384000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnterLastNameToLastNameField(String)"
});
formatter.result({
  "duration": 1085163800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA2 8FG",
      "offset": 18
    }
  ],
  "location": "BankStepdefs.iEnterPostcodeToPostcodeField(String)"
});
formatter.result({
  "duration": 1084973100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 68398100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 37
    }
  ],
  "location": "BankStepdefs.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "duration": 4637800,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "duration": 14627700,
  "status": "passed"
});
formatter.after({
  "duration": 658252700,
  "status": "passed"
});
formatter.before({
  "duration": 2212601100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User as a bank manager should able to open account successfully",
  "description": "",
  "id": "bank-test;user-as-a-bank-manager-should-able-to-open-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Smoke"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Bank Manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter First name \"Dipak\" to First Name field",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Last Name \"Patel\" to Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter Postcode \"HA2 8FG\" to Postcode Field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on Add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I am able to see popup display with \"Customer added successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Open Account tab",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I select \"Dipak Patel\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on Process button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I am able to see popup display with \"Account created successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.match({
  "location": "BankStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 16600,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 392481900,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 250740100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dipak",
      "offset": 20
    }
  ],
  "location": "BankStepdefs.iEnterFirstNameToFirstNameField(String)"
});
formatter.result({
  "duration": 1113363400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnterLastNameToLastNameField(String)"
});
formatter.result({
  "duration": 1084751900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA2 8FG",
      "offset": 18
    }
  ],
  "location": "BankStepdefs.iEnterPostcodeToPostcodeField(String)"
});
formatter.result({
  "duration": 1096491100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 67906600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 37
    }
  ],
  "location": "BankStepdefs.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "duration": 2769700,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "duration": 17508000,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 60127400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dipak Patel",
      "offset": 10
    }
  ],
  "location": "BankStepdefs.iSelectCustomerNameWhichAddedBefore(String)"
});
formatter.result({
  "duration": 519099100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iSelectCurrency(String)"
});
formatter.result({
  "duration": 199604600,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 63405400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully",
      "offset": 37
    }
  ],
  "location": "BankStepdefs.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "duration": 3839100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "duration": 19695900,
  "status": "passed"
});
formatter.after({
  "duration": 640079700,
  "status": "passed"
});
formatter.before({
  "duration": 2231811800,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "User should be able to login into the account logout fro the account successfully",
  "description": "",
  "id": "bank-test;user-should-be-able-to-login-into-the-account-logout-fro-the-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@Sanity"
    },
    {
      "line": 35,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I click on Bank Manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter First name \"Dipak\" to First Name field",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter Last Name \"Patel\" to Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter Postcode \"HA2 8FG\" to Postcode Field",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on Add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I am able to see popup display with \"Customer added successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click on Open Account tab",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I select \"Dipak Patel\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I select currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on Process button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I am able to see popup display with \"Account created successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on home button",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I click on Customer Login button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I select \"Dipak Patel\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I should be able to verify \"Logout\" tab displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I should be able able to verify customer name \"Dipakak Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I should able to click logout button",
  "keyword": "And "
});
formatter.match({
  "location": "BankStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 14600,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 430865500,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 186470400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dipak",
      "offset": 20
    }
  ],
  "location": "BankStepdefs.iEnterFirstNameToFirstNameField(String)"
});
formatter.result({
  "duration": 1092105500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnterLastNameToLastNameField(String)"
});
formatter.result({
  "duration": 1115147300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA2 8FG",
      "offset": 18
    }
  ],
  "location": "BankStepdefs.iEnterPostcodeToPostcodeField(String)"
});
formatter.result({
  "duration": 1088327300,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 67428400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 37
    }
  ],
  "location": "BankStepdefs.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "duration": 2632600,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "duration": 19381800,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 68222800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dipak Patel",
      "offset": 10
    }
  ],
  "location": "BankStepdefs.iSelectCustomerNameWhichAddedBefore(String)"
});
formatter.result({
  "duration": 469208800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iSelectCurrency(String)"
});
formatter.result({
  "duration": 200761700,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 64757200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully",
      "offset": 37
    }
  ],
  "location": "BankStepdefs.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "duration": 3922300,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "duration": 17385000,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnHomeButton()"
});
formatter.result({
  "duration": 2086796900,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 65226500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dipak Patel",
      "offset": 10
    }
  ],
  "location": "BankStepdefs.iSelectCustomerNameWhichAddedBefore(String)"
});
formatter.result({
  "duration": 402682900,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 62512500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 28
    }
  ],
  "location": "BankStepdefs.iShouldBeAbleToVerifyTabDisplayed(String)"
});
formatter.result({
  "duration": 1067673400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dipakak Patel",
      "offset": 47
    }
  ],
  "location": "BankStepdefs.iShouldBeAbleAbleToVerifyCustomerName(String)"
});
formatter.result({
  "duration": 1068402900,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cDipak[ak] Patel\u003e but was:\u003cDipak[] Patel\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.bank.cucumber.stepDefs.BankStepdefs.iShouldBeAbleAbleToVerifyCustomerName(BankStepdefs.java:113)\r\n\tat ✽.And I should be able able to verify customer name \"Dipakak Patel\"(src/test/java/resources/featureFile/bank.feature:57)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BankStepdefs.iShouldAbleToClickLogoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 785187500,
  "status": "passed"
});
formatter.before({
  "duration": 2206656600,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "User as customer should be able to to deposit money to the account",
  "description": "",
  "id": "bank-test;user-as-customer-should-be-able-to-to-deposit-money-to-the-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@Sanity"
    },
    {
      "line": 60,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "I click on Bank Manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I enter First name \"Dipak\" to First Name field",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I enter Last Name \"Patel\" to Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I enter Postcode \"HA2 8FG\" to Postcode Field",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I click on Add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I am able to see popup display with \"Customer added successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I click on Open Account tab",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I select \"Dipak Patel\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I select currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I click on Process button",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I am able to see popup display with \"Account created successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I click on home button",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "I click on Customer Login button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I select \"Dipak Patel\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I click on Deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I enter amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I click on Deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I should able to verify message \"Deposit Successful\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BankStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 22300,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 420330900,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 189957400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dipak",
      "offset": 20
    }
  ],
  "location": "BankStepdefs.iEnterFirstNameToFirstNameField(String)"
});
formatter.result({
  "duration": 1090785900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnterLastNameToLastNameField(String)"
});
formatter.result({
  "duration": 1100449200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA2 8FG",
      "offset": 18
    }
  ],
  "location": "BankStepdefs.iEnterPostcodeToPostcodeField(String)"
});
formatter.result({
  "duration": 1096636100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 67987800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 37
    }
  ],
  "location": "BankStepdefs.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "duration": 2991300,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "duration": 16804600,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 63982100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dipak Patel",
      "offset": 10
    }
  ],
  "location": "BankStepdefs.iSelectCustomerNameWhichAddedBefore(String)"
});
formatter.result({
  "duration": 487420500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iSelectCurrency(String)"
});
formatter.result({
  "duration": 200457600,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 65471700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully",
      "offset": 37
    }
  ],
  "location": "BankStepdefs.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "duration": 4888300,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "duration": 16957400,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnHomeButton()"
});
formatter.result({
  "duration": 2102056000,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 63496700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dipak Patel",
      "offset": 10
    }
  ],
  "location": "BankStepdefs.iSelectCustomerNameWhichAddedBefore(String)"
});
formatter.result({
  "duration": 289311100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 77785800,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnDepositTab()"
});
formatter.result({
  "duration": 1089127200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 16
    }
  ],
  "location": "BankStepdefs.iEnterAmount(String)"
});
formatter.result({
  "duration": 1082000000,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnDepositButton()"
});
formatter.result({
  "duration": 1108371400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Successful",
      "offset": 33
    }
  ],
  "location": "BankStepdefs.iShouldAbleToVerifyMessage(String)"
});
formatter.result({
  "duration": 36959500,
  "status": "passed"
});
formatter.after({
  "duration": 655105600,
  "status": "passed"
});
formatter.before({
  "duration": 2275050700,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "User as a customer should be able to withdraw money successfully",
  "description": "",
  "id": "bank-test;user-as-a-customer-should-be-able-to-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 87,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 89,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "I click on Bank Manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I enter First name \"Dipak\" to First Name field",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I enter Last Name \"Patel\" to Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I enter Postcode \"HA2 8FG\" to Postcode Field",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I click on Add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I am able to see popup display with \"Customer added successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I click on Open Account tab",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "I select \"Dipak Patel\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I select currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I click on Process button",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I am able to see popup display with \"Account created successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I click on home button",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "I click on Customer Login button",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I select \"Dipak Patel\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I click on Deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I enter amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I click on Deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I should able to verify message \"Deposit Successful\"",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "I click on Withdraw tab",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "I enter amount \"50\" in amount to be withdrawn field",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I click Withdraw tab",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I should able to verify withdrawn message \"Transaction successful\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BankStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 33800,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 387890200,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 193590200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dipak",
      "offset": 20
    }
  ],
  "location": "BankStepdefs.iEnterFirstNameToFirstNameField(String)"
});
formatter.result({
  "duration": 1090565700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iEnterLastNameToLastNameField(String)"
});
formatter.result({
  "duration": 1118548200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA2 8FG",
      "offset": 18
    }
  ],
  "location": "BankStepdefs.iEnterPostcodeToPostcodeField(String)"
});
formatter.result({
  "duration": 1084536300,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 71053600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 37
    }
  ],
  "location": "BankStepdefs.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "duration": 2570200,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "duration": 18850900,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 70907400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dipak Patel",
      "offset": 10
    }
  ],
  "location": "BankStepdefs.iSelectCustomerNameWhichAddedBefore(String)"
});
formatter.result({
  "duration": 517177300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 19
    }
  ],
  "location": "BankStepdefs.iSelectCurrency(String)"
});
formatter.result({
  "duration": 185176500,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 63334300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully",
      "offset": 37
    }
  ],
  "location": "BankStepdefs.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "duration": 3725900,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "duration": 5659100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnHomeButton()"
});
formatter.result({
  "duration": 2075192000,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 68511000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dipak Patel",
      "offset": 10
    }
  ],
  "location": "BankStepdefs.iSelectCustomerNameWhichAddedBefore(String)"
});
formatter.result({
  "duration": 395104300,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 62100500,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnDepositTab()"
});
formatter.result({
  "duration": 1082584200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 16
    }
  ],
  "location": "BankStepdefs.iEnterAmount(String)"
});
formatter.result({
  "duration": 1096992400,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnDepositButton()"
});
formatter.result({
  "duration": 1085853300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Successful",
      "offset": 33
    }
  ],
  "location": "BankStepdefs.iShouldAbleToVerifyMessage(String)"
});
formatter.result({
  "duration": 39313000,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickOnWithdrawTab()"
});
formatter.result({
  "duration": 1095631600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 16
    }
  ],
  "location": "BankStepdefs.iEnterAmountInAmountToBeWithdrawnField(String)"
});
formatter.result({
  "duration": 1097575900,
  "status": "passed"
});
formatter.match({
  "location": "BankStepdefs.iClickWithdrawTab()"
});
formatter.result({
  "duration": 76265800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transaction successful",
      "offset": 43
    }
  ],
  "location": "BankStepdefs.iShouldAbleToVerifyWithdrawnMessage(String)"
});
formatter.result({
  "duration": 40021300,
  "status": "passed"
});
formatter.after({
  "duration": 649846700,
  "status": "passed"
});
});