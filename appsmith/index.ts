// Generated script for workflow b4ae4834-4cc5-44cf-962f-892f2be2d84a
// Generated at 2025-07-14T19:35:33.948Z



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
  input_b4ae48_1: "madhur@sliceinn.in",
  input_b4ae48_2: "Madhur-d00",
  input_b4ae48_3: "06/15/25",
  input_b4ae48_4: "07/15/2025",
  input_b4ae48_5: "15/07/25",
  input_b4ae48_6: "15/06/25",
  input_b4ae48_7: "15/06/25",
  input_b4ae48_8: "15/06/25",
  input_b4ae48_9: "15/06/25",
  input_b4ae48_10: "15/06/25"
};
    
// Step 1: Navigate to URL
console.log("Navigating to: https://appsmith.stayflexi.com/user/login");
await page.goto("https://appsmith.stayflexi.com/user/login");
    
// Step 2: Perform action
console.log("Performing action: type 'madhur@sliceinn.in' into the email input");
await page.act({
  description: "type 'madhur@sliceinn.in' into the email input",
  method: "fill",
  arguments: [variables.input_b4ae48_1],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]"
});
    
// Step 3: Perform action
console.log("Performing action: type 'Madhur-d00' into the password input");
await page.act({
  description: "type 'Madhur-d00' into the password input",
  method: "fill",
  arguments: [variables.input_b4ae48_2],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]"
});
    
// Step 4: Perform action
console.log("Performing action: click the Sign in button");
await page.act({
  description: "click the Sign in button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[2]/form[1]/div[3]/button[1]"
});
    
// Step 5: Perform action
console.log("Performing action: click the slice-inn-group-report workspace");
await page.act({
  description: "click the slice-inn-group-report workspace",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[3]/section[1]/div[1]/div[1]/div[1]/div[2]/span[1]/span[1]/a[1]"
});
    
// Step 6: Perform action
console.log("Performing action: click the MasterReport application");
await page.act({
  description: "click the MasterReport application",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[3]/section[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]"
});
    
// Step 7: Perform action
console.log("Performing action: click the start date input field");
await page.act({
  description: "click the start date input field",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/span[1]/span[1]/span[1]/div[1]/input[1]"
});
    
// Step 8: Perform action
console.log("Performing action: type '06/15/25' into the start date input");
await page.act({
  description: "type '06/15/25' into the start date input",
  method: "fill",
  arguments: [variables.input_b4ae48_3],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/span[1]/span[1]/span[1]/div[1]/input[1]"
});
    
// Step 9: Perform action
console.log("Performing action: click the end date input field");
await page.act({
  description: "click the end date input field",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/span[1]/span[1]/span[1]/div[1]/input[1]"
});
    
// Step 10: Perform action
console.log("Performing action: type '07/15/2025' into the end date input field");
await page.act({
  description: "type '07/15/2025' into the end date input field",
  method: "fill",
  arguments: [variables.input_b4ae48_4],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/span[1]/span[1]/span[1]/div[1]/input[1]"
});
    
// Step 11: Perform action
console.log("Performing action: click the 'Tue Jul 15 2025' date cell");
await page.act({
  description: "click the 'Tue Jul 15 2025' date cell",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[7]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[3]/div[3]"
});
    
// Step 12: Perform action
console.log("Performing action: click the 'check-in' filter button");
await page.act({
  description: "click the 'check-in' filter button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[2]/span[1]/span[1]/div[1]/button[1]"
});
    
// Step 13: Perform action
console.log("Performing action: click the 'booking made on' option");
await page.act({
  description: "click the 'booking made on' option",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[9]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/a[1]/div[1]"
});
    
// Step 14: Perform action
console.log("Performing action: click the end date input field");
await page.act({
  description: "click the end date input field",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/span[1]/span[1]/span[1]/div[1]/input[1]"
});
    
// Step 15: Perform action
console.log("Performing action: type '15/07/25' into the end date input field");
await page.act({
  description: "type '15/07/25' into the end date input field",
  method: "fill",
  arguments: [variables.input_b4ae48_5],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/span[1]/span[1]/span[1]/div[1]/input[1]"
});
    
// Step 16: Perform action
console.log("Performing action: click the Submit button");
await page.act({
  description: "click the Submit button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/button[1]"
});
    
// Step 17: Perform action
console.log("Performing action: click the Today button");
await page.act({
  description: "click the Today button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[8]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/button[1]"
});
    
// Step 18: Perform action
console.log("Performing action: click the 'Tue Jul 15 2025' date cell");
await page.act({
  description: "click the 'Tue Jul 15 2025' date cell",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[8]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[3]/div[3]"
});
    
// Step 19: Perform action
console.log("Performing action: click the start date input field");
await page.act({
  description: "click the start date input field",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/span[1]/span[1]/span[1]/div[1]/input[1]"
});
    
// Step 20: Perform action
console.log("Performing action: type '15/06/25' into the start date input field");
await page.act({
  description: "type '15/06/25' into the start date input field",
  method: "fill",
  arguments: [variables.input_b4ae48_6],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/span[1]/span[1]/span[1]/div[1]/input[1]"
});
    
// Step 21: Perform action
console.log("Performing action: click the Submit button");
await page.act({
  description: "click the Submit button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/button[1]"
});
    
// Step 22: Perform action
console.log("Performing action: click the 'Sun Jun 15 2025' date cell");
await page.act({
  description: "click the 'Sun Jun 15 2025' date cell",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[7]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[3]/div[1]"
});
    
// Step 23: Perform action
console.log("Performing action: click the Today button");
await page.act({
  description: "click the Today button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[7]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/button[1]"
});
    
// Step 24: Perform action
console.log("Performing action: click the start date input field");
await page.act({
  description: "click the start date input field",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/span[1]/span[1]/span[1]/div[1]/input[1]"
});
    
// Step 25: Perform action
console.log("Performing action: type '15/06/25' into the start date input field");
await page.act({
  description: "type '15/06/25' into the start date input field",
  method: "fill",
  arguments: [variables.input_b4ae48_7],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/span[1]/span[1]/span[1]/div[1]/input[1]"
});
    
// Step 26: Perform action
console.log("Performing action: click the 'Sun Jun 15 2025' date cell");
await page.act({
  description: "click the 'Sun Jun 15 2025' date cell",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[7]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[3]/div[1]"
});
    
// Step 27: Perform action
console.log("Performing action: click the 'MasterReport' text");
await page.act({
  description: "click the 'MasterReport' text",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[2]"
});
    
// Step 28: Perform action
console.log("Performing action: click the start date input field");
await page.act({
  description: "click the start date input field",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/span[1]/span[1]/span[1]/div[1]/input[1]"
});
    
// Step 29: Perform action
console.log("Performing action: type '15/06/25' into the start date input field");
await page.act({
  description: "type '15/06/25' into the start date input field",
  method: "fill",
  arguments: [variables.input_b4ae48_8],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/span[1]/span[1]/span[1]/div[1]/input[1]"
});
    
// Step 30: Perform action
console.log("Performing action: click the Submit button");
await page.act({
  description: "click the Submit button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/button[1]"
});
    
// Step 31: Perform action
console.log("Performing action: click the 'Sun Jun 15 2025' date cell");
await page.act({
  description: "click the 'Sun Jun 15 2025' date cell",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[7]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[3]/div[1]"
});
    
// Step 32: Perform action
console.log("Performing action: click the Clear button");
await page.act({
  description: "click the Clear button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[7]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/button[2]"
});
    
// Step 33: Perform action
console.log("Performing action: click the start date input field");
await page.act({
  description: "click the start date input field",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/span[1]/span[1]/span[1]/div[1]/input[1]"
});
    
// Step 34: Perform action
console.log("Performing action: type '15/06/25' into the start date input field");
await page.act({
  description: "type '15/06/25' into the start date input field",
  method: "fill",
  arguments: [variables.input_b4ae48_9],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/span[1]/span[1]/span[1]/div[1]/input[1]"
});
    
// Step 35: Perform action
console.log("Performing action: click the 'Sun Jun 15 2025' date cell");
await page.act({
  description: "click the 'Sun Jun 15 2025' date cell",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[7]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[3]/div[1]"
});
    
// Step 36: Perform action
console.log("Performing action: click the Submit button");
await page.act({
  description: "click the Submit button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/button[1]"
});
    
// Step 37: Perform action
console.log("Performing action: click the 'MasterReport' text");
await page.act({
  description: "click the 'MasterReport' text",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[2]"
});
    
// Step 38: Perform action
console.log("Performing action: click the start date input field");
await page.act({
  description: "click the start date input field",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/span[1]/span[1]/span[1]/div[1]/input[1]"
});
    
// Step 39: Perform action
console.log("Performing action: type '15/06/25' into the start date input field");
await page.act({
  description: "type '15/06/25' into the start date input field",
  method: "fill",
  arguments: [variables.input_b4ae48_10],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/span[1]/span[1]/span[1]/div[1]/input[1]"
});
    
// Step 40: Perform action
console.log("Performing action: click the 'Sun Jun 15 2025' date cell");
await page.act({
  description: "click the 'Sun Jun 15 2025' date cell",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[7]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[3]/div[1]"
});
    
// Step 41: Perform action
console.log("Performing action: click the Clear button");
await page.act({
  description: "click the Clear button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[7]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/button[2]"
});
    
// Step 42: Perform action
console.log("Performing action: click the Download text");
await page.act({
  description: "click the Download text",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/span[1]/span[1]/div[1]"
});
    
// Step 43: Perform action
console.log("Performing action: click the 'Download as Excel' text");
await page.act({
  description: "click the 'Download as Excel' text",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[10]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]"
});
    
// Step 44: Perform action
console.log("Performing action: click the 'Download as CSV' text");
await page.act({
  description: "click the 'Download as CSV' text",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[3]/div[2]/section[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/span[1]/span[1]/div[1]"
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