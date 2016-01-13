Meteor.startup(function() {
    if (Devices.find().count() === 0) {
        var protocol = {
            prefix: [2],
            postfix: [3]
        };

        var edisons = [
            {
                '_id': 'cc3200',
                'name': 'LED Lighting Control',
                'avatar': 'svg-2',
                'isAlive': false,
                'leds': [
                    { '_id': 3, 'type': 'cc3200-dim', 'name': '안방', 'value': [0, 0, 0], 'protocol': protocol }
                ]
            },
            {
                '_id': 'my_edison',
                'name': 'My Edison',
                'avatar': 'svg-11',
                'isAlive': false,
                'leds': [
                    { '_id': 'dim1', 'type': 'dim', 'name': '안방', 'value': 0 },
                    { '_id': 'dim2', 'type': 'dim', 'name': '거실', 'value': 0 },
                    { '_id': 'dim3', 'type': 'dim', 'name': '침실', 'value': 0 }
                ]
            }
        ];

        for (var i = 0; i < edisons.length; i++) {
            Devices.insert(edisons[i]);
        }
    }
});
