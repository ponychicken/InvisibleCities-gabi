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
      
      
      

      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         function preloadImage(url)
         {
             var img=new Image();
             img.src="images/vorhangani.png";
             img.src="images/waldani.png";
         }
         
         reset = setTimeout(function(){
         	window.location.reload();
         }, 60000);
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${uberschwarz}", "click", function(sym, e) {
         sym.$('uberschwarz').hide();
         sym.getSymbol('sym_schwarz').play();
         sym.getSymbol('sym_vorzim').getSymbol('sym_vorhang').play();

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         sym.getComposition().getStage().$('sym_menschen').hide();
         sym.getComposition().getStage().$('sym_vorzim').hide();
         sym.getComposition().getStage().$('sym_hintergrund').hide();
         sym.getComposition().getStage().$('sym_ausblick').hide();
         
         
         sym.getComposition().getStage().$('Rectangle').hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15500, function(sym, e) {
         sym.play('loopzoom');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${endeStriche}", "click", function(sym, e) {
         sym.$("endeStriche").hide();
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${sym_menschen}", "click", function(sym, e) {
         sym.getComposition().getStage().$('sym_menschen').hide();
         sym.getComposition().getStage().$('sym_vorzim').hide();
         sym.getComposition().getStage().$('sym_hintergrund').hide();
         sym.getComposition().getStage().$('sym_ausblick').hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${StageA}", "touchstart", function(sym, e) {
         clearTimeout(reset);
         reset = setTimeout(function(){
         	window.location.reload();
         }, 60000);
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'sym_vorhang'
   (function(symbolName) {   
   
   })("sym_vorhang");
   //Edge symbol end:'sym_vorhang'

   //=========================================================
   
   //Edge symbol: 'sym_schwarz'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // Hide an Element.
         sym.getComposition().getStage().$("sym_schwarz").hide();

      });
      //Edge binding end

   })("sym_schwarz");
   //Edge symbol end:'sym_schwarz'

   //=========================================================
   
   //Edge symbol: 'sym_ausblick'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15162, function(sym, e) {
         sym.play('huhsontherun');

      });
      //Edge binding end

   })("sym_ausblick");
   //Edge symbol end:'sym_ausblick'

   //=========================================================
   
   //Edge symbol: 'sym_zimmer'
   (function(symbolName) {   
   
   })("sym_zimmer");
   //Edge symbol end:'sym_zimmer'

   //=========================================================
   
   //Edge symbol: 'sym_vorzim'
   (function(symbolName) {   
   
      

   })("sym_vorzim");
   //Edge symbol end:'sym_vorzim'

   //=========================================================
   
   //Edge symbol: 'sym_huhliegenkopf'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play('loophuhn1');

      });
      //Edge binding end

   })("sym_huhliegenkopf");
   //Edge symbol end:'sym_huhliegenkopf'

   //=========================================================
   
   //Edge symbol: 'sym_mais'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("part1.html", "_self");

      });
      //Edge binding end

   })("sym_mais");
   //Edge symbol end:'sym_mais'

   //=========================================================
   
   //Edge symbol: 'sym_menschen'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4662, function(sym, e) {
         sym.play('loopylooo');

      });
      //Edge binding end

   })("sym_menschen");
   //Edge symbol end:'sym_menschen'

   //=========================================================
   
   //Edge symbol: 'sym_hintergrund'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16500, function(sym, e) {
         sym.play('loopausblick');

      });
      //Edge binding end

   })("sym_hintergrund");
   //Edge symbol end:'sym_hintergrund'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "PART6");