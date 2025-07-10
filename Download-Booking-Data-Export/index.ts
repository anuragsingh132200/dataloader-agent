// Generated script for workflow 22a0b4d2-be88-449b-8cde-e9c10cf2470b
// Generated at 2025-07-10T14:29:21.503Z



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
  input_22a0b4_1: "admin",
  input_22a0b4_2: "Wandr@456",
  input_22a0b4_3: "51117",
  input_22a0b4_4: "Wandr@456",
  input_22a0b4_5: "11/04/2025",
  input_22a0b4_6: "10/07/2025"
};
    
// Step 1: Navigate to URL
console.log("Navigating to: https://live.ipms247.com/rcm/#/crsbookings");
await page.goto("https://live.ipms247.com/rcm/#/crsbookings");
    
// Step 2: Perform action
console.log("Performing action: type 'admin' into the username input");
await page.act({
  description: "type 'admin' into the username input",
  method: "fill",
  arguments: [variables.input_22a0b4_1],
  selector: "xpath=/html[1]/body[1]/div[1]/div[1]/div[3]/form[1]/div[4]/label[1]/input[1]"
});
    
// Step 3: Perform action
console.log("Performing action: type 'Wandr@456' into the password input");
await page.act({
  description: "type 'Wandr@456' into the password input",
  method: "fill",
  arguments: [variables.input_22a0b4_2],
  selector: "xpath=/html[1]/body[1]/div[1]/div[1]/div[3]/form[1]/div[4]/label[2]/input[1]"
});
    
// Step 4: Perform action
console.log("Performing action: type '51117' into the property code input");
await page.act({
  description: "type '51117' into the property code input",
  method: "fill",
  arguments: [variables.input_22a0b4_3],
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
console.log("Performing action: click the Channel Manager Extranet button");
await page.act({
  description: "click the Channel Manager Extranet button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/div[1]/div[3]/div[3]/div[3]/button[2]"
});
    
// Step 8: Perform action
console.log("Performing action: type 'Wandr@456' into the password input");
await page.act({
  description: "type 'Wandr@456' into the password input",
  method: "fill",
  arguments: [variables.input_22a0b4_4],
  selector: "xpath=/html[1]/body[1]/div[4]/md-dialog[1]/div[2]/div[1]/md-input-container[1]/form[1]/input[1]"
});
    
// Step 9: Perform action
console.log("Performing action: click the UNLOCK button");
await page.act({
  description: "click the UNLOCK button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[4]/md-dialog[1]/div[4]/button[1]"
});
    
// Step 10: Perform action
console.log("Performing action: click the menu button in the top left");
await page.act({
  description: "click the menu button in the top left",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/header[1]/md-toolbar[1]/button[1]"
});
    
// Step 11: Perform action
console.log("Performing action: click CRS Bookings in the sidebar");
await page.act({
  description: "click CRS Bookings in the sidebar",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/md-sidenav[1]/md-content[1]/md-list[2]/md-list-item[4]/button[1]"
});
    
// Step 12: Perform action
console.log("Performing action: click the Property List dropdown");
await page.act({
  description: "click the Property List dropdown",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/md-input-container[1]/md-select[1]"
});
    
// Step 13: Perform action
console.log("Performing action: click ALL option in the dropdown");
await page.act({
  description: "click ALL option in the dropdown",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[4]/md-select-menu[1]/md-content[1]/md-option[1]"
});
    
// Step 14: Perform action
console.log("Performing action: click the FILTER button");
await page.act({
  description: "click the FILTER button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[1]/div[2]/div[3]/button[1]"
});
    
// Step 15: Perform action
console.log("Performing action: click the From date field in Stay Date section");
await page.act({
  description: "click the From date field in Stay Date section",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[2]/div[10]/div[1]/md-datepicker[1]/div[1]/input[1]"
});
    
// Step 16: Perform action
console.log("Performing action: clear and type date in the From date field");
await page.act({
  description: "clear and type date in the From date field",
  method: "fill",
  arguments: [variables.input_22a0b4_5],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[2]/md-datepicker[1]/div[1]/input[1]"
});
    
// Step 17: Perform action
console.log("Performing action: click the To date field");
await page.act({
  description: "click the To date field",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[3]/md-datepicker[1]/div[1]/input[1]"
});
    
// Step 18: Perform action
console.log("Performing action: clear and type today's date in the To date field");
await page.act({
  description: "clear and type today's date in the To date field",
  method: "fill",
  arguments: [variables.input_22a0b4_6],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[3]/md-datepicker[1]/div[1]/input[1]"
});
    
// Step 19: Perform action
console.log("Performing action: click the SEARCH button to apply the filter");
await page.act({
  description: "click the SEARCH button to apply the filter",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[2]/div[12]/button[1]"
});
    
// Step 20: Perform action
console.log("Performing action: click the MANAGE COLUMNS button");
await page.act({
  description: "click the MANAGE COLUMNS button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[1]/div[2]/div[3]/md-menu[1]/button[1]"
});
    
// Step 21: Perform action
console.log("Performing action: click the CLOSE button");
await page.act({
  description: "click the CLOSE button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[5]/md-menu-content[1]/div[1]/button[2]"
});
    
// Step 22: Perform action
console.log("Performing action: click the FILTER button");
await page.act({
  description: "click the FILTER button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[1]/div[2]/div[3]/button[1]"
});
    
// Step 23: Perform action
console.log("Performing action: click the SEARCH button");
await page.act({
  description: "click the SEARCH button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[2]/div[12]/button[1]"
});
    
// Step 24: Perform action
console.log("Performing action: click the export/download button in the top right");
await page.act({
  description: "click the export/download button in the top right",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/main[1]/md-content[1]/div[1]/md-content[1]/form[1]/div[1]/div[1]/div[1]/div[2]/div[4]/button[1]"
});
    
// Step 25: Perform action
console.log("Performing action: click the Select all fields checkbox");
await page.act({
  description: "click the Select all fields checkbox",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[6]/md-dialog[1]/form[1]/md-dialog-content[1]/div[1]/div[3]/md-checkbox[1]"
});
    
// Step 26: Perform action
console.log("Performing action: click the EXPORT button");
await page.act({
  description: "click the EXPORT button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[6]/md-dialog[1]/form[1]/md-dialog-actions[1]/div[1]/button[2]"
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