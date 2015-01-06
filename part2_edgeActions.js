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

      

      

      

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         // insert code to be run at timeline end here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${StageB}", "touchstart", function(sym, e) {
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
         
         
         // Hide an Element.
         sym.$("hb").hide();
         
         
         // Hide an Element.
         sym.$("ib").hide();
         
         
         // Hide an Element.
         sym.$("sym_gesicht").hide();
         
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("part3.html", "_self");
         

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

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
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
   
   //Edge symbol: 'sym_gesicht'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4940, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('loop_gesicht');

      });
      //Edge binding end

   })("sym_gesicht");
   //Edge symbol end:'sym_gesicht'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "PART2");