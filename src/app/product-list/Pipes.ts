// @Component({
//     selector: 'currency-pipe',
//     template: `<div>
//       <!--output '$0.26'-->
//       <p>A: {{ a | currency }}</p>
  
//       <!--output 'CA$0.26'-->
//       <p>A: {{ a | currency: 'CAD' }}</p>
  
//       <!--output 'CAD0.26'-->
//       <p>A: {{ a | currency: 'CAD' : 'code' }}</p>
  
//       <!--output 'CA$0,001.35'-->
//       <p>B: {{ b | currency: 'CAD' : 'symbol' : '4.2-2' }}</p>
  
//       <!--output '$0,001.35'-->
//       <p>B: {{ b | currency: 'CAD' : 'symbol-narrow' : '4.2-2' }}</p>
  
//       <!--output '0 001,35 CA$'-->
//       <p>B: {{ b | currency: 'CAD' : 'symbol' : '4.2-2' : 'fr' }}</p>
  
//       <!--output 'CLP1' because CLP has no cents-->
//       <p>B: {{ b | currency: 'CLP' }}</p>
//     </div>`,
//   })
//   export class CurrencyPipeComponent {
//     a: number = 0.259;
//     b: number = 1.3495;
//   }