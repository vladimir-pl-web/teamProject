import { Button, Paper, Switch, Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles } from '@material-ui/core'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardsType } from '../../api/api'
import { getAllCards } from '../../redux/reducers/cards'
import { RootStateType } from '../../redux/store'
import DeleteIcon from "@material-ui/icons/Delete";
import Preloader from '../preloader/spinner'
import classes from './cards.module.scss'
import { useHistory } from 'react-router-dom'
import { Pagin } from '../pagination/Pagin'

const Cards = () => {
  
const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    background: "rgba(191, 191, 191, .7)",
  },
}))(TableCell);
  const CustomSwitch = withStyles((theme) => ({
    root: {
      transform: 'rotate(90deg)'
    },
 
  }))(Switch);

// const styles = (theme: { spacing: { unit: number }; palette: { background: { default: any } } }) => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing.unit * 3,
//     overflowX: "auto",
//   },
//   table: {
//     minWidth: 700,
//   },
//   row: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.background.default,
//     },
//   },
//   });
  
  const isLoading = useSelector<RootStateType, boolean>((state) => state.cards.loading)
  const cards = useSelector<RootStateType, Array<CardsType>>((state) => state.cards.cards)
  const isAuthorised = useSelector<RootStateType, boolean>((state) => state.profile.isAuthSuccess)
   const itemsCountPerPage = useSelector<RootStateType, number>(state => state.pagination.itemsCountPerPage);
  const history = useHistory();
const [sort, setSort]=useState<boolean>(false)
  const dispatch = useDispatch()
  useEffect(() => {
// !isAuthorised && history.push("/login");
  dispatch(getAllCards({ pageCount: itemsCountPerPage.toString() }));
  }, [])
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSort(e.currentTarget.checked)
    let res = sort === true ? '0' : '1'
    dispatch(getAllCards({sortPacks: res }));
  };
  const rows = cards.map((el) => {
    return (
      <TableRow key={el._id}>
        <CustomTableCell component="th" scope="row">
          {el.user_name}
        </CustomTableCell>
        <CustomTableCell align="right">{el.cardsCount}</CustomTableCell>
        <CustomTableCell align="right">{el.updated}</CustomTableCell>
        <CustomTableCell align="right">{el.path}</CustomTableCell>
        <CustomTableCell align="right">
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Delete
            <DeleteIcon className={classes.rightIcon} />
          </Button>
        </CustomTableCell>
        <CustomTableCell align="right">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            update
          </Button>
        </CustomTableCell>
        <CustomTableCell align="right">
          <Button variant="contained" component="span">
            Get Cards
          </Button>
        </CustomTableCell>
      </TableRow>
    );
  })
  return (
    <div className={classes.Cards}>
      <Typography gutterBottom variant="h3" component="h4">
        Cards
      </Typography>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead style={{ borderRadius: "3px" }}>
                <TableRow>
                  <CustomTableCell>
                    <CustomSwitch checked={sort} onChange={handleChange} /> Name
                  </CustomTableCell>
                  <CustomTableCell align="right">Card Count</CustomTableCell>
                  <CustomTableCell align="right">Updated</CustomTableCell>
                  <CustomTableCell align="right">Url</CustomTableCell>
                  <CustomTableCell align="right">Delete</CustomTableCell>
                  <CustomTableCell align="right">Update</CustomTableCell>
                  <CustomTableCell align="right">Get Cards</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>{rows}</TableBody>
            </Table>
          </Paper>

          <Pagin />
        </>
      )}
    </div>
  );
}
export default Cards