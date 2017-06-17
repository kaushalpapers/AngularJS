function WebSocketService() {
    var ws;

    return {
        connect: function (nbkid) {
            nbkid = nbkid;
            var address = getWsAddress();
            ws = new WebSocket(address);

            var a = false;
              ws.onmessage = function (input) {

                // if (a == true && input.substring(0, 10) == 'st')
                //     return;

                var msg = input.substring(0, 10);
                if (msg == 'SYM_UNIVERSE') {
                    var result = JSON.parse(msg);
                    $rootScope.$broadcast('onSymUniverse', result);
                }


                //GET_LABMDA{ 'val': '0.3' }
                var msg = input.substring(0, 9);
                if (msg == 'GET_LAMBDA') {
                    var result = JSON.parse(msg);
                    $rootScope.$broadcast('onGetLambda', result);
                }


                try {
                    //[{ 'stsdfsf': 'sdfsdf'}]
                    var result = JSON.parse(input);
                    $rootScope.$broadcast('onMessage', result);
                } catch (ex) {

                }

            }

        }

    }
}