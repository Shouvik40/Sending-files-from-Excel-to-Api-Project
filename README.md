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
git clone https://github.com/your-username/excel-to-api.git
cd excel-to-api
npm install
node index.js
```
