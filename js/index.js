$(function(){
  $("a[href='#news']").click(function(){
    $("html,body").animate({
      scrollTop: $("#news").offset().top
    },800)
  })
})

let urldata='https://www.fda.gov.tw/DataAction?startdate=2019/1/1'

let vm = new Vue({
  el: '#app',
  data: {
    news: [],
    isred: true,
    detail: false,
    isblock: false,
    isgrid: true
  },
  mounted: function(){
    $.ajax({
      url: urldata,
      success: function(res){
        vm.news=JSON.parse(res)
      }
    })
  }
})