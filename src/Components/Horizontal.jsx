import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
    Category, BarSeries
  } from '@syncfusion/ej2-react-charts';
  import * as React from 'react';
   
  let data = [{ x: 'ABHISHEK', y: 30 }, { x: 'NANASO KR', y: 25 }, { x: 'SUMEDHEN', y: 15 }, { x: 'MRSADASH', y: 19 },
  { x: 'ROHIT', y: 31 }, { x: 'SHUBHAM', y: 28 },{ x: 'ROHAN', y: 20 }, { x: 'ANKIT', y: 27 }, { x: 'VIJAY', y: 18 }, { x: 'VINAY', y: 10 },
  ];
   
  class App extends React.Component {
    render() {
      return (<ChartComponent
        primaryXAxis={{
          valueType: "Category",
          title: "RETAILERS NAME"
  
        }}
        primaryYAxis={{
          title: "AMT IN (M)"
        }}
        style={{width:"100%",height:"400px"}}
      >
        <Inject services={[BarSeries, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective fill="#4227B1" border={{radius:"50px"}} dataSource={data} xName='x' yName='y' type='Bar'>
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>);
    }
  }
  export default App;