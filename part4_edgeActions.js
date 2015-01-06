/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("part5.html", "_self");

      });
      //Edge binding end

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.play();
         
         reset = setTimeout(function(){
         	window.location.reload();
         }, 60000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "touchstart", function(sym, e) {
         clearTimeout(reset);
         reset = setTimeout(function(){
         	window.location.reload();
         }, 60000);
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "PART4");