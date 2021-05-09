import React, {  useState } from "react";

import { SpreadSheets, Worksheet, Column } from "@grapecity/spread-sheets-react";

import * as GC from "@grapecity/spread-sheets";
import { useEffect } from "react";
//import "@grapecity/spread-sheets-print";
//import "@grapecity/spread-sheets-pdf";
//import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css';

import '@grapecity/spread-sheets-charts';


GC.Spread.Sheets.LicenseKey = window["evalKey_V14"];


export default function SpreadSheet() {

    const [spreadBackColor, setSpreadBackColor] = useState('aliceblue');
    const [sheetName, setSheetName] = useState('Empolyees');
    const [hostStyle, setHostStyle] = useState({
      width: '100%',
      height: '700px'
    });
    const dataArr = [];

    
    const [data, setData] = useState([]);
    const [columnWidth, setColumnWidth] = useState(200);
   

    useEffect(()=>{
      async function getData(){

      
      const res = await fetch("data.json");
      const data = await res.json();
  
      setData(data.employees);

      console.log(data);
    }

    getData();
      
   },[]);


  let dataArray = [
    ["", '2012', '2013', '2014', '2015', '2016', '2017'],
    ["Chrome", 0.3782, 0.4663, 0.4966, 0.5689, 0.6230, 0.6360],
    ["FireFox", 0.2284, 0.2030, 0.1801, 0.1560, 0.1531, 0.1304],
    ["IE", 0.3214, 0.2491, 0.2455, 0.1652, 0.1073, 0.0834],
  ];


   const workbookInit = (spread) => {

    let chartSheet = spread.getSheet(1);
    chartSheet.setArray(0, 0, dataArray);
    

    chartSheet.suspendPaint();
    let chart = chartSheet.charts.add(('Chart1'), GC.Spread.Sheets.Charts.ChartType.line, 30, 85, 800, 350, "A1:H4", GC.Spread.Sheets.Charts.RowCol.rows);
    let title = chart.title();
    title.text = "Browser Market Share";
    title.fontSize = 18;
    chart.title(title);
    chart.axes({primaryValue:{format:"0%"}});

    spread.resumePaint();
    
   };
   
    return (
      <SpreadSheets backColor={spreadBackColor} hostStyle={hostStyle} workbookInitialized={workbookInit}>
        <Worksheet name={sheetName} dataSource={data}>
          <Column dataField='preferredFullName' width={columnWidth}>></Column>
          <Column dataField='jobTitleName' width={columnWidth}>></Column>

          <Column dataField='phoneNumber' width={columnWidth}></Column>
          <Column dataField='region' width={columnWidth}></Column>
        </Worksheet>
        <Worksheet name= "Browser Market Share">
        </Worksheet>
        
      </SpreadSheets>);
  
  }
