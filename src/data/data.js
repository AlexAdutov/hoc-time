import moment from 'moment';

export const data = [
    {
        id: '1',
        url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
        date: moment()
            .subtract(1, 'minutes')
            .format('YYYY-MM-DD HH:mm:ss')
    },
    {
        id: '2',
        url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
        date: moment(new Date())
            .subtract(30, 'minutes')
            .format('YYYY-MM-DD HH:mm:ss')
            .toString(),
    },
    {
        id: '3',
        url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
        date: moment(new Date())
            .subtract(23, 'hours')
            .format('YYYY-MM-DD HH:mm:ss')
            .toString(),
    },
    {
        id: '4',
        url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
        date: moment(new Date())
            .subtract(26, 'hours')
            .format('YYYY-MM-DD HH:mm:ss')
            .toString(),
    },
    {
        id: '5',
        url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
        date: moment(new Date())
            .subtract(1, 'months')
            .format('YYYY-MM-DD HH:mm:ss')
            .toString(),
    },
    {
        id: '6',
        url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
        date: moment(new Date())
        .subtract(3, 'years')
        .format('YYYY-MM-DD HH:mm:ss')
        .toString(),
    },
];
