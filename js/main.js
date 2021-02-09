const main = () => {
	const getRemainTime = deadline => {
        let now = new Date(),
            remainTime = (new Date(deadline) - now + 1000) / 1000,
            remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
            remainMinutes = ("0" + Math.floor(remainTime / 60 % 60)).slice(-2),
            remainHours = ("0" + Math.floor(remainTime / 3600 % 24)).slice(-2),
            remainDays = Math.floor(remainTime / (3600 * 24))

        return {
            remainTime,
            remainSeconds,
            remainMinutes,
            remainHours,
            remainDays
        }
    }

    // console.log(getRemainTime('Feb 10 2021 15:45:41 GMT-0400'))

    const countdown = (deadline, element, finalMessage) => {
        const el = document.getElementById(element)

        const timerUpdate = setInterval( () => {
            let time = getRemainTime(deadline)
            
            el.innerHTML = `Días: ${time.remainDays} Horas: ${time.remainHours} 
            Minutos: ${time.remainMinutes} Segundos: ${time.remainSeconds}`

            if(time.remainTime <= 1){
                clearInterval(timerUpdate)
                el.innerHTML = finalMessage
            }

        } , 1000)
    }

    countdown('Feb 10 2021 15:45:41 GMT-0400', "clock", "Ha finalizado la cuenta")
}

main()
