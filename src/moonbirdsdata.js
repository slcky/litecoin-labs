// data.js

import Papa from 'papaparse';

const csvData = `Asset #,Inscription #,Image,Background,Feathers,Eyes,Headwear,Beak,Outerwear
1,3687,https://litecoin.earlyordies.com/content/13f9e646cf1ab2a3679420a49dbaf7aff0a1fd3a47f274b7202664777b589790i0,Light Blue,Black,Angry,Bandana,Black,Diamond Necklace`;

const parsedData = Papa.parse(csvData, { header: true }).data;

export default parsedData;