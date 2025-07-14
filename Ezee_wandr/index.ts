// Generated script for workflow a32dfa32-278c-45bf-aac5-16ae116af691
// Generated at 2025-07-14T18:46:09.500Z



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
  input_a32dfa_1: "admin",
  input_a32dfa_2: "Wandr@456",
  input_a32dfa_3: "51117",
  input_a32dfa_4: "Wandr@456",
  input_a32dfa_5: "16/04/2025"
};
    
// Step 1: Navigate to URL
console.log("Navigating to: https://live.ipms247.com/rcm/#/crsbookings");
await page.goto("https://live.ipms247.com/rcm/#/crsbookings");
    
// Step 2: Perform action
console.log("Performing action: type 'admin' into the Username input");
await page.act({
  description: "type 'admin' into the Username input",
  method: "fill",
  arguments: [variables.input_a32dfa_1],
  selector: "xpath=/html[1]/body[1]/div[1]/div[1]/div[3]/form[1]/div[4]/label[1]/input[1]"
});
    
// Step 3: Perform action
console.log("Performing action: type 'Wandr@456' into the Password input");
await page.act({
  description: "type 'Wandr@456' into the Password input",
  method: "fill",
  arguments: [variables.input_a32dfa_2],
  selector: "xpath=/html[1]/body[1]/div[1]/div[1]/div[3]/form[1]/div[4]/label[2]/input[1]"
});
    
// Step 4: Perform action
console.log("Performing action: type '51117' into the Property Code input");
await page.act({
  description: "type '51117' into the Property Code input",
  method: "fill",
  arguments: [variables.input_a32dfa_3],
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
console.log("Performing action: click the Channel Manager Extranet button");
await page.act({
  description: "click the Channel Manager Extranet button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/div[1]/div[3]/div[3]/div[3]/button[2]"
});
    
// Step 7: Perform action
console.log("Performing action: type 'Wandr@456' into the password textbox");
await page.act({
  description: "type 'Wandr@456' into the password textbox",
  method: "fill",
  arguments: [variables.input_a32dfa_4],
  selector: "xpath=/html[1]/body[1]/div[4]/md-dialog[1]/div[2]/div[1]/md-input-container[1]/form[1]/input[1]"
});
    
// Step 8: Perform action
console.log("Performing action: click the UNLOCK button");
await page.act({
  description: "click the UNLOCK button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[4]/md-dialog[1]/div[4]/button[1]"
});
    
// Step 9: Perform action
console.log("Performing action: click the menu button on the top left");
await page.act({
  description: "click the menu button on the top left",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/header[1]/md-toolbar[1]/button[1]"
});
    
// Step 10: Perform action
console.log("Performing action: click CRS Bookings");
await page.act({
  description: "click CRS Bookings",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/md-sidenav[1]/md-content[1]/md-list[2]/md-list-item[4]/button[1]"
});
    
// Step 11: Perform action
console.log("Performing action: click the Property List dropdown");
await page.act({
  description: "click the Property List dropdown",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/md-input-container[1]/md-select[1]"
});
    
// Step 12: Perform action
console.log("Performing action: click the ALL option");
await page.act({
  description: "click the ALL option",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[4]/md-select-menu[1]/md-content[1]/md-option[1]"
});
    
// Step 13: Perform action
console.log("Performing action: click the FILTER button");
await page.act({
  description: "click the FILTER button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[1]/div[2]/div[3]/button[1]"
});
    
// Step 14: Perform action
console.log("Performing action: click the From date textbox");
await page.act({
  description: "click the From date textbox",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[2]/md-datepicker[1]/div[1]/input[1]"
});
    
// Step 15: Perform action
console.log("Performing action: type '16/04/2025' into the From date textbox");
await page.act({
  description: "type '16/04/2025' into the From date textbox",
  method: "fill",
  arguments: [variables.input_a32dfa_5],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[2]/md-datepicker[1]/div[1]/input[1]"
});
    
// Step 16: Perform action
console.log("Performing action: click the SEARCH button");
await page.act({
  description: "click the SEARCH button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[2]/div[12]/button[1]"
});
    
// Step 17: Perform action
console.log("Performing action: click the Export button");
await page.act({
  description: "click the Export button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[1]/div[2]/div[4]/button[1]"
});
    
// Step 18: Perform action
console.log("Performing action: click the Select all fields checkbox");
await page.act({
  description: "click the Select all fields checkbox",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[5]/md-dialog[1]/form[1]/md-dialog-content[1]/div[1]/div[3]/md-checkbox[1]"
});
    
// Step 19: Perform action
console.log("Performing action: click the Extra Charges checkbox");
await page.act({
  description: "click the Extra Charges checkbox",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[5]/md-dialog[1]/form[1]/md-dialog-content[1]/div[1]/div[4]/div[1]/div[1]/md-checkbox[1]"
});
    
// Step 20: Perform action
console.log("Performing action: click the Tax Inclusive checkbox");
await page.act({
  description: "click the Tax Inclusive checkbox",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[5]/md-dialog[1]/form[1]/md-dialog-content[1]/div[1]/div[4]/div[1]/div[2]/md-checkbox[1]"
});
    
// Step 21: Perform action
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