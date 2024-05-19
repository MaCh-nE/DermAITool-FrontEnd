const formatDate = (date) => {
    let ddate = date.substring(0,9);
    let time = date.substring(11,16);
    return ddate + " / " + time
}

export default formatDate ;