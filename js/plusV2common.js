//QRcode滑動
$(document).ready(function () {
  $('.switch').toggle(function () {
    $('.QRcodeSlide .content, .switch').addClass('action');
  }, function () {
    $('.QRcodeSlide .content, .switch').removeClass('action');
  });
  $('.searchBtn').toggle(function () {
    $('.searchBtn, .searchBar').addClass('action');
  }, function () {
    $('.searchBtn, .searchBar').removeClass('action');
  });
  $('.language-selector-container').toggle(function () {
      $('.language-selector-container').addClass('action');
    }, function () {
      $('.language-selector-container').removeClass('action');
    });
});
//search tool
function doSearch(keyWord) {
  $(".gamesBox--title").each(function () {
    var isFind = searchKeyWord(keyWord, $(this).text());
    if (isFind) {
      $(this).parent().parent().show();
    } else {
      $(this).parent().parent().hide();
    }
  });
}
function searchKeyWord(keyWord, valWord) {
  if (keyWord.length == 0) {
    return true;
  }
  result = valWord.indexOf(keyWord);
  if (result >= 0) {
    return true;
  }
  return false;
}
function clearKeyword() {
  doSearch("");
}
//
//================= 頁面捲動事件 =================
$(window).scroll(function () {
  var scrollVal = $(this).scrollTop();
  if (scrollVal > 50) {
    $(".box_go_top").removeClass("hide");
  } else {
    $(".box_go_top").addClass("hide");
  }
});
//================= 登入區塊控制_開始 =================
$(function () {
  //關閉--執行項目
  function btn_x() {
    $("body").removeAttr("style");
    $(".box_popup.member").removeClass("box_in").addClass("box_out");
    $(".box_popup.member .box_popup_container_main").removeClass("box_flipInY");
    $(".box_popup.register").removeClass("box_in").addClass("box_out");
    $(".box_popup.register .box_popup_container_main").removeClass("box_flipInY");
    $(".box_popup.mode").removeClass("box_in").addClass("box_out");
    $(".box_popup.mode .box_popup_container_main").removeClass("box_flipInY");
    $(".box_popup.about").removeClass("box_in").addClass("box_out");
    $(".box_popup.about .box_popup_container_main").removeClass("box_flipInY");
  }
  //漢堡--執行項目
  function hamburger_active() {
    $(".hamburger").hide().removeClass("flipInY").addClass("flipOutX");
    $(".hamburger_close").show().removeClass("flipOutX").addClass("flipInY");
    $(".main-nav").addClass("main-nav-active");
  }
  //漢堡關閉--執行項目
  function hamburger_close() {
    $(".hamburger").show().removeClass("flipOutX").addClass("flipInY");
    $(".hamburger_close").hide().removeClass("flipInY").addClass("flipOutX");
    $(".main-nav").removeClass("main-nav-active");
  }
  if (window.innerWidth <= 812) {
  //點擊--漢堡
  $(".hamburger").on("click", hamburger_active);
  //點擊--漢堡關閉
  $(".hamburger_close").on("click", hamburger_close);
  //點擊--漢堡選項
  $(".container li").on("click", hamburger_close);

  //點擊--關閉
  $(".btn_x").on("click", btn_x);
  $(".layer_click").on("click", btn_x);
  $(".text_intro_btn a").on("click", btn_x);
  }
});