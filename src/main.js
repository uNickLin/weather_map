// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

var place_data=[
  {
    tag: "taipei_city",
    place: "臺北市",
    low: 21,
    high: 23,
    weather: "Rainy"
  },
  {
    tag: "new_taipei_city",
    place: "新北市",
    low: 19,
    high: 22,
    weather: "Sunny"
  },
  {
    tag: "taichung_city",
    place: "台中市",
    low: 23,
    high: 25,
    weather: "Cloudy"
  },
  {
    tag: "tainan_city",
    place: "臺南市",
    low: 24,
    high: 26,
    weather: "Sunny"
  },
  {
    tag: "kaohsiung_city",
    place: "高雄市",
    low: 26,
    high: 28,
    weather: "Windy"
  },
  {
    tag: "keelung_city",
    place: "基隆市",
    low: 16,
    high: 19,
    weather: "Rainy"
  },
  {
    tag: "taoyuan_country",
    place: "桃園市",
    low: 20,
    high: 24,
    weather: "Cloudy"
  },
  {
    tag: "hsinchu_city",
    place: "新竹市",
    low: 22,
    high: 25,
    weather: "Sunny"
  },
  {
    tag: "hsinchu_country",
    place: "新竹縣",
    low: 21,
    high: 25,
    weather: "Sunny"
  },
  {
    tag: "miaoli_country",
    place: "苗栗縣",
    low: 19,
    high: 24,
    weather: "Sunny"
  },
  {
    tag: "changhua_country",
    place: "彰化縣",
    low: 21,
    high: 25,
    weather: "Windy"
  },
  {
    tag: "nantou_country",
    place: "南投縣",
    low: 23,
    high: 26,
    weather: "Cloudy"
  },
  {
    tag: "yunlin_country",
    place: "雲林縣",
    low: 17,
    high: 24,
    weather: "Sunny"
  },
  {
    tag: "chiayi_city",
    place: "嘉義市",
    low: 20,
    high: 23,
    weather: "Sunny"
  },
  {
    tag: "chiayi_country",
    place: "嘉義縣",
    low: 18,
    high: 21,
    weather: "Rainy"
  },
  {
    tag: "pingtung_country",
    place: "屏東縣",
    low: 25,
    high: 29,
    weather: "Sunny"
  },
  {
    tag: "yilan_country",
    place: "宜蘭縣",
    low: 17,
    high: 20,
    weather: "Rainy"
  },
  {
    tag: "hualien_country",
    place: "花蓮縣",
    low: 20,
    high: 23,
    weather: "Sunny"
  },
  {
    tag: "taitung_country",
    place: "台東縣",
    low: 21,
    high: 23,
    weather: "Sunny"
  },
  {
    tag: "penghu_country",
    place: "澎湖縣",
    low: 18,
    high: 21,
    weather: "Sunny"
  },
  {
    tag: "kinmen_country",
    place: "金門縣",
    low: 19,
    high: 22,
    weather: "Sunny"
  },
  {
    tag: "lienchiang_country",
    place: "連江縣",
    low: 20,
    high: 22,
    weather: "Windy"
  }
]
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  data: {
    filter: "",
    place_data: place_data
  },
  computed: {
    hover_area: function(){
      var vobj = this
      var result = this.place_data.filter(function(obj){
        return obj.tag == vobj.filter
      })
      if(result.length == 0){
        return null
      }
      return result[0]
    }
  }
})

$("path").mouseenter(function(e){
  var tag_name = $(this).attr("data-name")
  vm.filter = tag_name
})
