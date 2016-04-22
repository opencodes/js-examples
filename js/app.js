$(document).ready(function() {

    

    

    $.fn.wfDataTable = function (options) {       

        $.extend( true, $.fn.dataTable.defaults, options);
 
        // Greenify the collection based on the settings variable.
        return $(this).DataTable({"sDom": options.sDom});
    }

    var table = $('#example').wfDataTable( {

        "ajax": "js/objects.txt",
        "columns": [
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "extn" },
            { "data": "start_date" },
            { "data": "salary" },
            { "data": "extn" }            
        ],
        "sDom": '<"top">rt<"bottom"p><"clear">',
        "columnDefs": [
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    return '<a href="index.html/id/'+row.extn+'" >'+ data +'</a>';
                },
                "targets": 0
            },
            {
               
                "render": function ( data, type, row ) {
                    return '<button type="button" >Suspend</button>';
                },
                "targets": 6
            }
        ]
    } );

    $('#searchby').on( 'keyup change', function () {
        var col = $('#selectby').val().trim();
        var searchText = $('#searchby').val().trim();
        console.log(searchText, col)
        if (searchText ){
            table
            .column(col)
            .search( searchText)
            .draw();
        }else{

            table.fnFilterClear();
        }
    });

});
