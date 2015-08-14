"use strict";

var sql = require('mssql'); 

module.exports = function(options) {
                            
	var externals = {};

    externals.prepare = function(statementToExecute) {
        sql.connect(options, function (err) {
            if (err) throw err;
            var request = new sql.Request();
            statementToExecute(request);
        });
    };
    
	return externals;
}();

