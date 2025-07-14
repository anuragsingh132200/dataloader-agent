// Generated script for workflow 11d41fb6-1b45-4e24-9d9e-2ce49d13f833
// Generated at 2025-07-14T19:10:33.073Z



import { Stagehand } from "@browserbasehq/stagehand";
import { z } from 'zod';
import StagehandConfig from "./stagehand.config.js";

// Stagehand configuration

async function runWorkflow() {
  let stagehand: Stagehand | null = null;
  
  try {
    // Initialize Stagehand
    console.log("Initializing Stagehand...");
    stagehand = new Stagehand(StagehandConfig);
    await stagehand.init();
    console.log("Stagehand initialized successfully.");
    
    // Get the page instance
    const page = stagehand.page;
    if (!page) {
      throw new Error("Failed to get page instance from Stagehand");
    }
    
    
    const variables = {
  input_11d41f_1: "Arival@munjoh.com",
  input_11d41f_2: "Hlmor@2025",
  input_11d41f_3: "31572",
  input_11d41f_4: "Arival@munjoh.com",
  input_11d41f_5: "Hlmor@2025",
  input_11d41f_6: "16/04/2025"
};
    
// Step 1: Navigate to URL
console.log("Navigating to: https://live.ipms247.com/rcm/#/crsbookings");
await page.goto("https://live.ipms247.com/rcm/#/crsbookings");
    
// Step 2: Perform action
console.log("Performing action: type 'Arival@munjoh.com' into the username input");
await page.act({
  description: "type 'Arival@munjoh.com' into the username input",
  method: "fill",
  arguments: [variables.input_11d41f_1],
  selector: "xpath=/html[1]/body[1]/div[1]/div[1]/div[3]/form[1]/div[4]/label[1]/input[1]"
});
    
// Step 3: Perform action
console.log("Performing action: type 'Hlmor@2025' into the password input");
await page.act({
  description: "type 'Hlmor@2025' into the password input",
  method: "fill",
  arguments: [variables.input_11d41f_2],
  selector: "xpath=/html[1]/body[1]/div[1]/div[1]/div[3]/form[1]/div[4]/label[2]/input[1]"
});
    
// Step 4: Perform action
console.log("Performing action: type '31572' into the property code input");
await page.act({
  description: "type '31572' into the property code input",
  method: "fill",
  arguments: [variables.input_11d41f_3],
  selector: "xpath=/html[1]/body[1]/div[1]/div[1]/div[3]/form[1]/div[4]/label[5]/input[1]"
});
    
// Step 5: Perform action
console.log("Performing action: click the SIGN IN button");
await page.act({
  description: "click the SIGN IN button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/div[1]/div[3]/form[1]/div[4]/button[1]"
});
    
// Step 6: Perform action
console.log("Performing action: click the Renew Later button");
await page.act({
  description: "click the Renew Later button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[2]/button[1]"
});
    
// Step 7: Perform action
console.log("Performing action: type 'Arival@munjoh.com' into the recovery email input");
await page.act({
  description: "type 'Arival@munjoh.com' into the recovery email input",
  method: "fill",
  arguments: [variables.input_11d41f_4],
  selector: "xpath=/html[1]/body[1]/div[1]/div[1]/div[3]/div[3]/div[2]/div[1]/label[1]/input[1]"
});
    
// Step 8: Perform action
console.log("Performing action: click the Save button");
await page.act({
  description: "click the Save button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/div[1]/div[3]/div[3]/div[2]/div[1]/button[1]"
});
    
// Step 9: Perform action
console.log("Performing action: click the Channel Manager Extranet button");
await page.act({
  description: "click the Channel Manager Extranet button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/div[1]/div[3]/div[3]/div[3]/button[2]"
});
    
// Step 10: Perform action
console.log("Performing action: type 'Hlmor@2025' into the password input");
await page.act({
  description: "type 'Hlmor@2025' into the password input",
  method: "fill",
  arguments: [variables.input_11d41f_5],
  selector: "xpath=/html[1]/body[1]/div[4]/md-dialog[1]/div[2]/div[1]/md-input-container[1]/form[1]/input[1]"
});
    
// Step 11: Perform action
console.log("Performing action: click the UNLOCK button");
await page.act({
  description: "click the UNLOCK button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[4]/md-dialog[1]/div[4]/button[1]"
});
    
// Step 12: Perform action
console.log("Performing action: click the menu button in the top left");
await page.act({
  description: "click the menu button in the top left",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/header[1]/md-toolbar[1]/button[1]"
});
    
// Step 13: Perform action
console.log("Performing action: click CRS Bookings in the sidebar");
await page.act({
  description: "click CRS Bookings in the sidebar",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/md-sidenav[1]/md-content[1]/md-list[2]/md-list-item[4]/button[1]"
});
    
// Step 14: Perform action
console.log("Performing action: click the Property List dropdown");
await page.act({
  description: "click the Property List dropdown",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/button[1]"
});
    
// Step 15: Perform action
console.log("Performing action: click the dropdown arrow next to Property List");
await page.act({
  description: "click the dropdown arrow next to Property List",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/button[1]"
});
    
// Step 16: Perform action
console.log("Performing action: click the property listbox");
await page.act({
  description: "click the property listbox",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/md-input-container[1]/md-select[1]"
});
    
// Step 17: Perform action
console.log("Performing action: click ALL option in the dropdown");
await page.act({
  description: "click ALL option in the dropdown",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[4]/md-select-menu[1]/md-content[1]/md-option[1]"
});
    
// Step 18: Perform action
console.log("Performing action: click the FILTER button");
await page.act({
  description: "click the FILTER button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[1]/div[2]/div[3]/button[1]"
});
    
// Step 19: Perform action
console.log("Performing action: click the From date field under Created");
await page.act({
  description: "click the From date field under Created",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[2]/md-datepicker[1]/div[1]/input[1]"
});
    
// Step 20: Perform action
console.log("Performing action: clear and type '16/04/2025' into the From date field");
await page.act({
  description: "clear and type '16/04/2025' into the From date field",
  method: "fill",
  arguments: [variables.input_11d41f_6],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[2]/md-datepicker[1]/div[1]/input[1]"
});
    
// Step 21: Perform action
console.log("Performing action: click the SEARCH button");
await page.act({
  description: "click the SEARCH button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[2]/div[12]/button[1]"
});
    
// Step 22: Perform action
console.log("Performing action: click the Export button");
await page.act({
  description: "click the Export button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[1]/div[2]/div[4]/button[1]"
});
    
// Step 23: Perform action
console.log("Performing action: click the Select all fields checkbox");
await page.act({
  description: "click the Select all fields checkbox",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[5]/md-dialog[1]/form[1]/md-dialog-content[1]/div[1]/div[3]/md-checkbox[1]"
});
    
// Step 24: Perform action
console.log("Performing action: click the Extra Charges checkbox");
await page.act({
  description: "click the Extra Charges checkbox",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[5]/md-dialog[1]/form[1]/md-dialog-content[1]/div[1]/div[4]/div[1]/div[1]/md-checkbox[1]"
});
    
// Step 25: Perform action
console.log("Performing action: click the Tax Inclusive checkbox");
await page.act({
  description: "click the Tax Inclusive checkbox",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[5]/md-dialog[1]/form[1]/md-dialog-content[1]/div[1]/div[4]/div[1]/div[2]/md-checkbox[1]"
});
    
// Step 26: Perform action
console.log("Performing action: click the EXPORT button");
await page.act({
  description: "click the EXPORT button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[5]/md-dialog[1]/form[1]/md-dialog-actions[1]/div[1]/button[2]"
});
    
    
    console.log("Workflow completed successfully");
    return { success: true };
  } catch (error) {
    console.error("Workflow failed:", error);
    return { success: false, error };
  } finally {
    // Clean up
    if (stagehand) {
      console.log("Closing Stagehand connection.");
      try {
        await stagehand.close();
      } catch (err) {
        console.error("Error closing Stagehand:", err);
      }
    }
  }
}


// Single execution
runWorkflow().then((result) => {
  console.log('Execution result:', result);
  process.exit(result.success ? 0 : 1);
});


runWorkflow();