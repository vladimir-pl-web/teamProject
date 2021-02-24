import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams, withRouter} from 'react-router-dom';
import {SingleCardType} from '../../api/api';
import {getSinglePack, sendGrade} from '../../redux/reducers/singleCard';
import {RootStateType} from '../../redux/store';
import classes from './learn.module.scss'
import {Box, Button, ButtonGroup, Grid, Paper, Typography} from '@material-ui/core';

const Learn = () => {
    const {id} = useParams<{ id: string }>();
    const isAuthorised = useSelector<RootStateType, boolean>((state) => state.profile.isAuthSuccess)
    useEffect(() => {
        !isAuthorised && history.push('/login');
        id && dispatch(getSinglePack(id));
    }, []);
    const dispatch = useDispatch()
    const cardPack = useSelector<RootStateType, Array<SingleCardType>>((state) => state.singlePack.card)
    const isLoading = useSelector<RootStateType, boolean>((state) => state.singlePack.loading)
    const [isAnswered, setIsAnswered] = useState(false)

    const history = useHistory();
    const currentCard = cardPack[0];

    const updateGrade = (grade: number) => {
        dispatch(sendGrade(currentCard._id, grade))
    }

    const onclickHandler = (grade: number) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        updateGrade(grade)
    }
    return (
        <div className={classes.Learn}>
            <Paper elevation={3} style={{height:'400px', width:'800px'}}>
                <Box >
                    <Grid spacing={9} container direction={'column'} justify={'space-between'}>
                        <Grid item>
                            <Typography gutterBottom
                                        variant="h3">{currentCard ? currentCard.question : 'First choose Pack'}
                            </Typography>
                            {currentCard &&
                            <Button variant="contained" color="primary"
                                    onClick={() => setIsAnswered(true)}>Answered</Button>}
                        </Grid>
                            {isAnswered && <>
                            <Grid item>
                                <Typography gutterBottom variant="h6">{currentCard.answer}</Typography>
                            </Grid>
                                <Grid item>
                                    <ButtonGroup variant="contained" size={'large'}>
                                        <Button onClick={onclickHandler(1)} component={'span'}>Didn't know</Button>
                                        <Button onClick={onclickHandler(2)}>Forgot</Button>
                                        <Button onClick={onclickHandler(3)}>Long thought</Button>
                                        <Button onClick={onclickHandler(4)}>Confused</Button>
                                        <Button onClick={onclickHandler(5)}>Knew</Button>
                                    </ButtonGroup>
                                </Grid>
                            </>}
                    </Grid>
                </Box>
            </Paper>
        </div>
    );
}
export default withRouter(Learn)