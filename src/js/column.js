(function($){
    var initialContainer = $('.columns'),
        columnItems = $('.columns li'),
        columns = null,
        column = 1; // account for initial column
    function updateColumns(){
        column = 0;
        columnItems.each(function(idx, el){
            if (idx !== 0 && idx > (columnItems.length / columns.length) + (column * idx)){
                column += 1;
            }
            $(columns.get(column)).append(el);
        });
    }
    function setupColumns(){
        columnItems.detach();
        while (column++ < initialContainer.data('columns')){
            initialContainer.clone().insertBefore(initialContainer);
            column++;
        }
        columns = $('.columns');
    }

    $(function(){
        setupColumns();
        updateColumns();
    });
})(jQuery);