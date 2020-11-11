 function sockIO(io) {
    console.log("정상 작동")
    io.on('connection',(socket)=>{
        console.log("user connected")
        socket.on('message',(message)=>{
            const sendData ={
                event:'response',
                data: null
            }

            switch (message.event){
                case 'open':
                    console.log("User is on");
                    break;
                case 'requset' :
                    sendData.Data ="Some Data is Come"
                    socket.send(JSON.stringify(sendData))
                    break;
            }
        });
    })

}


module.exports = sockIO