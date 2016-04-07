$(document).ready(function() {
    var table = $('#example').DataTable( {
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

    $( '#searchby').on( 'keyup change', function () {
        var searchText = $('#selectby').val().trim();
        if (searchText ){
            table
            .columns()
            .search( searchText)
            .draw();
        }
    } );
});
