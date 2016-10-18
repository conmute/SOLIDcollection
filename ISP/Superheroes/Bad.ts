class BeetleGuy {
    fuclimb(): void {
        alert('My spider-sense is tingling.');
    }
    deflect(): void {
        alert('My wings are a shield of steel.');
    }
}

class HorseflyWoman {
    climb() {
        alert('My spider-sense is tingling.');
    }
    fly() {
        alert('Is it a bird? Is it a plane?');
    }
}

class WunderWaffleMan implements BeetleGuy, HorseflyWoman {
    climb: () => void; // But i don't want to implement this?...
    deflect: () => void;
    fly: () => void;
    fuclimb: () => void; // and this...
}
