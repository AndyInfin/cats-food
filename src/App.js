import React, { Component } from 'react';
import './App.css';
import CatFood from './CatFood';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            food: [
                {
                    id: 1,
                    title: 'Нямушка',
                    subtitle: 'с фуа-гра',
                    amount: '10',
                    bonus: 'мышь в подарок',
                    extra: '',
                    weight: '0,5',
                    desc: 'Печень утки разварная с артишоками',
                    disabled: false
                },
                {
                    id: 2,
                    title: 'Нямушка',
                    subtitle: 'с рыбой',
                    amount: '40',
                    bonus: '2 мыши в подарок',
                    extra: '',
                    weight: '2',
                    desc: 'Головы щучьи с чесноком да свежайшая сёмгушка',
                    disabled: false
                },
                {
                    id: 3,
                    title: 'Нямушка',
                    subtitle: 'с курой',
                    amount: '100',
                    bonus: '5 мышей в подарок',
                    extra: 'заказчик доволен',
                    weight: '5',
                    desc: 'Филе из цыплят с трюфелями в бульоне',
                    disabled: true
                }
            ]
        }
    }

    render() {
        return (
            <div className="App">
                <header>
                    <h1>Ты сегодня покормил кота?</h1>
                </header>
                <div className="Cat-food">
                    {
                        this.state.food.map((food, index) => {
                            // console.log(food);
                            return <CatFood
                                key={index}
                                id={food.id}
                                title={food.title}
                                subtitle={food.subtitle}
                                amount={food.amount}
                                bonus={food.bonus}
                                extra={food.extra}
                                weight={food.weight}
                                description={food.desc}
                                disabled={food.disabled}
                            />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;