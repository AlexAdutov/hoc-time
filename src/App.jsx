import { VideoList } from './components/VideoList'; // Импортируем компонент VideoList из файла VideoList.js
import { data } from './data/data'; // Импортируем данные из файла data.js

export default function App() {
    return <VideoList list={data} />; // Возвращаем компонент VideoList, передавая ему список видео из данных data
}