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
      
      
      Symbol.bindElementAction(compId, symbolName, "${wald}", "click", function(sym, e) {
         // Hide an Element.
         sym.$("wald").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uberwaldani}", "click", function(sym, e) {
         sym.getSymbol('wegzumhaus').play();
         sym.$('uberwaldani').hide();
         sym.$('Rectangle').hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${wegzumhaus}", "click", function(sym, e) {
         sym.$("wegzumhaus").hide();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         reset = setTimeout(function(){
         	window.location.reload();
         }, 60000);

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${uberschwarz}", "click", function(sym, e) {
         sym.getSymbol('sym_schwarz').play();
         sym.getSymbol('sym_vorzim').getSymbol('sym_vorhang').play();
         
         sym.$('uberschwarz').hide();

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol('sym_vorzim').play();
         sym.getSymbol('sym_ausblick').play('ausblick_zoom');
         sym.getSymbol('sym_ausblick').getSymbol('sym_huhpickenkopfkoroer').play();
         sym.getSymbol('sym_ausblick').getSymbol('sym_huhpickenganzani').play();
         sym.getSymbol('sym_ausblick').getSymbol('sym_huhliegenkopf').play();
         
         sym.getSymbol('sym_schwarz').deleteSymbol();
         
         sym.getComposition().getStage().$('Rectangle2').hide;
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         // Hide an Element.
         sym.$("Rectangle3").hide();
         // Hide an Element.
         sym.$("sym_ausblick").hide();
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("part2.html", "_self");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${testanfang}", "click", function(sym, e) {
         // Hide an Element.
         sym.$("testanfang").hide();
         
         

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
   
   //Edge symbol: 'wegzumhaus'
   (function(symbolName) {   
   
   })("wegzumhaus");
   //Edge symbol end:'wegzumhaus'

   //=========================================================
   
   //Edge symbol: 'sym_schwarz'
   (function(symbolName) {   
   
   })("sym_schwarz");
   //Edge symbol end:'sym_schwarz'

   //=========================================================
   
   //Edge symbol: 'sym_ausblick'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36000, function(sym, e) {
         sym.play('huhsontherun');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15750, function(sym, e) {
         sym.play('wasser');

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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // Hide an Element.
         sym.getComposition().getStage().$('sym_vorzim').hide();

      });
      //Edge binding end

   })("sym_vorzim");
   //Edge symbol end:'sym_vorzim'

   //=========================================================
   
   //Edge symbol: 'sym_huhliegen'
   (function(symbolName) {   
   
   })("sym_huhliegen");
   //Edge symbol end:'sym_huhliegen'

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
   
   //Edge symbol: 'sym_huhflugelganzani'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3116, function(sym, e) {
         sym.play('loophuhflugelganzani2');
         

      });
      //Edge binding end

   })("sym_huhflugelganzani");
   //Edge symbol end:'sym_huhflugelganzani'

   //=========================================================
   
   //Edge symbol: 'sym_huhpickenganzani'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3717, function(sym, e) {
         sym.play('loophuhpickenganzani3');

      });
      //Edge binding end

   })("sym_huhpickenganzani");
   //Edge symbol end:'sym_huhpickenganzani'

   //=========================================================
   
   //Edge symbol: 'sym_huhpickenkopfkoroer'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play('loophuhn4');

      });
      //Edge binding end

   })("sym_huhpickenkopfkoroer");
   //Edge symbol end:'sym_huhpickenkopfkoroer'

   //=========================================================
   
   //Edge symbol: 'sym_wolke'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.play('loop_wolke');

      });
      //Edge binding end

   })("sym_wolke");
   //Edge symbol end:'sym_wolke'

   //=========================================================
   
   //Edge symbol: 'sym_blattbaum'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.play('loop_blatt');

      });
      //Edge binding end

   })("sym_blattbaum");
   //Edge symbol end:'sym_blattbaum'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "PART1");