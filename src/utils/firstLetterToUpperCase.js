const firstLetterToUpperCase = (string) => {
    let trimedString = string.trim();
    let responseString = trimedString.substring(0,1).toUpperCase() + trimedString.slice(1)

    return responseString;
}

export default firstLetterToUpperCase;