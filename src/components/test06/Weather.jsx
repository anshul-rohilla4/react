function Weather() {

    const temp=15;

    return(
        <div>

            {temp<15? "it's cold":""}
            {15<=temp &&temp<=25? "it's nice":""}
            {temp>25? "it's hot":""}

        </div>
    )
}

export default Weather;
