<template>
  <div class="boxnav" id="echarts5"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'chart5',
  data() {
    return {
      myChart: null,
      option: {},
      flag: null
    }
  },
  methods: {
    chartInit() {
      this.option = {
        series: [
          {
            name: '监控域名',
            type: 'pie',
            startAngle: 90,
            center: ['10%', '25%'],
            radius: ['40', '35'],
            hoverAnimation: false,
            data: [
              {
                value: 100,
                name: '运行时间' + '\n' + 216 + '天',
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#30cfd0'
                    },
                    {
                      offset: 1,
                      color: '#330867'
                    }
                  ])
                }
              },
              {
                value: 100,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#a8edea'
                    },
                    {
                      offset: 1,
                      color: '#fed6e3'
                    }
                  ])
                }
              },
              {
                value: 100,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#5ee7df'
                    },
                    {
                      offset: 1,
                      color: '#b490ca'
                    }
                  ])
                }
              }
            ],
            labelLine: {
              show: false
            },
            label: {
              show: true,
              position: 'center',
              color: 'white'
            }
          },
          {
            name: '监控副图',
            type: 'pie',
            center: ['10%', '25%'],
            radius: ['33', '30'],
            hoverAnimation: false,
            animation: true,
            startAngle: 360,
            data: this.pie(),
            labelLine: {
              show: false
            },
            label: {
              show: false
            }
          },

          {
            name: 'NVPS',
            type: 'pie',
            startAngle: 90,
            center: ['37%', '25%'],
            radius: ['40', '35'],
            hoverAnimation: false,
            data: [
              {
                value: 100,
                name: 'NVPS' + '\n' + 97.5,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#30cfd0'
                    },
                    {
                      offset: 1,
                      color: '#330867'
                    }
                  ])
                }
              },
              {
                value: 100,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#a8edea'
                    },
                    {
                      offset: 1,
                      color: '#fed6e3'
                    }
                  ])
                }
              },
              {
                value: 100,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#5ee7df'
                    },
                    {
                      offset: 1,
                      color: '#b490ca'
                    }
                  ])
                }
              }
            ],
            labelLine: {
              show: false
            },
            label: {
              show: true,
              position: 'center',
              color: 'white'
            }
          },
          {
            name: 'NVPS副图',
            type: 'pie',
            center: ['37%', '25%'],
            radius: ['33', '30'],
            hoverAnimation: false,
            animation: true,
            startAngle: 360,
            data: this.pie(),
            labelLine: {
              show: false
            },
            label: {
              show: false
            }
          },

          {
            name: '域名响应',
            type: 'pie',
            startAngle: 90,
            center: ['64%', '25%'],
            radius: ['40', '35'],
            hoverAnimation: false,
            data: [
              {
                value: 100,
                name: '域名响应' + '\n' + 100 + 'ms',
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#30cfd0'
                    },
                    {
                      offset: 1,
                      color: '#330867'
                    }
                  ])
                }
              },
              {
                value: 100,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#a8edea'
                    },
                    {
                      offset: 1,
                      color: '#fed6e3'
                    }
                  ])
                }
              },
              {
                value: 100,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#5ee7df'
                    },
                    {
                      offset: 1,
                      color: '#b490ca'
                    }
                  ])
                }
              }
            ],
            labelLine: {
              show: false
            },
            label: {
              show: true,
              position: 'center',
              color: 'white'
            }
          },
          {
            name: '域名响应副图',
            type: 'pie',
            center: ['64%', '25%'],
            radius: ['33', '30'],
            hoverAnimation: false,
            animation: true,
            startAngle: 360,
            data: this.pie(),
            labelLine: {
              show: false
            },
            label: {
              show: false
            }
          },

          {
            name: '在线用户',
            type: 'pie',
            startAngle: 90,
            center: ['91%', '25%'],
            radius: ['40', '35'],
            hoverAnimation: false,
            data: [
              {
                value: 100,
                name: '在线用户' + '\n' + 5 + '个',
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#30cfd0'
                    },
                    {
                      offset: 1,
                      color: '#330867'
                    }
                  ])
                }
              },
              {
                value: 100,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#a8edea'
                    },
                    {
                      offset: 1,
                      color: '#fed6e3'
                    }
                  ])
                }
              },
              {
                value: 100,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#5ee7df'
                    },
                    {
                      offset: 1,
                      color: '#b490ca'
                    }
                  ])
                }
              }
            ],
            labelLine: {
              show: false
            },
            label: {
              show: true,
              position: 'center',
              color: 'white'
            }
          },
          {
            name: '在线用户数副图',
            type: 'pie',
            center: ['91%', '25%'],
            radius: ['33', '30'],
            hoverAnimation: false,
            animation: true,
            startAngle: 360,
            data: this.pie(),
            labelLine: {
              show: false
            },
            label: {
              show: false
            }
          },

          {
            name: '访问会话',
            type: 'pie',
            startAngle: 90,
            center: ['10%', '75%'],
            radius: ['40', '35'],
            hoverAnimation: false,
            data: [
              {
                value: 100,
                name: '访问会话' + '\n' + 35 + '条',
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#30cfd0'
                    },
                    {
                      offset: 1,
                      color: '#330867'
                    }
                  ])
                }
              },
              {
                value: 100,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#a8edea'
                    },
                    {
                      offset: 1,
                      color: '#fed6e3'
                    }
                  ])
                }
              },
              {
                value: 100,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#5ee7df'
                    },
                    {
                      offset: 1,
                      color: '#b490ca'
                    }
                  ])
                }
              }
            ],
            labelLine: {
              show: false
            },
            label: {
              show: true,
              position: 'center',
              color: 'white'
            }
          },
          {
            name: '访问会话副图',
            type: 'pie',
            center: ['10%', '75%'],
            radius: ['33', '30'],
            hoverAnimation: false,
            animation: true,
            startAngle: 360,
            data: this.pie(),
            labelLine: {
              show: false
            },
            label: {
              show: false
            }
          },

          {
            name: '队列积压',
            type: 'pie',
            startAngle: 90,
            center: ['37%', '75%'],
            radius: ['40', '35'],
            hoverAnimation: false,
            data: [
              {
                value: 100,
                name: '队列积压' + '\n' + 0 + '条',
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#30cfd0'
                    },
                    {
                      offset: 1,
                      color: '#330867'
                    }
                  ])
                }
              },
              {
                value: 100,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#a8edea'
                    },
                    {
                      offset: 1,
                      color: '#fed6e3'
                    }
                  ])
                }
              },
              {
                value: 100,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#5ee7df'
                    },
                    {
                      offset: 1,
                      color: '#b490ca'
                    }
                  ])
                }
              }
            ],
            labelLine: {
              show: false
            },
            label: {
              show: true,
              position: 'center',
              color: 'white'
            }
          },
          {
            name: '队列积压副图',
            type: 'pie',
            center: ['37%', '75%'],
            radius: ['33', '30'],
            hoverAnimation: false,
            animation: true,
            startAngle: 360,
            data: this.pie(),
            labelLine: {
              show: false
            },
            label: {
              show: false
            }
          },

          {
            name: '存储使用',
            type: 'pie',
            startAngle: 90,
            center: ['64%', '75%'],
            radius: ['40', '35'],
            hoverAnimation: false,
            data: [
              {
                value: 100,
                name: '存储使用' + '\n' + 5 + '%',
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#30cfd0'
                    },
                    {
                      offset: 1,
                      color: '#330867'
                    }
                  ])
                }
              },
              {
                value: 100,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#a8edea'
                    },
                    {
                      offset: 1,
                      color: '#fed6e3'
                    }
                  ])
                }
              },
              {
                value: 100,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#5ee7df'
                    },
                    {
                      offset: 1,
                      color: '#b490ca'
                    }
                  ])
                }
              }
            ],
            labelLine: {
              show: false
            },
            label: {
              show: true,
              position: 'center',
              color: 'white'
            }
          },
          {
            name: '存储副图',
            type: 'pie',
            center: ['64%', '75%'],
            radius: ['33', '30'],
            hoverAnimation: false,
            animation: true,
            startAngle: 360,
            data: this.pie(),
            labelLine: {
              show: false
            },
            label: {
              show: false
            }
          },

          {
            name: 'Tomat响应',
            type: 'pie',
            startAngle: 90,
            center: ['91%', '75%'],
            radius: ['40', '35'],
            hoverAnimation: false,
            data: [
              {
                value: 100,
                name: 'Tomat响应' + '\n' + 5 + 'ms',
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#30cfd0'
                    },
                    {
                      offset: 1,
                      color: '#330867'
                    }
                  ])
                }
              },
              {
                value: 100,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#a8edea'
                    },
                    {
                      offset: 1,
                      color: '#fed6e3'
                    }
                  ])
                }
              },
              {
                value: 100,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#5ee7df'
                    },
                    {
                      offset: 1,
                      color: '#b490ca'
                    }
                  ])
                }
              }
            ],
            labelLine: {
              show: false
            },
            label: {
              show: true,
              position: 'center',
              color: 'white'
            }
          },
          {
            name: 'Tomat响应副图',
            type: 'pie',
            center: ['91%', '75%'],
            radius: ['33', '30'],
            hoverAnimation: false,
            animation: true,
            startAngle: 360,
            data: this.pie(),
            labelLine: {
              show: false
            },
            label: {
              show: false
            }
          }
        ]
      }
      this.myChart = echarts.init(document.getElementById('echarts5'))
      this.myChart.resize()
      this.myChart.setOption(this.option)
    },
    pageAdapter() {
      this.myChart.resize()
    },
    pie() {
      let dataArr = []
      for (var i = 0; i < 8; i++) {
        if (i % 2 === 0) {
          dataArr.push({
            name: (i + 1).toString(),
            value: 60,
            itemStyle: {
              color: 'rgb(63,150,175)'
            },
            labelLine: {
              show: false
            }
          })
        } else {
          dataArr.push({
            name: (i + 1).toString(),
            value: 10,
            itemStyle: {
              color: 'black'
            }
          })
        }
      }
      return dataArr
    },
    doing() {
      if (this.flag) {
        this.flag = null
      } else {
        this.flag = setInterval(() => {
          for (let index = 0; index < 16; index++) {
            if (index % 2 === 0) {
              this.option.series[index].startAngle =
                this.option.series[index].startAngle + 5
            } else {
              this.option.series[index].startAngle =
                this.option.series[index].startAngle - 5
            }
            this.myChart.setOption(this.option)
          }
          // this.option.series[0].startAngle =
          //   this.option.series[0].startAngle + 5
          // this.option.series[1].startAngle =
          //   this.option.series[1].startAngle - 5
          // this.myChart.setOption(this.option)
        }, 200)
      }
    }

    // updateChart() {
    //   var option = {
    //     series: [
    //       {
    //         name: 'xx',
    //         type: 'pie',
    //         center: ['10%', '25%'],
    //         radius: ['34', '30'],
    //         hoverAnimation: false,
    //         data: [
    //           {
    //             value: 100,
    //             name: '延迟' + '\n' + 100 + 'ms',
    //             itemStyle: {
    //               color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
    //                 {
    //                   offset: 0,
    //                   color: '#f6d365'
    //                 },
    //                 {
    //                   offset: 1,
    //                   color: '#fda085'
    //                 }
    //               ])
    //             }
    //           }
    //         ],
    //         labelLine: {
    //           show: false
    //         },
    //         label: {
    //           position: 'center',
    //           color: '#f6d365'
    //         }
    //       }
    //     ]
    //   }
    //   this.myChart.setOption(option)
    // }
  },
  mounted() {
    this.chartInit()
    window.addEventListener('resize', this.pageAdapter)
    setTimeout(() => {
      this.chartInit()
    }, 200)
    // this.$nextTick(() => {
    //   this.doing()
    // })
  }
}
</script>

<style scoped></style>
