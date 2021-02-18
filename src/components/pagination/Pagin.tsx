import React, {ChangeEvent, useEffect, useState} from "react";
import Pagination from "react-js-pagination";
import styles from "./pagination.module.css"
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";
import {setActivePageAC, setPaginationAC} from "../../redux/reducers/pagination";

export const Pagin = () => {

    const activePage = useSelector<RootStateType, number>(state => state.pagination.activePage);
    const pageRangeDisplayed = useSelector<RootStateType, number>(state => state.pagination.pageRangeDisplayed);
    const itemsCountPerPage = useSelector<RootStateType, number>(state => state.pagination.itemsCountPerPage);
    const totalItemsCount = useSelector<RootStateType, number>(state => state.pagination.totalItemsCount);

    const dispatch = useDispatch();

    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        if (isChanged) {
            //getCardColods()
            setIsChanged(false);  
        }
    }, [isChanged, setIsChanged])

    const handlePageChange = (pageNumber: number) => {
       dispatch(setActivePageAC(pageNumber))
        setIsChanged(true)
    }

    const changedPagination = (e: ChangeEvent<HTMLSelectElement>) => {
        const itemsCountPerPage = +e.currentTarget.value;
        dispatch(setPaginationAC(itemsCountPerPage))
    }


    return <React.Fragment>
        <div className={styles.bar}>
            <Pagination
                activePage={activePage}
                itemsCountPerPage={itemsCountPerPage}
                totalItemsCount={totalItemsCount}
                pageRangeDisplayed={pageRangeDisplayed}
                onChange={handlePageChange}
            />
        </div>
        <div className={styles.pagePortion}>Pagination
            <select value={itemsCountPerPage} onChange={changedPagination}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="50">50</option>
            </select>
        </div>
    </React.Fragment>


}