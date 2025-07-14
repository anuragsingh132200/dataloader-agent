// Generated script for workflow 95263210-fbc8-4d3a-8baa-840995d8116b
// Generated at 2025-07-14T20:05:45.636Z



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
  input_952632_1: "ecrinnresort@gmail.com",
  input_952632_2: "Ecrinn@2025"
};
    
// Step 1: Navigate to URL
console.log("Navigating to: https://app.stayflexi.com/reports/master");
await page.goto("https://app.stayflexi.com/reports/master");
    
// Step 2: Perform action
console.log("Performing action: type 'ecrinnresort@gmail.com' into the email input");
await page.act({
  description: "type 'ecrinnresort@gmail.com' into the email input",
  method: "fill",
  arguments: [variables.input_952632_1],
  selector: "xpath=/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[1]/input[1]"
});
    
// Step 3: Perform action
console.log("Performing action: click the Sign In button");
await page.act({
  description: "click the Sign In button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/button[1]"
});
    
// Step 4: Perform action
console.log("Performing action: type 'Ecrinn@2025' into the password input");
await page.act({
  description: "type 'Ecrinn@2025' into the password input",
  method: "fill",
  arguments: [variables.input_952632_2],
  selector: "xpath=/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/input[1]"
});
    
// Step 5: Perform action
console.log("Performing action: click the SIGN IN button");
await page.act({
  description: "click the SIGN IN button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[4]/button[1]"
});
    
// Step 6: Perform action
console.log("Performing action: click the Go to dashboard button");
await page.act({
  description: "click the Go to dashboard button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]"
});
    
// Step 7: Perform action
console.log("Performing action: click the Stockholm-icons Layout 4-blocks icon");
await page.act({
  description: "click the Stockholm-icons Layout 4-blocks icon",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/span[1]/svg[1]"
});
    
// Step 8: Perform action
console.log("Performing action: click the grid icon in the top navigation bar");
await page.act({
  description: "click the grid icon in the top navigation bar",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/span[1]/svg[1]"
});
    
// Step 9: Navigate to URL
console.log("Navigating to: https://app.stayflexi.com/reports");
await page.goto("https://app.stayflexi.com/reports");
    
// Step 10: Navigate to URL
console.log("Navigating to: https://app.stayflexi.com/reports/master");
await page.goto("https://app.stayflexi.com/reports/master");
    
// Step 11: Navigate to URL
console.log("Navigating to: https://app.stayflexi.com/reports?hotelId=31508");
await page.goto("https://app.stayflexi.com/reports?hotelId=31508");
    
// Step 12: Navigate to URL
console.log("Navigating to: https://app.stayflexi.com/reports?hotelId=31508");
await page.goto("https://app.stayflexi.com/reports?hotelId=31508");
    
// Step 13: Navigate to URL
console.log("Navigating to: https://app.stayflexi.com/dashboard?hotelId=31508");
await page.goto("https://app.stayflexi.com/dashboard?hotelId=31508");
    
// Step 14: Perform action
console.log("Performing action: click the Stockholm-icons Layout 4-blocks icon");
await page.act({
  description: "click the Stockholm-icons Layout 4-blocks icon",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/span[1]/svg[1]"
});
    
// Step 15: Perform action
console.log("Performing action: click the chart icon in the top navigation bar");
await page.act({
  description: "click the chart icon in the top navigation bar",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/ul[1]/li[1]/a[1]/span[1]/svg[1]"
});
    
// Step 16: Navigate to URL
console.log("Navigating to: https://app.stayflexi.com/reports?hotelId=31508");
await page.goto("https://app.stayflexi.com/reports?hotelId=31508");
    
// Step 17: Perform action
console.log("Performing action: click the Master report card");
await page.act({
  description: "click the Master report card",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]"
});
    
// Step 18: Perform action
console.log("Performing action: click the date range selector showing 14 Jul 2025 - 14 Jul 2025");
await page.act({
  description: "click the date range selector showing 14 Jul 2025 - 14 Jul 2025",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]"
});
    
// Step 19: Perform action
console.log("Performing action: click outside the dropdown to close it");
await page.act({
  description: "click outside the dropdown to close it",
  method: "click",
  arguments: [],
  selector: "xpath="
});
    
// Step 20: Perform action
console.log("Performing action: click the date range selector 14 Jul 2025 - 14 Jul 2025");
await page.act({
  description: "click the date range selector 14 Jul 2025 - 14 Jul 2025",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]"
});
    
// Step 21: Perform action
console.log("Performing action: click the Filters Checkout Date button");
await page.act({
  description: "click the Filters Checkout Date button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]"
});
    
// Step 22: Perform action
console.log("Performing action: click the Booking Made Date option");
await page.act({
  description: "click the Booking Made Date option",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[5]/div[3]/ul[1]/li[4]"
});
    
// Step 23: Perform action
console.log("Performing action: click the date range 14 Jul 2025 - 14 Jul 2025");
await page.act({
  description: "click the date range 14 Jul 2025 - 14 Jul 2025",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]"
});
    
// Step 24: Perform action
console.log("Performing action: click the text 14 Jul 2025 - 14 Jul 2025");
await page.act({
  description: "click the text 14 Jul 2025 - 14 Jul 2025",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]"
});
    
// Step 25: Perform action
console.log("Performing action: click outside the dropdown to close it");
await page.act({
  description: "click outside the dropdown to close it",
  method: "click",
  arguments: [],
  selector: "xpath="
});
    
// Step 26: Perform action
console.log("Performing action: click the Booking Made Date option");
await page.act({
  description: "click the Booking Made Date option",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[5]/div[3]/ul[1]/li[4]"
});
    
// Step 27: Perform action
console.log("Performing action: click the date range 14 Jul 2025 - 14 Jul 2025");
await page.act({
  description: "click the date range 14 Jul 2025 - 14 Jul 2025",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]"
});
    
// Step 28: Perform action
console.log("Performing action: click outside the dropdown to close it");
await page.act({
  description: "click outside the dropdown to close it",
  method: "click",
  arguments: [],
  selector: "xpath="
});
    
// Step 29: Perform action
console.log("Performing action: click the date text 14 Jul 2025 - 14 Jul 2025");
await page.act({
  description: "click the date text 14 Jul 2025 - 14 Jul 2025",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]"
});
    
// Step 30: Perform action
console.log("Performing action: click the Generate report button");
await page.act({
  description: "click the Generate report button",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/button[1]"
});
    
// Step 31: Perform action
console.log("Performing action: click the Export as Excel option");
await page.act({
  description: "click the Export as Excel option",
  method: "click",
  arguments: [],
  selector: "xpath=/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/p[3]"
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