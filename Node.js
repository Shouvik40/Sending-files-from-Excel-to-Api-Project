// if the code finds and error it will stop and not post the other files to the api

const axios = require("axios");
const ExcelJS = require("exceljs");

const apiEndpoint = "http://localhost:3000/api/v1/cities";

async function sendExcelDataToAPI() {
  try {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile("./City.xlsx"); // Replace with the path to your Excel file

    const worksheet = workbook.getWorksheet(1); // Assuming the data is in the first worksheet

    for (let i = 2; i <= worksheet.rowCount; i++) {
      const rowData = worksheet.getRow(i).getCell(1).value; // Assuming city names are in the first column (column A)

      // Create a separate payload for each city name
      const payload = { name: rowData };

      // Send the API request using axios
      const response = await axios.post(apiEndpoint, payload);

      console.log(
        `City name "${rowData}" sent successfully. Response:`,
        response.data
      );
    }
  } catch (error) {
    console.error("Error sending Excel data to API:", error.message);
  }
}

sendExcelDataToAPI();
