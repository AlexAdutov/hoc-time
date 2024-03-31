// Этот HOC (Higher Order Component) принимает компонент (Component) и возвращает новый компонент, который оборачивает переданный компонент
export const WithCorectData = (Component) => {
    return function hocComponent(props) {
        // Получаем текущую дату и дату из свойства props.date
        const now = new Date(),
            date = new Date(props.date);
        
        // Вычисляем разницу во времени между текущей датой и датой из props.date в часах
        const hrs = ((now - date) / 1000 / 60 / 60).toFixed(1);
        let result;

        // Определяем разницу во времени и формируем строку с соответствующим временем
        if (hrs > 1) result = '5 часов назад';
        if (hrs > 24 && hrs < 48) result = '1 день назад';
        if (hrs > 48) result = `${(hrs / 24).toFixed()} дней назад`;
        if (hrs < 1) result = '12 минут назад';

        // Возвращаем компонент Component, передавая ему новую дату в свойстве date
        return <Component date={result} />;
    };
};
