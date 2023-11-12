import { useEffect } from "react";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const GetTitlePage = (title) => {

    useEffect(() => {

        document.title = `${title}`

    }, [title]);

    return null;
}

export default GetTitlePage;