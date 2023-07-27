# Excel-to-API Project

A Node.js script to read city names from an Excel file and send them as separate API requests.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoint](#api-endpoint)
- [Excel File Format](#excel-file-format)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Description

This project contains a Node.js script that reads city names from an Excel file and sends them as separate API requests using the axios library. The script is designed to handle individual requests even if one fails and logs the city name causing the failure.

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Shouvik40/Sending-files-from-Excel-to-Api-Project#api-endpoint
node index.js

```

2. Install the required dependencies:

```bash
npm install
```

## Usage

1. Prepare your Excel file containing the city names. Ensure the city names are in the first column (column A) of the Excel file.

2. Update the apiEndpoint variable in the index.js file with the actual API endpoint URL where you want to send the city names.

3. Run the script to start sending the city names to the API:

```bash
node index.js
```

# API Endpoint

Before running the script, make sure your API endpoint is up and running to receive the city names as JSON data via POST requests. The script will send each city name individually as a separate API request.

# Excel File Format

The Excel file should be in .xlsx format and contain the city names in the first column (column A) of the first worksheet. Make sure there are no empty cells or additional data in the column.

# Dependencies

This project uses the following dependencies:

- axios: "^0.24.0"
- exceljs: "^4.3.0"

# Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

# License

This project is not licensed.
