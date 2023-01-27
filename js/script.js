/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	//jquery code here


	// ________________GENERATES TABLE____________________

	var summaryleng = sumdata.length;

	for (var i=0; i<summaryleng; i++) {
		$('.myTable').append('<tr address="'+sumdata[i].address+'" numb="'+i+'"> <td>' + sumdata[i].address + '</td> <td>' + sumdata[i].number_of_violations + '</td>  </tr>')

	}


	// ______________ALLOWS TABLE TO BE SEARCHABLE______________

	$(".search").on("keyup", function() {
	    var value = $(this).val().toLowerCase();

	    $(".myTable tr").filter(function() {

	      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	    });
  	});


	// _________________MAKE THE TABLE DO COOL THINGS!!_______________

$(function() {

  var $table = $('table');

  $table

    // Initialize tablesorter
    // ***********************
    .tablesorter({
      widthFixed: true,
      widgets: ['filter','pager'],

      widgetOptions: {

      	filter_external : '.search',
      	filter_columnFilters : false,

        pager_output: '{startRow} - {endRow} / {totalRows} rows',

        // apply disabled classname to the pager arrows when the rows at either extreme is visible
        pager_updateArrows: true,

        // starting page of the pager (zero based index)
        pager_startPage: 0,

        // Reset pager to this page after filtering; set to desired page number
        // (zero-based index), or false to not change page at filter start
        pager_pageReset: 0,

        // Number of visible rows
        pager_size: 10,

        // f true, child rows will be counted towards the pager set size
        pager_countChildRows: false,

        // Save pager page & size if the storage script is loaded (requires $.tablesorter.storage in jquery.tablesorter.widgets.js)
        pager_savePages: true,

        // Saves tablesorter paging to custom key if defined. Key parameter name
        // used by the $.tablesorter.storage function. Useful if you have
        // multiple tables defined
        pager_storageKey: "tablesorter-pager",

        // if true, the table will remain the same height no matter how many records are displayed. The space is made up by an empty
        // table row set to a height to compensate; default is false
        pager_fixedHeight: true,

        // remove rows from the table to speed up the sort of large tables.
        // setting this to false, only hides the non-visible rows; needed if you plan to add/remove rows with the pager enabled.
        pager_removeRows: true // removing rows in larger tables speeds up the sort


      }

    })



});


  	


	// ________________CHANGES COLOR OF ARROWS________________


	$('.header th').click(function(){
		// $(this).find('.arrow-up').css({'border-bottom-color': 'blue'})
		// $('.header th').not(this).find('.arrow-up').css({'border-bottom-color': 'silver'})
	
		if ($(this).hasClass('tablesorter-headerDesc')) {
			console.log('going up!')
			$(this).find('.arrow-up').css({'border-bottom-color': 'black'})
			$(this).find('.arrow-down').css({'border-top-color': 'silver'})
		} else if ($(this).hasClass('tablesorter-headerAsc')){
			console.log('going down!')
			$(this).find('.arrow-up').css({'border-bottom-color': 'silver'})
			$(this).find('.arrow-down').css({'border-top-color': 'black'})
		} else if ($(this).hasClass('tablesorter-headerUnSorted')) {
			$(this).find('.arrow-up').css({'border-bottom-color':'black'})
			$(this).find('.arrow-down').css({'border-top-color':'silver'})
		}

		$('.header th').not(this).find('.arrow-down').css({'border-top-color': 'silver'})
		$('.header th').not(this).find('.arrow-up').css({'border-bottom-color': 'silver'})

		
	});


	// __________________MODAL_______________________

	$('.myTable tr').click(function(){


		// ACUTAL JQUERY AND CODE MAGIC

		// FOR THE STUFF COMING FROM THE SUMMARY DATA
		var numb = Number($(this).attr('numb'));

		console.log(numb)

			$('.address').html('Address: '+ sumdata[numb].address)
			$('.numberviolations').html('Number of violations: '+ sumdata[numb].number_of_violations)

		
		// FOR THE STUFF COMING FROM INSPECTIONS/TABLE DATA

		var pop = $(this).attr('address');
		console.log(pop)

		var data_filter = tabledata.filter( element => element.address ==pop)
			console.log(data_filter)

		var filtleng = data_filter.length;
		
		for (var i=0; i<filtleng; i++) {
	
	 		$('.violationsdata').append('<h5 class="violationdate">Violation date: '+ data_filter[i].violation_date +'</h5><p class = "inspectionstatus"><span style="font-weight:bold">Inspection status:</span> '+data_filter[i].inspection_status+'</p><p class = "violationstatus"><span style="font-weight:bold">Violation status:</span> '+data_filter[i].violation_status+'</p><p class = "violationstatusdate"><span style="font-weight:bold">Violation status date:</span> '+data_filter[i].violation_status_date+'</p><p class = "violationdesc"><span style="font-weight:bold">Violation description:</span> '+data_filter[i].violation_description+'</p> <p class = "violationdesc"><span style="font-weight:bold">Violation comments:</span> '+data_filter[i].violation_inspector_comments+'</p> <p class = "violationord"><span style="font-weight:bold">Violation ordinance:</span> '+data_filter[i].violation_ordinance+'</p> <p class = "inspectionwaived"><span style="font-weight:bold">Inspection waived:</span> '+data_filter[i].inspection_waived+'</p> <p class = "inspectioncategory"><span style="font-weight:bold">Inspection category:</span> '+data_filter[i].inspection_category+'</p>')

	 	}






		// FADE IN AND FADE OUT
		$('.inspections').fadeIn().css({'overflow':'scroll'})
		$('.back').fadeIn()
		$('body').css({'overflow':'hidden'})
		$('.tablediv').css({'overflow':'hidden'})
		$('.pager').fadeOut()




	});

	$('.back').click(function(){
		$('.inspections').fadeOut()
		$(this).fadeOut()
		$('.inspectionsdata').empty()
		$('body').css({'overflow':'scroll'})
		$('.tablediv').css({'overflow':'scroll'})
		$('.pager').fadeIn()
	});









  	

}); //end document.ready block
