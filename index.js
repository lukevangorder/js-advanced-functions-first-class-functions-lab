// Code your solution in this file!
const fd = function(drivers) {
    return drivers.slice(0,1);
}

const ld = function(drivers) {
    return [drivers.size-2 , drivers.size-1];
}

const selectingDrivers = [fd, ld];

function createFareMultiplier(mult) {
    return function(fare) {
        return fare * mult;
    }
}

const df = function(fare) {
    return createFareMultiplier(2)(fare);
}