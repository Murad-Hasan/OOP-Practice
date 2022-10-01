class User {
    constructor(firstName, lastName, userHobbies) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userHobbies = userHobbies;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Admin extends User {
    setPassword = (password) => {
        this.password = password;
    }
}

const John = new User('John', 'Doe', ['reading', 'swimming']);
console.log("user1", John)

const Murad = new Admin('Murad', 'Hasan', ['programming']);
console.log("admin1", Murad)

