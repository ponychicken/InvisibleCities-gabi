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
         sym.getSymbol('wegzumhaus').play();
         

      });
      //Edge binding end

      

      

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
         sym.getSymbol('sym_schwarz').play();
         sym.getSymbol('sym_vorzim').getSymbol('sym_vorhang').play();
         sym.$('uberschwarz').hide();

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         // insert code for mouse click here
         
         
         
         
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("part_1.html", "_self");
         
         sym.getComposition().getStage().$('Rectangle').hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15500, function(sym, e) {
         sym.play('loopzoom');

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
   
   //Edge symbol: 'sym_blatt'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${ib}", "click", function(sym, e) {
         // Hide an Element.
         sym.$("ib").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hb}", "click", function(sym, e) {
         // Hide an Element.
         sym.$("hb").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${gb}", "click", function(sym, e) {
         // Hide an Element.
         sym.$("gb").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fb}", "click", function(sym, e) {
         // Hide an Element.
         sym.$("fb").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${eb}", "click", function(sym, e) {
         // Hide an Element.
         sym.$("eb").hide();
         
         
         sym.getSymbol("sym_auge").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${db}", "click", function(sym, e) {
         // Hide an Element.
         sym.$("db").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cb}", "click", function(sym, e) {
         // Hide an Element.
         sym.$("cb").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bb}", "click", function(sym, e) {
         // Hide an Element.
         sym.$("bb").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${a}", "click", function(sym, e) {
         // Hide an Element.
         sym.$("a").hide();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play('loop_blatt');

      });
      //Edge binding end

   })("sym_blatt");
   //Edge symbol end:'sym_blatt'

   //=========================================================
   
   //Edge symbol: 'sym_auge'
   (function(symbolName) {   
   
   })("sym_auge");
   //Edge symbol end:'sym_auge'

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
   
   //Edge symbol: 'sym_maisfeld'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.play("mais");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.play('mais_pre');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9341, function(sym, e) {
         sym.play('mais');

      });
      //Edge binding end

   })("sym_maisfeld");
   //Edge symbol end:'sym_maisfeld'

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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "PART5");