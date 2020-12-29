import React from 'react';
import {Card,CardHeader,CardContent,Typography} from '@material-ui/core';
import {Doughnut} from 'react-chartjs-2';
import useStyles from './styles';
import useTransaction from '../../useTransactions';

const Details = ({title}) => {
    const trackerUI = useStyles();
    const {total,chartData} = useTransaction(title);
    return (
        <Card className={(title === 'Income' && trackerUI.income) || trackerUI.expense} >
            <CardHeader title={title} />
            <CardContent>
                <Typography variant='h5' >GH{total}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    )
}

export default Details
