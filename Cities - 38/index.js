var describe_city = function (city, par_country) {
    if (par_country === void 0) { par_country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(par_country));
};
describe_city("Lahore");
describe_city("Karachi");
describe_city("Gaza", "Palestine");
