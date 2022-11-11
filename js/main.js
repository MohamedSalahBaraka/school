$('#trans').on('change', function () {
    
    if ($(this).val() == 'transform') {
        $('#transform').removeClass('d-none');
    } else { 
        $('#transform').addClass('d-none');
    }
});


$('.edit').on('click', function () {
    let id = $(this).data('id');
    let name = $(this).data('name');
    let tr = $(this).data('tr');
    $('#id').val(id);
    $('#name').val(name);
    $('#tr').val(tr);
    $('#edit-form').removeClass('d-none');
});
$('#edit-grade').on('click', function (e) { 
    e.preventDefault();
    let tr = $('#tr').val();
    $('#table tr:nth-child('+tr+') td:nth-child(4)').html($('#grade').val());
    $('#edit-form')[0].reset();
     $('#edit-form').addClass('d-none');
});


$('#add-subject').on('click', function () { 
    $(this).addClass('d-none');
    $('#add-subject-form').removeClass('d-none');
});
$('#add-subject-form-btn').on('click', function (e) { 
    e.preventDefault();
     var selected = $('#subject').find('option:selected');
    let subject = selected.data('subject');
    let classSubject = selected.data('class');
    $('#table').append('<tr><th></th> <td>'+subject+'</td><td>'+classSubject+'</td><td><button class="btn btn-danger delete" data-id="1">حذف</button></td></tr>');
    $('#add-subject').removeClass('d-none');
    $('#add-subject-form').addClass('d-none');
});