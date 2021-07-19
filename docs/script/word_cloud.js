var text = 'ужну,вступ,ужну Ужгород,ужну вступ,інформаційні технології,програміст,вступна кампанія,університет програмування,c#,системний аналіз,вступ 2021,Ужгород,c# курси,java,programmer,програмування курси,математика,математика університет,javascript,робототехніка,аналіз даних,programming,coding,логічне мислення,вища освіта математика,спеціальність 124,математична логіка,Artificial Intelligence,штучний інтелект,математичний факультет';

function changeChartHeight(){
    var width = screen.width;
    var height = screen.height;
    if (width>=700 && width <= 2000){
        return '20%';
    }
    if (width<500 && width < 700) {
        return '40%'
    } if (width <= 500) {
        return '100%';
    }
}
var lines = text.split(',');
var data = Highcharts.reduce(lines, function (arr, word) {
        var obj = Highcharts.find(arr, function (obj) {
            return obj.name === word;
        });
        if (obj) {
            obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);

Highcharts.chart('container', {
    series: [{
        type: 'wordcloud',
        data: data,
    }],
    title: {
        text: ''
    },
    chart: {
        backgroundColor: '#222831',
        height: changeChartHeight(),
    },
    tooltip: { enabled: false },
   
    // labels: {
    //     style: {
    //         fontSize: '5px'
    //     }
    // }
   
});