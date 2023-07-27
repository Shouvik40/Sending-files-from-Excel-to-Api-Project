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

You can copy and save this content as a .md file (e.g., "README.md") on your local machine. Then, you can upload this "README.md" file to your GitHub repository to serve as the main README documentation for your Excel-to-API project. When uploaded, GitHub will automatically render the Markdown content, displaying it with proper formatting, including headers, tables of contents, and lists.
