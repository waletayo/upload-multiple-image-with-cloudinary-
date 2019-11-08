function log(tag, value) {
    console.log("-------------------------------------------------------------------------------");

    console.log(tag, value);

    console.log("-------------------------------------------------------------------------------");

}

function apiResponse(success, code, message, data = undefined, server_err = undefined) {
    switch (success) {
        case true: {
            return {
                success: success,
                code: code,
                message: message,
                data: data
            };
        }
        case false: {
            return {
                success: success,
                code: code,
                message: message,
                server_error: server_err
            };
        }
    }
}

module.exports.ApiResponse = apiResponse;
module.exports.log = log;
