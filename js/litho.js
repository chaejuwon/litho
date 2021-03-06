;(function($){

    var litho = {
        init:   function(){
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
            this.section10Fn();
            this.footerFn();
        },
        headerFn:function(){
            //네비게이션
            //메인버튼(메인메뉴) - 1 Depth
            //서브메뉴 - 2 Depth
            var $mainBtn = $('#header .main-btn');
            var $sub = $('#header .sub');
            var $navUlLi = $('#nav > ul > li');
         
            //메인메뉴에 마우스 오버시 해당 서브메뉴 보여라 
            $mainBtn.on({
                mouseenter:function(){
                    $(this).next().stop().show();
                }
            });
            //메인메뉴와 서브메뉴 영역을 마우스가 떠나면 해당서브메뉴를 숨겨라
            $navUlLi.on({
                mouseleave:function(){
                    $sub.stop().hide();
                }
            });

            //서브-서브 메뉴 - 3Depth
            //서브 메뉴버튼에 마우스 오버시
            var $subBtn = $('.sub-btn');
            var $subSub = $('.sub-sub');
            var $subDd = $('.sub dd');

            $subBtn.on({
                mouseenter:function(){
                    $subSub.stop().hide();
                    $(this).next().stop().show();                }
            });

            $navUlLi.on({
                mouseleave:function(){
                    $subSub.stop().hide();
                }
            })
        },
        section1Fn:function(){
            //창높이 창너비
            //슬라이드의 너비와 높이를 창높이 창너비로 설정 반응형
            var $slide  = $('#section1 .slide'); // 로딩시 변수 설정
            var $window = $(window);             // 로딩시 변수 설정
            var $winW   = $(window).width();  // 창너비 즉시 반환
            var $winH   = $(window).height(); // 창높이 즉시 반환


                //슬라이드의 너비 높이 설정 완료    
                //로딩시 설정
                function resizeFn(){
                    $winW   = $(window).width();
                    $winH   = $(window).height();
                    $slide.css({width:$winW, height:$winH}); // 즉시 변환 너비 높이 적용 실행
                }
                
                resizeFn(); // 로딩시 실행

                //화면의 크기가 (너비와 높이) 1픽셀만 변경되어도 동작되는 반응형 메소드
                // $window.resize();
                // $window.resize(function(){});
                $window.resize(function(){ // 1px만 바뀌어도 동작 -> resize;
                    resizeFn();
                });


        },
        section2Fn:function(){
            
        },
        section3Fn:function(){
            
        },
        section4Fn:function(){
            
        },
        section5Fn:function(){
            
        },
        section6Fn:function(){
        
        },
        section7Fn:function(){
            
        },
        section8Fn:function(){
            
        },
        section9Fn:function(){
            
        },
        section10Fn:function(){
            
        },
        footerFn:function(){
            
        }
    }; // 객체 끝


    litho.init();

})(jQuery);