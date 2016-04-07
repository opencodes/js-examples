$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": "js/objects.txt",
        "columns": [
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "extn" },
            { "data": "start_date" },
            { "data": "salary" }
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
            }
        ]
    } );
} );
