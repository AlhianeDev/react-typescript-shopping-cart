
export const capitalizeTitle = (title: string) => {

    return title.split(" ").map(split => {

        return split.charAt(0).toLocaleUpperCase() + split.substring(1);

    }).reduce((joinTitle, currentSplit) => {

        return joinTitle += ` ${ currentSplit }`;

    });

}

export default capitalizeTitle;
