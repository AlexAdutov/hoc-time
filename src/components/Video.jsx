import PropTypes from 'prop-types';
import { DateTime } from './DateTime';
import { WithCorectData } from './WithCorectData';

// Создаем компонент DateTimePretty с использованием компонента WithCorectData
export const DateTimePretty = WithCorectData(DateTime);

// Компонент Video для отображения видео с датой
export const Video = (props) => {
    return (
        <div className='video'>
            <iframe
                src={props.url}
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
            ></iframe>
            {/* Используем DateTimePretty для отображения даты с коррекцией */}
            <DateTimePretty date={props.date} />
        </div>
    );
};

// Указываем типы ожидаемых свойств
Video.propTypes = {
    // URL видео (обязательное свойство)
    url: PropTypes.string.isRequired,
    // Дата видео (объект, ожидаемый компонентом DateTimePretty)
    date: PropTypes.object.isRequired,
};
