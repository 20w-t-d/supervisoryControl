<!-- 
	Echarts4����������̶����ǩ����
	�������б��������;���˵����
	value:[['Mon',10],['Tue',52],['Wed',200],['Thu',334],['Fri',390],['Sat',330],['Sun',220]]
-->

<!-- ΪECharts׼��һ���߱���С����ߣ���Dom  wait2seconds -->
<div id='${id}' style="width:${width}px;height:${height}px"></div>

<script type="text/javascript">
var ${id}_dom = document.getElementById('${id}');
var myChart = echarts.init(${id}_dom);
var app = {};
option = null;

var ${id}_data0 = ${id}_splitData(${value});	// ${value}Ϊ[[],[]...]��ʽ������ֵ

function ${id}_splitData(rawData) {
	var categoryData = [];
	var values = []
	for (var i = 0; i < rawData.length; i++) {
		categoryData.push(rawData[i].splice(0, 1)[0]);
		values.push(rawData[i])
	}
	return {
		categoryData: categoryData,
		values: values
	};
}

function ${id}_sValue(index){
	var result = [];
	for (var i = 0, len = ${id}_data0.values.length; i < len; i++) {
		var series = ${id}_data0.values[i][index];
		result.push(series);
	}
	return result;
}
      
option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // ������ָʾ���������ᴥ����Ч
            type: 'shadow'        // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            //data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            data:${id}_data0.categoryData,
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'ֱ�ӷ���',
            type: 'bar',
            barWidth: '60%',
            //data: [10, 52, 200, 334, 390, 330, 220]
            data: ${id}_sValue(0)
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

</script>
