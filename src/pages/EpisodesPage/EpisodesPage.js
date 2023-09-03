import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Pagination} from "@mui/material";

import {Episodes} from "../../components/EpisodesContainer";

const EpisodesPage = () => {
    const [query, setQuery] = useSearchParams();
    const {pages} = useSelector(state => state.episodes);

    return (
        <div>
            Episodes
            <Episodes/>
            <Pagination
                count={pages}
                defaultPage={+query.get('page')}
                variant="outlined"
                shape="rounded"
                onChange={(e, page) => setQuery({page: page.toString()})}
                style={{display: 'flex', justifyContent: 'center', margin: '15px'}}
            />
        </div>
    )

}

export {EpisodesPage};
