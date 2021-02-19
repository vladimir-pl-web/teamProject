import { Button, Grid, Paper, Slider, Switch, Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles } from '@material-ui/core'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardsType } from '../../api/api'
import { addCards, deleteCards, getAllCards, updateCards } from '../../redux/reducers/cards'
import { RootStateType } from '../../redux/store'
import DeleteIcon from "@material-ui/icons/Delete";
import Preloader from '../preloader/spinner'
import classes from './cards.module.scss'
import { useHistory } from 'react-router-dom'
import { Pagin } from '../pagination/Pagin'
import Icon from '@material-ui/core/Icon'

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
      transform: 'rotate(90deg)',
      background: 'grey',
      borderRadius: '40%'
    },

  }))(Switch);

  const styles = (theme: { spacing: { unit: number }; palette: { background: { default: any } } }) => ({
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
  });

  const isLoading = useSelector<RootStateType, boolean>((state) => state.cards.loading)
  const cards = useSelector<RootStateType, Array<CardsType>>((state) => state.cards.cards)
  const min = useSelector<RootStateType, number>((state) => state.cards.min)
  const max = useSelector<RootStateType, number>((state) => state.cards.max);
  const isAuthorised = useSelector<RootStateType, boolean>((state) => state.profile.isAuthSuccess)
  const myId= useSelector<RootStateType, string>((state) => state.profile.user._id)
  const itemsCountPerPage = useSelector<RootStateType, number>(state => state.pagination.itemsCountPerPage);
  console.log(myId);

  const history = useHistory();
  const [sort, setSort] = useState<boolean>(false)
  const [values, setValues] = useState<Array<number>>([min, max])

  const dispatch = useDispatch()
  useEffect(() => {
    !isAuthorised && history.push("/login");
    dispatch(getAllCards({ pageCount: itemsCountPerPage.toString() }));
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSort(e.currentTarget.checked)
    let res = sort === true ? '0' : '1'
    dispatch(getAllCards({ sortPacks: res }));
  };
  const onSliderChange = (e: ChangeEvent<{}>, newValue: number | number[]) => {
    setValues(newValue as number[])
  };
  const onCountSort = () => {

    dispatch(getAllCards({min: values[0].toString(), max: values[1].toString() }));
  }
  const deleteHandler = (id: string) => {
    dispatch(deleteCards(id));
  }
  const onPackAdd = () => {
    dispatch(addCards());
    
  }
  const onUpdated = (id:string) => {
    dispatch(updateCards(id));
  }
  const rows = cards.map((el) => {
    return (
      <TableRow key={el._id}>
        <CustomTableCell component="th" scope="row">
          {el.name}
        </CustomTableCell>
        <CustomTableCell align="right">{el.cardsCount}</CustomTableCell>
        <CustomTableCell align="right">{el.user_id}</CustomTableCell>
        <CustomTableCell align="right">{el.path}</CustomTableCell>
        <CustomTableCell align="right">
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            disabled={myId !== el.user_id}
            onClick={() => deleteHandler(el._id)}
          >
            Delete
            <DeleteIcon className={classes.rightIcon} />
          </Button>
        </CustomTableCell>
        <CustomTableCell align="right">
          <Button
            disabled={myId !== el.user_id}
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={()=>onUpdated(el._id)}
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
          <Grid
            container
            xs={6}
            direction="row"
            justify="space-between"
            style={{ width: "100%", margin: "20px", flexBasis: "0" }}
          >
            <Grid item xs={3} style={{ color: "yellow" }}>
              Тут будет поиск
            </Grid>
            <Grid item xs={4} style={{color:'yellow'}}>
              put your count range
              <Slider
                color="primary"
                value={values}
                max={max}
                min={min}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                onChange={onSliderChange}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={onCountSort}
              >
                <Icon className={classes.rightIcon}>sort</Icon>
                by count
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                onClick={onPackAdd}
              >
                <Icon className={classes.rightIcon} color="primary">
                  add
                </Icon>
                pack
              </Button>
            </Grid>
          </Grid>

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