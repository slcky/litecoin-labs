// data.js

import Papa from 'papaparse';

const csvData = `Asset #,Inscription #,Image,Background,Body,Eyes,Eyewear,Headwear,Mouth,Outerwear
`;

const parsedData = Papa.parse(csvData, { header: true }).data;

export default parsedData;