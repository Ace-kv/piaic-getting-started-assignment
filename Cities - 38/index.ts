const describe_city = (city: string, par_country: string = "Pakistan") => {
    console.log(`${city} is in ${par_country}`);
}

describe_city("Lahore")
describe_city("Karachi")
describe_city("Gaza", "Palestine")