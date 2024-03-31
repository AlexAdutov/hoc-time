import PropTypes from 'prop-types';
import { Video } from './Video';

// Компонент VideoList для отображения списка видео
export const VideoList = (props) => {
    return props.list.map((item) => <Video url={item.url} date={item.date} key={item.id}/>);
};

// Указываем типы ожидаемых свойств
VideoList.propTypes = {
    // Список видео (обязательное свойство), массив объектов
    list: PropTypes.array.isRequired,
};

