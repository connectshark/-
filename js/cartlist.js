$(function(){
    var $li = $('ul.tabtitle li');
        $($li. eq(0) .addClass('active').find('a').attr('href')).siblings('.tab-inner').hide();
    
        $li.click(function(){
            $($(this).find('a'). attr ('href')).show().siblings ('.tab-inner').hide();
            $(this).addClass('active'). siblings ('.active').removeClass('active');
        });
    });




    // $(function(){
    //     //获取点击事件的对象
    //     $(".nav li").click(function(){
    //         //获取要显示或隐藏的对象
    //         var divShow = $(".content").children('.list');
    //         //判断当前对象是否被选中，如果没选中的话进入if循环
    //         if (!$(this).hasClass('selected')) {
    //             //获取当前对象的索引
    //             var index = $(this).index();
    //             //当前对象添加选中样式并且其同胞移除选中样式；
    //             $(this).addClass('selected').siblings('li').removeClass('selected');
    //             //索引对应的div块显示
    //             $(divShow[index]).show();
    //             //索引对应的div块的同胞隐藏
    //             $(divShow[index]).siblings('.list').hide();
    //         }
    //     });
    // });   