import React from 'react';
import { Button, Paper, Typography } from '@material-ui/core';
import styles from './FullPost.module.scss';
import PostActions from '../PostActions';
import SmsIcon from '@material-ui/icons/TextsmsOutlined';
import UserIcon from '@material-ui/icons/PersonAddOutlined';
import MessageIcon from '@material-ui/icons/SmsOutlined';

const FullPost = () => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div style={{ margin: '0 auto', width: 680 }}>
        <Typography variant="h4" className={styles.title}>
          Как мы запустили первый глэмпинг в Ростовской области и вывели его в
          прибыль на следующий месяц
        </Typography>
        <div>
          <Typography>
            Задача была — привлечь гостей в будущий глэмпинг. Которого ещё и не
            было вовсе. Равно как не было и всего остального — сайта, фирменного
            стиля, живых интернет-площадок, вообще какого-нибудь медийного или
            материального бэкграунда.
          </Typography>

          <Typography>
            Не было даже конкурентов. Скажете — «как будто это что-то плохое»?
            На самом деле, не имея успешных или провальных примеров подобного
            бизнеса в области, приходится все подводные камни испытывать на
            себе. А это больно и неприятно. И желательно было всех этих преград
            избежать, так как не было времени на тестирование стратегий. Нужно
            было всё успеть до начала тёплого сезона.
          </Typography>
          <div style={{ width: 250, marginLeft: -15 }}>
            <PostActions />
          </div>
          <div className="d-flex justify-between align-center mt-40 mb-30">
            <div className={styles.userInfo}>
              <img
                src="https://leonardo.osnova.io/d82f0984-e1f1-559c-b85c-09cfb5edd5bd/-/format/webp/"
                alt="avatar"
              />
              <strong>Donnie Darko</strong>
              <span>+123</span>
            </div>
            <div>
              <Button variant="contained" className="mr-15">
                <MessageIcon />
              </Button>
              <Button variant="contained">
                <UserIcon />
                <strong className="ml-10">Подписаться</strong>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default FullPost;
