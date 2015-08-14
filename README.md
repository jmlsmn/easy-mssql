Getting Started
Options Configurations
```javascript
var options = {
    'server' :'xxxx.xxxx.xxxx',
    'user' : 'xxxx',
    'password' :'xxxx',
    'database' : 'xxxx',
    'pool': {
            'max': 10,
            'min': 0,
            'idleTimeoutMillis': 30000
    },
    'multipleStatements': true
}
```

Select Query
```javascript
function(callback) {
    db.prepare(function(request) {
        request.query('select * from Customers', function(err, recordset) {
            if (err) throw err;
            callback(recordset);
        });
    });
}
```

Stored Procedures
```javascript
function(callback) {
    db.prepare(function(request) {
        request.input('Id', db.sql.UniqueIdentifier, '00000000-0000-0000-0000-000000000000');
        request.input('Active', db.sql.Bit, 1);
        request.execute('xxxxxxxxx', function(err, recordsets, returnValue) {
            if (err) throw err;
            callback(recordsets);
        });
    });
}
```