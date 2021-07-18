var text = 'системний аналіз,ужну,ужну вступ,вступ 2021,програмування,вступ,інформаційні технології,програміст,вступна кампанія,c#,python,робототехніка,програмування Ужну, математика';

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
        backgroundColor: '#222831'
    },
    tooltip: { enabled: false },
   
});