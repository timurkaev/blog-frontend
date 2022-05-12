import React from 'react';
import MainLayout from '../layouts/MainLayout';
import {
  Paper,
  TableBody,
  TableHead,
  TableRow,
  Tab,
  Table,
  TableCell,
  Tabs,
  Typography,
  Button,
} from '@material-ui/core';
import FollowButton from '../components/FollowButton';
import CheckIcon from '@material-ui/icons/CheckOutlined';

export default function Home() {
  return (
    // @ts-ignore
    <MainLayout>
      <Paper className="pl-20 pt-20 pr-20 mb-20" elevation={0}>
        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
          Рейтинг сообществ и блогов
        </Typography>
        <Typography style={{ fontSize: 15 }}>
          Десять лучших авторов и комментаторов, а так же администраторы первых
          десяти сообществ из рейтинга получат Plus аккаунт на месяц
        </Typography>
        <Tabs
          className="mt-20"
          value={0}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Август" />
          <Tab label="За 3 месяца" />
          <Tab label="За всё время" />
        </Tabs>
      </Paper>

      <Paper elevation={0}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Имя пользователя</TableCell>
              <TableCell align="right">Рейтинг</TableCell>
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <span className="mr-15">1</span>
                Вася пупкин
              </TableCell>
              <TableCell align="right">240</TableCell>
              <TableCell align="right">
                <FollowButton />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                <span className="mr-15">1</span>
                Вася пупкин
              </TableCell>
              <TableCell align="right">240</TableCell>
              <TableCell align="right">
                <FollowButton />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </MainLayout>
  );
}
