
option =  {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow' 
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        }
  },
  yAxis: {
    type: 'category',
    data: ['金龙中巴', '多功能车'],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        }
  },
  series: [
    {
      name: '故障检测',
      type: 'bar',
      stack: 'total',
      itemStyle: {
          color: '#13DCDC',
      },
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 302]
    },
    {
      name: '规则识别',
      type: 'bar',
      stack: 'total',
      itemStyle: {
          color: '#2FB8F7',
      },
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132]
    },
    {
      name:"总数",
      type: 'bar',
      barWidth:"0%",
      stack:"total",
      label:{
        show:true,
        color: 'black',
        formatter:function(){
          return 
        },
        position:"right"
      },
      data:[0,0,0,0,0,0,0]
    }
  ]
};

var series = option.series
function getSum (params) {
   let dataValue = 0
   for (let i = 0; i < series.length; i++) {
      dataValue += series[i].data[params.dataIndex]
   }
   return dataValue
}
series[series.length - 1].label.formatter = getSum