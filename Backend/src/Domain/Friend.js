
export const Friend = ({ firstName, lastName, birthDate, mobile, email, beruf, verdienst, freelancer, contracts, summary }) => {

    if (!firstName || typeof firstName !== "string" || firstName.length === 0) {
        throw new Error("the Firstname is Required and must be a String")
    }
    if (!lastName || typeof lastName !== "string" || lastName.length === 0) {
        throw new Error("the lastName is Required and must be a String")
    }
    if (!mobile || typeof mobile !== "number" || mobile.length === 0) {
        throw new Error("the mobile is Required and must be a number")
    }
    if (!email || typeof email !== "string" || email.length === 0) {
        throw new Error("the email is Required and mus be a String")
    }
    return makeFriend(firstName, lastName, birthDate, mobile, email, beruf, verdienst, freelancer, contracts, summary)
}




const makeFriend = (firstName, lastName, birthDate, mobile, email, beruf, verdienst, freelancer, contracts, summary) => {
    return {
        id: Date.now(),
        firstName,
        lastName,
        birthDate,
        mobile,
        email,
        beruf,
        verdienst,
        freelancer,
        contracts,
        summary
    }
}