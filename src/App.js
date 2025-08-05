import './app.css';

import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import FilterBox from './components/FilterBox/FilterBox';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main">
                <ItemListContainer />
                <FilterBox />
            </div>
        </div>
    );
}

export default App;
