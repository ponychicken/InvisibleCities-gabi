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
         
         
         $( document ).ready(function() {
         		$("PART5").css("background-color", "#000" );
         
         		});
         reset = setTimeout(function(){
         	window.location.reload();
         }, 60000);

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${wegzumhaus}", "click", function(sym, e) {
         sym.$("wegzumhaus").hide();

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
         sym.getComposition().getStage().$("Rectangle2").hide();
         
         if (sym.getSymbol('sym_schwarz')) {
         	sym.getSymbol('sym_schwarz').deleteSymbol();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         sym.getSymbol('sym_ausblick').getSymbol('sym_sprung').play('loop_sprung');
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         sym.getSymbol('sym_mais').play();
         
         // Hide an Element.
         sym.$("sym_ausblick").hide();
         sym.getComposition().getStage().$("Rectangle3").hide;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${striche2}", "click", function(sym, e) {
         sym.$("striche2").hide();
         sym.getSymbol('wegzumhaus').play();
         

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
   
   //Edge symbol: 'sym_zimmer'
   (function(symbolName) {   
   
   })("sym_zimmer");
   //Edge symbol end:'sym_zimmer'

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
   
   //Edge symbol: 'sym_mais'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("part6.html", "_self");

      });
      //Edge binding end

   })("sym_mais");
   //Edge symbol end:'sym_mais'

   //=========================================================
   
   //Edge symbol: 'wegzumhaus_1'
   (function(symbolName) {   
   
   })("wegzumhaus_1");
   //Edge symbol end:'wegzumhaus_1'

   //=========================================================
   
   //Edge symbol: 'sym_vorzim_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.getComposition().getStage().$('sym_vorzim').hide();

      });
      //Edge binding end

   })("sym_vorzim_1");
   //Edge symbol end:'sym_vorzim_1'

   //=========================================================
   
   //Edge symbol: 'sym_sprung'
   (function(symbolName) {   
   
   })("sym_sprung");
   //Edge symbol end:'sym_sprung'

   //=========================================================
   
   //Edge symbol: 'sym_baumgesicht'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13561, function(sym, e) {
         sym.play('loop_auge');

      });
      //Edge binding end

   })("sym_baumgesicht");
   //Edge symbol end:'sym_baumgesicht'

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
   
   //Edge symbol: 'sym_ausblick_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15750, function(sym, e) {
         sym.play('wasser');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36000, function(sym, e) {
         sym.play('huhsontherun');

      });
      //Edge binding end

   })("sym_ausblick_1");
   //Edge symbol end:'sym_ausblick_1'

   //=========================================================
   
   //Edge symbol: 'sym_maisfeldhinten'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.play('loop_mais');

      });
      //Edge binding end

   })("sym_maisfeldhinten");
   //Edge symbol end:'sym_maisfeldhinten'

   //=========================================================
   
   //Edge symbol: 'sym_baummenschen'
   (function(symbolName) {   
   
   })("sym_baummenschen");
   //Edge symbol end:'sym_baummenschen'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "PART5");