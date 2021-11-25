export const AZorder = (array) => {
    const recipes = array.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    })
    return recipes
}

export const ZAorder = (array) => {
    const recipes = array.sort((a, b) => {
        if (a.title > b.title) {
            return -1;
        }
        if (a.title < b.title) {
            return 1;
        }
        return 0;
    })
    return recipes
}

export const better = (array) => {
    const recipes = array.sort((a, b) => {
        return (parseInt(b.score) - parseInt(a.score))
    })
    return recipes
}

export const worst = (array) => {
    const recipes = array.sort((a, b) => {
        return (parseInt(a.score) - parseInt(b.score))
    })
    return recipes
}