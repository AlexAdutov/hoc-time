import PropTypes from 'prop-types';

// Компонент для отображения даты и времени
export const DateTime = (props) => {
    return <p className='date'>{props.date}</p>;
};

// Указываем типы ожидаемых свойств
DateTime.propTypes = {
    // Строка, представляющая дату и время (обязательное свойство)
    date: PropTypes.string.isRequired,
};