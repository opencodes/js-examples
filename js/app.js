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
                	console.log(row)
                    return data +' ('+ row[1]+')';
                },
                "targets": 1
            },
            { "visible": false,  "targets": [ 3 ] }
        ]
    } );
} );